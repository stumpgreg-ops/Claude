/* SOL Labyrinth — Grade 11 expansion, mid tier (nights 51-64): part-time summer jobs, a cross-country team,
 * animal shelters and public libraries. Stories, poems, a drama scene, articles, a job posting, an argument,
 * vocabulary and paired texts. Original text only. Loaded after content.js; pushes into HEIST_PACKS. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── LITERARY · 11.RL ───────────────────────── */
    {
      id: "g11-rl-c98-rentaldock",
      family: "G11",
      title: "Boat 14",
      kind: "Literary · 11.RL",
      blurb: "A summer job at a canoe rental seems like pointless paperwork until a storm rolls in.",
      level: 2,
      passage:
        "<p>" + N(1) + "The job listing had promised \"fresh air and lake views,\" and for the first three weeks of June, Teo Alvarez decided that was technically true. " +
        N(2) + "In fact, he spent most shifts at Pine Hollow Rentals wiping sunscreen off life jackets and writing numbers in a spiral logbook. " +
        N(3) + "Every canoe that left got a line: boat number, paddlers, time out, time expected back. " +
        N(4) + "Mrs. Okonkwo, who owned the business, read the logbook each evening the way some people read the weather, with a small frown of concentration. " +
        N(5) + "Teo considered it the most pointless paperwork in the state.</p>" +
        "<p>" + N(6) + "On the last Saturday of the month, the sky over the far shore turned the color of a bruise by four o'clock. " +
        N(7) + "Mrs. Okonkwo had driven to town for propane, leaving Teo in charge with a radio and a list of instructions taped inside the shed door. " +
        N(8) + "Thunder rolled across the water, and canoes began nosing back toward the dock like ducklings answering a call. " +
        N(9) + "Teo counted them in against the log. " +
        N(10) + "Boat 14 was missing.</p>" +
        "<p>" + N(11) + "His first instinct was to grab a paddle and go looking, but the first line of the taped list stopped him: Never launch alone in weather. " +
        N(12) + "The second line said to radio the ranger station with the boat number, the paddlers, and the time out. " +
        N(13) + "He flipped open the logbook. " +
        N(14) + "Boat 14: two paddlers, out at 2:10, due at 3:30, and a note in his own cramped handwriting that said \"heading to north cove.\" " +
        N(15) + "He had almost not bothered to write that part.</p>" +
        "<p>" + N(16) + "The ranger answered on the second call, and Teo read the line aloud, his voice steadier than his hands. " +
        N(17) + "Twenty minutes later a patrol boat came around the point towing a green canoe, two soaked teenagers hunched inside it, waving sheepishly. " +
        N(18) + "They had waited out the gusts on the cove's rocky beach, exactly where the log said they would be.</p>" +
        "<p>" + N(19) + "That evening Mrs. Okonkwo read the page for a long time. " +
        N(20) + "She did not say anything about bravery. " +
        N(21) + "She only underlined \"north cove\" twice and handed the logbook back to him, and Teo found that he did not mind holding it at all.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does the story of Teo's summer job most clearly develop?",
          choices: [
            { letter: "A", text: "Courage matters most when no adult is around to give orders." },
            { letter: "B", text: "Routine work that seems pointless can prove its value in a crisis." },
            { letter: "C", text: "Summer jobs rarely match the promises made in their listings." },
            { letter: "D", text: "People who break rules usually end up needing to be rescued." }
          ],
          correct: "B"
        },
        {
          id: "almost",
          sol: "11.RL.1.B",
          stem: "Sentence 15, about the note Teo almost did not write, mainly serves to —",
          choices: [
            { letter: "A", text: "show that Teo is careless about most parts of his job" },
            { letter: "B", text: "suggest that the teenagers had lied about where they were going" },
            { letter: "C", text: "stress how close a small, easily skipped habit came to being lost" },
            { letter: "D", text: "explain why the ranger station took so long to answer the radio" }
          ],
          correct: "C"
        },
        {
          id: "change",
          sol: "11.RL.1.C",
          stem: "How does Teo's attitude toward the logbook change from the beginning of the story to the end?",
          choices: [
            { letter: "A", text: "He moves from dismissing it as useless to quietly valuing it." },
            { letter: "B", text: "He moves from trusting it completely to doubting its accuracy." },
            { letter: "C", text: "He moves from fearing Mrs. Okonkwo's checks to ignoring them." },
            { letter: "D", text: "He moves from enjoying the paperwork to finding it a burden." }
          ],
          correct: "A"
        },
        {
          id: "ducklings",
          sol: "11.RL.2.A",
          stem: "In sentence 8, comparing the returning canoes to ducklings answering a call mainly suggests that the boats —",
          choices: [
            { letter: "A", text: "are too small to be safe on the lake in any kind of weather" },
            { letter: "B", text: "are being steered by paddlers who have never canoed before" },
            { letter: "C", text: "are racing one another to be the first boat back to shore" },
            { letter: "D", text: "are hurrying back together toward a place that feels safe" }
          ],
          correct: "D"
        },
        {
          id: "bruise",
          sol: "11.RL.2.B",
          stem: "The description of the sky as \"the color of a bruise\" in sentence 6 creates a mood that is —",
          choices: [
            { letter: "A", text: "calm and drowsy" },
            { letter: "B", text: "cheerful and bright" },
            { letter: "C", text: "ominous and tense" },
            { letter: "D", text: "playful and silly" }
          ],
          correct: "C"
        },
        {
          id: "technically",
          sol: "11.RL.2.C",
          stem: "In sentence 1, Teo's judgment that the listing was \"technically true\" most nearly means that it was —",
          choices: [
            { letter: "A", text: "accurate in its words but misleading about what the job was like" },
            { letter: "B", text: "written by someone who knew a great deal about technical work" },
            { letter: "C", text: "completely false and meant to trick young workers into applying" },
            { letter: "D", text: "an honest description that Teo found exciting from the first day" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "11.RL.3.A",
          stem: "The story ends with Mrs. Okonkwo underlining a phrase instead of praising Teo's bravery mainly to show that —",
          choices: [
            { letter: "A", text: "she is angry that Teo let a canoe go out with a storm coming" },
            { letter: "B", text: "she values the careful record more than any dramatic action" },
            { letter: "C", text: "she plans to replace the logbook with a better system soon" },
            { letter: "D", text: "she has not yet heard what happened while she was in town" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rl-c98-barnhill",
      family: "G11",
      title: "The Barn Hill",
      kind: "Literary · 11.RL",
      blurb: "At the regional meet, a senior runner is asked to pace a freshman instead of chasing her own spot at state.",
      level: 3,
      passage:
        "<p>" + N(1) + "Coach Dlamini sketched the plan on the back of a course map an hour before the regional race: Marisol would run the first two miles beside Lily, the freshman, and keep her out of trouble. " +
        N(2) + "\"Lily goes out too fast and dies on the barn hill,\" he said, tapping his pencil on the long climb. " +
        N(3) + "\"You keep her honest.\" " +
        N(4) + "Marisol nodded, because seniors nod, but she folded the map into a small hard square inside her fist. " +
        N(5) + "The top fifteen individuals would qualify for the state meet, and last year she had finished nineteenth.</p>" +
        "<p>" + N(6) + "The gun cracked, and two hundred runners poured across the field like water released from a dam. " +
        N(7) + "Lily surged, exactly as predicted, and Marisol touched her elbow lightly. " +
        N(8) + "\"Not yet,\" she said. " +
        N(9) + "Through the first mile they ran in the middle of the pack, Marisol talking in short bursts (relax your hands, eyes on the green jersey, let them go) until Lily's breathing settled into a rhythm that matched her own. " +
        N(10) + "On the barn hill, runners who had sprinted the opening stretch began drifting backward one after another, as if the slope itself were reeling them in.</p>" +
        "<p>" + N(11) + "At the two-mile mark, a volunteer called out places: twenty-third for Marisol, twenty-fourth for Lily. " +
        N(12) + "There was still time to chase fifteenth if she left now. " +
        N(13) + "Instead she heard herself say, \"Go. You have more than you think.\" " +
        N(14) + "Lily looked at her once, startled, and then she was gone, weaving through the green jerseys of Ridgeline, the team Westbrook trailed by a handful of points.</p>" +
        "<p>" + N(15) + "Marisol finished twenty-first. " +
        N(16) + "Lily finished fourteenth, and every runner she passed in that last mile cost Ridgeline a point. " +
        N(17) + "When the team scores went up on the tent wall, Westbrook had qualified for state by two points.</p>" +
        "<p>" + N(18) + "Later, while the others crowded around the results, Lily sat on the grass fighting a double knot that mud had pulled tight. " +
        N(19) + "Marisol knelt and worked it loose without being asked. " +
        N(20) + "\"You could have come with me,\" Lily said quietly. " +
        N(21) + "Marisol pulled the course map from her pocket, smoothed its creases flat against her knee, and said, \"Somebody had to know the hill.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does Marisol's race most clearly develop?",
          choices: [
            { letter: "A", text: "Coaches understand a race far better than the runners in it do." },
            { letter: "B", text: "Young athletes learn most by making their own costly mistakes." },
            { letter: "C", text: "Strategy matters less than raw talent on the hardest courses." },
            { letter: "D", text: "Giving up a personal goal to lift others can bring its own reward." }
          ],
          correct: "D"
        },
        {
          id: "nineteenth",
          sol: "11.RL.1.B",
          stem: "The detail in sentence 5 about Marisol's finish the year before mainly helps the reader understand —",
          choices: [
            { letter: "A", text: "why Coach Dlamini doubts that Marisol can finish the race" },
            { letter: "B", text: "what Marisol privately stands to lose by following the plan" },
            { letter: "C", text: "why Lily has never run a regional race before this season" },
            { letter: "D", text: "how the state meet decides which runners will be invited" }
          ],
          correct: "B"
        },
        {
          id: "decision",
          sol: "11.RL.1.C",
          stem: "Marisol's words to Lily in sentence 13 reveal that Marisol —",
          choices: [
            { letter: "A", text: "has decided that Lily's chance matters more than her own" },
            { letter: "B", text: "is too tired from the barn hill to keep running beside Lily" },
            { letter: "C", text: "wants Lily to take the blame if the team fails to qualify" },
            { letter: "D", text: "has misunderstood the plan Coach Dlamini explained to her" }
          ],
          correct: "A"
        },
        {
          id: "map",
          sol: "11.RL.2.A",
          stem: "The course map, folded into a hard square in sentence 4 and smoothed flat in sentence 21, most clearly symbolizes —",
          choices: [
            { letter: "A", text: "the route Marisol plans to teach next year's freshmen" },
            { letter: "B", text: "the coach's distrust of Marisol's ability to lead" },
            { letter: "C", text: "Marisol's resentment of the plan and her later peace with it" },
            { letter: "D", text: "the confusion that the hilly course causes most runners" }
          ],
          correct: "C"
        },
        {
          id: "dam",
          sol: "11.RL.2.B",
          stem: "The simile in sentence 6 comparing the runners to water released from a dam mainly emphasizes —",
          choices: [
            { letter: "A", text: "the sudden, crowded force of the race's opening moments" },
            { letter: "B", text: "the muddy and slippery condition of the course that day" },
            { letter: "C", text: "the calm patience that most runners show at the start" },
            { letter: "D", text: "the way the runners spread out evenly after the first mile" }
          ],
          correct: "A"
        },
        {
          id: "honest",
          sol: "11.RL.2.C",
          stem: "In sentence 3, when Coach Dlamini tells Marisol to keep Lily honest, he most nearly means that Marisol should —",
          choices: [
            { letter: "A", text: "make sure Lily reports her own finishing place truthfully" },
            { letter: "B", text: "prevent Lily from running faster than she can sustain" },
            { letter: "C", text: "watch for runners from other teams who cut the course" },
            { letter: "D", text: "remind Lily that the team expects her to try her hardest" }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "11.RL.3.A",
          stem: "The author reports the results in sentences 15-17 before the closing scene by the tent mainly so that the ending can focus on —",
          choices: [
            { letter: "A", text: "the final team scores and how close the margin was" },
            { letter: "B", text: "the coach's reaction to the success of his race plan" },
            { letter: "C", text: "the reasons Ridgeline lost its lead in the last mile" },
            { letter: "D", text: "the new relationship between Marisol and Lily" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c98-kennelnine",
      family: "G11",
      title: "Kennel Nine",
      kind: "Literary · 11.RL",
      blurb: "A new shelter volunteer is handed a novel instead of a leash and told to read to a frightened dog.",
      level: 1,
      passage:
        "<p>" + N(1) + "The first rule at the Fairhaven Animal Shelter was printed on a sign by the kennel door: Quiet voices, slow hands. " +
        N(2) + "Mateo Ruiz, sixteen and new to volunteering, had expected to walk dogs and give a few baths. " +
        N(3) + "Instead, the volunteer coordinator, Ms. Takahashi, handed him a paperback novel and a folding stool. " +
        N(4) + "\"Kennel nine,\" she said. \"Her name is Pepper, and she came from a home where nobody had time for her. Your job is to read out loud and ignore her.\"</p>" +
        "<p>" + N(5) + "Pepper was a small brown dog with one ear that stood up and one that folded over. " +
        N(6) + "When Mateo set up the stool outside her kennel, she pressed herself into the back corner and trembled like a leaf caught in a gutter. " +
        N(7) + "He felt foolish opening the book. " +
        N(8) + "He read three chapters about a ship captain anyway, keeping his voice low and never looking at her.</p>" +
        "<p>" + N(9) + "On the second day, Pepper stopped shaking after twenty minutes. " +
        N(10) + "On the fourth day, she lay down in the middle of the kennel with her chin on her paws, watching the pages turn. " +
        N(11) + "Mateo began to look forward to the captain's adventures himself, and once he caught himself doing the voices. " +
        N(12) + "On the seventh day, while he was reading a storm scene, he felt something warm against his shoe. " +
        N(13) + "Pepper had crept to the front of the kennel and pushed her nose through the gap in the wire.</p>" +
        "<p>" + N(14) + "He wanted to reach down and pet her more than he had wanted anything all week. " +
        N(15) + "Instead he turned the page and kept reading, the way Ms. Takahashi had told him. " +
        N(16) + "Pepper sighed and stayed.</p>" +
        "<p>" + N(17) + "Two weeks later a retired couple came to meet Pepper, and Ms. Takahashi asked Mateo to join them in the visiting room. " +
        N(18) + "Pepper walked straight past the couple and leaned against his leg. " +
        N(19) + "\"She trusts you,\" the woman said. " +
        N(20) + "\"She trusts quiet,\" Mateo answered, and he showed the couple how to sit on the floor and let her come to them. " +
        N(21) + "When Pepper finally sniffed the woman's open hand, Mateo remembered the book in his backpack still had four chapters left, and he was no longer sure whom he had been reading them for.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme is best supported by Mateo's time with Pepper?",
          choices: [
            { letter: "A", text: "Animals remember the people who first rescued them." },
            { letter: "B", text: "Volunteers should be given more exciting tasks to do." },
            { letter: "C", text: "Trust grows through patience rather than through force." },
            { letter: "D", text: "Reading aloud is the best way to train a young dog." }
          ],
          correct: "C"
        },
        {
          id: "turnpage",
          sol: "11.RL.1.C",
          stem: "Mateo's choice in sentence 15 to keep reading instead of petting Pepper shows that he —",
          choices: [
            { letter: "A", text: "puts the dog's comfort ahead of his own wish for affection" },
            { letter: "B", text: "is more interested in the novel than in the dog by now" },
            { letter: "C", text: "is afraid that Pepper might bite him if he reaches down" },
            { letter: "D", text: "does not want Ms. Takahashi to see him breaking a rule" }
          ],
          correct: "A"
        },
        {
          id: "leaf",
          sol: "11.RL.2.A",
          stem: "In sentence 6, the comparison of Pepper to a leaf caught in a gutter mainly emphasizes that she is —",
          choices: [
            { letter: "A", text: "dirty and in need of a bath" },
            { letter: "B", text: "frightened and feels trapped" },
            { letter: "C", text: "small and easy to overlook" },
            { letter: "D", text: "restless and eager to play" }
          ],
          correct: "B"
        },
        {
          id: "ignore",
          sol: "11.RL.2.C",
          stem: "In sentence 4, Ms. Takahashi's instruction to \"ignore her\" most nearly means that Mateo should —",
          choices: [
            { letter: "A", text: "spend his time with other dogs that need more attention" },
            { letter: "B", text: "pretend Pepper is not there so she stops expecting food" },
            { letter: "C", text: "avoid telling the other volunteers about Pepper's past" },
            { letter: "D", text: "let Pepper approach on her own without any pressure" }
          ],
          correct: "D"
        },
        {
          id: "days",
          sol: "11.RL.3.A",
          stem: "The author organizes the middle of the story around the second, fourth and seventh days mainly to —",
          choices: [
            { letter: "A", text: "show that Mateo volunteers at the shelter only on weekends" },
            { letter: "B", text: "suggest that Pepper's fear returns whenever Mateo is absent" },
            { letter: "C", text: "trace the slow, step-by-step change in Pepper's behavior" },
            { letter: "D", text: "explain how long the shelter keeps dogs before adoption" }
          ],
          correct: "C"
        },
        {
          id: "quiet",
          sol: "11.RL.1.B",
          stem: "Mateo's reply \"She trusts quiet\" in sentence 20 suggests that he —",
          choices: [
            { letter: "A", text: "is annoyed that the couple is taking Pepper away from him" },
            { letter: "B", text: "credits the patient method rather than himself for the change" },
            { letter: "C", text: "believes Pepper will never feel at home in a noisy house" },
            { letter: "D", text: "wants the couple to know that he did all the hard work" }
          ],
          correct: "B"
        },
        {
          id: "crept",
          sol: "11.RV.1.C",
          stem: "In sentence 13, the word crept most nearly means —",
          choices: [
            { letter: "A", text: "jumped up quickly and eagerly" },
            { letter: "B", text: "barked loudly at the stranger" },
            { letter: "C", text: "turned away and hid again" },
            { letter: "D", text: "moved slowly and carefully" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c98-holdsshelf",
      family: "G11",
      title: "641, Not 614",
      kind: "Literary · 11.RL",
      blurb: "A library page notices a patron leaving empty-handed every Tuesday and goes looking for a lost book.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every Tuesday at four, Mr. Ferreira came to the Eastgate branch library, stood at the holds shelf, and ran one finger along the spines under F. " +
        N(2) + "Every Tuesday, Amara Diallo, the teenage page who shelved returns after school, watched the finger reach the end of the row and drop to his side. " +
        N(3) + "He was waiting for a cookbook of recipes from the Azores, the islands where he had grown up, and the catalog insisted that the library's only copy was \"on shelf.\" " +
        N(4) + "The shelf disagreed.</p>" +
        "<p>" + N(5) + "\"Someone probably took it home without checking it out,\" the circulation clerk said when Amara asked. " +
        N(6) + "\"It happens. We'll mark it missing at inventory.\" " +
        N(7) + "Inventory was in January, and it was July.</p>" +
        "<p>" + N(8) + "Amara had shelved enough books by then to know that they rarely vanished; more often, they wandered. " +
        N(9) + "A child set one down in the wrong aisle, or a tired volunteer misread a label at the end of a long shift. " +
        N(10) + "She wrote the call number on her palm, 641.59, and spent her break walking the cooking section with her head tilted sideways. " +
        N(11) + "Nothing. " +
        N(12) + "Then she thought about how easily she flipped digits herself when she was tired, and she crossed the building to 614, where the shelves held books on public health. " +
        N(13) + "Between a guide to clean drinking water and a history of vaccines sat a blue book with a fishing boat on its cover.</p>" +
        "<p>" + N(14) + "The next Tuesday, she did not hand it to him; she set it on the holds shelf under F with a paper slip bearing his name, the way the library did for everyone. " +
        N(15) + "She watched from behind her cart as his finger slowed, stopped, and stayed. " +
        N(16) + "He opened the book right there in the aisle, turned a few pages, and laughed, a short surprised sound like a door opening after a long winter. " +
        N(17) + "He never learned who had found it, and Amara never told him. " +
        N(18) + "That night she scrubbed the blue ink of 641.59 off her palm, but she noticed that she had begun reading every call number twice.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a theme of the story about Amara and Mr. Ferreira?",
          choices: [
            { letter: "A", text: "Libraries should replace lost books more quickly than they do." },
            { letter: "B", text: "Close attention to small details can quietly change someone's day." },
            { letter: "C", text: "Older patrons are often too proud to ask library staff for help." },
            { letter: "D", text: "Young workers usually understand a system better than adults do." }
          ],
          correct: "B"
        },
        {
          id: "inventory",
          sol: "11.RL.1.B",
          stem: "Sentence 7, which notes that inventory is in January and it is July, mainly serves to —",
          choices: [
            { letter: "A", text: "show that the clerk's solution would leave Mr. Ferreira waiting for months" },
            { letter: "B", text: "suggest that the library closes for most of the summer each year" },
            { letter: "C", text: "explain why Amara has only recently started working at the library" },
            { letter: "D", text: "reveal that the cookbook was checked out by another patron in January" }
          ],
          correct: "A"
        },
        {
          id: "slip",
          sol: "11.RL.1.C",
          stem: "Amara's choice in sentence 14 to place the book on the holds shelf instead of handing it to Mr. Ferreira reveals that she —",
          choices: [
            { letter: "A", text: "is too shy to speak with patrons she does not know" },
            { letter: "B", text: "is worried she will be blamed for losing the book" },
            { letter: "C", text: "wants to help without drawing attention to herself" },
            { letter: "D", text: "doubts that the book is the one he has been waiting for" }
          ],
          correct: "C"
        },
        {
          id: "door",
          sol: "11.RL.2.B",
          stem: "In sentence 16, comparing Mr. Ferreira's laugh to a door opening after a long winter suggests that his laugh expresses —",
          choices: [
            { letter: "A", text: "embarrassment at being seen reading in public" },
            { letter: "B", text: "amusement at a mistake printed in the cookbook" },
            { letter: "C", text: "impatience with the library's slow holds system" },
            { letter: "D", text: "a joy that has been held back for a long time" }
          ],
          correct: "D"
        },
        {
          id: "finger",
          sol: "11.RL.3.A",
          stem: "The repeated image of Mr. Ferreira's finger moving along the holds shelf (sentences 1-2 and 15) mainly helps the author —",
          choices: [
            { letter: "A", text: "frame the story and mark the change from disappointment to success" },
            { letter: "B", text: "show that Mr. Ferreira has trouble reading the small labels" },
            { letter: "C", text: "suggest that Amara is more interested in patrons than in shelving" },
            { letter: "D", text: "explain how the holds shelf is organized by patrons' last names" }
          ],
          correct: "A"
        },
        {
          id: "disagreed",
          sol: "11.RL.2.C",
          stem: "In sentence 4, the statement \"The shelf disagreed\" most nearly means that —",
          choices: [
            { letter: "A", text: "the shelf was too full to hold any more books" },
            { letter: "B", text: "the book was not where the catalog said it was" },
            { letter: "C", text: "the library staff argued about where books belong" },
            { letter: "D", text: "the cookbook had been placed under the wrong letter" }
          ],
          correct: "B"
        },
        {
          id: "wandered",
          sol: "11.RV.1.B",
          stem: "Sentence 9 helps the reader understand that when books \"wandered\" in sentence 8, they —",
          choices: [
            { letter: "A", text: "were stolen by patrons who never returned them" },
            { letter: "B", text: "were sent to other branches without any record" },
            { letter: "C", text: "were damaged and removed from the collection" },
            { letter: "D", text: "were put back in the wrong places by people" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── INFORMATIONAL · 11.RI ───────────────────────── */
    {
      id: "g11-ri-c98-fosterhomes",
      family: "G11",
      title: "A Better Place to Wait",
      kind: "Informational · 11.RI",
      blurb: "Why crowded animal shelters send dogs and cats to volunteer foster homes, and what that cannot fix.",
      level: 2,
      passage:
        "<p>" + N(1) + "On a busy summer weekend, an animal shelter can take in more dogs and cats than it sends home, and every empty kennel fills quickly. " +
        N(2) + "Shelter staff track a number called \"length of stay,\" the average number of days an animal spends at the shelter before it is adopted, returned to its owner, or transferred to a rescue group. " +
        N(3) + "Lowering that number has become a central goal for many shelters, and foster programs are among the most common tools they use.</p>" +
        "<p>" + N(4) + "The reason is not only space. " +
        N(5) + "A shelter is a loud place, full of barking, unfamiliar smells, and strangers walking past at all hours. " +
        N(6) + "Many animals respond to that stress by hiding, pacing, or barking at visitors, behavior that can make a gentle dog look unfriendly through a kennel door. " +
        N(7) + "Stress can also weaken an animal's resistance to disease, and in crowded rooms contagious illnesses such as kennel cough can pass from one animal to the next.</p>" +
        "<p>" + N(8) + "Foster volunteers take an animal into their own home for a few days or a few months. " +
        N(9) + "In a quieter setting, the animal can rest, recover from illness or surgery, and show its real personality. " +
        N(10) + "Fosters then report what they observe: whether a cat tolerates small children, whether a dog rides calmly in a car, whether a puppy has learned to sleep through the night. " +
        N(11) + "Shelter staff say this information helps adopters choose an animal that truly fits their household.</p>" +
        "<p>" + N(12) + "At the Brannock County shelter, a foster program begun three years ago now places about forty animals a month in volunteer homes. " +
        N(13) + "Staff report that the average length of stay for dogs fell from thirty-one days to nineteen over that period. " +
        N(14) + "The program has limits, however. " +
        N(15) + "Fosters need training and supplies, some animals with serious behavior problems cannot safely be placed in a home, and workers spend hours each week matching animals with volunteers. " +
        N(16) + "A foster home, in other words, is not a cure for crowding, but for many animals it is a far better place to wait.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the central idea of the article about foster programs?",
          choices: [
            { letter: "A", text: "Shelters should stop accepting animals during busy summer weekends." },
            { letter: "B", text: "Kennel cough is the most serious health risk in crowded shelters." },
            { letter: "C", text: "Foster homes ease shelter stress and shorten stays, though with limits." },
            { letter: "D", text: "Most people who adopt from shelters later return the animals they chose." }
          ],
          correct: "C"
        },
        {
          id: "gentle",
          sol: "11.RI.1.B",
          stem: "According to the passage, why might a gentle dog appear unfriendly to shelter visitors?",
          choices: [
            { letter: "A", text: "Stress from the noisy shelter can lead it to pace or bark." },
            { letter: "B", text: "It has not yet been trained by a foster volunteer to sit." },
            { letter: "C", text: "Most dogs are kept in kennels that hide them from view." },
            { letter: "D", text: "It is usually still recovering from surgery when visitors come." }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          stem: "The author's attitude toward foster programs is best described as —",
          choices: [
            { letter: "A", text: "doubtful, because the programs cost too much money" },
            { letter: "B", text: "supportive, while honest about what they cannot do" },
            { letter: "C", text: "neutral, since the author gives no evidence either way" },
            { letter: "D", text: "enthusiastic, claiming they will end shelter crowding" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          stem: "Which description best matches how the article about shelter crowding is organized?",
          choices: [
            { letter: "A", text: "It tells the life story of one dog from intake to adoption." },
            { letter: "B", text: "It compares two shelters and argues that one is better run." },
            { letter: "C", text: "It lists steps a reader must follow to become a foster parent." },
            { letter: "D", text: "It presents a problem, explains a solution, then weighs its limits." }
          ],
          correct: "D"
        },
        {
          id: "notonly",
          sol: "11.RI.2.B",
          stem: "Sentence 4, \"The reason is not only space,\" serves mainly to —",
          choices: [
            { letter: "A", text: "signal that the author will discuss the animals' well-being, not just room" },
            { letter: "B", text: "argue that shelters already have more kennels than they truly need" },
            { letter: "C", text: "introduce the statistics from the Brannock County foster program" },
            { letter: "D", text: "suggest that length of stay is not a useful number for shelters" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "11.RI.2.C",
          stem: "Which sentence gives the strongest evidence that the Brannock County program has met the goal named in sentence 3?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "C"
        },
        {
          id: "contagious",
          sol: "11.RV.1.C",
          stem: "In sentence 7, the word contagious most nearly means —",
          choices: [
            { letter: "A", text: "easily cured with rest" },
            { letter: "B", text: "found only in older pets" },
            { letter: "C", text: "caused by poor feeding" },
            { letter: "D", text: "able to spread to others" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-ri-c98-xcscoring",
      family: "G11",
      title: "Every Place Counts",
      kind: "Informational · 11.RI",
      blurb: "How cross-country scoring turns a field of solo runners into a team sport.",
      level: 1,
      passage:
        "<p>" + N(1) + "To a spectator, a high school cross-country race can look like a crowd of individuals running through the woods, each one alone with the hills. " +
        N(2) + "The scoring system, however, turns the race into a team event, and understanding it explains why coaches cheer as loudly for a runner in fortieth place as for the one in first.</p>" +
        "<p>" + N(3) + "Most high school races cover about 5,000 meters, a little more than three miles, over grass, dirt trails, and hills. " +
        N(4) + "A team usually enters up to seven varsity runners. " +
        N(5) + "When the race ends, each runner receives a place: first, second, third, and so on. " +
        N(6) + "A team's score is the sum of the places of its top five finishers. " +
        N(7) + "If a school's first five runners finish 2nd, 5th, 9th, 14th, and 20th, the team scores 50 points. " +
        N(8) + "Unlike in most sports, the lowest score wins. " +
        N(9) + "A perfect score is 15, which happens only when one team takes the first five places.</p>" +
        "<p>" + N(10) + "The sixth and seventh runners do not add to their team's score, but they still matter. " +
        N(11) + "Because they hold places in the finishing order, they can push the scoring runners of other teams back. " +
        N(12) + "If a team's sixth runner finishes just ahead of a rival's fifth runner, that rival's score rises by a point. " +
        N(13) + "Coaches call this \"displacing.\" " +
        N(14) + "The sixth runner can also break ties: when two teams have the same total, the team whose sixth runner finished first usually wins.</p>" +
        "<p>" + N(15) + "This system shapes strategy. " +
        N(16) + "Coaches often train runners to finish close together, because a small gap between the first and fifth runner protects the score if a top runner has a bad day. " +
        N(17) + "Some teams practice \"pack running,\" in which several teammates stay together for much of the race and encourage one another. " +
        N(18) + "A single star can win the individual title, but a team of five steady runners who finish twelfth through sixteenth can beat a team with a champion and four stragglers. " +
        N(19) + "In cross-country, the runner nobody films at the finish line may be the one who decides the meet.</p>",
      claims: [
        {
          id: "mainidea",
          sol: "11.RI.1.A",
          stem: "Which sentence best states the central idea of the passage about cross-country scoring?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "B"
        },
        {
          id: "howscore",
          sol: "11.RI.1.B",
          stem: "According to the passage, how is a cross-country team's score determined?",
          choices: [
            { letter: "A", text: "By the finishing time of the team's fastest runner" },
            { letter: "B", text: "By the average place of all seven varsity runners" },
            { letter: "C", text: "By adding the places of the team's top five finishers" },
            { letter: "D", text: "By counting how many runners finish in the top fifteen" }
          ],
          correct: "C"
        },
        {
          id: "apply",
          sol: "11.RI.1.B",
          stem: "Based on the rules in the passage, a team whose top five runners finish 1st, 3rd, 4th, 8th, and 10th would score —",
          choices: [
            { letter: "A", text: "15 points" },
            { letter: "B", text: "21 points" },
            { letter: "C", text: "30 points" },
            { letter: "D", text: "26 points" }
          ],
          correct: "D"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "How does the author develop the explanation of team scoring in sentences 3-19?",
          choices: [
            { letter: "A", text: "By moving from basic rules to the role of extra runners to strategy" },
            { letter: "B", text: "By telling the story of one team's season from start to finish" },
            { letter: "C", text: "By comparing cross-country scoring with the rules of track meets" },
            { letter: "D", text: "By listing common complaints about scoring and answering each one" }
          ],
          correct: "A"
        },
        {
          id: "example",
          sol: "11.RI.2.C",
          stem: "The author includes the example of a 50-point score in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "show that most teams score close to 50 points in a race" },
            { letter: "B", text: "make the scoring rule concrete with real numbers" },
            { letter: "C", text: "prove that the second-place runner earns the most points" },
            { letter: "D", text: "suggest that this particular team needs a better fifth runner" }
          ],
          correct: "B"
        },
        {
          id: "displacing",
          sol: "11.RV.1.B",
          stem: "Sentences 11 and 12 help the reader understand that \"displacing\" in sentence 13 means —",
          choices: [
            { letter: "A", text: "running off the marked course and losing a place" },
            { letter: "B", text: "trading places with a teammate near the finish" },
            { letter: "C", text: "replacing an injured scorer with a substitute" },
            { letter: "D", text: "pushing a rival's scorer back to a worse place" }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "11.RI.1.C",
          stem: "The author most likely wrote this passage for readers who —",
          choices: [
            { letter: "A", text: "coach cross-country and need advice on training plans" },
            { letter: "B", text: "want to argue that the scoring system should change" },
            { letter: "C", text: "are new to the sport and want to follow a meet" },
            { letter: "D", text: "have run varsity races and know the rules well" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-ri-c98-libraryofthings",
      family: "G11",
      title: "Cake Pans and Power Drills",
      kind: "Informational · 11.RI",
      blurb: "A town library lends tools, telescopes and cake pans. Is that a departure from its mission or an extension of it?",
      level: 3,
      passage:
        "<p>" + N(1) + "When the Harrow Falls Public Library added a shelf of cake pans to its catalog five years ago, several residents wrote to the local paper asking whether the library had forgotten what it was for. " +
        N(2) + "The question was fair, but it rested on an assumption worth examining: that a library's purpose is to store books. " +
        N(3) + "Many public libraries describe their mission more broadly, as giving people shared access to resources that few could afford alone. " +
        N(4) + "For a long time, books were simply the most expensive and useful of those resources.</p>" +
        "<p>" + N(5) + "Seen that way, a \"library of things\" is less a departure than an extension. " +
        N(6) + "Harrow Falls now lends power drills, sewing machines, telescopes, hiking backpacks, and a portable projector that local clubs reserve weeks in advance. " +
        N(7) + "In the last fiscal year, the collection of roughly three hundred items circulated more than four thousand times, according to the library's annual report. " +
        N(8) + "A drill that sits in one garage might be used for a few minutes a year; the same drill on a library shelf may go home with dozens of families. " +
        N(9) + "The arrangement also saves space in small apartments and keeps rarely used objects out of landfills.</p>" +
        "<p>" + N(10) + "None of this comes free. " +
        N(11) + "Tools break in ways books do not, and staff must inspect, clean, and sometimes repair each item when it returns. " +
        N(12) + "Some objects require instructions or safety guidance that a paperback never needed. " +
        N(13) + "The library has had to write new policies about damage and late returns, and its insurance costs rose when the power tools arrived. " +
        N(14) + "Critics who worry that these costs could draw money away from books and reading programs are raising a real concern, not merely resisting change.</p>" +
        "<p>" + N(15) + "Still, the cake pans have outlasted the letters to the editor. " +
        N(16) + "This spring, the head librarian reported that the most frequently borrowed item in the entire collection was not a bestselling novel but a pan shaped like the number 1. " +
        N(17) + "It had been reserved for first birthdays nearly every weekend of the year, which may be the most practical definition of public access anyone could offer.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          stem: "Which of the following best summarizes the central idea of the article about the Harrow Falls library?",
          choices: [
            { letter: "A", text: "Lending objects extends a library's purpose of shared access, though it brings real costs." },
            { letter: "B", text: "Libraries should stop buying books and spend their budgets on tools and equipment instead." },
            { letter: "C", text: "Residents of Harrow Falls were wrong to write letters complaining about the cake pans." },
            { letter: "D", text: "Insurance costs make it impossible for most libraries to lend power tools to the public." }
          ],
          correct: "A"
        },
        {
          id: "critics",
          sol: "11.RI.1.C",
          stem: "In sentence 14, the author's attitude toward critics of the program is best described as —",
          choices: [
            { letter: "A", text: "dismissive, treating them as people afraid of anything new" },
            { letter: "B", text: "mocking, suggesting that their letters were not worth reading" },
            { letter: "C", text: "respectful, granting that their worry is a legitimate one" },
            { letter: "D", text: "fearful, implying that they might shut the program down" }
          ],
          correct: "C"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          stem: "How does the author develop the discussion of the library of things?",
          choices: [
            { letter: "A", text: "By tracing the history of libraries from ancient times to today" },
            { letter: "B", text: "By questioning an objection, giving evidence, conceding costs, then closing with an example" },
            { letter: "C", text: "By comparing Harrow Falls with several other libraries in nearby towns" },
            { letter: "D", text: "By listing the items in the collection from most to least popular" }
          ],
          correct: "B"
        },
        {
          id: "assumption",
          sol: "11.RI.2.B",
          stem: "In sentence 2, calling the residents' view an assumption worth examining mainly allows the author to —",
          choices: [
            { letter: "A", text: "accuse the residents of not reading the library's annual report" },
            { letter: "B", text: "admit that the library had in fact lost sight of its mission" },
            { letter: "C", text: "introduce the budget numbers that appear later in the passage" },
            { letter: "D", text: "shift attention from the complaint to the belief beneath it" }
          ],
          correct: "D"
        },
        {
          id: "pan",
          sol: "11.RI.2.C",
          stem: "The author ends with the pan shaped like the number 1 mainly to —",
          choices: [
            { letter: "A", text: "prove that cake pans cost the library less than power tools" },
            { letter: "B", text: "suggest that the library should buy more pans in other shapes" },
            { letter: "C", text: "show with a warm, concrete case how shared access meets real needs" },
            { letter: "D", text: "admit that the program is mostly used for parties, not projects" }
          ],
          correct: "C"
        },
        {
          id: "numbers",
          sol: "11.RI.1.B",
          stem: "Which sentence provides numerical evidence that residents actually use the library's collection of objects?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "B"
        },
        {
          id: "inspect",
          sol: "11.RV.1.A",
          stem: "The word inspect in sentence 11 contains the root spect, as in spectator and spectacle. This root shows that to inspect an item is to —",
          choices: [
            { letter: "A", text: "look at it closely" },
            { letter: "B", text: "fix it by hand" },
            { letter: "C", text: "lend it again" },
            { letter: "D", text: "throw it away" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── VOCABULARY · 11.RV ───────────────────────── */
    {
      id: "g11-rv-c98-lifeguard",
      family: "G11",
      title: "What the Boring Hours Are For",
      kind: "Vocabulary · 11.RV",
      blurb: "A first summer as a pool lifeguard, with six target words in context.",
      level: 1,
      passage:
        "<p>" + N(1) + "When Hana Kobayashi was hired as a lifeguard at the Riverside Municipal Pool, she pictured dramatic rescues and a whistle worn like a medal. " +
        N(2) + "Her trainer, a former swim coach named Mr. Osei, explained on the first morning that the most important skill was <strong>vigilance</strong>: watching the water every second, even when nothing seemed to be happening. " +
        N(3) + "\"Most of the time, nothing happens,\" he said. \"That is exactly when people stop looking.\"</p>" +
        "<p>" + N(4) + "He was right that much of the job was <strong>tedious</strong>. " +
        N(5) + "Hana scanned the same rectangle of blue water in twenty-minute stretches, counting heads and moving her eyes from corner to corner, then starting again, until the routine felt as dull as copying a phone book by hand. " +
        N(6) + "Every guard followed the same <strong>protocol</strong> in an emergency: three short whistle blasts, enter the water, bring the swimmer to the wall, while a second guard radios for help. " +
        N(7) + "They practiced the steps so often that Hana could recite them in her sleep.</p>" +
        "<p>" + N(8) + "The storms that summer were <strong>intermittent</strong>, rolling in for ten minutes, vanishing, then returning an hour later, and each time thunder sounded, the pool had to be cleared for thirty minutes. " +
        N(9) + "Swimmers groaned and argued, and once a man shouted that the rule was ridiculous. " +
        N(10) + "Hana felt her face grow hot, but she kept her <strong>composure</strong>, repeating the rule in a level voice until he gathered his towel and left.</p>" +
        "<p>" + N(11) + "In late July, a boy slipped off a foam noodle in the deep end and did not come up. " +
        N(12) + "Hana's three blasts were out before she had finished thinking, and she had him at the wall in seconds. " +
        N(13) + "He coughed, cried, and was fine. " +
        N(14) + "Afterward she half expected Mr. Osei to <strong>reprimand</strong> her for some step she had missed in the rush. " +
        N(15) + "Instead he only nodded. " +
        N(16) + "\"That,\" he said, \"is what all the boring hours were for.\"</p>",
      claims: [
        {
          id: "vigilance",
          sol: "11.RV.1.B",
          stem: "The explanation after the colon in sentence 2 shows that vigilance means —",
          choices: [
            { letter: "A", text: "strength in the water" },
            { letter: "B", text: "speed during a rescue" },
            { letter: "C", text: "constant, careful watching" },
            { letter: "D", text: "skill at giving orders" }
          ],
          correct: "C"
        },
        {
          id: "tedious",
          sol: "11.RV.1.B",
          stem: "Which detail from sentence 5 best clarifies the meaning of tedious in sentence 4?",
          choices: [
            { letter: "A", text: "as dull as copying a phone book by hand" },
            { letter: "B", text: "the same rectangle of blue water in the pool" },
            { letter: "C", text: "moving her eyes from corner to corner" },
            { letter: "D", text: "counting heads and starting again" }
          ],
          correct: "A"
        },
        {
          id: "protocol",
          sol: "11.RV.1.C",
          stem: "As used in sentence 6, the word protocol most nearly means —",
          choices: [
            { letter: "A", text: "a written apology" },
            { letter: "B", text: "a set series of steps" },
            { letter: "C", text: "a type of whistle" },
            { letter: "D", text: "a swimming contest" }
          ],
          correct: "B"
        },
        {
          id: "intermittent",
          sol: "11.RV.1.A",
          stem: "The word intermittent in sentence 8 begins with the prefix inter-, as in interval and intersection. The prefix inter- carries the idea of —",
          choices: [
            { letter: "A", text: "under" },
            { letter: "B", text: "against" },
            { letter: "C", text: "again" },
            { letter: "D", text: "between" }
          ],
          correct: "D"
        },
        {
          id: "composure",
          sol: "11.RV.1.B",
          stem: "Based on sentence 10, keeping one's composure means —",
          choices: [
            { letter: "A", text: "staying calm and in control" },
            { letter: "B", text: "winning an argument quickly" },
            { letter: "C", text: "leaving a difficult situation" },
            { letter: "D", text: "calling for a supervisor's help" }
          ],
          correct: "A"
        },
        {
          id: "reprimand",
          sol: "11.RV.1.C",
          stem: "In sentence 14, the word reprimand most nearly means to —",
          choices: [
            { letter: "A", text: "reward" },
            { letter: "B", text: "retrain" },
            { letter: "C", text: "scold" },
            { letter: "D", text: "replace" }
          ],
          correct: "C"
        },
        {
          id: "suffix",
          sol: "11.RV.1.A",
          stem: "The suffix -ance in vigilance (sentence 2) turns the adjective vigilant into a word that names —",
          choices: [
            { letter: "A", text: "a person who performs an action" },
            { letter: "B", text: "a quality or state of being" },
            { letter: "C", text: "a way of doing something" },
            { letter: "D", text: "a place where work happens" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rv-c98-feedstore",
      family: "G11",
      title: "We Will Start Again",
      kind: "Vocabulary · 11.RV",
      blurb: "A summer volunteer in the library's local history room transcribes a century-old family's letters.",
      level: 3,
      passage:
        "<p>" + N(1) + "The local history room on the library's third floor smelled of dust and old glue, and on her first Saturday as a summer volunteer, Priyanka Raman learned that nearly everything in it was <strong>ephemera</strong>: posters, ticket stubs, menus, and flyers printed to be used once and thrown away. " +
        N(2) + "\"Nobody meant to save any of this,\" said the archivist, Mr. Lindqvist, \"which is exactly why it's rare.\"</p>" +
        "<p>" + N(3) + "Her first task was a box of letters from a family that had run a feed store in town nearly a century ago. " +
        N(4) + "The paper was so <strong>brittle</strong> that a corner snapped off in her gloved fingers like the edge of a dry leaf, and after that she lifted each sheet on a flat piece of cardboard. " +
        N(5) + "Some letters were written in pencil that had faded almost to nothing, and a few were <strong>illegible</strong>, their words smeared by an old water stain until no one could make them out. " +
        N(6) + "Mr. Lindqvist asked her to <strong>transcribe</strong> the rest, typing each letter word for word into a document so that researchers could read the text without handling the originals.</p>" +
        "<p>" + N(7) + "The work was painstaking. " +
        N(8) + "A single page could take an hour, because she had to compare every doubtful letter shape against words she was sure of elsewhere in the same handwriting. " +
        N(9) + "When she could not decide between two readings, she typed both in brackets with a question mark, a <strong>provisional</strong> choice that a later reader could confirm or correct.</p>" +
        "<p>" + N(10) + "By August she had arranged the letters in <strong>chronological</strong> order, from a hopeful note about opening the store to a final one about selling it, and she began to see the family's story take shape across the decades. " +
        N(11) + "The last letter described a spring flood that had ruined the store's stock. " +
        N(12) + "It was water-stained too, and for a long time Priyanka could read only one line near the bottom: \"We will start again in spring.\" " +
        N(13) + "She typed it without brackets.</p>",
      claims: [
        {
          id: "ephemera",
          sol: "11.RV.1.B",
          stem: "The examples and explanation after the colon in sentence 1 show that ephemera are —",
          choices: [
            { letter: "A", text: "valuable books bound in leather" },
            { letter: "B", text: "items made to last only briefly" },
            { letter: "C", text: "photographs of important events" },
            { letter: "D", text: "documents signed by town leaders" }
          ],
          correct: "B"
        },
        {
          id: "brittle",
          sol: "11.RV.1.B",
          stem: "In sentence 4, the comparison to the edge of a dry leaf helps show that brittle paper is —",
          choices: [
            { letter: "A", text: "soft and easily folded" },
            { letter: "B", text: "thick and hard to cut" },
            { letter: "C", text: "stiff and easily broken" },
            { letter: "D", text: "damp and likely to tear" }
          ],
          correct: "C"
        },
        {
          id: "illegible",
          sol: "11.RV.1.A",
          stem: "The word illegible in sentence 5 begins with il-, the same prefix as in illogical and illegal. Added to legible, the prefix shows that illegible means —",
          choices: [
            { letter: "A", text: "able to be read again" },
            { letter: "B", text: "written in pencil" },
            { letter: "C", text: "read aloud slowly" },
            { letter: "D", text: "not able to be read" }
          ],
          correct: "D"
        },
        {
          id: "transcribe",
          sol: "11.RV.1.A",
          stem: "The word transcribe in sentence 6 contains the root scrib, as in scribble and inscription. This root carries the idea of —",
          choices: [
            { letter: "A", text: "writing" },
            { letter: "B", text: "saving" },
            { letter: "C", text: "listening" },
            { letter: "D", text: "carrying" }
          ],
          correct: "A"
        },
        {
          id: "chron",
          sol: "11.RV.1.A",
          stem: "The root chron in chronological (sentence 10) also appears in chronicle and synchronize. Arranging the letters in chronological order means arranging them by —",
          choices: [
            { letter: "A", text: "the writer's name" },
            { letter: "B", text: "the time they were written" },
            { letter: "C", text: "how damaged they are" },
            { letter: "D", text: "the length of each one" }
          ],
          correct: "B"
        },
        {
          id: "provisional",
          sol: "11.RV.1.C",
          stem: "In sentence 9, a provisional choice is one that is —",
          choices: [
            { letter: "A", text: "temporary and open to change" },
            { letter: "B", text: "final and approved by experts" },
            { letter: "C", text: "careless and quickly made" },
            { letter: "D", text: "secret and kept from others" }
          ],
          correct: "A"
        },
        {
          id: "nobrackets",
          sol: "11.RV.1.C",
          stem: "Read with sentence 9 in mind, the statement in sentence 13 that Priyanka typed the last line \"without brackets\" most nearly suggests that she —",
          choices: [
            { letter: "A", text: "ran out of time to check the final letter carefully" },
            { letter: "B", text: "forgot the rule Mr. Lindqvist had taught her" },
            { letter: "C", text: "is certain of the words and moved by their meaning" },
            { letter: "D", text: "wants later readers to correct the line for her" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── PAIRED TEXTS · 11.DSR ───────────────────────── */
    {
      id: "g11-dsr-c98-shelterhours",
      family: "G11",
      title: "After Four O'Clock",
      kind: "Paired texts · 11.DSR",
      blurb: "A student editorial asks a county shelter to stay open later; the shelter's director answers in a newsletter note.",
      level: 2,
      passage:
        "<p><strong>Text 1 — \"Open When Families Can Come,\" a student editorial in the Lakeview Ledger</strong></p>" +
        "<p>" + N(1) + "The Corwin County Animal Shelter is open to visitors from ten in the morning until four in the afternoon, Tuesday through Saturday. " +
        N(2) + "Those hours work well for retirees and people with flexible jobs, but they shut out almost everyone else in a county where most adults work full time. " +
        N(3) + "Most students are in class until three, and many parents do not leave work until five or later. " +
        N(4) + "My own family tried for three weeks to visit a beagle we had seen on the shelter's website; by the time we could get there on a Saturday, she had been adopted, which was good news for her and a lesson for us. " +
        N(5) + "The shelter says it wants more adoptions, yet its schedule turns away the very families most likely to be looking for a pet. " +
        N(6) + "Other shelters in our region already stay open until seven at least one night a week, and several say those evenings are among their busiest. " +
        N(7) + "Corwin County should do the same, starting this summer. " +
        N(8) + "An empty kennel is the goal, and an open door is the simplest way to reach it.</p>" +
        "<p><strong>Text 2 — \"A Note from the Director,\" Corwin County Animal Shelter newsletter</strong></p>" +
        "<p>" + N(9) + "Many of you have asked, by email and in person at the front desk, why our doors close at four. " +
        N(10) + "The answer is not that we prefer it; we have six full-time animal care staff, and every hour we are open to the public is an hour they are not cleaning kennels, giving medications, or walking dogs, and none of those tasks can simply be skipped. " +
        N(11) + "Evening hours also require at least two people on site for safety after dark. " +
        N(12) + "That said, we have heard you. " +
        N(13) + "Beginning in June, we will pilot Thursday evening hours, staying open until seven-thirty, for twelve weeks. " +
        N(14) + "To make this possible without shortchanging the animals, we need volunteers age sixteen and older who can greet visitors, answer questions, and help with meet-and-greets. " +
        N(15) + "Training takes one Saturday morning and covers safety, adoption paperwork, and how to introduce a nervous dog to a family. " +
        N(16) + "At the end of the pilot, we will compare Thursday-evening adoptions with our daytime numbers and decide whether to continue or expand. " +
        N(17) + "If the evenings bring in families who could not visit before, we will find a way to keep the doors open.</p>",
      claims: [
        {
          id: "claim1",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the central claim of Text 1?",
          choices: [
            { letter: "A", text: "Families should adopt older dogs instead of popular breeds like beagles." },
            { letter: "B", text: "The shelter should add evening hours so working families and students can visit." },
            { letter: "C", text: "The shelter's website should post animals only after they are ready to adopt." },
            { letter: "D", text: "Other shelters in the region are better run than the Corwin County shelter." }
          ],
          correct: "B"
        },
        {
          id: "both",
          sol: "11.DSR.D",
          stem: "Which idea is supported by both the editorial and the director's note?",
          choices: [
            { letter: "A", text: "The shelter's staff would rather work during the evening than the day." },
            { letter: "B", text: "Shelters should require volunteers to be at least eighteen years old." },
            { letter: "C", text: "Some families cannot visit the shelter during its current daytime hours." },
            { letter: "D", text: "Saturday is the busiest and most successful day for shelter adoptions." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          stem: "Which statement best describes how the editorial and the director's note differ?",
          choices: [
            { letter: "A", text: "Text 1 calls for a change, while Text 2 explains its costs and tests it." },
            { letter: "B", text: "Text 1 praises the shelter, while Text 2 criticizes the county's budget." },
            { letter: "C", text: "Text 1 uses statistics, while Text 2 relies entirely on personal stories." },
            { letter: "D", text: "Text 1 targets volunteers, while Text 2 is written for shelter staff." }
          ],
          correct: "A"
        },
        {
          id: "whynot",
          sol: "11.DSR.D",
          stem: "Select TWO sentences from Text 2 that explain why the shelter has not already offered evening hours.",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "respond",
          sol: "11.DSR.E",
          stem: "How does Text 2 respond to the complaint in sentence 5 that the schedule turns families away?",
          choices: [
            { letter: "A", text: "It denies that any families have trouble visiting during the day." },
            { letter: "B", text: "It blames the editorial's writer for not visiting on a weekday." },
            { letter: "C", text: "It promises to stay open every evening starting this summer." },
            { letter: "D", text: "It accepts the concern in part and sets up a limited trial." }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "11.DSR.E",
          stem: "Compared with the tone of the editorial, the tone of the director's note is more —",
          choices: [
            { letter: "A", text: "urgent and accusing" },
            { letter: "B", text: "measured and explanatory" },
            { letter: "C", text: "playful and joking" },
            { letter: "D", text: "bitter and defensive" }
          ],
          correct: "B"
        },
        {
          id: "conclude",
          sol: "11.DSR.E",
          stem: "A reader who uses both texts could best conclude that the success of evening hours will depend partly on —",
          choices: [
            { letter: "A", text: "whether the shelter can find more beagles to put up for adoption" },
            { letter: "B", text: "whether other shelters in the region agree to close earlier" },
            { letter: "C", text: "whether volunteers, possibly including students, step forward" },
            { letter: "D", text: "whether the Lakeview Ledger prints a second editorial in June" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-dsr-c98-summerwork",
      family: "G11",
      title: "The Job Nobody Pays For",
      kind: "Paired texts · 11.DSR",
      blurb: "A counselor's column praises summer jobs; a student who cares for her brothers all summer writes back.",
      level: 3,
      passage:
        "<p><strong>Text 1 — \"What a Summer Job Teaches,\" from a school counselor's newsletter column</strong></p>" +
        "<p>" + N(1) + "Every spring, students ask me whether a summer job is worth the time it takes away from camps, travel teams, summer classes, or simply resting. " +
        N(2) + "My answer is almost always yes. " +
        N(3) + "A job teaches lessons that are hard to learn anywhere else: arriving on time when no teacher is taking attendance, handling a customer who is having a bad day, and managing money you earned yourself. " +
        N(4) + "Employers I speak with say they look for exactly these habits when they hire graduates, often more than for any particular course on a transcript. " +
        N(5) + "A summer job also produces something a camp rarely does: a supervisor who can describe your work honestly in a reference letter. " +
        N(6) + "Of course, a job is not right for everyone. " +
        N(7) + "Some students carry responsibilities at home that leave no room for outside work. " +
        N(8) + "But for those who can manage it, even twelve hours a week at a grocery store or a day camp can open doors that a list of activities cannot. " +
        N(9) + "Apply early, because the best positions at pools, camps, and stores are usually filled by April.</p>" +
        "<p><strong>Text 2 — \"The Job Nobody Pays For,\" a student's response by Rosa Villanueva</strong></p>" +
        "<p>" + N(10) + "When the counselor's column came out, I read it at the kitchen table between my little brothers' juice boxes. " +
        N(11) + "My parents both work long shifts in summer, so from June to August I am the one who gets the twins to swim lessons, makes lunch, takes them to the library on rainy days, and keeps the apartment from becoming a disaster zone. " +
        N(12) + "I do not have a supervisor or a paycheck. " +
        N(13) + "But I am on time every day, because two seven-year-olds are a stricter alarm clock than any manager. " +
        N(14) + "I handle customers who are having a bad day; they just happen to be my brothers. " +
        N(15) + "I manage a grocery budget my mother leaves on the refrigerator, and I have learned exactly how far forty dollars can stretch. " +
        N(16) + "The column mentions students like me in one brief passage, as people for whom a job is \"not right.\" " +
        N(17) + "I would put it differently. " +
        N(18) + "I already have a job; it simply does not come with a reference letter. " +
        N(19) + "I wish colleges, and counselors, had a box to check for that kind of work.</p>",
      claims: [
        {
          id: "central",
          sol: "11.DSR.D",
          stem: "Which idea is central to both the counselor's column and Rosa's response?",
          choices: [
            { letter: "A", text: "Students should spend summers resting before the next school year." },
            { letter: "B", text: "Paid jobs are the only experiences that colleges take seriously." },
            { letter: "C", text: "Camps and travel teams teach more than most part-time jobs do." },
            { letter: "D", text: "Being reliable and handling responsibility build valuable habits." }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          stem: "The two texts differ mainly in that the counselor's column —",
          choices: [
            { letter: "A", text: "treats paid work as the main source of these lessons, while Rosa finds them at home" },
            { letter: "B", text: "argues against summer jobs, while Rosa argues that every student should have one" },
            { letter: "C", text: "relies on Rosa's own example, while Rosa relies on interviews with employers" },
            { letter: "D", text: "focuses on college essays, while Rosa focuses only on earning money for family" }
          ],
          correct: "A"
        },
        {
          id: "mirror",
          sol: "11.DSR.D",
          stem: "Select TWO sentences from Text 2 that most directly match lessons the counselor lists in sentence 3.",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "challenge",
          sol: "11.DSR.E",
          stem: "Which sentence from Text 1 does Rosa most directly challenge?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        },
        {
          id: "echo",
          sol: "11.DSR.E",
          stem: "Rosa echoes the column's own phrases (on time, a bad day, managing money) mainly to —",
          choices: [
            { letter: "A", text: "show that her duties at home meet the column's own standard" },
            { letter: "B", text: "suggest that the counselor copied ideas from her earlier essay" },
            { letter: "C", text: "prove that she plans to apply for a grocery store job by April" },
            { letter: "D", text: "make fun of the counselor's habit of repeating the same advice" }
          ],
          correct: "A"
        },
        {
          id: "conclude",
          sol: "11.DSR.E",
          stem: "A school administrator who read both texts could best conclude that —",
          choices: [
            { letter: "A", text: "students who care for siblings are not interested in paid jobs" },
            { letter: "B", text: "references from supervisors should no longer be requested" },
            { letter: "C", text: "family caregiving may be undervalued because no one vouches for it" },
            { letter: "D", text: "the counselor should stop writing columns about summer plans" }
          ],
          correct: "C"
        },
        {
          id: "alarm",
          sol: "11.RI.2.B",
          stem: "In sentence 13, calling her brothers a stricter alarm clock than any manager mainly emphasizes that Rosa's work at home —",
          choices: [
            { letter: "A", text: "begins later in the morning than a typical summer job" },
            { letter: "B", text: "demands the same reliability that an employer expects" },
            { letter: "C", text: "is easier to manage than working for a stranger" },
            { letter: "D", text: "would be better done by a hired babysitter" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-dsr-c98-hollins",
      family: "G11",
      title: "Two Views of One Race",
      kind: "Paired texts · 11.DSR",
      blurb: "A school website reports a cross-country meet; one runner's journal tells what the results leave out.",
      level: 1,
      passage:
        "<p><strong>Text 1 — \"Westfield Runners Take Second at Hollins Invitational,\" school website</strong></p>" +
        "<p>" + N(1) + "The Westfield girls' cross-country team placed second of fourteen teams at Saturday's Hollins Invitational, finishing with 68 points behind Carver High's 41, while the host school, Hollins, placed third. " +
        N(2) + "Junior Abena Mensah led the team, crossing the line in sixth place with a time of 20:14 on the hilly 5,000-meter course at Hollins Farm Park. " +
        N(3) + "Sophomore Grace Lindgren ran a personal best of 21:02 to finish eleventh, more than forty seconds faster than her previous best. " +
        N(4) + "Rain fell through most of the morning, leaving the lower trail muddy and slowing times across the field, and several runners lost shoes in the deepest stretch near the creek. " +
        N(5) + "Coach Ruiz praised the team's discipline on the final hill, where Westfield runners gained a combined nine places. " +
        N(6) + "\"We had five runners within a minute of each other,\" Ruiz said. \"That's how you score in this sport.\" " +
        N(7) + "Westfield's next meet is the district championship on October 18 at Pell Park. " +
        N(8) + "Family members and students are welcome to attend, and free parking is available at the Pell Park recreation center beside the starting line.</p>" +
        "<p><strong>Text 2 — From Grace Lindgren's running journal</strong></p>" +
        "<p>" + N(9) + "Saturday, after Hollins. " +
        N(10) + "The school website will say I ran a personal best, which is true, but it will not say that I spent the first mile convinced I was going to quit. " +
        N(11) + "The rain soaked my shoes before the start, and on the lower trail the mud grabbed at every step like it wanted to keep me. " +
        N(12) + "At the halfway mark, I could see Abena's yellow headband far ahead, so I stopped thinking about the finish, which felt about a hundred miles away, and just followed it. " +
        N(13) + "On the last hill, Coach Ruiz was yelling \"Arms! Arms!\" and for once I actually listened. " +
        N(14) + "I passed two girls from Carver near the top, and neither of them tried to pass me back. " +
        N(15) + "I didn't know my time until Abena showed me the results on her phone, and then I made a sound I'm glad nobody recorded. " +
        N(16) + "Twenty-one minutes and two seconds. " +
        N(17) + "My legs are still shaking as I write this, and my shoes are drying on the porch, stuffed with newspaper. " +
        N(18) + "Next stop, districts, and this time I am not planning to quit in the first mile.</p>",
      claims: [
        {
          id: "bothfact",
          sol: "11.DSR.D",
          stem: "Which fact appears in both the website report and Grace's journal?",
          choices: [
            { letter: "A", text: "Westfield finished second of fourteen teams." },
            { letter: "B", text: "Grace passed two Carver runners on the hill." },
            { letter: "C", text: "Grace ran a personal best time at the meet." },
            { letter: "D", text: "The district meet will be held at Pell Park." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          stem: "The website report and the journal entry differ mainly in that the report —",
          choices: [
            { letter: "A", text: "gives the team's results, while the journal gives one runner's experience" },
            { letter: "B", text: "describes the weather, while the journal never mentions the conditions" },
            { letter: "C", text: "criticizes the team, while the journal defends the runners' effort" },
            { letter: "D", text: "focuses on Abena, while the journal focuses on Coach Ruiz's advice" }
          ],
          correct: "A"
        },
        {
          id: "twohow",
          sol: "11.DSR.D",
          stem: "Select TWO sentences from Text 2 that help explain how Grace managed to run her best time.",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "leftout",
          sol: "11.DSR.E",
          stem: "What does Grace's journal reveal that the website report leaves out?",
          choices: [
            { letter: "A", text: "Carver High won the meet with a score of 41." },
            { letter: "B", text: "Grace nearly gave up during the first mile." },
            { letter: "C", text: "The lower trail was muddy because of the rain." },
            { letter: "D", text: "Abena Mensah was Westfield's fastest runner." }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "11.DSR.E",
          stem: "Compared with the tone of the website report, the tone of Grace's journal is more —",
          choices: [
            { letter: "A", text: "formal and objective" },
            { letter: "B", text: "angry and frustrated" },
            { letter: "C", text: "distant and uncertain" },
            { letter: "D", text: "personal and emotional" }
          ],
          correct: "D"
        },
        {
          id: "rain",
          sol: "11.RI.1.B",
          stem: "According to the website report, what slowed runners' times across the whole field?",
          choices: [
            { letter: "A", text: "A late start caused by fourteen teams" },
            { letter: "B", text: "A new course that was longer than usual" },
            { letter: "C", text: "Rain that left the lower trail muddy" },
            { letter: "D", text: "Strong winds on the final steep hill" }
          ],
          correct: "C"
        },
        {
          id: "headband",
          sol: "11.RL.1.C",
          stem: "Grace's choice in sentence 12 to follow Abena's headband shows that she —",
          choices: [
            { letter: "A", text: "copes by focusing on a small goal she can manage" },
            { letter: "B", text: "plans to beat Abena at the district championship" },
            { letter: "C", text: "does not know the route and fears getting lost" },
            { letter: "D", text: "wants Abena to slow down and run beside her" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── POETRY · 11.RL ───────────────────────── */
    {
      id: "g11-rl-c98-hillrepeats",
      family: "G11",
      title: "Hill Repeats",
      kind: "Poetry · 11.RL",
      blurb: "Eight trips up the same hill on a summer morning, long before anyone is watching.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Coach says eight, and the hill says nothing,<br>" +
        L(2) + "just leans against the morning like a closed door.<br>" +
        L(3) + "The first time up, my legs still have opinions;<br>" +
        L(4) + "by the third, they have stopped arguing with me.<br>" +
        L(5) + "At the top, a mailbox with a dented flag<br>" +
        L(6) + "is the only one keeping score.<br>" +
        L(7) + "Down again, the gravel loose as rumor,<br>" +
        L(8) + "my breath running out ahead of me like a dog<br>" +
        L(9) + "that knows the way better than I do.<br>" +
        L(10) + "Fifth time. Sixth. The numbers lose their edges.<br>" +
        L(11) + "Somebody behind me laughs for no reason,<br>" +
        L(12) + "and the laugh carries me up a few more yards.<br>" +
        L(13) + "This is the part no one will see in October:<br>" +
        L(14) + "no crowd, no clock, no ribbon at the finish,<br>" +
        L(15) + "just a hill and the same seven of us<br>" +
        L(16) + "handing it back and forth like a secret.<br>" +
        L(17) + "On the eighth climb I stop counting.<br>" +
        L(18) + "I am not getting faster, not yet.<br>" +
        L(19) + "I am getting to be someone<br>" +
        L(20) + "the hill will not surprise." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a theme of \"Hill Repeats\"?",
          choices: [
            { letter: "A", text: "Races are won mainly by the runners who count most carefully." },
            { letter: "B", text: "Unseen, repeated effort slowly shapes who a person becomes." },
            { letter: "C", text: "Coaches push athletes harder than their bodies can handle." },
            { letter: "D", text: "Summer training matters less than the races held in October." }
          ],
          correct: "B"
        },
        {
          id: "door",
          sol: "11.RL.2.A",
          stem: "In line 2, the hill that \"leans against the morning like a closed door\" mainly suggests that the hill seems —",
          choices: [
            { letter: "A", text: "like a barrier that will not give way easily" },
            { letter: "B", text: "like a shelter that protects the runners" },
            { letter: "C", text: "like a building the speaker wants to enter" },
            { letter: "D", text: "like a path that is hidden from strangers" }
          ],
          correct: "A"
        },
        {
          id: "opinions",
          sol: "11.RL.2.B",
          stem: "In lines 3 and 4, describing the speaker's legs as having opinions and then no longer arguing mainly emphasizes that —",
          choices: [
            { letter: "A", text: "the speaker is injured and should stop running" },
            { letter: "B", text: "the speaker disagrees with the coach's workout" },
            { letter: "C", text: "the body resists at first and then settles into the work" },
            { letter: "D", text: "the speaker's teammates are complaining about the hill" }
          ],
          correct: "C"
        },
        {
          id: "mailbox",
          sol: "11.RL.1.B",
          stem: "Lines 5 and 6, about the mailbox that is \"the only one keeping score,\" suggest that —",
          choices: [
            { letter: "A", text: "the coach has forgotten to record the runners' times" },
            { letter: "B", text: "the runners are competing against one another" },
            { letter: "C", text: "a neighbor has been timing the team from the house" },
            { letter: "D", text: "no one is there to witness or reward this training" }
          ],
          correct: "D"
        },
        {
          id: "shift",
          sol: "11.RL.3.A",
          stem: "How do the final lines of \"Hill Repeats\" (lines 17-20) differ from the opening lines (lines 1-4)?",
          choices: [
            { letter: "A", text: "The opening counts climbs against an obstacle; the ending stops counting and looks at growth." },
            { letter: "B", text: "The opening is hopeful about the season; the ending admits the team will lose in October." },
            { letter: "C", text: "The opening describes the speaker alone; the ending introduces the teammates for the first time." },
            { letter: "D", text: "The opening praises the coach; the ending criticizes the coach for giving too many repeats." }
          ],
          correct: "A"
        },
        {
          id: "edges",
          sol: "11.RL.2.C",
          stem: "In line 10, the phrase \"The numbers lose their edges\" most nearly means that —",
          choices: [
            { letter: "A", text: "the speaker can no longer read the coach's watch" },
            { letter: "B", text: "the repetitions begin to blur together with fatigue" },
            { letter: "C", text: "the team has decided to run fewer than eight climbs" },
            { letter: "D", text: "the mailbox's numbers have worn away over the years" }
          ],
          correct: "B"
        },
        {
          id: "seven",
          sol: "11.RL.1.C",
          stem: "Lines 11-16 reveal that the speaker's attitude toward the teammates is one of —",
          choices: [
            { letter: "A", text: "quiet rivalry, since each wants to be the fastest" },
            { letter: "B", text: "mild annoyance at their laughing during practice" },
            { letter: "C", text: "indifference, because the speaker runs alone" },
            { letter: "D", text: "shared purpose that helps carry the speaker" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c98-closingtime",
      family: "G11",
      title: "Closing Time, Branch Library",
      kind: "Poetry · 11.RL",
      blurb: "A teenage page shelves the day's returns at closing and rethinks what a library's quiet means.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "At eight-fifteen the lights begin their warning,<br>" +
        L(2) + "three slow blinks above the magazines,<br>" +
        L(3) + "and the last reader folds her newspaper<br>" +
        L(4) + "the way you fold a flag, corner to corner.<br>" +
        L(5) + "I push the cart down aisle nine,<br>" +
        L(6) + "returning what the day took out and brought back:<br>" +
        L(7) + "a field guide to mushrooms, sticky with someone's lunch,<br>" +
        L(8) + "a book of baby names with three names circled,<br>" +
        L(9) + "a manual for an engine no one makes anymore.<br>" +
        L(10) + "Each one goes home to its number<br>" +
        L(11) + "the way a key goes home to its hook.<br>" +
        L(12) + "I used to think a library was quiet<br>" +
        L(13) + "because nothing happened here.<br>" +
        L(14) + "Now I think it is quiet the way a harbor is quiet<br>" +
        L(15) + "at night, every boat tied up and breathing,<br>" +
        L(16) + "every hull still carrying the shape of where it went.<br>" +
        L(17) + "The circled names, the grease, the folded corners:<br>" +
        L(18) + "nobody signs them, but they are signatures.<br>" +
        L(19) + "I turn off the last lamp, and the dark comes in politely,<br>" +
        L(20) + "like a patron who knows exactly where it's going." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses the central idea of \"Closing Time, Branch Library\"?",
          choices: [
            { letter: "A", text: "A library should be cleaned more carefully before it closes." },
            { letter: "B", text: "Old books are less useful than new ones and should be replaced." },
            { letter: "C", text: "A library's quiet is full of traces of the lives that pass through it." },
            { letter: "D", text: "Working at a library at night is lonely and somewhat frightening." }
          ],
          correct: "C"
        },
        {
          id: "harbor",
          sol: "11.RL.2.A",
          stem: "The harbor comparison in lines 14-16 suggests that the returned books —",
          choices: [
            { letter: "A", text: "have come back from journeys and still show where they have been" },
            { letter: "B", text: "are too heavy to be moved once they are placed on the shelves" },
            { letter: "C", text: "will soon be sent away to another library across the water" },
            { letter: "D", text: "were damaged by rain on the way back to the branch library" }
          ],
          correct: "A"
        },
        {
          id: "signatures",
          sol: "11.RL.2.B",
          stem: "Line 18, \"nobody signs them, but they are signatures,\" is best described as —",
          choices: [
            { letter: "A", text: "an exaggeration showing that the books are badly damaged" },
            { letter: "B", text: "a paradox suggesting that unsigned marks still reveal their readers" },
            { letter: "C", text: "a rhyme that links the poem's ending back to its opening line" },
            { letter: "D", text: "an instruction telling patrons to sign out the books they borrow" }
          ],
          correct: "B"
        },
        {
          id: "usedto",
          sol: "11.RL.3.A",
          stem: "How does the shift that begins in line 12 (\"I used to think\") shape the poem's meaning?",
          choices: [
            { letter: "A", text: "It moves the setting from the library to the speaker's home." },
            { letter: "B", text: "It introduces a second speaker who disagrees with the first." },
            { letter: "C", text: "It turns from describing chores to revising an earlier belief." },
            { letter: "D", text: "It reveals that the speaker plans to quit the job at the library." }
          ],
          correct: "C"
        },
        {
          id: "babynames",
          sol: "11.RL.1.B",
          stem: "The detail in line 8 about a book of baby names with three names circled most likely implies that —",
          choices: [
            { letter: "A", text: "the speaker is supposed to erase the marks before shelving" },
            { letter: "B", text: "a child has been drawing in library books without permission" },
            { letter: "C", text: "the library has too many copies of the same reference book" },
            { letter: "D", text: "a reader was preparing for a new child and weighing choices" }
          ],
          correct: "D"
        },
        {
          id: "home",
          sol: "11.RL.2.C",
          stem: "In line 10, the phrase \"goes home to its number\" most nearly means that each book —",
          choices: [
            { letter: "A", text: "is checked out again by the patron who returned it" },
            { letter: "B", text: "is returned to its proper place by call number" },
            { letter: "C", text: "is counted to make sure no books are missing" },
            { letter: "D", text: "is labeled with a new number at the end of the day" }
          ],
          correct: "B"
        },
        {
          id: "politely",
          sol: "11.RV.1.C",
          stem: "In line 19, the word politely suggests that the darkness arrives —",
          choices: [
            { letter: "A", text: "suddenly and with a loud noise" },
            { letter: "B", text: "slowly, after the lamps flicker out" },
            { letter: "C", text: "angrily, as though it had been kept waiting" },
            { letter: "D", text: "gently, in a way that seems welcome" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── DRAMA · 11.RL ───────────────────────── */
    {
      id: "g11-rl-c98-seniorcat",
      family: "G11",
      title: "The Older Cat",
      kind: "Drama · 11.RL",
      blurb: "A family expecting to adopt a kitten meets the eleven-year-old cat their grandmother has chosen.",
      level: 1,
      passage:
        "<p><em>Setting: a small visiting room at the Hartwell County Animal Shelter. A gray cat named Biscuit sits on a blanket inside an open carrier. ANJALI, seventeen, and her brother DEV, fourteen, kneel on the floor. Their grandmother, NANI, sits on a folding chair with her cane across her knees. MR. BRENNAN, the adoption counselor, holds a clipboard.</em></p>" +
        "<p>" + N(1) + "<strong>DEV</strong>: He's eleven? Mom said we were getting a kitten.<br>" +
        N(2) + "<strong>MR. BRENNAN</strong>: Biscuit is eleven, yes. His owner moved into a care home that doesn't allow pets. He's healthy, but most people walk right past the older cats.<br>" +
        N(3) + "<strong>ANJALI</strong>: <em>(quietly, to Dev)</em> Nani picked him. Be nice.<br>" +
        N(4) + "<strong>DEV</strong>: I am being nice. I'm just saying a kitten would be around longer.<br>" +
        N(5) + "<strong>NANI</strong>: <em>(tapping her cane on the floor)</em> Dev. Come here.<br>" +
        N(6) + "<em>(Dev crosses to her chair.)</em><br>" +
        N(7) + "<strong>NANI</strong>: When your grandfather and I came to this country, everyone in our building wanted to meet the babies. Nobody knocked on the door to meet the old aunt who came with us. She taught me to cook, and to bargain at the market, and to sit still when I was angry.<br>" +
        N(8) + "<strong>DEV</strong>: What does that have to do with a cat?<br>" +
        N(9) + "<strong>NANI</strong>: A kitten will climb your curtains and knock your homework off the table. This one will sit with me in the afternoons while you two are at school. We are both done climbing curtains.<br>" +
        N(10) + "<em>(Anjali laughs. Biscuit steps out of the carrier, stretches, and walks straight to Nani's chair. He rubs his cheek against the tip of her cane.)</em><br>" +
        N(11) + "<strong>MR. BRENNAN</strong>: <em>(writing on his clipboard)</em> That's the first time he's left the carrier all week.<br>" +
        N(12) + "<strong>DEV</strong>: <em>(crouching, holding out two fingers)</em> Okay. Hi. You're kind of a grandpa, aren't you?<br>" +
        N(13) + "<em>(Biscuit sniffs Dev's fingers, then settles at Nani's feet.)</em><br>" +
        N(14) + "<strong>DEV</strong>: Fine. But I'm naming the next one.<br>" +
        N(15) + "<strong>NANI</strong>: <em>(smiling)</em> You will have to wait until this one is finished with us.<br>" +
        N(16) + "<strong>ANJALI</strong>: <em>(to Mr. Brennan)</em> Where do we sign?</p>",
      claims: [
        {
          id: "dev",
          sol: "11.RL.1.C",
          stem: "Which statement best describes Dev in this scene?",
          choices: [
            { letter: "A", text: "He is practical and doubtful but willing to change his mind." },
            { letter: "B", text: "He is rude to his grandmother and refuses to listen to her." },
            { letter: "C", text: "He is frightened of cats and wants to leave the shelter." },
            { letter: "D", text: "He is eager to adopt Biscuit from the very first line." }
          ],
          correct: "A"
        },
        {
          id: "aunt",
          sol: "11.RL.1.B",
          stem: "Nani tells the story of the old aunt in line 7 mainly to persuade Dev that —",
          choices: [
            { letter: "A", text: "the family should move back to the building they first lived in" },
            { letter: "B", text: "older ones who are often overlooked can have a great deal to give" },
            { letter: "C", text: "he should learn to cook and bargain before he adopts any pet" },
            { letter: "D", text: "babies and kittens need more care than most families can give" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does the scene at the Hartwell County shelter most clearly develop?",
          choices: [
            { letter: "A", text: "Children should always obey the adults in their family." },
            { letter: "B", text: "Shelters should place only young animals with families." },
            { letter: "C", text: "The value of age is easy to miss but worth recognizing." },
            { letter: "D", text: "Pets are a poor choice for families with busy schedules." }
          ],
          correct: "C"
        },
        {
          id: "direction",
          sol: "11.RL.3.A",
          stem: "The stage direction in line 10, in which Biscuit walks straight to Nani's chair, mainly serves to —",
          choices: [
            { letter: "A", text: "show that the cat is too weak to stay in its carrier" },
            { letter: "B", text: "explain why Mr. Brennan has been worried all week" },
            { letter: "C", text: "suggest that Anjali has secretly trained the cat" },
            { letter: "D", text: "settle the argument by showing a bond already forming" }
          ],
          correct: "D"
        },
        {
          id: "curtains",
          sol: "11.RL.2.A",
          stem: "When Nani says \"We are both done climbing curtains\" in line 9, she compares herself to Biscuit mainly to suggest that —",
          choices: [
            { letter: "A", text: "she and the cat share a quieter stage of life" },
            { letter: "B", text: "she dislikes the family's new curtains at home" },
            { letter: "C", text: "she was once a mischievous and difficult child" },
            { letter: "D", text: "she worries the cat will damage the furniture" }
          ],
          correct: "A"
        },
        {
          id: "endtone",
          sol: "11.RL.2.B",
          stem: "The tone of the scene's ending (lines 14-16) is best described as —",
          choices: [
            { letter: "A", text: "tense and uncertain" },
            { letter: "B", text: "warm and lighthearted" },
            { letter: "C", text: "bitter and resentful" },
            { letter: "D", text: "formal and businesslike" }
          ],
          correct: "B"
        },
        {
          id: "walkpast",
          sol: "11.RV.1.B",
          stem: "In line 2, Mr. Brennan's remark that most people \"walk right past\" the older cats most nearly means those cats are —",
          choices: [
            { letter: "A", text: "kept in a room that visitors cannot enter" },
            { letter: "B", text: "too shy to come out and greet the visitors" },
            { letter: "C", text: "overlooked by people choosing a pet to adopt" },
            { letter: "D", text: "adopted first because they are already trained" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── FUNCTIONAL TEXT · 11.RI ───────────────────────── */
    {
      id: "g11-ri-c98-readingassistant",
      family: "G11",
      title: "Now Hiring: Summer Reading",
      kind: "Functional text · 11.RI",
      blurb: "A public library's job posting for teen assistants in its children's summer reading program.",
      level: 2,
      passage:
        "<p>" + N(1) + "Millbrook Public Library is hiring four Teen Summer Reading Assistants to help run its children's summer reading program from June 16 through August 8. " +
        N(2) + "This is a paid, part-time position for students ages 15 to 18.</p>" +
        "<p><strong>What You Will Do</strong> " + N(3) + "Assistants staff the summer reading desk, where children register, record the minutes they have read, and choose prizes when they reach reading goals. " +
        N(4) + "You will also help set up and clean up weekly events, such as story times, craft afternoons, and the Friday science show. " +
        N(5) + "Some shifts include reading aloud to small groups of children ages four to eight. " +
        N(6) + "Assistants do not shelve books or handle overdue fines; those tasks belong to library pages and circulation staff.</p>" +
        "<p><strong>Schedule and Pay</strong> " + N(7) + "Assistants work 12 to 15 hours per week, in shifts of three to five hours between 10 a.m. and 6 p.m., Monday through Saturday. " +
        N(8) + "Pay is $12.50 per hour. " +
        N(9) + "Shifts are set two weeks in advance, and assistants may trade shifts only with another assistant and with the program coordinator's approval. " +
        N(10) + "All assistants must attend a paid training session on Saturday, June 14, from 9 a.m. to 1 p.m.; applicants who cannot attend cannot be hired.</p>" +
        "<p><strong>What We Are Looking For</strong> " + N(11) + "No previous job experience is required. " +
        N(12) + "We value patience with young children, a friendly attitude at a busy desk, and reliability. " +
        N(13) + "Applicants who speak a language other than English are especially encouraged to apply, since many families in our program speak Spanish, Vietnamese, or Arabic at home.</p>" +
        "<p><strong>How to Apply</strong> " + N(14) + "Pick up an application at any Millbrook branch or download it from the library's website. " +
        N(15) + "Return the completed form, along with one reference from a teacher, coach, or community leader who is not a relative, to the Youth Services desk at the Main Library by 5 p.m. on May 9. " +
        N(16) + "Late or incomplete applications will not be reviewed. " +
        N(17) + "Interviews will take place the week of May 19, and all applicants will be notified of a decision by May 30.</p>",
      claims: [
        {
          id: "notduty",
          sol: "11.RI.1.B",
          stem: "According to the posting, which task would a Teen Summer Reading Assistant NOT be expected to do?",
          choices: [
            { letter: "A", text: "Read aloud to small groups of young children" },
            { letter: "B", text: "Help set up the Friday science show" },
            { letter: "C", text: "Record the minutes children have read" },
            { letter: "D", text: "Return borrowed books to the shelves" }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "11.RI.1.C",
          stem: "The Millbrook library posting is written mainly for —",
          choices: [
            { letter: "A", text: "parents signing young children up for summer reading" },
            { letter: "B", text: "teenagers deciding whether to apply for a summer job" },
            { letter: "C", text: "library pages who want to switch to a new department" },
            { letter: "D", text: "teachers who are writing references for their students" }
          ],
          correct: "B"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          stem: "How do the bold headings in the Millbrook posting help a reader who is deciding whether to apply?",
          choices: [
            { letter: "A", text: "They let the reader quickly find duties, hours, qualities, and steps." },
            { letter: "B", text: "They rank the duties from the most to the least important ones." },
            { letter: "C", text: "They show the order in which events will happen during the summer." },
            { letter: "D", text: "They separate rules for children from the rules for assistants." }
          ],
          correct: "A"
        },
        {
          id: "training",
          sol: "11.RI.2.C",
          stem: "Which sentence makes clear that missing the training session would rule out an applicant?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "C"
        },
        {
          id: "reference",
          sol: "11.RI.1.B",
          stem: "Based on the posting, an applicant who planned to list her older cousin as her reference should instead —",
          choices: [
            { letter: "A", text: "ask her cousin to come to the interview in person" },
            { letter: "B", text: "ask a coach, teacher, or community leader who is not family" },
            { letter: "C", text: "leave the reference section blank and explain later" },
            { letter: "D", text: "submit the application after May 9 with two references" }
          ],
          correct: "B"
        },
        {
          id: "encouraged",
          sol: "11.RV.1.C",
          stem: "In sentence 13, the phrase \"especially encouraged to apply\" most nearly means that such applicants are —",
          choices: [
            { letter: "A", text: "required to take a language test" },
            { letter: "B", text: "guaranteed to be offered the job" },
            { letter: "C", text: "paid more than the other assistants" },
            { letter: "D", text: "strongly invited to send applications" }
          ],
          correct: "D"
        },
        {
          id: "limits",
          sol: "11.RI.2.B",
          stem: "Sentence 6, which names tasks that belong to pages and circulation staff, is included mainly to —",
          choices: [
            { letter: "A", text: "mark the limits of the role so applicants know what it excludes" },
            { letter: "B", text: "warn assistants that they will be fined for overdue books" },
            { letter: "C", text: "suggest that pages earn more money than reading assistants" },
            { letter: "D", text: "encourage assistants to apply for page positions next summer" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── ARGUMENT · 11.RI ───────────────────────── */
    {
      id: "g11-ri-c98-countsummer",
      family: "G11",
      title: "Count the Summer",
      kind: "Argument · 11.RI",
      blurb: "A student op-ed argues that a district's career-ready diploma seal should count paid summer jobs.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every June, students across our district clock in at pools, farm stands, day camps, and grocery stores, and every August they return to school with skills that appear nowhere on their records. " +
        N(2) + "Our district already offers a \"career-ready\" seal on diplomas for students who complete an internship or a workplace course. " +
        N(3) + "It should extend that seal to students who document at least 120 hours of summer employment.</p>" +
        "<p>" + N(4) + "The case begins with fairness. " +
        N(5) + "Internships in our district are limited to about forty spots a year, and most are unpaid, which means they go disproportionately to students who can afford to work for free. " +
        N(6) + "A student who spends the summer bagging groceries to help with rent is building the same habits of punctuality and responsibility as an intern in an office, yet only the intern earns the seal. " +
        N(7) + "A policy meant to recognize readiness for work should not reward only the students who can afford not to be paid for it.</p>" +
        "<p>" + N(8) + "The second reason is practical. " +
        N(9) + "Employers in our region told the district's advisory board last year that dependability and customer service were the skills they found hardest to hire for. " +
        N(10) + "Summer jobs teach exactly those skills, often under more pressure than a classroom simulation can create.</p>" +
        "<p>" + N(11) + "Some teachers worry that summer hours would be hard to verify and that students might exaggerate. " +
        N(12) + "This concern is reasonable, but it is solvable. " +
        N(13) + "The district could require a pay stub and a one-page evaluation signed by a supervisor, the same kind of form that internship hosts already complete. " +
        N(14) + "Others argue that a summer job is not \"educational\" in the way a structured internship is. " +
        N(15) + "Yet anyone who has calmly handled a line of impatient customers at a snow-cone stand on the Fourth of July has learned something no worksheet can teach.</p>" +
        "<p>" + N(16) + "The district's own mission statement promises to prepare every student for life after graduation. " +
        N(17) + "Every student, not only those with the right connections, deserves credit for the preparation they are already doing. " +
        N(18) + "The school board should vote to count the summer.</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.A",
          stem: "Which sentence states the central claim of \"Count the Summer\"?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 3" }
          ],
          correct: "D"
        },
        {
          id: "unfair",
          sol: "11.RI.1.B",
          stem: "Which detail most directly supports the author's claim that the current seal policy is unfair?",
          choices: [
            { letter: "A", text: "Employers have trouble hiring for customer service skills." },
            { letter: "B", text: "The district's mission promises to prepare every student." },
            { letter: "C", text: "Internships are few in number and are mostly unpaid." },
            { letter: "D", text: "Students work at pools, farm stands, and grocery stores." }
          ],
          correct: "C"
        },
        {
          id: "opposing",
          sol: "11.RI.1.C",
          stem: "The author's handling of opposing views in sentences 11-15 is best described as —",
          choices: [
            { letter: "A", text: "conceding that the concerns are fair and then answering each" },
            { letter: "B", text: "ignoring the concerns and repeating the original claim" },
            { letter: "C", text: "agreeing that the proposal should wait for further study" },
            { letter: "D", text: "attacking the teachers who raised the concerns as lazy" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          stem: "Which description best matches the structure of the \"Count the Summer\" op-ed?",
          choices: [
            { letter: "A", text: "A personal story, followed by a list of summer job openings" },
            { letter: "B", text: "A claim, two reasons, counterarguments with replies, and a call to act" },
            { letter: "C", text: "A history of the seal, followed by a comparison with other states" },
            { letter: "D", text: "A problem described in detail, with the solution left to the reader" }
          ],
          correct: "B"
        },
        {
          id: "afford",
          sol: "11.RI.2.B",
          stem: "The wording of sentence 7, about students who \"can afford not to be paid,\" mainly emphasizes —",
          choices: [
            { letter: "A", text: "the irony that a work-readiness award favors those with money" },
            { letter: "B", text: "the author's belief that internships should pay higher wages" },
            { letter: "C", text: "the difficulty employers face in finding dependable workers" },
            { letter: "D", text: "the large number of hours that summer jobs usually require" }
          ],
          correct: "A"
        },
        {
          id: "snowcone",
          sol: "11.RI.2.C",
          stem: "The author includes the snow-cone stand example in sentence 15 mainly to —",
          choices: [
            { letter: "A", text: "show that the author has worked at a snow-cone stand" },
            { letter: "B", text: "suggest that holiday jobs should count for double hours" },
            { letter: "C", text: "admit that some summer jobs teach very little of value" },
            { letter: "D", text: "answer an objection with a vivid case of real learning" }
          ],
          correct: "D"
        },
        {
          id: "disproportion",
          sol: "11.RV.1.A",
          stem: "The word disproportionately in sentence 5 combines the prefix dis-, the base proportion, and the suffix -ly. Together these parts show that the internships go to some students —",
          choices: [
            { letter: "A", text: "for a short time only" },
            { letter: "B", text: "in a secret process" },
            { letter: "C", text: "out of balance with others" },
            { letter: "D", text: "again and again each year" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
