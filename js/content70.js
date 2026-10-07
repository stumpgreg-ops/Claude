/* SOL Labyrinth — v5.15 expansion: Grade 10 medium tier (content70). 21 original packs on kayaking, a puzzle
 * hunt, fossils and sign language: literary, informational, functional, argument, vocabulary, paired, poetry
 * and drama. Original text only. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── 1 · Literary · level 1 ───────────── */
    {
      id: "g10-rl-c70-eddyline",
      family: "G10",
      title: "Hips First, Head Last",
      kind: "Literary · 10.RL",
      blurb: "Amara tries her kayak roll in a real river for the first time.",
      level: 1,
      passage:
        "<p>" + N(1) + "Amara had practiced the roll forty times in the warm pool at the community center, but the river was not a pool. " +
        N(2) + "The water at Hollin's Bend was green and cold, and it moved even when it looked still. " +
        N(3) + "Her uncle Chidi floated beside her in his old red kayak, holding his paddle across his lap as if he had all afternoon. " +
        N(4) + "\"The river doesn't care how many times you did it indoors,\" he said. " +
        N(5) + "\"It only cares about this one.\" " +
        N(6) + "Amara tightened her spray skirt and took a breath that felt too small. " +
        N(7) + "She leaned forward, tipped, and the world turned upside down into a roar of bubbles. " +
        N(8) + "For a moment she forgot everything, and her paddle flailed like a broken wing. " +
        N(9) + "Then she felt the hull against her knees and remembered: hips first, head last. " +
        N(10) + "She snapped her hips, swept the blade across the surface, and came up gasping into the sunlight. " +
        N(11) + "Uncle Chidi did not cheer. " +
        N(12) + "He only nodded and said, \"Again.\" " +
        N(13) + "Amara laughed, wiped the water from her eyes, and tipped over a second time before she could talk herself out of it. " +
        N(14) + "This time the roll felt slower and calmer, as if the river were holding the boat for her instead of fighting it. " +
        N(15) + "When she surfaced, the cold no longer seemed like an enemy. " +
        N(16) + "It was simply the river, and she was learning its language.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of Amara's story?",
          choices: [
            { letter: "A", text: "Praise from family members matters more than any skill a person learns." },
            { letter: "B", text: "A skill becomes truly one's own when it is tested and then repeated." },
            { letter: "C", text: "Practicing indoors is a poor way to prepare for outdoor sports." },
            { letter: "D", text: "Cold rivers are too dangerous for beginners to paddle alone." }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the turning point of Amara's first roll in the river?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "D"
        },
        {
          id: "uncle",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Uncle Chidi's actions in sentences 3, 11 and 12 characterize him as someone who —",
          choices: [
            { letter: "A", text: "stays calm and expects steady practice rather than celebration" },
            { letter: "B", text: "is disappointed that Amara needed so long to learn the roll" },
            { letter: "C", text: "would rather be paddling alone than teaching his niece" },
            { letter: "D", text: "worries that Amara will be hurt in the cold, fast water" }
          ],
          correct: "A"
        },
        {
          id: "wing",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "The simile in sentence 8, her paddle flailed like a broken wing, suggests that Amara's movements are —",
          choices: [
            { letter: "A", text: "graceful and practiced, like a bird's" },
            { letter: "B", text: "slow and careful, because she is thinking" },
            { letter: "C", text: "panicked and unable to do their job" },
            { letter: "D", text: "strong enough to lift the boat at once" }
          ],
          correct: "C"
        },
        {
          id: "swept",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 10, the word swept most nearly means —",
          choices: [
            { letter: "A", text: "cleaned away with a brush" },
            { letter: "B", text: "moved in a wide, smooth arc" },
            { letter: "C", text: "won every part of a contest" },
            { letter: "D", text: "pushed suddenly by a wave" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The final two sentences (15–16) of the kayaking story mainly serve to —",
          choices: [
            { letter: "A", text: "warn that the river will be colder later in the season" },
            { letter: "B", text: "explain why Uncle Chidi refuses to cheer for his niece" },
            { letter: "C", text: "reveal that Amara plans to stop paddling for the day" },
            { letter: "D", text: "show Amara now sees the river as something to understand" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 2 · Literary · level 2 ───────────── */
    {
      id: "g10-rl-c70-lastclue",
      family: "G10",
      title: "Return to Where It Began",
      kind: "Literary · 10.RL",
      blurb: "A team captain races toward the wrong answer in a library puzzle hunt.",
      level: 2,
      passage:
        "<p>" + N(1) + "By four o'clock, the Riverside Library Puzzle Hunt had narrowed to two teams, and Tomasz Nowak was certain his would win. " +
        N(2) + "He had planned the route, assigned the roles, and timed every clue with a stopwatch app he checked like a heartbeat. " +
        N(3) + "His teammates, Wren and Davi, had mostly followed. " +
        N(4) + "The final clue was a sheet of twelve book titles with one letter circled in each, and beneath them a single line: Return to where the story began. " +
        N(5) + "Tomasz read the circled letters aloud, got nonsense, and decided at once that the answer was the old train depot across the river, where the first clue had been painted on a mural. " +
        N(6) + "\"Move,\" he said, already jogging. " +
        N(7) + "Wren did not move. " +
        N(8) + "She was studying the call numbers printed beside the titles, not the circled letters. " +
        N(9) + "\"They're out of order,\" she said quietly. " +
        N(10) + "\"If you shelve them the way a librarian would, the letters spell Reading Room.\" " +
        N(11) + "Tomasz opened his mouth to argue, then closed it. " +
        N(12) + "Across the lobby, the other team burst through the exit doors, sprinting toward the depot. " +
        N(13) + "He looked at the stopwatch, then at Wren, and slid the answer sheet across the table to her. " +
        N(14) + "\"You found it,\" he said. \"You turn it in.\" " +
        N(15) + "Ten minutes later the three of them sat in the Reading Room, where the hunt had started at noon, and watched the other captain stagger back through the doors, breathless and twenty minutes too late. " +
        N(16) + "Tomasz realized the room they had raced away from that morning had been waiting for them all day.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by the events of the puzzle hunt?",
          choices: [
            { letter: "A", text: "Careful planning always matters more than luck in a contest." },
            { letter: "B", text: "Libraries are better places for puzzles than city streets." },
            { letter: "C", text: "Success can depend on listening instead of rushing ahead." },
            { letter: "D", text: "Teammates should never question a captain's final decision." }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Which sentence best shows a change in Tomasz's attitude toward his team?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "A"
        },
        {
          id: "tomasz",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentence 2 characterizes Tomasz at the start of the hunt as someone who —",
          choices: [
            { letter: "A", text: "doubts his own ability to solve the clues" },
            { letter: "B", text: "relies on his teammates for every decision" },
            { letter: "C", text: "enjoys the hunt mainly for its social side" },
            { letter: "D", text: "wants control and measures success by speed" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The details in sentence 12 — the burst through the doors and the sprint toward the depot — mainly create a mood of —",
          choices: [
            { letter: "A", text: "quiet relief" },
            { letter: "B", text: "urgent pressure" },
            { letter: "C", text: "bored waiting" },
            { letter: "D", text: "gentle humor" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in Tomasz's puzzle hunt is most ironic?",
          choices: [
            { letter: "A", text: "Wren speaks quietly even though she has found the answer." },
            { letter: "B", text: "Tomasz times every clue with an app on his phone." },
            { letter: "C", text: "The final answer is the room the teams left at noon." },
            { letter: "D", text: "The first clue in the hunt was painted on a mural." }
          ],
          correct: "C"
        },
        {
          id: "stagger",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 15, the word stagger most nearly means —",
          choices: [
            { letter: "A", text: "walk unsteadily from being worn out" },
            { letter: "B", text: "arrange events at different times" },
            { letter: "C", text: "shock someone with surprising news" },
            { letter: "D", text: "march in proudly as the winner" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 3 · Literary · level 3 ───────────── */
    {
      id: "g10-rl-c70-slatefern",
      family: "G10",
      title: "The Stone Under the Tarp",
      kind: "Literary · 10.RL",
      blurb: "Hina hunts for a dramatic fossil while her grandfather works slowly downstream.",
      level: 3,
      passage:
        "<p>" + N(1) + "Hina had come to the creek for a trilobite, and by noon she had found nothing but gray flakes and a sunburn. " +
        N(2) + "Her grandfather Haruto worked farther downstream, splitting slabs of shale with a chisel so slowly that she wondered whether he was actually looking or simply enjoying the sound. " +
        N(3) + "Each time a layer came apart, he held it to the light, turned it once, and set it down without a word. " +
        N(4) + "\"You're too gentle,\" Hina called. " +
        N(5) + "\"At this rate we'll be here until dark.\" " +
        N(6) + "He smiled the way he did whenever she was being twelve instead of fifteen. " +
        N(7) + "\"The rock has waited three hundred million years,\" he said. \"It can wait for me to be careful.\" " +
        N(8) + "Hina rolled her eyes and went back to hammering, scattering chips across the bank like spilled cereal. " +
        N(9) + "By three o'clock her arms ached, and her bucket held only broken pieces she could not name. " +
        N(10) + "She dropped onto the flat stone she had used all day as a seat and a table, the one that held down a corner of their tarp against the wind. " +
        N(11) + "When she shifted, its edge flaked off in her hand. " +
        N(12) + "Pressed into the fresh surface, as fine as handwriting, lay the delicate fan of an ancient fern, every vein still traced in black. " +
        N(13) + "She stared at it for a long time. " +
        N(14) + "Then, without quite deciding to, she picked up her chisel, set it against the next layer, and tapped once, lightly, the way she had watched her grandfather do all afternoon.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about Hina and Haruto?",
          choices: [
            { letter: "A", text: "Young people rarely listen to advice from older relatives." },
            { letter: "B", text: "Hard physical work is the surest way to make a discovery." },
            { letter: "C", text: "Fossils are most often found in places no one expects." },
            { letter: "D", text: "Patient attention can reveal what impatience overlooks." }
          ],
          correct: "D"
        },
        {
          id: "haruto",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentence 6 suggests that Haruto regards Hina's complaint with —",
          choices: [
            { letter: "A", text: "fond amusement at her impatience" },
            { letter: "B", text: "sharp anger at her lack of respect" },
            { letter: "C", text: "worry that she is growing too tired" },
            { letter: "D", text: "surprise that she noticed his method" }
          ],
          correct: "A"
        },
        {
          id: "handwriting",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In sentence 12, comparing the fern to handwriting suggests that the fossil —",
          choices: [
            { letter: "A", text: "has been scratched into the stone by an earlier collector" },
            { letter: "B", text: "is finely detailed, almost like a message left behind" },
            { letter: "C", text: "is too faint for Hina to make out without a lens" },
            { letter: "D", text: "looks like a page torn out of Hina's field notebook" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation at the creek is most ironic?",
          choices: [
            { letter: "A", text: "Haruto smiles even though Hina has criticized his slow method." },
            { letter: "B", text: "Hina gets a sunburn even though she spends all day hunting." },
            { letter: "C", text: "The fossil Hina wanted was in the stone she sat on all day." },
            { letter: "D", text: "Hina's bucket holds many pieces even though none are useful." }
          ],
          correct: "C"
        },
        {
          id: "close",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author ends the story with Hina tapping the stone once, lightly (sentence 14), mainly to —",
          choices: [
            { letter: "A", text: "suggest that her arms are too tired to keep hammering hard" },
            { letter: "B", text: "hint that she plans to hide the fern from her grandfather" },
            { letter: "C", text: "show she has taken on Haruto's patient way without being told" },
            { letter: "D", text: "explain how a chisel splits shale into thin, even layers" }
          ],
          correct: "C"
        },
        {
          id: "delicate",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author calls the fern delicate rather than small in sentence 12. Compared with small, delicate suggests that the fern is —",
          choices: [
            { letter: "A", text: "too tiny to be worth keeping" },
            { letter: "B", text: "ordinary and easy to replace" },
            { letter: "C", text: "dull compared with a trilobite" },
            { letter: "D", text: "finely made and easily harmed" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 4 · Literary · level 2 ───────────── */
    {
      id: "g10-rl-c70-quietkitchen",
      family: "G10",
      title: "Flour Everywhere",
      kind: "Literary · 10.RL",
      blurb: "Rahim tries out the signs he has practiced on his first shift with a Deaf coworker.",
      level: 2,
      passage:
        "<p>" + N(1) + "For three weeks Rahim had practiced signs in front of his bedroom mirror, but on Saturday morning at Lark Street Bakery, his hands forgot everything. " +
        N(2) + "His new coworker, Esther, was Deaf, and the manager had asked Rahim to show her the closing checklist. " +
        N(3) + "He held up the clipboard, pointed at it, and smiled too widely, the way people smile in airports when they do not speak the language. " +
        N(4) + "Esther waited, patient as a teacher on the first day of school. " +
        N(5) + "Finally Rahim signed what he hoped meant \"I'm learning,\" but his fingers tangled, and Esther's eyebrows rose. " +
        N(6) + "She laughed, not unkindly, and showed him the sign again, slower, guiding his wrist with two fingers. " +
        N(7) + "Then she pointed to herself and spelled her name with her fingers: E-S-T-H-E-R. " +
        N(8) + "Rahim spelled his own name back, so carefully that it took nearly a minute. " +
        N(9) + "For the rest of the shift, the kitchen was quiet in a way he had never noticed before. " +
        N(10) + "Instead of shouting over the mixers, they tapped shoulders, pointed, and invented a sign for the stubborn oven door that they both had to kick shut. " +
        N(11) + "By closing time the checklist was done, and he had learned eleven new signs, including one for \"flour everywhere.\" " +
        N(12) + "When his mother picked him up, she asked how the new girl was. " +
        N(13) + "Rahim realized he had spent the whole shift talking with Esther and had forgotten to be afraid that he could not.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Flour Everywhere\"?",
          choices: [
            { letter: "A", text: "Communication grows from patience and effort, not perfect skill." },
            { letter: "B", text: "Jobs in busy kitchens are too loud for people to talk at all." },
            { letter: "C", text: "Learning a language from videos is better than learning in person." },
            { letter: "D", text: "New workers should always be trained by the store's manager." }
          ],
          correct: "A"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the turning point in Rahim's first conversation with Esther?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "B"
        },
        {
          id: "esther",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 4 and 6 characterize Esther as —",
          choices: [
            { letter: "A", text: "annoyed by having to train with a beginner" },
            { letter: "B", text: "shy and unwilling to correct a coworker" },
            { letter: "C", text: "patient and good-humored with Rahim" },
            { letter: "D", text: "strict about following the checklist" }
          ],
          correct: "C"
        },
        {
          id: "quiet",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The phrase quiet in a way he had never noticed before (sentence 9) mainly conveys a mood of —",
          choices: [
            { letter: "A", text: "lonely silence after an argument" },
            { letter: "B", text: "tense waiting before a mistake" },
            { letter: "C", text: "dull boredom during a slow shift" },
            { letter: "D", text: "calm closeness and new attention" }
          ],
          correct: "D"
        },
        {
          id: "ovensign",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author includes the invented sign for the oven door in sentence 10 mainly to —",
          choices: [
            { letter: "A", text: "show that the bakery's equipment needs repair" },
            { letter: "B", text: "show the two building a shared, playful language" },
            { letter: "C", text: "suggest that Rahim still cannot sign real words" },
            { letter: "D", text: "explain why the shift took longer than usual" }
          ],
          correct: "B"
        },
        {
          id: "invent",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word invented in sentence 10 shares the root ven- (\"come\") with convene and venue. The root suggests that to invent something is to —",
          choices: [
            { letter: "A", text: "come upon or come up with it" },
            { letter: "B", text: "copy it exactly from a source" },
            { letter: "C", text: "send it away to someone else" },
            { letter: "D", text: "break it into several parts" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 5 · Literary · level 3 ───────────── */
    {
      id: "g10-rl-c70-rapidsrace",
      family: "G10",
      title: "Below Breaker Ledge",
      kind: "Literary · 10.RL",
      blurb: "Kofi has trained two summers to pass his rival in one rapid. Then she disappears.",
      level: 3,
      passage:
        "<p>" + N(1) + "For two summers Kofi had trained for one stretch of the Callan River: the half mile below Breaker Ledge, where the water folded over itself like a gray blanket being shaken. " +
        N(2) + "Every morning he had timed himself through it, imagining the same finish, his bow crossing the line a full length ahead of Ingrid Halvorsen, who had beaten him at every regional race since they were thirteen. " +
        N(3) + "Now the ledge was fifty yards ahead, and Ingrid was exactly where he had pictured her, half a length in front. " +
        N(4) + "He dug in. " +
        N(5) + "The river roared, and the spray turned the sky white. " +
        N(6) + "Then her boat simply vanished. " +
        N(7) + "Where Ingrid had been, there was only a red hull, upside down, spinning slowly in the churning hole at the base of the ledge. " +
        N(8) + "Kofi counted, waiting for her roll. " +
        N(9) + "It did not come. " +
        N(10) + "He had paddled this stretch a hundred times, but he had never once practiced what to do here. " +
        N(11) + "His hands decided before his mind did. " +
        N(12) + "He swung toward the hole, braced against the current, and pushed the bow of his boat beside her hull so she could grab it, the way their coaches had drilled in safety class. " +
        N(13) + "Her hand found the grab loop. " +
        N(14) + "She came up coughing, furious at the river and not, he saw, at him. " +
        N(15) + "Behind them, three paddlers he had never once worried about slid past and disappeared around the bend. " +
        N(16) + "Kofi finished fifth. " +
        N(17) + "The next morning, the newspaper ran one photograph from the race, and it was not of the winner.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Below Breaker Ledge\"?",
          choices: [
            { letter: "A", text: "Rivals can never become true friends after years of competing." },
            { letter: "B", text: "Hard training guarantees success in a race against strong rivals." },
            { letter: "C", text: "A person's defining choice may be one no plan prepared him for." },
            { letter: "D", text: "Safety classes are less useful than experience on a real river." }
          ],
          correct: "C"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The central conflict Kofi faces at Breaker Ledge is best described as a struggle between —",
          choices: [
            { letter: "A", text: "his long-held goal and the need to help someone in danger" },
            { letter: "B", text: "his loyalty to his coaches and his loyalty to his family" },
            { letter: "C", text: "his fear of the rapid and his wish to impress the reporters" },
            { letter: "D", text: "his own boat's design and the speed of the river's current" }
          ],
          correct: "A"
        },
        {
          id: "blanket",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In sentence 1, comparing the water below the ledge to a gray blanket being shaken suggests that the rapid is —",
          choices: [
            { letter: "A", text: "warm and comforting to paddle through" },
            { letter: "B", text: "shallow, still and easy to read" },
            { letter: "C", text: "quiet enough to hear other paddlers" },
            { letter: "D", text: "rough and constantly rolling over" }
          ],
          correct: "D"
        },
        {
          id: "furious",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "In sentence 14, the phrase furious at the river and not, he saw, at him suggests that Ingrid —",
          choices: [
            { letter: "A", text: "blames Kofi for slowing her down near the finish line" },
            { letter: "B", text: "is angry about capsizing but grateful for Kofi's help" },
            { letter: "C", text: "is too shaken by the cold to notice who rescued her" },
            { letter: "D", text: "wants to restart the race as soon as she is back up" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in Kofi's race is most ironic?",
          choices: [
            { letter: "A", text: "Ingrid wears a red hull that is easy to see in the white spray." },
            { letter: "B", text: "Kofi counts in his head while he waits for Ingrid to roll up." },
            { letter: "C", text: "The newspaper prints just one photograph from the whole race." },
            { letter: "D", text: "After training to pass Ingrid, Kofi stops for her and both lose." }
          ],
          correct: "D"
        },
        {
          id: "photo",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "The final sentence of \"Below Breaker Ledge\" (sentence 17) mainly serves to —",
          choices: [
            { letter: "A", text: "imply, without stating it, that people valued the rescue over the win" },
            { letter: "B", text: "reveal that Kofi was angry at the paper for ignoring the true winner" },
            { letter: "C", text: "explain that the race officials decided to cancel the final results" },
            { letter: "D", text: "suggest that Ingrid will refuse to race against Kofi in the future" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 6 · Informational · level 1 ───────────── */
    {
      id: "g10-ri-c70-hullshape",
      family: "G10",
      title: "Shaped for the Water",
      kind: "Informational · 10.RI",
      blurb: "How length, rocker and chine change the way a kayak behaves.",
      level: 1,
      passage:
        "<p>" + N(1) + "A kayak may look like a simple pointed tube, but nearly every curve of its hull is a decision about how the boat will behave. " +
        N(2) + "Designers begin with length. " +
        N(3) + "A long, narrow sea kayak, often more than sixteen feet, glides straight and fast across open water, which makes it ideal for paddlers covering many miles. " +
        N(4) + "A short whitewater kayak, sometimes under eight feet, gives up that speed in exchange for the ability to spin quickly in tight rapids. " +
        N(5) + "Next comes rocker, the upward curve of the hull from the middle toward the bow and stern. " +
        N(6) + "A boat with a lot of rocker sits on the water like a banana on a table, with only its center touching, so it turns easily but tends to wander off course. " +
        N(7) + "A boat with little rocker holds a straight line but resists turning. " +
        N(8) + "Finally, designers consider the chine, the place where the bottom of the hull meets the sides. " +
        N(9) + "A hard chine forms a sharp edge that lets a paddler tilt the boat and carve a turn, while a soft chine is rounded and feels smoother in choppy waves. " +
        N(10) + "Because every feature trades one strength for another, no single kayak is best at everything. " +
        N(11) + "Experienced paddlers like to say that the right boat is not the fastest or the steadiest one but the one that fits the water you plan to paddle. " +
        N(12) + "For beginners, rental shops usually recommend a wide recreational kayak, which feels stable on calm lakes even though it is slow.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"Shaped for the Water\"?",
          choices: [
            { letter: "A", text: "Short whitewater kayaks are the most useful boats for beginners." },
            { letter: "B", text: "Kayak features involve trade-offs that suit different waters." },
            { letter: "C", text: "Rental shops know more about kayak design than paddlers do." },
            { letter: "D", text: "The chine is the most important part of any kayak's hull." }
          ],
          correct: "B"
        },
        {
          id: "drawback",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence best supports the idea that a design feature can bring a drawback along with a benefit?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "saying",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes the paddlers' saying in sentence 11 mainly to —",
          choices: [
            { letter: "A", text: "reinforce that the best kayak depends on where it is used" },
            { letter: "B", text: "argue that speed matters more than steadiness on a lake" },
            { letter: "C", text: "introduce a new feature that designers have not considered" },
            { letter: "D", text: "show that experienced paddlers disagree with designers" }
          ],
          correct: "A"
        },
        {
          id: "order",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 2 through 9 of the kayak article mainly organized?",
          choices: [
            { letter: "A", text: "as a problem followed by several failed solutions" },
            { letter: "B", text: "as a history of kayaks from oldest to newest" },
            { letter: "C", text: "as a series of design features and their effects" },
            { letter: "D", text: "as an argument with a claim and a counterclaim" }
          ],
          correct: "C"
        },
        {
          id: "banana",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 6, the author compares a boat with a lot of rocker to a banana on a table mainly to —",
          choices: [
            { letter: "A", text: "suggest that such boats are too flimsy for real rapids" },
            { letter: "B", text: "help readers picture a curved hull touching only in the middle" },
            { letter: "C", text: "show that kayak designers borrow ideas from everyday food" },
            { letter: "D", text: "explain why boats with rocker are painted bright yellow" }
          ],
          correct: "B"
        },
        {
          id: "carve",
          sol: "10.RV.1.F",
          sub: "10.RV.1.F.1",
          stem: "In sentence 9, the phrase carve a turn most nearly means —",
          choices: [
            { letter: "A", text: "cut a design into the wooden hull" },
            { letter: "B", text: "divide the river into equal parts" },
            { letter: "C", text: "slow the boat by dragging the paddle" },
            { letter: "D", text: "make a clean, curving change of course" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 7 · Informational · level 2 ───────────── */
    {
      id: "g10-ri-c70-stonetime",
      family: "G10",
      title: "How Stone Keeps Time",
      kind: "Informational · 10.RI",
      blurb: "Why fossils form so rarely, and what that means for the record they leave.",
      level: 2,
      passage:
        "<p>" + N(1) + "Most living things leave no trace at all. " +
        N(2) + "When a plant or animal dies, scavengers, bacteria and weather usually break it down within weeks, and its atoms return to the soil, the air and the sea. " +
        N(3) + "For a fossil to form, that ordinary process has to be interrupted. " +
        N(4) + "The most common interruption is rapid burial. " +
        N(5) + "A fish that sinks into the mud of a quiet lake, or a leaf swept onto a riverbank during a flood, may be covered by sediment before decay can finish its work. " +
        N(6) + "Over thousands of years, more layers pile on top, and their weight presses the lower layers into rock. " +
        N(7) + "Meanwhile, groundwater seeps through the buried remains and slowly deposits minerals such as silica or calcite into the tiny spaces in bone, shell or wood. " +
        N(8) + "In some fossils the original material is replaced almost molecule by molecule, so that a petrified log can preserve the rings of a tree that grew millions of years ago. " +
        N(9) + "Not every fossil is a body part, however. " +
        N(10) + "Footprints, burrows, nests and even tooth marks can be preserved as trace fossils, which record what ancient creatures did rather than what they looked like. " +
        N(11) + "Because the right conditions are so rare, scientists estimate that only a tiny fraction of all the species that ever lived have left any fossil record. " +
        N(12) + "The fossils we have are therefore less like a complete photo album than like a few scattered snapshots, and paleontologists must be careful about what those snapshots can and cannot tell them.</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which of these best summarizes \"How Stone Keeps Time\"?",
          choices: [
            { letter: "A", text: "Trace fossils such as footprints are more useful to scientists than bones." },
            { letter: "B", text: "Petrified logs can preserve tree rings from millions of years ago." },
            { letter: "C", text: "Scavengers and bacteria destroy nearly all fossils after they form." },
            { letter: "D", text: "Fossils need rare conditions to form, so the fossil record is partial." }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence provides the most direct evidence that the fossil record is incomplete?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "A"
        },
        {
          id: "pivot",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "In the fossil article, sentence 9 functions mainly as —",
          choices: [
            { letter: "A", text: "a summary of the steps of rapid burial" },
            { letter: "B", text: "a transition to a second kind of fossil" },
            { letter: "C", text: "a counterclaim against the opening idea" },
            { letter: "D", text: "an example of how minerals replace bone" }
          ],
          correct: "B"
        },
        {
          id: "album",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The comparison of fossils to scattered snapshots rather than a complete photo album (sentence 12) mainly emphasizes that —",
          choices: [
            { letter: "A", text: "photographs of fossils are a useful tool for paleontologists" },
            { letter: "B", text: "most fossils are too small to study without a microscope" },
            { letter: "C", text: "fossils offer only brief, partial glimpses of ancient life" },
            { letter: "D", text: "the oldest fossils have faded more than the newest ones" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The tone of the final sentence of the fossil article is best described as —",
          choices: [
            { letter: "A", text: "cautious and thoughtful" },
            { letter: "B", text: "excited and boastful" },
            { letter: "C", text: "dismissive and bored" },
            { letter: "D", text: "alarmed and urgent" }
          ],
          correct: "A"
        },
        {
          id: "petr",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word petrified in sentence 8 contains the root petr- (\"rock\"), as in petroleum. Based on this root, a petrified log is one that has —",
          choices: [
            { letter: "A", text: "been frightened by an animal" },
            { letter: "B", text: "floated far down a river" },
            { letter: "C", text: "rotted away into the soil" },
            { letter: "D", text: "been turned into stone" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 8 · Informational · level 3 ───────────── */
    {
      id: "g10-ri-c70-signgrammar",
      family: "G10",
      title: "Grammar in the Air",
      kind: "Informational · 10.RI",
      blurb: "Sign languages are complete languages, with grammar built from space and the face.",
      level: 3,
      passage:
        "<p>" + N(1) + "A common misunderstanding about sign languages is that they are simply gestures, or a way of spelling out spoken words letter by letter. " +
        N(2) + "In fact, sign languages are complete languages, with their own vocabularies, grammar rules and regional accents. " +
        N(3) + "They are also not universal. " +
        N(4) + "American Sign Language and British Sign Language, for example, are so different that signers of one cannot easily understand the other, even though people in both countries speak English. " +
        N(5) + "Much of a sign language's grammar works in ways that spoken languages cannot copy. " +
        N(6) + "A signer telling a story might place one character in the space to her left and another to her right; afterward, simply moving a sign between those spots shows who did what to whom. " +
        N(7) + "Facial expressions carry grammar as well. " +
        N(8) + "In American Sign Language, raised eyebrows can turn a statement into a yes-or-no question, while lowered brows often mark questions that ask who, what or where. " +
        N(9) + "To a newcomer these expressions may look like emotion, but to a fluent signer they work much like punctuation or word order. " +
        N(10) + "Researchers who study language development have found that Deaf children raised with a sign language from birth reach early milestones, such as first words and first short sentences, on roughly the same schedule as hearing children learning to speak. " +
        N(11) + "That finding suggests that the human capacity for language is not tied to the voice at all. " +
        N(12) + "It is tied to the mind, which will build grammar out of whatever channel it is given: sound, or hands, face and space.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"Grammar in the Air\"?",
          choices: [
            { letter: "A", text: "Sign languages are full languages whose grammar uses space and the face." },
            { letter: "B", text: "American and British signers should agree on one shared sign language." },
            { letter: "C", text: "Facial expressions in sign languages mainly show the signer's feelings." },
            { letter: "D", text: "Deaf children learn to sign more quickly than hearing children speak." }
          ],
          correct: "A"
        },
        {
          id: "universal",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence best supports the claim that sign languages are not universal?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        },
        {
          id: "research",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes the research finding in sentence 10 mainly to —",
          choices: [
            { letter: "A", text: "argue that hearing children should learn to sign before speaking" },
            { letter: "B", text: "support the idea that language ability comes from the mind" },
            { letter: "C", text: "explain how eyebrows mark different kinds of questions" },
            { letter: "D", text: "show that researchers disagree about how languages develop" }
          ],
          correct: "B"
        },
        {
          id: "opening",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Sentences 1 and 2 of \"Grammar in the Air\" are organized mainly to —",
          choices: [
            { letter: "A", text: "compare two sign languages from different countries" },
            { letter: "B", text: "list the steps a newcomer takes to learn signing" },
            { letter: "C", text: "describe a cause and the effects that follow it" },
            { letter: "D", text: "present a misconception and then correct it" }
          ],
          correct: "D"
        },
        {
          id: "together",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which conclusion is best supported by sentences 8 and 9 of the sign language article together?",
          choices: [
            { letter: "A", text: "Fluent signers try to hide their emotions while signing." },
            { letter: "B", text: "Signers can ask questions only by using their eyebrows." },
            { letter: "C", text: "A look that seems emotional may be doing grammatical work." },
            { letter: "D", text: "Newcomers understand facial grammar better than signers." }
          ],
          correct: "C"
        },
        {
          id: "capacity",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 11, the word capacity most nearly means —",
          choices: [
            { letter: "A", text: "natural ability" },
            { letter: "B", text: "amount of space" },
            { letter: "C", text: "official position" },
            { letter: "D", text: "greatest speed" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 9 · Informational · level 1 ───────────── */
    {
      id: "g10-ri-c70-huntdesign",
      family: "G10",
      title: "Five Months for One Saturday",
      kind: "Informational · 10.RI",
      blurb: "How a high school puzzle club builds its yearly hunt.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every spring, the Eastbrook High Puzzle Club turns its school into a giant game board for one Saturday. " +
        N(2) + "Teams of four race through about twenty puzzles hidden in hallways, the gym and the courtyard. " +
        N(3) + "Building the hunt takes the club almost five months. " +
        N(4) + "The work starts in November, when members choose a theme, such as a lost museum or a voyage to the moon. " +
        N(5) + "In December and January, each member writes two or three puzzles that fit the theme, from word searches with a twist to locked boxes that open only with a code. " +
        N(6) + "February is for testing. " +
        N(7) + "Club members who have never seen a puzzle try to solve it while the writer watches silently, taking notes on every place the testers get stuck. " +
        N(8) + "Club adviser Mr. Halloran calls testing the most important step: \"A puzzle that makes sense to the person who wrote it can be impossible for everyone else.\" " +
        N(9) + "Puzzles that take testers more than forty minutes are revised or cut. " +
        N(10) + "Finally, in March, the club designs the metapuzzle, a last challenge that can be solved only with one word from each earlier answer. " +
        N(11) + "Because of the metapuzzle, a team cannot skip puzzles and still win. " +
        N(12) + "Last year more than ninety students took part, and the winning team edged out second place by just six minutes.</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "What is the author's main idea in \"Five Months for One Saturday\"?",
          choices: [
            { letter: "A", text: "Puzzle hunts are more popular than other school clubs." },
            { letter: "B", text: "Most puzzles in the hunt are too hard to finish quickly." },
            { letter: "C", text: "Building the hunt takes careful writing, testing and revising." },
            { letter: "D", text: "The metapuzzle is the only puzzle that decides the winner." }
          ],
          correct: "C"
        },
        {
          id: "reason",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which sentence gives the reason a team cannot skip puzzles in the Eastbrook hunt and still win?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "B"
        },
        {
          id: "quote",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes Mr. Halloran's words in sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "explain why testing puzzles matters so much" },
            { letter: "B", text: "show that the adviser writes most of the puzzles" },
            { letter: "C", text: "warn readers that some puzzles are impossible" },
            { letter: "D", text: "describe the theme the club chose last year" }
          ],
          correct: "A"
        },
        {
          id: "order",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Sentences 4 through 10 of the puzzle club article are organized mainly —",
          choices: [
            { letter: "A", text: "by comparing this year's hunt with last year's" },
            { letter: "B", text: "by listing problems and then their solutions" },
            { letter: "C", text: "from the most important step to the least" },
            { letter: "D", text: "in time order, following the months of work" }
          ],
          correct: "D"
        },
        {
          id: "silent",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "In sentence 7, the detail that the writer watches silently suggests that —",
          choices: [
            { letter: "A", text: "writers are not allowed to attend the testing sessions" },
            { letter: "B", text: "testers find it rude when writers talk during puzzles" },
            { letter: "C", text: "the writer gives no hints, so real trouble spots show" },
            { letter: "D", text: "the writer has already forgotten how to solve it" }
          ],
          correct: "C"
        },
        {
          id: "edged",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "In sentence 12, the author says the winners edged out second place rather than beat it. Compared with beat, edged out suggests a win that was —",
          choices: [
            { letter: "A", text: "unfair to the other team" },
            { letter: "B", text: "very close and narrow" },
            { letter: "C", text: "easy and expected" },
            { letter: "D", text: "decided by the judges" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 10 · Informational · level 2 ───────────── */
    {
      id: "g10-ri-c70-preplab",
      family: "G10",
      title: "The Window on the Prep Lab",
      kind: "Informational · 10.RI",
      blurb: "Museum visitors watch preparators free fossils from rock, one grain at a time.",
      level: 2,
      passage:
        "<p>" + N(1) + "Visitors to the Harlow Natural History Museum can watch a part of science that usually happens out of sight. " +
        N(2) + "Behind a wall of glass on the second floor, preparators work on fossils that arrived from the field still locked inside blocks of rock and plaster. " +
        N(3) + "A preparator's job is to free the fossil without damaging it, and the work is slower than most visitors expect. " +
        N(4) + "First, the preparator cuts away the plaster jacket that protected the block on its trip from the dig site. " +
        N(5) + "Next, she studies the rock under a microscope to find where stone ends and bone begins, a line that can be thinner than a fingernail. " +
        N(6) + "Then she removes the rock grain by grain, often with an air scribe, a tool like a tiny jackhammer that vibrates thousands of times a minute. " +
        N(7) + "Fragile areas are brushed with a liquid glue that hardens and holds cracks together. " +
        N(8) + "Lead preparator Noor Haddad estimates that a single vertebra the size of a fist can take forty hours. " +
        N(9) + "\"People ask whether I get bored,\" she says. \"I tell them I'm the first person in a hundred million years to see this surface.\" " +
        N(10) + "The glass wall was added five years ago, and it has changed the lab in unexpected ways. " +
        N(11) + "Children press their faces to it and ask questions through a small intercom, and volunteers report that some return week after week to check on \"their\" dinosaur. " +
        N(12) + "Haddad admits the audience made her nervous at first, but she now thinks the window may be the museum's most effective exhibit, because it shows that discovery is not one dramatic moment but a long series of careful ones.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the article about the Harlow prep lab?",
          choices: [
            { letter: "A", text: "Air scribes are the most important tools a fossil preparator uses." },
            { letter: "B", text: "Museums should hire more preparators to work faster on fossils." },
            { letter: "C", text: "Children visit the museum mainly to see dinosaurs on display." },
            { letter: "D", text: "Fossil preparation is slow, careful work the public can now see." }
          ],
          correct: "D"
        },
        {
          id: "quote",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes Noor Haddad's remark in sentence 9 mainly to —",
          choices: [
            { letter: "A", text: "show how she finds meaning in slow, detailed work" },
            { letter: "B", text: "suggest that she finds her job dull most of the time" },
            { letter: "C", text: "explain how fossils are dated to a hundred million years" },
            { letter: "D", text: "prove that visitors ask the preparators too many questions" }
          ],
          correct: "A"
        },
        {
          id: "steps",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 4 through 7 of the prep lab article organized?",
          choices: [
            { letter: "A", text: "as a comparison of two museums" },
            { letter: "B", text: "as a cause followed by its effects" },
            { letter: "C", text: "as the steps of a careful process" },
            { letter: "D", text: "as a claim followed by a rebuttal" }
          ],
          correct: "C"
        },
        {
          id: "their",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 11, the author places the word their in quotation marks mainly to suggest that the children —",
          choices: [
            { letter: "A", text: "have paid to adopt a fossil from the museum's collection" },
            { letter: "B", text: "feel attached to a fossil that does not belong to them" },
            { letter: "C", text: "are confused about which dinosaur is being prepared" },
            { letter: "D", text: "argue with each other over who saw the fossil first" }
          ],
          correct: "B"
        },
        {
          id: "attitude",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The author's attitude toward the glass wall at the prep lab is best described as —",
          choices: [
            { letter: "A", text: "doubtful" },
            { letter: "B", text: "indifferent" },
            { letter: "C", text: "annoyed" },
            { letter: "D", text: "approving" }
          ],
          correct: "D"
        },
        {
          id: "slow",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which detail best supports the claim in sentence 3 that preparation is slower than visitors expect?",
          choices: [
            { letter: "A", text: "A fist-sized vertebra can take forty hours to prepare." },
            { letter: "B", text: "The fossils arrive in blocks of rock and plaster." },
            { letter: "C", text: "The glass wall was added to the lab five years ago." },
            { letter: "D", text: "Fragile areas are brushed with a hardening glue." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 11 · Functional text · level 1 ───────────── */
    {
      id: "g10-ri-c70-rentalrules",
      family: "G10",
      title: "Before You Launch",
      kind: "Functional text · 10.RI",
      blurb: "The rules posted at a lakeside kayak rental dock.",
      level: 1,
      passage:
        "<p><strong>Bluewater Paddle Rentals: Before You Launch</strong><br>" + N(1) + "Welcome to Bluewater! " +
        N(2) + "Please read these guidelines before you sign your rental agreement.</p>" +
        "<p><strong>Who May Rent.</strong> " + N(3) + "Renters must be at least 18, or 14 to 17 with a parent or guardian who signs the agreement and paddles in the same group. " +
        N(4) + "Children under 14 may ride only in a tandem kayak with an adult.</p>" +
        "<p><strong>Safety Gear.</strong> " + N(5) + "Every paddler must wear a life jacket at all times on the water; carrying it in the boat does not count. " +
        N(6) + "Life jackets, paddles and whistles are included with every rental.</p>" +
        "<p><strong>Where to Paddle.</strong> " + N(7) + "Rentals are for Lake Corran and the slow section of Mill Creek only. " +
        N(8) + "Do not paddle past the orange buoys near the dam, where the current can pull a boat toward the spillway.</p>" +
        "<p><strong>Weather.</strong> " + N(9) + "If staff sound the air horn three times, return to the dock immediately; this signal means lightning has been detected within ten miles. " +
        N(10) + "Rental time lost to a weather recall will be credited toward a future trip.</p>" +
        "<p><strong>Returns.</strong> " + N(11) + "Boats are due back at the time printed on your receipt. " +
        N(12) + "Late returns are charged $10 for each 15 minutes, because the next group's reservation depends on your boat.</p>" +
        "<p><strong>Damage.</strong> " + N(13) + "Report any damage at check-in; normal scratches are expected, but cracked hulls or lost paddles will be billed at replacement cost. " +
        N(14) + "Questions? Ask any staff member in a blue shirt, or call the dock at 555-0147.</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the Bluewater guidelines?",
          choices: [
            { letter: "A", text: "They describe the history of the lake and the nearby dam." },
            { letter: "B", text: "They explain rules renters follow to stay safe and return boats." },
            { letter: "C", text: "They list the prices of each kind of kayak the shop rents." },
            { letter: "D", text: "They teach beginners the basic strokes used in paddling." }
          ],
          correct: "B"
        },
        {
          id: "teen",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.2",
          stem: "Three 15-year-old friends want to rent kayaks without an adult. Which sentence shows that Bluewater will not allow this?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 3" }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.1",
          stem: "The Bluewater guidelines are written mainly for —",
          choices: [
            { letter: "A", text: "customers who are about to rent a boat" },
            { letter: "B", text: "staff members who are new to the dock" },
            { letter: "C", text: "engineers who maintain the dam's spillway" },
            { letter: "D", text: "people deciding which kayak to buy" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "The bold headings in the Bluewater guidelines mainly help a renter —",
          choices: [
            { letter: "A", text: "learn which rules matter least" },
            { letter: "B", text: "compare Bluewater with other shops" },
            { letter: "C", text: "find the rule on a topic quickly" },
            { letter: "D", text: "follow the steps of a paddle stroke" }
          ],
          correct: "C"
        },
        {
          id: "latefee",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Sentence 12 explains why late returns are charged mainly to show that the fee —",
          choices: [
            { letter: "A", text: "pays for damage to cracked hulls and lost paddles" },
            { letter: "B", text: "protects the next customers who reserved the boat" },
            { letter: "C", text: "is lower than the fees charged by other rental shops" },
            { letter: "D", text: "is waived whenever staff sound the weather horn" }
          ],
          correct: "B"
        },
        {
          id: "credited",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 10 of the Bluewater rules, the word credited most nearly means —",
          choices: [
            { letter: "A", text: "praised for doing something well" },
            { letter: "B", text: "charged as an extra late fee" },
            { letter: "C", text: "believed to be honest and true" },
            { letter: "D", text: "saved as value to use later" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 12 · Argument · level 3 ───────────── */
    {
      id: "g10-ri-c70-aslcredit",
      family: "G10",
      title: "A Language for the Credit",
      kind: "Argument · 10.RI",
      blurb: "A student editorial urges the school board to count American Sign Language as a world language.",
      level: 3,
      passage:
        "<p>" + N(1) + "Pinecrest High offers four world languages for graduation credit, and every one of them is spoken. " +
        N(2) + "That should change next fall, when the school board votes on whether to add American Sign Language. " +
        N(3) + "Some board members argue that ASL is not \"foreign\" because it is used here in the United States. " +
        N(4) + "That objection misunderstands the purpose of the requirement. " +
        N(5) + "Our handbook says world language study should help students \"communicate across cultures and think about how language works,\" and ASL does both: it has its own grammar, its own tradition of poetry and storytelling, and a Deaf community with its own history and customs. " +
        N(6) + "Others worry about cost. " +
        N(7) + "Yet the neighboring Elm Valley district added ASL three years ago with one teacher shared between two schools, and its enrollment has grown every semester since. " +
        N(8) + "There is also a practical case. " +
        N(9) + "Students who learn French or German may rarely use it outside class, but a student who learns ASL may sign with a classmate, a customer or a neighbor the very next week. " +
        N(10) + "Last spring, our school's informal ASL club drew forty members to a lunchtime meeting, more than the French and German clubs combined. " +
        N(11) + "Of course, one crowded meeting does not prove that a full course would fill year after year. " +
        N(12) + "But it does show genuine curiosity, and a school that claims to prepare students for a diverse world should not ignore a language spoken with the hands, the face and the space all around us. " +
        N(13) + "The board should vote yes.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which sentence best states the central claim of the Pinecrest editorial?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 2" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "C"
        },
        {
          id: "cost",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which detail most directly answers the concern raised in sentence 6?",
          choices: [
            { letter: "A", text: "Elm Valley added ASL with one teacher shared by two schools." },
            { letter: "B", text: "The ASL club drew forty members to a lunchtime meeting." },
            { letter: "C", text: "ASL has its own tradition of poetry and storytelling." },
            { letter: "D", text: "A student may sign with a neighbor the very next week." }
          ],
          correct: "A"
        },
        {
          id: "concede",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "The writer admits in sentence 11 that one meeting proves little mainly to —",
          choices: [
            { letter: "A", text: "suggest that the ASL club should hold more meetings" },
            { letter: "B", text: "appear fair by noting the limits of her own evidence" },
            { letter: "C", text: "agree with board members who oppose the new course" },
            { letter: "D", text: "criticize the French and German clubs for low turnout" }
          ],
          correct: "B"
        },
        {
          id: "reframe",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "In sentence 4, the writer says the objection misunderstands the purpose of the requirement mainly to —",
          choices: [
            { letter: "A", text: "accuse board members of not reading the student handbook" },
            { letter: "B", text: "argue that the requirement should be removed entirely" },
            { letter: "C", text: "admit that ASL is not truly a foreign language at all" },
            { letter: "D", text: "shift the debate from where ASL is used to what the rule is for" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The tone of sentence 12 in the editorial is best described as —",
          choices: [
            { letter: "A", text: "earnest and persuasive" },
            { letter: "B", text: "bitter and sarcastic" },
            { letter: "C", text: "neutral and detached" },
            { letter: "D", text: "playful and joking" }
          ],
          correct: "A"
        },
        {
          id: "genuine",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "As used in sentence 12 of the editorial, genuine most nearly means —",
          choices: [
            { letter: "A", text: "costly" },
            { letter: "B", text: "brief" },
            { letter: "C", text: "sincere" },
            { letter: "D", text: "required" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 13 · Vocabulary · level 1 ───────────── */
    {
      id: "g10-rv-c70-backstairs",
      family: "G10",
      title: "Count the Windows",
      kind: "Vocabulary · 10.RV",
      blurb: "Two partners stuck on one clue in a school puzzle hunt.",
      level: 1,
      passage:
        "<p>" + N(1) + "The note taped to the gym door was <strong>cryptic</strong>: a row of numbers, a drawing of a key, and the words \"Count the windows.\" " +
        N(2) + "Priyanka groaned, but her partner, Elias, was already smiling. " +
        N(3) + "He loved anything that had to be <strong>deciphered</strong>, and he pulled out a pencil to turn the numbers into letters. " +
        N(4) + "Priyanka was more <strong>meticulous</strong>; she copied every symbol into her notebook exactly, even a smudge she thought might be a period. " +
        N(5) + "For twenty minutes they tried every method they knew. " +
        N(6) + "Elias swapped numbers for letters, and Priyanka counted the windows on every wall of the gym. " +
        N(7) + "Each attempt seemed <strong>futile</strong>, and other teams jogged past them toward the next clue. " +
        N(8) + "\"We could skip it,\" Elias said. " +
        N(9) + "\"Or we could <strong>persevere</strong> for five more minutes,\" Priyanka answered. " +
        N(10) + "In the fourth minute, she noticed that the copied smudge sat between the third and fourth numbers, splitting the code into two words. " +
        N(11) + "The words were BACK STAIRS. " +
        N(12) + "The pair ran, found a key taped beneath the railing, and burst into the hallway laughing. " +
        N(13) + "They were so <strong>elated</strong> that they high-fived a janitor who had no idea why.</p>",
      claims: [
        {
          id: "decipher",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word deciphered in sentence 3 combines de- (\"undo\") with cipher (\"code\"). Based on these parts, to decipher a message is to —",
          choices: [
            { letter: "A", text: "write it in a secret code" },
            { letter: "B", text: "hide it where no one looks" },
            { letter: "C", text: "copy it onto a new page" },
            { letter: "D", text: "work out what a code says" }
          ],
          correct: "D"
        },
        {
          id: "cryptic",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 1, the note on the gym door is cryptic, meaning that it is —",
          choices: [
            { letter: "A", text: "mysterious and hard to understand" },
            { letter: "B", text: "long and full of instructions" },
            { letter: "C", text: "rude and meant to discourage" },
            { letter: "D", text: "simple and quickly solved" }
          ],
          correct: "A"
        },
        {
          id: "meticulous",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "What Priyanka does in sentence 4 shows that meticulous most nearly means —",
          choices: [
            { letter: "A", text: "quick and impatient" },
            { letter: "B", text: "careful about every detail" },
            { letter: "C", text: "talented at drawing" },
            { letter: "D", text: "nervous about failing" }
          ],
          correct: "B"
        },
        {
          id: "futile",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author says each attempt seemed futile rather than difficult (sentence 7). Compared with difficult, futile suggests that the attempts seemed —",
          choices: [
            { letter: "A", text: "slow but likely to work" },
            { letter: "B", text: "fun but too noisy" },
            { letter: "C", text: "pointless and hopeless" },
            { letter: "D", text: "clever and admired" }
          ],
          correct: "C"
        },
        {
          id: "persevere",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The prefix per- in persevere (sentence 9) means \"through,\" as in perforate. Priyanka's suggestion to persevere means to —",
          choices: [
            { letter: "A", text: "stop and ask for a hint" },
            { letter: "B", text: "keep going despite trouble" },
            { letter: "C", text: "start over at the first clue" },
            { letter: "D", text: "split the work between them" }
          ],
          correct: "B"
        },
        {
          id: "elated",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 13, the word elated most nearly means —",
          choices: [
            { letter: "A", text: "embarrassed" },
            { letter: "B", text: "exhausted" },
            { letter: "C", text: "overjoyed" },
            { letter: "D", text: "confused" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 14 · Vocabulary · level 2 ───────────── */
    {
      id: "g10-rv-c70-quarrydig",
      family: "G10",
      title: "The Fish Bed",
      kind: "Vocabulary · 10.RV",
      blurb: "A college team digs fossil fish from an old quarry and tries not to guess too soon.",
      level: 2,
      passage:
        "<p>" + N(1) + "Each July, a small team from Westfall College returns to an abandoned limestone quarry to <strong>excavate</strong> a bed of fossil fish. " +
        N(2) + "The work is <strong>painstaking</strong>. " +
        N(3) + "Students split each slab with thin blades, inspect every surface with a hand lens, and record the exact position of each find before anything is moved. " +
        N(4) + "Most of the fish are crushed or scattered, their bones jumbled like a dropped box of toothpicks. " +
        N(5) + "A few, however, are <strong>pristine</strong>, so perfectly preserved that the outline of a single fin still shows. " +
        N(6) + "Those rare specimens raise the most interesting question: why did hundreds of fish die in the same spot at once? " +
        N(7) + "So far the evidence is <strong>ambiguous</strong>. " +
        N(8) + "A sudden drop in oxygen could explain the deaths, but so could a seasonal change in the saltiness of the water. " +
        N(9) + "Team leader Dr. Imani Kessler warns students not to mistake a <strong>conjecture</strong> for a conclusion. " +
        N(10) + "\"A good guess is where research starts,\" she tells them, \"not where it ends.\" " +
        N(11) + "Last season's haul was <strong>meager</strong>, only eleven complete fish, but each one added a clue. " +
        N(12) + "For now the team keeps collecting, labeling and measuring, hoping that next summer's slabs will finally point toward one explanation.</p>",
      claims: [
        {
          id: "excavate",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word excavate in sentence 1 contains ex- (\"out\") and cav- (\"hollow\"), as in cave and cavity. Excavate most nearly means to —",
          choices: [
            { letter: "A", text: "dig out" },
            { letter: "B", text: "fill in" },
            { letter: "C", text: "sell off" },
            { letter: "D", text: "draw up" }
          ],
          correct: "A"
        },
        {
          id: "conjecture",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Dr. Kessler's words in sentence 10 show that a conjecture (sentence 9) is —",
          choices: [
            { letter: "A", text: "a final answer that has been proven" },
            { letter: "B", text: "a record of where a fossil was found" },
            { letter: "C", text: "a guess that has not yet been tested" },
            { letter: "D", text: "a rule that students must not break" }
          ],
          correct: "C"
        },
        {
          id: "pristine",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "The rest of sentence 5 shows that a pristine fossil fish is one that is —",
          choices: [
            { letter: "A", text: "crushed and scattered" },
            { letter: "B", text: "perfect and undamaged" },
            { letter: "C", text: "unusually large" },
            { letter: "D", text: "newly discovered" }
          ],
          correct: "B"
        },
        {
          id: "painstaking",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author calls the work painstaking rather than slow in sentence 2. Compared with slow, painstaking suggests work done —",
          choices: [
            { letter: "A", text: "lazily, with many breaks" },
            { letter: "B", text: "cheerfully, as a game" },
            { letter: "C", text: "carelessly, in a rush" },
            { letter: "D", text: "with great care and effort" }
          ],
          correct: "D"
        },
        {
          id: "ambiguous",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Sentence 8 helps the reader understand that ambiguous evidence (sentence 7) is evidence that —",
          choices: [
            { letter: "A", text: "has been lost or damaged" },
            { letter: "B", text: "fits more than one explanation" },
            { letter: "C", text: "proves the oxygen theory" },
            { letter: "D", text: "was collected incorrectly" }
          ],
          correct: "B"
        },
        {
          id: "meager",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author describes last season's haul as meager rather than small (sentence 11). Compared with small, meager suggests an amount that is —",
          choices: [
            { letter: "A", text: "disappointingly scarce" },
            { letter: "B", text: "surprisingly heavy" },
            { letter: "C", text: "neatly organized" },
            { letter: "D", text: "completely ruined" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 15 · Vocabulary · level 3 ───────────── */
    {
      id: "g10-rv-c70-interpreter",
      family: "G10",
      title: "The Bridge",
      kind: "Vocabulary · 10.RV",
      blurb: "Lina shadows a professional interpreter and learns the rules she half knew already.",
      level: 3,
      passage:
        "<p>" + N(1) + "On her first day shadowing a professional interpreter, Lina Petrova expected the hard part to be speed. " +
        N(2) + "She had been <strong>fluent</strong> in American Sign Language since childhood, signing at home with her Deaf parents, and she could keep pace with almost anyone. " +
        N(3) + "But watching Marisol Vega interpret a parent-teacher conference, Lina realized that speed was the easy part. " +
        N(4) + "The real skill was <strong>nuance</strong>: the small differences in meaning that separate \"I'm concerned\" from \"I'm alarmed.\" " +
        N(5) + "When the teacher said a student \"could try harder,\" Marisol did not interpret the words <strong>verbatim</strong>, one sign for each English word. " +
        N(6) + "Instead she chose signs and a facial expression that would <strong>convey</strong> the teacher's gentle tone, so the parents would not hear criticism where none was meant. " +
        N(7) + "Afterward, Marisol explained another rule. " +
        N(8) + "An interpreter must be <strong>discreet</strong>; whatever she hears in a conference, a doctor's office or a courtroom stays there. " +
        N(9) + "Lina nodded, then admitted that she had <strong>inadvertently</strong> started to answer one of the parents' questions herself before catching her hands mid-sign. " +
        N(10) + "\"Everyone does that once,\" Marisol said. " +
        N(11) + "\"You're not part of the conversation. You're the bridge it walks across.\" " +
        N(12) + "On the drive home, Lina thought about all the times she had interpreted for her parents at the bank or the pharmacy, never imagining that the work had rules, or that she had been following half of them by instinct.</p>",
      claims: [
        {
          id: "inadvertent",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word inadvertently (sentence 9) begins with in- (\"not\") and contains advert (\"turn toward,\" as in advertise). Based on these parts, inadvertently most nearly means —",
          choices: [
            { letter: "A", text: "in a rude manner" },
            { letter: "B", text: "without meaning to" },
            { letter: "C", text: "fully on purpose" },
            { letter: "D", text: "much too quickly" }
          ],
          correct: "B"
        },
        {
          id: "verbatim",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 5, the phrase one sign for each English word restates verbatim as meaning —",
          choices: [
            { letter: "A", text: "in a softer voice" },
            { letter: "B", text: "after a long pause" },
            { letter: "C", text: "in a new language" },
            { letter: "D", text: "exactly word for word" }
          ],
          correct: "D"
        },
        {
          id: "nuance",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "The examples \"I'm concerned\" and \"I'm alarmed\" in sentence 4 help show that nuance means —",
          choices: [
            { letter: "A", text: "a slight difference in meaning" },
            { letter: "B", text: "a loud expression of worry" },
            { letter: "C", text: "a rule that interpreters follow" },
            { letter: "D", text: "a sign that has no translation" }
          ],
          correct: "A"
        },
        {
          id: "discreet",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "Marisol says an interpreter must be discreet rather than quiet (sentence 8). Compared with quiet, discreet suggests someone who —",
          choices: [
            { letter: "A", text: "speaks softly so others can concentrate" },
            { letter: "B", text: "avoids talking to people she does not know" },
            { letter: "C", text: "carefully protects what she learns in private" },
            { letter: "D", text: "waits politely for others to finish speaking" }
          ],
          correct: "C"
        },
        {
          id: "convey",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 6, the word convey most nearly means —",
          choices: [
            { letter: "A", text: "hide" },
            { letter: "B", text: "question" },
            { letter: "C", text: "communicate" },
            { letter: "D", text: "exaggerate" }
          ],
          correct: "C"
        },
        {
          id: "fluent",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which phrase from the passage best helps a reader understand that fluent (sentence 2) means able to use a language easily?",
          choices: [
            { letter: "A", text: "she could keep pace with almost anyone" },
            { letter: "B", text: "expected the hard part to be speed" },
            { letter: "C", text: "interpret a parent-teacher conference" },
            { letter: "D", text: "catching her hands mid-sign" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 16 · Paired texts · level 2 ───────────── */
    {
      id: "g10-dsr-c70-sawyercreek",
      family: "G10",
      title: "Two Views of Sawyer Creek",
      kind: "Paired texts · 10.DSR",
      blurb: "A guidebook entry and a paddler's journal describe the same creek.",
      level: 2,
      passage:
        "<p><strong>Text 1 — from a regional paddling guidebook</strong></p>" +
        "<p>" + N(1) + "Sawyer Creek is one of the region's most rewarding day trips for paddlers with basic skills. " +
        N(2) + "The six-mile run from Pell's Landing to the Route 9 bridge takes three to four hours at normal water levels. " +
        N(3) + "The creek is narrow and winding, and fallen trees, called strainers, can block the channel after storms, so paddlers should scout any bend they cannot see around. " +
        N(4) + "Water levels matter. " +
        N(5) + "Below two feet on the Pell's Landing gauge, expect to drag your boat over gravel bars; above four feet, the current becomes too swift for beginners. " +
        N(6) + "The best months are April through June, when the dark, tea-colored water is high enough to float and the banks are thick with blooming mountain laurel. " +
        N(7) + "Bring a map, a whistle and a dry bag, and tell someone your planned take-out time.</p>" +
        "<p><strong>Text 2 — from Joaquín's paddling journal, May 12</strong></p>" +
        "<p>" + N(8) + "The guidebook said three to four hours. " +
        N(9) + "It took us five and a half, and I'm not sorry about a single minute. " +
        N(10) + "The gauge read a perfect three feet this morning, but just past the second bend a sycamore lay across the whole creek, and we had to haul both boats up a muddy bank and around it. " +
        N(11) + "My sister Pilar sank in the mud to her knees and laughed so hard she had to sit down. " +
        N(12) + "After that, the creek seemed to forgive us. " +
        N(13) + "The water was the color of strong tea, and the laurel hung over it so thickly that we paddled through tunnels of pink. " +
        N(14) + "Twice a heron lifted off ahead of us and landed again around the next bend, as if it were guiding us downstream. " +
        N(15) + "At the bridge, Pilar said we should come back next week. " +
        N(16) + "I said we should come back with more snacks.</p>",
      claims: [
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which statement best describes a key difference between the Sawyer Creek texts?",
          choices: [
            { letter: "A", text: "Text 1 describes the creek in summer, while Text 2 describes it in winter." },
            { letter: "B", text: "Text 1 gives general practical advice, while Text 2 tells one personal trip." },
            { letter: "C", text: "Text 1 warns readers away from the creek, while Text 2 praises it." },
            { letter: "D", text: "Text 1 is written for experts, while Text 2 is written for beginners." }
          ],
          correct: "B"
        },
        {
          id: "strainer",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does Text 2 illustrate the warning in sentence 3 of Text 1?",
          choices: [
            { letter: "A", text: "Pilar falls into the creek when the current becomes too swift." },
            { letter: "B", text: "The gauge reading is too low, so the boats scrape gravel bars." },
            { letter: "C", text: "The heron leads the paddlers around a bend they cannot see." },
            { letter: "D", text: "A fallen sycamore blocks the creek and forces them to carry boats." }
          ],
          correct: "D"
        },
        {
          id: "both",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Select TWO details about the creek's appearance that appear in both texts.",
          choices: [
            { letter: "A", text: "dark water the color of tea" },
            { letter: "B", text: "a heron that seems to guide boats" },
            { letter: "C", text: "mountain laurel along the banks" },
            { letter: "D", text: "gravel bars that scrape the hull" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "conclude",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "A reader who uses both the guidebook entry and the journal could best conclude that —",
          choices: [
            { letter: "A", text: "the guidebook's water-level advice is usually wrong" },
            { letter: "B", text: "Sawyer Creek is too dangerous for paddlers with basic skills" },
            { letter: "C", text: "the guidebook is accurate, but real trips bring surprises" },
            { letter: "D", text: "most paddlers finish the trip faster than the guidebook says" }
          ],
          correct: "C"
        },
        {
          id: "t1order",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Text 1 is organized mainly by moving from —",
          choices: [
            { letter: "A", text: "a personal story to a set of general rules" },
            { letter: "B", text: "an overview of the trip to conditions and gear" },
            { letter: "C", text: "the history of the creek to its present use" },
            { letter: "D", text: "a problem on the creek to its solution" }
          ],
          correct: "B"
        },
        {
          id: "forgive",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "In sentence 12, Joaquín's statement that the creek seemed to forgive us creates a tone of —",
          choices: [
            { letter: "A", text: "bitter disappointment" },
            { letter: "B", text: "nervous suspicion" },
            { letter: "C", text: "formal instruction" },
            { letter: "D", text: "relieved affection" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 17 · Paired texts · level 3 ───────────── */
    {
      id: "g10-dsr-c70-fossilfinders",
      family: "G10",
      title: "Who Should Pick It Up?",
      kind: "Paired texts · 10.DSR",
      blurb: "An amateur collector and a museum curator write about fossils found by hobbyists.",
      level: 3,
      passage:
        "<p><strong>Text 1 — from a letter to a rock-collecting club newsletter</strong></p>" +
        "<p>" + N(1) + "Every few years, someone suggests that amateurs should leave fossils alone and let professionals do the collecting. " +
        N(2) + "I disagree. " +
        N(3) + "There are perhaps a few dozen working paleontologists in our state and thousands of road cuts, creek beds and quarries that erode a little more with every storm. " +
        N(4) + "A fossil that weathers out of a hillside will crumble within a few seasons if no one picks it up. " +
        N(5) + "Amateurs are the ones walking those hillsides on weekends, season after season. " +
        N(6) + "Several specimens in our state museum, including its finest fossil crab, were found by hobbyists who donated them. " +
        N(7) + "Rather than discouraging us, scientists should welcome the extra eyes.</p>" +
        "<p><strong>Text 2 — from \"Where It Was Found,\" a museum curator's column</strong></p>" +
        "<p>" + N(8) + "A fossil on a shelf can tell a scientist what an animal looked like. " +
        N(9) + "A fossil with its location recorded can tell her far more: how old the rock is, what other creatures lived alongside it, and whether the area was once a lagoon, a river delta or the open sea. " +
        N(10) + "That is why the most valuable thing an amateur can bring us is not a beautiful specimen but a careful note. " +
        N(11) + "A photograph of the fossil before it is moved, its GPS coordinates and the layer of rock it came from can turn a curiosity into evidence. " +
        N(12) + "Many of our most important finds came from hobbyists who did exactly this. " +
        N(13) + "Sadly, others arrive in shoeboxes labeled with only a date and a town name, and much of what they could have taught us is gone for good.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "On which point do the letter writer and the curator agree?",
          choices: [
            { letter: "A", text: "Only trained scientists should remove fossils from rock." },
            { letter: "B", text: "Fossils on shelves are more useful than fossils in the field." },
            { letter: "C", text: "Amateur collectors can make valuable contributions to science." },
            { letter: "D", text: "Museums should pay hobbyists for the fossils they donate." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The fossil texts differ mainly in that Text 2 —",
          choices: [
            { letter: "A", text: "stresses how a fossil is recorded, not just whether it is saved" },
            { letter: "B", text: "argues that amateurs should stop collecting fossils entirely" },
            { letter: "C", text: "describes one particular fossil crab found by a hobbyist" },
            { letter: "D", text: "explains how storms cause hillsides and road cuts to erode" }
          ],
          correct: "A"
        },
        {
          id: "respond",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How would the curator in Text 2 most likely respond to sentence 4 of Text 1?",
          choices: [
            { letter: "A", text: "She would deny that fossils ever crumble once exposed." },
            { letter: "B", text: "She would say that crumbled fossils are still useful evidence." },
            { letter: "C", text: "She would ask amateurs to leave exposed fossils in place." },
            { letter: "D", text: "She would agree, but urge collectors to record the location." }
          ],
          correct: "D"
        },
        {
          id: "donors",
          sol: "10.DSR.C",
          sub: "10.DSR.C.1",
          stem: "Select TWO sentences, one from each text, that together best support the idea that hobbyists have already added to museum collections.",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "numbers",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "The letter writer includes the comparison in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "show that professionals are too few to watch every site" },
            { letter: "B", text: "complain that the state does not fund enough scientists" },
            { letter: "C", text: "explain how quarries and road cuts expose fossil layers" },
            { letter: "D", text: "suggest that most fossils are found in creek beds" }
          ],
          correct: "A"
        },
        {
          id: "sadly",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The curator's tone in sentence 13 is best described as —",
          choices: [
            { letter: "A", text: "amused" },
            { letter: "B", text: "furious" },
            { letter: "C", text: "regretful" },
            { letter: "D", text: "indifferent" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 18 · Paired texts · level 1 ───────────── */
    {
      id: "g10-dsr-c70-signclub",
      family: "G10",
      title: "Hands Up!",
      kind: "Paired texts · 10.DSR",
      blurb: "A club flyer and a member's reflection on learning American Sign Language at lunch.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Hands Up! ASL Club flyer</strong></p>" +
        "<p>" + N(1) + "Want to learn a new language without making a sound? " +
        N(2) + "The Hands Up! ASL Club meets every Tuesday and Thursday at lunch in Room 118. " +
        N(3) + "No experience is needed; first-time visitors learn the alphabet and ten everyday signs at their first meeting. " +
        N(4) + "Our sponsor, Ms. Adeyemi-Brooks, is a certified ASL teacher, and once a month a Deaf guest from the Riverton Deaf Community Center joins us to tell stories and answer questions. " +
        N(5) + "Members practice with games, signed songs and silent lunch challenges. " +
        N(6) + "This spring we will perform a signed version of the school song at the spring assembly. " +
        N(7) + "Bring your lunch and your curiosity! " +
        N(8) + "Questions? Find us at the club table outside the cafeteria on Monday mornings.</p>" +
        "<p><strong>Text 2 — \"Silent Lunch,\" by club member Daniela Soto</strong></p>" +
        "<p>" + N(9) + "I joined the ASL club because my friend Kenji dared me to. " +
        N(10) + "At my first meeting I could barely spell my own name, and my fingers felt as if they belonged to someone else. " +
        N(11) + "But then we had our first silent lunch challenge: twenty-five minutes, no talking, only signing. " +
        N(12) + "At first the table felt awkward and strange. " +
        N(13) + "Then someone signed a joke about the cafeteria pizza, and we all laughed without making a sound, which somehow made it funnier. " +
        N(14) + "When our Deaf guest, Mr. Ferreira, visited in March, he told a story entirely in signs about getting lost in a snowstorm, and I understood almost all of it. " +
        N(15) + "I didn't realize until afterward that I hadn't translated anything in my head. " +
        N(16) + "I had just listened, with my eyes.</p>",
      claims: [
        {
          id: "pairing",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Pairing the Hands Up! flyer with Daniela's reflection primarily helps readers —",
          choices: [
            { letter: "A", text: "learn the ASL alphabet and ten everyday signs" },
            { letter: "B", text: "compare two different clubs at the same school" },
            { letter: "C", text: "see how the club's promises play out for a member" },
            { letter: "D", text: "decide whether the spring assembly is worth attending" }
          ],
          correct: "C"
        },
        {
          id: "develop",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does Text 2 develop an idea that the flyer only mentions in sentence 5?",
          choices: [
            { letter: "A", text: "It shows what a silent lunch challenge actually feels like." },
            { letter: "B", text: "It explains how the club chooses songs to perform." },
            { letter: "C", text: "It lists the games members play at each meeting." },
            { letter: "D", text: "It describes how the sponsor became a certified teacher." }
          ],
          correct: "A"
        },
        {
          id: "beginners",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Both the flyer and Daniela's reflection suggest that —",
          choices: [
            { letter: "A", text: "members must already know some signs before joining" },
            { letter: "B", text: "beginners can make real progress in the club" },
            { letter: "C", text: "the club meets more often than other school clubs" },
            { letter: "D", text: "most members join because a friend dares them to" }
          ],
          correct: "B"
        },
        {
          id: "guest",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Using both texts, which conclusion about the Deaf guest visits is best supported?",
          choices: [
            { letter: "A", text: "They happen weekly and are mainly meant for advanced signers." },
            { letter: "B", text: "They replace the regular lessons taught by the club sponsor." },
            { letter: "C", text: "They take place at the community center instead of school." },
            { letter: "D", text: "They are monthly events that can show members their progress." }
          ],
          correct: "D"
        },
        {
          id: "fingers",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In sentence 10, Daniela's description of fingers that felt as if they belonged to someone else suggests that she felt —",
          choices: [
            { letter: "A", text: "proud of how fast she was learning" },
            { letter: "B", text: "clumsy and unfamiliar with signing" },
            { letter: "C", text: "injured after a long day of practice" },
            { letter: "D", text: "annoyed that Kenji had dared her" }
          ],
          correct: "B"
        },
        {
          id: "eyes",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 15 and 16 show that by March, Daniela has —",
          choices: [
            { letter: "A", text: "begun to understand signs directly, without translating" },
            { letter: "B", text: "decided she prefers signing to speaking out loud" },
            { letter: "C", text: "become the club's best storyteller in sign language" },
            { letter: "D", text: "grown tired of the club's silent lunch challenges" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 19 · Poetry · level 1 ───────────── */
    {
      id: "g10-rl-c70-launch",
      family: "G10",
      title: "Launch",
      kind: "Poetry · 10.RL",
      blurb: "A speaker pushes off from a dock at dawn and finally understands her father's advice.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The lake is still asleep at six,<br>" +
        L(2) + "a sheet of pewter no one's touched,<br>" +
        L(3) + "and I stand on the dock with my paddle<br>" +
        L(4) + "like a question I'm afraid to ask.<br>" +
        L(5) + "My father used to say the first stroke<br>" +
        L(6) + "is the only hard one. I never believed him.<br>" +
        L(7) + "The boat rocks as I lower myself in,<br>" +
        L(8) + "a nervous horse that knows I'm new.<br>" +
        L(9) + "Then I push off. The dock lets go.<br>" +
        L(10) + "The blade bites, and the water answers,<br>" +
        L(11) + "folding back in two neat curls<br>" +
        L(12) + "that widen behind me like applause.<br>" +
        L(13) + "Halfway across, the sun climbs the pines,<br>" +
        L(14) + "and I understand, at last, what he meant.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by the poem \"Launch\"?",
          choices: [
            { letter: "A", text: "Parents rarely understand the fears of their children." },
            { letter: "B", text: "Early mornings are the safest time to be on a lake." },
            { letter: "C", text: "Once a hard start is made, fear can give way to ease." },
            { letter: "D", text: "Nature is too powerful for people to feel at home in." }
          ],
          correct: "C"
        },
        {
          id: "question",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In lines 3–4, comparing the paddle to a question I'm afraid to ask suggests that the speaker is —",
          choices: [
            { letter: "A", text: "hesitant and unsure about starting" },
            { letter: "B", text: "curious about how paddles are made" },
            { letter: "C", text: "angry that her father is not there" },
            { letter: "D", text: "eager to race across the lake" }
          ],
          correct: "A"
        },
        {
          id: "answers",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "In line 10 of \"Launch,\" the phrase the water answers creates a feeling of —",
          choices: [
            { letter: "A", text: "danger, as the lake fights back" },
            { letter: "B", text: "loneliness on the empty lake" },
            { letter: "C", text: "confusion about the right stroke" },
            { letter: "D", text: "harmony between paddler and lake" }
          ],
          correct: "D"
        },
        {
          id: "lastline",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "How does line 14 function in the poem \"Launch\"?",
          choices: [
            { letter: "A", text: "It introduces a new memory about the speaker's father." },
            { letter: "B", text: "It resolves the doubt about the father's saying in lines 5–6." },
            { letter: "C", text: "It shows that the speaker wants to turn back to the dock." },
            { letter: "D", text: "It describes the sunrise as the poem's main subject." }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "Which line marks the turning point in the speaker's morning on the lake?",
          choices: [
            { letter: "A", text: "Line 2" },
            { letter: "B", text: "Line 5" },
            { letter: "C", text: "Line 9" },
            { letter: "D", text: "Line 13" }
          ],
          correct: "C"
        },
        {
          id: "doubt",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Lines 5–6 characterize the speaker, before she pushes off, as someone who —",
          choices: [
            { letter: "A", text: "has paddled this lake many times with her father" },
            { letter: "B", text: "plans to teach her own children to paddle someday" },
            { letter: "C", text: "trusts her father's advice more than her own fear" },
            { letter: "D", text: "once doubted her father's advice about starting" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 20 · Poetry · level 3 ───────────── */
    {
      id: "g10-rl-c70-trilobite",
      family: "G10",
      title: "Trilobite",
      kind: "Poetry · 10.RL",
      blurb: "An ancient sea creature now holds down the bills on an uncle's desk.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "It crawled the shallow seas for longer<br>" +
        L(2) + "than people have had names for time,<br>" +
        L(3) + "nearly three hundred million years of combing<br>" +
        L(4) + "the soft floor of a world unwrapped.<br>" +
        L(5) + "Its eyes were stone before stone was a word,<br>" +
        L(6) + "small crystal lenses, rows of them,<br>" +
        L(7) + "that watched the water dim and brighten<br>" +
        L(8) + "through more summers than the stars could count.<br>" +
        L(9) + "Now it sits on my uncle's desk<br>" +
        L(10) + "holding down the electric bill,<br>" +
        L(11) + "a bargain from a roadside shop,<br>" +
        L(12) + "eight dollars, tax included.<br>" +
        L(13) + "Some evenings, though, I lift it to the lamp<br>" +
        L(14) + "and feel an ocean in my palm,<br>" +
        L(15) + "patient, unhurried, and still.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Trilobite\"?",
          choices: [
            { letter: "A", text: "Fossils should be kept in museums rather than in homes." },
            { letter: "B", text: "An object treated as ordinary may hold a humbling history." },
            { letter: "C", text: "Ancient creatures were more patient than people are today." },
            { letter: "D", text: "Roadside shops charge too little for valuable objects." }
          ],
          correct: "B"
        },
        {
          id: "eyes",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "Line 5, Its eyes were stone before stone was a word, suggests that the trilobite's eyes —",
          choices: [
            { letter: "A", text: "were crystal and existed long before human language" },
            { letter: "B", text: "were damaged when the fossil was cut from the rock" },
            { letter: "C", text: "could see only shapes made of stone on the sea floor" },
            { letter: "D", text: "were carved later by the shop that sold the fossil" }
          ],
          correct: "A"
        },
        {
          id: "desktone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of lines 9–12 of \"Trilobite\" is best described as —",
          choices: [
            { letter: "A", text: "wry and deflating" },
            { letter: "B", text: "grand and solemn" },
            { letter: "C", text: "angry and accusing" },
            { letter: "D", text: "fearful and tense" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Why are lines 9–12 of \"Trilobite\" ironic?",
          choices: [
            { letter: "A", text: "The uncle cannot afford to pay his electric bill on time." },
            { letter: "B", text: "The roadside shop does not know what a trilobite is." },
            { letter: "C", text: "A creature that lasted ages now serves as an $8 paperweight." },
            { letter: "D", text: "The speaker's uncle has never noticed the fossil on his desk." }
          ],
          correct: "C"
        },
        {
          id: "though",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "The word though in line 13 signals a shift that mainly serves to —",
          choices: [
            { letter: "A", text: "explain how the uncle found the fossil at the shop" },
            { letter: "B", text: "show the speaker growing bored with the old fossil" },
            { letter: "C", text: "move from the desk to the sea floor of lines 1–4" },
            { letter: "D", text: "turn from the trivial present back toward wonder" }
          ],
          correct: "D"
        },
        {
          id: "unhurried",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The poet chose unhurried rather than slow in line 15. Compared with slow, unhurried suggests a quality that is —",
          choices: [
            { letter: "A", text: "lazy and sluggish" },
            { letter: "B", text: "weak and fading" },
            { letter: "C", text: "late and careless" },
            { letter: "D", text: "calm and untroubled" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 21 · Drama · level 2 ───────────── */
    {
      id: "g10-rl-c70-huntheadquarters",
      family: "G10",
      title: "Puzzle Twelve",
      kind: "Drama · 10.RL",
      blurb: "At puzzle hunt headquarters, an organizer insists her puzzle isn't broken.",
      level: 2,
      passage:
        "<p><em>Setting: a classroom serving as headquarters for the Lakemont High Puzzle Hunt. Laptops, a whiteboard of team scores, a box of answer envelopes. JUNE types quickly. MARCUS holds a buzzing phone.</em></p>" +
        "<p>" + N(1) + "<strong>MARCUS</strong>: That's the fourth team in ten minutes saying puzzle twelve is broken. " +
        N(2) + "<strong>JUNE</strong> <em>(not looking up)</em>: It isn't broken. They're just not seeing the trick. " +
        N(3) + "<strong>MARCUS</strong>: Every team? Even the Owls? The Owls solved the cipher wall in six minutes. " +
        N(4) + "<strong>JUNE</strong>: I tested that puzzle myself, Marcus. Three times. " +
        N(5) + "<strong>MARCUS</strong>: You tested it. Did anyone else? " +
        N(6) + "<em>June finally looks up. A pause.</em> " +
        N(7) + "<strong>JUNE</strong> <em>(slowly)</em>: Last week I gave you a whole speech about how the writer can't be the tester. " +
        N(8) + "<strong>MARCUS</strong>: You did. It was a good speech. I took notes. " +
        N(9) + "<em>June pulls a printed copy of puzzle twelve from the box and holds it beside her laptop screen.</em> " +
        N(10) + "<strong>JUNE</strong>: Row four. The printer dropped a letter. On my screen it's there; on paper it's gone. " +
        N(11) + "<strong>MARCUS</strong>: So it is broken. " +
        N(12) + "<strong>JUNE</strong> <em>(with a small, rueful laugh)</em>: It's broken. And I was the one telling everyone it wasn't. " +
        N(13) + "<em>She picks up the microphone for the hallway speakers, hesitates, then presses the button.</em> " +
        N(14) + "<strong>JUNE</strong>: Attention, solvers. Puzzle twelve has an error, and it's mine. Come to headquarters for a corrected copy. Every team gets ten bonus minutes. " +
        N(15) + "<strong>MARCUS</strong> <em>(writing on the whiteboard)</em>: Ten minutes. Very generous. " +
        N(16) + "<strong>JUNE</strong>: It's not generous. It's a refund.</p>",
      claims: [
        {
          id: "cause",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "Which line in the headquarters scene reveals the real cause of the problem with puzzle twelve?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "D"
        },
        {
          id: "june",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "June's lines in sentences 2 and 4 characterize her, at the start of the scene, as —",
          choices: [
            { letter: "A", text: "confident to the point of stubbornness" },
            { letter: "B", text: "worried that the hunt is falling apart" },
            { letter: "C", text: "bored by the solvers' constant calls" },
            { letter: "D", text: "eager to blame Marcus for the error" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in the scene at puzzle hunt headquarters is most ironic?",
          choices: [
            { letter: "A", text: "The Owls are fast solvers but cannot finish the cipher wall." },
            { letter: "B", text: "June, who lectured that writers can't test, tested her own puzzle." },
            { letter: "C", text: "Marcus takes notes on a speech that he thinks is a good one." },
            { letter: "D", text: "The hallway speakers announce a message in a quiet school." }
          ],
          correct: "B"
        },
        {
          id: "hesitate",
          sol: "10.RL.1.D",
          sub: "10.RL.1.D.2",
          stem: "The stage direction in sentence 13, in which June hesitates and then presses the button, mainly serves to —",
          choices: [
            { letter: "A", text: "suggest that the speaker system is old and unreliable" },
            { letter: "B", text: "show that June plans to blame the printer instead" },
            { letter: "C", text: "show that admitting the error aloud is hard but chosen" },
            { letter: "D", text: "create suspense about which team will win the hunt" }
          ],
          correct: "C"
        },
        {
          id: "refund",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "In sentence 16, June's choice of the word refund instead of generous suggests that she —",
          choices: [
            { letter: "A", text: "plans to return the teams' entry fees after the hunt" },
            { letter: "B", text: "thinks Marcus is wasting time by writing on the board" },
            { letter: "C", text: "wants the teams to thank her for the extra minutes" },
            { letter: "D", text: "sees the bonus time as owed to the teams, not a gift" }
          ],
          correct: "D"
        },
        {
          id: "rueful",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word rueful in sentence 12 joins rue (\"regret\") with the suffix -ful (\"full of\"). Based on these parts, June's rueful laugh is one that is —",
          choices: [
            { letter: "A", text: "full of mockery" },
            { letter: "B", text: "full of regret" },
            { letter: "C", text: "full of surprise" },
            { letter: "D", text: "full of relief" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
