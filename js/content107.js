/* SOL Labyrinth — Grade 11 long-tier packs (v5.15 expansion, content107): a food truck, volcanoes,
 * a science fair and a mechanic's garage. Twelve packs, eight questions each. Original text only.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* 1 ─ Literary · food truck */
    {
      id: "g11-rl-c107-freshlumpia",
      family: "G11",
      title: "The Fifth Item",
      kind: "Literary · 11.RL",
      blurb: "When the generator dies at a riverfront festival, Roz opens the cooler she has been keeping secret.",
      level: 2,
      passage:
        "<p>" + N(1) + "By eleven o'clock the line in front of Kusina on Wheels stretched past the kettle-corn tent and curled around a lamppost, and Roz Bautista could hear her aunt counting orders under her breath like a prayer. " +
        N(2) + "Tita Nena had run the truck for nine years on four items: pork adobo over rice, chicken lumpia, pancit, and a sweet banana roll called turon. " +
        N(3) + "Every spring Roz suggested a fifth, and every spring her aunt answered with the same sentence: \"A short menu is a fast menu.\" " +
        N(4) + "This year Roz had stopped asking and started practicing. " +
        N(5) + "In a cooler under the passenger seat sat three trays of fresh lumpia, soft crepes wrapped around shredded vegetables and crushed peanuts, the kind her grandmother had made for birthdays and never fried.</p>" +
        "<p>" + N(6) + "At 11:40 the generator coughed twice and went silent. " +
        N(7) + "The exhaust fan wound down, the fryer's orange light blinked off, and the oil, still hot, began its slow slide toward useless. " +
        N(8) + "Tita Nena crouched beside the machine and yanked the cord until her shoulder cracked. " +
        N(9) + "Nothing. " +
        N(10) + "Outside, a man in a sun visor leaned toward the window and asked whether the line was actually moving or just standing there for decoration.</p>" +
        "<p>" + N(11) + "\"We close,\" Tita said, standing up and wiping her hands on her apron. " +
        N(12) + "\"Fifteen minutes, maybe an hour. " +
        N(13) + "I'll call Benny about the part.\" " +
        N(14) + "Roz looked at the line, at the families holding paper tickets from the festival office, at a girl on her father's shoulders reading the menu board out loud. " +
        N(15) + "Then she pulled the cooler out from under the seat.</p>" +
        "<p>" + N(16) + "\"The rice is still warm in the insulated pot,\" she said. " +
        N(17) + "\"The adobo doesn't need the fryer. " +
        N(18) + "And these don't need anything.\" " +
        N(19) + "She lifted the lid. " +
        N(20) + "Her aunt stared at the rows of pale rolls, each one tied with a thin strip of green onion, and for a long moment said nothing at all. " +
        N(21) + "\"Since when?\" she finally asked. " +
        N(22) + "\"Since March,\" Roz said. " +
        N(23) + "\"Every Sunday, in your kitchen, while you were at the restaurant supply store.\"</p>" +
        "<p>" + N(24) + "They rewrote the menu board in marker, crossing out the fried items with a single neat line rather than erasing them, as if they were only resting. " +
        N(25) + "Roz worked the window while her aunt spooned adobo, and when customers asked about the new roll, Roz found herself describing her grandmother's hands instead of the ingredients. " +
        N(26) + "The man in the sun visor bought two. " +
        N(27) + "By the time Benny arrived with a replacement spark plug, the fresh lumpia were gone and the line was half its earlier length.</p>" +
        "<p>" + N(28) + "That evening, Tita Nena wiped down the menu board and wrote the four old items back in their places. " +
        N(29) + "Then, below them, in slightly smaller letters, she added a fifth. " +
        N(30) + "\"Sundays,\" she said, handing Roz the marker so she could fix the spelling, \"you're going to show me how you tie the onion.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does Roz's experience at the festival most clearly develop?",
          choices: [
            { letter: "A", text: "Family recipes are best kept private and shared only on holidays." },
            { letter: "B", text: "Preparing quietly for change can honor a tradition rather than replace it." },
            { letter: "C", text: "Small businesses succeed mainly by following one strict set of rules." },
            { letter: "D", text: "Young workers should wait for permission before offering new ideas." }
          ],
          correct: "B"
        },
        {
          id: "since-march",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Roz's reply in sentences 22 and 23 suggests that she —",
          choices: [
            { letter: "A", text: "wanted her aunt to feel guilty for ignoring her ideas" },
            { letter: "B", text: "made the rolls that morning because she expected trouble" },
            { letter: "C", text: "had been practicing steadily for weeks without her aunt knowing" },
            { letter: "D", text: "learned the recipe from workers at the restaurant supply store" }
          ],
          correct: "C"
        },
        {
          id: "resting",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "The fried items crossed out with a single neat line \"as if they were only resting\" (sentence 24) most clearly symbolize —",
          choices: [
            { letter: "A", text: "traditions set aside for now but not discarded" },
            { letter: "B", text: "a menu that the festival office had rejected" },
            { letter: "C", text: "the aunt's anger that the generator had failed" },
            { letter: "D", text: "dishes that customers no longer wanted to buy" }
          ],
          correct: "A"
        },
        {
          id: "nothing",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "Sentence 9 is set apart as a one-word sentence mainly to —",
          choices: [
            { letter: "A", text: "show that Tita Nena is too tired to speak" },
            { letter: "B", text: "introduce the man waiting at the window" },
            { letter: "C", text: "suggest that the generator will soon restart" },
            { letter: "D", text: "stress how completely the repair attempt fails" }
          ],
          correct: "D"
        },
        {
          id: "short-menu",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 3, Tita Nena's saying \"A short menu is a fast menu\" most nearly means that —",
          choices: [
            { letter: "A", text: "customers prefer food they can eat quickly" },
            { letter: "B", text: "a small truck has room for only a few recipes" },
            { letter: "C", text: "new dishes take too long for Roz to learn" },
            { letter: "D", text: "offering fewer items keeps the line moving" }
          ],
          correct: "D"
        },
        {
          id: "resolution",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the final paragraph resolve the disagreement introduced in sentences 2 and 3?",
          choices: [
            { letter: "A", text: "Tita Nena restores the old menu but adds Roz's dish to it." },
            { letter: "B", text: "Tita Nena replaces the fried items with Roz's new recipes." },
            { letter: "C", text: "Roz agrees to stop suggesting changes to the truck's menu." },
            { letter: "D", text: "Roz takes over the truck while her aunt runs the kitchen." }
          ],
          correct: "A"
        },
        {
          id: "visor-tone",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The customer's question in sentence 10 creates a tone that is —",
          choices: [
            { letter: "A", text: "warm and encouraging" },
            { letter: "B", text: "nervous and apologetic" },
            { letter: "C", text: "impatient and sarcastic" },
            { letter: "D", text: "curious and admiring" }
          ],
          correct: "C"
        },
        {
          id: "hands",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "In sentence 25, Roz describes her grandmother's hands instead of the ingredients. This detail mainly reveals that Roz —",
          choices: [
            { letter: "A", text: "has forgotten what the rolls actually contain" },
            { letter: "B", text: "values the dish as a link to her family's past" },
            { letter: "C", text: "is trying to distract customers from the delay" },
            { letter: "D", text: "wants credit for inventing a brand-new recipe" }
          ],
          correct: "B"
        }
      ]
    },

    /* 2 ─ Literary · mechanic's garage */
    {
      id: "g11-rl-c107-exhausthanger",
      family: "G11",
      title: "What the Scanner Missed",
      kind: "Literary · 11.RL",
      blurb: "A diagnostic scanner finds nothing wrong with an old pickup, so the narrator's grandmother takes it for a drive.",
      level: 3,
      passage:
        "<p>" + N(1) + "The scanner was the first thing I learned to love at my grandmother's garage, because it never shrugged. " +
        N(2) + "You plugged it into the port under the dashboard, waited for the little screen to wake, and it told you, in letters and numbers, exactly what the car was complaining about. " +
        N(3) + "My grandmother, Almaz Haile, had been fixing engines on Delmont Avenue for thirty-one years, and she treated the scanner the way some people treat a weather app: useful, she said, but not the sky.</p>" +
        "<p>" + N(4) + "On a Tuesday in July, Mrs. Lindqvist drove her old blue pickup into the second bay and described a rattle that came \"from somewhere underneath, but only when it feels like it.\" " +
        N(5) + "I plugged in the scanner. " +
        N(6) + "No codes. " +
        N(7) + "I ran it again, then checked the battery and the fluids, and everything read as clean as a new notebook. " +
        N(8) + "\"There's nothing wrong with it,\" I told my grandmother, holding up the screen like a receipt. " +
        N(9) + "She did not look at the screen. " +
        N(10) + "She looked at Mrs. Lindqvist, who was standing by the coffee machine with her arms folded, the posture of a person who has been told before that she imagined something.</p>" +
        "<p>" + N(11) + "\"Get your shoes,\" my grandmother said to me. " +
        N(12) + "\"We're going for a drive.\" " +
        N(13) + "We took the pickup out past the rail yard, where the road turned to patched asphalt, and she drove with the windows down and the radio off. " +
        N(14) + "For the first mile she said nothing. " +
        N(15) + "Then, as we rolled over a seam in the road at about twenty miles an hour, a sound came up through the floor, a dull metallic tap like someone knocking politely on a door they did not expect to open. " +
        N(16) + "\"There,\" she said. " +
        N(17) + "\"Again at the bridge, you'll see.\" " +
        N(18) + "At the bridge it came again.</p>" +
        "<p>" + N(19) + "Back at the garage, she put the truck on the lift and handed me a flashlight instead of a wrench. " +
        N(20) + "It took me ten minutes of looking, which felt like an hour with her standing behind me, before I found it: a rubber hanger that held the exhaust pipe had split, and on certain bumps the pipe swung just far enough to tap the frame. " +
        N(21) + "The scanner could not have reported it, because nothing electrical had failed. " +
        N(22) + "The part cost four dollars. " +
        N(23) + "My grandmother charged Mrs. Lindqvist for twenty minutes of labor and then, I noticed, did not charge her for the drive.</p>" +
        "<p>" + N(24) + "\"The scanner tells you what the car knows about itself,\" my grandmother said that evening while I swept. " +
        N(25) + "\"The driver tells you what the car can't know.\" " +
        N(26) + "I wanted to argue that the scanner was faster, which was true, and that most problems did show up on the screen, which was also true. " +
        N(27) + "But I kept thinking about Mrs. Lindqvist's folded arms, and how they had unfolded when my grandmother said \"There.\"</p>" +
        "<p>" + N(28) + "The next morning a man came in about a squeal in his brakes. " +
        N(29) + "I reached for the scanner, then set it back on the bench, and asked him when he heard it, and how it sounded, and whether anyone had told him he was imagining it.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme developed through the narrator's work on the pickup?",
          choices: [
            { letter: "A", text: "Older repair methods are always more reliable than new tools." },
            { letter: "B", text: "Customers usually exaggerate the problems they describe." },
            { letter: "C", text: "Speed matters more than accuracy in a busy repair shop." },
            { letter: "D", text: "Careful attention to people can reveal what instruments miss." }
          ],
          correct: "D"
        },
        {
          id: "weather-app",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 3, comparing the scanner to a weather app that is \"not the sky\" suggests that Almaz sees the scanner as —",
          choices: [
            { letter: "A", text: "a helpful report that cannot replace direct observation" },
            { letter: "B", text: "an unreliable device that often gives the wrong result" },
            { letter: "C", text: "a tool designed mainly for customers rather than mechanics" },
            { letter: "D", text: "an expensive gadget that the garage does not truly need" }
          ],
          correct: "A"
        },
        {
          id: "folded-arms",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The description of Mrs. Lindqvist's posture in sentence 10 mainly serves to —",
          choices: [
            { letter: "A", text: "show that she is angry about the garage's high prices" },
            { letter: "B", text: "suggest that she wants to leave before the repair begins" },
            { letter: "C", text: "hint that others have dismissed her complaint before" },
            { letter: "D", text: "reveal that she knows more about trucks than the narrator" }
          ],
          correct: "C"
        },
        {
          id: "knocking",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The simile in sentence 15, \"a dull metallic tap like someone knocking politely,\" mainly emphasizes that the sound is —",
          choices: [
            { letter: "A", text: "loud enough to alarm everyone in the truck" },
            { letter: "B", text: "faint and easy to overlook unless one listens" },
            { letter: "C", text: "a sign of a serious and dangerous failure" },
            { letter: "D", text: "caused by a person rather than by the truck" }
          ],
          correct: "B"
        },
        {
          id: "no-charge",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Almaz's decision not to charge for the drive (sentence 23) suggests that she —",
          choices: [
            { letter: "A", text: "considers listening to the customer part of fair service" },
            { letter: "B", text: "feels guilty that the repair took longer than planned" },
            { letter: "C", text: "wants the narrator to pay for the time he wasted" },
            { letter: "D", text: "doubts that the four-dollar part will solve the problem" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the final paragraph (sentences 28 and 29) resolve the story?",
          choices: [
            { letter: "A", text: "It shows the narrator rejecting the scanner as useless." },
            { letter: "B", text: "It reveals that the brake problem cannot be repaired." },
            { letter: "C", text: "It shows the narrator applying his grandmother's approach." },
            { letter: "D", text: "It suggests the narrator will soon run his own garage." }
          ],
          correct: "C"
        },
        {
          id: "shrugged",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 1, saying that the scanner \"never shrugged\" most nearly means that it —",
          choices: [
            { letter: "A", text: "was too complicated for a beginner to use" },
            { letter: "B", text: "always gave a definite, confident answer" },
            { letter: "C", text: "never needed its battery replaced or charged" },
            { letter: "D", text: "worked on every kind of vehicle in the shop" }
          ],
          correct: "B"
        },
        {
          id: "first-person",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "Because the narrator tells the story in first person, the reader is able to —",
          choices: [
            { letter: "A", text: "learn what Mrs. Lindqvist privately thinks of the garage" },
            { letter: "B", text: "understand exactly how Almaz learned to repair engines" },
            { letter: "C", text: "see the events through the eyes of several workers" },
            { letter: "D", text: "follow how the narrator's trust in the scanner shifts" }
          ],
          correct: "D"
        }
      ]
    },

    /* 3 ─ Literary · science fair */
    {
      id: "g11-rl-c107-nullresult",
      family: "G11",
      title: "A Clear Answer of No",
      kind: "Literary · 11.RL",
      blurb: "Six weeks of moldy bread give Keziah a result she did not want, the night before the county fair.",
      level: 1,
      passage:
        "<p>" + N(1) + "Keziah Mensah had spent six weeks watching bread grow mold, and the bread had not cooperated. " +
        N(2) + "Her question was simple: would brushing slices with cinnamon water slow the growth of mold? " +
        N(3) + "She had read that cinnamon contains compounds that can fight some kinds of fungus, and she expected the cinnamon slices to stay clean for days longer than the plain ones. " +
        N(4) + "She had twenty slices in sealed bags, ten treated and ten untreated, all kept in the same dark cabinet in her family's laundry room. " +
        N(5) + "Every evening she photographed them and measured the fuzzy patches with a clear plastic grid.</p>" +
        "<p>" + N(6) + "By the end of the sixth week, the numbers were in, and they said almost nothing. " +
        N(7) + "The cinnamon slices had grown mold on day five, on average. " +
        N(8) + "The plain slices had grown mold on day five, too. " +
        N(9) + "Keziah stared at her spreadsheet the night before the county science fair and felt as if she had trained for a race that was then canceled.</p>" +
        "<p>" + N(10) + "Her older brother, Kofi, leaned in the doorway and read the chart over her shoulder. " +
        N(11) + "\"You could leave out the last two weeks,\" he said. " +
        N(12) + "\"In week two, the cinnamon ones looked a little better.\" " +
        N(13) + "Keziah knew he was trying to help. " +
        N(14) + "She also knew that \"a little better\" in one week was not the same as a result, and that choosing only the good days would turn her project into a story instead of a test. " +
        N(15) + "She thanked him and kept every row.</p>" +
        "<p>" + N(16) + "Instead, she changed her poster's title from \"Cinnamon Stops Mold\" to \"Does Cinnamon Stop Mold? Not in My Kitchen.\" " +
        N(17) + "She added a section called \"What Could Explain This,\" listing three ideas: her cinnamon water may have been too weak, the store bread may already have contained a preservative, and ten slices per group might be too few to show a small difference. " +
        N(18) + "At midnight she printed the new section and glued it on slightly crooked.</p>" +
        "<p>" + N(19) + "The next morning, the gym smelled like poster glue and nervous coffee. " +
        N(20) + "Keziah's table sat between a model volcano that actually erupted and a small robot that delivered pencils. " +
        N(21) + "Most visitors walked past her bread photos with polite, puzzled faces. " +
        N(22) + "Then a judge in a gray cardigan stopped, read the crooked section twice, and asked what Keziah would change if she repeated the experiment. " +
        N(23) + "Keziah answered without notes: a stronger solution, homemade bread with no preservatives, and thirty slices per group. " +
        N(24) + "The judge wrote for a long time.</p>" +
        "<p>" + N(25) + "Keziah did not win first place. " +
        N(26) + "She won a ribbon she had not known existed, for Best Experimental Design, and the judge's comment card said, \"A clear answer of no is still an answer.\" " +
        N(27) + "That night she taped the card above her desk, next to a fresh loaf of bread she had already started to slice.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of Keziah's story?",
          choices: [
            { letter: "A", text: "An honest result has value even when it disappoints." },
            { letter: "B", text: "Older siblings usually give the most useful advice." },
            { letter: "C", text: "Winning first place is the true goal of any project." },
            { letter: "D", text: "Experiments with food are too unreliable to be useful." }
          ],
          correct: "A"
        },
        {
          id: "problem",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "What problem does Keziah face in sentences 6 through 9?",
          choices: [
            { letter: "A", text: "Her bread slices were ruined before the fair." },
            { letter: "B", text: "Her brother refuses to help with the poster." },
            { letter: "C", text: "Her data show no difference between the groups." },
            { letter: "D", text: "Her photographs were lost the night before the fair." }
          ],
          correct: "C"
        },
        {
          id: "race",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 9, Keziah's feeling that she had \"trained for a race that was then canceled\" suggests that she feels —",
          choices: [
            { letter: "A", text: "relieved that the long work is finally over" },
            { letter: "B", text: "that her effort led to no satisfying outcome" },
            { letter: "C", text: "angry that the fair was moved to another day" },
            { letter: "D", text: "too tired to finish building her poster" }
          ],
          correct: "B"
        },
        {
          id: "every-row",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which sentence best shows that Keziah values honesty over a better-looking result?",
          choices: [
            { letter: "A", text: "\"Keziah knew he was trying to help.\"" },
            { letter: "B", text: "\"Keziah did not win first place.\"" },
            { letter: "C", text: "\"The judge wrote for a long time.\"" },
            { letter: "D", text: "\"She thanked him and kept every row.\"" }
          ],
          correct: "D"
        },
        {
          id: "story-test",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 14, the phrase \"turn her project into a story instead of a test\" means that leaving out data would —",
          choices: [
            { letter: "A", text: "make the poster more exciting for visitors" },
            { letter: "B", text: "show what she wanted rather than what happened" },
            { letter: "C", text: "require her to write a longer report for judges" },
            { letter: "D", text: "make the experiment too short to be accepted" }
          ],
          correct: "B"
        },
        {
          id: "title-tone",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The new poster title in sentence 16 has a tone that is best described as —",
          choices: [
            { letter: "A", text: "bitter and defeated" },
            { letter: "B", text: "formal and scientific" },
            { letter: "C", text: "boastful and confident" },
            { letter: "D", text: "honest and lightly humorous" }
          ],
          correct: "D"
        },
        {
          id: "fresh-loaf",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Why does the author end the story with Keziah slicing a fresh loaf of bread (sentence 27)?",
          choices: [
            { letter: "A", text: "to show she plans to repeat the experiment with improvements" },
            { letter: "B", text: "to show she has given up science for cooking" },
            { letter: "C", text: "to suggest she is still upset about losing first place" },
            { letter: "D", text: "to explain how the mold first appeared on her bread" }
          ],
          correct: "A"
        },
        {
          id: "puzzled",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 21, the word puzzled most nearly means —",
          choices: [
            { letter: "A", text: "amused" },
            { letter: "B", text: "bored" },
            { letter: "C", text: "confused" },
            { letter: "D", text: "impressed" }
          ],
          correct: "C"
        }
      ]
    },

    /* 4 ─ Poetry · volcanoes */
    {
      id: "g11-rl-c107-dormant",
      family: "G11",
      title: "Field Notes from a Sleeping Mountain",
      kind: "Poetry · 11.RL",
      blurb: "A young field scientist climbs a quiet volcano and learns what its instruments are hearing.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The guidebook calls it dormant, a word<br>" +
        L(2) + "that sounds like a dog asleep on a porch,<br>" +
        L(3) + "one ear still turning toward the road.<br>" +
        L(4) + "We climb at dawn with the instruments<br>" +
        L(5) + "strapped to our backs like extra ribs,<br>" +
        L(6) + "and the summit greets us with nothing:<br>" +
        L(7) + "gray ash, a lake the color of old jade,<br>" +
        L(8) + "a wind that does not know our names.<br><br>" +
        L(9) + "But the seismometer, buried to its neck,<br>" +
        L(10) + "writes a different letter every hour,<br>" +
        L(11) + "small tremors, a stitch, a stammer,<br>" +
        L(12) + "the mountain clearing its throat<br>" +
        L(13) + "in a room two miles beneath our boots.<br>" +
        L(14) + "The gas sensor sniffs and blinks.<br>" +
        L(15) + "The GPS stake has drifted the width<br>" +
        L(16) + "of a fingernail since spring,<br>" +
        L(17) + "which is nothing, my mentor says,<br>" +
        L(18) + "and also not nothing at all.<br><br>" +
        L(19) + "I used to think stillness meant finished,<br>" +
        L(20) + "that a quiet thing had nothing left to say.<br>" +
        L(21) + "Now I sit on the warm rim and listen<br>" +
        L(22) + "the way you listen to a sleeping child,<br>" +
        L(23) + "not because you fear the waking,<br>" +
        L(24) + "but because you know that it will come." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which idea does the poem as a whole most clearly develop?",
          choices: [
            { letter: "A", text: "Volcanoes are too dangerous for scientists to study up close." },
            { letter: "B", text: "Modern instruments have made human observation unnecessary." },
            { letter: "C", text: "Apparent stillness can hide ongoing, meaningful change." },
            { letter: "D", text: "Mountains are most beautiful when nobody is watching them." }
          ],
          correct: "C"
        },
        {
          id: "porch-dog",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In lines 1–3, comparing the word dormant to a dog asleep with \"one ear still turning toward the road\" suggests that the volcano —",
          choices: [
            { letter: "A", text: "is resting but still capable of responding" },
            { letter: "B", text: "is friendly and harmless to the climbers" },
            { letter: "C", text: "has been abandoned by the people nearby" },
            { letter: "D", text: "is permanently finished with eruptions" }
          ],
          correct: "A"
        },
        {
          id: "throat",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Lines 11–13 personify the mountain (\"a stammer,\" \"clearing its throat\") mainly to —",
          choices: [
            { letter: "A", text: "show that the speaker is frightened of the summit" },
            { letter: "B", text: "explain how a seismometer is buried in the ground" },
            { letter: "C", text: "suggest that the mountain is angry at its visitors" },
            { letter: "D", text: "make the hidden underground activity feel alive" }
          ],
          correct: "D"
        },
        {
          id: "not-nothing",
          sol: "11.RL.2.D",
          sub: "11.RL.2.D.2",
          stem: "In line 18, the phrase \"also not nothing at all\" suggests that the drift of the GPS stake is —",
          choices: [
            { letter: "A", text: "a measurement error that should be ignored" },
            { letter: "B", text: "small in size but significant as a sign" },
            { letter: "C", text: "large enough to force an evacuation" },
            { letter: "D", text: "impossible for the mentor to explain" }
          ],
          correct: "B"
        },
        {
          id: "stanza-shift",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the third stanza (lines 19–24) differ from the first stanza (lines 1–8)?",
          choices: [
            { letter: "A", text: "It shifts from scientific data to a story about a child." },
            { letter: "B", text: "It moves from outward description to the speaker's new understanding." },
            { letter: "C", text: "It replaces a hopeful tone with one of panic and alarm." },
            { letter: "D", text: "It describes the climb down instead of the climb up." }
          ],
          correct: "B"
        },
        {
          id: "wind",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "Line 8, \"a wind that does not know our names,\" implies that the speaker —",
          choices: [
            { letter: "A", text: "is lost and cannot find the right trail" },
            { letter: "B", text: "wishes the other climbers were friendlier" },
            { letter: "C", text: "expects the weather to turn dangerous soon" },
            { letter: "D", text: "feels small and unnoticed by the natural world" }
          ],
          correct: "D"
        },
        {
          id: "used-to",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Lines 19 and 20 reveal that the speaker once believed that —",
          choices: [
            { letter: "A", text: "quiet things had nothing more to offer" },
            { letter: "B", text: "volcanoes erupted without any warning" },
            { letter: "C", text: "instruments were never truly accurate" },
            { letter: "D", text: "mentors rarely told students the truth" }
          ],
          correct: "A"
        },
        {
          id: "closing-tone",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The tone of the poem's final two lines (lines 23 and 24) is best described as —",
          choices: [
            { letter: "A", text: "fearful and urgent" },
            { letter: "B", text: "playful and teasing" },
            { letter: "C", text: "calm and respectful" },
            { letter: "D", text: "bitter and resigned" }
          ],
          correct: "C"
        }
      ]
    },

    /* 5 ─ Drama · food truck */
    {
      id: "g11-rl-c107-tworoutes",
      family: "G11",
      title: "Two Routes",
      kind: "Drama · 11.RL",
      blurb: "Before dawn, two siblings argue over where to park the family food truck until a regular customer walks up.",
      level: 2,
      passage:
        "<p><em>Setting: a parking lot behind a closed hardware store, just after six in the morning. The food truck Bap and Beyond sits with its serving window shut. JI-AH PARK, nineteen, sits on the truck's back step with a laptop balanced on her knees. Her brother DANIEL, sixteen, staggers in carrying a crate of cabbages.</em></p>" +
        "<p>" + N(1) + "<strong>DANIEL</strong>: Tell me you finished the schedule, because these cabbages are judging me. " +
        N(2) + "<strong>JI-AH</strong>: I finished two schedules. That's the problem. " +
        N(3) + "<strong>DANIEL</strong> <em>(setting the crate down)</em>: Two? " +
        N(4) + "<strong>JI-AH</strong>: Plan A is Fourth and Main, same as always. We sell ninety bowls by one o'clock, we know every parking officer by name, and we go home tired and safe. Plan B is the new warehouse district out by the river. Three hundred workers, one vending machine, and no food truck within two miles. " +
        N(5) + "<strong>DANIEL</strong>: So Plan B. Obviously. " +
        N(6) + "<strong>JI-AH</strong>: Nothing is obvious when the rent on the commissary kitchen is due Friday. If we drive out there and nobody comes, we lose a whole day's sales. " +
        N(7) + "<strong>DANIEL</strong>: And if we keep parking on Main, we stay exactly the size we are forever. Umma started this truck with one recipe and a borrowed generator. She didn't play it safe. " +
        N(8) + "<strong>JI-AH</strong> <em>(closing the laptop harder than necessary)</em>: Umma also had me doing the books at fourteen so she'd know which risks she could afford. That's not the same as playing it safe. " +
        N(9) + "<em>(MR. OKAFOR, a regular in a reflective work vest, approaches with a travel mug.)</em> " +
        N(10) + "<strong>MR. OKAFOR</strong>: You two open yet, or is this a family meeting? " +
        N(11) + "<strong>DANIEL</strong>: Family meeting. Hostile one. " +
        N(12) + "<strong>MR. OKAFOR</strong> <em>(laughing)</em>: I'll wait. I'm only downtown today anyway. Next week our whole crew moves to the new distribution center by the river, and the closest lunch out there is a bag of pretzels from a machine. " +
        N(13) + "<em>(JI-AH and DANIEL look at each other.)</em> " +
        N(14) + "<strong>JI-AH</strong>: How many people are on your crew? " +
        N(15) + "<strong>MR. OKAFOR</strong>: Forty on my shift. Three shifts a day. " +
        N(16) + "<strong>JI-AH</strong> <em>(slowly reopening the laptop)</em>: What if we didn't choose? Main Street on Monday, Wednesday, and Friday. The river on Tuesday and Thursday, for one month, and we count every single bowl. " +
        N(17) + "<strong>DANIEL</strong>: A test run. Like a real business. " +
        N(18) + "<strong>JI-AH</strong>: Like Umma's business. <em>(to MR. OKAFOR)</em> Can you tell your crew we'll be there Tuesday at eleven? " +
        N(19) + "<strong>MR. OKAFOR</strong>: I'll tell them to skip the pretzels. " +
        N(20) + "<em>(DANIEL lifts the crate again, grinning, as JI-AH swings open the serving window and the first morning light falls across the menu board.)</em>" +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the scene between Ji-ah and Daniel most clearly develop?",
          choices: [
            { letter: "A", text: "Family businesses should avoid any change in routine." },
            { letter: "B", text: "Younger siblings usually see problems more clearly." },
            { letter: "C", text: "Customers care more about price than about service." },
            { letter: "D", text: "Good risks can be taken with careful planning." }
          ],
          correct: "D"
        },
        {
          id: "siblings",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which statement best describes the difference between Ji-ah and Daniel at the start of the scene?",
          choices: [
            { letter: "A", text: "Ji-ah wants to sell the truck, while Daniel wants to keep it." },
            { letter: "B", text: "Ji-ah weighs costs cautiously, while Daniel favors bold change." },
            { letter: "C", text: "Ji-ah trusts her mother's advice, while Daniel ignores it." },
            { letter: "D", text: "Ji-ah enjoys cooking, while Daniel prefers keeping the books." }
          ],
          correct: "B"
        },
        {
          id: "laptop",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "The stage direction in sentence 8, in which Ji-ah closes the laptop \"harder than necessary,\" mainly reveals that she —",
          choices: [
            { letter: "A", text: "is frustrated by Daniel's version of their mother" },
            { letter: "B", text: "has decided to give up on both schedules" },
            { letter: "C", text: "is worried that the laptop has stopped working" },
            { letter: "D", text: "wants Mr. Okafor to leave the parking lot" }
          ],
          correct: "A"
        },
        {
          id: "okafor",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does Mr. Okafor's arrival function in the structure of the scene?",
          choices: [
            { letter: "A", text: "It interrupts the argument and ends the scene without a decision." },
            { letter: "B", text: "It introduces a new conflict between the siblings and a customer." },
            { letter: "C", text: "It supplies information that leads the siblings to a compromise." },
            { letter: "D", text: "It reveals that the siblings' mother has sold the business." }
          ],
          correct: "C"
        },
        {
          id: "cabbages",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "Daniel's opening complaint that \"these cabbages are judging me\" (sentence 1) creates a tone that is —",
          choices: [
            { letter: "A", text: "lightly humorous" },
            { letter: "B", text: "deeply anxious" },
            { letter: "C", text: "coldly formal" },
            { letter: "D", text: "openly bitter" }
          ],
          correct: "A"
        },
        {
          id: "books",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 8, Ji-ah says that doing the books \"is not the same as playing it safe.\" She most nearly means that —",
          choices: [
            { letter: "A", text: "their mother never took any risks with money" },
            { letter: "B", text: "Daniel should be the one keeping the records" },
            { letter: "C", text: "knowing the numbers made bold choices possible" },
            { letter: "D", text: "the truck has never earned enough to pay rent" }
          ],
          correct: "C"
        },
        {
          id: "umma",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Ji-ah's reply \"Like Umma's business\" (sentence 18) suggests that she now sees the test run as —",
          choices: [
            { letter: "A", text: "a rejection of the way her mother worked" },
            { letter: "B", text: "a temporary plan she expects to fail" },
            { letter: "C", text: "a way to avoid making any real decision" },
            { letter: "D", text: "a continuation of her mother's careful daring" }
          ],
          correct: "D"
        },
        {
          id: "light",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "The final stage direction, in which morning light falls across the menu board, most likely symbolizes —",
          choices: [
            { letter: "A", text: "the end of the family's business" },
            { letter: "B", text: "a hopeful new start for the truck" },
            { letter: "C", text: "the heat of a long workday ahead" },
            { letter: "D", text: "Mr. Okafor's plan to change jobs" }
          ],
          correct: "B"
        }
      ]
    },

    /* 6 ─ Informational · volcanoes */
    {
      id: "g11-ri-c107-eruptionsigns",
      family: "G11",
      title: "Hearing the Knock",
      kind: "Informational · 11.RI",
      blurb: "How volcano observatories combine earthquakes, ground swelling and gas readings to judge when a mountain is waking.",
      level: 2,
      passage:
        "<p>" + N(1) + "For most of human history, an eruption arrived like a stranger at the door: sudden, unannounced, and impossible to turn away. " +
        N(2) + "Today, scientists at volcano observatories around the world try to hear the knock before it comes. " +
        N(3) + "They cannot stop an eruption, and they rarely know the exact day one will begin, but by watching several kinds of evidence at once, they can often tell when a quiet volcano is waking up.</p>" +
        "<p><strong>Listening to the Rock</strong> " + N(4) + "The first clue is usually shaking. " +
        N(5) + "As magma pushes upward, it cracks the surrounding rock, producing swarms of small earthquakes that people at the surface may never feel. " +
        N(6) + "Seismometers placed on a volcano's slopes record these tremors continuously. " +
        N(7) + "A sudden increase in their number, or a shift in their depth from deep to shallow, can suggest that magma is rising. " +
        N(8) + "Some volcanoes also produce a steady, humming vibration called tremor, which scientists link to the movement of fluids and gas underground.</p>" +
        "<p><strong>Watching the Ground</strong> " + N(9) + "The second clue is the shape of the ground itself. " +
        N(10) + "When magma collects beneath a volcano, the surface can swell slightly, like a balloon being slowly inflated beneath a blanket. " +
        N(11) + "GPS stations anchored in the rock can detect movements of just a few millimeters, and instruments called tiltmeters measure tiny changes in the slope of the land. " +
        N(12) + "Satellites add a wider view by bouncing radar signals off the ground on repeated passes and comparing the results to map the bulge.</p>" +
        "<p><strong>Sampling the Air</strong> " + N(13) + "The third clue rises into the air. " +
        N(14) + "Magma holds dissolved gases, including water vapor, carbon dioxide, and sulfur dioxide, and as it moves closer to the surface, more of these gases escape. " +
        N(15) + "Researchers measure the gases with ground sensors, aircraft, and even drones. " +
        N(16) + "A rise in sulfur dioxide often suggests that fresh magma is near the surface, although a drop is not always good news; it can mean that the volcano's vents have become blocked and pressure is building.</p>" +
        "<p><strong>Putting It Together</strong> " + N(17) + "No single measurement is enough. " +
        N(18) + "Earthquakes can happen for reasons unrelated to magma, and ground can swell and then settle without any eruption at all. " +
        N(19) + "For that reason, forecasters look for several signals changing together. " +
        N(20) + "In the United States, observatories translate their judgment into four alert levels for the public: Normal, Advisory, Watch, and Warning. " +
        N(21) + "These levels describe what a volcano is doing now, not a promise about what it will do next.</p>" +
        "<p>" + N(22) + "The approach has saved lives. " +
        N(23) + "In 1991, scientists monitoring Mount Pinatubo in the Philippines recorded growing earthquake swarms and gas emissions, and their warnings led to the evacuation of tens of thousands of people before one of the largest eruptions of the twentieth century. " +
        N(24) + "Even so, volcanologists stress humility. " +
        N(25) + "Every volcano behaves a little differently, and the best forecast is still a probability, not a prophecy.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the central idea of the article on volcano monitoring?",
          choices: [
            { letter: "A", text: "Satellites have replaced ground instruments as the best way to study volcanoes." },
            { letter: "B", text: "Combining several kinds of evidence helps scientists anticipate eruptions." },
            { letter: "C", text: "Most eruptions can now be predicted to the exact day and hour." },
            { letter: "D", text: "Rising sulfur dioxide is the only reliable sign of a coming eruption." }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize the sections that follow sentence 3?",
          choices: [
            { letter: "A", text: "by tracing the history of one volcano from birth to eruption" },
            { letter: "B", text: "by comparing volcanoes found in several different countries" },
            { letter: "C", text: "by listing the dangers of eruptions from least to most severe" },
            { letter: "D", text: "by explaining three types of clues and then how they are combined" }
          ],
          correct: "D"
        },
        {
          id: "balloon",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 10, comparing the swelling ground to a balloon inflated beneath a blanket helps the reader understand that —",
          choices: [
            { letter: "A", text: "volcanoes are hollow and filled mostly with air" },
            { letter: "B", text: "scientists must cover instruments to protect them" },
            { letter: "C", text: "the rise is gradual and partly hidden from view" },
            { letter: "D", text: "the ground will burst open as soon as it swells" }
          ],
          correct: "C"
        },
        {
          id: "gas-drop",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, why might a drop in sulfur dioxide fail to be reassuring?",
          choices: [
            { letter: "A", text: "Blocked vents may be trapping gas and building pressure." },
            { letter: "B", text: "Sulfur dioxide sensors often fail in very cold weather." },
            { letter: "C", text: "A drop means the magma has already reached the surface." },
            { letter: "D", text: "Carbon dioxide always rises when sulfur dioxide falls." }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "The author's attitude toward volcano forecasting is best described as —",
          choices: [
            { letter: "A", text: "appreciative but realistic about its limits" },
            { letter: "B", text: "doubtful that it has ever helped anyone" },
            { letter: "C", text: "certain that it will soon be perfect" },
            { letter: "D", text: "indifferent to its effect on the public" }
          ],
          correct: "A"
        },
        {
          id: "pinatubo",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the example of Mount Pinatubo in sentence 23 mainly to —",
          choices: [
            { letter: "A", text: "show that eruptions in Asia are larger than elsewhere" },
            { letter: "B", text: "explain how the four U.S. alert levels were created" },
            { letter: "C", text: "provide evidence that monitoring can save lives" },
            { letter: "D", text: "argue that evacuations are usually unnecessary" }
          ],
          correct: "C"
        },
        {
          id: "prophecy",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 25, the contrast between \"a probability\" and \"a prophecy\" shows that a volcano forecast is —",
          choices: [
            { letter: "A", text: "a guess that scientists rarely take seriously" },
            { letter: "B", text: "an estimate of likelihood rather than a certainty" },
            { letter: "C", text: "a belief handed down about the volcano's future" },
            { letter: "D", text: "a guarantee based on centuries of written records" }
          ],
          correct: "B"
        },
        {
          id: "several-signals",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "Which sentence best explains why forecasters look for several signals changing together?",
          choices: [
            { letter: "A", text: "\"Seismometers placed on a volcano's slopes record these tremors continuously.\"" },
            { letter: "B", text: "\"Researchers measure the gases with ground sensors, aircraft, and even drones.\"" },
            { letter: "C", text: "\"These levels describe what a volcano is doing now, not a promise about what it will do next.\"" },
            { letter: "D", text: "\"Earthquakes can happen for reasons unrelated to magma, and ground can swell and then settle without any eruption at all.\"" }
          ],
          correct: "D"
        }
      ]
    },

    /* 7 ─ Informational · mechanic's garage */
    {
      id: "g11-ri-c107-checkengine",
      family: "G11",
      title: "The Little Amber Light",
      kind: "Informational · 11.RI",
      blurb: "What the check engine light means, how trouble codes work, and why a code is only the start of a repair.",
      level: 1,
      passage:
        "<p>" + N(1) + "Few dashboard symbols cause as much worry as the small amber engine outline known as the check engine light. " +
        N(2) + "It can mean almost anything, from a loose gas cap to a serious engine problem, and many drivers respond by either panicking or ignoring it. " +
        N(3) + "Understanding where the light comes from can help a driver choose a calmer and smarter response.</p>" +
        "<p><strong>A Computer That Watches Itself</strong> " + N(4) + "Modern cars are run partly by computers that monitor dozens of sensors, measuring things such as the oxygen in the exhaust, the temperature of the engine, and the timing of each spark. " +
        N(5) + "Since the 1996 model year, every new car and light truck sold in the United States has been required to use a standard system called OBD-II, short for on-board diagnostics, second generation. " +
        N(6) + "When the computer notices a reading outside its expected range, it stores a trouble code and, for many problems, turns on the check engine light.</p>" +
        "<p><strong>Reading the Code</strong> " + N(7) + "Each OBD-II code has five characters. " +
        N(8) + "The first is a letter that names the general area: P for powertrain, which includes the engine and transmission; B for body; C for chassis; and U for the network that lets the car's computers communicate. " +
        N(9) + "The four characters that follow point to a more specific problem. " +
        N(10) + "A mechanic, or a driver with an inexpensive code reader, can retrieve the code by plugging into a port that is usually located beneath the dashboard near the steering column.</p>" +
        "<p><strong>A Clue, Not a Verdict</strong> " + N(11) + "A trouble code does not always name the broken part. " +
        N(12) + "The common code P0420, for example, means that the system has found the catalytic converter working below its expected efficiency, but the cause could be the converter itself, a faulty oxygen sensor, or a leak in the exhaust. " +
        N(13) + "For that reason, experienced mechanics treat a code as the start of an investigation rather than the end of one. " +
        N(14) + "Replacing the first part a code mentions, without further testing, can cost money and still leave the problem unsolved.</p>" +
        "<p><strong>Steady or Flashing</strong> " + N(15) + "The way the light behaves also matters. " +
        N(16) + "A steady light usually signals a problem that should be checked soon but is not an emergency. " +
        N(17) + "A flashing light, however, typically warns of a severe misfire, in which fuel is not burning properly in one or more cylinders. " +
        N(18) + "Unburned fuel can overheat and damage the catalytic converter, an expensive repair, so drivers are advised to reduce speed and have the car inspected as soon as possible.</p>" +
        "<p><strong>Sometimes It Is Simple</strong> " + N(19) + "Not every code means trouble under the hood. " +
        N(20) + "A gas cap that is not tightened can let fuel vapor escape and trigger a code in the evaporative emissions system. " +
        N(21) + "Tightening the cap may turn the light off after several days of driving. " +
        N(22) + "In every case, though, the light is the car's way of asking a question, and the safest drivers are the ones who take the time to find the answer.</p>",
      claims: [
        {
          id: "main-idea",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the main idea of the article about the check engine light?",
          choices: [
            { letter: "A", text: "Drivers should replace the catalytic converter whenever the light appears." },
            { letter: "B", text: "The check engine light is usually caused by a loose gas cap." },
            { letter: "C", text: "The light signals a stored code that should be understood and investigated." },
            { letter: "D", text: "Only professional mechanics are able to read OBD-II trouble codes." }
          ],
          correct: "C"
        },
        {
          id: "letter-p",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "According to the passage, what does the letter P at the start of a trouble code indicate?",
          choices: [
            { letter: "A", text: "The problem involves the engine or transmission." },
            { letter: "B", text: "The problem involves the car's computer network." },
            { letter: "C", text: "The problem was found in the body of the car." },
            { letter: "D", text: "The problem is serious and requires a tow truck." }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "How do the headings, such as \"A Clue, Not a Verdict,\" help organize the article?",
          choices: [
            { letter: "A", text: "They list the steps for repairing an engine in order." },
            { letter: "B", text: "They compare older cars with newer cars section by section." },
            { letter: "C", text: "They present arguments for and against using code readers." },
            { letter: "D", text: "They divide the topic into separate aspects of the warning light." }
          ],
          correct: "D"
        },
        {
          id: "investigation",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 13, the author contrasts the start of an investigation with the end of one mainly to emphasize that —",
          choices: [
            { letter: "A", text: "mechanics often take too long to finish a repair" },
            { letter: "B", text: "a code should lead to further testing before repairs" },
            { letter: "C", text: "drivers should never try to read a code themselves" },
            { letter: "D", text: "investigations cost more than simply replacing parts" }
          ],
          correct: "B"
        },
        {
          id: "flashing",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "Which sentence best explains why a flashing light calls for faster action than a steady one?",
          choices: [
            { letter: "A", text: "Sentence 15" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 19" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The author's main purpose in writing the article is to —",
          choices: [
            { letter: "A", text: "persuade drivers to buy their own code readers" },
            { letter: "B", text: "inform drivers so they can respond sensibly to the light" },
            { letter: "C", text: "criticize automakers for confusing dashboard symbols" },
            { letter: "D", text: "entertain readers with stories of costly repair mistakes" }
          ],
          correct: "B"
        },
        {
          id: "diagnostics",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word diagnostics in sentence 5 comes from the Greek prefix dia-, meaning through, and a root meaning to know. Based on these parts, diagnostics refers to —",
          choices: [
            { letter: "A", text: "replacing broken parts quickly" },
            { letter: "B", text: "driving a car across long distances" },
            { letter: "C", text: "identifying a problem by examining it closely" },
            { letter: "D", text: "recording the history of a vehicle's owners" }
          ],
          correct: "C"
        },
        {
          id: "verdict",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In the heading \"A Clue, Not a Verdict,\" the word verdict most nearly means —",
          choices: [
            { letter: "A", text: "a final judgment" },
            { letter: "B", text: "an early warning" },
            { letter: "C", text: "a costly repair" },
            { letter: "D", text: "a hidden detail" }
          ],
          correct: "A"
        }
      ]
    },

    /* 8 ─ Vocabulary · science fair */
    {
      id: "g11-rv-c107-judgingday",
      family: "G11",
      title: "Judging Day",
      kind: "Vocabulary · 11.RV",
      blurb: "Two judges question Leilani about her creek-water filter, with six target words in context.",
      level: 1,
      passage:
        "<p>" + N(1) + "At the Harbor County Regional Science Fair, judging began at nine, but Leilani Kahale had been standing beside her table since seven-thirty, rehearsing under her breath. " +
        N(2) + "Her project tested whether filters made from sand, gravel, and crushed charcoal could clear muddy creek water, and her <strong>preliminary</strong> trials in October, the rough early tests she ran before settling on a final design, had been a mess of overflowing cups and soaked paper towels. " +
        N(3) + "By February she had a working model built from three stacked soda bottles.</p>" +
        "<p>" + N(4) + "The first judge, a retired chemist named Mr. Abernathy, did not seem interested in the bottles. " +
        N(5) + "He wanted to see her data. " +
        N(6) + "Leilani showed him her chart of cloudiness readings, and he tapped one point that sat far above the others. " +
        N(7) + "\"What's this?\" he asked. " +
        N(8) + "Leilani explained that the reading was an <strong>anomaly</strong>, a result that did not fit the pattern of the other twenty-nine trials, and that she suspected a cracked bottle had let unfiltered water leak through. " +
        N(9) + "She had marked it on the chart rather than quietly deleting it.</p>" +
        "<p>" + N(10) + "\"Did you <strong>replicate</strong> the trial after you fixed the bottle?\" he asked. " +
        N(11) + "She had: she ran the same test three more times with a new bottle, following identical steps, and all three results matched the pattern. " +
        N(12) + "Mr. Abernathy nodded slowly. " +
        N(13) + "He said her method was <strong>rigorous</strong>, and when Leilani looked uncertain, he explained that he meant thorough, strict, and careful, the kind of work that leaves nothing to luck.</p>" +
        "<p>" + N(14) + "The second judge was harder to please. " +
        N(15) + "She pointed out that Leilani had tested water from only one creek, so the results might not hold for water with different kinds of mud or pollution. " +
        N(16) + "Leilani felt her face grow warm. " +
        N(17) + "She wanted to argue, but the judge was right, and she knew it. " +
        N(18) + "So she chose to <strong>concede</strong> the point, admitting the weakness plainly and adding that testing water from three other creeks would be her next step.</p>" +
        "<p>" + N(19) + "Later, her teacher, Ms. Delgado, asked how the judging had gone. " +
        N(20) + "Leilani gave a <strong>candid</strong> answer, open and honest even about the part that embarrassed her: \"One judge found a hole in my project, and I couldn't fill it.\" " +
        N(21) + "Ms. Delgado smiled and said that finding the holes in your own work, or at least admitting them, was what scientists did every day.</p>" +
        "<p>" + N(22) + "Leilani placed second in environmental science. " +
        N(23) + "On the bus home, she opened her notebook to a clean page and wrote the names of three creeks at the top.</p>",
      claims: [
        {
          id: "preliminary",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the phrase set off by commas shows that preliminary trials are —",
          choices: [
            { letter: "A", text: "early tests done before the final design" },
            { letter: "B", text: "official trials observed by the judges" },
            { letter: "C", text: "the most successful tests in a project" },
            { letter: "D", text: "experiments copied from another student" }
          ],
          correct: "A"
        },
        {
          id: "anomaly",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which words from sentence 8 best clarify the meaning of anomaly?",
          choices: [
            { letter: "A", text: "\"Leilani explained that the reading\"" },
            { letter: "B", text: "\"she suspected a cracked bottle\"" },
            { letter: "C", text: "\"let unfiltered water leak through\"" },
            { letter: "D", text: "\"a result that did not fit the pattern\"" }
          ],
          correct: "D"
        },
        {
          id: "replicate",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word replicate in sentence 10 begins with the prefix re-, as in redo and rewrite. Based on this prefix and sentence 11, replicate means to —",
          choices: [
            { letter: "A", text: "explain a result to a judge" },
            { letter: "B", text: "repeat something in the same way" },
            { letter: "C", text: "repair a broken piece of equipment" },
            { letter: "D", text: "record data on a new chart" }
          ],
          correct: "B"
        },
        {
          id: "rigorous",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 13, Mr. Abernathy's explanation shows that rigorous means —",
          choices: [
            { letter: "A", text: "quick and efficient" },
            { letter: "B", text: "creative and original" },
            { letter: "C", text: "thorough and strict" },
            { letter: "D", text: "simple and inexpensive" }
          ],
          correct: "C"
        },
        {
          id: "concede",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 18, the word concede most nearly means to —",
          choices: [
            { letter: "A", text: "deny" },
            { letter: "B", text: "ignore" },
            { letter: "C", text: "admit" },
            { letter: "D", text: "repeat" }
          ],
          correct: "C"
        },
        {
          id: "candid",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 20, the words that follow candid show that it most nearly means —",
          choices: [
            { letter: "A", text: "frank and truthful" },
            { letter: "B", text: "shy and quiet" },
            { letter: "C", text: "proud and boastful" },
            { letter: "D", text: "vague and unclear" }
          ],
          correct: "A"
        },
        {
          id: "marked",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Leilani's decision in sentence 9 to mark the unusual reading rather than delete it shows that she —",
          choices: [
            { letter: "A", text: "did not understand what the reading meant" },
            { letter: "B", text: "hoped the judges would not notice the point" },
            { letter: "C", text: "was too rushed to clean up her data" },
            { letter: "D", text: "valued honesty in reporting her results" }
          ],
          correct: "D"
        },
        {
          id: "three-creeks",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The final sentence, in which Leilani writes the names of three creeks, mainly shows that she —",
          choices: [
            { letter: "A", text: "plans to give up on water filters" },
            { letter: "B", text: "intends to address the judge's criticism" },
            { letter: "C", text: "has forgotten which creek she tested" },
            { letter: "D", text: "wants to visit the creeks just for fun" }
          ],
          correct: "B"
        }
      ]
    },

    /* 9 ─ Paired texts · food truck */
    {
      id: "g11-dsr-c107-truckzones",
      family: "G11",
      title: "Lunch on Linden Street",
      kind: "Paired texts · 11.DSR",
      blurb: "A town council summary and a truck owner's op-ed weigh a proposal to keep food trucks away from restaurants.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Ashford Town Council, Summary of Public Hearing on Proposal 14</strong></p>" +
        "<p>" + N(1) + "The council heard public comment on Proposal 14, which would allow food trucks to operate downtown only in four designated zones and would require each truck to park at least 200 feet from the entrance of any restaurant. " +
        N(2) + "Councilmember Ruiz, who introduced the proposal, said that downtown restaurant owners pay property taxes and year-round rent, while trucks can arrive during the busiest hours and leave when business slows. " +
        N(3) + "She described the buffer as a way to \"keep the playing field level.\" " +
        N(4) + "Representatives of the Downtown Merchants Association reported that three restaurants on Linden Street saw lunch sales drop by an estimated 10 to 15 percent last summer, though they acknowledged that a construction project closed part of the street during the same months. " +
        N(5) + "Several residents spoke in favor of the trucks, noting that the zones in the draft map are located mostly on side streets with little foot traffic. " +
        N(6) + "The town's planning director stated that crowding near the Linden Street crosswalk had produced two complaints from the fire marshal about blocked access. " +
        N(7) + "Councilmember Osei asked staff to study whether the zones could be relocated to busier blocks while keeping the crosswalk clear. " +
        N(8) + "The council voted 5–2 to delay a final decision until its June meeting so that the planning department could revise the map.</p>" +
        "<p><strong>Text 2 — Op-Ed in the Ashford Ledger: \"Two Hundred Feet from Fair\"</strong></p>" +
        "<p>" + N(9) + "I have run a taco truck in Ashford for six years, and I pay for a business license, a health inspection, a fire inspection, and a parking permit, so I was surprised to hear at last week's hearing that trucks somehow do not pay their share. " +
        N(10) + "Proposal 14 is described as leveling the playing field, but a 200-foot buffer does not level anything; it simply moves trucks to streets where few customers walk. " +
        N(11) + "The draft map proves the point. " +
        N(12) + "Three of the four zones sit behind the post office and the parking garage, where the only lunchtime crowd is pigeons. " +
        N(13) + "Supporters point to lower restaurant sales on Linden Street last summer. " +
        N(14) + "What they mention less often is that half the street was closed for months while crews replaced a water main. " +
        N(15) + "Customers did not stay away because of my truck; they stayed away because they could not reach the door. " +
        N(16) + "The fire marshal's concern about the crosswalk is real, and I would gladly park farther from it. " +
        N(17) + "But a safety problem at one corner is not a reason for a rule that covers the whole downtown. " +
        N(18) + "I ask the council to revise the map so that trucks and restaurants can share the same busy blocks, as they do in many cities, and to judge us by what we actually contribute.</p>",
      claims: [
        {
          id: "both-acknowledge",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which point do the council summary and the op-ed both acknowledge?",
          choices: [
            { letter: "A", text: "Restaurants on Linden Street pay no property taxes." },
            { letter: "B", text: "The draft zones are located on the busiest blocks downtown." },
            { letter: "C", text: "Construction affected Linden Street during the sales decline." },
            { letter: "D", text: "The council has already approved the 200-foot buffer." }
          ],
          correct: "C"
        },
        {
          id: "level-field",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How does the op-ed writer respond to Councilmember Ruiz's description of the buffer in sentence 3?",
          choices: [
            { letter: "A", text: "He argues that it would push trucks away from customers instead of leveling anything." },
            { letter: "B", text: "He agrees that trucks pay less and offers to pay a higher yearly fee." },
            { letter: "C", text: "He claims that the restaurants actually earned more money last summer." },
            { letter: "D", text: "He suggests that the council members have never visited a food truck." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "The two texts differ mainly because Text 1 —",
          choices: [
            { letter: "A", text: "argues against the proposal, while Text 2 supports it" },
            { letter: "B", text: "records several viewpoints, while Text 2 argues for one" },
            { letter: "C", text: "presents only sales data, while Text 2 presents only stories" },
            { letter: "D", text: "addresses restaurant owners, while Text 2 addresses inspectors" }
          ],
          correct: "B"
        },
        {
          id: "weaken-sales",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which detail recorded in Text 1 does the op-ed writer use to weaken the claim about lost restaurant sales?",
          choices: [
            { letter: "A", text: "the fire marshal's complaints about blocked access" },
            { letter: "B", text: "the 5–2 vote to delay a final decision until June" },
            { letter: "C", text: "Councilmember Osei's request for a new staff study" },
            { letter: "D", text: "the admission that construction closed part of the street" }
          ],
          correct: "D"
        },
        {
          id: "pigeons",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "In sentence 12, the writer's remark that \"the only lunchtime crowd is pigeons\" creates a tone that is —",
          choices: [
            { letter: "A", text: "fearful" },
            { letter: "B", text: "admiring" },
            { letter: "C", text: "neutral" },
            { letter: "D", text: "mocking" }
          ],
          correct: "D"
        },
        {
          id: "concession",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "In sentences 16 and 17, the op-ed writer concedes one point mainly in order to —",
          choices: [
            { letter: "A", text: "admit that the proposal is fair after all" },
            { letter: "B", text: "separate a real safety issue from a broader rule" },
            { letter: "C", text: "show that the fire marshal opposes the trucks" },
            { letter: "D", text: "suggest that the crosswalk should be removed" }
          ],
          correct: "B"
        },
        {
          id: "support-request",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which detail from Text 1 would the op-ed writer most likely use to support his request in sentence 18?",
          choices: [
            { letter: "A", text: "Councilmember Osei's request to study moving the zones to busier blocks" },
            { letter: "B", text: "Councilmember Ruiz's statement that restaurants pay year-round rent" },
            { letter: "C", text: "the merchants' estimate of a 10 to 15 percent drop in lunch sales" },
            { letter: "D", text: "the planning director's report about crowding near the crosswalk" }
          ],
          correct: "A"
        },
        {
          id: "conclude",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A council member who read both texts could most reasonably conclude that —",
          choices: [
            { letter: "A", text: "food trucks should be banned from the downtown area entirely" },
            { letter: "B", text: "restaurant losses were caused entirely by the food trucks" },
            { letter: "C", text: "revising the zone map might address safety without isolating trucks" },
            { letter: "D", text: "the fire marshal's complaints were exaggerated and can be ignored" }
          ],
          correct: "C"
        }
      ]
    },

    /* 10 ─ Paired texts · volcanoes */
    {
      id: "g11-dsr-c107-steamfields",
      family: "G11",
      title: "The Smell That Fades",
      kind: "Paired texts · 11.DSR",
      blurb: "A hiker's journal and a park safety bulletin describe the same steaming vents from two angles.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From Arjun's Travel Journal</strong></p>" +
        "<p>" + N(1) + "Day three at Mount Teverin, and I finally understand why my little sister calls this trip \"the smelly vacation.\" " +
        N(2) + "The trail to the Steam Fields starts in an ordinary pine forest, but after a mile the trees thin out and the ground turns the color of weak tea and spilled mustard. " +
        N(3) + "Then you smell it: rotten eggs, strong enough to make your eyes water. " +
        N(4) + "Our guide, Ranger Bettencourt, said the smell comes from a gas the volcano releases through cracks called fumaroles, and that the yellow crust around them is sulfur. " +
        N(5) + "Steam hissed out of the vents like a kettle someone had forgotten on the stove. " +
        N(6) + "A boy in our group stepped off the boardwalk to get a closer photo, and the ranger called him back so sharply that everyone froze. " +
        N(7) + "She explained that the ground near the vents can be a thin crust over boiling mud, and that people have been badly burned breaking through it. " +
        N(8) + "Later she told us something stranger: after a while, the smell seems to fade, but that does not mean the gas is gone. " +
        N(9) + "I noticed it myself on the way back, when the air seemed almost normal even though we were still close to the vents. " +
        N(10) + "I'm glad she told us. " +
        N(11) + "Otherwise I would have taken it as good news.</p>" +
        "<p><strong>Text 2 — Mount Teverin National Park: Volcanic Gas Safety</strong></p>" +
        "<p>" + N(12) + "Volcanic areas of the park release several gases that can be harmful at high concentrations, even on days when the vents look calm and the air seems clear. " +
        N(13) + "Hydrogen sulfide produces the familiar rotten-egg odor, but at higher concentrations it can overwhelm the sense of smell, so visitors may stop noticing it even as their exposure increases. " +
        N(14) + "Carbon dioxide has no color or odor and is heavier than air, so it can collect in low spots, such as hollows and depressions, especially on calm days. " +
        N(15) + "Sulfur dioxide can irritate the eyes, throat, and lungs, and it poses a particular risk to people with asthma or heart conditions. " +
        N(16) + "To stay safe, remain on marked trails and boardwalks at all times; ground near vents may look solid but can collapse into scalding water or mud. " +
        N(17) + "Do not enter low areas, and do not lie or sit on the ground in the Steam Fields. " +
        N(18) + "Leave the area immediately if you feel dizzy or short of breath or develop a headache. " +
        N(19) + "Rangers check gas levels daily and may close trails without notice when readings rise, so read the posted signs at each trailhead. " +
        N(20) + "Visitors with breathing conditions should check with the visitor center before hiking.</p>",
      claims: [
        {
          id: "shared",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea appears in both the journal and the safety bulletin?",
          choices: [
            { letter: "A", text: "Carbon dioxide gathers in hollows on calm days." },
            { letter: "B", text: "Ground near the vents can give way to dangerous heat." },
            { letter: "C", text: "Visitors with asthma face the greatest risk of all." },
            { letter: "D", text: "Trails close whenever the smell becomes too strong." }
          ],
          correct: "B"
        },
        {
          id: "explains-fade",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which sentence from Text 2 best explains what Arjun noticed in sentence 9?",
          choices: [
            { letter: "A", text: "Sentence 12" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "C"
        },
        {
          id: "purposes",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How does the purpose of Text 1 differ from the purpose of Text 2?",
          choices: [
            { letter: "A", text: "Text 1 records a personal experience; Text 2 gives safety instructions." },
            { letter: "B", text: "Text 1 warns visitors about gases; Text 2 describes a family trip." },
            { letter: "C", text: "Text 1 argues the park should close; Text 2 argues it should stay open." },
            { letter: "D", text: "Text 1 explains volcano science; Text 2 tells the history of the park." }
          ],
          correct: "A"
        },
        {
          id: "called-back",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Based on both texts, why did Ranger Bettencourt call the boy back so sharply?",
          choices: [
            { letter: "A", text: "He was blocking other visitors from taking photos." },
            { letter: "B", text: "He had wandered into a hollow full of carbon dioxide." },
            { letter: "C", text: "Photography is not permitted in the Steam Fields." },
            { letter: "D", text: "The ground off the boardwalk could collapse into scalding mud." }
          ],
          correct: "D"
        },
        {
          id: "kettle",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 5, comparing the steam to \"a kettle someone had forgotten on the stove\" mainly suggests that the vents —",
          choices: [
            { letter: "A", text: "hiss constantly with a familiar, unattended sound" },
            { letter: "B", text: "are about to explode without any warning" },
            { letter: "C", text: "were built by the park to heat visitors' water" },
            { letter: "D", text: "produce steam only when visitors are present" }
          ],
          correct: "A"
        },
        {
          id: "bulletin-structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How is Text 2 mainly organized?",
          choices: [
            { letter: "A", text: "as a story told in the order events happened" },
            { letter: "B", text: "as a comparison of two different national parks" },
            { letter: "C", text: "as descriptions of hazards followed by safety rules" },
            { letter: "D", text: "as a problem followed by several rejected solutions" }
          ],
          correct: "C"
        },
        {
          id: "low-areas",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to Text 2, why should visitors stay out of low areas in the Steam Fields?",
          choices: [
            { letter: "A", text: "Hydrogen sulfide is lighter than air and rises from them." },
            { letter: "B", text: "Low areas are where most of the sulfur crust forms." },
            { letter: "C", text: "Rangers cannot see visitors who walk into hollows." },
            { letter: "D", text: "An odorless, heavy gas can collect in those spots." }
          ],
          correct: "D"
        },
        {
          id: "good-news",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Using both texts, a reader can conclude that the \"good news\" Arjun mentions in sentence 11 would have been —",
          choices: [
            { letter: "A", text: "accurate, because the gas had blown away" },
            { letter: "B", text: "mistaken, because a fading smell does not mean less gas" },
            { letter: "C", text: "accurate, because the boardwalk was on safe ground" },
            { letter: "D", text: "mistaken, because the trail had already been closed" }
          ],
          correct: "B"
        }
      ]
    },

    /* 11 ─ Functional text · science fair */
    {
      id: "g11-ri-c107-fairguidelines",
      family: "G11",
      title: "Regional Fair Entry Guidelines",
      kind: "Functional text · 11.RI",
      blurb: "Dates, display limits, safety review and judging rules for a regional science and engineering fair.",
      level: 1,
      passage:
        "<p><strong>Calloway Regional Science and Engineering Fair: Entry Guidelines</strong></p>" +
        "<p>" + N(1) + "The Calloway Regional Science and Engineering Fair is open to students in grades 9 through 12 who attend a public, private, or home school in Calloway, Brandt, or Linwood counties. " +
        N(2) + "Students may enter as individuals or as teams of up to three members.</p>" +
        "<p><strong>Key Dates</strong> " + N(3) + "Online registration opens January 6 and closes at 11:59 p.m. on February 7. " +
        N(4) + "Projects that require safety review (see below) must submit research plans by January 20, before any experimentation begins. " +
        N(5) + "Setup takes place Friday, March 14, from 3:00 to 7:00 p.m.; judging begins Saturday, March 15, at 8:30 a.m. " +
        N(6) + "Late registrations will not be accepted for any reason.</p>" +
        "<p><strong>Display Rules</strong> " + N(7) + "Each project receives one table space. " +
        N(8) + "Displays may not exceed 76 centimeters deep, 122 centimeters wide, and 274 centimeters tall, measured from the floor. " +
        N(9) + "Glass containers, open flames, and live animals are not permitted at the display, though photographs of them are welcome. " +
        N(10) + "Any food shown at the display must be sealed and may not be eaten.</p>" +
        "<p><strong>Safety Review</strong> " + N(11) + "Projects involving human participants, vertebrate animals, bacteria or mold, or hazardous chemicals must be approved by the Safety Review Committee before research begins. " +
        N(12) + "Surveys of classmates count as human-participant research and require signed permission from a parent or guardian of each participant under 18. " +
        N(13) + "Projects that skip a required review will be disqualified, even if the research was performed safely.</p>" +
        "<p><strong>Judging</strong> " + N(14) + "Each project is scored by at least two judges on a 100-point scale: research question (10 points), design and methodology (30 points), data collection and analysis (25 points), creativity (15 points), and presentation (20 points). " +
        N(15) + "Students must be present at their displays from 8:30 a.m. until noon on judging day. " +
        N(16) + "A student who is absent when judges arrive will receive one additional visit; a project with no presenter after the second visit will not be ranked.</p>" +
        "<p><strong>Awards</strong> " + N(17) + "First-, second-, and third-place awards are given in each of eight categories. " +
        N(18) + "The two highest-scoring projects overall advance to the state fair in April, with travel costs covered by the Calloway Education Foundation. " +
        N(19) + "Special awards from local organizations, such as the county water authority and the regional medical center, are announced at the closing ceremony at 4:00 p.m. " +
        N(20) + "Students do not need to apply separately for special awards; every eligible project is considered automatically.</p>" +
        "<p><strong>Questions</strong> " + N(21) + "Contact the fair coordinator at the Calloway County Schools central office, and please allow two business days for a reply.</p>",
      claims: [
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "These guidelines are written mainly for —",
          choices: [
            { letter: "A", text: "judges who score projects at the state fair" },
            { letter: "B", text: "parents who volunteer during setup day" },
            { letter: "C", text: "teachers who coach the school science club" },
            { letter: "D", text: "high school students planning to enter projects" }
          ],
          correct: "D"
        },
        {
          id: "survey",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the guidelines, a student who wants to survey classmates about their sleep habits must —",
          choices: [
            { letter: "A", text: "get review approval and parent permission before starting" },
            { letter: "B", text: "include photographs of every participant at the display" },
            { letter: "C", text: "register as part of a team of at least three members" },
            { letter: "D", text: "present the survey only to judges who are scientists" }
          ],
          correct: "A"
        },
        {
          id: "no-exceptions",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence shows most clearly that the fair will make no exceptions to its registration deadline?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "C"
        },
        {
          id: "most-points",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Based on the scoring categories in sentence 14, which part of a project is worth the most points?",
          choices: [
            { letter: "A", text: "the research question" },
            { letter: "B", text: "the design and methodology" },
            { letter: "C", text: "the presentation" },
            { letter: "D", text: "the data analysis" }
          ],
          correct: "B"
        },
        {
          id: "organized",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How are the entry guidelines mainly organized?",
          choices: [
            { letter: "A", text: "as a timeline of one student's project from start to finish" },
            { letter: "B", text: "under headings that group related rules by topic" },
            { letter: "C", text: "as a list of problems followed by their solutions" },
            { letter: "D", text: "as a comparison between this fair and the state fair" }
          ],
          correct: "B"
        },
        {
          id: "absent-rule",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the rule in sentence 16?",
          choices: [
            { letter: "A", text: "Judges visit every project exactly one time." },
            { letter: "B", text: "Absent students may present on another day." },
            { letter: "C", text: "Students who leave early lose all their points." },
            { letter: "D", text: "A project is unranked if no one presents after two visits." }
          ],
          correct: "D"
        },
        {
          id: "dis-prefix",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word disqualified in sentence 13 begins with the prefix dis-, as do disconnect and disagree. In all three words, the prefix dis- signals —",
          choices: [
            { letter: "A", text: "a reversal or removal" },
            { letter: "B", text: "an action done again" },
            { letter: "C", text: "something done in advance" },
            { letter: "D", text: "an increase in amount" }
          ],
          correct: "A"
        },
        {
          id: "even-if-safe",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Sentence 13 states that projects will be disqualified \"even if the research was performed safely\" mainly to emphasize that —",
          choices: [
            { letter: "A", text: "most student research is dangerous" },
            { letter: "B", text: "judges care more about safety than science" },
            { letter: "C", text: "approval in advance is required, not optional" },
            { letter: "D", text: "the committee rarely reviews any projects" }
          ],
          correct: "C"
        }
      ]
    },

    /* 12 ─ Argument · mechanic's garage */
    {
      id: "g11-ri-c107-keepthebays",
      family: "G11",
      title: "Keep the Bays Open",
      kind: "Argument · 11.RI",
      blurb: "A student editorial argues that the school board should not trade its auto shop for a second computer lab.",
      level: 3,
      passage:
        "<p>" + N(1) + "Behind the gym at Harlow Valley High School, past the tennis courts, there is a building with two garage doors and a smell of motor oil that no amount of air freshener has ever defeated. " +
        N(2) + "For forty years, it has housed the school's automotive technology program. " +
        N(3) + "Next month, the school board will vote on whether to close those bays and convert the space into a second computer lab. " +
        N(4) + "The board should keep the garage open.</p>" +
        "<p>" + N(5) + "The strongest argument for closing the program is cost. " +
        N(6) + "Lifts, diagnostic equipment, and safety inspections are expensive, and only about sixty students enroll each year, compared with several hundred in computer courses. " +
        N(7) + "Supporters of the change also point out, correctly, that cars are becoming computers on wheels, and that the future belongs to students who can write code.</p>" +
        "<p>" + N(8) + "But that last point actually argues for the garage, not against it. " +
        N(9) + "A modern car contains dozens of small computers, and the technicians who repair it must read sensor data, interpret diagnostic codes, and update software as often as they tighten bolts. " +
        N(10) + "The automotive program already teaches these skills; last year, according to the instructor's lesson logs, students in the bays used laptops more often than wrenches. " +
        N(11) + "Closing the program would not trade old skills for new ones. " +
        N(12) + "It would trade one kind of technology education for another and lose the hands-on part in the process.</p>" +
        "<p>" + N(13) + "The program's results also deserve attention. " +
        N(14) + "According to the school's own career office, nineteen of last spring's twenty-two automotive graduates either enrolled in a technical college or started paid apprenticeships within six months. " +
        N(15) + "Several local repair shops report that they cannot hire enough trained technicians, and two of them now donate used parts to the program in hopes of recruiting its students. " +
        N(16) + "A program that sends graduates directly into jobs the community needs is not a luxury; it is a pipeline.</p>" +
        "<p>" + N(17) + "There is also a value that numbers do not capture. " +
        N(18) + "Students who struggle to sit still through a lecture often discover in the garage that they can reason carefully, follow a procedure, and solve a problem that nobody handed them the answer to. " +
        N(19) + "Teachers in other departments have noticed, and the career office reports that the program's students have higher attendance than the school average.</p>" +
        "<p>" + N(20) + "None of this means the computer lab is a bad idea. " +
        N(21) + "The school clearly needs more space for coding classes, and the board should find it, perhaps in the two underused classrooms in the library wing. " +
        N(22) + "But it should not build that future by bulldozing a program that is already preparing students for it. " +
        N(23) + "Keep the bays open, and let the smell of motor oil stay exactly where it is.</p>",
      claims: [
        {
          id: "position",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence most directly states the position the editorial defends?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "A"
        },
        {
          id: "second-para",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the writer develop the argument in the second paragraph (sentences 5–7)?",
          choices: [
            { letter: "A", text: "by telling a personal story about repairing a car" },
            { letter: "B", text: "by listing statistics that support keeping the garage" },
            { letter: "C", text: "by presenting the opposing side's reasons before answering them" },
            { letter: "D", text: "by describing the early history of the automotive program" }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "In sentence 8, the writer claims that the opponents' last point \"actually argues for the garage.\" This move mainly serves to —",
          choices: [
            { letter: "A", text: "admit that the program is too expensive to save" },
            { letter: "B", text: "shift the subject from cost to the school's history" },
            { letter: "C", text: "suggest that coding classes should be canceled" },
            { letter: "D", text: "turn an opposing point into support for keeping the shop" }
          ],
          correct: "D"
        },
        {
          id: "evidence-work",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which sentence provides the strongest evidence that the program prepares students for work?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "B"
        },
        {
          id: "opinion",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which statement from the editorial is an opinion rather than a verifiable fact?",
          choices: [
            { letter: "A", text: "\"For forty years, it has housed the school's automotive technology program.\"" },
            { letter: "B", text: "\"Next month, the school board will vote on whether to close those bays.\"" },
            { letter: "C", text: "\"A program that sends graduates directly into jobs the community needs is not a luxury.\"" },
            { letter: "D", text: "\"Two of them now donate used parts to the program in hopes of recruiting its students.\"" }
          ],
          correct: "C"
        },
        {
          id: "pipeline",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 16, the writer calls the program a pipeline mainly to suggest that it —",
          choices: [
            { letter: "A", text: "steadily delivers trained workers to local employers" },
            { letter: "B", text: "requires constant repairs that drain the school budget" },
            { letter: "C", text: "moves students quickly through easy coursework" },
            { letter: "D", text: "connects the garage to the planned computer lab" }
          ],
          correct: "A"
        },
        {
          id: "bulldozing",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "In sentence 22, the word bulldozing suggests that closing the program would be —",
          choices: [
            { letter: "A", text: "a careful and gradual change" },
            { letter: "B", text: "a destructive and careless act" },
            { letter: "C", text: "an expensive construction project" },
            { letter: "D", text: "a popular decision among students" }
          ],
          correct: "B"
        },
        {
          id: "concession",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "The writer's concession in sentences 20 and 21 mainly strengthens the argument by —",
          choices: [
            { letter: "A", text: "proving that the computer lab will never be built" },
            { letter: "B", text: "showing that the writer opposes all technology courses" },
            { letter: "C", text: "revealing that the library wing is already full" },
            { letter: "D", text: "offering a solution that meets both needs" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
