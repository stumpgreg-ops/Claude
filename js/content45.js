/* SOL Labyrinth — Grade 9 expansion, mid tier (levels 51-64): glassblowing, a woodworking shop,
 * the history of maps and a debate team. Seventeen original packs of seven questions. Original text only.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    {
      id: "g9-rl-c45-first-gather",
      family: "G9",
      title: "The First Gather",
      kind: "Literary · 9.RL",
      blurb: "After three weeks with a broom, Teodora finally gets a turn at her aunt's glass furnace.",
      level: 1,
      passage:
        "<p>" + N(1) + "The furnace at Copper Hollow Glass roared like a wind that never ran out of breath. " +
        N(2) + "Teodora had been sweeping the studio floor for three weeks, and she was starting to believe that sweeping was the whole job. " +
        N(3) + "Her aunt Marisol, who owned the studio, had promised her a turn at the pipe \"when your hands are ready.\" " +
        N(4) + "Teodora did not see how hands were supposed to get ready by holding a broom.</p>" +
        "<p>" + N(5) + "On Friday afternoon, after the last customer left and the street outside went quiet, Marisol handed her a long steel blowpipe. " +
        N(6) + "\"Turn it like you're rolling a pencil between your palms,\" she said. " +
        N(7) + "\"Never stop turning, not even to sneeze.\" " +
        N(8) + "Teodora dipped the tip of the pipe into the glowing pot and pulled out a gather of melted glass the size of a plum. " +
        N(9) + "It sagged at once, drooping toward the floor like honey off a spoon. " +
        N(10) + "She turned faster, and the drip crept back up and hugged the pipe. " +
        N(11) + "\"Good,\" Marisol said. " +
        N(12) + "\"Now the marver.\"</p>" +
        "<p>" + N(13) + "Teodora rolled the gather across the flat steel table, and it hissed and cooled from orange to a deep amber. " +
        N(14) + "When she blew into the pipe, nothing happened. " +
        N(15) + "She blew harder, cheeks puffed, and a small bubble finally bloomed inside the glass. " +
        N(16) + "It was lopsided, thick on one side and thin as paper on the other. " +
        N(17) + "She waited for her aunt to sigh. " +
        N(18) + "Instead, Marisol laughed and pointed at the broom leaning in the corner. " +
        N(19) + "\"Three weeks of sweeping taught you where everything in this room is, how to move without bumping the benches, and how to keep your eyes on the floor near the furnace,\" she said. " +
        N(20) + "\"That's what kept you safe just now.\"</p>" +
        "<p>" + N(21) + "Teodora looked at her crooked bubble, then at the broom. " +
        N(22) + "Marisol slid the piece into the cooling oven to rest overnight. " +
        N(23) + "\"Tomorrow,\" she said, \"you'll sweep first, and then you'll make another one.\" " +
        N(24) + "Teodora found that she did not mind the order of those two jobs at all, and she went to find the dustpan before her aunt could ask." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is best developed by Teodora's experience at the glass studio?",
          choices: [
            { letter: "A", text: "Patient preparation can matter even before its purpose is clear." },
            { letter: "B", text: "Natural talent matters more than any amount of practice." },
            { letter: "C", text: "Family members are usually the strictest teachers." },
            { letter: "D", text: "A first attempt at a craft should be perfect or thrown away." }
          ],
          correct: "A"
        },
        {
          id: "honey",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 9, the author compares the gather to honey off a spoon mainly to show that the glass —",
          choices: [
            { letter: "A", text: "has a sweet smell when it leaves the furnace" },
            { letter: "B", text: "is cooling too fast to be shaped" },
            { letter: "C", text: "is soft and begins to droop quickly" },
            { letter: "D", text: "turns a golden color in the light" }
          ],
          correct: "C"
        },
        {
          id: "teo-start",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Teodora at the beginning of the story?",
          choices: [
            { letter: "A", text: "She is afraid of the furnace and wants to quit." },
            { letter: "B", text: "She doubts that her chores are teaching her anything." },
            { letter: "C", text: "She is proud that her aunt trusts her with customers." },
            { letter: "D", text: "She is bored with glass and wants a different job." }
          ],
          correct: "B"
        },
        {
          id: "broom",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Based on sentences 19 and 20, the reader can infer that Marisol assigned the sweeping mainly to —",
          choices: [
            { letter: "A", text: "keep the studio clean for paying customers" },
            { letter: "B", text: "test whether Teodora would complain" },
            { letter: "C", text: "save money on a cleaning service" },
            { letter: "D", text: "teach Teodora to move safely in the studio" }
          ],
          correct: "D"
        },
        {
          id: "bloomed",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 15, the word bloomed most nearly means —",
          choices: [
            { letter: "A", text: "cracked apart" },
            { letter: "B", text: "opened and grew" },
            { letter: "C", text: "changed color" },
            { letter: "D", text: "cooled down" }
          ],
          correct: "B"
        },
        {
          id: "afterhours",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the detail in sentence 5 about the studio after closing time shape the events that follow?",
          choices: [
            { letter: "A", text: "It explains why Marisol is too tired to teach well." },
            { letter: "B", text: "It shows that the furnace has been turned off for the night." },
            { letter: "C", text: "It suggests that Teodora has to work late as a punishment." },
            { letter: "D", text: "It gives Teodora a quiet time to try the pipe without customers." }
          ],
          correct: "D"
        },
        {
          id: "tone-end",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the story's ending (sentences 21–24) is best described as —",
          choices: [
            { letter: "A", text: "content and accepting" },
            { letter: "B", text: "bitter and frustrated" },
            { letter: "C", text: "nervous and uncertain" },
            { letter: "D", text: "playful and teasing" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c45-walnut-stripe",
      family: "G9",
      title: "The Walnut Stripe",
      kind: "Literary · 9.RL",
      blurb: "Kofi wants his mother's birthday box done fast. His grandfather wants it done honestly.",
      level: 2,
      passage:
        "<p>" + N(1) + "My grandfather's shop smells like cedar and coffee, and on Saturday mornings it is the only place in the house where nobody asks me about grades. " +
        N(2) + "Papa Kwabena keeps his chisels in a canvas roll, each one sharpened so finely that he could shave the hair on his arm with it, though he says only a show-off would. " +
        N(3) + "That spring I was building a small maple box for my mother's birthday, and I wanted it finished by Sunday.</p>" +
        "<p>" + N(4) + "\"Dovetails,\" Grandpa said, tapping the corner of my sketch. " +
        N(5) + "\"Not nails.\" " +
        N(6) + "I pointed at the nail gun hanging on the pegboard and said, \"That would take ten minutes.\" " +
        N(7) + "\"And it would look like ten minutes,\" he said. " +
        N(8) + "He showed me how to mark the joints with a knife instead of a pencil, because a knife line is thinner and does not lie.</p>" +
        "<p>" + N(9) + "I sawed the first board slowly and the second one fast, because the clock above the door seemed to tick louder every time I glanced at it. " +
        N(10) + "When I tapped the pieces together, the first corner closed like a handshake. " +
        N(11) + "The second corner left a gap I could slide a dime into. " +
        N(12) + "I wanted to throw the board into the scrap bin, but Grandpa held up his hand before I could. " +
        N(13) + "He took a thin sliver of walnut, much darker than the maple, and glued it into the gap. " +
        N(14) + "When he planed it flush, the dark line looked like a stripe someone had put there on purpose. " +
        N(15) + "\"Now the box tells the truth,\" he said. " +
        N(16) + "\"It says one corner was made patiently and one corner was made by a boy in a hurry who learned something.\"</p>" +
        "<p>" + N(17) + "I cut the last two corners on Sunday morning, slowly, while my mother's birthday breakfast cooled on the kitchen table. " +
        N(18) + "She noticed the walnut stripe right away and asked what it was. " +
        N(19) + "I started to say it was decoration. " +
        N(20) + "Then I told her the real story, gap and dime and all. " +
        N(21) + "She keeps the box on her dresser now, turned so that the stripe faces out." +
        "</p>",
      claims: [
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the story is told by Kofi in the first person, the reader —",
          choices: [
            { letter: "A", text: "learns exactly what Papa Kwabena is thinking at each moment" },
            { letter: "B", text: "sees the birthday breakfast from the mother's point of view" },
            { letter: "C", text: "learns how Kofi feels about rushing and about the gap" },
            { letter: "D", text: "never finds out whether the box was finished in time" }
          ],
          correct: "C"
        },
        {
          id: "ten-minutes",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Grandpa's reply in sentence 7, \"And it would look like ten minutes,\" mainly suggests that —",
          choices: [
            { letter: "A", text: "a quickly made box would show how little care went into it" },
            { letter: "B", text: "the nail gun is broken and would take longer than Kofi thinks" },
            { letter: "C", text: "Kofi has misjudged how long it takes to load the nail gun" },
            { letter: "D", text: "the box must be finished before the clock reaches ten" }
          ],
          correct: "A"
        },
        {
          id: "handshake",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 10, the author compares the first corner to a handshake mainly to show that the joint —",
          choices: [
            { letter: "A", text: "was friendly and easy to pull apart" },
            { letter: "B", text: "needed two people to put together" },
            { letter: "C", text: "was made from two kinds of wood" },
            { letter: "D", text: "fit together firmly and neatly" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the walnut stripe in the box best support?",
          choices: [
            { letter: "A", text: "Expensive materials make any project more beautiful." },
            { letter: "B", text: "An honest mistake can become part of a lesson worth keeping." },
            { letter: "C", text: "Older people usually prefer the old way of doing things." },
            { letter: "D", text: "Gifts matter only when they are delivered on time." }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "Which sentence best shows that Kofi's attitude toward his mistake has changed by the end?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "D"
        },
        {
          id: "flush",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 14, the word flush most nearly means —",
          choices: [
            { letter: "A", text: "level with the surface around it" },
            { letter: "B", text: "red from embarrassment" },
            { letter: "C", text: "rinsed clean with water" },
            { letter: "D", text: "rich with extra money" }
          ],
          correct: "A"
        },
        {
          id: "clock",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The detail about the clock in sentence 9 mainly emphasizes that Kofi —",
          choices: [
            { letter: "A", text: "cannot read the time in the dim shop" },
            { letter: "B", text: "feels pressured by his deadline" },
            { letter: "C", text: "is annoyed by noises in the garage" },
            { letter: "D", text: "has forgotten about his grandfather" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c45-listen-for-gaps",
      family: "G9",
      title: "Listen for Gaps",
      kind: "Literary · 9.RL",
      blurb: "In his first big tournament, Rahim faces a cross-examination question none of his cards can answer.",
      level: 3,
      passage:
        "<p>" + N(1) + "The classroom assigned to Round Four still had a periodic table on the wall, and Rahim found himself counting the noble gases while the other team's first speaker finished. " +
        N(2) + "He had prepared for this tournament the way he prepared for chemistry tests: flash cards, color-coded tabs, and a refusal to sleep before midnight. " +
        N(3) + "His partner, Tova, a senior who had reached the state finals twice, wrote only three words on her legal pad during the entire speech. " +
        N(4) + "Rahim filled two pages.</p>" +
        "<p>" + N(5) + "Then cross-examination began, and the other team's second speaker, a tall boy with an unhurried voice, turned to him. " +
        N(6) + "\"Your plan says the city should replace its slowest bus routes with on-demand shuttles,\" the boy said. " +
        N(7) + "\"Can you tell me what happens to riders who don't own phones?\" " +
        N(8) + "Rahim's flash cards fanned out under his fingers like a hand of cards in a game he had never learned to play. " +
        N(9) + "None of them said anything about phones. " +
        N(10) + "He felt the silence stretch, thin and bright, the way a soap bubble stretches just before it pops. " +
        N(11) + "Beside him, Tova did not move, did not slide him a note, did not rescue him.</p>" +
        "<p>" + N(12) + "\"I don't know,\" Rahim said at last. " +
        N(13) + "The boy started to smile, and Rahim heard himself keep going. " +
        N(14) + "\"But that's a fair problem, and it means our plan needs a call-in line, which costs very little compared to the routes we'd save.\" " +
        N(15) + "The judge, who had been staring at the ceiling tiles, looked down and began to write.</p>" +
        "<p>" + N(16) + "Afterward, in the hallway, Rahim apologized for freezing. " +
        N(17) + "Tova shrugged and showed him her legal pad. " +
        N(18) + "The three words were \"listen for gaps.\" " +
        N(19) + "\"Everyone in that room knew you didn't have a card for it,\" she said. " +
        N(20) + "\"What they didn't know was whether you could think without one.\" " +
        N(21) + "They lost the round by a single point. " +
        N(22) + "On the bus ride home, Rahim took out a blank index card, wrote the same three words on it, and slid it into the very front of the stack." +
        "</p>",
      claims: [
        {
          id: "tova-belief",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Based on sentences 19 and 20, Tova most likely believes that a strong debater —",
          choices: [
            { letter: "A", text: "should memorize an answer for every question" },
            { letter: "B", text: "can respond thoughtfully to an unexpected question" },
            { letter: "C", text: "never admits that the other side has a point" },
            { letter: "D", text: "wins by speaking faster than the other team" }
          ],
          correct: "B"
        },
        {
          id: "contrast",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes the contrast between Rahim and Tova in sentences 2–4?",
          choices: [
            { letter: "A", text: "Rahim is lazy about preparing, while Tova studies late every night." },
            { letter: "B", text: "Rahim is calm in rounds, while Tova is nervous in front of judges." },
            { letter: "C", text: "Rahim enjoys chemistry, while Tova cares only about debate." },
            { letter: "D", text: "Rahim relies on piles of notes,while Tova writes far less down." }
          ],
          correct: "D"
        },
        {
          id: "bubble",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 10, comparing the silence to a stretched soap bubble mainly suggests that the moment —",
          choices: [
            { letter: "A", text: "felt tense and close to breaking" },
            { letter: "B", text: "was cheerful and lighthearted" },
            { letter: "C", text: "passed too quickly to notice" },
            { letter: "D", text: "was filled with loud noise" }
          ],
          correct: "A"
        },
        {
          id: "turn",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Rahim's words in sentence 14 mainly reveal that he —",
          choices: [
            { letter: "A", text: "wants the judge to stop the cross-examination early" },
            { letter: "B", text: "believes the other team has already won the round" },
            { letter: "C", text: "turns an admission of weakness into a fix for his plan" },
            { letter: "D", text: "has secretly prepared a card about riders without phones" }
          ],
          correct: "C"
        },
        {
          id: "no-note",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The author includes the detail that Tova does not slide Rahim a note (sentence 11) mainly to —",
          choices: [
            { letter: "A", text: "show that Rahim must handle the question on his own" },
            { letter: "B", text: "suggest that Tova is angry with Rahim about the plan" },
            { letter: "C", text: "explain why the team loses the round by one point" },
            { letter: "D", text: "prove that notes are not allowed during debate rounds" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is developed through the final sentence of \"Listen for Gaps\"?",
          choices: [
            { letter: "A", text: "Losing a close round proves that preparation is useless." },
            { letter: "B", text: "Experienced partners should always protect beginners." },
            { letter: "C", text: "Thinking on one's feet can matter more than one victory." },
            { letter: "D", text: "Judges reward speakers who sound the most confident." }
          ],
          correct: "C"
        },
        {
          id: "hand-of-cards",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 8, saying the flash cards were like a hand of cards in a game Rahim had never learned suggests that he —",
          choices: [
            { letter: "A", text: "would rather be playing a game than debating" },
            { letter: "B", text: "has dropped his notes on the classroom floor" },
            { letter: "C", text: "is hiding his best evidence from the judge" },
            { letter: "D", text: "has material in front of him but no idea how to use it" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c45-attic-map",
      family: "G9",
      title: "The Map in the Trunk",
      kind: "Literary · 9.RL",
      blurb: "While packing up her grandmother's house, Nadia finds a map with no scale and a star marked first friend.",
      level: 2,
      passage:
        "<p>" + N(1) + "The attic of Teta Samira's house was hotter than the street outside, and Nadia had been carrying boxes down the narrow stairs for most of the afternoon. " +
        N(2) + "Her grandmother was moving to an apartment across town, and everything had to be sorted into three piles: keep, give, and toss. " +
        N(3) + "Near the bottom of a trunk, under a folded tablecloth, Nadia found a sheet of brown paper covered in pencil lines. " +
        N(4) + "At first she thought it was a child's drawing. " +
        N(5) + "Then she recognized the curve of Linden Avenue and the triangle-shaped park at the end of their block.</p>" +
        "<p>" + N(6) + "It was a map, but a strange one. " +
        N(7) + "There was no scale and no compass rose, and the streets wandered at angles no city planner would approve. " +
        N(8) + "The library was drawn twice as large as the hospital. " +
        N(9) + "A small star marked a corner where, as far as Nadia knew, nothing had ever stood but a mailbox. " +
        N(10) + "Beside the star, in tiny letters, someone had written \"first friend.\"</p>" +
        "<p>" + N(11) + "Nadia carried the paper downstairs to the kitchen, where her grandmother was wrapping teacups in newspaper. " +
        N(12) + "Teta Samira took one look and set down the cup she was holding. " +
        N(13) + "\"I made that the first month we lived here,\" she said. " +
        N(14) + "\"I could not read the street signs yet, so I drew what I needed to remember.\" " +
        N(15) + "She touched the oversized library with one finger. " +
        N(16) + "\"That is where I learned to read the signs.\" " +
        N(17) + "She touched the star. " +
        N(18) + "\"And that is where a woman named Grace waited with me every morning until the bus came, because she saw I was afraid of missing it.\"</p>" +
        "<p>" + N(19) + "Nadia pulled out her phone and opened the map app, which showed the same streets in clean gray lines, every distance correct to the foot. " +
        N(20) + "It knew where everything was. " +
        N(21) + "It did not know about Grace. " +
        N(22) + "\"Keep pile?\" Nadia asked, holding up the brown paper. " +
        N(23) + "Her grandmother smiled and slid the map into the one box she had decided to carry across town herself." +
        "</p>",
      claims: [
        {
          id: "idea",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which idea about maps does \"The Map in the Trunk\" most clearly develop?",
          choices: [
            { letter: "A", text: "Maps without a scale are useless to most people." },
            { letter: "B", text: "Phone maps will soon replace every paper map." },
            { letter: "C", text: "A map can record what mattered most to its maker." },
            { letter: "D", text: "City planners should design straighter streets." }
          ],
          correct: "C"
        },
        {
          id: "library",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Based on sentences 8 and 15–16, the reader can infer that the library was drawn so large because —",
          choices: [
            { letter: "A", text: "it was especially important in Teta Samira's early life there" },
            { letter: "B", text: "it was the largest building in the neighborhood at the time" },
            { letter: "C", text: "Teta Samira worked there before she moved to the city" },
            { letter: "D", text: "the hospital had not yet been built when she drew the map" }
          ],
          correct: "A"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the setting of a house being packed for a move shape the plot of the story?",
          choices: [
            { letter: "A", text: "The heat of the attic makes Nadia want to stop working." },
            { letter: "B", text: "The move causes Teta Samira to lose track of her friends." },
            { letter: "C", text: "The empty rooms make Nadia feel lonely in the house." },
            { letter: "D", text: "Sorting old belongings leads Nadia to find the map." }
          ],
          correct: "D"
        },
        {
          id: "short-sentences",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "The short sentences 20 and 21 mainly emphasize that the phone's map —",
          choices: [
            { letter: "A", text: "contains mistakes about the streets near the park" },
            { letter: "B", text: "is accurate but cannot hold personal memories" },
            { letter: "C", text: "is harder for Teta Samira to read than paper" },
            { letter: "D", text: "shows the neighborhood exactly as it once was" }
          ],
          correct: "B"
        },
        {
          id: "wandered",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "As used in sentence 7 to describe the streets on the map, the word wandered most nearly means —",
          choices: [
            { letter: "A", text: "ran in uneven, irregular directions" },
            { letter: "B", text: "were crowded with walking people" },
            { letter: "C", text: "were missing their correct names" },
            { letter: "D", text: "ended suddenly at the edge of town" }
          ],
          correct: "A"
        },
        {
          id: "teta",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Teta Samira as she is revealed in sentences 13–18?",
          choices: [
            { letter: "A", text: "She is embarrassed that Nadia found her childish drawing." },
            { letter: "B", text: "She is eager to throw away reminders of a difficult time." },
            { letter: "C", text: "She is annoyed that Nadia has been looking through the trunk." },
            { letter: "D", text: "She recalls her early struggles with gratitude for help." }
          ],
          correct: "D"
        },
        {
          id: "keep-pile",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Nadia's question in sentence 22, \"Keep pile?\", mainly shows that she —",
          choices: [
            { letter: "A", text: "is too tired to decide where the map belongs" },
            { letter: "B", text: "thinks the map should go to the library instead" },
            { letter: "C", text: "now understands that the map is worth saving" },
            { letter: "D", text: "expects her grandmother to toss the paper" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c45-sand-to-vase",
      family: "G9",
      title: "From Sand to Vase",
      kind: "Informational · 9.RI",
      blurb: "Heat, breath and steady turning: the steps behind a handmade glass vase.",
      level: 1,
      passage:
        "<p>" + N(1) + "A glass vase may look as if it was poured into shape, but most handmade glass is shaped by breath, heat, and steady turning. " +
        N(2) + "The process begins in a furnace that holds a pot of melted glass at about 2,000 degrees Fahrenheit. " +
        N(3) + "Glass is made mostly from sand, along with soda ash and lime, which help the sand melt at a lower temperature and keep the finished glass from dissolving in water. " +
        N(4) + "At that heat, the mixture glows orange and moves like thick syrup.</p>" +
        "<p>" + N(5) + "A glassblower starts by dipping the end of a hollow steel blowpipe into the furnace and twisting it to collect a blob of glass called a gather. " +
        N(6) + "The pipe must keep turning, because melted glass always flows downward. " +
        N(7) + "If the turning stops, even for a few seconds, the gather will sag off center. " +
        N(8) + "Next, the glassblower rolls the gather on a marver, a flat table of steel or stone. " +
        N(9) + "Rolling smooths the outside of the glass and cools its surface slightly, which forms a thin skin that holds the shape. " +
        N(10) + "Then the glassblower blows a short puff of air through the pipe and covers the end with a thumb. " +
        N(11) + "The trapped air warms and expands, pushing a bubble into the center of the glass.</p>" +
        "<p>" + N(12) + "From there, the work becomes a cycle. " +
        N(13) + "The glass cools as it is shaped, so it must be returned again and again to a second furnace, called the glory hole, to be reheated. " +
        N(14) + "Wooden blocks soaked in water, pads of wet newspaper, and metal tweezers called jacks help form necks, lips, and curves.</p>" +
        "<p>" + N(15) + "The final step may be the most important, even though no one can watch it happen. " +
        N(16) + "A finished piece is placed in an annealer, an oven that cools it slowly over many hours. " +
        N(17) + "If hot glass cools too fast, the outside hardens before the inside, and stress builds up between the layers. " +
        N(18) + "A vase that skips annealing may look perfect for a day and then crack on a shelf for no visible reason. " +
        N(19) + "Patience, in other words, is as much a tool of the craft as the pipe itself." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"From Sand to Vase\"?",
          choices: [
            { letter: "A", text: "Glass is made mostly of sand, soda ash, and lime." },
            { letter: "B", text: "Handmade glass is shaped through careful heating, blowing, and cooling." },
            { letter: "C", text: "Glassblowers use many tools made of wood and paper." },
            { letter: "D", text: "Most glass vases crack within a day of being made." }
          ],
          correct: "B"
        },
        {
          id: "turning",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the passage, why must a glassblower keep turning the blowpipe?",
          choices: [
            { letter: "A", text: "Turning traps air inside the pipe." },
            { letter: "B", text: "Turning keeps the furnace evenly hot." },
            { letter: "C", text: "Turning changes the color of the glass." },
            { letter: "D", text: "Melted glass flows down and will sag." }
          ],
          correct: "D"
        },
        {
          id: "order",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The article \"From Sand to Vase\" is organized mainly —",
          choices: [
            { letter: "A", text: "in the order of the steps used to make a piece" },
            { letter: "B", text: "by comparing glassblowing with pottery making" },
            { letter: "C", text: "by listing problems and then their solutions" },
            { letter: "D", text: "from the most common tool to the least common" }
          ],
          correct: "A"
        },
        {
          id: "stress",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 17, the word stress most nearly means —",
          choices: [
            { letter: "A", text: "worry about a coming deadline" },
            { letter: "B", text: "extra force placed on a syllable" },
            { letter: "C", text: "a strain or pressure inside a material" },
            { letter: "D", text: "a layer of color added to the surface" }
          ],
          correct: "C"
        },
        {
          id: "ingredients",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes sentence 3 in the glassblowing article mainly to —",
          choices: [
            { letter: "A", text: "warn readers that melted glass is dangerous" },
            { letter: "B", text: "show that glass can be made without heat" },
            { letter: "C", text: "explain what glass is made of and why the extras matter" },
            { letter: "D", text: "argue that sand is the hardest ingredient to find" }
          ],
          correct: "C"
        },
        {
          id: "annealing-evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the claim in sentence 15 that the final step may be the most important?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the glassblowing article states an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 19" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c45-what-maps-choose",
      family: "G9",
      title: "What Maps Choose",
      kind: "Informational · 9.RI",
      blurb: "From clay tablets to phone screens, every map leaves something out.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every map is a set of choices, and the history of mapmaking is largely a history of which choices people cared about most. " +
        N(2) + "Some of the oldest surviving maps were scratched into clay tablets thousands of years ago. " +
        N(3) + "They showed field boundaries, canals, and city walls, because the people who made them needed to settle questions about land and water. " +
        N(4) + "Distance mattered less than ownership.</p>" +
        "<p>" + N(5) + "Many centuries later, maps drawn for travelers worked differently. " +
        N(6) + "Some were long, narrow scrolls that listed towns in the order a traveler would reach them, along with the number of days between stops. " +
        N(7) + "A road that bent sharply in real life might appear perfectly straight, since what a traveler needed was the sequence, not the shape.</p>" +
        "<p>" + N(8) + "Sailors had different needs again. " +
        N(9) + "By the 1300s, sea charts used in the Mediterranean were covered in crisscrossing lines that radiated from compass points. " +
        N(10) + "A navigator could lay a straightedge along one of those lines to find a steady heading from one port to another. " +
        N(11) + "These charts were remarkably accurate along coastlines, yet they often left the interior of continents nearly empty. " +
        N(12) + "To a sailor, land far from the water was simply not useful information.</p>" +
        "<p>" + N(13) + "Every mapmaker who tries to show the whole world faces a problem that has never been fully solved. " +
        N(14) + "Earth is round, and paper is flat. " +
        N(15) + "Peeling the surface of a globe onto a page is like flattening an orange peel: something must stretch or tear. " +
        N(16) + "One popular projection designed for navigation in the 1500s kept compass directions correct, but it made lands near the poles look far larger than they are. " +
        N(17) + "Other projections keep areas accurate but bend the shapes of continents. " +
        N(18) + "No single projection can keep everything true at once.</p>" +
        "<p>" + N(19) + "Today, satellites measure Earth with astonishing precision, and a phone can place a person within a few feet. " +
        N(20) + "Still, even digital maps make choices about what to show: which businesses appear, which roads are labeled, and what is left blank. " +
        N(21) + "The tools have changed, but the question every mapmaker asks has not: what does the person holding this map need to know?" +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which sentence best states the central idea of \"What Maps Choose\"?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How does the author mainly organize sentences 2–12 of the article about maps?",
          choices: [
            { letter: "A", text: "by ranking maps from the least to the most accurate" },
            { letter: "B", text: "by presenting one problem and proposing a solution" },
            { letter: "C", text: "by showing how different users' needs shaped their maps" },
            { letter: "D", text: "by comparing ancient maps with modern phone maps" }
          ],
          correct: "C"
        },
        {
          id: "scrolls",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the passage, why did travelers' scroll maps show bending roads as straight?",
          choices: [
            { letter: "A", text: "Scroll paper was too narrow to show any curves." },
            { letter: "B", text: "Mapmakers had never traveled the roads themselves." },
            { letter: "C", text: "Straight lines helped sailors find a steady heading." },
            { letter: "D", text: "Travelers needed the order of stops more than shapes." }
          ],
          correct: "D"
        },
        {
          id: "orange",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The comparison to an orange peel in sentence 15 helps the reader understand that —",
          choices: [
            { letter: "A", text: "early globes were often made from fruit" },
            { letter: "B", text: "a curved surface cannot lie flat without distortion" },
            { letter: "C", text: "maps of warm places were the hardest to draw" },
            { letter: "D", text: "the poles are smaller than most maps show" }
          ],
          correct: "B"
        },
        {
          id: "projection-evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the statement in sentence 18 that no projection can keep everything true at once?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 19" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "B"
        },
        {
          id: "radiated",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 9, the word radiated most nearly means —",
          choices: [
            { letter: "A", text: "spread outward from a center" },
            { letter: "B", text: "glowed with a bright heat" },
            { letter: "C", text: "faded slowly from view" },
            { letter: "D", text: "ran parallel to the coast" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "The author's main purpose in \"What Maps Choose\" is to —",
          choices: [
            { letter: "A", text: "persuade readers to stop using phone maps" },
            { letter: "B", text: "teach readers how to draw a world projection" },
            { letter: "C", text: "praise sailors as the best mapmakers in history" },
            { letter: "D", text: "explain how users' needs have shaped maps over time" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-c45-wood-moves",
      family: "G9",
      title: "Why Wood Moves",
      kind: "Informational · 9.RI",
      blurb: "A finished board keeps swelling and shrinking with the air, and good furniture is built to allow for it.",
      level: 3,
      passage:
        "<p>" + N(1) + "A board cut from a tree may seem finished and stable, but to a woodworker it is never entirely still. " +
        N(2) + "Wood is made of long, hollow cells that once carried water up the trunk, and even after a tree is cut and dried, those cells keep trading moisture with the air around them. " +
        N(3) + "When the air is humid, the wood absorbs water and swells; when the air turns dry, it releases water and shrinks. " +
        N(4) + "Woodworkers call this seasonal change \"wood movement,\" and ignoring it is one of the most common reasons furniture fails.</p>" +
        "<p>" + N(5) + "The movement is not equal in every direction. " +
        N(6) + "Along the length of the grain, a board barely changes at all, often less than a tenth of a percent. " +
        N(7) + "Across the grain, however, the same board may change several percent in width between a damp summer and a heated winter. " +
        N(8) + "A tabletop forty inches wide can grow or shrink by a quarter of an inch or more over a single year.</p>" +
        "<p>" + N(9) + "That difference explains a surprising number of cracked boards. " +
        N(10) + "Suppose a maker glues a wide panel tightly inside a rigid frame. " +
        N(11) + "In winter, the panel tries to shrink, but the frame holds its edges, so the wood splits down the middle. " +
        N(12) + "In summer, the panel tries to expand and can force the joints of the frame apart. " +
        N(13) + "The problem lies not in the wood, which is behaving exactly as wood should, but in a design that refuses to allow for it.</p>" +
        "<p>" + N(14) + "Experienced builders design around movement instead of fighting it. " +
        N(15) + "Cabinet doors often use \"floating\" panels that sit in grooves without glue, free to slide a little as the seasons change. " +
        N(16) + "Tabletops are attached to their bases with clips or slotted screw holes that let the top shift sideways. " +
        N(17) + "Some shops store new lumber for weeks before cutting it so the boards can adjust to the room." +
        N(18) + "None of these methods stop wood from moving. " +
        N(19) + "Instead, they accept a basic fact of the material: a board will go on responding to the air for as long as it exists. " +
        N(20) + "In that sense, a well-made table is not a frozen object but a carefully managed compromise between a craftsperson's plans and the nature of the wood." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best summarizes \"Why Wood Moves\"?",
          choices: [
            { letter: "A", text: "Wood should be stored for weeks so that it stops moving." },
            { letter: "B", text: "Tabletops are the furniture most likely to crack in winter." },
            { letter: "C", text: "Wood shifts with humidity, so skilled builders design for it." },
            { letter: "D", text: "Glue is the main cause of failure in modern furniture." }
          ],
          correct: "C"
        },
        {
          id: "direction",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the passage, in which direction does a board change size the most?",
          choices: [
            { letter: "A", text: "across the grain, in its width" },
            { letter: "B", text: "along the grain, in its length" },
            { letter: "C", text: "through its thickness, top to bottom" },
            { letter: "D", text: "equally in every direction at once" }
          ],
          correct: "A"
        },
        {
          id: "hypothetical",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "Sentences 10–12 of the wood article are organized mainly as —",
          choices: [
            { letter: "A", text: "a list of tools needed to build a frame" },
            { letter: "B", text: "a comparison of two kinds of wood" },
            { letter: "C", text: "a set of steps for gluing a panel" },
            { letter: "D", text: "an imagined example of cause and effect" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence provides the strongest evidence that movement across the grain can be large enough to matter?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "B"
        },
        {
          id: "blame",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes sentence 13 mainly to —",
          choices: [
            { letter: "A", text: "move the blame for cracks from the wood to the design" },
            { letter: "B", text: "suggest that some kinds of wood should never be used" },
            { letter: "C", text: "introduce a new topic about the frames of doors" },
            { letter: "D", text: "show that builders cannot prevent cracked panels" }
          ],
          correct: "A"
        },
        {
          id: "compromise",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In sentence 20, the author calls a well-made table a compromise rather than a frozen object. The word compromise suggests that the table —",
          choices: [
            { letter: "A", text: "was built cheaply by cutting corners" },
            { letter: "B", text: "balances the builder's plans with the wood's nature" },
            { letter: "C", text: "will eventually break no matter how it is made" },
            { letter: "D", text: "was designed by more than one builder" }
          ],
          correct: "B"
        },
        {
          id: "interpretation",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence in \"Why Wood Moves\" offers the author's interpretation rather than a measurable fact?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rv-c45-barn-wood",
      family: "G9",
      title: "Barn Wood",
      kind: "Vocabulary · 9.RV",
      blurb: "At a Saturday community woodshop, Dmitri turns three gray strips of old oak into something new.",
      level: 1,
      passage:
        "<p>" + N(1) + "The community woodshop on Fourth Street opens to teenagers every Saturday at nine, and Dmitri arrived at eight-forty because he did not want anyone to see him walk in alone. " +
        N(2) + "The instructor, Ms. Ferreira, was already sorting a pile of boards that had been <strong>salvaged</strong> from an old barn before it was torn down last spring. " +
        N(3) + "\"Nobody wanted these,\" she said, \"so they're ours.\" " +
        N(4) + "She handed Dmitri three strips of oak, gray and splintered on the outside. " +
        N(5) + "His job for the morning was to turn them into a cutting board.</p>" +
        "<p>" + N(6) + "He started with sandpaper so <strong>coarse</strong> that it felt like gravel under his fingertips. " +
        N(7) + "The rough paper chewed through the gray layer quickly, and underneath, the wood was the color of toasted bread. " +
        N(8) + "Then Ms. Ferreira gave him finer and finer sheets, and each pass left the surface smoother than the last. " +
        N(9) + "When it was time to glue the strips together, Dmitri made a few <strong>tentative</strong> passes with the glue bottle, barely touching the wood, as if the board might bite. " +
        N(10) + "\"More,\" Ms. Ferreira said. " +
        N(11) + "\"Glue is cheaper than a second try.\" " +
        N(12) + "He spread a thick, even line and clamped the strips tight.</p>" +
        "<p>" + N(13) + "While the glue dried, he noticed that other students had drifted in and were working quietly at their own benches. " +
        N(14) + "A girl named Ama was cutting wooden pegs, measuring each one twice so that the whole row would be <strong>uniform</strong>. " +
        N(15) + "An older boy was sweeping sawdust into neat piles without being asked. " +
        N(16) + "Ms. Ferreira called them her most <strong>diligent</strong> crew, the kind who keep working long after the fun part ends.</p>" +
        "<p>" + N(17) + "By noon, Dmitri's three gray strips had become a single golden board. " +
        N(18) + "He ran his palm across it and could not find a splinter anywhere. " +
        N(19) + "\"Barn wood and a little patience,\" Ms. Ferreira said. \"That's all it takes to <strong>transform</strong> something nobody wanted.\" " +
        N(20) + "Dmitri realized he had not thought about walking in alone for more than two hours. " +
        N(21) + "He asked if he could come back next Saturday, and she was already writing his name on the sign-up sheet." +
        "</p>",
      claims: [
        {
          id: "salvaged",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 2, the word salvaged most nearly means —",
          choices: [
            { letter: "A", text: "painted to look older than they were" },
            { letter: "B", text: "rescued from something being destroyed" },
            { letter: "C", text: "bought at a high price from a farmer" },
            { letter: "D", text: "cut into strips of the same length" }
          ],
          correct: "B"
        },
        {
          id: "diligent",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Based on the context of sentences 14–16, a diligent crew is one that —",
          choices: [
            { letter: "A", text: "works steadily and carefully" },
            { letter: "B", text: "talks loudly while working" },
            { letter: "C", text: "arrives late but leaves early" },
            { letter: "D", text: "competes to finish first" }
          ],
          correct: "A"
        },
        {
          id: "tentative",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written careful instead of tentative in sentence 9. Compared with careful, the word tentative adds a sense that Dmitri is —",
          choices: [
            { letter: "A", text: "skilled and confident" },
            { letter: "B", text: "angry and impatient" },
            { letter: "C", text: "bored and distracted" },
            { letter: "D", text: "unsure and hesitant" }
          ],
          correct: "D"
        },
        {
          id: "uniform",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word uniform in sentence 14 begins with the prefix uni-, meaning one. Based on the prefix and the context, uniform most nearly means —",
          choices: [
            { letter: "A", text: "made by a single worker" },
            { letter: "B", text: "worn by a team or club" },
            { letter: "C", text: "all alike in size and shape" },
            { letter: "D", text: "finished in one afternoon" }
          ],
          correct: "C"
        },
        {
          id: "transform",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The prefix trans- in transform (sentence 19) can mean across or into another state. To transform something is to —",
          choices: [
            { letter: "A", text: "change it completely in form" },
            { letter: "B", text: "carry it across a long distance" },
            { letter: "C", text: "copy its shape onto paper" },
            { letter: "D", text: "store it until it is needed" }
          ],
          correct: "A"
        },
        {
          id: "bite",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 9, saying that Dmitri glued the wood as if the board might bite suggests that he —",
          choices: [
            { letter: "A", text: "thinks the barn wood is unsafe to touch" },
            { letter: "B", text: "is nervous about making a mistake" },
            { letter: "C", text: "wants to make the other students laugh" },
            { letter: "D", text: "has hurt his hand on a splinter before" }
          ],
          correct: "B"
        },
        {
          id: "comfortable",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "Which sentence best shows that Dmitri has become more comfortable at the Fourth Street woodshop?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rv-c45-quiet-room",
      family: "G9",
      title: "The Quietest Loud Club",
      kind: "Vocabulary · 9.RV",
      blurb: "A school-paper feature on what the Wexford debate team actually practices: listening, conceding, proving and explaining.",
      level: 3,
      passage:
        "<p>" + N(1) + "Visitors to the debate team's Tuesday practice at Wexford High often expect shouting, but what they find instead is a room full of people listening very hard. " +
        N(2) + "Coach Elena Takahashi starts every session with the same drill. " +
        N(3) + "One student makes a claim, and a partner must repeat it back so accurately that the first speaker agrees, \"Yes, that's exactly what I meant.\" " +
        N(4) + "Only then may the partner argue against it.</p>" +
        "<p>" + N(5) + "The drill trains a skill that surprises many beginners: the willingness to <strong>concede</strong>. " +
        N(6) + "Experienced debaters regularly admit that an opponent has made a fair point. " +
        N(7) + "Doing so is not surrender; it frees the speaker to focus on the points that truly decide the round. " +
        N(8) + "A debater who fights over every inch of ground, Takahashi says, ends up guarding a fence with no field behind it.</p>" +
        "<p>" + N(9) + "The second skill is evidence. " +
        N(10) + "Team members learn that a claim is only as strong as their ability to <strong>substantiate</strong> it with facts, examples, or expert sources. " +
        N(11) + "Judges quickly lose patience with speakers who announce that something is \"obviously true\" and then move on. " +
        N(12) + "A <strong>cogent</strong> argument, by contrast, leads the listener step by step until the conclusion feels almost unavoidable.</p>" +
        "<p>" + N(13) + "Third, the team practices treating the other side as an <strong>adversary</strong> rather than an enemy. " +
        N(14) + "The difference sounds small, but it shapes the tone of every round. " +
        N(15) + "An enemy is someone to defeat; an adversary is someone whose challenge makes your own thinking sharper. " +
        N(16) + "After each tournament, Wexford debaters shake hands with every team they faced, and several have kept in touch with former opponents for years.</p>" +
        "<p>" + N(17) + "Finally, there is delivery. " +
        N(18) + "Being <strong>articulate</strong> is not the same as speaking quickly or using long words. " +
        N(19) + "It means expressing an idea so clearly that a tired judge at the end of a long Saturday can follow it on the first hearing. " +
        N(20) + "Senior captain Joaquin Herrera puts it simply: \"If they have to ask what you meant, you didn't say it yet.\"</p>" +
        "<p>" + N(21) + "Wexford's trophy shelf is modest. " +
        N(22) + "But former members say the habits they learned in that quiet room turned out to matter far beyond any tournament." +
        "</p>",
      claims: [
        {
          id: "concede",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "As used in sentence 5, the word concede most nearly means to —",
          choices: [
            { letter: "A", text: "admit that something is true or fair" },
            { letter: "B", text: "speak louder than an opponent" },
            { letter: "C", text: "give up and leave the competition" },
            { letter: "D", text: "repeat a claim word for word" }
          ],
          correct: "A"
        },
        {
          id: "substantiate",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word substantiate in sentence 10 shares a root with substance, something solid and real. To substantiate a claim is to —",
          choices: [
            { letter: "A", text: "state it more than once" },
            { letter: "B", text: "make it sound more exciting" },
            { letter: "C", text: "give it solid support" },
            { letter: "D", text: "shorten it for the judge" }
          ],
          correct: "C"
        },
        {
          id: "adversary",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In sentence 15, the author separates an adversary from an enemy. Compared with enemy, the word adversary has a connotation that is more —",
          choices: [
            { letter: "A", text: "fearful" },
            { letter: "B", text: "respectful" },
            { letter: "C", text: "hostile" },
            { letter: "D", text: "careless" }
          ],
          correct: "B"
        },
        {
          id: "fence",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 8, the image of guarding a fence with no field behind it suggests that a debater who argues every point —",
          choices: [
            { letter: "A", text: "should practice outdoors to stay calm" },
            { letter: "B", text: "is better at defense than at offense" },
            { letter: "C", text: "will always win the most points" },
            { letter: "D", text: "wastes effort on things that do not matter" }
          ],
          correct: "D"
        },
        {
          id: "cogent",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which phrase from sentence 12 best helps the reader understand the meaning of cogent?",
          choices: [
            { letter: "A", text: "by contrast" },
            { letter: "B", text: "the listener" },
            { letter: "C", text: "the conclusion" },
            { letter: "D", text: "almost unavoidable" }
          ],
          correct: "D"
        },
        {
          id: "herrera",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes Joaquin Herrera's words in sentence 20 mainly to —",
          choices: [
            { letter: "A", text: "show that seniors run practice instead of the coach" },
            { letter: "B", text: "put the meaning of articulate into plain words" },
            { letter: "C", text: "explain why the team's trophy shelf is modest" },
            { letter: "D", text: "argue that judges should ask more questions" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the feature about the Wexford debate team mainly organized?",
          choices: [
            { letter: "A", text: "as a timeline of the team's tournament season" },
            { letter: "B", text: "as a debate between the coach and her captain" },
            { letter: "C", text: "as a series of skills presented one at a time" },
            { letter: "D", text: "as a problem followed by several failed solutions" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-dsr-c45-blue-dot",
      family: "G9",
      title: "The Blue Dot and the Compass",
      kind: "Paired texts · 9.DSR",
      blurb: "A science article on phone navigation and memory, paired with a student's essay about her orienteering club.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Following the Blue Dot</strong></p>" +
        "<p>" + N(1) + "For most of history, finding your way meant building a picture of the world in your head. " +
        N(2) + "Travelers noticed landmarks, tracked the sun, and remembered which turns led where. " +
        N(3) + "Today, many people simply follow a blue dot on a phone screen, and some researchers wonder what that convenience costs. " +
        N(4) + "In several small studies, volunteers who explored a new neighborhood with turn-by-turn directions later had more trouble sketching a map of the area than volunteers who had used a paper map. " +
        N(5) + "The direction-followers reached their destinations just as quickly, but they seemed to notice less along the way. " +
        N(6) + "Scientists caution that these studies are limited. " +
        N(7) + "They involved small groups, and they measured memory over days rather than years. " +
        N(8) + "No one has shown that using a phone to navigate permanently weakens a person's sense of direction. " +
        N(9) + "Still, the researchers suggest a simple habit: before following directions, look at the whole route on the map first. " +
        N(10) + "Taking even a minute to see the big picture, they say, may help travelers remember where they have been and find their way back without help.</p>" +
        "<p><strong>Text 2 — What the Compass Taught Me, by Farah Nouri</strong></p>" +
        "<p>" + N(11) + "When I joined my school's orienteering club last fall, I had never held a compass. " +
        N(12) + "The rules seemed almost cruel: no phones, just a paper map, a compass, and a list of orange flags hidden somewhere in the state forest. " +
        N(13) + "On my first course I took a wrong trail and spent twenty minutes circling a pond that, according to my map, should have been behind me. " +
        N(14) + "I finished frustrated, muddy, and very late, and I was sure I would never be good at this. " +
        N(15) + "But something changed after a few meets. " +
        N(16) + "I started reading the land itself instead of just reading the lines on the map. " +
        N(17) + "A steep slope on the paper became a burning feeling in my legs, and a thin blue line became the creek I could hear before I could see it. " +
        N(18) + "Now, when my family drives somewhere new, I notice which way the river runs and where the hills rise. " +
        N(19) + "My phone still gets us there. " +
        N(20) + "The difference is that now I actually know where \"there\" is." +
        "</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea about finding one's way is supported by both texts?",
          choices: [
            { letter: "A", text: "Phones should be banned from outdoor activities." },
            { letter: "B", text: "Paying attention to the land helps people remember places." },
            { letter: "C", text: "Paper maps are faster than phone directions." },
            { letter: "D", text: "Most people lose their way at least once a year." }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "How does Text 1 mainly differ from Text 2 in its approach to navigation?",
          choices: [
            { letter: "A", text: "Text 1 reports cautious research, while Text 2 shares an experience." },
            { letter: "B", text: "Text 1 tells a story, while Text 2 lists scientific findings." },
            { letter: "C", text: "Text 1 praises phones, while Text 2 says phones are harmful." },
            { letter: "D", text: "Text 1 gives steps for using a compass, while Text 2 does not." }
          ],
          correct: "A"
        },
        {
          id: "careful",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from Text 1 shows the writer being careful not to overstate what the studies prove?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        },
        {
          id: "combine",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "A reader combining both texts could most reasonably conclude that Farah's experience —",
          choices: [
            { letter: "A", text: "proves that phones permanently weaken a sense of direction" },
            { letter: "B", text: "shows that the studies in Text 1 lasted too long" },
            { letter: "C", text: "contradicts everything the researchers found" },
            { letter: "D", text: "fits the finding about volunteers who used paper maps" }
          ],
          correct: "D"
        },
        {
          id: "two-sentences",
          sol: "9.DSR.C",
          sub: "9.DSR.C.1",
          stem: "Select TWO sentences, one from each text, that together best show that people who navigate actively notice more around them.",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "caution",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 6, the word caution most nearly means —",
          choices: [
            { letter: "A", text: "prove" },
            { letter: "B", text: "warn" },
            { letter: "C", text: "deny" },
            { letter: "D", text: "celebrate" }
          ],
          correct: "B"
        },
        {
          id: "pond",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Farah includes sentence 13 about circling the pond mainly to —",
          choices: [
            { letter: "A", text: "describe the most beautiful spot in the state forest" },
            { letter: "B", text: "explain why the club allows phones at later meets" },
            { letter: "C", text: "show how hard navigating with a paper map was at first" },
            { letter: "D", text: "suggest that the map she was given had been printed wrong" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-dsr-c45-new-format",
      family: "G9",
      title: "Slower Rounds",
      kind: "Paired texts · 9.DSR",
      blurb: "A debate coach's memo about a new round format, and a debater's blog post pushing back.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Memo from Coach Darnell Okoye to the Pinecrest Debate Team</strong></p>" +
        "<p>" + N(1) + "Starting in January, our regional league will use a new round format, and I want everyone to understand the change before our first winter practice. " +
        N(2) + "Each speech will be shorter, and the league will recruit parents and community members as judges instead of relying only on former debaters. " +
        N(3) + "The goal, according to league organizers, is to make rounds understandable to any thoughtful listener. " +
        N(4) + "In practice, this means we will spend less time reading long strings of evidence and more time explaining why that evidence matters. " +
        N(5) + "I know some of you worry that the change will reward smooth talkers over careful researchers. " +
        N(6) + "I disagree. " +
        N(7) + "Research still matters, but a judge who cannot follow your evidence cannot reward it. " +
        N(8) + "Our practices will add a new drill: each of you will explain your strongest argument to a family member in under two minutes, then report back on what confused them. " +
        N(9) + "Communicating with real audiences is a skill you will use long after high school, in jobs, in meetings, and in your own communities.</p>" +
        "<p><strong>Text 2 — Slower Isn't Simpler, a blog post by Pinecrest debater Sunita Raman</strong></p>" +
        "<p>" + N(10) + "When Coach Okoye announced the new format, half the team groaned, and I was the loudest. " +
        N(11) + "I have spent two years learning to fit six pieces of evidence into ninety seconds, and I am proud of how fast I can talk. " +
        N(12) + "Now a parent volunteer who has never seen a debate will decide my rounds. " +
        N(13) + "My worry is not that I will have to slow down. " +
        N(14) + "It is that a judge with no training may vote for whoever sounds most confident, even when that speaker's facts are wrong. " +
        N(15) + "Still, I tried Coach's drill last weekend. " +
        N(16) + "I explained my case about school start times to my uncle, who drives a delivery truck and has strong opinions about everything, especially traffic. " +
        N(17) + "He stopped me three times to ask what a statistic meant. " +
        N(18) + "By the third question, I realized that I did not fully understand it either. " +
        N(19) + "I still think the league should train its judges. " +
        N(20) + "But I am starting to suspect that my two years of speed may have hidden a few gaps." +
        "</p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "On which point would Coach Okoye and Sunita most likely agree by the end of the two texts?",
          choices: [
            { letter: "A", text: "Parent judges are better than trained judges." },
            { letter: "B", text: "Explaining evidence clearly is a useful skill." },
            { letter: "C", text: "The new format will make rounds easier to win." },
            { letter: "D", text: "Debaters should stop doing research for rounds." }
          ],
          correct: "B"
        },
        {
          id: "dismiss",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "In sentence 14, Sunita raises a concern that Coach Okoye directly rejects in which sentence of Text 1?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "B"
        },
        {
          id: "drill-effect",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Based on both texts, what was the most important effect of Coach Okoye's new drill on Sunita?",
          choices: [
            { letter: "A", text: "It convinced her to quit the debate team." },
            { letter: "B", text: "It made her uncle want to judge a round." },
            { letter: "C", text: "It revealed a gap in her own understanding." },
            { letter: "D", text: "It proved that her case was already perfect." }
          ],
          correct: "C"
        },
        {
          id: "league-goal",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to Text 1, why is the league changing its round format?",
          choices: [
            { letter: "A", text: "to make rounds understandable to any thoughtful listener" },
            { letter: "B", text: "to let teams read more evidence in each speech" },
            { letter: "C", text: "to reduce the number of tournaments each season" },
            { letter: "D", text: "to give former debaters a larger role as judges" }
          ],
          correct: "A"
        },
        {
          id: "uncle",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The details about Sunita's uncle in sentence 16 mainly serve to —",
          choices: [
            { letter: "A", text: "explain why Sunita chose school start times as a topic" },
            { letter: "B", text: "suggest that delivery drivers dislike debate" },
            { letter: "C", text: "show that Sunita's family disagrees with her coach" },
            { letter: "D", text: "show the kind of everyday listener the format aims to reach" }
          ],
          correct: "D"
        },
        {
          id: "kept-opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from Text 2 states an opinion that Sunita still holds after trying the drill?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "D"
        },
        {
          id: "text2-adds",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which statement best describes how Text 2 relates to Text 1?",
          choices: [
            { letter: "A", text: "Text 2 tests the coach's idea and partly comes around to it." },
            { letter: "B", text: "Text 2 repeats the memo's rules in simpler language." },
            { letter: "C", text: "Text 2 announces a decision that Text 1 opposes." },
            { letter: "D", text: "Text 2 rejects every point the coach makes." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-dsr-c45-try-it-night",
      family: "G9",
      title: "Try-It Night",
      kind: "Paired texts · 9.DSR",
      blurb: "A glass studio's flyer for beginners, and the journal of one beginner who signed up.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Flyer: Try-It Night at Ember Street Glassworks</strong></p>" +
        "<p>" + N(1) + "Have you ever wanted to work with hot glass? " +
        N(2) + "Our Try-It Night lets beginners ages 14 and up make a glass paperweight with help from a studio artist. " +
        N(3) + "Each session lasts ninety minutes and is limited to six students, so everyone gets a turn at the furnace. " +
        N(4) + "No experience is needed. " +
        N(5) + "Students will choose two colors, gather glass from the furnace with an artist's help, and shape their paperweight with simple tools. " +
        N(6) + "Safety comes first. " +
        N(7) + "Wear closed-toe shoes, long pants, and cotton clothing, and tie back long hair. " +
        N(8) + "Synthetic fabrics can melt in the heat, so leave polyester sports jerseys at home. " +
        N(9) + "Students under 18 must bring a permission form signed by a parent or guardian. " +
        N(10) + "Finished pieces must cool overnight in our annealing oven. " +
        N(11) + "Paperweights can be picked up the next day after noon, or we can ship them for a small fee. " +
        N(12) + "Sessions run every Thursday at 6:00 and 7:45 p.m. " +
        N(13) + "The cost is $45, which includes all materials. " +
        N(14) + "Sign up at the front desk or call the studio.</p>" +
        "<p><strong>Text 2 — From the journal of Mateo Delgado</strong></p>" +
        "<p>" + N(15) + "Abuela gave me a Try-It Night pass for my birthday, so tonight I finally made something out of glass. " +
        N(16) + "I almost wore my soccer jersey, but I read the flyer twice and switched to an old cotton T-shirt. " +
        N(17) + "Good thing, because standing near that furnace felt like opening an oven door and never closing it. " +
        N(18) + "The artist, a woman named Odile, held the pipe with me while I gathered, counting out loud so I would remember to keep turning. " +
        N(19) + "I picked blue and orange because they are our team colors. " +
        N(20) + "The best part was watching the two colors twist around each other every time I turned the pipe. " +
        N(21) + "The worst part was that I couldn't take my paperweight home. " +
        N(22) + "I wanted to show Abuela right away! " +
        N(23) + "Odile said that if I took it now, it would probably crack in the car before we even reached our street. " +
        N(24) + "So I have to wait until tomorrow afternoon. " +
        N(25) + "I am already saving up to go back next month and make one for Abuela, in her favorite green." +
        "</p>",
      claims: [
        {
          id: "synthetic",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the flyer, why should students avoid wearing synthetic fabrics?",
          choices: [
            { letter: "A", text: "They make it hard to hold the pipe." },
            { letter: "B", text: "They are not allowed by the studio's owner." },
            { letter: "C", text: "They can melt in the heat of the studio." },
            { letter: "D", text: "They trap sparks from the furnace." }
          ],
          correct: "C"
        },
        {
          id: "both-cool",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea about the finished paperweights appears in both texts?",
          choices: [
            { letter: "A", text: "They must stay at the studio to cool before going home." },
            { letter: "B", text: "They are shipped to every student for a small fee." },
            { letter: "C", text: "They can be made in any color a student wants." },
            { letter: "D", text: "They are usually given to family members as gifts." }
          ],
          correct: "A"
        },
        {
          id: "followed-rule",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which sentence from Text 2 shows that Mateo followed a rule from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 15" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 19" },
            { letter: "D", text: "Sentence 24" }
          ],
          correct: "B"
        },
        {
          id: "pickup",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Using both texts, the reader can conclude that Mateo will most likely pick up his paperweight —",
          choices: [
            { letter: "A", text: "on Thursday at 7:45 p.m." },
            { letter: "B", text: "next month with Abuela" },
            { letter: "C", text: "by mail later that week" },
            { letter: "D", text: "on Friday after noon" }
          ],
          correct: "D"
        },
        {
          id: "flyer-order",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the information in the Ember Street flyer mainly organized?",
          choices: [
            { letter: "A", text: "an invitation followed by practical details and rules" },
            { letter: "B", text: "a history of the studio from oldest to newest" },
            { letter: "C", text: "a comparison of glass with other art materials" },
            { letter: "D", text: "a problem in the studio and its proposed solution" }
          ],
          correct: "A"
        },
        {
          id: "tone-compare",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Compared with the tone of the flyer, the tone of Mateo's journal is more —",
          choices: [
            { letter: "A", text: "formal and instructive" },
            { letter: "B", text: "doubtful and gloomy" },
            { letter: "C", text: "distant and neutral" },
            { letter: "D", text: "personal and excited" }
          ],
          correct: "D"
        },
        {
          id: "flyer-purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "The main purpose of the Ember Street flyer is to —",
          choices: [
            { letter: "A", text: "warn readers about the dangers of glass furnaces" },
            { letter: "B", text: "invite beginners to a class and explain what to expect" },
            { letter: "C", text: "persuade readers that glass art is better than painting" },
            { letter: "D", text: "describe one student's first night at the studio" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c45-annealing",
      family: "G9",
      title: "Annealing",
      kind: "Poetry · 9.RL",
      blurb: "A poem about a glass oven that cools slowly, and a family that knows when to wait.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My mother's last vase of the day<br>" +
        L(2) + "does not go to the shelf. It goes to the annealer,<br>" +
        L(3) + "a gray box humming in the corner of the studio<br>" +
        L(4) + "like a refrigerator that forgot its purpose.<br>" +
        L(5) + "Inside, the heat will drop a few degrees an hour,<br>" +
        L(6) + "all night, while the glass forgets the fire<br>" +
        L(7) + "so slowly it never notices forgetting.<br>" +
        L(8) + "\"Hurry it,\" she tells me, \"and it keeps a secret crack,<br>" +
        L(9) + "a line you cannot see until the morning<br>" +
        L(10) + "someone sets it down too hard.\"<br>" +
        L(11) + "I think of my brother, home from his first semester,<br>" +
        L(12) + "slamming the car door after the argument at dinner,<br>" +
        L(13) + "how Dad said, \"Let him be,\" and turned the porch light on<br>" +
        L(14) + "and left it burning until two.<br>" +
        L(15) + "Some things are not finished when they look finished.<br>" +
        L(16) + "Some things need a warm room and a long dark<br>" +
        L(17) + "and no one tapping on the glass to ask<br>" +
        L(18) + "Are you all right yet? Are you ready?<br>" +
        L(19) + "In the morning my brother made pancakes for everyone.<br>" +
        L(20) + "In the morning the vase came out whole, and rang when I touched it." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Annealing\"?",
          choices: [
            { letter: "A", text: "Arguments in a family are best settled right away." },
            { letter: "B", text: "Handmade objects are more fragile than people think." },
            { letter: "C", text: "Older siblings rarely listen to their parents' advice." },
            { letter: "D", text: "People, like glass, may need time to settle after heat." }
          ],
          correct: "D"
        },
        {
          id: "refrigerator",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In lines 3 and 4, the annealer is compared to a refrigerator that forgot its purpose mainly to suggest that it —",
          choices: [
            { letter: "A", text: "is broken and needs to be replaced soon" },
            { letter: "B", text: "looks plain and ordinary but holds warmth" },
            { letter: "C", text: "is used to store the family's food" },
            { letter: "D", text: "makes a loud and annoying noise all night" }
          ],
          correct: "B"
        },
        {
          id: "connect",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.2",
          stem: "How do lines 11–14 connect to the description of the annealer in lines 1–10?",
          choices: [
            { letter: "A", text: "They show the family letting the brother cool slowly, like the glass." },
            { letter: "B", text: "They explain that the brother broke one of the mother's vases." },
            { letter: "C", text: "They change the subject to a memory that has no link to glass." },
            { letter: "D", text: "They suggest the brother wants to become a glassblower too." }
          ],
          correct: "A"
        },
        {
          id: "porch-light",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "The detail of the porch light left burning until two (lines 13–14) suggests that the father —",
          choices: [
            { letter: "A", text: "forgot to turn the light off before bed" },
            { letter: "B", text: "wants the brother to leave the house" },
            { letter: "C", text: "is quietly waiting and caring for his son" },
            { letter: "D", text: "is still angry about the argument at dinner" }
          ],
          correct: "C"
        },
        {
          id: "questions",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "The questions in line 18 mainly create a feeling of —",
          choices: [
            { letter: "A", text: "calm patience that helps the healing" },
            { letter: "B", text: "cheerful curiosity about the future" },
            { letter: "C", text: "hurried pressure the speaker warns against" },
            { letter: "D", text: "anger at the brother for slamming the door" }
          ],
          correct: "C"
        },
        {
          id: "speaker",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "The speaker of \"Annealing\" is best described as —",
          choices: [
            { letter: "A", text: "a younger family member watching both the glass and the brother" },
            { letter: "B", text: "the brother looking back on his first semester away" },
            { letter: "C", text: "the mother explaining her craft to a customer" },
            { letter: "D", text: "an outside observer who has never met the family" }
          ],
          correct: "A"
        },
        {
          id: "rang",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "The final line, in which the vase comes out whole and rings when touched, mainly creates a mood of —",
          choices: [
            { letter: "A", text: "lingering sadness" },
            { letter: "B", text: "growing suspense" },
            { letter: "C", text: "sharp disappointment" },
            { letter: "D", text: "relief and quiet hope" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c45-shop-class",
      family: "G9",
      title: "Shop Class, Last Period",
      kind: "Poetry · 9.RL",
      blurb: "A crooked birdhouse roof teaches one student to measure twice.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Last period, the shop smells like pencil shavings<br>" +
        L(2) + "and the warm dust of pine.<br>" +
        L(3) + "Mr. Oyelaran walks the rows with his hands behind his back,<br>" +
        L(4) + "saying \"Measure twice\" the way some people say hello.<br>" +
        L(5) + "I measure once. I cut.<br>" +
        L(6) + "The board comes up a finger short,<br>" +
        L(7) + "and the birdhouse roof sits crooked as a tilted hat.<br>" +
        L(8) + "Next to me, Priya sands her bookshelf<br>" +
        L(9) + "in long, slow strokes, like she is petting a cat<br>" +
        L(10) + "that might not stay.<br>" +
        L(11) + "The saws whine. The clamps squeeze.<br>" +
        L(12) + "Someone drops a hammer and everyone jumps, then laughs.<br>" +
        L(13) + "I measure the next board twice.<br>" +
        L(14) + "Then a third time, just to be sure.<br>" +
        L(15) + "The cut is clean, the corner square,<br>" +
        L(16) + "the new roof flat as a sleeping dog.<br>" +
        L(17) + "When the bell rings, I brush the sawdust from my sleeves<br>" +
        L(18) + "and carry the birdhouse out like something that can fly." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Shop Class, Last Period\"?",
          choices: [
            { letter: "A", text: "Teachers should not repeat the same advice." },
            { letter: "B", text: "Learning from a small mistake leads to better work." },
            { letter: "C", text: "Working next to friends makes any job go faster." },
            { letter: "D", text: "Birdhouses are harder to build than bookshelves." }
          ],
          correct: "B"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.1",
          stem: "In line 7, the phrase crooked as a tilted hat is an example of —",
          choices: [
            { letter: "A", text: "a simile" },
            { letter: "B", text: "a rhyme" },
            { letter: "C", text: "an allusion" },
            { letter: "D", text: "personification" }
          ],
          correct: "A"
        },
        {
          id: "hello",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "Line 4 says Mr. Oyelaran says Measure twice the way some people say hello. This suggests that he —",
          choices: [
            { letter: "A", text: "is unfriendly toward his students" },
            { letter: "B", text: "speaks too quietly to be heard" },
            { letter: "C", text: "forgets students' names easily" },
            { letter: "D", text: "repeats the advice out of habit" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "The sounds described in lines 11–12 mainly help create a mood that is —",
          choices: [
            { letter: "A", text: "gloomy and tense" },
            { letter: "B", text: "silent and lonely" },
            { letter: "C", text: "busy and lively" },
            { letter: "D", text: "angry and loud" }
          ],
          correct: "C"
        },
        {
          id: "change-line",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "Which line best shows that the speaker of the shop poem has changed how he or she works?",
          choices: [
            { letter: "A", text: "Line 5" },
            { letter: "B", text: "Line 8" },
            { letter: "C", text: "Line 13" },
            { letter: "D", text: "Line 17" }
          ],
          correct: "C"
        },
        {
          id: "fly",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In line 18, carrying the birdhouse out like something that can fly suggests that the speaker feels —",
          choices: [
            { letter: "A", text: "worried the birdhouse will fall" },
            { letter: "B", text: "eager to leave school quickly" },
            { letter: "C", text: "sure that birds will move in" },
            { letter: "D", text: "proud and lighthearted" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.2",
          stem: "How do lines 13–16 of the shop poem differ from lines 5–7?",
          choices: [
            { letter: "A", text: "Careful measuring replaces rushing, and the pieces fit." },
            { letter: "B", text: "The speaker stops working and watches Priya instead." },
            { letter: "C", text: "The teacher steps in and fixes the speaker's roof." },
            { letter: "D", text: "The speaker gives up on the birdhouse altogether." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c45-prep-time",
      family: "G9",
      title: "Four Minutes of Prep",
      kind: "Drama · 9.RL",
      blurb: "With four minutes before the final speech, two debate partners argue about cutting an argument one of them loves.",
      level: 3,
      passage:
        "<p><em>Setting: a school hallway outside Room 214 during a debate tournament. A phone timer on the windowsill reads 4:00. ADITI paces with a legal pad. BRUNO sits on the floor, surrounded by evidence folders.</em></p>" +
        "<p>" + N(1) + "<strong>ADITI</strong>: Four minutes. We need to decide what goes in the final speech. " +
        N(2) + "<strong>BRUNO</strong> <em>(not looking up)</em>: Everything goes in. All three arguments. " +
        N(3) + "<strong>ADITI</strong>: The judge didn't write a single word during our third argument. She put her pen down, Bruno. " +
        N(4) + "<strong>BRUNO</strong>: Maybe she was listening really hard. " +
        N(5) + "<strong>ADITI</strong> <em>(aside, to the audience)</em>: The third argument is the jobs argument. Bruno found that study himself at eleven o'clock on a school night. He printed it in color. <em>(She glances at the timer.)</em> He is going to hate me. " +
        N(6) + "<strong>BRUNO</strong>: Three minutes. " +
        N(7) + "<strong>ADITI</strong>: If I spend a minute defending jobs, I lose a minute on safety, and safety is where we're winning. " +
        N(8) + "<strong>BRUNO</strong> <em>(standing, a folder clutched to his chest)</em>: So we just drop it? Like it never happened? " +
        N(9) + "<strong>ADITI</strong>: We don't drop it. We trade it. I'll tell the judge we're giving up the jobs point because the safety point matters more. Judges respect that. " +
        N(10) + "<strong>BRUNO</strong>: That's a nice way of saying throw it away. " +
        N(11) + "<em>(A long pause. The timer beeps once at two minutes.)</em> " +
        N(12) + "<strong>BRUNO</strong> <em>(aside)</em>: She's right. I knew it when the judge put her pen down. I just wanted somebody to say the study mattered. " +
        N(13) + "<strong>ADITI</strong> <em>(softer)</em>: It was good research. It's the reason they spent their whole cross-examination on us instead of attacking safety. It already did its job. " +
        N(14) + "<strong>BRUNO</strong> <em>(opening the folder, pulling out one page, and handing it to her)</em>: Then use the one line that helps safety. Page two, the highlighted part. " +
        N(15) + "<strong>ADITI</strong> <em>(reading, then smiling)</em>: This is perfect. Why didn't you lead with this? " +
        N(16) + "<strong>BRUNO</strong>: Because I was too busy being proud of the other nine pages. " +
        N(17) + "<em>(The timer buzzes. They look at each other and walk into Room 214 together.)</em>" +
        "</p>",
      claims: [
        {
          id: "aditi-aside",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The playwright uses Aditi's aside in sentence 5 mainly to —",
          choices: [
            { letter: "A", text: "reveal why she dreads telling Bruno to cut his argument" },
            { letter: "B", text: "show that she has not read the jobs study herself" },
            { letter: "C", text: "explain the rules of the tournament to the audience" },
            { letter: "D", text: "suggest that she plans to keep the argument after all" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "Bruno's aside in sentence 12 creates dramatic irony because —",
          choices: [
            { letter: "A", text: "Aditi hears it and becomes angry with him" },
            { letter: "B", text: "the judge overhears the partners arguing" },
            { letter: "C", text: "the audience learns he agrees while he still argues" },
            { letter: "D", text: "it reveals that the study was never printed" }
          ],
          correct: "C"
        },
        {
          id: "clutched",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction in sentence 8, in which Bruno holds a folder clutched to his chest, mainly reveals that he —",
          choices: [
            { letter: "A", text: "is cold in the drafty hallway" },
            { letter: "B", text: "feels protective of the research he found" },
            { letter: "C", text: "is about to hand the folder to the judge" },
            { letter: "D", text: "wants to hide his notes from the other team" }
          ],
          correct: "B"
        },
        {
          id: "timer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the timer on the windowsill affect the conflict in the scene?",
          choices: [
            { letter: "A", text: "It distracts the partners from their disagreement." },
            { letter: "B", text: "It shows that the round has already ended." },
            { letter: "C", text: "It lets the judge know the team is ready." },
            { letter: "D", text: "It adds pressure to settle the disagreement fast." }
          ],
          correct: "D"
        },
        {
          id: "bruno-change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "Which statement best describes how Bruno changes during the scene?",
          choices: [
            { letter: "A", text: "He goes from trusting Aditi to doubting her judgment." },
            { letter: "B", text: "He moves from defending everything to offering what helps most." },
            { letter: "C", text: "He goes from wanting to win to not caring about the result." },
            { letter: "D", text: "He moves from feeling calm to feeling more and more nervous." }
          ],
          correct: "B"
        },
        {
          id: "tone-end",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the scene's ending (sentences 15–17) is best described as —",
          choices: [
            { letter: "A", text: "warm and united" },
            { letter: "B", text: "bitter and tense" },
            { letter: "C", text: "formal and distant" },
            { letter: "D", text: "sad and defeated" }
          ],
          correct: "A"
        },
        {
          id: "did-its-job",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "In sentence 13, Aditi says the research already did its job. She most likely means that the study —",
          choices: [
            { letter: "A", text: "has been graded by the judge already" },
            { letter: "B", text: "was copied by the team they are facing" },
            { letter: "C", text: "pulled the other team's attack away from safety" },
            { letter: "D", text: "will win the tournament for them by itself" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c45-woodshop-guide",
      family: "G9",
      title: "Teen Woodshop Guide",
      kind: "Functional text · 9.RI",
      blurb: "The rules, tool tags and reservation policy for a makerspace's teen woodshop.",
      level: 1,
      passage:
        "<p><strong>Maple Street Makerspace: Teen Woodshop Guide</strong></p>" +
        "<p>" + N(1) + "Welcome to the Teen Woodshop, open to students ages 13 to 18 on Tuesdays and Thursdays from 3:30 to 6:00 p.m. " +
        N(2) + "Please read this guide before your first visit. " +
        N(3) + "Every new member must read it and then complete a short safety tour with a staff member.</p>" +
        "<p><strong>Before You Start.</strong> " + N(4) + "Sign in at the front desk and pick up a shop apron and safety glasses. " +
        N(5) + "Safety glasses must be worn at all times in the shop, even if you are only sanding or watching. " +
        N(6) + "Tie back long hair, remove dangling jewelry, and roll up loose sleeves, because spinning blades and bits can catch fabric in an instant. " +
        N(7) + "Closed-toe shoes are required; sandals and slides are not allowed past the yellow line.</p>" +
        "<p><strong>Using the Tools.</strong> " + N(8) + "Hand tools such as saws, chisels, and planes may be used after the safety tour. " +
        N(9) + "Power tools are divided into two groups. " +
        N(10) + "Green-tagged tools, including the drill press and the sanders, may be used once a staff member has watched you use each one correctly. " +
        N(11) + "Red-tagged tools, including the table saw and the router, may be used only while a staff member stands beside you for the entire cut. " +
        N(12) + "Never adjust a blade or bit while a machine is plugged in.</p>" +
        "<p><strong>Cleaning Up.</strong> " + N(13) + "Shop time ends at 5:45 so that everyone can clean up before closing. " +
        N(14) + "Return tools to their outlined spots on the pegboard, sweep your area, and empty the dust bin if it is more than half full. " +
        N(15) + "Unfinished projects may be stored on the labeled shelves for up to two weeks. " +
        N(16) + "Projects left longer than that will be moved to the free-wood bin for other members to use.</p>" +
        "<p><strong>Reserving Time.</strong> " + N(17) + "Because the shop holds only twelve members at once, reserve each session online or on the clipboard by the door. " +
        N(18) + "If you cannot attend, cancel at least a day ahead so that someone on the waiting list can take your spot. " +
        N(19) + "Members who miss three reserved sessions without canceling will lose their reservation privileges for one month.</p>" +
        "<p>" + N(20) + "Questions? " +
        N(21) + "Ask any staff member in a green vest. " +
        N(22) + "We would much rather answer a question than repair an injury." +
        "</p>",
      claims: [
        {
          id: "table-saw",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the guide, under what condition may a member use the table saw?",
          choices: [
            { letter: "A", text: "after a staff member has watched one correct cut" },
            { letter: "B", text: "only while a staff member stands beside the member" },
            { letter: "C", text: "any time after finishing the safety tour" },
            { letter: "D", text: "only on Thursdays before 5:45 p.m." }
          ],
          correct: "B"
        },
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the Teen Woodshop Guide?",
          choices: [
            { letter: "A", text: "Members must follow safety and sharing rules to use the shop." },
            { letter: "B", text: "Power tools are too dangerous for teenagers to use alone." },
            { letter: "C", text: "The makerspace needs more volunteers in green vests." },
            { letter: "D", text: "Unfinished projects are given away after two weeks." }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How do the bold headings help organize the woodshop guide?",
          choices: [
            { letter: "A", text: "They list the tools from most to least dangerous." },
            { letter: "B", text: "They show the steps for building one project." },
            { letter: "C", text: "They group related rules under separate topics." },
            { letter: "D", text: "They compare the woodshop with other rooms." }
          ],
          correct: "C"
        },
        {
          id: "fair-share",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which TWO sentences most directly help other members get a chance to use the shop? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "because",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The guide gives the reason for rolling up loose sleeves in sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "help members understand why the rule matters" },
            { letter: "B", text: "describe how the drill press works step by step" },
            { letter: "C", text: "warn members that jewelry may be stolen" },
            { letter: "D", text: "explain why aprons are given out at the desk" }
          ],
          correct: "A"
        },
        {
          id: "privileges",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 19, the word privileges most nearly means —",
          choices: [
            { letter: "A", text: "fees paid to the shop" },
            { letter: "B", text: "special rights that are granted" },
            { letter: "C", text: "tools kept on the pegboard" },
            { letter: "D", text: "warnings given by the staff" }
          ],
          correct: "B"
        },
        {
          id: "attitude",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the guide expresses an attitude rather than stating a rule or fact?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-c45-keep-the-compass",
      family: "G9",
      title: "Keep the Compass in the Classroom",
      kind: "Argument · 9.RI",
      blurb: "An opinion column arguing that every student should learn to read a paper map before graduating.",
      level: 2,
      passage:
        "<p><strong>Keep the Compass in the Classroom</strong> — an opinion column by Renata Kowalczyk, social studies teacher</p>" +
        "<p>" + N(1) + "Ask a group of ninth graders to point north, and many will reach for their phones. " +
        N(2) + "That reflex is understandable, but it reveals a gap our schools should close: students should learn to read a paper map before they graduate.</p>" +
        "<p>" + N(3) + "The first reason is practical. " +
        N(4) + "Phones fail. " +
        N(5) + "Batteries die, signals vanish in mountains and rural valleys, and storms can knock out service across an entire region. " +
        N(6) + "During last winter's ice storm, the county emergency office reported dozens of calls from drivers who were lost on back roads after their navigation apps lost signal. " +
        N(7) + "A folded road map in the glove box would have cost them two dollars.</p>" +
        "<p>" + N(8) + "The second reason is about thinking. " +
        N(9) + "Reading a map requires a student to connect symbols to real places, estimate distances using a scale, and plan a route before taking the first step. " +
        N(10) + "These are the same skills students use in geometry, science, and even history, where understanding why a trade route went one way rather than another depends on the land itself.</p>" +
        "<p>" + N(11) + "Some will argue that map reading is outdated, like learning to use a typewriter. " +
        N(12) + "It is a fair concern, since class time is limited and new subjects compete for it. " +
        N(13) + "But map skills do not require a new course. " +
        N(14) + "A single two-week unit in ninth-grade social studies, followed by an orienteering day on school grounds, would cover the basics. " +
        N(15) + "Several schools in neighboring counties have already tried this approach, and teachers there report that students rank the outdoor day among their favorite lessons of the year.</p>" +
        "<p>" + N(16) + "No one is asking students to give up their phones. " +
        N(17) + "Digital maps are fast, convenient, and often brilliant. " +
        N(18) + "The point is that students should not be helpless when the screen goes dark. " +
        N(19) + "A person who can read a map understands where they are, not just where to turn next. " +
        N(20) + "That kind of understanding is worth two weeks of any school year." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which sentence best states the central claim of the column about paper maps?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence provides the strongest evidence for the claim in sentence 4 that phones fail?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "A"
        },
        {
          id: "counter",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "The author includes sentences 11 and 12 mainly to —",
          choices: [
            { letter: "A", text: "admit that her argument has no real support" },
            { letter: "B", text: "explain how typewriters were once taught" },
            { letter: "C", text: "acknowledge an opposing view before answering it" },
            { letter: "D", text: "suggest that new subjects should be removed" }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the map-reading column states an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "D"
        },
        {
          id: "reasons",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How does the author organize sentences 3–10 of the column?",
          choices: [
            { letter: "A", text: "by telling one long story in time order" },
            { letter: "B", text: "by comparing paper maps with globes" },
            { letter: "C", text: "by giving two reasons, each with a signal phrase" },
            { letter: "D", text: "by listing steps for reading a road map" }
          ],
          correct: "C"
        },
        {
          id: "helpless",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written unprepared instead of helpless in sentence 18. Compared with unprepared, the word helpless suggests a situation that is —",
          choices: [
            { letter: "A", text: "more serious and frightening" },
            { letter: "B", text: "more humorous and silly" },
            { letter: "C", text: "less likely to ever happen" },
            { letter: "D", text: "easier to fix with practice" }
          ],
          correct: "A"
        },
        {
          id: "schedule",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the author, how could schools fit map skills into a crowded schedule?",
          choices: [
            { letter: "A", text: "by replacing geometry with a map course" },
            { letter: "B", text: "by assigning map reading as homework only" },
            { letter: "C", text: "by teaching it in the final year of school" },
            { letter: "D", text: "with a two-week unit and an outdoor day" }
          ],
          correct: "D"
        }
      ]
    }
    /* END PACKS */
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
