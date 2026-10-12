/* SOL Labyrinth — New Jersey grade 5 (NJSLA-ELA) literature packs: four short
 * stories, two poems and two drama scenes. Original text only; no published
 * work is quoted or imitated. Loaded after content.js; pushes into HEIST_PACKS. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── STORIES ───────────────────────── */
    {
      id: "nj5-rl-referee",
      family: "NJ5",
      title: "The Whistle",
      kind: "Literature · RL.5",
      blurb: "A backyard soccer game, a whistle, and a call nobody wants to make.",
      level: 1,
      passage:
        "<p>" + N(1) + "Leila did not want the whistle. " +
        N(2) + "Her neighbor Dev held it out anyway. " +
        N(3) + "\"You're the only one everybody trusts,\" he said. " +
        N(4) + "The backyard game was Dev's team against her little brother Sam's team. " +
        N(5) + "Leila hung the whistle around her neck and felt it grow heavy. " +
        N(6) + "For most of the game, the job was easy. " +
        N(7) + "She called a ball out of bounds. " +
        N(8) + "She stopped play when Sam's friend Rosa tripped on a root. " +
        N(9) + "Nobody argued with her.</p>" +
        "<p>" + N(10) + "Then, with the score tied, Sam raced toward the goal. " +
        N(11) + "The ball bounced up and hit his hand before he kicked it in. " +
        N(12) + "Both teams turned to look at Leila. " +
        N(13) + "Sam's face was bright and hopeful. " +
        N(14) + "Leila's stomach twisted. " +
        N(15) + "She could pretend she had not seen it. " +
        N(16) + "Instead, she blew the whistle. " +
        N(17) + "\"Handball,\" she said. " +
        N(18) + "\"No goal.\" " +
        N(19) + "Sam's mouth dropped open, and he stomped off to the fence. " +
        N(20) + "The game ended in a tie.</p>" +
        "<p>" + N(21) + "Later, Sam sat down beside her on the porch steps. " +
        N(22) + "He was quiet for a long time. " +
        N(23) + "\"It did hit my hand,\" he finally said. " +
        N(24) + "\"I would have been mad if you let it go.\" " +
        N(25) + "Leila looked at the whistle in her lap. " +
        N(26) + "It did not feel heavy anymore.</p>",
      claims: [
        {
          id: "theme",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "theme-ev",
          stem: "What is a theme of the story?",
          choices: [
            { letter: "A", text: "Younger kids should not play against older kids." },
            { letter: "B", text: "Being fair can be hard when it costs someone you love." },
            { letter: "C", text: "Backyard games are more fun without a referee." },
            { letter: "D", text: "Winning matters more than how a game is played." }
          ],
          correct: "B"
        },
        {
          id: "theme-ev",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence from the story best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 7: She called a ball out of bounds." },
            { letter: "B", text: "Sentence 12: Both teams turned to look at Leila." },
            { letter: "C", text: "Sentence 15: She could pretend she had not seen it." },
            { letter: "D", text: "Sentence 20: The game ended in a tie." }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "ending-ev",
          stem: "How does Leila most likely feel at the end of the story?",
          choices: [
            { letter: "A", text: "proud that Dev's team did not lose" },
            { letter: "B", text: "angry that Sam stomped off to the fence" },
            { letter: "C", text: "worried that Dev will not ask her again" },
            { letter: "D", text: "relieved that Sam understands her call" }
          ],
          correct: "D"
        },
        {
          id: "ending-ev",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best shows why Leila feels this way?",
          choices: [
            { letter: "A", text: "Sentence 19: Sam's mouth dropped open, and he stomped off to the fence." },
            { letter: "B", text: "Sentence 21: Later, Sam sat down beside her on the porch steps." },
            { letter: "C", text: "Sentence 24: \"I would have been mad if you let it go.\"" },
            { letter: "D", text: "Sentence 26: It did not feel heavy anymore." }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 14, the phrase Leila's stomach twisted shows that Leila feels —",
          choices: [
            { letter: "A", text: "nervous about what to do" },
            { letter: "B", text: "hungry after the long game" },
            { letter: "C", text: "sick from running in the sun" },
            { letter: "D", text: "excited that the score is tied" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "RL.PP.5.5",
          strand: "RL",
          stem: "From which point of view is the story told?",
          choices: [
            { letter: "A", text: "A narrator outside the story tells what Leila thinks and feels." },
            { letter: "B", text: "Leila tells the story herself, using the words I and me." },
            { letter: "C", text: "Sam tells the story to explain why he was upset about the call." },
            { letter: "D", text: "A narrator outside the story tells what Dev thinks and feels." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "nj5-rl-chess-mystery",
      family: "NJ5",
      title: "One Move a Day",
      kind: "Literature · RL.5",
      blurb: "Somebody is moving the library chess pieces, one move a day.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every afternoon, Tomas stopped at the library on his way home. " +
        N(2) + "He liked to play chess against himself at the table by the tall window. " +
        N(3) + "On Friday, he left the board set up in the middle of a game. " +
        N(4) + "On Monday, he noticed something odd. " +
        N(5) + "A black knight had moved. " +
        N(6) + "Tomas was sure he had not touched it. " +
        N(7) + "He made his own move and went home, wondering. " +
        N(8) + "On Tuesday, a black bishop had moved. " +
        N(9) + "Somebody was playing against him, one move a day.</p>" +
        "<p>" + N(10) + "Tomas started writing each move in his notebook. " +
        N(11) + "First he watched Mrs. Bell, the librarian. " +
        N(12) + "But she locked the doors at eight and went straight home. " +
        N(13) + "Then he watched a boy who read comics near the table. " +
        N(14) + "The boy never even glanced at the pieces. " +
        N(15) + "On Thursday, Tomas noticed something new. " +
        N(16) + "The floor around the table shone like a mirror every morning. " +
        N(17) + "By afternoon, it was dull with footprints. " +
        N(18) + "Someone polished it after the doors were locked.</p>" +
        "<p>" + N(19) + "That afternoon, Tomas wrote a note and slipped it under the board. " +
        N(20) + "It said, \"Who are you? Your move.\" " +
        N(21) + "Friday morning, the black queen had moved. " +
        N(22) + "Beside the board lay a folded paper. " +
        N(23) + "\"I mop the floors at night,\" it said. " +
        N(24) + "\"Chess keeps me company. Good game so far. — Walt.\" " +
        N(25) + "Tomas grinned and moved his rook. " +
        N(26) + "He had never met Walt. " +
        N(27) + "Still, he had found a partner.</p>",
      claims: [
        {
          id: "solve",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "solve-ev",
          stem: "How does Tomas figure out who is moving the pieces?",
          choices: [
            { letter: "A", text: "He notices a clue and then leaves a note under the board." },
            { letter: "B", text: "He asks Mrs. Bell to stay late and watch the board." },
            { letter: "C", text: "He hides in the library after the doors are locked." },
            { letter: "D", text: "He follows the boy with the comics out of the library." }
          ],
          correct: "A"
        },
        {
          id: "solve-ev",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best shows the clue that leads Tomas to the answer?",
          choices: [
            { letter: "A", text: "Sentence 12: But she locked the doors at eight and went straight home." },
            { letter: "B", text: "Sentence 14: The boy never even glanced at the pieces." },
            { letter: "C", text: "Sentence 18: Someone polished it after the doors were locked." },
            { letter: "D", text: "Sentence 22: Beside the board lay a folded paper." }
          ],
          correct: "C"
        },
        {
          id: "lesson",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "lesson-ev",
          stem: "Which lesson can a reader learn from this story?",
          choices: [
            { letter: "A", text: "Libraries should stay open all night long." },
            { letter: "B", text: "It is best to play chess by yourself." },
            { letter: "C", text: "Mysteries are always solved by grown-ups." },
            { letter: "D", text: "A friend can turn up in an unexpected way." }
          ],
          correct: "D"
        },
        {
          id: "lesson-ev",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports this lesson?",
          choices: [
            { letter: "A", text: "Sentence 2: He liked to play chess against himself at the table by the tall window." },
            { letter: "B", text: "Sentence 9: Somebody was playing against him, one move a day." },
            { letter: "C", text: "Sentence 20: It said, \"Who are you? Your move.\"" },
            { letter: "D", text: "Sentence 27: Still, he had found a partner." }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 14, the word glanced most nearly means —",
          choices: [
            { letter: "A", text: "pointed at" },
            { letter: "B", text: "shouted at" },
            { letter: "C", text: "looked quickly" },
            { letter: "D", text: "walked slowly" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "How does the author organize the events of the story?",
          choices: [
            { letter: "A", text: "by comparing Tomas with Walt" },
            { letter: "B", text: "by telling what happens on each day in order" },
            { letter: "C", text: "by starting at the ending and looking back" },
            { letter: "D", text: "by listing many ways to solve a problem" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "nj5-rl-firefly",
      family: "NJ5",
      title: "The Firefly Who Saved Her Light",
      kind: "Literature · RL.5",
      blurb: "A fable about a firefly who keeps her light for one big night.",
      level: 2,
      passage:
        "<p>" + N(1) + "Long ago, in a meadow by a slow river, there lived a young firefly named Lumi. " +
        N(2) + "Every summer evening, the fireflies rose from the grass and filled the air with light. " +
        N(3) + "But Lumi kept her light switched off. " +
        N(4) + "\"I am saving it,\" she told her friend Bram. " +
        N(5) + "\"On the night of the Great Moon, I will shine brighter than anyone.\" " +
        N(6) + "Bram blinked his small golden light. " +
        N(7) + "\"But the meadow is dark where you fly,\" he said. " +
        N(8) + "\"The frogs cannot see the path. " +
        N(9) + "The moths bump into the reeds.\" " +
        N(10) + "Lumi shrugged her wings. " +
        N(11) + "\"They will thank me later,\" she said.</p>" +
        "<p>" + N(12) + "So the summer passed. " +
        N(13) + "Bram lit the path for the frogs each night. " +
        N(14) + "He lit the reeds for the moths. " +
        N(15) + "His light was small, but the meadow creatures learned to look for it. " +
        N(16) + "At last the Great Moon rose, round and silver. " +
        N(17) + "Lumi flew to the highest cattail and switched on her light. " +
        N(18) + "It flickered once, then twice, and went dim. " +
        N(19) + "She had saved it so long that it had forgotten how to burn.</p>" +
        "<p>" + N(20) + "Below her, the meadow was already glowing. " +
        N(21) + "Bram's light led a line of fireflies across the water. " +
        N(22) + "Lumi drifted down beside him, small and quiet. " +
        N(23) + "\"Fly with us,\" he said. " +
        N(24) + "\"Light gets stronger when you use it.\" " +
        N(25) + "Lumi blinked, faint at first. " +
        N(26) + "Then, little by little, she glowed.</p>",
      claims: [
        {
          id: "moral",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "moral-ev",
          stem: "Which lesson does the fable teach?",
          choices: [
            { letter: "A", text: "It is wise to save your best effort for a big event." },
            { letter: "B", text: "A gift grows stronger when it is used and shared." },
            { letter: "C", text: "Small creatures should stay away from dark places." },
            { letter: "D", text: "The brightest light always earns the most praise." }
          ],
          correct: "B"
        },
        {
          id: "moral-ev",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence from the fable best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 5: \"On the night of the Great Moon, I will shine brighter than anyone.\"" },
            { letter: "B", text: "Sentence 12: So the summer passed." },
            { letter: "C", text: "Sentence 16: At last the Great Moon rose, round and silver." },
            { letter: "D", text: "Sentence 24: \"Light gets stronger when you use it.\"" }
          ],
          correct: "D"
        },
        {
          id: "contrast",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "contrast-ev",
          stem: "How are Lumi and Bram different at the start of the fable?",
          choices: [
            { letter: "A", text: "Lumi is older and stronger than Bram." },
            { letter: "B", text: "Bram wants to shine on the Great Moon, but Lumi does not." },
            { letter: "C", text: "Bram uses his light to help others, but Lumi keeps hers for herself." },
            { letter: "D", text: "Lumi lives near the river, but Bram lives in the reeds." }
          ],
          correct: "C"
        },
        {
          id: "contrast-ev",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which pair of sentences best shows this difference?",
          choices: [
            { letter: "A", text: "Sentences 1 and 2" },
            { letter: "B", text: "Sentences 3 and 13" },
            { letter: "C", text: "Sentences 6 and 10" },
            { letter: "D", text: "Sentences 16 and 17" }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 18, the word flickered most nearly means —",
          choices: [
            { letter: "A", text: "blinked in an unsteady way" },
            { letter: "B", text: "burned in a steady way" },
            { letter: "C", text: "grew much bigger" },
            { letter: "D", text: "floated far away" }
          ],
          correct: "A"
        },
        {
          id: "why",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "The author includes sentences 13–15 mainly to —",
          choices: [
            { letter: "A", text: "show what Bram does while Lumi waits" },
            { letter: "B", text: "explain why the frogs fear the moths" },
            { letter: "C", text: "describe the night of the Great Moon" },
            { letter: "D", text: "tell how Lumi learned to fly" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "nj5-rl-sock-dragon",
      family: "NJ5",
      title: "The Dragon in the Sock Drawer",
      kind: "Literature · RL.5",
      blurb: "Hana's socks keep vanishing. The reason is curled up in her drawer.",
      level: 1,
      passage:
        "<p>" + N(1) + "Hana was sure her socks were disappearing. " +
        N(2) + "Every week, another one vanished. " +
        N(3) + "She had a drawer full of socks with no partners. " +
        N(4) + "On Saturday, she decided to solve the problem herself. " +
        N(5) + "She emptied the drawer onto her bed. " +
        N(6) + "At the very bottom, curled in a ball, was a dragon. " +
        N(7) + "It was no bigger than a hamster. " +
        N(8) + "Its scales were green, and its belly was fuzzy with lint.</p>" +
        "<p>" + N(9) + "\"Please don't scream,\" the dragon said. " +
        N(10) + "Hana did not scream. " +
        N(11) + "She sat down very slowly. " +
        N(12) + "\"Are you eating my socks?\" she asked. " +
        N(13) + "The dragon looked at the floor. " +
        N(14) + "\"Only the fuzzy ones,\" it said. " +
        N(15) + "\"They are soft, and I get cold at night.\" " +
        N(16) + "Hana thought about that. " +
        N(17) + "She thought about her drawer of lonely socks. " +
        N(18) + "She thought about how cold the house got in winter.</p>" +
        "<p>" + N(19) + "Then she went to the hall closet. " +
        N(20) + "She came back with an old wool mitten. " +
        N(21) + "\"This is warmer than a sock,\" she said. " +
        N(22) + "\"You can sleep in it if you leave my socks alone.\" " +
        N(23) + "The dragon climbed inside the mitten. " +
        N(24) + "Only its nose stuck out. " +
        N(25) + "\"Deal,\" it said, and a tiny puff of smoke curled up. " +
        N(26) + "Hana never lost another sock. " +
        N(27) + "But some mornings, the mitten was warm, and her drawer smelled a little like toast.</p>",
      claims: [
        {
          id: "summary",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "summary-ev",
          stem: "What is this story mostly about?",
          choices: [
            { letter: "A", text: "a girl who learns to knit warm mittens" },
            { letter: "B", text: "a girl who makes a deal with a tiny dragon" },
            { letter: "C", text: "a dragon who is afraid of a young girl" },
            { letter: "D", text: "a family that loses socks every winter" }
          ],
          correct: "B"
        },
        {
          id: "summary-ev",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 5: She emptied the drawer onto her bed." },
            { letter: "B", text: "Sentence 12: \"Are you eating my socks?\" she asked." },
            { letter: "C", text: "Sentence 22: \"You can sleep in it if you leave my socks alone.\"" },
            { letter: "D", text: "Sentence 26: Hana never lost another sock." }
          ],
          correct: "C"
        },
        {
          id: "react",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "react-ev",
          stem: "How does Hana react when she finds the dragon?",
          choices: [
            { letter: "A", text: "She runs to tell her parents." },
            { letter: "B", text: "She laughs and picks it up." },
            { letter: "C", text: "She pushes the socks back into the drawer." },
            { letter: "D", text: "She stays calm and asks it a question." }
          ],
          correct: "D"
        },
        {
          id: "react-ev",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best shows how Hana reacts?",
          choices: [
            { letter: "A", text: "Sentence 3: She had a drawer full of socks with no partners." },
            { letter: "B", text: "Sentence 11: She sat down very slowly." },
            { letter: "C", text: "Sentence 20: She came back with an old wool mitten." },
            { letter: "D", text: "Sentence 24: Only its nose stuck out." }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 2, the word vanished most nearly means —",
          choices: [
            { letter: "A", text: "disappeared" },
            { letter: "B", text: "shrank" },
            { letter: "C", text: "got dirty" },
            { letter: "D", text: "came back" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "The author ends the story with sentence 27 mainly to —",
          choices: [
            { letter: "A", text: "hint that the dragon still lives in the drawer" },
            { letter: "B", text: "explain how Hana makes toast for breakfast" },
            { letter: "C", text: "show that the socks have started to vanish again" },
            { letter: "D", text: "prove that the dragon has flown away for good" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── POEMS ───────────────────────── */
    {
      id: "nj5-rl-poem-kite-b",
      family: "NJ5",
      title: "Holding the String",
      kind: "Poetry · RL.5",
      blurb: "A poem about a kite, a grandmother, and a string held too tight.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The wind woke up before we did,<br>" +
        L(2) + "rattling the windows, calling us out.<br>" +
        L(3) + "Nana and I climbed the hill with the kite,<br>" +
        L(4) + "red as a stop sign, folded like a letter.<br>" +
        L(5) + "She held it high. I held the string.<br>" +
        L(6) + "\"Run,\" she said, and I ran,<br>" +
        L(7) + "and the kite jumped up and grabbed the sky.<br>" +
        L(8) + "It pulled like a dog that smells the park.<br>" +
        L(9) + "My hands wanted to hold on tight.<br>" +
        L(10) + "\"Let it out,\" said Nana. \"Give it room.\"<br>" +
        L(11) + "So I let the string slide, a little, then more,<br>" +
        L(12) + "and the kite climbed higher than the oak,<br>" +
        L(13) + "a small red flag in a big blue field.<br>" +
        L(14) + "The string hummed. My hands stopped shaking.<br>" +
        L(15) + "Nana smiled and did not say a word.<br>" +
        L(16) + "Some things fly better when you loosen your grip." +
        "</p>",
      claims: [
        {
          id: "message",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "message-ev",
          stem: "Which statement best expresses the message of the poem?",
          choices: [
            { letter: "A", text: "Kites fly best from the top of a windy hill." },
            { letter: "B", text: "Letting go a little can help something rise." },
            { letter: "C", text: "Grandparents know more about wind than children do." },
            { letter: "D", text: "Running fast is the real secret to flying a kite." }
          ],
          correct: "B"
        },
        {
          id: "message-ev",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which line from the poem best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Line 2: rattling the windows, calling us out." },
            { letter: "B", text: "Line 7: and the kite jumped up and grabbed the sky." },
            { letter: "C", text: "Line 12: and the kite climbed higher than the oak," },
            { letter: "D", text: "Line 16: Some things fly better when you loosen your grip." }
          ],
          correct: "D"
        },
        {
          id: "simile",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In line 8, the poet compares the kite to a dog that smells the park to show that the kite —",
          choices: [
            { letter: "A", text: "is dragging along the wet grass" },
            { letter: "B", text: "is afraid of the tall oak tree" },
            { letter: "C", text: "is tugging eagerly to get away" },
            { letter: "D", text: "is making a loud noise in the wind" }
          ],
          correct: "C"
        },
        {
          id: "change",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "change-ev",
          stem: "How does the speaker change during the poem?",
          choices: [
            { letter: "A", text: "from bored to excited" },
            { letter: "B", text: "from tense to relaxed" },
            { letter: "C", text: "from proud to embarrassed" },
            { letter: "D", text: "from cold to warm" }
          ],
          correct: "B"
        },
        {
          id: "change-ev",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which line best shows this change?",
          choices: [
            { letter: "A", text: "Line 3: Nana and I climbed the hill with the kite," },
            { letter: "B", text: "Line 9: My hands wanted to hold on tight." },
            { letter: "C", text: "Line 14: The string hummed. My hands stopped shaking." },
            { letter: "D", text: "Line 15: Nana smiled and did not say a word." }
          ],
          correct: "C"
        },
        {
          id: "pov",
          sol: "RL.PP.5.5",
          strand: "RL",
          stem: "How does telling the poem from the child's point of view help the reader?",
          choices: [
            { letter: "A", text: "It lets the reader feel the pull of the string in the speaker's hands." },
            { letter: "B", text: "It explains how Nana learned to fly kites when she was young." },
            { letter: "C", text: "It shows what the kite can see from high above the oak." },
            { letter: "D", text: "It tells the reader exactly how fast the wind is blowing." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "nj5-rl-poem-train",
      family: "NJ5",
      title: "The Night Train",
      kind: "Poetry · RL.5",
      blurb: "A poem about a train that never stops in the speaker's town.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "At night, when the house has said its last word,<br>" +
        L(2) + "I hear the train a mile off, low and long,<br>" +
        L(3) + "a sound like someone humming in another room.<br>" +
        L(4) + "It doesn't stop here. It never has.<br>" +
        L(5) + "Our town is a page it turns without reading.<br>" +
        L(6) + "Still, I lie in the dark and count the cars,<br>" +
        L(7) + "each one a rumor of somewhere else:<br>" +
        L(8) + "a city with lights that stay up late,<br>" +
        L(9) + "a bridge, a field, an ocean I have not met.<br>" +
        L(10) + "The whistle bends around the hills and fades.<br>" +
        L(11) + "The clock takes back the quiet, tick by tick.<br>" +
        L(12) + "I used to think the train was leaving me.<br>" +
        L(13) + "Now I think it's keeping a promise,<br>" +
        L(14) + "passing every night to say the roads are real,<br>" +
        L(15) + "that the map in my head has edges I can reach.<br>" +
        L(16) + "I fall asleep with my shoes by the door." +
        "</p>",
      claims: [
        {
          id: "shift",
          sol: "RL.TS.5.4",
          strand: "RL",
          partB: "shift-ev",
          stem: "How does the speaker's feeling about the train change from the beginning of the poem to the end?",
          choices: [
            { letter: "A", text: "from finding it noisy to finding it peaceful" },
            { letter: "B", text: "from feeling left behind to feeling hopeful" },
            { letter: "C", text: "from wanting to ride it to wanting it to stop" },
            { letter: "D", text: "from fearing the dark to enjoying the dark" }
          ],
          correct: "B"
        },
        {
          id: "shift-ev",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which line best shows the speaker's feeling at the end of the poem?",
          choices: [
            { letter: "A", text: "Line 4: It doesn't stop here. It never has." },
            { letter: "B", text: "Line 10: The whistle bends around the hills and fades." },
            { letter: "C", text: "Line 11: The clock takes back the quiet, tick by tick." },
            { letter: "D", text: "Line 16: I fall asleep with my shoes by the door." }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "theme-ev",
          stem: "Which idea is a theme of the poem?",
          choices: [
            { letter: "A", text: "Trains are the fastest way to reach a big city." },
            { letter: "B", text: "Night sounds keep people from falling asleep." },
            { letter: "C", text: "Knowing the world is wide can make a person feel hopeful." },
            { letter: "D", text: "Small towns are soon forgotten by big cities." }
          ],
          correct: "C"
        },
        {
          id: "theme-ev",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which line from the poem best supports this theme?",
          choices: [
            { letter: "A", text: "Line 2: I hear the train a mile off, low and long," },
            { letter: "B", text: "Line 3: a sound like someone humming in another room." },
            { letter: "C", text: "Line 11: The clock takes back the quiet, tick by tick." },
            { letter: "D", text: "Line 15: that the map in my head has edges I can reach." }
          ],
          correct: "D"
        },
        {
          id: "metaphor",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In line 5, the speaker says the town is a page the train turns without reading. This means the train —",
          choices: [
            { letter: "A", text: "passes the town without paying attention to it" },
            { letter: "B", text: "carries newspapers and books to the city" },
            { letter: "C", text: "moves so fast that the pages of books flutter" },
            { letter: "D", text: "stops in the town only long enough to load paper" }
          ],
          correct: "A"
        },
        {
          id: "rumor",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In line 7, the word rumor most nearly means —",
          choices: [
            { letter: "A", text: "a hint of something not yet seen" },
            { letter: "B", text: "a loud and sudden noise" },
            { letter: "C", text: "a lie told to trick someone" },
            { letter: "D", text: "a heavy load of freight" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── DRAMA ───────────────────────── */
    {
      id: "nj5-rl-drama-talent",
      family: "NJ5",
      title: "Sign-Up Sheet",
      kind: "Drama · RL.5",
      blurb: "Two friends, one pen, and the last two spots on the talent-show list.",
      level: 2,
      passage:
        "<p><em>Setting: a hallway outside the music room, just after lunch. A sign-up sheet for the Spring Talent Show is taped to the door. NADIA holds a pen. JONAH carries a ukulele case.</em></p>" +
        "<p>" + N(1) + "<strong>NADIA</strong> <em>(holding out the pen)</em>: There are two spots left. Two. " +
        N(2) + "<strong>JONAH</strong>: Then two other people can have them. " +
        N(3) + "<strong>NADIA</strong>: Jonah, you play the ukulele better than anyone in fifth grade. " +
        N(4) + "<strong>JONAH</strong>: In my room. With the door shut. " +
        N(5) + "<strong>NADIA</strong>: The stage is just a bigger room. " +
        N(6) + "<strong>JONAH</strong> <em>(looking at the floor)</em>: With two hundred people in it. " +
        N(7) + "<em>(A long pause. Down the hall, someone drops a lunch tray.)</em> " +
        N(8) + "<strong>NADIA</strong>: What if I sing and you just play? Nobody looks at the person playing. " +
        N(9) + "<strong>JONAH</strong>: Everybody looks at the person who messes up. " +
        N(10) + "<strong>NADIA</strong> <em>(quietly)</em>: I know. That's why I asked you. " +
        N(11) + "<strong>JONAH</strong>: What do you mean? " +
        N(12) + "<strong>NADIA</strong>: I forget words when I'm nervous. Last year I froze in the spelling bee. Remember? " +
        N(13) + "<strong>JONAH</strong>: You spelled \"rhythm\" wrong. " +
        N(14) + "<strong>NADIA</strong>: I spelled R-H-Y and then stopped. If you're playing beside me, I'll have the beat. I won't freeze. " +
        N(15) + "<em>(JONAH looks at the sign-up sheet, then at NADIA.)</em> " +
        N(16) + "<strong>JONAH</strong>: So you're scared too. " +
        N(17) + "<strong>NADIA</strong>: Terrified. But less terrified with you. " +
        N(18) + "<em>(JONAH takes the pen. He writes both names on one line.)</em> " +
        N(19) + "<strong>JONAH</strong>: One line. If we mess up, we mess up together. " +
        N(20) + "<strong>NADIA</strong> <em>(grinning)</em>: Deal. Now can we practice somewhere with a door that shuts?" +
        "</p>",
      claims: [
        {
          id: "motive",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "motive-ev",
          stem: "Why does Nadia really want Jonah to perform with her?",
          choices: [
            { letter: "A", text: "She thinks the judges will enjoy the ukulele." },
            { letter: "B", text: "She needs his steady playing to keep her from freezing." },
            { letter: "C", text: "She wants to prove he is the best player in fifth grade." },
            { letter: "D", text: "She does not want the last two spots to go to others." }
          ],
          correct: "B"
        },
        {
          id: "motive-ev",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence from the scene best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 3: Jonah, you play the ukulele better than anyone in fifth grade." },
            { letter: "B", text: "Sentence 5: The stage is just a bigger room." },
            { letter: "C", text: "Sentence 14: If you're playing beside me, I'll have the beat. I won't freeze." },
            { letter: "D", text: "Sentence 19: One line. If we mess up, we mess up together." }
          ],
          correct: "C"
        },
        {
          id: "stagedir",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "The stage direction looking at the floor in sentence 6 shows that Jonah feels —",
          choices: [
            { letter: "A", text: "bored with the conversation" },
            { letter: "B", text: "nervous about the crowd" },
            { letter: "C", text: "angry that Nadia keeps asking" },
            { letter: "D", text: "curious about the sign-up sheet" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "change-ev",
          stem: "What causes Jonah to change his mind?",
          choices: [
            { letter: "A", text: "Nadia promises that nobody will look at him." },
            { letter: "B", text: "Someone drops a lunch tray in the hall." },
            { letter: "C", text: "He remembers winning the spelling bee." },
            { letter: "D", text: "He learns that Nadia is nervous too." }
          ],
          correct: "D"
        },
        {
          id: "change-ev",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best shows the moment Jonah understands this?",
          choices: [
            { letter: "A", text: "Sentence 9: Everybody looks at the person who messes up." },
            { letter: "B", text: "Sentence 13: You spelled \"rhythm\" wrong." },
            { letter: "C", text: "Sentence 16: So you're scared too." },
            { letter: "D", text: "Sentence 20: Deal. Now can we practice somewhere with a door that shuts?" }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 12, the word froze most nearly means —",
          choices: [
            { letter: "A", text: "stopped and could not go on" },
            { letter: "B", text: "became very cold" },
            { letter: "C", text: "fell to the ground" },
            { letter: "D", text: "ran away from the stage" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "nj5-rl-drama-treehouse",
      family: "NJ5",
      title: "Rules of the Treehouse",
      kind: "Drama · RL.5",
      blurb: "Two kids write treehouse rules while a little sister waits below.",
      level: 3,
      passage:
        "<p><em>Setting: a backyard in late afternoon. A ladder leans against a big maple tree. MATEO and his friend WREN sit on the floor of a treehouse with a notebook. MATEO's little sister INES stands at the bottom of the ladder, holding a bucket tied to a long rope.</em></p>" +
        "<p>" + N(1) + "<strong>MATEO</strong> <em>(writing)</em>: Rule one. You must be ten years old to climb up. " +
        N(2) + "<strong>WREN</strong>: Who is that rule for? " +
        N(3) + "<strong>MATEO</strong>: Nobody. It's just a rule. " +
        N(4) + "<strong>INES</strong> <em>(from below)</em>: I'm seven! " +
        N(5) + "<strong>WREN</strong>: It's for Ines. " +
        N(6) + "<strong>MATEO</strong>: Rules keep people safe. The ladder is tall. " +
        N(7) + "<strong>INES</strong>: I climbed it yesterday when you were at soccer. " +
        N(8) + "<em>(MATEO puts down the pencil. WREN tries not to laugh.)</em> " +
        N(9) + "<strong>WREN</strong>: What's the real reason? " +
        N(10) + "<strong>MATEO</strong> <em>(quietly)</em>: Everything at my house is shared. My room. The bathroom. The remote. I want one place that is mine. " +
        N(11) + "<strong>WREN</strong>: Then why did you let me up? " +
        N(12) + "<strong>MATEO</strong>: You don't live here. You go home. " +
        N(13) + "<strong>INES</strong>: I made something! Can I at least show you? " +
        N(14) + "<em>(MATEO looks over the edge. INES holds up the bucket. The rope runs over a branch above the treehouse.)</em> " +
        N(15) + "<strong>INES</strong>: You pull this end, and the bucket comes up. For snacks. Or the notebook. " +
        N(16) + "<em>(A pause. WREN raises an eyebrow at MATEO.)</em> " +
        N(17) + "<strong>MATEO</strong>: She made a pulley. " +
        N(18) + "<strong>WREN</strong>: She made a pulley. " +
        N(19) + "<strong>MATEO</strong> <em>(sighing)</em>: Rule one. You must be ten years old to climb up, unless you are the treehouse engineer. " +
        N(20) + "<strong>INES</strong>: What's an engineer? " +
        N(21) + "<strong>MATEO</strong>: Somebody who builds things that work. Hold the rope steady. I'm sending down the pencil so you can sign." +
        "</p>",
      claims: [
        {
          id: "real",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "real-ev",
          stem: "What is the real reason Mateo writes rule one?",
          choices: [
            { letter: "A", text: "He worries that Ines will fall off the tall ladder." },
            { letter: "B", text: "He wants one place that does not have to be shared." },
            { letter: "C", text: "He thinks Ines is too young to understand rules." },
            { letter: "D", text: "He wants Wren to be the only person who visits." }
          ],
          correct: "B"
        },
        {
          id: "real-ev",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports Mateo's real reason?",
          choices: [
            { letter: "A", text: "Sentence 3: Nobody. It's just a rule." },
            { letter: "B", text: "Sentence 6: Rules keep people safe. The ladder is tall." },
            { letter: "C", text: "Sentence 7: I climbed it yesterday when you were at soccer." },
            { letter: "D", text: "Sentence 10: I want one place that is mine." }
          ],
          correct: "D"
        },
        {
          id: "repeat",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "Wren repeats Mateo's words in sentence 18 mainly to —",
          choices: [
            { letter: "A", text: "show that Wren did not hear Mateo clearly" },
            { letter: "B", text: "push Mateo to admit that Ines has earned a spot" },
            { letter: "C", text: "remind Mateo that Wren also built a pulley" },
            { letter: "D", text: "make fun of Ines for bringing a bucket" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "change-ev",
          stem: "What causes Mateo to change the rule?",
          choices: [
            { letter: "A", text: "Ines shows she can add something useful to the treehouse." },
            { letter: "B", text: "Wren refuses to visit unless Ines can come up." },
            { letter: "C", text: "Ines proves she can climb the ladder by herself." },
            { letter: "D", text: "Mateo remembers that his parents built the treehouse." }
          ],
          correct: "A"
        },
        {
          id: "change-ev",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best shows Mateo realizing this?",
          choices: [
            { letter: "A", text: "Sentence 7: I climbed it yesterday when you were at soccer." },
            { letter: "B", text: "Sentence 12: You don't live here. You go home." },
            { letter: "C", text: "Sentence 17: She made a pulley." },
            { letter: "D", text: "Sentence 21: Hold the rope steady. I'm sending down the pencil so you can sign." }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "Based on how it is used in sentences 19–21, an engineer is someone who —",
          choices: [
            { letter: "A", text: "climbs a ladder very quickly" },
            { letter: "B", text: "writes the rules for a group" },
            { letter: "C", text: "brings snacks to the treehouse" },
            { letter: "D", text: "designs and builds useful things" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
