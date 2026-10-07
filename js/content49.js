/* SOL Labyrinth — Grade 9 long packs (expansion v5.15, content49): a puzzle hunt, fossils, sign language and a
 * zoo keeper. Stories, a poem, a short play, articles, a care guide, vocabulary sets and paired texts,
 * 390–520 words each (paired texts 200–260 each), 8 questions per pack. Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── 1 · Literary · puzzle hunt · level 2 ───────────── */
    {
      id: "g9-rl-c49-last-envelope",
      family: "G9",
      title: "The Last Envelope",
      kind: "Literary · 9.RL",
      blurb: "Three teammates, one final clue at a library puzzle hunt, and an answer hiding in plain sight.",
      level: 2,
      passage:
        "<p>" + N(1) + "The final envelope of the Fairmont Library Puzzle Hunt was taped beneath a reading table, and by the time Priya found it, three other teams were already gathered near the circulation desk, whispering answers. " +
        N(2) + "She peeled back the tape methodically, one corner at a time, until Joaquín groaned. " +
        N(3) + "\"We're forty minutes behind the Hawthorne team,\" he said. " +
        N(4) + "\"Just tear it.\" " +
        N(5) + "Priya did not tear it. " +
        N(6) + "She had learned that morning, on clue four, that an envelope could be part of the puzzle itself.</p>" +
        "<p>" + N(7) + "Inside was a single card with six words printed in faded blue ink: PEBBLE, OCEAN, EMBER, TULIP, RAVEN, YARROW. " +
        N(8) + "Odette, who had barely spoken since the hunt began at nine, read the list twice under her breath. " +
        N(9) + "Joaquín pulled out his phone to search the words, then remembered the rules and shoved it back into his pocket. " +
        N(10) + "\"Maybe they're shelf categories,\" he said. " +
        N(11) + "\"Ocean books, bird books.\" " +
        N(12) + "They spent twenty minutes walking the stacks, and the clock above the door ticked like a metronome set for someone else's song.</p>" +
        "<p>" + N(13) + "Back at the table, Priya turned the card over. " +
        N(14) + "Nothing. " +
        N(15) + "She held it up to the window, and the light came through the paper in a pale square. " +
        N(16) + "Still nothing. " +
        N(17) + "Joaquín slumped into a chair and announced that puzzle hunts were invented by people who enjoyed watching others suffer. " +
        N(18) + "Odette laughed, a short surprised sound, and then she stopped laughing and leaned over the card.</p>" +
        "<p>" + N(19) + "\"The first letters,\" she said quietly. " +
        N(20) + "\"P, O, E, T, R, Y.\" " +
        N(21) + "Joaquín stared at the card as if it had insulted him personally. " +
        N(22) + "\"It was right there the whole time,\" he said. " +
        N(23) + "\"That's usually where things are,\" Odette replied, and Priya laughed so loudly that a man reading a newspaper looked up. " +
        N(24) + "Priya felt the tips of her ears go warm anyway, because she had held the card longer than anyone and had seen only words.</p>" +
        "<p>" + N(25) + "The poetry shelves ran along the back wall, four long rows of thin books. " +
        N(26) + "Joaquín began pulling volumes at random, but Odette touched his arm and pointed to the card's faded blue ink. " +
        N(27) + "Only one book on the shelf had a blue spine, and its color had faded to the same pale shade. " +
        N(28) + "Tucked inside the back cover was a gold sticker shaped like a key. " +
        N(29) + "By then two other teams had already claimed theirs, so the Fairmont team would finish third, not first. " +
        N(30) + "Joaquín held the sticker up anyway as if it were a medal. " +
        N(31) + "On the walk to the desk, Priya asked Odette why she had stayed so quiet all morning. " +
        N(32) + "Odette shrugged and said that everyone else had seemed so certain. " +
        N(33) + "\"Next year,\" Priya said, \"you read every card first.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does \"The Last Envelope\" best develop?",
          choices: [
            { letter: "A", text: "Speed matters more than accuracy in any contest." },
            { letter: "B", text: "Quiet teammates may notice what louder ones miss." },
            { letter: "C", text: "Finishing first is the only reward worth having." },
            { letter: "D", text: "Rules in a game are meant to be bent a little." }
          ],
          correct: "B"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Based on sentences 8 and 32, readers can best infer that Odette stayed quiet because she —",
          choices: [
            { letter: "A", text: "had not understood any of the earlier clues" },
            { letter: "B", text: "wanted Priya to get credit for the final answer" },
            { letter: "C", text: "was annoyed that Joaquín kept complaining" },
            { letter: "D", text: "doubted her ideas mattered when others sounded sure" }
          ],
          correct: "D"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Joaquín throughout the story?",
          choices: [
            { letter: "A", text: "He is impatient but keeps his sense of humor." },
            { letter: "B", text: "He is careful and slow to make any decision." },
            { letter: "C", text: "He is bitter about losing and blames his team." },
            { letter: "D", text: "He is shy and lets the others do the talking." }
          ],
          correct: "A"
        },
        {
          id: "fig",
          sol: "9.RL.2.A",
          stem: "In sentence 12, the clock \"ticked like a metronome set for someone else's song\" mainly suggests that —",
          choices: [
            { letter: "A", text: "the library was too noisy for the team to think" },
            { letter: "B", text: "Priya was humming to keep herself calm" },
            { letter: "C", text: "time seemed to be working for the other teams" },
            { letter: "D", text: "the clock in the library was running fast" }
          ],
          correct: "C"
        },
        {
          id: "medal",
          sol: "9.RL.2.B",
          stem: "In sentence 30, Joaquín holds up the sticker \"as if it were a medal.\" This image mainly suggests that he —",
          choices: [
            { letter: "A", text: "is proud of the team even though it finished third" },
            { letter: "B", text: "believes the judges made a mistake in the results" },
            { letter: "C", text: "wants to keep the sticker instead of turning it in" },
            { letter: "D", text: "is making fun of the teams that finished ahead" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of the story's final paragraph (sentences 25–33) is best described as —",
          choices: [
            { letter: "A", text: "bitter and disappointed" },
            { letter: "B", text: "tense and suspenseful" },
            { letter: "C", text: "formal and distant" },
            { letter: "D", text: "warm and hopeful" }
          ],
          correct: "D"
        },
        {
          id: "ink",
          sol: "9.RL.3.A",
          stem: "How does the detail about the faded blue ink in sentence 7 shape the plot later in the story?",
          choices: [
            { letter: "A", text: "It shows that the card had been reused from a past hunt." },
            { letter: "B", text: "It explains why Priya could see nothing through the card." },
            { letter: "C", text: "It lets the team pick the right book from the shelf." },
            { letter: "D", text: "It proves that Joaquín had searched the wrong stacks." }
          ],
          correct: "C"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 2, the word methodically most nearly means —",
          choices: [
            { letter: "A", text: "in a nervous, shaky way" },
            { letter: "B", text: "in a careful, step-by-step way" },
            { letter: "C", text: "in a loud, showy way" },
            { letter: "D", text: "in a quick, careless way" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 2 · Literary · fossils · level 1 ───────────── */
    {
      id: "g9-rl-c49-creek-bed",
      family: "G9",
      title: "The Creek Bed",
      kind: "Literary · 9.RL",
      blurb: "Amara wanted a dinosaur. Mill Creek offers her something much smaller and much older.",
      level: 1,
      passage:
        "<p>" + N(1) + "Amara had planned to find a dinosaur. " +
        N(2) + "She knew that dinosaurs had never lived in the rock along Mill Creek, because her uncle Kofi had told her so three times on the drive. " +
        N(3) + "The rock there was older than dinosaurs, he said, made of mud that had settled at the bottom of a shallow sea. " +
        N(4) + "Amara did not care. " +
        N(5) + "She had brought a hammer, a chisel, a soft brush, and a backpack large enough for a skull.</p>" +
        "<p>" + N(6) + "The creek was low in late August, and the gray shale along its banks lay in thin layers like the pages of a wet book. " +
        N(7) + "Uncle Kofi showed her how to split a slab by tapping the chisel along the edge, not the face. " +
        N(8) + "\"Gentle,\" he said. " +
        N(9) + "\"You're opening a letter, not breaking a window.\" " +
        N(10) + "For the first hour, every slab opened onto plain gray stone. " +
        N(11) + "Amara's arms ached, the sun pressed on the back of her neck, and the gnats circled her head as if they had been hired to annoy her.</p>" +
        "<p>" + N(12) + "Around noon, she split a slab and saw a ridged shape no bigger than her thumbnail. " +
        N(13) + "It looked like a tiny fan pressed into the rock. " +
        N(14) + "She almost tossed it into the water. " +
        N(15) + "\"That's it?\" she said. " +
        N(16) + "Uncle Kofi crouched beside her and held the slab up to the light. " +
        N(17) + "\"That,\" he said, \"is a brachiopod, and it lived here around four hundred million years ago.\" " +
        N(18) + "He explained that it had been a small sea animal with two shells, and that when it died, mud covered it so quickly that its shape was saved.</p>" +
        "<p>" + N(19) + "Amara looked at the fan again. " +
        N(20) + "Four hundred million years was a number too large to hold, so she tried a smaller one. " +
        N(21) + "Her grandmother was seventy-nine. " +
        N(22) + "If every year of her grandmother's life were a single step, Amara would have to walk for longer than she could imagine to reach the time when this animal was alive. " +
        N(23) + "The shell did not look small anymore.</p>" +
        "<p>" + N(24) + "They found eleven more brachiopods that afternoon, and Amara wrapped each one in newspaper with the date and the location written on the outside. " +
        N(25) + "Uncle Kofi said that a fossil without a record of where it came from tells only half its story. " +
        N(26) + "On the drive home, Amara held the first slab in her lap instead of putting it in the backpack. " +
        N(27) + "The backpack was still large enough for a skull, but she found she did not mind that it was mostly empty. " +
        N(28) + "\"Next time,\" she said, \"can we come back to the same spot?\" " +
        N(29) + "Uncle Kofi smiled and said that was exactly what a real fossil hunter would ask.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of \"The Creek Bed\"?",
          choices: [
            { letter: "A", text: "Adults usually know less than they claim to know." },
            { letter: "B", text: "Hard work always leads to the result a person wants." },
            { letter: "C", text: "Something small can hold great value once it is understood." },
            { letter: "D", text: "Old places should be left alone and never disturbed." }
          ],
          correct: "C"
        },
        {
          id: "lap",
          sol: "9.RL.1.B",
          stem: "Amara holds the first slab in her lap on the drive home (sentence 26). Readers can best infer that she —",
          choices: [
            { letter: "A", text: "now treasures the fossil she nearly threw away" },
            { letter: "B", text: "is worried the backpack will crush her tools" },
            { letter: "C", text: "plans to give the fossil to her grandmother" },
            { letter: "D", text: "wants to prove to her uncle that she was right" }
          ],
          correct: "A"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          stem: "How does Amara change from the beginning of the story to the end?",
          choices: [
            { letter: "A", text: "She starts out confident and ends up afraid of the creek." },
            { letter: "B", text: "She starts out bored and ends up wanting to go home." },
            { letter: "C", text: "She starts out curious and ends up angry at her uncle." },
            { letter: "D", text: "She starts out wanting something huge and ends up content." }
          ],
          correct: "D"
        },
        {
          id: "letter",
          sol: "9.RL.2.A",
          stem: "In sentence 9, Uncle Kofi says, \"You're opening a letter, not breaking a window.\" He means that Amara should —",
          choices: [
            { letter: "A", text: "write down where she found each rock" },
            { letter: "B", text: "split the rock with care instead of force" },
            { letter: "C", text: "hit the rock harder to get through it" },
            { letter: "D", text: "keep her fossils inside a paper envelope" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "Which word best describes the tone of the last paragraph of \"The Creek Bed\" (sentences 24–29)?",
          choices: [
            { letter: "A", text: "satisfied" },
            { letter: "B", text: "anxious" },
            { letter: "C", text: "mocking" },
            { letter: "D", text: "gloomy" }
          ],
          correct: "A"
        },
        {
          id: "backpack",
          sol: "9.RL.3.A",
          stem: "The author mentions the large backpack in sentence 5 and again in sentence 27 mainly to —",
          choices: [
            { letter: "A", text: "explain how Amara carried all her tools to the creek" },
            { letter: "B", text: "suggest that Amara will return with a bigger bag" },
            { letter: "C", text: "show how much Amara's expectations have changed" },
            { letter: "D", text: "hint that Uncle Kofi forgot to bring his own bag" }
          ],
          correct: "C"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          stem: "How do the conditions described in sentences 10 and 11 affect Amara?",
          choices: [
            { letter: "A", text: "They make her excited to keep searching." },
            { letter: "B", text: "They leave her tired and discouraged." },
            { letter: "C", text: "They make her want to swim in the creek." },
            { letter: "D", text: "They cause her to argue with her uncle." }
          ],
          correct: "B"
        },
        {
          id: "small",
          sol: "9.RV.1.F",
          stem: "Sentence 23 says, \"The shell did not look small anymore.\" The author uses this statement to show that Amara —",
          choices: [
            { letter: "A", text: "had picked up a larger fossil by mistake" },
            { letter: "B", text: "was looking at the shell through a lens" },
            { letter: "C", text: "had misjudged the size of the slab at first" },
            { letter: "D", text: "now sensed how important the shell's age made it" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 3 · Literary · sign language · level 3 ───────────── */
    {
      id: "g9-rl-c49-name-sign",
      family: "G9",
      title: "Name Sign",
      kind: "Literary · 9.RL",
      blurb: "In Hana's family, a name sign must be earned. A clumsy beginner at ASL club is about to earn one.",
      level: 3,
      passage:
        "<p>" + N(1) + "In my family, nobody gets a name sign until they have earned it, and my father has been known to make people wait for years. " +
        N(2) + "Our neighbor, Mr. Adeyemi, waited four. " +
        N(3) + "My aunt's husband is still waiting, and he married into the family before I was born. " +
        N(4) + "So when Wren Castillo started showing up at the American Sign Language club I ran every Thursday, I did not expect her to get one, and I definitely did not expect her to get one from me.</p>" +
        "<p>" + N(5) + "Wren was the kind of beginner who made my wrists ache to watch. " +
        N(6) + "She signed \"thank you\" from her chin like she was blowing a kiss to the entire room. " +
        N(7) + "She fingerspelled her own name so slowly that the club's other members, all three of them, finished their sandwiches while she worked through the W. " +
        N(8) + "I corrected her the way my mother corrects a crooked picture frame: quickly, without comment, already turning away. " +
        N(9) + "I told myself this was efficient. " +
        N(10) + "Looking back, I think I was guarding something.</p>" +
        "<p>" + N(11) + "Signing was the language of my house before it was anything else to me. " +
        N(12) + "My parents are Deaf, and my first words were in their hands, not in my mouth. " +
        N(13) + "At school, though, people treated it like a party trick. " +
        N(14) + "They asked me to sign rude words or asked whether my parents could read lips, which they can, a little, though they hate being asked. " +
        N(15) + "Every hearing person who learned ten signs and posted a video felt, to me, like someone walking through our living room in muddy shoes.</p>" +
        "<p>" + N(16) + "Wren never posted a video. " +
        N(17) + "In October she came to club with a list of questions written in pencil, and the first one was about facial grammar: why my eyebrows went up when I asked a yes-or-no question. " +
        N(18) + "Nobody had ever asked me that. " +
        N(19) + "I explained that in ASL, your face is part of the sentence, not decoration on top of it. " +
        N(20) + "She practiced raising her eyebrows in the band room mirror until the custodian asked if she was all right.</p>" +
        "<p>" + N(21) + "In November my father came to pick me up early, and Wren was the only person still in the room. " +
        N(22) + "She signed \"nice to meet you\" with the handshape wrong and the expression exactly right. " +
        N(23) + "My father watched her the way he watches a pot that might boil over, and then he did something I had seen him do only a handful of times. " +
        N(24) + "He asked her, slowly, what she wanted to learn. " +
        N(25) + "She answered him, slowly, that she wanted to talk with her baby cousin, who had been born Deaf that summer.</p>" +
        "<p>" + N(26) + "On the drive home my father asked what Wren's name sign was. " +
        N(27) + "I said she did not have one. " +
        N(28) + "He looked at me for a long moment at a red light. " +
        N(29) + "\"Then someone should pay attention to her long enough to find it,\" he signed. " +
        N(30) + "The next Thursday, I gave her the letter W tapped twice beside the eyebrow, because she was the first person who had ever asked about my face.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is best developed across \"Name Sign\"?",
          choices: [
            { letter: "A", text: "Sincere effort can earn a place in something deeply personal." },
            { letter: "B", text: "Beginners should wait until they are skilled before practicing." },
            { letter: "C", text: "Families should keep their traditions hidden from outsiders." },
            { letter: "D", text: "Learning a language is mostly a matter of memorizing signs." }
          ],
          correct: "A"
        },
        {
          id: "guard",
          sol: "9.RL.1.B",
          stem: "In sentence 10, the narrator says she was \"guarding something.\" Based on paragraph 3, she was most likely protecting —",
          choices: [
            { letter: "A", text: "her position as the only leader of the club" },
            { letter: "B", text: "her parents from strangers who might visit" },
            { letter: "C", text: "her family's language from careless treatment" },
            { letter: "D", text: "her own sandwich time during club meetings" }
          ],
          correct: "C"
        },
        {
          id: "shift",
          sol: "9.RL.1.C",
          stem: "Which statement best describes how the narrator's attitude toward Wren changes?",
          choices: [
            { letter: "A", text: "She moves from admiring Wren to resenting her." },
            { letter: "B", text: "She moves from guarded impatience to real respect." },
            { letter: "C", text: "She moves from ignoring Wren to competing with her." },
            { letter: "D", text: "She moves from pitying Wren to feeling jealous of her." }
          ],
          correct: "B"
        },
        {
          id: "muddy",
          sol: "9.RL.2.A",
          stem: "In sentence 15, the narrator compares some hearing learners to \"someone walking through our living room in muddy shoes\" mainly to suggest that they —",
          choices: [
            { letter: "A", text: "visit her house too often without being invited" },
            { letter: "B", text: "learn signs faster than she did as a young child" },
            { letter: "C", text: "make videos that are filmed in messy places" },
            { letter: "D", text: "intrude carelessly on something private and valued" }
          ],
          correct: "D"
        },
        {
          id: "pot",
          sol: "9.RL.2.B",
          stem: "In sentence 23, the father watches Wren \"the way he watches a pot that might boil over.\" This image mainly conveys that he is —",
          choices: [
            { letter: "A", text: "bored and waiting for the visit to end" },
            { letter: "B", text: "alert and cautiously judging her" },
            { letter: "C", text: "irritated that she is still in the room" },
            { letter: "D", text: "amused by her mistakes with handshapes" }
          ],
          correct: "B"
        },
        {
          id: "wait",
          sol: "9.RL.3.A",
          stem: "The author includes the details about Mr. Adeyemi and the aunt's husband in paragraph 1 mainly to —",
          choices: [
            { letter: "A", text: "make the ending meaningful by showing how rare name signs are" },
            { letter: "B", text: "introduce two characters who will help Wren learn to sign" },
            { letter: "C", text: "show that the narrator's father dislikes most of his neighbors" },
            { letter: "D", text: "explain why the narrator started the club every Thursday" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "Because \"Name Sign\" is told from the narrator's first-person point of view, the reader —",
          choices: [
            { letter: "A", text: "knows exactly what Wren is thinking in every scene" },
            { letter: "B", text: "learns the father's reasons before the narrator does" },
            { letter: "C", text: "sees the club only through the custodian's eyes" },
            { letter: "D", text: "understands private feelings the narrator hides from Wren" }
          ],
          correct: "D"
        },
        {
          id: "trick",
          sol: "9.RV.1.E",
          stem: "In sentence 13, people treat signing \"like a party trick.\" Compared with calling it a hobby, the phrase party trick suggests that signing was being treated as —",
          choices: [
            { letter: "A", text: "a skill that takes years of training" },
            { letter: "B", text: "a private activity done alone at home" },
            { letter: "C", text: "a shallow way to entertain others" },
            { letter: "D", text: "a serious subject studied in class" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 4 · Poetry · zoo keeper · level 2 ───────────── */
    {
      id: "g9-rl-c49-before-gates",
      family: "G9",
      title: "Before the Gates Open",
      kind: "Poetry · 9.RL",
      blurb: "A zoo keeper's dawn rounds: flamingos, an old tortoise, impatient otters, and names no visitor asks.",
      level: 2,
      passage:
        "<p class=\"poem\">" + L(1) + "Before the gates, before the strollers and the maps,<br>" +
        L(2) + "I walk the paths while the zoo is still asleep,<br>" +
        L(3) + "a bucket in each hand, the gravel loud as gossip<br>" +
        L(4) + "beneath my boots. The flamingos wake like a rumor,<br>" +
        L(5) + "one pink question lifting from the pond, then all of them,<br>" +
        L(6) + "a sunrise standing on its own thin legs.<br>" +
        L(7) + "The old tortoise has not moved since yesterday.<br>" +
        L(8) + "He keeps time the way a mountain does,<br>" +
        L(9) + "by not bothering. I set his lettuce down<br>" +
        L(10) + "and tell him the news: rain by noon, a school group at ten.<br>" +
        L(11) + "He blinks once, a door closing in a quiet house.<br>" +
        L(12) + "Past the reptile house, the otters hear my keys<br>" +
        L(13) + "and pour themselves against the glass,<br>" +
        L(14) + "all whiskers and complaint, as if I were late,<br>" +
        L(15) + "as if I am not always, always exactly on time.<br>" +
        L(16) + "The visitors will come and call them cute,<br>" +
        L(17) + "and they are, but cute is a coat the animals wear<br>" +
        L(18) + "for strangers. I know the otter who sulks<br>" +
        L(19) + "when the fish is cut too small, the tortoise<br>" +
        L(20) + "who chooses the warm stone over the shade,<br>" +
        L(21) + "the flamingo with the crooked step who eats last.<br>" +
        L(22) + "No one will ask me their names today.<br>" +
        L(23) + "That's all right. At closing, when the paths go quiet,<br>" +
        L(24) + "I will say them anyway, one by one, like a roll call<br>" +
        L(25) + "for a class that never graduates and never leaves.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of \"Before the Gates Open\"?",
          choices: [
            { letter: "A", text: "Animals in zoos would be happier living in the wild." },
            { letter: "B", text: "Visitors understand animals better than workers do." },
            { letter: "C", text: "Early mornings are the hardest part of any job." },
            { letter: "D", text: "Truly knowing others comes from patient daily care." }
          ],
          correct: "D"
        },
        {
          id: "names",
          sol: "9.RL.1.B",
          stem: "Lines 22–25 suggest that the speaker —",
          choices: [
            { letter: "A", text: "wishes the zoo would close earlier each day" },
            { letter: "B", text: "values a bond with the animals that visitors never see" },
            { letter: "C", text: "is upset that no visitors want to talk to keepers" },
            { letter: "D", text: "plans to teach the school group the animals' names" }
          ],
          correct: "B"
        },
        {
          id: "sunrise",
          sol: "9.RL.2.A",
          stem: "The metaphor \"a sunrise standing on its own thin legs\" (line 6) mainly emphasizes the flamingos' —",
          choices: [
            { letter: "A", text: "bright color as the whole flock rises" },
            { letter: "B", text: "habit of sleeping late into the morning" },
            { letter: "C", text: "fear of the keeper's loud footsteps" },
            { letter: "D", text: "need for warm sunlight to stay healthy" }
          ],
          correct: "A"
        },
        {
          id: "mountain",
          sol: "9.RL.2.B",
          stem: "Lines 8–9 say the tortoise \"keeps time the way a mountain does, / by not bothering.\" These lines suggest that the tortoise is —",
          choices: [
            { letter: "A", text: "ill and in need of a doctor's care" },
            { letter: "B", text: "annoyed by the keeper's daily visits" },
            { letter: "C", text: "calm and unhurried by the clock" },
            { letter: "D", text: "lost inside its large enclosure" }
          ],
          correct: "C"
        },
        {
          id: "otters",
          sol: "9.RL.2.B",
          stem: "The images of the otters in lines 12–15 mainly create a mood that is —",
          choices: [
            { letter: "A", text: "solemn and still" },
            { letter: "B", text: "eerie and tense" },
            { letter: "C", text: "lively and playful" },
            { letter: "D", text: "lonely and sad" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of the last four lines of \"Before the Gates Open\" (lines 22–25) is best described as —",
          choices: [
            { letter: "A", text: "tender and accepting" },
            { letter: "B", text: "bitter and resentful" },
            { letter: "C", text: "nervous and hurried" },
            { letter: "D", text: "playful and teasing" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "Because the poem is spoken by the keeper, the reader learns —",
          choices: [
            { letter: "A", text: "what the visitors think as they walk the paths" },
            { letter: "B", text: "how the zoo decides which animals to bring in" },
            { letter: "C", text: "why the school group was scheduled for ten" },
            { letter: "D", text: "small habits of each animal that strangers miss" }
          ],
          correct: "D"
        },
        {
          id: "coat",
          sol: "9.RV.1.F",
          stem: "In lines 17–18, calling cute \"a coat the animals wear / for strangers\" suggests that —",
          choices: [
            { letter: "A", text: "the animals need extra warmth in cold weather" },
            { letter: "B", text: "cuteness is only the surface of each personality" },
            { letter: "C", text: "the animals behave badly whenever visitors leave" },
            { letter: "D", text: "the keeper dresses the animals for special shows" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 5 · Drama · puzzle hunt · level 2 ───────────── */
    {
      id: "g9-rl-c49-clue-nine",
      family: "G9",
      title: "Clue Nine",
      kind: "Drama · 9.RL",
      blurb: "A city puzzle hunt, an empty bandstand, and an older sister who keeps her real reason to herself.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "A city park on a gray Saturday afternoon. " +
        N(2) + "MARISOL, seventeen, frowns at a clipboard beside an empty wooden bandstand, while her brother TEO, thirteen, sits on a bench retying a shoelace that does not need retying.</em></p>" +
        "<p><strong>MARISOL:</strong> " + N(3) + "Clue nine says, \"Where music sleeps in open air, count the steps and climb no stair.\" " +
        N(4) + "That has to be the bandstand.</p>" +
        "<p><strong>TEO:</strong> " + N(5) + "You said clue six had to be the fountain.</p>" +
        "<p><strong>MARISOL:</strong> " + N(6) + "Clue six was ambiguous. " +
        N(7) + "It could have meant three different places.</p>" +
        "<p><strong>TEO:</strong> " + N(8) + "Clue six was fine. " +
        N(9) + "I read it wrong, and we walked twenty minutes in the opposite direction. " +
        N(10) + "You can say it.</p>" +
        "<p><strong>MARISOL:</strong> <em>(To the audience.)</em> " + N(11) + "I could say it. " +
        N(12) + "But Mom signed him up for this hunt so he would stop spending every weekend alone in his room, and if he quits now, that is exactly where he will spend the rest of this one. " +
        N(13) + "<em>(To TEO.)</em> Nobody's keeping track of who read what.</p>" +
        "<p><strong>TEO:</strong> " + N(14) + "The app is literally keeping track. " +
        N(15) + "We're in fourteenth place.</p>" +
        "<p><em>" + N(16) + "MARISOL counts the bandstand steps under her breath.</em></p>" +
        "<p><strong>MARISOL:</strong> " + N(17) + "Five steps. " +
        N(18) + "Count the steps and climb no stair. " +
        N(19) + "So the answer is five, and we shouldn't go up.</p>" +
        "<p><strong>TEO:</strong> <em>(standing slowly)</em> " + N(20) + "Or the steps aren't the bandstand's.</p>" +
        "<p><strong>MARISOL:</strong> " + N(21) + "What other steps are there?</p>" +
        "<p><strong>TEO:</strong> " + N(22) + "Ours. " +
        N(23) + "Nobody's playing, so the music is asleep, right? " +
        N(24) + "Then counting the steps could mean walking all the way around it and counting our own.</p>" +
        "<p><em>" + N(25) + "He begins to walk a slow circle around the bandstand, lips moving. " +
        N(26) + "MARISOL opens her mouth to object, then closes it and lets him go.</em></p>" +
        "<p><strong>MARISOL:</strong> <em>(To the audience.)</em> " + N(27) + "He's going to get forty or fifty, the app is going to say wrong, and he's going to sit back down on that bench for the rest of the day.</p>" +
        "<p><strong>TEO:</strong> " + N(28) + "Sixty-two. " +
        N(29) + "Type it in.</p>" +
        "<p><strong>MARISOL:</strong> <em>(typing, then staring at her phone)</em> " + N(30) + "It says correct. " +
        N(31) + "It also gives us a bonus for solving it in under five minutes.</p>" +
        "<p><strong>TEO:</strong> " + N(32) + "So what place are we in now?</p>" +
        "<p><strong>MARISOL:</strong> " + N(33) + "Eleventh.</p>" +
        "<p><strong>TEO:</strong> <em>(grabbing the clipboard)</em> " + N(34) + "Read me clue ten. " +
        N(35) + "No, wait, let me read it.</p>" +
        "<p><strong>MARISOL:</strong> <em>(handing it over, then to the audience)</em> " + N(36) + "Fourteenth to eleventh, and he took the clipboard without being asked. " +
        N(37) + "I have had better Saturdays, but right now I honestly cannot remember when.</p>" +
        "<p><em>" + N(38) + "TEO is already halfway down the path, reading aloud. " +
        N(39) + "MARISOL grabs her backpack and jogs to catch up.</em></p>",
      claims: [
        {
          id: "aside1",
          sol: "9.RL.1.D",
          stem: "Marisol's aside in sentences 11 and 12 mainly reveals that she —",
          choices: [
            { letter: "A", text: "blames Teo for their low place in the standings" },
            { letter: "B", text: "cares more about keeping Teo involved than winning" },
            { letter: "C", text: "plans to tell their mother about Teo's mistake" },
            { letter: "D", text: "thinks the puzzle hunt is a waste of a weekend" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "9.RL.1.D",
          stem: "Marisol's aside in sentence 27 creates dramatic irony mainly because —",
          choices: [
            { letter: "A", text: "Teo has already seen the correct answer on the app" },
            { letter: "B", text: "the audience knows the bandstand has only five steps" },
            { letter: "C", text: "Marisol secretly knows the answer and hides it" },
            { letter: "D", text: "the audience hears her doubts while Teo does not" }
          ],
          correct: "D"
        },
        {
          id: "direction",
          sol: "9.RL.1.D",
          stem: "The stage direction in sentence 26 mainly shows that Marisol —",
          choices: [
            { letter: "A", text: "chooses to let Teo test his own idea" },
            { letter: "B", text: "is too tired to argue with her brother" },
            { letter: "C", text: "has forgotten what she wanted to say" },
            { letter: "D", text: "wants the audience to stop watching her" }
          ],
          correct: "A"
        },
        {
          id: "teo",
          sol: "9.RL.1.C",
          stem: "Which statement best describes how Teo changes during the scene?",
          choices: [
            { letter: "A", text: "He moves from cheerful to angry with his sister." },
            { letter: "B", text: "He moves from curious to bored by the hunt." },
            { letter: "C", text: "He moves from discouraged to eager to lead." },
            { letter: "D", text: "He moves from confident to unsure of himself." }
          ],
          correct: "C"
        },
        {
          id: "setting",
          sol: "9.RL.3.A",
          stem: "How does the empty bandstand in the setting help Teo solve clue nine?",
          choices: [
            { letter: "A", text: "Its five steps give him the number he needs." },
            { letter: "B", text: "Its height lets him see the next clue nearby." },
            { letter: "C", text: "Its silence matches the clue's sleeping music." },
            { letter: "D", text: "Its gray paint reminds him of an earlier clue." }
          ],
          correct: "C"
        },
        {
          id: "shoelace",
          sol: "9.RL.3.B",
          stem: "The detail in sentence 2 that Teo is \"retying a shoelace that does not need retying\" mainly reveals that he is —",
          choices: [
            { letter: "A", text: "restless and avoiding the puzzle" },
            { letter: "B", text: "careful and ready to run the course" },
            { letter: "C", text: "injured and unable to keep walking" },
            { letter: "D", text: "proud of his brand-new running shoes" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of Marisol's final lines (sentences 36 and 37) is best described as —",
          choices: [
            { letter: "A", text: "sarcastic and annoyed" },
            { letter: "B", text: "quietly delighted" },
            { letter: "C", text: "nervous and doubtful" },
            { letter: "D", text: "formal and distant" }
          ],
          correct: "B"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "Based on sentence 7, the word ambiguous in sentence 6 most nearly means —",
          choices: [
            { letter: "A", text: "too long to read" },
            { letter: "B", text: "printed too small" },
            { letter: "C", text: "easy to solve fast" },
            { letter: "D", text: "open to several meanings" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 6 · Informational · fossils · level 1 ───────────── */
    {
      id: "g9-ri-c49-written-stone",
      family: "G9",
      title: "Written in Stone",
      kind: "Informational · 9.RI",
      blurb: "Why so few living things become fossils, and what the ones that do can tell us.",
      level: 1,
      passage:
        "<p>" + N(1) + "Imagine a forest full of animals: deer, squirrels, beetles, and birds. " +
        N(2) + "Of all the creatures living there today, very few will ever become fossils. " +
        N(3) + "Most will decay, be eaten, or be scattered by wind and water within a few years. " +
        N(4) + "Fossilization is not the normal fate of a living thing; it is a rare event that requires the right conditions at exactly the right time.</p>" +
        "<p><strong>The Recipe for a Fossil</strong> " + N(5) + "The first requirement is quick burial. " +
        N(6) + "An animal that dies on open ground is usually picked apart by scavengers, but one that sinks into the mud of a lake bottom or is buried by a sudden flood is protected from scavengers and from oxygen, which bacteria need to break down tissue. " +
        N(7) + "The second requirement is hard parts. " +
        N(8) + "Bones, teeth, and shells survive far longer than skin or muscle, which is why the fossil record holds many more clams than jellyfish. " +
        N(9) + "Time completes the process. " +
        N(10) + "Over thousands of years, layers of sediment pile up and press down, slowly hardening into rock.</p>" +
        "<p><strong>Stone Copies</strong> " + N(11) + "As groundwater seeps through buried bone, it carries dissolved minerals such as silica and calcite. " +
        N(12) + "These minerals fill tiny spaces in the bone and sometimes replace the original material entirely, a process called permineralization. " +
        N(13) + "The result can be a stone copy so detailed that scientists are able to see growth rings in a fossil bone, much like the rings in a tree stump. " +
        N(14) + "In other cases, the original shell dissolves completely, leaving an empty hollow in the rock called a mold. " +
        N(15) + "If minerals later fill that hollow, they form a cast, a natural sculpture of the vanished shell.</p>" +
        "<p><strong>Traces of Behavior</strong> " + N(16) + "Not every fossil is part of an organism. " +
        N(17) + "Footprints, burrows, nests, and even tooth marks on bone are called trace fossils. " +
        N(18) + "These can reveal things a skeleton cannot, such as how fast an animal walked or whether it traveled in groups. " +
        N(19) + "A set of footprint trails running side by side, for example, suggests that several animals moved together.</p>" +
        "<p><strong>Reading the Layers</strong> " + N(20) + "Because sediment is laid down in layers, the deepest layers in an undisturbed rock face are usually the oldest. " +
        N(21) + "This principle allows paleontologists, the scientists who study ancient life, to tell whether one fossil is older than another. " +
        N(22) + "To assign an age in years, researchers often test thin layers of volcanic ash above and below a fossil, since certain elements in ash change at a steady, measurable rate.</p>" +
        "<p>" + N(23) + "Because the process is so selective, the fossil record is incomplete, like a book with most of its pages torn out. " +
        N(24) + "In my view, that is exactly what makes each new discovery so exciting. " +
        N(25) + "Every fossil is a page that survived against the odds.</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of \"Written in Stone\"?",
          choices: [
            { letter: "A", text: "Fossils form only in rare conditions and preserve many kinds of clues." },
            { letter: "B", text: "Most fossils are found in forests where many animals live today." },
            { letter: "C", text: "Volcanic ash is the most important tool for finding new fossils." },
            { letter: "D", text: "Trace fossils are more valuable to science than bones or shells." }
          ],
          correct: "A"
        },
        {
          id: "clams",
          sol: "9.RI.1.B",
          stem: "According to the passage, why does the fossil record hold many more clams than jellyfish?",
          choices: [
            { letter: "A", text: "Clams lived in far greater numbers than jellyfish did." },
            { letter: "B", text: "Jellyfish lived only in water too deep to study." },
            { letter: "C", text: "Clams have hard shells that last longer than soft tissue." },
            { letter: "D", text: "Scientists have spent less time searching for jellyfish." }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which sentence from \"Written in Stone\" states the author's opinion rather than a fact?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 17" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 24" }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "Which choice best describes how the headed sections of \"Written in Stone\" are arranged?",
          choices: [
            { letter: "A", text: "From the oldest fossils ever found to the newest ones" },
            { letter: "B", text: "From what fossils need, to fossil types, to dating them" },
            { letter: "C", text: "From a problem scientists face to several solutions" },
            { letter: "D", text: "From one scientist's career to another scientist's career" }
          ],
          correct: "B"
        },
        {
          id: "rings",
          sol: "9.RI.2.B",
          stem: "The comparison to the rings in a tree stump in sentence 13 helps the reader understand —",
          choices: [
            { letter: "A", text: "why fossil bones are often found near ancient forests" },
            { letter: "B", text: "how much detail a permineralized fossil can keep" },
            { letter: "C", text: "how scientists measure the age of volcanic ash" },
            { letter: "D", text: "why molds and casts look so different from bones" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the claim in sentence 4 that fossilization needs the right conditions?",
          choices: [
            { letter: "A", text: "Sentence 1, which lists animals in a modern forest" },
            { letter: "B", text: "Sentence 16, which says not every fossil is a body part" },
            { letter: "C", text: "Sentence 21, which defines the word paleontologist" },
            { letter: "D", text: "Sentence 6, which explains how burial shields a body" }
          ],
          correct: "D"
        },
        {
          id: "selective",
          sol: "9.RV.1.C",
          stem: "In sentence 23, the word selective most nearly means —",
          choices: [
            { letter: "A", text: "keeping only a few out of many" },
            { letter: "B", text: "happening very quickly" },
            { letter: "C", text: "easy for anyone to observe" },
            { letter: "D", text: "caused mainly by people" }
          ],
          correct: "A"
        },
        {
          id: "root",
          sol: "9.RV.1.B",
          stem: "The word paleontologists in sentence 21 begins with the Greek root paleo-. Based on the passage, this root most likely means —",
          choices: [
            { letter: "A", text: "rock" },
            { letter: "B", text: "animal" },
            { letter: "C", text: "ancient" },
            { letter: "D", text: "buried" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 7 · Informational · sign language · level 3 ───────────── */
    {
      id: "g9-ri-c49-more-than-hands",
      family: "G9",
      title: "More Than Hands",
      kind: "Informational · 9.RI",
      blurb: "Three common myths about sign languages, and what linguists have found instead.",
      level: 3,
      passage:
        "<p>" + N(1) + "Ask a room of hearing people what sign language is, and many will describe some version of the same picture: a universal set of gestures, an elaborate kind of pantomime, or English spelled out on the fingers. " +
        N(2) + "Each of these ideas is understandable, and each is wrong. " +
        N(3) + "Linguists, the scientists who study how languages work, have spent decades showing that sign languages are complete, natural languages with their own grammar, history, and regional accents.</p>" +
        "<p><strong>Myth: One Language for Everyone</strong> " + N(4) + "There is no single sign language shared by deaf people around the world. " +
        N(5) + "Researchers estimate that well over a hundred distinct sign languages are in use today. " +
        N(6) + "They often do not follow the borders of spoken languages, either. " +
        N(7) + "American Sign Language and British Sign Language developed separately, so a signer from Ohio and a signer from Manchester may struggle to understand each other, even though both of their countries speak English. " +
        N(8) + "History matters more than geography: ASL shares much of its early vocabulary with French Sign Language, a result of early ties between deaf schools in the two countries.</p>" +
        "<p><strong>Myth: Just Gestures</strong> " + N(9) + "Sign languages are also not pantomime. " +
        N(10) + "Most signs do not look like what they mean, and a person who has never studied a sign language cannot guess the meaning of most signs. " +
        N(11) + "Instead, each sign is built from a small set of parts: the shape of the hand, its location, its movement, and the direction the palm faces. " +
        N(12) + "Changing just one part can produce an entirely different word, in the same way that changing one sound turns \"bat\" into \"pat.\" " +
        N(13) + "Faces matter too. " +
        N(14) + "In ASL, raised eyebrows can turn a statement into a yes-or-no question, so an expression is not decoration laid on top of a sentence; it is part of the grammar.</p>" +
        "<p><strong>Myth: English on the Hands</strong> " + N(15) + "Finally, ASL is not English spelled letter by letter. " +
        N(16) + "Fingerspelling exists, but signers use it mainly for names and borrowed words. " +
        N(17) + "ASL has its own word order and uses the space in front of the signer as a kind of map: a signer can place a person on the left and a place on the right, then simply point back to those spots instead of repeating the names. " +
        N(18) + "A complicated story can unfold in that space with remarkable economy.</p>" +
        "<p><strong>Born, Not Invented</strong> " + N(19) + "Perhaps the strongest evidence that sign languages are natural languages is the way they begin. " +
        N(20) + "Deaf infants raised by signing parents babble with their hands, repeating rhythmic movements much as hearing babies repeat syllables, and they reach early language milestones on about the same schedule. " +
        N(21) + "Researchers have also documented a case in which deaf children brought together at a new school created a sign language of their own, which grew more complex with each younger group of students. " +
        N(22) + "No committee designed it; it emerged, the way spoken languages always have. " +
        N(23) + "To call such a language \"just gestures\" is a bit like calling a symphony \"just noise.\" " +
        N(24) + "The comparison may sound dramatic, but it captures how much is missed when a language is judged only from the outside.</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of \"More Than Hands\"?",
          choices: [
            { letter: "A", text: "Most deaf people around the world use the same set of signs." },
            { letter: "B", text: "Fingerspelling is the most important part of any sign language." },
            { letter: "C", text: "Sign languages are full natural languages, despite common myths." },
            { letter: "D", text: "Hearing people should learn signs before they learn to read." }
          ],
          correct: "C"
        },
        {
          id: "ohio",
          sol: "9.RI.1.B",
          stem: "According to the passage, why might a signer from Ohio and a signer from Manchester struggle to understand each other?",
          choices: [
            { letter: "A", text: "ASL and British Sign Language developed separately." },
            { letter: "B", text: "One of them fingerspells far more than the other does." },
            { letter: "C", text: "British signers do not use facial expressions in grammar." },
            { letter: "D", text: "ASL borrowed all of its signs from spoken English words." }
          ],
          correct: "A"
        },
        {
          id: "interp",
          sol: "9.RI.1.C",
          stem: "Which sentence from \"More Than Hands\" offers the author's interpretation rather than reported information?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 23" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "B"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "How is the body of \"More Than Hands\" mainly organized?",
          choices: [
            { letter: "A", text: "As a timeline of how one sign language spread" },
            { letter: "B", text: "As a comparison of two schools for deaf students" },
            { letter: "C", text: "As a set of steps for learning to fingerspell" },
            { letter: "D", text: "As a series of myths, each followed by a correction" }
          ],
          correct: "D"
        },
        {
          id: "batpat",
          sol: "9.RI.2.B",
          stem: "The author mentions \"bat\" and \"pat\" in sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "connect a feature of signs to something hearing readers know" },
            { letter: "B", text: "show that ASL signs were first based on English words" },
            { letter: "C", text: "suggest that sign languages are harder to learn than speech" },
            { letter: "D", text: "give an example of a word that is often fingerspelled" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence gives the strongest evidence that sign languages arise naturally rather than being designed?",
          choices: [
            { letter: "A", text: "Sentence 5, about how many sign languages exist" },
            { letter: "B", text: "Sentence 10, about guessing what signs mean" },
            { letter: "C", text: "Sentence 16, about when signers fingerspell" },
            { letter: "D", text: "Sentence 21, about children who formed a language" }
          ],
          correct: "D"
        },
        {
          id: "economy",
          sol: "9.RV.1.E",
          stem: "The author could have written \"shortness\" instead of economy in sentence 18. Compared with shortness, economy suggests that storytelling in signing space is —",
          choices: [
            { letter: "A", text: "missing important details" },
            { letter: "B", text: "efficient and skillfully done" },
            { letter: "C", text: "expensive to learn well" },
            { letter: "D", text: "rushed and hard to follow" }
          ],
          correct: "B"
        },
        {
          id: "symphony",
          sol: "9.RV.1.F",
          stem: "The comparison in sentence 23 suggests that people who call sign languages \"just gestures\" —",
          choices: [
            { letter: "A", text: "prefer music to any kind of spoken language" },
            { letter: "B", text: "are correct that signing is mostly about sound" },
            { letter: "C", text: "overlook the structure and richness that are there" },
            { letter: "D", text: "have studied sign languages more than linguists have" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 8 · Functional text · zoo keeper · level 1 ───────────── */
    {
      id: "g9-ri-c49-junior-keeper",
      family: "G9",
      title: "Junior Keeper Guide",
      kind: "Functional text · 9.RI",
      blurb: "A volunteer guide for the Small Mammal House: shifts, feeding rules, safety and reporting.",
      level: 1,
      passage:
        "<p><strong>Riverbend Zoo Junior Keeper Program: Small Mammal House Daily Guide</strong></p>" +
        "<p>" + N(1) + "Welcome to the Junior Keeper Program at Riverbend Zoo. " +
        N(2) + "This guide explains what you will do during each four-hour shift in the Small Mammal House, which is home to meerkats, fennec foxes, a pair of red pandas, and a colony of naked mole-rats. " +
        N(3) + "Keep it in your volunteer folder and review it before every shift.</p>" +
        "<p><strong>Before You Start</strong> " + N(4) + "Sign in at the keeper office no later than 7:45 a.m. and collect your radio and key card. " +
        N(5) + "Wear closed-toe shoes, long pants, and your green volunteer shirt; loose jewelry is not allowed because animals may grab it. " +
        N(6) + "Wash your hands at the office sink before entering any work area.</p>" +
        "<p><strong>Morning Routine</strong> " + N(7) + "Your supervising keeper will assign you to two exhibits each day. " +
        N(8) + "First, check each animal in your exhibits and record whether it is active, eating, and moving normally. " +
        N(9) + "Next, remove old food and waste from the indoor holding areas while the animals are still outdoors. " +
        N(10) + "Then rinse and refill water dishes, and spread fresh bedding. " +
        N(11) + "Finish by helping your keeper prepare diets in the kitchen.</p>" +
        "<p><strong>Feeding Rules</strong> " + N(12) + "Every animal has a diet sheet posted on the kitchen door. " +
        N(13) + "Measure each portion on the scale; do not estimate by eye. " +
        N(14) + "Even a small amount of extra food each day can cause weight gain, which leads to joint and heart problems in small animals. " +
        N(15) + "Never feed an animal anything that is not on its diet sheet, including treats from home. " +
        N(16) + "Volunteers may not hand-feed any animal unless a keeper is standing beside them.</p>" +
        "<p><strong>Safety</strong> " + N(17) + "Volunteers do not enter any enclosure while animals are inside it. " +
        N(18) + "Before you open a door, confirm with your keeper by radio that the animals have been shifted to another space and the connecting gate is locked. " +
        N(19) + "Red pandas may look gentle, but they have sharp claws and can bite when startled. " +
        N(20) + "If an animal ever gets out of its space, stay calm, do not chase it, and radio \"Code Green\" with your location.</p>" +
        "<p><strong>Reporting Concerns</strong> " + N(21) + "You are an extra set of eyes for the keepers. " +
        N(22) + "If you notice an animal limping, refusing food, breathing heavily, or hiding much more than usual, tell your keeper right away, even if you are unsure. " +
        N(23) + "Small changes are often the first signs of illness, and an early report can make treatment much easier. " +
        N(24) + "Write what you saw, the time, and the animal's name in the daily log before you leave. " +
        N(25) + "Honestly, the best part of this job is getting to know each animal's personality, so enjoy it!</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.A",
          stem: "The main purpose of the Junior Keeper Guide is to —",
          choices: [
            { letter: "A", text: "persuade students to sign up for the volunteer program" },
            { letter: "B", text: "describe the history of the Small Mammal House" },
            { letter: "C", text: "explain volunteers' daily duties and the rules they follow" },
            { letter: "D", text: "compare the diets of meerkats, foxes, and red pandas" }
          ],
          correct: "C"
        },
        {
          id: "door",
          sol: "9.RI.1.B",
          stem: "According to the guide, what must a volunteer do before opening an enclosure door?",
          choices: [
            { letter: "A", text: "Confirm by radio that the animals are moved and the gate is locked." },
            { letter: "B", text: "Check the diet sheet on the kitchen door for that animal." },
            { letter: "C", text: "Record in the daily log which animals are active that day." },
            { letter: "D", text: "Wait until the supervising keeper unlocks it in person." }
          ],
          correct: "A"
        },
        {
          id: "jewelry",
          sol: "9.RI.1.B",
          stem: "According to sentence 5 of the guide, why is loose jewelry not allowed?",
          choices: [
            { letter: "A", text: "It can set off the alarms on the key card doors." },
            { letter: "B", text: "It does not match the green volunteer shirt." },
            { letter: "C", text: "It can scratch the glass of the exhibit windows." },
            { letter: "D", text: "It is something animals might grab from a volunteer." }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which sentence from the Junior Keeper Guide expresses an opinion rather than a rule or fact?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 25" },
            { letter: "C", text: "Sentence 19" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "B"
        },
        {
          id: "routine",
          sol: "9.RI.2.A",
          stem: "The Morning Routine section (sentences 7–11) is organized mainly —",
          choices: [
            { letter: "A", text: "in time order, using words like first, next, and then" },
            { letter: "B", text: "by comparing the needs of two different animals" },
            { letter: "C", text: "as a problem followed by several possible solutions" },
            { letter: "D", text: "from the most important task to the least important" }
          ],
          correct: "A"
        },
        {
          id: "reason",
          sol: "9.RI.2.B",
          stem: "The writer includes sentence 14 in the Feeding Rules section mainly to —",
          choices: [
            { letter: "A", text: "warn volunteers that some foods are poisonous" },
            { letter: "B", text: "describe how keepers weigh the animals each week" },
            { letter: "C", text: "explain the reason behind the rule in sentence 13" },
            { letter: "D", text: "encourage volunteers to bring healthy treats" }
          ],
          correct: "C"
        },
        {
          id: "eyes",
          sol: "9.RI.3.A",
          stem: "Which TWO sentences most directly support the statement in sentence 21 that volunteers are \"an extra set of eyes\" for keepers? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "shifted",
          sol: "9.RV.1.C",
          stem: "In sentence 18, the word shifted most nearly means —",
          choices: [
            { letter: "A", text: "fed early" },
            { letter: "B", text: "moved elsewhere" },
            { letter: "C", text: "put to sleep" },
            { letter: "D", text: "counted again" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 9 · Vocabulary · zoo keeper · level 2 ───────────── */
    {
      id: "g9-rv-c49-batu-pipe",
      family: "G9",
      title: "A Pipe Full of Raisins",
      kind: "Vocabulary · 9.RV",
      blurb: "A bored orangutan, a new apprentice, and a homemade puzzle feeder.",
      level: 2,
      passage:
        "<p>" + N(1) + "For three weeks, Batu the orangutan had been <strong>lethargic</strong>, spending most of each day lying on the same platform with a burlap sack draped over his head. " +
        N(2) + "The veterinarian found nothing wrong with his health. " +
        N(3) + "\"He's not sick,\" Keeper Ngozi Eze told her apprentice, Felipe Ramos, on his first morning. " +
        N(4) + "\"He's bored, and boredom in an animal this smart is a slow leak in a tire. " +
        N(5) + "You don't notice it until you're flat.\"</p>" +
        "<p>" + N(6) + "Ngozi explained that the zoo's job was not only to feed and shelter the animals but also to provide <strong>enrichment</strong>: puzzles, new smells, changing routines, anything that gave an animal a reason to explore and solve problems as it would in the wild. " +
        N(7) + "For an orangutan, whose wild relatives spend hours each day searching the forest for ripe fruit, a breakfast handed over in a bucket was a mystery story that began by revealing the answer.</p>" +
        "<p>" + N(8) + "Together they built a feeder from a length of plastic pipe, drilling holes just wide enough for a finger and packing it with raisins, sunflower seeds, and chopped mango. " +
        N(9) + "Felipe wanted to set it right beside Batu's platform. " +
        N(10) + "Ngozi shook her head. " +
        N(11) + "\"Orangutans are <strong>reticent</strong> with new things,\" she said. " +
        N(12) + "\"If he sees us fussing over it, he'll ignore it out of principle. " +
        N(13) + "We set it down, we walk away, and we let curiosity do the rest. " +
        N(14) + "You can't <strong>coax</strong> him; you can only invite him.\"</p>" +
        "<p>" + N(15) + "For the rest of the morning, Felipe stayed <strong>vigilant</strong> at the window of the keeper area, notebook open, recording every glance Batu sent toward the pipe. " +
        N(16) + "There were not many. " +
        N(17) + "At 11:40, Batu lifted the sack from his head. " +
        N(18) + "At 11:52, he climbed down. " +
        N(19) + "He circled the pipe once, sniffed one end, and then, with fingers more <strong>dexterous</strong> than Felipe's own, began picking raisins out of the holes one at a time, turning the pipe to find the openings he had missed.</p>" +
        "<p>" + N(20) + "By the end of the week, Batu had figured out that he could unscrew the cap and dump the whole feeder at once. " +
        N(21) + "Felipe was disappointed, but Ngozi laughed and said that was the best possible news. " +
        N(22) + "\"He solved it,\" she said. " +
        N(23) + "\"Now we have to build something harder.\" " +
        N(24) + "That afternoon Felipe began sketching a feeder with three caps, each one a different size, while Batu watched from his platform, no longer hidden under the sack.</p>",
      claims: [
        {
          id: "lethargic",
          sol: "9.RV.1.C",
          stem: "In sentence 1, the word lethargic most nearly means —",
          choices: [
            { letter: "A", text: "hungry and restless" },
            { letter: "B", text: "sluggish and inactive" },
            { letter: "C", text: "angry and dangerous" },
            { letter: "D", text: "sick with a fever" }
          ],
          correct: "B"
        },
        {
          id: "enrich-clue",
          sol: "9.RV.1.C",
          stem: "Which words from sentence 6 best help the reader understand the meaning of enrichment?",
          choices: [
            { letter: "A", text: "the zoo's job was not only to feed" },
            { letter: "B", text: "Ngozi explained that" },
            { letter: "C", text: "as it would in the wild" },
            { letter: "D", text: "a reason to explore and solve problems" }
          ],
          correct: "D"
        },
        {
          id: "dexter",
          sol: "9.RV.1.B",
          stem: "The word dexterous in sentence 19 comes from the Latin dexter, meaning \"right hand.\" Based on this root and the sentence, dexterous fingers are —",
          choices: [
            { letter: "A", text: "skillful and quick" },
            { letter: "B", text: "long and thin" },
            { letter: "C", text: "strong but clumsy" },
            { letter: "D", text: "dirty from digging" }
          ],
          correct: "A"
        },
        {
          id: "suffix",
          sol: "9.RV.1.B",
          stem: "The word enrichment is built from en- + rich + -ment. The suffix -ment shows that enrichment is —",
          choices: [
            { letter: "A", text: "a verb that tells what Ngozi does" },
            { letter: "B", text: "an adjective that describes Batu" },
            { letter: "C", text: "a noun that names an action or its result" },
            { letter: "D", text: "an adverb that tells how the pipe works" }
          ],
          correct: "C"
        },
        {
          id: "vigilant",
          sol: "9.RV.1.E",
          stem: "The author could have written careful instead of vigilant in sentence 15. Compared with careful, vigilant adds a sense of —",
          choices: [
            { letter: "A", text: "fear that Batu might escape" },
            { letter: "B", text: "boredom from waiting so long" },
            { letter: "C", text: "steady watching for any change" },
            { letter: "D", text: "pride in a job finished well" }
          ],
          correct: "C"
        },
        {
          id: "coax",
          sol: "9.RV.1.E",
          stem: "In sentence 14, Ngozi contrasts coax with invite. This contrast suggests that to coax is to —",
          choices: [
            { letter: "A", text: "push gently and repeatedly until someone gives in" },
            { letter: "B", text: "leave a choice entirely up to someone else" },
            { letter: "C", text: "build a feeder that is difficult to open" },
            { letter: "D", text: "watch quietly from a hidden place" }
          ],
          correct: "A"
        },
        {
          id: "leak",
          sol: "9.RV.1.F",
          stem: "In sentences 4 and 5, Ngozi compares boredom to \"a slow leak in a tire\" to show that boredom —",
          choices: [
            { letter: "A", text: "can be fixed with simple tools in minutes" },
            { letter: "B", text: "happens mostly when animals are moved" },
            { letter: "C", text: "is more common in the summer months" },
            { letter: "D", text: "does harm gradually until it becomes serious" }
          ],
          correct: "D"
        },
        {
          id: "mystery",
          sol: "9.RV.1.F",
          stem: "Sentence 7 calls a breakfast in a bucket \"a mystery story that began by revealing the answer.\" This comparison means the bucket breakfast —",
          choices: [
            { letter: "A", text: "contained food Batu had never tasted before" },
            { letter: "B", text: "gave Batu nothing to figure out or search for" },
            { letter: "C", text: "was hidden in a place that was hard to find" },
            { letter: "D", text: "arrived later than Batu usually expected it" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 10 · Vocabulary · fossils · level 3 ───────────── */
    {
      id: "g9-rv-c49-jaw-block",
      family: "G9",
      title: "The Rock Will Tell Us",
      kind: "Vocabulary · 9.RV",
      blurb: "Eleven months, one block of sandstone, and a fossil preparator who refuses to guess.",
      level: 3,
      passage:
        "<p>" + N(1) + "The block of sandstone arrived at the museum's fossil lab wrapped in a plaster jacket, the way a broken arm arrives at a hospital, and for eleven months it sat on Ines Valdivia's workbench while she removed the rock grain by grain. " +
        N(2) + "Fossil preparation is <strong>painstaking</strong> work. " +
        N(3) + "Ines used an air scribe, a pen-sized jackhammer that buzzed like a trapped wasp, along with dental picks, soft brushes, and a microscope that turned each square centimeter into a landscape of hills and valleys. " +
        N(4) + "On a good day, she uncovered an area about the size of a postage stamp.</p>" +
        "<p>" + N(5) + "The bone itself was <strong>brittle</strong>, so fragile that a careless touch could crack it, and so she painted each newly exposed surface with a thin glue that soaked in and hardened. " +
        N(6) + "Visitors who watched her through the lab's glass wall sometimes tapped on it and mimed hurrying up. " +
        N(7) + "Ines would smile and keep working. " +
        N(8) + "She had learned long ago that the rock did not care about anyone's schedule, and neither, in the end, did the animal inside it, which had been waiting for roughly seventy million years.</p>" +
        "<p>" + N(9) + "For most of those months, the shape in the block was <strong>obscured</strong> by a crust of iron-stained rock that turned every edge into a guess. " +
        N(10) + "The field crew who had found the block thought it held part of a duck-billed dinosaur's leg. " +
        N(11) + "The museum's curator suspected a section of tail. " +
        N(12) + "Both ideas were <strong>conjecture</strong>, reasonable guesses built from the size of the block and the bones found nearby, and Ines refused to choose between them. " +
        N(13) + "\"The rock will tell us,\" she said whenever anyone asked, which was often.</p>" +
        "<p>" + N(14) + "In the ninth month, the air scribe broke through the crust and exposed a row of small, ridged surfaces packed side by side like kernels on a cob of corn. " +
        N(15) + "Ines stopped, set down the tool, and called the curator. " +
        N(16) + "They were teeth, hundreds of them, arranged in the tightly stacked rows that duck-billed dinosaurs used to grind tough plants. " +
        N(17) + "The block held not a leg or a tail but part of a jaw. " +
        N(18) + "The <strong>revelation</strong> rearranged the whole project; the curator began planning a new exhibit, and the field crew made plans to return to the site.</p>" +
        "<p>" + N(19) + "Ines spent the last two months on the teeth alone. " +
        N(20) + "She was <strong>tenacious</strong> in a quiet way, returning each morning to the same patch of stone with the same steady hand, never rushing and never quitting. " +
        N(21) + "When the jaw finally went on display, a small card beside it listed her name in letters smaller than the dinosaur's. " +
        N(22) + "She did not mind. " +
        N(23) + "The jaw, she liked to say, had done the hard part: it had lasted.</p>",
      claims: [
        {
          id: "brittle",
          sol: "9.RV.1.C",
          stem: "In sentence 5, the word brittle most nearly means —",
          choices: [
            { letter: "A", text: "heavy and dense" },
            { letter: "B", text: "dark in color" },
            { letter: "C", text: "easily broken" },
            { letter: "D", text: "rough to touch" }
          ],
          correct: "C"
        },
        {
          id: "obscured",
          sol: "9.RV.1.C",
          stem: "Which meaning of obscured best fits sentence 9?",
          choices: [
            { letter: "A", text: "hidden from clear view" },
            { letter: "B", text: "damaged beyond repair" },
            { letter: "C", text: "stained a reddish color" },
            { letter: "D", text: "split into small pieces" }
          ],
          correct: "A"
        },
        {
          id: "painstaking",
          sol: "9.RV.1.B",
          stem: "The compound word painstaking in sentence 2 comes from the phrase \"taking pains.\" Based on its parts and the paragraph, painstaking work is work that —",
          choices: [
            { letter: "A", text: "causes injuries to the worker's hands" },
            { letter: "B", text: "is finished quickly with powerful tools" },
            { letter: "C", text: "is done mainly to impress visitors" },
            { letter: "D", text: "requires great care and steady effort" }
          ],
          correct: "D"
        },
        {
          id: "conjecture",
          sol: "9.RV.1.B",
          stem: "Conjecture contains the Latin root ject, \"to throw,\" also found in project and eject. Which meaning of conjecture fits both this root and sentence 12?",
          choices: [
            { letter: "A", text: "a fact proven by careful testing" },
            { letter: "B", text: "an idea put forward as a possibility" },
            { letter: "C", text: "a rule that scientists must follow" },
            { letter: "D", text: "a tool for removing hard rock" }
          ],
          correct: "B"
        },
        {
          id: "tenacious",
          sol: "9.RV.1.E",
          stem: "The author could have called Ines stubborn instead of tenacious in sentence 20. Compared with stubborn, tenacious has a connotation that is more —",
          choices: [
            { letter: "A", text: "critical, suggesting she ignores advice" },
            { letter: "B", text: "admiring, suggesting worthy persistence" },
            { letter: "C", text: "playful, suggesting she enjoys teasing" },
            { letter: "D", text: "worried, suggesting she fears failure" }
          ],
          correct: "B"
        },
        {
          id: "revelation",
          sol: "9.RV.1.E",
          stem: "Compared with the word finding, the word revelation in sentence 18 suggests that the discovery of the teeth was —",
          choices: [
            { letter: "A", text: "expected by everyone from the start" },
            { letter: "B", text: "a small detail that changed little" },
            { letter: "C", text: "a mistake the curator had to correct" },
            { letter: "D", text: "a sudden uncovering that changed everything" }
          ],
          correct: "D"
        },
        {
          id: "arm",
          sol: "9.RV.1.F",
          stem: "In sentence 1, the block arrives in a plaster jacket \"the way a broken arm arrives at a hospital.\" This comparison suggests that the fossil —",
          choices: [
            { letter: "A", text: "is fragile and needs protective care" },
            { letter: "B", text: "was damaged by careless field workers" },
            { letter: "C", text: "will be studied by medical doctors" },
            { letter: "D", text: "is much smaller than people expected" }
          ],
          correct: "A"
        },
        {
          id: "lasted",
          sol: "9.RV.1.F",
          stem: "Sentence 23 says the jaw \"had done the hard part: it had lasted.\" This figurative statement suggests that Ines —",
          choices: [
            { letter: "A", text: "thinks the jaw was easy to prepare" },
            { letter: "B", text: "is upset that her name was printed small" },
            { letter: "C", text: "sees surviving the ages as the true feat" },
            { letter: "D", text: "plans to stop preparing fossils soon" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 11 · Paired texts · puzzle hunt · level 1 ───────────── */
    {
      id: "g9-dsr-c49-riddle-run",
      family: "G9",
      title: "The Riddle Run",
      kind: "Paired texts · 9.DSR",
      blurb: "A library's puzzle hunt announcement, and a participant's blog post about how the day really went.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Maple Hollow Riddle Run: Saturday, April 18</strong></p>" +
        "<p>" + N(1) + "The Maple Hollow Public Library invites teams of two to four people to its third annual Riddle Run, a puzzle hunt that winds through the downtown business district. " +
        N(2) + "Teams will receive a packet of twelve riddles at 10:00 a.m. on the library steps. " +
        N(3) + "Each riddle points to a location downtown, such as a shop window, a mural, or a historic marker, where a hidden code word is posted. " +
        N(4) + "Teams that collect all twelve code words and return to the library by 2:00 p.m. will be entered in a prize drawing.</p>" +
        "<p>" + N(5) + "The Riddle Run is designed for all ages and abilities. " +
        N(6) + "Every location is within six blocks of the library, and all clues can be reached on sidewalks without stairs. " +
        N(7) + "No special knowledge is needed; the riddles reward careful reading and teamwork, not trivia.</p>" +
        "<p>" + N(8) + "Please note these rules. " +
        N(9) + "Teams must stay together at all times. " +
        N(10) + "Phones may be used for safety and photos, but not to search the internet for answers. " +
        N(11) + "Do not enter a business to find a clue unless the riddle tells you to, since many owners have volunteered their windows, not their counters. " +
        N(12) + "Registration is free but required, and spots are limited to forty teams. " +
        N(13) + "Sign up at the circulation desk or on the library website by April 10, and bring a pencil, comfortable shoes, and a sense of humor on the day of the hunt.</p>" +
        "<p><strong>Text 2 — Twelve Riddles and One Robot Parking Meter, a blog post by Tunde, age 15</strong></p>" +
        "<p>" + N(14) + "My cousins and I signed up for the Riddle Run mostly because the flyer promised the riddles rewarded \"teamwork, not trivia,\" and none of us is good at trivia. " +
        N(15) + "That part turned out to be true. " +
        N(16) + "The best riddle of the day, number seven, sent us to a parking meter painted to look like a robot, and we found it only because my youngest cousin, Adaeze, noticed that the first letters of the riddle's lines spelled LOOK DOWN.</p>" +
        "<p>" + N(17) + "Other parts surprised us. " +
        N(18) + "Riddle nine led to the old bank building, and its code word was posted on a second-floor balcony that you could reach only by an outside staircase. " +
        N(19) + "My aunt, who walks with a cane, waited at the bottom while the rest of us ran up. " +
        N(20) + "It worked out, but it did not match what the flyer had said. " +
        N(21) + "We also learned that staying together is harder than it sounds when one team member really, really wants a pretzel.</p>" +
        "<p>" + N(22) + "We made it back to the library at 1:52 p.m. with all twelve code words, sweaty and laughing. " +
        N(23) + "We did not win the drawing. " +
        N(24) + "Still, I would sign up again next year, and I would tell the organizers two things: keep the riddles exactly as clever as they were, and check every location for stairs.</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          stem: "Which idea about the Riddle Run do both texts support?",
          choices: [
            { letter: "A", text: "The prize drawing was the main reason teams joined." },
            { letter: "B", text: "The riddles depended on close reading, not trivia." },
            { letter: "C", text: "Most teams finished long before the 2:00 p.m. deadline." },
            { letter: "D", text: "Phones were needed to solve several of the riddles." }
          ],
          correct: "B"
        },
        {
          id: "challenge",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 1 does Tunde's experience in Text 2 most directly call into question?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "How do the purposes of the Riddle Run texts mainly differ?",
          choices: [
            { letter: "A", text: "Text 1 explains plans ahead of time; Text 2 reports what happened." },
            { letter: "B", text: "Text 1 complains about the event; Text 2 defends the organizers." },
            { letter: "C", text: "Text 1 tells a personal story; Text 2 lists rules for future teams." },
            { letter: "D", text: "Text 1 describes a past hunt; Text 2 invites readers to a new one." }
          ],
          correct: "A"
        },
        {
          id: "bank",
          sol: "9.DSR.E",
          stem: "Which inference about riddle nine is best supported by reading both texts together?",
          choices: [
            { letter: "A", text: "Tunde's team misread the riddle and went to the wrong place." },
            { letter: "B", text: "The bank building was more than six blocks from the library." },
            { letter: "C", text: "The organizers may not have checked that spot for stairs." },
            { letter: "D", text: "The bank's owners asked teams to come inside the building." }
          ],
          correct: "C"
        },
        {
          id: "drawing",
          sol: "9.DSR.E",
          stem: "Using details from both texts, the reader can tell that Tunde's team was entered in the prize drawing because it —",
          choices: [
            { letter: "A", text: "gathered all twelve code words and returned before 2:00 p.m." },
            { letter: "B", text: "solved riddle seven faster than any of the other teams did" },
            { letter: "C", text: "signed up at the circulation desk before the April 10 deadline" },
            { letter: "D", text: "included a team member of every age group in the family" }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          stem: "Select TWO details from Text 2 that together show how the event both kept and broke the promises made in Text 1.",
          choices: [
            { letter: "A", text: "The team did not win the prize drawing." },
            { letter: "B", text: "Adaeze solved riddle seven by reading closely." },
            { letter: "C", text: "A code word could be reached only by stairs." },
            { letter: "D", text: "One cousin badly wanted to stop for a pretzel." }
          ],
          correct: ["B", "C"]
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence from Text 2 best supports the idea that Tunde valued the Riddle Run even though his team did not win?",
          choices: [
            { letter: "A", text: "Sentence 17" },
            { letter: "B", text: "Sentence 21" },
            { letter: "C", text: "Sentence 23" },
            { letter: "D", text: "Sentence 24" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          stem: "Text 1 is written mainly to —",
          choices: [
            { letter: "A", text: "describe the history of downtown Maple Hollow" },
            { letter: "B", text: "inform readers about the event and how to join" },
            { letter: "C", text: "thank the business owners who loaned windows" },
            { letter: "D", text: "announce the winners of last year's Riddle Run" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 12 · Paired texts · sign language · level 3 ───────────── */
    {
      id: "g9-dsr-c49-asl-elective",
      family: "G9",
      title: "An ASL Class at Westbrook",
      kind: "Paired texts · 9.DSR",
      blurb: "A student argues for an ASL elective; a Deaf parent welcomes the idea, with conditions.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Why Our School Should Offer ASL, by Sunita Rao, Westbrook High junior</strong></p>" +
        "<p>" + N(1) + "Westbrook High offers Spanish, French, and Latin, but it does not offer American Sign Language, and I believe that gap should be closed next fall. " +
        N(2) + "ASL is used by hundreds of thousands of people in the United States, and many colleges already accept it as a world language. " +
        N(3) + "Offering it would give students a real choice. " +
        N(4) + "It would also serve students who struggle with the listening portion of other language classes but learn well visually.</p>" +
        "<p>" + N(5) + "Some people worry that ASL is easier than other languages and would become a \"free credit.\" " +
        N(6) + "That worry reflects a misunderstanding. " +
        N(7) + "ASL has its own grammar, uses facial expressions as part of its sentence structure, and takes years to master, just like Spanish or French.</p>" +
        "<p>" + N(8) + "Finally, an ASL course would change the culture of our building. " +
        N(9) + "Last year a Deaf student transferred to Westbrook, and most of us could not say even \"good morning\" to her without an interpreter. " +
        N(10) + "A class would not fix everything, but it would be a start. " +
        N(11) + "I am asking the board to fund one section of ASL I for next year, taught by a qualified instructor, and to measure student interest with a survey this spring.</p>" +
        "<p><strong>Text 2 — A Welcome, With Conditions, a letter to the school newspaper from a Westbrook parent</strong></p>" +
        "<p>" + N(12) + "When I read that students at Westbrook want an ASL class, my first feeling was gladness. " +
        N(13) + "My daughter is the Deaf student who transferred there last year, and she ate lunch alone more often than she told me. " +
        N(14) + "A hearing classmate who can sign even a little changes a school day. " +
        N(15) + "Still, I have watched many ASL programs begin with enthusiasm and end in disappointment, and I want to offer two cautions.</p>" +
        "<p>" + N(16) + "First, the course should be taught by a Deaf instructor whenever possible, or at least by someone deeply connected to the Deaf community. " +
        N(17) + "A language learned only from videos, or from a hearing teacher who took two semesters, often comes out stiff, like a song played with the right notes and no rhythm. " +
        N(18) + "Second, the class must teach culture along with vocabulary. " +
        N(19) + "Deaf people have our own history, humor, art, and customs, including how we get one another's attention and why we value direct eye contact. " +
        N(20) + "Students who learn signs without that context may treat ASL as a novelty instead of a living language with a community behind it.</p>" +
        "<p>" + N(21) + "If the school can meet these conditions, I will be first in line to volunteer at the class's spring showcase. " +
        N(22) + "If it cannot, I would rather it wait a year and do it right.</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          stem: "Which idea do the writers of both Westbrook texts share?",
          choices: [
            { letter: "A", text: "ASL should replace one of the school's current languages." },
            { letter: "B", text: "Colleges should require ASL for every incoming student." },
            { letter: "C", text: "An ASL class could improve daily life for Deaf students." },
            { letter: "D", text: "The school should wait several years before adding ASL." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "The two Westbrook texts differ mainly in that —",
          choices: [
            { letter: "A", text: "Text 1 urges starting the class; Text 2 sets terms for how to run it" },
            { letter: "B", text: "Text 1 opposes the class; Text 2 argues that it is badly needed" },
            { letter: "C", text: "Text 1 focuses on Deaf culture; Text 2 focuses on college credit" },
            { letter: "D", text: "Text 1 is written by a parent; Text 2 is written by a student" }
          ],
          correct: "A"
        },
        {
          id: "meaning",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 1 gains new meaning once the reader learns who wrote Text 2?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "D"
        },
        {
          id: "qualified",
          sol: "9.DSR.E",
          stem: "How would the writer of Text 2 most likely respond to the phrase \"a qualified instructor\" in sentence 11?",
          choices: [
            { letter: "A", text: "She would say any teacher who knows a few signs is enough." },
            { letter: "B", text: "She would want it to mean a Deaf or Deaf-connected teacher." },
            { letter: "C", text: "She would argue that videos can replace a live instructor." },
            { letter: "D", text: "She would ask that the instructor teach Spanish as well." }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          stem: "Which TWO sentences show that both writers see ASL as more than a set of signs? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "conclude",
          sol: "9.DSR.E",
          stem: "A reader combining both Westbrook texts could best conclude that a successful ASL course would need —",
          choices: [
            { letter: "A", text: "a large budget and several sections in its first year" },
            { letter: "B", text: "a showcase each spring and a required final exam" },
            { letter: "C", text: "real student interest and a teacher rooted in Deaf culture" },
            { letter: "D", text: "interpreters in every class and a new language lab" }
          ],
          correct: "C"
        },
        {
          id: "purpose13",
          sol: "9.RI.1.C",
          stem: "The writer of Text 2 includes sentence 13 mainly to —",
          choices: [
            { letter: "A", text: "show her personal stake in the school's decision" },
            { letter: "B", text: "criticize the students who wrote the proposal" },
            { letter: "C", text: "explain why her daughter left her last school" },
            { letter: "D", text: "prove that the cafeteria needs more seating" }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "Which choice best describes how Text 2 is organized?",
          choices: [
            { letter: "A", text: "A list of events in the order they happened last year" },
            { letter: "B", text: "A comparison of ASL with Spanish, French, and Latin" },
            { letter: "C", text: "A first reaction, two cautions, then a conditional offer" },
            { letter: "D", text: "A question to readers followed by a survey's results" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
