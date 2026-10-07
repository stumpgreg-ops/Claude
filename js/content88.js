/* SOL Labyrinth — Grade 11 tiny packs (nights 1–8), expansion file 88: the history of maps, a debate team,
 * clock and watch repair, and sea turtles. Literary, poetry, drama, informational, functional, argument,
 * vocabulary and paired texts for the G11 family. Original text only.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── LITERARY ───────────────────────── */
    {
      id: "g11-rl-c88-mantel",
      family: "G11",
      title: "The Mantel Clock",
      kind: "Literary · 11.RL",
      blurb: "Teodora finally sits at her grandfather's workbench and brings a silent clock back to life.",
      level: 1,
      passage:
        "<p>" + N(1) + "The mantel clock had been silent for eleven years when Teodora finally carried it down to her grandfather's old workbench. " +
        N(2) + "She had watched him repair hundreds of clocks, but he had never let her touch his tools. " +
        N(3) + "Now his loupe felt heavy and strange against her eye. " +
        N(4) + "For two hours she cleaned gears, straightened a bent pin, and wound the spring with careful fingers. " +
        N(5) + "When the pendulum finally swung, the ticking filled the room like a familiar voice returning home." +
        "</p>",
      claims: [
        {
          id: "grandfather",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 2 suggests that Teodora's grandfather —",
          choices: [
            { letter: "A", text: "wanted Teodora to become a clock repairer" },
            { letter: "B", text: "kept his tools and his work to himself" },
            { letter: "C", text: "repaired only a few clocks in his life" },
            { letter: "D", text: "taught Teodora every step of the craft" }
          ],
          correct: "B"
        },
        {
          id: "voice",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 5, comparing the ticking to a familiar voice returning home suggests that Teodora —",
          choices: [
            { letter: "A", text: "feels that something she missed has come back" },
            { letter: "B", text: "is annoyed by how loud the clock has become" },
            { letter: "C", text: "hears her grandfather calling from another room" },
            { letter: "D", text: "worries that the clock will soon stop again" }
          ],
          correct: "A"
        },
        {
          id: "loupe",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 3, the words heavy and strange show that Teodora feels —",
          choices: [
            { letter: "A", text: "bored by a task she has done many times" },
            { letter: "B", text: "proud that the tools now belong to her" },
            { letter: "C", text: "unused to doing work that was once his" },
            { letter: "D", text: "angry that the loupe is old and scratched" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does Teodora's repair of the clock most clearly develop?",
          choices: [
            { letter: "A", text: "Old machines are rarely worth the effort of fixing." },
            { letter: "B", text: "Rules set by elders should never be broken." },
            { letter: "C", text: "Skill comes only from years of formal training." },
            { letter: "D", text: "Carrying on a loved one's work can keep a memory alive." }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The story about Teodora is structured mainly around —",
          choices: [
            { letter: "A", text: "a single repair that moves from silence to sound" },
            { letter: "B", text: "a series of memories told out of order" },
            { letter: "C", text: "an argument between two family members" },
            { letter: "D", text: "a comparison of two different clocks" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-rl-c88-rebuttal",
      family: "G11",
      title: "Ninety Seconds",
      kind: "Literary · 11.RL",
      blurb: "Kwesi has ninety seconds to answer an argument he did not see coming.",
      level: 2,
      passage:
        "<p>" + N(1) + "The other team's final speaker sat down, and Kwesi realized that his prepared rebuttal answered an argument no one had made. " +
        N(2) + "His partner, Ayumi, slid a sticky note across the table: <em>Their numbers are from 2009.</em> " +
        N(3) + "The judge's timer glowed red, then green. " +
        N(4) + "Kwesi stood without his notes, his heart drumming against his ribs, and began with the only true thing he had. " +
        N(5) + "Ninety seconds later he could not remember a word he had said, but Ayumi was quietly nodding." +
        "</p>",
      claims: [
        {
          id: "note",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The sticky note in sentence 2 mainly serves to —",
          choices: [
            { letter: "A", text: "show that Ayumi wants to give the speech herself" },
            { letter: "B", text: "give Kwesi a new point when his plan fails" },
            { letter: "C", text: "reveal that the judge has made an error" },
            { letter: "D", text: "explain why the other team won the round" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Kwesi's choice to stand without his notes in sentence 4 reveals that he —",
          choices: [
            { letter: "A", text: "has memorized his original rebuttal" },
            { letter: "B", text: "no longer cares about the outcome" },
            { letter: "C", text: "is willing to adapt under pressure" },
            { letter: "D", text: "wants to impress the other team" }
          ],
          correct: "C"
        },
        {
          id: "drumming",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The phrase his heart drumming against his ribs in sentence 4 creates a mood of —",
          choices: [
            { letter: "A", text: "tense nervousness" },
            { letter: "B", text: "calm confidence" },
            { letter: "C", text: "quiet sadness" },
            { letter: "D", text: "playful excitement" }
          ],
          correct: "A"
        },
        {
          id: "truething",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 4, the only true thing he had most likely refers to —",
          choices: [
            { letter: "A", text: "Kwesi's honest fear of losing" },
            { letter: "B", text: "the judge's timer turning green" },
            { letter: "C", text: "the rebuttal he wrote the night before" },
            { letter: "D", text: "the fact about the outdated numbers" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the final sentence resolve the story of Kwesi's rebuttal?",
          choices: [
            { letter: "A", text: "It reveals that Kwesi forgot to speak at all." },
            { letter: "B", text: "It suggests through Ayumi's reaction that he did well." },
            { letter: "C", text: "It announces that the judge declared a winner." },
            { letter: "D", text: "It shows Ayumi correcting the mistakes he made." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rl-c88-nestwatch",
      family: "G11",
      title: "Night Watch",
      kind: "Literary · 11.RL",
      blurb: "Leilani has waited on the beach for nine nights, and her flashlight stays off.",
      level: 3,
      passage:
        "<p>" + N(1) + "For nine nights Leilani had sat beside the roped-off nest with her red flashlight switched off, learning the difference between the hiss of foam and the hiss of sand. " +
        N(2) + "Her cousins thought she was wasting her summer. " +
        N(3) + "On the tenth night the sand above the eggs sagged like a sigh, and a small dark flipper broke through. " +
        N(4) + "Within minutes the beach was alive with hatchlings scrambling toward the bright line of the surf. " +
        N(5) + "Leilani did not call anyone; some things, she decided, were not meant to be described." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about Leilani?",
          choices: [
            { letter: "A", text: "Family members always understand one another." },
            { letter: "B", text: "Patience can lead to moments worth more than words." },
            { letter: "C", text: "Summer is best spent with large groups of friends." },
            { letter: "D", text: "Wild animals need constant help from people to survive." }
          ],
          correct: "B"
        },
        {
          id: "cousins",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The detail about Leilani's cousins in sentence 2 mainly serves to —",
          choices: [
            { letter: "A", text: "explain how Leilani first learned about the nest" },
            { letter: "B", text: "introduce characters who will help her later" },
            { letter: "C", text: "suggest that Leilani is lonely on the beach" },
            { letter: "D", text: "contrast their view with the reward of her waiting" }
          ],
          correct: "D"
        },
        {
          id: "sigh",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 3, the simile comparing the sagging sand to a sigh mainly emphasizes —",
          choices: [
            { letter: "A", text: "the gentle, quiet way the nest begins to open" },
            { letter: "B", text: "Leilani's frustration at waiting so long" },
            { letter: "C", text: "the strong wind blowing across the beach" },
            { letter: "D", text: "the danger the hatchlings face in the surf" }
          ],
          correct: "A"
        },
        {
          id: "hiss",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Leilani learning the difference between the hiss of foam and the hiss of sand in sentence 1 suggests that she —",
          choices: [
            { letter: "A", text: "is afraid of noises in the dark" },
            { letter: "B", text: "plans to record sounds for a project" },
            { letter: "C", text: "has grown deeply attentive to the beach" },
            { letter: "D", text: "cannot hear well without her flashlight" }
          ],
          correct: "C"
        },
        {
          id: "final",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Leilani's decision in sentence 5 not to call anyone resolves the story by showing that she —",
          choices: [
            { letter: "A", text: "forgot to bring her phone to the beach" },
            { letter: "B", text: "is upset that her cousins did not come" },
            { letter: "C", text: "wants to report the hatching to experts first" },
            { letter: "D", text: "values the experience as something private" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c88-attic-map",
      family: "G11",
      title: "The Attic Map",
      kind: "Literary · 11.RL",
      blurb: "Ines unfolds a hand-drawn map of a village that no longer exists.",
      level: 1,
      passage:
        "<p>" + N(1) + "Ines found the map folded inside her grandfather's atlas, its creases soft as cloth. " +
        N(2) + "It showed his childhood village in faded pencil: a well, a bakery, a road that bent around an olive tree. " +
        N(3) + "Beside one small square he had written <em>our house</em> in careful letters. " +
        N(4) + "The village had been flooded for a reservoir decades ago, and no printed map still showed it. " +
        N(5) + "Ines smoothed the paper flat and decided to frame it, so the road could keep bending around the tree." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is best supported by the story about Ines and the map?",
          choices: [
            { letter: "A", text: "Personal records can preserve places that are lost." },
            { letter: "B", text: "Printed maps are always more accurate than drawings." },
            { letter: "C", text: "Old belongings should be given away to strangers." },
            { letter: "D", text: "Villages grow larger as the years go by." }
          ],
          correct: "A"
        },
        {
          id: "ourhouse",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "The words our house in sentence 3 mainly serve to —",
          choices: [
            { letter: "A", text: "prove that the map was drawn by a mapmaker" },
            { letter: "B", text: "show the personal meaning the map held for him" },
            { letter: "C", text: "explain why the village was flooded" },
            { letter: "D", text: "identify the location of the bakery" }
          ],
          correct: "B"
        },
        {
          id: "ines",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Ines's decision in sentence 5 reveals that she —",
          choices: [
            { letter: "A", text: "plans to visit the reservoir soon" },
            { letter: "B", text: "wants to sell the map to a museum" },
            { letter: "C", text: "thinks the map should be redrawn in ink" },
            { letter: "D", text: "wishes to honor her grandfather's memory" }
          ],
          correct: "D"
        },
        {
          id: "cloth",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 1, the creases being soft as cloth suggests that the map —",
          choices: [
            { letter: "A", text: "was printed on fabric instead of paper" },
            { letter: "B", text: "was damaged by water in the attic" },
            { letter: "C", text: "had been folded and unfolded many times" },
            { letter: "D", text: "was recently bought from a shop" }
          ],
          correct: "C"
        },
        {
          id: "bending",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 5, the phrase so the road could keep bending around the tree most nearly means that Ines wants —",
          choices: [
            { letter: "A", text: "the road to be rebuilt in a new town" },
            { letter: "B", text: "the village to live on in the drawing" },
            { letter: "C", text: "the olive tree to be replanted nearby" },
            { letter: "D", text: "the map to be corrected and updated" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rl-c88-late-watch",
      family: "G11",
      title: "Four Minutes Slow",
      kind: "Literary · 11.RL",
      blurb: "Haruto's father offers to fix the old wristwatch. Haruto says no.",
      level: 2,
      passage:
        "<p>" + N(1) + "The wristwatch Haruto inherited from his aunt ran exactly four minutes slow. " +
        N(2) + "His father, who repaired watches for a living, offered to adjust it in less time than it took to boil tea. " +
        N(3) + "Haruto shook his head. " +
        N(4) + "His aunt had always arrived four minutes late, laughing, with a story about why. " +
        N(5) + "Now, whenever he glanced at his wrist, he did the math in his head and felt, briefly, that she was still on her way." +
        "</p>",
      claims: [
        {
          id: "shakes",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "Sentence 3 is set apart as its own short sentence mainly to —",
          choices: [
            { letter: "A", text: "show that Haruto is too tired to speak" },
            { letter: "B", text: "suggest that Haruto distrusts his father" },
            { letter: "C", text: "highlight Haruto's firm, quiet refusal" },
            { letter: "D", text: "reveal that the watch cannot be fixed" }
          ],
          correct: "C"
        },
        {
          id: "haruto",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Haruto's refusal of his father's offer reveals that he —",
          choices: [
            { letter: "A", text: "values the watch's flaw as a link to his aunt" },
            { letter: "B", text: "does not trust his father's repair skills" },
            { letter: "C", text: "prefers to be late to his own appointments" },
            { letter: "D", text: "plans to fix the watch himself one day" }
          ],
          correct: "A"
        },
        {
          id: "tea",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 2, the comparison to boiling tea emphasizes that the repair —",
          choices: [
            { letter: "A", text: "would be expensive and risky" },
            { letter: "B", text: "would require special tools" },
            { letter: "C", text: "would damage the watch's case" },
            { letter: "D", text: "would be quick and simple" }
          ],
          correct: "D"
        },
        {
          id: "math",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The final sentence about Haruto doing the math in his head resolves the story by showing that —",
          choices: [
            { letter: "A", text: "Haruto has finally learned to read a watch" },
            { letter: "B", text: "the slow watch keeps his aunt present to him" },
            { letter: "C", text: "Haruto's father will repair the watch after all" },
            { letter: "D", text: "the aunt is about to arrive for a visit" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which idea is most clearly supported by the story of Haruto's watch as a whole?",
          choices: [
            { letter: "A", text: "Machines should always be kept in perfect order." },
            { letter: "B", text: "Children should follow their parents' advice." },
            { letter: "C", text: "An imperfection can carry deep personal meaning." },
            { letter: "D", text: "Being on time is a sign of respect for others." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-c88-second-place",
      family: "G11",
      title: "The Ballot",
      kind: "Literary · 11.RL",
      blurb: "Mirela loses the final round by one judge's vote, then reads what that judge wrote.",
      level: 3,
      passage:
        "<p>" + N(1) + "Mirela lost the final round on a two-to-one decision, and for an hour she carried the trophy for second place as if it were a borrowed coat. " +
        N(2) + "On the bus home she finally unfolded the dissenting judge's ballot. " +
        N(3) + "<em>Strongest analysis of the tournament,</em> it read, <em>but you argued against your opponent instead of for your case.</em> " +
        N(4) + "She read the line three times, each time a little less stung. " +
        N(5) + "By the time the bus reached the school, she had a pencil out and was rewriting her opening." +
        "</p>",
      claims: [
        {
          id: "coat",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 1, carrying the trophy as if it were a borrowed coat suggests that Mirela —",
          choices: [
            { letter: "A", text: "feels the award does not truly belong to her" },
            { letter: "B", text: "is cold on the long ride home" },
            { letter: "C", text: "plans to give the trophy to her coach" },
            { letter: "D", text: "is proud to show the trophy to others" }
          ],
          correct: "A"
        },
        {
          id: "mirela",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which statement best describes the change in Mirela over the course of the passage?",
          choices: [
            { letter: "A", text: "She moves from pride to boredom." },
            { letter: "B", text: "She moves from hope to lasting anger." },
            { letter: "C", text: "She moves from calm to embarrassment." },
            { letter: "D", text: "She moves from disappointment to determination." }
          ],
          correct: "D"
        },
        {
          id: "stung",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 4, the phrase each time a little less stung most nearly means that Mirela —",
          choices: [
            { letter: "A", text: "begins to forget what the ballot said" },
            { letter: "B", text: "grows more hurt with every reading" },
            { letter: "C", text: "slowly accepts the criticism as useful" },
            { letter: "D", text: "decides the judge was simply wrong" }
          ],
          correct: "C"
        },
        {
          id: "ballot",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The judge's comment in sentence 3 pairs praise with criticism. This pairing creates a tone that is —",
          choices: [
            { letter: "A", text: "harsh and mocking" },
            { letter: "B", text: "honest and constructive" },
            { letter: "C", text: "cheerful and careless" },
            { letter: "D", text: "nervous and uncertain" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the story of Mirela's loss most clearly develop?",
          choices: [
            { letter: "A", text: "Judges rarely agree on who should win." },
            { letter: "B", text: "Winning is the only measure of success." },
            { letter: "C", text: "A painful loss can become a lesson." },
            { letter: "D", text: "Trophies matter more than feedback." }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── POETRY AND DRAMA ───────────────────────── */
    {
      id: "g11-rl-c88-hatchlings",
      family: "G11",
      title: "Hatchlings",
      kind: "Poetry · 11.RL",
      blurb: "A poem about the first run of newborn turtles from nest to sea.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "No one tells them where the water is.<br>" +
        L(2) + "They climb out of the sand at midnight,<br>" +
        L(3) + "a hundred commas scattered on the beach,<br>" +
        L(4) + "and read the moonlight on the waves<br>" +
        L(5) + "the way we read a familiar name.<br>" +
        L(6) + "The crabs wait. The gulls wait.<br>" +
        L(7) + "Still they run, too small to know of fear,<br>" +
        L(8) + "and the ocean opens like a door left unlocked." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem \"Hatchlings\"?",
          choices: [
            { letter: "A", text: "Young creatures must be taught by their parents." },
            { letter: "B", text: "The beach is a peaceful place for every animal." },
            { letter: "C", text: "Instinct can guide the young through great danger." },
            { letter: "D", text: "Predators always win in the natural world." }
          ],
          correct: "C"
        },
        {
          id: "commas",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 3, the metaphor a hundred commas scattered on the beach mainly emphasizes the hatchlings' —",
          choices: [
            { letter: "A", text: "tiny size and great number" },
            { letter: "B", text: "bright colors in the dark" },
            { letter: "C", text: "slow and careful movement" },
            { letter: "D", text: "loud noise as they hatch" }
          ],
          correct: "A"
        },
        {
          id: "wait",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.2",
          stem: "The short repeated sentences in line 6 mainly serve to —",
          choices: [
            { letter: "A", text: "show that the hatchlings are resting" },
            { letter: "B", text: "describe the sounds the birds make" },
            { letter: "C", text: "suggest that the night is nearly over" },
            { letter: "D", text: "build a sense of threat on the beach" }
          ],
          correct: "D"
        },
        {
          id: "door",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "In line 8, comparing the ocean to a door left unlocked creates a tone of —",
          choices: [
            { letter: "A", text: "welcome and release" },
            { letter: "B", text: "warning and dread" },
            { letter: "C", text: "boredom and routine" },
            { letter: "D", text: "anger and loss" }
          ],
          correct: "A"
        },
        {
          id: "shape",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the order of events in \"Hatchlings\" shape its meaning?",
          choices: [
            { letter: "A", text: "It begins at the sea and ends with the nest, showing a return." },
            { letter: "B", text: "It moves from the nest to the open sea, tracing a journey." },
            { letter: "C", text: "It describes one hatchling's whole life from egg to adult." },
            { letter: "D", text: "It jumps between the past and present to compare beaches." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rl-c88-margins",
      family: "G11",
      title: "Here Be Margins",
      kind: "Poetry · 11.RL",
      blurb: "A speaker studies an old map whose edges fade into guesses.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The old map knows the harbor by its heart,<br>" +
        L(2) + "each rock and inlet inked with steady care,<br>" +
        L(3) + "but past the cape the coastline falls apart<br>" +
        L(4) + "to dotted guesses drifting into air.<br>" +
        L(5) + "I like that honest edge, the place it ends,<br>" +
        L(6) + "where someone set the pen down and confessed:<br>" +
        L(7) + "<em>beyond this line I only know what friends<br>" +
        L(8) + "who sailed there told me. I will leave the rest.</em>" +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses the central idea of the poem \"Here Be Margins\"?",
          choices: [
            { letter: "A", text: "Old maps were too careless to be useful." },
            { letter: "B", text: "Sailors should never travel past the cape." },
            { letter: "C", text: "Harbors are more beautiful than open seas." },
            { letter: "D", text: "Admitting the limits of knowledge is worth admiring." }
          ],
          correct: "D"
        },
        {
          id: "heart",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "In line 1, saying the map knows the harbor by its heart is an example of —",
          choices: [
            { letter: "A", text: "hyperbole" },
            { letter: "B", text: "personification" },
            { letter: "C", text: "alliteration" },
            { letter: "D", text: "an allusion" }
          ],
          correct: "B"
        },
        {
          id: "confessed",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In line 6, the word confessed suggests that the mapmaker —",
          choices: [
            { letter: "A", text: "openly admitted what was unknown" },
            { letter: "B", text: "was punished for a mistake" },
            { letter: "C", text: "hid the truth from the sailors" },
            { letter: "D", text: "argued with other mapmakers" }
          ],
          correct: "A"
        },
        {
          id: "speaker",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Line 5 reveals that the speaker of the poem —",
          choices: [
            { letter: "A", text: "wishes the map were complete" },
            { letter: "B", text: "wants to sail beyond the cape" },
            { letter: "C", text: "respects the mapmaker's honesty" },
            { letter: "D", text: "doubts the harbor is drawn correctly" }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How do lines 1–4 and lines 5–8 of \"Here Be Margins\" work together?",
          choices: [
            { letter: "A", text: "Lines 1–4 tell a story; lines 5–8 list the sailors' names." },
            { letter: "B", text: "Lines 1–4 praise the map; lines 5–8 reject it as useless." },
            { letter: "C", text: "Lines 1–4 describe the map; lines 5–8 reflect on what it means." },
            { letter: "D", text: "Lines 1–4 ask a question; lines 5–8 refuse to answer it." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-c88-prep-room",
      family: "G11",
      title: "The Prep Room",
      kind: "Drama · 11.RL",
      blurb: "Two debate partners have four minutes left and one card they cannot agree on.",
      level: 2,
      passage:
        "<p><em>A classroom used as a prep room. DIEGO shuffles index cards. NADIA watches the clock.</em></p>" +
        "<p>" + N(1) + "<strong>NADIA:</strong> Four minutes. Pick your opener. " +
        N(2) + "<strong>DIEGO:</strong> The statistic. Judges love numbers. " +
        N(3) + "<strong>NADIA:</strong> Judges love numbers they can believe. That survey had thirty people in it. " +
        N(4) + "<strong>DIEGO:</strong> <em>(holding the card up to the light, as if it might change)</em> Thirty is a number. " +
        N(5) + "<strong>NADIA:</strong> So is zero. Open with the story about the bus route. " +
        N(6) + "<strong>DIEGO:</strong> <em>(sighs, slides the card into his pocket)</em> Fine. But I'm keeping it for cross-examination." +
        "</p>",
      claims: [
        {
          id: "nadia",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Nadia's lines in sentences 3 and 5 reveal that she is —",
          choices: [
            { letter: "A", text: "unwilling to help Diego prepare" },
            { letter: "B", text: "careful about how strong evidence is" },
            { letter: "C", text: "nervous about speaking in public" },
            { letter: "D", text: "unaware of how little time is left" }
          ],
          correct: "B"
        },
        {
          id: "light",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The stage direction in sentence 4, holding the card up as if it might change, suggests that Diego —",
          choices: [
            { letter: "A", text: "cannot read his own handwriting" },
            { letter: "B", text: "thinks the card is a forgery" },
            { letter: "C", text: "hopes the weak evidence will look stronger" },
            { letter: "D", text: "is checking the card for a hidden message" }
          ],
          correct: "C"
        },
        {
          id: "zero",
          sol: "11.RL.2.D",
          sub: "11.RL.2.D.2",
          stem: "When Nadia replies So is zero in sentence 5, she means that —",
          choices: [
            { letter: "A", text: "being a number does not make evidence persuasive" },
            { letter: "B", text: "the survey should have included no one" },
            { letter: "C", text: "the team will score no points this round" },
            { letter: "D", text: "they have no time left to prepare" }
          ],
          correct: "A"
        },
        {
          id: "clock",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Nadia's opening line, Four minutes, mainly serves to —",
          choices: [
            { letter: "A", text: "show that the round has already ended" },
            { letter: "B", text: "introduce a flashback to an earlier round" },
            { letter: "C", text: "explain the rules of the tournament" },
            { letter: "D", text: "create pressure that drives the decision" }
          ],
          correct: "D"
        },
        {
          id: "resolve",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does Diego's final line resolve the scene in the prep room?",
          choices: [
            { letter: "A", text: "He refuses Nadia's advice and quits the team." },
            { letter: "B", text: "He wins the argument and opens with the statistic." },
            { letter: "C", text: "He tears up the card to show he was wrong." },
            { letter: "D", text: "He gives in but still holds on to his card." }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── INFORMATIONAL ───────────────────────── */
    {
      id: "g11-ri-c88-portolan",
      family: "G11",
      title: "Charts for Sailors",
      kind: "Informational · 11.RI",
      blurb: "Medieval sea charts traded inland detail for coastlines and compass lines.",
      level: 1,
      passage:
        "<p>" + N(1) + "Long before satellites, Mediterranean sailors relied on hand-drawn sea charts called portolan charts. " +
        N(2) + "These charts showed coastlines in remarkable detail, with harbors and capes named in tiny script along the shore. " +
        N(3) + "Inland areas, by contrast, were often left almost blank. " +
        N(4) + "Across the water ran a web of straight lines spreading out from compass roses, which helped a navigator choose a steady heading. " +
        N(5) + "The charts were built for one job, getting from port to port, and they did it well." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence best states the main idea of the passage about portolan charts?",
          choices: [
            { letter: "A", text: "Portolan charts were mostly used by inland travelers." },
            { letter: "B", text: "Portolan charts were designed to meet sailors' needs." },
            { letter: "C", text: "Portolan charts were replaced quickly by printed maps." },
            { letter: "D", text: "Portolan charts were too blank to be useful at sea." }
          ],
          correct: "B"
        },
        {
          id: "lines",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to the passage, the straight lines across the water helped navigators —",
          choices: [
            { letter: "A", text: "pick a steady direction to sail" },
            { letter: "B", text: "measure the depth of a harbor" },
            { letter: "C", text: "find towns far from the coast" },
            { letter: "D", text: "read the names of distant capes" }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author's attitude toward portolan charts in sentence 5 is best described as —",
          choices: [
            { letter: "A", text: "doubtful" },
            { letter: "B", text: "amused" },
            { letter: "C", text: "disappointed" },
            { letter: "D", text: "admiring" }
          ],
          correct: "D"
        },
        {
          id: "contrast",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize sentences 2 and 3 of the passage on sea charts?",
          choices: [
            { letter: "A", text: "by listing events in time order" },
            { letter: "B", text: "by giving a problem and its solution" },
            { letter: "C", text: "by contrasting the coast with the inland areas" },
            { letter: "D", text: "by comparing two different mapmakers" }
          ],
          correct: "C"
        },
        {
          id: "blank",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the detail that inland areas were left almost blank mainly to —",
          choices: [
            { letter: "A", text: "criticize mapmakers for being lazy" },
            { letter: "B", text: "suggest the inland areas were unexplored" },
            { letter: "C", text: "show that the charts focused on the sea" },
            { letter: "D", text: "explain why the charts were so costly" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-ri-c88-warm-sand",
      family: "G11",
      title: "Warm Sand, Cool Sand",
      kind: "Informational · 11.RI",
      blurb: "For sea turtles, the temperature of the nest helps decide whether a hatchling is male or female.",
      level: 2,
      passage:
        "<p>" + N(1) + "For many sea turtles, a hatchling's sex is not settled at fertilization but by the warmth of the sand around the egg. " +
        N(2) + "Nests incubated in warmer sand tend to produce more females, while cooler nests tend to produce more males. " +
        N(3) + "This makes a beach's temperature far more than a matter of comfort. " +
        N(4) + "Researchers on some warming beaches now find nests that are almost entirely female. " +
        N(5) + "To keep balance, a few conservation groups shade nests or move eggs to cooler spots." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the main idea of the passage about warm and cool sand?",
          choices: [
            { letter: "A", text: "Sea turtles prefer to nest on cool beaches." },
            { letter: "B", text: "Most sea turtle nests are shaded by people." },
            { letter: "C", text: "Hatchlings need warm sand in order to survive." },
            { letter: "D", text: "Sand temperature shapes the sex of turtle hatchlings." }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "Which sentence gives evidence that warming beaches are already affecting turtle populations?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 2" },
            { letter: "C", text: "sentence 4" },
            { letter: "D", text: "sentence 5" }
          ],
          correct: "C"
        },
        {
          id: "comfort",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "In sentence 3, saying a beach's temperature is far more than a matter of comfort mainly means that —",
          choices: [
            { letter: "A", text: "it can affect the future makeup of a population" },
            { letter: "B", text: "turtles dislike lying on hot sand" },
            { letter: "C", text: "beaches are uncomfortable for researchers" },
            { letter: "D", text: "warm sand makes eggs hatch more slowly" }
          ],
          correct: "A"
        },
        {
          id: "shade",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 5 about shading nests is included mainly to —",
          choices: [
            { letter: "A", text: "argue that turtles should be kept in zoos" },
            { letter: "B", text: "show one way people respond to the problem" },
            { letter: "C", text: "prove that shaded nests always hatch males" },
            { letter: "D", text: "describe how turtles dig their nests" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author wrote the passage about nest temperature mainly to —",
          choices: [
            { letter: "A", text: "persuade readers to visit turtle beaches" },
            { letter: "B", text: "tell a story about one turtle's life" },
            { letter: "C", text: "compare sea turtles with land tortoises" },
            { letter: "D", text: "inform readers about a surprising process" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-ri-c88-escapement",
      family: "G11",
      title: "The Part That Ticks",
      kind: "Informational · 11.RI",
      blurb: "A small mechanism called the escapement turns stored energy into steady time.",
      level: 3,
      passage:
        "<p>" + N(1) + "A wound spring or a hanging weight stores plenty of energy, but left alone it would spin a clock's gears in a single wild rush. " +
        N(2) + "The escapement is the small mechanism that prevents this. " +
        N(3) + "It locks the gear train, then releases it one tooth at a time, in rhythm with a swinging pendulum or an oscillating balance wheel. " +
        N(4) + "Each release produces the familiar tick. " +
        N(5) + "In other words, a clock is not powered by its escapement; it is disciplined by it, and that discipline is what makes it a clock." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the main idea of the passage about the escapement?",
          choices: [
            { letter: "A", text: "The escapement controls the release of a clock's energy." },
            { letter: "B", text: "The escapement is the main source of a clock's power." },
            { letter: "C", text: "The escapement was invented to make clocks louder." },
            { letter: "D", text: "The escapement is found only in pendulum clocks." }
          ],
          correct: "A"
        },
        {
          id: "tick",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to the passage, what causes the tick of a clock?",
          choices: [
            { letter: "A", text: "the spring being wound tightly" },
            { letter: "B", text: "the weight hitting the case" },
            { letter: "C", text: "the gear train being released" },
            { letter: "D", text: "the pendulum striking a bell" }
          ],
          correct: "C"
        },
        {
          id: "order",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author develops the explanation of the escapement mainly by —",
          choices: [
            { letter: "A", text: "telling the history of clockmaking in order" },
            { letter: "B", text: "stating a problem and then the part that solves it" },
            { letter: "C", text: "comparing several types of clocks and watches" },
            { letter: "D", text: "listing the steps for repairing a broken clock" }
          ],
          correct: "B"
        },
        {
          id: "disciplined",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "In sentence 5, the author's contrast between powered and disciplined mainly emphasizes that the escapement —",
          choices: [
            { letter: "A", text: "punishes the clock for running fast" },
            { letter: "B", text: "adds extra energy to the spring" },
            { letter: "C", text: "makes the clock simpler to build" },
            { letter: "D", text: "gives order to energy that already exists" }
          ],
          correct: "D"
        },
        {
          id: "rush",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author describes the gears spinning in a single wild rush in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "show what would happen without an escapement" },
            { letter: "B", text: "warn readers that clocks can be dangerous" },
            { letter: "C", text: "explain how a toy differs from a spring" },
            { letter: "D", text: "describe the sound of a clock being wound" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-ri-c88-lights-out",
      family: "G11",
      title: "Follow the Brightest Horizon",
      kind: "Informational · 11.RI",
      blurb: "Why hatchlings crawl toward hotels instead of the ocean, and what beach towns can do.",
      level: 1,
      passage:
        "<p>" + N(1) + "Newly hatched sea turtles find the ocean by crawling toward the brightest horizon. " +
        N(2) + "On a natural beach, that horizon is the sea, which reflects the light of the moon and stars. " +
        N(3) + "Streetlights, porch lamps, and hotel signs can confuse them, drawing them inland toward roads. " +
        N(4) + "Many hatchlings lost this way never reach the water. " +
        N(5) + "Some coastal towns now ask residents to use shielded, low amber lights during nesting season." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which of the following best summarizes the central idea of the passage about hatchlings and light?",
          choices: [
            { letter: "A", text: "Hotels should not be built near beaches." },
            { letter: "B", text: "Artificial light can lead hatchlings away from the sea." },
            { letter: "C", text: "Hatchlings can see best on moonless nights." },
            { letter: "D", text: "Amber lights are brighter than streetlights." }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The intended audience for the passage about hatchlings and light is most likely —",
          choices: [
            { letter: "A", text: "general readers curious about wildlife" },
            { letter: "B", text: "engineers who design streetlights" },
            { letter: "C", text: "children learning to swim" },
            { letter: "D", text: "hotel owners applying for permits" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which description best matches the structure of the passage about the brightest horizon?",
          choices: [
            { letter: "A", text: "a list of turtle species in order of size" },
            { letter: "B", text: "a story told from a hatchling's view" },
            { letter: "C", text: "an argument followed by counterclaims" },
            { letter: "D", text: "a cause and its effect, then a response" }
          ],
          correct: "D"
        },
        {
          id: "natural",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 2 serves mainly to —",
          choices: [
            { letter: "A", text: "describe the stars that turtles use to steer" },
            { letter: "B", text: "argue that beaches should have no lights" },
            { letter: "C", text: "explain why the sea is normally brightest" },
            { letter: "D", text: "show that turtles nest only in moonlight" }
          ],
          correct: "C"
        },
        {
          id: "lost",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to the passage, what happens to many hatchlings that are drawn inland?",
          choices: [
            { letter: "A", text: "They return to the nest to wait." },
            { letter: "B", text: "They are rescued by hotel staff." },
            { letter: "C", text: "They never make it to the water." },
            { letter: "D", text: "They learn to follow amber lights." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-ri-c88-flat-world",
      family: "G11",
      title: "Flattening the Globe",
      kind: "Informational · 11.RI",
      blurb: "Every flat map of the round Earth has to stretch something.",
      level: 2,
      passage:
        "<p>" + N(1) + "No flat map can show the round Earth without distortion, just as an orange peel cannot be pressed flat without tearing. " +
        N(2) + "A projection widely used since the 1500s keeps compass directions accurate, which made it valuable to sailors. " +
        N(3) + "The price is size: lands near the poles appear far larger than they are. " +
        N(4) + "On that map, Greenland looks about as large as Africa, though Africa is roughly fourteen times bigger. " +
        N(5) + "Every projection, then, is a choice about which truth to keep." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence best states the central idea of the passage about map projections?",
          choices: [
            { letter: "A", text: "sentence 2" },
            { letter: "B", text: "sentence 3" },
            { letter: "C", text: "sentence 4" },
            { letter: "D", text: "sentence 5" }
          ],
          correct: "D"
        },
        {
          id: "greenland",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which detail from the passage best supports the claim in sentence 3?",
          choices: [
            { letter: "A", text: "the comparison between Greenland and Africa" },
            { letter: "B", text: "the projection's use since the 1500s" },
            { letter: "C", text: "the value of the map to sailors" },
            { letter: "D", text: "the comparison to an orange peel" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author's primary purpose in the passage about flattening the globe is to —",
          choices: [
            { letter: "A", text: "persuade schools to stop using flat maps" },
            { letter: "B", text: "explain the trade-offs every flat map makes" },
            { letter: "C", text: "describe how sailors crossed the Atlantic" },
            { letter: "D", text: "compare the sizes of the world's continents" }
          ],
          correct: "B"
        },
        {
          id: "price",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "In sentence 3, the phrase The price is size mainly means that —",
          choices: [
            { letter: "A", text: "larger maps cost more money to print" },
            { letter: "B", text: "sailors paid more for maps of the poles" },
            { letter: "C", text: "accurate directions come at the cost of accurate area" },
            { letter: "D", text: "the poles are the largest places on Earth" }
          ],
          correct: "C"
        },
        {
          id: "orange",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author compares the map to an orange peel in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "make an abstract problem easy to picture" },
            { letter: "B", text: "suggest that maps were once printed on fruit" },
            { letter: "C", text: "show that the Earth is shaped like an orange" },
            { letter: "D", text: "argue that globes are easily damaged" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── FUNCTIONAL AND ARGUMENT ───────────────────────── */
    {
      id: "g11-ri-c88-nest-volunteers",
      family: "G11",
      title: "Nest Patrol Guidelines",
      kind: "Functional text · 11.RI",
      blurb: "The rules for volunteers who walk the beach at dawn checking turtle nests.",
      level: 1,
      passage:
        "<p><strong>Dune Point Nest Patrol: Volunteer Guidelines</strong></p>" +
        "<p>" + N(1) + "<strong>Shifts:</strong> Patrols begin at sunrise and last about two hours. " +
        N(2) + "<strong>What to bring:</strong> Water, a hat, and the patrol logbook from the ranger station. " +
        N(3) + "<strong>At each nest:</strong> Record the date, nest number, and any signs of digging by animals. " +
        N(4) + "<strong>Never</strong> touch eggs, hatchlings, or the stakes marking a nest. " +
        N(5) + "<strong>If you find a stranded turtle:</strong> Stay nearby and call the ranger line at once." +
        "</p>",
      claims: [
        {
          id: "bring",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the Nest Patrol guidelines, where do volunteers get the logbook?",
          choices: [
            { letter: "A", text: "from the nest stakes" },
            { letter: "B", text: "from the ranger station" },
            { letter: "C", text: "from the patrol leader's car" },
            { letter: "D", text: "from the visitor center" }
          ],
          correct: "B"
        },
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The intended audience for the Nest Patrol guidelines is —",
          choices: [
            { letter: "A", text: "tourists planning a beach vacation" },
            { letter: "B", text: "scientists writing research papers" },
            { letter: "C", text: "people who will walk the patrol" },
            { letter: "D", text: "rangers hiring new staff members" }
          ],
          correct: "C"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The bold labels at the start of each Nest Patrol guideline help the reader by —",
          choices: [
            { letter: "A", text: "telling a story in the order it happened" },
            { letter: "B", text: "listing the volunteers by name" },
            { letter: "C", text: "showing which rules are optional" },
            { letter: "D", text: "making each type of instruction easy to find" }
          ],
          correct: "D"
        },
        {
          id: "never",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The word Never in sentence 4 is set in bold mainly to —",
          choices: [
            { letter: "A", text: "stress that this rule has no exceptions" },
            { letter: "B", text: "show that it begins a new section title" },
            { letter: "C", text: "suggest the rule is rarely followed" },
            { letter: "D", text: "mark a word that volunteers must look up" }
          ],
          correct: "A"
        },
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the main purpose of the Dune Point guidelines as a whole?",
          choices: [
            { letter: "A", text: "to explain why sea turtles nest on Dune Point" },
            { letter: "B", text: "to tell volunteers how to patrol safely and properly" },
            { letter: "C", text: "to invite the public to watch hatchlings" },
            { letter: "D", text: "to describe the history of the ranger station" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-ri-c88-repair-ticket",
      family: "G11",
      title: "Repair Ticket Terms",
      kind: "Functional text · 11.RI",
      blurb: "The fine print on a watch repair shop's claim ticket.",
      level: 3,
      passage:
        "<p><strong>Okonkwo &amp; Daughters Watch Repair: Terms of Service</strong></p>" +
        "<p>" + N(1) + "<strong>Estimates:</strong> Every watch is opened and inspected before we quote a price; the quote is free. " +
        N(2) + "<strong>Approval:</strong> No work begins until you approve the quote by phone or in person. " +
        N(3) + "<strong>Warranty:</strong> Repairs are guaranteed for one year, except for damage from water or impact. " +
        N(4) + "<strong>Pickup:</strong> Watches not collected within 90 days of completion will be stored at a fee of $2 per week. " +
        N(5) + "Please keep this ticket; it is your only proof of ownership." +
        "</p>",
      claims: [
        {
          id: "warranty",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Based on the terms, a repaired watch that stops after the owner drops it on tile would —",
          choices: [
            { letter: "A", text: "be fixed for free under the warranty" },
            { letter: "B", text: "be returned without any inspection" },
            { letter: "C", text: "not be covered by the warranty" },
            { letter: "D", text: "be stored at no charge for a year" }
          ],
          correct: "C"
        },
        {
          id: "sequence",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The first two sections of the repair terms are arranged to show —",
          choices: [
            { letter: "A", text: "the steps that happen before any repair" },
            { letter: "B", text: "the causes of common watch problems" },
            { letter: "C", text: "a comparison of two repair shops" },
            { letter: "D", text: "the history of the family business" }
          ],
          correct: "A"
        },
        {
          id: "proof",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 5, about keeping the ticket, serves mainly to —",
          choices: [
            { letter: "A", text: "advertise the shop's other services" },
            { letter: "B", text: "explain how the estimate is calculated" },
            { letter: "C", text: "remind customers to pay in advance" },
            { letter: "D", text: "warn that the ticket is needed to claim the watch" }
          ],
          correct: "D"
        },
        {
          id: "fee",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence makes clear that customers can be charged for leaving a watch too long?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 2" },
            { letter: "C", text: "sentence 3" },
            { letter: "D", text: "sentence 4" }
          ],
          correct: "D"
        },
        {
          id: "aim",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The shop most likely includes the Approval section in order to —",
          choices: [
            { letter: "A", text: "keep customers from paying for unwanted work" },
            { letter: "B", text: "make sure every watch is repaired as fast as possible" },
            { letter: "C", text: "allow the shop to raise prices after a repair" },
            { letter: "D", text: "encourage customers to buy a new watch instead" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-ri-c88-dark-beach",
      family: "G11",
      title: "Let the Beach Go Dark",
      kind: "Argument · 11.RI",
      blurb: "A letter to a town council argues for a lighting rule during turtle nesting season.",
      level: 3,
      passage:
        "<p>" + N(1) + "Our town spends thousands each summer advertising its sea turtles, yet every night we light the beach like a parking lot. " +
        N(2) + "Last season, volunteers found more than forty hatchlings crawling toward the highway instead of the water. " +
        N(3) + "A rule requiring shielded amber lights from May through October would cost homeowners a few dollars per fixture. " +
        N(4) + "Some argue that darker streets feel less safe, but the rule covers only lights facing the sand, not the road. " +
        N(5) + "We cannot celebrate the turtles by day and confuse them by night." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which statement best expresses the writer's central claim in the letter about beach lighting?",
          choices: [
            { letter: "A", text: "The town should stop advertising its sea turtles." },
            { letter: "B", text: "Streetlights along the highway should be removed." },
            { letter: "C", text: "Volunteers should guide hatchlings to the water." },
            { letter: "D", text: "The town should limit beach-facing lights in nesting season." }
          ],
          correct: "D"
        },
        {
          id: "parking",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The writer's comparison of the beach to a parking lot in sentence 1 reveals an attitude that is —",
          choices: [
            { letter: "A", text: "critical of the town's mixed message" },
            { letter: "B", text: "pleased with the town's tourism plan" },
            { letter: "C", text: "neutral about the effect of lighting" },
            { letter: "D", text: "confused about where the lights are" }
          ],
          correct: "A"
        },
        {
          id: "counter",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "How does sentence 4 function in the structure of the letter?",
          choices: [
            { letter: "A", text: "It introduces the writer's main claim." },
            { letter: "B", text: "It adds a new statistic about hatchlings." },
            { letter: "C", text: "It answers an objection to the proposal." },
            { letter: "D", text: "It summarizes the letter's conclusion." }
          ],
          correct: "C"
        },
        {
          id: "cost",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "The writer mentions a few dollars per fixture in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "complain that amber lights are expensive" },
            { letter: "B", text: "suggest the rule would be easy to afford" },
            { letter: "C", text: "ask the council to pay homeowners" },
            { letter: "D", text: "compare prices at local hardware stores" }
          ],
          correct: "B"
        },
        {
          id: "closing",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The final sentence of the lighting letter is effective mainly because it —",
          choices: [
            { letter: "A", text: "introduces a new source of evidence" },
            { letter: "B", text: "admits that the writer may be wrong" },
            { letter: "C", text: "lists the months the rule would apply" },
            { letter: "D", text: "uses a day-and-night contrast to stress the point" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── VOCABULARY ───────────────────────── */
    {
      id: "g11-rv-c88-clock-shop",
      family: "G11",
      title: "The Narrow Shop",
      kind: "Vocabulary · 11.RV",
      blurb: "Mr. Lindqvist's shop full of clocks, and the words for the work he does there.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every morning Mr. Lindqvist unlocked his narrow shop and checked the clocks on the walls with <strong>meticulous</strong> care, adjusting any that had drifted even a few seconds. " +
        N(2) + "Customers brought him <strong>tarnished</strong> pocket watches, dull and spotted after decades in drawers. " +
        N(3) + "Inside each one lay an <strong>intricate</strong> world of tiny gears, springs, and jewels. " +
        N(4) + "Some watches had been <strong>dormant</strong> so long that their owners thought they were dead. " +
        N(5) + "He would <strong>restore</strong> them slowly, calling the work a kind of <strong>precision</strong> that left no room for hurry." +
        "</p>",
      claims: [
        {
          id: "restore",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word restore in sentence 5 begins with the prefix re-, as do the words rebuild and renew. In all three words, the prefix re- signals —",
          choices: [
            { letter: "A", text: "doing something poorly" },
            { letter: "B", text: "doing something before" },
            { letter: "C", text: "doing something back or again" },
            { letter: "D", text: "doing something against" }
          ],
          correct: "C"
        },
        {
          id: "dormant",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 4, the phrase their owners thought they were dead helps show that dormant means —",
          choices: [
            { letter: "A", text: "inactive for a long time" },
            { letter: "B", text: "badly broken beyond repair" },
            { letter: "C", text: "recently cleaned and oiled" },
            { letter: "D", text: "worth a great deal of money" }
          ],
          correct: "A"
        },
        {
          id: "tarnished",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which words from sentence 2 best help the reader understand the meaning of tarnished?",
          choices: [
            { letter: "A", text: "Customers brought him" },
            { letter: "B", text: "dull and spotted" },
            { letter: "C", text: "pocket watches" },
            { letter: "D", text: "in drawers" }
          ],
          correct: "B"
        },
        {
          id: "intricate",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word intricate most nearly means —",
          choices: [
            { letter: "A", text: "cheap and plain" },
            { letter: "B", text: "loud and busy" },
            { letter: "C", text: "old and fragile" },
            { letter: "D", text: "detailed and complex" }
          ],
          correct: "D"
        },
        {
          id: "meticulous",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "The author describes Mr. Lindqvist's care as meticulous rather than careful. Compared with careful, meticulous suggests attention that is —",
          choices: [
            { letter: "A", text: "quick and casual" },
            { letter: "B", text: "nervous and unsure" },
            { letter: "C", text: "extremely thorough" },
            { letter: "D", text: "somewhat lazy" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rv-c88-coach-advice",
      family: "G11",
      title: "Coach Mbatha's Rules",
      kind: "Vocabulary · 11.RV",
      blurb: "A debate coach's advice to first-year debaters, word by word.",
      level: 2,
      passage:
        "<p>" + N(1) + "Coach Mbatha told the new debaters that a strong case must be <strong>coherent</strong>, each point linked to the next like a chain. " +
        N(2) + "She warned them to prepare for every <strong>counterargument</strong> the other side might build. " +
        N(3) + "\"Sometimes the smart move is to <strong>concede</strong> a small point,\" she said, \"admitting it openly so you can win the larger one.\" " +
        N(4) + "She asked them never to merely <strong>reiterate</strong> their opening in the final speech. " +
        N(5) + "Above all, she prized <strong>composure</strong>, since a calm speaker seems more <strong>persuasive</strong> than one who shouts." +
        "</p>",
      claims: [
        {
          id: "counter",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word counterargument in sentence 2 begins with the prefix counter-, as in counteract and counterbalance. The prefix counter- signals —",
          choices: [
            { letter: "A", text: "something that comes first" },
            { letter: "B", text: "something that opposes" },
            { letter: "C", text: "something that is small" },
            { letter: "D", text: "something that repeats" }
          ],
          correct: "B"
        },
        {
          id: "persuasive",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The suffix -ive in persuasive (sentence 5) shows that the word describes —",
          choices: [
            { letter: "A", text: "a person who persuades for a living" },
            { letter: "B", text: "the act of persuading someone once" },
            { letter: "C", text: "a place where persuading happens" },
            { letter: "D", text: "a quality of being able to persuade" }
          ],
          correct: "D"
        },
        {
          id: "coherent",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 1, the comparison to a chain helps show that coherent means —",
          choices: [
            { letter: "A", text: "logically connected" },
            { letter: "B", text: "loud and forceful" },
            { letter: "C", text: "short and simple" },
            { letter: "D", text: "heavy and slow" }
          ],
          correct: "A"
        },
        {
          id: "composure",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the word composure most nearly means —",
          choices: [
            { letter: "A", text: "written music" },
            { letter: "B", text: "careful planning" },
            { letter: "C", text: "calm self-control" },
            { letter: "D", text: "quick thinking" }
          ],
          correct: "C"
        },
        {
          id: "concede",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, Coach Mbatha's own explanation shows that concede means to —",
          choices: [
            { letter: "A", text: "hide a weakness" },
            { letter: "B", text: "admit a point" },
            { letter: "C", text: "repeat a claim" },
            { letter: "D", text: "attack a rival" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rv-c88-sea-serpents",
      family: "G11",
      title: "Sea Serpents in the Margins",
      kind: "Vocabulary · 11.RV",
      blurb: "How medieval mapmakers filled the gaps in what they knew.",
      level: 3,
      passage:
        "<p>" + N(1) + "A medieval <strong>cartographer</strong> often worked from <strong>rudimentary</strong> information: a sailor's rough sketch, a merchant's half-remembered distances. " +
        N(2) + "Where facts ran out, <strong>conjecture</strong> filled the gap, and a guessed coastline could survive on maps for generations. " +
        N(3) + "Many mapmakers <strong>embellished</strong> empty oceans with sea serpents and puffing wind faces that delighted buyers. " +
        N(4) + "Once voyages began to <strong>circumnavigate</strong> the globe, those guesses were tested. " +
        N(5) + "Old charts did not become <strong>obsolete</strong> overnight, but each returning ship made them a little less trustworthy." +
        "</p>",
      claims: [
        {
          id: "circum",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word circumnavigate in sentence 4 begins with the prefix circum-, as in circumference and circumvent. The prefix circum- means —",
          choices: [
            { letter: "A", text: "around" },
            { letter: "B", text: "under" },
            { letter: "C", text: "across" },
            { letter: "D", text: "toward" }
          ],
          correct: "A"
        },
        {
          id: "rudimentary",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 1, the examples after the colon show that rudimentary information is information that is —",
          choices: [
            { letter: "A", text: "secret and valuable" },
            { letter: "B", text: "printed and official" },
            { letter: "C", text: "basic and incomplete" },
            { letter: "D", text: "recent and exact" }
          ],
          correct: "C"
        },
        {
          id: "conjecture",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word conjecture most nearly means —",
          choices: [
            { letter: "A", text: "careful measurement" },
            { letter: "B", text: "guesswork" },
            { letter: "C", text: "decoration" },
            { letter: "D", text: "official records" }
          ],
          correct: "B"
        },
        {
          id: "obsolete",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "The author says the charts did not become obsolete overnight. Compared with old, obsolete suggests something that is —",
          choices: [
            { letter: "A", text: "treasured for its age" },
            { letter: "B", text: "slightly worn" },
            { letter: "C", text: "newly repaired" },
            { letter: "D", text: "no longer useful" }
          ],
          correct: "D"
        },
        {
          id: "cartographer",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word cartographer in sentence 1 ends with the suffix -er, as do photographer and builder. The suffix -er signals —",
          choices: [
            { letter: "A", text: "a tool used for a task" },
            { letter: "B", text: "a place where work is done" },
            { letter: "C", text: "a time when work happens" },
            { letter: "D", text: "a person who does something" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rv-c88-loggerheads",
      family: "G11",
      title: "The Long Way Home",
      kind: "Vocabulary · 11.RV",
      blurb: "Loggerhead turtles cross oceans and return to the beaches where they hatched.",
      level: 1,
      passage:
        "<p>" + N(1) + "Loggerhead turtles <strong>migrate</strong> thousands of miles, traveling back and forth between feeding grounds and the beaches where they hatched. " +
        N(2) + "Scientists believe they <strong>navigate</strong> partly by sensing Earth's magnetic field, which works like an invisible compass. " +
        N(3) + "Females <strong>emerge</strong> from the surf at night, coming out of the water only long enough to dig a nest. " +
        N(4) + "Their eggs are <strong>vulnerable</strong>, easily harmed by raccoons, crabs, and high tides. " +
        N(5) + "Because so few hatchlings reach adulthood, several sea turtle species are listed as <strong>endangered</strong>." +
        "</p>",
      claims: [
        {
          id: "endangered",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word endangered in sentence 5 contains the prefix en-, as do enlarge and enrich. The prefix en- means —",
          choices: [
            { letter: "A", text: "to cause to be or put into" },
            { letter: "B", text: "to take away or remove from" },
            { letter: "C", text: "to happen before" },
            { letter: "D", text: "to do once more" }
          ],
          correct: "A"
        },
        {
          id: "emerge",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the phrase coming out of the water shows that emerge means to —",
          choices: [
            { letter: "A", text: "dive deeply" },
            { letter: "B", text: "rest quietly" },
            { letter: "C", text: "swim quickly" },
            { letter: "D", text: "come into view" }
          ],
          correct: "D"
        },
        {
          id: "vulnerable",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 4, the word vulnerable most nearly means —",
          choices: [
            { letter: "A", text: "hidden from sight" },
            { letter: "B", text: "open to harm" },
            { letter: "C", text: "ready to hatch" },
            { letter: "D", text: "covered in sand" }
          ],
          correct: "B"
        },
        {
          id: "migrate",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 1, the word migrate most nearly refers to —",
          choices: [
            { letter: "A", text: "laying eggs on a beach" },
            { letter: "B", text: "hunting for food at night" },
            { letter: "C", text: "traveling between distant places" },
            { letter: "D", text: "growing larger each year" }
          ],
          correct: "C"
        },
        {
          id: "navigate",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the comparison to an invisible compass helps show that navigate means to —",
          choices: [
            { letter: "A", text: "find one's way" },
            { letter: "B", text: "dig a deep hole" },
            { letter: "C", text: "escape from danger" },
            { letter: "D", text: "sleep in the water" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── PAIRED TEXTS ───────────────────────── */
    {
      id: "g11-dsr-c88-paper-or-phone",
      family: "G11",
      title: "Paper or Phone?",
      kind: "Paired texts · 11.DSR",
      blurb: "A hiker defends her paper map; an article explains what navigation apps can do.",
      level: 1,
      passage:
        "<p><strong>Text 1 — From a Hiking Blog</strong></p>" +
        "<p>" + N(1) + "On a three-day hike last fall, my phone died on the second morning. " +
        N(2) + "My folded paper map, creased and coffee-stained, never needed charging. " +
        N(3) + "It also showed the whole valley at once, so I could see how trails connected, not just a blue dot.</p>" +
        "<p><strong>Text 2 — From an Outdoor Gear Article</strong></p>" +
        "<p>" + N(4) + "Phone navigation apps now work offline, storing maps before a trip begins. " +
        N(5) + "They can track a hiker's exact position even in fog or darkness, when landmarks disappear. " +
        N(6) + "Rangers still advise carrying a backup, since even the best app depends on a battery." +
        "</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea about phones is supported by both texts?",
          choices: [
            { letter: "A", text: "A phone is only useful while its battery lasts." },
            { letter: "B", text: "A phone cannot store maps without a signal." },
            { letter: "C", text: "A phone shows more of a valley than paper does." },
            { letter: "D", text: "A phone is the best tool for every hiker." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the hiking blog and the gear article differ?",
          choices: [
            { letter: "A", text: "Text 1 lists app features; Text 2 tells a personal story." },
            { letter: "B", text: "Text 1 criticizes rangers; Text 2 praises them." },
            { letter: "C", text: "Text 1 relies on experience; Text 2 explains app strengths." },
            { letter: "D", text: "Text 1 describes fog; Text 2 describes a dead battery." }
          ],
          correct: "C"
        },
        {
          id: "advantages",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Select TWO sentences from Text 1 that describe advantages of the paper map.",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 2" },
            { letter: "C", text: "sentence 3" },
            { letter: "D", text: "sentence 4" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the gear article, the tone of the hiking blog is more —",
          choices: [
            { letter: "A", text: "formal and technical" },
            { letter: "B", text: "angry and accusing" },
            { letter: "C", text: "humorous and silly" },
            { letter: "D", text: "personal and conversational" }
          ],
          correct: "D"
        },
        {
          id: "challenge",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which sentence from Text 2 most directly challenges the blogger's preference for a paper map?",
          choices: [
            { letter: "A", text: "sentence 4" },
            { letter: "B", text: "sentence 5" },
            { letter: "C", text: "sentence 6" },
            { letter: "D", text: "sentence 3" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-dsr-c88-speed",
      family: "G11",
      title: "How Fast Is Too Fast?",
      kind: "Paired texts · 11.DSR",
      blurb: "A coach and a student debater disagree about speaking at top speed.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From a Coach's Newsletter</strong></p>" +
        "<p>" + N(1) + "At some tournaments, debaters now speak over three hundred words a minute to squeeze in extra arguments. " +
        N(2) + "A judge with a fast pen may follow along, but a parent or principal cannot. " +
        N(3) + "Debate should train students to persuade real audiences, not to outrun them.</p>" +
        "<p><strong>Text 2 — From a Student Debater's Blog</strong></p>" +
        "<p>" + N(4) + "Speaking fast is not a trick; it is a skill I practiced for months. " +
        N(5) + "It lets me answer every argument the other team makes instead of dropping half of them. " +
        N(6) + "Experienced judges keep up just fine, and the rounds are richer for it." +
        "</p>",
      claims: [
        {
          id: "differ",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the coach and the student differ in their view of fast speaking?",
          choices: [
            { letter: "A", text: "The coach thinks it is a skill; the student thinks it is a trick." },
            { letter: "B", text: "The coach worries it shuts out listeners; the student says it adds depth." },
            { letter: "C", text: "The coach wants longer rounds; the student wants shorter rounds." },
            { letter: "D", text: "The coach blames judges; the student blames other teams." }
          ],
          correct: "B"
        },
        {
          id: "respond",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "The coach in Text 1 would most likely respond to sentence 6 of Text 2 by pointing out that —",
          choices: [
            { letter: "A", text: "experienced judges are often unfair" },
            { letter: "B", text: "practice makes fast speaking easier" },
            { letter: "C", text: "dropped arguments cost teams the round" },
            { letter: "D", text: "not every audience is a trained judge" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the coach's newsletter, the tone of the student's blog is more —",
          choices: [
            { letter: "A", text: "confident and defensive" },
            { letter: "B", text: "doubtful and apologetic" },
            { letter: "C", text: "neutral and scientific" },
            { letter: "D", text: "sad and nostalgic" }
          ],
          correct: "A"
        },
        {
          id: "central",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea is central to both the newsletter and the blog?",
          choices: [
            { letter: "A", text: "the cost of traveling to tournaments" },
            { letter: "B", text: "the rules for choosing debate topics" },
            { letter: "C", text: "how speaking speed affects a debate" },
            { letter: "D", text: "why parents should judge more rounds" }
          ],
          correct: "C"
        },
        {
          id: "conclude",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A student who read both texts about fast speaking could best conclude that —",
          choices: [
            { letter: "A", text: "fast speaking should be banned at every tournament" },
            { letter: "B", text: "whether speed helps depends partly on the listener" },
            { letter: "C", text: "slow speakers always win more of their rounds" },
            { letter: "D", text: "judges and coaches agree about speaking speed" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-dsr-c88-raking",
      family: "G11",
      title: "Clean Sand",
      kind: "Paired texts · 11.DSR",
      blurb: "A resort explains its morning beach raking; a biologist explains what the rake can miss.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Resort Notice to Guests</strong></p>" +
        "<p>" + N(1) + "Each morning at six, our crew rakes the beach with a small tractor so guests wake to smooth, clean sand. " +
        N(2) + "Seaweed and debris are hauled away before breakfast. " +
        N(3) + "Marked turtle nests are always avoided, and crews are trained to steer around the stakes.</p>" +
        "<p><strong>Text 2 — From a Biologist's Field Report</strong></p>" +
        "<p>" + N(4) + "Not every nest gets marked; some are laid and covered before volunteers find them. " +
        N(5) + "Heavy raking equipment can crush these hidden eggs and pack the sand hard. " +
        N(6) + "The seaweed at the tide line also feeds insects and shorebirds that keep a beach alive." +
        "</p>",
      claims: [
        {
          id: "marked",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which safeguard described in Text 1 does Text 2 suggest is not enough to protect every nest?",
          choices: [
            { letter: "A", text: "steering around the marked nests" },
            { letter: "B", text: "raking only early in the morning" },
            { letter: "C", text: "hauling seaweed away before breakfast" },
            { letter: "D", text: "using a small tractor instead of a truck" }
          ],
          correct: "A"
        },
        {
          id: "seaweed",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "The two texts view the seaweed in sentences 2 and 6 differently. Text 2 presents the seaweed as —",
          choices: [
            { letter: "A", text: "debris that spoils the guests' view" },
            { letter: "B", text: "a danger to young hatchlings" },
            { letter: "C", text: "a sign that the tide is rising" },
            { letter: "D", text: "food that supports beach wildlife" }
          ],
          correct: "D"
        },
        {
          id: "challenge",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select the TWO sentences from Text 2 that together best challenge the idea that the resort's raking is safe for turtles.",
          choices: [
            { letter: "A", text: "sentence 3" },
            { letter: "B", text: "sentence 4" },
            { letter: "C", text: "sentence 5" },
            { letter: "D", text: "sentence 6" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "concern",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the resort notice, the biologist's report is more concerned with —",
          choices: [
            { letter: "A", text: "the schedule of the raking crew" },
            { letter: "B", text: "the cost of cleaning the beach" },
            { letter: "C", text: "the effects of raking on the ecosystem" },
            { letter: "D", text: "the comfort of guests in the morning" }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the resort notice and the field report differ in purpose?",
          choices: [
            { letter: "A", text: "Text 1 reassures guests; Text 2 points out hidden harm." },
            { letter: "B", text: "Text 1 recruits volunteers; Text 2 sells beach tours." },
            { letter: "C", text: "Text 1 explains turtle biology; Text 2 lists hotel rules." },
            { letter: "D", text: "Text 1 apologizes to guests; Text 2 thanks the crew." }
          ],
          correct: "A"
        }
      ]
    }

  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
