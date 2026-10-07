/* SOL Labyrinth — Grade 9 long packs (v5.15 expansion, file 52): a toy maker, a newspaper archive,
 * a farmers market and a coral reef. 13 packs x 8 questions, 390-520 word passages.
 * Original text only. Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── 1 · LITERARY · toy maker ───────────── */
    {
      id: "g9-rl-c52-brass-wren",
      family: "G9",
      title: "The Brass Wren",
      kind: "Literary · 9.RL",
      blurb: "A toy shop that never does repairs, a broken heirloom bird, and an apprentice with four evenings to fix it.",
      level: 2,
      passage:
        "<p>" + N(1) + "The bell over the door of Ishida Toys rang only twice that whole gray Tuesday, and the second time it was a girl of about seven holding a shoebox as if it contained something alive. " +
        N(2) + "Noor looked up from the workbench, where she had spent the morning sanding the wheels of a wooden train until they were smooth as river stones. " +
        N(3) + "Mr. Ishida, who had built toys in the narrow shop for forty years, did not look up at all; he was threading a spring no thicker than a hair.</p>" +
        "<p>" + N(4) + "The girl set the box on the counter and lifted the lid. " +
        N(5) + "Inside lay a brass wren, its wings folded, its tiny key bent nearly flat. " +
        N(6) + "\"It was my great-grandmother's,\" the girl said. " +
        N(7) + "\"It used to sing. " +
        N(8) + "My brother sat on it.\"</p>" +
        "<p>" + N(9) + "Noor had been Mr. Ishida's apprentice for six months, long enough to know that the shop did not fix other people's toys. " +
        N(10) + "The sign by the register said so in neat black letters. " +
        N(11) + "She opened her mouth to read it aloud, but Mr. Ishida had already set down his spring and was holding out his hand.</p>" +
        "<p>" + N(12) + "He turned the wren over twice, then held it to his ear and wound the bent key a quarter turn. " +
        N(13) + "Something inside clicked, coughed, and went silent. " +
        N(14) + "\"Come back Saturday,\" he told the girl. " +
        N(15) + "When the bell had rung her out, Noor pointed at the sign. " +
        N(16) + "\"You said we never do repairs.\" " +
        N(17) + "\"I said we never do repairs for money,\" he answered, and slid the wren across the bench toward her. " +
        N(18) + "\"This one is yours.\"</p>" +
        "<p>" + N(19) + "For four evenings Noor worked on the bird. " +
        N(20) + "She straightened the key with smooth-jawed pliers, a little at a time, so the brass would not crack. " +
        N(21) + "She found the real trouble deeper inside: a gear with one broken tooth, too old and too small to replace from any catalog. " +
        N(22) + "On Wednesday she tried to file a new gear from scrap and ruined three blanks. " +
        N(23) + "On Thursday she nearly gave up and asked Mr. Ishida to finish it, but he only tapped the side of his head and went back to his train. " +
        N(24) + "On Friday night, near midnight, she stopped trying to copy the old gear and instead moved the whole wheel one notch along its shaft, so that the broken tooth no longer met anything at all.</p>" +
        "<p>" + N(25) + "When she wound the key, the wren lifted its head, opened its beak, and sang four thin, bright notes that sounded like a door opening somewhere far away.</p>" +
        "<p>" + N(26) + "On Saturday the girl cradled the bird in both hands while it sang, and her face did something Noor had never seen a face do over a toy the shop had sold. " +
        N(27) + "After she left, Mr. Ishida took down the sign by the register, turned it over, and handed Noor a marker. " +
        N(28) + "\"Your shop someday,\" he said. " +
        N(29) + "\"Your rules.\" " +
        N(30) + "Noor thought for a while, then wrote a single line: Bring us what you love.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of \"The Brass Wren\"?",
          choices: [
            { letter: "A", text: "Some work matters because of what it means to others, not what it earns." },
            { letter: "B", text: "Old toys are nearly always better made than the toys sold today." },
            { letter: "C", text: "An apprentice should follow the rules of a shop exactly as written." },
            { letter: "D", text: "Children should be far more careful with valuable family heirlooms." }
          ],
          correct: "A"
        },
        {
          id: "ishida",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Mr. Ishida as he is shown in sentences 11-18?",
          choices: [
            { letter: "A", text: "He is strict about the shop's policies and unwilling to bend them." },
            { letter: "B", text: "He ignores the girl's problem until Noor speaks up for her." },
            { letter: "C", text: "He is willing to bend a rule and turn it into a lesson for Noor." },
            { letter: "D", text: "He is eager to earn extra money by repairing a valuable antique." }
          ],
          correct: "C"
        },
        {
          id: "door",
          sol: "9.RL.2.A",
          stem: "In sentence 25, the comparison of the wren's song to \"a door opening somewhere far away\" mainly suggests that the song —",
          choices: [
            { letter: "A", text: "is too quiet for the girl to hear from the counter" },
            { letter: "B", text: "feels like the return of something long lost" },
            { letter: "C", text: "startles Noor because it comes so suddenly" },
            { letter: "D", text: "sounds mechanical rather than like a real bird" }
          ],
          correct: "B"
        },
        {
          id: "tap",
          sol: "9.RL.1.B",
          stem: "When Mr. Ishida taps the side of his head in sentence 23, readers can infer that he wants Noor to —",
          choices: [
            { letter: "A", text: "stop working because it has grown late" },
            { letter: "B", text: "ask the girl what the bird once sounded like" },
            { letter: "C", text: "remember the rule printed on the sign" },
            { letter: "D", text: "solve the problem with her own thinking" }
          ],
          correct: "D"
        },
        {
          id: "cradled",
          sol: "9.RV.1.C",
          stem: "In sentence 26, the word cradled most nearly means —",
          choices: [
            { letter: "A", text: "tossed lightly" },
            { letter: "B", text: "shook hard" },
            { letter: "C", text: "examined closely" },
            { letter: "D", text: "held gently" }
          ],
          correct: "D"
        },
        {
          id: "shop",
          sol: "9.RL.3.A",
          stem: "The details in sentences 1-3 (a bell that rings only twice, a gray day, a spring no thicker than a hair) mainly establish the toy shop as —",
          choices: [
            { letter: "A", text: "a crowded, noisy place where customers wait in line" },
            { letter: "B", text: "a quiet place where careful, patient work happens" },
            { letter: "C", text: "a struggling business that is about to close for good" },
            { letter: "D", text: "a place where Noor feels unwelcome and out of place" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of the story's last paragraph (sentences 26-30) is best described as —",
          choices: [
            { letter: "A", text: "regretful" },
            { letter: "B", text: "amused" },
            { letter: "C", text: "hopeful" },
            { letter: "D", text: "uneasy" }
          ],
          correct: "C"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "Because the story is told in the third person but stays close to Noor, the reader —",
          choices: [
            { letter: "A", text: "knows what Noor knows about the sign and shares her surprise" },
            { letter: "B", text: "learns exactly why Mr. Ishida first made the sign" },
            { letter: "C", text: "hears the girl's private thoughts about her brother" },
            { letter: "D", text: "sees the events through Mr. Ishida's forty years of memories" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 2 · LITERARY · newspaper archive ───────────── */
    {
      id: "g9-rl-c52-unidentified",
      family: "G9",
      title: "Unidentified Man",
      kind: "Literary · 9.RL",
      blurb: "A summer intern in a newspaper's basement archive finds a famous flood photo with the wrong caption.",
      level: 3,
      passage:
        "<p>" + N(1) + "Newspaper people call the archive the morgue, and on his first day as a summer intern at the Harlow Ledger, Kwame Asante understood why. " +
        N(2) + "It was a long basement room lit by tubes that buzzed like trapped insects, lined with gray cabinets that held a hundred years of the town's yesterdays in folders labeled by hand. " +
        N(3) + "Nobody came down there unless they had to, and the air smelled of dust and old glue and something faintly sweet that Kwame later learned was decaying paper.</p>" +
        "<p>" + N(4) + "His assignment sounded simple. " +
        N(5) + "The Ledger was turning one hundred in September, and the features editor, Ms. Delacroix, wanted twelve photographs, one for each decade, with captions short enough to fit under a thumbnail. " +
        N(6) + "\"Find me faces,\" she said. " +
        N(7) + "\"Readers skip buildings.\"</p>" +
        "<p>" + N(8) + "By the third week Kwame had found eleven. " +
        N(9) + "The twelfth decade was the one he kept circling back to, because his grandfather talked about it at every family dinner: the spring the Harlow River rose over Front Street and stayed there for four days. " +
        N(10) + "In a folder marked FLOOD, APRIL, he found the photograph his grandfather had described so many times that Kwame felt he had already seen it. " +
        N(11) + "A young man stood waist-deep in brown water, a child on his shoulders, a second child gripping his belt. " +
        N(12) + "The caption, typed on a yellowed strip glued to the back, read: Unidentified man assists residents near Front Street.</p>" +
        "<p>" + N(13) + "Kwame sat on the cold floor and read the caption four times. " +
        N(14) + "He knew the man's name. " +
        N(15) + "He knew that the man had been nineteen, that he had walked back into the water six more times that afternoon, and that he still could not swim.</p>" +
        "<p>" + N(16) + "He brought the photo upstairs. " +
        N(17) + "Ms. Delacroix studied it for a long moment and said it was the strongest picture of the twelve. " +
        N(18) + "Then she frowned at the caption. " +
        N(19) + "\"We'd need confirmation,\" she said. " +
        N(20) + "\"A family story is a starting point, not a source.\"</p>" +
        "<p>" + N(21) + "Kwame had expected to feel insulted, but instead he felt something closer to a challenge. " +
        N(22) + "He spent his lunch breaks for a week in the morgue and two evenings at his grandfather's kitchen table, where the old man produced, from a shoebox, a thank-you letter written by one of the children's mothers, dated April of that year and addressed to him by name. " +
        N(23) + "Kwame checked the address on the letter against the city directory in the archive. " +
        N(24) + "It matched.</p>" +
        "<p>" + N(25) + "The anniversary issue ran the photograph across the top of page one. " +
        N(26) + "Beneath it, in the small italic type the Ledger used for corrections, a new line followed the old one: Identified in this issue as Samuel Asante, then 19, of Mill Street. " +
        N(27) + "Kwame's grandfather bought nine copies. " +
        N(28) + "He did not say much, but he read the italic line aloud each time someone came to the door, as if the paper had finally learned how to pronounce his name.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does Kwame's search in the archive most clearly develop?",
          choices: [
            { letter: "A", text: "Old photographs are more reliable than people's memories." },
            { letter: "B", text: "The record of the past can stay incomplete until someone corrects it." },
            { letter: "C", text: "Family stories should never be printed in a newspaper." },
            { letter: "D", text: "Experienced editors rarely trust the work of young interns." }
          ],
          correct: "B"
        },
        {
          id: "confirm",
          sol: "9.RL.1.B",
          stem: "Readers can best infer that Ms. Delacroix asks for confirmation in sentence 19 because she —",
          choices: [
            { letter: "A", text: "doubts that the photograph really shows the flood" },
            { letter: "B", text: "wants to keep the photograph out of the issue" },
            { letter: "C", text: "suspects Kwame's grandfather of exaggerating" },
            { letter: "D", text: "holds the paper to a standard of checking facts" }
          ],
          correct: "D"
        },
        {
          id: "determined",
          sol: "9.RL.1.C",
          stem: "Which sentence best shows that Kwame meets an obstacle with determination?",
          choices: [
            { letter: "A", text: "Sentence 22, about his lunch breaks and evenings spent finding proof" },
            { letter: "B", text: "Sentence 13, about reading the caption four times on the floor" },
            { letter: "C", text: "Sentence 16, about bringing the photo upstairs to the editor" },
            { letter: "D", text: "Sentence 8, about having found eleven of the twelve photographs" }
          ],
          correct: "A"
        },
        {
          id: "yesterdays",
          sol: "9.RL.2.B",
          stem: "In sentence 2, the author says the cabinets hold \"a hundred years of the town's yesterdays\" mainly to —",
          choices: [
            { letter: "A", text: "show that the cabinets are too full to be useful" },
            { letter: "B", text: "suggest that the archive is badly organized" },
            { letter: "C", text: "present the archive as a store of the town's memory" },
            { letter: "D", text: "explain why the lights in the basement buzz" }
          ],
          correct: "C"
        },
        {
          id: "setting",
          sol: "9.RL.3.A",
          stem: "How does the setting of the morgue in sentences 1-3 connect to the story's ending?",
          choices: [
            { letter: "A", text: "A forgotten basement holds a truth that the ending brings into public view." },
            { letter: "B", text: "The basement's dust explains why the photograph is damaged at the end." },
            { letter: "C", text: "The quiet room explains why Kwame decides to leave the internship." },
            { letter: "D", text: "The cold floor hints that the grandfather will become ill at the end." }
          ],
          correct: "A"
        },
        {
          id: "pronounce",
          sol: "9.RV.1.F",
          stem: "In sentence 28, saying the paper had \"finally learned how to pronounce his name\" suggests that —",
          choices: [
            { letter: "A", text: "the Ledger had misspelled the grandfather's name in an earlier story" },
            { letter: "B", text: "the grandfather has trouble reading the small italic type" },
            { letter: "C", text: "the public record now names the man it once left unidentified" },
            { letter: "D", text: "the grandfather hopes Kwame will become a reporter someday" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of sentences 13-15, as Kwame reads the caption, is best described as —",
          choices: [
            { letter: "A", text: "playful and teasing" },
            { letter: "B", text: "angry and accusing" },
            { letter: "C", text: "confused and doubtful" },
            { letter: "D", text: "quiet and deeply moved" }
          ],
          correct: "D"
        },
        {
          id: "decaying",
          sol: "9.RV.1.E",
          stem: "In sentence 3, the author could have written old instead of decaying. Compared with old, the word decaying adds a sense that the paper is —",
          choices: [
            { letter: "A", text: "valuable to collectors" },
            { letter: "B", text: "slowly breaking down" },
            { letter: "C", text: "carefully preserved" },
            { letter: "D", text: "recently printed" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 3 · LITERARY · farmers market ───────────── */
    {
      id: "g9-rl-c52-second-basket",
      family: "G9",
      title: "The Second Basket",
      kind: "Literary · 9.RL",
      blurb: "Priya runs her aunt's peach stand alone for the first time, and twenty peaches are bruised.",
      level: 1,
      passage:
        "<p>" + N(1) + "Priya Raman had helped at her aunt's peach stand at the Cedar Hill Farmers Market every Saturday since she was eleven. " +
        N(2) + "But she had never run it alone. " +
        N(3) + "This Saturday, Aunt Lakshmi had a bad cold, and the truck had to be back at the orchard by one o'clock. " +
        N(4) + "\"You know the prices,\" her aunt said through a scarf. " +
        N(5) + "\"You know the peaches. " +
        N(6) + "Just be yourself.\"</p>" +
        "<p>" + N(7) + "By eight o'clock the market was already loud. " +
        N(8) + "A fiddler played near the flower stall, children chased each other between the tents, and the smell of kettle corn drifted over everything. " +
        N(9) + "Priya stacked the peaches in neat pyramids, the way her aunt did, with the reddest ones on top.</p>" +
        "<p>" + N(10) + "The trouble started at the bottom of the third crate. " +
        N(11) + "Rain on Thursday had bruised about twenty of the peaches. " +
        N(12) + "They were soft on one side, with brown spots under the skin. " +
        N(13) + "Priya held one in her palm like a question she had to answer. " +
        N(14) + "The man at the honey stand next to her leaned over. " +
        N(15) + "\"Just mix them in,\" he said. " +
        N(16) + "\"Nobody checks every peach.\"</p>" +
        "<p>" + N(17) + "Priya set the bruised peaches in a separate basket instead. " +
        N(18) + "On a scrap of cardboard she wrote a sign: SECOND BASKET. Bruised but sweet. Half price. Good for jam and pie.</p>" +
        "<p>" + N(19) + "For an hour, nobody touched the second basket. " +
        N(20) + "Priya began to wonder if the honey man had been right after all. " +
        N(21) + "Then a woman in a green raincoat stopped and read the sign twice. " +
        N(22) + "\"You're telling me these are bruised?\" she asked.</p>" +
        "<p>" + N(23) + "\"Yes,\" Priya said. " +
        N(24) + "\"The rain got them. " +
        N(25) + "They taste the same, but they won't last more than a day.\"</p>" +
        "<p>" + N(26) + "The woman laughed. " +
        N(27) + "\"I make jam for my church's bake sale,\" she said. " +
        N(28) + "\"I'll take the whole basket.\" " +
        N(29) + "Then she bought two pounds of the good peaches too, because, she said, anyone who told the truth about the bad ones could be trusted about the good ones.</p>" +
        "<p>" + N(30) + "By noon the woman had come back with two friends from the bake sale. " +
        N(31) + "Both of them asked for Priya by name, and both of them left with full bags. " +
        N(32) + "The honey man watched them go and scratched his chin, but he did not say anything. " +
        N(33) + "When Aunt Lakshmi called to check on her, Priya counted the money box twice before she answered. " +
        N(34) + "\"I was myself,\" she said. " +
        N(35) + "\"It turns out that sells.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is best supported by Priya's morning at the peach stand?",
          choices: [
            { letter: "A", text: "Selling at a market is harder than it looks." },
            { letter: "B", text: "Advice from neighbors is usually wrong." },
            { letter: "C", text: "Honesty can build trust that lasts." },
            { letter: "D", text: "Bad weather can ruin a whole season." }
          ],
          correct: "C"
        },
        {
          id: "doubt",
          sol: "9.RL.1.B",
          stem: "Based on sentences 19 and 20, readers can infer that Priya —",
          choices: [
            { letter: "A", text: "briefly doubts whether her honest choice was wise" },
            { letter: "B", text: "wishes she had stayed home with her aunt" },
            { letter: "C", text: "plans to throw the bruised peaches away" },
            { letter: "D", text: "is angry at the man at the honey stand" }
          ],
          correct: "A"
        },
        {
          id: "priya",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Priya as a character?",
          choices: [
            { letter: "A", text: "She is shy and avoids talking to customers." },
            { letter: "B", text: "She is careless about the details of the stand." },
            { letter: "C", text: "She cares most about beating the other vendors." },
            { letter: "D", text: "She thinks things through and does what is right." }
          ],
          correct: "D"
        },
        {
          id: "question",
          sol: "9.RL.2.A",
          stem: "In sentence 13, Priya holds the peach \"like a question she had to answer.\" This comparison mainly shows that —",
          choices: [
            { letter: "A", text: "the peach is much heavier than it looks" },
            { letter: "B", text: "Priya sees the bruised peach as a decision" },
            { letter: "C", text: "Priya has forgotten the price of the peaches" },
            { letter: "D", text: "the honey seller has just asked her something" }
          ],
          correct: "B"
        },
        {
          id: "inside",
          sol: "9.RL.3.B",
          stem: "Because the reader is told what Priya thinks in sentences 13 and 20, the reader —",
          choices: [
            { letter: "A", text: "learns why the honey seller gives his advice" },
            { letter: "B", text: "understands the doubt behind Priya's choice" },
            { letter: "C", text: "knows ahead of time that the woman will return" },
            { letter: "D", text: "sees the stand through Aunt Lakshmi's eyes" }
          ],
          correct: "B"
        },
        {
          id: "separate",
          sol: "9.RV.1.B",
          stem: "As used in sentence 17, the word separate most nearly means —",
          choices: [
            { letter: "A", text: "crowded" },
            { letter: "B", text: "colorful" },
            { letter: "C", text: "cheaper" },
            { letter: "D", text: "set apart" }
          ],
          correct: "D"
        },
        {
          id: "rain",
          sol: "9.RL.3.A",
          stem: "The detail about Thursday's rain in sentence 11 matters to the plot because it —",
          choices: [
            { letter: "A", text: "creates the problem Priya must decide how to handle" },
            { letter: "B", text: "explains why the market is so crowded that morning" },
            { letter: "C", text: "shows how Aunt Lakshmi came to catch a cold" },
            { letter: "D", text: "leads the honey seller to close his stand early" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          stem: "The images in sentences 7 and 8 (a fiddler, children chasing each other, the smell of kettle corn) mainly create a mood that is —",
          choices: [
            { letter: "A", text: "tense and gloomy" },
            { letter: "B", text: "quiet and lonely" },
            { letter: "C", text: "lively and inviting" },
            { letter: "D", text: "strange and eerie" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 4 · INFORMATIONAL · coral reef ───────────── */
    {
      id: "g9-ri-c52-reef-builders",
      family: "G9",
      title: "Cities Built by Animals",
      kind: "Informational · 9.RI",
      blurb: "How tiny coral polyps and their algae partners build reefs, and why warm water threatens them.",
      level: 2,
      passage:
        "<p>" + N(1) + "From a boat, a coral reef can look like a garden of strange rocks and plants. " +
        N(2) + "In fact, it is neither. " +
        N(3) + "A reef is a city built by animals, and most of its builders are smaller than a pencil eraser.</p>" +
        "<p>" + N(4) + "Those builders are coral polyps, soft-bodied relatives of jellyfish and sea anemones. " +
        N(5) + "Each polyp is a tube with a mouth at the top, ringed by tiny tentacles. " +
        N(6) + "Over its life, a polyp pulls calcium and carbonate from seawater and uses them to build a hard cup of limestone around its base. " +
        N(7) + "When the polyp divides, the new polyps build cups of their own beside it, and over centuries millions of these cups pile up into the branches, domes, and plates that divers recognize as coral. " +
        N(8) + "Only a thin living layer sits on top; underneath lies the stone left by generations that came before.</p>" +
        "<p>" + N(9) + "Polyps could not build so quickly on their own. " +
        N(10) + "Inside their tissues live single-celled algae, which use sunlight to make sugars, much as the leaves of a tree do. " +
        N(11) + "The algae share much of that food with the coral, and in return the coral gives them shelter and a steady supply of the waste products the algae need to grow. " +
        N(12) + "This partnership also gives many corals their color. " +
        N(13) + "It explains, too, why most reef-building corals grow in clear, shallow, sunny water: their partners need the light.</p>" +
        "<p>" + N(14) + "The partnership is strong, but it has a weakness. " +
        N(15) + "When the water stays even one or two degrees warmer than usual for several weeks, the stressed coral expels its algae. " +
        N(16) + "Without them, the clear tissue reveals the white skeleton underneath, an event scientists call bleaching. " +
        N(17) + "A bleached coral is not dead, but it is starving. " +
        N(18) + "If temperatures fall soon enough, the algae can return and the coral may recover; if the heat lasts, the coral often dies, and seaweed may spread over the stone where it grew.</p>" +
        "<p>" + N(19) + "What happens to the builders matters far beyond the reef itself. " +
        N(20) + "Reefs cover only a tiny fraction of the ocean floor, yet they shelter roughly a quarter of all known marine species at some point in their lives. " +
        N(21) + "They also act as natural breakwaters, softening storm waves before those waves reach the shore and the towns built along it.</p>" +
        "<p>" + N(22) + "Scientists are testing ways to help. " +
        N(23) + "Some teams grow small coral fragments on underwater frames, the way a gardener raises seedlings, and then attach them to damaged reefs. " +
        N(24) + "Others search for corals that have survived heat waves and study what makes them tougher. " +
        N(25) + "\"We're not trying to replace the reef,\" says Dr. Lina Okafor, a marine biologist who leads one restoration team. " +
        N(26) + "\"We're trying to give it time to rebuild itself, the way it always has.\"</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of \"Cities Built by Animals\"?",
          choices: [
            { letter: "A", text: "Coral reefs are made mostly of plants and rocks that grow in shallow water." },
            { letter: "B", text: "Scientists have found a way to stop coral bleaching completely." },
            { letter: "C", text: "Divers should avoid touching coral because it is so easily damaged." },
            { letter: "D", text: "Reefs are built by tiny animals whose partnership with algae is vital but fragile." }
          ],
          correct: "D"
        },
        {
          id: "sunny",
          sol: "9.RI.1.B",
          stem: "According to the passage, why do most reef-building corals grow in shallow, sunny water?",
          choices: [
            { letter: "A", text: "The warmer water there helps the polyps divide." },
            { letter: "B", text: "The algae living inside them need light to make food." },
            { letter: "C", text: "Storm waves cannot reach the corals in shallow water." },
            { letter: "D", text: "Seaweed cannot grow where the light is very strong." }
          ],
          correct: "B"
        },
        {
          id: "organized",
          sol: "9.RI.2.A",
          stem: "\"Cities Built by Animals\" is mainly organized by —",
          choices: [
            { letter: "A", text: "explaining how reefs form, what threatens them, and how people are responding" },
            { letter: "B", text: "comparing coral reefs with gardens on land, point by point" },
            { letter: "C", text: "telling the story of one scientist's career in time order" },
            { letter: "D", text: "listing the species that depend on reefs from smallest to largest" }
          ],
          correct: "A"
        },
        {
          id: "opening",
          sol: "9.RI.2.B",
          stem: "In sentences 1-3, the author corrects a first impression of reefs mainly to —",
          choices: [
            { letter: "A", text: "argue that reefs should be protected by new laws" },
            { letter: "B", text: "describe what a diver sees on a first trip" },
            { letter: "C", text: "challenge a common misunderstanding and draw readers in" },
            { letter: "D", text: "explain why polyps are related to jellyfish" }
          ],
          correct: "C"
        },
        {
          id: "beyond",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the claim in sentence 19 that what happens to reef builders \"matters far beyond the reef itself\"?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 21" },
            { letter: "D", text: "Sentence 24" }
          ],
          correct: "C"
        },
        {
          id: "expels",
          sol: "9.RV.1.C",
          stem: "In sentence 15, the word expels most nearly means —",
          choices: [
            { letter: "A", text: "forces out" },
            { letter: "B", text: "feeds on" },
            { letter: "C", text: "hides away" },
            { letter: "D", text: "grows back" }
          ],
          correct: "A"
        },
        {
          id: "view",
          sol: "9.RI.1.C",
          stem: "Which sentence presents a person's view of a goal rather than a scientific fact about coral?",
          choices: [
            { letter: "A", text: "Sentence 6, about how polyps build limestone cups" },
            { letter: "B", text: "Sentence 26, about giving the reef time to rebuild" },
            { letter: "C", text: "Sentence 16, about what scientists call bleaching" },
            { letter: "D", text: "Sentence 20, about the species that reefs shelter" }
          ],
          correct: "B"
        },
        {
          id: "restoration",
          sol: "9.RV.1.B",
          stem: "The word restoration in sentence 25 is built from the verb restore. Based on this, restoration means —",
          choices: [
            { letter: "A", text: "the study of how reefs first formed" },
            { letter: "B", text: "the act of moving a reef to a new place" },
            { letter: "C", text: "the process of measuring water heat" },
            { letter: "D", text: "the work of bringing something back" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 5 · INFORMATIONAL · newspaper archive ───────────── */
    {
      id: "g9-ri-c52-clippings-keywords",
      family: "G9",
      title: "From Clippings to Keywords",
      kind: "Informational · 9.RI",
      blurb: "Scissors, microfilm, and search boxes: how newspaper archives changed, and what each change cost.",
      level: 3,
      passage:
        "<p>" + N(1) + "For most of the twentieth century, nearly every newspaper of any size kept a room that its staff called, with a reporter's dark humor, the morgue. " +
        N(2) + "The name came from what the room held: stories that were, in a sense, finished and laid to rest. " +
        N(3) + "Yet the morgue was one of the busiest rooms in the building, because a newspaper's past was the raw material of its future.</p>" +
        "<p>" + N(4) + "The earliest morgues were built on scissors and envelopes. " +
        N(5) + "Each morning, librarians clipped the previous day's paper and sorted the pieces by subject, filing a story about a new bridge under BRIDGES, under the name of the engineer, and under the town where it stood. " +
        N(6) + "A reporter writing about the bridge ten years later could pull the envelopes and, within minutes, read everything the paper had ever printed about it. " +
        N(7) + "The system was fast, but it was only as good as the librarian's judgment. " +
        N(8) + "A story filed under the wrong heading was, for practical purposes, lost.</p>" +
        "<p>" + N(9) + "By the middle of the century, many papers had begun photographing their pages onto microfilm, long rolls that could be read on a lighted viewing machine. " +
        N(10) + "Microfilm solved a problem that clippings could not: newsprint turns yellow and brittle within decades, while the film could last far longer. " +
        N(11) + "It also preserved whole pages, so a reader could see what had appeared beside a story, from the weather report to the advertisements. " +
        N(12) + "But microfilm was slow to search. " +
        N(13) + "Finding a single article often meant scrolling through months of pages, squinting, while the machine hummed.</p>" +
        "<p>" + N(14) + "Digitization changed the morgue again. " +
        N(15) + "Software scans the old pages and converts the printed letters into searchable text, so that a researcher can type a name and receive every mention in seconds. " +
        N(16) + "For historians, the change has been extraordinary. " +
        N(17) + "Yet the software misreads faded or unusual type, turning a name like Harlan into Harlem or into nonsense, and those mentions simply do not appear in a search. " +
        N(18) + "Some archivists suspect that the speed of keyword searching may also be changing how people read the past: a researcher who jumps directly to a name may never notice the story printed next to it.</p>" +
        "<p>" + N(19) + "Each version of the morgue, then, has shaped which questions people could ask. " +
        N(20) + "Clippings rewarded a careful filer; microfilm rewarded patience; digital text rewards a good search term. " +
        N(21) + "None of them is a perfect memory. " +
        N(22) + "Each is a tool, and every tool leaves its own fingerprints on the history it keeps.</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "The central idea of \"From Clippings to Keywords\" is that —",
          choices: [
            { letter: "A", text: "each way of storing newspapers made some research easier and some harder" },
            { letter: "B", text: "digital archives have finally made old newspapers completely reliable" },
            { letter: "C", text: "microfilm was the most successful system newspapers ever used" },
            { letter: "D", text: "librarians were careless when they filed stories in the early morgues" }
          ],
          correct: "A"
        },
        {
          id: "microfilm",
          sol: "9.RI.1.B",
          stem: "According to the passage, what advantage did microfilm have over clipping files?",
          choices: [
            { letter: "A", text: "It let reporters find any name in a few seconds." },
            { letter: "B", text: "It sorted each story under several subject headings." },
            { letter: "C", text: "It took up more space but was easier to carry home." },
            { letter: "D", text: "It lasted longer and kept whole pages together." }
          ],
          correct: "D"
        },
        {
          id: "speculation",
          sol: "9.RI.1.C",
          stem: "Which sentence from the article about archives presents a speculation rather than an established fact?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "C"
        },
        {
          id: "order",
          sol: "9.RI.2.A",
          stem: "Paragraphs 2 through 4 of the passage are arranged mainly in —",
          choices: [
            { letter: "A", text: "order of importance, from the most useful system to the least" },
            { letter: "B", text: "chronological order, tracing how archives changed over time" },
            { letter: "C", text: "problem and solution, with every problem solved by one tool" },
            { letter: "D", text: "a comparison of two newspapers that used different systems" }
          ],
          correct: "B"
        },
        {
          id: "harlan",
          sol: "9.RI.2.B",
          stem: "The author includes the example of Harlan becoming Harlem in sentence 17 mainly to —",
          choices: [
            { letter: "A", text: "show that digital search works best for place names" },
            { letter: "B", text: "suggest that historians should stop using software" },
            { letter: "C", text: "explain how the morgue got its unusual nickname" },
            { letter: "D", text: "make the problem of misread text concrete" }
          ],
          correct: "D"
        },
        {
          id: "fingerprints",
          sol: "9.RV.1.F",
          stem: "In sentence 22, saying that every tool \"leaves its own fingerprints on the history it keeps\" suggests that —",
          choices: [
            { letter: "A", text: "archives should be handled with gloves to protect them" },
            { letter: "B", text: "the way records are stored affects what people learn" },
            { letter: "C", text: "researchers often damage old pages when they search" },
            { letter: "D", text: "each newspaper marks its pages so no one can copy them" }
          ],
          correct: "B"
        },
        {
          id: "suspect",
          sol: "9.RV.1.E",
          stem: "In sentence 18, the author writes that archivists suspect rather than know. This word choice signals that the idea is —",
          choices: [
            { letter: "A", text: "uncertain and still being considered" },
            { letter: "B", text: "proven by careful scientific study" },
            { letter: "C", text: "rejected by most experts today" },
            { letter: "D", text: "meant as a joke about researchers" }
          ],
          correct: "A"
        },
        {
          id: "judgment",
          sol: "9.RI.3.A",
          stem: "Which detail best supports the claim in sentence 7 that the clipping system was \"only as good as the librarian's judgment\"?",
          choices: [
            { letter: "A", text: "A reporter could read every bridge story within minutes." },
            { letter: "B", text: "Librarians clipped the previous day's paper each morning." },
            { letter: "C", text: "A story filed under the wrong heading was as good as lost." },
            { letter: "D", text: "Newsprint turns yellow and brittle within a few decades." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 6 · FUNCTIONAL · farmers market ───────────── */
    {
      id: "g9-ri-c52-vendor-handbook",
      family: "G9",
      title: "Vendor Handbook",
      kind: "Functional text · 9.RI",
      blurb: "The rules every vendor at the Willow Creek Saturday Market needs to know, from setup to sweep-up.",
      level: 1,
      passage:
        "<p><strong>Willow Creek Saturday Market: Vendor Handbook</strong></p>" +
        "<p>" + N(1) + "Welcome to the Willow Creek Saturday Market, which runs every Saturday from the first weekend in May through the last weekend in October. " +
        N(2) + "This handbook explains what every vendor needs to know. " +
        N(3) + "Please read it before your first market day and keep it with your stall supplies.</p>" +
        "<p><strong>Setting Up</strong> " + N(4) + "Vendors may arrive starting at 6:00 a.m. " +
        N(5) + "All vehicles must be unloaded and moved to the back lot on Elm Street by 7:30 a.m., when the gates open to shoppers. " +
        N(6) + "Each vendor is assigned a ten-foot-by-ten-foot space marked with chalk numbers on the pavement. " +
        N(7) + "Tents must be held down with at least twenty-five pounds of weight on each leg; stakes are not allowed because the lot is paved. " +
        N(8) + "A tent that is not weighted can be lifted by wind and may injure shoppers.</p>" +
        "<p><strong>Selling Rules</strong> " + N(9) + "Willow Creek is a producers-only market. " +
        N(10) + "This means vendors may sell only what they grew, raised, caught, or made themselves. " +
        N(11) + "Reselling produce bought from a wholesaler is not allowed, and the market manager may visit your farm or kitchen to confirm where your goods come from. " +
        N(12) + "Every item must have a clearly posted price. " +
        N(13) + "Signs should be large enough to read from three feet away.</p>" +
        "<p><strong>Food Safety</strong> " + N(14) + "Vendors offering free samples must cut them behind the table, wear disposable gloves, and keep samples covered. " +
        N(15) + "A hand-washing station must be set up before the first sample is offered. " +
        N(16) + "Eggs, meat, and dairy products must be kept at or below 41 degrees Fahrenheit, and vendors must keep a thermometer in each cooler. " +
        N(17) + "A market volunteer will check cooler temperatures twice each morning.</p>" +
        "<p><strong>Weather</strong> " + N(18) + "The market stays open in light rain. " +
        N(19) + "If thunder is heard or lightning is seen, the manager will sound an air horn three times, and all vendors must lower their tents at once. " +
        N(20) + "Selling may resume thirty minutes after the last thunder. " +
        N(21) + "If the market closes for weather before 9:00 a.m., that day's space fee will be refunded.</p>" +
        "<p><strong>Closing</strong> " + N(22) + "The market closes to shoppers at 12:30 p.m. " +
        N(23) + "Vendors may not pack up before closing unless they have sold out, because early departures leave gaps that make the market look empty. " +
        N(24) + "Please sweep your space and take all trash with you; the city charges the market for any cleanup. " +
        N(25) + "Vehicles may return to the selling area only after the manager signals that all shoppers have left.</p>" +
        "<p><strong>Questions</strong> " + N(26) + "Find the market manager, Hector Villanueva, at the welcome tent by the Elm Street gate. " +
        N(27) + "We are glad to have you, and we hope your first season is a sweet one.</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.A",
          stem: "The main purpose of the Willow Creek handbook is to —",
          choices: [
            { letter: "A", text: "persuade shoppers to visit the market every week" },
            { letter: "B", text: "explain the rules vendors must follow at the market" },
            { letter: "C", text: "describe the history of the Willow Creek market" },
            { letter: "D", text: "compare Willow Creek with other markets nearby" }
          ],
          correct: "B"
        },
        {
          id: "stakes",
          sol: "9.RI.1.B",
          stem: "According to the handbook, why must vendors use weights instead of stakes to hold down their tents?",
          choices: [
            { letter: "A", text: "Stakes would damage the chalk numbers on each space." },
            { letter: "B", text: "The manager prefers tents that are easy to move." },
            { letter: "C", text: "The market lot is paved, so stakes cannot be used." },
            { letter: "D", text: "Weights keep the tents cooler on summer mornings." }
          ],
          correct: "C"
        },
        {
          id: "confirm",
          sol: "9.RI.3.A",
          stem: "Which sentence best shows that the market checks whether vendors follow the producers-only rule?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "A"
        },
        {
          id: "sections",
          sol: "9.RI.2.A",
          stem: "The vendor handbook is organized mainly by —",
          choices: [
            { letter: "A", text: "the order in which the rules were added over the years" },
            { letter: "B", text: "the most important rule first and the least important last" },
            { letter: "C", text: "a series of problems and the vendors who caused them" },
            { letter: "D", text: "headed sections that follow a market day from start to end" }
          ],
          correct: "D"
        },
        {
          id: "producers",
          sol: "9.RV.1.C",
          stem: "The explanation in sentence 10 helps the reader understand that a producers-only market is one where vendors —",
          choices: [
            { letter: "A", text: "must sell at prices set by the manager" },
            { letter: "B", text: "may sell goods from any farm in the county" },
            { letter: "C", text: "may sell only goods they grew or made" },
            { letter: "D", text: "must show a permit at the welcome tent" }
          ],
          correct: "C"
        },
        {
          id: "feeling",
          sol: "9.RI.1.C",
          stem: "Which sentence from the handbook expresses a feeling rather than a rule or a fact?",
          choices: [
            { letter: "A", text: "Sentence 27" },
            { letter: "B", text: "Sentence 19" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 24" }
          ],
          correct: "A"
        },
        {
          id: "refunded",
          sol: "9.RV.1.B",
          stem: "In sentence 21, the word refunded most nearly means —",
          choices: [
            { letter: "A", text: "raised" },
            { letter: "B", text: "delayed" },
            { letter: "C", text: "collected" },
            { letter: "D", text: "paid back" }
          ],
          correct: "D"
        },
        {
          id: "because",
          sol: "9.RI.2.B",
          stem: "The handbook adds the explanation beginning with because in sentence 23 mainly to —",
          choices: [
            { letter: "A", text: "warn vendors that they will be fined for leaving" },
            { letter: "B", text: "give a reason for a rule that might seem strict" },
            { letter: "C", text: "describe what shoppers see when they first arrive" },
            { letter: "D", text: "suggest that vendors bring more goods to sell" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 7 · ARGUMENT · toy maker ───────────── */
    {
      id: "g9-ri-c52-toy-repair-day",
      family: "G9",
      title: "Fix It, Don't Toss It",
      kind: "Argument · 9.RI",
      blurb: "A student argues that her town should fund a monthly Toy Repair Day at the public library.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every January, the curb outside my apartment building in Hollis fills with the remains of the holidays: flattened boxes, tangled ribbon, and toys. " +
        N(2) + "Some of them are broken beyond saving. " +
        N(3) + "Many are not. " +
        N(4) + "Last winter I counted three ride-on cars with a single cracked wheel, a dollhouse missing one hinge, and a talking robot whose only problem, I later discovered, was a loose battery wire. " +
        N(5) + "Hollis should hold a free Toy Repair Day at the public library once a month, and the town council should fund it.</p>" +
        "<p>" + N(6) + "The first reason is simple: most broken toys are easy to fix. " +
        N(7) + "Anselm Brandt, who has run the wooden-toy shop on Grove Street for thirty years, looked at my list of curbside finds and estimated that seven out of ten could be repaired in under twenty minutes with basic tools. " +
        N(8) + "When our school's engineering club held a trial repair table at the spring fair, volunteers fixed forty-one of the fifty-two toys that families brought in.</p>" +
        "<p>" + N(9) + "The second reason is cost, and not only for families. " +
        N(10) + "According to the town's public works report, Hollis pays by the ton to haul trash to the regional landfill, and bulky plastic items like toys fill the trucks quickly. " +
        N(11) + "Every toy repaired is a toy the town does not pay to bury.</p>" +
        "<p>" + N(12) + "The third reason is harder to measure but, in my opinion, the most important. " +
        N(13) + "At the spring fair, I watched a boy of about eight hold a screwdriver while a volunteer guided his hand. " +
        N(14) + "When the wheel of his fire truck spun again, he looked as if he had invented it. " +
        N(15) + "A repair table teaches children that things can be understood and that a problem is something you open up, not something you throw away.</p>" +
        "<p>" + N(16) + "Some council members argue that the library has no space and that the town cannot afford another program. " +
        N(17) + "These are fair concerns, but the numbers are small. " +
        N(18) + "The engineering club has offered to supply volunteers, Mr. Brandt has offered to donate tools, and the library's community room sits empty on Saturday mornings. " +
        N(19) + "The only real costs would be insurance and supplies, which the club estimates at less than four hundred dollars a year.</p>" +
        "<p>" + N(20) + "Others worry that repaired toys will be unsafe. " +
        N(21) + "That is why every repair should be checked by an adult volunteer, and why toys with damaged batteries or sharp broken plastic should be recycled, not fixed. " +
        N(22) + "A good program knows its limits.</p>" +
        "<p>" + N(23) + "The council will vote on next year's budget in March. " +
        N(24) + "I urge every family that has ever thrown away a toy with one loose screw to come to that meeting and say so. " +
        N(25) + "Let's stop filling the curb and start filling a table.</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          stem: "Which sentence states the central claim of \"Fix It, Don't Toss It\"?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "C"
        },
        {
          id: "easy",
          sol: "9.RI.3.A",
          stem: "Which evidence most directly supports the writer's reason that most broken toys are easy to fix?",
          choices: [
            { letter: "A", text: "The trial table fixed 41 of the 52 toys brought in." },
            { letter: "B", text: "The town pays by the ton to haul trash to a landfill." },
            { letter: "C", text: "The library's community room is empty on Saturdays." },
            { letter: "D", text: "A boy looked as if he had invented his fire truck." }
          ],
          correct: "A"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which sentence from the editorial expresses a belief rather than a fact that could be checked?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "D"
        },
        {
          id: "objection",
          sol: "9.RI.2.B",
          stem: "The writer includes sentences 16-19 mainly to —",
          choices: [
            { letter: "A", text: "admit that the program is too costly to begin now" },
            { letter: "B", text: "answer an objection with specific offers and costs" },
            { letter: "C", text: "criticize council members for ignoring the library" },
            { letter: "D", text: "explain how the engineering club was first formed" }
          ],
          correct: "B"
        },
        {
          id: "reasons",
          sol: "9.RI.2.A",
          stem: "How does the writer mainly organize sentences 6-15?",
          choices: [
            { letter: "A", text: "as three reasons, each one supported by examples" },
            { letter: "B", text: "as a story told in the order the events happened" },
            { letter: "C", text: "as a comparison between Hollis and a nearby town" },
            { letter: "D", text: "as a list of problems that have no clear solutions" }
          ],
          correct: "A"
        },
        {
          id: "limits",
          sol: "9.RI.1.B",
          stem: "According to the writer, which toys should NOT be repaired at the library?",
          choices: [
            { letter: "A", text: "toys that would take more than twenty minutes" },
            { letter: "B", text: "toys brought by families from outside Hollis" },
            { letter: "C", text: "toys made of wood rather than plastic" },
            { letter: "D", text: "toys with damaged batteries or sharp plastic" }
          ],
          correct: "D"
        },
        {
          id: "openup",
          sol: "9.RV.1.F",
          stem: "In sentence 15, the writer calls a problem \"something you open up, not something you throw away\" to suggest that —",
          choices: [
            { letter: "A", text: "toys should be opened only by trained adults" },
            { letter: "B", text: "children break toys because they are curious" },
            { letter: "C", text: "repairing builds a habit of solving problems" },
            { letter: "D", text: "families should keep toys in their boxes" }
          ],
          correct: "C"
        },
        {
          id: "remains",
          sol: "9.RV.1.E",
          stem: "In sentence 1, the writer calls the curbside toys \"the remains of the holidays.\" Compared with leftovers, the word remains suggests something more —",
          choices: [
            { letter: "A", text: "cheerful and festive" },
            { letter: "B", text: "lifeless and discarded" },
            { letter: "C", text: "valuable and rare" },
            { letter: "D", text: "neat and organized" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 8 · VOCABULARY · coral reef ───────────── */
    {
      id: "g9-rv-c52-reef-transect",
      family: "G9",
      title: "Thirty Meters of Reef",
      kind: "Vocabulary · 9.RV",
      blurb: "Ana thinks she knows her home reef, until a survey line leads her past a patch of white coral.",
      level: 2,
      passage:
        "<p>" + N(1) + "The reef survey began, as all of Rafael Duarte's surveys did, on the deck of the boat with a lesson about a tape measure. " +
        N(2) + "\"Underwater, we'll stretch thirty meters of this line across the reef and count only what lives within a meter on either side of it,\" he explained, unreeling the yellow tape. " +
        N(3) + "\"That straight path is our <strong>transect</strong>. " +
        N(4) + "If we tried to count the whole reef, we'd never finish, and we'd never be able to compare one year with the next.\"</p>" +
        "<p>" + N(5) + "Ana Folau nodded, but she was barely listening. " +
        N(6) + "She had been snorkeling since she was six, and she was sure she already knew this reef the way she knew her grandmother's kitchen. " +
        N(7) + "She had volunteered for the survey mainly for the chance to dive deeper than she was allowed to on her own.</p>" +
        "<p>" + N(8) + "The first ten meters of the transect were everything she remembered. " +
        N(9) + "The water was <strong>teeming</strong> with fish: a cloud of blue chromis rising and falling over the branching coral, a parrotfish crunching on dead rock, a pair of butterflyfish moving together like dancers who had practiced for years. " +
        N(10) + "Ana marked her slate so quickly that the pencil skipped.</p>" +
        "<p>" + N(11) + "Around the twelfth meter, the color drained out of the reef. " +
        N(12) + "A wide patch of coral stood as white as chalk, and the crowds of fish from the first section had <strong>dwindled</strong> to a single wrasse that hurried past as if it were late for something. " +
        N(13) + "Ana stopped writing. " +
        N(14) + "She had seen pictures of bleaching in science class, but never on her own reef.</p>" +
        "<p>" + N(15) + "Back on the boat, she was quiet for a long time. " +
        N(16) + "\"Is it dead?\" she finally asked.</p>" +
        "<p>" + N(17) + "Rafael pulled up a photo on his tablet: the same patch a year earlier, white from edge to edge. " +
        N(18) + "\"That was the summer of the heat wave,\" he said. " +
        N(19) + "\"Now look at the edges.\" " +
        N(20) + "He opened a picture he had taken that morning. " +
        N(21) + "Along the border of the white area, small brown knobs of new coral had begun to spread, still <strong>tentative</strong>, none bigger than her thumbnail. " +
        N(22) + "\"Corals can be more <strong>resilient</strong> than people think, if the water gives them a chance. " +
        N(23) + "This reef isn't <strong>pristine</strong> anymore. " +
        N(24) + "It's been through something. " +
        N(25) + "But it's still trying.\"</p>" +
        "<p>" + N(26) + "Ana looked at her slate. " +
        N(27) + "Her crowded column of fish counts from the first ten meters sat beside a nearly empty column from the second. " +
        N(28) + "For the first time, the numbers seemed less like homework and more like a story someone would need to keep reading next year. " +
        N(29) + "She asked Rafael if she could come back for the next survey. " +
        N(30) + "He handed her the tape measure and told her to practice rolling it up without a single tangle.</p>",
      claims: [
        {
          id: "transect",
          sol: "9.RV.1.C",
          stem: "Which words from sentences 2 and 3 best help the reader understand the meaning of transect?",
          choices: [
            { letter: "A", text: "\"straight path\" and \"across the reef\"" },
            { letter: "B", text: "\"he explained\" and \"yellow tape\"" },
            { letter: "C", text: "\"Underwater\" and \"count only\"" },
            { letter: "D", text: "\"either side\" and \"thirty meters\"" }
          ],
          correct: "A"
        },
        {
          id: "teeming",
          sol: "9.RV.1.B",
          stem: "In sentence 9, the word teeming most nearly means —",
          choices: [
            { letter: "A", text: "empty of" },
            { letter: "B", text: "darkened by" },
            { letter: "C", text: "stirred up by" },
            { letter: "D", text: "crowded with" }
          ],
          correct: "D"
        },
        {
          id: "dwindled",
          sol: "9.RV.1.C",
          stem: "The detail about a single wrasse in sentence 12 shows that dwindled means —",
          choices: [
            { letter: "A", text: "grown more colorful" },
            { letter: "B", text: "become far fewer" },
            { letter: "C", text: "swum away quickly" },
            { letter: "D", text: "hidden in the coral" }
          ],
          correct: "B"
        },
        {
          id: "tentative",
          sol: "9.RV.1.E",
          stem: "In sentence 21, the author calls the new coral tentative rather than simply small. Compared with small, tentative adds a sense that the growth is —",
          choices: [
            { letter: "A", text: "finished and permanent" },
            { letter: "B", text: "harmful to the reef" },
            { letter: "C", text: "uncertain and just beginning" },
            { letter: "D", text: "larger than expected" }
          ],
          correct: "C"
        },
        {
          id: "resilient",
          sol: "9.RV.1.B",
          stem: "The word resilient in sentence 22 comes from a Latin word meaning \"to leap back.\" Based on this, a resilient coral is one that can —",
          choices: [
            { letter: "A", text: "grow without any sunlight" },
            { letter: "B", text: "move to a new location" },
            { letter: "C", text: "recover after being harmed" },
            { letter: "D", text: "stay hidden from predators" }
          ],
          correct: "C"
        },
        {
          id: "dancers",
          sol: "9.RV.1.F",
          stem: "In sentence 9, the butterflyfish moving \"like dancers who had practiced for years\" suggests that the fish move —",
          choices: [
            { letter: "A", text: "in smooth, matching motion" },
            { letter: "B", text: "in a nervous, scattered way" },
            { letter: "C", text: "slowly because they are tired" },
            { letter: "D", text: "away from the divers in fear" }
          ],
          correct: "A"
        },
        {
          id: "ana",
          sol: "9.RL.1.B",
          stem: "Based on sentences 26-29, readers can infer that Ana —",
          choices: [
            { letter: "A", text: "regrets joining a survey that upset her" },
            { letter: "B", text: "now sees the survey as long-term work that matters" },
            { letter: "C", text: "believes Rafael's photos were taken incorrectly" },
            { letter: "D", text: "wants to stop diving until the reef is healthy" }
          ],
          correct: "B"
        },
        {
          id: "drained",
          sol: "9.RL.2.B",
          stem: "The image in sentence 11 of color draining out of the reef mainly creates a mood of —",
          choices: [
            { letter: "A", text: "eager excitement" },
            { letter: "B", text: "light humor" },
            { letter: "C", text: "calm relief" },
            { letter: "D", text: "sudden unease" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 9 · VOCABULARY · toy maker ───────────── */
    {
      id: "g9-rv-c52-fox-marionette",
      family: "G9",
      title: "A Fox on Strings",
      kind: "Vocabulary · 9.RV",
      blurb: "Zainab carves her first marionette in her uncle's workshop and gives it a style of its own.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every summer, Zainab spent two weeks at her uncle Ibrahim's workshop, a converted garage behind his house that smelled of cedar shavings and linseed oil. " +
        N(2) + "Uncle Ibrahim made marionettes, wooden puppets that dance on strings, and he sold them to puppet theaters and collectors in three countries. " +
        N(3) + "His puppets were famous for their <strong>intricate</strong> joints: a single hand could have eleven separate pieces, each one able to bend.</p>" +
        "<p>" + N(4) + "This year, he said, Zainab would make a puppet of her own. " +
        N(5) + "\"A <strong>novice</strong> always starts with a simple figure,\" he told her, handing her a block of soft basswood. " +
        N(6) + "\"Five pieces. " +
        N(7) + "Head, body, two arms, and legs joined as one. " +
        N(8) + "Fancy hands can wait until next summer.\"</p>" +
        "<p>" + N(9) + "Zainab decided to carve a fox. " +
        N(10) + "For three days, she shaved the basswood with a small knife, taking off curls so thin you could see light through them. " +
        N(11) + "The work was <strong>painstaking</strong>. " +
        N(12) + "If she pressed too hard, the knife slipped and gouged a groove she would have to sand away, so she learned to make a hundred tiny cuts instead of ten big ones. " +
        N(13) + "By the end of the third day her hands ached, but the block had become a narrow head with pointed ears.</p>" +
        "<p>" + N(14) + "Next came the joints. " +
        N(15) + "Uncle Ibrahim showed her how to soak strips of leather in warm water until they were <strong>pliable</strong> enough to bend around the pegs without cracking. " +
        N(16) + "When the leather dried, it held the pieces together but still let them swing.</p>" +
        "<p>" + N(17) + "The strings were the hardest part. " +
        N(18) + "Each one ran from a part of the fox up to a wooden cross called a control bar. " +
        N(19) + "If a string was too loose, the fox's arm dangled like a wet noodle; if it was pulled <strong>taut</strong>, the arm jerked up stiffly, like the hand of a student who knows the answer. " +
        N(20) + "Zainab adjusted the strings one at a time, testing each with tiny tilts of the bar, until the fox could lift a paw and lower it again as smoothly as a real animal.</p>" +
        "<p>" + N(21) + "For the final step, she painted the fox. " +
        N(22) + "She gave it an orange coat, of course, but she also added purple boots and a striped scarf, because a fox in a puppet show, she decided, could dress however it liked. " +
        N(23) + "Uncle Ibrahim laughed when he saw it. " +
        N(24) + "\"My puppets are elegant,\" he said. " +
        N(25) + "\"Yours is <strong>whimsical</strong>. " +
        N(26) + "That's harder to teach.\"</p>" +
        "<p>" + N(27) + "On her last evening, Zainab put on a show for the whole family in the driveway. " +
        N(28) + "The fox bowed, waved, and tripped over its own boots on purpose. " +
        N(29) + "Everyone clapped, and Uncle Ibrahim clapped loudest of all.</p>",
      claims: [
        {
          id: "intricate",
          sol: "9.RV.1.C",
          stem: "Which words from sentence 3 best help the reader understand the meaning of intricate?",
          choices: [
            { letter: "A", text: "\"famous for their\"" },
            { letter: "B", text: "\"puppets were famous\"" },
            { letter: "C", text: "\"a single hand could\"" },
            { letter: "D", text: "\"eleven separate pieces\"" }
          ],
          correct: "D"
        },
        {
          id: "novice",
          sol: "9.RV.1.B",
          stem: "As Uncle Ibrahim uses it in sentence 5, the word novice most nearly means —",
          choices: [
            { letter: "A", text: "an expert" },
            { letter: "B", text: "a beginner" },
            { letter: "C", text: "a customer" },
            { letter: "D", text: "a teacher" }
          ],
          correct: "B"
        },
        {
          id: "pliable",
          sol: "9.RV.1.B",
          stem: "In sentence 15, leather that is pliable is —",
          choices: [
            { letter: "A", text: "dry and brittle" },
            { letter: "B", text: "dark and stained" },
            { letter: "C", text: "easy to bend" },
            { letter: "D", text: "thick and heavy" }
          ],
          correct: "C"
        },
        {
          id: "taut",
          sol: "9.RV.1.F",
          stem: "In sentence 19, comparing the arm on a taut string to \"the hand of a student who knows the answer\" helps the reader picture an arm that —",
          choices: [
            { letter: "A", text: "shoots straight up all at once" },
            { letter: "B", text: "hangs loosely at the fox's side" },
            { letter: "C", text: "waves slowly back and forth" },
            { letter: "D", text: "stays hidden behind the body" }
          ],
          correct: "A"
        },
        {
          id: "noodle",
          sol: "9.RL.2.A",
          stem: "In sentence 19, the phrase dangled like a wet noodle is an example of —",
          choices: [
            { letter: "A", text: "a simile that shows the arm hanging limp" },
            { letter: "B", text: "personification that gives the arm feelings" },
            { letter: "C", text: "hyperbole that exaggerates the string's length" },
            { letter: "D", text: "alliteration that repeats a starting sound" }
          ],
          correct: "A"
        },
        {
          id: "whimsical",
          sol: "9.RV.1.E",
          stem: "Uncle Ibrahim sets elegant against whimsical in sentences 24 and 25. Compared with elegant, whimsical describes a puppet that is —",
          choices: [
            { letter: "A", text: "expensive and rare" },
            { letter: "B", text: "old-fashioned and plain" },
            { letter: "C", text: "playful and unexpected" },
            { letter: "D", text: "graceful and serious" }
          ],
          correct: "C"
        },
        {
          id: "zainab",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Zainab in \"A Fox on Strings\"?",
          choices: [
            { letter: "A", text: "She is impatient and wants to skip the hard steps." },
            { letter: "B", text: "She is nervous about disappointing her uncle." },
            { letter: "C", text: "She copies her uncle's style as closely as she can." },
            { letter: "D", text: "She is patient with hard work and bold in her choices." }
          ],
          correct: "D"
        },
        {
          id: "idea",
          sol: "9.RL.1.A",
          stem: "Which idea does Zainab's summer in the workshop most clearly develop?",
          choices: [
            { letter: "A", text: "Simple puppets are worth less than complicated ones." },
            { letter: "B", text: "Careful skill and personal imagination both matter in a craft." },
            { letter: "C", text: "Family members should always work in the same trade." },
            { letter: "D", text: "Children learn best when adults leave them entirely alone." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 10 · PAIRED · farmers market ───────────── */
    {
      id: "g9-dsr-c52-market-move",
      family: "G9",
      title: "Moving the Market",
      kind: "Paired texts · 9.DSR",
      blurb: "A market manager explains a move to the fairgrounds; a Main Street shop owner asks the board to wait.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From the Manager's Desk: A New Home for the Oakmont Market</strong></p>" +
        "<p>" + N(1) + "After eleven seasons on Main Street, the Oakmont Farmers Market will move to the county fairgrounds lot beginning in June. " +
        N(2) + "This was not an easy decision, and I want vendors and shoppers to understand why the board made it. " +
        N(3) + "Our market has grown from fourteen stalls to fifty-two, and Main Street simply cannot hold us. " +
        N(4) + "Last summer, vendors at the north end were squeezed onto the sidewalk, and the fire marshal warned us twice that our tents were blocking emergency access. " +
        N(5) + "Parking is the second problem. " +
        N(6) + "Shoppers tell us they circle the block for twenty minutes, and several older customers have said they stopped coming because they could not find a space within walking distance. " +
        N(7) + "The fairgrounds lot offers four hundred free parking spaces, a covered pavilion for rainy days, and room for every vendor on our waiting list. " +
        N(8) + "We will also add a shuttle from the library every half hour for shoppers who do not drive. " +
        N(9) + "Change can feel like loss, especially for a market that has become part of downtown's identity. " +
        N(10) + "But a market that cannot grow will eventually shrink. " +
        N(11) + "I believe the fairgrounds will let us serve more families, support more farmers, and keep Oakmont's market healthy for the next eleven seasons and beyond. " +
        "<em>— Gloria Mendez, Market Manager</em></p>" +
        "<p><strong>Text 2 — Letter to the Editor: Don't Leave Main Street Behind</strong></p>" +
        "<p>" + N(12) + "I have sold hammers and paint on Main Street for twenty-six years, and Saturday mornings during market season are the busiest hours my store has. " +
        N(13) + "People park once, buy their tomatoes, and then wander into my shop, the bookstore, and the café. " +
        N(14) + "The market does not just sit on Main Street; it keeps Main Street alive. " +
        N(15) + "I understand that the market has outgrown its space, and I know parking has been difficult. " +
        N(16) + "But the fairgrounds are two miles from downtown, beside the highway, with nothing within walking distance but a gas station. " +
        N(17) + "A shopper who drives there, fills a bag, and drives home will never pass my door. " +
        N(18) + "The shuttle from the library is a kind idea, yet I doubt many families will wait for a bus while carrying flats of strawberries. " +
        N(19) + "There are other options. " +
        N(20) + "The city could close two side streets on Saturday mornings to give the market more room, and the church lot on Fourth Street sits empty until noon. " +
        N(21) + "I am asking the market board to study these choices before the move becomes final. " +
        N(22) + "Once shoppers learn a new habit, Main Street may never get them back. " +
        "<em>— Sven Halvorsen, Halvorsen Hardware</em></p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          stem: "On which point do Gloria Mendez and Sven Halvorsen agree?",
          choices: [
            { letter: "A", text: "The fairgrounds are the best place for the market." },
            { letter: "B", text: "The shuttle will solve the problem of getting there." },
            { letter: "C", text: "The market has outgrown its space on Main Street." },
            { letter: "D", text: "Downtown stores do not depend on the market at all." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "Mendez and Halvorsen differ mainly in how they judge —",
          choices: [
            { letter: "A", text: "the effect of the move on downtown Main Street" },
            { letter: "B", text: "the number of vendors now selling at the market" },
            { letter: "C", text: "the need for fresh local produce in Oakmont" },
            { letter: "D", text: "the success of the market's very first season" }
          ],
          correct: "A"
        },
        {
          id: "shuttle",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 1 does Halvorsen most directly question in sentence 18?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "B"
        },
        {
          id: "purpose1",
          sol: "9.RI.1.A",
          stem: "The main purpose of Text 1 is to —",
          choices: [
            { letter: "A", text: "ask shoppers to vote on the market's new location" },
            { letter: "B", text: "describe the history of the businesses on Main Street" },
            { letter: "C", text: "apologize to vendors for the fire marshal's warnings" },
            { letter: "D", text: "explain the reasons behind a decision to move" }
          ],
          correct: "D"
        },
        {
          id: "alive",
          sol: "9.RI.3.A",
          stem: "Which detail from Text 2 best supports Halvorsen's claim in sentence 14 that the market \"keeps Main Street alive\"?",
          choices: [
            { letter: "A", text: "Market mornings are his store's busiest hours of the week." },
            { letter: "B", text: "The fairgrounds sit beside the highway near a gas station." },
            { letter: "C", text: "The church lot on Fourth Street is empty until noon." },
            { letter: "D", text: "He has sold hammers and paint for twenty-six years." }
          ],
          correct: "A"
        },
        {
          id: "together",
          sol: "9.DSR.E",
          stem: "Taken together, the two texts suggest that the market board's decision —",
          choices: [
            { letter: "A", text: "will please every shopper who now attends" },
            { letter: "B", text: "was made without any thought about parking" },
            { letter: "C", text: "trades downtown foot traffic for more space" },
            { letter: "D", text: "has already been reversed by the city" }
          ],
          correct: "C"
        },
        {
          id: "predict",
          sol: "9.RI.1.C",
          stem: "Which sentence from Text 2 states a prediction rather than a fact?",
          choices: [
            { letter: "A", text: "Sentence 12" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.DSR.E",
          stem: "Compared with Mendez's newsletter, Halvorsen's letter sounds more —",
          choices: [
            { letter: "A", text: "cheerful and celebratory" },
            { letter: "B", text: "worried but respectful" },
            { letter: "C", text: "angry and insulting" },
            { letter: "D", text: "neutral and technical" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 11 · PAIRED · newspaper archive ───────────── */
    {
      id: "g9-dsr-c52-every-page",
      family: "G9",
      title: "Every Page, Searchable",
      kind: "Paired texts · 9.DSR",
      blurb: "A library puts a century of its town newspaper online; a retired archivist describes what a search box misses.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Every Page, Searchable</strong></p>" +
        "<p>" + N(1) + "This fall, the Marrow Valley Public Library will finish a five-year project to digitize every surviving issue of the Marrow Valley Courier, the town's newspaper from 1881 until it closed in 1994. " +
        N(2) + "Volunteers and staff have scanned more than 210,000 pages, and software has converted the printed words into searchable text. " +
        N(3) + "Anyone with an internet connection will soon be able to type a name, a street, or an event and see every page on which it appears. " +
        N(4) + "The project's coordinator, Dev Raghunathan, says requests are already arriving from family historians across the country. " +
        N(5) + "\"Last month a woman in Oregon found her great-great-grandfather's wedding announcement in about four seconds,\" he says. " +
        N(6) + "\"Five years ago, that search would have meant a trip here and two days at the microfilm reader.\" " +
        N(7) + "The library expects the archive to serve students, too. " +
        N(8) + "A history teacher at Marrow Valley High has already planned a unit in which students will trace how the Courier covered the arrival of the railroad, a mill strike, and the building of the interstate. " +
        N(9) + "The original bound volumes, many of them cracking along their spines, will be wrapped and moved to climate-controlled storage. " +
        N(10) + "They will no longer be available for public browsing, Raghunathan explains, because each handling causes damage. " +
        N(11) + "\"The scans are now the reading copy,\" he says. " +
        N(12) + "\"The paper is the backup.\"</p>" +
        "<p><strong>Text 2 — What the Scanner Doesn't Catch</strong></p>" +
        "<p>" + N(13) + "For thirty years I kept the bound volumes of a small-town newspaper, and I am glad that its pages will finally reach people who could never travel to see them. " +
        N(14) + "But I want to describe something a search box cannot do. " +
        N(15) + "When you open a bound volume, you do not land on the one article you came for. " +
        N(16) + "You land on a whole week. " +
        N(17) + "A student looking up a flood might notice, on the facing page, an advertisement for the dance that was canceled because of it, or a letter from a farmer whose fields were lost. " +
        N(18) + "Those discoveries were never the goal, and they were often the best part. " +
        N(19) + "A keyword search delivers exactly what you asked for, which means it rarely delivers what you did not know to ask. " +
        N(20) + "There is also the matter of the paper itself. " +
        N(21) + "Readers learned something from the weight of a wartime volume printed on thin, cheap stock, or from a coffee ring a reporter left on a page decades ago. " +
        N(22) + "I do not argue against scanning; the old volumes cannot survive constant handling. " +
        N(23) + "I only hope that libraries teach researchers to browse the digital pages, not just search them, and that now and then they let a student turn a real page with gloved hands. " +
        "<em>— Mei-Ling Chou, retired archivist</em></p>",
      claims: [
        {
          id: "respond",
          sol: "9.DSR.D",
          stem: "Which statement best describes how Text 2 responds to the project described in Text 1?",
          choices: [
            { letter: "A", text: "It rejects the project as a waste of the library's money." },
            { letter: "B", text: "It corrects errors about the number of pages scanned." },
            { letter: "C", text: "It repeats Text 1's main points using a personal story." },
            { letter: "D", text: "It welcomes the project while pointing out what may be lost." }
          ],
          correct: "D"
        },
        {
          id: "browsing",
          sol: "9.RI.1.B",
          stem: "According to Text 1, why will the Courier's bound volumes no longer be available for browsing?",
          choices: [
            { letter: "A", text: "The library needs the shelf space for new books." },
            { letter: "B", text: "Every time the pages are handled, they are damaged." },
            { letter: "C", text: "The scans showed that many of the pages are missing." },
            { letter: "D", text: "The volunteers have not finished wrapping them yet." }
          ],
          correct: "B"
        },
        {
          id: "handling",
          sol: "9.DSR.E",
          stem: "Chou's statement in sentence 22 that the old volumes \"cannot survive constant handling\" agrees most closely with which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "A"
        },
        {
          id: "structure2",
          sol: "9.RI.2.A",
          stem: "How does Chou organize her ideas in Text 2?",
          choices: [
            { letter: "A", text: "She lists the costs of scanning from highest to lowest." },
            { letter: "B", text: "She tells the history of her own library in time order." },
            { letter: "C", text: "She grants the project's value, names two losses, then offers a hope." },
            { letter: "D", text: "She compares two libraries that treated their archives differently." }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          stem: "Select TWO details, one from each text, that together best show how differently the writers picture a person using a newspaper archive.",
          choices: [
            { letter: "A", text: "A woman found a wedding announcement in about four seconds." },
            { letter: "B", text: "The bound volumes will be moved to climate-controlled storage." },
            { letter: "C", text: "Volunteers and staff scanned more than 210,000 pages." },
            { letter: "D", text: "A student might notice an ad for a canceled dance on the facing page." }
          ],
          correct: ["A", "D"]
        },
        {
          id: "both",
          sol: "9.DSR.E",
          stem: "Which conclusion about the scanned Courier archive is supported by details in both texts?",
          choices: [
            { letter: "A", text: "Most researchers will go back to microfilm once the scans are online." },
            { letter: "B", text: "The scanned pages will reach people who could not visit in person." },
            { letter: "C", text: "The library plans to sell the original bound volumes to collectors." },
            { letter: "D", text: "Students will no longer need to study local history in school." }
          ],
          correct: "B"
        },
        {
          id: "backup",
          sol: "9.RV.1.E",
          stem: "In sentence 12, Raghunathan calls the paper \"the backup.\" The word backup suggests that the original volumes are now treated as —",
          choices: [
            { letter: "A", text: "the main version for everyday readers" },
            { letter: "B", text: "a reserve kept safe in case it is needed" },
            { letter: "C", text: "a copy with more errors than the scans" },
            { letter: "D", text: "a temporary record that will be thrown out" }
          ],
          correct: "B"
        },
        {
          id: "pairing",
          sol: "9.DSR.D",
          stem: "A teacher would most likely pair \"Every Page, Searchable\" with \"What the Scanner Doesn't Catch\" in order to —",
          choices: [
            { letter: "A", text: "show two eyewitness accounts of the same flood" },
            { letter: "B", text: "prove that one library made a serious mistake" },
            { letter: "C", text: "weigh what digitizing an archive gains and loses" },
            { letter: "D", text: "teach students how to operate a microfilm reader" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 12 · POETRY · coral reef ───────────── */
    {
      id: "g9-rl-c52-polyp-poem",
      family: "G9",
      title: "What the Polyp Knows",
      kind: "Poetry · 9.RL",
      blurb: "A single coral polyp describes its slow work of building a reef, and the hot summer it survived.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "I am smaller than the fingernail<br>" +
        L(2) + "of the child who floats above me,<br>" +
        L(3) + "her mask fogged, her breath a string of silver beads<br>" +
        L(4) + "rising toward a sky she can return to.<br>" +
        L(5) + "She thinks I am a stone.<br>" +
        L(6) + "I let her think it.<br>" +
        L(7) + "All day I sit in my limestone cup<br>" +
        L(8) + "and hold the sun like a coin<br>" +
        L(9) + "my tiny guests can spend:<br>" +
        L(10) + "they turn the light to sugar,<br>" +
        L(11) + "I turn the sugar into stone,<br>" +
        L(12) + "and the stone becomes a street, a tower, a city<br>" +
        L(13) + "no single one of us will ever see.<br>" +
        L(14) + "At night I open.<br>" +
        L(15) + "My tentacles unfold like the fingers<br>" +
        L(16) + "of a hand that has been fisted all day,<br>" +
        L(17) + "and I sift the dark water for drifting crumbs.<br>" +
        L(18) + "This is how a city is built:<br>" +
        L(19) + "one mouthful, one grain, one cup at a time,<br>" +
        L(20) + "my mother's mother's mother's work beneath me,<br>" +
        L(21) + "my own work thin as paint on top.<br>" +
        L(22) + "Last summer the water burned warm for weeks<br>" +
        L(23) + "and many of my neighbors turned as white as bone.<br>" +
        L(24) + "Some of them came back. Some did not.<br>" +
        L(25) + "I do not know which I will be<br>" +
        L(26) + "when the next hot summer comes.<br>" +
        L(27) + "But tonight the water is cool,<br>" +
        L(28) + "and I am building.</p>",
      claims: [
        {
          id: "speaker",
          sol: "9.RL.3.B",
          stem: "In \"What the Polyp Knows,\" the speaker of the poem is —",
          choices: [
            { letter: "A", text: "the child snorkeling above the reef" },
            { letter: "B", text: "a single coral polyp on the reef" },
            { letter: "C", text: "a scientist measuring the water's heat" },
            { letter: "D", text: "one of the algae living inside the coral" }
          ],
          correct: "B"
        },
        {
          id: "coin",
          sol: "9.RL.2.A",
          stem: "In lines 8 and 9, the speaker says it holds the sun \"like a coin / my tiny guests can spend\" mainly to suggest that —",
          choices: [
            { letter: "A", text: "the coral is worth a great deal of money" },
            { letter: "B", text: "the child has dropped something into the water" },
            { letter: "C", text: "the coral keeps the sunlight away from its guests" },
            { letter: "D", text: "sunlight is a resource the algae use to make food" }
          ],
          correct: "D"
        },
        {
          id: "stone",
          sol: "9.RL.1.B",
          stem: "Lines 5 and 6 (\"She thinks I am a stone. / I let her think it.\") suggest that the speaker —",
          choices: [
            { letter: "A", text: "knows it is more alive than it appears" },
            { letter: "B", text: "is angry at the child for ignoring it" },
            { letter: "C", text: "wishes it could leave the reef and swim" },
            { letter: "D", text: "is afraid that the child will break it" }
          ],
          correct: "A"
        },
        {
          id: "fisted",
          sol: "9.RL.2.B",
          stem: "The image in lines 15 and 16 of tentacles unfolding \"like the fingers / of a hand that has been fisted all day\" mainly creates a sense of —",
          choices: [
            { letter: "A", text: "anger and readiness to fight" },
            { letter: "B", text: "confusion about the changing tide" },
            { letter: "C", text: "release and relief as night arrives" },
            { letter: "D", text: "sadness at the end of a long day" }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "9.RL.3.A",
          stem: "How do lines 22-26 change the direction of the poem?",
          choices: [
            { letter: "A", text: "They shift from the polyp's present to its earliest memories." },
            { letter: "B", text: "They give the child's thoughts for the first time." },
            { letter: "C", text: "They explain how the city of stone was first discovered." },
            { letter: "D", text: "They turn from steady building to the threat of deadly heat." }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme do lines 18-21 and the poem's final lines together best support?",
          choices: [
            { letter: "A", text: "Small, steady efforts can build something lasting despite uncertainty." },
            { letter: "B", text: "Living things should avoid any place where danger is possible." },
            { letter: "C", text: "The past matters more than anything that happens in the present." },
            { letter: "D", text: "People and sea creatures can never truly understand one another." }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of the poem's last two lines is best described as —",
          choices: [
            { letter: "A", text: "openly bitter" },
            { letter: "B", text: "lightly playful" },
            { letter: "C", text: "calmly determined" },
            { letter: "D", text: "deeply fearful" }
          ],
          correct: "C"
        },
        {
          id: "paint",
          sol: "9.RV.1.F",
          stem: "In line 21, the speaker describes its own work as \"thin as paint on top\" to show that —",
          choices: [
            { letter: "A", text: "the polyp is painted a bright color" },
            { letter: "B", text: "each generation adds only a thin living layer" },
            { letter: "C", text: "the reef is about to be covered by seaweed" },
            { letter: "D", text: "the child can see the polyp clearly from above" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 13 · DRAMA · toy maker ───────────── */
    {
      id: "g9-rl-c52-carousel-scene",
      family: "G9",
      title: "The Carousel Box",
      kind: "Drama · 9.RL",
      blurb: "Ten minutes before closing, a part-time worker breaks a toy maker's best music box and must decide what to say.",
      level: 1,
      passage:
        "<p><em>" + N(1) + "A toy shop on a rainy evening, ten minutes before closing. " +
        N(2) + "Wooden trains, kites, and music boxes crowd the shelves. " +
        N(3) + "JAMAL, sixteen, dusts the front display; ODETTE, the owner and toy maker, paints a rocking horse at a bench in the back.</em></p>" +
        "<p><strong>ODETTE:</strong> " + N(4) + "Careful with the carousel box, Jamal. " +
        N(5) + "Mrs. Takahashi is picking it up tonight. " +
        N(6) + "I spent three months on that one.</p>" +
        "<p><strong>JAMAL:</strong> " + N(7) + "I know, I know. " +
        N(8) + "I'm barely touching it. " +
        "<em>" + N(9) + "He lifts the carousel music box to dust beneath it. " +
        N(10) + "A tiny painted horse snaps off its pole and drops into his palm. " +
        N(11) + "He freezes.</em></p>" +
        "<p><strong>JAMAL:</strong> <em>(aside, to the audience)</em> " + N(12) + "She's going to fire me. " +
        N(13) + "Three months of work, and I broke it in three seconds. " +
        N(14) + "If I glue it fast, maybe nobody will ever know.</p>" +
        "<p><strong>ODETTE:</strong> <em>(without looking up)</em> " + N(15) + "You've gone quiet. " +
        N(16) + "That's never a good sign in a toy shop.</p>" +
        "<p><strong>JAMAL:</strong> " + N(17) + "Just concentrating. " +
        "<em>" + N(18) + "He pulls a tube of glue from the drawer, then stops and looks at the horse in his hand.</em> " +
        "<em>(aside)</em> " + N(19) + "If it breaks again at her house, she'll think Odette does sloppy work. " +
        N(20) + "That's worse than me getting fired.</p>" +
        "<p><em>" + N(21) + "The bell over the door rings. " +
        N(22) + "MRS. TAKAHASHI enters, shaking rain from her umbrella.</em></p>" +
        "<p><strong>MRS. TAKAHASHI:</strong> " + N(23) + "I hope I'm not too late. " +
        N(24) + "My granddaughter has asked about that carousel every day for a month.</p>" +
        "<p><strong>ODETTE:</strong> <em>(standing, wiping her hands)</em> " + N(25) + "Right on time. " +
        N(26) + "Jamal, would you bring it to the counter?</p>" +
        "<p><strong>JAMAL:</strong> <em>" + N(27) + "He sets the box down slowly and opens his hand to show the horse.</em> " +
        N(28) + "Before you wrap it, I have to tell you something. " +
        N(29) + "I broke this while I was dusting. " +
        N(30) + "It was my fault, not the carousel's.</p>" +
        "<p><em>" + N(31) + "A pause. " +
        N(32) + "Odette takes the horse and turns it in the light.</em></p>" +
        "<p><strong>ODETTE:</strong> " + N(33) + "The pole cracked where the grain runs crooked. " +
        N(34) + "I worried about that spot when I carved it. " +
        "<em>(to Mrs. Takahashi)</em> " + N(35) + "Can you give me twenty minutes? " +
        N(36) + "I'll pin it with brass instead of glue, and it will outlast all of us.</p>" +
        "<p><strong>MRS. TAKAHASHI:</strong> " + N(37) + "I'll get a cup of tea next door. " +
        "<em>" + N(38) + "She smiles at Jamal.</em> " +
        N(39) + "My granddaughter breaks things too, but she has never once told me.</p>" +
        "<p><em>" + N(40) + "She exits. " +
        N(41) + "Odette hands Jamal a small brass pin and a hand drill.</em></p>" +
        "<p><strong>ODETTE:</strong> " + N(42) + "Hold it steady. " +
        N(43) + "You found the weak spot, so you get to help fix it.</p>" +
        "<p><strong>JAMAL:</strong> " + N(44) + "You're not mad?</p>" +
        "<p><strong>ODETTE:</strong> " + N(45) + "I'd be mad if you'd glued it and hoped. " +
        N(46) + "Hope is a terrible adhesive.</p>",
      claims: [
        {
          id: "aside1",
          sol: "9.RL.1.D",
          stem: "The playwright uses Jamal's aside in sentences 12-14 mainly to —",
          choices: [
            { letter: "A", text: "reveal his panic and his first plan to hide the damage" },
            { letter: "B", text: "show Odette that he is sorry for the mistake" },
            { letter: "C", text: "explain to Mrs. Takahashi how the horse broke" },
            { letter: "D", text: "suggest that the carousel was already broken" }
          ],
          correct: "A"
        },
        {
          id: "aside2",
          sol: "9.RL.1.D",
          stem: "Which sentence best shows Jamal's private thinking shifting from protecting himself to protecting Odette?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 17" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 24" }
          ],
          correct: "C"
        },
        {
          id: "looking",
          sol: "9.RL.3.B",
          stem: "The stage direction without looking up, before sentence 15, mainly shows that Odette —",
          choices: [
            { letter: "A", text: "is too busy to care about Jamal at all" },
            { letter: "B", text: "has already seen the broken horse" },
            { letter: "C", text: "wants Jamal to finish dusting faster" },
            { letter: "D", text: "notices Jamal's silence even as she works" }
          ],
          correct: "D"
        },
        {
          id: "jamal",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Jamal by the end of the scene?",
          choices: [
            { letter: "A", text: "He is still afraid and blames the carousel." },
            { letter: "B", text: "He takes responsibility even though it is hard." },
            { letter: "C", text: "He is careless and sees nothing wrong in what he did." },
            { letter: "D", text: "He is mainly worried about losing his paycheck." }
          ],
          correct: "B"
        },
        {
          id: "takahashi",
          sol: "9.RL.1.B",
          stem: "Mrs. Takahashi's comment in sentence 39 suggests that she —",
          choices: [
            { letter: "A", text: "is upset that her gift will be late" },
            { letter: "B", text: "respects Jamal for admitting the mistake" },
            { letter: "C", text: "plans to scold her granddaughter at home" },
            { letter: "D", text: "thinks Odette should hire someone else" }
          ],
          correct: "B"
        },
        {
          id: "adhesive",
          sol: "9.RV.1.C",
          stem: "In sentence 46, the word adhesive most nearly means —",
          choices: [
            { letter: "A", text: "tool" },
            { letter: "B", text: "lesson" },
            { letter: "C", text: "excuse" },
            { letter: "D", text: "glue" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "9.RL.2.C",
          stem: "Odette's final line, \"Hope is a terrible adhesive,\" gives the ending a tone that is —",
          choices: [
            { letter: "A", text: "harsh and disappointed" },
            { letter: "B", text: "confused and uncertain" },
            { letter: "C", text: "wry and forgiving" },
            { letter: "D", text: "sad and regretful" }
          ],
          correct: "C"
        },
        {
          id: "hand",
          sol: "9.RL.1.D",
          stem: "The stage direction in sentence 27, in which Jamal opens his hand to show the horse, mainly serves to —",
          choices: [
            { letter: "A", text: "mark the moment he chooses honesty over hiding" },
            { letter: "B", text: "show that the horse was too small to glue" },
            { letter: "C", text: "signal that Mrs. Takahashi saw the damage" },
            { letter: "D", text: "reveal that Odette broke the carousel earlier" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
