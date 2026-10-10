/* SOL Labyrinth — v5.15 expansion: Grade 9 medium-tier packs (lighthouses, a food truck, volcanoes, a science fair).
 * Original text only; no VDOE / copyrighted material. Loaded after content.js and
 * pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── LITERARY · 9.RL ───────────────────────── */
    {
      id: "g9-rl-c43-keepersstairs",
      family: "G9",
      title: "The Keeper's Stairs",
      kind: "Literary · 9.RL",
      blurb: "A foggy Saturday at the old lighthouse, and a tour Marisol has never given herself.",
      level: 1,
      passage:
        "<p>" + N(1) + "Each Saturday, Marisol Ochoa unlocked the green door at the base of the Punta Gris Lighthouse while her grandfather Teodoro counted the visitors outside. " +
        N(2) + "He had kept the light for twenty-two years before a machine replaced him, and now he led tours. " +
        N(3) + "The tower had one hundred fourteen iron steps, and lately Marisol had noticed that her grandfather stopped on every landing, pretending to point out the view while he caught his breath. " +
        N(4) + "\"The stairs are older than I am,\" he joked, \"but they complain less.\" " +
        N(5) + "That week, a fog rolled in so thick that the parking lot disappeared behind the visitors, and a group of fourth graders huddled together by the door, shoulders touching. " +
        N(6) + "Teodoro lowered himself onto the bench beside the entrance and rubbed his knee. " +
        N(7) + "\"You know the story as well as I do,\" he told Marisol. \"Take them up.\" " +
        N(8) + "Her stomach tightened like a knot in a wet rope. " +
        N(9) + "She had heard his tour a hundred times, but she had never been the one talking. " +
        N(10) + "On the first landing, she told the children how keepers once hauled oil up the tower twice a night. " +
        N(11) + "On the fifth, she showed them the scratches where a keeper's son had carved the date of a shipwreck he had watched. " +
        N(12) + "At the top, she pressed her palm against the cold glass of the lantern room the way her grandfather always did, and the children copied her without being asked. " +
        N(13) + "When the group came back down, Teodoro was waiting with his cap in his hands. " +
        N(14) + "\"Did you tell them about the scratches?\" he asked. " +
        N(15) + "\"And the oil,\" she said. \"And the fog.\" " +
        N(16) + "He nodded slowly, as if he were listening to the lighthouse itself, and handed her the ring of keys." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is best supported by the story about Marisol and Teodoro?",
          choices: [
            { letter: "A", text: "Old buildings matter less once machines take over their work." },
            { letter: "B", text: "A tradition can live on when it is passed to the next generation." },
            { letter: "C", text: "Fear disappears completely once a person has practiced enough." },
            { letter: "D", text: "Children learn best when adults leave them entirely alone." }
          ],
          correct: "B"
        },
        {
          id: "teodoro",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Sentences 3 and 4 best show that Teodoro is —",
          choices: [
            { letter: "A", text: "good-humored and proud even as his body slows him down" },
            { letter: "B", text: "bitter about the machine that replaced him as keeper" },
            { letter: "C", text: "careless about the safety of the visitors on the stairs" },
            { letter: "D", text: "eager to stop giving tours and move away from the coast" }
          ],
          correct: "A"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the lighthouse setting shape the events of the story?",
          choices: [
            { letter: "A", text: "The fog forces the tour to be canceled for the rest of the day." },
            { letter: "B", text: "The hidden parking lot keeps the visitors from finding the door." },
            { letter: "C", text: "The lantern room is locked, so the children must stay below." },
            { letter: "D", text: "The long climb is the reason Teodoro hands the tour to Marisol." }
          ],
          correct: "D"
        },
        {
          id: "knot",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 8, the comparison of Marisol's stomach to a knot in a wet rope mainly shows that she is —",
          choices: [
            { letter: "A", text: "sick from standing too long in the damp weather" },
            { letter: "B", text: "angry that her grandfather will not climb with her" },
            { letter: "C", text: "tense and nervous about leading the tour herself" },
            { letter: "D", text: "excited to see the view from the top of the tower" }
          ],
          correct: "C"
        },
        {
          id: "huddled",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "The phrase shoulders touching in sentence 5 helps show that huddled most nearly means —",
          choices: [
            { letter: "A", text: "crowded closely together" },
            { letter: "B", text: "waited in a straight line" },
            { letter: "C", text: "spoke in quiet whispers" },
            { letter: "D", text: "turned away from the door" }
          ],
          correct: "A"
        },
        {
          id: "keys",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer that when Teodoro hands Marisol the ring of keys in sentence 16, he —",
          choices: [
            { letter: "A", text: "wants her to lock the tower while he rests in the car" },
            { letter: "B", text: "trusts her to carry on the tours and the stories" },
            { letter: "C", text: "is disappointed that she left out part of his tour" },
            { letter: "D", text: "plans to close the lighthouse museum for the winter" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c43-summerplate",
      family: "G9",
      title: "Summer Plate",
      kind: "Literary · 9.RL",
      blurb: "The generator on the family food truck dies eight minutes before the lunch rush.",
      level: 2,
      passage:
        "<p>" + N(1) + "The generator on our food truck died at 11:52, eight minutes before the lunch crowd from Riverside Hospital started pouring across the street. " +
        N(2) + "One second the fryer was humming; the next, the whole truck went as silent as a library after closing. " +
        N(3) + "My mother, Abena Mensah, slapped the side of the generator twice, which has never fixed anything in the history of machines. " +
        N(4) + "\"No fryer, no plantains, no business,\" she said, staring at the line already forming outside our window. " +
        N(5) + "I looked at the cooler. " +
        N(6) + "Inside were two tubs of the cucumber-and-tomato salad we usually served on the side, a tray of jollof rice from that morning that was still warm in its foil, and three gallons of ginger lemonade. " +
        N(7) + "\"We could sell what doesn't need the fryer,\" I said. \"Call it a summer plate.\" " +
        N(8) + "She gave me the look she uses on customers who ask for a discount. " +
        N(9) + "Then she handed me a marker. " +
        N(10) + "I wrote SUMMER PLATE, TODAY ONLY on the back of a cardboard box and taped it over the regular menu, my letters slanting downhill because my hands were shaking. " +
        N(11) + "The first nurse in line read it, shrugged, and ordered two. " +
        N(12) + "By 1:15 the rice tray was scraped clean, the lemonade was gone, and a man in scrubs was asking whether the summer plate would be back tomorrow. " +
        N(13) + "My mother counted the cash box without a word. " +
        N(14) + "Then she peeled my cardboard sign off the window, folded it carefully, and slid it into the drawer where she keeps the receipt from our very first day of business." +
        "</p>",
      claims: [
        {
          id: "narrator",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes the narrator of \"Summer Plate\"?",
          choices: [
            { letter: "A", text: "She is careless and makes the crisis on the truck worse." },
            { letter: "B", text: "She is calm and never doubts that her plan will work." },
            { letter: "C", text: "She is quick-thinking, though nervous about speaking up." },
            { letter: "D", text: "She is bored by the truck and wants to close it early." }
          ],
          correct: "C"
        },
        {
          id: "drawer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer from sentence 14 that the narrator's mother —",
          choices: [
            { letter: "A", text: "plans to throw the sign away once the generator is fixed" },
            { letter: "B", text: "is upset that the cardboard sign covered the regular menu" },
            { letter: "C", text: "needs the cardboard to repair a box in the storage drawer" },
            { letter: "D", text: "treasures the sign as an important moment for the business" }
          ],
          correct: "D"
        },
        {
          id: "library",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 2, the comparison of the truck to a library after closing mainly emphasizes —",
          choices: [
            { letter: "A", text: "how sudden and complete the silence is" },
            { letter: "B", text: "how many books the family keeps on board" },
            { letter: "C", text: "how calm the customers feel in the line" },
            { letter: "D", text: "how late in the evening the event takes place" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the food truck story is told from the narrator's first-person point of view, the reader —",
          choices: [
            { letter: "A", text: "hears every customer's thoughts about the summer plate" },
            { letter: "B", text: "knows her shaking hands but must judge her mother by actions" },
            { letter: "C", text: "learns exactly what the mother is thinking in sentence 8" },
            { letter: "D", text: "sees the events through the eyes of the first nurse in line" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the ending of the food truck story best support?",
          choices: [
            { letter: "A", text: "A business should never change its regular menu." },
            { letter: "B", text: "Customers care more about price than about food." },
            { letter: "C", text: "A practical idea in a crisis can earn real respect." },
            { letter: "D", text: "Broken machines are usually the owner's own fault." }
          ],
          correct: "C"
        },
        {
          id: "hyperbole",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 3, the claim that slapping a machine has never fixed anything in the history of machines is an example of —",
          choices: [
            { letter: "A", text: "a simile comparing the mother to a mechanic" },
            { letter: "B", text: "a flashback to the truck's first day in business" },
            { letter: "C", text: "a symbol of the hospital workers across the street" },
            { letter: "D", text: "an exaggeration that adds humor to a tense moment" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c43-seedtins",
      family: "G9",
      title: "Seventeen Coffee Tins",
      kind: "Literary · 9.RL",
      blurb: "Ash is falling on the island, and Sione's grandmother will not leave her garden.",
      level: 3,
      passage:
        "<p>" + N(1) + "By the third morning of rumbling, the ash had turned the sky over Lavaka the color of dishwater, and the radio repeated the same calm sentence every hour: residents of the eastern villages should move to the shelter at Halaleva. " +
        N(2) + "Sione had already loaded his family's truck, but his grandmother Mele stood in her garden with her arms folded. " +
        N(3) + "\"I planted these taro beds before your father was born,\" she said. \"The mountain has grumbled before. It always settles.\" " +
        N(4) + "Sione glanced at the ridge, where a gray plume leaned east like a tired man, and felt the floor of his chest drop. " +
        N(5) + "Arguing with Mele had never worked; she treated every argument as a debt she would collect later. " +
        N(6) + "So instead he knelt beside the shed, where she kept her seeds in old coffee tins labeled in her careful handwriting: yam, bean, the sweet taro from her mother's village. " +
        N(7) + "He began wrapping each tin in a dish towel. " +
        N(8) + "\"What are you doing?\" Mele asked. " +
        N(9) + "\"If the garden is buried, you'll need to start a new one,\" he said, not looking up. \"I'm packing the garden.\" " +
        N(10) + "For a long moment the only sound was ash hissing softly on the tin roof, fine as sifted flour. " +
        N(11) + "Then his grandmother bent, slowly, and picked up the tin marked sweet taro. " +
        N(12) + "She held it the way someone holds a photograph. " +
        N(13) + "\"Wrap them tighter,\" she said finally. \"The road is rough.\" " +
        N(14) + "An hour later, the truck crawled west through the gray, seventeen coffee tins rattling in a box on Mele's lap, and Sione noticed that she never once looked back at the mountain." +
        "</p>",
      claims: [
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the setting described in sentence 1 shape the conflict of the story?",
          choices: [
            { letter: "A", text: "It creates the danger that pushes Sione to get Mele to leave." },
            { letter: "B", text: "It explains why the family's truck will not start that morning." },
            { letter: "C", text: "It shows that the shelter at Halaleva is too far away to reach." },
            { letter: "D", text: "It reveals that the villagers have never seen ash fall before." }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of sentences 10 through 14 is best described as —",
          choices: [
            { letter: "A", text: "frantic and loud" },
            { letter: "B", text: "bitter and resentful" },
            { letter: "C", text: "playful and comic" },
            { letter: "D", text: "quiet and tender" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which idea does the story about Sione and Mele most clearly develop?",
          choices: [
            { letter: "A", text: "Young people usually understand danger better than elders do." },
            { letter: "B", text: "Respecting what someone values can persuade where arguing fails." },
            { letter: "C", text: "A garden is worth more than the safety of the person who grows it." },
            { letter: "D", text: "Official warnings on the radio are often ignored by small towns." }
          ],
          correct: "B"
        },
        {
          id: "chest",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 4, the image of the floor of Sione's chest dropping suggests that he —",
          choices: [
            { letter: "A", text: "is out of breath from loading the heavy truck" },
            { letter: "B", text: "feels a sudden wave of dread about the mountain" },
            { letter: "C", text: "is relieved that the plume is moving away from them" },
            { letter: "D", text: "has hurt himself while kneeling beside the shed" }
          ],
          correct: "B"
        },
        {
          id: "tighter",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Mele's words in sentence 13 most clearly show that she —",
          choices: [
            { letter: "A", text: "doubts that Sione is able to drive the rough road" },
            { letter: "B", text: "wants Sione to stop packing and leave the tins" },
            { letter: "C", text: "has quietly decided to leave with her grandson" },
            { letter: "D", text: "believes the mountain will settle by the evening" }
          ],
          correct: "C"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "From whose point of view is the story of the ashfall on Lavaka told?",
          choices: [
            { letter: "A", text: "Mele, speaking in the first person about her garden" },
            { letter: "B", text: "a radio announcer reporting from the Halaleva shelter" },
            { letter: "C", text: "Sione, speaking in the first person years afterward" },
            { letter: "D", text: "a third-person narrator who shares Sione's thoughts" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c43-carefulno",
      family: "G9",
      title: "A Careful No",
      kind: "Literary · 9.RL",
      blurb: "Two nights before the science fair, Dalia's bean plants refuse to prove her right.",
      level: 2,
      passage:
        "<p>" + N(1) + "Two nights before the Westbrook Science Fair, Dalia Haddad sat on her bedroom floor surrounded by forty bean plants and a spreadsheet that refused to say what she wanted. " +
        N(2) + "For six weeks, twenty plants had listened to classical music through a cheap speaker while twenty grew in silence. " +
        N(3) + "Both groups were exactly the same height, give or take the width of a fingernail. " +
        N(4) + "\"Maybe I measured wrong,\" she told her brother Sami, who was eating cereal in the doorway. " +
        N(5) + "\"You measured every day,\" he said. \"With a ruler. And you made me check it.\" " +
        N(6) + "Dalia stared at the trifold board leaning against her closet, its glittery title, Do Plants Love Music?, suddenly looking like a joke at her own expense. " +
        N(7) + "She thought about the girl from last year who had won with plants that doubled in size, and she wondered, just for a second, whether anyone would notice if a few numbers drifted upward. " +
        N(8) + "Then she pictured explaining those numbers to a judge who asked a real question. " +
        N(9) + "At midnight she peeled off the glitter letters one by one. " +
        N(10) + "In black marker she wrote a new title: Music Made No Difference, and Here Is How I Know. " +
        N(11) + "On the morning of the fair, a judge with reading glasses on a beaded chain stopped at her table longer than at any other. " +
        N(12) + "She asked about the speaker's volume, the watering schedule, and whether the silent plants had been kept in the same window. " +
        N(13) + "Dalia had an answer for every question, because every answer was true. " +
        N(14) + "She did not win first place, but the judge wrote one sentence on her score sheet that Dalia later taped above her desk: A careful no is still an answer." +
        "</p>",
      claims: [
        {
          id: "tempted",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which sentence best shows that Dalia is briefly tempted to be dishonest?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about Dalia's bean plants?",
          choices: [
            { letter: "A", text: "Honest results have value even when they disappoint us." },
            { letter: "B", text: "Winning first place is the true goal of any experiment." },
            { letter: "C", text: "Older siblings are rarely helpful with school projects." },
            { letter: "D", text: "Music has a powerful effect on how living things grow." }
          ],
          correct: "A"
        },
        {
          id: "joke",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 6, the title looking like a joke at her own expense suggests that Dalia —",
          choices: [
            { letter: "A", text: "thinks the glitter letters are funny and clever" },
            { letter: "B", text: "feels embarrassed by the hopeful title she chose" },
            { letter: "C", text: "plans to make the judges laugh during the fair" },
            { letter: "D", text: "believes her brother has played a trick on her" }
          ],
          correct: "B"
        },
        {
          id: "carefulno",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 14, the judge's phrase A careful no is still an answer most nearly means that —",
          choices: [
            { letter: "A", text: "students should avoid saying no to a judge's questions" },
            { letter: "B", text: "a project must prove its idea in order to be useful" },
            { letter: "C", text: "careful students always win the top prize in the end" },
            { letter: "D", text: "a well-tested result that disproves an idea is real knowledge" }
          ],
          correct: "D"
        },
        {
          id: "sami",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The details about Sami in sentences 4 and 5 mainly emphasize that —",
          choices: [
            { letter: "A", text: "Dalia's brother is not interested in her project" },
            { letter: "B", text: "Dalia's method was careful, so her result is trustworthy" },
            { letter: "C", text: "the plants were measured only once at the very end" },
            { letter: "D", text: "Dalia has been eating meals in her room for weeks" }
          ],
          correct: "B"
        },
        {
          id: "stared",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written looked instead of stared in sentence 6. Compared with looked, the word stared suggests that Dalia —",
          choices: [
            { letter: "A", text: "glances at the board for only a moment" },
            { letter: "B", text: "cannot see the board clearly in the dark" },
            { letter: "C", text: "keeps her eyes fixed on it in dismay" },
            { letter: "D", text: "admires the board with growing pride" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── POETRY · 9.RL ───────────────────────── */
    {
      id: "g9-rl-c43-lamproom",
      family: "G9",
      title: "Lamp Room",
      kind: "Poetry · 9.RL",
      blurb: "A lighthouse beam, a fishing boat, and a porch light left on past midnight.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Each night the lamp climbs nothing but itself,<br>" +
        L(2) + "turning in its brass cage like a slow thought,<br>" +
        L(3) + "handing the dark a ribbon of white,<br>" +
        L(4) + "then taking it back, then handing it again.<br>" +
        L(5) + "It never sees the ships it keeps.<br>" +
        L(6) + "It never hears the harbor's thanks.<br>" +
        L(7) + "Out there, a fishing boat with one green light<br>" +
        L(8) + "counts the flashes, four and a pause,<br>" +
        L(9) + "and knows the rocks are where they were.<br>" +
        L(10) + "I think of my mother at the kitchen table,<br>" +
        L(11) + "leaving the porch light on past midnight<br>" +
        L(12) + "for me, at nineteen, who swore I wouldn't need it,<br>" +
        L(13) + "the switch still warm beneath her thumb,<br>" +
        L(14) + "the light going out toward someone it cannot see." +
        "</p>",
      claims: [
        {
          id: "thought",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In line 2, the lamp is compared to a slow thought mainly to suggest that its turning is —",
          choices: [
            { letter: "A", text: "loud and hard to ignore" },
            { letter: "B", text: "confused and uncertain" },
            { letter: "C", text: "quick and nervous" },
            { letter: "D", text: "steady and patient" }
          ],
          correct: "D"
        },
        {
          id: "ribbon",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "The image in lines 3 and 4 of handing the dark a ribbon and taking it back mainly helps the reader picture —",
          choices: [
            { letter: "A", text: "the beam sweeping out and coming around again" },
            { letter: "B", text: "a keeper wrapping gifts for the fishing crews" },
            { letter: "C", text: "a storm tearing the light away from the tower" },
            { letter: "D", text: "the lamp being switched off for the morning" }
          ],
          correct: "A"
        },
        {
          id: "speaker",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "From whose point of view is \"Lamp Room\" told?",
          choices: [
            { letter: "A", text: "a fisherman steering the boat with one green light" },
            { letter: "B", text: "an adult remembering how a parent waited up" },
            { letter: "C", text: "a mother speaking to a son who has moved away" },
            { letter: "D", text: "the lighthouse lamp describing its own work" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Lamp Room\"?",
          choices: [
            { letter: "A", text: "Machines will someday replace the work of families." },
            { letter: "B", text: "Sailors should rely on their own skill, not on lights." },
            { letter: "C", text: "Care is often given without being seen or thanked." },
            { letter: "D", text: "Young people rarely listen to the advice of parents." }
          ],
          correct: "C"
        },
        {
          id: "never",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "The repetition of It never at the start of lines 5 and 6 mainly emphasizes that the lamp's work —",
          choices: [
            { letter: "A", text: "is badly done on most nights" },
            { letter: "B", text: "goes on without recognition" },
            { letter: "C", text: "stops whenever ships pass by" },
            { letter: "D", text: "is about to come to an end" }
          ],
          correct: "B"
        },
        {
          id: "knows",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In line 9, the boat knows the rocks are where they were. This personification suggests that the light —",
          choices: [
            { letter: "A", text: "lets the crew confirm where the danger is" },
            { letter: "B", text: "has moved the rocks out of the boat's path" },
            { letter: "C", text: "confuses sailors who are new to the harbor" },
            { letter: "D", text: "shines too weakly to reach the fishing boat" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c43-underfield",
      family: "G9",
      title: "Under the Field",
      kind: "Poetry · 9.RL",
      blurb: "Farmers plant on a sleeping mountain, until the mountain keeps its appointment.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The farmers say the mountain is asleep,<br>" +
        L(2) + "and so they plant their coffee on its knees,<br>" +
        L(3) + "and so the goats go nibbling up its sides<br>" +
        L(4) + "as if a sleeping thing could not be heard.<br>" +
        L(5) + "But underneath, the stone is never still.<br>" +
        L(6) + "It shoulders up through cracks a finger wide;<br>" +
        L(7) + "it hums a note too low for any ear;<br>" +
        L(8) + "it keeps its old appointment with the sky.<br>" +
        L(9) + "One spring it wakes, and orange rivers run<br>" +
        L(10) + "through rows of beans and fences and the road.<br>" +
        L(11) + "The village watches from the farther hill.<br>" +
        L(12) + "Then years go by. The black ground cools and splits.<br>" +
        L(13) + "A fern unrolls its fist inside a crack,<br>" +
        L(14) + "and someone's grandchild, kneeling, tests the soil,<br>" +
        L(15) + "and finds it richer than it ever was." +
        "</p>",
      claims: [
        {
          id: "knees",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In lines 1 and 2, saying the farmers plant coffee on the mountain's knees presents the mountain as —",
          choices: [
            { letter: "A", text: "a field that has been worn out by farming" },
            { letter: "B", text: "a fence that marks the edge of the village" },
            { letter: "C", text: "a giant resting quietly beneath the farms" },
            { letter: "D", text: "a road that leads the goats up to the peak" }
          ],
          correct: "C"
        },
        {
          id: "shift",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.2",
          stem: "How does the ending of \"Under the Field\" (lines 12 through 15) differ from lines 9 through 11?",
          choices: [
            { letter: "A", text: "It moves from destruction to slow renewal." },
            { letter: "B", text: "It moves from a calm village to a sudden blast." },
            { letter: "C", text: "It moves from the farmers' view to the goats' view." },
            { letter: "D", text: "It moves from a warning to an angry complaint." }
          ],
          correct: "A"
        },
        {
          id: "andso",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "The poet repeats the words and so at the start of lines 2 and 3 most likely to —",
          choices: [
            { letter: "A", text: "show the farmers arguing about where to plant" },
            { letter: "B", text: "suggest that the goats are smarter than the farmers" },
            { letter: "C", text: "slow the poem down just before the eruption" },
            { letter: "D", text: "show that daily habits rest on a belief it sleeps" }
          ],
          correct: "D"
        },
        {
          id: "appointment",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "Line 8, it keeps its old appointment with the sky, suggests that the eruption is —",
          choices: [
            { letter: "A", text: "a rare accident that no one could have expected" },
            { letter: "B", text: "something long building that was bound to come" },
            { letter: "C", text: "a punishment for the farmers planting coffee" },
            { letter: "D", text: "an event the village had scheduled in advance" }
          ],
          correct: "B"
        },
        {
          id: "speaker",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "The speaker of \"Under the Field\" is best described as —",
          choices: [
            { letter: "A", text: "one of the farmers who planted on the mountain" },
            { letter: "B", text: "the mountain describing its own long sleep" },
            { letter: "C", text: "an observer who knows more than the farmers believe" },
            { letter: "D", text: "the grandchild kneeling to test the new soil" }
          ],
          correct: "C"
        },
        {
          id: "fist",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In line 13, describing a fern that unrolls its fist inside a crack mainly suggests that new life —",
          choices: [
            { letter: "A", text: "is angry about the damage the lava caused" },
            { letter: "B", text: "cannot survive on the cooled black ground" },
            { letter: "C", text: "returns only after people replant the field" },
            { letter: "D", text: "pushes back into the land with quiet strength" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── DRAMA · 9.RL ───────────────────────── */
    {
      id: "g9-rl-c43-judgestable",
      family: "G9",
      title: "Table Twelve",
      kind: "Drama · 9.RL",
      blurb: "A judge reaches the water-filter project, and Marcus forgets every word he memorized.",
      level: 2,
      passage:
        "<p><em>Setting: a high school gym on a Saturday morning. Rows of trifold boards. At table twelve, NOOR and MARCUS stand behind a water filter made from three soda bottles stacked in a wooden frame. JUDGE ADEYEMI approaches with a clipboard.</em></p>" +
        "<p>" + N(1) + "<strong>JUDGE ADEYEMI</strong>: Good morning. Walk me through your project. " +
        N(2) + "<strong>MARCUS</strong> <em>(opens his mouth; nothing comes out)</em>: We, um. " +
        N(3) + "<strong>MARCUS</strong> <em>(aside, to the audience)</em>: I practiced this speech eleven times in the mirror. Why is my brain a blank whiteboard? " +
        N(4) + "<strong>NOOR</strong> <em>(smoothly)</em>: We tested whether layers of sand, gravel, and charcoal could clean muddy water from Fenwick Creek. " +
        N(5) + "<strong>JUDGE ADEYEMI</strong>: And how do you know the water came out cleaner? " +
        N(6) + "<strong>NOOR</strong>: We measured how cloudy it was. Marcus built the sensor. " +
        N(7) + "<strong>MARCUS</strong> <em>(stepping forward, suddenly steady)</em>: It's a flashlight on one side of the cup and a phone light meter on the other. Clearer water lets more light through. Our best filter cut the cloudiness by eighty percent. " +
        N(8) + "<strong>JUDGE ADEYEMI</strong>: Impressive. Would you drink it? " +
        N(9) + "<strong>MARCUS and NOOR</strong> <em>(together, instantly)</em>: No. " +
        N(10) + "<strong>NOOR</strong>: Clear isn't the same as safe. Bacteria are far too small for our sensor to notice. That's our next question. " +
        N(11) + "<strong>JUDGE ADEYEMI</strong> <em>(writing for a long time)</em>: That may be the best answer I've heard all morning. " +
        N(12) + "<em>(She moves on to table thirteen.)</em> " +
        N(13) + "<strong>NOOR</strong> <em>(aside)</em>: He froze for exactly four seconds. Nobody in this gym will ever know but me. " +
        N(14) + "<strong>MARCUS</strong> <em>(quietly, to Noor)</em>: Thanks for starting. " +
        N(15) + "<strong>NOOR</strong>: Thanks for finishing." +
        "</p>",
      claims: [
        {
          id: "aside1",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The playwright uses Marcus's aside in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "show the judge that Marcus did not prepare" },
            { letter: "B", text: "explain how the water filter was built" },
            { letter: "C", text: "reveal a panic that the judge cannot hear" },
            { letter: "D", text: "let Noor know that she should speak next" }
          ],
          correct: "C"
        },
        {
          id: "aside2",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "Noor's aside in sentence 13 creates dramatic irony because —",
          choices: [
            { letter: "A", text: "the audience knows Marcus froze, but the judge does not" },
            { letter: "B", text: "the judge has already decided that the project will lose" },
            { letter: "C", text: "Marcus can hear every word Noor says to the audience" },
            { letter: "D", text: "Noor does not know that the filter failed its test" }
          ],
          correct: "A"
        },
        {
          id: "together",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The playwright has Marcus and Noor answer together and instantly in sentence 9 most likely to show that they —",
          choices: [
            { letter: "A", text: "rehearsed every answer word for word in advance" },
            { letter: "B", text: "share the same clear understanding of their results" },
            { letter: "C", text: "are annoyed that the judge asked a silly question" },
            { letter: "D", text: "disagree about what their project actually proved" }
          ],
          correct: "B"
        },
        {
          id: "noor",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Noor in the scene at table twelve?",
          choices: [
            { letter: "A", text: "She is jealous that Marcus built the sensor." },
            { letter: "B", text: "She is nervous and lets Marcus do the talking." },
            { letter: "C", text: "She is unsure of the science behind the filter." },
            { letter: "D", text: "She is calm and quietly covers for her partner." }
          ],
          correct: "D"
        },
        {
          id: "writing",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction writing for a long time in sentence 11 mainly suggests that Judge Adeyemi —",
          choices: [
            { letter: "A", text: "is impressed and wants to remember the answer" },
            { letter: "B", text: "is listing the mistakes in the students' method" },
            { letter: "C", text: "has stopped listening to the two students" },
            { letter: "D", text: "is filling out a form for a different table" }
          ],
          correct: "A"
        },
        {
          id: "whiteboard",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 3, Marcus's comparison of his brain to a blank whiteboard suggests that —",
          choices: [
            { letter: "A", text: "he is planning to draw a diagram for the judge" },
            { letter: "B", text: "he is too tired from staying up the night before" },
            { letter: "C", text: "he cannot recall the words he had prepared" },
            { letter: "D", text: "he thinks the project needs a better display" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── INFORMATIONAL · 9.RI ───────────────────────── */
    {
      id: "g9-ri-c43-languageoflight",
      family: "G9",
      title: "The Language of Light",
      kind: "Informational · 9.RI",
      blurb: "How lighthouses tell sailors exactly which tower they are looking at, day and night.",
      level: 1,
      passage:
        "<p>" + N(1) + "A lighthouse cannot shout a warning, so it has to speak in a language of light. " +
        N(2) + "Every lighthouse along a coast is given its own pattern of flashes, called its characteristic. " +
        N(3) + "One tower might flash white every ten seconds, while another a few miles away shows two quick red flashes followed by a long pause. " +
        N(4) + "Sailors carry charts that list these patterns, so a captain who counts the flashes can tell exactly which lighthouse is in view and, from that, roughly where the ship is. " +
        N(5) + "Making the light strong enough to reach that far was once a serious problem. " +
        N(6) + "An open flame, even a large one, scatters its light in every direction, and most of it is wasted on the sky and the ground. " +
        N(7) + "In the 1800s, engineers began surrounding the lamp with rings of carefully shaped glass prisms. " +
        N(8) + "The prisms bent the scattered light and gathered it into a single strong beam that could be visible more than twenty miles out to sea. " +
        N(9) + "Many of these heavy lenses floated on a bed of liquid mercury, which let them turn smoothly with very little effort. " +
        N(10) + "Lighthouses speak during the day, too. " +
        N(11) + "Their towers are painted with patterns, such as black-and-white spirals or red bands, known as daymarks, so that sailors can recognize them in sunlight. " +
        N(12) + "And when fog hides both the light and the paint, many stations sound a horn, again in a pattern of its own. " +
        N(13) + "Today, satellite navigation tells most ships where they are, but sailors still trust the old language of light as a backup when screens go dark." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the main idea of the passage about the language of light?",
          choices: [
            { letter: "A", text: "Lighthouses are no longer needed now that ships use satellites." },
            { letter: "B", text: "Glass prisms were the most important invention of the 1800s." },
            { letter: "C", text: "Lighthouse keepers had to work through long and lonely nights." },
            { letter: "D", text: "Lighthouses use distinct signals so sailors can identify them." }
          ],
          correct: "D"
        },
        {
          id: "counts",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the passage, how can a captain tell which lighthouse is in view at night?",
          choices: [
            { letter: "A", text: "by counting its flashes and checking a chart" },
            { letter: "B", text: "by measuring how tall the tower appears" },
            { letter: "C", text: "by listening for the keeper's voice on the radio" },
            { letter: "D", text: "by noting the color of the painted daymark" }
          ],
          correct: "A"
        },
        {
          id: "flame",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to sentence 6, why was an open flame a poor light source by itself?",
          choices: [
            { letter: "A", text: "It burned through oil too quickly to last a night." },
            { letter: "B", text: "It spread its light in all directions and wasted it." },
            { letter: "C", text: "It could be blown out by strong winds off the sea." },
            { letter: "D", text: "It made the glass of the lantern room too hot." }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How are sentences 5 through 8 mainly organized?",
          choices: [
            { letter: "A", text: "as a list of lighthouses in order of height" },
            { letter: "B", text: "as a comparison of daytime and nighttime signals" },
            { letter: "C", text: "as a problem followed by the solution to it" },
            { letter: "D", text: "as a story told from a sailor's point of view" }
          ],
          correct: "C"
        },
        {
          id: "opening",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author begins with sentence 1 and returns to its idea in sentence 13 mainly to —",
          choices: [
            { letter: "A", text: "frame lighthouse signals as a kind of language" },
            { letter: "B", text: "argue that lighthouses should replace satellites" },
            { letter: "C", text: "show that sailors once disliked lighthouses" },
            { letter: "D", text: "explain how foghorns make their loud sound" }
          ],
          correct: "A"
        },
        {
          id: "visible",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word visible in sentence 8 shares a root with vision and video. That root carries the idea of —",
          choices: [
            { letter: "A", text: "turning" },
            { letter: "B", text: "speaking" },
            { letter: "C", text: "traveling" },
            { letter: "D", text: "seeing" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-c43-twoshapes",
      family: "G9",
      title: "Two Shapes of Fire",
      kind: "Informational · 9.RI",
      blurb: "Why some volcanoes are gentle domes and others are steep, explosive cones.",
      level: 2,
      passage:
        "<p>" + N(1) + "Most people picture a volcano as a steep, pointed cone with a puff of smoke at the top, but many of the largest volcanoes on Earth look more like enormous, gently sloping domes. " +
        N(2) + "The difference in shape comes down mostly to one property of melted rock: its viscosity, or how thickly it flows. " +
        N(3) + "Lava that is low in silica, a glassy mineral ingredient, is runny, a little like warm syrup. " +
        N(4) + "It pours out of cracks and spreads for miles before it cools, building a wide, low mountain one thin layer at a time. " +
        N(5) + "Geologists call this kind of mountain a shield volcano, because from the side it resembles a warrior's shield lying on the ground. " +
        N(6) + "The volcanoes of Hawaii are shield volcanoes, and their eruptions are usually steady streams of lava rather than blasts. " +
        N(7) + "Lava that is high in silica behaves very differently. " +
        N(8) + "It is stiff and sticky, more like cold peanut butter, so it piles up near the vent instead of flowing away. " +
        N(9) + "Gas bubbles that would escape easily from runny lava become trapped inside the thick rock, and pressure builds until it is released in an explosion. " +
        N(10) + "Over thousands of years, these eruptions stack alternating layers of lava and ash into a tall, steep cone called a stratovolcano. " +
        N(11) + "Their explosions can throw ash miles into the air, which is why stratovolcanoes are among the most closely watched mountains in the world. " +
        N(12) + "In other words, a volcano's shape is a kind of record: by looking at its slopes, a geologist can make a good first guess about how it is likely to erupt." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"Two Shapes of Fire\"?",
          choices: [
            { letter: "A", text: "Hawaii has the largest and safest volcanoes in the world." },
            { letter: "B", text: "How thickly lava flows shapes a volcano and how it erupts." },
            { letter: "C", text: "Most volcanoes are steep cones with smoke rising at the top." },
            { letter: "D", text: "Geologists name volcanoes after objects used by warriors." }
          ],
          correct: "B"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The passage about shield volcanoes and stratovolcanoes is mainly organized by —",
          choices: [
            { letter: "A", text: "telling the history of one eruption in time order" },
            { letter: "B", text: "listing the steps a geologist takes to study lava" },
            { letter: "C", text: "comparing and contrasting two kinds of volcanoes" },
            { letter: "D", text: "describing a problem and several possible solutions" }
          ],
          correct: "C"
        },
        {
          id: "explode",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the passage, why do stratovolcanoes erupt explosively?",
          choices: [
            { letter: "A", text: "Gas trapped in sticky lava builds up pressure." },
            { letter: "B", text: "Their lava is too runny to stay inside the vent." },
            { letter: "C", text: "Their steep slopes cause the lava to fall faster." },
            { letter: "D", text: "Ash from earlier eruptions blocks the cracks." }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the claim in sentence 12 that a volcano's shape hints at how it will erupt?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "syrup",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The comparisons to warm syrup in sentence 3 and cold peanut butter in sentence 8 help the reader understand —",
          choices: [
            { letter: "A", text: "why volcanoes smell sweet during an eruption" },
            { letter: "B", text: "how the color of lava changes as it cools" },
            { letter: "C", text: "how hot lava becomes before it leaves the vent" },
            { letter: "D", text: "the difference in how thickly the two lavas flow" }
          ],
          correct: "D"
        },
        {
          id: "viscosity",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which words from sentence 2 help the reader understand the meaning of viscosity?",
          choices: [
            { letter: "A", text: "the difference in shape" },
            { letter: "B", text: "how thickly it flows" },
            { letter: "C", text: "comes down mostly" },
            { letter: "D", text: "one property of" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c43-restlessmountain",
      family: "G9",
      title: "Listening to a Restless Mountain",
      kind: "Informational · 9.RI",
      blurb: "Earthquakes, swelling ground, and volcanic gas: the signs scientists watch before an eruption.",
      level: 3,
      passage:
        "<p>" + N(1) + "No one can yet predict the exact day a volcano will erupt, but scientists have become surprisingly good at recognizing when one is waking up. " +
        N(2) + "Their work resembles that of a doctor examining a patient: they cannot see inside, so they measure the signs that leak out. " +
        N(3) + "The first sign is often movement. " +
        N(4) + "As magma rises beneath a volcano, it cracks the rock around it, producing swarms of small earthquakes that seismometers can detect even when no one on the surface feels a thing. " +
        N(5) + "The second sign is swelling. " +
        N(6) + "Rising magma can push the ground upward by several centimeters, and instruments called tiltmeters, along with satellites that measure height from space, record these tiny changes. " +
        N(7) + "The third sign is breath. " +
        N(8) + "Volcanoes release gases such as sulfur dioxide, and a sudden rise in the amount escaping from a vent can mean that fresh magma is nearing the surface. " +
        N(9) + "None of these signs is decisive by itself; volcanoes sometimes rumble and swell for years and then quiet down without erupting. " +
        N(10) + "That uncertainty creates a hard choice for officials, who must weigh the cost of evacuating a town for nothing against the danger of waiting too long. " +
        N(11) + "One monitoring team described its approach this way: \"We never trust a single instrument. We trust the moment when three instruments start telling the same story.\" " +
        N(12) + "Many volcano scientists expect that the next big improvement will come from computer programs that compare live readings with records of thousands of past eruptions, although such programs are still being tested. " +
        N(13) + "For now, the best warning system remains a combination of patient measurement and careful judgment." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"Listening to a Restless Mountain\"?",
          choices: [
            { letter: "A", text: "Computer programs can now predict eruptions to the exact day." },
            { letter: "B", text: "Officials usually wait too long before they order evacuations." },
            { letter: "C", text: "Combining several signs helps scientists spot a waking volcano." },
            { letter: "D", text: "Earthquakes are the only reliable sign of a coming eruption." }
          ],
          correct: "C"
        },
        {
          id: "speculation",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence in the volcano-monitoring article presents a speculation about the future rather than a confirmed fact?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "D"
        },
        {
          id: "support",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the statement in sentence 1 that no one can yet predict the exact day of an eruption?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "A"
        },
        {
          id: "doctor",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The comparison to a doctor in sentence 2 helps the reader understand that volcano scientists —",
          choices: [
            { letter: "A", text: "treat people who are injured by eruptions" },
            { letter: "B", text: "judge hidden conditions from outward signs" },
            { letter: "C", text: "use the same tools that hospitals use" },
            { letter: "D", text: "visit each volcano only once a year" }
          ],
          correct: "B"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How does the author organize sentences 3 through 8?",
          choices: [
            { letter: "A", text: "as a story about one eruption, told in time order" },
            { letter: "B", text: "as a debate between two groups of scientists" },
            { letter: "C", text: "as a list of volcanoes ranked from safest to worst" },
            { letter: "D", text: "as a series of signs, each paired with how it is measured" }
          ],
          correct: "D"
        },
        {
          id: "gas",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the passage, what can a sudden rise in sulfur dioxide from a vent indicate?",
          choices: [
            { letter: "A", text: "that the volcano has finished erupting" },
            { letter: "B", text: "that a tiltmeter has stopped working" },
            { letter: "C", text: "that fresh magma is nearing the surface" },
            { letter: "D", text: "that small earthquakes have ended" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c43-behindwindow",
      family: "G9",
      title: "Behind the Window",
      kind: "Informational · 9.RI",
      blurb: "Permits, commissaries, and a crew of three in a few feet of space: how a food truck really runs.",
      level: 1,
      passage:
        "<p>" + N(1) + "A food truck looks simple from the sidewalk: a window, a menu board, and a cook handing out tacos or dumplings. " +
        N(2) + "Behind that window, however, is a small business with many of the same rules as a full restaurant. " +
        N(3) + "Before a truck can sell a single meal, its owner usually needs a business license, a health permit, and a fire inspection for the cooking equipment. " +
        N(4) + "In many cities, trucks must also be connected to a commissary, a licensed kitchen where owners store supplies, wash equipment, and prepare food in larger batches. " +
        N(5) + "A typical day starts there, hours before the lunch rush. " +
        N(6) + "Workers chop vegetables, marinate meat, and fill the truck's water tanks, then drive to a spot that the city has approved for selling food. " +
        N(7) + "Location can make or break a truck. " +
        N(8) + "A spot near an office park might bring a crowd from noon to one o'clock and almost no one afterward, while a spot near a park may be slow on weekdays and packed on Saturdays. " +
        N(9) + "For this reason, many owners post their schedules online each morning so that loyal customers can follow them. " +
        N(10) + "Space is the other great challenge. " +
        N(11) + "With only a few feet between the grill and the fryer, a crew of two or three must move in a careful routine, like dancers who cannot afford a single wrong step. " +
        N(12) + "Most owners agree that the work is exhausting, but many say that the close contact with customers is the best part of the job. " +
        N(13) + "Unlike a restaurant cook hidden in a back kitchen, a food truck cook sees every face that tastes the food." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the main idea of \"Behind the Window\"?",
          choices: [
            { letter: "A", text: "Running a food truck takes more planning than customers see." },
            { letter: "B", text: "Food trucks are cheaper and easier to run than restaurants." },
            { letter: "C", text: "Office parks are the best places for food trucks to park." },
            { letter: "D", text: "Most food truck owners would rather work in a restaurant." }
          ],
          correct: "A"
        },
        {
          id: "commissary",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the passage, what is a commissary used for?",
          choices: [
            { letter: "A", text: "inspecting a truck's fire safety equipment" },
            { letter: "B", text: "posting the truck's schedule for customers" },
            { letter: "C", text: "storing supplies and preparing food in bulk" },
            { letter: "D", text: "giving trucks a place to park overnight" }
          ],
          correct: "C"
        },
        {
          id: "contrast",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "Sentences 1 and 2 of the food truck article are organized mainly as —",
          choices: [
            { letter: "A", text: "a list of steps in a cook's morning routine" },
            { letter: "B", text: "a contrast between how a truck looks and what it involves" },
            { letter: "C", text: "a cause and its effect on a city's lunch crowd" },
            { letter: "D", text: "a question followed by an expert's answer" }
          ],
          correct: "B"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence reports a view held by food truck owners rather than a rule they must follow?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "D"
        },
        {
          id: "dancers",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The comparison to dancers in sentence 11 helps the reader understand that a food truck crew must —",
          choices: [
            { letter: "A", text: "entertain customers while they wait in line" },
            { letter: "B", text: "play music to attract people to the window" },
            { letter: "C", text: "practice for weeks before the truck can open" },
            { letter: "D", text: "coordinate every move in a very tight space" }
          ],
          correct: "D"
        },
        {
          id: "exhausting",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written tiring instead of exhausting in sentence 12. Compared with tiring, the word exhausting suggests that the work —",
          choices: [
            { letter: "A", text: "is boring and repeats every day" },
            { letter: "B", text: "is dangerous for a crew of two" },
            { letter: "C", text: "drains nearly all of a person's energy" },
            { letter: "D", text: "ends early in the afternoon" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── FUNCTIONAL TEXT · 9.RI ───────────────────────── */
    {
      id: "g9-ri-c43-fairguidelines",
      family: "G9",
      title: "Science Fair Entry Guidelines",
      kind: "Functional text · 9.RI",
      blurb: "The rules sheet for the Brookfield High science fair: registration, safety, display, and judging.",
      level: 1,
      passage:
        "<p><strong>BROOKFIELD HIGH SCHOOL SCIENCE FAIR — STUDENT ENTRY GUIDELINES</strong></p>" +
        "<p>" + N(1) + "The fair will be held in the main gym on Saturday, March 14, from 9:00 a.m. to 1:00 p.m. " +
        N(2) + "All ninth- and tenth-grade students enrolled in a science course may enter. " +
        N(3) + "<strong>Registration.</strong> Submit the online entry form by February 20. " +
        N(4) + "Teams may have no more than three members, and every member must be present during judging. " +
        N(5) + "<strong>Safety.</strong> Projects involving live animals, open flames, or chemicals other than common household products must be approved in writing by a science teacher before any testing begins. " +
        N(6) + "No liquids may be displayed at the table; use photographs of your samples instead. " +
        N(7) + "Last year two display boards were ruined by a spilled beaker, which is why this rule now applies to everyone. " +
        N(8) + "<strong>Display.</strong> Each table is 30 inches deep and 6 feet wide, and boards may not hang past its edges. " +
        N(9) + "Electrical outlets are limited, so projects that need power must request an outlet on the entry form. " +
        N(10) + "<strong>Judging.</strong> Judges will score each project on its question, method, data, and explanation, with method counting for the most points. " +
        N(11) + "Be ready to explain how you kept your variables under control. " +
        N(12) + "A project that disproves its own hypothesis can score just as well as one that proves it. " +
        N(13) + "<strong>Questions?</strong> Contact Ms. Varga in Room 214 or stop by the science office during lunch." +
        "</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "The main purpose of the Brookfield science fair guidelines is to —",
          choices: [
            { letter: "A", text: "persuade students that science fairs are fun" },
            { letter: "B", text: "explain what students must do to enter and compete" },
            { letter: "C", text: "describe the winning projects from last year's fair" },
            { letter: "D", text: "teach students how to build a safe experiment" }
          ],
          correct: "B"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How are the science fair guidelines mainly organized?",
          choices: [
            { letter: "A", text: "by topic, under headings in the order students need them" },
            { letter: "B", text: "as a story about one student preparing a project" },
            { letter: "C", text: "from the most important rule to the least important" },
            { letter: "D", text: "as a comparison between this year's fair and last year's" }
          ],
          correct: "A"
        },
        {
          id: "burner",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "A student wants to heat salt water over a small burner and show the jars at the table. Which TWO sentences state rules aimed at parts of this plan? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "method",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that judges care more about how an experiment was done than about whether it worked?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "C"
        },
        {
          id: "reason",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the guidelines gives the reason for a rule rather than stating a rule?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "D"
        },
        {
          id: "bold",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The guidelines put words such as Safety, Display, and Judging in bold type mainly to —",
          choices: [
            { letter: "A", text: "show which rules are new this year" },
            { letter: "B", text: "warn students about the strictest rules" },
            { letter: "C", text: "list the categories that win prizes" },
            { letter: "D", text: "help readers find each topic quickly" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── ARGUMENT · 9.RI ───────────────────────── */
    {
      id: "g9-ri-c43-novolcanoes",
      family: "G9",
      title: "Retire the Baking-Soda Volcano",
      kind: "Argument · 9.RI",
      blurb: "A student editorial argues that the science fair should reward questions, not models.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every spring, at least one table at our school's science fair holds a papier-mâché volcano, and every spring it erupts in a foam of baking soda and vinegar while a crowd of younger kids cheers. " +
        N(2) + "I have nothing against fun, but I believe the fair should stop accepting models that only demonstrate something everyone already knows. " +
        N(3) + "A model volcano is a craft project; it shows what happens, but it does not ask a question that the builder cannot already answer. " +
        N(4) + "Science, by contrast, begins with not knowing. " +
        N(5) + "A real experiment changes one thing at a time and measures what follows, so even a simple question, such as whether the amount of vinegar changes how high the foam rises, teaches more than the most beautiful mountain. " +
        N(6) + "Some students argue that models are easier for beginners, and that is true. " +
        N(7) + "But our own guidelines say that judges weigh method most heavily, which means a beginner with a careful test already has an advantage over an expert sculptor. " +
        N(8) + "Last year, according to the science department, fourteen of the fair's sixty projects were demonstrations rather than experiments, and none of them placed. " +
        N(9) + "Students who build models are being encouraged to spend weeks on work that the scoring system is designed to ignore. " +
        N(10) + "The fix is simple: the entry form should ask every student to write down the question the project will test before any materials are bought. " +
        N(11) + "Students who still love volcanoes can keep them, as long as they measure something about the eruption. " +
        N(12) + "Our fair should celebrate the moment a student says \"I wonder,\" not the moment the foam spills over." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the student writer's central claim about the science fair?",
          choices: [
            { letter: "A", text: "Model volcanoes should be banned because they are messy." },
            { letter: "B", text: "Younger students should not be allowed to attend the fair." },
            { letter: "C", text: "The fair should require projects that test a real question." },
            { letter: "D", text: "Judges should give more points to well-built displays." }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the editorial states an opinion rather than a fact that could be checked?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "The writer's main purpose in the editorial about model volcanoes is to —",
          choices: [
            { letter: "A", text: "persuade the school to change how projects are entered" },
            { letter: "B", text: "teach readers how to build a better model volcano" },
            { letter: "C", text: "describe the history of the school's science fair" },
            { letter: "D", text: "entertain readers with a funny story about foam" }
          ],
          correct: "A"
        },
        {
          id: "counter",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "How does the writer mainly handle the opposing view in sentences 6 and 7?",
          choices: [
            { letter: "A", text: "by ignoring it and changing the subject" },
            { letter: "B", text: "by admitting part of it, then answering it" },
            { letter: "C", text: "by agreeing with it completely" },
            { letter: "D", text: "by mocking the students who hold it" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "The writer ends with sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "admit that model volcanoes are the best part of the fair" },
            { letter: "B", text: "introduce a new reason that has not been mentioned" },
            { letter: "C", text: "restate the claim with an image that echoes the opening" },
            { letter: "D", text: "thank the science department for sharing its numbers" }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence offers the strongest evidence that model projects do poorly under the current scoring?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── VOCABULARY · 9.RV ───────────────────────── */
    {
      id: "g9-rv-c43-gannetlog",
      family: "G9",
      title: "The Gannet Rock Log",
      kind: "Vocabulary · 9.RV",
      blurb: "A lighthouse keeper's logbook from a stormy November, with six words to work out.",
      level: 1,
      passage:
        "<p><em>From the logbook of the keeper of Gannet Rock Light, November 1894</em></p>" +
        "<p>" + N(1) + "November 3. The wind has been <strong>relentless</strong> for four days, never easing even at dawn, and the spray reaches the windows of the lantern room sixty feet above the rocks. " +
        N(2) + "Our supplies are <strong>meager</strong>: half a barrel of flour, the last of the salted fish, and enough lamp oil for perhaps nine nights. " +
        N(3) + "The supply boat was due Tuesday, but no captain would cross the reef in this sea. " +
        N(4) + "November 5. I have not slept more than two hours at a stretch, for a keeper must stay <strong>vigilant</strong> through the whole night, trimming the wick and wiping salt from the glass whenever the flame dims. " +
        N(5) + "My son Tobias, who is twelve, insists on taking the hour before sunrise so that I can rest. " +
        N(6) + "I let him, though I lie awake listening for his footsteps on the stairs. " +
        N(7) + "November 7. The channel north of the rock is the most <strong>treacherous</strong> on this coast; its hidden currents have pulled three ships onto the ledge in my own memory. " +
        N(8) + "Tonight a schooner passed safely through it, close enough that we saw her crew raise a lantern to us in thanks. " +
        N(9) + "Tobias waved his cap until she disappeared. " +
        N(10) + "November 9. The boat came at last, and we were able to <strong>replenish</strong> the oil, the flour, and, to Tobias's delight, the molasses. " +
        N(11) + "It is a <strong>solitary</strong> life out here, with no neighbor nearer than the mainland, yet tonight, watching my son polish the brass without being asked, I did not feel alone." +
        "</p>",
      claims: [
        {
          id: "relentless",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "The phrase never easing even at dawn in sentence 1 helps show that relentless means —",
          choices: [
            { letter: "A", text: "cold and wet" },
            { letter: "B", text: "sudden and brief" },
            { letter: "C", text: "gentle and steady" },
            { letter: "D", text: "constant and unstopping" }
          ],
          correct: "D"
        },
        {
          id: "treacherous",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Based on the rest of sentence 7, the word treacherous most nearly means —",
          choices: [
            { letter: "A", text: "dangerous in hidden ways" },
            { letter: "B", text: "wide and easy to cross" },
            { letter: "C", text: "well known to all sailors" },
            { letter: "D", text: "too shallow for any boat" }
          ],
          correct: "A"
        },
        {
          id: "replenish",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word replenish in sentence 10 contains the prefix re- and a root related to plenty. Replenish most nearly means to —",
          choices: [
            { letter: "A", text: "use up completely" },
            { letter: "B", text: "fill up again" },
            { letter: "C", text: "count carefully" },
            { letter: "D", text: "trade for money" }
          ],
          correct: "B"
        },
        {
          id: "meager",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The keeper could have written small instead of meager in sentence 2. Compared with small, meager suggests that the supplies are —",
          choices: [
            { letter: "A", text: "neatly organized" },
            { letter: "B", text: "freshly delivered" },
            { letter: "C", text: "worryingly scarce" },
            { letter: "D", text: "easy to carry" }
          ],
          correct: "C"
        },
        {
          id: "solitary",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word solitary in sentence 11 shares a root with solo and solitude. That root carries the idea of —",
          choices: [
            { letter: "A", text: "being alone" },
            { letter: "B", text: "being afraid" },
            { letter: "C", text: "being near the sea" },
            { letter: "D", text: "being very tired" }
          ],
          correct: "A"
        },
        {
          id: "tobias",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Tobias, based on the keeper's log entries?",
          choices: [
            { letter: "A", text: "He is bored by life at the lighthouse." },
            { letter: "B", text: "He is afraid of the storms and the sea." },
            { letter: "C", text: "He is careless with the lamp at night." },
            { letter: "D", text: "He is dependable and eager to help." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rv-c43-arepatruck",
      family: "G9",
      title: "The Lull",
      kind: "Vocabulary · 9.RV",
      blurb: "A broken griddle at the Harvest Festival, an annoyed customer, and six words to work out.",
      level: 2,
      passage:
        "<p>" + N(1) + "Lucía Torres had worked in her aunt Marisela's arepa truck for three summers, and she knew that the first hour of the Harvest Festival would be <strong>frantic</strong>: orders shouted through the window, cheese melting faster than she could fold it, and the card reader beeping like an impatient bird. " +
        N(2) + "What she had not expected was the broken griddle. " +
        N(3) + "Halfway through the rush, one of the two burners sputtered out, and the line began to slow. " +
        N(4) + "A man near the front, <strong>disgruntled</strong> after twenty minutes of waiting, crossed his arms and muttered that he could have cooked the arepas himself by now. " +
        N(5) + "Marisela did not argue. " +
        N(6) + "She was famously <strong>frugal</strong>, reusing every cardboard box and bargaining over the price of onions, but she handed the man a free cup of hot chocolate to <strong>compensate</strong> him for the delay. " +
        N(7) + "Then she cooked on the one working burner in small batches, so that no one received a half-cooked arepa. " +
        N(8) + "Even rushed, her work was <strong>impeccable</strong>; each arepa came out golden at the edges, the cheese sealed inside without a single tear. " +
        N(9) + "Around two o'clock came the <strong>lull</strong> that every food truck waits for, when the lunch crowd had gone and the dinner crowd had not yet arrived. " +
        N(10) + "Lucía slumped against the cooler. " +
        N(11) + "\"You gave away a whole cup,\" she teased. \"You, who saves rubber bands.\" " +
        N(12) + "Marisela wiped the counter and smiled. \"Rubber bands don't come back next year,\" she said. \"Customers do.\"" +
        "</p>",
      claims: [
        {
          id: "disgruntled",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 4, the details about the man's waiting and muttering show that disgruntled most nearly means —",
          choices: [
            { letter: "A", text: "hungry and weak" },
            { letter: "B", text: "annoyed and dissatisfied" },
            { letter: "C", text: "curious and talkative" },
            { letter: "D", text: "patient and polite" }
          ],
          correct: "B"
        },
        {
          id: "compensate",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "As used in sentence 6, the word compensate most nearly means to —",
          choices: [
            { letter: "A", text: "make up for a loss" },
            { letter: "B", text: "ask for a payment" },
            { letter: "C", text: "warn about a danger" },
            { letter: "D", text: "argue over a price" }
          ],
          correct: "A"
        },
        {
          id: "frugal",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "Compared with the word cheap, the word frugal in sentence 6 has a connotation that is more —",
          choices: [
            { letter: "A", text: "insulting, suggesting she is greedy" },
            { letter: "B", text: "neutral, suggesting she is poor" },
            { letter: "C", text: "positive, suggesting careful thrift" },
            { letter: "D", text: "playful, suggesting she is joking" }
          ],
          correct: "C"
        },
        {
          id: "bird",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 1, comparing the card reader to an impatient bird mainly suggests that —",
          choices: [
            { letter: "A", text: "the truck is parked close to a flock of birds" },
            { letter: "B", text: "the card reader is broken and needs repair" },
            { letter: "C", text: "customers are paying with cash instead of cards" },
            { letter: "D", text: "its constant beeping adds to the pressure" }
          ],
          correct: "D"
        },
        {
          id: "lull",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written break instead of lull in sentence 9. Compared with break, lull suggests a pause that is —",
          choices: [
            { letter: "A", text: "planned weeks in advance" },
            { letter: "B", text: "caused by a broken burner" },
            { letter: "C", text: "noisy and full of complaints" },
            { letter: "D", text: "a quiet calm before more activity" }
          ],
          correct: "D"
        },
        {
          id: "customersdo",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer from Marisela's reply in sentence 12 that she —",
          choices: [
            { letter: "A", text: "regrets giving away the free cup of hot chocolate" },
            { letter: "B", text: "sees kindness to customers as worth its small cost" },
            { letter: "C", text: "plans to stop saving rubber bands and boxes" },
            { letter: "D", text: "thinks Lucía should not tease her in public" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rv-c43-ventfield",
      family: "G9",
      title: "The Vent Field",
      kind: "Vocabulary · 9.RV",
      blurb: "A geology class walks a steaming field of volcanic vents, with six words to work out.",
      level: 3,
      passage:
        "<p>" + N(1) + "The bus left Ms. Takahashi's geology class at the edge of the vent field just after sunrise, and for a moment no one spoke. " +
        N(2) + "The landscape was <strong>desolate</strong>: no trees, no grass, only gray crust cracked into plates and a few twisted posts marking the trail. " +
        N(3) + "From dozens of small holes, white steam rose in thin threads, and the air carried a <strong>sulfurous</strong> smell that made Hiro pull his scarf over his nose and announce that the planet had forgotten to brush its teeth. " +
        N(4) + "\"These are fumaroles,\" Ms. Takahashi said, \"openings where gas and heat <strong>emanate</strong> from the magma far below.\" " +
        N(5) + "She reminded them to stay on the marked path, because the crust between the posts could be as thin as a cracker over boiling mud. " +
        N(6) + "Ana took a <strong>tentative</strong> step forward, testing the ground with her heel before trusting it with her full weight. " +
        N(7) + "Near the center of the field, a low rumble rolled under their boots, and a nearby vent coughed out a darker, thicker plume. " +
        N(8) + "The sound was <strong>ominous</strong>, like a dog growling from behind a closed door, and even Hiro stopped joking. " +
        N(9) + "Ms. Takahashi checked a handheld gas meter, nodded, and told them it was the normal breathing of a restless but steady system. " +
        N(10) + "Still, when they reached the overlook, the path down the far side looked <strong>precarious</strong>, a narrow ledge of loose stones above a steep drop to the steaming pit. " +
        N(11) + "They took the long way back. " +
        N(12) + "On the bus, Ana opened her notebook and found she had written only one line during the whole morning: The ground here is still being made." +
        "</p>",
      claims: [
        {
          id: "desolate",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which words from sentence 2 best help the reader understand the meaning of desolate?",
          choices: [
            { letter: "A", text: "marking the trail" },
            { letter: "B", text: "a few twisted posts" },
            { letter: "C", text: "no trees, no grass" },
            { letter: "D", text: "The landscape was" }
          ],
          correct: "C"
        },
        {
          id: "emanate",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "As Ms. Takahashi uses it in sentence 4, the word emanate most nearly means to —",
          choices: [
            { letter: "A", text: "flow out from a source" },
            { letter: "B", text: "cool down slowly" },
            { letter: "C", text: "freeze into crystals" },
            { letter: "D", text: "sink deep underground" }
          ],
          correct: "A"
        },
        {
          id: "tentative",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written small instead of tentative in sentence 6. Compared with small, tentative suggests a step that is —",
          choices: [
            { letter: "A", text: "quick and confident" },
            { letter: "B", text: "careless and loud" },
            { letter: "C", text: "playful and silly" },
            { letter: "D", text: "hesitant and unsure" }
          ],
          correct: "D"
        },
        {
          id: "teeth",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "Hiro's joke in sentence 3 that the planet had forgotten to brush its teeth mainly suggests that the sulfurous smell is —",
          choices: [
            { letter: "A", text: "sweet, like candy from a store" },
            { letter: "B", text: "foul, like very bad breath" },
            { letter: "C", text: "faint, like a distant fire" },
            { letter: "D", text: "fresh, like cool mint" }
          ],
          correct: "B"
        },
        {
          id: "growl",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 8, the rumble is compared to a dog growling behind a closed door mainly to suggest that it —",
          choices: [
            { letter: "A", text: "signals a hidden danger that could break loose" },
            { letter: "B", text: "is a friendly sound the students know well" },
            { letter: "C", text: "comes from an animal living near the vents" },
            { letter: "D", text: "is too quiet for most of the class to hear" }
          ],
          correct: "A"
        },
        {
          id: "beingmade",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "The line Ana writes in her notebook in sentence 12 mainly suggests that she —",
          choices: [
            { letter: "A", text: "was too frightened to take any real notes" },
            { letter: "B", text: "thinks the trail needs to be rebuilt soon" },
            { letter: "C", text: "sees the field as a place of ongoing creation" },
            { letter: "D", text: "plans to return to the vent field alone" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── PAIRED TEXTS · 9.DSR ───────────────────────── */
    {
      id: "g9-dsr-c43-keepersleft",
      family: "G9",
      title: "When the Keepers Left",
      kind: "Paired texts · 9.DSR",
      blurb: "An article on automated lighthouses and a memory of the night a keeper's lamp was replaced.",
      level: 2,
      passage:
        "<p><strong>Text 1 — When the Keepers Left</strong></p>" +
        "<p>" + N(1) + "For most of the last two centuries, every working lighthouse needed a keeper who lit the lamp at dusk, kept it burning through the night, and cleaned the lens each morning. " +
        N(2) + "Beginning in the middle of the 1900s, that changed. " +
        N(3) + "Electric lamps that switched on automatically at sunset, backup batteries, and later solar panels allowed a light to run for months without anyone climbing the tower. " +
        N(4) + "One by one, coastal agencies replaced their keepers with machines. " +
        N(5) + "Automation saved money and removed workers from some of the loneliest posts in the country, where storms could cut off supplies for weeks. " +
        N(6) + "It also proved reliable: modern lamps rarely fail, and when they do, sensors send an alert to a technician on shore. " +
        N(7) + "Today, nearly every lighthouse still in service operates with no one living beside it.</p>" +
        "<p><strong>Text 2 — My Father's Lamp</strong></p>" +
        "<p>" + N(8) + "My father kept the Sable Point Light until I was ten, and on the night the electricians installed the automatic lamp, he stood in the lantern room with his hands in his pockets, as if he did not know what to do with them. " +
        N(9) + "For eleven years those hands had trimmed wicks, polished brass, and wiped salt from the glass at three in the morning. " +
        N(10) + "The new lamp needed none of it. " +
        N(11) + "It clicked on at sunset by itself, steady and bright, and it was a better light than his had ever been. " +
        N(12) + "I know that. " +
        N(13) + "But the next evening I found him on the porch at dusk, watching the tower, waiting for a moment that no longer belonged to him. " +
        N(14) + "When the light came on, he nodded at it anyway, the way you nod to a neighbor.</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea do both texts about lighthouse automation support?",
          choices: [
            { letter: "A", text: "Keepers were happy to leave their lonely posts." },
            { letter: "B", text: "Automatic lamps often failed during storms." },
            { letter: "C", text: "Automatic lamps worked at least as well as keepers." },
            { letter: "D", text: "Most lighthouses were closed after automation." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "How do the two texts differ in their treatment of automation?",
          choices: [
            { letter: "A", text: "Text 1 presents it as practical progress; Text 2 shows a personal loss." },
            { letter: "B", text: "Text 1 criticizes its cost; Text 2 praises how much money it saved." },
            { letter: "C", text: "Text 1 tells one family's story; Text 2 gives a broad history." },
            { letter: "D", text: "Text 1 says it failed; Text 2 says it worked better than expected." }
          ],
          correct: "A"
        },
        {
          id: "illustrates",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which sentence from Text 1 is most directly illustrated by sentence 11 of Text 2?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "B"
        },
        {
          id: "humancost",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Select TWO sentences from Text 2 that show a human cost of automation that Text 1 does not discuss.",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of Text 2, \"My Father's Lamp,\" is best described as —",
          choices: [
            { letter: "A", text: "angry and accusing" },
            { letter: "B", text: "cheerful and joking" },
            { letter: "C", text: "formal and technical" },
            { letter: "D", text: "tender and wistful" }
          ],
          correct: "D"
        },
        {
          id: "pockets",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "In Text 2, the detail in sentence 8 about the father's hands in his pockets mainly emphasizes that he —",
          choices: [
            { letter: "A", text: "is cold in the drafty lantern room" },
            { letter: "B", text: "is hiding a tool from the electricians" },
            { letter: "C", text: "feels lost without the work he once did" },
            { letter: "D", text: "is impatient for the workers to finish" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-dsr-c43-truckzone",
      family: "G9",
      title: "The Truck Zone",
      kind: "Paired texts · 9.DSR",
      blurb: "A town council notice about a food truck zone and a dumpling-truck owner's reply.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Notice from the Millbrook Town Council</strong></p>" +
        "<p>" + N(1) + "The Millbrook Town Council will vote on April 9 on a proposal to create a food truck zone in the Depot Street parking lot. " +
        N(2) + "Under the proposal, food trucks could operate in the zone from 10 a.m. to 9 p.m. daily, with electrical hookups, trash service, and restrooms provided by the town. " +
        N(3) + "Trucks would no longer be allowed to park within 200 feet of any Main Street restaurant. " +
        N(4) + "Council members say the change responds to complaints from restaurant owners, who report that trucks parked near their doors draw customers away while paying none of the same property taxes. " +
        N(5) + "The council also notes that trucks on Main Street take up about a dozen parking spaces during the lunch hour. " +
        N(6) + "Residents may comment at the April 9 meeting or by email before April 5.</p>" +
        "<p><strong>Text 2 — A Letter to the Council</strong></p>" +
        "<p>" + N(7) + "I have parked my dumpling truck on Main Street every weekday for three years, and I understand why the restaurants are frustrated. " +
        N(8) + "But the Depot Street lot is a ten-minute walk from the offices where most of my lunch customers work, and few people on a thirty-minute break will make that trip. " +
        N(9) + "The council's notice says the zone will have restrooms and power, which I appreciate, but it says nothing about how many people actually pass the lot at noon. " +
        N(10) + "Before the vote, I ask the council to count them. " +
        N(11) + "If the zone is busy enough, I will move gladly. " +
        N(12) + "If it is empty, the council will not have leveled the playing field; it will simply have closed my business without saying so. " +
        N(13) + "Grace Liu, owner, Lucky Fold Dumplings</p>",
      claims: [
        {
          id: "missing",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which concern is raised in Text 2 but not addressed in Text 1?",
          choices: [
            { letter: "A", text: "whether the zone will have restrooms for workers" },
            { letter: "B", text: "whether trucks take up parking spaces on Main Street" },
            { letter: "C", text: "whether restaurants pay property taxes to the town" },
            { letter: "D", text: "whether enough customers will walk to the Depot lot" }
          ],
          correct: "D"
        },
        {
          id: "purposes",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The purpose of Text 1 differs from the purpose of Text 2 in that Text 1 mainly —",
          choices: [
            { letter: "A", text: "informs residents of a proposal and how to comment" },
            { letter: "B", text: "argues that food trucks should leave Millbrook" },
            { letter: "C", text: "asks the council to count customers before voting" },
            { letter: "D", text: "tells the story of one restaurant's struggles" }
          ],
          correct: "A"
        },
        {
          id: "respond",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "In sentence 9, Grace Liu most directly responds to which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "B"
        },
        {
          id: "combine",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "A reader combining both texts could best conclude that the vote's effect on truck owners depends mostly on —",
          choices: [
            { letter: "A", text: "how many restaurants open on Main Street" },
            { letter: "B", text: "whether the town adds more parking spaces" },
            { letter: "C", text: "how much foot traffic the Depot lot receives" },
            { letter: "D", text: "whether residents send email before April 5" }
          ],
          correct: "C"
        },
        {
          id: "attributed",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence in Text 1 reports a claim made by others rather than stating a fact in the council's own voice?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "C"
        },
        {
          id: "request",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which TWO sentences from Text 2 best support Grace Liu's request in sentence 10? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: ["B", "D"]
        }
      ]
    },
    {
      id: "g9-dsr-c43-emberridge",
      family: "G9",
      title: "Ember Ridge",
      kind: "Paired texts · 9.DSR",
      blurb: "A volcanic park brochure and the story of a cousin who thought two miles was nothing.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Ember Ridge Volcanic Park: Visitor Guide</strong></p>" +
        "<p>" + N(1) + "Welcome to Ember Ridge Volcanic Park, home to one of the youngest lava fields in the region. " +
        N(2) + "Visitors can walk the Cinder Loop, a two-mile trail across black lava that cooled less than three hundred years ago. " +
        N(3) + "Along the way, look for lava tubes, tunnels formed when the outside of a lava flow hardened while hot rock kept flowing inside. " +
        N(4) + "The trail has little shade, and the dark rock can reach temperatures above 120 degrees on summer afternoons. " +
        N(5) + "Bring at least one quart of water per person, wear sturdy shoes, and stay on the marked path, because sharp lava can cut through thin soles and fragile formations break easily. " +
        N(6) + "Ranger talks begin at the visitor center every day at 10 a.m.</p>" +
        "<p><strong>Text 2 — Two Miles</strong></p>" +
        "<p>" + N(7) + "My cousin Rubén laughed when I packed three water bottles for a two-mile walk. " +
        N(8) + "\"It's barely a hike,\" he said, swinging one empty hand. " +
        N(9) + "By the halfway marker, the black rock was throwing heat back at us like an open oven, and Rubén's sneakers, the thin canvas kind, had a fresh slice along one side. " +
        N(10) + "We sat in the cool mouth of a lava tube, and I handed him a bottle without a word. " +
        N(11) + "He drank half of it in one breath. " +
        N(12) + "\"Okay,\" he said, wiping his chin. \"Maybe the brochure was right.\" " +
        N(13) + "On the way back, he walked exactly in the center of the trail, studying every step.</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea do both texts about Ember Ridge support?",
          choices: [
            { letter: "A", text: "The ranger talks are the best part of a visit." },
            { letter: "B", text: "The lava field's heat and sharp rock demand preparation." },
            { letter: "C", text: "The Cinder Loop is too long for most visitors." },
            { letter: "D", text: "The lava tubes are too dangerous to enter." }
          ],
          correct: "B"
        },
        {
          id: "relate",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "How does Text 2 mainly relate to Text 1?",
          choices: [
            { letter: "A", text: "It argues that the brochure exaggerates the dangers." },
            { letter: "B", text: "It explains how the lava field formed long ago." },
            { letter: "C", text: "It shows what happens when a visitor ignores the advice." },
            { letter: "D", text: "It gives the schedule for the park's ranger talks." }
          ],
          correct: "C"
        },
        {
          id: "sneakers",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "What happens to Rubén's sneakers in sentence 9 most directly proves which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "A"
        },
        {
          id: "matches",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Select TWO details from Text 2 that match warnings given in Text 1.",
          choices: [
            { letter: "A", text: "the black rock throwing heat back like an open oven" },
            { letter: "B", text: "sitting together in the cool mouth of a lava tube" },
            { letter: "C", text: "Rubén laughing when the narrator packs the bottles" },
            { letter: "D", text: "a fresh slice along Rubén's thin canvas sneakers" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is best supported by the story of Rubén in Text 2?",
          choices: [
            { letter: "A", text: "Family members should never tease each other." },
            { letter: "B", text: "Short hikes are always safer than long ones." },
            { letter: "C", text: "Brochures usually leave out the important facts." },
            { letter: "D", text: "Overconfidence can give way to respect for nature." }
          ],
          correct: "D"
        },
        {
          id: "tubes",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to Text 1, how were the lava tubes at Ember Ridge formed?",
          choices: [
            { letter: "A", text: "Rain wore tunnels through the cooled black rock." },
            { letter: "B", text: "Workers dug them out to make shady rest stops." },
            { letter: "C", text: "Hot rock kept flowing inside a hardened outer shell." },
            { letter: "D", text: "Earthquakes cracked open the old lava field." }
          ],
          correct: "C"
        }
      ]
    },
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
