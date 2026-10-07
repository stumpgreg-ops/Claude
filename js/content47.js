/* SOL Labyrinth — Grade 9 mid-length packs (VA 9.RL / 9.RI / 9.RV / 9.DSR), expansion file c47:
 * pottery, a snowstorm, a bookstore and a neighborhood block party (310–370 words, 7 questions each).
 * Original text only; no VDOE / copyrighted material. Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── LITERARY ───────────────────────── */
    {
      id: "g9-rl-c47-first-bowl",
      family: "G9",
      title: "The One Thing That Does Not Move",
      kind: "Literary · 9.RL",
      blurb: "Four collapsed lumps of clay, one patient teacher, and a crooked cup on a shelf.",
      level: 2,
      passage:
        "<p>" + N(1) + "The clay hit the wheel with a wet slap, and Nadia Haddad pressed both palms against it before it had stopped wobbling. " +
        N(2) + "Within seconds the lump slid sideways, climbed her wrist like a frightened animal, and flopped onto the splash pan. " +
        N(3) + "It was her fourth collapse of the evening. " +
        N(4) + "Across the studio, Mr. Vlasic looked up from the kiln log, set down his pencil, and walked over without hurrying, which somehow made it worse.</p>" +
        "<p>" + N(5) + "\"You are fighting it,\" he said. " +
        N(6) + "\"I'm centering it,\" Nadia answered, scraping the ruined clay into the reclaim bucket. " +
        N(7) + "\"Everyone in the video does it in ten seconds.\" " +
        N(8) + "\"The people in the video have done it ten thousand times.\" " +
        N(9) + "He pulled a stool beside hers and showed her how to lock her left elbow against her knee so that her arm became part of the frame of her body instead of a flag waving in the wind. " +
        N(10) + "\"Let the wheel do the turning,\" he said. " +
        N(11) + "\"Your job is only to be the one thing in the room that does not move.\"</p>" +
        "<p>" + N(12) + "Nadia wedged a new ball, slower this time, and dropped it closer to the center of the wheel head. " +
        N(13) + "She braced her elbow, wet her hands, and leaned in with her whole weight instead of her fingers. " +
        N(14) + "For a long minute the clay bumped against her palms like a fist knocking at a door. " +
        N(15) + "Then the knocking softened, and the lump became a smooth, spinning dome that barely seemed to turn at all. " +
        N(16) + "She was so surprised that she nearly let go.</p>" +
        "<p>" + N(17) + "The bowl she opened from that dome was not beautiful. " +
        N(18) + "One wall rose taller than the other, and the rim dipped on the side where she had hesitated. " +
        N(19) + "When she cut it free with the wire, she reached for the reclaim bucket out of habit. " +
        N(20) + "Mr. Vlasic tapped a shelf above the sinks, where a heavy, crooked cup held a fistful of pencils. " +
        N(21) + "\"My first one that stood up,\" he said. " +
        N(22) + "\"Forty-one years ago, and it still does its job.\" " +
        N(23) + "Nadia looked at the cup, then at her bowl, and set the bowl on the drying rack with her initials scratched carefully into its foot.</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Nadia in sentences 1–7, before Mr. Vlasic sits down beside her?",
          choices: [
            { letter: "A", text: "She is bored by the class and wants to leave early." },
            { letter: "B", text: "She is impatient and measures herself against experts." },
            { letter: "C", text: "She is confident that her method is better than his." },
            { letter: "D", text: "She is embarrassed that others are watching her work." }
          ],
          correct: "B"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 2, the clay climbing Nadia's wrist like a frightened animal mainly shows that the clay —",
          choices: [
            { letter: "A", text: "is too dry to be shaped into a bowl" },
            { letter: "B", text: "has been mixed with the wrong kind of water" },
            { letter: "C", text: "frightens Nadia because it moves so quickly" },
            { letter: "D", text: "is moving wildly and escaping her control" }
          ],
          correct: "D"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Mr. Vlasic's advice in sentences 10 and 11 suggests that centering clay depends mainly on —",
          choices: [
            { letter: "A", text: "holding steady while the wheel does the work" },
            { letter: "B", text: "pressing harder with the fingertips than the palms" },
            { letter: "C", text: "watching videos until the motions are memorized" },
            { letter: "D", text: "spinning the wheel faster than a beginner expects" }
          ],
          correct: "A"
        },
        {
          id: "image",
          sol: "9.RL.2.B",
          stem: "The knocking fist in sentence 14 and the softening in sentence 15 together suggest that —",
          choices: [
            { letter: "A", text: "Nadia is losing patience and wants to quit" },
            { letter: "B", text: "someone has come to the studio door to interrupt" },
            { letter: "C", text: "the clay's resistance is slowly giving way to her" },
            { letter: "D", text: "the wheel has started to slow down on its own" }
          ],
          correct: "C"
        },
        {
          id: "cup",
          sol: "9.RL.3.A",
          stem: "The author includes the crooked pencil cup in sentences 20–22 mainly to —",
          choices: [
            { letter: "A", text: "explain why the studio needs new shelves" },
            { letter: "B", text: "show that Mr. Vlasic prefers useful objects" },
            { letter: "C", text: "suggest that Nadia's bowl will also hold pencils" },
            { letter: "D", text: "reveal that the teacher also began imperfectly" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme do Nadia's lopsided bowl and Mr. Vlasic's forty-one-year-old cup develop together?",
          choices: [
            { letter: "A", text: "A flawed first success is worth keeping as a beginning." },
            { letter: "B", text: "Teachers should hide their early mistakes from students." },
            { letter: "C", text: "Only objects that look beautiful deserve to be saved." },
            { letter: "D", text: "Skill comes quickly to anyone who works hard enough." }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of sentence 23, when Nadia scratches her initials into the foot of the bowl, is best described as —",
          choices: [
            { letter: "A", text: "bitter and disappointed" },
            { letter: "B", text: "nervous and doubtful" },
            { letter: "C", text: "quietly proud" },
            { letter: "D", text: "loudly triumphant" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c47-alder-lane",
      family: "G9",
      title: "The Yellow House on Alder Lane",
      kind: "Literary · 9.RL",
      blurb: "A canceled school day, a borrowed shovel, and a neighbor who refuses all help.",
      level: 1,
      passage:
        "<p>" + N(1) + "By seven in the morning the snow had buried the mailbox on Alder Lane up to its little red flag, and it was still falling. " +
        N(2) + "Mateo Ruiz watched from the kitchen window as the plow rumbled past, throwing a wall of gray slush across the end of every driveway. " +
        N(3) + "School was canceled, the radio said, and so were the buses, the library, and his mother's shift at the clinic. " +
        N(4) + "\"Then you have time to dig out Mrs. Petrakis,\" his mother said, handing him the good shovel.</p>" +
        "<p>" + N(5) + "Mrs. Petrakis lived alone in the yellow house across the street, and she had a reputation on the block for refusing help. " +
        N(6) + "She had once sent back a casserole because, as she put it, she was not sick, only old. " +
        N(7) + "When Mateo started on her front steps, the door opened before he reached the second one. " +
        N(8) + "\"I have a shovel,\" she called. " +
        N(9) + "\"I know,\" Mateo said, which was true, because it was leaning against her porch rail, rusted and bent at the blade. " +
        N(10) + "She studied him for a moment, frowning, and then shut the door.</p>" +
        "<p>" + N(11) + "He worked for an hour. " +
        N(12) + "The snow was heavy and wet, and each scoop felt like lifting a sack of flour soaked in water. " +
        N(13) + "His arms burned, his toes went numb, and twice he stopped to wonder whether he should simply go home. " +
        N(14) + "But every time he looked up, he saw the curtain in her front window move a little, and he kept going.</p>" +
        "<p>" + N(15) + "When he finally cleared the path to the street, the door opened again. " +
        N(16) + "Mrs. Petrakis came out in a long coat with a coffee can in her hands. " +
        N(17) + "She walked carefully down the clean path to a bird feeder at the edge of her yard, a feeder Mateo had never noticed, now wearing a tall white hat of snow. " +
        N(18) + "She brushed it off and poured in the seed, and within a minute a pair of cardinals dropped from the hedge like two red sparks. " +
        N(19) + "\"They have been waiting since yesterday,\" she said without turning around. " +
        N(20) + "\"So have I.\" " +
        N(21) + "Then she handed him the empty coffee can, which was still warm from her hands, and told him to come inside for cocoa.</p>",
      claims: [
        {
          id: "setting",
          sol: "9.RL.3.A",
          stem: "How does the storm described in sentences 1–3 set the plot of the story in motion?",
          choices: [
            { letter: "A", text: "It frees Mateo's day, so his mother sends him to help a neighbor." },
            { letter: "B", text: "It knocks out the power, so Mateo must find a warm place to stay." },
            { letter: "C", text: "It blocks the plow, so Mateo must clear the whole street alone." },
            { letter: "D", text: "It closes the clinic, so Mateo's mother needs his help at work." }
          ],
          correct: "A"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which sentence best shows that Mrs. Petrakis dislikes being treated as helpless?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "C"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 12, the author compares each scoop of snow to a sack of flour soaked in water mainly to show that the snow —",
          choices: [
            { letter: "A", text: "has turned gray from the plow's slush" },
            { letter: "B", text: "is exhausting to lift and move" },
            { letter: "C", text: "smells like the bakery on the corner" },
            { letter: "D", text: "is melting quickly in the morning sun" }
          ],
          correct: "B"
        },
        {
          id: "curtain",
          sol: "9.RL.1.B",
          stem: "Based on sentence 14, readers can best infer that the moving curtain shows that Mrs. Petrakis —",
          choices: [
            { letter: "A", text: "wants Mateo to leave her yard at once" },
            { letter: "B", text: "is trying to let more light into the room" },
            { letter: "C", text: "is too cold to come outside and talk" },
            { letter: "D", text: "is quietly watching Mateo's progress" }
          ],
          correct: "D"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 5, the word reputation most nearly means —",
          choices: [
            { letter: "A", text: "a rule that a person must follow" },
            { letter: "B", text: "the way others generally see a person" },
            { letter: "C", text: "a habit that a person keeps secret" },
            { letter: "D", text: "the place where a person has lived longest" }
          ],
          correct: "B"
        },
        {
          id: "sparks",
          sol: "9.RL.2.B",
          stem: "The image of cardinals dropping from the hedge like two red sparks in sentence 18 mainly creates a feeling of —",
          choices: [
            { letter: "A", text: "sudden brightness and life" },
            { letter: "B", text: "danger and growing alarm" },
            { letter: "C", text: "heavy, gray stillness" },
            { letter: "D", text: "noisy, crowded confusion" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is developed through Mateo's hour of shoveling and Mrs. Petrakis's invitation at the end?",
          choices: [
            { letter: "A", text: "Snowstorms are more dangerous than most people think." },
            { letter: "B", text: "Young people should always obey their parents' requests." },
            { letter: "C", text: "Older people prefer to be left completely alone." },
            { letter: "D", text: "Patient kindness can win over someone who resists help." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c47-margins",
      family: "G9",
      title: "Still True",
      kind: "Literary · 9.RL",
      blurb: "A box of donated paperbacks, every one of them argued with in pencil.",
      level: 3,
      passage:
        "<p>" + N(1) + "The box came in on a Tuesday, the slowest day at Second Story Books, which is why I was the one who opened it. " +
        N(2) + "Most donations smell like basements, and this one did too, but under the damp there was something else, a faint sweetness like old oranges. " +
        N(3) + "Inside were thirty paperbacks on birds, rivers, and weather, and every one of them had been written in.</p>" +
        "<p>" + N(4) + "Not underlined, the way students mark textbooks, but answered. " +
        N(5) + "Beside a paragraph claiming that herons hunt only at dawn, someone had written in tiny slanted capitals, NOT THE ONES ON MILLER CREEK. " +
        N(6) + "On another page a pencil arrow pointed to a weather chart, and beside it: WRONG IN 1987. ASK ANYONE. " +
        N(7) + "The reader had not simply read these books; the reader had argued with them, politely but without giving an inch.</p>" +
        "<p>" + N(8) + "Mrs. Oduya, who owns the store and has priced books for twenty-six years, flipped through two of them and sighed. " +
        N(9) + "\"Marked copies,\" she said. " +
        N(10) + "\"A dollar each, and we'll be lucky.\" " +
        N(11) + "She meant it kindly; to her a clean margin is a promise to the next reader that the book is still entirely theirs. " +
        N(12) + "I understood that, and I also understood that I could not put those books in the dollar bin, where people would shake them out looking for receipts and leave them face-down in the rain.</p>" +
        "<p>" + N(13) + "So I bought the heron book myself, with the twelve dollars I had been saving for a new phone case. " +
        N(14) + "That evening I rode my bike out to Miller Creek, which I had passed a hundred times without stopping. " +
        N(15) + "The light was going orange, long past dawn, and I waited on the bank until my legs ached. " +
        N(16) + "Then, from the reeds, a gray shape unfolded itself like a folding chair coming open, and a heron stepped into the shallows and began, slowly, to hunt.</p>" +
        "<p>" + N(17) + "At home I found a pen and turned to the paragraph about dawn. " +
        N(18) + "Under the slanted capitals, in my own smaller handwriting, I wrote: STILL TRUE. SEPTEMBER 14. " +
        N(19) + "I do not know who the first reader was, and Mrs. Oduya says the donor left no name. " +
        N(20) + "But somewhere in the margin there is now a conversation, and it is not finished.</p>",
      claims: [
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "Because Still True is told from the bookstore clerk's first-person point of view, the reader —",
          choices: [
            { letter: "A", text: "learns exactly why the donor gave the books away" },
            { letter: "B", text: "sees the store mainly through Mrs. Oduya's eyes" },
            { letter: "C", text: "knows the clerk's reasons but not the first reader's name" },
            { letter: "D", text: "hears the thoughts of every customer in the shop" }
          ],
          correct: "C"
        },
        {
          id: "inch",
          sol: "9.RV.1.F",
          stem: "In sentence 7, saying the first reader argued with the books without giving an inch means that the reader —",
          choices: [
            { letter: "A", text: "held firmly to personal observations" },
            { letter: "B", text: "wrote in very small handwriting" },
            { letter: "C", text: "measured the margins before writing" },
            { letter: "D", text: "refused to finish reading the books" }
          ],
          correct: "A"
        },
        {
          id: "oduya",
          sol: "9.RL.1.B",
          stem: "Sentence 11 suggests that Mrs. Oduya prices the marked books low mainly because she believes —",
          choices: [
            { letter: "A", text: "books about birds and weather rarely sell well" },
            { letter: "B", text: "the donor would want the books to be given away" },
            { letter: "C", text: "the clerk should learn to make quick decisions" },
            { letter: "D", text: "most buyers want pages free of someone else's ideas" }
          ],
          correct: "D"
        },
        {
          id: "choice",
          sol: "9.RL.1.C",
          stem: "Which choice best describes the narrator's decision in sentence 13 to spend the phone-case money?",
          choices: [
            { letter: "A", text: "A careless purchase the narrator soon regrets" },
            { letter: "B", text: "A small sacrifice showing how much the notes matter" },
            { letter: "C", text: "A favor done mainly to please Mrs. Oduya" },
            { letter: "D", text: "A plan to resell the book later for a profit" }
          ],
          correct: "B"
        },
        {
          id: "heron",
          sol: "9.RL.2.A",
          stem: "In sentence 16, a gray shape unfolded itself like a folding chair coming open is an example of —",
          choices: [
            { letter: "A", text: "a simile showing the heron's long body stretching out in stages" },
            { letter: "B", text: "a metaphor showing that the narrator is tired of waiting" },
            { letter: "C", text: "personification showing that the reeds are alive" },
            { letter: "D", text: "an exaggeration showing that the heron is enormous" }
          ],
          correct: "A"
        },
        {
          id: "light",
          sol: "9.RL.3.A",
          stem: "The detail in sentence 15 that the light was going orange, long past dawn, mainly emphasizes that —",
          choices: [
            { letter: "A", text: "the narrator arrived too late to see any birds" },
            { letter: "B", text: "the heron's evening hunt agrees with the margin note" },
            { letter: "C", text: "Miller Creek is unsafe to visit after dark" },
            { letter: "D", text: "the narrator was missing a shift at the store" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which idea does the final sentence of Still True most clearly develop?",
          choices: [
            { letter: "A", text: "Used books should be sold only in perfect condition." },
            { letter: "B", text: "Scientists should never trust what they read in print." },
            { letter: "C", text: "A shared book can hold an exchange among readers over time." },
            { letter: "D", text: "Writing in a book is a sign of disrespect toward the author." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c47-juniper-court",
      family: "G9",
      title: "Juniper Court",
      kind: "Literary · 9.RL",
      blurb: "The first block party in eleven years, four names on the sign-up sheet, and rain.",
      level: 2,
      passage:
        "<p>" + N(1) + "For three weeks the flyer on every door of Juniper Court had promised the first block party in eleven years, and for three weeks Teo Fonoti had been sure that nobody would come. " +
        N(2) + "He had made the flyer himself, with a cartoon grill and the words BRING A DISH, BRING A CHAIR, BRING A NEIGHBOR printed in letters as tall as his thumb. " +
        N(3) + "Only four families had signed the sheet taped above the mailboxes.</p>" +
        "<p>" + N(4) + "On Saturday morning the sky was the color of dishwater. " +
        N(5) + "Teo and his aunt Mele dragged two folding tables into the middle of the cul-de-sac and weighted the tablecloths with rocks. " +
        N(6) + "At eleven, a thin rain began, and Teo stood under the dripping basketball hoop watching the empty street as if it might explain itself. " +
        N(7) + "\"People don't come out to wait,\" Aunt Mele said, opening a cooler. " +
        N(8) + "\"They come out when something is already happening.\"</p>" +
        "<p>" + N(9) + "So they made something happen. " +
        N(10) + "She lit the grill under a patio umbrella, and he carried out the old speaker and played the island songs his grandfather used to hum while washing the car. " +
        N(11) + "The smoke drifted down the street like an invitation that did not need a stamp. " +
        N(12) + "First the Delgado twins appeared with a bag of chalk, and then Mr. Brandt from the corner house wheeled out a cooler of lemonade he had clearly been preparing for days. " +
        N(13) + "By one o'clock the rain had stopped, the chalk had spread to every driveway, and someone Teo had never met was teaching a circle of children a card game from Vietnam.</p>" +
        "<p>" + N(14) + "Late in the afternoon, Teo checked the sign-up sheet out of curiosity. " +
        N(15) + "It still showed only four names, though nearly sixty people were eating on the curbs. " +
        N(16) + "Mrs. Ito from number nine noticed him staring at it and laughed. " +
        N(17) + "\"Nobody signs those,\" she said. " +
        N(18) + "\"Signing is a promise, and we were waiting to see whether you meant it.\" " +
        N(19) + "Teo folded the sheet and put it in his pocket, where it stayed, damp and crumpled, until the last table was carried home after dark.</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Teo in sentences 1–6?",
          choices: [
            { letter: "A", text: "He is annoyed that his aunt is in charge of the party." },
            { letter: "B", text: "He is relaxed because the flyer did all the work." },
            { letter: "C", text: "He is excited to meet neighbors he already knows well." },
            { letter: "D", text: "He is anxious that his effort will not draw anyone out." }
          ],
          correct: "D"
        },
        {
          id: "mele",
          sol: "9.RL.1.B",
          stem: "Aunt Mele's words in sentences 7 and 8 suggest that she believes neighbors —",
          choices: [
            { letter: "A", text: "need to see activity before they will join in" },
            { letter: "B", text: "are unwilling to go outside when it is raining" },
            { letter: "C", text: "would rather receive a printed invitation" },
            { letter: "D", text: "have forgotten that the party is today" }
          ],
          correct: "A"
        },
        {
          id: "smoke",
          sol: "9.RL.2.A",
          stem: "In sentence 11, the smoke is compared to an invitation that did not need a stamp mainly to show that —",
          choices: [
            { letter: "A", text: "Teo forgot to mail flyers to some of the houses" },
            { letter: "B", text: "the grill was producing far too much smoke" },
            { letter: "C", text: "the cooking itself called neighbors outside" },
            { letter: "D", text: "the post office was closed because of the rain" }
          ],
          correct: "C"
        },
        {
          id: "sky",
          sol: "9.RL.2.B",
          stem: "Describing the Saturday sky as the color of dishwater in sentence 4 mainly creates a mood of —",
          choices: [
            { letter: "A", text: "cheerful excitement" },
            { letter: "B", text: "dull uncertainty" },
            { letter: "C", text: "sudden danger" },
            { letter: "D", text: "peaceful calm" }
          ],
          correct: "B"
        },
        {
          id: "weather",
          sol: "9.RL.3.A",
          stem: "How does the change in the weather between sentence 6 and sentence 13 reflect the party's progress?",
          choices: [
            { letter: "A", text: "The rain clears as the gathering grows." },
            { letter: "B", text: "The rain forces the party into a garage." },
            { letter: "C", text: "The rain grows heavier as neighbors leave." },
            { letter: "D", text: "The rain stops before anyone has arrived." }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "The contrast between the four names on the sheet and the sixty people on the curbs best supports which theme?",
          choices: [
            { letter: "A", text: "Careful planning matters more than anything else." },
            { letter: "B", text: "Neighbors rarely keep the promises they make." },
            { letter: "C", text: "Bad weather always ruins outdoor celebrations." },
            { letter: "D", text: "People often answer action more than requests." }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of sentences 14–19, in which Teo studies the nearly empty sign-up sheet, is best described as —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "warm and gently amused" },
            { letter: "C", text: "tense and suspenseful" },
            { letter: "D", text: "formal and distant" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── INFORMATIONAL ───────────────────────── */
    {
      id: "g9-ri-c47-kiln",
      family: "G9",
      title: "Fire and Water",
      kind: "Informational · 9.RI",
      blurb: "Why a pot must dry slowly, fire twice, and cool with care.",
      level: 2,
      passage:
        "<p>" + N(1) + "A freshly thrown pot may look finished, but it is still mostly mud, and a single splash of water could return it to a shapeless lump. " +
        N(2) + "What turns that fragile form into a mug that can survive decades of dishwashers is heat, applied slowly and in a carefully planned order. " +
        N(3) + "Potters call this process firing, and it usually happens twice.</p>" +
        "<p>" + N(4) + "Before a pot ever enters the kiln, it must dry. " +
        N(5) + "Wet clay can be about one-fifth water by weight, and that water must leave gradually, first as the pot stiffens to a stage potters call leather-hard and then as it turns pale and bone-dry. " +
        N(6) + "Even a pot that feels completely dry still holds moisture in its tiny pores. " +
        N(7) + "If the kiln heats too quickly, that trapped water turns to steam before it can escape, and the expanding steam can crack a pot or even blow pieces of it across the kiln. " +
        N(8) + "For this reason, the first hours of a firing often climb by only a few dozen degrees at a time.</p>" +
        "<p>" + N(9) + "The real transformation comes later. " +
        N(10) + "Between roughly 450 and 700 degrees Celsius, water that is chemically bound inside the clay's minerals is driven out. " +
        N(11) + "After this point, the change is irreversible: no amount of soaking will ever turn the pot back into workable clay. " +
        N(12) + "Near 573 degrees, quartz particles in the clay suddenly shift their crystal structure and expand slightly, which is why potters also cool their kilns slowly past that temperature.</p>" +
        "<p>" + N(13) + "The first firing, called the bisque firing, usually stops around 1,000 degrees Celsius. " +
        N(14) + "It leaves the pot hard but still porous, a little like a clay flowerpot, so that it can absorb a coat of glaze. " +
        N(15) + "Glaze is essentially a thin layer of powdered glass-forming minerals suspended in water. " +
        N(16) + "During the second, hotter firing, which can reach about 1,250 degrees for stoneware, the glaze melts and fuses to the clay beneath it.</p>" +
        "<p>" + N(17) + "Some potters believe that pots fired in older, wood-burning kilns have a warmth that electric kilns can never match. " +
        N(18) + "Whether or not that is true, every method relies on the same principle: clay rewards patience, and a firing that is rushed is a firing that fails.</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of Fire and Water?",
          choices: [
            { letter: "A", text: "Wood-burning kilns produce better pottery than electric kilns do." },
            { letter: "B", text: "Slow, carefully staged heating turns fragile clay into lasting ceramic." },
            { letter: "C", text: "Glaze is a layer of glass that keeps water from soaking into pots." },
            { letter: "D", text: "Most beginning potters ruin their work by drying it too slowly." }
          ],
          correct: "B"
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "According to the passage, why do the first hours of a firing climb by only a few dozen degrees at a time?",
          choices: [
            { letter: "A", text: "To keep the glaze from melting before the clay is ready" },
            { letter: "B", text: "To give the quartz particles time to change their shape" },
            { letter: "C", text: "To save energy until the kiln reaches its highest heat" },
            { letter: "D", text: "To let trapped water escape before it can become steam" }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "How does the author mainly organize the information about firing a pot?",
          choices: [
            { letter: "A", text: "In the order of stages a pot passes through, from drying to glazing" },
            { letter: "B", text: "As a list of problems potters face, each followed by a solution" },
            { letter: "C", text: "As a comparison of wood-burning kilns and electric kilns" },
            { letter: "D", text: "As a history of pottery from ancient times to today" }
          ],
          correct: "A"
        },
        {
          id: "wordparts",
          sol: "9.RV.1.B",
          stem: "The word irreversible in sentence 11 combines ir- (not), reverse, and -ible (able to be). Based on these parts and the context, irreversible means —",
          choices: [
            { letter: "A", text: "likely to happen again" },
            { letter: "B", text: "easy to repair" },
            { letter: "C", text: "unable to be undone" },
            { letter: "D", text: "slow to finish" }
          ],
          correct: "C"
        },
        {
          id: "belief",
          sol: "9.RI.1.C",
          stem: "Which sentence from Fire and Water presents a belief rather than a confirmed fact?",
          choices: [
            { letter: "A", text: "Sentence 17" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "A"
        },
        {
          id: "flowerpot",
          sol: "9.RI.2.B",
          stem: "The author compares a bisque-fired pot to a clay flowerpot in sentence 14 mainly to help readers picture a surface that is —",
          choices: [
            { letter: "A", text: "shiny and smooth like glass" },
            { letter: "B", text: "soft enough to reshape by hand" },
            { letter: "C", text: "colored by the minerals in soil" },
            { letter: "D", text: "hard but able to soak up liquid" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence gives the strongest support for the claim in sentence 18 that a firing that is rushed is a firing that fails?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c47-lake-snow",
      family: "G9",
      title: "Snow from a Warm Lake",
      kind: "Informational · 9.RI",
      blurb: "How open water, frigid wind, and a long fetch bury one town and spare the next.",
      level: 1,
      passage:
        "<p>" + N(1) + "Some of the heaviest snowfalls in North America do not come from giant winter storms at all. " +
        N(2) + "They come from narrow bands of clouds that form when very cold air passes over a lake that has not yet frozen. " +
        N(3) + "Meteorologists call this lake-effect snow, and towns on the downwind shores of large lakes can receive several feet of it in a few days.</p>" +
        "<p>" + N(4) + "The process begins with a difference in temperature. " +
        N(5) + "In early winter, a large lake is often much warmer than the air above it, because water holds heat far longer than land does. " +
        N(6) + "When a mass of frigid air from the north blows across the open water, the lake warms the lowest layer of that air and adds moisture to it. " +
        N(7) + "Warm, moist air is lighter than the cold air around it, so it rises. " +
        N(8) + "As it rises, it cools again, and the moisture condenses into clouds.</p>" +
        "<p>" + N(9) + "The longer the air travels over water, the more moisture it collects. " +
        N(10) + "Scientists call this distance the fetch. " +
        N(11) + "A wind that blows down the full length of a lake has a long fetch and can build towering clouds, while a wind that crosses only the narrow width of the lake produces much less. " +
        N(12) + "When the clouds reach land, friction with the ground slows the wind and piles the air upward, squeezing out even more snow.</p>" +
        "<p>" + N(13) + "One surprising feature of lake-effect snow is how local it is. " +
        N(14) + "A single band may be only ten or twenty miles wide. " +
        N(15) + "Drivers have reported leaving bright sunshine and entering a whiteout within a few minutes, then returning to clear skies on the other side. " +
        N(16) + "For forecasters, this makes the snow difficult to predict, since a small shift in wind direction can move the band from one town to the next.</p>" +
        "<p>" + N(17) + "Lake-effect season usually ends once the lake freezes over or cools close to the temperature of the air. " +
        N(18) + "Without open, warmer water to feed it, the narrow snow machine simply runs out of fuel.</p>",
      claims: [
        {
          id: "summary",
          sol: "9.RI.1.A",
          stem: "Which statement best summarizes Snow from a Warm Lake?",
          choices: [
            { letter: "A", text: "Forecasters can easily predict which town a snow band will reach." },
            { letter: "B", text: "Frozen lakes create the heaviest snowfalls of the whole winter." },
            { letter: "C", text: "Cold air gains heat and moisture over open water and drops heavy, local snow." },
            { letter: "D", text: "Giant winter storms cause nearly all of the snow near large lakes." }
          ],
          correct: "C"
        },
        {
          id: "warm",
          sol: "9.RI.1.B",
          stem: "According to sentence 5, why is a large lake often warmer than the air above it in early winter?",
          choices: [
            { letter: "A", text: "Water holds heat far longer than land does." },
            { letter: "B", text: "Warm rivers flow into the lake all winter long." },
            { letter: "C", text: "Snow on the lake's surface traps heat below it." },
            { letter: "D", text: "Wind from the north carries warm air over it." }
          ],
          correct: "A"
        },
        {
          id: "fetch",
          sol: "9.RV.1.C",
          stem: "As it is used in sentences 9–11, the word fetch refers to —",
          choices: [
            { letter: "A", text: "the speed at which a cloud rises" },
            { letter: "B", text: "the amount of snow that reaches land" },
            { letter: "C", text: "the width of a single band of snow" },
            { letter: "D", text: "the distance wind travels over water" }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "Sentences 4–8 of the lake-effect article are organized mainly as —",
          choices: [
            { letter: "A", text: "a comparison of two different lakes" },
            { letter: "B", text: "a chain of causes and effects" },
            { letter: "C", text: "a list of safety tips for drivers" },
            { letter: "D", text: "a description of one famous storm" }
          ],
          correct: "B"
        },
        {
          id: "local",
          sol: "9.RI.3.A",
          stem: "Which sentence offers a real-world example that best supports the idea in sentence 13 that lake-effect snow is very local?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "B"
        },
        {
          id: "fuel",
          sol: "9.RI.2.B",
          stem: "The author calls lake-effect snow a snow machine that runs out of fuel in sentence 18 mainly to show that —",
          choices: [
            { letter: "A", text: "snowplows stop working when the lakes freeze" },
            { letter: "B", text: "towns burn more fuel during snowy winters" },
            { letter: "C", text: "the snow keeps falling even after the lake freezes" },
            { letter: "D", text: "open water powers the snow, and losing it ends the season" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "9.RI.1.C",
          stem: "The main purpose of Snow from a Warm Lake is to —",
          choices: [
            { letter: "A", text: "explain how a weather process works" },
            { letter: "B", text: "persuade drivers to stay home in winter" },
            { letter: "C", text: "tell the story of one forecaster's career" },
            { letter: "D", text: "argue that lakes should be kept from freezing" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-ri-c47-front-table",
      family: "G9",
      title: "The Front Table",
      kind: "Informational · 9.RI",
      blurb: "Why a bookstore's first table is its most valuable space, and how booksellers fill it.",
      level: 3,
      passage:
        "<p>" + N(1) + "Walk into almost any independent bookstore, and the first thing you meet is not a shelf but a table. " +
        N(2) + "Its surface is crowded with books lying flat, covers up, arranged in careful stacks that look casual but rarely are. " +
        N(3) + "Booksellers call this the front table, and many consider it the most valuable space in the store.</p>" +
        "<p>" + N(4) + "The reason is simple geometry. " +
        N(5) + "On a shelf, most books stand spine-out, showing a strip of color about an inch wide, and a shopper must already know a title to find it. " +
        N(6) + "On a table, a book shows its entire cover, which works like a small poster. " +
        N(7) + "Store owners often notice that a title moved from a shelf to the front table sells noticeably faster, even when nothing else about it has changed.</p>" +
        "<p>" + N(8) + "Deciding what earns that space is part business and part judgment. " +
        N(9) + "Some titles appear because they are new and widely reviewed, and customers will come in asking for them. " +
        N(10) + "Others appear because a staff member read them and could not stop talking about them. " +
        N(11) + "Many stores mark these choices with handwritten cards, often called shelf-talkers, that explain in a few sentences why a bookseller loved the book. " +
        N(12) + "\"A card is a recommendation from a person, not a ranking from a list,\" says Odile Brennan, who has run a small shop in a river town for nineteen years.</p>" +
        "<p>" + N(13) + "Booksellers also arrange tables to create surprise. " +
        N(14) + "A novel about a lighthouse keeper might sit beside a field guide to seabirds and a cookbook of coastal recipes, inviting a shopper who came for one book to leave with another. " +
        N(15) + "This kind of personal guidance, which booksellers call hand-selling when a clerk recommends titles face to face, is something online stores have tried to imitate with computer programs. " +
        N(16) + "Whether a program can ever replace a bookseller's instinct is still debated, and it may be that the two simply notice different things.</p>" +
        "<p>" + N(17) + "What is clear is that the front table is never finished. " +
        N(18) + "In many shops it changes weekly, as books sell, seasons turn, and someone on staff finishes a new favorite.</p>",
      claims: [
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "How is The Front Table primarily organized?",
          choices: [
            { letter: "A", text: "It explains why the table matters, then how booksellers choose and arrange it." },
            { letter: "B", text: "It traces the history of bookstores from their beginnings to the present." },
            { letter: "C", text: "It describes a problem with online stores and offers a single solution." },
            { letter: "D", text: "It compares two booksellers who disagree about how to sell books." }
          ],
          correct: "A"
        },
        {
          id: "geometry",
          sol: "9.RI.2.B",
          stem: "The author opens the second paragraph with the reason is simple geometry mainly to —",
          choices: [
            { letter: "A", text: "show that booksellers must be skilled in mathematics" },
            { letter: "B", text: "suggest that table shapes matter more than books do" },
            { letter: "C", text: "signal that how much of a book shows affects its sales" },
            { letter: "D", text: "explain why most stores prefer round tables to square ones" }
          ],
          correct: "C"
        },
        {
          id: "spec",
          sol: "9.RI.1.C",
          stem: "Which statement from The Front Table is closest to a speculation rather than a confirmed fact?",
          choices: [
            { letter: "A", text: "On a shelf, most books stand spine-out." },
            { letter: "B", text: "In many shops it changes weekly." },
            { letter: "C", text: "Some titles appear because they are new." },
            { letter: "D", text: "It may be that the two notice different things." }
          ],
          correct: "D"
        },
        {
          id: "talker",
          sol: "9.RI.1.B",
          stem: "According to the passage, what is the purpose of a shelf-talker?",
          choices: [
            { letter: "A", text: "To list a book's price and where it is shelved" },
            { letter: "B", text: "To explain why a bookseller loved a book" },
            { letter: "C", text: "To rank the best-selling books of the week" },
            { letter: "D", text: "To warn shoppers that a book is nearly sold out" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence gives the strongest support for the claim in sentence 3 that the front table is the most valuable space in the store?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "C"
        },
        {
          id: "quote",
          sol: "9.RI.1.A",
          stem: "The author's purpose in quoting Odile Brennan in sentence 12 is to —",
          choices: [
            { letter: "A", text: "stress the personal nature of staff recommendations" },
            { letter: "B", text: "prove that small shops sell more books than large ones" },
            { letter: "C", text: "show that shelf-talkers are often hard to read" },
            { letter: "D", text: "argue that bestseller lists should be ignored" }
          ],
          correct: "A"
        },
        {
          id: "crowded",
          sol: "9.RV.1.E",
          stem: "The author could have written covered instead of crowded in sentence 2. Compared with covered, the word crowded adds a sense that the table is —",
          choices: [
            { letter: "A", text: "neat and nearly empty" },
            { letter: "B", text: "packed and full of activity" },
            { letter: "C", text: "old and in need of repair" },
            { letter: "D", text: "hidden from most shoppers" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── VOCABULARY ───────────────────────── */
    {
      id: "g9-rv-c47-plow-crew",
      family: "G9",
      title: "Plows Before Dawn",
      kind: "Vocabulary · 9.RV",
      blurb: "A dispatcher, a ridge-route driver, and the long work of keeping county roads open.",
      level: 2,
      passage:
        "<p>" + N(1) + "Long before the first flake falls on Pellham County, the road crew has already begun to <strong>anticipate</strong> the storm. " +
        N(2) + "Two days ahead, trucks spray the highways with brine, a salty liquid that keeps snow from bonding to the pavement and makes the first plowing far easier. " +
        N(3) + "By the time the forecast turns into real weather, the crew's twenty-two trucks are fueled, chained, and parked in a row like runners waiting for a starting gun.</p>" +
        "<p>" + N(4) + "At the center of it all sits the <strong>dispatch</strong> desk, where Gloria Achebe has worked through eighteen winters. " +
        N(5) + "From a bank of screens, she sends drivers to the routes that need them most, shifting trucks as reports come in from police, hospitals, and school bus garages. " +
        N(6) + "\"My job is to be everywhere at once without leaving this chair,\" she says.</p>" +
        "<p>" + N(7) + "During a major storm, the work is <strong>relentless</strong>. " +
        N(8) + "Drivers run twelve-hour shifts, and a single route may need to be plowed six or seven times before the snow stops. " +
        N(9) + "Henrik Solberg, who drives the long route over Cold Spring Ridge, compares it to sweeping a staircase while someone keeps pouring sand from the top. " +
        N(10) + "The ridge is the most <strong>treacherous</strong> part of the county, with sharp curves and a steep drop where a sliding car could leave the road entirely.</p>" +
        "<p>" + N(11) + "Once the storm begins to <strong>abate</strong>, the crew shifts from keeping up to cleaning up. " +
        N(12) + "They widen lanes, clear intersections, and push back the tall banks that block drivers' views at corners. " +
        N(13) + "This is also when complaints arrive, often from residents whose quiet side streets were plowed last. " +
        N(14) + "Achebe answers each one politely, though she points out that hospitals and main roads must come first.</p>" +
        "<p>" + N(15) + "Most people notice the crew only when something goes wrong, but the best sign of their work is <strong>inconspicuous</strong>: a morning commute that feels almost normal after a night of heavy snow. " +
        N(16) + "\"If nobody talks about the roads,\" Solberg says, \"we did it right.\"</p>",
      claims: [
        {
          id: "anticipate",
          sol: "9.RV.1.C",
          stem: "Based on sentences 1 and 2, the word anticipate most nearly means to —",
          choices: [
            { letter: "A", text: "complain about something unfair" },
            { letter: "B", text: "expect and prepare for something" },
            { letter: "C", text: "measure something exactly" },
            { letter: "D", text: "forget about something unpleasant" }
          ],
          correct: "B"
        },
        {
          id: "inconspicuous",
          sol: "9.RV.1.B",
          stem: "Conspicuous means easy to notice. Adding the prefix in- in sentence 15 makes inconspicuous mean —",
          choices: [
            { letter: "A", text: "noticed by everyone at once" },
            { letter: "B", text: "noticed only after a long delay" },
            { letter: "C", text: "noticed again and again" },
            { letter: "D", text: "not easily noticed" }
          ],
          correct: "D"
        },
        {
          id: "staircase",
          sol: "9.RV.1.F",
          stem: "Solberg compares plowing to sweeping a staircase while someone pours sand from the top in sentence 9 mainly to show that —",
          choices: [
            { letter: "A", text: "new snow keeps undoing the work as fast as it is done" },
            { letter: "B", text: "the trucks spread sand instead of salt on the roads" },
            { letter: "C", text: "the ridge route has stairs that must be cleared by hand" },
            { letter: "D", text: "the drivers would rather be doing a different job" }
          ],
          correct: "A"
        },
        {
          id: "relentless",
          sol: "9.RV.1.E",
          stem: "The author could have written busy instead of relentless in sentence 7. Compared with busy, the word relentless adds a sense that the work —",
          choices: [
            { letter: "A", text: "is mostly done by machines" },
            { letter: "B", text: "is easier than it looks" },
            { letter: "C", text: "never lets up or pauses" },
            { letter: "D", text: "pays better than other jobs" }
          ],
          correct: "C"
        },
        {
          id: "treacherous",
          sol: "9.RV.1.C",
          stem: "Which words from sentence 10 best help the reader understand the meaning of treacherous?",
          choices: [
            { letter: "A", text: "sharp curves and a steep drop" },
            { letter: "B", text: "the ridge is the most" },
            { letter: "C", text: "part of the county, with" },
            { letter: "D", text: "the road entirely" }
          ],
          correct: "A"
        },
        {
          id: "abate",
          sol: "9.RV.1.C",
          stem: "In sentence 11, the word abate most nearly means to —",
          choices: [
            { letter: "A", text: "begin suddenly" },
            { letter: "B", text: "move to the east" },
            { letter: "C", text: "freeze solid" },
            { letter: "D", text: "grow weaker" }
          ],
          correct: "D"
        },
        {
          id: "dispatch",
          sol: "9.RV.1.B",
          stem: "Sentence 5 explains what Gloria Achebe does at the dispatch desk. As used in sentence 4, dispatch refers to —",
          choices: [
            { letter: "A", text: "repairing trucks that break down" },
            { letter: "B", text: "writing the daily weather forecast" },
            { letter: "C", text: "sending workers where they are needed" },
            { letter: "D", text: "answering calls from news reporters" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rv-c47-spine-repair",
      family: "G9",
      title: "Mending the Spine",
      kind: "Vocabulary · 9.RV",
      blurb: "In a bookstore's back room, a binder and his summer apprentice decide which books to save.",
      level: 3,
      passage:
        "<p>" + N(1) + "In the back room of Lantern Street Books, behind a curtain that customers rarely notice, Farrukh Aliyev repairs the books that the front of the store cannot sell. " +
        N(2) + "Most arrive in poor shape: covers detached, corners crushed, and pages so <strong>brittle</strong> that they crack like dry leaves when turned too quickly. " +
        N(3) + "This summer, Bea Okafor, a high school junior, has been learning the work beside him.</p>" +
        "<p>" + N(4) + "The first lesson, Bea says, was patience. " +
        N(5) + "Rebinding a single cookbook took her nine days of <strong>painstaking</strong> work, measuring each strip of linen twice, brushing glue in strokes no wider than a pencil, and pressing the spine overnight between boards. " +
        N(6) + "\"You cannot hurry paste,\" Farrukh told her on the first day, \"any more than you can hurry bread.\"</p>" +
        "<p>" + N(7) + "Not every book can be saved. " +
        N(8) + "Before beginning, Farrukh decides whether a book is worth the effort to <strong>salvage</strong>, weighing its condition against its value to a future reader. " +
        N(9) + "A water-stained dictionary goes to the recycling bin; a battered family Bible with handwritten birthdays on the endpapers goes to the workbench. " +
        N(10) + "The decision is rarely about money.</p>" +
        "<p>" + N(11) + "Choosing the right glue matters as much as choosing the right book. " +
        N(12) + "Farrukh uses a wheat-starch paste that will <strong>adhere</strong> firmly to old paper yet can be softened with water years later if another binder needs to redo the repair. " +
        N(13) + "Cheap tape, by contrast, yellows within a decade and leaves a stain that no one can remove. " +
        N(14) + "He calls tape \"a repair that becomes a second injury.\"</p>" +
        "<p>" + N(15) + "The goal, he explains, is to restore a book's <strong>integrity</strong>, its ability to hold together and open properly, without pretending it is new. " +
        N(16) + "A good repair is <strong>unobtrusive</strong>; a reader should be able to turn the pages without ever thinking about the binder. " +
        N(17) + "When Bea finished the cookbook, she showed it to Farrukh expecting praise. " +
        N(18) + "He opened it, let it fall flat on the table, closed it, and handed it back without a word, which she later learned was the highest compliment he gave.</p>",
      claims: [
        {
          id: "brittle",
          sol: "9.RV.1.C",
          stem: "Which words from sentence 2 best help the reader understand the meaning of brittle?",
          choices: [
            { letter: "A", text: "covers detached" },
            { letter: "B", text: "most arrive in poor shape" },
            { letter: "C", text: "crack like dry leaves" },
            { letter: "D", text: "corners crushed" }
          ],
          correct: "C"
        },
        {
          id: "painstaking",
          sol: "9.RV.1.E",
          stem: "The author could have written careful instead of painstaking in sentence 5. Compared with careful, the word painstaking suggests work that —",
          choices: [
            { letter: "A", text: "demands long, exacting effort" },
            { letter: "B", text: "is done quickly and cheerfully" },
            { letter: "C", text: "causes the worker physical harm" },
            { letter: "D", text: "is mostly done by a machine" }
          ],
          correct: "A"
        },
        {
          id: "salvage",
          sol: "9.RV.1.B",
          stem: "As used in sentence 8, the word salvage most nearly means to —",
          choices: [
            { letter: "A", text: "sell for a profit" },
            { letter: "B", text: "copy by hand" },
            { letter: "C", text: "throw away" },
            { letter: "D", text: "rescue from loss" }
          ],
          correct: "D"
        },
        {
          id: "injury",
          sol: "9.RV.1.F",
          stem: "Farrukh calls tape a repair that becomes a second injury in sentence 14. This figurative statement suggests that tape —",
          choices: [
            { letter: "A", text: "is too expensive for a small bookstore" },
            { letter: "B", text: "eventually damages the book it was meant to fix" },
            { letter: "C", text: "can cut a binder's hands if used carelessly" },
            { letter: "D", text: "works well only on books that are already new" }
          ],
          correct: "B"
        },
        {
          id: "integrity",
          sol: "9.RV.1.B",
          stem: "The word integrity in sentence 15 shares a root with integer and entire. That root carries the idea of —",
          choices: [
            { letter: "A", text: "wholeness" },
            { letter: "B", text: "honesty" },
            { letter: "C", text: "newness" },
            { letter: "D", text: "weight" }
          ],
          correct: "A"
        },
        {
          id: "unobtrusive",
          sol: "9.RV.1.E",
          stem: "The author calls a good repair unobtrusive in sentence 16 rather than hidden. Compared with hidden, unobtrusive suggests that the repair —",
          choices: [
            { letter: "A", text: "has been covered up so no one can find it" },
            { letter: "B", text: "is bright enough to catch a reader's eye" },
            { letter: "C", text: "is present but does not draw attention" },
            { letter: "D", text: "will need to be redone in a few weeks" }
          ],
          correct: "C"
        },
        {
          id: "silence",
          sol: "9.RL.1.B",
          stem: "Based on sentence 18 and the phrase let it fall flat, readers can best infer that Farrukh —",
          choices: [
            { letter: "A", text: "was disappointed that Bea took nine days" },
            { letter: "B", text: "did not have time to look at the cookbook" },
            { letter: "C", text: "wanted Bea to start the repair over again" },
            { letter: "D", text: "judged the binding by how well it worked" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── PAIRED TEXTS ───────────────────────── */
    {
      id: "g9-dsr-c47-linden-street",
      family: "G9",
      title: "Linden Street, June 14",
      kind: "Paired texts · 9.DSR",
      blurb: "A committee's party announcement and a neighbor's letter asking for two changes.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From the Linden Street Block Party Committee</strong></p>" +
        "<p>" + N(1) + "The Linden Street Block Party returns on Saturday, June 14, from 2:00 to 10:00 p.m., and every household on the street is invited. " +
        N(2) + "For the first time, the city has approved a full street closure between Fifth and Seventh Avenues, which means children can ride bikes and draw with chalk without watching for cars. " +
        N(3) + "The committee has arranged a bounce house, a potluck table, and a live band that will play on the Ruiz family's front lawn from 6:00 until closing. " +
        N(4) + "We are asking each household to bring one dish to share and, if possible, a folding chair. " +
        N(5) + "Barricades will go up at 1:00 p.m. and come down by 11:00 p.m. " +
        N(6) + "Residents who need to drive in or out during the party should park on Sixth Avenue the night before. " +
        N(7) + "Last year more than two hundred people came, and many told us it was the first time they had met the families three doors down. " +
        N(8) + "Our goal this year is simple: a street where everyone feels welcome, from toddlers to grandparents.</p>" +
        "<p><strong>Text 2 — A Letter to the Committee</strong></p>" +
        "<p>" + N(9) + "Dear Committee: I want to say first that my family loves the block party, and my daughter has been counting the days since the flyer arrived. " +
        N(10) + "Still, I hope you will consider two changes before June 14. " +
        N(11) + "My mother, who lives with us, rides a medical van to her treatments, and on Saturdays her pickup is at 8:30 p.m. " +
        N(12) + "Parking on Sixth Avenue does not help her, because she cannot walk that distance. " +
        N(13) + "A single lane kept open at the north end, with a volunteer ready to move a barricade, would solve the problem. " +
        N(14) + "Second, I work night shifts at the hospital and sleep until mid-afternoon, so I am glad the music does not begin until six. " +
        N(15) + "However, a band playing until 10:00 p.m. will make bedtime hard for the several families on our block with infants. " +
        N(16) + "Ending the music at 9:00 would still leave three hours of celebration. " +
        N(17) + "If the goal is a street where everyone feels welcome, then the plan should work for the people who cannot easily leave it. " +
        N(18) + "With thanks, Yusuf Karimi, 612 Linden Street</p>",
      claims: [
        {
          id: "both",
          sol: "9.DSR.D",
          stem: "Which idea do the committee's announcement and Yusuf Karimi's letter both support?",
          choices: [
            { letter: "A", text: "The block party is worth holding because it brings neighbors together." },
            { letter: "B", text: "The block party should be moved to a different street this year." },
            { letter: "C", text: "The band should be replaced with recorded music on a speaker." },
            { letter: "D", text: "The street closure should be canceled to protect older residents." }
          ],
          correct: "A"
        },
        {
          id: "challenge",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 1 does Karimi most directly challenge in sentence 12?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "The committee's announcement and Karimi's letter differ mainly in how they view —",
          choices: [
            { letter: "A", text: "whether neighbors should bring food to share" },
            { letter: "B", text: "whether the party should be held in June" },
            { letter: "C", text: "whether children enjoy the bounce house" },
            { letter: "D", text: "whether the closure and band schedule suit everyone" }
          ],
          correct: "D"
        },
        {
          id: "voice",
          sol: "9.DSR.E",
          stem: "Compared with the committee's announcement, Karimi's letter sounds more —",
          choices: [
            { letter: "A", text: "angry and threatening" },
            { letter: "B", text: "personal and specific" },
            { letter: "C", text: "formal and official" },
            { letter: "D", text: "playful and joking" }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          stem: "Which TWO sentences from Text 2 most clearly show a conflict between the party plan and the needs of residents? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "conclude",
          sol: "9.DSR.E",
          stem: "A reader combining the Linden Street announcement and letter could best conclude that —",
          choices: [
            { letter: "A", text: "small changes could keep the party's goal while meeting Karimi's needs" },
            { letter: "B", text: "the committee ignored the city's rules when planning the closure" },
            { letter: "C", text: "most neighbors would prefer to cancel the party this year" },
            { letter: "D", text: "Karimi plans to stay indoors for the whole afternoon" }
          ],
          correct: "A"
        },
        {
          id: "echo",
          sol: "9.RI.2.B",
          stem: "Karimi repeats the committee's phrase about everyone feeling welcome in sentence 17 mainly to —",
          choices: [
            { letter: "A", text: "show that he did not read the flyer carefully" },
            { letter: "B", text: "suggest that the committee should resign" },
            { letter: "C", text: "use the committee's own goal to support his requests" },
            { letter: "D", text: "remind readers that the party is free to attend" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-dsr-c47-two-plates",
      family: "G9",
      title: "The Hand and the Factory",
      kind: "Paired texts · 9.DSR",
      blurb: "A potter defends the handmade cup; a designer defends the factory plate.",
      level: 3,
      passage:
        "<p><strong>Text 1 — The Dent in My Cup</strong></p>" +
        "<p>" + N(1) + "Every morning I drink from a cup that a stranger made thirty years ago, and every morning my thumb finds the shallow dent where her thumb once pressed the clay. " +
        N(2) + "That dent is not a flaw. " +
        N(3) + "It is a record of a person's decision, made in a few seconds at a spinning wheel, and it fits my hand as if she had planned for me. " +
        N(4) + "Handmade pottery asks more of us than factory dishes do. " +
        N(5) + "It costs more, it chips more easily, and no two pieces in a set are ever quite alike. " +
        N(6) + "But it also gives more back. " +
        N(7) + "When I use something made by a person, I am reminded that objects come from somewhere, and that someone's time and skill went into them. " +
        N(8) + "A factory mug can be perfectly useful, yet it tells me nothing about who made it. " +
        N(9) + "In a world that encourages us to buy, use, and replace, a handmade cup is a small argument for keeping things. " +
        N(10) + "I have broken many dishes over the years, but I have never thrown out a mended one.</p>" +
        "<p><strong>Text 2 — Good Design for Every Table</strong></p>" +
        "<p>" + N(11) + "Before a dinner plate reaches a store shelf, it may go through a full year of testing. " +
        N(12) + "Designers at large ceramics factories drop sample plates from counter height, run them through thousands of dishwasher cycles, and heat them in ovens to check that the glaze will not craze, or crack into a web of tiny lines. " +
        N(13) + "The result is a dish that a family can use daily for decades at a price nearly anyone can afford. " +
        N(14) + "Critics sometimes describe factory pottery as soulless, but that judgment overlooks the people involved. " +
        N(15) + "Each shape begins as a hand-drawn sketch and a model carved by a skilled designer; the factory simply repeats that person's choices thousands of times with great precision. " +
        N(16) + "Uniform sets also have practical value: plates stack neatly, and a broken one can be replaced with an exact match. " +
        N(17) + "Handmade work has its place, and many designers own pieces they treasure. " +
        N(18) + "But good design should not be a luxury, and a well-made factory plate puts it on every table.</p>",
      claims: [
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "The writers of The Dent in My Cup and Good Design for Every Table differ mainly in how they view —",
          choices: [
            { letter: "A", text: "whether pottery should be washed in a dishwasher" },
            { letter: "B", text: "whether a dish is better unique or uniform" },
            { letter: "C", text: "whether clay is the best material for dishes" },
            { letter: "D", text: "whether designers should sketch shapes by hand" }
          ],
          correct: "B"
        },
        {
          id: "challenge",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 1 does the designer in Text 2 most directly challenge in sentence 15?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "D"
        },
        {
          id: "agree",
          sol: "9.DSR.D",
          stem: "On which point would the potter and the designer most likely agree?",
          choices: [
            { letter: "A", text: "A handmade piece can be something a person treasures." },
            { letter: "B", text: "Factory dishes should cost as much as handmade ones." },
            { letter: "C", text: "Mended dishes are safer to use than new ones." },
            { letter: "D", text: "Every household should own a matching set of plates." }
          ],
          correct: "A"
        },
        {
          id: "except",
          sol: "9.DSR.E",
          stem: "All of the following appear in Good Design for Every Table EXCEPT —",
          choices: [
            { letter: "A", text: "a description of how plates are tested" },
            { letter: "B", text: "a response to critics of factory pottery" },
            { letter: "C", text: "a memory of a cup the writer uses daily" },
            { letter: "D", text: "a practical benefit of matching sets" }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which statement from The Dent in My Cup is closest to an opinion rather than a factual report?",
          choices: [
            { letter: "A", text: "a cup that a stranger made thirty years ago" },
            { letter: "B", text: "I have broken many dishes over the years" },
            { letter: "C", text: "a handmade cup is a small argument for keeping things" },
            { letter: "D", text: "every morning my thumb finds the shallow dent" }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          stem: "Which TWO sentences, one from each text, both point to a person's choices shaping a dish? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "conclude",
          sol: "9.DSR.E",
          stem: "A reader combining The Dent in My Cup with Good Design for Every Table could best conclude that —",
          choices: [
            { letter: "A", text: "factory plates are always stronger than handmade cups" },
            { letter: "B", text: "both kinds of dishes carry human skill but offer different benefits" },
            { letter: "C", text: "handmade pottery will soon disappear from most homes" },
            { letter: "D", text: "neither writer believes that a dish can be meaningful" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── POETRY ───────────────────────── */
    {
      id: "g9-rl-c47-grandmother-wheel",
      family: "G9",
      title: "Wheel",
      kind: "Poetry · 9.RL",
      blurb: "A grandmother, a garage, and a bowl that finally decides to stay.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My grandmother's wheel lives in the garage<br>" +
        L(2) + "under a sheet, like a sleeping horse.<br>" +
        L(3) + "On Sundays she pulls the sheet away<br>" +
        L(4) + "and the old motor clears its throat.<br>" +
        L(5) + "She slaps a fist of clay onto the head<br>" +
        L(6) + "and leans in close, her elbows locked,<br>" +
        L(7) + "as if she were listening for a heartbeat.<br>" +
        L(8) + "I watch the lump forget its lumpiness,<br>" +
        L(9) + "rise into a cone, bow down again,<br>" +
        L(10) + "rise, bow, rise, like someone learning manners.<br>" +
        L(11) + "\"Now you,\" she says, and moves aside.<br>" +
        L(12) + "My clay wobbles, wanders, slumps.<br>" +
        L(13) + "It will not listen to me yet.<br>" +
        L(14) + "She does not fix it. She only says,<br>" +
        L(15) + "\"The clay remembers every hand that rushed it.\"<br>" +
        L(16) + "So I slow down. I breathe the way she breathes.<br>" +
        L(17) + "The wheel hums its one long note.<br>" +
        L(18) + "Somewhere under my palms, a small bowl<br>" +
        L(19) + "decides to stay.<br>" +
        L(20) + "She claps once, softly, the way you'd thank a friend.</p>",
      claims: [
        {
          id: "horse",
          sol: "9.RL.2.A",
          stem: "In line 2 of Wheel, the covered wheel described as like a sleeping horse is an example of —",
          choices: [
            { letter: "A", text: "rhyme" },
            { letter: "B", text: "alliteration" },
            { letter: "C", text: "simile" },
            { letter: "D", text: "onomatopoeia" }
          ],
          correct: "C"
        },
        {
          id: "manners",
          sol: "9.RL.2.B",
          stem: "In lines 9 and 10, the clay rising and bowing like someone learning manners mainly suggests that the clay is —",
          choices: [
            { letter: "A", text: "slowly coming under the grandmother's control" },
            { letter: "B", text: "about to fly off the wheel and break" },
            { letter: "C", text: "too dry to be shaped into anything" },
            { letter: "D", text: "rude and refusing to cooperate" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "The poem Wheel is told from the point of view of —",
          choices: [
            { letter: "A", text: "the grandmother, remembering her first lesson" },
            { letter: "B", text: "a neighbor watching through the garage door" },
            { letter: "C", text: "the clay, describing the potter's hands" },
            { letter: "D", text: "a grandchild learning to use the wheel" }
          ],
          correct: "D"
        },
        {
          id: "remembers",
          sol: "9.RL.1.B",
          stem: "The grandmother's words in line 15 suggest that she believes —",
          choices: [
            { letter: "A", text: "the clay was used by someone else before" },
            { letter: "B", text: "hurrying shows up as flaws in the work" },
            { letter: "C", text: "the speaker should stop trying for today" },
            { letter: "D", text: "good potters can remember every bowl" }
          ],
          correct: "B"
        },
        {
          id: "repeat",
          sol: "9.RL.2.C",
          stem: "The poet repeats rise and bow in lines 9 and 10 most likely to —",
          choices: [
            { letter: "A", text: "echo the up-and-down rhythm of the clay on the wheel" },
            { letter: "B", text: "show that the speaker is bored by the lesson" },
            { letter: "C", text: "suggest that the grandmother is bowing to the speaker" },
            { letter: "D", text: "create a sudden shift from calm to danger" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of Wheel?",
          choices: [
            { letter: "A", text: "Old tools should be replaced with newer machines." },
            { letter: "B", text: "Talent is something a person either has or lacks." },
            { letter: "C", text: "Patience is learned by watching and slowing down." },
            { letter: "D", text: "Grandparents are usually stricter than parents." }
          ],
          correct: "C"
        },
        {
          id: "teacher",
          sol: "9.RL.1.C",
          stem: "Which line best shows that the grandmother lets the speaker learn by doing rather than by being rescued?",
          choices: [
            { letter: "A", text: "Line 3" },
            { letter: "B", text: "Line 6" },
            { letter: "C", text: "Line 20" },
            { letter: "D", text: "Line 14" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c47-outage",
      family: "G9",
      title: "Outage",
      kind: "Poetry · 9.RL",
      blurb: "A snowstorm silences a house, and a family hears what the hum was hiding.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "At 9:14 the house forgot its voice:<br>" +
        L(2) + "the refrigerator stopped mid-sentence,<br>" +
        L(3) + "the furnace swallowed what it meant to say,<br>" +
        L(4) + "and every clock went blank as an unasked question.<br>" +
        L(5) + "Outside, the snow kept on with its one task,<br>" +
        L(6) + "erasing the mailbox, the hedge, the neighbor's car,<br>" +
        L(7) + "rewriting the street in a language with no edges.<br>" +
        L(8) + "We found the candles in the junk drawer,<br>" +
        L(9) + "three of them, and a box of matches gone soft.<br>" +
        L(10) + "My brother complained, then stopped complaining.<br>" +
        L(11) + "My father dragged the mattress to the fireplace.<br>" +
        L(12) + "My mother, who never sits, sat.<br>" +
        L(13) + "In the small gold room the candles made,<br>" +
        L(14) + "we heard what the hum had been hiding:<br>" +
        L(15) + "the tick of the stove cooling,<br>" +
        L(16) + "the wind trying every window like a key,<br>" +
        L(17) + "our own four kinds of breathing.<br>" +
        L(18) + "Nobody reached for a screen. There were none to reach for.<br>" +
        L(19) + "By morning the power returned with a shudder;<br>" +
        L(20) + "the furnace coughed, the clocks blinked twelve, twelve, twelve,<br>" +
        L(21) + "and the house began talking again,<br>" +
        L(22) + "and I was sorry, a little, to hear it.</p>",
      claims: [
        {
          id: "personify",
          sol: "9.RL.2.A",
          stem: "In lines 1–3 of Outage, the poet describes the refrigerator and furnace as if they were —",
          choices: [
            { letter: "A", text: "animals hiding from the storm" },
            { letter: "B", text: "machines that had been unplugged" },
            { letter: "C", text: "guests leaving a noisy party" },
            { letter: "D", text: "people cut off in the middle of speaking" }
          ],
          correct: "D"
        },
        {
          id: "edges",
          sol: "9.RL.2.B",
          stem: "The phrase rewriting the street in a language with no edges (line 7) suggests that the snow —",
          choices: [
            { letter: "A", text: "has covered the street signs with ice" },
            { letter: "B", text: "smooths away outlines until the street looks unfamiliar" },
            { letter: "C", text: "makes it impossible for the family to read" },
            { letter: "D", text: "is falling in a sharp, dangerous pattern" }
          ],
          correct: "B"
        },
        {
          id: "mother",
          sol: "9.RL.1.C",
          stem: "Line 12, My mother, who never sits, sat, mainly suggests that the outage —",
          choices: [
            { letter: "A", text: "gives even the busiest family member a reason to rest" },
            { letter: "B", text: "makes the speaker's mother too tired to help" },
            { letter: "C", text: "causes the family to argue about the candles" },
            { letter: "D", text: "frightens the mother more than the children" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "9.RL.3.A",
          stem: "How do the speaker's feelings about the house's sounds in lines 19–22 differ from the way the silence is introduced in lines 1–4?",
          choices: [
            { letter: "A", text: "The speaker first welcomes the silence and later fears the noise." },
            { letter: "B", text: "The speaker is angry at first and calm by the end." },
            { letter: "C", text: "The silence first seems like a loss; later the speaker misses it." },
            { letter: "D", text: "The speaker hears nothing at first and then hears the storm." }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of lines 13–17, inside the small gold room the candles made, is best described as —",
          choices: [
            { letter: "A", text: "frantic and fearful" },
            { letter: "B", text: "hushed and attentive" },
            { letter: "C", text: "bored and restless" },
            { letter: "D", text: "bitter and mocking" }
          ],
          correct: "B"
        },
        {
          id: "key",
          sol: "9.RV.1.F",
          stem: "In line 16, the wind trying every window like a key suggests that the wind —",
          choices: [
            { letter: "A", text: "has broken one of the windows" },
            { letter: "B", text: "is too weak to be heard indoors" },
            { letter: "C", text: "makes a ringing, musical sound" },
            { letter: "D", text: "seems to be testing for a way in" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does Outage develop through the family's night by candlelight?",
          choices: [
            { letter: "A", text: "Losing everyday noise can help people notice each other." },
            { letter: "B", text: "Families should always keep extra candles ready." },
            { letter: "C", text: "Winter storms are more frightening for children." },
            { letter: "D", text: "Modern machines make homes safer than before." }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── DRAMA ───────────────────────── */
    {
      id: "g9-rl-c47-last-copy",
      family: "G9",
      title: "Last Copy",
      kind: "Drama · 9.RL",
      blurb: "One copy of a new mystery, two people who want it, and a name on brown paper.",
      level: 1,
      passage:
        "<p><em>Saturday afternoon at Castellanos Books. Rain streaks the front window. MARISOL, 17, stands behind the counter. Her brother BENNY, 13, is shelving paperbacks from a ladder. The bell over the door rings as MR. ADEYEMI, an elderly regular, enters and shakes out his umbrella.</em></p>" +
        "<p><strong>MR. ADEYEMI:</strong> " + N(1) + "Marisol, good afternoon. " + N(2) + "I am told the new Lucia Varga mystery came in today?</p>" +
        "<p><strong>MARISOL:</strong> " + N(3) + "It did. " + N(4) + "<em>(She glances at the single copy under the counter, wrapped in brown paper with her name on it.)</em> " + N(5) + "<em>(Aside)</em> One copy. " + N(6) + "One. " + N(7) + "And I have been waiting four months for it.</p>" +
        "<p><strong>BENNY:</strong> " + N(8) + "<em>(Calling from the ladder)</em> We sold the other two this morning, Mr. Adeyemi!</p>" +
        "<p><strong>MR. ADEYEMI:</strong> " + N(9) + "Ah. <em>(He sets his umbrella in the stand but does not take off his coat.)</em> " + N(10) + "Then I am too late again. " + N(11) + "My wife and I read every one of those books aloud together. " + N(12) + "She has been in the hospital this week, and I hoped to bring her the new one tomorrow.</p>" +
        "<p><strong>MARISOL:</strong> " + N(13) + "<em>(Aside, pressing her hand flat on the brown paper)</em> Of course she has.</p>" +
        "<p><strong>BENNY:</strong> " + N(14) + "<em>(Climbing down, looking from one to the other)</em> We can order another. " + N(15) + "It takes about a week.</p>" +
        "<p><strong>MR. ADEYEMI:</strong> " + N(16) + "A week is a long time in a hospital. " + N(17) + "<em>(He smiles, but buttons his coat.)</em> " + N(18) + "Thank you anyway, both of you.</p>" +
        "<p>" + N(19) + "<em>(He turns toward the door. MARISOL looks at the package, then at BENNY, who shrugs as if to say the decision is hers.)</em></p>" +
        "<p><strong>MARISOL:</strong> " + N(20) + "Mr. Adeyemi, wait. " + N(21) + "<em>(She pulls out the package and tears off the paper with her name.)</em> " + N(22) + "Someone ordered this and changed her mind.</p>" +
        "<p><strong>MR. ADEYEMI:</strong> " + N(23) + "<em>(Taking it carefully, with both hands)</em> Changed her mind? " + N(24) + "That was lucky for me.</p>" +
        "<p><strong>MARISOL:</strong> " + N(25) + "Very lucky. " + N(26) + "Tell your wife the first chapter takes place on a train.</p>" +
        "<p>" + N(27) + "<em>(He leaves. The bell rings. BENNY picks up the torn paper and reads the name written on it.)</em></p>" +
        "<p><strong>BENNY:</strong> " + N(28) + "You haven't read the first chapter.</p>" +
        "<p><strong>MARISOL:</strong> " + N(29) + "<em>(Already filling out an order slip)</em> The back cover says it's on a train. " + N(30) + "I have a week to find out.</p>",
      claims: [
        {
          id: "aside1",
          sol: "9.RL.1.D",
          stem: "Marisol's aside in sentences 5–7 mainly lets the audience know that she —",
          choices: [
            { letter: "A", text: "dislikes mystery novels" },
            { letter: "B", text: "badly wants the copy herself" },
            { letter: "C", text: "forgot to order more copies" },
            { letter: "D", text: "is annoyed with her brother" }
          ],
          correct: "B"
        },
        {
          id: "coat",
          sol: "9.RL.3.B",
          stem: "The stage direction in sentence 9, in which Mr. Adeyemi does not take off his coat, mainly suggests that he —",
          choices: [
            { letter: "A", text: "is feeling sick from the cold rain" },
            { letter: "B", text: "wants to show off his new coat" },
            { letter: "C", text: "is angry with the store's owners" },
            { letter: "D", text: "does not expect to stay very long" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "9.RL.1.D",
          stem: "Marisol's aside in sentence 13 creates dramatic irony because —",
          choices: [
            { letter: "A", text: "the audience knows she holds the copy he wants, but he does not" },
            { letter: "B", text: "Mr. Adeyemi already knows that Marisol is hiding the book" },
            { letter: "C", text: "Benny tells Mr. Adeyemi about the copy under the counter" },
            { letter: "D", text: "the audience does not learn why Mr. Adeyemi came in" }
          ],
          correct: "A"
        },
        {
          id: "shrug",
          sol: "9.RL.3.B",
          stem: "What does Benny's shrug in sentence 19 mainly show?",
          choices: [
            { letter: "A", text: "He does not understand what is happening." },
            { letter: "B", text: "He wants Mr. Adeyemi to leave the store." },
            { letter: "C", text: "He leaves the choice about the book to Marisol." },
            { letter: "D", text: "He is tired of shelving books all afternoon." }
          ],
          correct: "C"
        },
        {
          id: "fib",
          sol: "9.RL.1.D",
          stem: "When Marisol says in sentence 22 that someone ordered the book and changed her mind, her words —",
          choices: [
            { letter: "A", text: "reveal that she never wanted the book at all" },
            { letter: "B", text: "show that another customer canceled an order" },
            { letter: "C", text: "suggest that she is trying to raise the price" },
            { letter: "D", text: "hide her own sacrifice behind a kind fib" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of Marisol's final lines in sentences 29 and 30 is best described as —",
          choices: [
            { letter: "A", text: "cheerful and unbothered" },
            { letter: "B", text: "regretful and gloomy" },
            { letter: "C", text: "nervous and guilty" },
            { letter: "D", text: "sharp and impatient" }
          ],
          correct: "A"
        },
        {
          id: "paper",
          sol: "9.RL.1.D",
          stem: "In sentence 27, Benny reads the name on the torn paper before he speaks. This stage direction mainly serves to —",
          choices: [
            { letter: "A", text: "show that Benny is learning to read new words" },
            { letter: "B", text: "suggest that Benny plans to tell Mr. Adeyemi" },
            { letter: "C", text: "show that Benny now knows whose order it was" },
            { letter: "D", text: "explain why the bell over the door rings" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── FUNCTIONAL TEXT ───────────────────────── */
    {
      id: "g9-ri-c47-closure-permit",
      family: "G9",
      title: "Block Party Street Closure Permit",
      kind: "Functional text · 9.RI",
      blurb: "Harlow Falls explains how to close one block for a neighborhood party.",
      level: 1,
      passage:
        "<p><strong>Harlow Falls Department of Transportation — Block Party Street Closure Permit</strong></p>" +
        "<p><strong>Who may apply.</strong> " + N(1) + "Any resident of a residential street in Harlow Falls may request to close one block for a neighborhood gathering. " +
        N(2) + "Commercial streets, bus routes, and blocks with a fire station on them are not eligible.</p>" +
        "<p><strong>When to apply.</strong> " + N(3) + "Applications must be received at least 30 days before the event. " +
        N(4) + "Requests that arrive late will not be reviewed, even if the date is still open on the city calendar.</p>" +
        "<p><strong>What to include.</strong> " + N(5) + "Each application must include a completed request form, a simple map showing the block to be closed, and a petition signed by at least two-thirds of the households on that block. " +
        N(6) + "The petition shows that most neighbors agree to the closure, so only one signature per household is needed. " +
        N(7) + "There is a $25 processing fee, which is waived for first-time applicants.</p>" +
        "<p><strong>Rules on the day.</strong> " + N(8) + "Closures may last no longer than ten hours and must end by 10:00 p.m. " +
        N(9) + "Organizers must place the city's orange barricades at both ends of the block; barricades can be borrowed free of charge from the Public Works yard on Delmar Road. " +
        N(10) + "A clear lane at least twelve feet wide must remain open down the center of the street at all times so that fire trucks and ambulances can pass. " +
        N(11) + "Amplified music must stop by 9:00 p.m. " +
        N(12) + "Grills must be at least ten feet from any building, tree, or parked car, and a bucket of water or a fire extinguisher must be kept nearby.</p>" +
        "<p><strong>After the event.</strong> " + N(13) + "The block must be swept clean and the barricades returned by noon the following day. " +
        N(14) + "Organizers who leave the street littered may be denied a permit the next year.</p>" +
        "<p><strong>Questions?</strong> " + N(15) + "Call the Special Events Office at 555-0148, Monday through Friday, 8:00 a.m. to 4:30 p.m. " +
        N(16) + "Staff can also mail a paper form to residents without internet access or help residents who need the form in another language.</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.A",
          stem: "The main purpose of the Harlow Falls permit document is to —",
          choices: [
            { letter: "A", text: "persuade residents to hold more block parties" },
            { letter: "B", text: "explain the steps and rules for closing a street" },
            { letter: "C", text: "describe a block party that took place last year" },
            { letter: "D", text: "warn residents about the dangers of grilling" }
          ],
          correct: "B"
        },
        {
          id: "petition",
          sol: "9.RI.1.B",
          stem: "According to the permit document, what must the petition show?",
          choices: [
            { letter: "A", text: "That the organizer has lived on the block for a year" },
            { letter: "B", text: "That the fire department has approved the closure" },
            { letter: "C", text: "That every person on the block has signed it" },
            { letter: "D", text: "That at least two-thirds of households agree" }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "How is the Harlow Falls permit document mainly organized?",
          choices: [
            { letter: "A", text: "By headings that follow the process from applying to cleanup" },
            { letter: "B", text: "By comparing block parties in several different cities" },
            { letter: "C", text: "By listing complaints from residents and the city's replies" },
            { letter: "D", text: "By telling the story of one family's first block party" }
          ],
          correct: "A"
        },
        {
          id: "emergency",
          sol: "9.RI.3.A",
          stem: "Which TWO rules most directly make sure emergency vehicles can still respond during a block party? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "deadline",
          sol: "9.RI.1.B",
          stem: "A resident wants to hold a block party on June 20. Based on sentence 3, what is the latest date the city could receive the application?",
          choices: [
            { letter: "A", text: "June 1" },
            { letter: "B", text: "May 1" },
            { letter: "C", text: "May 21" },
            { letter: "D", text: "June 13" }
          ],
          correct: "C"
        },
        {
          id: "s6",
          sol: "9.RI.2.B",
          stem: "The writer includes sentence 6 in the permit document mainly to —",
          choices: [
            { letter: "A", text: "list the fees that applicants must pay" },
            { letter: "B", text: "explain why the petition is required and how to sign it" },
            { letter: "C", text: "describe where residents can borrow barricades" },
            { letter: "D", text: "remind residents to bring a map of the block" }
          ],
          correct: "B"
        },
        {
          id: "may",
          sol: "9.RI.1.C",
          stem: "Which sentence in the permit document describes a possible consequence rather than a firm requirement?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── ARGUMENT ───────────────────────── */
    {
      id: "g9-ri-c47-snow-days",
      family: "G9",
      title: "Let the Snow Decide",
      kind: "Argument · 9.RI",
      blurb: "A student writer argues that Ridgeline High should bring back real snow days.",
      level: 2,
      passage:
        "<p>" + N(1) + "Last winter, Ridgeline High replaced four of its five snow days with remote learning days, and the school board is now considering making the change permanent. " +
        N(2) + "The idea sounds efficient: students keep learning, and nobody has to make up lost days in June. " +
        N(3) + "But the board should keep traditional snow days, because remote storm days deliver little learning and take away something students genuinely need.</p>" +
        "<p>" + N(4) + "First, consider what remote snow days actually looked like. " +
        N(5) + "During the January storm, the power in much of the county went out for six hours, and students without power simply could not log on. " +
        N(6) + "The school's own records showed that only 61 percent of students completed that day's assignments, compared with 94 percent on an ordinary Tuesday. " +
        N(7) + "A day that leaves more than a third of the class behind is not a school day; it is a school day for some.</p>" +
        "<p>" + N(8) + "Second, teachers report that lessons planned for a classroom rarely survive a sudden move to a screen. " +
        N(9) + "One science teacher at Ridgeline described her storm-day lab as \"a video of me pouring water, watched by people in pajamas.\" " +
        N(10) + "Students may have been marked present, but few of them learned what the lab was designed to teach.</p>" +
        "<p>" + N(11) + "Supporters of remote days argue that make-up days in June waste time because students are already distracted by summer. " +
        N(12) + "That concern is fair, and June days are not perfect. " +
        N(13) + "Yet a June day still happens in a classroom, with every student present and every lab fully equipped, which is more than a storm day could offer.</p>" +
        "<p>" + N(14) + "Finally, a real snow day has value that does not show up on a report card. " +
        N(15) + "It is one of the few days in a crowded year when students can rest, help shovel a neighbor's walk, or simply watch the world turn white. " +
        N(16) + "A school year that never pauses teaches students that nothing, not even weather, should slow them down. " +
        N(17) + "Ridgeline should let the snow decide, at least once or twice a winter.</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          stem: "Which sentence best states the central claim of Let the Snow Decide?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "How does the student writer mainly organize the argument about snow days?",
          choices: [
            { letter: "A", text: "A claim, then numbered reasons, with an opposing view answered" },
            { letter: "B", text: "A story of one storm told from beginning to end" },
            { letter: "C", text: "A list of rules for remote learning days" },
            { letter: "D", text: "A comparison of schools in several states" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence offers the strongest evidence that remote snow days left many Ridgeline students behind?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "B"
        },
        {
          id: "counter",
          sol: "9.RI.3.A",
          stem: "How does the writer respond to the opposing view stated in sentence 11?",
          choices: [
            { letter: "A", text: "By ignoring it and moving on to the next reason" },
            { letter: "B", text: "By agreeing that remote days should replace June days" },
            { letter: "C", text: "By claiming that students are never distracted in June" },
            { letter: "D", text: "By admitting it is fair, then arguing June days still offer more" }
          ],
          correct: "D"
        },
        {
          id: "pajamas",
          sol: "9.RI.1.A",
          stem: "The science teacher's description in sentence 9 is included mainly to —",
          choices: [
            { letter: "A", text: "show that teachers enjoyed working from home" },
            { letter: "B", text: "illustrate how a hands-on lesson lost its value online" },
            { letter: "C", text: "suggest that students should dress better for class" },
            { letter: "D", text: "prove that science labs are too dangerous for school" }
          ],
          correct: "B"
        },
        {
          id: "shift",
          sol: "9.RI.2.A",
          stem: "In sentences 14–16, the argument shifts mainly from —",
          choices: [
            { letter: "A", text: "measurable learning to benefits that grades cannot show" },
            { letter: "B", text: "the writer's opinion to the opinions of the school board" },
            { letter: "C", text: "problems in June to problems with the school's heating" },
            { letter: "D", text: "reasons for remote days to reasons for longer summers" }
          ],
          correct: "A"
        },
        {
          id: "crowded",
          sol: "9.RV.1.E",
          stem: "In sentence 15, the writer calls the school year crowded rather than full. Compared with full, the word crowded suggests a year that is —",
          choices: [
            { letter: "A", text: "pleasantly busy with fun events" },
            { letter: "B", text: "shorter than it used to be" },
            { letter: "C", text: "organized in a careful order" },
            { letter: "D", text: "packed so tightly it feels pressured" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
