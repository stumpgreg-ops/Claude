/* SOL Labyrinth — Grade 10 long packs (v5.15 expansion, content82): recycling and waste, chess tournaments,
 * learning a new language and a family farm. 13 packs x 8 questions, 390-520 words (paired texts 200-260 each,
 * poem 22-28 lines). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── 1 · LITERARY · chess ───────────────────────── */
    {
      id: "g10-rl-c82-fallen-flag",
      family: "G10",
      title: "The Other Clock",
      kind: "Literary · 10.RL",
      blurb: "A top seed, an eleven-year-old opponent, and a coach's advice that works a little too well.",
      level: 2,
      passage:
        "<p>" + N(1) + "The tournament hall at Briar Ridge Middle School smelled of floor wax and orange peels, and by the fifth round most of the parents had given up pretending to read. " +
        N(2) + "Ruthie Castellanos sat at board one with her back to the window, the way she always did, so the afternoon sun would fall in her opponent's eyes instead of hers. " +
        N(3) + "Across from her, Felix Adeyemi, who was eleven and wore a sweatshirt three sizes too large, was writing his moves in tiny, careful capitals. " +
        N(4) + "He had beaten two adults that morning, and people had stopped calling him the little kid.</p>" +
        "<p>" + N(5) + "Ruthie's coach, Mr. Halvorsen, had given her one piece of advice before the round. " +
        N(6) + "\"Watch his clock,\" he said. " +
        N(7) + "\"Young players think too long in the opening and then panic at the end. " +
        N(8) + "Let the clock beat him.\" " +
        N(9) + "So Ruthie played quickly and simply, trading pieces whenever she could, and each time she pressed the button she glanced at Felix's side of the clock to see how much time he had left.</p>" +
        "<p>" + N(10) + "By move thirty, the plan seemed to be working. " +
        N(11) + "Felix had nine minutes; Ruthie had twenty-two. " +
        N(12) + "He sat with his chin on his fists, so still that a parent behind the rope leaned forward to see whether he had fallen asleep. " +
        N(13) + "Then he moved a knight to the edge of the board, an ugly square that no coach would recommend, and Ruthie felt the position shift under her like a rug pulled an inch.</p>" +
        "<p>" + N(14) + "She saw the threat at once: the knight was heading for a square where it could attack her rook and her king together. " +
        N(15) + "She could defend, but only with a passive move that would hand him the initiative for the rest of the game. " +
        N(16) + "She thought, and thought, and checked the line again. " +
        N(17) + "Somewhere in the middle of her checking she stopped looking at the clocks at all. " +
        N(18) + "She was deep in the game now, the hall gone quiet around her, the orange smell gone, her whole mind a map of branching roads.</p>" +
        "<p>" + N(19) + "She found the answer, a rook sacrifice that forced a draw by repetition, and reached out to play it. " +
        N(20) + "That was when the arbiter, a tall woman with a lanyard, stepped up to the table and quietly pointed. " +
        N(21) + "Ruthie's flag had fallen. " +
        N(22) + "Her twenty-two minutes were gone; she had spent nearly all of them on a single move.</p>" +
        "<p>" + N(23) + "Felix looked as stunned as she felt. " +
        N(24) + "He signed the score sheet slowly, then pushed it across the table and said, almost in a whisper, \"Your rook move was good. " +
        N(25) + "I didn't see it.\"</p>" +
        "<p>" + N(26) + "Afterward, Mr. Halvorsen found her on the bleachers, peeling an orange she did not want. " +
        N(27) + "He began to say something about time management, but Ruthie held up a hand. " +
        N(28) + "\"I watched his clock for thirty moves,\" she said. " +
        N(29) + "\"I never once thought about mine.\" " +
        N(30) + "She ate one slice of the orange, then another, and for the first time all day, it tasted like something.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does Ruthie's loss in the fifth round best develop?",
          choices: [
            { letter: "A", text: "Young players usually have a real edge over experienced adults." },
            { letter: "B", text: "Fixing on a rival's weakness can hide a weakness of one's own." },
            { letter: "C", text: "A coach's advice should be ignored once a game has begun." },
            { letter: "D", text: "Speed matters far more than accuracy in a timed contest." }
          ],
          correct: "B"
        },
        {
          id: "seat",
          sol: "10.RL.1.C",
          stem: "Sentence 2, in which Ruthie sits with her back to the window, characterizes her as a player who —",
          choices: [
            { letter: "A", text: "dislikes playing in crowded, noisy school rooms" },
            { letter: "B", text: "feels nervous about facing strong opponents" },
            { letter: "C", text: "prefers to play without her coach nearby" },
            { letter: "D", text: "seeks small advantages before play even begins" }
          ],
          correct: "D"
        },
        {
          id: "rug",
          sol: "10.RL.2.A",
          stem: "In sentence 13, comparing the change in the position to a rug pulled an inch suggests that Ruthie feels —",
          choices: [
            { letter: "A", text: "suddenly unsteady after one small change" },
            { letter: "B", text: "pleased that Felix has made a weak move" },
            { letter: "C", text: "bored by how slowly the game is moving" },
            { letter: "D", text: "confused about the rules for knight moves" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in the story of Ruthie's game against Felix is most ironic?",
          choices: [
            { letter: "A", text: "Felix writes his moves in tiny capitals despite being young." },
            { letter: "B", text: "A parent leans forward because Felix seems to be asleep." },
            { letter: "C", text: "Ruthie, told to let the clock beat Felix, loses on time herself." },
            { letter: "D", text: "The arbiter points at the clock instead of announcing the result." }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the turning point in the game between Ruthie and Felix?",
          choices: [
            { letter: "A", text: "Sentence 13, when Felix plays the knight to the edge" },
            { letter: "B", text: "Sentence 9, when Ruthie begins trading off pieces" },
            { letter: "C", text: "Sentence 11, when the two players' clocks are compared" },
            { letter: "D", text: "Sentence 24, when Felix praises the rook move" }
          ],
          correct: "A"
        },
        {
          id: "orange",
          sol: "10.RL.3.A",
          stem: "The orange in sentence 30 echoes the orange peels of sentence 1 and the vanished smell of sentence 18. The author returns to it at the end mainly to —",
          choices: [
            { letter: "A", text: "suggest that Ruthie skipped lunch before the round" },
            { letter: "B", text: "show that the tournament hall was poorly cleaned" },
            { letter: "C", text: "hint that Mr. Halvorsen brought her a snack as an apology" },
            { letter: "D", text: "show Ruthie coming back to her surroundings after the loss" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The details in sentence 18 (the quiet hall, the missing smell, the map of branching roads) mainly create a mood of —",
          choices: [
            { letter: "A", text: "restless, drifting boredom" },
            { letter: "B", text: "sealed-off concentration" },
            { letter: "C", text: "cheerful confidence" },
            { letter: "D", text: "growing, bitter resentment" }
          ],
          correct: "B"
        },
        {
          id: "passive",
          sol: "10.RV.1.C",
          stem: "Based on the rest of sentence 15, a passive move in chess is one that —",
          choices: [
            { letter: "A", text: "breaks one of the tournament's written rules" },
            { letter: "B", text: "captures a piece without warning the opponent" },
            { letter: "C", text: "waits and defends rather than taking control" },
            { letter: "D", text: "ends the game immediately in a quick draw" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── 2 · LITERARY · farm ───────────────────────── */
    {
      id: "g10-rl-c82-low-corner",
      family: "G10",
      title: "The Low Corner",
      kind: "Literary · 10.RL",
      blurb: "Twelve soil sensors, one grandfather, and a frost that the forecast did not see coming.",
      level: 3,
      passage:
        "<p>" + N(1) + "The sensors had cost Wren Haddad most of a summer's wages from the feed store, and for three weeks she had checked them the way other people checked the weather, first thing in the morning and last thing at night. " +
        N(2) + "Twelve white stakes stood in rows across the family's sweet potato field, each one sending a number to her phone: soil moisture, soil temperature, and a small green bar for battery. " +
        N(3) + "Her grandfather, whom everyone in the family called Jiddo, regarded them with the polite doubt he usually saved for weather forecasters on television.</p>" +
        "<p>" + N(4) + "\"The ground talks,\" he told her the first week, crouching at the end of a row and crumbling a handful of dirt between his fingers. " +
        N(5) + "\"You only have to listen to it.\" " +
        N(6) + "Wren had smiled and said nothing, because she had spent a whole semester of agricultural science learning that the ground did not talk; it held water and heat at certain rates, and a sensor could measure those rates more precisely than any hand.</p>" +
        "<p>" + N(7) + "In late September the forecast called for a low of thirty-eight degrees, cold but safe. " +
        N(8) + "Wren checked her phone before bed: every stake reported dry, mild soil, no cause for alarm. " +
        N(9) + "She was nearly asleep when she heard the back door, and through the window she saw Jiddo's flashlight moving slowly toward the low corner of the field, where the land dipped beside the creek.</p>" +
        "<p>" + N(10) + "She found him kneeling there in his coat and slippers. " +
        N(11) + "\"Feel,\" he said, and pressed her palm flat against the leaves. " +
        N(12) + "They were stiff and cold as coins. " +
        N(13) + "\"Cold air is heavy,\" he said. " +
        N(14) + "\"It rolls downhill like water and sits in the low places. " +
        N(15) + "Thirty-eight on the radio means thirty-one here.\" " +
        N(16) + "Wren pulled out her phone. " +
        N(17) + "The stake in that corner showed the same comfortable numbers it had shown all evening, and beside them the battery bar was not green but an empty gray; the stake had stopped reporting two days before, and the app had simply kept displaying its last reading.</p>" +
        "<p>" + N(18) + "They worked until two in the morning, running the irrigation along the low rows because, Jiddo explained, wet ground held heat better than dry, and covering the weakest plants with old bedsheets from the hall closet. " +
        N(19) + "He moved deliberately, never hurrying, setting each sheet down as if he were tucking in a child. " +
        N(20) + "Wren moved fast and made mistakes and fixed them.</p>" +
        "<p>" + N(21) + "By morning the frost had silvered the grass along the creek, but the sweet potato leaves under the sheets were limp only at their edges. " +
        N(22) + "Wren walked the field with her coffee, replaced the dead battery, and stood for a long time beside the stake that had lied to her without meaning to.</p>" +
        "<p>" + N(23) + "At breakfast Jiddo slid his own phone across the table, the old one he used only for calling his sister in Detroit. " +
        N(24) + "\"Show me,\" he said, \"how to put your app on this.\" " +
        N(25) + "Wren stared at him. " +
        N(26) + "\"So it can tell you when the ground is wrong?\" " +
        N(27) + "\"No,\" he said, and almost smiled. " +
        N(28) + "\"So that when it goes quiet, I will know to go out and listen.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is developed through Wren and Jiddo's night in the low corner of the field?",
          choices: [
            { letter: "A", text: "Young people should trust their elders instead of new tools." },
            { letter: "B", text: "Farming has become far too complicated for one family to manage." },
            { letter: "C", text: "Measuring tools work best alongside close, firsthand attention." },
            { letter: "D", text: "Weather forecasts are rarely accurate in the countryside." }
          ],
          correct: "C"
        },
        {
          id: "wren6",
          sol: "10.RL.1.C",
          stem: "Sentence 6 characterizes Wren, early in the story, as someone who —",
          choices: [
            { letter: "A", text: "trusts measurement over her grandfather's experience" },
            { letter: "B", text: "wishes she had spent her wages on something more useful" },
            { letter: "C", text: "openly argues with her grandfather about farming methods" },
            { letter: "D", text: "doubts what she learned in her agricultural science class" }
          ],
          correct: "A"
        },
        {
          id: "water",
          sol: "10.RL.2.A",
          stem: "In sentence 14, Jiddo compares cold air to water mainly to explain why —",
          choices: [
            { letter: "A", text: "the creek is likely to freeze before the field" },
            { letter: "B", text: "the irrigation must be turned off before dark" },
            { letter: "C", text: "the radio forecast was wrong for the whole county" },
            { letter: "D", text: "the low corner gets colder than the forecast says" }
          ],
          correct: "D"
        },
        {
          id: "lied",
          sol: "10.RL.2.C",
          stem: "Sentence 22 says the stake had lied to Wren without meaning to. This description is ironic because —",
          choices: [
            { letter: "A", text: "Jiddo had warned her that the stakes would be stolen" },
            { letter: "B", text: "the tool she bought for accuracy gave her a false picture" },
            { letter: "C", text: "the stake was working perfectly when the frost arrived" },
            { letter: "D", text: "Wren had never actually looked at that corner's numbers" }
          ],
          correct: "B"
        },
        {
          id: "why17",
          sol: "10.RL.1.B",
          stem: "Which sentence best explains why Wren's phone gave no warning about the low corner of the field?",
          choices: [
            { letter: "A", text: "Sentence 17, which shows the stake's battery had died" },
            { letter: "B", text: "Sentence 7, which gives the forecast low of thirty-eight" },
            { letter: "C", text: "Sentence 2, which lists what each stake measures" },
            { letter: "D", text: "Sentence 9, which shows Jiddo walking to the creek" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "How does Jiddo's request in sentences 23 and 24 reshape the conflict set up in sentences 3 through 6?",
          choices: [
            { letter: "A", text: "It shows that Jiddo has finally given up on his own methods." },
            { letter: "B", text: "It reveals that Wren will return the sensors to the store." },
            { letter: "C", text: "It shows the two ways of knowing joining instead of competing." },
            { letter: "D", text: "It suggests that the family will sell the low corner of the field." }
          ],
          correct: "C"
        },
        {
          id: "deliberate",
          sol: "10.RV.1.D",
          stem: "The author says Jiddo moved deliberately in sentence 19, not simply slowly. Compared with slowly, deliberately suggests that he moves —",
          choices: [
            { letter: "A", text: "with stiffness caused by the cold night air" },
            { letter: "B", text: "without much interest in the work at hand" },
            { letter: "C", text: "in a way meant to show Wren her mistakes" },
            { letter: "D", text: "with careful purpose behind every action" }
          ],
          correct: "D"
        },
        {
          id: "silvered",
          sol: "10.RV.1.B",
          stem: "In sentence 21, the frost had silvered the grass. Silvered most nearly means —",
          choices: [
            { letter: "A", text: "flattened the grass with its weight" },
            { letter: "B", text: "coated the grass with a pale shine" },
            { letter: "C", text: "killed the grass down to its roots" },
            { letter: "D", text: "hidden the grass beneath the water" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── 3 · LITERARY · learning a language ───────────────────────── */
    {
      id: "g10-rl-c82-tired-tomatoes",
      family: "G10",
      title: "Tired Tomatoes",
      kind: "Literary · 10.RL",
      blurb: "A language app, a garden fence, and one sentence that comes out very wrong.",
      level: 1,
      passage:
        "<p>" + N(1) + "For the first two weeks of summer, Leo Brandt only waved at the woman next door. " +
        N(2) + "She was small and quick, and she worked in her backyard garden every morning under a wide straw hat. " +
        N(3) + "Her name was Mrs. Tran Thi Lan, but her granddaughter Thu, who was Leo's age, called her Ba, which Thu said meant grandmother. " +
        N(4) + "Ba spoke Vietnamese and very little English, and Leo spoke English and no Vietnamese at all. " +
        N(5) + "So they waved.</p>" +
        "<p>" + N(6) + "Then Leo found a language app on his phone and decided to change that. " +
        N(7) + "Every night he practiced for twenty minutes, repeating words into the microphone while the app's cartoon owl cheered or frowned. " +
        N(8) + "The hardest part was the tones. " +
        N(9) + "In Vietnamese, Thu explained, the same sound could mean completely different things depending on whether your voice rose, fell, or dipped. " +
        N(10) + "Leo's voice, he discovered, did whatever it wanted.</p>" +
        "<p>" + N(11) + "On a Saturday in July, he finally walked to the fence. " +
        N(12) + "He had practiced one sentence all week: a polite greeting and a compliment about the garden. " +
        N(13) + "He took a breath and said it. " +
        N(14) + "Ba looked at him for a long moment. " +
        N(15) + "Then she put down her trowel and laughed so hard she had to hold on to the fence post.</p>" +
        "<p>" + N(16) + "Thu came running out of the house. " +
        N(17) + "After Ba explained, Thu laughed too. " +
        N(18) + "\"You told her that her tomatoes look very tired,\" she said. " +
        N(19) + "Leo's face went hot. " +
        N(20) + "He wanted to go straight home and delete the app.</p>" +
        "<p>" + N(21) + "But Ba was still smiling, and she was waving him through the gate. " +
        N(22) + "She pointed at the tomato plants and said a word, slowly, the way a teacher would. " +
        N(23) + "Leo repeated it. " +
        N(24) + "She shook her head and said it again, and this time she drew the shape of the tone in the air with her finger, a little hill. " +
        N(25) + "He tried once more, and she nodded once, firmly, like a judge awarding points.</p>" +
        "<p>" + N(26) + "After that, Leo came over most mornings. " +
        N(27) + "Ba taught him the words for basil, for chili peppers, and for the long beans that climbed the fence. " +
        N(28) + "In return he taught her English words, and she wrote them in a small notebook she kept in her apron pocket. " +
        N(29) + "His tones were still clumsy, and her English was still careful and slow. " +
        N(30) + "By August, though, they could talk about the weather, the garden, and whether the tomatoes were tired, which became their favorite joke.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of the story about Leo and Ba?",
          choices: [
            { letter: "A", text: "A mistake made while trying can open the way to friendship." },
            { letter: "B", text: "Language apps are the fastest way to become truly fluent." },
            { letter: "C", text: "Neighbors are happiest when they keep a polite distance." },
            { letter: "D", text: "Gardening is a hobby best learned from older relatives." }
          ],
          correct: "A"
        },
        {
          id: "leo6",
          sol: "10.RL.1.C",
          stem: "Sentence 6, in which Leo finds the app and decides to change things, shows that he is someone who —",
          choices: [
            { letter: "A", text: "gives up quickly when a task becomes hard" },
            { letter: "B", text: "cares more about phones than about people" },
            { letter: "C", text: "takes action to solve a problem he notices" },
            { letter: "D", text: "wants to impress Thu more than her grandmother" }
          ],
          correct: "C"
        },
        {
          id: "plot",
          sol: "10.RL.1.B",
          stem: "Leo's mistake at the fence in sentences 13 through 18 mainly leads to —",
          choices: [
            { letter: "A", text: "an argument between Leo and Thu" },
            { letter: "B", text: "Leo deleting the language app" },
            { letter: "C", text: "Ba asking Thu to translate for good" },
            { letter: "D", text: "regular lessons in Ba's garden" }
          ],
          correct: "D"
        },
        {
          id: "judge",
          sol: "10.RL.2.A",
          stem: "In sentence 25, Ba nods like a judge awarding points. This comparison suggests that she —",
          choices: [
            { letter: "A", text: "is tired of correcting Leo's mistakes" },
            { letter: "B", text: "gives her approval only when it is earned" },
            { letter: "C", text: "thinks Leo is competing with her granddaughter" },
            { letter: "D", text: "would rather be working alone in her garden" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RL.2.B",
          stem: "The tone of the final paragraph (sentences 26 through 30) is best described as —",
          choices: [
            { letter: "A", text: "anxious and uncertain" },
            { letter: "B", text: "formal and distant" },
            { letter: "C", text: "bitter and mocking" },
            { letter: "D", text: "warm and good-humored" }
          ],
          correct: "D"
        },
        {
          id: "tones9",
          sol: "10.RL.3.A",
          stem: "The author includes Thu's explanation of Vietnamese tones in sentence 9 mainly to —",
          choices: [
            { letter: "A", text: "show that Thu secretly wants Leo to quit the app" },
            { letter: "B", text: "prepare the reader for the mistake Leo later makes" },
            { letter: "C", text: "explain why Ba writes English words in her notebook" },
            { letter: "D", text: "suggest that Leo has already become fluent" }
          ],
          correct: "B"
        },
        {
          id: "clumsy",
          sol: "10.RV.1.C",
          stem: "In sentence 29, the contrast with careful and slow helps show that clumsy most nearly means —",
          choices: [
            { letter: "A", text: "awkward and not yet skillful" },
            { letter: "B", text: "loud and hard for others to ignore" },
            { letter: "C", text: "rude and done on purpose" },
            { letter: "D", text: "quick and very confident" }
          ],
          correct: "A"
        },
        {
          id: "joke",
          sol: "10.RL.2.C",
          stem: "The mention of tired tomatoes at the end of sentence 30 is humorous mainly because it —",
          choices: [
            { letter: "A", text: "proves that the garden needs more water" },
            { letter: "B", text: "shows that Leo still cannot say any words" },
            { letter: "C", text: "turns Leo's embarrassing error into a joke" },
            { letter: "D", text: "reveals that Ba never understood his greeting" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── 4 · INFORMATIONAL · recycling ───────────────────────── */
    {
      id: "g10-ri-c82-sorting-line",
      family: "G10",
      title: "Fifteen Minutes on the Line",
      kind: "Informational · 10.RI",
      blurb: "What actually happens to the contents of a recycling bin, and why the label on the lid matters.",
      level: 2,
      passage:
        "<p>" + N(1) + "When a recycling truck tips its load onto the floor of the Marlow County sorting center, the pile that slides out looks like a single mountain of trash. " +
        N(2) + "Within about fifteen minutes, however, that mountain will be divided into more than a dozen separate streams, each one headed for a different buyer. " +
        N(3) + "Understanding how that happens explains why the rules printed on a recycling bin matter more than most people think.</p>" +
        "<p>" + N(4) + "The first step is mechanical. " +
        N(5) + "Workers use a front loader to push material onto a conveyor belt, which carries it past a series of machines that sort by size, weight, and shape. " +
        N(6) + "Spinning disks let flat paper ride over the top while bottles and cans fall through the gaps. " +
        N(7) + "A powerful magnet lifts out steel cans. " +
        N(8) + "Aluminum, which is not magnetic, is separated by a device that uses a rapidly changing magnetic field to push the cans off the belt, a process operators describe as making the cans jump. " +
        N(9) + "Optical scanners then identify different types of plastic by the way they reflect light, and quick puffs of air blow each type into its own bin.</p>" +
        "<p>" + N(10) + "The second step is human. " +
        N(11) + "At several points along the line, workers in gloves and safety glasses pull out items the machines cannot handle. " +
        N(12) + "The most troublesome are plastic shopping bags, garden hoses, and strings of holiday lights, which wrap around the spinning disks like thread around a spool. " +
        N(13) + "Twice a day, the line must be shut down so that a worker can climb onto the machinery and cut the tangles free with a knife. " +
        N(14) + "\"Every bag that goes in a bin costs us time,\" said Denise Okoro, who has managed the center for nine years. " +
        N(15) + "\"And time on this line is money.\"</p>" +
        "<p>" + N(16) + "The third step is selling. " +
        N(17) + "Sorted material is pressed into bales the size of a small car and sold to mills that turn it into new products. " +
        N(18) + "Here, cleanliness decides everything. " +
        N(19) + "A bale of cardboard soaked with grease from pizza boxes, or a bale of plastic mixed with food scraps, may be rejected by a buyer, and the whole load may end up in a landfill after all.</p>" +
        "<p>" + N(20) + "Last year, about 22 percent of what Marlow County residents put in their recycling bins was not recyclable at all. " +
        N(21) + "Okoro calls this wishcycling: tossing in an item in the hope that it will somehow be useful. " +
        N(22) + "The habit comes from good intentions, but its effect is often the opposite of what people intend. " +
        N(23) + "The county's goal is to bring that rate below 10 percent within three years, and its main tool is a simple one: a new bin label that lists only six kinds of items. " +
        N(24) + "\"If it's not on the label,\" Okoro said, \"it's not in the bin. " +
        N(25) + "When in doubt, leave it out.\"</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the article about the Marlow County sorting center?",
          choices: [
            { letter: "A", text: "Sorting machines have made human workers almost unnecessary." },
            { letter: "B", text: "Recycling works only when bins hold clean, accepted items." },
            { letter: "C", text: "Most recycled material is sent to landfills in the end." },
            { letter: "D", text: "Aluminum is the most valuable material the center sells." }
          ],
          correct: "B"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          stem: "How are sentences 4 through 19 of the sorting-center article mainly organized?",
          choices: [
            { letter: "A", text: "as a problem followed by several rejected solutions" },
            { letter: "B", text: "as a comparison of two different counties" },
            { letter: "C", text: "as a list of opinions from different workers" },
            { letter: "D", text: "as a sequence of steps that material passes through" }
          ],
          correct: "D"
        },
        {
          id: "alum",
          sol: "10.RI.1.B",
          stem: "According to sentence 8, how does the center separate aluminum cans from the rest of the load?",
          choices: [
            { letter: "A", text: "A changing magnetic field pushes them off the belt." },
            { letter: "B", text: "A strong magnet lifts them up along with steel cans." },
            { letter: "C", text: "Optical scanners spot them and puffs of air blow them aside." },
            { letter: "D", text: "Spinning disks let them fall through gaps in the line." }
          ],
          correct: "A"
        },
        {
          id: "spool",
          sol: "10.RI.2.B",
          stem: "The comparison in sentence 12 of bags and hoses wrapping like thread around a spool mainly emphasizes —",
          choices: [
            { letter: "A", text: "how colorful the holiday lights look on the belt" },
            { letter: "B", text: "how carefully workers sort each item by hand" },
            { letter: "C", text: "how tightly such items wind around the machines" },
            { letter: "D", text: "how quickly the line can be restarted each day" }
          ],
          correct: "C"
        },
        {
          id: "quote",
          sol: "10.RI.1.C",
          stem: "The author includes Denise Okoro's words in sentences 14 and 15 mainly to —",
          choices: [
            { letter: "A", text: "show the real cost that wrong items create for the center" },
            { letter: "B", text: "suggest that the center should stop accepting plastic" },
            { letter: "C", text: "explain how many years Okoro has worked at the center" },
            { letter: "D", text: "argue that sorting workers should be paid more" }
          ],
          correct: "A"
        },
        {
          id: "evidence22",
          sol: "10.RI.2.C",
          stem: "Which sentence provides the strongest evidence for the claim in sentence 22 that wishcycling can backfire?",
          choices: [
            { letter: "A", text: "Sentence 2, about the dozen separate streams" },
            { letter: "B", text: "Sentence 7, about the magnet that lifts steel" },
            { letter: "C", text: "Sentence 19, about bales rejected by buyers" },
            { letter: "D", text: "Sentence 17, about bales the size of a small car" }
          ],
          correct: "C"
        },
        {
          id: "wishcycling",
          sol: "10.RV.1.C",
          stem: "Based on the explanation in sentence 21, wishcycling most nearly means —",
          choices: [
            { letter: "A", text: "sorting recycling at home into separate bins" },
            { letter: "B", text: "buying products made from recycled material" },
            { letter: "C", text: "returning cans to a store for a small refund" },
            { letter: "D", text: "binning an item hoping it can be recycled" }
          ],
          correct: "D"
        },
        {
          id: "label",
          sol: "10.RI.1.B",
          stem: "Based on sentences 23 through 25, the county expects its new bin label to lower the rate mainly because the label —",
          choices: [
            { letter: "A", text: "warns residents that they will be fined for errors" },
            { letter: "B", text: "replaces guesswork with a short, clear list" },
            { letter: "C", text: "explains how the optical scanners work" },
            { letter: "D", text: "asks residents to rinse out every container" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── 5 · INFORMATIONAL · learning a language ───────────────────────── */
    {
      id: "g10-ri-c82-missed-chance",
      family: "G10",
      title: "The Chance You Didn't Miss",
      kind: "Informational · 10.RI",
      blurb: "Do teenagers start a new language too late? The answer depends on what counts as success.",
      level: 3,
      passage:
        "<p>" + N(1) + "Ask a room of high school freshmen when the best time to learn a new language is, and most will give the same answer: earlier than now. " +
        N(2) + "The belief that young children absorb languages effortlessly while teenagers struggle is so widespread that many students treat their first year of Spanish or Mandarin as a lost cause before it begins. " +
        N(3) + "The research tells a more complicated, and more encouraging, story.</p>" +
        "<p>" + N(4) + "It is true that age matters for some parts of language. " +
        N(5) + "People who begin hearing a language in early childhood are far more likely to develop an accent that native speakers cannot tell apart from their own. " +
        N(6) + "Very young learners also seem to pick up certain grammar patterns without being taught them, simply by hearing them thousands of times. " +
        N(7) + "If the goal is to sound exactly like someone raised in Madrid or Shanghai, an early start is a real advantage.</p>" +
        "<p>" + N(8) + "But accent is only one measure of success, and for most learners it is not the most important one. " +
        N(9) + "When researchers compare learners over the first year or two of study, older children and teenagers frequently outpace young children. " +
        N(10) + "Teenagers can read, take notes, notice patterns, and ask why a rule works the way it does; a five-year-old can do none of these things. " +
        N(11) + "In other words, the young child's advantage shows up over many years of immersion, while the teenager's advantage shows up in the classroom, where most students actually learn.</p>" +
        "<p>" + N(12) + "What, then, separates teenagers who become capable speakers from those who forget everything after the final exam? " +
        N(13) + "The answer appears to depend less on age than on habits. " +
        N(14) + "Studies of memory consistently find that material reviewed in short sessions spread over days and weeks is kept far longer than material crammed into a single night; teachers call this spaced practice. " +
        N(15) + "Retention also improves when learners must produce the language, by speaking or writing, rather than only recognizing it on a multiple-choice quiz. " +
        N(16) + "And learners who have a reason to use the language, such as a relative, a job, or a friend, tend to keep going after the inevitable plateau, the frustrating stretch of weeks when progress seems to stop.</p>" +
        "<p>" + N(17) + "None of this means that learning a language as a teenager is easy. " +
        N(18) + "It takes hundreds of hours, and the accent of a fifteen-year-old beginner may never fully disappear. " +
        N(19) + "But an accent is not a failure; it is evidence of a life lived partly in another language. " +
        N(20) + "Millions of people speak a second language fluently, do business in it, and make friends in it, while sounding unmistakably like where they came from.</p>" +
        "<p>" + N(21) + "The freshmen who believe they missed their chance are partly right, but only about one thing. " +
        N(22) + "They have missed the chance to sound like a native speaker. " +
        N(23) + "They have not missed the chance to understand, to be understood, and to open a door that most of their classmates will leave shut.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the article about teenagers learning a new language?",
          choices: [
            { letter: "A", text: "Students should begin a second language before age five." },
            { letter: "B", text: "Accent is the clearest sign that a learner has succeeded." },
            { letter: "C", text: "Teens can become capable speakers, since habits outweigh age." },
            { letter: "D", text: "Classroom study works far better than living in another country." }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          stem: "How does the author organize sentences 4 through 11 of the language article?",
          choices: [
            { letter: "A", text: "by granting a point about age and then showing its limits" },
            { letter: "B", text: "by telling one student's story from beginning to end" },
            { letter: "C", text: "by listing languages in order from easiest to hardest" },
            { letter: "D", text: "by describing a problem and then a single solution" }
          ],
          correct: "A"
        },
        {
          id: "teenedge",
          sol: "10.RI.1.B",
          stem: "According to sentences 9 and 10, what gives teenagers an edge over young children during the first years of study?",
          choices: [
            { letter: "A", text: "They hear the language thousands of times at home." },
            { letter: "B", text: "They develop an accent that native speakers accept." },
            { letter: "C", text: "They absorb grammar without ever being taught it." },
            { letter: "D", text: "They can read, take notes, and ask why rules work." }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "10.RI.1.C",
          stem: "The author's main purpose in the article about learning languages as a teenager is to —",
          choices: [
            { letter: "A", text: "persuade schools to offer languages in kindergarten" },
            { letter: "B", text: "correct a belief that discourages students from trying" },
            { letter: "C", text: "compare how hard Spanish and Mandarin are to learn" },
            { letter: "D", text: "explain how researchers measure and rate a learner's accent" }
          ],
          correct: "B"
        },
        {
          id: "door",
          sol: "10.RI.2.B",
          stem: "In sentence 23, the image of a door that most classmates will leave shut mainly emphasizes —",
          choices: [
            { letter: "A", text: "how many classrooms lack enough language teachers" },
            { letter: "B", text: "the rare opportunity that learning a language offers" },
            { letter: "C", text: "the danger of giving up on a subject too early" },
            { letter: "D", text: "how difficult it is to lose an accent completely" }
          ],
          correct: "B"
        },
        {
          id: "concede",
          sol: "10.RI.2.C",
          stem: "In sentences 17 and 18, the author admits that learning a language as a teenager takes hundreds of hours mainly to —",
          choices: [
            { letter: "A", text: "warn readers that most teenagers will fail" },
            { letter: "B", text: "argue that schools should add more class time" },
            { letter: "C", text: "suggest that accent is the only real measure" },
            { letter: "D", text: "grant a fair point while keeping the main claim" }
          ],
          correct: "D"
        },
        {
          id: "retention",
          sol: "10.RV.1.A",
          stem: "The word retention in sentence 15 comes from the Latin re- (back) and tenere (to hold). Based on these parts, retention refers to —",
          choices: [
            { letter: "A", text: "returning to a language after a long break" },
            { letter: "B", text: "holding back from speaking until ready" },
            { letter: "C", text: "keeping learned material in memory" },
            { letter: "D", text: "repeating a quiz until it is passed" }
          ],
          correct: "C"
        },
        {
          id: "plateau",
          sol: "10.RV.1.B",
          stem: "Which phrase from sentence 16 best helps the reader understand the meaning of plateau?",
          choices: [
            { letter: "A", text: "when progress seems to stop" },
            { letter: "B", text: "a reason to use the language" },
            { letter: "C", text: "a relative, a job, or a friend" },
            { letter: "D", text: "tend to keep going after" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── 6 · VOCABULARY · farm ───────────────────────── */
    {
      id: "g10-rv-c82-milking-parlor",
      family: "G10",
      title: "Four-Thirty on Silva Farm",
      kind: "Vocabulary · 10.RV",
      blurb: "A dairy morning in the Shenandoah Valley, a hat nobody moves, and six words worth knowing.",
      level: 1,
      passage:
        "<p>" + N(1) + "My alarm goes off at 4:30 every morning, and on our family's dairy farm in the Shenandoah Valley, that counts as sleeping in. " +
        N(2) + "My father has already been in the barn for half an hour. " +
        N(3) + "By the time I pull on my boots, the cows are lined up outside the milking parlor, sixty-two of them, each one waiting for her turn in the stalls.</p>" +
        "<p>" + N(4) + "My first job is to <strong>replenish</strong> the feed bins. " +
        N(5) + "Every night the cows empty them, and every morning I fill them up again with hay and grain from the storage shed. " +
        N(6) + "It takes twenty minutes and four trips with the wheelbarrow. " +
        N(7) + "Then I help my father attach the milking machines and watch the numbers on the screen. " +
        N(8) + "A cow that gives less milk than usual might be getting sick, so we have to stay <strong>vigilant</strong> and keep our eyes on every number. " +
        N(9) + "My father says a good farmer notices the small changes before they become big ones.</p>" +
        "<p>" + N(10) + "Our farm has belonged to my family for three generations. " +
        N(11) + "My grandmother ran it before my father did, and her father ran it before her. " +
        N(12) + "Dad still talks about his <strong>predecessor</strong> as if she might walk in at any moment to check his work. " +
        N(13) + "Her weathered straw hat, faded by thirty summers of sun, still hangs on a nail by the barn door. " +
        N(14) + "Nobody has ever moved it.</p>" +
        "<p>" + N(15) + "Winter is the hardest season. " +
        N(16) + "In <strong>inclement</strong> weather, when sleet blows sideways and the lane turns to ice, the milk truck sometimes cannot reach us. " +
        N(17) + "Last January we had to keep two days of milk in the cooling tank and hope the power stayed on. " +
        N(18) + "It did, but only because my father ran the generator all night and checked it every hour.</p>" +
        "<p>" + N(19) + "People sometimes ask why we keep going when the work is so hard and the money is so uncertain. " +
        N(20) + "Some years the price of milk drops so low that the farm barely covers its costs. " +
        N(21) + "Other years, a good hay crop can <strong>yield</strong> enough feed to last until spring, with some left over to sell to neighbors. " +
        N(22) + "My father never complains about the bad years. " +
        N(23) + "He is <strong>steadfast</strong>, the way a fence post is steadfast: he simply stays where he is needed.</p>" +
        "<p>" + N(24) + "I don't know yet whether I will run the farm someday. " +
        N(25) + "I might study engineering, or I might come home. " +
        N(26) + "But every morning, when I walk past my grandmother's hat on its nail, I think about the people who stood in this barn before me, and I fill the feed bins a little more carefully.</p>",
      claims: [
        {
          id: "replenish",
          sol: "10.RV.1.A",
          stem: "The word replenish in sentence 4 begins with re-, as in refill and return. Based on this prefix and sentence 5, replenish most nearly means to —",
          choices: [
            { letter: "A", text: "measure carefully" },
            { letter: "B", text: "fill up again" },
            { letter: "C", text: "clean out fully" },
            { letter: "D", text: "move to storage" }
          ],
          correct: "B"
        },
        {
          id: "predecessor",
          sol: "10.RV.1.A",
          stem: "The prefix pre- in predecessor (sentence 12) means before, as in preview. In this passage, the father's predecessor is —",
          choices: [
            { letter: "A", text: "the neighbor who buys the extra hay" },
            { letter: "B", text: "the driver who picks up the milk" },
            { letter: "C", text: "the narrator, who may take it over" },
            { letter: "D", text: "the person who ran the farm before him" }
          ],
          correct: "D"
        },
        {
          id: "vigilant",
          sol: "10.RV.1.B",
          stem: "As used in sentence 8 about the milk numbers, the word vigilant most nearly means —",
          choices: [
            { letter: "A", text: "watchful and alert" },
            { letter: "B", text: "tired and slow" },
            { letter: "C", text: "calm and patient" },
            { letter: "D", text: "busy and rushed" }
          ],
          correct: "A"
        },
        {
          id: "yield",
          sol: "10.RV.1.B",
          stem: "In sentence 21, the word yield, describing a good hay crop, most nearly means —",
          choices: [
            { letter: "A", text: "give way to others" },
            { letter: "B", text: "slow down and stop" },
            { letter: "C", text: "produce or provide" },
            { letter: "D", text: "give up an argument" }
          ],
          correct: "C"
        },
        {
          id: "inclement",
          sol: "10.RV.1.C",
          stem: "Which words from sentence 16 best help the reader understand the meaning of inclement?",
          choices: [
            { letter: "A", text: "the milk truck sometimes" },
            { letter: "B", text: "cannot reach us" },
            { letter: "C", text: "sleet blows sideways" },
            { letter: "D", text: "the lane" }
          ],
          correct: "C"
        },
        {
          id: "parlor",
          sol: "10.RV.1.C",
          stem: "Parlor can mean a sitting room in a house. In sentence 3, the milking parlor is most likely —",
          choices: [
            { letter: "A", text: "a room in the barn where the cows are milked" },
            { letter: "B", text: "a front room where the family greets visitors" },
            { letter: "C", text: "a shop in town that sells milk and ice cream" },
            { letter: "D", text: "a shed where hay and grain are kept dry" }
          ],
          correct: "A"
        },
        {
          id: "steadfast",
          sol: "10.RV.1.D",
          stem: "In sentence 23, the narrator calls his father steadfast. Compared with stubborn, the word steadfast suggests —",
          choices: [
            { letter: "A", text: "a refusal to listen to other people's ideas" },
            { letter: "B", text: "a habit of complaining when times are hard" },
            { letter: "C", text: "a lack of interest in changing the farm" },
            { letter: "D", text: "a loyal, dependable firmness worth admiring" }
          ],
          correct: "D"
        },
        {
          id: "weathered",
          sol: "10.RV.1.D",
          stem: "The narrator calls the straw hat weathered in sentence 13 instead of simply old. Compared with old, weathered suggests that the hat —",
          choices: [
            { letter: "A", text: "was bought cheaply and never cared for" },
            { letter: "B", text: "was worn through years of outdoor work" },
            { letter: "C", text: "is too damaged for anyone to wear now" },
            { letter: "D", text: "is kept as a joke among the family" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── 7 · VOCABULARY · chess ───────────────────────── */
    {
      id: "g10-rv-c82-declined-pawn",
      family: "G10",
      title: "The Declined Pawn",
      kind: "Vocabulary · 10.RV",
      blurb: "A freshman's favorite opening, a quiet senior captain, and a lesson that takes a semester to sink in.",
      level: 3,
      passage:
        "<p>" + N(1) + "In <strong>retrospect</strong>, I can see that the most important game I played in my first year on the Kessler High chess team was one I lost, though it took me most of a semester to understand why. " +
        N(2) + "At the time, I was fourteen, newly arrived from a school with no chess club at all, and convinced that winning was the only proof that I belonged.</p>" +
        "<p>" + N(3) + "My opponent in the club championship final was Priya Raman, a senior who had been team captain for two years. " +
        N(4) + "Priya was <strong>reticent</strong> off the board; she ate lunch with a paperback propped against her water bottle, and in team meetings she spoke only when our coach asked her a direct question. " +
        N(5) + "Several freshmen assumed she was unfriendly. " +
        N(6) + "I assumed she was beatable.</p>" +
        "<p>" + N(7) + "I opened with a <strong>gambit</strong> I had studied for weeks, offering a pawn on the third move in exchange for faster development of my pieces. " +
        N(8) + "It is an old trick that works best against players who grab material greedily. " +
        N(9) + "Priya looked at the pawn for a long time, then declined it and played a quiet move I had never seen in any of my books. " +
        N(10) + "Within ten moves my early advantage had evaporated, and I was the one defending.</p>" +
        "<p>" + N(11) + "What I remember most is not the position but her <strong>composure</strong>. " +
        N(12) + "When I made a threat, she did not flinch or sigh or drum her fingers; she simply studied the board, hands folded, as though the threat were a question she had been asked politely. " +
        N(13) + "When I blundered a knight on move twenty-six, she did not smile. " +
        N(14) + "She took the piece, wrote down the move, and went on playing with exactly the same expression.</p>" +
        "<p>" + N(15) + "On move thirty-four, she played the most <strong>audacious</strong> move of the game, giving up her queen for my rook and bishop, a trade that every beginner is taught to avoid. " +
        N(16) + "I had to <strong>scrutinize</strong> the board for nearly ten minutes before I understood that the trade was not a mistake; three moves later, her two rooks would trap my king against the edge. " +
        N(17) + "I could have played on, but there was no point. " +
        N(18) + "I tipped my king over to <strong>concede</strong>, and she shook my hand.</p>" +
        "<p>" + N(19) + "\"You played the opening well,\" she said. " +
        N(20) + "It was the longest sentence she had spoken to me all year. " +
        N(21) + "\"Most people don't know that line. " +
        N(22) + "Next time, don't fall in love with it.\"</p>" +
        "<p>" + N(23) + "It took me months to understand her advice. " +
        N(24) + "I had loved my gambit because I had prepared it, not because it fit the game in front of me. " +
        N(25) + "Priya, by contrast, had no favorite moves; she had only the position, and whatever it asked of her.</p>",
      claims: [
        {
          id: "retrospect",
          sol: "10.RV.1.A",
          stem: "Retrospect in sentence 1 joins retro- (backward) with spect (look), as in spectator. The phrase in retrospect most nearly means —",
          choices: [
            { letter: "A", text: "looking back on past events" },
            { letter: "B", text: "watching others compete" },
            { letter: "C", text: "planning for the future" },
            { letter: "D", text: "checking a rule once more" }
          ],
          correct: "A"
        },
        {
          id: "composure",
          sol: "10.RV.1.A",
          stem: "Composure in sentence 11 shares the root pos (to put or place) with compose. Based on this root and sentences 12 through 14, composure most nearly means —",
          choices: [
            { letter: "A", text: "a talent for setting up the pieces" },
            { letter: "B", text: "a habit of writing every move down" },
            { letter: "C", text: "a calm, collected state of mind" },
            { letter: "D", text: "a fixed position at the board" }
          ],
          correct: "C"
        },
        {
          id: "concede",
          sol: "10.RV.1.B",
          stem: "As used in sentence 18, when the narrator tips over the king, the word concede most nearly means —",
          choices: [
            { letter: "A", text: "ask for a rematch" },
            { letter: "B", text: "request more time" },
            { letter: "C", text: "protest a decision" },
            { letter: "D", text: "admit defeat" }
          ],
          correct: "D"
        },
        {
          id: "scrutinize",
          sol: "10.RV.1.B",
          stem: "In sentence 16, the narrator needs nearly ten minutes to scrutinize the board. Scrutinize most nearly means —",
          choices: [
            { letter: "A", text: "rearrange quickly" },
            { letter: "B", text: "examine closely" },
            { letter: "C", text: "glance at briefly" },
            { letter: "D", text: "describe aloud" }
          ],
          correct: "B"
        },
        {
          id: "gambit",
          sol: "10.RV.1.C",
          stem: "Based on the explanation in sentences 7 and 8, a gambit in chess is —",
          choices: [
            { letter: "A", text: "an opening that gives up material to gain an edge" },
            { letter: "B", text: "a rule that forbids a player from taking a pawn" },
            { letter: "C", text: "a trade in which both players lose their queens" },
            { letter: "D", text: "a quiet move that defends the king from attack" }
          ],
          correct: "A"
        },
        {
          id: "reticent",
          sol: "10.RV.1.D",
          stem: "Sentence 4 calls Priya reticent, but sentence 5 says freshmen thought her unfriendly. Compared with unfriendly, reticent suggests that Priya is —",
          choices: [
            { letter: "A", text: "cold and scornful toward all newcomers" },
            { letter: "B", text: "bored by the team and its meetings" },
            { letter: "C", text: "nervous about speaking to her coach" },
            { letter: "D", text: "quiet and reserved rather than unkind" }
          ],
          correct: "D"
        },
        {
          id: "audacious",
          sol: "10.RV.1.D",
          stem: "The narrator calls the queen trade in sentence 15 audacious, not reckless. Compared with reckless, audacious suggests a move that is —",
          choices: [
            { letter: "A", text: "careless and likely to fail" },
            { letter: "B", text: "daring but carefully judged" },
            { letter: "C", text: "polite and quietly cautious" },
            { letter: "D", text: "forbidden by the club rules" }
          ],
          correct: "B"
        },
        {
          id: "narrator",
          sol: "10.RL.1.C",
          stem: "Taken together, sentences 2, 6, and 24 characterize the narrator at the time of the championship final as someone who —",
          choices: [
            { letter: "A", text: "doubted any freshman could win the final" },
            { letter: "B", text: "admired Priya too much to play well" },
            { letter: "C", text: "cared more about a plan than the game" },
            { letter: "D", text: "wanted to quit the team after losing" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── 8 · PAIRED · recycling ───────────────────────── */
    {
      id: "g10-dsr-c82-one-bin",
      family: "G10",
      title: "One Cart for Everything",
      kind: "Paired texts · 10.DSR",
      blurb: "A township switches to single-stream recycling; a student asks what the numbers leave out.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Ridgefield Township Public Works Notice: One Cart, Starting March 1</strong></p>" +
        "<p>" + N(1) + "Beginning March 1, Ridgefield Township will switch from two-bin recycling to a single-stream system. " +
        N(2) + "Residents will no longer need to separate paper and cardboard from bottles, cans, and plastic containers; all accepted recyclables will go into one blue cart, collected every other week. " +
        N(3) + "The change follows a six-month pilot program on the township's east side. " +
        N(4) + "During the pilot, the share of households that set out recycling on collection day rose from 48 percent to 71 percent. " +
        N(5) + "The total weight of recycling collected from those streets nearly doubled. " +
        N(6) + "Officials believe the simpler system removes the main reason residents gave for not recycling: confusion about which item goes in which bin. " +
        N(7) + "\"People told us they wanted to do the right thing but didn't have time to sort,\" said Public Works Director Arturo Bell. " +
        N(8) + "\"One cart makes the right thing the easy thing.\" " +
        N(9) + "Single-stream collection also allows the township to use automated trucks with a mechanical arm, reducing the number of routes and saving an estimated $140,000 a year in labor and fuel. " +
        N(10) + "Residents will receive their new 96-gallon carts during the last two weeks of February. " +
        N(11) + "Old bins may be kept for storage or left at the curb on March 1 for pickup. " +
        N(12) + "A list of accepted items is printed on each cart's lid.</p>" +
        "<p><strong>Text 2 — Letter to the Ridgefield Courier, from Hana Yoshida, Ridgefield High Green Club</strong></p>" +
        "<p>" + N(13) + "The township's notice celebrates the pilot program's numbers, and I understand why: more people recycling sounds like progress. " +
        N(14) + "But the notice measures how much material goes into the carts, not how much actually gets recycled. " +
        N(15) + "Those are not the same thing. " +
        N(16) + "When our Green Club toured the regional sorting center in January, the staff explained that single-stream loads arrive far more contaminated than sorted ones. " +
        N(17) + "Broken glass ends up pressed into paper, and wet food containers soak cardboard until mills will not buy it. " +
        N(18) + "One supervisor told us that some single-stream communities send a quarter of their recycling to the landfill. " +
        N(19) + "A bigger cart, in other words, may simply mean a bigger pile of trash wearing a recycling label. " +
        N(20) + "I am not asking the township to cancel the change; the higher participation is real and worth keeping. " +
        N(21) + "I am asking it to publish a second number alongside the first: the percentage of collected material that sorting centers actually sell. " +
        N(22) + "I am also asking for a short education campaign before March 1, so that residents learn what the list on the lid means before they start filling 96 gallons. " +
        N(23) + "Convenience can bring people to the cart. " +
        N(24) + "Only clear information can make what they put inside it count.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "On which point do the Ridgefield public works notice and Hana Yoshida's letter agree?",
          choices: [
            { letter: "A", text: "The township should go back to two-bin recycling." },
            { letter: "B", text: "More households recycled during the pilot program." },
            { letter: "C", text: "Automated trucks will lower the township's costs." },
            { letter: "D", text: "Glass should no longer be accepted in the carts." }
          ],
          correct: "B"
        },
        {
          id: "measure",
          sol: "10.DSR.D",
          stem: "How does Text 2 differ from Text 1 in the way it judges whether the one-cart system succeeds?",
          choices: [
            { letter: "A", text: "Text 2 counts trucks and routes; Text 1 counts the new carts." },
            { letter: "B", text: "Text 2 relies on cost; Text 1 relies on resident surveys." },
            { letter: "C", text: "Text 2 judges by convenience; Text 1 judges by weight." },
            { letter: "D", text: "Text 2 asks what gets sold; Text 1 counts what is collected." }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          stem: "Select TWO sentences that together best show the tension between convenience and clean recycling across the two Ridgefield texts.",
          choices: [
            { letter: "A", text: "Sentence 8, \"One cart makes the right thing the easy thing.\"" },
            { letter: "B", text: "Sentence 10, about when the new carts will be delivered" },
            { letter: "C", text: "Sentence 17, about glass in paper and soaked cardboard" },
            { letter: "D", text: "Sentence 11, about what to do with the old bins" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "both",
          sol: "10.DSR.E",
          stem: "Based on both texts, which result would most likely satisfy both Arturo Bell and Hana Yoshida?",
          choices: [
            { letter: "A", text: "fewer collection routes and much smaller carts" },
            { letter: "B", text: "a return to separate bins for paper and glass" },
            { letter: "C", text: "high participation and little rejected material" },
            { letter: "D", text: "weekly pickup instead of every other week" }
          ],
          correct: "C"
        },
        {
          id: "respond",
          sol: "10.DSR.E",
          stem: "How does Hana Yoshida's letter respond to the pilot results reported in sentences 4 and 5 of Text 1?",
          choices: [
            { letter: "A", text: "She accepts them but says they leave out what is recycled." },
            { letter: "B", text: "She argues that the township made up the numbers it reports." },
            { letter: "C", text: "She claims the east side is not like the rest of town." },
            { letter: "D", text: "She ignores them and writes only about the new trucks." }
          ],
          correct: "A"
        },
        {
          id: "next",
          sol: "10.DSR.E",
          stem: "Using both Ridgefield texts, what is the most reasonable step for the township to take before March 1?",
          choices: [
            { letter: "A", text: "Delay delivery of the carts until next year." },
            { letter: "B", text: "Remove the list of accepted items from the cart lids." },
            { letter: "C", text: "Cancel the automated trucks to save jobs." },
            { letter: "D", text: "Teach residents what the lid's item list means." }
          ],
          correct: "D"
        },
        {
          id: "reason",
          sol: "10.RI.1.B",
          stem: "According to sentence 6 of Text 1, why do officials believe the one-cart system will raise participation?",
          choices: [
            { letter: "A", text: "It lets residents put out recycling every week." },
            { letter: "B", text: "It removes confusion about where items belong." },
            { letter: "C", text: "It pays residents for every pound they recycle." },
            { letter: "D", text: "It lets residents keep their old bins for storage." }
          ],
          correct: "B"
        },
        {
          id: "label",
          sol: "10.RI.2.B",
          stem: "In sentence 19, the phrase a bigger pile of trash wearing a recycling label mainly suggests that —",
          choices: [
            { letter: "A", text: "the new carts are too large for most families" },
            { letter: "B", text: "the township should print clearer, larger cart labels" },
            { letter: "C", text: "residents are throwing away too much clothing" },
            { letter: "D", text: "collected material may look recycled but not be" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── 9 · PAIRED · learning a language ───────────────────────── */
    {
      id: "g10-dsr-c82-app-or-talk",
      family: "G10",
      title: "Streaks and Conversations",
      kind: "Paired texts · 10.DSR",
      blurb: "A student credits five minutes a day; a teacher says the words only count once you say them aloud.",
      level: 3,
      passage:
        "<p><strong>Text 1 — The Five-Minute Habit, by Daniel Osei, student columnist</strong></p>" +
        "<p>" + N(1) + "Two years ago I could not order a sandwich in Portuguese; last summer I spent a month with my cousins in Recife and argued with them about soccer every night. " +
        N(2) + "People assume I took an intensive course or hired a tutor. " +
        N(3) + "I did neither. " +
        N(4) + "What I did was practice for at least five minutes every single day on a free app: on the bus, in line at the cafeteria, and once, I admit, during a fire drill. " +
        N(5) + "Five minutes sounds like nothing, and that is exactly the point. " +
        N(6) + "A goal that small is almost impossible to skip, and a habit that is never skipped grows. " +
        N(7) + "By the end of the first year I had practiced on 365 days in a row, and on most days, once I started, five minutes turned into twenty. " +
        N(8) + "The app was not perfect. " +
        N(9) + "Its cartoon sentences were sometimes strange, and it could not teach me how fast my cousins actually talk. " +
        N(10) + "But it gave me a foundation of thousands of words and patterns, so that when I finally arrived in Recife I was not starting from zero; I was filling in gaps. " +
        N(11) + "Students who say they have no time to learn a language are usually imagining hours of study. " +
        N(12) + "They should imagine five minutes instead, and then try not to stop.</p>" +
        "<p><strong>Text 2 — Talk First, by Ines Calderon, Spanish teacher</strong></p>" +
        "<p>" + N(13) + "Every September, a few of my students arrive proud of their app streaks, and every September I watch the same thing happen when I ask them a simple question aloud. " +
        N(14) + "They freeze. " +
        N(15) + "They can recognize hundreds of words on a screen, often more than their classmates, but they cannot pull those words out of memory fast enough to answer a person waiting in front of them. " +
        N(16) + "Recognizing a language and producing it are different skills, and only one of them is practiced by tapping the correct answer from a list. " +
        N(17) + "I do not tell students to delete their apps. " +
        N(18) + "Daily practice of any kind builds the habit that every learner needs, and a large vocabulary is useful. " +
        N(19) + "But I tell them that the app is the warm-up, not the game. " +
        N(20) + "The game is conversation: messy, slow, full of mistakes, and impossible to fake. " +
        N(21) + "In my classes, students spend the first ten minutes of every period talking in pairs, and by November even the quietest ones answer without freezing. " +
        N(22) + "If you are learning on your own, find someone to talk to, such as a relative, a classmate, or a conversation group at the library, and talk badly until you talk well. " +
        N(23) + "The words you have stored will not help you much until you practice taking them back out.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "Daniel Osei and Ms. Calderon would most likely agree that —",
          choices: [
            { letter: "A", text: "practicing every day builds a valuable habit" },
            { letter: "B", text: "language apps should be removed from phones" },
            { letter: "C", text: "talking in pairs is the best use of class time" },
            { letter: "D", text: "a month abroad matters more than vocabulary" }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "The texts by Daniel Osei and Ms. Calderon differ mainly in that Text 2 —",
          choices: [
            { letter: "A", text: "claims that daily practice has no real value" },
            { letter: "B", text: "argues that learners need a paid tutor in order to improve" },
            { letter: "C", text: "makes conversation, not app practice, the core skill" },
            { letter: "D", text: "says vocabulary matters more than speaking aloud" }
          ],
          correct: "C"
        },
        {
          id: "limit",
          sol: "10.DSR.D",
          stem: "Select TWO sentences, one from each text, that together best show a limit of learning a language only through an app.",
          choices: [
            { letter: "A", text: "Sentence 6, about a habit that is never skipped" },
            { letter: "B", text: "Sentence 9, about how fast the cousins talk" },
            { letter: "C", text: "Sentence 15, about students who cannot answer" },
            { letter: "D", text: "Sentence 18, about a large and useful vocabulary" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "explain9",
          sol: "10.DSR.E",
          stem: "How does Text 2 help explain the gap Daniel admits to in sentence 9 of Text 1?",
          choices: [
            { letter: "A", text: "It says apps use cartoon sentences that confuse learners." },
            { letter: "B", text: "It says Portuguese is much harder to hear than Spanish is." },
            { letter: "C", text: "It says streaks make students too proud to listen." },
            { letter: "D", text: "It says apps train recognition, not quick recall in speech." }
          ],
          correct: "D"
        },
        {
          id: "trip",
          sol: "10.DSR.E",
          stem: "A reader who uses both texts could best conclude that a student preparing to visit relatives abroad should —",
          choices: [
            { letter: "A", text: "stop using an app once a streak is broken" },
            { letter: "B", text: "pair daily app practice with real conversation" },
            { letter: "C", text: "wait to study until arriving in the new country" },
            { letter: "D", text: "focus only on reading and writing the language" }
          ],
          correct: "B"
        },
        {
          id: "warmup",
          sol: "10.DSR.E",
          stem: "Ms. Calderon's comparison of the app to a warm-up in sentence 19 most closely fits which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 4, about practicing during a fire drill" },
            { letter: "B", text: "Sentence 7, about practicing 365 days in a row" },
            { letter: "C", text: "Sentence 12, about imagining just five minutes" },
            { letter: "D", text: "Sentence 10, about arriving with gaps to fill" }
          ],
          correct: "D"
        },
        {
          id: "central2",
          sol: "10.RI.1.A",
          stem: "Which statement best summarizes the central idea of Ms. Calderon's text, Talk First?",
          choices: [
            { letter: "A", text: "Apps build vocabulary, but speaking practice makes speakers." },
            { letter: "B", text: "Quiet students rarely learn to speak a new language well." },
            { letter: "C", text: "Teachers should require students to keep long app streaks." },
            { letter: "D", text: "Spanish is best learned in a library conversation group." }
          ],
          correct: "A"
        },
        {
          id: "firedrill",
          sol: "10.RI.1.C",
          stem: "Daniel mentions practicing during a fire drill in sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "warn readers about breaking school safety rules" },
            { letter: "B", text: "show with humor how firmly he kept his daily habit" },
            { letter: "C", text: "prove that the app works without an internet signal" },
            { letter: "D", text: "explain why he never hired a tutor or took a class" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── 10 · POETRY · farm ───────────────────────── */
    {
      id: "g10-rl-c82-last-cutting",
      family: "G10",
      title: "Last Cutting",
      kind: "Poetry · 10.RL",
      blurb: "Three dry days, a hay field, and a loft that will open again in January.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My mother reads the sky the way some people read the news,<br>" +
        L(2) + "frowning at the west, then nodding once:<br>" +
        L(3) + "three dry days, she says, and that's enough.<br>" +
        L(4) + "So we cut the hay in the last week of September,<br>" +
        L(5) + "the mower's long blade laying the field down<br>" +
        L(6) + "in rows as neat as combed hair.<br><br>" +
        L(7) + "For two days the hay lies drying in the sun,<br>" +
        L(8) + "and the whole valley smells like warm bread.<br>" +
        L(9) + "Crickets tick in the stubble like small clocks.<br>" +
        L(10) + "My little brother rides the fence rail, keeping watch<br>" +
        L(11) + "for a cloud he can blame.<br><br>" +
        L(12) + "On the third morning we bale.<br>" +
        L(13) + "The baler thumps and swallows and spits out<br>" +
        L(14) + "square bundles tied with twine,<br>" +
        L(15) + "and I stack them on the wagon, forty pounds each,<br>" +
        L(16) + "until my arms forget they belong to me.<br>" +
        L(17) + "My mother drives, one eye always on the west.<br><br>" +
        L(18) + "By sunset the barn loft is full,<br>" +
        L(19) + "bale on bale, packed tight as the pages of a book,<br>" +
        L(20) + "and the first drops of rain begin, polite and late,<br>" +
        L(21) + "tapping on the tin roof as if asking to be let in.<br><br>" +
        L(22) + "In January, when the snow is up to the gate,<br>" +
        L(23) + "I will climb to the loft and break open a bale,<br>" +
        L(24) + "and September will spill out, green and dusty and warm,<br>" +
        L(25) + "and the cows will lift their heads as if they remember.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which idea is best supported by the poem Last Cutting as a whole?",
          choices: [
            { letter: "A", text: "Farm families rarely agree about the right time to harvest." },
            { letter: "B", text: "Careful work done in season stores up later comfort." },
            { letter: "C", text: "Children are too young to help with farm chores." },
            { letter: "D", text: "Weather forecasts make farm work much less risky." }
          ],
          correct: "B"
        },
        {
          id: "book",
          sol: "10.RL.2.A",
          stem: "In line 19, comparing the stacked bales to the pages of a book mainly suggests that the loft is —",
          choices: [
            { letter: "A", text: "packed full and tightly ordered" },
            { letter: "B", text: "quiet and a good place for reading" },
            { letter: "C", text: "old and in need of repair" },
            { letter: "D", text: "too small for the harvest" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The images in lines 7 through 9 (the drying hay, the smell of warm bread, the crickets ticking like clocks) create a mood that is —",
          choices: [
            { letter: "A", text: "gloomy and full of regret" },
            { letter: "B", text: "noisy, crowded, and chaotic" },
            { letter: "C", text: "tense and frightening" },
            { letter: "D", text: "peaceful but aware of time" }
          ],
          correct: "D"
        },
        {
          id: "rain",
          sol: "10.RL.2.C",
          stem: "In lines 20 and 21, describing the rain as polite and late, tapping as if asking to be let in, suggests that the rain —",
          choices: [
            { letter: "A", text: "ruins the hay that was left in the field" },
            { letter: "B", text: "leaks through the roof of the barn loft" },
            { letter: "C", text: "comes harmlessly, after the work is done" },
            { letter: "D", text: "frightens the brother on the fence rail" }
          ],
          correct: "C"
        },
        {
          id: "shift",
          sol: "10.RL.3.A",
          stem: "How does the final stanza of Last Cutting (lines 22 through 25) change the poem's focus?",
          choices: [
            { letter: "A", text: "It moves from the harvest to the winter when it pays off." },
            { letter: "B", text: "It moves from the speaker's family to a neighbor's farm." },
            { letter: "C", text: "It moves from hopeful plans to regret over lost hay." },
            { letter: "D", text: "It moves from the mother's view to the brother's view." }
          ],
          correct: "A"
        },
        {
          id: "west",
          sol: "10.RL.1.B",
          stem: "Line 17 says the mother drives with one eye always on the west. This detail mainly adds to the poem's —",
          choices: [
            { letter: "A", text: "humor about the brother's search for clouds" },
            { letter: "B", text: "description of the wagon and the baler" },
            { letter: "C", text: "contrast between summer and winter" },
            { letter: "D", text: "tension about rain arriving too soon" }
          ],
          correct: "D"
        },
        {
          id: "arms",
          sol: "10.RV.1.D",
          stem: "In line 16, the speaker says my arms forget they belong to me instead of simply saying the arms are tired. This wording suggests a tiredness that is —",
          choices: [
            { letter: "A", text: "mild and quickly forgotten" },
            { letter: "B", text: "so deep the arms feel numb" },
            { letter: "C", text: "caused by an old injury" },
            { letter: "D", text: "faked to avoid more work" }
          ],
          correct: "B"
        },
        {
          id: "mother",
          sol: "10.RL.1.C",
          stem: "Lines 1 through 3 characterize the speaker's mother as someone who —",
          choices: [
            { letter: "A", text: "worries about the farm more than the family" },
            { letter: "B", text: "dislikes making decisions without help" },
            { letter: "C", text: "judges conditions carefully, then acts" },
            { letter: "D", text: "trusts the radio more than her own eyes" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── 11 · DRAMA · chess ───────────────────────── */
    {
      id: "g10-rl-c82-board-four",
      family: "G10",
      title: "Board Four",
      kind: "Drama · 10.RL",
      blurb: "One game left in the state final, a captain who cannot sit still, and a draw offer on the screen.",
      level: 3,
      passage:
        "<p><em>Setting: the analysis room of a hotel during the last round of the state high school team chess championship. Folding tables, abandoned boards, and a laptop on a stand showing a live view of the one game still being played. KOFI ASANTE, seventeen, captain of the Linwood High team, paces. COACH DIAZ sits with a clipboard.</em></p>" +
        "<p>" + N(1) + "<strong>KOFI</strong>: Two games to one. We need half a point, Coach. One draw and we're state champions. " +
        N(2) + "<strong>COACH DIAZ</strong> <em>(not looking up)</em>: I can count, Kofi. " +
        N(3) + "<strong>KOFI</strong>: Does June know? She's been at that board for three hours, and she hasn't looked up once. What if she thinks we need a win? " +
        N(4) + "<strong>COACH DIAZ</strong>: Then she'll play for a win. " +
        N(5) + "<strong>KOFI</strong> <em>(stopping in front of the laptop)</em>: Her opponent just offered a draw. Look, the little flag next to the clock. <em>(He grabs his jacket.)</em> I'll stand by the door where she can see me. I'll just nod. " +
        N(6) + "<strong>COACH DIAZ</strong> <em>(rising and calmly stepping into the doorway)</em>: You'll sit down. " +
        N(7) + "<strong>KOFI</strong>: A nod isn't advice. " +
        N(8) + "<strong>COACH DIAZ</strong>: A nod from the captain, at that moment, during that offer? The arbiter would call it advice, and so would I. We'd forfeit the game and the match. " +
        N(9) + "<em>(KOFI sits on the edge of a folding chair. The laptop chimes softly as the board updates.)</em> " +
        N(10) + "<strong>KOFI</strong>: She declined it. <em>(He covers his face with both hands.)</em> She turned down a draw that wins us the title. " +
        N(11) + "<strong>COACH DIAZ</strong>: Look at the position before you look at your hands. " +
        N(12) + "<strong>KOFI</strong> <em>(aside)</em>: I lost on board one this morning to a kid who played like a calculator. I can't watch another one slip away. " +
        N(13) + "<em>(Minutes pass. The chimes come faster. COACH DIAZ studies the screen; KOFI watches the coach's face instead of the board.)</em> " +
        N(14) + "<strong>COACH DIAZ</strong> <em>(quietly)</em>: Huh. " +
        N(15) + "<strong>KOFI</strong>: Huh good or huh bad? " +
        N(16) + "<strong>COACH DIAZ</strong>: Huh, her opponent just resigned. " +
        N(17) + "<em>(The door opens. JUNE PARK, fifteen, enters with her score sheet, looking tired rather than triumphant.)</em> " +
        N(18) + "<strong>KOFI</strong> <em>(leaping up)</em>: You won! Did you even know we only needed a draw? " +
        N(19) + "<strong>JUNE</strong>: Of course I knew. I checked the team scores during her first long think. " +
        N(20) + "<strong>KOFI</strong>: Then why would you turn it down? " +
        N(21) + "<strong>JUNE</strong>: Because she offered it right after she put her rook on the wrong square, and her hand was shaking. She wasn't offering me peace. She was asking me not to look. " +
        N(22) + "<em>(A pause. KOFI sits back down, slowly.)</em> " +
        N(23) + "<strong>COACH DIAZ</strong>: Captain. Anything to say to your board four? " +
        N(24) + "<strong>KOFI</strong> <em>(after a long look at June)</em>: Next time I'll worry about my own board. " +
        N(25) + "<strong>JUNE</strong> <em>(handing him the score sheet)</em>: Next time, play your own board better. <em>(She grins.)</em> Then I won't have to. " +
        N(26) + "<em>(COACH DIAZ laughs as the lights fade.)</em></p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is best developed in the analysis-room scene from Board Four?",
          choices: [
            { letter: "A", text: "Winning a title matters less than following tournament rules." },
            { letter: "B", text: "Younger players should always defer to their team captain." },
            { letter: "C", text: "Trusting a teammate can matter more than controlling things." },
            { letter: "D", text: "A draw offer is usually a sign that a player is far ahead." }
          ],
          correct: "C"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The central conflict in the first half of Board Four (sentences 1 through 12) is best described as a struggle between —",
          choices: [
            { letter: "A", text: "Kofi's urge to step in and the rule that he must not" },
            { letter: "B", text: "June's wish to win and her opponent's wish to draw" },
            { letter: "C", text: "Coach Diaz's plan and the arbiter's final decision" },
            { letter: "D", text: "Kofi's loss on board one and his pride as captain" }
          ],
          correct: "A"
        },
        {
          id: "kofi",
          sol: "10.RL.1.C",
          stem: "Kofi's lines in sentences 3 and 5 characterize him as —",
          choices: [
            { letter: "A", text: "calm and confident about the result" },
            { letter: "B", text: "bored and eager to leave the hotel" },
            { letter: "C", text: "jealous of June's place on the team" },
            { letter: "D", text: "anxious and quick to take control" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in Board Four is most ironic?",
          choices: [
            { letter: "A", text: "Coach Diaz says he can count but never looks at the score." },
            { letter: "B", text: "Kofi fears June misreads the match, but she reads it best." },
            { letter: "C", text: "June wins her game even though she has played for hours." },
            { letter: "D", text: "The laptop chimes faster as the game nears its finish." }
          ],
          correct: "B"
        },
        {
          id: "face",
          sol: "10.RL.3.A",
          stem: "The stage direction in sentence 13, in which Kofi watches the coach's face instead of the board, mainly serves to —",
          choices: [
            { letter: "A", text: "show that Kofi has stopped caring about the result" },
            { letter: "B", text: "reveal that Coach Diaz is hiding the score from Kofi" },
            { letter: "C", text: "build suspense while Kofi avoids the board itself" },
            { letter: "D", text: "explain why the arbiter enters the room next" }
          ],
          correct: "C"
        },
        {
          id: "peace",
          sol: "10.RL.2.A",
          stem: "In sentence 21, June says her opponent wasn't offering peace but asking her not to look. This statement suggests that the draw offer was —",
          choices: [
            { letter: "A", text: "a nervous attempt to hide a mistake" },
            { letter: "B", text: "a friendly gesture between two rivals" },
            { letter: "C", text: "a move required by the tournament rules" },
            { letter: "D", text: "a trick that June failed to notice" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RL.2.B",
          stem: "The tone of June's final line in sentence 25 is best described as —",
          choices: [
            { letter: "A", text: "bitter and quietly resentful" },
            { letter: "B", text: "teasing and good-natured" },
            { letter: "C", text: "nervous and apologetic" },
            { letter: "D", text: "formal and distant" }
          ],
          correct: "B"
        },
        {
          id: "forfeit",
          sol: "10.RV.1.B",
          stem: "In sentence 8, Coach Diaz warns that the team would forfeit the game and the match. Forfeit most nearly means —",
          choices: [
            { letter: "A", text: "replay from the beginning" },
            { letter: "B", text: "appeal to a higher judge" },
            { letter: "C", text: "postpone until tomorrow" },
            { letter: "D", text: "lose as a penalty" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── 12 · FUNCTIONAL · recycling ───────────────────────── */
    {
      id: "g10-ri-c82-quarry-road",
      family: "G10",
      title: "Harlan Creek Drop-Off Guide",
      kind: "Functional text · 10.RI",
      blurb: "Hours, numbered stations, banned items and hazardous waste days at a county recycling drop-off center.",
      level: 1,
      passage:
        "<p><strong>Harlan Creek Recycling Drop-Off Center: Guide for Residents</strong></p>" +
        "<p><strong>Hours and Eligibility.</strong> " + N(1) + "The center at 410 Quarry Road is open Tuesday through Saturday, 8:00 a.m. to 4:00 p.m., and is closed on Sundays, Mondays, and county holidays. " +
        N(2) + "The center is free for county residents, who must show a driver's license or a utility bill with a county address at the gate. " +
        N(3) + "Businesses may not use the center; commercial haulers should call the county waste office to apply for a separate permit.</p>" +
        "<p><strong>Station Guide.</strong> " + N(4) + "After the gate, follow the one-way loop and stop at each numbered station in order. " +
        N(5) + "Station 1 accepts flattened cardboard only; boxes that are not flattened take up five times as much space in the container. " +
        N(6) + "Station 2 accepts glass bottles and jars, sorted by color into clear, brown, and green bins. " +
        N(7) + "Station 3 accepts metal cans and aluminum foil that has been rinsed and pressed into a ball. " +
        N(8) + "Station 4 accepts plastic bottles and tubs marked with the number 1, 2, or 5 inside the recycling symbol. " +
        N(9) + "Station 5 accepts paper, including newspaper, mail, and office paper, but not paper towels, napkins, or tissues.</p>" +
        "<p><strong>Not Accepted.</strong> " + N(10) + "The center cannot take plastic bags, foam cups or packing peanuts, garden hoses, or anything containing food. " +
        N(11) + "Plastic grocery bags can be returned to the collection bins found at the front of most supermarkets. " +
        N(12) + "Items left outside the containers or at a closed gate are considered illegal dumping and may result in a fine of up to $250.</p>" +
        "<p><strong>Household Hazardous Waste Days.</strong> " + N(13) + "Paint, motor oil, batteries, and cleaning chemicals are never accepted on regular days, because they can start fires or leak into the soil. " +
        N(14) + "Instead, the county holds Household Hazardous Waste Days on the first Saturday of April and the first Saturday of October. " +
        N(15) + "On those days, residents should stay in their vehicles and open the trunk; trained staff in protective gear will unload the items.</p>" +
        "<p><strong>Safety on Site.</strong> " + N(16) + "Children under twelve must stay inside the vehicle at all times. " +
        N(17) + "Drivers must keep to 5 miles per hour and may not back up anywhere on the loop. " +
        N(18) + "If you miss a station, simply drive around the loop again rather than reversing. " +
        N(19) + "Staff members in yellow vests are posted at every station and can answer questions about any item. " +
        N(20) + "For updates on holiday closings or weather delays, call the county waste office or check the posted sign at the gate.</p>",
      claims: [
        {
          id: "headings",
          sol: "10.RI.2.A",
          stem: "How do the bold headings in the Harlan Creek guide mainly help a reader?",
          choices: [
            { letter: "A", text: "They show the order in which rules were adopted." },
            { letter: "B", text: "They let residents find the rules for each need quickly." },
            { letter: "C", text: "They list the stations from the busiest to the quietest." },
            { letter: "D", text: "They separate rules for residents from staff duties." }
          ],
          correct: "B"
        },
        {
          id: "bags",
          sol: "10.RI.1.B",
          stem: "According to the Harlan Creek guide, where should a resident take plastic grocery bags?",
          choices: [
            { letter: "A", text: "to Station 4 with the plastic tubs" },
            { letter: "B", text: "to a Household Hazardous Waste Day" },
            { letter: "C", text: "to the staff member at the gate" },
            { letter: "D", text: "to a collection bin at a supermarket" }
          ],
          correct: "D"
        },
        {
          id: "battery",
          sol: "10.RI.1.B",
          stem: "A resident wants to get rid of an old car battery in June. Based on the guide, what should the resident do?",
          choices: [
            { letter: "A", text: "Bring it on the first Saturday of October." },
            { letter: "B", text: "Leave it beside the gate after closing time." },
            { letter: "C", text: "Drop it at Station 3 with the metal cans." },
            { letter: "D", text: "Bring it any Tuesday through Saturday." }
          ],
          correct: "A"
        },
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "The Harlan Creek guide is written mainly for —",
          choices: [
            { letter: "A", text: "businesses that haul large loads of trash" },
            { letter: "B", text: "staff members who are training to work there" },
            { letter: "C", text: "county residents bringing their own recycling" },
            { letter: "D", text: "supermarkets that collect plastic grocery bags" }
          ],
          correct: "C"
        },
        {
          id: "summary",
          sol: "10.RI.1.A",
          stem: "Which statement best summarizes what the Harlan Creek guide asks residents to do?",
          choices: [
            { letter: "A", text: "Call the county waste office before every visit to the center." },
            { letter: "B", text: "Bring all household waste on the first Saturday." },
            { letter: "C", text: "Bring accepted items, sort by station, and drive slowly." },
            { letter: "D", text: "Stay in the vehicle while staff sort every item." }
          ],
          correct: "C"
        },
        {
          id: "commercial",
          sol: "10.RV.1.C",
          stem: "In sentence 3, the contrast with county residents shows that commercial haulers are most likely —",
          choices: [
            { letter: "A", text: "trash haulers who are paid to run a business" },
            { letter: "B", text: "residents who live just outside the county" },
            { letter: "C", text: "volunteers who help staff on busy Saturdays" },
            { letter: "D", text: "drivers who bring only hazardous waste" }
          ],
          correct: "A"
        },
        {
          id: "fivetimes",
          sol: "10.RI.2.B",
          stem: "The guide notes in sentence 5 that unflattened boxes take up five times as much space mainly to —",
          choices: [
            { letter: "A", text: "warn residents that cardboard is not accepted" },
            { letter: "B", text: "explain why Station 1 is the first station" },
            { letter: "C", text: "suggest that the containers are too small" },
            { letter: "D", text: "give residents a reason to follow the rule" }
          ],
          correct: "D"
        },
        {
          id: "tone12",
          sol: "10.RI.2.C",
          stem: "The tone of the Not Accepted section, especially sentence 12 about illegal dumping, is best described as —",
          choices: [
            { letter: "A", text: "playful and joking" },
            { letter: "B", text: "firm and direct" },
            { letter: "C", text: "angry and insulting" },
            { letter: "D", text: "unsure and hesitant" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── 13 · ARGUMENT · farm ───────────────────────── */
    {
      id: "g10-ri-c82-lunch-tray",
      family: "G10",
      title: "Close Enough to Taste",
      kind: "Argument · 10.RI",
      blurb: "A student argues that the orchards visible from the football field belong on the cafeteria menu.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every day, the cafeteria at Ferris County High School serves apples that have traveled farther than most of the students who eat them. " +
        N(2) + "The apples come from a distributor four states away, even though three orchards sit within fifteen miles of our building. " +
        N(3) + "Our school district should commit to buying at least one-fifth of its cafeteria produce from local farms by next fall.</p>" +
        "<p>" + N(4) + "The strongest reason is simple: students eat food that tastes good, and fresh food tastes better. " +
        N(5) + "Last spring, the cafeteria at Ferris Middle School ran a six-week trial using lettuce, strawberries, and apples from two nearby farms. " +
        N(6) + "According to the cafeteria manager's records, the amount of fruit thrown away untouched dropped by nearly a third. " +
        N(7) + "Students did not suddenly become healthier eaters because of a poster or a lecture; they ate the strawberries because the strawberries were good.</p>" +
        "<p>" + N(8) + "Buying locally also keeps money in our community. " +
        N(9) + "When the district pays a distant distributor, most of that money leaves the county. " +
        N(10) + "When it pays the Moreno family orchard or the Shah greenhouse, the money pays local workers, who then shop at local stores. " +
        N(11) + "Several Ferris students have parents who work on those farms, and some students work there themselves in the summer.</p>" +
        "<p>" + N(12) + "Critics argue that local food costs more and that farms cannot supply a whole district year-round. " +
        N(13) + "These are fair concerns, and they deserve honest answers. " +
        N(14) + "It is true that some local produce costs more per pound. " +
        N(15) + "But if students actually eat what they are served, the district wastes less money on food that ends up in the trash, and the middle school trial suggests that waste falls sharply. " +
        N(16) + "As for supply, no one is proposing that every carrot come from the county. " +
        N(17) + "A seasonal menu, with local apples in the fall, greenhouse greens in winter, and berries in spring, would let farms provide what they grow best while the distributor fills the gaps.</p>" +
        "<p>" + N(18) + "The district already plans its menus months ahead. " +
        N(19) + "Adding a few local partners to that plan is not a revolution; it is a phone call. " +
        N(20) + "The school board meets on the second Tuesday of next month, and members of the public may speak for three minutes each. " +
        N(21) + "If you have ever thrown away a mealy, flavorless apple, come and say so. " +
        N(22) + "Our orchards are close enough to see from the football field. " +
        N(23) + "Our lunch trays should be close enough to taste them.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which sentence best states the author's central claim in the essay about local food at Ferris County High School?",
          choices: [
            { letter: "A", text: "Sentence 1, about how far the cafeteria apples travel" },
            { letter: "B", text: "Sentence 3, about buying produce from local farms" },
            { letter: "C", text: "Sentence 14, about local produce costing more" },
            { letter: "D", text: "Sentence 18, about planning menus months ahead" }
          ],
          correct: "B"
        },
        {
          id: "support",
          sol: "10.RI.1.B",
          stem: "Which detail from the essay best supports the claim that students will eat more fresh local food?",
          choices: [
            { letter: "A", text: "Sentence 11, about students who work on farms" },
            { letter: "B", text: "Sentence 2, about orchards within fifteen miles" },
            { letter: "C", text: "Sentence 6, about less fruit thrown away untouched" },
            { letter: "D", text: "Sentence 20, about when the school board meets" }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          stem: "How is the essay about local food at Ferris County High School mainly organized?",
          choices: [
            { letter: "A", text: "a claim, reasons, a reply to critics, then a call to act" },
            { letter: "B", text: "a history of the local orchards from founding to today" },
            { letter: "C", text: "a comparison of three schools and their lunch menus" },
            { letter: "D", text: "a list of complaints followed by a cafeteria survey" }
          ],
          correct: "A"
        },
        {
          id: "opinion",
          sol: "10.RI.1.C",
          stem: "Which statement from the local-food essay is an opinion rather than a fact that could be checked?",
          choices: [
            { letter: "A", text: "The apples come from a distributor four states away." },
            { letter: "B", text: "The middle school ran a six-week trial last spring." },
            { letter: "C", text: "The school board meets on the second Tuesday." },
            { letter: "D", text: "The strongest reason is that fresh food tastes better." }
          ],
          correct: "D"
        },
        {
          id: "critics",
          sol: "10.RI.2.C",
          stem: "In sentences 12 through 17, the author takes up the critics' concerns about cost and supply mainly to —",
          choices: [
            { letter: "A", text: "admit that the plan cannot work at Ferris County" },
            { letter: "B", text: "suggest that the distributor should be dropped" },
            { letter: "C", text: "change the topic from food to the school budget" },
            { letter: "D", text: "show that the plan holds up against fair objections" }
          ],
          correct: "D"
        },
        {
          id: "phonecall",
          sol: "10.RI.2.B",
          stem: "Sentence 19 says adding local partners is not a revolution but a phone call. This contrast mainly emphasizes that the change is —",
          choices: [
            { letter: "A", text: "risky and likely to upset parents" },
            { letter: "B", text: "small and easy to put in place" },
            { letter: "C", text: "already finished by the district" },
            { letter: "D", text: "too expensive for most schools" }
          ],
          correct: "B"
        },
        {
          id: "distributor",
          sol: "10.RV.1.A",
          stem: "Distributor in sentence 2 is built from distribute plus the suffix -or, as in inventor. A distributor is most likely —",
          choices: [
            { letter: "A", text: "a business that delivers goods to buyers" },
            { letter: "B", text: "a farmer who grows apples for one school" },
            { letter: "C", text: "a cook who prepares the cafeteria's meals" },
            { letter: "D", text: "an official who sets the district's budget" }
          ],
          correct: "A"
        },
        {
          id: "mealy",
          sol: "10.RV.1.D",
          stem: "In sentence 21, the author calls the apple mealy and flavorless instead of simply old. These words give the distant apple a connotation that is —",
          choices: [
            { letter: "A", text: "familiar and comforting at lunch" },
            { letter: "B", text: "expensive and hard to find" },
            { letter: "C", text: "unappealing and disappointing" },
            { letter: "D", text: "healthy and very nourishing" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
