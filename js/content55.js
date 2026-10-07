/* SOL Labyrinth — Grade 9 long packs (v5.15 expansion, content55): a local history museum, night-sky
 * astronomy, part-time summer jobs and a cross-country team. 13 packs x 8 questions, 390-520 words
 * (paired texts 200-260 each, poem 22-28 lines). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── 1 · LITERARY · museum ───────────────────────── */
    {
      id: "g9-rl-c55-brandt-ledger",
      family: "G9",
      title: "She Practiced Here",
      kind: "Literary · 9.RL",
      blurb: "A box of nails, a cracked ledger, and a child's handwriting in the margins of a hardware store's books.",
      level: 2,
      passage:
        "<p>" + N(1) + "The box arrived at the Harlow County Historical Museum on a Tuesday, smelling of basement and old pennies. " +
        N(2) + "Nadia Okafor, who had volunteered there every Tuesday since June, carried it to the back table where the cataloguing happened. " +
        N(3) + "Mr. Lindqvist, the museum's only paid employee, peered over his glasses at the label: Contents of Brandt Hardware, donated by the family. " +
        N(4) + "\"Nails and receipts, most likely,\" he said. " +
        N(5) + "\"Log it, number it, and shelve it in storage.\"</p>" +
        "<p>" + N(6) + "Nadia pulled on the cotton gloves and began. " +
        N(7) + "There were nails, as he had predicted, sorted into cigar boxes by size, and there was a brass scale with one pan missing. " +
        N(8) + "At the bottom lay a cloth-bound ledger, its spine cracked like dry bread. " +
        N(9) + "The first pages listed sales in a neat, slanting hand: rope, lamp oil, a dozen hinges. " +
        N(10) + "Then, in the margins, a second handwriting appeared, round and wobbly, the letters leaning against one another as if for support. " +
        N(11) + "Someone had practiced arithmetic there, adding up the store's sales in pencil and sometimes getting them wrong. " +
        N(12) + "On one page, beside a column of numbers, the young writer had added a note: Papa says I will run this store someday, so I must learn to count it.</p>" +
        "<p>" + N(13) + "Nadia read the line three times. " +
        N(14) + "She took the ledger to Mr. Lindqvist, who was writing a grant application and did not look pleased to be interrupted. " +
        N(15) + "\"It's a sweet detail,\" he said, \"but the museum has forty ledgers. " +
        N(16) + "Visitors come for the fire engine and the quilt room, not for a child's homework.\" " +
        N(17) + "He went back to his typing, and Nadia went back to the table, but she did not shelve the ledger.</p>" +
        "<p>" + N(18) + "For the next three Tuesdays, she spent her lunch break in the reading room upstairs, turning through census records and old newspapers on the microfilm machine. " +
        N(19) + "The machine whined like a tired refrigerator, and the pages slid past in gray blurs until her eyes ached. " +
        N(20) + "On the third week she found it: a 1931 notice announcing that Greta Brandt, age twenty-two, had taken over her late father's hardware store on Mill Street. " +
        N(21) + "Another clipping, from 1968, described the store's fiftieth anniversary and quoted Miss Brandt saying that she still added up every sale twice.</p>" +
        "<p>" + N(22) + "Nadia laid the two clippings beside the open ledger and waited until Mr. Lindqvist came to see why she was still there at closing. " +
        N(23) + "He looked for a long time, reading the wobbly note and then the newspaper. " +
        N(24) + "\"Fifty years,\" he said finally. " +
        N(25) + "\"She learned to count in those margins.\" " +
        N(26) + "He took off his glasses and rubbed his eyes. " +
        N(27) + "\"The case by the front door is empty after next month,\" he said. " +
        N(28) + "\"Write me a label, a short one, and spell her name right.\" " +
        N(29) + "Nadia wrote it that night at her kitchen table, crossing out draft after draft, until it was only four lines long. " +
        N(30) + "The last line said: She practiced here.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does the story of Nadia and the Brandt ledger best develop?",
          choices: [
            { letter: "A", text: "Volunteers should follow the staff's directions without question." },
            { letter: "B", text: "Ordinary records can hold a history that is worth sharing." },
            { letter: "C", text: "Old newspapers are more reliable than family documents." },
            { letter: "D", text: "Family businesses rarely last beyond a single generation." }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which sentence best shows that Nadia is determined to learn who wrote in the ledger's margins?",
          choices: [
            { letter: "A", text: "Sentence 6, in which she pulls on the cotton gloves" },
            { letter: "B", text: "Sentence 13, in which she reads the note three times" },
            { letter: "C", text: "Sentence 18, in which she spends weeks of lunch breaks on records" },
            { letter: "D", text: "Sentence 29, in which she drafts the label at her kitchen table" }
          ],
          correct: "C"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 10, the description of letters leaning against one another as if for support mainly suggests that the second writer was —",
          choices: [
            { letter: "A", text: "young and still unsteady at writing" },
            { letter: "B", text: "copying the store owner's neat hand" },
            { letter: "C", text: "rushing to finish before the store closed" },
            { letter: "D", text: "writing in a language they did not know" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          stem: "The comparison of the microfilm machine to a tired refrigerator in sentence 19 helps create a sense that Nadia's research is —",
          choices: [
            { letter: "A", text: "exciting from its very first minute" },
            { letter: "B", text: "against the museum's rules" },
            { letter: "C", text: "finished almost before it begins" },
            { letter: "D", text: "slow, noisy, and wearing" }
          ],
          correct: "D"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "When Mr. Lindqvist says \"She learned to count in those margins\" in sentence 25, readers can infer that he now sees the ledger as —",
          choices: [
            { letter: "A", text: "one of forty nearly identical ledgers" },
            { letter: "B", text: "proof that the store kept careless books" },
            { letter: "C", text: "a reason to delay the grant application" },
            { letter: "D", text: "the start of Greta Brandt's career" }
          ],
          correct: "D"
        },
        {
          id: "change",
          sol: "9.RL.3.A",
          stem: "How does Mr. Lindqvist's attitude toward the ledger change between sentence 16 and sentence 28?",
          choices: [
            { letter: "A", text: "He moves from dismissing it to choosing it for display." },
            { letter: "B", text: "He moves from admiring it to worrying it is fragile." },
            { letter: "C", text: "He moves from ignoring it to selling it to a collector." },
            { letter: "D", text: "He moves from doubting Nadia to doubting the clippings." }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "The story is told in the third person and follows Nadia closely. This point of view mainly allows the reader to —",
          choices: [
            { letter: "A", text: "know Greta Brandt's thoughts as a young girl" },
            { letter: "B", text: "hear the full contents of the grant application" },
            { letter: "C", text: "discover each clue at the same moment Nadia does" },
            { letter: "D", text: "learn why the Brandt family donated the box" }
          ],
          correct: "C"
        },
        {
          id: "late",
          sol: "9.RV.1.C",
          stem: "In sentence 20, the word late, describing Greta Brandt's father, most nearly means —",
          choices: [
            { letter: "A", text: "arriving after the expected time" },
            { letter: "B", text: "no longer living" },
            { letter: "C", text: "recently hired" },
            { letter: "D", text: "working at night" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── 2 · LITERARY · cross-country ───────────────────────── */
    {
      id: "g9-rl-c55-staircase",
      family: "G9",
      title: "Count the Flags",
      kind: "Literary · 9.RL",
      blurb: "Wren needs every second to reach the state meet. A freshman has stopped at the bottom of the hill.",
      level: 3,
      passage:
        "<p>" + N(1) + "The Rolling Fields course began with a mile of flat grass and then, without warning, climbed. " +
        N(2) + "Runners called the climb the Staircase, though there were no stairs, only a long slope of mud and roots that tilted toward the sky like a ramp nobody had finished building. " +
        N(3) + "Wren Castellano had run it twice before and had walked part of it both times. " +
        N(4) + "Today she needed a time of nineteen minutes and forty seconds to reach the state meet, and she knew exactly how many of those seconds the Staircase could steal.</p>" +
        "<p>" + N(5) + "Before the start, Coach Amari gathered the team under the blue tent. " +
        N(6) + "\"Run your race,\" she told Wren, tapping the watch on her wrist. " +
        N(7) + "\"Not anybody else's.\" " +
        N(8) + "Wren nodded, but her eyes went to Bao Tran, the freshman at the end of the line, who was retying the same shoe for the third time. " +
        N(9) + "Bao had joined the team in August without ever having run farther than the length of a soccer field. " +
        N(10) + "He finished most races near the back, gray-faced and silent, and every week he talked about quitting as if it were weather that might arrive at any moment.</p>" +
        "<p>" + N(11) + "The gun cracked, and the field poured forward in a bright, shoving river. " +
        N(12) + "Wren settled into her pace and let the leaders go. " +
        N(13) + "At the base of the Staircase she caught up to Bao, which surprised her, since the boys had started two minutes earlier. " +
        N(14) + "He had stopped running. " +
        N(15) + "He was standing with his hands on his knees, staring up the slope as if it had insulted him.</p>" +
        "<p>" + N(16) + "Two years ago, Wren had stood at almost that exact spot. " +
        N(17) + "A senior named Delia had slowed beside her and said only one sentence: \"Count the flags, not the people.\" " +
        N(18) + "Then Delia had run on, and Wren had counted the little orange flags that lined the course, one and then the next, until the hill was behind her. " +
        N(19) + "Wren had never thanked her; by the time she understood what the sentence had done, Delia had graduated.</p>" +
        "<p>" + N(20) + "Wren did not stop. " +
        N(21) + "Stopping would have cost her the time she had trained all summer to earn. " +
        N(22) + "But as she passed, she called over her shoulder, \"Count the flags, Bao, not the people!\" " +
        N(23) + "She did not look back to see whether he had heard. " +
        N(24) + "The Staircase took its seconds from her, as it always did, and at the top her lungs felt like paper bags crumpled in a fist.</p>" +
        "<p>" + N(25) + "She crossed the finish line in nineteen minutes and thirty-eight seconds. " +
        N(26) + "Two seconds, Coach Amari said, beaming, were as good as two minutes. " +
        N(27) + "Twenty minutes later, as Wren was pulling on her sweatshirt, Bao jogged into the team tent with mud to his knees and his race number half torn away. " +
        N(28) + "\"I counted,\" he said, out of breath. " +
        N(29) + "\"Forty-one flags.\" " +
        N(30) + "His time was a minute faster than he had ever run, and he was already asking when the next meet was.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is best developed by Wren's experiences with both Delia and Bao?",
          choices: [
            { letter: "A", text: "Winning a race matters more than helping a teammate." },
            { letter: "B", text: "A coach's race plan should always be followed exactly." },
            { letter: "C", text: "A small act of encouragement can be passed along to others." },
            { letter: "D", text: "Steep hills decide the outcome of most cross-country races." }
          ],
          correct: "C"
        },
        {
          id: "decision",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Wren's choice in sentences 20–22?",
          choices: [
            { letter: "A", text: "She protects her own goal but still finds a way to help Bao." },
            { letter: "B", text: "She gives up her goal so that she can walk Bao up the hill." },
            { letter: "C", text: "She ignores Bao entirely because her coach told her to." },
            { letter: "D", text: "She tells Bao to drop out of the race before he is hurt." }
          ],
          correct: "A"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "What can the reader infer from Bao's words \"I counted\" and \"Forty-one flags\" in sentences 28 and 29?",
          choices: [
            { letter: "A", text: "He was annoyed that Wren had shouted at him on the hill." },
            { letter: "B", text: "He was disqualified for losing part of his race number." },
            { letter: "C", text: "He thinks the course had too many flags along the hill." },
            { letter: "D", text: "He followed Wren's advice, and it carried him up the hill." }
          ],
          correct: "D"
        },
        {
          id: "flashback",
          sol: "9.RL.3.A",
          stem: "The flashback in sentences 16–19 is important to the story about the Staircase mainly because it —",
          choices: [
            { letter: "A", text: "shows that Wren was once a faster runner than Delia" },
            { letter: "B", text: "explains where the words Wren calls to Bao come from" },
            { letter: "C", text: "reveals why Coach Amari tells Wren to run her own race" },
            { letter: "D", text: "describes how the course was changed over two years" }
          ],
          correct: "B"
        },
        {
          id: "weather",
          sol: "9.RV.1.F",
          stem: "Sentence 10 says Bao talked about quitting as if it were weather that might arrive at any moment. This figurative comparison suggests that Bao —",
          choices: [
            { letter: "A", text: "is nervous that rain will cancel the meet" },
            { letter: "B", text: "sees quitting as something that could happen to him" },
            { letter: "C", text: "has already told the coach he is leaving the team" },
            { letter: "D", text: "jokes about quitting to make his teammates laugh" }
          ],
          correct: "B"
        },
        {
          id: "poured",
          sol: "9.RV.1.E",
          stem: "The author could have written moved instead of poured in sentence 11. Compared with moved, the word poured adds a sense that the runners —",
          choices: [
            { letter: "A", text: "were tired before the race even began" },
            { letter: "B", text: "ran in a careful and orderly single-file line" },
            { letter: "C", text: "surged forward together in a crowded rush" },
            { letter: "D", text: "had been soaked by rain at the start" }
          ],
          correct: "C"
        },
        {
          id: "lungs",
          sol: "9.RL.2.B",
          stem: "The image in sentence 24 of Wren's lungs feeling like paper bags crumpled in a fist mainly emphasizes —",
          choices: [
            { letter: "A", text: "how cold the air felt at the very top" },
            { letter: "B", text: "how angry Wren felt at Bao" },
            { letter: "C", text: "how calm Wren stayed on the climb" },
            { letter: "D", text: "how much the climb had drained her" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of the final paragraph about Wren's time and Bao's return (sentences 25–30) is best described as —",
          choices: [
            { letter: "A", text: "quietly triumphant" },
            { letter: "B", text: "bitter and resentful" },
            { letter: "C", text: "anxious and uncertain" },
            { letter: "D", text: "playfully mocking" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── 3 · LITERARY · summer job ───────────────────────── */
    {
      id: "g9-rl-c55-snack-shack",
      family: "G9",
      title: "Old-Fashioned for a Few Minutes",
      kind: "Literary · 9.RL",
      blurb: "Olu's first shift at the pool snack bar goes smoothly until the lunch rush and a dead cash register.",
      level: 1,
      passage:
        "<p>" + N(1) + "On the first day of his summer job, Olu Adeyemi arrived at the Linden Park Pool snack bar twenty minutes early. " +
        N(2) + "The snack bar was a small wooden building painted the color of a lemon, with a window that opened onto the pool deck and a freezer that hummed all day long. " +
        N(3) + "His manager, Mrs. Haddad, handed him a red apron and a laminated menu. " +
        N(4) + "\"Hot dogs, pretzels, slushies, and ice pops,\" she said. " +
        N(5) + "\"Keep the counter clean, count the change back to every customer, and never let the line see you panic.\"</p>" +
        "<p>" + N(6) + "For the first hour, the job seemed easy. " +
        N(7) + "A few parents bought coffee, and a lifeguard ordered a pretzel and ate it standing up. " +
        N(8) + "Olu wiped the counter until it shone and practiced counting change into his own palm. " +
        N(9) + "Then, at noon, the swim lessons ended. " +
        N(10) + "Forty children rushed from the shallow end toward the window, dripping and shouting, waving damp dollar bills over their heads like small flags.</p>" +
        "<p>" + N(11) + "Olu took the first order and the second. " +
        N(12) + "On the third, the cash register beeped twice and went dark. " +
        N(13) + "He pressed every button. " +
        N(14) + "Nothing happened. " +
        N(15) + "Mrs. Haddad was in the storage shed across the parking lot, and the line was growing longer by the second. " +
        N(16) + "A boy at the front, about seven years old, asked if the snack bar was closed forever.</p>" +
        "<p>" + N(17) + "Olu took a breath. " +
        N(18) + "He remembered the second thing Mrs. Haddad had told him and decided that the third thing mattered just as much. " +
        N(19) + "He tore a sheet off the order pad, drew four columns for the four snacks, and set the cash box on the counter where he could reach it. " +
        N(20) + "\"Not closed,\" he told the boy. " +
        N(21) + "\"Just old-fashioned for a few minutes.\" " +
        N(22) + "He made each sale by hand, adding a tally mark in the right column and counting the change back out loud, coin by coin, so the children could check his math. " +
        N(23) + "Some of them began counting along with him.</p>" +
        "<p>" + N(24) + "When Mrs. Haddad hurried back fifteen minutes later, the line was gone. " +
        N(25) + "She looked at the sheet of tally marks, then at the cash box, then at Olu. " +
        N(26) + "\"The register does this every July,\" she said. " +
        N(27) + "\"Most new workers just stand there.\" " +
        N(28) + "She plugged the register into a different outlet, and it flickered back to life. " +
        N(29) + "Then she pinned Olu's tally sheet to the wall above the freezer. " +
        N(30) + "\"In case it happens again,\" she said, \"now we have instructions.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which idea about work does Olu's first shift at the snack bar best support?",
          choices: [
            { letter: "A", text: "Staying calm and thinking clearly can solve a sudden problem." },
            { letter: "B", text: "New workers should wait for a manager before acting at all." },
            { letter: "C", text: "Summer jobs are easiest during the busiest hours of the day." },
            { letter: "D", text: "Machines are always more dependable than people with paper." }
          ],
          correct: "A"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which words best describe Olu when the register goes dark?",
          choices: [
            { letter: "A", text: "careless and rushed" },
            { letter: "B", text: "shy and embarrassed" },
            { letter: "C", text: "calm and resourceful" },
            { letter: "D", text: "angry and impatient" }
          ],
          correct: "C"
        },
        {
          id: "noon",
          sol: "9.RL.3.A",
          stem: "How does the end of the swim lessons in sentence 9 affect the plot?",
          choices: [
            { letter: "A", text: "It sends Mrs. Haddad to the storage shed for supplies." },
            { letter: "B", text: "It creates the rush that makes the broken register a crisis." },
            { letter: "C", text: "It gives Olu time to practice counting change into his palm." },
            { letter: "D", text: "It causes the freezer to stop humming for the afternoon." }
          ],
          correct: "B"
        },
        {
          id: "flags",
          sol: "9.RL.2.A",
          stem: "In sentence 10, the children waving damp dollar bills over their heads like small flags is an example of —",
          choices: [
            { letter: "A", text: "personification" },
            { letter: "B", text: "hyperbole" },
            { letter: "C", text: "alliteration" },
            { letter: "D", text: "simile" }
          ],
          correct: "D"
        },
        {
          id: "most",
          sol: "9.RL.1.B",
          stem: "Mrs. Haddad's remark in sentence 27, \"Most new workers just stand there,\" suggests that she —",
          choices: [
            { letter: "A", text: "plans to replace the old register" },
            { letter: "B", text: "is impressed that Olu took action" },
            { letter: "C", text: "thinks Olu should have called her" },
            { letter: "D", text: "expects Olu to quit after one day" }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "The snack bar story stays close to Olu's point of view. Which sentence most clearly shows this by revealing his thinking?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 28" }
          ],
          correct: "C"
        },
        {
          id: "tally",
          sol: "9.RV.1.B",
          stem: "As used in sentence 22, a tally mark is —",
          choices: [
            { letter: "A", text: "a stain left by a spilled slushie" },
            { letter: "B", text: "a price printed on the laminated menu" },
            { letter: "C", text: "a stamp showing a customer has paid" },
            { letter: "D", text: "a short line drawn to keep a count" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "Mrs. Haddad's closing line in sentence 30, \"now we have instructions,\" has a tone that is best described as —",
          choices: [
            { letter: "A", text: "lightly humorous and approving" },
            { letter: "B", text: "sharp and openly disappointed" },
            { letter: "C", text: "worried and easily distracted" },
            { letter: "D", text: "stiffly formal and unfriendly" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── 4 · INFORMATIONAL · astronomy ───────────────────────── */
    {
      id: "g9-ri-c55-vanishing-stars",
      family: "G9",
      title: "Where Did the Stars Go?",
      kind: "Informational · 9.RI",
      blurb: "Why city skies hide the Milky Way, how long your eyes need to adjust, and what one town changed.",
      level: 2,
      passage:
        "<p>" + N(1) + "On a clear night far from any town, a person standing in an open field can see roughly two to three thousand stars without a telescope. " +
        N(2) + "In the middle of a brightly lit city, that same person might count fewer than fifty. " +
        N(3) + "The stars have not gone anywhere. " +
        N(4) + "What has changed is the sky itself, which in many places now glows with scattered artificial light, a condition astronomers call light pollution.</p>" +
        "<p>" + N(5) + "Light pollution happens when outdoor lights send their glow upward or sideways instead of down toward the ground where it is needed. " +
        N(6) + "Tiny particles of dust and water in the air scatter that wasted light, and the whole sky brightens into a dull orange or gray haze. " +
        N(7) + "Faint stars, which are only slightly brighter than a truly dark sky, simply vanish against the brighter background. " +
        N(8) + "The pale band of the Milky Way, made of the combined light of billions of distant stars, is usually the first thing to disappear.</p>" +
        "<p>" + N(9) + "Even under a dark sky, though, the human eye needs time. " +
        N(10) + "When a person steps from a lit room into the night, the pupils widen within seconds, but the deeper change happens in the retina, where light-sensitive cells slowly rebuild a chemical that bright light breaks down. " +
        N(11) + "This process, called dark adaptation, takes twenty to thirty minutes to finish. " +
        N(12) + "A single glance at a bright phone screen can undo much of it in an instant. " +
        N(13) + "That is why experienced stargazers cover their flashlights with red cellophane: dim red light disturbs the eye's night chemistry far less than white light does.</p>" +
        "<p>" + N(14) + "The good news is that light pollution is one of the easiest kinds of pollution to reverse. " +
        N(15) + "Unlike smoke or plastic, it does not linger once its source changes. " +
        N(16) + "When the town of Cedar Hollow replaced its old streetlights with shielded fixtures that point downward, volunteers from the local astronomy club measured the sky's brightness before and after. " +
        N(17) + "Over two years, their readings showed that the sky above the town park had grown noticeably darker, and club members reported seeing faint star clusters they had not seen from the park in a decade. " +
        N(18) + "The town also reported lower electric bills, since shielded lights put more of their glow on the street and less into the sky. " +
        N(19) + "Some club members believe that, if neighboring towns follow, the Milky Way could be visible from Cedar Hollow again within a few years, though no one can yet say for sure.</p>" +
        "<p>" + N(20) + "For anyone hoping to see a darker sky tonight, a few steps help. " +
        N(21) + "Find a spot shielded from nearby lights, such as a backyard corner or a field behind a building. " +
        N(22) + "Put the phone away, or turn its screen to the dimmest red setting. " +
        N(23) + "Then wait, and let your eyes do the slow work they were built for. " +
        N(24) + "After half an hour, the sky that looked nearly empty may turn out to be crowded.</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of the article about light pollution and stargazing?",
          choices: [
            { letter: "A", text: "Cities should switch off every outdoor light at night to save money on power." },
            { letter: "B", text: "Stray light hides stars, but darker skies and patient eyes bring them back." },
            { letter: "C", text: "The Milky Way is made of the combined light of billions of distant stars." },
            { letter: "D", text: "Red cellophane is the most important tool an amateur stargazer can own." }
          ],
          correct: "B"
        },
        {
          id: "red",
          sol: "9.RI.1.B",
          stem: "According to the article, why do experienced stargazers cover their flashlights with red cellophane?",
          choices: [
            { letter: "A", text: "Red light travels farther through dusty air." },
            { letter: "B", text: "Red light makes faint stars look brighter." },
            { letter: "C", text: "Red light upsets the eye's night chemistry less." },
            { letter: "D", text: "Red light keeps insects away from the observer." }
          ],
          correct: "C"
        },
        {
          id: "spec",
          sol: "9.RI.1.C",
          stem: "Which sentence about Cedar Hollow presents a speculation rather than a confirmed result?",
          choices: [
            { letter: "A", text: "Sentence 16, about replacing the old streetlights" },
            { letter: "B", text: "Sentence 17, about the club's two years of readings" },
            { letter: "C", text: "Sentence 18, about the town's lower electric bills" },
            { letter: "D", text: "Sentence 19, about the Milky Way coming back" }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "How is the second paragraph of the light-pollution article (sentences 5–8) mainly organized?",
          choices: [
            { letter: "A", text: "as a chain of causes and effects" },
            { letter: "B", text: "as a list of steps for the reader" },
            { letter: "C", text: "as a comparison of two towns" },
            { letter: "D", text: "as a story told in time order" }
          ],
          correct: "A"
        },
        {
          id: "open",
          sol: "9.RI.2.B",
          stem: "The author opens with the contrast between sentences 1 and 2 mainly to —",
          choices: [
            { letter: "A", text: "prove that city residents have weaker eyesight" },
            { letter: "B", text: "explain how dark adaptation works in the retina" },
            { letter: "C", text: "show at once how much light pollution hides" },
            { letter: "D", text: "argue that people should move to the country" }
          ],
          correct: "C"
        },
        {
          id: "evid",
          sol: "9.RI.3.A",
          stem: "Which sentence gives the strongest evidence for the claim in sentence 14 that light pollution is easy to reverse?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 17" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "B"
        },
        {
          id: "linger",
          sol: "9.RV.1.C",
          stem: "In sentence 15, the word linger most nearly means —",
          choices: [
            { letter: "A", text: "remain" },
            { letter: "B", text: "spread" },
            { letter: "C", text: "shine" },
            { letter: "D", text: "change" }
          ],
          correct: "A"
        },
        {
          id: "artificial",
          sol: "9.RV.1.B",
          stem: "The word artificial in sentence 4 shares a root with artifact and artisan, words connected to human skill. Artificial light is light that is —",
          choices: [
            { letter: "A", text: "too faint to be measured" },
            { letter: "B", text: "reflected by the moon" },
            { letter: "C", text: "scattered by dust" },
            { letter: "D", text: "made by people" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── 5 · INFORMATIONAL · museum ───────────────────────── */
    {
      id: "g9-ri-c55-ice-cream-churn",
      family: "G9",
      title: "The Churn That Wasn't",
      kind: "Informational · 9.RI",
      blurb: "How a small museum checks an object's story, and how a visitor corrected a forty-year-old label.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every object that enters a museum arrives with a story, and part of a curator's job is to find out whether the story is true. " +
        N(2) + "At a large museum, specialists in textiles, tools, or photographs may examine a new arrival. " +
        N(3) + "At a small county museum, the work often falls to one staff member and a handful of volunteers, armed with a magnifying glass, a filing cabinet, and a great deal of patience.</p>" +
        "<p>" + N(4) + "The first question is always provenance, the record of where an object has been and who has owned it. " +
        N(5) + "A donor might say that a rocking chair belonged to a great-grandmother who carried it west in a wagon. " +
        N(6) + "The curator listens carefully, writes the story down, and then looks for anything that can confirm or contradict it. " +
        N(7) + "Are there family letters that mention the chair? " +
        N(8) + "Does a photograph show it in a farmhouse parlor? " +
        N(9) + "Do the nails, joints, and finish match the period the family describes? " +
        N(10) + "A family story is valuable evidence, but it is still only one piece, and memories passed down through four generations can bend like a stick seen through water.</p>" +
        "<p>" + N(11) + "Consider the case of the Weller Township Museum's \"butter churn.\" " +
        N(12) + "For nearly forty years, a wooden bucket with a metal crank sat in the museum's farm kitchen display, labeled as a churn used to make butter. " +
        N(13) + "Then a retired machinist named Odile Ferrante, visiting with her grandchildren, stopped in front of it and frowned. " +
        N(14) + "She pointed out that the crank turned a metal canister inside the bucket, leaving a gap around it that a butter churn would have no reason to have. " +
        N(15) + "The object, she said, was a hand-cranked ice cream freezer: salt and ice went in the gap, and cream went in the canister.</p>" +
        "<p>" + N(16) + "The museum's director did not simply take her word for it. " +
        N(17) + "She compared the object with catalog drawings from the 1890s and found a nearly identical freezer, sold by mail for two dollars and fifty cents. " +
        N(18) + "A volunteer then located a brief note in the original donation file, written in 1984 and overlooked ever since, that said \"ice cream maker, from Aunt Ruth's porch.\" " +
        N(19) + "Three sources, a visitor's expertise, an old catalog, and the donor's own words, now pointed the same way. " +
        N(20) + "The label was rewritten.</p>" +
        "<p>" + N(21) + "Mistakes like this are common, and museum staff generally see them less as embarrassments than as chances to improve the record. " +
        N(22) + "In fact, many small museums now invite visitors to share what they know, posting cards beside puzzling objects that ask, \"Do you recognize this?\" " +
        N(23) + "Some of the most useful corrections have come from people who used the tools as children, or whose parents did. " +
        N(24) + "A museum's collection, in this sense, is never quite finished; it is a conversation that each generation of visitors helps to continue.</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of the article about the Weller Township Museum?",
          choices: [
            { letter: "A", text: "Small museums should hire more trained specialists to examine objects." },
            { letter: "B", text: "Ice cream freezers were common farm tools in the 1890s." },
            { letter: "C", text: "Family stories are the most reliable evidence a museum has." },
            { letter: "D", text: "An object's story must be checked against several kinds of evidence." }
          ],
          correct: "D"
        },
        {
          id: "file",
          sol: "9.RI.1.B",
          stem: "According to the article, what did the volunteer find in the original donation file?",
          choices: [
            { letter: "A", text: "a 1984 note calling the object an ice cream maker" },
            { letter: "B", text: "a catalog drawing priced at two dollars and fifty cents" },
            { letter: "C", text: "a photograph of the bucket in a farmhouse parlor" },
            { letter: "D", text: "a letter from Odile Ferrante describing the canister" }
          ],
          correct: "A"
        },
        {
          id: "claim",
          sol: "9.RI.1.C",
          stem: "Sentence 21, which says museum staff generally see mistakes as chances to improve the record, is best described as —",
          choices: [
            { letter: "A", text: "a measurement taken from the 1890s catalog" },
            { letter: "B", text: "a direct quotation from the object's donor" },
            { letter: "C", text: "a general claim about how staff view errors" },
            { letter: "D", text: "a prediction about the museum's next exhibit" }
          ],
          correct: "C"
        },
        {
          id: "struct",
          sol: "9.RI.2.A",
          stem: "How do sentences 11–20 relate to the paragraph that comes before them (sentences 4–10)?",
          choices: [
            { letter: "A", text: "They argue against the checking process it describes." },
            { letter: "B", text: "They give an extended example of that checking process." },
            { letter: "C", text: "They define a new term that the paragraph left out." },
            { letter: "D", text: "They shift to a museum in a much larger city." }
          ],
          correct: "B"
        },
        {
          id: "questions",
          sol: "9.RI.2.B",
          stem: "The author includes the three questions in sentences 7–9 mainly to —",
          choices: [
            { letter: "A", text: "show the kinds of evidence a curator looks for" },
            { letter: "B", text: "suggest that the donor's story about the chair is false" },
            { letter: "C", text: "ask readers to donate their own family furniture" },
            { letter: "D", text: "explain how rocking chairs were built in the past" }
          ],
          correct: "A"
        },
        {
          id: "confirm",
          sol: "9.RI.3.A",
          stem: "Which sentence best shows that the museum's director checked Odile Ferrante's claim against independent evidence?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 22" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "D"
        },
        {
          id: "stick",
          sol: "9.RV.1.F",
          stem: "Sentence 10 says that family memories can bend like a stick seen through water. This comparison suggests that such memories —",
          choices: [
            { letter: "A", text: "are usually invented on purpose" },
            { letter: "B", text: "can look true while being distorted" },
            { letter: "C", text: "fade completely after four generations" },
            { letter: "D", text: "are more useful than written records" }
          ],
          correct: "B"
        },
        {
          id: "prov",
          sol: "9.RV.1.C",
          stem: "As it is defined by context in sentence 4, provenance refers to —",
          choices: [
            { letter: "A", text: "the price a museum pays for an object" },
            { letter: "B", text: "the room in which an object is displayed" },
            { letter: "C", text: "an object's history of places and owners" },
            { letter: "D", text: "the process of cleaning an old object" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── 6 · VOCABULARY · summer job ───────────────────────── */
    {
      id: "g9-rv-c55-basil-table",
      family: "G9",
      title: "Forty Pots of Basil",
      kind: "Vocabulary · 9.RV",
      blurb: "A heat wave, a restaurant order, and five words to work out at Teodora's garden center job.",
      level: 1,
      passage:
        "<p>" + N(1) + "Teodora Marin's summer job at Fernwood Garden Center began with a hose, a map of the greenhouse, and a warning. " +
        N(2) + "\"Plants don't tell you they're thirsty until it's almost too late,\" said Mr. Achterberg, the owner, who had run the center for thirty years. " +
        N(3) + "\"So you have to be <strong>diligent</strong>. " +
        N(4) + "Check every row, every morning, even when it looks fine.\"</p>" +
        "<p>" + N(5) + "For the first week, Teodora did exactly that. " +
        N(6) + "She walked the rows at seven o'clock, pressing a finger into the soil of each pot to feel whether it was damp, and wrote what she found in a spiral notebook. " +
        N(7) + "The tomatoes, the marigolds, and the young lemon trees seemed to <strong>thrive</strong> under her care, growing taller and greener each day.</p>" +
        "<p>" + N(8) + "Then the heat wave arrived. " +
        N(9) + "For four days the temperature climbed past one hundred degrees, and the greenhouse fans roared without stopping. " +
        N(10) + "On the fourth afternoon, Teodora came back from her lunch break to find an entire table of basil <strong>wilted</strong>, the leaves hanging limp and dark over the sides of the pots like wet laundry. " +
        N(11) + "She felt her stomach drop. " +
        N(12) + "There were forty plants on that table, and a customer had ordered every one of them for a restaurant opening on Saturday.</p>" +
        "<p>" + N(13) + "Teodora's first thought was to hide the table behind the shed. " +
        N(14) + "Her second was to find Mr. Achterberg, though she was <strong>hesitant</strong> to tell him; she was sure he would be angry. " +
        N(15) + "Instead, he crouched beside the basil, lifted one drooping stem with two fingers, and studied it closely. " +
        N(16) + "\"The roots are still white,\" he said. " +
        N(17) + "\"We can <strong>salvage</strong> most of these if we move fast.\"</p>" +
        "<p>" + N(18) + "For the next hour, they worked together. " +
        N(19) + "They carried the pots into the shade of the loading dock, set them in shallow trays of cool water, and trimmed away the leaves that had turned black. " +
        N(20) + "Mr. Achterberg moved without hurrying, but he never stopped, and Teodora tried to copy his steady rhythm instead of rushing. " +
        N(21) + "By evening, thirty-six of the forty plants had lifted their leaves again.</p>" +
        "<p>" + N(22) + "On Saturday, the restaurant owner picked up her order and said the basil smelled better than any she had bought in years. " +
        N(23) + "After she left, Mr. Achterberg handed Teodora a roll of shade cloth. " +
        N(24) + "\"Tomorrow we put this over the herb tables,\" he said. " +
        N(25) + "\"The plants taught us something this week, and it would be a waste not to listen.\" " +
        N(26) + "Teodora wrote that down in her notebook, too.</p>",
      claims: [
        {
          id: "diligent",
          sol: "9.RV.1.C",
          stem: "In sentence 3, Mr. Achterberg's word diligent most nearly means —",
          choices: [
            { letter: "A", text: "careful and steady in effort" },
            { letter: "B", text: "quick and a little careless" },
            { letter: "C", text: "friendly toward customers" },
            { letter: "D", text: "strong enough to lift pots" }
          ],
          correct: "A"
        },
        {
          id: "thrive",
          sol: "9.RV.1.C",
          stem: "Which words from sentence 7 best help the reader understand the meaning of thrive?",
          choices: [
            { letter: "A", text: "The tomatoes, the marigolds, and the young" },
            { letter: "B", text: "seemed to thrive under her care" },
            { letter: "C", text: "growing taller and greener" },
            { letter: "D", text: "the young lemon trees seemed" }
          ],
          correct: "C"
        },
        {
          id: "wilted",
          sol: "9.RV.1.B",
          stem: "In sentence 10, basil that has wilted is basil that is —",
          choices: [
            { letter: "A", text: "ready to be picked and sold" },
            { letter: "B", text: "drooping from heat and thirst" },
            { letter: "C", text: "growing too fast for its pot" },
            { letter: "D", text: "covered by small insects" }
          ],
          correct: "B"
        },
        {
          id: "hesitant",
          sol: "9.RV.1.C",
          stem: "As used in sentence 14, the word hesitant most nearly means —",
          choices: [
            { letter: "A", text: "eager to share news" },
            { letter: "B", text: "too tired to move" },
            { letter: "C", text: "proud of a decision" },
            { letter: "D", text: "held back by doubt" }
          ],
          correct: "D"
        },
        {
          id: "salvage",
          sol: "9.RV.1.B",
          stem: "In sentence 17, Mr. Achterberg says they can salvage most of the plants. Salvage most nearly means to —",
          choices: [
            { letter: "A", text: "sell at a lower price" },
            { letter: "B", text: "throw away quickly" },
            { letter: "C", text: "rescue from loss" },
            { letter: "D", text: "count one by one" }
          ],
          correct: "C"
        },
        {
          id: "roared",
          sol: "9.RV.1.E",
          stem: "The author could have written ran instead of roared in sentence 9. Compared with ran, the word roared adds a sense that the fans were —",
          choices: [
            { letter: "A", text: "loud and straining hard" },
            { letter: "B", text: "quiet and easy for people to ignore" },
            { letter: "C", text: "broken and about to stop for good" },
            { letter: "D", text: "new and recently installed" }
          ],
          correct: "A"
        },
        {
          id: "laundry",
          sol: "9.RV.1.F",
          stem: "In sentence 10, the leaves hang over the pots like wet laundry. This comparison mainly suggests that the basil is —",
          choices: [
            { letter: "A", text: "clean and freshly watered" },
            { letter: "B", text: "bright and colorful" },
            { letter: "C", text: "neatly arranged in rows" },
            { letter: "D", text: "heavy, limp, and sagging" }
          ],
          correct: "D"
        },
        {
          id: "lesson",
          sol: "9.RL.1.B",
          stem: "Mr. Achterberg's comment in sentence 25 that the plants taught us something suggests that he —",
          choices: [
            { letter: "A", text: "blames Teodora for the damaged basil" },
            { letter: "B", text: "treats the problem as a lesson to use" },
            { letter: "C", text: "plans to stop selling herbs next year" },
            { letter: "D", text: "thinks the heat wave will never return" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── 7 · VOCABULARY · astronomy ───────────────────────── */
    {
      id: "g9-rv-c55-occultation",
      family: "G9",
      title: "Four Seconds in Cygnus",
      kind: "Vocabulary · 9.RV",
      blurb: "Yusuf waits three weeks to time a star that will vanish for four seconds, with six words to work out.",
      level: 3,
      passage:
        "<p>" + N(1) + "The event Yusuf Rahimi had waited three weeks for would last, at most, four seconds. " +
        N(2) + "Sometime after 11:52 p.m., a small asteroid known only by a catalog number would pass in front of a faint star in the constellation Cygnus, and for a moment the star would wink out. " +
        N(3) + "If Yusuf recorded exactly when it vanished and when it returned, his times, combined with those of observers in other towns, would help astronomers sketch the asteroid's outline, the way several flashlights held at different angles reveal the shape of a hand by its shadow.</p>" +
        "<p>" + N(4) + "Mrs. Solberg, who ran the Pell Ridge astronomy club from a converted dairy barn, had warned him that the work required a <strong>scrupulous</strong> observer. " +
        N(5) + "\"Not a good one,\" she said. " +
        N(6) + "\"A careful one. " +
        N(7) + "Check your clock against the radio signal twice. " +
        N(8) + "Write down the cloud cover, the temperature, anything that might matter later. " +
        N(9) + "If you aren't sure you saw something, say so.\"</p>" +
        "<p>" + N(10) + "By eleven, Yusuf had begun his <strong>vigil</strong> at the eyepiece, wrapped in two sweatshirts against the October cold. " +
        N(11) + "The target star was <strong>elusive</strong>; twice he lost it among its brighter neighbors and had to begin his search again from a bright guide star, hopping from point to point like someone crossing a creek on stones. " +
        N(12) + "At 11:40 he found it and did not dare look away.</p>" +
        "<p>" + N(13) + "The minutes stretched. " +
        N(14) + "His eye watered, and his neck began to ache from the angle of the telescope. " +
        N(15) + "The video camera hummed beside him, recording the field of stars, but Mrs. Solberg had told him that a human observer's notes could <strong>corroborate</strong> what the camera captured, or catch what it missed if the battery died. " +
        N(16) + "He kept his thumb on the timer button.</p>" +
        "<p>" + N(17) + "At 11:53 and twelve seconds, the star went out. " +
        N(18) + "It did not fade; it was simply gone, as if someone had pinched a candle. " +
        N(19) + "Yusuf pressed the button. " +
        N(20) + "Two seconds later, with a change so slight it was nearly <strong>imperceptible</strong>, a faint glimmer returned, then the full star. " +
        N(21) + "He pressed the button again, and only then realized he had been holding his breath.</p>" +
        "<p>" + N(22) + "Later, in the barn, Mrs. Solberg compared his times with the camera's. " +
        N(23) + "They matched within a tenth of a second. " +
        N(24) + "Three days later, an email arrived from the coordinator of the observing network: of the eleven stations that had tried, only four had seen the star disappear, and Yusuf's line across the asteroid's path was the northernmost. " +
        N(25) + "It showed that the asteroid was longer than anyone had expected. " +
        N(26) + "Yusuf printed the email and pinned it above his desk, next to the cold-weather checklist he now planned to follow every time.</p>",
      claims: [
        {
          id: "scrupulous",
          sol: "9.RV.1.C",
          stem: "Mrs. Solberg's advice in sentences 5–9 shows that a scrupulous observer is one who is —",
          choices: [
            { letter: "A", text: "talented and naturally gifted" },
            { letter: "B", text: "exact and honest about details" },
            { letter: "C", text: "fast and eager to finish" },
            { letter: "D", text: "well known to other astronomers" }
          ],
          correct: "B"
        },
        {
          id: "elusive",
          sol: "9.RV.1.C",
          stem: "Which detail from sentence 11 best helps the reader understand that the word elusive means hard to find or keep hold of?",
          choices: [
            { letter: "A", text: "The target star" },
            { letter: "B", text: "a bright guide star" },
            { letter: "C", text: "crossing a creek on stones" },
            { letter: "D", text: "twice he lost it" }
          ],
          correct: "D"
        },
        {
          id: "corroborate",
          sol: "9.RV.1.B",
          stem: "In sentence 15, notes that corroborate what the camera captured are notes that —",
          choices: [
            { letter: "A", text: "confirm and support it" },
            { letter: "B", text: "replace it completely" },
            { letter: "C", text: "argue against it" },
            { letter: "D", text: "summarize it briefly" }
          ],
          correct: "A"
        },
        {
          id: "imperceptible",
          sol: "9.RV.1.B",
          stem: "The word imperceptible in sentence 20 is built from the prefix im-, meaning not, and perceptible. It describes a change that is —",
          choices: [
            { letter: "A", text: "loud enough to startle" },
            { letter: "B", text: "recorded only on video" },
            { letter: "C", text: "almost too small to notice" },
            { letter: "D", text: "impossible to explain" }
          ],
          correct: "C"
        },
        {
          id: "vigil",
          sol: "9.RV.1.E",
          stem: "The author chose vigil in sentence 10 instead of a plainer word such as session. Compared with session, vigil suggests a period of —",
          choices: [
            { letter: "A", text: "relaxed fun with friends" },
            { letter: "B", text: "hurried, careless work" },
            { letter: "C", text: "formal classroom study" },
            { letter: "D", text: "watchful, patient waiting" }
          ],
          correct: "D"
        },
        {
          id: "gone",
          sol: "9.RV.1.E",
          stem: "Sentence 18 says the star did not fade but was simply gone. Compared with fade, the word gone stresses that the change was —",
          choices: [
            { letter: "A", text: "sudden and complete" },
            { letter: "B", text: "slow and gradual" },
            { letter: "C", text: "partial and uneven" },
            { letter: "D", text: "expected and dull" }
          ],
          correct: "A"
        },
        {
          id: "creek",
          sol: "9.RV.1.F",
          stem: "In sentence 11, Yusuf hops from star to star like someone crossing a creek on stones. This comparison suggests that he —",
          choices: [
            { letter: "A", text: "is close to giving up on the search" },
            { letter: "B", text: "is cold and wishes he were indoors" },
            { letter: "C", text: "moves with care from one sure spot to another" },
            { letter: "D", text: "jumps around the sky at random in order to save time" }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "9.RL.2.C",
          stem: "Which phrase best describes the mood of sentences 17–21, when the star disappears behind the asteroid?",
          choices: [
            { letter: "A", text: "calm and sleepy" },
            { letter: "B", text: "tense and breathless" },
            { letter: "C", text: "gloomy and hopeless" },
            { letter: "D", text: "silly and lighthearted" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── 8 · PAIRED · summer jobs ───────────────────────── */
    {
      id: "g9-dsr-c55-summer-work",
      family: "G9",
      title: "The First Job",
      kind: "Paired texts · 9.DSR",
      blurb: "A counseling newsletter praises summer jobs; a student who could not take one describes her summer instead.",
      level: 2,
      passage:
        "<p><strong>Text 1 — The Paycheck Isn't the Only Payoff (Ridgemont High counseling newsletter)</strong></p>" +
        "<p>" + N(1) + "Every spring, the counseling office hears the same question from freshmen and sophomores: is a summer job worth it? " +
        N(2) + "Our answer is almost always yes, and not only because of the paycheck. " +
        N(3) + "Employers who hire teenagers consistently say that the skills they value most are not technical ones. " +
        N(4) + "They want workers who arrive on time, follow directions, ask questions when they are unsure, and stay polite with a difficult customer. " +
        N(5) + "Those habits are hard to learn in a classroom and easy to learn behind a counter. " +
        N(6) + "A summer job also gives students their first reference, an adult outside school who can describe how they work. " +
        N(7) + "When juniors and seniors apply for scholarships or later jobs, a line from a former supervisor often carries more weight than a list of clubs. " +
        N(8) + "Last year, forty-one Ridgemont students reported holding summer jobs, at pools, day camps, grocery stores, and the county history museum. " +
        N(9) + "Several told us the hardest part was simply getting hired. " +
        N(10) + "Our advice: start early, apply to more places than you think you need, and treat every application as practice. " +
        N(11) + "Students who want help with a first resume can sign up for a fifteen-minute session in the counseling office any weekday during lunch. " +
        N(12) + "The first job is the hardest to get; every one after it is easier.</p>" +
        "<p><strong>Text 2 — Twelve Applications and One Yes (a student's blog)</strong></p>" +
        "<p>" + N(13) + "I applied to twelve places last May. " +
        N(14) + "I filled out the forms, I showed up in a collared shirt, and I smiled until my face hurt. " +
        N(15) + "Eleven never called back. " +
        N(16) + "The one that did, a frozen yogurt shop near the highway, needed someone who could work until ten on weeknights, which I could not do because I watch my little brother while my mom works evenings. " +
        N(17) + "So I didn't get a summer job. " +
        N(18) + "What I got instead was a summer of my brother, who is six and has opinions about everything. " +
        N(19) + "I made him lunch, walked him to the library's reading program, and settled about forty arguments over the TV remote. " +
        N(20) + "Twice a week I also helped our neighbor, Mr. Okonkwo, sort donations at the food pantry. " +
        N(21) + "Nobody paid me for any of it. " +
        N(22) + "But I showed up on time every day, I followed directions I didn't always agree with, and I learned more about staying calm with a difficult customer than any frozen yogurt shop could have taught me. " +
        N(23) + "When I apply again this spring, Mr. Okonkwo has offered to write my reference. " +
        N(24) + "I'm not sure the counseling office would call what I did a summer job. " +
        N(25) + "I'm also not sure it matters what it's called.</p>",
      claims: [
        {
          id: "both",
          sol: "9.DSR.D",
          stem: "Which idea do both the Ridgemont counseling newsletter and the student's blog support?",
          choices: [
            { letter: "A", text: "Habits like arriving on time are worth building as a teenager." },
            { letter: "B", text: "Frozen yogurt shops are the easiest places for teens to work." },
            { letter: "C", text: "Students should apply to at least twelve jobs every spring." },
            { letter: "D", text: "A paycheck is the most important reason to work in summer." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "The newsletter and the blog differ mainly in how they view —",
          choices: [
            { letter: "A", text: "whether employers value polite workers" },
            { letter: "B", text: "whether resumes help students get hired" },
            { letter: "C", text: "whether only a paid job builds work skills" },
            { letter: "D", text: "whether younger siblings need supervision" }
          ],
          correct: "C"
        },
        {
          id: "echo",
          sol: "9.DSR.E",
          stem: "In sentence 22, the blog writer most directly echoes which sentence from the counseling newsletter?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "D"
        },
        {
          id: "combine",
          sol: "9.DSR.E",
          stem: "A reader who combines the newsletter's point about references with the blog writer's experience could best conclude that —",
          choices: [
            { letter: "A", text: "scholarship committees ignore references from neighbors" },
            { letter: "B", text: "a useful reference can come from unpaid work as well" },
            { letter: "C", text: "references matter only for juniors and seniors" },
            { letter: "D", text: "a supervisor's reference is harder to get than a job" }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          stem: "Select TWO sentences, one from each text, that together show a gap between the counseling office's advice and the blog writer's situation.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "voice",
          sol: "9.DSR.E",
          stem: "Compared with the counseling newsletter, the student's blog sounds more —",
          choices: [
            { letter: "A", text: "formal and instructional" },
            { letter: "B", text: "angry and accusing" },
            { letter: "C", text: "statistical and objective" },
            { letter: "D", text: "personal and reflective" }
          ],
          correct: "D"
        },
        {
          id: "resume",
          sol: "9.RI.1.B",
          stem: "According to the counseling newsletter, how can a student get help with a first resume?",
          choices: [
            { letter: "A", text: "by signing up for a short session at lunch" },
            { letter: "B", text: "by asking a former supervisor to edit it" },
            { letter: "C", text: "by attending a workshop at the museum" },
            { letter: "D", text: "by emailing a sample to local employers" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "9.RI.1.C",
          stem: "The blog writer ends with sentences 24 and 25 mainly to suggest that —",
          choices: [
            { letter: "A", text: "the counseling office gave her poor advice" },
            { letter: "B", text: "she plans never to apply for a paid job again" },
            { letter: "C", text: "what she learned matters more than the label" },
            { letter: "D", text: "her brother will be old enough to stay alone" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── 9 · PAIRED · cross-country ───────────────────────── */
    {
      id: "g9-dsr-c55-hollis-farm",
      family: "G9",
      title: "Loop or Farm?",
      kind: "Paired texts · 9.DSR",
      blurb: "The athletic director moves home meets to a school loop; the team captain says what the old farm course taught.",
      level: 3,
      passage:
        "<p><strong>Text 1 — A New Home Course for Fairmont Cross-Country (athletic director's announcement)</strong></p>" +
        "<p>" + N(1) + "Beginning this fall, Fairmont High's home cross-country meets will move from the Hollis Farm trails to a new course on the school's own grounds. " +
        N(2) + "The new course is a 1.25-mile loop around the practice fields and the wooded edge behind the tennis courts, run four times for the standard five-kilometer distance. " +
        N(3) + "Several concerns led to this decision. " +
        N(4) + "The Hollis Farm trails sit twelve miles from campus, so every home meet required two buses and a ninety-minute round trip. " +
        N(5) + "Last season, two runners were treated for sprained ankles after the creek crossing flooded, and an ambulance needed twenty minutes to reach the far side of the course. " +
        N(6) + "Families also told us they could see their runners only at the start and the finish. " +
        N(7) + "On the new loop, spectators standing near the bleachers will see each runner pass four times, and an athletic trainer can reach any point on the course in under three minutes. " +
        N(8) + "We are grateful to the Hollis family, who opened their land to our team for thirty-one years. " +
        N(9) + "The final meet on the farm course will be held October 4, and all former Fairmont runners are invited to join a ceremonial last lap. " +
        N(10) + "We believe the new course will make home meets safer, closer, and easier for families to enjoy.</p>" +
        "<p><strong>Text 2 — What a Loop Can't Teach (letter to the school newspaper from a team captain)</strong></p>" +
        "<p>" + N(11) + "I understand why the athletic department moved our home meets, and I won't pretend the bus rides were fun. " +
        N(12) + "The safety concerns are real; I was standing beside one of the runners who sprained an ankle at the creek. " +
        N(13) + "But I want the school to understand what we are giving up. " +
        N(14) + "The Hollis Farm course was hard in a way a loop around the practice fields will never be. " +
        N(15) + "It had a creek, a hill we called the Wall, and a half mile through tall grass where you could not see the runner ahead of you or the one behind. " +
        N(16) + "In that stretch, nobody was cheering, and you had to decide for yourself whether to push. " +
        N(17) + "Most of what I know about racing, I learned there. " +
        N(18) + "A loop run four times is a different test. " +
        N(19) + "It rewards runners who can hold an even pace, and it lets families watch, which matters. " +
        N(20) + "But every lap is the same lap, and there is no stretch where a runner must race alone. " +
        N(21) + "I would ask the athletic department for one thing: keep one practice a week at Hollis Farm, if the family agrees, so that younger runners can still learn what the grass teaches. " +
        N(22) + "A course should be safe. " +
        N(23) + "It should also ask something of the people who run it.</p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          stem: "On which point do the Fairmont athletic director and the team captain agree?",
          choices: [
            { letter: "A", text: "The farm course raised real safety concerns." },
            { letter: "B", text: "The new loop is harder than the farm course." },
            { letter: "C", text: "Home meets should stay at Hollis Farm." },
            { letter: "D", text: "Families rarely attend cross-country meets." }
          ],
          correct: "A"
        },
        {
          id: "values",
          sol: "9.DSR.D",
          stem: "Which statement best describes how the two Fairmont texts differ in what they value about a course?",
          choices: [
            { letter: "A", text: "The director values tradition; the captain values speed." },
            { letter: "B", text: "The director values cost; the captain values scenery." },
            { letter: "C", text: "The director values distance; the captain values hills." },
            { letter: "D", text: "The director values safety; the captain values challenge." }
          ],
          correct: "D"
        },
        {
          id: "respond",
          sol: "9.DSR.E",
          stem: "In sentence 19, the captain responds most directly to which sentence from the athletic director's announcement?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.DSR.E",
          stem: "Which inference about the Hollis Farm course is best supported by both the announcement and the letter?",
          choices: [
            { letter: "A", text: "Much of it could not be watched from one spot." },
            { letter: "B", text: "It was shorter than the standard race distance." },
            { letter: "C", text: "The Hollis family wanted the team to leave." },
            { letter: "D", text: "Its creek was dry for most of the season." }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          stem: "Select TWO sentences that together best explain why families rarely saw runners in the middle of the Hollis Farm course.",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "manner",
          sol: "9.DSR.E",
          stem: "Compared with the athletic director's announcement, the captain's letter is more —",
          choices: [
            { letter: "A", text: "official, listing dates and distances" },
            { letter: "B", text: "personal, mixing agreement with a request" },
            { letter: "C", text: "humorous, poking fun at the new course" },
            { letter: "D", text: "neutral, avoiding any opinion at all" }
          ],
          correct: "B"
        },
        {
          id: "evid",
          sol: "9.RI.3.A",
          stem: "Which sentence from the announcement gives the strongest evidence that the farm course was hard to supervise safely?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        },
        {
          id: "concede",
          sol: "9.RI.2.B",
          stem: "The captain begins the letter with sentences 11 and 12 mainly to —",
          choices: [
            { letter: "A", text: "complain about the long bus rides" },
            { letter: "B", text: "describe the runner who was injured" },
            { letter: "C", text: "admit valid points before disagreeing" },
            { letter: "D", text: "thank the Hollis family for their land" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── 10 · POETRY · night sky ───────────────────────── */
    {
      id: "g9-rl-c55-summer-triangle",
      family: "G9",
      title: "The Summer Triangle",
      kind: "Poetry · 9.RL",
      blurb: "On a warm roof in August, a father who learned the stars on the walk home from the night shift passes them on.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My father learned the sky from the night shift,<br>" +
        L(2) + "walking home at four from the bottling plant<br>" +
        L(3) + "when the streetlights had already given up<br>" +
        L(4) + "and the stars were the only thing still working.<br>" +
        L(5) + "He never owned a telescope. He owned<br>" +
        L(6) + "a paper chart, soft as an old dollar,<br>" +
        L(7) + "folded so many times the creases<br>" +
        L(8) + "ran straight through Hercules.<br>" +
        L(9) + "In August he takes me up the back stairs<br>" +
        L(10) + "to the flat part of the roof, where the tar<br>" +
        L(11) + "still holds the afternoon like a held breath,<br>" +
        L(12) + "and we lie down with our heads toward the north.<br>" +
        L(13) + "Vega first, he says, the bright one,<br>" +
        L(14) + "and I find it, blue-white, almost overhead.<br>" +
        L(15) + "Then Deneb, at the tail of the swan,<br>" +
        L(16) + "then Altair, low and steady, the third corner.<br>" +
        L(17) + "A triangle, he says, though no one drew it.<br>" +
        L(18) + "You just decide the lines are there.<br>" +
        L(19) + "I want to ask how long it took him to learn this,<br>" +
        L(20) + "how many mornings he stood at the corner<br>" +
        L(21) + "too tired to go inside, looking up.<br>" +
        L(22) + "Instead I trace the triangle with one finger<br>" +
        L(23) + "so he can see I've got it,<br>" +
        L(24) + "and he puts the chart away. We don't need it now." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is best developed across the poem \"The Summer Triangle\"?",
          choices: [
            { letter: "A", text: "Expensive equipment is needed to understand the sky." },
            { letter: "B", text: "Children rarely appreciate what their parents know." },
            { letter: "C", text: "Knowledge earned in hard times can be passed on as a gift." },
            { letter: "D", text: "Night work leaves people with no time for any hobbies." }
          ],
          correct: "C"
        },
        {
          id: "unasked",
          sol: "9.RL.1.B",
          stem: "In lines 19–22, the speaker wants to ask a question but traces the triangle instead. Readers can infer that the speaker —",
          choices: [
            { letter: "A", text: "senses the effort behind the lesson and honors it quietly" },
            { letter: "B", text: "is bored and wants the lesson to end quickly" },
            { letter: "C", text: "does not believe the father really learned alone" },
            { letter: "D", text: "is afraid of being on the roof in the dark" }
          ],
          correct: "A"
        },
        {
          id: "working",
          sol: "9.RL.2.A",
          stem: "Lines 3 and 4 say the streetlights had given up and the stars were the only thing still working. This personification mainly links the stars to —",
          choices: [
            { letter: "A", text: "the broken lights of the city" },
            { letter: "B", text: "the speaker's lessons on the roof" },
            { letter: "C", text: "the folded paper chart" },
            { letter: "D", text: "the father's own night labor" }
          ],
          correct: "D"
        },
        {
          id: "breath",
          sol: "9.RL.2.B",
          stem: "The image in line 11 of the tar holding the afternoon like a held breath mainly creates a feeling of —",
          choices: [
            { letter: "A", text: "danger and alarm" },
            { letter: "B", text: "warm, waiting stillness" },
            { letter: "C", text: "noisy celebration" },
            { letter: "D", text: "bitter disappointment" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "Which phrase best describes the speaker's tone toward the father throughout \"The Summer Triangle\"?",
          choices: [
            { letter: "A", text: "tender admiration" },
            { letter: "B", text: "mild annoyance" },
            { letter: "C", text: "cool indifference" },
            { letter: "D", text: "nervous suspicion" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "The poem \"The Summer Triangle\" is told from the point of view of —",
          choices: [
            { letter: "A", text: "the father, remembering his years at the plant" },
            { letter: "B", text: "a neighbor watching the pair from the street" },
            { letter: "C", text: "the father's child, learning the stars from him" },
            { letter: "D", text: "an astronomer describing the constellations" }
          ],
          correct: "C"
        },
        {
          id: "shift",
          sol: "9.RL.3.A",
          stem: "How does the end of the poem (lines 22–24) differ from its opening (lines 1–8)?",
          choices: [
            { letter: "A", text: "The opening is set in winter, while the ending is set in summer." },
            { letter: "B", text: "The opening praises telescopes, and the ending rejects them." },
            { letter: "C", text: "The opening is hopeful, and the ending is filled with regret." },
            { letter: "D", text: "At first a chart holds the stars; at the end, the speaker does." }
          ],
          correct: "D"
        },
        {
          id: "lines",
          sol: "9.RV.1.F",
          stem: "In lines 17 and 18, the father says no one drew the triangle and \"You just decide the lines are there.\" This idea suggests that constellations are —",
          choices: [
            { letter: "A", text: "drawn on official charts by scientists" },
            { letter: "B", text: "patterns people choose to see in the sky" },
            { letter: "C", text: "visible only from flat rooftops in August" },
            { letter: "D", text: "made of stars that sit close together" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── 11 · DRAMA · museum ───────────────────────── */
    {
      id: "g9-rl-c55-fire-helmet",
      family: "G9",
      title: "The Helmet in the Case",
      kind: "Drama · 9.RL",
      blurb: "The night before an exhibit opens, an intern finds that the centerpiece's famous story is wrong, and the donor walks in.",
      level: 3,
      passage:
        "<p><em>Setting: the Ashford Valley History Museum, 8:40 p.m., the night before the Main Street exhibit opens. Ladders, a half-hung banner, and a glass case holding a dented brass fire helmet. RAFAEL, seventeen, a summer intern, kneels beside the case with a stack of label cards. MS. TANAKA-BROOKS, the director, enters carrying two coffees.</em></p>" +
        "<p>" + N(1) + "<strong>MS. TANAKA-BROOKS</strong>: You're still here? I thought the labels were finished at six. " +
        N(2) + "<strong>RAFAEL</strong>: They were. Then I read the newspaper file one more time. <em>(He holds up a photocopy.)</em> " +
        N(3) + "<strong>MS. TANAKA-BROOKS</strong>: The helmet? Mr. Pietrzak's father wore it at the hardware store fire in 1952. That's the whole centerpiece. " +
        N(4) + "<strong>RAFAEL</strong> <em>(aside)</em>: That's what the label says. That's what Mr. Pietrzak has told every school group for ten years. The photocopy says something else. " +
        N(5) + "<strong>MS. TANAKA-BROOKS</strong> <em>(setting down the coffee)</em>: Rafael. What's on the paper? " +
        N(6) + "<strong>RAFAEL</strong>: A list of the firefighters at the hardware fire. Eleven names. Pietrzak isn't one of them. But there's a second article, three weeks later, about a fire at the grain elevator. His father is in that one. He carried two workers down a ladder. " +
        N(7) + "<em>(A door bangs offstage. MR. PIETRZAK, eighty-two, enters slowly with a cane, carrying a framed photograph.)</em> " +
        N(8) + "<strong>MR. PIETRZAK</strong>: I saw the lights on. I brought the picture of Dad for the case. I thought it should be there when people come in tomorrow. " +
        N(9) + "<strong>MS. TANAKA-BROOKS</strong> <em>(quietly, to Rafael)</em>: Not now. " +
        N(10) + "<strong>RAFAEL</strong> <em>(aside)</em>: If not now, then tomorrow, in front of a crowd, with his story printed wrong beside his father's helmet. " +
        N(11) + "<strong>MR. PIETRZAK</strong> <em>(looking into the case)</em>: He used to let me wear it at the kitchen table. Too big. It came down over my eyes. " +
        N(12) + "<strong>RAFAEL</strong> <em>(standing, the photocopy held behind his back; then he brings it forward)</em>: Mr. Pietrzak, I found something about your father. I think you should see it before anyone else does. " +
        N(13) + "<em>(MR. PIETRZAK takes the paper. A long silence. He reads it twice.)</em> " +
        N(14) + "<strong>MR. PIETRZAK</strong>: The grain elevator. <em>(He laughs, short and surprised.)</em> My mother always said it was the elevator. I was six. I remembered the hardware store because I could see its smoke from our window. " +
        N(15) + "<strong>MS. TANAKA-BROOKS</strong>: We can reprint the label tonight. We can tell the right story. " +
        N(16) + "<strong>MR. PIETRZAK</strong> <em>(handing the paper back to Rafael)</em>: Two men down a ladder. That's a better story than the one I've been telling. <em>(He sets the photograph on top of the case.)</em> Make the new label a good one, son. " +
        N(17) + "<em>(RAFAEL picks up a blank card. The lights fade.)</em></p>",
      claims: [
        {
          id: "aside1",
          sol: "9.RL.1.D",
          stem: "Rafael's aside in sentence 4 mainly reveals to the audience that —",
          choices: [
            { letter: "A", text: "he wants to leave the museum before the opening" },
            { letter: "B", text: "he doubts a story everyone else believes is true" },
            { letter: "C", text: "he has never met Mr. Pietrzak before tonight" },
            { letter: "D", text: "he thinks the exhibit needs a different centerpiece" }
          ],
          correct: "B"
        },
        {
          id: "aside2",
          sol: "9.RL.1.D",
          stem: "In his aside in sentence 10, Rafael reveals his belief that waiting until later would —",
          choices: [
            { letter: "A", text: "give him more time to finish the banner" },
            { letter: "B", text: "let Ms. Tanaka-Brooks handle the problem" },
            { letter: "C", text: "allow the newspaper to print a correction" },
            { letter: "D", text: "let Mr. Pietrzak learn the truth in public" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "9.RL.1.D",
          stem: "Which line in the helmet scene creates dramatic irony, because the audience knows something the speaker does not?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "C"
        },
        {
          id: "direction",
          sol: "9.RL.3.B",
          stem: "The stage direction in sentence 12, in which Rafael first holds the photocopy behind his back and then brings it forward, mainly shows that he —",
          choices: [
            { letter: "A", text: "hesitates before choosing to be honest" },
            { letter: "B", text: "is hiding the paper from the director" },
            { letter: "C", text: "plans to throw the photocopy away" },
            { letter: "D", text: "wants Mr. Pietrzak to guess what it says" }
          ],
          correct: "A"
        },
        {
          id: "pietrzak",
          sol: "9.RL.1.C",
          stem: "Which statement best describes how Mr. Pietrzak reacts to the newspaper article about his father?",
          choices: [
            { letter: "A", text: "He insists the newspaper must be mistaken." },
            { letter: "B", text: "He leaves without saying a word to anyone." },
            { letter: "C", text: "He accepts it and finds the truth even better." },
            { letter: "D", text: "He asks that the helmet be taken off display." }
          ],
          correct: "C"
        },
        {
          id: "notnow",
          sol: "9.RL.1.B",
          stem: "Ms. Tanaka-Brooks's whispered \"Not now\" in sentence 9 suggests that she —",
          choices: [
            { letter: "A", text: "wants to spare Mr. Pietrzak an upsetting moment" },
            { letter: "B", text: "does not believe Rafael's research is accurate" },
            { letter: "C", text: "is annoyed that Rafael stayed late without pay" },
            { letter: "D", text: "plans to cancel the exhibit opening tomorrow" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of Mr. Pietrzak's final speech in sentence 16 is best described as —",
          choices: [
            { letter: "A", text: "hurt and defensive" },
            { letter: "B", text: "stern and demanding" },
            { letter: "C", text: "confused and fearful" },
            { letter: "D", text: "warm and accepting" }
          ],
          correct: "D"
        },
        {
          id: "setting",
          sol: "9.RL.3.A",
          stem: "How does the play's setting, the night before the exhibit opens, add to its conflict?",
          choices: [
            { letter: "A", text: "It explains why Mr. Pietrzak walks with a cane." },
            { letter: "B", text: "It means the wrong label will face crowds by morning." },
            { letter: "C", text: "It shows that the museum is closed to the public." },
            { letter: "D", text: "It makes the newspaper file impossible to read." }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── 12 · FUNCTIONAL · cross-country ───────────────────────── */
    {
      id: "g9-ri-c55-kestrel-invitational",
      family: "G9",
      title: "Kestrel Ridge Invitational",
      kind: "Functional text · 9.RI",
      blurb: "The information sheet for a Saturday cross-country meet: check-in, race times, spikes, chips, parking and lightning.",
      level: 1,
      passage:
        "<p><strong>Kestrel Ridge Invitational: Runner and Family Information Sheet</strong></p>" +
        "<p><strong>Arrival and Check-In.</strong> " + N(1) + "Team buses may unload in the North Lot beginning at 7:00 a.m.; family cars may not use the North Lot. " +
        N(2) + "Coaches must check in at the white tent beside the barn by 7:45 a.m. to collect their team's race numbers and timing chips. " +
        N(3) + "Runners whose numbers are not picked up by 8:15 a.m. will not be allowed to start.</p>" +
        "<p><strong>Race Schedule.</strong> " + N(4) + "Varsity girls, 5,000 meters: 8:45 a.m. " +
        N(5) + "Varsity boys, 5,000 meters: 9:25 a.m. " +
        N(6) + "Junior varsity girls and boys, combined, 5,000 meters: 10:10 a.m. " +
        N(7) + "Middle school open race, 3,000 meters: 10:50 a.m. " +
        N(8) + "Awards for all divisions will be presented at the barn stage at 11:45 a.m.</p>" +
        "<p><strong>The Course.</strong> " + N(9) + "The course is mostly grass and packed dirt, with one long climb between the 2-kilometer and 3-kilometer markers. " +
        N(10) + "Spikes no longer than one-quarter inch are permitted; longer spikes damage the farm's hayfields and will be checked at the starting line. " +
        N(11) + "In wet weather, the low section near the pond can become muddy, and runners are advised to double-knot and tape their shoes.</p>" +
        "<p><strong>Timing.</strong> " + N(12) + "Each runner's chip is attached to the back of the race number, which must be pinned flat to the front of the jersey. " +
        N(13) + "A folded number can block the chip's signal, and that runner will not receive an official time. " +
        N(14) + "Results will be posted on the meet website within thirty minutes of each race.</p>" +
        "<p><strong>For Spectators.</strong> " + N(15) + "Parking for families is in the South Field, a ten-minute walk from the start, and costs five dollars per car, cash only. " +
        N(16) + "Spectators may watch from the start area, the hilltop at 2.5 kilometers, and the finish chute, but must stay behind the rope lines at all times. " +
        N(17) + "Pets are not permitted anywhere on the farm. " +
        N(18) + "The concession stand, run by the Kestrel Ridge boosters, will sell breakfast sandwiches, fruit, and drinks.</p>" +
        "<p><strong>Weather Policy.</strong> " + N(19) + "The meet will go ahead in rain. " +
        N(20) + "If lightning is seen within ten miles, all races will be paused for at least thirty minutes after the last strike. " +
        N(21) + "Any delay will be announced over the loudspeaker and on the meet website.</p>" +
        "<p><strong>Questions.</strong> " + N(22) + "Coaches with questions on race day should go to the white tent, and families should ask any volunteer wearing an orange vest. " +
        N(23) + "Thank you for helping us keep this meet safe, fair, and fun for every runner who comes to Kestrel Ridge.</p>",
      claims: [
        {
          id: "late",
          sol: "9.RI.1.B",
          stem: "According to the Kestrel Ridge sheet, what happens to a runner whose number is not picked up by 8:15 a.m.?",
          choices: [
            { letter: "A", text: "The runner moves to the middle school race." },
            { letter: "B", text: "The runner must pay a five-dollar late fee." },
            { letter: "C", text: "The runner is not allowed to start the race." },
            { letter: "D", text: "The runner starts at the back of the field." }
          ],
          correct: "C"
        },
        {
          id: "fold",
          sol: "9.RI.1.B",
          stem: "According to the Timing section, why must a race number not be folded?",
          choices: [
            { letter: "A", text: "A fold can block the chip, so no official time is recorded." },
            { letter: "B", text: "A fold makes the number hard for spectators to read." },
            { letter: "C", text: "Folded numbers tear easily in wet, muddy weather." },
            { letter: "D", text: "Folded numbers break the meet's rules on uniforms." }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "How is the Kestrel Ridge Invitational information sheet mainly organized?",
          choices: [
            { letter: "A", text: "as a story of one runner's race day" },
            { letter: "B", text: "into labeled sections, each on one topic" },
            { letter: "C", text: "as a comparison of two different courses" },
            { letter: "D", text: "from the least to the most important rule" }
          ],
          correct: "B"
        },
        {
          id: "reason",
          sol: "9.RI.2.B",
          stem: "In sentence 10, the writers explain that longer spikes damage the farm's hayfields mainly to —",
          choices: [
            { letter: "A", text: "warn runners that the course is dangerous" },
            { letter: "B", text: "advertise the farm's hay to visiting families" },
            { letter: "C", text: "suggest that runners wear regular sneakers" },
            { letter: "D", text: "give a reason for the rule on spike length" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          stem: "Which statement best sums up the main purpose of the Kestrel Ridge sheet as a whole?",
          choices: [
            { letter: "A", text: "to tell runners, coaches, and families what to know on race day" },
            { letter: "B", text: "to persuade families to buy food at the concession stand" },
            { letter: "C", text: "to describe the history of the farm where the meet is held" },
            { letter: "D", text: "to report the results of last year's varsity races" }
          ],
          correct: "A"
        },
        {
          id: "land",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the idea that the meet organizers want to protect the land the course runs across?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "B"
        },
        {
          id: "official",
          sol: "9.RV.1.B",
          stem: "In sentence 13, an official time is a time that is —",
          choices: [
            { letter: "A", text: "the fastest of the whole day" },
            { letter: "B", text: "estimated by a runner's coach" },
            { letter: "C", text: "announced over the loudspeaker" },
            { letter: "D", text: "recognized and kept by the meet" }
          ],
          correct: "D"
        },
        {
          id: "rule",
          sol: "9.RI.1.C",
          stem: "Which sentence from the Kestrel Ridge sheet states a rule rather than describing the course or a service?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── 13 · ARGUMENT · museum ───────────────────────── */
    {
      id: "g9-ri-c55-hands-on-room",
      family: "G9",
      title: "Let Visitors Touch History",
      kind: "Argument · 9.RI",
      blurb: "A museum volunteer argues for a room where visitors can lift, scrub and type with objects from the past.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every Saturday at the Cobb's Landing Heritage Museum, I watch the same scene play out. " +
        N(2) + "A child walks up to the glass case holding the old washboard, presses both hands against the glass, and asks, \"Can I try it?\" " +
        N(3) + "And every Saturday, a grown-up, sometimes a parent and sometimes one of us volunteers, says no. " +
        N(4) + "I think it is time our museum said yes, at least some of the time. " +
        N(5) + "The museum should create a hands-on room where visitors can touch, lift, and use everyday objects from the past.</p>" +
        "<p>" + N(6) + "The strongest reason is that people learn more when they use their hands. " +
        N(7) + "Reading a label that says a flatiron weighed six pounds is not the same as lifting one and imagining ironing a week of shirts with it. " +
        N(8) + "Last spring, our museum tested this idea for one weekend, setting out a table with a butter paddle, a hand drill, and a manual typewriter. " +
        N(9) + "Visitors spent an average of eleven minutes at that table, compared with about two minutes at a typical display case, according to the volunteer who timed them. " +
        N(10) + "Several teachers asked whether the table could become permanent, and two of them booked class visits for the fall on the spot.</p>" +
        "<p>" + N(11) + "Some board members worry that touching will damage the collection, and they are right to protect it. " +
        N(12) + "Rare and fragile objects, such as the 1840s quilt and the founder's letters, should always stay behind glass. " +
        N(13) + "But many museums keep a second set of common objects, often called a teaching collection, made up of duplicates or items that are not historically unique. " +
        N(14) + "Our storage room already holds three nearly identical washboards and at least a dozen flatirons. " +
        N(15) + "Letting visitors handle one of each would cost the museum almost nothing, since those objects are already sitting in boxes.</p>" +
        "<p>" + N(16) + "Others argue that a hands-on room would turn the museum into a playground. " +
        N(17) + "I disagree. " +
        N(18) + "A playground is about fun alone; a hands-on room is about understanding how hard ordinary work used to be. " +
        N(19) + "A child who has scrubbed a sock on a washboard for three minutes will remember it far longer than one who only read about laundry day.</p>" +
        "<p>" + N(20) + "Our museum exists so that the past is not forgotten. " +
        N(21) + "Glass cases protect history, but they also keep people at arm's length. " +
        N(22) + "A small room of sturdy, ordinary objects would let visitors close that distance. " +
        N(23) + "I urge the board to approve the hands-on room at its next meeting. " +
        N(24) + "The washboards are ready.</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          stem: "Which sentence states the volunteer's main claim about the Cobb's Landing Heritage Museum?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "C"
        },
        {
          id: "measured",
          sol: "9.RI.3.A",
          stem: "Which sentence offers measured evidence that visitors engage more with objects they are allowed to handle?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: "A"
        },
        {
          id: "damage",
          sol: "9.RI.3.A",
          stem: "How does the volunteer answer the board members' worry about damage in sentences 11–15?",
          choices: [
            { letter: "A", text: "by saying the worry is silly and should be ignored" },
            { letter: "B", text: "by asking visitors to wear gloves in every room" },
            { letter: "C", text: "by promising to repair anything that gets broken" },
            { letter: "D", text: "by agreeing in part, then proposing using duplicates" }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "Which choice best describes how the hands-on room column is organized?",
          choices: [
            { letter: "A", text: "a list of objects in the order they were donated" },
            { letter: "B", text: "a claim, a reason, two objections answered, and a call to act" },
            { letter: "C", text: "a history of the museum from its founding to today" },
            { letter: "D", text: "a comparison of the museum with a city playground" }
          ],
          correct: "B"
        },
        {
          id: "opening",
          sol: "9.RI.2.B",
          stem: "The volunteer opens the column with the scene in sentences 1–3 mainly to —",
          choices: [
            { letter: "A", text: "show a familiar moment in which visitors want to touch" },
            { letter: "B", text: "complain that parents do not supervise their children" },
            { letter: "C", text: "explain how washboards were used on laundry day" },
            { letter: "D", text: "describe the museum's hours on Saturday mornings" }
          ],
          correct: "A"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which sentence from the column is a prediction based on opinion rather than a fact that could be checked?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "D"
        },
        {
          id: "glass",
          sol: "9.RI.1.B",
          stem: "According to the column, which objects should always stay behind glass?",
          choices: [
            { letter: "A", text: "the butter paddle and the hand drill" },
            { letter: "B", text: "the washboards and the flatirons" },
            { letter: "C", text: "the 1840s quilt and the founder's letters" },
            { letter: "D", text: "the manual typewriter and the brass scale" }
          ],
          correct: "C"
        },
        {
          id: "sturdy",
          sol: "9.RV.1.E",
          stem: "In sentence 22, the volunteer calls the objects sturdy. Compared with calling them old, the word sturdy suggests that they are —",
          choices: [
            { letter: "A", text: "rare and very valuable" },
            { letter: "B", text: "strong enough to handle" },
            { letter: "C", text: "too heavy for children" },
            { letter: "D", text: "newly made copies" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
