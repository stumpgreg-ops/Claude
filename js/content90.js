/* SOL Labyrinth — Grade 11 short packs (nights 9–20), expansion file 90: a bookstore, a neighborhood
 * block party, inventors and patents, and a marching band. Literary, poetry, drama, informational,
 * functional, argument, vocabulary and paired texts for the G11 family.
 * Original text only. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── LITERARY ───────────────────────── */
    {
      id: "g11-rl-c90-staffpick",
      family: "G11",
      title: "The Staff Pick",
      kind: "Literary · 11.RL",
      blurb: "A new bookstore clerk rewrites one small card four times, and a customer brings it back.",
      level: 1,
      passage:
        "<p>" + N(1) + "Ayesha had worked at Paper Lantern Books for three weeks before Mr. Halvorsen asked her to write a staff pick card. " +
        N(2) + "The cards hung from the shelves on little clips, each one signed by an employee who loved the book above it. " +
        N(3) + "Ayesha chose a thin novel about a lighthouse keeper that nobody seemed to buy. " +
        N(4) + "She rewrote her card four times, crossing out words like \"amazing\" because they sounded like every other card. " +
        N(5) + "Finally she wrote one sentence: \"Read this on a night when you think no one is watching out for you.\" " +
        N(6) + "By Saturday, two copies were gone. " +
        N(7) + "On Monday, a woman came in holding the card itself, which she had accidentally carried home tucked inside the book. " +
        N(8) + "\"I'm returning this,\" she said, \"but not the novel.\"" +
        "</p>",
      claims: [
        {
          id: "rewrite",
          sol: "11.RL.1.C",
          stem: "Sentence 4 shows that Ayesha is —",
          choices: [
            { letter: "A", text: "set on writing words that feel truly her own" },
            { letter: "B", text: "too nervous to finish the assignment before Saturday" },
            { letter: "C", text: "unsure whether she actually likes the novel" },
            { letter: "D", text: "eager to copy the style of the other cards" }
          ],
          correct: "A"
        },
        {
          id: "returning",
          sol: "11.RL.1.B",
          stem: "The woman's words in sentence 8 suggest that she —",
          choices: [
            { letter: "A", text: "was disappointed by the lighthouse novel" },
            { letter: "B", text: "hopes to receive a refund for the book" },
            { letter: "C", text: "liked the novel enough to keep it" },
            { letter: "D", text: "wants Ayesha to write a different card" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does Ayesha's experience with the staff pick card best support?",
          choices: [
            { letter: "A", text: "New employees should follow the example of experienced ones." },
            { letter: "B", text: "Plain, sincere words can reach people better than loud praise." },
            { letter: "C", text: "Popular books usually deserve their popularity more than others." },
            { letter: "D", text: "Small businesses depend on customers who return what they buy." }
          ],
          correct: "B"
        },
        {
          id: "amazing",
          sol: "11.RL.2.C",
          stem: "In sentence 4, Ayesha crosses out words like \"amazing\" mainly because such words —",
          choices: [
            { letter: "A", text: "would make Mr. Halvorsen think she was exaggerating" },
            { letter: "B", text: "took up too much room on the small cards" },
            { letter: "C", text: "did not describe a book about a lighthouse" },
            { letter: "D", text: "were too common to make her card stand out" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "11.RL.3.A",
          stem: "The author ends the story with the woman's remark in sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "reveal that Ayesha's card worked the way she hoped" },
            { letter: "B", text: "introduce a conflict between Ayesha and her manager" },
            { letter: "C", text: "show that the store has a strict policy on returns" },
            { letter: "D", text: "explain why the novel had sold so slowly before" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "11.RL.2.B",
          stem: "The sentence Ayesha writes on her card (sentence 5) has a tone that is best described as —",
          choices: [
            { letter: "A", text: "sarcastic and distant" },
            { letter: "B", text: "urgent and alarmed" },
            { letter: "C", text: "gentle and comforting" },
            { letter: "D", text: "cheerful and silly" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-c90-grill",
      family: "G11",
      title: "The Left Side of the Grill",
      kind: "Literary · 11.RL",
      blurb: "A grandfather runs the block party grill from the porch, and his grandson learns why the coals matter.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every June, Tomás's grandfather rolled his old charcoal grill to the end of Delmar Street before anyone else had even unfolded a table. " +
        N(2) + "This year his knees were too stiff for the job, so he sat on the porch and watched Tomás wrestle the grill over the curb. " +
        N(3) + "\"Keep the left side cooler,\" his grandfather called. " +
        N(4) + "\"Not everybody can wait for ribs.\" " +
        N(5) + "Tomás did not understand until noon, when the line split on its own: patient neighbors waited on the right for slow, smoky ribs, while hungry children grabbed quick hot dogs from the left. " +
        N(6) + "Nobody pushed, and nobody left empty-handed. " +
        N(7) + "By evening his shirt smelled like smoke and his arms ached. " +
        N(8) + "His grandfather had not left the porch once, yet somehow everyone thanked him first. " +
        N(9) + "Tomás found that he did not mind at all." +
        "</p>",
      claims: [
        {
          id: "advice",
          sol: "11.RL.1.C",
          stem: "The grandfather's advice in sentences 3 and 4 reveals that he —",
          choices: [
            { letter: "A", text: "prefers hot dogs to ribs at a party" },
            { letter: "B", text: "doubts that Tomás can light the coals" },
            { letter: "C", text: "wants the party to end before dark" },
            { letter: "D", text: "knows from experience how crowds behave" }
          ],
          correct: "D"
        },
        {
          id: "line",
          sol: "11.RL.1.B",
          stem: "Sentences 5 and 6 mainly show that the grandfather's plan —",
          choices: [
            { letter: "A", text: "serves different kinds of guests without conflict" },
            { letter: "B", text: "forces the children to wait longer than adults" },
            { letter: "C", text: "causes confusion until Tomás makes new signs" },
            { letter: "D", text: "leaves the ribs undercooked by the afternoon" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme is best supported by Tomás's day at the grill?",
          choices: [
            { letter: "A", text: "Hard work is rarely noticed by the people it helps." },
            { letter: "B", text: "Experience can guide work even when someone else does it." },
            { letter: "C", text: "Young people should trust their own ideas over advice." },
            { letter: "D", text: "Old traditions need to change a little every year." }
          ],
          correct: "B"
        },
        {
          id: "wrestle",
          sol: "11.RL.2.C",
          stem: "In sentence 2, the word \"wrestle\" suggests that moving the grill is —",
          choices: [
            { letter: "A", text: "a playful contest between neighbors" },
            { letter: "B", text: "dangerous to the people nearby" },
            { letter: "C", text: "awkward and physically demanding" },
            { letter: "D", text: "a quick and familiar chore" }
          ],
          correct: "C"
        },
        {
          id: "resolve",
          sol: "11.RL.3.A",
          stem: "Sentences 8 and 9 resolve the story by showing that Tomás —",
          choices: [
            { letter: "A", text: "resents that his grandfather receives the praise" },
            { letter: "B", text: "plans to let someone else run the grill next year" },
            { letter: "C", text: "is content to let the credit go to his grandfather" },
            { letter: "D", text: "realizes the neighbors never noticed his hard work" }
          ],
          correct: "C"
        },
        {
          id: "symbol",
          sol: "11.RL.2.A",
          stem: "The grill, which passes from the grandfather's hands to Tomás's, most clearly symbolizes —",
          choices: [
            { letter: "A", text: "the cost of hosting a party for the whole street" },
            { letter: "B", text: "the neighborhood's dislike of anything new" },
            { letter: "C", text: "the grandfather's wish to stop cooking forever" },
            { letter: "D", text: "a family role handed to the next generation" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c90-raincount",
      family: "G11",
      title: "Four Beats Slower",
      kind: "Literary · 11.RL",
      blurb: "Rain falls on the halftime show, and a drum major makes a choice no one in the stands can hear.",
      level: 3,
      passage:
        "<p>" + N(1) + "The rain began during the third quarter, soft at first and then steady enough to bead on the brass. " +
        N(2) + "From the podium, Keiko could see the band's white spats turning the color of the field. " +
        N(3) + "Mr. Abara had told her once that a drum major's real instrument was the band's nerves. " +
        N(4) + "She raised her hands, counted off, and set the tempo a hair slower than they had rehearsed. " +
        N(5) + "Nobody in the stands would notice four beats per minute. " +
        N(6) + "The trombones would, though, sliding into the company front on wet grass, and so would the freshman flutes who had been certain they would fall. " +
        N(7) + "The show ended in a straight, shining line. " +
        N(8) + "Afterward, a clarinetist asked whether the metronome had been broken. " +
        N(9) + "Keiko only shrugged and wrung out her gloves." +
        "</p>",
      claims: [
        {
          id: "choice",
          sol: "11.RL.1.C",
          stem: "Keiko's decision in sentence 4 shows that she —",
          choices: [
            { letter: "A", text: "forgot the tempo the band had rehearsed" },
            { letter: "B", text: "puts the marchers' footing ahead of the exact plan" },
            { letter: "C", text: "wants the audience to hear the show more clearly" },
            { letter: "D", text: "is trying to finish the show before the storm" }
          ],
          correct: "B"
        },
        {
          id: "nerves",
          sol: "11.RL.2.A",
          stem: "Mr. Abara's statement in sentence 3 that a drum major's real instrument is \"the band's nerves\" mainly means that a drum major —",
          choices: [
            { letter: "A", text: "must learn to play every instrument in the band" },
            { letter: "B", text: "should hide feelings from the players at all times" },
            { letter: "C", text: "shapes how calm and confident the players feel" },
            { letter: "D", text: "needs strong nerves to stand on a tall podium" }
          ],
          correct: "C"
        },
        {
          id: "contrast",
          sol: "11.RL.1.B",
          stem: "Sentences 5 and 6 contrast the audience with the marchers mainly to show that the slower tempo —",
          choices: [
            { letter: "A", text: "matters most to the people on the wet field" },
            { letter: "B", text: "ruins the sound of the show for the stands" },
            { letter: "C", text: "was planned by Mr. Abara before the game" },
            { letter: "D", text: "confuses the trombones during the company front" }
          ],
          correct: "A"
        },
        {
          id: "shining",
          sol: "11.RL.2.B",
          stem: "In sentence 7, the phrase \"a straight, shining line\" creates a feeling of —",
          choices: [
            { letter: "A", text: "eerie suspense" },
            { letter: "B", text: "bitter disappointment" },
            { letter: "C", text: "playful chaos" },
            { letter: "D", text: "quiet triumph" }
          ],
          correct: "D"
        },
        {
          id: "shrug",
          sol: "11.RL.3.A",
          stem: "Keiko's shrug in sentence 9 ends the story by suggesting that she —",
          choices: [
            { letter: "A", text: "is embarrassed that the metronome broke" },
            { letter: "B", text: "does not need credit for protecting the band" },
            { letter: "C", text: "has not noticed that the show went well" },
            { letter: "D", text: "is too cold and tired to answer questions" }
          ],
          correct: "B"
        },
        {
          id: "hair",
          sol: "11.RL.2.C",
          stem: "In sentence 4, the phrase \"a hair slower\" most nearly means —",
          choices: [
            { letter: "A", text: "very slightly slower" },
            { letter: "B", text: "much too slow to march" },
            { letter: "C", text: "slower with each measure" },
            { letter: "D", text: "slow and then suddenly fast" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-rl-c90-hinge",
      family: "G11",
      title: "Filed Before She Was Born",
      kind: "Literary · 11.RL",
      blurb: "A student inventor finds her idea in an old patent, and her uncle sees something she does not.",
      level: 2,
      passage:
        "<p>" + N(1) + "Nadia spent the whole winter break building a hinge that let a cafeteria tray fold in half for easy stacking. " +
        N(2) + "She sanded the prototype until it clicked shut with a sound like a snapped twig. " +
        N(3) + "Then, in a single evening of searching a patent database, she found her hinge, drawn in careful black lines, filed eleven years before she was born. " +
        N(4) + "She closed the laptop and sat with her hands flat on the desk. " +
        N(5) + "Her uncle Farid, who repaired refrigerators for a living, studied the drawing over her shoulder. " +
        N(6) + "\"So a stranger had your idea,\" he said. " +
        N(7) + "\"That means you were thinking like an engineer, not like a fool.\" " +
        N(8) + "The next morning, Nadia opened her notebook to a clean page and wrote at the top: \"Things the old drawing does not do.\"" +
        "</p>",
      claims: [
        {
          id: "hands",
          sol: "11.RL.1.C",
          stem: "Sentence 4 suggests that after her search, Nadia feels —",
          choices: [
            { letter: "A", text: "relieved that her work is finished" },
            { letter: "B", text: "angry at the stranger who copied her" },
            { letter: "C", text: "stunned and discouraged" },
            { letter: "D", text: "bored with the whole project" }
          ],
          correct: "C"
        },
        {
          id: "uncle",
          sol: "11.RL.1.B",
          stem: "Uncle Farid's words in sentences 6 and 7 are meant to —",
          choices: [
            { letter: "A", text: "present the discovery as proof of Nadia's ability" },
            { letter: "B", text: "warn Nadia that copying an invention is illegal" },
            { letter: "C", text: "suggest that Nadia should try repairing refrigerators" },
            { letter: "D", text: "convince Nadia to contact the patent's owner" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does Nadia's response to the old patent best support?",
          choices: [
            { letter: "A", text: "Original ideas are almost impossible to find today." },
            { letter: "B", text: "Family members rarely understand a young inventor." },
            { letter: "C", text: "Hard work matters less than luck and timing." },
            { letter: "D", text: "A setback can become a starting point for growth." }
          ],
          correct: "D"
        },
        {
          id: "twig",
          sol: "11.RL.2.A",
          stem: "In sentence 2, comparing the hinge's click to \"a snapped twig\" mainly emphasizes —",
          choices: [
            { letter: "A", text: "how fragile and easily broken the hinge is" },
            { letter: "B", text: "how crisp and exact the finished hinge sounds" },
            { letter: "C", text: "that Nadia built the prototype out of wood" },
            { letter: "D", text: "that the hinge makes too much noise to use" }
          ],
          correct: "B"
        },
        {
          id: "heading",
          sol: "11.RL.3.A",
          stem: "The heading Nadia writes in sentence 8 signals that she —",
          choices: [
            { letter: "A", text: "plans to improve on the existing design" },
            { letter: "B", text: "has decided to stop inventing altogether" },
            { letter: "C", text: "wants to prove the old patent is a fake" },
            { letter: "D", text: "intends to copy the old drawing exactly" }
          ],
          correct: "A"
        },
        {
          id: "filed",
          sol: "11.RL.2.C",
          stem: "In sentence 3, the word \"filed\" most nearly means —",
          choices: [
            { letter: "A", text: "smoothed down with a metal tool" },
            { letter: "B", text: "stored away in a filing cabinet" },
            { letter: "C", text: "marched in a single line" },
            { letter: "D", text: "officially submitted for a record" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c90-anchor",
      family: "G11",
      title: "Anchor",
      kind: "Literary · 11.RL",
      blurb: "The smallest member of the band carries the biggest horn through band camp.",
      level: 1,
      passage:
        "<p>" + N(1) + "Ruslan was the smallest member of the Westbrook band, and he played the largest instrument. " +
        N(2) + "His sousaphone weighed nearly as much as his little sister, and on the first day of band camp it pressed a red stripe into his shoulder. " +
        N(3) + "The older players gave him advice he did not want: switch to trumpet, switch to cymbals, switch to anything. " +
        N(4) + "Instead, Ruslan carried the horn to the empty parking lot every evening and marched laps until the sun went down. " +
        N(5) + "He learned to let his legs, not his shoulder, take the weight. " +
        N(6) + "By the first home game, he was the only sousaphone player who never fell out of step. " +
        N(7) + "The section leader, a tall senior named Bea, gave him a nickname: \"Anchor.\" " +
        N(8) + "Ruslan decided it was the best compliment he had ever received." +
        "</p>",
      claims: [
        {
          id: "evidence",
          sol: "11.RL.1.C",
          stem: "Which sentence best shows Ruslan's determination?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "B"
        },
        {
          id: "advice",
          sol: "11.RL.1.B",
          stem: "The advice in sentence 3 suggests that the older players —",
          choices: [
            { letter: "A", text: "need another trumpet player in their section" },
            { letter: "B", text: "think Ruslan plays the sousaphone too loudly" },
            { letter: "C", text: "doubt that Ruslan can handle the instrument" },
            { letter: "D", text: "want Ruslan to become the section leader" }
          ],
          correct: "C"
        },
        {
          id: "anchor",
          sol: "11.RL.2.A",
          stem: "The nickname \"Anchor\" in sentence 7 suggests that Ruslan has become —",
          choices: [
            { letter: "A", text: "a steady, dependable part of the section" },
            { letter: "B", text: "the heaviest and slowest marcher in the band" },
            { letter: "C", text: "a player who holds the section back" },
            { letter: "D", text: "someone who would rather be near water" }
          ],
          correct: "A"
        },
        {
          id: "switch",
          sol: "11.RL.2.B",
          stem: "The repeated phrase \"switch to\" in sentence 3 mainly conveys —",
          choices: [
            { letter: "A", text: "how carefully the older players explained each option" },
            { letter: "B", text: "how excited Ruslan was to try a new instrument" },
            { letter: "C", text: "how the band director organized the sections" },
            { letter: "D", text: "how dismissive the advice felt to Ruslan" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "What idea about effort does Ruslan's story most clearly develop?",
          choices: [
            { letter: "A", text: "Advice from older students is usually correct." },
            { letter: "B", text: "Talent matters more than hours of practice." },
            { letter: "C", text: "Nicknames can hurt more than people realize." },
            { letter: "D", text: "Steady practice can overcome a physical limit." }
          ],
          correct: "D"
        },
        {
          id: "setup",
          sol: "11.RL.3.A",
          stem: "How does sentence 2 set up the rest of the story?",
          choices: [
            { letter: "A", text: "It introduces Ruslan's sister as a main character." },
            { letter: "B", text: "It establishes the physical challenge Ruslan faces." },
            { letter: "C", text: "It explains why Ruslan chose the sousaphone." },
            { letter: "D", text: "It shows that band camp has ended for the year." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rl-c90-inscription",
      family: "G11",
      title: "For Lucy",
      kind: "Literary · 11.RL",
      blurb: "An old atlas with a father's inscription waits on the counter of a secondhand bookshop.",
      level: 3,
      passage:
        "<p>" + N(1) + "The secondhand shop on Orchard Lane sorted its books by a system only Mrs. Okonjo fully understood. " +
        N(2) + "Wen had volunteered there for a month when she found, inside a water-stained atlas, an inscription in faded blue ink: \"For Lucy, so you'll always know where I am. —Dad.\" " +
        N(3) + "Wen showed it to Mrs. Okonjo, expecting her to shelve it like any other atlas. " +
        N(4) + "Instead, the older woman set it aside on the counter, under the cracked brass bell that customers rang for help. " +
        N(5) + "\"Books with names in them wait longer,\" she said. " +
        N(6) + "\"Sometimes a Lucy comes back.\" " +
        N(7) + "Wen thought it was the most impractical policy she had ever heard. " +
        N(8) + "Still, every afternoon that spring, she glanced up whenever the bell rang, and every afternoon she was a little disappointed and a little glad that the atlas was still there." +
        "</p>",
      claims: [
        {
          id: "okonjo",
          sol: "11.RL.1.C",
          stem: "Mrs. Okonjo's choice in sentences 4 through 6 reveals that she —",
          choices: [
            { letter: "A", text: "plans to sell the atlas for a higher price" },
            { letter: "B", text: "values a book's personal history over efficiency" },
            { letter: "C", text: "does not trust Wen to shelve books correctly" },
            { letter: "D", text: "knows exactly who Lucy is and where she lives" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "11.RL.1.B",
          stem: "Taken together, sentences 7 and 8 show that Wen —",
          choices: [
            { letter: "A", text: "plans to change the shop's sorting system" },
            { letter: "B", text: "is annoyed by the noise of the brass bell" },
            { letter: "C", text: "wants to buy the atlas for herself" },
            { letter: "D", text: "has begun to share the hope she doubted" }
          ],
          correct: "D"
        },
        {
          id: "mixed",
          sol: "11.RL.2.B",
          stem: "The phrase \"a little disappointed and a little glad\" in sentence 8 mainly conveys —",
          choices: [
            { letter: "A", text: "Wen's mixed feelings as the atlas stays unclaimed" },
            { letter: "B", text: "Wen's boredom with the slow afternoons at the shop" },
            { letter: "C", text: "Mrs. Okonjo's frustration with unsold inventory" },
            { letter: "D", text: "the customers' confusion about the shop's system" }
          ],
          correct: "A"
        },
        {
          id: "atlas",
          sol: "11.RL.2.A",
          stem: "The atlas with its inscription most clearly symbolizes —",
          choices: [
            { letter: "A", text: "the value of learning world geography" },
            { letter: "B", text: "the damage that time does to old paper" },
            { letter: "C", text: "a parent's bond with a faraway child" },
            { letter: "D", text: "the disorder of a crowded secondhand shop" }
          ],
          correct: "C"
        },
        {
          id: "impractical",
          sol: "11.RL.2.C",
          stem: "In sentence 7, the word \"impractical\" most nearly means —",
          choices: [
            { letter: "A", text: "unkind to customers" },
            { letter: "B", text: "against the law" },
            { letter: "C", text: "not sensible or useful" },
            { letter: "D", text: "hard to explain aloud" }
          ],
          correct: "C"
        },
        {
          id: "idea",
          sol: "11.RL.1.A",
          stem: "Which idea does the story of the atlas most clearly develop?",
          choices: [
            { letter: "A", text: "Some objects hold value that usefulness cannot measure." },
            { letter: "B", text: "Volunteers should question every rule an employer makes." },
            { letter: "C", text: "Old books are worth more when they have no markings." },
            { letter: "D", text: "Waiting for something usually ends in disappointment." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-rl-c90-chalkwhale",
      family: "G11",
      title: "The Chalk Whale",
      kind: "Literary · 11.RL",
      blurb: "At a block party, an eight-year-old spends three hours on a chalk whale while her brother watches the forecast.",
      level: 1,
      passage:
        "<p>" + N(1) + "At the Fern Avenue block party, the street was closed from noon to nine, and the asphalt belonged to the children. " +
        N(2) + "Eight-year-old Priya claimed the square in front of the fire hydrant and drew a whale with a bucket of fat pastel chalk. " +
        N(3) + "It took her three hours. " +
        N(4) + "Her older brother, Arjun, kept reminding her that the forecast called for rain at six. " +
        N(5) + "She kept drawing anyway, adding barnacles, a spout, and a tiny boat for scale. " +
        N(6) + "At ten minutes to six the first drops fell, and the neighbors gathered to watch the whale's blue begin to run toward the gutter. " +
        N(7) + "Priya was not crying, which surprised Arjun. " +
        N(8) + "She was standing on the porch with his phone, taking a picture. " +
        N(9) + "\"Now it's swimming,\" she said." +
        "</p>",
      claims: [
        {
          id: "priya",
          sol: "11.RL.1.C",
          stem: "Which statement best describes Priya?",
          choices: [
            { letter: "A", text: "She is careless about her own artwork." },
            { letter: "B", text: "She is easily upset by small problems." },
            { letter: "C", text: "She is patient and finds joy in a loss." },
            { letter: "D", text: "She is eager to win her brother's praise." }
          ],
          correct: "C"
        },
        {
          id: "warning",
          sol: "11.RL.1.B",
          stem: "Arjun's repeated warning in sentence 4 mainly builds the expectation that —",
          choices: [
            { letter: "A", text: "the drawing will be ruined by the rain" },
            { letter: "B", text: "the block party will be canceled early" },
            { letter: "C", text: "Priya will move her drawing indoors" },
            { letter: "D", text: "Arjun will help Priya finish the whale" }
          ],
          correct: "A"
        },
        {
          id: "swimming",
          sol: "11.RL.3.A",
          stem: "How does Priya's remark in sentence 9 resolve the story?",
          choices: [
            { letter: "A", text: "It reveals that Priya never liked the whale drawing." },
            { letter: "B", text: "It shows that Arjun's forecast was wrong after all." },
            { letter: "C", text: "It explains why the neighbors left the party early." },
            { letter: "D", text: "It shows Priya seeing the rain as part of her art." }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "11.RL.2.B",
          stem: "The image of the whale's blue beginning to \"run toward the gutter\" in sentence 6 creates a mood of —",
          choices: [
            { letter: "A", text: "angry frustration" },
            { letter: "B", text: "gentle sadness" },
            { letter: "C", text: "sudden danger" },
            { letter: "D", text: "silly excitement" }
          ],
          correct: "B"
        },
        {
          id: "belonged",
          sol: "11.RL.2.C",
          stem: "In sentence 1, the phrase \"the asphalt belonged to the children\" means that the children —",
          choices: [
            { letter: "A", text: "were free to play and draw in the street" },
            { letter: "B", text: "had paid the city to close their block" },
            { letter: "C", text: "were asked to sweep the street afterward" },
            { letter: "D", text: "owned the houses along Fern Avenue" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme is best supported by Priya's reaction to the rain?",
          choices: [
            { letter: "A", text: "Careful planning prevents every kind of loss." },
            { letter: "B", text: "Older siblings usually know what is best." },
            { letter: "C", text: "Art matters only if other people see it." },
            { letter: "D", text: "A new point of view can turn loss into play." }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── POETRY ───────────────────────── */
    {
      id: "g11-rl-c90-fieldpage",
      family: "G11",
      title: "Friday Field",
      kind: "Poetry · 11.RL",
      blurb: "A marching band writes a seven-minute sentence across a lit football field.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Under the lights the field becomes a page<br>" +
        L(2) + "ruled in white lines every five yards,<br>" +
        L(3) + "and we are the ink, two hundred strong,<br>" +
        L(4) + "writing a sentence no one gets to keep.<br>" +
        L(5) + "The drums lay down the grammar first;<br>" +
        L(6) + "the horns arrive like capital letters.<br>" +
        L(7) + "For seven minutes the story holds,<br>" +
        L(8) + "then we march off, and the grass forgets,<br>" +
        L(9) + "and the only copy rides home on the bus." +
        "</p>",
      claims: [
        {
          id: "ink",
          sol: "11.RL.2.A",
          stem: "In lines 1 through 3, the speaker compares the marching band to —",
          choices: [
            { letter: "A", text: "white lines painted on the grass" },
            { letter: "B", text: "ink writing across a page" },
            { letter: "C", text: "readers turning the pages of a book" },
            { letter: "D", text: "lights shining over a stadium" }
          ],
          correct: "B"
        },
        {
          id: "keep",
          sol: "11.RL.1.B",
          stem: "Line 4, \"writing a sentence no one gets to keep,\" suggests that the performance —",
          choices: [
            { letter: "A", text: "is too difficult for the audience to follow" },
            { letter: "B", text: "has been recorded for the band to study" },
            { letter: "C", text: "repeats the same show every Friday night" },
            { letter: "D", text: "lasts only as long as it is being performed" }
          ],
          correct: "D"
        },
        {
          id: "capitals",
          sol: "11.RL.2.B",
          stem: "In line 6, saying the horns arrive \"like capital letters\" suggests that the horns are —",
          choices: [
            { letter: "A", text: "bold and impossible to miss" },
            { letter: "B", text: "quiet and easy to overlook" },
            { letter: "C", text: "late and out of step" },
            { letter: "D", text: "small and carefully placed" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "11.RL.3.A",
          stem: "How does line 8 shift the poem?",
          choices: [
            { letter: "A", text: "It moves from the band's rehearsal to its first show." },
            { letter: "B", text: "It moves from the drums to the horns in the band." },
            { letter: "C", text: "It moves from the performance to its quick fading." },
            { letter: "D", text: "It moves from the speaker's view to the crowd's view." }
          ],
          correct: "C"
        },
        {
          id: "central",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses the central idea of \"Friday Field\"?",
          choices: [
            { letter: "A", text: "A brief performance lives on in those who made it." },
            { letter: "B", text: "Marching bands deserve more attention than football." },
            { letter: "C", text: "Writing is harder to learn than playing an instrument." },
            { letter: "D", text: "Long bus rides are the hardest part of band life." }
          ],
          correct: "A"
        },
        {
          id: "copy",
          sol: "11.RL.2.C",
          stem: "In line 9, the phrase \"the only copy\" most nearly refers to —",
          choices: [
            { letter: "A", text: "a printed program from the game" },
            { letter: "B", text: "a video the director recorded" },
            { letter: "C", text: "the sheet music packed in a folder" },
            { letter: "D", text: "the band members' memory of the show" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c90-marginalia",
      family: "G11",
      title: "Marginalia",
      kind: "Poetry · 11.RL",
      blurb: "A three-dollar used book arrives with a stranger's pencil notes in the margins.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Someone underlined this line in pencil<br>" +
        L(2) + "and wrote beside it, small and slanting, <em>Yes.</em><br>" +
        L(3) + "I paid three dollars for the book<br>" +
        L(4) + "and got, for free, a stranger's agreement,<br>" +
        L(5) + "a quarrel in chapter nine (<em>No, never</em>),<br>" +
        L(6) + "a grocery list, a phone number half erased.<br>" +
        L(7) + "I read two books at once that summer:<br>" +
        L(8) + "the one the author meant to write,<br>" +
        L(9) + "and the quieter one along the edges,<br>" +
        L(10) + "written by whoever read it first." +
        "</p>",
      claims: [
        {
          id: "agreement",
          sol: "11.RL.2.C",
          stem: "In line 4, the phrase \"a stranger's agreement\" refers to —",
          choices: [
            { letter: "A", text: "the price the speaker paid for the book" },
            { letter: "B", text: "a contract tucked inside the back cover" },
            { letter: "C", text: "the word written by the previous owner" },
            { letter: "D", text: "the author's promise in the first chapter" }
          ],
          correct: "C"
        },
        {
          id: "reader",
          sol: "11.RL.1.B",
          stem: "The details in lines 5 and 6 suggest that the earlier reader —",
          choices: [
            { letter: "A", text: "reacted to the book personally" },
            { letter: "B", text: "was assigned the book for a class" },
            { letter: "C", text: "never finished reading the book" },
            { letter: "D", text: "wanted the next owner to call" }
          ],
          correct: "A"
        },
        {
          id: "twobooks",
          sol: "11.RL.2.A",
          stem: "In lines 7 through 10, the \"two books\" the speaker reads are —",
          choices: [
            { letter: "A", text: "a novel and its sequel from the same shelf" },
            { letter: "B", text: "two different copies of the same story" },
            { letter: "C", text: "a book for school and a book for fun" },
            { letter: "D", text: "the printed text and the margin notes" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "11.RL.2.B",
          stem: "The speaker's tone toward the pencil notes is best described as —",
          choices: [
            { letter: "A", text: "irritated" },
            { letter: "B", text: "appreciative" },
            { letter: "C", text: "suspicious" },
            { letter: "D", text: "indifferent" }
          ],
          correct: "B"
        },
        {
          id: "develop",
          sol: "11.RL.3.A",
          stem: "How do lines 7 through 10 develop the ideas in lines 1 through 6?",
          choices: [
            { letter: "A", text: "They list more notes found later in the book." },
            { letter: "B", text: "They reflect on what the listed notes meant." },
            { letter: "C", text: "They explain how the speaker erased the notes." },
            { letter: "D", text: "They describe the bookstore where it was sold." }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does \"Marginalia\" most clearly develop?",
          choices: [
            { letter: "A", text: "Used books are a poor value compared with new ones." },
            { letter: "B", text: "Writing in books shows disrespect for the author." },
            { letter: "C", text: "Reading can connect people who never meet." },
            { letter: "D", text: "A summer is too short to finish two books." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-c90-sawhorses",
      family: "G11",
      title: "Closed to Through Traffic",
      kind: "Poetry · 11.RL",
      blurb: "For one Saturday, sawhorses turn a street back into a shared place.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "One Saturday a year the sawhorses go up<br>" +
        L(2) + "and the street remembers it was once a field.<br>" +
        L(3) + "Mr. Ito carries out his folding chair<br>" +
        L(4) + "as proudly as a king might bring his throne;<br>" +
        L(5) + "the Reyes twins chalk borders on the yellow line.<br>" +
        L(6) + "We learn each other's dogs before our names.<br>" +
        L(7) + "By dusk the grill smoke settles into hedges,<br>" +
        L(8) + "and someone's speaker plays a song from someone's youth.<br>" +
        L(9) + "At ten the sawhorses fold. The cars come back,<br>" +
        L(10) + "and we are, again, the people who wave from windows." +
        "</p>",
      claims: [
        {
          id: "field",
          sol: "11.RL.2.A",
          stem: "Line 2, \"the street remembers it was once a field,\" suggests that the block party —",
          choices: [
            { letter: "A", text: "returns the street to open, shared space" },
            { letter: "B", text: "damages the road with heavy equipment" },
            { letter: "C", text: "takes place on a farm outside the city" },
            { letter: "D", text: "reminds older neighbors of a lost park" }
          ],
          correct: "A"
        },
        {
          id: "throne",
          sol: "11.RL.2.B",
          stem: "The comparison in lines 3 and 4 gives Mr. Ito's small action a feeling of —",
          choices: [
            { letter: "A", text: "nervous worry" },
            { letter: "B", text: "bitter rivalry" },
            { letter: "C", text: "playful ceremony" },
            { letter: "D", text: "tired, dull routine" }
          ],
          correct: "C"
        },
        {
          id: "dogs",
          sol: "11.RL.1.B",
          stem: "Line 6, \"We learn each other's dogs before our names,\" implies that the neighbors —",
          choices: [
            { letter: "A", text: "care more about pets than about people" },
            { letter: "B", text: "usually know very little about one another" },
            { letter: "C", text: "have lived on the street for many decades" },
            { letter: "D", text: "would rather not be introduced at all" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "11.RL.3.A",
          stem: "How do lines 9 and 10 shape the meaning of the poem?",
          choices: [
            { letter: "A", text: "They show that the party was a failure." },
            { letter: "B", text: "They predict the party will end for good." },
            { letter: "C", text: "They blame the drivers for the street's noise." },
            { letter: "D", text: "They show how rare the day's closeness is." }
          ],
          correct: "D"
        },
        {
          id: "central",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses the central idea of \"Closed to Through Traffic\"?",
          choices: [
            { letter: "A", text: "Cities should close many more streets to cars." },
            { letter: "B", text: "A shared event can briefly make neighbors close." },
            { letter: "C", text: "Old songs bring back strong memories of youth." },
            { letter: "D", text: "Neighbors prefer their privacy to any celebration." }
          ],
          correct: "B"
        },
        {
          id: "windows",
          sol: "11.RL.2.C",
          stem: "In line 10, calling the neighbors \"the people who wave from windows\" suggests that they are once again —",
          choices: [
            { letter: "A", text: "angry about the noise of the party" },
            { letter: "B", text: "too busy to come outside at all" },
            { letter: "C", text: "friendly but distant from one another" },
            { letter: "D", text: "watching to see who cleans the street" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── DRAMA ───────────────────────── */
    {
      id: "g11-rl-c90-notyet",
      family: "G11",
      title: "Not Yet",
      kind: "Drama · 11.RL",
      blurb: "A letter from the patent office arrives while an inventor's glue is still setting.",
      level: 2,
      passage:
        "<p><em>Setting: a garage workbench at night. LUCÍA, 17, tightens a screw on a small device. Her brother TAVI, 15, enters holding a printed letter.</em></p>" +
        "<p>" + N(1) + "<strong>TAVI</strong>: It came. The patent office answered. " +
        N(2) + "<strong>LUCÍA</strong>: <em>(not looking up)</em> Read it to me. If I stop now, the glue sets crooked. " +
        N(3) + "<strong>TAVI</strong>: <em>(scanning, then lowering the page)</em> They want changes. They say your claims are \"too broad.\" You have to describe exactly what makes yours different. " +
        N(4) + "<strong>LUCÍA</strong>: <em>(setting down the screwdriver very slowly)</em> So, no. " +
        N(5) + "<strong>TAVI</strong>: Not no. It says \"not yet.\" Right here, in bold. " +
        N(6) + "<strong>LUCÍA</strong>: <em>(after a long pause, picking the screwdriver back up)</em> Then hand me a pencil. If they want exactly, I'll give them exactly. " +
        N(7) + "<em>(TAVI grins and slides a pencil across the bench.)</em></p>",
      claims: [
        {
          id: "focus",
          sol: "11.RL.1.C",
          stem: "Lucía's line in sentence 2 shows that she —",
          choices: [
            { letter: "A", text: "does not care what the letter says" },
            { letter: "B", text: "expects her brother to make a mistake" },
            { letter: "C", text: "is afraid to read bad news herself" },
            { letter: "D", text: "is focused on the work in front of her" }
          ],
          correct: "D"
        },
        {
          id: "slowly",
          sol: "11.RL.1.B",
          stem: "The stage direction in sentence 4, \"setting down the screwdriver very slowly,\" mainly shows that Lucía —",
          choices: [
            { letter: "A", text: "has finished building the device" },
            { letter: "B", text: "is taking in what she thinks is a rejection" },
            { letter: "C", text: "is angry with Tavi for interrupting her" },
            { letter: "D", text: "wants to hide the letter from her parents" }
          ],
          correct: "B"
        },
        {
          id: "broad",
          sol: "11.RL.2.C",
          stem: "In sentence 3, a patent claim that is \"too broad\" is one that —",
          choices: [
            { letter: "A", text: "covers too much and is not specific enough" },
            { letter: "B", text: "uses too many pages to describe one part" },
            { letter: "C", text: "describes a device that is physically too wide" },
            { letter: "D", text: "copies the exact wording of another patent" }
          ],
          correct: "A"
        },
        {
          id: "turn",
          sol: "11.RL.3.A",
          stem: "Sentence 5 functions as the turning point of the scene because it —",
          choices: [
            { letter: "A", text: "reveals that Tavi wrote the letter himself" },
            { letter: "B", text: "shows that Tavi cannot read the letter well" },
            { letter: "C", text: "turns a seeming rejection into a chance to revise" },
            { letter: "D", text: "introduces a rival inventor with the same idea" }
          ],
          correct: "C"
        },
        {
          id: "screwdriver",
          sol: "11.RL.2.A",
          stem: "Lucía's picking the screwdriver back up in sentence 6 mainly signals —",
          choices: [
            { letter: "A", text: "her decision to keep working on the invention" },
            { letter: "B", text: "her plan to take the device apart for good" },
            { letter: "C", text: "her wish to change the subject with Tavi" },
            { letter: "D", text: "her fear that the glue has already dried" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does the scene in the garage best develop?",
          choices: [
            { letter: "A", text: "Family members should stay out of each other's work." },
            { letter: "B", text: "Official letters are usually harder to read than they look." },
            { letter: "C", text: "Great inventions rarely need more than one attempt." },
            { letter: "D", text: "Persistence means treating feedback as direction." }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── INFORMATIONAL ───────────────────────── */
    {
      id: "g11-ri-c90-patentdeal",
      family: "G11",
      title: "A Deal with the Public",
      kind: "Informational · 11.RI",
      blurb: "What an inventor gives up, what an inventor gets, and why old patents read like recipes.",
      level: 1,
      passage:
        "<p>" + N(1) + "A patent is a deal between an inventor and the public. " +
        N(2) + "The inventor agrees to explain exactly how a new invention works, in enough detail that a skilled person could build it. " +
        N(3) + "In return, the government gives the inventor the right to stop others from making, using, or selling that invention for a limited time, usually twenty years from the date the application is filed. " +
        N(4) + "When the patent expires, anyone may use the idea freely. " +
        N(5) + "This trade is the reason patent documents are so detailed and so public. " +
        N(6) + "Anyone can search them, and many engineers read old patents the way cooks read old recipes, looking for techniques to borrow or improve. " +
        N(7) + "A patent, in other words, does not lock an idea away forever. " +
        N(8) + "It holds the idea in trust for a while and then hands it to everyone." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the central idea of \"A Deal with the Public\"?",
          choices: [
            { letter: "A", text: "Patents keep useful inventions secret from the public." },
            { letter: "B", text: "Engineers rarely bother to read patents written long ago." },
            { letter: "C", text: "A patent trades a public explanation for limited protection." },
            { letter: "D", text: "Most inventions are copied as soon as patents are granted." }
          ],
          correct: "C"
        },
        {
          id: "explain",
          sol: "11.RI.1.B",
          stem: "According to the passage, what must an inventor do in exchange for a patent?",
          choices: [
            { letter: "A", text: "Describe the invention well enough for others to build it" },
            { letter: "B", text: "Sell the invention to the government after twenty years" },
            { letter: "C", text: "Prove that the invention has already earned money" },
            { letter: "D", text: "Agree never to improve the invention afterward" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "11.RI.1.C",
          stem: "The author's main purpose in writing about patents is to —",
          choices: [
            { letter: "A", text: "persuade young inventors to apply for patents early" },
            { letter: "B", text: "warn readers about people who copy inventions" },
            { letter: "C", text: "compare patent laws in several different countries" },
            { letter: "D", text: "explain how patents balance private and public interests" }
          ],
          correct: "D"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "How does the author organize sentences 1 through 4?",
          choices: [
            { letter: "A", text: "By telling the story of one inventor's first patent" },
            { letter: "B", text: "By defining a patent, then showing what each side gets" },
            { letter: "C", text: "By listing patents in the order they were granted" },
            { letter: "D", text: "By arguing against one view and then another" }
          ],
          correct: "B"
        },
        {
          id: "recipes",
          sol: "11.RI.2.B",
          stem: "The comparison to cooks reading old recipes in sentence 6 helps the reader understand that engineers —",
          choices: [
            { letter: "A", text: "mine old patents for reusable methods" },
            { letter: "B", text: "prefer cooking to building new machines" },
            { letter: "C", text: "follow every old design step by step" },
            { letter: "D", text: "find old patents confusing and outdated" }
          ],
          correct: "A"
        },
        {
          id: "trust",
          sol: "11.RI.2.C",
          stem: "In sentence 8, the phrase \"holds the idea in trust\" suggests that a patent —",
          choices: [
            { letter: "A", text: "lets a bank own the idea until it is paid for" },
            { letter: "B", text: "depends on the inventor's honesty alone" },
            { letter: "C", text: "hides the idea until someone asks to see it" },
            { letter: "D", text: "guards the idea for a time before releasing it" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-ri-c90-dotsheet",
      family: "G11",
      title: "The Grid Behind the Magic",
      kind: "Informational · 11.RI",
      blurb: "How a marching band turns a star into a wave: drill charts, dot sheets, and eight-to-five steps.",
      level: 2,
      passage:
        "<p>" + N(1) + "To the crowd, a marching band's shapes seem to appear by magic: a spinning star dissolves into a wave, and the wave folds into a giant letter. " +
        N(2) + "The magic is actually a grid. " +
        N(3) + "Before the season begins, a drill writer plots every performer's position on a chart of the field, set by set. " +
        N(4) + "Each performer receives a small card, called a dot sheet, listing where to stand at each set, measured in steps from the nearest yard line and hash mark. " +
        N(5) + "A standard step is \"eight to five,\" meaning eight steps cover five yards. " +
        N(6) + "During rehearsal, students memorize their paths between dots while counting beats. " +
        N(7) + "If one marcher is off by even two steps, the shape bends visibly from the press box. " +
        N(8) + "For that reason, directors often film rehearsals from high above, where errors that feel invisible on the grass become obvious." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the main idea of the passage about drill?",
          choices: [
            { letter: "A", text: "Audiences care more about music than about shapes." },
            { letter: "B", text: "Band shapes come from precise plans that marchers memorize." },
            { letter: "C", text: "Drill writers make up new shapes during each game." },
            { letter: "D", text: "Filming rehearsals is the most important job of a director." }
          ],
          correct: "B"
        },
        {
          id: "dotsheet",
          sol: "11.RI.1.B",
          stem: "According to the passage, what does a dot sheet tell a performer?",
          choices: [
            { letter: "A", text: "Which music to play during each part of the show" },
            { letter: "B", text: "How many beats are in the whole halftime show" },
            { letter: "C", text: "Where the director will stand to film the show" },
            { letter: "D", text: "Where to stand at each set, based on field markings" }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          stem: "The author's attitude toward the band's \"magic\" is best described as —",
          choices: [
            { letter: "A", text: "admiring, but eager to show the method behind it" },
            { letter: "B", text: "mocking, because the shapes are easy to make" },
            { letter: "C", text: "puzzled, because no one can explain the shapes" },
            { letter: "D", text: "worried, because the shapes often go wrong" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          stem: "The passage about drill is organized mainly by moving from —",
          choices: [
            { letter: "A", text: "a problem in one show to its long-term solution" },
            { letter: "B", text: "the history of marching bands to their future" },
            { letter: "C", text: "how shapes look to how they are made" },
            { letter: "D", text: "one band's opinion to another band's opposing view" }
          ],
          correct: "C"
        },
        {
          id: "grid",
          sol: "11.RI.2.B",
          stem: "Sentence 2, \"The magic is actually a grid,\" serves mainly to —",
          choices: [
            { letter: "A", text: "suggest that the audience is easily fooled" },
            { letter: "B", text: "move from what the crowd sees to how it works" },
            { letter: "C", text: "introduce a new topic unrelated to marching" },
            { letter: "D", text: "explain why football fields have yard lines" }
          ],
          correct: "B"
        },
        {
          id: "film",
          sol: "11.RI.2.C",
          stem: "The author includes the detail about filming from high above in sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "show that bands now perform mostly for video" },
            { letter: "B", text: "suggest that marchers dislike being recorded" },
            { letter: "C", text: "compare marching bands with football teams" },
            { letter: "D", text: "show how directors catch errors marchers miss" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-ri-c90-inkwell",
      family: "G11",
      title: "Selling an Evening",
      kind: "Informational · 11.RI",
      blurb: "A small river-town bookstore cannot beat the warehouse on price, so it sells something else.",
      level: 3,
      passage:
        "<p>" + N(1) + "Independent bookstores rarely win on price. " +
        N(2) + "A large online seller can ship most titles for less than a small shop pays its distributor, and a shop on a busy main street pays rent that a warehouse never sees. " +
        N(3) + "So the shops that survive have learned to sell something a warehouse cannot: an evening. " +
        N(4) + "At the Inkwell, a store in the river town of Calder Falls, the owner schedules something nearly every night, from a Monday knitting circle to a Thursday poetry open mic to a Saturday story hour that fills the children's carpet by ten. " +
        N(5) + "Few of these events earn money directly. " +
        N(6) + "But the owner's records show that customers who attend an event spend nearly twice as much in the store that month as customers who do not. " +
        N(7) + "The events are not a distraction from bookselling. " +
        N(8) + "They are how this kind of bookselling now works." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          stem: "Which sentence best states the central idea of \"Selling an Evening\"?",
          choices: [
            { letter: "A", text: "Small bookstores survive by offering experiences warehouses cannot." },
            { letter: "B", text: "Online sellers will soon replace every independent bookstore." },
            { letter: "C", text: "Bookstores should charge admission for their evening events." },
            { letter: "D", text: "Children's story hours are the most popular bookstore event." }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "11.RI.1.B",
          stem: "Which sentence provides evidence that the Inkwell's events help the store financially?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "interp",
          sol: "11.RI.1.C",
          stem: "Which sentence is the author's interpretation rather than a reported fact?",
          choices: [
            { letter: "A", text: "Sentence 4, describing the weekly schedule" },
            { letter: "B", text: "Sentence 5, about events earning little money" },
            { letter: "C", text: "Sentence 8, about how bookselling now works" },
            { letter: "D", text: "Sentence 6, about the owner's sales records" }
          ],
          correct: "C"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "How is the passage about the Inkwell organized?",
          choices: [
            { letter: "A", text: "Two bookstores are compared point by point." },
            { letter: "B", text: "A problem is described, then one store's answer." },
            { letter: "C", text: "Events are listed in order from least to most popular." },
            { letter: "D", text: "A claim is stated, then rejected in the final sentence." }
          ],
          correct: "B"
        },
        {
          id: "evening",
          sol: "11.RI.2.B",
          stem: "In sentence 3, the author says that surviving shops sell \"an evening\" mainly to —",
          choices: [
            { letter: "A", text: "stress that they offer experiences, not only goods" },
            { letter: "B", text: "point out that the shops are open only at night" },
            { letter: "C", text: "suggest that the shops have stopped selling books" },
            { letter: "D", text: "explain why the shops' rent is so expensive" }
          ],
          correct: "A"
        },
        {
          id: "rent",
          sol: "11.RI.2.C",
          stem: "The details about distributors and rent in sentence 2 mainly help explain —",
          choices: [
            { letter: "A", text: "why the Inkwell moved to Calder Falls" },
            { letter: "B", text: "how online sellers choose which titles to ship" },
            { letter: "C", text: "why small shops cannot compete on price" },
            { letter: "D", text: "how owners decide which events to schedule" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-ri-c90-streetpermit",
      family: "G11",
      title: "Paperwork for a Party",
      kind: "Informational · 11.RI",
      blurb: "Why closing a street for one afternoon takes signatures, maps, and a twenty-foot lane.",
      level: 2,
      passage:
        "<p>" + N(1) + "In many cities, closing a residential street for a block party takes more paperwork than neighbors expect. " +
        N(2) + "Organizers usually apply to the city's transportation office several weeks ahead. " +
        N(3) + "Most applications ask for a map of the closed section, the hours of the event, and signatures from a majority of households on the block. " +
        N(4) + "The signature rule exists because a closure affects everyone: a resident who did not agree to the party may still need to park, receive a delivery, or leave for a night shift. " +
        N(5) + "Cities also require a clear lane, often twenty feet wide, so that fire engines and ambulances can enter. " +
        N(6) + "Some offices lend barricades for free; others charge a small fee. " +
        N(7) + "The process can feel like bureaucracy for its own sake. " +
        N(8) + "Read closely, though, each rule answers one simple question: what happens to the neighbor who is not celebrating?" +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          stem: "Which statement best summarizes the passage about block party permits?",
          choices: [
            { letter: "A", text: "Most cities refuse to let neighbors close their streets." },
            { letter: "B", text: "Barricades are the most expensive part of a block party." },
            { letter: "C", text: "Organizers should skip the permit if the party is small." },
            { letter: "D", text: "Permit rules that seem tedious protect safety and neighbors." }
          ],
          correct: "D"
        },
        {
          id: "lane",
          sol: "11.RI.1.B",
          stem: "According to the passage, why do cities require a clear lane during a block party?",
          choices: [
            { letter: "A", text: "So that delivery trucks can unload food" },
            { letter: "B", text: "So that emergency vehicles can get through" },
            { letter: "C", text: "So that neighbors can park in front of homes" },
            { letter: "D", text: "So that city workers can deliver barricades" }
          ],
          correct: "B"
        },
        {
          id: "audience",
          sol: "11.RI.1.C",
          stem: "This passage is most likely written for —",
          choices: [
            { letter: "A", text: "residents thinking about organizing a block party" },
            { letter: "B", text: "firefighters who drive engines through the city" },
            { letter: "C", text: "city officials who write the permit rules" },
            { letter: "D", text: "companies that build and rent barricades" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "How does the author organize sentences 3 through 6?",
          choices: [
            { letter: "A", text: "As a story about one family's block party" },
            { letter: "B", text: "As a comparison of two cities' permit offices" },
            { letter: "C", text: "As a list of requirements, some with reasons" },
            { letter: "D", text: "As a timeline of the day of the party" }
          ],
          correct: "C"
        },
        {
          id: "bureaucracy",
          sol: "11.RI.2.B",
          stem: "Sentence 7 serves mainly to —",
          choices: [
            { letter: "A", text: "prove that the permit process is unfair" },
            { letter: "B", text: "introduce a new requirement for organizers" },
            { letter: "C", text: "explain why some offices charge a fee" },
            { letter: "D", text: "admit a common complaint before answering it" }
          ],
          correct: "D"
        },
        {
          id: "question",
          sol: "11.RI.2.C",
          stem: "In sentence 8, the question about \"the neighbor who is not celebrating\" mainly functions to —",
          choices: [
            { letter: "A", text: "criticize residents who skip the party" },
            { letter: "B", text: "suggest that parties should be canceled" },
            { letter: "C", text: "reveal the purpose shared by all the rules" },
            { letter: "D", text: "invite readers to sign the application" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-ri-c90-priorart",
      family: "G11",
      title: "File First, Then Share",
      kind: "Informational · 11.RI",
      blurb: "What examiners mean by prior art, and how an eager inventor can block her own patent.",
      level: 3,
      passage:
        "<p>" + N(1) + "Before an examiner grants a patent, she searches for what the law calls prior art: any earlier public evidence that the idea already existed. " +
        N(2) + "Prior art does not have to be another patent. " +
        N(3) + "A trade-magazine article, a conference poster, a product manual, or even a video posted online can count, as long as it was public before the application. " +
        N(4) + "This rule surprises many first-time inventors, who assume that an idea no one has patented is free to claim. " +
        N(5) + "It also creates an odd trap. " +
        N(6) + "An inventor who shows a new design at a public fair, eager for feedback, may have just created prior art against herself; in some countries, that single demonstration can make the idea unpatentable. " +
        N(7) + "Patent attorneys therefore give advice that sounds unfriendly to the spirit of invention: file first, then share. " +
        N(8) + "The rule is not meant to discourage openness, but it rewards inventors who know the order of the steps." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the central idea of \"File First, Then Share\"?",
          choices: [
            { letter: "A", text: "Patent examiners rarely find evidence of earlier ideas." },
            { letter: "B", text: "Public evidence, even from the inventor, can block a patent." },
            { letter: "C", text: "Inventors should never show their designs to anyone at all." },
            { letter: "D", text: "Trade magazines are the main source of new inventions." }
          ],
          correct: "B"
        },
        {
          id: "count",
          sol: "11.RI.1.B",
          stem: "According to the passage, which of these could count as prior art?",
          choices: [
            { letter: "A", text: "A sketch kept private in a desk drawer" },
            { letter: "B", text: "A design first described after the application" },
            { letter: "C", text: "A product manual published years earlier" },
            { letter: "D", text: "An idea an inventor has not told anyone" }
          ],
          correct: "C"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          stem: "The author's attitude toward the advice \"file first, then share\" is best described as —",
          choices: [
            { letter: "A", text: "openly hostile toward patent attorneys" },
            { letter: "B", text: "enthusiastic and completely uncritical" },
            { letter: "C", text: "confused about why the advice exists" },
            { letter: "D", text: "aware of its cost but sure of its sense" }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          stem: "Which description best matches how \"File First, Then Share\" is structured?",
          choices: [
            { letter: "A", text: "A term is defined and illustrated, then a consequence leads to advice." },
            { letter: "B", text: "Two inventors are compared, and the more successful one is praised." },
            { letter: "C", text: "Events in one patent case are told in the order they happened." },
            { letter: "D", text: "A question is asked in the first sentence and left unanswered." }
          ],
          correct: "A"
        },
        {
          id: "trap",
          sol: "11.RI.2.B",
          stem: "In sentence 5, the author calls the rule \"an odd trap\" mainly to —",
          choices: [
            { letter: "A", text: "signal that the rule can surprise inventors" },
            { letter: "B", text: "suggest that examiners try to trick inventors" },
            { letter: "C", text: "argue that the rule should be removed from law" },
            { letter: "D", text: "compare inventors to animals caught in the wild" }
          ],
          correct: "A"
        },
        {
          id: "fair",
          sol: "11.RI.2.C",
          stem: "The author includes the example of the public fair in sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "recommend fairs as the best place to find investors" },
            { letter: "B", text: "explain how examiners search for prior art online" },
            { letter: "C", text: "show how an inventor's openness can backfire" },
            { letter: "D", text: "prove that most inventors enjoy public attention" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-ri-c90-bandheat",
      family: "G11",
      title: "Heat Is Part of the Show",
      kind: "Informational · 11.RI",
      blurb: "Blacktop, heavy horns, and water breaks: how band directors plan around the hottest week of the year.",
      level: 1,
      passage:
        "<p>" + N(1) + "Summer band camp is often the hottest week of a marcher's year. " +
        N(2) + "Rehearsals run for hours on blacktop or artificial turf, surfaces that can be much hotter than the air above them. " +
        N(3) + "Uniforms are not worn at camp, but instruments add weight, and a sousaphone can weigh more than thirty pounds. " +
        N(4) + "Directors use several strategies to keep students safe. " +
        N(5) + "Many schedule the hardest marching for early morning and move music rehearsal indoors during the afternoon. " +
        N(6) + "Water breaks come every twenty to thirty minutes, whether or not anyone asks for one. " +
        N(7) + "Students are taught to watch one another for warning signs such as dizziness, confusion, or sudden chills. " +
        N(8) + "A band can march in perfect lines and still fail if a single member collapses. " +
        N(9) + "Good directors treat the heat as part of the show's design." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          stem: "What is the main idea of \"Heat Is Part of the Show\"?",
          choices: [
            { letter: "A", text: "Directors plan carefully around heat to protect students." },
            { letter: "B", text: "Band camp should be moved to the cooler fall months." },
            { letter: "C", text: "Sousaphones are too heavy for most students to carry." },
            { letter: "D", text: "Indoor rehearsals are better than outdoor rehearsals." }
          ],
          correct: "A"
        },
        {
          id: "surface",
          sol: "11.RI.1.B",
          stem: "According to the passage, why is rehearsing on blacktop or turf especially risky?",
          choices: [
            { letter: "A", text: "Those surfaces are slippery after rain." },
            { letter: "B", text: "Those surfaces damage marchers' shoes." },
            { letter: "C", text: "Those surfaces can be hotter than the air." },
            { letter: "D", text: "Those surfaces make instruments heavier." }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "11.RI.1.C",
          stem: "The author's main purpose in describing band camp is to —",
          choices: [
            { letter: "A", text: "persuade students to quit marching band" },
            { letter: "B", text: "explain how directors manage a real danger" },
            { letter: "C", text: "describe the music bands play in summer" },
            { letter: "D", text: "compare band camp with football practice" }
          ],
          correct: "B"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "How does the author organize the passage about band camp?",
          choices: [
            { letter: "A", text: "By telling one student's story from start to finish" },
            { letter: "B", text: "By comparing two directors with opposite methods" },
            { letter: "C", text: "By listing events in the order of a camp day" },
            { letter: "D", text: "By presenting a danger and then ways to reduce it" }
          ],
          correct: "D"
        },
        {
          id: "collapse",
          sol: "11.RI.2.B",
          stem: "The author includes sentence 8, about a single member collapsing, mainly to —",
          choices: [
            { letter: "A", text: "warn that perfect lines are impossible in hot weather" },
            { letter: "B", text: "stress that safety matters more than a polished show" },
            { letter: "C", text: "suggest that weaker students should not march" },
            { letter: "D", text: "describe an accident that happened at one camp" }
          ],
          correct: "B"
        },
        {
          id: "asks",
          sol: "11.RI.2.C",
          stem: "In sentence 6, the phrase \"whether or not anyone asks for one\" emphasizes that water breaks are —",
          choices: [
            { letter: "A", text: "rare rewards for good marching" },
            { letter: "B", text: "chosen by students as needed" },
            { letter: "C", text: "short and often skipped by directors" },
            { letter: "D", text: "required on a schedule, not optional" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── FUNCTIONAL & ARGUMENT ───────────────────────── */
    {
      id: "g11-ri-c90-maplecourt",
      family: "G11",
      title: "Maple Court Sign-Up Sheet",
      kind: "Functional text · 11.RI",
      blurb: "Food rows, volunteer shifts, and a deadline for moving cars before the street closes.",
      level: 1,
      passage:
        "<p><strong>Maple Court Block Party — Saturday, September 14, 1:00–7:00 p.m. (Rain date: September 21)</strong></p>" +
        "<p><strong>How to Sign Up</strong><br>" + N(1) + "Write your name and house number next to one food category and one volunteer shift on the sheet posted by the mailboxes. " +
        N(2) + "Each category has room for eight households; once a row is full, please choose another.</p>" +
        "<p><strong>Food</strong><br>" + N(3) + "Bring enough to serve about twelve people, and label any dish that contains nuts, dairy, or eggs. " +
        N(4) + "Grills will be provided, but each household must bring its own serving utensils.</p>" +
        "<p><strong>Volunteer Shifts</strong><br>" + N(5) + "Setup runs from noon to 1:00, and cleanup runs from 7:00 to 8:00. " +
        N(6) + "Cleanup volunteers should bring work gloves.</p>" +
        "<p><strong>Important</strong><br>" + N(7) + "The street will be closed to cars from 11:30 a.m. to 8:30 p.m., so please move vehicles off Maple Court by 11:15 a.m. " +
        N(8) + "Questions? Contact the organizer, Hana Sato, at house 22.</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          stem: "Which statement best summarizes the information on the Maple Court sheet?",
          choices: [
            { letter: "A", text: "It asks neighbors to vote on a date for the party." },
            { letter: "B", text: "It explains how households can help and what rules apply." },
            { letter: "C", text: "It warns residents that the party may be canceled." },
            { letter: "D", text: "It lists the dishes each household has agreed to bring." }
          ],
          correct: "B"
        },
        {
          id: "cars",
          sol: "11.RI.1.B",
          stem: "According to the sheet, by what time must residents move their cars off Maple Court?",
          choices: [
            { letter: "A", text: "Noon" },
            { letter: "B", text: "11:30 a.m." },
            { letter: "C", text: "11:15 a.m." },
            { letter: "D", text: "1:00 p.m." }
          ],
          correct: "C"
        },
        {
          id: "readers",
          sol: "11.RI.1.C",
          stem: "The intended readers of the Maple Court sheet are most likely —",
          choices: [
            { letter: "A", text: "households who live on Maple Court" },
            { letter: "B", text: "city workers who deliver barricades" },
            { letter: "C", text: "restaurants hired to cater the party" },
            { letter: "D", text: "drivers passing through the neighborhood" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          stem: "The bold headings on the Maple Court sheet help the reader mainly by —",
          choices: [
            { letter: "A", text: "showing which tasks are the most important" },
            { letter: "B", text: "listing the households in order of address" },
            { letter: "C", text: "explaining why the party is held each year" },
            { letter: "D", text: "grouping instructions so each is easy to find" }
          ],
          correct: "D"
        },
        {
          id: "rows",
          sol: "11.RI.2.B",
          stem: "Sentence 2, about rows filling up, is included mainly to —",
          choices: [
            { letter: "A", text: "keep the food spread across all categories" },
            { letter: "B", text: "limit the party to only eight households" },
            { letter: "C", text: "encourage neighbors to sign up for two shifts" },
            { letter: "D", text: "explain why the sheet is posted by the mailboxes" }
          ],
          correct: "A"
        },
        {
          id: "allergy",
          sol: "11.RI.2.C",
          stem: "Which sentence makes clear that some guests may need to avoid certain foods?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-ri-c90-tradein",
      family: "G11",
      title: "Trade-In Credit Policy",
      kind: "Functional text · 11.RI",
      blurb: "A used bookstore explains which books it buys, what credit they earn, and how credit can be spent.",
      level: 2,
      passage:
        "<p><strong>Second Chapter Books — Trade-In Credit Policy</strong></p>" +
        "<p>" + N(1) + "We gladly accept used books for store credit Tuesday through Friday, 10 a.m. to 4 p.m. " +
        N(2) + "Please bring no more than two bags per visit so that our buyers can review every book with care.</p>" +
        "<p><strong>What We Accept</strong><br>" + N(3) + "We accept fiction, history, science, cookbooks, and children's books in good condition. " +
        N(4) + "We cannot accept textbooks older than five years, magazines, or books with water damage, missing pages, or heavy highlighting.</p>" +
        "<p><strong>How Credit Works</strong><br>" + N(5) + "Accepted books earn credit equal to 25 percent of our resale price. " +
        N(6) + "Credit is stored under your phone number and never expires. " +
        N(7) + "Credit may cover up to half the cost of any purchase; the rest must be paid by cash or card.</p>" +
        "<p><strong>Books We Turn Down</strong><br>" + N(8) + "We can donate books we do not accept to the Harbor Street Library, or you may take them home.</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          stem: "Which statement best summarizes the Second Chapter trade-in policy?",
          choices: [
            { letter: "A", text: "The store buys any used book for cash on the spot." },
            { letter: "B", text: "The store accepts only textbooks and magazines." },
            { letter: "C", text: "The store gives limited credit for books in good shape." },
            { letter: "D", text: "The store donates every book it receives to a library." }
          ],
          correct: "C"
        },
        {
          id: "spend",
          sol: "11.RI.1.B",
          stem: "According to the policy, how may a customer use store credit?",
          choices: [
            { letter: "A", text: "To pay for up to half of a purchase" },
            { letter: "B", text: "To receive cash back at the register" },
            { letter: "C", text: "To pay the full cost of any book" },
            { letter: "D", text: "To buy books at the Harbor Street Library" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "11.RI.1.C",
          stem: "The tone of the trade-in policy is best described as —",
          choices: [
            { letter: "A", text: "apologetic and uncertain" },
            { letter: "B", text: "stern and suspicious" },
            { letter: "C", text: "casual and joking" },
            { letter: "D", text: "welcoming but firm" }
          ],
          correct: "D"
        },
        {
          id: "order",
          sol: "11.RI.2.A",
          stem: "The section \"What We Accept\" most likely comes before \"How Credit Works\" because readers —",
          choices: [
            { letter: "A", text: "care more about rules than about money" },
            { letter: "B", text: "must know if books qualify before credit matters" },
            { letter: "C", text: "must donate books before they can earn any credit" },
            { letter: "D", text: "usually read only the first section of a policy" }
          ],
          correct: "B"
        },
        {
          id: "turned",
          sol: "11.RI.2.B",
          stem: "The final section of the policy (sentence 8) is included mainly to —",
          choices: [
            { letter: "A", text: "advertise the Harbor Street Library's hours" },
            { letter: "B", text: "tell customers what happens to rejected books" },
            { letter: "C", text: "explain how the store sets its resale prices" },
            { letter: "D", text: "warn customers about books with water damage" }
          ],
          correct: "B"
        },
        {
          id: "expire",
          sol: "11.RI.2.C",
          stem: "Which sentence makes clear that customers can save credit for a long time?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-ri-c90-bandcredit",
      family: "G11",
      title: "Fourteen Thousand Steps",
      kind: "Argument · 11.RI",
      blurb: "A student argues that marching band should count toward physical education credit.",
      level: 3,
      passage:
        "<p>" + N(1) + "At Linwood High, a student who plays junior varsity soccer can earn physical education credit; a student who marches in the band cannot. " +
        N(2) + "This policy assumes that band is music with some walking attached. " +
        N(3) + "Anyone who has watched a summer rehearsal knows better. " +
        N(4) + "Marchers drill for up to three hours a day in August, carrying instruments that can weigh more than thirty pounds, and a typical show requires them to move backward, sideways, and at full speed without missing a note. " +
        N(5) + "Last fall, our band director tracked the step counts of twenty volunteer marchers; on rehearsal days, they averaged more than fourteen thousand steps. " +
        N(6) + "Critics argue that PE credit should reward instruction in fitness, not simply activity. " +
        N(7) + "That is a fair point, which is why band members could complete the same short fitness unit that soccer players take. " +
        N(8) + "Evidence, not tradition, should decide what counts as exercise." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the writer's main claim about band and PE credit?",
          choices: [
            { letter: "A", text: "Soccer players should lose their PE credit at Linwood." },
            { letter: "B", text: "Band directors should track every marcher's steps." },
            { letter: "C", text: "PE classes should include more music instruction." },
            { letter: "D", text: "Marching band should earn PE credit like other sports." }
          ],
          correct: "D"
        },
        {
          id: "data",
          sol: "11.RI.1.B",
          stem: "Which sentence offers measured data to support the writer's claim?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "C"
        },
        {
          id: "critics",
          sol: "11.RI.1.C",
          stem: "The writer's attitude toward the critics in sentences 6 and 7 is best described as —",
          choices: [
            { letter: "A", text: "dismissive and openly mocking" },
            { letter: "B", text: "fair-minded and flexible" },
            { letter: "C", text: "fearful and very defensive" },
            { letter: "D", text: "confused and quite uncertain" }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "11.RI.2.A",
          stem: "Which choice best describes the order of the writer's argument?",
          choices: [
            { letter: "A", text: "A problem, evidence, a counterclaim and reply, then a principle" },
            { letter: "B", text: "A personal story, a list of sports, then a call to quit band" },
            { letter: "C", text: "Two equal sides presented without any conclusion" },
            { letter: "D", text: "A timeline of the band program from its founding" }
          ],
          correct: "A"
        },
        {
          id: "walking",
          sol: "11.RI.2.B",
          stem: "In sentence 2, the phrase \"music with some walking attached\" mainly serves to —",
          choices: [
            { letter: "A", text: "sum up, a bit mockingly, the opposing view" },
            { letter: "B", text: "describe accurately how most bands rehearse" },
            { letter: "C", text: "admit that band is less demanding than soccer" },
            { letter: "D", text: "praise the school for its current policy" }
          ],
          correct: "A"
        },
        {
          id: "unit",
          sol: "11.RI.2.C",
          stem: "The writer mentions the soccer players' fitness unit in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "argue that the fitness unit should be canceled" },
            { letter: "B", text: "show that soccer players dislike the unit" },
            { letter: "C", text: "suggest that band members are more fit" },
            { letter: "D", text: "hold band members to the same standard" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── VOCABULARY ───────────────────────── */
    {
      id: "g11-rv-c90-foxglove",
      family: "G11",
      title: "The Unsorted Shelf",
      kind: "Vocabulary · 11.RV",
      blurb: "A bookseller who chooses every title by hand, and the one shelf he leaves to chance.",
      level: 1,
      passage:
        "<p>" + N(1) + "The owner of Foxglove Books, Mr. Adeyemi, likes to say that he does not sell books; he <strong>curates</strong> them, choosing each title by hand the way a museum chooses paintings for its walls. " +
        N(2) + "His shelves are <strong>eclectic</strong>: a field guide to mushrooms sits beside a cookbook from Peru and a biography of a lighthouse keeper. " +
        N(3) + "The building itself is somewhat <strong>dilapidated</strong>, with a sagging porch, peeling paint, and a door that sticks in humid weather. " +
        N(4) + "Still, loyal <strong>patrons</strong> arrive every Saturday, many of them regulars who know the shop cat by name. " +
        N(5) + "On Mondays, Mr. Adeyemi <strong>replenishes</strong> the shelves, filling the gaps left by the weekend's sales. " +
        N(6) + "He keeps one shelf <strong>unsorted</strong> on purpose, because, he says, a reader should sometimes find a book she was not looking for." +
        "</p>",
      claims: [
        {
          id: "curates",
          sol: "11.RV.1.B",
          stem: "In sentence 1, the comparison to a museum helps show that \"curates\" means —",
          choices: [
            { letter: "A", text: "repairs damaged items" },
            { letter: "B", text: "sells at a high price" },
            { letter: "C", text: "selects with great care" },
            { letter: "D", text: "displays on bare walls" }
          ],
          correct: "C"
        },
        {
          id: "eclectic",
          sol: "11.RV.1.B",
          stem: "Which details from sentence 2 best help the reader understand the meaning of \"eclectic\"?",
          choices: [
            { letter: "A", text: "The shelves belong to Mr. Adeyemi." },
            { letter: "B", text: "Very different kinds of books sit side by side." },
            { letter: "C", text: "The cookbook comes from another country." },
            { letter: "D", text: "The biography is about a lighthouse keeper." }
          ],
          correct: "B"
        },
        {
          id: "replenish",
          sol: "11.RV.1.A",
          stem: "The word \"replenishes\" in sentence 5 begins with the prefix re-, as in refill and rebuild. In all three words, re- signals —",
          choices: [
            { letter: "A", text: "doing something again or restoring it" },
            { letter: "B", text: "doing something before others do" },
            { letter: "C", text: "doing something poorly or by mistake" },
            { letter: "D", text: "doing something against someone's will" }
          ],
          correct: "A"
        },
        {
          id: "unsorted",
          sol: "11.RV.1.A",
          stem: "The prefix un- in \"unsorted\" (sentence 6) tells the reader that the shelf —",
          choices: [
            { letter: "A", text: "has been sorted twice" },
            { letter: "B", text: "is about to be sorted" },
            { letter: "C", text: "was sorted by customers" },
            { letter: "D", text: "has not been put in order" }
          ],
          correct: "D"
        },
        {
          id: "dilapidated",
          sol: "11.RV.1.C",
          stem: "In sentence 3, the word \"dilapidated\" most nearly means —",
          choices: [
            { letter: "A", text: "newly built" },
            { letter: "B", text: "brightly painted" },
            { letter: "C", text: "oddly shaped" },
            { letter: "D", text: "run-down" }
          ],
          correct: "D"
        },
        {
          id: "patrons",
          sol: "11.RV.1.C",
          stem: "As used in sentence 4, the word \"patrons\" most nearly means —",
          choices: [
            { letter: "A", text: "customers" },
            { letter: "B", text: "wealthy sponsors" },
            { letter: "C", text: "store employees" },
            { letter: "D", text: "visiting authors" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-rv-c90-filter",
      family: "G11",
      title: "Eleven Filters",
      kind: "Vocabulary · 11.RV",
      blurb: "A water filter made of a bottle and sand goes through eleven versions before the regional fair.",
      level: 2,
      passage:
        "<p>" + N(1) + "Mei's first water filter was <strong>rudimentary</strong>: a plastic bottle, a layer of sand, and a coffee filter held on with a rubber band. " +
        N(2) + "It worked, barely, and it leaked onto the kitchen table. " +
        N(3) + "Over the next month she learned to <strong>iterate</strong>, building a version, testing it, and then building a slightly better one, eleven times in all. " +
        N(4) + "Her teacher called the final design <strong>ingenious</strong>, praising how cleverly it used a single folded sheet of mesh in place of three separate screens. " +
        N(5) + "Before entering it in the regional fair, Mei checked whether her design might <strong>infringe</strong> on an existing patent, since copying a protected invention, even by accident, could get her disqualified. " +
        N(6) + "It did not. " +
        N(7) + "The judges agreed the filter was <strong>viable</strong>, able to work outside a lab, and noted that it made her first bottle look <strong>obsolete</strong>." +
        "</p>",
      claims: [
        {
          id: "rudimentary",
          sol: "11.RV.1.B",
          stem: "Which details from sentence 1 best clarify the meaning of \"rudimentary\"?",
          choices: [
            { letter: "A", text: "It was made of a bottle, sand, and a rubber band." },
            { letter: "B", text: "It was the very first filter Mei had ever made." },
            { letter: "C", text: "It was meant to clean water for people to drink." },
            { letter: "D", text: "It was something Mei built entirely by herself." }
          ],
          correct: "A"
        },
        {
          id: "iterate",
          sol: "11.RV.1.B",
          stem: "In sentence 3, the explanation after the comma shows that \"iterate\" means to —",
          choices: [
            { letter: "A", text: "give up after one failed test of a design" },
            { letter: "B", text: "copy someone else's finished design" },
            { letter: "C", text: "build, test, and improve again and again" },
            { letter: "D", text: "measure how much water a filter can hold" }
          ],
          correct: "C"
        },
        {
          id: "ingenious",
          sol: "11.RV.1.C",
          stem: "In sentence 4, the word \"ingenious\" most nearly means —",
          choices: [
            { letter: "A", text: "expensive and rare" },
            { letter: "B", text: "clever and inventive" },
            { letter: "C", text: "fragile and delicate" },
            { letter: "D", text: "ordinary and plain" }
          ],
          correct: "B"
        },
        {
          id: "infringe",
          sol: "11.RV.1.C",
          stem: "As used in sentence 5, \"infringe on\" most nearly means to —",
          choices: [
            { letter: "A", text: "add improvements to" },
            { letter: "B", text: "apply for use in place of" },
            { letter: "C", text: "compete fairly with" },
            { letter: "D", text: "violate the rights of" }
          ],
          correct: "D"
        },
        {
          id: "viable",
          sol: "11.RV.1.A",
          stem: "The word \"viable\" comes from a Latin root meaning life, as in vital and vivid. In sentence 7, a viable filter is one that —",
          choices: [
            { letter: "A", text: "is still only an idea on paper" },
            { letter: "B", text: "looks lively and colorful" },
            { letter: "C", text: "can function in real conditions" },
            { letter: "D", text: "must be replaced every year" }
          ],
          correct: "C"
        },
        {
          id: "disqualified",
          sol: "11.RV.1.A",
          stem: "The word \"disqualified\" in sentence 5 begins with dis-, as in disconnect and disagree. In these words, dis- signals —",
          choices: [
            { letter: "A", text: "doing something twice" },
            { letter: "B", text: "reversal or removal" },
            { letter: "C", text: "doing something with others" },
            { letter: "D", text: "making something larger" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rv-c90-cadence",
      family: "G11",
      title: "Step-Off",
      kind: "Vocabulary · 11.RV",
      blurb: "From warm-up noise to one chord off the storefronts: a parade band turns onto Main Street.",
      level: 3,
      passage:
        "<p>" + N(1) + "The drumline's street <strong>cadence</strong> set the pace for the parade, a steady pattern of beats that told two hundred feet when to fall. " +
        N(2) + "Ten minutes before step-off, though, the warm-up lot was pure <strong>cacophony</strong>: trumpets testing high notes, a tuba running scales, and three snare drums each playing a different rhythm. " +
        N(3) + "Then the section leader, Ibrahim, raised a stick, and the noise collapsed into silence. " +
        N(4) + "Learning to <strong>synchronize</strong> a hundred players takes months; nobody lands on the downbeat together by accident. " +
        N(5) + "The director is <strong>exacting</strong>, the kind of teacher who notices one marcher's elbow drifting an inch too high. " +
        N(6) + "Yet when the band turned onto Main Street and the first chord seemed to <strong>reverberate</strong> off the brick storefronts, even she smiled. " +
        N(7) + "The performance was not quite <strong>impeccable</strong>; a mellophone squeaked twice. " +
        N(8) + "No one on the sidewalk seemed to mind." +
        "</p>",
      claims: [
        {
          id: "cacophony",
          sol: "11.RV.1.B",
          stem: "Which words from sentence 2 best help the reader understand the meaning of \"cacophony\"?",
          choices: [
            { letter: "A", text: "\"Ten minutes before step-off, though\"" },
            { letter: "B", text: "\"the warm-up lot\"" },
            { letter: "C", text: "\"a tuba running scales\"" },
            { letter: "D", text: "\"each playing a different rhythm\"" }
          ],
          correct: "D"
        },
        {
          id: "impeccable",
          sol: "11.RV.1.B",
          stem: "In sentence 7, the clause after the semicolon shows that \"impeccable\" means —",
          choices: [
            { letter: "A", text: "without any flaw" },
            { letter: "B", text: "loud and lively" },
            { letter: "C", text: "slow and careful" },
            { letter: "D", text: "fun to watch" }
          ],
          correct: "A"
        },
        {
          id: "synchronize",
          sol: "11.RV.1.A",
          stem: "\"Synchronize\" combines syn-, meaning together, with chron, a root meaning time, as in chronological. In sentence 4, to synchronize players is to —",
          choices: [
            { letter: "A", text: "teach them to play more loudly" },
            { letter: "B", text: "arrange them by height and age" },
            { letter: "C", text: "make them act at the same moment" },
            { letter: "D", text: "give them a long break together" }
          ],
          correct: "C"
        },
        {
          id: "reverberate",
          sol: "11.RV.1.A",
          stem: "The word \"reverberate\" in sentence 6 begins with re-, meaning back. Based on this prefix and the context, the chord seemed to —",
          choices: [
            { letter: "A", text: "fade before it reached the street" },
            { letter: "B", text: "echo back from the buildings" },
            { letter: "C", text: "break the windows of the stores" },
            { letter: "D", text: "repeat the song from the beginning" }
          ],
          correct: "B"
        },
        {
          id: "exacting",
          sol: "11.RV.1.C",
          stem: "The author could have called the director strict. Compared with strict, the word \"exacting\" in sentence 5 adds the sense that she —",
          choices: [
            { letter: "A", text: "demands precision down to small details" },
            { letter: "B", text: "punishes students who make mistakes" },
            { letter: "C", text: "rarely speaks to the band directly" },
            { letter: "D", text: "cares little about the band's feelings" }
          ],
          correct: "A"
        },
        {
          id: "cadence",
          sol: "11.RV.1.C",
          stem: "As used in sentence 1, the word \"cadence\" most nearly means —",
          choices: [
            { letter: "A", text: "a loud trumpet signal" },
            { letter: "B", text: "a slow funeral march" },
            { letter: "C", text: "a rhythmic drum pattern" },
            { letter: "D", text: "the route of the parade" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rv-c90-larkspur",
      family: "G11",
      title: "The Larkspur Street Party",
      kind: "Vocabulary · 11.RV",
      blurb: "A sprinkler, a long table, and a quiet neighbor's pierogi recipe.",
      level: 2,
      passage:
        "<p>" + N(1) + "The Larkspur Street block party began as an <strong>impromptu</strong> gathering: one hot evening, a neighbor dragged a sprinkler into the road, and within an hour every child on the street was soaked. " +
        N(2) + "Now it is planned months ahead, but it keeps the same <strong>convivial</strong> spirit, full of laughter, shared plates, and long conversations in lawn chairs. " +
        N(3) + "The food is <strong>communal</strong>; families set dishes on one long table, and anyone may take from any of them. " +
        N(4) + "Even Mr. Kowalczyk, a <strong>reticent</strong> man who rarely says more than \"Good morning,\" spends the afternoon explaining his pierogi recipe to anyone who will listen. " +
        N(5) + "Neighbors who receive a plate of his dumplings usually <strong>reciprocate</strong> the next week with a loaf of bread or a jar of salsa. " +
        N(6) + "When the streetlights flicker on, the crowd begins to <strong>disperse</strong>, scattering back to porches one family at a time." +
        "</p>",
      claims: [
        {
          id: "impromptu",
          sol: "11.RV.1.C",
          stem: "In sentence 1, the word \"impromptu\" most nearly means —",
          choices: [
            { letter: "A", text: "noisy" },
            { letter: "B", text: "unplanned" },
            { letter: "C", text: "official" },
            { letter: "D", text: "overcrowded" }
          ],
          correct: "B"
        },
        {
          id: "convivial",
          sol: "11.RV.1.B",
          stem: "Which details from sentence 2 best clarify the meaning of \"convivial\"?",
          choices: [
            { letter: "A", text: "\"it is planned months ahead\"" },
            { letter: "B", text: "\"keeps the same\"" },
            { letter: "C", text: "\"in lawn chairs\"" },
            { letter: "D", text: "\"laughter, shared plates\"" }
          ],
          correct: "D"
        },
        {
          id: "communal",
          sol: "11.RV.1.A",
          stem: "The word \"communal\" shares a root with community and communicate. That shared root carries the idea of —",
          choices: [
            { letter: "A", text: "something held in common" },
            { letter: "B", text: "something cooked at home" },
            { letter: "C", text: "something kept private" },
            { letter: "D", text: "something sold for profit" }
          ],
          correct: "A"
        },
        {
          id: "reticent",
          sol: "11.RV.1.B",
          stem: "In sentence 4, the phrase \"rarely says more than 'Good morning'\" shows that \"reticent\" means —",
          choices: [
            { letter: "A", text: "rude to strangers" },
            { letter: "B", text: "eager to cook" },
            { letter: "C", text: "quiet and reserved" },
            { letter: "D", text: "new to the street" }
          ],
          correct: "C"
        },
        {
          id: "reciprocate",
          sol: "11.RV.1.C",
          stem: "As used in sentence 5, the word \"reciprocate\" most nearly means to —",
          choices: [
            { letter: "A", text: "refuse a gift politely" },
            { letter: "B", text: "ask for a recipe" },
            { letter: "C", text: "complain about food" },
            { letter: "D", text: "return a kindness" }
          ],
          correct: "D"
        },
        {
          id: "disperse",
          sol: "11.RV.1.A",
          stem: "The word \"disperse\" in sentence 6 begins with dis-, meaning apart, as in distribute. Based on this prefix and the context, to disperse is to —",
          choices: [
            { letter: "A", text: "gather closer together" },
            { letter: "B", text: "sing a closing song" },
            { letter: "C", text: "spread out and leave" },
            { letter: "D", text: "wait for a signal" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── PAIRED TEXTS ───────────────────────── */
    {
      id: "g11-dsr-c90-garnet",
      family: "G11",
      title: "Music Until Ten",
      kind: "Paired texts · 11.DSR",
      blurb: "A party flyer promises a band until ten; a neighbor who works nights tapes a note to the committee's door.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Flyer from the Garnet Street Party Committee</strong></p>" +
        "<p>" + N(1) + "Join us for the Garnet Street Summer Party on Saturday, July 19! " +
        N(2) + "The street will close at 2:00 p.m. for games, a potluck, and a bounce house for kids. " +
        N(3) + "This year, a local band, the Porch Lights, will play from 6:00 until 10:00 p.m. " +
        N(4) + "Bring a chair, a dish to share, and your neighbors. " +
        N(5) + "Everyone on Garnet Street is invited, and everyone is welcome to help plan.</p>" +
        "<p><strong>Text 2 — Note Taped to the Committee's Door</strong></p>" +
        "<p>" + N(6) + "I am glad the party is back, and I plan to bring my lemon bars. " +
        N(7) + "I do have one request. " +
        N(8) + "I work overnight shifts at the hospital and sleep from 7:00 p.m. until midnight on Saturdays. " +
        N(9) + "Could the band finish by 8:00, or set up at the far end of the block, near the park? " +
        N(10) + "I would rather ask now than complain later. —Rosa Delgado, No. 41</p>",
      claims: [
        {
          id: "shared",
          sol: "11.DSR.D",
          stem: "Which idea about the Garnet Street party do both texts share?",
          choices: [
            { letter: "A", text: "The party is a welcome event for the street." },
            { letter: "B", text: "The band should play louder than last year." },
            { letter: "C", text: "The party should be moved to the park." },
            { letter: "D", text: "The potluck needs more volunteers to cook." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          stem: "The two texts differ mainly in that Text 2 —",
          choices: [
            { letter: "A", text: "lists the games planned for the children" },
            { letter: "B", text: "invites neighbors to help plan the party" },
            { letter: "C", text: "announces a new date for the event" },
            { letter: "D", text: "raises a concern about the music schedule" }
          ],
          correct: "D"
        },
        {
          id: "respond",
          sol: "11.DSR.E",
          stem: "Which sentence from Text 1 does Rosa's note most directly respond to?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "11.DSR.E",
          stem: "Compared with the flyer, Rosa's note is more —",
          choices: [
            { letter: "A", text: "official and formal" },
            { letter: "B", text: "angry and accusing" },
            { letter: "C", text: "personal and specific" },
            { letter: "D", text: "cheerful and general" }
          ],
          correct: "C"
        },
        {
          id: "solution",
          sol: "11.DSR.E",
          stem: "Based on both texts, which change would best meet Rosa's request while keeping the band?",
          choices: [
            { letter: "A", text: "Moving the band to the park end of the block" },
            { letter: "B", text: "Canceling the bounce house for the children" },
            { letter: "C", text: "Starting the street closure at noon instead" },
            { letter: "D", text: "Asking Rosa to bring a different dessert" }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "11.DSR.D",
          stem: "Select TWO sentences that together explain why the band's schedule is a problem for Rosa.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: ["B", "C"]
        }
      ]
    },
    {
      id: "g11-dsr-c90-armchairs",
      family: "G11",
      title: "The Window Chairs",
      kind: "Paired texts · 11.DSR",
      blurb: "A bookstore owner plans to replace two armchairs with a shelf; a regular customer leaves a comment card.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From the Owner's Monthly Newsletter, Brightwater Books</strong></p>" +
        "<p>" + N(1) + "Starting next month, the two reading armchairs by the window will be replaced with a new shelf for graphic novels. " +
        N(2) + "This was not an easy decision. " +
        N(3) + "Our shop is small, and graphic novels are now our fastest-growing section. " +
        N(4) + "We have also noticed that the chairs are often occupied for whole afternoons by the same few visitors. " +
        N(5) + "We hope you will enjoy the expanded selection.</p>" +
        "<p><strong>Text 2 — Comment Card Left at the Register</strong></p>" +
        "<p>" + N(6) + "Please keep at least one chair. " +
        N(7) + "I have bought eleven books here this year, and I began almost every one of them sitting by that window. " +
        N(8) + "Reading the first chapter is how I decide. " +
        N(9) + "If the chair goes, I will still visit, but I will probably browse here and order online. " +
        N(10) + "Maybe a time limit would work better than removal.</p>",
      claims: [
        {
          id: "differ",
          sol: "11.DSR.D",
          stem: "Which statement best describes how the two texts view the armchairs differently?",
          choices: [
            { letter: "A", text: "Text 1 sees lost space; Text 2 sees a path to sales." },
            { letter: "B", text: "Text 1 sees them as worn out; Text 2 sees them as new." },
            { letter: "C", text: "Text 1 wants more chairs; Text 2 wants fewer chairs." },
            { letter: "D", text: "Text 1 blames customers; Text 2 blames graphic novels." }
          ],
          correct: "A"
        },
        {
          id: "agree",
          sol: "11.DSR.D",
          stem: "On which point would the owner and the customer most likely agree?",
          choices: [
            { letter: "A", text: "Graphic novels do not belong in a bookstore." },
            { letter: "B", text: "Time limits are unfair to regular visitors." },
            { letter: "C", text: "Ordering books online is usually cheaper." },
            { letter: "D", text: "The store needs customers to buy books there." }
          ],
          correct: "D"
        },
        {
          id: "challenge",
          sol: "11.DSR.E",
          stem: "Which sentence from Text 1 does sentence 7 most directly challenge?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "C"
        },
        {
          id: "conclude",
          sol: "11.DSR.E",
          stem: "A reader who considers both texts could best conclude that removing the chairs —",
          choices: [
            { letter: "A", text: "might cost the store sales it does not see" },
            { letter: "B", text: "will make the customer stop visiting at all" },
            { letter: "C", text: "was suggested first by the customer" },
            { letter: "D", text: "will be canceled because of the card" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "11.DSR.E",
          stem: "Compared with the newsletter, the comment card's tone is more —",
          choices: [
            { letter: "A", text: "distant and businesslike" },
            { letter: "B", text: "sarcastic and bitter" },
            { letter: "C", text: "cheerful and carefree" },
            { letter: "D", text: "personal and persuasive" }
          ],
          correct: "D"
        },
        {
          id: "reasons",
          sol: "11.RI.1.B",
          stem: "Select TWO sentences that give the owner's reasons for removing the chairs.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: ["B", "C"]
        }
      ]
    },
    {
      id: "g11-dsr-c90-filingprize",
      family: "G11",
      title: "A Prize for Patents?",
      kind: "Paired texts · 11.DSR",
      blurb: "A student editorial wants a science fair prize for patent filings; a physics teacher replies.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Student Editorial, The Ridgeview Signal</strong></p>" +
        "<p>" + N(1) + "Our science fair rewards posters, but the real world rewards inventions that people can protect and use. " +
        N(2) + "The fair should add a prize for any project with a patent application on file. " +
        N(3) + "Such a prize would push students to think like professional engineers, who must research earlier designs before they build. " +
        N(4) + "It would also show colleges that our school takes invention seriously.</p>" +
        "<p><strong>Text 2 — Reply from Ms. Achterberg, Physics Teacher</strong></p>" +
        "<p>" + N(5) + "I share the editorial's respect for real-world invention. " +
        N(6) + "But even a basic patent application can cost hundreds of dollars in fees, and legal help costs far more. " +
        N(7) + "A prize tied to filing would reward families who can pay, not students with the best ideas. " +
        N(8) + "A fairer step would be to teach every competitor how to search existing patents, a skill that costs nothing.</p>",
      claims: [
        {
          id: "value",
          sol: "11.DSR.D",
          stem: "Which value do the editorial and the reply share?",
          choices: [
            { letter: "A", text: "Posters are the best way to judge a project." },
            { letter: "B", text: "Colleges care mostly about science fair prizes." },
            { letter: "C", text: "Invention that works in the real world matters." },
            { letter: "D", text: "Every student should file for a patent soon." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          stem: "The texts differ mainly in that Ms. Achterberg —",
          choices: [
            { letter: "A", text: "thinks students should not study real inventions" },
            { letter: "B", text: "worries that a filing prize would favor money" },
            { letter: "C", text: "wants to remove all prizes from the science fair" },
            { letter: "D", text: "believes colleges ignore science fair results" }
          ],
          correct: "B"
        },
        {
          id: "buildon",
          sol: "11.DSR.E",
          stem: "Ms. Achterberg's suggestion in sentence 8 builds on which idea from Text 1?",
          choices: [
            { letter: "A", text: "The fair currently rewards posters (sentence 1)." },
            { letter: "B", text: "A prize should require a filed application (sentence 2)." },
            { letter: "C", text: "Engineers research earlier designs (sentence 3)." },
            { letter: "D", text: "Colleges notice serious schools (sentence 4)." }
          ],
          correct: "C"
        },
        {
          id: "method",
          sol: "11.DSR.E",
          stem: "Ms. Achterberg responds to the editorial's proposal mainly by —",
          choices: [
            { letter: "A", text: "mocking the student who wrote it" },
            { letter: "B", text: "granting its goal and offering a cheaper path" },
            { letter: "C", text: "agreeing with it completely and adding details" },
            { letter: "D", text: "changing the subject to classroom grades" }
          ],
          correct: "B"
        },
        {
          id: "unfair",
          sol: "11.DSR.E",
          stem: "Select TWO details from Text 2 that explain why a filing prize might be unfair.",
          choices: [
            { letter: "A", text: "A basic application can cost hundreds of dollars." },
            { letter: "B", text: "Searching existing patents costs nothing." },
            { letter: "C", text: "The teacher respects real-world invention." },
            { letter: "D", text: "The prize would reward families who can pay." }
          ],
          correct: ["A", "D"]
        },
        {
          id: "conclude",
          sol: "11.DSR.E",
          stem: "A student who read both texts could best conclude that the school —",
          choices: [
            { letter: "A", text: "could teach engineering habits without a filing" },
            { letter: "B", text: "should stop holding a science fair every year" },
            { letter: "C", text: "already teaches every student to search patents" },
            { letter: "D", text: "must pay the patent fees for every competitor" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-dsr-c90-uniformfee",
      family: "G11",
      title: "The Uniform Fee",
      kind: "Paired texts · 11.DSR",
      blurb: "The band boosters announce an $85 fee for new uniforms; a student columnist with safety pins in her jacket responds.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Email from the Fairhaven Band Boosters</strong></p>" +
        "<p>" + N(1) + "Our band's uniforms are twenty-two years old, and many of the jackets can no longer be repaired. " +
        N(2) + "After two years of fundraising, the boosters have raised about two-thirds of the cost of new uniforms. " +
        N(3) + "To cover the rest, each marching member will pay a one-time fee of $85 this fall. " +
        N(4) + "Families with questions may contact the boosters' treasurer.</p>" +
        "<p><strong>Text 2 — Student Column, The Fairhaven Current</strong></p>" +
        "<p>" + N(5) + "Everyone agrees the old jackets are falling apart; mine is held together with safety pins. " +
        N(6) + "But an $85 fee arrives the same month as instrument rental and band camp costs. " +
        N(7) + "At least three freshmen I know have said they may quit rather than ask their parents. " +
        N(8) + "The boosters could offer a sliding scale or a car wash weekend; the email mentions neither. " +
        N(9) + "A uniform should not cost a player her spot.</p>",
      claims: [
        {
          id: "accept",
          sol: "11.DSR.D",
          stem: "Which point do the boosters' email and the student column both accept?",
          choices: [
            { letter: "A", text: "Every member can easily afford the new fee." },
            { letter: "B", text: "The old uniforms need to be replaced." },
            { letter: "C", text: "A car wash would raise the remaining money." },
            { letter: "D", text: "Freshmen should not join the marching band." }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "11.DSR.D",
          stem: "Select TWO details that together best support the columnist's claim that the fee could drive students away.",
          choices: [
            { letter: "A", text: "The fee comes the same month as other band costs." },
            { letter: "B", text: "The columnist's jacket is held together with pins." },
            { letter: "C", text: "Three freshmen may quit rather than ask parents." },
            { letter: "D", text: "The boosters raised two-thirds of the cost." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "missing",
          sol: "11.DSR.E",
          stem: "In sentence 8, the columnist points out that the email leaves out —",
          choices: [
            { letter: "A", text: "the age of the current uniforms" },
            { letter: "B", text: "the total cost of the new uniforms" },
            { letter: "C", text: "the date that the fee is due" },
            { letter: "D", text: "ways to help families who cannot pay" }
          ],
          correct: "D"
        },
        {
          id: "treasurer",
          sol: "11.DSR.E",
          stem: "Read alongside the student column, the email's final sentence (sentence 4) is best seen as —",
          choices: [
            { letter: "A", text: "an offer of help too vague to reassure families" },
            { letter: "B", text: "a clear promise of financial aid for anyone" },
            { letter: "C", text: "a demand that families pay the fee at once" },
            { letter: "D", text: "an apology for raising money too slowly" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "11.DSR.E",
          stem: "Compared with the boosters' email, the student column's tone is more —",
          choices: [
            { letter: "A", text: "neutral and factual" },
            { letter: "B", text: "playful and joking" },
            { letter: "C", text: "urgent and personal" },
            { letter: "D", text: "formal and distant" }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          stem: "The two texts differ mainly in how they treat —",
          choices: [
            { letter: "A", text: "the condition of the old uniforms" },
            { letter: "B", text: "the boosters' two years of fundraising" },
            { letter: "C", text: "the role of the boosters' treasurer" },
            { letter: "D", text: "the fee's effect on families" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
