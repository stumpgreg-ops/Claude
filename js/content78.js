/* SOL Labyrinth — v5.15 expansion: Grade 10 LONG packs (Virginia G10, 10.x codes only).
 * Thirteen original packs (390–520 words, poems 22–28 lines, paired texts 200–260 words each)
 * on bridges and engineering, beekeeping, river cleanups, and a family restaurant.
 * Original text only. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────── 1 · Literary (level 2) · a family restaurant ───────── */
    {
      id: "g10-rl-c78-second-stock",
      family: "G10",
      title: "Second Stock",
      kind: "Literary · 10.RL",
      blurb: "A sprained wrist puts Minh in front of his family's stockpot at five in the morning.",
      level: 2,
      passage:
        "<p>" + N(1) + "At five in the morning the Ngoc Lan Noodle House was dark except for the blue ring of the stockpot burner, and Minh stood in front of it holding a ladle as if it might bite him. " +
        N(2) + "His father sat on an overturned milk crate by the dish station, his right wrist wrapped in a beige brace, his left hand holding a mug of tea he was not drinking. " +
        N(3) + "\"You will do it,\" he had said the night before, after the clinic visit, in the voice he used for things that were already decided.</p>" +
        "<p>" + N(4) + "Minh had grown up in the restaurant without ever wanting to belong to it. " +
        N(5) + "He had done homework at the corner table, folded napkins during the lunch rush, and learned to answer the phone in two languages, but the kitchen had always seemed like his father's private country, with borders Minh had no wish to cross. " +
        N(6) + "Now his father was pointing at the bones.</p>" +
        "<p>" + N(7) + "\"Char the onions first,\" his father said. " +
        N(8) + "\"Not black. " +
        N(9) + "Darker than you think, lighter than you fear.\" " +
        N(10) + "Minh held the onions over the flame with tongs and turned them until the skins blistered, then looked back for approval. " +
        N(11) + "His father only shrugged, which in their family could mean almost anything.</p>" +
        "<p>" + N(12) + "The morning went on like that. " +
        N(13) + "Minh wanted numbers, and his father gave him signs. " +
        N(14) + "Skim the pot until the foam stops looking angry. " +
        N(15) + "Add the star anise when the kitchen smells like rain on a hot sidewalk. " +
        N(16) + "Taste, then wait, then taste again, because broth tells the truth slowly. " +
        N(17) + "Twice Minh reached for the battered notebook on the shelf, the one his grandmother had started in Da Nang, and twice he found only a list of ingredients with no amounts at all, as if the women who wrote it had simply trusted the next cook to know.</p>" +
        "<p>" + N(18) + "By ten-thirty the stock had gone from cloudy to clear, a deep amber that caught the light from the high window. " +
        N(19) + "Minh's shirt was damp, his eyes stung from the onions, and he realized he had not checked his phone in five hours. " +
        N(20) + "His father stood, limped to the stove, and lifted a spoonful with his good hand. " +
        N(21) + "He tasted it, closed his eyes, and said nothing for so long that Minh began composing apologies. " +
        N(22) + "\"Again tomorrow,\" his father said at last, and sat back down.</p>" +
        "<p>" + N(23) + "At noon Mrs. Adeyemi, who had eaten the same bowl at the same window table every Thursday for eleven years, finished her soup and waved Minh over. " +
        N(24) + "He waited for her to notice that something was different, that a new cook had been in the kitchen. " +
        N(25) + "\"Perfect,\" she said. \"It tastes exactly the way it always does.\" " +
        N(26) + "For a moment Minh felt cheated, as if his whole morning had vanished into her spoon. " +
        N(27) + "Then he looked at his father on the milk crate, smiling into his cold tea, and understood that disappearing had been the point.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme developed across Minh's morning at the stockpot?",
          choices: [
            { letter: "A", text: "Carrying on a family craft can mean letting one's own effort go unseen." },
            { letter: "B", text: "Young people resent family businesses until they are paid fairly." },
            { letter: "C", text: "Written recipes are more reliable than a cook's memory." },
            { letter: "D", text: "Loyal customers rarely notice the work done in a kitchen." }
          ],
          correct: "A"
        },
        {
          id: "resolve",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the moment when Minh's inner conflict about the kitchen is resolved?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 27" },
            { letter: "C", text: "Sentence 22" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "B"
        },
        {
          id: "before",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 4 and 5 characterize Minh, before his father's injury, as someone who —",
          choices: [
            { letter: "A", text: "secretly hoped to take over the restaurant" },
            { letter: "B", text: "refused to help with any restaurant chores" },
            { letter: "C", text: "helped out but kept a deliberate distance from the kitchen" },
            { letter: "D", text: "felt more comfortable cooking than talking to customers" }
          ],
          correct: "C"
        },
        {
          id: "darker",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "The father's instruction in sentence 9, darker than you think, lighter than you fear, suggests that charring the onions —",
          choices: [
            { letter: "A", text: "should be skipped when the cook is nervous" },
            { letter: "B", text: "must follow the exact time written in the notebook" },
            { letter: "C", text: "matters less than the flavor of the bones" },
            { letter: "D", text: "depends on judgment that falls between caution and excess" }
          ],
          correct: "D"
        },
        {
          id: "absorbed",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "The details in sentence 19 — the damp shirt, the stinging eyes, the unchecked phone — mainly suggest that Minh has —",
          choices: [
            { letter: "A", text: "grown too tired to finish the broth" },
            { letter: "B", text: "decided he never wants to cook again" },
            { letter: "C", text: "become fully absorbed in the work" },
            { letter: "D", text: "been waiting for a message from a friend" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Mrs. Adeyemi's comment in sentence 25 is ironic mainly because —",
          choices: [
            { letter: "A", text: "she has never actually liked the restaurant's soup" },
            { letter: "B", text: "Minh wanted the change noticed, yet sameness is the highest praise" },
            { letter: "C", text: "the broth Minh made is noticeably different from his father's" },
            { letter: "D", text: "she thinks Minh's father cooked it while he was out" }
          ],
          correct: "B"
        },
        {
          id: "notebook",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.2",
          stem: "The author includes the grandmother's notebook in sentence 17 mainly to —",
          choices: [
            { letter: "A", text: "show that the recipe has always passed through experience, not measurements" },
            { letter: "B", text: "explain why Minh's father refuses to cook with his left hand" },
            { letter: "C", text: "reveal that the family has lost the most important part of the recipe" },
            { letter: "D", text: "introduce a conflict between Minh and his grandmother" }
          ],
          correct: "A"
        },
        {
          id: "composing",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 21, the word composing most nearly means —",
          choices: [
            { letter: "A", text: "writing down on paper" },
            { letter: "B", text: "calming himself down" },
            { letter: "C", text: "arranging music for" },
            { letter: "D", text: "preparing in his mind" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── 2 · Literary (level 3) · bridges and engineering ───────── */
    {
      id: "g10-rl-c78-load-rating",
      family: "G10",
      title: "Load Rating",
      kind: "Literary · 10.RL",
      blurb: "Akosua spends a summer day inspecting an old truss bridge with her aunt, and learns what the clipboard costs.",
      level: 3,
      passage:
        "<p>" + N(1) + "Akosua had pictured bridge inspection as a kind of heroic climbing, ropes and hard hats and wind, so the first hour under the Harlan Creek Bridge disappointed her. " +
        N(2) + "Her aunt Efua lay on her back on a strip of gravel, shining a flashlight up at a steel plate the size of a cafeteria tray, and said nothing at all. " +
        N(3) + "Then she reached up with a small hammer and tapped, once, twice, listening the way Akosua's piano teacher listened to a chord.</p>" +
        "<p>" + N(4) + "\"Section loss,\" Aunt Efua said finally, and wrote something on her clipboard. " +
        N(5) + "When Akosua asked, she explained without looking away from the steel: rust had eaten part of the plate's thickness, so the metal that was supposed to carry the load was simply no longer there. " +
        N(6) + "\"It looks solid because the rust takes up more room than the steel did,\" she said. \"That's the trick it plays on you.\"</p>" +
        "<p>" + N(7) + "Akosua measured while her aunt calculated, and by noon the numbers had settled into a verdict. " +
        N(8) + "The bridge could stay open, but only for vehicles under ten tons. " +
        N(9) + "That meant no loaded grain trucks, no fire engine from the county station, and no full school bus; the children on Cady Road would ride a smaller van that took a twenty-minute detour.</p>" +
        "<p>" + N(10) + "Mr. Varga, whose farm sat on the far bank, walked down while they were packing the truck. " +
        N(11) + "He was a polite man with hands like cracked leather, and he did not argue so much as plead. " +
        N(12) + "His grandfather had helped paint this bridge in 1952, he said, and it had carried tractors and hay wagons and a parade every Fourth of July since. " +
        N(13) + "\"It's held up longer than any of us,\" he said. \"Doesn't that count for something?\" " +
        N(14) + "Aunt Efua answered gently but did not change a single number, and Akosua watched his face close like a gate.</p>" +
        "<p>" + N(15) + "On the drive back to the district office, Akosua finally said what she had been thinking. " +
        N(16) + "\"You could have given him a little room. " +
        N(17) + "He loves that bridge.\" " +
        N(18) + "Her aunt was quiet for almost a mile, long enough that Akosua thought she had been foolish to speak.</p>" +
        "<p>" + N(19) + "\"Everybody who drives over it loves that bridge,\" Aunt Efua said at last. " +
        N(20) + "\"That's exactly why somebody has to look at it like they don't.\" " +
        N(21) + "She told Akosua about her first year on the job, when an older inspector had rounded a rating up as a favor to a town council, and how she had spent the next winter lying awake every time the forecast called for ice. " +
        N(22) + "\"The steel doesn't care about anybody's grandfather,\" she said. \"So I have to care in a way the steel understands.\"</p>" +
        "<p>" + N(23) + "That night Akosua typed up the field notes, as her aunt had asked, and found that the dry phrases had changed for her. " +
        N(24) + "Section loss at gusset plate U3 no longer read like a cold sentence. " +
        N(25) + "It read like a promise somebody was keeping to a school van full of children who would never know her aunt's name.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by Aunt Efua's choices at the Harlan Creek Bridge?",
          choices: [
            { letter: "A", text: "Old structures should be replaced rather than repaired." },
            { letter: "B", text: "Experts should not explain their work to the public." },
            { letter: "C", text: "Honest judgment can be a deeper form of care than kindness." },
            { letter: "D", text: "Family traditions matter more than official rules." }
          ],
          correct: "C"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The central conflict of Load Rating is best described as a tension between —",
          choices: [
            { letter: "A", text: "affection for the bridge and the facts about its condition" },
            { letter: "B", text: "Akosua's fear of heights and her wish to help her aunt" },
            { letter: "C", text: "Mr. Varga and the county fire department" },
            { letter: "D", text: "the district office and the school bus drivers" }
          ],
          correct: "A"
        },
        {
          id: "varga",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 11 through 13 characterize Mr. Varga as —",
          choices: [
            { letter: "A", text: "angry and threatening toward the inspectors" },
            { letter: "B", text: "respectful but deeply attached to the bridge's history" },
            { letter: "C", text: "confused about what the inspection involves" },
            { letter: "D", text: "eager to have the old bridge torn down" }
          ],
          correct: "B"
        },
        {
          id: "gate",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 14, the comparison of Mr. Varga's face closing like a gate suggests that he —",
          choices: [
            { letter: "A", text: "plans to block the road to his farm" },
            { letter: "B", text: "feels relieved that the bridge will stay open" },
            { letter: "C", text: "is trying hard not to laugh at the inspectors" },
            { letter: "D", text: "shuts himself off emotionally from the conversation" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "According to Aunt Efua in sentences 19 and 20, which situation is ironic?",
          choices: [
            { letter: "A", text: "The people who love the bridge most are the least able to judge it fairly." },
            { letter: "B", text: "The bridge looks newer than it is because it was painted in 1952." },
            { letter: "C", text: "The inspector dislikes old bridges but chose to work on them." },
            { letter: "D", text: "The school van is heavier than the grain trucks it replaces." }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "The final two sentences (24 and 25) mainly serve to —",
          choices: [
            { letter: "A", text: "reveal that Akosua plans to become an inspector" },
            { letter: "B", text: "show how Akosua's view of the technical language has changed" },
            { letter: "C", text: "suggest that the field notes contain an error" },
            { letter: "D", text: "explain how the bridge will finally be repaired" }
          ],
          correct: "B"
        },
        {
          id: "sectionloss",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Based on Aunt Efua's explanation in sentences 5 and 6, the term section loss refers to —",
          choices: [
            { letter: "A", text: "a piece of the bridge that fell into the creek" },
            { letter: "B", text: "a missing page from an earlier inspection report" },
            { letter: "C", text: "steel thickness that rust has quietly eaten away" },
            { letter: "D", text: "a lane of traffic that must be closed for repairs" }
          ],
          correct: "C"
        },
        {
          id: "plead",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "In sentence 11, the narrator says Mr. Varga did not argue so much as plead. Compared with argue, the word plead suggests that he —",
          choices: [
            { letter: "A", text: "spoke with expert technical knowledge" },
            { letter: "B", text: "raised his voice to intimidate Efua" },
            { letter: "C", text: "was joking to lighten the mood" },
            { letter: "D", text: "made an emotional appeal from a position of need" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── 3 · Literary (level 1) · beekeeping ───────── */
    {
      id: "g10-rl-c78-apricot-swarm",
      family: "G10",
      title: "The Apricot Swarm",
      kind: "Literary · 10.RL",
      blurb: "Defne's grandfather cannot climb anymore, and a swarm of bees has chosen the neighbor's tree.",
      level: 1,
      passage:
        "<p>" + N(1) + "The swarm left the third hive just after lunch. " +
        N(2) + "Defne heard it before she saw it, a roar like a crowd in a far-off stadium, and when she ran into the yard the air above her grandfather's hives was full of spinning bees. " +
        N(3) + "Thousands of them rose, circled, and drifted over the stone wall to settle on a low branch of Mrs. Arslan's apricot tree. " +
        N(4) + "Within ten minutes they had gathered into a hanging cluster the size of a football, brown and gold and gently humming.</p>" +
        "<p>" + N(5) + "Her grandfather Selim came out of the house slowly, leaning on his cane. " +
        N(6) + "For forty years he had kept bees on this hillside, but his knees had grown stiff, and the ladder leaning against the shed was no longer his friend. " +
        N(7) + "He looked at the swarm, then at Defne, then at the empty wooden box by the door. " +
        N(8) + "\"If we wait, they will find a hollow tree in the forest, and we will lose them,\" he said. " +
        N(9) + "\"You will have to be my legs today.\"</p>" +
        "<p>" + N(10) + "Defne's stomach dropped. " +
        N(11) + "She had helped with the hives for two summers, but always from a careful distance, handing her grandfather tools and holding the smoker while he did the real work. " +
        N(12) + "A whole cloud of bees seemed different from a few on a frame. " +
        N(13) + "Her grandfather saw her face and laughed softly. " +
        N(14) + "\"Swarming bees are the gentlest bees in the world,\" he told her. " +
        N(15) + "\"They have filled their stomachs with honey for the journey, and they have no home to defend. " +
        N(16) + "Right now they are only travelers resting on a branch.\"</p>" +
        "<p>" + N(17) + "So Defne put on the veil, climbed the ladder, and held the box beneath the cluster while her grandfather called up instructions from the grass. " +
        N(18) + "On his word, she gave the branch one sharp shake. " +
        N(19) + "The cluster dropped into the box with a soft, heavy thump, like a sack of flour, and the humming rose around her. " +
        N(20) + "A few bees landed on her sleeves and walked about as if reading the fabric. " +
        N(21) + "None of them stung. " +
        N(22) + "She climbed down with her heart pounding and set the box on a sheet below the tree, tilting the lid open the way her grandfather showed her.</p>" +
        "<p>" + N(23) + "Then came the part she would remember longest. " +
        N(24) + "The bees still in the air began landing on the sheet and marching into the box in a steady stream, hundreds at a time, fanning their wings at the entrance. " +
        N(25) + "\"They are calling the others,\" her grandfather said. \"The queen is inside. They know where home is now.\" " +
        N(26) + "Defne sat down beside him in the grass, too excited to speak, and watched the bees pour in like a crowd going home after a festival. " +
        N(27) + "Mrs. Arslan leaned over the wall and asked whether she should be worried. " +
        N(28) + "\"Not at all,\" Defne said, sounding, she realized with surprise, exactly like her grandfather.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of The Apricot Swarm?",
          choices: [
            { letter: "A", text: "Bees are too dangerous for young people to handle." },
            { letter: "B", text: "Neighbors should keep animals away from each other's yards." },
            { letter: "C", text: "Older people should not give up their hobbies." },
            { letter: "D", text: "Understanding can turn fear into confidence." }
          ],
          correct: "D"
        },
        {
          id: "problem",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "What problem sets the main action of the story in motion?",
          choices: [
            { letter: "A", text: "A swarm must be caught before it leaves, and Selim cannot climb." },
            { letter: "B", text: "Mrs. Arslan wants the bees removed from her apricot tree." },
            { letter: "C", text: "The third hive has run out of honey for the winter." },
            { letter: "D", text: "Defne has been stung and is afraid to return to the hives." }
          ],
          correct: "A"
        },
        {
          id: "defne",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentence 11 shows that, before this day, Defne —",
          choices: [
            { letter: "A", text: "had refused to help with the bees" },
            { letter: "B", text: "helped with the hives but stayed in a supporting role" },
            { letter: "C", text: "was already more skilled than her grandfather" },
            { letter: "D", text: "had caught several swarms on her own" }
          ],
          correct: "B"
        },
        {
          id: "mood",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The details in sentences 24 through 26 mainly create a mood of —",
          choices: [
            { letter: "A", text: "lingering danger" },
            { letter: "B", text: "quiet boredom" },
            { letter: "C", text: "joyful wonder" },
            { letter: "D", text: "nervous confusion" }
          ],
          correct: "C"
        },
        {
          id: "final",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Defne's answer to Mrs. Arslan in sentence 28 is surprising to Defne mainly because —",
          choices: [
            { letter: "A", text: "she is now the calm expert reassuring someone else" },
            { letter: "B", text: "she has decided the bees belong to Mrs. Arslan" },
            { letter: "C", text: "she does not actually know whether the bees are safe" },
            { letter: "D", text: "she has never spoken to Mrs. Arslan before" }
          ],
          correct: "A"
        },
        {
          id: "explain",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The author includes Selim's explanation in sentences 14 through 16 mainly to —",
          choices: [
            { letter: "A", text: "show that Selim does not take the danger seriously" },
            { letter: "B", text: "give Defne a reason to trust the bees and act" },
            { letter: "C", text: "describe how honey is made inside the hive" },
            { letter: "D", text: "explain why the swarm left the third hive" }
          ],
          correct: "B"
        },
        {
          id: "cluster",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 4, the word cluster most nearly means —",
          choices: [
            { letter: "A", text: "a loud, angry noise" },
            { letter: "B", text: "a wooden hive box" },
            { letter: "C", text: "a tight group" },
            { letter: "D", text: "a branch of fruit" }
          ],
          correct: "C"
        },
        {
          id: "instruct",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "In sentence 17, the word instructions contains the root struct, as in structure and construct. Based on this, giving instructions most nearly means —",
          choices: [
            { letter: "A", text: "praising someone for finishing a task" },
            { letter: "B", text: "warning someone to leave a place quickly" },
            { letter: "C", text: "asking someone a series of questions" },
            { letter: "D", text: "building a plan of steps for someone to follow" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── 4 · Informational (level 2) · beekeeping ───────── */
    {
      id: "g10-ri-c78-winter-cluster",
      family: "G10",
      title: "The Warmth Inside the Hive",
      kind: "Informational · 10.RI",
      blurb: "Honeybees cannot hibernate, so how does a colony live through a frozen winter?",
      level: 2,
      passage:
        "<p>" + N(1) + "On a January morning, a beehive in a snowy field looks abandoned. " +
        N(2) + "No bees crowd the entrance, no humming drifts from the boxes, and frost may coat the lid. " +
        N(3) + "Yet inside, tens of thousands of insects are very much alive, and some of them are working harder than they did in July. " +
        N(4) + "Unlike many insects, honeybees do not hibernate or die off and leave only eggs behind. " +
        N(5) + "Instead, the colony survives winter as a single living furnace.</p>" +
        "<p><strong>Forming the cluster</strong> " + N(6) + "When the air inside the hive drops to roughly 57 degrees Fahrenheit, the bees stop moving freely across the combs and pack themselves into a tight ball called a winter cluster. " +
        N(7) + "The queen sits near the center, surrounded by workers. " +
        N(8) + "The outer layer of bees, sometimes called the mantle, presses together head-first, forming a living blanket that traps heat inside. " +
        N(9) + "As the weather grows colder, the cluster shrinks, reducing the surface through which warmth can escape.</p>" +
        "<p><strong>Making heat</strong> " + N(10) + "A bee produces heat the way a person shivers. " +
        N(11) + "It disconnects its wings from the powerful flight muscles in its thorax and then contracts those muscles rapidly, burning energy without flying anywhere. " +
        N(12) + "Through this process, called thermogenesis, the cluster can keep its core near 80 to 90 degrees even when the temperature outside is far below freezing. " +
        N(13) + "The bees on the cold outer edge do not stay there forever. " +
        N(14) + "Over the course of hours, individuals slowly trade places, moving inward to warm up while others take a turn on the edge.</p>" +
        "<p><strong>Paying for the fire</strong> " + N(15) + "All that shivering requires fuel, and the fuel is honey. " +
        N(16) + "The cluster moves slowly across the combs during the winter, eating the stores it reaches. " +
        N(17) + "In cold northern regions, a colony may need sixty pounds of honey or more to last until spring flowers bloom. " +
        N(18) + "This is why a careful beekeeper never harvests every frame in the fall. " +
        N(19) + "Some keepers \"heft\" their hives in midwinter, tilting each box slightly to judge its weight; a hive that feels light may need emergency feeding.</p>" +
        "<p><strong>The danger of a warm day</strong> " + N(20) + "Surprisingly, a mild spell can be risky. " +
        N(21) + "Bees use warm afternoons to make cleansing flights, leaving the hive to relieve themselves, which they will not do inside. " +
        N(22) + "But if the cluster spreads out during a thaw and a sudden freeze follows, bees may become separated from the honey or from one another, and small groups can chill to death only inches from food.</p>" +
        "<p>" + N(23) + "The winter cluster is a reminder that a colony is less a crowd of individuals than a single organism with thousands of bodies. " +
        N(24) + "No one bee can survive a Vermont January. " +
        N(25) + "Together, trading the cold edge for the warm center hour after hour, they keep a small summer burning in the dark.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of The Warmth Inside the Hive?",
          choices: [
            { letter: "A", text: "Beekeepers must feed their colonies every winter to keep them alive." },
            { letter: "B", text: "A colony survives winter by working together to make and conserve heat." },
            { letter: "C", text: "Honeybees are more intelligent than most other insects." },
            { letter: "D", text: "Warm winter days are the greatest threat to honeybees." }
          ],
          correct: "B"
        },
        {
          id: "honey",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Which sentence best supports the idea that a beekeeper's fall harvest affects whether bees survive the winter?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 21" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author's main purpose in writing about the winter cluster is to —",
          choices: [
            { letter: "A", text: "explain a surprising survival strategy to general readers" },
            { letter: "B", text: "persuade readers to start keeping bees of their own" },
            { letter: "C", text: "compare honeybees with insects that hibernate" },
            { letter: "D", text: "warn beekeepers about the dangers of feeding hives" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The bold headings in this article are arranged mainly to —",
          choices: [
            { letter: "A", text: "list the bees' enemies from most to least dangerous" },
            { letter: "B", text: "compare beekeeping in cold and warm regions" },
            { letter: "C", text: "follow the process from forming the cluster to its risks" },
            { letter: "D", text: "tell the history of one beekeeper's hive" }
          ],
          correct: "C"
        },
        {
          id: "furnace",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 5, the author describes the colony as a single living furnace mainly to emphasize that —",
          choices: [
            { letter: "A", text: "the hive is in danger of catching fire" },
            { letter: "B", text: "the bees' main job in winter is to produce warmth together" },
            { letter: "C", text: "only the queen is able to make heat" },
            { letter: "D", text: "beekeepers heat their hives with small stoves" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The tone of the final two sentences (24 and 25) is best described as —",
          choices: [
            { letter: "A", text: "anxious and urgent" },
            { letter: "B", text: "dry and technical" },
            { letter: "C", text: "mocking and doubtful" },
            { letter: "D", text: "admiring and reflective" }
          ],
          correct: "D"
        },
        {
          id: "thermo",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word thermogenesis in sentence 12 combines thermo-, as in thermometer, with genesis, meaning a beginning or creation. Thermogenesis most nearly means —",
          choices: [
            { letter: "A", text: "the measuring of cold air" },
            { letter: "B", text: "the storing of honey" },
            { letter: "C", text: "the production of heat" },
            { letter: "D", text: "the movement of bees" }
          ],
          correct: "C"
        },
        {
          id: "thaw",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Which detail best explains why a winter thaw can be dangerous to the colony?",
          choices: [
            { letter: "A", text: "Bees may spread out and then be stranded from food when a freeze returns." },
            { letter: "B", text: "Bees refuse to leave the hive at all until spring flowers bloom." },
            { letter: "C", text: "The queen leaves the center of the cluster during warm weather." },
            { letter: "D", text: "Beekeepers open the hives on warm days and let the heat escape." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────── 5 · Informational (level 3) · bridges and engineering ───────── */
    {
      id: "g10-ri-c78-room-to-move",
      family: "G10",
      title: "Room to Move",
      kind: "Informational · 10.RI",
      blurb: "Why a well-built bridge is designed to stretch, shrink, and slide a little every day.",
      level: 3,
      passage:
        "<p>" + N(1) + "Drive across a long highway bridge and you may feel a rhythmic thump under your tires, two or three times along the way. " +
        N(2) + "Many drivers assume the bumps are signs of poor maintenance. " +
        N(3) + "In fact, they are often the opposite: deliberate gaps called expansion joints, and they exist because a bridge is never truly still.</p>" +
        "<p>" + N(4) + "The cause is ordinary heat. " +
        N(5) + "Nearly all materials grow slightly when warmed and shrink when cooled, and steel and concrete are no exception. " +
        N(6) + "Steel lengthens by about six and a half millionths of its length for every degree Fahrenheit it warms. " +
        N(7) + "That sounds trivial until it is multiplied. " +
        N(8) + "A steel span 1,000 feet long that sits at 10 degrees on a January night and 110 degrees on a July afternoon, in direct sun, can change length by nearly eight inches over the year. " +
        N(9) + "No amount of bolting can stop that change; it can only decide where the force goes.</p>" +
        "<p>" + N(10) + "Engineers give that movement a place to happen. " +
        N(11) + "Expansion joints break the deck into sections with gaps that open in winter and close in summer, often bridged by interlocking steel \"fingers\" that let tires roll smoothly across. " +
        N(12) + "Beneath the deck, the beams usually rest not directly on their concrete supports but on bearings, which allow the beams to slide or rock slightly. " +
        N(13) + "Older bridges used steel rockers shaped like the bottoms of rocking chairs; many newer ones use thick pads of rubber layered with steel plates, which can flex in one direction while staying firm in another.</p>" +
        "<p>" + N(14) + "When these parts fail, the results can be serious. " +
        N(15) + "Road salt and dirt can pack into a joint until it no longer closes, and a rusted bearing can freeze in place. " +
        N(16) + "Then the bridge still expands on a hot day, but the force has nowhere to go, so it pushes against the supports, cracks concrete, or bends the steel. " +
        N(17) + "\"A bridge that can't move will move anyway,\" explains structural engineer Dr. Leena Kapoor in a training video for new inspectors. " +
        N(18) + "\"It just won't move where you wanted it to.\" " +
        N(19) + "For this reason, inspectors measure joint gaps in different seasons and compare them to design charts, and maintenance crews spend unglamorous hours clearing debris from joints that most drivers never notice.</p>" +
        "<p>" + N(20) + "Some engineers have tried to reduce the number of joints, because each one can leak water and salt onto the steel below. " +
        N(21) + "So-called integral bridges, usually short spans, connect the deck firmly to the abutments at each end and let the soil behind them absorb the small movements. " +
        N(22) + "These designs may require less upkeep, but they work best for bridges of modest length; a mile-long crossing still needs places to breathe.</p>" +
        "<p>" + N(23) + "The thump under your tires, then, is not a flaw in the design. " +
        N(24) + "It is the design, the sound of a structure built with the humility to admit that weather will have its way.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which sentence best states the central idea of Room to Move?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "D"
        },
        {
          id: "eight",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The example of the 1,000-foot span in sentence 8 is used mainly to —",
          choices: [
            { letter: "A", text: "show that a tiny rate of expansion becomes large in a long bridge" },
            { letter: "B", text: "prove that steel bridges are more dangerous than concrete ones" },
            { letter: "C", text: "explain why bridges are inspected only in July" },
            { letter: "D", text: "argue that bridges should be built in mild climates" }
          ],
          correct: "A"
        },
        {
          id: "kapoor",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes the quotation from Dr. Kapoor in sentences 17 and 18 mainly to —",
          choices: [
            { letter: "A", text: "show that engineers disagree about expansion joints" },
            { letter: "B", text: "introduce the topic of integral bridges" },
            { letter: "C", text: "reinforce, through an expert's voice, why movement must be planned for" },
            { letter: "D", text: "prove that inspectors make frequent errors" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How is the article as a whole mainly organized?",
          choices: [
            { letter: "A", text: "as a timeline of famous bridge failures" },
            { letter: "B", text: "from a common misconception to its cause, solutions, risks, and limits" },
            { letter: "C", text: "as a debate between two engineers with opposing views" },
            { letter: "D", text: "from the newest bridge designs back to the oldest" }
          ],
          correct: "B"
        },
        {
          id: "humility",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 24, describing the design as built with humility mainly suggests that good engineering —",
          choices: [
            { letter: "A", text: "accepts natural forces instead of pretending to defeat them" },
            { letter: "B", text: "avoids drawing attention to the engineers who did it" },
            { letter: "C", text: "relies more on luck than on careful planning" },
            { letter: "D", text: "should produce bridges that are small and plain" }
          ],
          correct: "A"
        },
        {
          id: "integral",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Which statement about integral bridges is best supported by sentences 20 through 22 together?",
          choices: [
            { letter: "A", text: "They will soon replace every bridge with expansion joints." },
            { letter: "B", text: "They are more dangerous because the soil can wash away." },
            { letter: "C", text: "They reduce one problem but are not practical for long spans." },
            { letter: "D", text: "They were the design used for older steel rocker bridges." }
          ],
          correct: "C"
        },
        {
          id: "bearings",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Based on the explanation in sentence 12, bearings on a bridge are parts that —",
          choices: [
            { letter: "A", text: "hold up the traffic signs above the deck" },
            { letter: "B", text: "measure how much weight crosses each day" },
            { letter: "C", text: "seal the gaps between deck sections" },
            { letter: "D", text: "let the beams shift slightly on their supports" }
          ],
          correct: "D"
        },
        {
          id: "sequence",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Sentences 15 and 16 are organized mainly as —",
          choices: [
            { letter: "A", text: "a definition followed by examples" },
            { letter: "B", text: "a cause followed by its effects" },
            { letter: "C", text: "a claim followed by a counterclaim" },
            { letter: "D", text: "a question followed by an answer" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────── 6 · Argument (level 2) · river cleanups ───────── */
    {
      id: "g10-ri-c78-same-bottle",
      family: "G10",
      title: "The Same Bottle Twice",
      kind: "Argument · 10.RI",
      blurb: "A student volunteer argues that her town should stop the trash before it reaches Alder Creek.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every April for six years, I have pulled on rubber boots and waded into Alder Creek with two hundred other volunteers, and every April we have filled the same dumpster with the same things: foam cups, plastic bottles, grocery bags, and one stubborn shopping cart that seems to return like a migrating bird. " +
        N(2) + "Our town is proud of the Alder Creek Cleanup, and it should be. " +
        N(3) + "But I have started to believe that pride is keeping us from asking a harder question: why are we picking up the same bottle twice?</p>" +
        "<p>" + N(4) + "Most of the trash in Alder Creek does not come from people standing on its banks. " +
        N(5) + "It arrives through the storm drains. " +
        N(6) + "When it rains, water rushes off our streets and parking lots, carrying litter into drains that empty, untreated, into the creek. " +
        N(7) + "Last year, our high school's environmental science class counted debris at the three largest drain outlets after a single heavy storm and found more than four hundred pieces of trash at one outlet alone. " +
        N(8) + "A cleanup once a year cannot keep up with a delivery system that runs every time it rains.</p>" +
        "<p>" + N(9) + "That is why I am asking the town council to install trash capture devices, metal baskets and floating barriers that catch debris, at those three outlets. " +
        N(10) + "Our neighbors in Easton Falls installed similar devices four years ago, and their parks department reported that visible trash in their river dropped by roughly half within two seasons. " +
        N(11) + "The devices would need to be emptied regularly, but emptying a basket is far easier than chasing a bag that has already drifted two miles downstream and snagged in a tree.</p>" +
        "<p>" + N(12) + "Some council members have said the devices cost too much, and it is true that installing three would cost about $45,000. " +
        N(13) + "That is real money. " +
        N(14) + "However, the town already spends thousands every year on dumpsters, staff overtime, and equipment for a cleanup that treats the symptom instead of the source. " +
        N(15) + "Others worry that capturing trash at the drains would make the annual cleanup pointless and weaken the community spirit that surrounds it. " +
        N(16) + "I understand that worry, because the cleanup is where I learned to care about this creek in the first place. " +
        N(17) + "But a cleanup with less trash is not a failure; it is the goal. " +
        N(18) + "Volunteers could spend that April morning planting native shrubs along the banks or testing water quality, work that builds something instead of only removing something.</p>" +
        "<p>" + N(19) + "The Alder Creek Cleanup taught a generation of kids in this town that the creek belongs to all of us. " +
        N(20) + "Now that lesson should lead somewhere new. " +
        N(21) + "If we truly love this creek, we should want a day when the dumpster comes back half empty. " +
        N(22) + "I urge the council to approve the trash capture devices at its May meeting, and I urge every volunteer who has ever pulled a bottle from that water to come and say so.</p>" +
        "<p>" + N(23) + "— Mariela Quispe, junior, Alder Valley High School Green Team</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which statement best expresses Mariela Quispe's central claim?",
          choices: [
            { letter: "A", text: "The annual cleanup should be canceled because it does not work." },
            { letter: "B", text: "Volunteers should be paid for the work they do in the creek." },
            { letter: "C", text: "The town should stop trash at the storm drains instead of relying on one cleanup." },
            { letter: "D", text: "Easton Falls has a cleaner river than Alder Creek." }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence provides evidence from outside Mariela's own town?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 1" }
          ],
          correct: "A"
        },
        {
          id: "story",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Mariela opens with her six years of wading into the creek in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "complain that the cleanup is too much work" },
            { letter: "B", text: "establish her experience and show the repeating problem" },
            { letter: "C", text: "prove that the shopping cart belongs to a local store" },
            { letter: "D", text: "describe the wildlife living along Alder Creek" }
          ],
          correct: "B"
        },
        {
          id: "counter",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 12 through 18 mainly organized?",
          choices: [
            { letter: "A", text: "as a list of the steps for installing the devices" },
            { letter: "B", text: "as a comparison of two neighboring towns" },
            { letter: "C", text: "as a history of the Alder Creek Cleanup" },
            { letter: "D", text: "as objections, each followed by a response" }
          ],
          correct: "D"
        },
        {
          id: "delivery",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 8, Mariela calls the storm drains a delivery system that runs every time it rains mainly to emphasize that —",
          choices: [
            { letter: "A", text: "trash keeps arriving faster than a yearly cleanup can remove it" },
            { letter: "B", text: "the town should hire a company to deliver new dumpsters" },
            { letter: "C", text: "rain is the main source of pollution in the creek" },
            { letter: "D", text: "storm drains were designed to carry trash away from town" }
          ],
          correct: "A"
        },
        {
          id: "concede",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "In sentence 16, Mariela admits that the cleanup taught her to care about the creek mainly to —",
          choices: [
            { letter: "A", text: "suggest she will stop volunteering if the council refuses" },
            { letter: "B", text: "show respect for the opposing view before answering it" },
            { letter: "C", text: "prove that the cleanup has been a complete failure" },
            { letter: "D", text: "change the subject away from the cost of the devices" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "Mariela's tone toward the Alder Creek Cleanup itself is best described as —",
          choices: [
            { letter: "A", text: "scornful and dismissive" },
            { letter: "B", text: "neutral and detached" },
            { letter: "C", text: "fearful and uncertain" },
            { letter: "D", text: "appreciative but critical" }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "Based on sentence 22, Mariela's letter is written mainly for —",
          choices: [
            { letter: "A", text: "students in the environmental science class" },
            { letter: "B", text: "the parks department of Easton Falls" },
            { letter: "C", text: "the town council and the cleanup's volunteers" },
            { letter: "D", text: "companies that build trash capture devices" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── 7 · Functional text (level 1) · river cleanups ───────── */
    {
      id: "g10-ri-c78-river-sweep",
      family: "G10",
      title: "Saturday River Sweep",
      kind: "Functional text · 10.RI",
      blurb: "A volunteer information sheet for a morning cleanup on the Tannery River.",
      level: 1,
      passage:
        "<p><strong>Tannery River Sweep: Volunteer Information Sheet</strong> " +
        N(1) + "Thank you for signing up to help clean the Tannery River on Saturday, October 18! " +
        N(2) + "Please read this sheet carefully before the event, and keep it handy on the morning of the sweep. " +
        N(3) + "Last year, 140 volunteers removed more than 3,000 pounds of trash from a two-mile stretch of the river, and this year we hope to cover three miles.</p>" +
        "<p><strong>When and Where</strong> " + N(4) + "Check-in opens at 8:00 a.m. at the Riverside Park pavilion, next to the boat launch on Mill Street. " +
        N(5) + "Cleanup crews will leave the pavilion at 8:30 a.m. and work until 11:30 a.m. " +
        N(6) + "A free lunch for volunteers will be served at the pavilion from 11:45 a.m. to 1:00 p.m. " +
        N(7) + "Free parking is available in the lot behind the library, a five-minute walk from the park.</p>" +
        "<p><strong>What to Bring</strong> " + N(8) + "Wear closed-toe shoes or boots that can get wet and muddy; sandals are not allowed. " +
        N(9) + "Long pants and long sleeves will protect you from brambles and poison ivy along the bank. " +
        N(10) + "Bring a refillable water bottle, sunscreen, and work gloves if you have them. " +
        N(11) + "We will provide trash bags, grabbers, extra gloves, and water refill stations.</p>" +
        "<p><strong>Who Can Volunteer</strong> " + N(12) + "Volunteers 16 and older may sign up on their own. " +
        N(13) + "Volunteers ages 10 to 15 must be accompanied by a parent or guardian who also signs up. " +
        N(14) + "Children under 10 are welcome at the pavilion activity tables, where they can sort recyclables and decorate signs, but they may not join the river crews. " +
        N(15) + "High school students can earn up to four community service hours; ask for a signed form at check-in.</p>" +
        "<p><strong>Safety Rules</strong> " + N(16) + "Never enter water above your knees, and stay out of the river entirely below the Mill Street dam. " +
        N(17) + "Do not pick up needles, broken glass, or containers of unknown liquids; instead, mark the spot with an orange flag and tell your crew leader. " +
        N(18) + "Stay within sight of at least one other member of your crew at all times. " +
        N(19) + "If you hear three short blasts on an air horn, stop work immediately and return to the nearest marked trail.</p>" +
        "<p><strong>What Happens to What We Collect</strong> " + N(20) + "Every bag is weighed at the pavilion so we can track our progress from year to year. " +
        N(21) + "Volunteers at the sorting tables separate cans and plastic bottles for recycling, and the city sanitation department hauls away the rest that afternoon. " +
        N(22) + "Unusual finds are photographed for our Strangest Trash display; last year's winner was a bowling ball.</p>" +
        "<p><strong>Questions?</strong> " + N(23) + "Contact the Friends of the Tannery River volunteer desk by email at the address on your registration receipt. " +
        N(24) + "If the sweep must be canceled because of heavy rain or high water, we will send a message by 6:00 a.m. on Saturday.</p>",
      claims: [
        {
          id: "purpose",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "What is the main purpose of the Tannery River Sweep information sheet?",
          choices: [
            { letter: "A", text: "to persuade the city to clean the river more often" },
            { letter: "B", text: "to report the results of last year's cleanup" },
            { letter: "C", text: "to explain why the river became polluted" },
            { letter: "D", text: "to prepare registered volunteers to take part safely" }
          ],
          correct: "D"
        },
        {
          id: "twelve",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Jalen is 12 and wants to help pick up trash along the riverbank. According to the sheet, what must happen for him to join a river crew?",
          choices: [
            { letter: "A", text: "He must bring a signed community service form." },
            { letter: "B", text: "A parent or guardian must also sign up and come with him." },
            { letter: "C", text: "He must stay at the pavilion activity tables." },
            { letter: "D", text: "He must arrive before check-in opens at 8:00 a.m." }
          ],
          correct: "B"
        },
        {
          id: "audience",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "Sentence 2 suggests that the sheet is written mainly for —",
          choices: [
            { letter: "A", text: "people who have already signed up for the sweep" },
            { letter: "B", text: "city officials who manage the park" },
            { letter: "C", text: "scientists studying the river's water" },
            { letter: "D", text: "people deciding whether to move to the town" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The bold headings on the sheet help a reader mainly by —",
          choices: [
            { letter: "A", text: "ranking the rules from most to least important" },
            { letter: "B", text: "telling the story of the first river sweep" },
            { letter: "C", text: "grouping the information so it can be found quickly" },
            { letter: "D", text: "showing which volunteers are crew leaders" }
          ],
          correct: "C"
        },
        {
          id: "flag",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Sentence 17 tells volunteers to mark certain items with an orange flag rather than pick them up mainly because —",
          choices: [
            { letter: "A", text: "those items are worth money at the recycling center" },
            { letter: "B", text: "the organizers want them for the Strangest Trash display" },
            { letter: "C", text: "the items must be weighed before they are moved" },
            { letter: "D", text: "those items could injure someone who handles them" }
          ],
          correct: "D"
        },
        {
          id: "horn",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "A volunteer is working on the bank at 10:15 a.m. and hears three short blasts on an air horn. What should the volunteer do?",
          choices: [
            { letter: "A", text: "Return to the pavilion for lunch." },
            { letter: "B", text: "Mark the spot with an orange flag." },
            { letter: "C", text: "Stop work and go to the nearest marked trail." },
            { letter: "D", text: "Move to a section of water below the dam." }
          ],
          correct: "C"
        },
        {
          id: "accompanied",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 13, the word accompanied most nearly means —",
          choices: [
            { letter: "A", text: "approved in writing" },
            { letter: "B", text: "joined and supervised" },
            { letter: "C", text: "followed from a distance" },
            { letter: "D", text: "replaced for the day" }
          ],
          correct: "B"
        },
        {
          id: "strangest",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The mention of the bowling ball in sentence 22 mainly serves to —",
          choices: [
            { letter: "A", text: "add a light, friendly note that makes the event appealing" },
            { letter: "B", text: "warn volunteers about heavy objects in the river" },
            { letter: "C", text: "explain how the trash is sorted for recycling" },
            { letter: "D", text: "prove that last year's sweep covered three miles" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────── 8 · Vocabulary (level 1) · a family restaurant ───────── */
    {
      id: "g10-rv-c78-inspection-day",
      family: "G10",
      title: "Inspection Day at Halmoni's Table",
      kind: "Vocabulary · 10.RV",
      blurb: "The health inspector is coming, and everyone in the family kitchen is panicking except Grandmother.",
      level: 1,
      passage:
        "<p>" + N(1) + "The health inspector was due sometime on Wednesday, and by Tuesday night my family had turned Halmoni's Table into a laboratory. " +
        N(2) + "My mother is <strong>meticulous</strong> about the kitchen on an ordinary day; she labels every container with the date, lines up the knives by size, and checks the refrigerator thermometer twice before she unlocks the front door. " +
        N(3) + "But in the week of an inspection, even she gets a little strange.</p>" +
        "<p>" + N(4) + "On Wednesday morning, the kitchen was <strong>frantic</strong>. " +
        N(5) + "My brother Daniel scrubbed the grout behind the fryer with a toothbrush, my father climbed a stepladder to wipe the top of the exhaust hood, and my mother rushed from station to station so quickly that her apron strings flew out behind her. " +
        N(6) + "I was assigned the walk-in cooler, which meant reading every label and throwing away anything that had passed its date by even a single day. " +
        N(7) + "Only my grandmother, who opened the restaurant thirty-one years ago, seemed calm. " +
        N(8) + "She sat at the prep table folding mandu as if it were any other morning.</p>" +
        "<p>" + N(9) + "\"Halmoni is so stubborn,\" Daniel muttered. \"She won't even move her dumplings off the counter.\" " +
        N(10) + "My mother overheard him. " +
        N(11) + "\"She's not stubborn,\" she said. \"She's <strong>steadfast</strong>. There's a difference. She has kept this kitchen clean for thirty-one years, and she does not need to panic now to prove it.\"</p>" +
        "<p>" + N(12) + "The inspector arrived at two o'clock, a tall woman named Ms. Ferraro with a tablet and a small flashlight. " +
        N(13) + "She <strong>scrutinized</strong> everything; that is, she examined each corner, shelf, and drain as closely as a jeweler examines a stone. " +
        N(14) + "She took the temperature of the soup on the steam table, opened the dish machine to read its gauge, and looked under the sink with her flashlight. " +
        N(15) + "I held my breath when she opened the walk-in cooler, but every label was current, and she nodded once.</p>" +
        "<p>" + N(16) + "At the prep table, she watched my grandmother fold dumplings for a long moment. " +
        N(17) + "Then she asked how long the filling had been out of the refrigerator. " +
        N(18) + "Halmoni pointed to a small timer beside the bowl, set to ring after thirty minutes, and to the bowl itself, which rested in a larger pan of ice. " +
        N(19) + "Ms. Ferraro smiled and wrote something down.</p>" +
        "<p>" + N(20) + "Before she left, she showed us the score: ninety-eight out of a hundred, with a minor note about a cracked light cover. " +
        N(21) + "\"Your kitchen is <strong>immaculate</strong>,\" she told my mother. " +
        N(22) + "\"I see a lot of restaurants that clean for me. " +
        N(23) + "This one looks like it cleans for itself.\" " +
        N(24) + "My mother thanked her politely, but I saw her shoulders drop an inch, and I knew she was finally <strong>reassured</strong> that all her worry had been for nothing.</p>" +
        "<p>" + N(25) + "That evening, Daniel asked Halmoni how she had stayed so calm. " +
        N(26) + "She handed him a dumpling wrapper to fold and said, \"The inspector visits one day a year. " +
        N(27) + "The customers come every day.\"</p>",
      claims: [
        {
          id: "meticulous",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which part of sentence 2 best shows the meaning of meticulous?",
          choices: [
            { letter: "A", text: "My mother is meticulous about the kitchen" },
            { letter: "B", text: "on an ordinary day" },
            { letter: "C", text: "before she unlocks the front door" },
            { letter: "D", text: "lines up the knives by size" }
          ],
          correct: "D"
        },
        {
          id: "frantic",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The narrator calls the kitchen frantic in sentence 4 rather than simply busy. Compared with busy, frantic suggests activity that is —",
          choices: [
            { letter: "A", text: "hurried and full of anxiety" },
            { letter: "B", text: "slow and well organized" },
            { letter: "C", text: "cheerful and relaxed" },
            { letter: "D", text: "quiet and careful" }
          ],
          correct: "A"
        },
        {
          id: "steadfast",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "In sentence 11, the mother says Halmoni is steadfast rather than stubborn. Compared with stubborn, steadfast suggests a firmness that is —",
          choices: [
            { letter: "A", text: "rude and unreasonable" },
            { letter: "B", text: "confused and forgetful" },
            { letter: "C", text: "admirable and loyal" },
            { letter: "D", text: "nervous and easily shaken" }
          ],
          correct: "C"
        },
        {
          id: "scrutinized",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "The phrase that follows that is in sentence 13 restates scrutinized as meaning —",
          choices: [
            { letter: "A", text: "cleaned carefully" },
            { letter: "B", text: "examined very closely" },
            { letter: "C", text: "criticized harshly" },
            { letter: "D", text: "photographed quickly" }
          ],
          correct: "B"
        },
        {
          id: "inspector",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word inspector in sentence 1 contains the root spect, as in spectator and spectacles. Based on this root, an inspector is most likely someone who —",
          choices: [
            { letter: "A", text: "cooks food for large crowds" },
            { letter: "B", text: "writes rules for restaurants" },
            { letter: "C", text: "repairs kitchen equipment" },
            { letter: "D", text: "looks at things carefully" }
          ],
          correct: "D"
        },
        {
          id: "immaculate",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word immaculate in sentence 21 combines the prefix im-, meaning not, with a Latin root meaning spot or stain. Immaculate most nearly means —",
          choices: [
            { letter: "A", text: "perfectly clean" },
            { letter: "B", text: "slightly messy" },
            { letter: "C", text: "newly built" },
            { letter: "D", text: "very crowded" }
          ],
          correct: "A"
        },
        {
          id: "reassured",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Based on the detail of the mother's shoulders dropping in sentence 24, the word reassured most nearly means —",
          choices: [
            { letter: "A", text: "embarrassed" },
            { letter: "B", text: "freed from worry" },
            { letter: "C", text: "surprised again" },
            { letter: "D", text: "made more alert" }
          ],
          correct: "B"
        },
        {
          id: "note",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 20, the word note most nearly means —",
          choices: [
            { letter: "A", text: "a musical tone" },
            { letter: "B", text: "a short letter of thanks" },
            { letter: "C", text: "a brief written comment" },
            { letter: "D", text: "a piece of paper money" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── 9 · Vocabulary (level 3) · bridges and engineering ───────── */
    {
      id: "g10-rv-c78-balsa-ratio",
      family: "G10",
      title: "Twenty-Eight Grams of Balsa",
      kind: "Vocabulary · 10.RV",
      blurb: "A physics club learns that the strongest model bridge is not the one with the most wood.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every spring, our physics club enters a regional model bridge contest, and every spring someone new learns the same <strong>counterintuitive</strong> lesson: the bridge that holds the most weight does not necessarily win. " +
        N(2) + "The judges care about <strong>efficiency</strong>, which they calculate by dividing the load a bridge supports by the bridge's own mass. " +
        N(3) + "A heavy bridge that holds a heavy load may lose to a feather of a bridge that holds slightly less.</p>" +
        "<p>" + N(4) + "Our first design last year ignored that rule completely. " +
        N(5) + "My teammate Oskar, who is <strong>obsessive</strong> rather than merely dedicated, glued so many balsa sticks into crisscrossing triangles that the bridge looked like a woven basket. " +
        N(6) + "It weighed sixty-one grams and held almost thirty kilograms, which impressed everyone until Mr. Batista, our advisor, did the division on the whiteboard. " +
        N(7) + "Our efficiency was worse than the club's average from the previous three years.</p>" +
        "<p>" + N(8) + "So we started over, and this time we tested in small, <strong>incremental</strong> steps instead of building a whole bridge and hoping. " +
        N(9) + "We loaded single sticks until they snapped, then pairs, then small triangles, recording each result in a shared spreadsheet. " +
        N(10) + "We learned that a stick pulled from both ends, in tension, is surprisingly strong, while the same stick pushed from both ends, in compression, bows and breaks far sooner. " +
        N(11) + "That one fact reshaped the whole design: long thin members where the bridge would be pulled, short doubled members where it would be squeezed.</p>" +
        "<p>" + N(12) + "Our teammate Wanjiru insisted on one more principle borrowed from real engineering. " +
        N(13) + "She wanted the bridge to be <strong>redundant</strong>, which, in an engineer's vocabulary, does not mean useless or unnecessary; it means that the structure has more than one path for carrying its load, so that if one member cracks, another can take over. " +
        N(14) + "Oskar argued that every extra stick would hurt our ratio. " +
        N(15) + "Wanjiru answered that a bridge with no backup is not efficient, only lucky.</p>" +
        "<p>" + N(16) + "Our practice tests proved her right. " +
        N(17) + "Two of our lighter prototypes, built without backup members, held well for a while and then suffered <strong>catastrophic</strong> failures; a single joint gave way, and the entire structure folded at once, scattering sticks across the lab table. " +
        N(18) + "The version we finally entered weighed just twenty-eight grams. " +
        N(19) + "It looked almost <strong>spare</strong>, a few clean lines of wood with open space between them, and it held twenty-two kilograms before a doubled compression member finally buckled, slowly enough that we heard it creak first.</p>" +
        "<p>" + N(20) + "We placed second in the region, behind a team from a school whose bridge looked like a pencil sketch. " +
        N(21) + "Oskar studied it for ten minutes and then asked its builders for their spreadsheet, which they gladly shared. " +
        N(22) + "I think about our two bridges often: the woven basket that held everything and proved nothing, and the spare one that taught us why. " +
        N(23) + "Good engineering, it turns out, is less about adding strength than about knowing exactly where strength is needed, and having the patience to find out.</p>",
      claims: [
        {
          id: "counter",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word counterintuitive in sentence 1 combines the prefix counter-, as in counterclockwise, with intuitive. Based on these parts, a counterintuitive lesson is one that —",
          choices: [
            { letter: "A", text: "is taught by an expert advisor" },
            { letter: "B", text: "goes against what seems obviously true" },
            { letter: "C", text: "must be learned more than once" },
            { letter: "D", text: "can be proved with simple math" }
          ],
          correct: "B"
        },
        {
          id: "incremental",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word incremental in sentence 8 shares a root with increase and increment. Testing in incremental steps most nearly means testing —",
          choices: [
            { letter: "A", text: "only at the very end of the project" },
            { letter: "B", text: "with as much weight as possible at once" },
            { letter: "C", text: "by copying another team's results" },
            { letter: "D", text: "through a series of small additions" }
          ],
          correct: "D"
        },
        {
          id: "redundant",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "According to Wanjiru's explanation in sentence 13, an engineer who calls a bridge redundant means that it —",
          choices: [
            { letter: "A", text: "has more than one way to carry its load" },
            { letter: "B", text: "contains sticks that serve no purpose" },
            { letter: "C", text: "repeats the design of an earlier bridge" },
            { letter: "D", text: "is too heavy to win the contest" }
          ],
          correct: "A"
        },
        {
          id: "catastrophic",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which part of sentence 17 best shows the meaning of catastrophic?",
          choices: [
            { letter: "A", text: "Two of our lighter prototypes" },
            { letter: "B", text: "built without backup members" },
            { letter: "C", text: "the entire structure folded at once" },
            { letter: "D", text: "held well for a while" }
          ],
          correct: "C"
        },
        {
          id: "obsessive",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The narrator describes Oskar as obsessive rather than merely dedicated in sentence 5. Compared with dedicated, obsessive suggests that his effort is —",
          choices: [
            { letter: "A", text: "lazy and careless" },
            { letter: "B", text: "intense to the point of excess" },
            { letter: "C", text: "secretive and dishonest" },
            { letter: "D", text: "calm and well balanced" }
          ],
          correct: "B"
        },
        {
          id: "spare",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "In sentence 19, the narrator calls the final bridge spare rather than flimsy. Compared with flimsy, spare suggests a design that is —",
          choices: [
            { letter: "A", text: "weak and poorly made" },
            { letter: "B", text: "unfinished and messy" },
            { letter: "C", text: "lean and purposeful" },
            { letter: "D", text: "decorated and showy" }
          ],
          correct: "C"
        },
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of Twenty-Eight Grams of Balsa?",
          choices: [
            { letter: "A", text: "Strong engineering depends on placing strength where it is truly needed." },
            { letter: "B", text: "Model bridge contests are unfair to teams that build heavy bridges." },
            { letter: "C", text: "Balsa wood is stronger in compression than in tension." },
            { letter: "D", text: "The physics club should have won first place in the region." }
          ],
          correct: "A"
        },
        {
          id: "together",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Which statement is best supported by sentences 20 and 21 together?",
          choices: [
            { letter: "A", text: "Oskar is bitter about losing and blames the judges." },
            { letter: "B", text: "The winning team refused to explain its design." },
            { letter: "C", text: "The narrator's team plans to copy the winning bridge exactly." },
            { letter: "D", text: "Oskar has come to value learning over winning." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── 10 · Paired texts (level 2) · beekeeping ───────── */
    {
      id: "g10-dsr-c78-rooftop-hives",
      family: "G10",
      title: "Bees Above the City",
      kind: "Paired texts · 10.DSR",
      blurb: "A library celebrates its rooftop hives, and an ecologist asks whether the city needs more honeybees at all.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Honey from the Seventh Floor</strong></p>" +
        "<p>" + N(1) + "Three years ago, the Eastgate Public Library placed two beehives on its flat seventh-floor roof, and the project has become one of the most popular programs in the building. " +
        N(2) + "Volunteers led by librarian Teodora Vasquez check the hives every two weeks from April to October, and teenagers in the library's science club take turns suiting up beside them. " +
        N(3) + "Last summer the hives produced about ninety pounds of honey, which the library sold in small jars to fund new books for its children's room.</p>" +
        "<p>" + N(4) + "Vasquez says the hives do more than make honey. " +
        N(5) + "\"People assume a city is a desert for bees,\" she explains, \"but our bees forage, flying out to collect nectar and pollen, in gardens, parks, and street trees all over the neighborhood.\" " +
        N(6) + "A camera beside the hive entrance streams live video to a screen in the lobby, where children press their noses to the glass to watch workers return with orange and yellow pollen packed on their legs. " +
        N(7) + "The library calls its bees \"buzzing ambassadors,\" creatures that turn a gray rooftop into a lesson about where food comes from.</p>" +
        "<p>" + N(8) + "Other buildings have noticed. " +
        N(9) + "Two nearby hotels and an office tower have asked Vasquez for advice on starting rooftop hives of their own, and she hopes the downtown skyline will someday hum all summer long.</p>" +
        "<p><strong>Text 2 — Not Every Bee Needs a Keeper</strong></p>" +
        "<p>" + N(10) + "Rooftop beehives make wonderful photographs, but as an ecologist who studies urban pollinators, I worry that cities are adding honeybees faster than they are adding flowers. " +
        N(11) + "Honeybees are not native to North America; they are managed livestock, a bit like flying chickens. " +
        N(12) + "Our region is also home to more than two hundred species of wild bees, from tiny sweat bees to fuzzy bumblebees, and most of them live quietly in the ground or in hollow stems, unnoticed by passersby.</p>" +
        "<p>" + N(13) + "A single honeybee colony can contain thirty thousand workers, and each one visits the same flowers that wild bees need. " +
        N(14) + "When dozens of hives crowd one neighborhood, studies in several cities suggest, native bees may find less food and produce fewer young. " +
        N(15) + "In other words, a hive on a roof is not automatically a gift to nature; in some places it may be more like opening a new restaurant on a street that already has too few groceries.</p>" +
        "<p>" + N(16) + "None of this means honeybees are villains. " +
        N(17) + "It means that the most helpful thing a building can put on its roof may be a garden rather than a box of bees. " +
        N(18) + "Plant native flowers, leave some bare soil, and count which bees arrive on their own. " +
        N(19) + "You may be surprised by how many were there all along.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "On which point would the authors of Honey from the Seventh Floor and Not Every Bee Needs a Keeper most likely agree?",
          choices: [
            { letter: "A", text: "Honeybees are the only pollinators found in cities." },
            { letter: "B", text: "Every tall building should host at least one hive." },
            { letter: "C", text: "Bees in cities depend on the flowers available nearby." },
            { letter: "D", text: "Library programs are the best way to teach science." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which statement best describes a key difference between the two texts about urban bees?",
          choices: [
            { letter: "A", text: "Text 1 treats added hives as a clear benefit, while Text 2 questions whether they help." },
            { letter: "B", text: "Text 1 focuses on wild bees, while Text 2 focuses on honey production." },
            { letter: "C", text: "Text 1 is written by a scientist, while Text 2 is written by a librarian." },
            { letter: "D", text: "Text 1 argues against rooftop gardens, while Text 2 supports them." }
          ],
          correct: "A"
        },
        {
          id: "twoflowers",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Select TWO sentences, one from each text, that together best show the writers paying attention to what bees find beyond the hive.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "advice",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Using both texts, which advice would best serve the hotels in sentence 9 that are considering rooftop hives?",
          choices: [
            { letter: "A", text: "Install as many hives as the roof will hold to maximize honey sales." },
            { letter: "B", text: "Avoid all contact with bees because they are harmful to cities." },
            { letter: "C", text: "Copy the library's program exactly, including the lobby camera." },
            { letter: "D", text: "Consider planting native flowers and checking how many hives the area can support." }
          ],
          correct: "D"
        },
        {
          id: "desert",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does Text 2 complicate Vasquez's point in sentence 5 that the city is not a desert for bees?",
          choices: [
            { letter: "A", text: "It argues that city flowers are poisonous to most bees." },
            { letter: "B", text: "It suggests the food is real but may be shared among too many bees." },
            { letter: "C", text: "It claims that honeybees never leave their rooftop hives." },
            { letter: "D", text: "It points out that the library's honey was not truly local." }
          ],
          correct: "B"
        },
        {
          id: "conclude",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "A reader who uses both Bees Above the City texts could best conclude that —",
          choices: [
            { letter: "A", text: "honeybees and wild bees never visit the same plants" },
            { letter: "B", text: "the Eastgate hives should be removed at once" },
            { letter: "C", text: "rooftop hives educate people but are not the only way to help pollinators" },
            { letter: "D", text: "wild bees produce more honey than managed colonies" }
          ],
          correct: "C"
        },
        {
          id: "forage",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Vasquez's explanation in sentence 5 defines forage as —",
          choices: [
            { letter: "A", text: "flying out to gather food" },
            { letter: "B", text: "building wax combs" },
            { letter: "C", text: "guarding the hive entrance" },
            { letter: "D", text: "resting during hot weather" }
          ],
          correct: "A"
        },
        {
          id: "livestock",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 11, the ecologist compares honeybees to flying chickens mainly to emphasize that they —",
          choices: [
            { letter: "A", text: "are clumsy and cannot fly very far" },
            { letter: "B", text: "are noisy and bother the neighbors" },
            { letter: "C", text: "are more intelligent than wild bees" },
            { letter: "D", text: "are domesticated animals that people keep and manage" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── 11 · Paired texts (level 3) · river cleanups ───────── */
    {
      id: "g10-dsr-c78-bramble-run",
      family: "G10",
      title: "Two Views of Bramble Run",
      kind: "Paired texts · 10.DSR",
      blurb: "A volunteer remembers a cleanup morning, and a monitoring report measures what the cleanups have and have not changed.",
      level: 3,
      passage:
        "<p><strong>Text 1 — What the Creek Gave Back</strong></p>" +
        "<p>" + N(1) + "The first time I joined the Bramble Run cleanup, I was eleven, and I spent most of the morning pulling a tire out of the mud with my uncle Ravi while a woman I had never met held a trash bag open and cheered every inch. " +
        N(2) + "By noon our crew had filled a pickup truck, and the woman with the bag had told me her name was Mrs. Okafor. " +
        N(3) + "I remember the smell of wet leaves, the cold water leaking into my boots, and the strange pride of carrying something ugly out of a place I suddenly felt was mine.</p>" +
        "<p>" + N(4) + "I have gone back every year since. " +
        N(5) + "The tires are mostly gone now; last spring the strangest thing I found was a single flip-flop. " +
        N(6) + "Some years I almost miss the old mess, the sense of a battle worth fighting. " +
        N(7) + "But other changes have arrived to take its place. " +
        N(8) + "Last May I watched a heron stand motionless in the shallows where the tire used to be, and a family I did not know waded in to look for crayfish. " +
        N(9) + "The creek looks like a creek again, and people treat it like one. " +
        N(10) + "When I tell newcomers what it used to be like, they hardly believe me, and that disbelief may be the best proof that our Saturdays mattered.</p>" +
        "<p><strong>Text 2 — Bramble Run Monitoring Program: Five-Year Summary</strong></p>" +
        "<p>" + N(11) + "Since the watershed council began tracking results, the weight of trash removed during the annual Bramble Run cleanup has fallen steadily, from 2.1 tons in the first year to 0.8 tons in the fifth, even though volunteer numbers have stayed about the same. " +
        N(12) + "Large items such as tires and appliances, once common, were nearly absent in the most recent survey. " +
        N(13) + "These results suggest that regular cleanups, along with new fines for illegal dumping, have reduced visible litter.</p>" +
        "<p>" + N(14) + "Water quality, however, presents a less encouraging picture, and the reasons deserve attention. " +
        N(15) + "Volunteers sample the creek monthly at four stations, testing for bacteria, dissolved oxygen, and temperature with equipment loaned by the state university. " +
        N(16) + "After heavy rains, bacteria levels at two downstream stations still exceed the state's standard for safe wading in more than half of samples. " +
        N(17) + "The likely sources are aging sewer lines and runoff from streets and lawns, which carry pollution that no volunteer can see or pick up. " +
        N(18) + "The council therefore recommends that residents avoid wading for 48 hours after a storm and that the city schedule an inspection of the sewer lines beneath Orchard Street. " +
        N(19) + "Cleanups remain valuable, but the creek's most serious remaining problem is one they were never designed to solve.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Both the volunteer in Text 1 and the council in Text 2 would most likely agree that —",
          choices: [
            { letter: "A", text: "Bramble Run is now completely safe for wading" },
            { letter: "B", text: "the amount of large trash in the creek has dropped" },
            { letter: "C", text: "the cleanups should be replaced by sewer repairs" },
            { letter: "D", text: "fines for dumping have had no effect" }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The texts about Bramble Run differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "relies on personal memory, while Text 2 relies on measured data" },
            { letter: "B", text: "praises the council, while Text 2 criticizes the volunteers" },
            { letter: "C", text: "describes the water quality, while Text 2 describes wildlife" },
            { letter: "D", text: "argues against cleanups, while Text 2 argues for them" }
          ],
          correct: "A"
        },
        {
          id: "twoevidence",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Select TWO sentences, one from each text, that together best show that large dumped items have become rare in Bramble Run.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "family",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Based on Text 2, what concern might a reader have about the family wading for crayfish in sentence 8 of Text 1?",
          choices: [
            { letter: "A", text: "The family might disturb the heron's nest." },
            { letter: "B", text: "The family might be fined for removing wildlife." },
            { letter: "C", text: "The water could carry unseen bacteria, especially after rain." },
            { letter: "D", text: "The creek might still contain old tires under the mud." }
          ],
          correct: "C"
        },
        {
          id: "proof",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The narrator of Text 1 treats a creek that looks clean as proof of success. Text 2 suggests this view is incomplete because —",
          choices: [
            { letter: "A", text: "fewer volunteers attend the cleanup each year" },
            { letter: "B", text: "the heron is a sign of polluted water" },
            { letter: "C", text: "trash weights have risen in recent years" },
            { letter: "D", text: "the most serious pollution cannot be seen" }
          ],
          correct: "D"
        },
        {
          id: "next",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Using both texts, which is the most reasonable next step for the Bramble Run volunteers?",
          choices: [
            { letter: "A", text: "End the cleanup, since visible trash is no longer a problem." },
            { letter: "B", text: "Keep the cleanup and also support the sewer inspection and wading advice." },
            { letter: "C", text: "Move the cleanup to the two downstream stations only." },
            { letter: "D", text: "Ask the city to stop collecting water samples." }
          ],
          correct: "B"
        },
        {
          id: "encouraging",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "Sentence 14 calls the water results less encouraging rather than alarming. Compared with alarming, less encouraging gives the report a tone that is —",
          choices: [
            { letter: "A", text: "measured and cautious" },
            { letter: "B", text: "cheerful and carefree" },
            { letter: "C", text: "panicked and urgent" },
            { letter: "D", text: "sarcastic and mocking" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How is Text 2, the five-year summary, organized?",
          choices: [
            { letter: "A", text: "as a personal story told in time order" },
            { letter: "B", text: "as a list of volunteer names and duties" },
            { letter: "C", text: "as a question followed by several possible answers" },
            { letter: "D", text: "as a finding, then a problem, causes, and advice" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── 12 · Poetry (level 1) · bridges and engineering ───────── */
    {
      id: "g10-rl-c78-cutters-creek",
      family: "G10",
      title: "Footbridge over Cutter's Creek",
      kind: "Poetry · 10.RL",
      blurb: "A speaker watches the town cross the bridge her mother welded, and watches her mother stay on the bank.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My mother welded every seam<br>" +
        L(2) + "of the footbridge over Cutter's Creek,<br>" +
        L(3) + "eleven months of sparks and steel<br>" +
        L(4) + "while the whole town drove the long way round.<br>" +
        L(5) + "Before the bridge there were stepping stones,<br>" +
        L(6) + "green with moss and set too far apart,<br>" +
        L(7) + "and every spring the water rose<br>" +
        L(8) + "and took them back like borrowed coins.<br>" +
        L(9) + "Now the bridge lifts in one gray arc,<br>" +
        L(10) + "a held breath laid from bank to bank,<br>" +
        L(11) + "its cables humming faintly in the wind<br>" +
        L(12) + "the way a guitar sings when no one plays.<br>" +
        L(13) + "Each morning children cross to school,<br>" +
        L(14) + "dragging backpacks, tapping at the rail;<br>" +
        L(15) + "old Mr. Sato walks his dog there twice;<br>" +
        L(16) + "the mail carrier crosses, whistling.<br>" +
        L(17) + "None of them know whose hands were here,<br>" +
        L(18) + "and the bridge does not tell them.<br>" +
        L(19) + "It only holds, which is its way of speaking.<br>" +
        L(20) + "But my mother, who knows each bolt by name,<br>" +
        L(21) + "who would trust her welds beneath a truck,<br>" +
        L(22) + "still will not walk out to the middle.<br>" +
        L(23) + "She stands at the end and watches us,<br>" +
        L(24) + "her hand on the first post, steady as the bridge,<br>" +
        L(25) + "and calls it good from solid ground.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by Footbridge over Cutter's Creek as a whole?",
          choices: [
            { letter: "A", text: "Modern bridges are less beautiful than natural crossings." },
            { letter: "B", text: "The people who build what others rely on often go unseen." },
            { letter: "C", text: "Children should be taught to respect dangerous places." },
            { letter: "D", text: "A town grows closer only when it faces a disaster." }
          ],
          correct: "B"
        },
        {
          id: "mother",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Lines 20 through 25 characterize the speaker's mother as —",
          choices: [
            { letter: "A", text: "careless about the safety of her work" },
            { letter: "B", text: "eager to be thanked by the town" },
            { letter: "C", text: "confident in her craft yet uneasy at the bridge's height" },
            { letter: "D", text: "disappointed that the bridge was built too low" }
          ],
          correct: "C"
        },
        {
          id: "coins",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In line 8, the comparison of the stepping stones to borrowed coins suggests that the stones —",
          choices: [
            { letter: "A", text: "were valuable enough to be stolen" },
            { letter: "B", text: "were paid for by the town" },
            { letter: "C", text: "were placed there by the speaker's mother" },
            { letter: "D", text: "were never a lasting crossing the town could keep" }
          ],
          correct: "D"
        },
        {
          id: "breath",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In line 10, describing the bridge as a held breath laid from bank to bank mainly emphasizes its —",
          choices: [
            { letter: "A", text: "suspended, tense curve across the creek" },
            { letter: "B", text: "cold metal surface in winter" },
            { letter: "C", text: "noisy cables on windy days" },
            { letter: "D", text: "short length compared with other bridges" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "The images in lines 13 through 16 mainly create a mood of —",
          choices: [
            { letter: "A", text: "tense suspense" },
            { letter: "B", text: "gloomy loneliness" },
            { letter: "C", text: "easy, everyday routine" },
            { letter: "D", text: "noisy celebration" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The speaker's tone toward the mother throughout the poem is best described as —",
          choices: [
            { letter: "A", text: "mocking and cold" },
            { letter: "B", text: "tender and admiring" },
            { letter: "C", text: "impatient and bored" },
            { letter: "D", text: "fearful and doubtful" }
          ],
          correct: "B"
        },
        {
          id: "stones",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "How do lines 5 through 8 function in the poem?",
          choices: [
            { letter: "A", text: "They show the unreliable crossing the bridge replaced." },
            { letter: "B", text: "They describe the speaker's favorite childhood game." },
            { letter: "C", text: "They predict that the new bridge will also wash away." },
            { letter: "D", text: "They explain how the mother learned to weld." }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Lines 20 through 22 are ironic mainly because —",
          choices: [
            { letter: "A", text: "the town never thanked the mother for her work" },
            { letter: "B", text: "Mr. Sato's dog refuses to cross the bridge" },
            { letter: "C", text: "the bridge is too weak to hold a truck" },
            { letter: "D", text: "the person who built the bridge will not cross it" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── 13 · Drama (level 3) · a family restaurant ───────── */
    {
      id: "g10-rl-c78-specials-board",
      family: "G10",
      title: "The Specials Board",
      kind: "Drama · 10.RL",
      blurb: "After closing time, two siblings argue over the menu until their grandmother tells them where it came from.",
      level: 3,
      passage:
        "<p><em>The kitchen of Casa Rosa, a small Peruvian restaurant, after closing. Chairs are upside down on the dining tables visible through the pass-through window. A chalkboard on an easel reads SPECIALS. INÉS, 17, sits on a counter with a laptop. RAFAEL, 19, mops the floor in long, angry strokes. ABUELA ROSA, their grandmother, sorts limes at the prep table and appears not to listen.</em></p>" +
        "<p>" + N(1) + "<strong>INÉS:</strong> Twelve orders went to the place on Fulton Street tonight. I checked. Twelve families who used to eat here are now eating quinoa bowls out of plastic boxes. " +
        N(2) + "<strong>RAFAEL:</strong> Then let them. We are not a quinoa bowl place. " +
        N(3) + "<strong>INÉS:</strong> We could be a place that also has quinoa bowls. And online ordering. And one new special a week, something people would actually photograph. " +
        N(4) + "<strong>RAFAEL:</strong> <em>(stopping the mop)</em> People photograph the lomo saltado. People have photographed the lomo saltado for twenty-six years. " +
        N(5) + "<strong>INÉS:</strong> People's parents photographed it, Rafa. On film.</p>" +
        "<p>" + N(6) + "<strong>RAFAEL:</strong> You want to turn Abuela's kitchen into a trend. The whole point of this restaurant is that it does not change. You walk in and it is 1998 and nobody apologizes for it. " +
        N(7) + "<strong>INÉS:</strong> The whole point of this restaurant is that it stays open. " +
        N(8) + "<em>(A silence. Both look, almost against their will, at ABUELA ROSA.)</em> " +
        N(9) + "<strong>RAFAEL:</strong> Abuela. Tell her the chaufa stays exactly the way it is.</p>" +
        "<p>" + N(10) + "<strong>ABUELA ROSA:</strong> <em>(still sorting limes)</em> The chaufa. You know where the chaufa came from? " +
        N(11) + "<strong>RAFAEL:</strong> From Lima. From your mother. " +
        N(12) + "<strong>ABUELA ROSA:</strong> From Mr. Chen's grocery, two doors down, the first winter we opened. I could not find the ají I needed, and I had no money for the good rice, so Mr. Chen sold me his day-old rice and a bottle of his own chili oil and told me to stop crying and cook. " +
        N(13) + "<em>(She sets down a lime.)</em> " +
        N(14) + "I made something that was half his and half mine. My mother would not have recognized it. " +
        N(15) + "<strong>RAFAEL:</strong> <em>(quietly)</em> You never told me that. " +
        N(16) + "<strong>ABUELA ROSA:</strong> You never asked. You decided it was old, so it must have always been old.</p>" +
        "<p>" + N(17) + "<em>(She crosses to the chalkboard, wipes SPECIALS with her sleeve until only the S remains, and holds out a piece of chalk to each of them.)</em> " +
        N(18) + "<strong>ABUELA ROSA:</strong> The lomo saltado stays. Your brother is right about that. But this board was always meant to be a question, not an answer. " +
        N(19) + "<em>(INÉS hesitates, then takes a chalk. RAFAEL looks at his for a long moment, as if it might be heavier than it looks.)</em> " +
        N(20) + "<strong>RAFAEL:</strong> One special. One a week. And I get to taste it first. " +
        N(21) + "<strong>INÉS:</strong> <em>(already writing)</em> Deal. " +
        N(22) + "<em>(ABUELA ROSA returns to her limes, smiling only after her back is turned.)</em></p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of The Specials Board?",
          choices: [
            { letter: "A", text: "Young people should always obey their grandparents." },
            { letter: "B", text: "Online ordering ruins the character of small restaurants." },
            { letter: "C", text: "Traditions often begin as experiments made under pressure." },
            { letter: "D", text: "Siblings should keep their business arguments private." }
          ],
          correct: "C"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The central conflict between Inés and Rafael is best described as a struggle between —",
          choices: [
            { letter: "A", text: "keeping the restaurant unchanged and adapting it to survive" },
            { letter: "B", text: "Rafael's wish to leave the family and Inés's wish to stay" },
            { letter: "C", text: "the family and the owner of Mr. Chen's grocery" },
            { letter: "D", text: "Abuela's cooking and the cooking of her own mother" }
          ],
          correct: "A"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Abuela Rosa's story about Mr. Chen in sentence 12 functions in the plot mainly as —",
          choices: [
            { letter: "A", text: "a flashback that explains why the restaurant is losing customers" },
            { letter: "B", text: "a turning point that weakens Rafael's argument about never changing" },
            { letter: "C", text: "a side story that delays the siblings' decision" },
            { letter: "D", text: "a warning that the restaurant once nearly closed" }
          ],
          correct: "B"
        },
        {
          id: "rafael",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "The stage direction and dialogue in sentences 15 and 19 suggest that Rafael is —",
          choices: [
            { letter: "A", text: "angry that his grandmother kept a secret" },
            { letter: "B", text: "relieved that he no longer has to work in the kitchen" },
            { letter: "C", text: "pretending to agree so the argument will end" },
            { letter: "D", text: "humbled and reluctantly rethinking his position" }
          ],
          correct: "D"
        },
        {
          id: "board",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 18, when Abuela Rosa says the board was meant to be a question, not an answer, she suggests that the specials board —",
          choices: [
            { letter: "A", text: "should list only the dishes customers ask for most" },
            { letter: "B", text: "needs to be replaced with a printed menu" },
            { letter: "C", text: "was a mistake she has regretted for years" },
            { letter: "D", text: "exists to invite new ideas rather than fix the menu forever" }
          ],
          correct: "D"
        },
        {
          id: "film",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "Inés's line in sentence 5, People's parents photographed it, Rafa. On film, has a tone that is best described as —",
          choices: [
            { letter: "A", text: "teasing but pointed" },
            { letter: "B", text: "deeply bitter" },
            { letter: "C", text: "frightened" },
            { letter: "D", text: "openly respectful" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in The Specials Board is most ironic?",
          choices: [
            { letter: "A", text: "Inés uses a laptop in a kitchen that has no modern equipment." },
            { letter: "B", text: "The dish Rafael defends as unchanging began as an improvised blend." },
            { letter: "C", text: "Abuela Rosa sorts limes even though the restaurant is closed." },
            { letter: "D", text: "The customers on Fulton Street prefer quinoa bowls." }
          ],
          correct: "B"
        },
        {
          id: "smile",
          sol: "10.RL.1.D",
          sub: "10.RL.1.D.2",
          stem: "The playwright ends the scene with Abuela Rosa smiling only after her back is turned (sentence 22) mainly to —",
          choices: [
            { letter: "A", text: "suggest that she disapproves of the new special" },
            { letter: "B", text: "show that she has forgotten the argument" },
            { letter: "C", text: "reveal her quiet pleasure while letting them decide" },
            { letter: "D", text: "hint that she plans to sell the restaurant" }
          ],
          correct: "C"
        }
      ]
    },

  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
