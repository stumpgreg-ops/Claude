/* SOL Labyrinth — v5.15 expansion: Grade 10 medium packs (Virginia G10), file c66.
 * Twenty-one original MEDIUM packs (170–290 words prose, 12–16 line poems, 110–150 words per paired text)
 * on a mountain rescue team, glassblowing, a woodworking shop and the history of maps.
 * Original text only. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* 1 — Literary: mountain rescue */
    {
      id: "g10-rl-c66-ridgeline",
      family: "G10",
      title: "The Ridgeline Call",
      kind: "Literary · 10.RL",
      blurb: "A rescue trainee answers her first real call and learns the hardest step is the one she doesn't take.",
      level: 2,
      passage:
        "<p>" + N(1) + "The pager went off at 4:12 a.m., and Ines Carvalho was lacing her boots before the second tone ended. " +
        N(2) + "It was her first real call with the Kestrel Valley Rescue Team, and for six months she had practiced knots, radio codes, and litter carries on the gentle slope behind the fire station. " +
        N(3) + "A hiker had slipped on the loose rock below Owl Notch and could not put weight on his ankle. " +
        N(4) + "By the time the team reached him, the sky had turned the color of weak tea, and wind was pushing sleet sideways across the trail. " +
        N(5) + "Ines wanted to run straight to the man, but Rafe, the team leader, held up one gloved hand. " +
        N(6) + "\"Scene first,\" he said. \"Then patient.\" " +
        N(7) + "She made herself stop and look: loose rock above, a narrow ledge, a drop of thirty feet to the left. " +
        N(8) + "Only after Rafe anchored a rope to a boulder did he nod her forward. " +
        N(9) + "The hiker, a college student named Theo, kept apologizing for wasting everyone's morning. " +
        N(10) + "Ines splinted his ankle the way she had done a hundred times on volunteers who were only pretending to hurt. " +
        N(11) + "This time her hands shook, and she had to tighten the strap twice. " +
        N(12) + "On the long carry down, Theo stopped apologizing and started asking questions about the team. " +
        N(13) + "At the trailhead, as the ambulance doors closed, Rafe handed Ines a thermos of coffee. " +
        N(14) + "\"You stopped when I asked,\" he said. " +
        N(15) + "\"That's the part most people never learn.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"The Ridgeline Call\"?",
          choices: [
            { letter: "A", text: "Careful judgment matters as much as the eagerness to help." },
            { letter: "B", text: "Volunteers should avoid work that puts them in danger." },
            { letter: "C", text: "People who are rescued rarely thank the rescuers." },
            { letter: "D", text: "Enough practice makes a real emergency feel easy." }
          ],
          correct: "A"
        },
        {
          id: "plot",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "Rafe's instruction in sentence 6 functions in the plot of Ines's first call as —",
          choices: [
            { letter: "A", text: "a sign that Rafe doubts Ines can do the job" },
            { letter: "B", text: "the main source of conflict between the rescuers" },
            { letter: "C", text: "a warning that sets up the lesson of the ending" },
            { letter: "D", text: "a joke meant to calm the injured hiker" }
          ],
          correct: "C"
        },
        {
          id: "hands",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 10 and 11 characterize Ines as someone who —",
          choices: [
            { letter: "A", text: "has never learned how to apply a splint" },
            { letter: "B", text: "is careless about the details of her work" },
            { letter: "C", text: "cares more about Rafe's praise than Theo" },
            { letter: "D", text: "is trained but feels the weight of a real patient" }
          ],
          correct: "D"
        },
        {
          id: "tea",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In sentence 4, describing the sky as the color of weak tea mainly suggests —",
          choices: [
            { letter: "A", text: "a storm that has already passed over the notch" },
            { letter: "B", text: "a pale, dim dawn that gives little light or warmth" },
            { letter: "C", text: "a bright sunrise that cheers the tired team" },
            { letter: "D", text: "that the rescuers are thinking about breakfast" }
          ],
          correct: "B"
        },
        {
          id: "mood",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The details Ines notices in sentence 7 — loose rock, a narrow ledge, a thirty-foot drop — mainly create a mood of —",
          choices: [
            { letter: "A", text: "quiet relief" },
            { letter: "B", text: "playful adventure" },
            { letter: "C", text: "deep sorrow" },
            { letter: "D", text: "careful tension" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author ends the story with Rafe's remark in sentences 14 and 15 mainly to —",
          choices: [
            { letter: "A", text: "hint that Rafe plans to leave the team soon" },
            { letter: "B", text: "show what Ines's first call has really taught her" },
            { letter: "C", text: "explain how Theo fell below Owl Notch" },
            { letter: "D", text: "introduce a new problem for the next call" }
          ],
          correct: "B"
        }
      ]
    },
    /* 2 — Literary: glassblowing */
    {
      id: "g10-rl-c66-gather",
      family: "G10",
      title: "The First Gather",
      kind: "Literary · 10.RL",
      blurb: "In her grandfather's glass studio, Lucia learns that molten glass will not be rushed.",
      level: 1,
      passage:
        "<p>" + N(1) + "The furnace in Nonno Aldo's studio never went out, not even on holidays. " +
        N(2) + "Lucia had grown up hearing its low roar through the wall, the way other children heard the ocean or the highway. " +
        N(3) + "On the morning she turned fifteen, her grandfather handed her a long steel blowpipe and said it was time. " +
        N(4) + "She dipped the tip into the furnace and turned it slowly, the way she had watched him do it a thousand times. " +
        N(5) + "When she pulled it out, a glowing orange ball clung to the end like honey on a spoon. " +
        N(6) + "\"Keep turning,\" Nonno said. \"Glass only listens to patience.\" " +
        N(7) + "Lucia blew into the pipe, but nothing happened, so she blew harder. " +
        N(8) + "The bubble swelled lopsided, then sagged toward the floor. " +
        N(9) + "She felt her face grow hotter than the furnace. " +
        N(10) + "Her grandfather did not take the pipe away. " +
        N(11) + "Instead, he set his hand lightly over hers and turned with her, slow and steady, until the glass drew itself back into a round shape. " +
        N(12) + "The finished cup was thick on one side and thin on the other, and it leaned a little like a tired person. " +
        N(13) + "Lucia wanted to drop it into the scrap bin. " +
        N(14) + "Nonno set it on the shelf instead, right beside the first cup he had ever made, which leaned exactly the same way.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by the events in \"The First Gather\"?",
          choices: [
            { letter: "A", text: "Talent is something a person either has or lacks." },
            { letter: "B", text: "Beginners should wait until they are older to try hard skills." },
            { letter: "C", text: "Early mistakes are a shared part of learning any craft." },
            { letter: "D", text: "Family businesses rarely welcome change." }
          ],
          correct: "C"
        },
        {
          id: "nonno",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Nonno Aldo's actions in sentences 10 and 11 show that he is —",
          choices: [
            { letter: "A", text: "patient and willing to guide rather than take over" },
            { letter: "B", text: "worried that Lucia will damage his blowpipe" },
            { letter: "C", text: "disappointed that Lucia has not watched him closely" },
            { letter: "D", text: "eager to finish the work and close the studio" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "Sentence 9, She felt her face grow hotter than the furnace, mainly conveys Lucia's —",
          choices: [
            { letter: "A", text: "fear of getting burned" },
            { letter: "B", text: "pride in her first try" },
            { letter: "C", text: "anger at her grandfather" },
            { letter: "D", text: "embarrassment at failing" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "What is most surprising about where Nonno places Lucia's lopsided cup in sentence 14?",
          choices: [
            { letter: "A", text: "He hides it so customers will not see it." },
            { letter: "B", text: "His own first cup turns out to be just as flawed." },
            { letter: "C", text: "He plans to melt it down and reuse the glass." },
            { letter: "D", text: "He gives it away to a neighbor as a gift." }
          ],
          correct: "B"
        },
        {
          id: "furnace",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author opens with the detail that the furnace never went out (sentences 1–2) mainly to —",
          choices: [
            { letter: "A", text: "warn readers that the studio is unsafe" },
            { letter: "B", text: "show that the family cannot afford to rest" },
            { letter: "C", text: "suggest that glassmaking is a constant part of Lucia's life" },
            { letter: "D", text: "explain why Lucia dislikes visiting the studio" }
          ],
          correct: "C"
        },
        {
          id: "lean",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "In sentence 12, the cup leans like a tired person rather than simply being crooked. Compared with crooked, this description suggests the cup is —",
          choices: [
            { letter: "A", text: "worthless and ready for the scrap bin" },
            { letter: "B", text: "dangerous to drink from" },
            { letter: "C", text: "broken beyond repair" },
            { letter: "D", text: "flawed in a gentle, almost human way" }
          ],
          correct: "D"
        }
      ]
    },
    /* 3 — Literary: woodworking shop */
    {
      id: "g10-rl-c66-dovetail",
      family: "G10",
      title: "Dovetail",
      kind: "Literary · 10.RL",
      blurb: "Kwabena wants to use the shop's new machine; his uncle insists on a handsaw and a long afternoon.",
      level: 3,
      passage:
        "<p>" + N(1) + "The new router jig sat in the corner of Uncle Kofi's shop like a guest nobody had introduced. " +
        N(2) + "It could cut a perfect dovetail joint in under a minute, and Kwabena had watched the video about it eleven times. " +
        N(3) + "\"Today you cut one by hand,\" his uncle said, setting a marking gauge and a thin saw on the bench. " +
        N(4) + "Kwabena glanced at the machine, then at the stack of drawer fronts for Mrs. Asante's dresser, due Friday. " +
        N(5) + "\"The jig is faster,\" he said. " +
        N(6) + "\"The jig is faster for people who already know what a good joint looks like,\" Uncle Kofi replied, and went back to sanding. " +
        N(7) + "The first tail Kwabena cut wandered past the pencil line. " +
        N(8) + "The second split along the grain with a small, sharp crack that sounded like an insult. " +
        N(9) + "By the fourth, he had stopped watching the clock and started watching the wood, noticing how the saw pulled toward the softer rings. " +
        N(10) + "When the pins and tails finally slid together, they did not quite close; a gap thin as a fingernail showed at one corner. " +
        N(11) + "Kwabena expected his uncle to point at it. " +
        N(12) + "Instead, Uncle Kofi switched on the router jig, ran a scrap board through it, and handed Kwabena the result. " +
        N(13) + "\"Now tell me what is wrong with this one,\" he said. " +
        N(14) + "Kwabena turned the machine-cut joint in his hands and, for the first time, saw that the tails were set too deep. " +
        N(15) + "His uncle smiled and adjusted the jig by half a turn.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme developed in \"Dovetail\"?",
          choices: [
            { letter: "A", text: "Machines will eventually replace skilled workers." },
            { letter: "B", text: "Understanding a skill by hand helps a person judge any tool." },
            { letter: "C", text: "Young people learn best when they are left alone." },
            { letter: "D", text: "Meeting a deadline matters more than doing work well." }
          ],
          correct: "B"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The central conflict in \"Dovetail\" is best described as a struggle between —",
          choices: [
            { letter: "A", text: "Kwabena's wish for speed and his uncle's insistence on understanding" },
            { letter: "B", text: "Uncle Kofi and Mrs. Asante over the price of a dresser" },
            { letter: "C", text: "Kwabena and a rival apprentice who wants the jig" },
            { letter: "D", text: "the shop's old tools and a machine that keeps breaking" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentence 9 shows that during the afternoon Kwabena —",
          choices: [
            { letter: "A", text: "gives up and secretly uses the machine" },
            { letter: "B", text: "becomes more worried about Friday's deadline" },
            { letter: "C", text: "shifts his attention from time to the material itself" },
            { letter: "D", text: "blames the saw for every mistake he makes" }
          ],
          correct: "C"
        },
        {
          id: "guest",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In sentence 1, comparing the router jig to a guest nobody had introduced mainly suggests that the machine —",
          choices: [
            { letter: "A", text: "was borrowed from a neighbor's shop" },
            { letter: "B", text: "is too large for the room" },
            { letter: "C", text: "makes a loud and unwelcome noise" },
            { letter: "D", text: "is new and has not yet found its place" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in the story about Uncle Kofi's shop is most ironic?",
          choices: [
            { letter: "A", text: "The drawer fronts are due on Friday." },
            { letter: "B", text: "Kwabena has watched a video about the jig eleven times." },
            { letter: "C", text: "The hand-cut joint teaches Kwabena to spot the machine's error." },
            { letter: "D", text: "Uncle Kofi keeps sanding while Kwabena works." }
          ],
          correct: "C"
        },
        {
          id: "gap",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "The author has Uncle Kofi say nothing about the gap in sentence 10 and instead run the jig (sentences 11–12) mainly to —",
          choices: [
            { letter: "A", text: "show that he teaches by letting Kwabena discover things" },
            { letter: "B", text: "suggest that he did not notice the gap at all" },
            { letter: "C", text: "prove that the machine is always more accurate" },
            { letter: "D", text: "end the lesson early so the dresser is finished" }
          ],
          correct: "A"
        }
      ]
    },
    /* 4 — Literary: the history of maps */
    {
      id: "g10-rl-c66-halmeoni",
      family: "G10",
      title: "Halmeoni's Map",
      kind: "Literary · 10.RL",
      blurb: "A hand-drawn map of a neighborhood that no longer exists shows Ji-woo a city her phone cannot.",
      level: 2,
      passage:
        "<p>" + N(1) + "Ji-woo found the map folded inside her grandmother's rice cookbook, soft as cloth from being opened so many times. " +
        N(2) + "It showed six streets drawn in blue ink, but none of them had names. " +
        N(3) + "Instead, Halmeoni had labeled the places the way a person remembers them: <em>tofu man</em>, <em>bridge where the dog bites</em>, <em>Mrs. Shin's red gate</em>. " +
        N(4) + "Ji-woo typed the old neighborhood's name into her phone, and a clean gray grid appeared, crowded with parking garages and a highway exit. " +
        N(5) + "\"That map is useless now,\" her cousin Min-jun said, leaning over her shoulder. " +
        N(6) + "\"Everything on it is gone.\" " +
        N(7) + "That evening, Ji-woo brought the map to the kitchen, where Halmeoni was slicing radishes. " +
        N(8) + "Her grandmother wiped her hands, unfolded the paper, and began to talk. " +
        N(9) + "The tofu man had sung while he pushed his cart. " +
        N(10) + "The dog at the bridge had only bitten people who ran. " +
        N(11) + "Behind Mrs. Shin's red gate, Halmeoni had learned to sew, and once, during a storm, eleven neighbors had slept on that floor. " +
        N(12) + "As she spoke, her finger moved from street to street as if it still knew the way home in the dark. " +
        N(13) + "Ji-woo took out her phone again, but this time she opened a blank note and began typing every word. " +
        N(14) + "Later, she showed Min-jun the two maps side by side. " +
        N(15) + "\"One tells you where things are,\" she said. " +
        N(16) + "\"The other tells you why anyone wanted to go there.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Halmeoni's Map\"?",
          choices: [
            { letter: "A", text: "Modern technology makes old traditions unnecessary." },
            { letter: "B", text: "Cities improve when old buildings are replaced." },
            { letter: "C", text: "Family members rarely agree about the past." },
            { letter: "D", text: "A place's meaning lives in people's memories of it." }
          ],
          correct: "D"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the turning point in Ji-woo's view of her grandmother's map?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "C"
        },
        {
          id: "finger",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In sentence 12, the image of Halmeoni's finger moving as if it still knew the way home in the dark suggests that —",
          choices: [
            { letter: "A", text: "the neighborhood is still alive in her memory" },
            { letter: "B", text: "her eyesight has grown too weak to read" },
            { letter: "C", text: "she is nervous about walking at night" },
            { letter: "D", text: "the map was drawn by someone else" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Min-jun's comment in sentences 5 and 6 is ironic because —",
          choices: [
            { letter: "A", text: "Min-jun drew the map himself years earlier" },
            { letter: "B", text: "the map turns out to hold what the phone map cannot" },
            { letter: "C", text: "the old streets are shown on the phone after all" },
            { letter: "D", text: "Halmeoni agrees that the map should be thrown out" }
          ],
          correct: "B"
        },
        {
          id: "contrast",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author places the clean gray grid of sentence 4 early in the story mainly to —",
          choices: [
            { letter: "A", text: "show that Ji-woo is lost in an unfamiliar city" },
            { letter: "B", text: "set up a contrast with the grandmother's living map" },
            { letter: "C", text: "explain how the highway was built" },
            { letter: "D", text: "suggest that Ji-woo prefers parking garages" }
          ],
          correct: "B"
        },
        {
          id: "labels",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 3, the phrase the way a person remembers them helps the reader understand that Halmeoni's labels are —",
          choices: [
            { letter: "A", text: "official street names copied from a city record" },
            { letter: "B", text: "warnings written for strangers visiting the area" },
            { letter: "C", text: "personal landmarks drawn from her own experience" },
            { letter: "D", text: "jokes meant to confuse her grandchildren" }
          ],
          correct: "C"
        }
      ]
    },
    /* 5 — Literary: mountain rescue dog */
    {
      id: "g10-rl-c66-scentcone",
      family: "G10",
      title: "Square D-2",
      kind: "Literary · 10.RL",
      blurb: "In thick fog on Cerro Pardo, a search dog turns toward a square that has already been cleared.",
      level: 3,
      passage:
        "<p>" + N(1) + "For three hours the fog on Cerro Pardo had erased everything farther away than a thrown stone. " +
        N(2) + "The search coordinator had divided the slope into neat squares on his tablet, and Valentina Rojas and her dog, Lirio, had been assigned square C-7. " +
        N(3) + "Square C-7 was empty. " +
        N(4) + "Valentina knew it was empty because Lirio had crossed it twice with his nose low and his tail loose, the posture of a dog who finds nothing worth reporting. " +
        N(5) + "Then the wind shifted. " +
        N(6) + "Lirio's head came up, and his whole body swung east, toward square D-2, which another team had already marked clear. " +
        N(7) + "Valentina reached for her radio and hesitated. " +
        N(8) + "Leaving an assigned square was the kind of thing new handlers did, and she had spent four years proving she was not new. " +
        N(9) + "Lirio whined once, low, a sound she had heard from him only twice before. " +
        N(10) + "She thought of the missing man's daughter at the command post, holding a cup of coffee she had not touched since dawn. " +
        N(11) + "\"Base, this is Rojas,\" she said. \"My dog is working scent into D-2. Requesting permission to follow.\" " +
        N(12) + "The pause that followed felt longer than the whole morning. " +
        N(13) + "\"Follow it,\" the coordinator said at last. " +
        N(14) + "Forty meters past the line, beneath a shelf of rock that the fog had folded into shadow, they found Señor Ibáñez sitting against a boulder, cold and confused but alive. " +
        N(15) + "That night, the coordinator added a new column beside every square in his search plan, and he labeled it <em>wind</em>.</p>",
      claims: [
        {
          id: "tension",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The tension in the middle of \"Square D-2\" comes mainly from —",
          choices: [
            { letter: "A", text: "Valentina's fear that Lirio is injured in the fog" },
            { letter: "B", text: "an argument between two search teams over D-2" },
            { letter: "C", text: "Valentina's choice between orders and her dog's signal" },
            { letter: "D", text: "the coordinator's refusal to answer the radio" }
          ],
          correct: "C"
        },
        {
          id: "pride",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentence 8 characterizes Valentina as someone who —",
          choices: [
            { letter: "A", text: "values her reputation as an experienced handler" },
            { letter: "B", text: "does not trust the dogs she is assigned to work with" },
            { letter: "C", text: "is new to search work and unsure of the rules" },
            { letter: "D", text: "would rather work alone than with a team" }
          ],
          correct: "A"
        },
        {
          id: "fold",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In sentence 14, the phrase a shelf of rock that the fog had folded into shadow suggests that the fog —",
          choices: [
            { letter: "A", text: "was lifting quickly from the slope" },
            { letter: "B", text: "had made the rock slippery and unsafe" },
            { letter: "C", text: "was thinner near the boulder than above it" },
            { letter: "D", text: "had hidden the spot from the searchers' view" }
          ],
          correct: "D"
        },
        {
          id: "coffee",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The detail of the daughter's untouched coffee in sentence 10 mainly adds a sense of —",
          choices: [
            { letter: "A", text: "calm routine" },
            { letter: "B", text: "anxious waiting" },
            { letter: "C", text: "mild boredom" },
            { letter: "D", text: "bitter anger" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in the Cerro Pardo search is most ironic?",
          choices: [
            { letter: "A", text: "Lirio crosses square C-7 twice without finding anything." },
            { letter: "B", text: "The coordinator keeps the search plan on a tablet." },
            { letter: "C", text: "Valentina has worked as a handler for four years." },
            { letter: "D", text: "The man is found in a square already marked clear." }
          ],
          correct: "D"
        },
        {
          id: "posture",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 4, the word posture most nearly means —",
          choices: [
            { letter: "A", text: "a loud bark" },
            { letter: "B", text: "a body position" },
            { letter: "C", text: "a training command" },
            { letter: "D", text: "a hunting route" }
          ],
          correct: "B"
        }
      ]
    },
    /* 6 — Informational: the history of maps */
    {
      id: "g10-ri-c66-portolan",
      family: "G10",
      title: "Maps Before the Satellite",
      kind: "Informational · 10.RI",
      blurb: "Old maps record what people knew about the world, and what they cared enough to draw.",
      level: 2,
      passage:
        "<p>" + N(1) + "Long before satellites photographed the planet, mapmakers had to piece together the shape of the world from secondhand reports. " +
        N(2) + "A coastline might be drawn from the memory of a single sailor, and a mountain range from a traveler's description heard years later in a distant market. " +
        N(3) + "As a result, early maps often mixed careful measurement with guesswork. " +
        N(4) + "Some of the most accurate older maps were made for sailors. " +
        N(5) + "Known as portolan charts, they were covered with crisscrossing lines that radiated from compass roses, allowing a navigator to plot a steady course from one harbor to the next. " +
        N(6) + "Their coastlines were often surprisingly precise, because they were built from the logs of many voyages, each one checking the last. " +
        N(7) + "Inland, however, the same charts were frequently blank. " +
        N(8) + "Sailors cared about harbors, sandbars, and headlands, not about what lay a hundred miles from shore. " +
        N(9) + "Mapmakers working for rulers had different priorities. " +
        N(10) + "Their maps sometimes enlarged a kingdom's cities or placed the ruler's capital near the center of the page, choices that said more about power than about geography. " +
        N(11) + "Historians today read these maps as two kinds of evidence at once. " +
        N(12) + "A map shows what people knew about a place, but it also shows what they valued enough to record. " +
        N(13) + "An empty interior on a sailor's chart is not a mistake; it is a clue about who made the map and why. " +
        N(14) + "In that sense, every map, including the one on a modern phone, is a portrait of its makers as much as of the land.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"Maps Before the Satellite\"?",
          choices: [
            { letter: "A", text: "Sailors' charts were the most accurate maps ever made." },
            { letter: "B", text: "Maps reveal both what their makers knew and what they valued." },
            { letter: "C", text: "Rulers usually ordered mapmakers to hide their kingdoms." },
            { letter: "D", text: "Modern maps no longer contain any guesswork at all." }
          ],
          correct: "B"
        },
        {
          id: "precise",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which detail best supports the claim that portolan coastlines were often precise?",
          choices: [
            { letter: "A", text: "They were covered with lines that radiated from compass roses." },
            { letter: "B", text: "They were frequently blank in the inland areas." },
            { letter: "C", text: "They were drawn from one sailor's memory of a coast." },
            { letter: "D", text: "They were built from the logs of many voyages." }
          ],
          correct: "D"
        },
        {
          id: "phone",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author mentions a modern phone in sentence 14 mainly to —",
          choices: [
            { letter: "A", text: "extend the passage's idea about mapmakers to the present" },
            { letter: "B", text: "argue that phone maps are less accurate than old charts" },
            { letter: "C", text: "suggest that readers stop using digital maps" },
            { letter: "D", text: "explain how satellites photograph the planet" }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 4 through 10 of the passage on early maps organized?",
          choices: [
            { letter: "A", text: "as a list of mapmaking tools in order of invention" },
            { letter: "B", text: "as a problem followed by a single solution" },
            { letter: "C", text: "as a contrast between maps for sailors and maps for rulers" },
            { letter: "D", text: "as a timeline of famous voyages along one coast" }
          ],
          correct: "C"
        },
        {
          id: "clue",
          sol: "10.RI.2.B",
          sub: "10.RI.2.B.2",
          stem: "The author calls an empty interior a clue rather than a mistake in sentence 13 to emphasize that —",
          choices: [
            { letter: "A", text: "sailors were careless about recording details" },
            { letter: "B", text: "historians cannot trust any old chart" },
            { letter: "C", text: "a map's gaps can reveal its maker's purpose" },
            { letter: "D", text: "inland areas were too dangerous to explore" }
          ],
          correct: "C"
        },
        {
          id: "radiate",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word radiated in sentence 5 shares a root with radius and radio. Based on this, radiated most nearly means —",
          choices: [
            { letter: "A", text: "spread outward from a center" },
            { letter: "B", text: "glowed with a bright light" },
            { letter: "C", text: "crossed at sharp right angles" },
            { letter: "D", text: "faded slowly over time" }
          ],
          correct: "A"
        }
      ]
    },
    /* 7 — Informational: glassblowing */
    {
      id: "g10-ri-c66-sandtovase",
      family: "G10",
      title: "From Sand to Vase",
      kind: "Informational · 10.RI",
      blurb: "The steps a glassblower follows to turn a furnace of melted sand into a finished vase.",
      level: 1,
      passage:
        "<p>" + N(1) + "Glass begins as some of the most ordinary materials on Earth: sand, soda ash, and limestone. " +
        N(2) + "Heated to around 2,000 degrees Fahrenheit, this mixture melts into a thick, glowing liquid. " +
        N(3) + "The first step in shaping it is called the gather. " +
        N(4) + "The artist dips a hollow steel blowpipe into the furnace and twirls it, collecting a blob of molten glass the way a person might wind honey onto a stick. " +
        N(5) + "Next comes marvering. " +
        N(6) + "The glassblower rolls the hot glass across a flat steel table, called a marver, to smooth it and cool its outer skin slightly. " +
        N(7) + "Only then does the artist blow a puff of air into the pipe, creating a small bubble inside the glass. " +
        N(8) + "From here, the work becomes a race against temperature. " +
        N(9) + "Glass that cools too much grows stiff and may crack, so the piece must be reheated again and again in a smaller furnace called the glory hole. " +
        N(10) + "Between reheats, the artist uses wooden blocks, folded wet newspaper, and metal tools called jacks to stretch, pinch, and shape the bubble. " +
        N(11) + "When the form is finished, it cannot simply be set on a shelf. " +
        N(12) + "Glass that cools quickly develops stress inside it and can shatter hours or even days later. " +
        N(13) + "Instead, the piece goes into an annealer, an oven that lowers its temperature slowly overnight. " +
        N(14) + "The next morning, a vase that began as a handful of sand is finally ready to hold flowers.</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which of these best summarizes \"From Sand to Vase\"?",
          choices: [
            { letter: "A", text: "Glass is made from sand, soda ash, and limestone." },
            { letter: "B", text: "Glassblowers use many tools, including wet newspaper." },
            { letter: "C", text: "Glass pieces are made through careful heating, shaping, and slow cooling." },
            { letter: "D", text: "Most glass pieces shatter days after they are made." }
          ],
          correct: "C"
        },
        {
          id: "anneal",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which sentence best explains why a finished glass piece must go into an annealer?",
          choices: [
            { letter: "A", text: "Sentence 12" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "A"
        },
        {
          id: "order",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "The passage about making a vase is organized mainly —",
          choices: [
            { letter: "A", text: "by comparing glass with other materials" },
            { letter: "B", text: "by describing a problem and several solutions" },
            { letter: "C", text: "by moving from the newest tools to the oldest" },
            { letter: "D", text: "in the order of the steps used to make a piece" }
          ],
          correct: "D"
        },
        {
          id: "race",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author calls the work a race against temperature in sentence 8 to emphasize that —",
          choices: [
            { letter: "A", text: "glassblowers often compete with each other" },
            { letter: "B", text: "the glass must be shaped before it cools too much" },
            { letter: "C", text: "the furnace is dangerous to stand near" },
            { letter: "D", text: "a vase takes only a few minutes to finish" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The tone of the passage's last sentence (sentence 14) is best described as —",
          choices: [
            { letter: "A", text: "nervous and hurried" },
            { letter: "B", text: "quietly satisfied" },
            { letter: "C", text: "mocking and harsh" },
            { letter: "D", text: "sad and regretful" }
          ],
          correct: "B"
        },
        {
          id: "molten",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 4, the word molten most nearly means —",
          choices: [
            { letter: "A", text: "colored" },
            { letter: "B", text: "frozen" },
            { letter: "C", text: "powdered" },
            { letter: "D", text: "melted" }
          ],
          correct: "D"
        }
      ]
    },
    /* 8 — Informational: mountain rescue teams */
    {
      id: "g10-ri-c66-volunteers",
      family: "G10",
      title: "Who Comes When You Call",
      kind: "Informational · 10.RI",
      blurb: "Most mountain rescuers are unpaid volunteers, and their work is more careful than dramatic.",
      level: 3,
      passage:
        "<p>" + N(1) + "In many mountain regions, the people who respond when a hiker breaks an ankle or goes missing are not paid professionals. " +
        N(2) + "They are volunteers: teachers, nurses, carpenters, and students who carry pagers and leave dinners half eaten when a call comes in. " +
        N(3) + "A typical team trains several evenings each month, practicing rope systems, wilderness first aid, and navigation in the dark. " +
        N(4) + "The work is less dramatic than television suggests. " +
        N(5) + "Most missions involve a tired or injured hiker within a few miles of a trailhead, and many end with a slow carry rather than a helicopter lift. " +
        N(6) + "Helicopters are fast, but wind, fog, and darkness ground them far more often than the public realizes. " +
        N(7) + "For that reason, teams plan every mission as though no aircraft will arrive. " +
        N(8) + "Search missions follow a different logic. " +
        N(9) + "Rather than wander the woods calling a name, coordinators divide the area into segments and estimate the chance that the missing person is in each one. " +
        N(10) + "Searchers then report how thoroughly they covered their segment, and the coordinator recalculates. " +
        N(11) + "A segment searched once is never assumed to be empty; it is only less likely to be occupied. " +
        N(12) + "Some critics argue that rescue should be handled entirely by government agencies with full-time staff. " +
        N(13) + "Supporters of the volunteer model respond that local members know the terrain intimately, and that no budget could pay for the hours they donate. " +
        N(14) + "Whatever the arrangement, team leaders agree that the best rescue is the one that never has to happen, which is why many members also spend weekends teaching trail safety.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"Who Comes When You Call\"?",
          choices: [
            { letter: "A", text: "Helicopters have made ground rescue teams unnecessary." },
            { letter: "B", text: "Government agencies should take over all mountain rescue." },
            { letter: "C", text: "Most hikers who call for help are not truly in danger." },
            { letter: "D", text: "Volunteer rescuers rely on training, planning, and local knowledge." }
          ],
          correct: "D"
        },
        {
          id: "aircraft",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which sentence best explains why rescue teams plan every mission as though no aircraft will arrive?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "B"
        },
        {
          id: "critics",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "The author mentions the critics' view in sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "present an opposing view before giving a response" },
            { letter: "B", text: "show that the author agrees with the critics" },
            { letter: "C", text: "explain how government agencies are funded" },
            { letter: "D", text: "prove that volunteers are poorly trained" }
          ],
          correct: "A"
        },
        {
          id: "search",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Sentences 8 through 11 of the rescue passage are organized mainly to —",
          choices: [
            { letter: "A", text: "compare two famous searches from the past" },
            { letter: "B", text: "list the equipment each searcher carries" },
            { letter: "C", text: "explain step by step how coordinators plan a search" },
            { letter: "D", text: "describe the feelings of a missing hiker's family" }
          ],
          correct: "C"
        },
        {
          id: "segments",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement is best supported by sentences 9 and 11 together?",
          choices: [
            { letter: "A", text: "Coordinators treat no segment as certain and keep updating estimates." },
            { letter: "B", text: "Searchers usually find missing people in the first segment." },
            { letter: "C", text: "Calling a name loudly is the most effective search method." },
            { letter: "D", text: "A segment is searched only once before it is closed." }
          ],
          correct: "A"
        },
        {
          id: "intimate",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word intimately in sentence 13 comes from a Latin root meaning innermost. Based on this, knowing the terrain intimately means knowing it —",
          choices: [
            { letter: "A", text: "only from printed maps" },
            { letter: "B", text: "briefly and from a distance" },
            { letter: "C", text: "closely and in great detail" },
            { letter: "D", text: "as a place to avoid" }
          ],
          correct: "C"
        }
      ]
    },
    /* 9 — Informational: woodworking */
    {
      id: "g10-ri-c66-woodmoves",
      family: "G10",
      title: "Why Wood Moves",
      kind: "Informational · 10.RI",
      blurb: "Lumber swells and shrinks with the weather, so good furniture is built to let it.",
      level: 1,
      passage:
        "<p>" + N(1) + "A wooden board may look finished and still, but to a woodworker it is never completely at rest. " +
        N(2) + "Wood is made of long, hollow fibers that once carried water up the trunk of a living tree. " +
        N(3) + "Even after a tree is cut and the lumber is dried, those fibers keep absorbing moisture from the air on damp days and releasing it on dry ones. " +
        N(4) + "As they do, the board swells and shrinks. " +
        N(5) + "This movement is not equal in every direction. " +
        N(6) + "A board barely changes along its length, the direction the grain runs. " +
        N(7) + "Across its width, however, it can grow or shrink by a noticeable amount, sometimes a quarter of an inch on a wide tabletop between summer and winter. " +
        N(8) + "Beginners often learn this lesson the hard way. " +
        N(9) + "A tabletop glued tightly to its frame on every side has nowhere to go when it swells, so it may crack or bend. " +
        N(10) + "Experienced builders plan for movement instead of fighting it. " +
        N(11) + "They attach tabletops with small clips or slotted screw holes that let the wood slide slightly. " +
        N(12) + "They build cabinet doors as frames with floating panels that sit loosely in grooves. " +
        N(13) + "They also let new lumber rest in the shop for several days before cutting it, so it can adjust to the room's humidity. " +
        N(14) + "As an old shop saying puts it, you cannot stop the wood from breathing; you can only give it room.</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "What is the main idea of \"Why Wood Moves\"?",
          choices: [
            { letter: "A", text: "Wood should be dried for years before it is used." },
            { letter: "B", text: "Because wood swells and shrinks, good builders allow for it." },
            { letter: "C", text: "Glue is stronger than screws for joining furniture." },
            { letter: "D", text: "Trees carry water up their trunks through hollow fibers." }
          ],
          correct: "B"
        },
        {
          id: "width",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which sentence gives a specific example of how much a board can move across its width?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 8 through 13 of \"Why Wood Moves\" organized?",
          choices: [
            { letter: "A", text: "a problem followed by the ways builders prevent it" },
            { letter: "B", text: "a list of woods ranked from hardest to softest" },
            { letter: "C", text: "a story about one builder's first table" },
            { letter: "D", text: "a comparison of summer and winter weather" }
          ],
          correct: "A"
        },
        {
          id: "breathe",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The shop saying in sentence 14 about letting wood breathe mainly emphasizes that —",
          choices: [
            { letter: "A", text: "lumber should be stored outdoors" },
            { letter: "B", text: "old furniture is better than new furniture" },
            { letter: "C", text: "builders should seal wood so air cannot reach it" },
            { letter: "D", text: "woodworkers should work with wood's natural movement" }
          ],
          correct: "D"
        },
        {
          id: "glued",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes the glued tabletop in sentence 9 mainly to —",
          choices: [
            { letter: "A", text: "recommend a stronger type of wood glue" },
            { letter: "B", text: "describe how tabletops are usually attached" },
            { letter: "C", text: "explain why beginners should avoid tables" },
            { letter: "D", text: "show what happens when wood movement is ignored" }
          ],
          correct: "D"
        },
        {
          id: "floating",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 12, the phrase sit loosely in grooves helps the reader understand that floating panels are panels that —",
          choices: [
            { letter: "A", text: "are painted to look like water" },
            { letter: "B", text: "are glued firmly on all four sides" },
            { letter: "C", text: "can shift slightly within the frame" },
            { letter: "D", text: "are lighter than the rest of the door" }
          ],
          correct: "C"
        }
      ]
    },
    /* 10 — Informational: the history of maps (projections) */
    {
      id: "g10-ri-c66-projection",
      family: "G10",
      title: "The Problem of the Flat World",
      kind: "Informational · 10.RI",
      blurb: "No flat map of the round Earth can be fully accurate, so every map chooses what to give up.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every flat map of the whole Earth is, in a strict sense, wrong. " +
        N(2) + "The planet is a sphere, and a sphere's surface cannot be spread flat without stretching, tearing, or squeezing some part of it, much as an orange peel splits when it is pressed onto a table. " +
        N(3) + "Mapmakers handle this problem with projections, mathematical rules for transferring points from a globe to a flat surface. " +
        N(4) + "No projection can keep everything true at once, so each one chooses what to protect. " +
        N(5) + "One widely used projection keeps angles accurate, which made it invaluable to navigators who needed a straight line on paper to match a steady compass heading. " +
        N(6) + "The cost is size. " +
        N(7) + "Land near the poles is enlarged dramatically, so a large northern island can appear nearly as big as a continent that is actually many times larger. " +
        N(8) + "Equal-area projections make the opposite trade. " +
        N(9) + "They preserve the true size of every region, but shapes near the edges are pulled and twisted, and some readers find them strange to look at. " +
        N(10) + "Other projections compromise, allowing a little distortion of everything so that nothing is badly distorted. " +
        N(11) + "The choice matters beyond geometry. " +
        N(12) + "A map that hangs in a classroom for years quietly teaches students which places are large and which are central. " +
        N(13) + "For that reason, some teachers now display two or three projections side by side, inviting students to ask what each map gains and what it gives up. " +
        N(14) + "The real question is not which map is correct, since none fully is, but which distortion suits the job at hand.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"The Problem of the Flat World\"?",
          choices: [
            { letter: "A", text: "Every flat map gives up some accuracy, so the best one depends on its use." },
            { letter: "B", text: "Navigators should use only maps that keep angles accurate." },
            { letter: "C", text: "Equal-area maps are the only honest way to show the Earth." },
            { letter: "D", text: "Globes have made flat maps unnecessary in classrooms." }
          ],
          correct: "A"
        },
        {
          id: "peel",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author includes the orange peel comparison in sentence 2 mainly to —",
          choices: [
            { letter: "A", text: "suggest that mapmakers once used fruit as models" },
            { letter: "B", text: "show that the Earth is not truly round" },
            { letter: "C", text: "explain why globes are easily damaged" },
            { letter: "D", text: "make an abstract geometric problem easy to picture" }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Sentences 5 through 10 about projections are organized mainly as —",
          choices: [
            { letter: "A", text: "a history of maps in the order they were invented" },
            { letter: "B", text: "a comparison of projections and what each one sacrifices" },
            { letter: "C", text: "a set of instructions for drawing a projection" },
            { letter: "D", text: "a single cause followed by its many effects" }
          ],
          correct: "B"
        },
        {
          id: "quietly",
          sol: "10.RI.2.B",
          sub: "10.RI.2.B.2",
          stem: "In sentence 12, the word quietly suggests that a classroom map —",
          choices: [
            { letter: "A", text: "is rarely noticed by teachers" },
            { letter: "B", text: "should be hung in a less visible spot" },
            { letter: "C", text: "shapes students' ideas without their noticing" },
            { letter: "D", text: "contains too little information to be useful" }
          ],
          correct: "C"
        },
        {
          id: "attitude",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The author's attitude toward displaying several projections side by side (sentence 13) is best described as —",
          choices: [
            { letter: "A", text: "doubtful" },
            { letter: "B", text: "amused" },
            { letter: "C", text: "approving" },
            { letter: "D", text: "indifferent" }
          ],
          correct: "C"
        },
        {
          id: "distort",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word distortion in sentence 10 shares the root tort, meaning twist, with contort. Based on this, distortion most nearly means —",
          choices: [
            { letter: "A", text: "a careful, exact measurement" },
            { letter: "B", text: "a missing or faded label" },
            { letter: "C", text: "a sudden tear in the paper" },
            { letter: "D", text: "a twisting out of true shape" }
          ],
          correct: "D"
        }
      ]
    },
    /* 11 — Vocabulary: glassblowing */
    {
      id: "g10-rv-c66-beads",
      family: "G10",
      title: "Seconds",
      kind: "Vocabulary · 10.RV",
      blurb: "In a glass bead workshop in Izmir, Selin spots a flaw and earns an invitation back.",
      level: 1,
      passage:
        "<p>" + N(1) + "Selin had expected the glass workshop to be quiet, but the furnace hummed like a crowd waiting for a concert. " +
        N(2) + "Usta Demir, the master, worked with <strong>deft</strong> movements, turning the pipe with two fingers while his other hand guided a wet wooden block along the glass. " +
        N(3) + "Selin, who dropped her keys at least once a day, watched his hands with something close to envy. " +
        N(4) + "He was <strong>meticulous</strong> about every step; he measured each bead against a brass gauge and set aside any that were even slightly too wide. " +
        N(5) + "\"Close is not the same as correct,\" he said, without looking up. " +
        N(6) + "The finished beads cooled on a rack by the window, and as the afternoon sun passed through them they turned <strong>translucent</strong>, letting in light but blurring the street beyond into soft blue shapes. " +
        N(7) + "Selin picked one up and <strong>scrutinized</strong> it, turning it slowly and searching for a flaw. " +
        N(8) + "She found a tiny bubble trapped near the center. " +
        N(9) + "She was <strong>reluctant</strong> to mention it, since the master had been so kind, but finally she held it up. " +
        N(10) + "Instead of frowning, Usta Demir laughed. " +
        N(11) + "\"Good eyes,\" he said, dropping the bead into a dish labeled <em>seconds</em>. " +
        N(12) + "\"Most visitors only admire. You <strong>inspected</strong>.\" " +
        N(13) + "Selin left with a small bag of imperfect beads and an invitation to come back on Saturday.</p>",
      claims: [
        {
          id: "deft",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 2, the word deft most nearly means —",
          choices: [
            { letter: "A", text: "slow and heavy" },
            { letter: "B", text: "quick and skillful" },
            { letter: "C", text: "rough and careless" },
            { letter: "D", text: "nervous and shaky" }
          ],
          correct: "B"
        },
        {
          id: "meticulous",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which detail from the passage best shows the meaning of meticulous in sentence 4?",
          choices: [
            { letter: "A", text: "the furnace hummed like a crowd waiting for a concert" },
            { letter: "B", text: "Selin dropped her keys at least once a day" },
            { letter: "C", text: "the beads cooled on a rack by the window" },
            { letter: "D", text: "he measured each bead against a brass gauge" }
          ],
          correct: "D"
        },
        {
          id: "translucent",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 6, the phrase letting in light but blurring the street beyond helps the reader understand that translucent means —",
          choices: [
            { letter: "A", text: "letting light through without a clear view" },
            { letter: "B", text: "completely blocking out the light" },
            { letter: "C", text: "shining with a light of its own" },
            { letter: "D", text: "perfectly clear, like a window" }
          ],
          correct: "A"
        },
        {
          id: "inspected",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word inspected in sentence 12 contains the root spect, as in spectator and spectacles. Based on this root, inspected most nearly means —",
          choices: [
            { letter: "A", text: "forgave a mistake" },
            { letter: "B", text: "paid for an item" },
            { letter: "C", text: "looked at closely" },
            { letter: "D", text: "broke into pieces" }
          ],
          correct: "C"
        },
        {
          id: "scrutinized",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author wrote scrutinized rather than looked at in sentence 7. Compared with looked at, scrutinized suggests that Selin —",
          choices: [
            { letter: "A", text: "examined the bead with close, critical attention" },
            { letter: "B", text: "glanced at the bead without much interest" },
            { letter: "C", text: "wanted to buy the bead right away" },
            { letter: "D", text: "was afraid the bead might be hot" }
          ],
          correct: "A"
        },
        {
          id: "reluctant",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 9, the word reluctant most nearly means —",
          choices: [
            { letter: "A", text: "excited" },
            { letter: "B", text: "forbidden" },
            { letter: "C", text: "hesitant" },
            { letter: "D", text: "careless" }
          ],
          correct: "C"
        }
      ]
    },
    /* 12 — Vocabulary: the history of maps */
    {
      id: "g10-rv-c66-maproom",
      family: "G10",
      title: "The Map Room",
      kind: "Vocabulary · 10.RV",
      blurb: "Sorting a donation of old town maps, Baraka learns that out-of-date is not the same as useless.",
      level: 2,
      passage:
        "<p>" + N(1) + "The map room on the library's third floor smelled of dust and old glue, and Baraka had volunteered there every Tuesday since September. " +
        N(2) + "His job was to help Mrs. Wanjiru sort a donation of town maps, some more than a hundred years old. " +
        N(3) + "Many were <strong>annotated</strong>: earlier owners had written notes in the margins, such as \"new well dug here\" or \"road floods in April.\" " +
        N(4) + "The oldest maps showed the river as a <strong>meandering</strong> line that looped back and forth across the valley like a dropped ribbon. " +
        N(5) + "Later maps showed it straight, because engineers had redirected it into a concrete channel. " +
        N(6) + "Some roads on the old sheets were marked <strong>provisional</strong>, and Mrs. Wanjiru explained that many of them were planned but never built. " +
        N(7) + "\"A map can be a promise as well as a record,\" she said. " +
        N(8) + "Baraka asked why the library kept maps that were <strong>obsolete</strong>, since no one could use them to find anything now. " +
        N(9) + "Mrs. Wanjiru unrolled a sheet whose border held hundreds of tiny, <strong>painstaking</strong> ink dots, each one a measured point. " +
        N(10) + "\"Someone spent a year on this,\" she said. " +
        N(11) + "\"It is out of date as a guide, but not as a lesson.\" " +
        N(12) + "One map puzzled them both: a mark labeled only \"old site\" was so <strong>ambiguous</strong> that it could have meant a school, a market, or a cemetery. " +
        N(13) + "They spent the rest of the afternoon comparing it with town records, and by closing time Baraka had decided that a map's mysteries were worth keeping too.</p>",
      claims: [
        {
          id: "annotated",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 3, the examples of notes in the margins help show that annotated means —",
          choices: [
            { letter: "A", text: "torn along the edges" },
            { letter: "B", text: "printed in several colors" },
            { letter: "C", text: "marked with added comments" },
            { letter: "D", text: "copied from an older map" }
          ],
          correct: "C"
        },
        {
          id: "meander",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author describes the old river as meandering rather than crooked. Compared with crooked, meandering suggests a line that —",
          choices: [
            { letter: "A", text: "was drawn by mistake" },
            { letter: "B", text: "wanders in slow, easy loops" },
            { letter: "C", text: "is dangerous to follow" },
            { letter: "D", text: "breaks off suddenly" }
          ],
          correct: "B"
        },
        {
          id: "painstaking",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word painstaking in sentence 9 is built from pains and taking. Based on its parts, painstaking work is —",
          choices: [
            { letter: "A", text: "finished quickly and roughly" },
            { letter: "B", text: "copied from another source" },
            { letter: "C", text: "harmful to the person doing it" },
            { letter: "D", text: "done with great care and effort" }
          ],
          correct: "D"
        },
        {
          id: "ambiguous",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The prefix ambi- in ambiguous means both, as in ambidextrous. Based on this, the mark in sentence 12 is ambiguous because it —",
          choices: [
            { letter: "A", text: "could be read in more than one way" },
            { letter: "B", text: "was drawn in very faint ink" },
            { letter: "C", text: "appeared on two different maps" },
            { letter: "D", text: "pointed to a place no one visited" }
          ],
          correct: "A"
        },
        {
          id: "obsolete",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 8, the word obsolete most nearly means —",
          choices: [
            { letter: "A", text: "no longer useful" },
            { letter: "B", text: "very expensive" },
            { letter: "C", text: "carefully hidden" },
            { letter: "D", text: "badly damaged" }
          ],
          correct: "A"
        },
        {
          id: "provisional",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Based on sentence 6, roads marked provisional were —",
          choices: [
            { letter: "A", text: "paved with stone" },
            { letter: "B", text: "closed in winter" },
            { letter: "C", text: "planned but not final" },
            { letter: "D", text: "used only by farmers" }
          ],
          correct: "C"
        }
      ]
    },
    /* 13 — Vocabulary: woodworking */
    {
      id: "g10-rv-c66-butterfly",
      family: "G10",
      title: "The Butterfly Key",
      kind: "Vocabulary · 10.RV",
      blurb: "In a quiet joinery shop, Haruto learns why a master repairs a split chest instead of replacing it.",
      level: 3,
      passage:
        "<p>" + N(1) + "Mrs. Ishikawa's shop at the end of the alley had no power tools at all, a fact visitors noticed only after several minutes, when they realized the loudest sound in the room was the whisper of a hand plane across cedar. " +
        N(2) + "She <strong>eschewed</strong> screws and nails entirely, preferring joints that locked together like the fingers of clasped hands. " +
        N(3) + "Haruto had arrived in April with only <strong>rudimentary</strong> skills: he could saw a straight line, more or less, and he could sharpen a chisel if someone stood beside him. " +
        N(4) + "For the first month she let him do almost nothing but sweep and watch. " +
        N(5) + "He found this <strong>exasperating</strong>, the way a hungry person would find it exasperating to read a menu for hours without being allowed to order. " +
        N(6) + "By June he noticed that her work was <strong>impeccable</strong> not because she never made mistakes, but because she caught each one before it could travel into the next cut. " +
        N(7) + "In July, a neighbor brought in a <strong>venerable</strong> chest, scarred by a century of moves, whose lid had split along its length. " +
        N(8) + "Haruto assumed the lid would be replaced. " +
        N(9) + "Instead, Mrs. Ishikawa showed him how to <strong>salvage</strong> the old board, fitting a butterfly-shaped key of new wood across the crack so the two halves could not drift apart. " +
        N(10) + "\"New wood is strong,\" she said. \"Old wood has already survived.\" " +
        N(11) + "Haruto went home that night and looked for a long time at his grandfather's battered desk, which he had been planning to throw away.</p>",
      claims: [
        {
          id: "rudimentary",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "The details in sentence 3 about Haruto's sawing and sharpening show that rudimentary means —",
          choices: [
            { letter: "A", text: "advanced and impressive" },
            { letter: "B", text: "forgotten over time" },
            { letter: "C", text: "learned from books" },
            { letter: "D", text: "basic and undeveloped" }
          ],
          correct: "D"
        },
        {
          id: "eschewed",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 2, the word eschewed most nearly means —",
          choices: [
            { letter: "A", text: "collected eagerly" },
            { letter: "B", text: "deliberately avoided" },
            { letter: "C", text: "carefully hid away" },
            { letter: "D", text: "often repaired" }
          ],
          correct: "B"
        },
        {
          id: "salvage",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word salvage in sentence 9 shares the root salv-, meaning save, with salvation. Based on this, to salvage the board is to —",
          choices: [
            { letter: "A", text: "rescue it from being thrown away" },
            { letter: "B", text: "sell it to another shop" },
            { letter: "C", text: "cut it into smaller pieces" },
            { letter: "D", text: "paint it to hide the crack" }
          ],
          correct: "A"
        },
        {
          id: "venerable",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author calls the chest venerable rather than simply old. Compared with old, venerable suggests that the chest —",
          choices: [
            { letter: "A", text: "is worn out and nearly useless" },
            { letter: "B", text: "was built in a careless hurry" },
            { letter: "C", text: "deserves respect because of its age" },
            { letter: "D", text: "is too heavy for one person to move" }
          ],
          correct: "C"
        },
        {
          id: "exasperating",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "The comparison to a hungry person reading a menu in sentence 5 helps the reader understand that exasperating means —",
          choices: [
            { letter: "A", text: "testing one's patience" },
            { letter: "B", text: "making one feel sleepy" },
            { letter: "C", text: "filling one with pride" },
            { letter: "D", text: "causing physical pain" }
          ],
          correct: "A"
        },
        {
          id: "survived",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "Mrs. Ishikawa says old wood has already survived (sentence 10) instead of calling it weak or worn. Her word choice gives the old board a connotation of —",
          choices: [
            { letter: "A", text: "fragile beauty" },
            { letter: "B", text: "proven toughness" },
            { letter: "C", text: "hidden danger" },
            { letter: "D", text: "wasted effort" }
          ],
          correct: "B"
        }
      ]
    },
    /* 14 — Paired texts: mountain rescue */
    {
      id: "g10-dsr-c66-helicopter",
      family: "G10",
      title: "When the Sky Closes",
      kind: "Paired texts · 10.DSR",
      blurb: "An article on the limits of rescue helicopters, paired with a volunteer's account of a long night carry.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Helicopter or Boots?</strong></p>" +
        "<p>" + N(1) + "When people imagine a mountain rescue, they usually picture a helicopter lowering a rescuer on a cable. " +
        N(2) + "Helicopters can reach a remote ledge in minutes, a trip that might take a ground team six hours. " +
        N(3) + "Yet aircraft have strict limits. " +
        N(4) + "Most rescue helicopters cannot fly safely in thick cloud, strong gusts, or darkness without special equipment and crews. " +
        N(5) + "Even in good weather, high altitude thins the air, reducing how much weight a helicopter can lift. " +
        N(6) + "For these reasons, rescue planners treat aircraft as a welcome bonus rather than a guarantee. " +
        N(7) + "Ground teams are slower, but they can work in nearly any weather, and they can stay with a patient for as long as it takes. " +
        N(8) + "The most effective rescues often combine both, with ground crews reaching the patient first and a helicopter finishing the job if the sky clears.</p>" +
        "<p><strong>Text 2 — The Night the Sky Closed</strong></p>" +
        "<p>" + N(9) + "We heard the helicopter long before we saw it, and for a few minutes everyone on the ridge relaxed. " +
        N(10) + "Then cloud rolled in from the west, thick as wet wool, and the sound of the rotors faded away toward the valley. " +
        N(11) + "The pilot radioed that he could not land. " +
        N(12) + "Nobody said much after that. " +
        N(13) + "We had a patient with a broken leg, eight team members, and four miles of switchbacks below us. " +
        N(14) + "We secured her in the litter, clipped in, and started down, trading places every fifteen minutes so no one's arms gave out. " +
        N(15) + "It took us until nearly three in the morning. " +
        N(16) + "At the bottom, she asked whether we were disappointed that the helicopter never came. " +
        N(17) + "I told her honestly that we had stopped counting on it before we ever left the parking lot.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "On which point do \"Helicopter or Boots?\" and \"The Night the Sky Closed\" agree?",
          choices: [
            { letter: "A", text: "Ground teams should stop calling for aircraft." },
            { letter: "B", text: "Helicopters are too expensive for most teams." },
            { letter: "C", text: "Weather can keep a helicopter from finishing a rescue." },
            { letter: "D", text: "Most rescues end before nightfall." }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "10.DSR.C",
          sub: "10.DSR.C.1",
          stem: "Select TWO sentences that together best show that rescuers in both texts do not depend on helicopters.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "together",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which idea is clearest only when both rescue texts are read together?",
          choices: [
            { letter: "A", text: "The planning advice in Text 1 explains why the team in Text 2 was ready to carry." },
            { letter: "B", text: "Helicopters can reach a remote ledge much faster than a ground team." },
            { letter: "C", text: "The patient in Text 2 had a broken leg." },
            { letter: "D", text: "Rescue teams trade places so their arms do not give out." }
          ],
          correct: "A"
        },
        {
          id: "limit",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does Text 2 illustrate the limit described in sentence 4 of Text 1?",
          choices: [
            { letter: "A", text: "The team runs out of rope on the switchbacks." },
            { letter: "B", text: "Thick cloud keeps the pilot from landing on the ridge." },
            { letter: "C", text: "The patient is too heavy for the helicopter to lift." },
            { letter: "D", text: "The pilot refuses to fly because the team is too large." }
          ],
          correct: "B"
        },
        {
          id: "ground",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence from Text 1 provides the strongest evidence that ground teams have an advantage over aircraft?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "C"
        },
        {
          id: "reply",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "The narrator's reply in sentence 17 characterizes the rescue team as —",
          choices: [
            { letter: "A", text: "realistic and prepared for the worst" },
            { letter: "B", text: "bitter about being left behind" },
            { letter: "C", text: "careless about the patient's comfort" },
            { letter: "D", text: "eager to blame the pilot" }
          ],
          correct: "A"
        }
      ]
    },
    /* 15 — Paired texts: the history of maps / navigation */
    {
      id: "g10-dsr-c66-bluedot",
      family: "G10",
      title: "Paper or the Blue Dot",
      kind: "Paired texts · 10.DSR",
      blurb: "Two essays disagree about whether phone directions weaken or widen the way people know a place.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Keep the Paper</strong></p>" +
        "<p>" + N(1) + "When a student follows turn-by-turn directions on a phone, she arrives at the right door, but she often cannot say where she has been. " +
        N(2) + "The screen shows only the next few hundred feet, centered on a blue dot that is always, comfortingly, in the middle. " +
        N(3) + "A paper map refuses that comfort. " +
        N(4) + "It forces the reader to find herself, to notice that the river runs north, and to choose a route among several. " +
        N(5) + "Researchers who study navigation have found that people who plan their own routes tend to remember the layout of an area better than people who follow spoken directions. " +
        N(6) + "I do not ask my students to give up their phones. " +
        N(7) + "I ask them to unfold a map once a week, because a person who understands the shape of a place can never be completely lost in it.</p>" +
        "<p><strong>Text 2 — The Dot Is a Door</strong></p>" +
        "<p>" + N(8) + "For most of history, finding one's way through an unfamiliar city required a guide, a good memory, or the confidence to ask strangers. " +
        N(9) + "People who lacked those things often simply stayed home. " +
        N(10) + "Satellite navigation changed that. " +
        N(11) + "A newcomer who speaks little of the local language can now reach a clinic, a job interview, or a friend's apartment on the first try. " +
        N(12) + "Critics warn that phone directions weaken our sense of place, and there may be some truth in that. " +
        N(13) + "But a sense of place is worth little to someone too anxious to leave the house. " +
        N(14) + "The blue dot is not a crutch; for many travelers, it is the first door they have ever been able to open by themselves. " +
        N(15) + "Understanding can come later, on the second or third trip, once the fear is gone.</p>",
      claims: [
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which statement best describes a key difference between \"Keep the Paper\" and \"The Dot Is a Door\"?",
          choices: [
            { letter: "A", text: "Text 1 is about cities, while Text 2 is about the countryside." },
            { letter: "B", text: "Text 1 rejects phones entirely, while Text 2 rejects paper maps." },
            { letter: "C", text: "Text 1 uses research, while Text 2 uses only humor." },
            { letter: "D", text: "Text 1 stresses what maps teach; Text 2 stresses whom phones help." }
          ],
          correct: "D"
        },
        {
          id: "both",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Both writers on navigation would most likely agree that —",
          choices: [
            { letter: "A", text: "phone directions can weaken a person's sense of place" },
            { letter: "B", text: "paper maps should be required in every school" },
            { letter: "C", text: "newcomers should always hire a guide" },
            { letter: "D", text: "satellite navigation has done more harm than good" }
          ],
          correct: "A"
        },
        {
          id: "respond",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does Text 2 respond to the concern raised in sentence 1 of Text 1?",
          choices: [
            { letter: "A", text: "It denies that the concern has any truth." },
            { letter: "B", text: "It grants the concern but argues that access comes first." },
            { letter: "C", text: "It agrees and urges travelers to use paper maps." },
            { letter: "D", text: "It changes the subject to the cost of phones." }
          ],
          correct: "B"
        },
        {
          id: "conclude",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "A reader who uses both texts about the blue dot could best conclude that —",
          choices: [
            { letter: "A", text: "neither kind of map helps people learn a city" },
            { letter: "B", text: "most travelers prefer paper maps once they try them" },
            { letter: "C", text: "each kind of map may serve a different stage of learning a place" },
            { letter: "D", text: "phones will soon replace every other way of finding a route" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The tone of sentence 14 in \"The Dot Is a Door\" is best described as —",
          choices: [
            { letter: "A", text: "mocking and sarcastic" },
            { letter: "B", text: "bitter and resentful" },
            { letter: "C", text: "firmly hopeful" },
            { letter: "D", text: "unsure and hesitant" }
          ],
          correct: "C"
        },
        {
          id: "research",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence in \"Keep the Paper\" offers evidence from beyond the writer's own classroom?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        }
      ]
    },
    /* 16 — Paired texts: woodworking / furniture */
    {
      id: "g10-dsr-c66-stool",
      family: "G10",
      title: "The Stool and the Factory",
      kind: "Paired texts · 10.DSR",
      blurb: "A story about a wobbly handmade stool, paired with an article on how factories changed furniture.",
      level: 1,
      passage:
        "<p><strong>Text 1 — The Stool</strong></p>" +
        "<p>" + N(1) + "The stool in Nilufar's kitchen wobbled a little, and it always had. " +
        N(2) + "Her father had built it the winter she was born, from a walnut branch that fell during a storm. " +
        N(3) + "One leg was a bit shorter than the others, so the family had learned to sit on it gently. " +
        N(4) + "Her friends sometimes laughed when it rocked under them. " +
        N(5) + "Nilufar never minded. " +
        N(6) + "When she ran her hand along the seat, she could feel the small marks of her father's chisel, like footprints in snow. " +
        N(7) + "Last spring, her mother offered to buy a matching set of new stools from the store. " +
        N(8) + "Nilufar asked if they could keep the old one anyway, just for her, and set it by the window where the light was best.</p>" +
        "<p><strong>Text 2 — Furniture for Everyone</strong></p>" +
        "<p>" + N(9) + "Two centuries ago, most furniture was made by hand, one piece at a time. " +
        N(10) + "A sturdy chair might take a skilled maker several days, and many families owned only a few. " +
        N(11) + "Factories changed this. " +
        N(12) + "Machines could cut identical parts by the thousands, and workers could assemble them quickly. " +
        N(13) + "As a result, prices fell, and ordinary households could afford tables, beds, and shelves for every room. " +
        N(14) + "Factory pieces are also uniform, so a broken leg can often be replaced with an exact match from the same company. " +
        N(15) + "Critics say mass-produced furniture lacks character. " +
        N(16) + "Still, for millions of people, factories turned furniture from a luxury into an everyday comfort that nearly any family could enjoy.</p>",
      claims: [
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which statement best describes how the texts about the stool and the factory differ?",
          choices: [
            { letter: "A", text: "Text 1 is about chairs, while Text 2 is about tables." },
            { letter: "B", text: "Text 1 shows one handmade piece's meaning; Text 2 explains factory benefits." },
            { letter: "C", text: "Text 1 argues against factories, while Text 2 praises handmade work." },
            { letter: "D", text: "Text 1 gives statistics, while Text 2 tells a personal story." }
          ],
          correct: "B"
        },
        {
          id: "pairing",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Pairing Nilufar's story with \"Furniture for Everyone\" mainly helps readers —",
          choices: [
            { letter: "A", text: "learn how to build a stool from a fallen branch" },
            { letter: "B", text: "see why factories stopped making stools" },
            { letter: "C", text: "understand why walnut is a costly wood" },
            { letter: "D", text: "weigh personal meaning against cost and convenience" }
          ],
          correct: "D"
        },
        {
          id: "mother",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Based on both texts, why might Nilufar's mother want to buy stools from the store?",
          choices: [
            { letter: "A", text: "Store stools are affordable and even, unlike the wobbly one." },
            { letter: "B", text: "Nilufar's father asked her to replace his work." },
            { letter: "C", text: "The walnut stool had finally broken apart." },
            { letter: "D", text: "Nilufar's friends refused to visit the kitchen." }
          ],
          correct: "A"
        },
        {
          id: "character",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which detail from Text 1 best fits the critics' view in sentence 15 of Text 2?",
          choices: [
            { letter: "A", text: "the mother's offer to buy a matching set" },
            { letter: "B", text: "the friends laughing when the stool rocks" },
            { letter: "C", text: "the small chisel marks Nilufar feels on the seat" },
            { letter: "D", text: "the family learning to sit down gently" }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The overall mood of \"The Stool\" is best described as —",
          choices: [
            { letter: "A", text: "warm and affectionate" },
            { letter: "B", text: "tense and fearful" },
            { letter: "C", text: "gloomy and bitter" },
            { letter: "D", text: "silly and chaotic" }
          ],
          correct: "A"
        },
        {
          id: "nilufar",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 5 and 8 show that Nilufar —",
          choices: [
            { letter: "A", text: "is embarrassed by her friends' laughter" },
            { letter: "B", text: "wants the new stools more than the old one" },
            { letter: "C", text: "values the stool for its meaning, not its looks" },
            { letter: "D", text: "plans to fix the short leg herself" }
          ],
          correct: "C"
        }
      ]
    },
    /* 17 — Poetry: glassblowing */
    {
      id: "g10-rl-c66-breath",
      family: "G10",
      title: "The Glassblower's Breath",
      kind: "Poetry · 10.RL",
      blurb: "A speaker watches a glassblower coax a bowl out of fire with the gentlest possible breath.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "She gathers fire on the end of a pipe<br>" +
        L(2) + "the way my mother gathers thread,<br>" +
        L(3) + "a slow turn, a slower turn,<br>" +
        L(4) + "until the orange hangs like a held word.<br>" +
        L(5) + "Then she breathes, not hard, not much,<br>" +
        L(6) + "the kind of breath you'd give a candle<br>" +
        L(7) + "you meant to keep alive.<br>" +
        L(8) + "The glass swells as if it has been waiting<br>" +
        L(9) + "its whole long life down in the sand<br>" +
        L(10) + "for someone patient enough to say its name.<br>" +
        L(11) + "I asked her once what she was making.<br>" +
        L(12) + "She said, \"I only find out at the end.\"<br>" +
        L(13) + "Now I keep her blue bowl by my bed,<br>" +
        L(14) + "and some nights I swear it is still breathing." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"The Glassblower's Breath\"?",
          choices: [
            { letter: "A", text: "Art is most valuable when it is planned in detail." },
            { letter: "B", text: "Making something takes patience and openness to what it becomes." },
            { letter: "C", text: "Children rarely understand the work their parents do." },
            { letter: "D", text: "Fire is too dangerous to be used for making art." }
          ],
          correct: "B"
        },
        {
          id: "word",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In line 4, comparing the glowing glass to a held word suggests that the glass —",
          choices: [
            { letter: "A", text: "is too hot for anyone to touch" },
            { letter: "B", text: "has already cracked from the heat" },
            { letter: "C", text: "makes a quiet humming sound" },
            { letter: "D", text: "is full of something about to take form" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The overall tone of \"The Glassblower's Breath\" is best described as —",
          choices: [
            { letter: "A", text: "quietly admiring" },
            { letter: "B", text: "nervous and uneasy" },
            { letter: "C", text: "playfully mocking" },
            { letter: "D", text: "cold and distant" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "How do lines 13 and 14 function in the glassblower poem?",
          choices: [
            { letter: "A", text: "They reveal that the bowl was broken on the way home." },
            { letter: "B", text: "They shift the poem to a memory from childhood." },
            { letter: "C", text: "They carry the glassblower's breath into the speaker's own life." },
            { letter: "D", text: "They explain how the bowl was colored blue." }
          ],
          correct: "C"
        },
        {
          id: "maker",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Lines 11 and 12 characterize the glassblower as someone who —",
          choices: [
            { letter: "A", text: "lets the work reveal itself as she goes" },
            { letter: "B", text: "refuses to talk about her craft" },
            { letter: "C", text: "is unsure whether she has any skill" },
            { letter: "D", text: "copies the same design every time" }
          ],
          correct: "A"
        },
        {
          id: "candle",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "Instead of calling the breath soft, lines 6 and 7 compare it to a breath given to a candle you meant to keep alive. This comparison gives the breath a connotation of —",
          choices: [
            { letter: "A", text: "weakness and fatigue" },
            { letter: "B", text: "tender care" },
            { letter: "C", text: "sudden danger" },
            { letter: "D", text: "careless habit" }
          ],
          correct: "B"
        }
      ]
    },
    /* 18 — Poetry: the history of maps */
    {
      id: "g10-rl-c66-oldchart",
      family: "G10",
      title: "The Edge of the Old Chart",
      kind: "Poetry · 10.RL",
      blurb: "Looking at a centuries-old sea chart, a speaker decides the blank part is the most honest.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "On the oldest map in the museum case,<br>" +
        L(2) + "the coast is drawn with a careful hand,<br>" +
        L(3) + "each harbor named, each rock confessed,<br>" +
        L(4) + "each shallow marked in tiny dots.<br>" +
        L(5) + "But past the shore the paper goes<br>" +
        L(6) + "as pale as a held breath.<br>" +
        L(7) + "No river. No road. No town.<br>" +
        L(8) + "Just room, and the mapmaker's silence.<br>" +
        L(9) + "I used to think that blank meant nothing,<br>" +
        L(10) + "a place where the knowing ran out.<br>" +
        L(11) + "Now I think it was the most honest part,<br>" +
        L(12) + "a page that said, <em>I have not been there</em>,<br>" +
        L(13) + "and did not paint a dragon to pretend.<br>" +
        L(14) + "I wish I had a map like that of me:<br>" +
        L(15) + "the coast I know drawn clearly,<br>" +
        L(16) + "and the rest left open, waiting to be walked." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by \"The Edge of the Old Chart\"?",
          choices: [
            { letter: "A", text: "Admitting what you do not know can be a kind of honesty." },
            { letter: "B", text: "Old maps are less useful than modern ones." },
            { letter: "C", text: "People should never travel to unmapped places." },
            { letter: "D", text: "Museums hide the most interesting parts of history." }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "Which line marks the shift in the speaker's view of the chart's blank space?",
          choices: [
            { letter: "A", text: "Line 5" },
            { letter: "B", text: "Line 8" },
            { letter: "C", text: "Line 11" },
            { letter: "D", text: "Line 15" }
          ],
          correct: "C"
        },
        {
          id: "confessed",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In line 3, the phrase each rock confessed suggests that the mapmaker —",
          choices: [
            { letter: "A", text: "felt guilty about the ships that had sunk" },
            { letter: "B", text: "invented rocks that did not exist" },
            { letter: "C", text: "left the dangerous rocks off the chart" },
            { letter: "D", text: "truthfully revealed every hidden hazard" }
          ],
          correct: "D"
        },
        {
          id: "pale",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "The image in line 6, as pale as a held breath, mainly creates a feeling of —",
          choices: [
            { letter: "A", text: "loud celebration" },
            { letter: "B", text: "quiet, suspended waiting" },
            { letter: "C", text: "angry frustration" },
            { letter: "D", text: "deep exhaustion" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Lines 11 through 13 of the poem about the old chart are ironic because —",
          choices: [
            { letter: "A", text: "the mapmaker actually drew a dragon in the margin" },
            { letter: "B", text: "the empty space that seems to say nothing says the most truthful thing" },
            { letter: "C", text: "the museum has placed the chart in the wrong case" },
            { letter: "D", text: "the speaker has visited the place the map leaves blank" }
          ],
          correct: "B"
        },
        {
          id: "me",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "The speaker turns the map toward herself in lines 14 through 16 mainly to —",
          choices: [
            { letter: "A", text: "admit that she is afraid of the sea" },
            { letter: "B", text: "explain how maps were printed long ago" },
            { letter: "C", text: "show that she has stopped caring about the chart" },
            { letter: "D", text: "apply the idea of honest blank space to her own life" }
          ],
          correct: "D"
        }
      ]
    },
    /* 19 — Drama: woodworking shop */
    {
      id: "g10-rl-c66-badtape",
      family: "G10",
      title: "The Bent Hook",
      kind: "Drama · 10.RL",
      blurb: "Daniela has ruined three roof pieces in a row, and she is ready to give up on woodshop.",
      level: 1,
      passage:
        "<p>" + N(1) + "<em>(A high school woodshop, late afternoon. Sawdust drifts through the light from tall windows. DANIELA holds two roof pieces for a birdhouse that do not meet at the top.)</em></p>" +
        "<p><strong>DANIELA:</strong> " + N(2) + "It's too short again. " + N(3) + "I know I measured this.</p>" +
        "<p><strong>TOMÁS:</strong> <em>(leaning over from the next bench)</em> " + N(4) + "Give it here. " + N(5) + "I'll cut you a new one in two minutes.</p>" +
        "<p><strong>MR. OKAFOR:</strong> <em>(without looking up from his broom)</em> " + N(6) + "Tomás, how many birdhouses are you building this week?</p>" +
        "<p><strong>TOMÁS:</strong> " + N(7) + "One.</p>" +
        "<p><strong>MR. OKAFOR:</strong> " + N(8) + "Then build that one.</p>" +
        "<p><strong>DANIELA:</strong> <em>(dropping the board onto the bench)</em> " + N(9) + "This is the third piece I've wasted. " + N(10) + "I'm just not a wood person, Mr. Okafor.</p>" +
        "<p><strong>MR. OKAFOR:</strong> <em>(setting down the broom and picking up her tape measure)</em> " + N(11) + "Show me how you measured.</p>" +
        "<p>" + N(12) + "<em>(Daniela hooks the tape on the end of a board and pulls it out. Mr. Okafor taps the metal hook.)</em></p>" +
        "<p><strong>MR. OKAFOR:</strong> " + N(13) + "There it is. " + N(14) + "Your hook is bent, so every measurement starts an eighth of an inch late. " + N(15) + "You aren't a bad woodworker. " + N(16) + "You have a bad tape.</p>" +
        "<p><strong>DANIELA:</strong> <em>(staring at the hook)</em> " + N(17) + "So all three pieces were wrong the same way?</p>" +
        "<p><strong>MR. OKAFOR:</strong> " + N(18) + "Exactly the same way, which means you cut them perfectly. " + N(19) + "A crooked ruler makes a crooked world. " + N(20) + "Next time, check your tools before you blame yourself.</p>" +
        "<p>" + N(21) + "<em>(He hands her a new tape. Daniela almost smiles, then picks up a fresh board.)</em></p>",
      claims: [
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the turning point in the scene in Mr. Okafor's woodshop?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "D"
        },
        {
          id: "tomas",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Tomás's offer in sentences 4 and 5 characterizes him as —",
          choices: [
            { letter: "A", text: "jealous of Daniela's birdhouse" },
            { letter: "B", text: "helpful but quick to take over" },
            { letter: "C", text: "too shy to speak to the teacher" },
            { letter: "D", text: "careless with the shop's tools" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in \"The Bent Hook\" is most ironic?",
          choices: [
            { letter: "A", text: "Three wrong cuts prove that Daniela cuts very accurately." },
            { letter: "B", text: "Mr. Okafor is sweeping while students work." },
            { letter: "C", text: "Tomás is building only one birdhouse this week." },
            { letter: "D", text: "The shop is full of sawdust late in the day." }
          ],
          correct: "A"
        },
        {
          id: "question",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Mr. Okafor's question to Tomás in sentence 6 mainly serves to —",
          choices: [
            { letter: "A", text: "find out how many birdhouses the class needs" },
            { letter: "B", text: "praise Tomás for working so quickly" },
            { letter: "C", text: "keep Tomás from solving Daniela's problem for her" },
            { letter: "D", text: "start an argument between the two students" }
          ],
          correct: "C"
        },
        {
          id: "crooked",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "Mr. Okafor's saying in sentence 19, a crooked ruler makes a crooked world, suggests that —",
          choices: [
            { letter: "A", text: "Daniela should buy a more expensive ruler" },
            { letter: "B", text: "a flaw in a basic tool spreads into all the work" },
            { letter: "C", text: "the shop's walls were built out of line" },
            { letter: "D", text: "no one can ever make a perfect cut" }
          ],
          correct: "B"
        },
        {
          id: "woodperson",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "When Daniela says she is not a wood person in sentence 10, she most nearly means that she —",
          choices: [
            { letter: "A", text: "would rather work with metal than wood" },
            { letter: "B", text: "is allergic to the sawdust in the shop" },
            { letter: "C", text: "does not own the right tools at home" },
            { letter: "D", text: "believes she has no talent for woodworking" }
          ],
          correct: "D"
        }
      ]
    },
    /* 20 — Functional text: mountain rescue */
    {
      id: "g10-ri-c66-orientation",
      family: "G10",
      title: "New Member Orientation",
      kind: "Functional text · 10.RI",
      blurb: "A notice for people thinking about joining a volunteer search and rescue team.",
      level: 1,
      passage:
        "<p><strong>Granite Fork Search and Rescue: New Member Orientation</strong></p>" +
        "<p>" + N(1) + "Thank you for your interest in joining Granite Fork Search and Rescue, an all-volunteer team serving the Upper Sela Valley. " +
        N(2) + "Please read this notice carefully before the first meeting.</p>" +
        "<p><strong>When and Where</strong> " + N(3) + "Orientation is held on Saturday, March 8, from 9:00 a.m. to 3:00 p.m. at the Sela Valley Fire Hall, 210 Mill Road. " +
        N(4) + "Doors open at 8:30, and late arrivals cannot be admitted because the morning begins with a required safety briefing.</p>" +
        "<p><strong>Who May Apply</strong> " + N(5) + "Applicants must be at least 18, or 16 with a signed parent permission form. " +
        N(6) + "No previous rescue experience is needed. " +
        N(7) + "Members must be able to hike four miles while carrying a 25-pound pack.</p>" +
        "<p><strong>What to Bring</strong> " + N(8) + "Bring sturdy boots, rain gear, a lunch, and two liters of water. " +
        N(9) + "Do not bring pets, including trained dogs; the canine unit holds a separate orientation in May.</p>" +
        "<p><strong>After Orientation</strong> " + N(10) + "New members begin a twelve-week probationary period. " +
        N(11) + "During this time, they attend weekly trainings and may join missions only as observers. " +
        N(12) + "At the end of the period, each member must pass a field test before receiving a pager.</p>" +
        "<p><strong>Questions</strong> " + N(13) + "Please speak with the membership coordinator, who is at the fire hall every Tuesday evening from 6:00 to 8:00.</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the Granite Fork orientation notice?",
          choices: [
            { letter: "A", text: "It describes a recent rescue on Mill Road." },
            { letter: "B", text: "It asks residents to donate gear to the team." },
            { letter: "C", text: "It explains orientation details, requirements, and next steps." },
            { letter: "D", text: "It warns hikers about dangers in the Sela Valley." }
          ],
          correct: "C"
        },
        {
          id: "late",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.2",
          stem: "Which detail best explains why late arrivals cannot be admitted to orientation?",
          choices: [
            { letter: "A", text: "The morning begins with a required safety briefing." },
            { letter: "B", text: "Doors open at 8:30 a.m." },
            { letter: "C", text: "The fire hall is located on Mill Road." },
            { letter: "D", text: "Members must hike four miles with a pack." }
          ],
          correct: "A"
        },
        {
          id: "audience",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.1",
          stem: "The Granite Fork notice is written mainly for —",
          choices: [
            { letter: "A", text: "hikers who are lost in the valley" },
            { letter: "B", text: "firefighters who work at the hall" },
            { letter: "C", text: "experienced members preparing a mission" },
            { letter: "D", text: "people who are thinking about joining the team" }
          ],
          correct: "D"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "The bold headings in the Granite Fork notice help a reader mainly by —",
          choices: [
            { letter: "A", text: "showing which rules are most important" },
            { letter: "B", text: "grouping information so it is easy to find" },
            { letter: "C", text: "listing events in the order they happened" },
            { letter: "D", text: "comparing this team with other teams" }
          ],
          correct: "B"
        },
        {
          id: "canine",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The notice mentions the canine unit in sentence 9 mainly to —",
          choices: [
            { letter: "A", text: "warn that dogs are not allowed on missions" },
            { letter: "B", text: "suggest that dog owners should not apply" },
            { letter: "C", text: "explain how dogs are trained to search" },
            { letter: "D", text: "tell dog handlers that their session is later" }
          ],
          correct: "D"
        },
        {
          id: "probation",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 10, the word probationary most nearly means —",
          choices: [
            { letter: "A", text: "serving as a trial period" },
            { letter: "B", text: "paid at a higher rate" },
            { letter: "C", text: "held only in winter" },
            { letter: "D", text: "led by the canine unit" }
          ],
          correct: "A"
        }
      ]
    },
    /* 21 — Argument: woodworking shop */
    {
      id: "g10-ri-c66-keepshop",
      family: "G10",
      title: "Keep the Shop Open",
      kind: "Argument · 10.RI",
      blurb: "A student argues that Harlow High should keep its woodworking shop instead of replacing it.",
      level: 2,
      passage:
        "<p>" + N(1) + "Next year, our school board plans to close the woodworking shop at Harlow High and turn the room into a computer lab. " +
        N(2) + "I understand the reasoning: computers are everywhere, and the shop's equipment is old. " +
        N(3) + "But closing the shop would cost students something no lab can replace. " +
        N(4) + "In shop class, mistakes are physical. " +
        N(5) + "If you cut a board too short, you cannot press undo; you have to figure out what went wrong and plan better next time. " +
        N(6) + "That habit of careful planning carries over into every subject. " +
        N(7) + "Ms. Petrovic, who has taught the class for fourteen years, says that students who struggle in math often understand fractions for the first time when they are measuring wood. " +
        N(8) + "Shop also leads to real careers. " +
        N(9) + "Local cabinet makers and construction firms report that they cannot find enough young workers, and several have offered to donate newer tools if the program continues. " +
        N(10) + "Some argue that the school cannot afford two specialized rooms. " +
        N(11) + "Yet the shop already exists, and with donated tools, keeping it would cost far less than rebuilding it later when the need becomes obvious. " +
        N(12) + "A computer lab could fit in the library's unused study room. " +
        N(13) + "A woodshop, with its heavy machines and dust collectors, cannot fit anywhere else. " +
        N(14) + "I urge the board to find room for both, because some lessons can only be learned with your hands.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which sentence best states the central claim of the essay about the Harlow High shop?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "B"
        },
        {
          id: "cost",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which detail best supports the claim that keeping the shop would not be very costly?",
          choices: [
            { letter: "A", text: "The shop's equipment is old." },
            { letter: "B", text: "Ms. Petrovic has taught for fourteen years." },
            { letter: "C", text: "Local firms have offered to donate newer tools." },
            { letter: "D", text: "Computers are found everywhere." }
          ],
          correct: "C"
        },
        {
          id: "petrovic",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "The author includes Ms. Petrovic's observation in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "show that shop class supports learning in other subjects" },
            { letter: "B", text: "argue that math class should be taught in the shop" },
            { letter: "C", text: "suggest that Ms. Petrovic should teach math instead" },
            { letter: "D", text: "prove that every student enjoys woodworking" }
          ],
          correct: "A"
        },
        {
          id: "undo",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 5, the phrase you cannot press undo mainly emphasizes that —",
          choices: [
            { letter: "A", text: "computers are more useful than saws" },
            { letter: "B", text: "students should avoid making any mistakes" },
            { letter: "C", text: "the shop needs newer, faster machines" },
            { letter: "D", text: "shop mistakes have real, lasting results" }
          ],
          correct: "D"
        },
        {
          id: "opposing",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "In sentence 10, the writer raises the cost concern mainly to —",
          choices: [
            { letter: "A", text: "answer an objection before restating the case" },
            { letter: "B", text: "admit that the shop should probably close" },
            { letter: "C", text: "criticize the board for wasting money" },
            { letter: "D", text: "change the subject to the library" }
          ],
          correct: "A"
        },
        {
          id: "urge",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "In sentence 14, the author urges the board rather than simply asking it. Compared with ask, urge suggests a request that is —",
          choices: [
            { letter: "A", text: "polite but uninterested" },
            { letter: "B", text: "confused and uncertain" },
            { letter: "C", text: "earnest and forceful" },
            { letter: "D", text: "angry and threatening" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
