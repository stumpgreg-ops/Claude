/* SOL Labyrinth — Grade 9 short packs (VA 9.RL / 9.RI / 9.RV / 9.DSR), expansion file 34 (v5.15).
 * 28 short texts (100–150 words; poems 8–10 lines; paired texts 60–80 words each), 6 questions each.
 * Topics: night-sky astronomy, part-time summer jobs, a cross-country team, animal shelters.
 * Original text only; no VDOE / copyrighted material. Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    {
      id: "g9-rl-c34-cone-stand",
      family: "G9",
      title: "The Cone Stand",
      kind: "Literary · 9.RL",
      blurb: "Teodora's first day scooping ice cream ends with a dropped cone.",
      level: 1,
      passage:
        "<p>" + N(1) + "On her first day at the Frost Point ice cream stand, Teodora wore a paper hat that kept sliding over one eye. " +
        N(2) + "The line stretched past the picnic tables, and the menu board listed thirty-one flavors she had not memorized yet. " +
        N(3) + "Mr. Okafor, the owner, showed her how to roll the scoop once and press, never twice. " +
        N(4) + "By noon her wrist ached, and she had already mixed up mint and pistachio for a man who only laughed about it. " +
        N(5) + "Then a small boy's scoop tumbled off his cone and landed in the gravel. " +
        N(6) + "His face crumpled before he made a sound. " +
        N(7) + "Teodora glanced at Mr. Okafor, who simply raised his eyebrows. " +
        N(8) + "\"That one fell off on my watch,\" she said, handing the boy a fresh cone. " +
        N(9) + "Later Mr. Okafor tapped the tip jar and said, \"You learned the most important rule without me.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of the story about Teodora's first day?",
          choices: [
            { letter: "A", text: "Summer jobs are usually too hard for first-time workers." },
            { letter: "B", text: "Owners should train new workers before letting them serve." },
            { letter: "C", text: "Caring for customers matters more than working without mistakes." },
            { letter: "D", text: "Memorizing a menu is the real key to doing a job well." }
          ],
          correct: "C"
        },
        {
          id: "brows",
          sol: "9.RL.1.B",
          stem: "In sentence 7, Mr. Okafor raises his eyebrows. Readers can best infer that he —",
          choices: [
            { letter: "A", text: "is angry that the boy has dropped his ice cream" },
            { letter: "B", text: "is waiting to see what Teodora will decide to do" },
            { letter: "C", text: "wants Teodora to sweep the gravel right away" },
            { letter: "D", text: "has not noticed the scoop that fell off the cone" }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Teodora's action in sentence 8?",
          choices: [
            { letter: "A", text: "She blames the boy for holding his cone carelessly." },
            { letter: "B", text: "She is too nervous to speak directly to the boy." },
            { letter: "C", text: "She hopes Mr. Okafor will praise her in front of others." },
            { letter: "D", text: "She takes responsibility for a problem that was not her fault." }
          ],
          correct: "D"
        },
        {
          id: "crumpled",
          sol: "9.RL.2.C",
          stem: "In sentence 6, the word crumpled most nearly means the boy's face —",
          choices: [
            { letter: "A", text: "folded into a look of sadness" },
            { letter: "B", text: "turned red with sudden anger" },
            { letter: "C", text: "brightened with a happy surprise" },
            { letter: "D", text: "went completely blank and still" }
          ],
          correct: "A"
        },
        {
          id: "details",
          sol: "9.RL.3.A",
          stem: "The details in sentences 1-4 about the hat, the long line, and the mixed-up flavors mainly emphasize that Teodora —",
          choices: [
            { letter: "A", text: "dislikes working outdoors in the summer heat" },
            { letter: "B", text: "is careless about the customers she serves" },
            { letter: "C", text: "is new to the job and still finding her way" },
            { letter: "D", text: "already knows the stand better than its owner" }
          ],
          correct: "C"
        },
        {
          id: "rule",
          sol: "9.RL.1.D",
          stem: "Mr. Okafor's comment in sentence 9 about the most important rule mainly reveals that he —",
          choices: [
            { letter: "A", text: "wants Teodora to learn all thirty-one flavors" },
            { letter: "B", text: "expects workers to pay for any dropped cones" },
            { letter: "C", text: "is joking about how slowly Teodora worked" },
            { letter: "D", text: "values the kindness Teodora showed the boy" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c34-last-hill",
      family: "G9",
      title: "The Last Hill",
      kind: "Literary · 9.RL",
      blurb: "A fifth runner has a choice to make halfway up the final climb.",
      level: 2,
      passage:
        "<p>" + N(1) + "The last hill at Carver Park rises like a wall someone forgot to finish, and I hit it with nothing left in my legs. " +
        N(2) + "Halfway up, I saw Jun, our fourth runner, bent over with a hand pressed to his side. " +
        N(3) + "Coach Abernathy always says the fifth runner is the one who decides a meet, and I was the fifth runner. " +
        N(4) + "I could have passed Jun and saved my own time. " +
        N(5) + "Instead, I slowed down and matched his steps. " +
        N(6) + "\"Breathe out on the left foot,\" I said, the way Coach had taught us in August. " +
        N(7) + "Jun nodded without looking at me, and for a while the only sound was our shoes chewing the gravel. " +
        N(8) + "At the top, the finish banner flapped like a sail. " +
        N(9) + "We crossed the line a half-second apart, and neither of us remembers who was first. " +
        N(10) + "Our team won by two points.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does the narrator's choice on the last hill best support?",
          choices: [
            { letter: "A", text: "Helping a teammate can matter more than a personal result." },
            { letter: "B", text: "Runners should always save their energy for the final hill." },
            { letter: "C", text: "A coach's advice is most useful during the first mile." },
            { letter: "D", text: "Winning a race depends mostly on the fastest runner." }
          ],
          correct: "A"
        },
        {
          id: "choice",
          sol: "9.RL.1.C",
          stem: "Sentences 4 and 5 mainly show that the narrator is willing to —",
          choices: [
            { letter: "A", text: "ignore Coach Abernathy's advice about scoring" },
            { letter: "B", text: "quit the race because his legs are too tired" },
            { letter: "C", text: "pass Jun so the team can earn more points" },
            { letter: "D", text: "give up some of his own time to stay with Jun" }
          ],
          correct: "D"
        },
        {
          id: "wall",
          sol: "9.RL.2.A",
          stem: "In sentence 1, the hill is compared to a wall someone forgot to finish mainly to show that it is —",
          choices: [
            { letter: "A", text: "recently built by park workers" },
            { letter: "B", text: "steep and exhausting to climb" },
            { letter: "C", text: "crumbling and covered in stones" },
            { letter: "D", text: "the shortest part of the course" }
          ],
          correct: "B"
        },
        {
          id: "gravel",
          sol: "9.RL.2.B",
          stem: "In sentence 7, the image of shoes chewing the gravel mainly creates a mood that is —",
          choices: [
            { letter: "A", text: "cheerful and relaxed" },
            { letter: "B", text: "tense and quarrelsome" },
            { letter: "C", text: "quiet and determined" },
            { letter: "D", text: "gloomy and hopeless" }
          ],
          correct: "C"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "Because the Carver Park race is told from the narrator's first-person point of view, the reader —",
          choices: [
            { letter: "A", text: "knows exactly what Jun was thinking on the hill" },
            { letter: "B", text: "sees how Coach Abernathy judged each runner" },
            { letter: "C", text: "learns what the narrator weighed before slowing down" },
            { letter: "D", text: "learns the final times of every runner in the meet" }
          ],
          correct: "C"
        },
        {
          id: "first",
          sol: "9.RL.1.B",
          stem: "Sentence 9 says neither runner remembers who finished first. Readers can best infer that —",
          choices: [
            { letter: "A", text: "the race officials made an error at the finish line" },
            { letter: "B", text: "the order between the two boys no longer seemed important" },
            { letter: "C", text: "Jun was embarrassed that he had needed any help" },
            { letter: "D", text: "the narrator plans to ask the coach for the results" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c34-cloudy-comet",
      family: "G9",
      title: "Next Time, Then",
      kind: "Literary · 9.RL",
      blurb: "Ines and her grandfather wait on a roof for a comet that never shows.",
      level: 3,
      passage:
        "<p>" + N(1) + "The forecast promised the comet at 4:10 a.m., low in the east. " +
        N(2) + "Ines set two alarms, but her grandfather was already on the roof when she climbed the ladder, his binoculars on a folded towel. " +
        N(3) + "To the east, the city's glow pressed against the sky like a hand cupped over a flashlight. " +
        N(4) + "They waited. " +
        N(5) + "Abuelo Rafael told her about the comet he had watched as a boy in Ponce, how it had hung over the cane fields like a question no one could answer. " +
        N(6) + "At 4:40 a bank of clouds slid in and stayed. " +
        N(7) + "Ines felt the disappointment sink through her like cold water. " +
        N(8) + "Her grandfather only poured the last of his coffee and handed her the cup. " +
        N(9) + "\"Next time, then,\" he said, as if next time were a place they had already agreed to meet. " +
        N(10) + "She found that she did not mind the clouds as much as she had expected.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which idea does the story most clearly develop through the night Ines spends on the roof?",
          choices: [
            { letter: "A", text: "Weather forecasts should not be trusted by sky-watchers." },
            { letter: "B", text: "Young people are more patient than their grandparents." },
            { letter: "C", text: "Time shared while waiting can matter more than the event itself." },
            { letter: "D", text: "City lights make it impossible to enjoy the night sky." }
          ],
          correct: "C"
        },
        {
          id: "early",
          sol: "9.RL.1.B",
          stem: "Readers can best infer from sentence 2 that Abuelo Rafael —",
          choices: [
            { letter: "A", text: "is at least as eager to see the comet as Ines is" },
            { letter: "B", text: "does not trust Ines to wake up on her own" },
            { letter: "C", text: "has forgotten that the comet appears at 4:10" },
            { letter: "D", text: "would rather sleep than climb onto the roof" }
          ],
          correct: "A"
        },
        {
          id: "glow",
          sol: "9.RL.2.B",
          stem: "In sentence 3, the city's glow is described as a hand cupped over a flashlight. This image suggests that the glow —",
          choices: [
            { letter: "A", text: "guides the way across the dark roof" },
            { letter: "B", text: "warms the air on a chilly morning" },
            { letter: "C", text: "shines only on the eastern buildings" },
            { letter: "D", text: "smothers the faint light of the sky" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of Abuelo Rafael's words in sentence 9 is best described as —",
          choices: [
            { letter: "A", text: "bitter and impatient" },
            { letter: "B", text: "calm and hopeful" },
            { letter: "C", text: "nervous and unsure" },
            { letter: "D", text: "stern and scolding" }
          ],
          correct: "B"
        },
        {
          id: "memory",
          sol: "9.RL.3.A",
          stem: "The author includes Abuelo Rafael's memory of the comet in Ponce mainly to —",
          choices: [
            { letter: "A", text: "explain why the clouds arrive at 4:40 that morning" },
            { letter: "B", text: "prove that comets always stay visible for a week" },
            { letter: "C", text: "show that watching the sky has long mattered to him" },
            { letter: "D", text: "suggest that he wishes he had stayed in Ponce" }
          ],
          correct: "C"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "The narrator follows Ines's thoughts but not her grandfather's. How does this point of view shape the ending?",
          choices: [
            { letter: "A", text: "The reader learns why the forecast for the comet was wrong." },
            { letter: "B", text: "The reader discovers that her grandfather is also upset." },
            { letter: "C", text: "The reader sees the comet even though Ines cannot." },
            { letter: "D", text: "The reader shares Ines's shift from letdown to contentment." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c34-kennel-nine",
      family: "G9",
      title: "Kennel Nine",
      kind: "Literary · 9.RL",
      blurb: "A shy shelter dog and a volunteer who reads his homework aloud.",
      level: 1,
      passage:
        "<p>" + N(1) + "The dog in kennel nine had been at Pine Hollow Animal Shelter for three weeks, and nobody had seen her face. " +
        N(2) + "She stayed pressed against the back wall, a brown shape folded into the corner like a dropped coat. " +
        N(3) + "\"Her name is Biscuit,\" the shelter manager, Ms. Lindqvist, told Mateo on his first Saturday, \"and don't try to touch her yet.\" " +
        N(4) + "So Mateo sat on an overturned bucket outside the gate and read his history homework out loud. " +
        N(5) + "He read about canals and railroads for an hour. " +
        N(6) + "The next Saturday he read about early factories, and the Saturday after that, about the first steam engines. " +
        N(7) + "On the fourth Saturday, Biscuit crept forward and rested her chin on the floor by the gate. " +
        N(8) + "Mateo kept reading, though his voice wobbled a little. " +
        N(9) + "\"Well,\" Ms. Lindqvist said from the doorway, \"I think she likes the chapter on steam engines.\"</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Mateo as a character?",
          choices: [
            { letter: "A", text: "He is bored and wants a different task." },
            { letter: "B", text: "He is careless about the shelter's rules." },
            { letter: "C", text: "He is eager to finish his homework fast." },
            { letter: "D", text: "He is patient and lets trust grow slowly." }
          ],
          correct: "D"
        },
        {
          id: "joke",
          sol: "9.RL.1.D",
          stem: "Ms. Lindqvist's joke in sentence 9 mainly shows that she —",
          choices: [
            { letter: "A", text: "recognizes the progress Mateo has made with Biscuit" },
            { letter: "B", text: "thinks Mateo should read a different history chapter" },
            { letter: "C", text: "wants Mateo to stop reading and go back to work" },
            { letter: "D", text: "believes Biscuit actually understands the homework" }
          ],
          correct: "A"
        },
        {
          id: "coat",
          sol: "9.RL.2.A",
          stem: "In sentence 2, Biscuit is compared to a dropped coat mainly to show that she is —",
          choices: [
            { letter: "A", text: "soft and pleasant to touch" },
            { letter: "B", text: "curled up, still, and hiding" },
            { letter: "C", text: "messy and in need of a bath" },
            { letter: "D", text: "old and nearly forgotten" }
          ],
          correct: "B"
        },
        {
          id: "saturdays",
          sol: "9.RL.3.A",
          stem: "The author lists several Saturdays in sentences 5 and 6 mainly to emphasize —",
          choices: [
            { letter: "A", text: "how much history homework Mateo is assigned" },
            { letter: "B", text: "how quickly Biscuit begins to trust Mateo" },
            { letter: "C", text: "how long Mateo keeps coming back without results" },
            { letter: "D", text: "how busy the shelter becomes on weekends" }
          ],
          correct: "C"
        },
        {
          id: "narrator",
          sol: "9.RL.3.B",
          stem: "The narrator of \"Kennel Nine\" never reveals what Biscuit is thinking. This choice mainly —",
          choices: [
            { letter: "A", text: "shows that Biscuit is too young to have any real feelings" },
            { letter: "B", text: "makes Ms. Lindqvist the most important character" },
            { letter: "C", text: "explains why Biscuit was brought to the shelter" },
            { letter: "D", text: "keeps the reader guessing, like Mateo, about what she will do" }
          ],
          correct: "D"
        },
        {
          id: "wobble",
          sol: "9.RL.1.B",
          stem: "Based on sentence 8, readers can best infer that Mateo —",
          choices: [
            { letter: "A", text: "is moved by Biscuit's step but does not want to startle her" },
            { letter: "B", text: "is tired of reading and ready to go home for the day" },
            { letter: "C", text: "is embarrassed that Ms. Lindqvist is listening to him" },
            { letter: "D", text: "is unsure how to pronounce the words in the chapter" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c34-farm-stand",
      family: "G9",
      title: "Ten Dollars Short",
      kind: "Literary · 9.RL",
      blurb: "Hana's cash drawer does not add up at the end of the day.",
      level: 2,
      passage:
        "<p>" + N(1) + "At six o'clock Hana counted the cash drawer at Delgado's Farm Stand, and then she counted it again. " +
        N(2) + "It was ten dollars short. " +
        N(3) + "She thought of the man in the green truck and the bill she had not looked at closely before giving him change. " +
        N(4) + "Mrs. Delgado was stacking empty crates by the road, humming. " +
        N(5) + "Hana could slip ten dollars of her own into the drawer, and no one would ever know. " +
        N(6) + "Instead she walked over, holding the count sheet like a ticket she did not want to hand in. " +
        N(7) + "\"I think I gave someone change for a twenty when he paid with a ten,\" she said. " +
        N(8) + "Mrs. Delgado pulled a folded ten from her apron pocket. " +
        N(9) + "\"He came back while you were on break,\" she said, \"and he told me you were too honest to notice you'd been generous.\" " +
        N(10) + "Hana laughed, and the knot in her stomach finally let go.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is best supported by Hana's experience at the farm stand?",
          choices: [
            { letter: "A", text: "Customers will usually take advantage of new workers." },
            { letter: "B", text: "Admitting a mistake can bring relief and earn trust." },
            { letter: "C", text: "Small amounts of money are not worth worrying about." },
            { letter: "D", text: "Hard work at a summer job always leads to a reward." }
          ],
          correct: "B"
        },
        {
          id: "own",
          sol: "9.RL.1.B",
          stem: "Readers can best infer that Hana considers using her own money in sentence 5 because she —",
          choices: [
            { letter: "A", text: "is afraid of disappointing Mrs. Delgado" },
            { letter: "B", text: "thinks the stand charges too little" },
            { letter: "C", text: "wants to pay back the man in the truck" },
            { letter: "D", text: "has forgotten how to count the drawer" }
          ],
          correct: "A"
        },
        {
          id: "honest",
          sol: "9.RL.1.C",
          stem: "Which sentence best shows that Hana chooses honesty over an easy way out?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "C"
        },
        {
          id: "generous",
          sol: "9.RL.1.D",
          stem: "In sentence 9, the customer's words, as Mrs. Delgado repeats them, mainly reveal that he —",
          choices: [
            { letter: "A", text: "wanted Hana to lose her summer job" },
            { letter: "B", text: "thought the strawberries cost too much" },
            { letter: "C", text: "had planned to keep the extra money" },
            { letter: "D", text: "saw Hana's mistake as an innocent one" }
          ],
          correct: "D"
        },
        {
          id: "knot",
          sol: "9.RL.2.C",
          stem: "In sentence 10, the phrase the knot in her stomach finally let go suggests that Hana —",
          choices: [
            { letter: "A", text: "no longer feels worried" },
            { letter: "B", text: "has become very hungry" },
            { letter: "C", text: "feels sick from the heat" },
            { letter: "D", text: "is about to cry from fear" }
          ],
          correct: "A"
        },
        {
          id: "view",
          sol: "9.RL.3.B",
          stem: "The narrator shares Hana's thoughts but not Mrs. Delgado's. As a result, the reader —",
          choices: [
            { letter: "A", text: "knows from the start that the man in the truck came back" },
            { letter: "B", text: "understands why Mrs. Delgado hums while stacking crates" },
            { letter: "C", text: "shares Hana's worry without knowing the money was returned" },
            { letter: "D", text: "learns how much money the farm stand earned that day" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c34-fog-course",
      family: "G9",
      title: "The Bend in the Fog",
      kind: "Literary · 9.RL",
      blurb: "A team captain leading the pack realizes the flags have disappeared.",
      level: 3,
      passage:
        "<p>" + N(1) + "At Hollins Meadow the fog was so thick that the orange course flags appeared only a few strides ahead, like coals glowing out of ash. " +
        N(2) + "Priyanka led the varsity pack through the first mile, five teammates breathing behind her. " +
        N(3) + "At the creek crossing she realized the flags had stopped. " +
        N(4) + "The trail ahead looked right, but the grass was untrampled, and no voices came from the trees. " +
        N(5) + "Somewhere back in the gray, the real course had turned left. " +
        N(6) + "She could keep going and hope, or she could stop and give up the lead she had carried since the start. " +
        N(7) + "\"Turn around!\" she shouted. \"We missed the bend!\" " +
        N(8) + "Her teammates groaned but followed her back up the slope, where a flag drooped from a stake knocked sideways. " +
        N(9) + "They finished sixth, seventh, and ninth instead of first, second, and third. " +
        N(10) + "On the bus nobody complained, and Coach Reyes wrote one word on Priyanka's race card: Captain.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does the ending of the Hollins Meadow race best support?",
          choices: [
            { letter: "A", text: "Runners should memorize a course before they ever race on it." },
            { letter: "B", text: "Bad weather makes every cross-country race unfair to runners." },
            { letter: "C", text: "Coaches care more about effort than about honest results." },
            { letter: "D", text: "True leadership means doing the right thing even when it costs a win." }
          ],
          correct: "D"
        },
        {
          id: "weigh",
          sol: "9.RL.1.C",
          stem: "Sentence 6 mainly shows that Priyanka —",
          choices: [
            { letter: "A", text: "weighs her own lead against an honest race for the team" },
            { letter: "B", text: "is too tired to decide which way the course goes" },
            { letter: "C", text: "blames her teammates for following her the wrong way" },
            { letter: "D", text: "wants to win the race no matter what it takes" }
          ],
          correct: "A"
        },
        {
          id: "coals",
          sol: "9.RL.2.A",
          stem: "In sentence 1, the flags are compared to coals glowing out of ash mainly to show that they —",
          choices: [
            { letter: "A", text: "are too hot for the runners to touch" },
            { letter: "B", text: "appear suddenly and faintly through the gray" },
            { letter: "C", text: "were burned by an earlier fire on the course" },
            { letter: "D", text: "are the brightest objects for miles around" }
          ],
          correct: "B"
        },
        {
          id: "grass",
          sol: "9.RL.2.B",
          stem: "The details in sentence 4 about untrampled grass and silent trees mainly create a feeling of —",
          choices: [
            { letter: "A", text: "joyful freedom" },
            { letter: "B", text: "angry frustration" },
            { letter: "C", text: "uneasy isolation" },
            { letter: "D", text: "sleepy calm" }
          ],
          correct: "C"
        },
        {
          id: "stake",
          sol: "9.RL.3.A",
          stem: "The author includes the knocked-over stake in sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "show that Priyanka knocked it over earlier" },
            { letter: "B", text: "suggest that another team cheated on purpose" },
            { letter: "C", text: "describe how the course looked before the race" },
            { letter: "D", text: "explain how the runners came to miss the turn" }
          ],
          correct: "D"
        },
        {
          id: "shout",
          sol: "9.RL.1.D",
          stem: "Priyanka's shouted lines in sentence 7 mainly reveal that she —",
          choices: [
            { letter: "A", text: "acts quickly once she understands the mistake" },
            { letter: "B", text: "is angry that the course was marked so poorly" },
            { letter: "C", text: "wants her teammates to keep running without her" },
            { letter: "D", text: "is not sure whether the course really turned" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c34-admiral",
      family: "G9",
      title: "Admiral's Portrait",
      kind: "Literary · 9.RL",
      blurb: "A grumpy old cat refuses to look good for the adoption website.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every Tuesday after school, Aaliyah photographed the newest cats at Eastgate Animal Rescue for its website. " +
        N(2) + "Kittens were easy; they tumbled into every frame and looked adorable from any angle. " +
        N(3) + "Admiral was not easy. " +
        N(4) + "He was eleven years old, gray around the mouth, and he glared at the camera as if it owed him money. " +
        N(5) + "For three weeks his photo showed a blur of fur and one narrowed yellow eye, and for three weeks nobody asked about him. " +
        N(6) + "On the fourth Tuesday, Aaliyah put the camera down and simply sat by the window with him. " +
        N(7) + "After twenty minutes, a stripe of afternoon sun crossed the bench, and Admiral stretched into it, eyes half closed, looking like a retired king. " +
        N(8) + "She took one picture. " +
        N(9) + "By Saturday, a woman named Mrs. Haddad had driven forty miles to meet him.</p>",
      claims: [
        {
          id: "asked",
          sol: "9.RL.1.B",
          stem: "Readers can best infer that nobody asked about Admiral in sentence 5 because —",
          choices: [
            { letter: "A", text: "the website had stopped working" },
            { letter: "B", text: "people only wanted to adopt dogs" },
            { letter: "C", text: "he had already been adopted once" },
            { letter: "D", text: "his photos made him look unfriendly" }
          ],
          correct: "D"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          stem: "Sentence 6 shows that Aaliyah decides to —",
          choices: [
            { letter: "A", text: "stop photographing cats for the rescue's website" },
            { letter: "B", text: "ask another volunteer to take Admiral's picture" },
            { letter: "C", text: "change her approach and wait for Admiral to relax" },
            { letter: "D", text: "give up on finding a home for an older cat" }
          ],
          correct: "C"
        },
        {
          id: "money",
          sol: "9.RL.2.B",
          stem: "In sentence 4, the phrase glared at the camera as if it owed him money is used to —",
          choices: [
            { letter: "A", text: "suggest that Admiral is sick and in pain" },
            { letter: "B", text: "show Admiral's grumpy attitude with humor" },
            { letter: "C", text: "explain why the camera kept breaking" },
            { letter: "D", text: "reveal that Aaliyah is afraid of Admiral" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The overall tone of the passage about Aaliyah and Admiral is best described as —",
          choices: [
            { letter: "A", text: "warm and gently humorous" },
            { letter: "B", text: "tense and suspenseful" },
            { letter: "C", text: "angry and disappointed" },
            { letter: "D", text: "serious and scientific" }
          ],
          correct: "A"
        },
        {
          id: "kittens",
          sol: "9.RL.3.A",
          stem: "The author includes the description of the kittens in sentence 2 mainly to —",
          choices: [
            { letter: "A", text: "show that kittens are adopted faster than any pet" },
            { letter: "B", text: "explain why Aaliyah volunteers on Tuesday afternoons" },
            { letter: "C", text: "suggest that Aaliyah prefers kittens to older cats" },
            { letter: "D", text: "contrast them with how hard Admiral is to photograph" }
          ],
          correct: "D"
        },
        {
          id: "window",
          sol: "9.RL.3.B",
          stem: "How does the sunny window setting in sentence 7 affect the outcome of the story?",
          choices: [
            { letter: "A", text: "It makes the photo too bright for the website." },
            { letter: "B", text: "It forces Aaliyah to move Admiral to a new room." },
            { letter: "C", text: "It lets Admiral relax so his true personality shows." },
            { letter: "D", text: "It reminds Mrs. Haddad of a cat she once owned." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c34-august-sparks",
      family: "G9",
      title: "August Sparks",
      kind: "Poetry · 9.RL",
      blurb: "Nine lines about counting meteors from the back of a pickup.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "We spread two blankets in the pickup bed<br>" +
        L(2) + "and wait for August to throw its sparks.<br>" +
        L(3) + "My brother counts them out loud, seven, eight,<br>" +
        L(4) + "then loses track and starts again at one.<br>" +
        L(5) + "Each streak is a match struck on black paper,<br>" +
        L(6) + "gone before the wish is halfway said.<br>" +
        L(7) + "The crickets keep their own slow count below.<br>" +
        L(8) + "By midnight we have stopped counting at all<br>" +
        L(9) + "and only point, and gasp, and point again." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of \"August Sparks\"?",
          choices: [
            { letter: "A", text: "Wonder grows when people stop measuring and simply watch." },
            { letter: "B", text: "Brothers and sisters rarely agree about how to spend time." },
            { letter: "C", text: "Making a wish on a meteor is a tradition worth keeping." },
            { letter: "D", text: "Nights in the country are too noisy for real stargazing." }
          ],
          correct: "A"
        },
        {
          id: "match",
          sol: "9.RL.2.A",
          stem: "In line 5, each meteor is compared to a match struck on black paper. This comparison suggests that the meteors are —",
          choices: [
            { letter: "A", text: "dangerous and likely to start fires" },
            { letter: "B", text: "small, dim, and very hard to notice" },
            { letter: "C", text: "slow-moving and easy to follow" },
            { letter: "D", text: "bright, quick, and gone in an instant" }
          ],
          correct: "D"
        },
        {
          id: "crickets",
          sol: "9.RL.2.B",
          stem: "The image of crickets keeping their own slow count in line 7 mainly creates a mood that is —",
          choices: [
            { letter: "A", text: "eerie and frightening" },
            { letter: "B", text: "busy and stressful" },
            { letter: "C", text: "calm and peaceful" },
            { letter: "D", text: "bored and restless" }
          ],
          correct: "C"
        },
        {
          id: "speaker",
          sol: "9.RL.3.B",
          stem: "Who is the speaker of \"August Sparks\"?",
          choices: [
            { letter: "A", text: "a brother trying to count every meteor" },
            { letter: "B", text: "a sibling watching meteors beside a brother" },
            { letter: "C", text: "a farmer listening to crickets at night" },
            { letter: "D", text: "a scientist explaining how meteors form" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "9.RL.2.C",
          stem: "The tone of line 9 in \"August Sparks\" is best described as —",
          choices: [
            { letter: "A", text: "tired and annoyed" },
            { letter: "B", text: "quiet and gloomy" },
            { letter: "C", text: "doubtful and worried" },
            { letter: "D", text: "excited and amazed" }
          ],
          correct: "D"
        },
        {
          id: "count",
          sol: "9.RL.1.B",
          stem: "Readers can best infer from lines 3 and 4 that the brother —",
          choices: [
            { letter: "A", text: "is too excited to keep an accurate count" },
            { letter: "B", text: "does not know how to count past eight" },
            { letter: "C", text: "wants the speaker to stop talking" },
            { letter: "D", text: "thinks the meteors are not worth counting" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c34-mile-three",
      family: "G9",
      title: "Mile Three",
      kind: "Poetry · 9.RL",
      blurb: "A runner learns something in the stretch where nobody is watching.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "At mile three the course stops being a map<br>" +
        L(2) + "and turns into a single word: keep.<br>" +
        L(3) + "My lungs are two paper bags in a storm.<br>" +
        L(4) + "The pines lean in like fans who have no voices.<br>" +
        L(5) + "I used to think the finish was the point,<br>" +
        L(6) + "the clock, the chute, the coach's open hand.<br>" +
        L(7) + "But here, where no one watches but the crows,<br>" +
        L(8) + "I learn the thing the clock can never show:<br>" +
        L(9) + "that I can want to stop and still not stop,<br>" +
        L(10) + "and keep, and keep, and keep the word I gave." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which idea does the poem \"Mile Three\" most clearly develop?",
          choices: [
            { letter: "A", text: "Real strength means pushing on even when no one is watching." },
            { letter: "B", text: "A runner's time on the clock is the best measure of success." },
            { letter: "C", text: "Racing through a forest is more pleasant than racing on a track." },
            { letter: "D", text: "Coaches should cheer louder during the hardest part of a race." }
          ],
          correct: "A"
        },
        {
          id: "belief",
          sol: "9.RL.1.C",
          stem: "Lines 5 and 6 reveal that the runner in \"Mile Three\" once believed —",
          choices: [
            { letter: "A", text: "the coach cared more about the crows than the runners" },
            { letter: "B", text: "running in the woods was safer than running on roads" },
            { letter: "C", text: "finishing times and results were what mattered most" },
            { letter: "D", text: "the third mile was always the easiest part of a race" }
          ],
          correct: "C"
        },
        {
          id: "lungs",
          sol: "9.RL.2.A",
          stem: "In line 3, the speaker's lungs are compared to paper bags in a storm mainly to suggest that they feel —",
          choices: [
            { letter: "A", text: "light and full of fresh air" },
            { letter: "B", text: "empty and no longer working" },
            { letter: "C", text: "strong and ready for more" },
            { letter: "D", text: "strained and close to giving out" }
          ],
          correct: "D"
        },
        {
          id: "pines",
          sol: "9.RL.2.B",
          stem: "The image in line 4 of pines leaning in like fans who have no voices mainly creates a feeling of —",
          choices: [
            { letter: "A", text: "noisy excitement near the finish line" },
            { letter: "B", text: "silent company during a lonely moment" },
            { letter: "C", text: "fear of getting lost among the trees" },
            { letter: "D", text: "anger at a crowd that refuses to cheer" }
          ],
          correct: "B"
        },
        {
          id: "shift",
          sol: "9.RL.3.A",
          stem: "In line 7 of \"Mile Three,\" the poem shifts from describing the race to —",
          choices: [
            { letter: "A", text: "describing the crowd waiting at the finish" },
            { letter: "B", text: "reflecting on a lesson the speaker is learning" },
            { letter: "C", text: "explaining how the coach plans each workout" },
            { letter: "D", text: "listing the runners who are still ahead" }
          ],
          correct: "B"
        },
        {
          id: "keep",
          sol: "9.RL.2.C",
          stem: "The poet repeats the word keep in lines 2 and 10 most likely to —",
          choices: [
            { letter: "A", text: "stress the speaker's determination to finish" },
            { letter: "B", text: "show that the speaker has forgotten the course" },
            { letter: "C", text: "suggest that the speaker wants to quit soon" },
            { letter: "D", text: "imitate the sound of the crows in the pines" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c34-kennel-row",
      family: "G9",
      title: "Kennel Row, Closing Time",
      kind: "Poetry · 9.RL",
      blurb: "A shelter worker sweeps the last row and says every name.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "At closing, the shelter hums with fluorescent light<br>" +
        L(2) + "and the dogs begin their evening census:<br>" +
        L(3) + "a bark, a whine, a tag against a bowl,<br>" +
        L(4) + "each voice reporting I am here, I'm here.<br>" +
        L(5) + "I am the one who sweeps the last long row.<br>" +
        L(6) + "I learn their names the way you learn a street,<br>" +
        L(7) + "by walking it until it walks in you.<br>" +
        L(8) + "Tomorrow some of them will leave with strangers<br>" +
        L(9) + "who'll call them something new. I'll miss the old names.<br>" +
        L(10) + "Tonight I say them all, and switch off the light." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of \"Kennel Row, Closing Time\"?",
          choices: [
            { letter: "A", text: "Caring for others can mean being ready to let them go." },
            { letter: "B", text: "Shelter work is too exhausting for most volunteers." },
            { letter: "C", text: "Animals forget the people who once looked after them." },
            { letter: "D", text: "Learning names is the most important part of any job." }
          ],
          correct: "A"
        },
        {
          id: "miss",
          sol: "9.RL.1.B",
          stem: "Line 9 suggests that the speaker of \"Kennel Row, Closing Time\" feels —",
          choices: [
            { letter: "A", text: "angry that strangers will adopt the dogs" },
            { letter: "B", text: "relieved that the shelter will be quieter" },
            { letter: "C", text: "glad for the dogs but sad to lose them" },
            { letter: "D", text: "worried that the dogs will be returned" }
          ],
          correct: "C"
        },
        {
          id: "census",
          sol: "9.RL.2.A",
          stem: "In line 2, the poet calls the dogs' noises an evening census. This metaphor suggests that the barking sounds like —",
          choices: [
            { letter: "A", text: "a crowd complaining about the bright lights" },
            { letter: "B", text: "a song the dogs have practiced all day" },
            { letter: "C", text: "a warning that strangers are approaching" },
            { letter: "D", text: "each dog being counted and accounted for" }
          ],
          correct: "D"
        },
        {
          id: "final",
          sol: "9.RL.2.C",
          stem: "The tone of line 10 is best described as —",
          choices: [
            { letter: "A", text: "cheerful and carefree" },
            { letter: "B", text: "tender and quietly final" },
            { letter: "C", text: "bitter and resentful" },
            { letter: "D", text: "nervous and hurried" }
          ],
          correct: "B"
        },
        {
          id: "focus",
          sol: "9.RL.3.A",
          stem: "How does the poem's focus shift from lines 1-4 to lines 5-10?",
          choices: [
            { letter: "A", text: "It moves from the shelter's rules to the history of the building." },
            { letter: "B", text: "It moves from the speaker's memories to a plan for the next day." },
            { letter: "C", text: "It moves from the dogs' sounds to the speaker's feelings about them." },
            { letter: "D", text: "It moves from a description of strangers to a list of dog names." }
          ],
          correct: "C"
        },
        {
          id: "who",
          sol: "9.RL.3.B",
          stem: "In \"Kennel Row, Closing Time,\" the speaker is best identified as —",
          choices: [
            { letter: "A", text: "a dog waiting in the last kennel on the row" },
            { letter: "B", text: "a family that plans to adopt a dog tomorrow" },
            { letter: "C", text: "a neighbor who hears the barking each night" },
            { letter: "D", text: "a shelter worker who cleans at closing time" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c34-rain-delay",
      family: "G9",
      title: "Rain Delay",
      kind: "Drama · 9.RL",
      blurb: "Two coworkers at a mini-golf counter on the slowest day of July.",
      level: 2,
      passage:
        "<p><em>Setting: the rental counter at Pirate Cove Mini Golf on a rainy July afternoon. Putters lean in a barrel. DESMOND folds scorecards. LIN, his coworker, eats crackers.</em></p>" +
        "<p>" + N(1) + "<strong>LIN</strong>: Third hour of rain. Third hour of folding scorecards nobody will use. " +
        N(2) + "<strong>DESMOND</strong>: The manager said we could go home early if it stays slow. " +
        N(3) + "<strong>LIN</strong> <em>(aside)</em>: He says that every rainy day. He has never once gone home early. " +
        N(4) + "<strong>DESMOND</strong>: Besides, somebody might come. " +
        N(5) + "<em>(A car door slams. A FATHER and two small children in rain boots hurry in, dripping.)</em> " +
        N(6) + "<strong>FATHER</strong>: Are you open? They've been asking all week. " +
        N(7) + "<strong>DESMOND</strong> <em>(already reaching for putters)</em>: Two kid-sized, one regular. The course is all yours. " +
        N(8) + "<strong>LIN</strong> <em>(aside)</em>: And there it is. He stays for this exact moment. " +
        N(9) + "<em>(She sets down her crackers and grabs a towel for the children's hands.)</em> " +
        N(10) + "<strong>LIN</strong>: Hole seven has a waterfall. Today it's a real one.</p>",
      claims: [
        {
          id: "aside1",
          sol: "9.RL.1.D",
          stem: "The playwright uses Lin's aside in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "share her private view of Desmond with the audience" },
            { letter: "B", text: "tell Desmond that she wants to leave early" },
            { letter: "C", text: "explain the rules of the mini-golf course" },
            { letter: "D", text: "warn the family that the course is closed" }
          ],
          correct: "A"
        },
        {
          id: "aside2",
          sol: "9.RL.1.D",
          stem: "In sentence 8, Lin's second aside reveals that she now understands —",
          choices: [
            { letter: "A", text: "how to fold scorecards more quickly" },
            { letter: "B", text: "that the manager has closed the course" },
            { letter: "C", text: "why the family drove through the rain" },
            { letter: "D", text: "why Desmond never goes home early" }
          ],
          correct: "D"
        },
        {
          id: "putters",
          sol: "9.RL.3.B",
          stem: "The stage direction already reaching for putters in sentence 7 mainly shows that Desmond —",
          choices: [
            { letter: "A", text: "wants the family to leave soon" },
            { letter: "B", text: "is worried about the putters" },
            { letter: "C", text: "is eager to serve the family" },
            { letter: "D", text: "has been told to clean the barrel" }
          ],
          correct: "C"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          stem: "Which statement best describes how Lin changes during the Pirate Cove scene?",
          choices: [
            { letter: "A", text: "She moves from cheerful jokes to angry silence." },
            { letter: "B", text: "She moves from bored complaining to joining in the fun." },
            { letter: "C", text: "She moves from helping customers to leaving early." },
            { letter: "D", text: "She moves from trusting Desmond to doubting him." }
          ],
          correct: "B"
        },
        {
          id: "kids",
          sol: "9.RL.1.B",
          stem: "Readers can best infer from the father's line in sentence 6 that the children —",
          choices: [
            { letter: "A", text: "are afraid of playing golf in the rain" },
            { letter: "B", text: "would rather be at home than outdoors" },
            { letter: "C", text: "have looked forward to mini golf for days" },
            { letter: "D", text: "have played on this course many times" }
          ],
          correct: "C"
        },
        {
          id: "waterfall",
          sol: "9.RL.2.C",
          stem: "The tone of Lin's final line in sentence 10 is best described as —",
          choices: [
            { letter: "A", text: "sarcastic" },
            { letter: "B", text: "fearful" },
            { letter: "C", text: "gloomy" },
            { letter: "D", text: "playful" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-c34-skyglow",
      family: "G9",
      title: "Where Did the Stars Go?",
      kind: "Informational · 9.RI",
      blurb: "Why city skies hide stars, and how towns are winning them back.",
      level: 1,
      passage:
        "<p>" + N(1) + "On a clear night far from any town, a person can see a few thousand stars without a telescope. " +
        N(2) + "In the middle of a large city, the same person might see fewer than fifty. " +
        N(3) + "The stars have not changed; the sky around them has. " +
        N(4) + "Streetlights, parking lots, and lit signs send light upward, where it scatters off dust and water droplets in the air. " +
        N(5) + "This scattered light, called skyglow, forms a bright dome that washes out faint stars. " +
        N(6) + "Skyglow also affects animals. " +
        N(7) + "Some newly hatched sea turtles crawl toward bright buildings instead of the moonlit ocean, and many migrating birds become confused by lit towers. " +
        N(8) + "Fortunately, the problem has simple fixes. " +
        N(9) + "Shielded lights that point downward, warmer bulbs, and timers that switch lights off late at night can all make the sky darker. " +
        N(10) + "Several towns that changed their lighting report that residents can see the Milky Way again.</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "What is the main idea of the passage about skyglow?",
          choices: [
            { letter: "A", text: "Sea turtles and birds are the main victims of city lights." },
            { letter: "B", text: "People in cities see more stars than people in the country." },
            { letter: "C", text: "The Milky Way can be seen only from a few small towns." },
            { letter: "D", text: "Human-made light hides stars, but the problem can be reduced." }
          ],
          correct: "D"
        },
        {
          id: "cause",
          sol: "9.RI.1.B",
          stem: "According to the passage, what causes skyglow?",
          choices: [
            { letter: "A", text: "light sent upward that scatters off particles in the air" },
            { letter: "B", text: "stars that grow dimmer as they move farther away" },
            { letter: "C", text: "moonlight reflecting off the surface of the ocean" },
            { letter: "D", text: "clouds that trap the heat of a city after sunset" }
          ],
          correct: "A"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which sentence from \"Where Did the Stars Go?\" includes the author's judgment rather than only facts?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "The skyglow passage is mainly organized by —",
          choices: [
            { letter: "A", text: "telling the history of one town's streetlights" },
            { letter: "B", text: "explaining a problem, its effects, and its solutions" },
            { letter: "C", text: "comparing two scientists' views on stargazing" },
            { letter: "D", text: "listing the stars that are easiest to find" }
          ],
          correct: "B"
        },
        {
          id: "compare",
          sol: "9.RI.2.B",
          stem: "The author includes the comparison in sentences 1 and 2 mainly to —",
          choices: [
            { letter: "A", text: "argue that people should move away from large cities" },
            { letter: "B", text: "explain how telescopes help people find faint stars" },
            { letter: "C", text: "prove that the number of stars has dropped over time" },
            { letter: "D", text: "show how much artificial light changes what people see" }
          ],
          correct: "D"
        },
        {
          id: "washes",
          sol: "9.RV.1.C",
          stem: "In sentence 5, the phrase washes out most nearly means —",
          choices: [
            { letter: "A", text: "cleans with water and soap" },
            { letter: "B", text: "removes from the sky forever" },
            { letter: "C", text: "makes hard to see by overpowering" },
            { letter: "D", text: "colors with a bright paint" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c34-low-score",
      family: "G9",
      title: "Why Runners Score Like Golfers",
      kind: "Informational · 9.RI",
      blurb: "How cross-country scoring works, and why the fifth runner matters.",
      level: 1,
      passage:
        "<p>" + N(1) + "In most sports the team with the most points wins, but cross-country works the other way around. " +
        N(2) + "At a typical high school meet, each team's top five finishers score points equal to their places. " +
        N(3) + "A runner who finishes first earns one point, a runner who finishes tenth earns ten, and so on. " +
        N(4) + "The team with the lowest total wins, just as the lowest score wins in golf. " +
        N(5) + "Teams may enter up to seven runners, and the sixth and seventh do not score. " +
        N(6) + "However, they still matter. " +
        N(7) + "If they finish ahead of another team's scorers, they push those runners back and add points to that team's total. " +
        N(8) + "This effect is called displacement. " +
        N(9) + "Because of it, coaches often say that the gap between a team's first and fifth runners matters as much as the speed of its star. " +
        N(10) + "A team of five steady runners can beat a team with one champion and four stragglers.</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "What is the main idea of the passage about cross-country scoring?",
          choices: [
            { letter: "A", text: "Cross-country is more difficult to score than golf or other sports." },
            { letter: "B", text: "Teams should enter only five runners to keep their scores low." },
            { letter: "C", text: "Low totals win, and every runner on a team can affect the result." },
            { letter: "D", text: "A team's fastest runner decides the outcome of most meets." }
          ],
          correct: "C"
        },
        {
          id: "sixth",
          sol: "9.RI.1.B",
          stem: "According to the passage, a team's sixth and seventh runners can help by —",
          choices: [
            { letter: "A", text: "adding their own places to their team's total" },
            { letter: "B", text: "replacing the star runner if he or she falls" },
            { letter: "C", text: "pacing the top five runners during the race" },
            { letter: "D", text: "pushing other teams' scorers into later places" }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "How does the author mostly organize the scoring passage?",
          choices: [
            { letter: "A", text: "by explaining a rule step by step and then its effect on teams" },
            { letter: "B", text: "by telling the story of one meet from start to finish" },
            { letter: "C", text: "by comparing the history of cross-country with that of golf" },
            { letter: "D", text: "by listing reasons why runners should join a team" }
          ],
          correct: "A"
        },
        {
          id: "golf",
          sol: "9.RI.2.B",
          stem: "The author compares cross-country to golf in sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "suggest that runners should also play golf" },
            { letter: "B", text: "show that golf is more popular than running" },
            { letter: "C", text: "help readers see that a lower total is better" },
            { letter: "D", text: "explain why meets are held on golf courses" }
          ],
          correct: "C"
        },
        {
          id: "support",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the claim in sentence 10 that five steady runners can beat a team with one champion?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "B"
        },
        {
          id: "root",
          sol: "9.RV.1.B",
          stem: "The word displacement in sentence 8 contains the base word place. Based on this and the passage, displacement means —",
          choices: [
            { letter: "A", text: "moving someone out of a position" },
            { letter: "B", text: "finding a new place to race" },
            { letter: "C", text: "measuring the length of a course" },
            { letter: "D", text: "adding a runner to the team" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-ri-c34-foster-homes",
      family: "G9",
      title: "Room to Heal",
      kind: "Informational · 9.RI",
      blurb: "Shelters send animals to volunteers' homes. Does it work?",
      level: 3,
      passage:
        "<p>" + N(1) + "Animal shelters have long struggled with space: when kennels fill, every new arrival puts pressure on the animals already there. " +
        N(2) + "Over the past two decades, many shelters have turned to foster programs, in which volunteers house animals temporarily in their own homes. " +
        N(3) + "Supporters say fostering helps in several ways. " +
        N(4) + "A dog recovering from surgery heals in a quiet room rather than a noisy kennel, and a shy cat can learn to trust people before meeting adopters. " +
        N(5) + "Foster families also write notes on an animal's habits, which can help match it with the right home. " +
        N(6) + "Some directors believe fostering lowers the number of adopted pets that are later returned, although the evidence so far comes mostly from single shelters rather than large studies. " +
        N(7) + "Fostering has costs, too. " +
        N(8) + "Volunteers need training, supplies, and veterinary support, and a shelter must track animals spread across dozens of addresses. " +
        N(9) + "Even so, many shelters consider the extra paperwork a fair price for calmer, healthier animals.</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of \"Room to Heal\"?",
          choices: [
            { letter: "A", text: "Foster programs have replaced kennels at most animal shelters." },
            { letter: "B", text: "Shy cats are the animals that benefit most from foster homes." },
            { letter: "C", text: "Shelters should stop fostering until large studies are done." },
            { letter: "D", text: "Foster programs offer real benefits, though they also add work." }
          ],
          correct: "D"
        },
        {
          id: "notes",
          sol: "9.RI.1.B",
          stem: "According to the passage, how do foster families' notes help animals?",
          choices: [
            { letter: "A", text: "They allow vets to skip checkups for fostered pets." },
            { letter: "B", text: "They prove that fostering lowers the return rate." },
            { letter: "C", text: "They help shelters match animals with suitable homes." },
            { letter: "D", text: "They let shelters house more animals in kennels." }
          ],
          correct: "C"
        },
        {
          id: "unproven",
          sol: "9.RI.1.C",
          stem: "Which idea from \"Room to Heal\" is presented as a belief that has not yet been fully proven?",
          choices: [
            { letter: "A", text: "Fostering lowers the number of adopted pets returned." },
            { letter: "B", text: "Volunteers need training and veterinary support." },
            { letter: "C", text: "Shelters must track animals at many addresses." },
            { letter: "D", text: "Kennels fill up and put pressure on the animals." }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "The foster-care passage is mainly organized by —",
          choices: [
            { letter: "A", text: "telling the story of one dog's stay in a foster home" },
            { letter: "B", text: "comparing the history of two shelters in different cities" },
            { letter: "C", text: "describing a solution, its benefits, and then its drawbacks" },
            { letter: "D", text: "listing steps a family follows to become foster parents" }
          ],
          correct: "C"
        },
        {
          id: "health",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the idea that foster care can improve an animal's health?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "B"
        },
        {
          id: "price",
          sol: "9.RV.1.E",
          stem: "Sentence 9 calls the paperwork a fair price. Compared with the word burden, the phrase fair price suggests that the work is —",
          choices: [
            { letter: "A", text: "worth accepting for what it gains" },
            { letter: "B", text: "too expensive for most shelters" },
            { letter: "C", text: "unfair to the volunteers involved" },
            { letter: "D", text: "a punishment shelters must endure" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-ri-c34-lifeguard",
      family: "G9",
      title: "Earning the Chair",
      kind: "Informational · 9.RI",
      blurb: "What it really takes to become a summer lifeguard.",
      level: 1,
      passage:
        "<p>" + N(1) + "Many teenagers picture a lifeguard job as a summer of sitting in a tall chair, but earning that chair takes serious work. " +
        N(2) + "At most pools and beaches, new guards must pass a certification course before they are hired. " +
        N(3) + "The course usually begins with a swim test. " +
        N(4) + "Candidates swim several hundred yards without stopping, tread water with their hands raised, and dive to retrieve a heavy brick from the deep end. " +
        N(5) + "Next come lessons in rescue skills, such as reaching a struggling swimmer with a rescue tube and moving a person who may have a neck injury. " +
        N(6) + "Finally, candidates learn first aid and CPR and practice on training dummies. " +
        N(7) + "Even after certification, the work continues. " +
        N(8) + "Guards often train each week, and supervisors may run surprise drills. " +
        N(9) + "It may look relaxing from the shallow end, but a good lifeguard is always watching, always ready.</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "What is the main idea of \"Earning the Chair\"?",
          choices: [
            { letter: "A", text: "Becoming and staying a lifeguard requires demanding training." },
            { letter: "B", text: "Lifeguards spend most of their summer sitting in tall chairs." },
            { letter: "C", text: "Pools should hire only guards who have years of experience." },
            { letter: "D", text: "The swim test is the hardest part of a lifeguard's job." }
          ],
          correct: "A"
        },
        {
          id: "judge",
          sol: "9.RI.1.C",
          stem: "Which sentence from the lifeguard passage expresses the author's judgment rather than a description of training?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "D"
        },
        {
          id: "order",
          sol: "9.RI.2.A",
          stem: "Sentences 3-6 of the lifeguard passage are organized mainly in —",
          choices: [
            { letter: "A", text: "order of importance, from most to least useful" },
            { letter: "B", text: "cause and effect, explaining why guards quit" },
            { letter: "C", text: "time order, describing the stages of a course" },
            { letter: "D", text: "comparison, showing pools and beaches side by side" }
          ],
          correct: "C"
        },
        {
          id: "chair",
          sol: "9.RI.2.B",
          stem: "The author begins sentence 1 with the image of sitting in a tall chair mainly to —",
          choices: [
            { letter: "A", text: "describe the equipment new lifeguards must buy" },
            { letter: "B", text: "set up a common belief that the passage then corrects" },
            { letter: "C", text: "show that lifeguards rarely have to leave their seats" },
            { letter: "D", text: "explain why teenagers dislike working at pools" }
          ],
          correct: "B"
        },
        {
          id: "after",
          sol: "9.RI.3.A",
          stem: "Which detail best supports the claim that a lifeguard's training continues after certification?",
          choices: [
            { letter: "A", text: "Candidates must tread water with raised hands." },
            { letter: "B", text: "The course begins with a swim test." },
            { letter: "C", text: "Candidates practice CPR on training dummies." },
            { letter: "D", text: "Supervisors may run surprise drills." }
          ],
          correct: "D"
        },
        {
          id: "retrieve",
          sol: "9.RV.1.C",
          stem: "In sentence 4, the word retrieve most nearly means —",
          choices: [
            { letter: "A", text: "bring back" },
            { letter: "B", text: "throw away" },
            { letter: "C", text: "lift over" },
            { letter: "D", text: "search for" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-ri-c34-twinkle",
      family: "G9",
      title: "Why Planets Don't Twinkle",
      kind: "Informational · 9.RI",
      blurb: "A quick sky test, and the science of a steady light.",
      level: 2,
      passage:
        "<p>" + N(1) + "On a clear evening, try this test: find the brightest points of light in the sky and watch them for a minute. " +
        N(2) + "Most will twinkle, flickering and even flashing colors, but one or two may shine with a steady glow. " +
        N(3) + "The steady ones are likely planets. " +
        N(4) + "Twinkling, which astronomers call scintillation, happens because Earth's atmosphere is never perfectly still. " +
        N(5) + "Pockets of warm and cool air bend starlight in slightly different directions as it travels toward your eye. " +
        N(6) + "A star is so distant that its light arrives as a single tiny point, so each small bend makes it seem to jump. " +
        N(7) + "A planet is much closer and appears as a tiny disk instead of a point. " +
        N(8) + "Light from different parts of the disk bends in different ways, and the changes tend to cancel out. " +
        N(9) + "Astronomers dislike twinkling because it blurs their images, which is one reason many telescopes sit on high mountains.</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.A",
          stem: "The main purpose of \"Why Planets Don't Twinkle\" is to —",
          choices: [
            { letter: "A", text: "persuade readers to buy telescopes for their families" },
            { letter: "B", text: "explain why stars twinkle while planets usually do not" },
            { letter: "C", text: "describe the history of mountaintop observatories" },
            { letter: "D", text: "compare the sizes of the planets in our solar system" }
          ],
          correct: "B"
        },
        {
          id: "jump",
          sol: "9.RI.1.B",
          stem: "According to the passage, why does a star's light seem to jump?",
          choices: [
            { letter: "A", text: "It comes from a star that is moving quickly in space." },
            { letter: "B", text: "It is blocked by planets passing in front of the star." },
            { letter: "C", text: "It changes color when it reaches high mountains." },
            { letter: "D", text: "It arrives as a single point, so small bends move it." }
          ],
          correct: "D"
        },
        {
          id: "suggest",
          sol: "9.RI.1.C",
          stem: "Which sentence from the twinkling passage is a suggestion to the reader rather than a statement of fact?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "A"
        },
        {
          id: "opening",
          sol: "9.RI.2.B",
          stem: "The author begins with a test for the reader in sentences 1-3 mainly to —",
          choices: [
            { letter: "A", text: "prove that most bright lights in the sky are planets" },
            { letter: "B", text: "invite the reader to observe what the passage will explain" },
            { letter: "C", text: "warn readers that stargazing requires special tools" },
            { letter: "D", text: "show that astronomers disagree about twinkling" }
          ],
          correct: "B"
        },
        {
          id: "steady",
          sol: "9.RI.3.A",
          stem: "Which sentence best explains why the light of a planet stays steady?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        },
        {
          id: "spark",
          sol: "9.RV.1.B",
          stem: "The word scintillation in sentence 4 comes from a Latin word meaning spark. Based on this, scintillation describes light that —",
          choices: [
            { letter: "A", text: "burns hot enough to start fires" },
            { letter: "B", text: "stays perfectly still and calm" },
            { letter: "C", text: "travels faster than sound" },
            { letter: "D", text: "flickers the way sparks do" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-c34-microchip",
      family: "G9",
      title: "The Chip That Brings Pets Home",
      kind: "Informational · 9.RI",
      blurb: "A grain-sized device, and the record that makes it work.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every year, shelters take in dogs and cats that are not strays at all but lost pets whose owners are searching for them. " +
        N(2) + "A collar tag can identify a pet, but collars slip off and tags wear smooth. " +
        N(3) + "That is why many shelters now scan every new arrival for a microchip. " +
        N(4) + "A microchip is a device about the size of a grain of rice, placed under the skin between the shoulder blades. " +
        N(5) + "It has no battery and cannot track an animal's location; it simply stores an identification number that a handheld scanner can read. " +
        N(6) + "The number, however, is only as useful as the record behind it. " +
        N(7) + "If an owner moves or changes phone numbers without updating the chip's registry, the trail goes cold. " +
        N(8) + "Shelter workers compare finding a chip linked to an old address to opening a letter with no return address. " +
        N(9) + "For this reason, veterinarians remind owners that a chip is not a one-time fix but a promise that must be kept current.</p>",
      claims: [
        {
          id: "cannot",
          sol: "9.RI.1.B",
          stem: "According to the passage, what can a microchip NOT do?",
          choices: [
            { letter: "A", text: "store an identification number" },
            { letter: "B", text: "be read by a handheld scanner" },
            { letter: "C", text: "show where a lost pet is right now" },
            { letter: "D", text: "stay in place under the skin" }
          ],
          correct: "C"
        },
        {
          id: "type",
          sol: "9.RI.1.C",
          stem: "Sentence 8 of the microchip passage differs from sentence 5 mainly because sentence 8 —",
          choices: [
            { letter: "A", text: "gives a technical fact about how chips are built" },
            { letter: "B", text: "offers a comparison drawn from workers' experience" },
            { letter: "C", text: "states a rule that every pet owner must follow" },
            { letter: "D", text: "reports the results of a large scientific study" }
          ],
          correct: "B"
        },
        {
          id: "moves",
          sol: "9.RI.2.A",
          stem: "The microchip passage moves from sentences 1-5 to sentences 6-9 by —",
          choices: [
            { letter: "A", text: "shifting from how chips work to why records must be updated" },
            { letter: "B", text: "shifting from veterinarians' advice to the history of collars" },
            { letter: "C", text: "shifting from lost cats to the problems of lost dogs" },
            { letter: "D", text: "shifting from a personal story to a list of statistics" }
          ],
          correct: "A"
        },
        {
          id: "tag",
          sol: "9.RI.2.B",
          stem: "The author includes sentence 2 about collars and tags mainly to —",
          choices: [
            { letter: "A", text: "argue that pets should never wear collars" },
            { letter: "B", text: "describe how tags are made and engraved" },
            { letter: "C", text: "show that most lost pets are found by tags" },
            { letter: "D", text: "explain why a tag alone is often not enough" }
          ],
          correct: "D"
        },
        {
          id: "advice",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the veterinarians' advice in sentence 9?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "D"
        },
        {
          id: "cold",
          sol: "9.RV.1.F",
          stem: "In sentence 7, the phrase the trail goes cold suggests that —",
          choices: [
            { letter: "A", text: "the chip stops working in cold weather" },
            { letter: "B", text: "the owner can no longer be found from the chip" },
            { letter: "C", text: "the pet has wandered into a snowy area" },
            { letter: "D", text: "the shelter loses interest in the animal" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c34-volunteer-sheet",
      family: "G9",
      title: "New Volunteer Checklist",
      kind: "Functional text · 9.RI",
      blurb: "The sheet every new volunteer gets at the front desk.",
      level: 1,
      passage:
        "<p><strong>MAPLEWOOD COUNTY ANIMAL SHELTER: NEW VOLUNTEER CHECKLIST</strong></p>" +
        "<p>" + N(1) + "<strong>Before your first shift:</strong> Watch the online safety video and bring a signed parent form if you are under 18. " +
        N(2) + "<strong>What to wear:</strong> Wear closed-toe shoes and clothes you do not mind getting dirty, and leave dangling jewelry at home. " +
        N(3) + "<strong>Sign in:</strong> Use the tablet at the front desk every time you arrive, because we report volunteer hours to the county. " +
        N(4) + "<strong>Dog walking:</strong> Walk only dogs with a green tag on their kennel; yellow-tag dogs need a staff member present. " +
        N(5) + "<strong>Cat room:</strong> Wash your hands before and after each visit, even if you touch only one cat. " +
        N(6) + "<strong>Treats:</strong> Never feed treats from home, since many animals are on special diets. " +
        N(7) + "Our volunteers are the heart of this shelter, and the animals can tell when you care. " +
        N(8) + "Questions? Ask the volunteer coordinator, Ms. Achebe, at the front desk or call extension 214.</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.A",
          stem: "The main purpose of the Maplewood volunteer checklist is to —",
          choices: [
            { letter: "A", text: "convince families to adopt a dog from the shelter" },
            { letter: "B", text: "explain how the county pays for the animal shelter" },
            { letter: "C", text: "describe the special diets of the shelter's animals" },
            { letter: "D", text: "prepare new volunteers to work safely and follow rules" }
          ],
          correct: "D"
        },
        {
          id: "green",
          sol: "9.RI.1.B",
          stem: "According to the checklist, which dogs may a new volunteer walk without staff?",
          choices: [
            { letter: "A", text: "dogs whose kennels have a green tag" },
            { letter: "B", text: "dogs whose kennels have a yellow tag" },
            { letter: "C", text: "dogs that are on special diets" },
            { letter: "D", text: "dogs that Ms. Achebe has chosen" }
          ],
          correct: "A"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which sentence from the Maplewood checklist is an opinion rather than a rule or instruction?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "How is the Maplewood checklist mainly organized?",
          choices: [
            { letter: "A", text: "by the order in which animals arrive each day" },
            { letter: "B", text: "by a story about one volunteer's first shift" },
            { letter: "C", text: "by problems at the shelter and their causes" },
            { letter: "D", text: "by labeled topics, each followed by instructions" }
          ],
          correct: "D"
        },
        {
          id: "since",
          sol: "9.RI.2.B",
          stem: "The checklist explains why in sentence 6 (since many animals are on special diets) mainly to —",
          choices: [
            { letter: "A", text: "suggest that volunteers may bring treats if asked" },
            { letter: "B", text: "show that a strict-sounding rule has a good reason" },
            { letter: "C", text: "tell volunteers which foods the animals prefer" },
            { letter: "D", text: "warn that the shelter is running out of food" }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "9.RI.3.A",
          stem: "Which TWO sentences from the checklist most directly protect the animals' health? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: ["B", "C"]
        }
      ]
    },
    {
      id: "g9-ri-c34-meet-sheet",
      family: "G9",
      title: "Riverbend Invitational",
      kind: "Functional text · 9.RI",
      blurb: "The info sheet handed out the day before the big meet.",
      level: 2,
      passage:
        "<p><strong>RIVERBEND INVITATIONAL: TEAM INFORMATION</strong></p>" +
        "<p>" + N(1) + "<strong>Bus:</strong> The team bus leaves the north lot at 6:45 a.m. sharp; runners who miss it must be driven by a parent and check in with Coach Marsh by 7:45. " +
        N(2) + "<strong>Race times:</strong> Girls' varsity runs at 9:00, boys' varsity at 9:40, and all junior varsity runners at 10:30. " +
        N(3) + "<strong>Course:</strong> The 5K loop crosses one shallow creek, so pack a dry pair of socks. " +
        N(4) + "<strong>Spikes:</strong> Spikes may be no longer than a quarter inch, and officials will check them at the starting line. " +
        N(5) + "<strong>Food:</strong> Eat a light breakfast at least two hours before your race, because heavy meals tend to cause cramps. " +
        N(6) + "<strong>Weather:</strong> If lightning is seen, all races pause until thirty minutes after the last strike. " +
        N(7) + "<strong>Awards:</strong> Medals go to the top twenty-five finishers in each race, and the ceremony begins at noon. " +
        N(8) + "Remember, a great race starts the night before, so go to bed early!</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.A",
          stem: "The main purpose of the Riverbend Invitational sheet is to —",
          choices: [
            { letter: "A", text: "persuade students to join the cross-country team" },
            { letter: "B", text: "tell runners what they need to know for meet day" },
            { letter: "C", text: "describe how the Riverbend course was designed" },
            { letter: "D", text: "report the results of last year's invitational" }
          ],
          correct: "B"
        },
        {
          id: "jv",
          sol: "9.RI.1.B",
          stem: "According to the sheet, when does a junior varsity runner's race begin?",
          choices: [
            { letter: "A", text: "9:00" },
            { letter: "B", text: "9:40" },
            { letter: "C", text: "10:30" },
            { letter: "D", text: "noon" }
          ],
          correct: "C"
        },
        {
          id: "advice",
          sol: "9.RI.1.C",
          stem: "Which sentence from the Riverbend sheet is friendly advice rather than an official meet rule?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "D"
        },
        {
          id: "headings",
          sol: "9.RI.2.A",
          stem: "The bold headings on the Riverbend sheet, such as Bus and Course, mainly help readers —",
          choices: [
            { letter: "A", text: "find information on a particular topic quickly" },
            { letter: "B", text: "understand the history of the invitational" },
            { letter: "C", text: "compare their times with other runners' times" },
            { letter: "D", text: "follow the story of a runner's meet day" }
          ],
          correct: "A"
        },
        {
          id: "cramps",
          sol: "9.RI.2.B",
          stem: "The writer includes the explanation about cramps in sentence 5 mainly to —",
          choices: [
            { letter: "A", text: "warn runners that the course is dangerous" },
            { letter: "B", text: "suggest that runners skip breakfast entirely" },
            { letter: "C", text: "give a reason for the breakfast advice" },
            { letter: "D", text: "explain why the bus leaves so early" }
          ],
          correct: "C"
        },
        {
          id: "socks",
          sol: "9.RI.3.A",
          stem: "Which detail from the sheet best explains why runners should bring dry socks?",
          choices: [
            { letter: "A", text: "Races pause when lightning is seen." },
            { letter: "B", text: "The loop crosses a shallow creek." },
            { letter: "C", text: "Officials check spikes at the start." },
            { letter: "D", text: "The bus leaves the lot at 6:45." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c34-dim-lights",
      family: "G9",
      title: "Let Cedar Falls See the Stars",
      kind: "Argument · 9.RI",
      blurb: "A student's letter asking the town to dim its streetlights after midnight.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every night, the streetlights along Harmon Avenue blaze until dawn, lighting empty sidewalks for hours after the last bus has gone. " +
        N(2) + "I am asking the Cedar Falls town council to install timers that dim these lights by half between midnight and five a.m. " +
        N(3) + "First, the change would save money. " +
        N(4) + "The town's own budget report shows that street lighting costs more than $90,000 a year, and towns that dim late-night lights often cut that bill by a fifth. " +
        N(5) + "Second, darker skies would help wildlife, including the bats that eat the mosquitoes residents complain about every summer. " +
        N(6) + "Some people worry that dimmer streets will invite crime. " +
        N(7) + "Yet studies of towns that tried late-night dimming have generally found no rise in crime, and the lights would return to full brightness whenever motion sensors detect people. " +
        N(8) + "Finally, the astronomy club at Cedar Falls High could hold star nights in the park again. " +
        N(9) + "A small change at midnight could give our town back something we lost: the night sky.</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the writer's central claim in the Cedar Falls letter?",
          choices: [
            { letter: "A", text: "The town should remove all of its streetlights for good." },
            { letter: "B", text: "The council should dim Harmon Avenue's lights late at night." },
            { letter: "C", text: "The astronomy club deserves a new telescope from the town." },
            { letter: "D", text: "Residents should stop complaining about summer mosquitoes." }
          ],
          correct: "B"
        },
        {
          id: "sensor",
          sol: "9.RI.1.B",
          stem: "According to the letter, what would happen when motion sensors detect people on a dimmed street?",
          choices: [
            { letter: "A", text: "The police would be called to the area." },
            { letter: "B", text: "The lights would switch off completely." },
            { letter: "C", text: "The timers would reset until five a.m." },
            { letter: "D", text: "The lights would return to full brightness." }
          ],
          correct: "D"
        },
        {
          id: "fact",
          sol: "9.RI.1.C",
          stem: "Which sentence in the letter relies on reported facts rather than the writer's hopes?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "The writer organizes sentences 3-8 mainly by —",
          choices: [
            { letter: "A", text: "presenting reasons in order and answering an objection" },
            { letter: "B", text: "describing the history of lighting in Cedar Falls" },
            { letter: "C", text: "comparing the views of two council members" },
            { letter: "D", text: "telling a story about one night on Harmon Avenue" }
          ],
          correct: "A"
        },
        {
          id: "bats",
          sol: "9.RI.2.B",
          stem: "The writer mentions mosquitoes in sentence 5 mainly to —",
          choices: [
            { letter: "A", text: "argue that the town should spray for insects every summer" },
            { letter: "B", text: "show that bats are more common than people think" },
            { letter: "C", text: "explain why the astronomy club meets only in winter" },
            { letter: "D", text: "link the wildlife benefit to something residents care about" }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "9.RI.3.A",
          stem: "Which sentence offers the strongest evidence against the worry raised in sentence 6?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rv-c34-greenleaf",
      family: "G9",
      title: "Four Hundred Baskets",
      kind: "Vocabulary · 9.RV",
      blurb: "Ravi's summer job at a garden center starts with a hose and a lesson.",
      level: 1,
      passage:
        "<p>" + N(1) + "Ravi's summer job at Greenleaf Garden Center began with a task that seemed impossible for a <strong>novice</strong>: watering four hundred hanging baskets before the store opened. " +
        N(2) + "By the second row, the hose had soaked his sneakers, and several petunias still looked <strong>wilted</strong>, their heads drooping toward the gravel. " +
        N(3) + "The owner, Mrs. Castellanos, showed him how to lift each basket to feel its weight, because a light basket meant dry soil. " +
        N(4) + "\"A heavy basket can wait,\" she said. \"A light one is begging.\" " +
        N(5) + "Ravi became <strong>diligent</strong>, checking every basket carefully instead of rushing down the rows. " +
        N(6) + "Within an hour of a good soak, even the saddest plants would <strong>revive</strong>, lifting their blooms like hands raised in class. " +
        N(7) + "His paycheck was <strong>modest</strong>, but by August his muscles and his patience had both grown.</p>",
      claims: [
        {
          id: "novice",
          sol: "9.RV.1.B",
          stem: "The word novice in sentence 1 shares a root with novel and renovate. That root carries the idea of —",
          choices: [
            { letter: "A", text: "something difficult" },
            { letter: "B", text: "something new" },
            { letter: "C", text: "something green" },
            { letter: "D", text: "something hidden" }
          ],
          correct: "B"
        },
        {
          id: "wilted",
          sol: "9.RV.1.C",
          stem: "Which words from sentence 2 best help the reader understand the meaning of wilted?",
          choices: [
            { letter: "A", text: "their heads drooping toward the gravel" },
            { letter: "B", text: "several petunias still looked" },
            { letter: "C", text: "the hose had soaked his sneakers" },
            { letter: "D", text: "By the second row" }
          ],
          correct: "A"
        },
        {
          id: "diligent",
          sol: "9.RV.1.C",
          stem: "In sentence 5, the word diligent most nearly means —",
          choices: [
            { letter: "A", text: "quick and careless" },
            { letter: "B", text: "bored and distracted" },
            { letter: "C", text: "tired and sore" },
            { letter: "D", text: "careful and hardworking" }
          ],
          correct: "D"
        },
        {
          id: "revive",
          sol: "9.RV.1.B",
          stem: "The prefix re- in revive (sentence 6) means again. Based on this, revive means to —",
          choices: [
            { letter: "A", text: "grow for the very first time" },
            { letter: "B", text: "lose color in the hot sun" },
            { letter: "C", text: "come back to life or strength" },
            { letter: "D", text: "be moved to a new row" }
          ],
          correct: "C"
        },
        {
          id: "modest",
          sol: "9.RV.1.E",
          stem: "The author could have written small instead of modest in sentence 7. Compared with small, modest suggests the paycheck was —",
          choices: [
            { letter: "A", text: "embarrassingly tiny" },
            { letter: "B", text: "surprisingly large" },
            { letter: "C", text: "paid much too late" },
            { letter: "D", text: "limited but respectable" }
          ],
          correct: "D"
        },
        {
          id: "begging",
          sol: "9.RV.1.F",
          stem: "In sentence 4, Mrs. Castellanos says that a light basket is begging. This figurative language means the basket —",
          choices: [
            { letter: "A", text: "is too heavy to lift" },
            { letter: "B", text: "urgently needs water" },
            { letter: "C", text: "has been sold already" },
            { letter: "D", text: "should be thrown away" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rv-c34-andromeda",
      family: "G9",
      title: "A Letter from Andromeda",
      kind: "Vocabulary · 9.RV",
      blurb: "Kai expects a swirl of color and finds something better.",
      level: 2,
      passage:
        "<p>" + N(1) + "The Westbrook Astronomy Club held its monthly <strong>vigil</strong> at Harlow Field, where members stayed awake until three in the morning tracking whatever the sky offered. " +
        N(2) + "That night's target was the Andromeda Galaxy, a smudge so <strong>elusive</strong> that newcomers often swept their binoculars right past it. " +
        N(3) + "Amara, the club's president, taught Kai to <strong>gauge</strong> distances by holding up a fist at arm's length, since one fist covers about ten degrees of sky. " +
        N(4) + "Through the telescope, the galaxy looked <strong>nebulous</strong>, a pale cloud with no sharp edges at all. " +
        N(5) + "Kai had expected a swirl of color like the photos online and felt a flicker of disappointment. " +
        N(6) + "Then Amara reminded him that the light entering his eye had left Andromeda more than two million years ago. " +
        N(7) + "Suddenly the gray cloud seemed less like a smudge and more like a letter from an ancient stranger. " +
        N(8) + "He stayed at the eyepiece until his breath fogged the glass, reading that <strong>celestial</strong> letter as long as it lasted.</p>",
      claims: [
        {
          id: "vigil",
          sol: "9.RV.1.C",
          stem: "As used in sentence 1, the word vigil most nearly means —",
          choices: [
            { letter: "A", text: "a contest to find the most stars" },
            { letter: "B", text: "a meeting to elect club officers" },
            { letter: "C", text: "a trip to buy new telescopes" },
            { letter: "D", text: "a period of staying awake to watch" }
          ],
          correct: "D"
        },
        {
          id: "nebulous",
          sol: "9.RV.1.B",
          stem: "The word nebulous in sentence 4 is related to nebula, a cloud of gas in space. Based on this, nebulous means —",
          choices: [
            { letter: "A", text: "bright and full of color" },
            { letter: "B", text: "far away and impossible to see" },
            { letter: "C", text: "cloudy and unclear in shape" },
            { letter: "D", text: "sharp and perfectly round" }
          ],
          correct: "C"
        },
        {
          id: "elusive",
          sol: "9.RV.1.E",
          stem: "The author could have written hard to find instead of elusive in sentence 2. Compared with that phrase, elusive adds a sense that the galaxy —",
          choices: [
            { letter: "A", text: "is too dangerous for beginners to look at" },
            { letter: "B", text: "seems to slip away from those trying to catch it" },
            { letter: "C", text: "is the brightest object in the night sky" },
            { letter: "D", text: "can be seen only through the club's telescope" }
          ],
          correct: "B"
        },
        {
          id: "smudge",
          sol: "9.RV.1.E",
          stem: "In sentence 7, the shift from calling the galaxy a smudge to calling it a letter mainly changes the connotation from —",
          choices: [
            { letter: "A", text: "unimportant to meaningful" },
            { letter: "B", text: "colorful to gray" },
            { letter: "C", text: "frightening to funny" },
            { letter: "D", text: "distant to nearby" }
          ],
          correct: "A"
        },
        {
          id: "stranger",
          sol: "9.RV.1.F",
          stem: "In sentence 7, comparing the galaxy to a letter from an ancient stranger mainly suggests that Kai —",
          choices: [
            { letter: "A", text: "sees the old light as a message sent across time" },
            { letter: "B", text: "thinks someone in the galaxy is writing to him" },
            { letter: "C", text: "wishes he had brought a notebook to the field" },
            { letter: "D", text: "believes the photos online were fake" }
          ],
          correct: "A"
        },
        {
          id: "reading",
          sol: "9.RV.1.F",
          stem: "By describing Kai reading that celestial letter in sentence 8, the author mainly —",
          choices: [
            { letter: "A", text: "suggests that Kai is reading a book at the eyepiece" },
            { letter: "B", text: "explains why the glass on the eyepiece fogged up" },
            { letter: "C", text: "hints that Kai is bored and wants to go home" },
            { letter: "D", text: "shows how fully Kai's view of the galaxy has changed" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rv-c34-hills-honest",
      family: "G9",
      title: "Hills Are Honest",
      kind: "Vocabulary · 9.RV",
      blurb: "A cross-country coach and the saying painted on the shed.",
      level: 3,
      passage:
        "<p>" + N(1) + "Coach Ferreira had a saying she repeated so often that the team painted it on the equipment shed: \"Hills are honest.\" " +
        N(2) + "A runner could hide a lack of training on a flat track, she explained, but a steep climb exposed every skipped workout. " +
        N(3) + "Her workouts were <strong>relentless</strong>: hill repeats on Tuesdays and long runs on Saturdays, no matter the weather. " +
        N(4) + "Runners who trained on a <strong>sporadic</strong> schedule, showing up one week and vanishing the next, never built real <strong>endurance</strong>. " +
        N(5) + "Yet Ferreira also insisted that a runner who stumbled was not a failure. " +
        N(6) + "\"Everyone will <strong>falter</strong> on the hill at some point,\" she told them. \"What matters is whether you lean forward or sit down.\" " +
        N(7) + "By October, even Dmitri, who had once walked every incline, had become <strong>resilient</strong>, bouncing back from bad races the way a young pine springs upright after snow slides off its branches.</p>",
      claims: [
        {
          id: "sporadic",
          sol: "9.RV.1.C",
          stem: "Which words from sentence 4 best help the reader understand the meaning of sporadic?",
          choices: [
            { letter: "A", text: "never built real endurance" },
            { letter: "B", text: "vanishing the next" },
            { letter: "C", text: "Runners who trained" },
            { letter: "D", text: "real endurance" }
          ],
          correct: "B"
        },
        {
          id: "endurance",
          sol: "9.RV.1.B",
          stem: "The suffix -ance turns the verb endure into the noun endurance. Based on this, endurance in sentence 4 means —",
          choices: [
            { letter: "A", text: "the act of finishing a race first" },
            { letter: "B", text: "the habit of skipping workouts" },
            { letter: "C", text: "the fear of running up steep hills" },
            { letter: "D", text: "the ability to keep going over time" }
          ],
          correct: "D"
        },
        {
          id: "resilient",
          sol: "9.RV.1.B",
          stem: "The word resilient comes from a Latin word meaning to leap back. Which phrase in sentence 7 best reflects this meaning?",
          choices: [
            { letter: "A", text: "bouncing back from bad races" },
            { letter: "B", text: "by October" },
            { letter: "C", text: "who had once walked every incline" },
            { letter: "D", text: "snow slides off its branches" }
          ],
          correct: "A"
        },
        {
          id: "relentless",
          sol: "9.RV.1.E",
          stem: "Compared with the word steady, the word relentless in sentence 3 gives Ferreira's workouts a connotation that is more —",
          choices: [
            { letter: "A", text: "relaxed and flexible" },
            { letter: "B", text: "cheerful and playful" },
            { letter: "C", text: "demanding and unforgiving" },
            { letter: "D", text: "careless and sloppy" }
          ],
          correct: "C"
        },
        {
          id: "honest",
          sol: "9.RV.1.F",
          stem: "When Coach Ferreira says that hills are honest, she most nearly means that hills —",
          choices: [
            { letter: "A", text: "are the safest part of any cross-country course" },
            { letter: "B", text: "should be run only when the weather is good" },
            { letter: "C", text: "make runners tell the truth about their times" },
            { letter: "D", text: "reveal how well a runner has really trained" }
          ],
          correct: "D"
        },
        {
          id: "pine",
          sol: "9.RV.1.F",
          stem: "In sentence 7, comparing Dmitri to a pine springing upright after snow mainly suggests that he —",
          choices: [
            { letter: "A", text: "recovers from setbacks and stands strong again" },
            { letter: "B", text: "prefers running in winter to running in summer" },
            { letter: "C", text: "has grown taller since the season began" },
            { letter: "D", text: "is stiff and slow when he runs up hills" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rv-c34-intake-desk",
      family: "G9",
      title: "The Intake Desk",
      kind: "Vocabulary · 9.RV",
      blurb: "A mail carrier brings a muddy puppy to the shelter.",
      level: 2,
      passage:
        "<p>" + N(1) + "Late one afternoon, a mail carrier named Mr. Petrakis carried a muddy puppy into the Riverside Humane Society and set her on the intake desk. " +
        N(2) + "The puppy was <strong>wary</strong> at first, flattening her ears and eyeing every hand that came near. " +
        N(3) + "Sofia, a high school volunteer, spoke softly and let the puppy sniff her sleeve before reaching for her. " +
        N(4) + "Within minutes the little dog grew <strong>docile</strong>, sitting quietly while the vet tech checked her teeth. " +
        N(5) + "The shelter would give her food, shots, and a warm crate, which would <strong>alleviate</strong> some of the stress of her days on the road. " +
        N(6) + "Still, everyone knew her stay was meant to be <strong>transient</strong>, a stop on the way to a real home. " +
        N(7) + "When Sofia finished the paperwork, the puppy licked her wrist, as if trying to <strong>reciprocate</strong> the kindness. " +
        N(8) + "Mr. Petrakis laughed. \"She just signed her own form,\" he said.</p>",
      claims: [
        {
          id: "wary",
          sol: "9.RV.1.C",
          stem: "As it is used in sentence 2, wary most nearly means —",
          choices: [
            { letter: "A", text: "playful and curious" },
            { letter: "B", text: "cautious and distrustful" },
            { letter: "C", text: "sleepy and calm" },
            { letter: "D", text: "hungry and thirsty" }
          ],
          correct: "B"
        },
        {
          id: "docile",
          sol: "9.RV.1.C",
          stem: "Which phrase from sentence 4 best helps the reader understand the meaning of docile?",
          choices: [
            { letter: "A", text: "within minutes" },
            { letter: "B", text: "the little dog grew" },
            { letter: "C", text: "sitting quietly" },
            { letter: "D", text: "checked her teeth" }
          ],
          correct: "C"
        },
        {
          id: "alleviate",
          sol: "9.RV.1.B",
          stem: "The word alleviate in sentence 5 shares a root with elevate, which carries the idea of lifting. Based on this, alleviate means to —",
          choices: [
            { letter: "A", text: "lighten or ease" },
            { letter: "B", text: "increase or add" },
            { letter: "C", text: "hide or cover" },
            { letter: "D", text: "measure or count" }
          ],
          correct: "A"
        },
        {
          id: "transient",
          sol: "9.RV.1.E",
          stem: "The author could have written short instead of transient in sentence 6. Compared with short, transient adds a sense that the stay is —",
          choices: [
            { letter: "A", text: "too brief to make any real difference" },
            { letter: "B", text: "unpleasant and best forgotten quickly" },
            { letter: "C", text: "longer than the shelter had planned" },
            { letter: "D", text: "meant to pass, like a stop on a journey" }
          ],
          correct: "D"
        },
        {
          id: "eyeing",
          sol: "9.RV.1.E",
          stem: "In sentence 2, the author writes eyeing rather than seeing. The word eyeing suggests the puppy was —",
          choices: [
            { letter: "A", text: "unable to see the hands clearly" },
            { letter: "B", text: "hoping someone would feed her" },
            { letter: "C", text: "ignoring everyone in the room" },
            { letter: "D", text: "watching closely with suspicion" }
          ],
          correct: "D"
        },
        {
          id: "signed",
          sol: "9.RV.1.F",
          stem: "In sentence 8, Mr. Petrakis's comment that the puppy signed her own form is a playful way of saying that —",
          choices: [
            { letter: "A", text: "she had stepped in ink on the paperwork" },
            { letter: "B", text: "the shelter's forms were too hard to fill out" },
            { letter: "C", text: "her lick showed she accepted her new place" },
            { letter: "D", text: "Sofia had made a mistake in the paperwork" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-dsr-c34-first-day",
      family: "G9",
      title: "Two First Days",
      kind: "Paired texts · 9.DSR",
      blurb: "Two journal entries from the first day of two summer jobs.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Nadia's Journal: Suds City Car Wash</strong></p>" +
        "<p>" + N(1) + "Day one at Suds City Car Wash taught me that a sponge holds about a gallon of water and that all of it ends up in my shoes. " +
        N(2) + "My trainer, Gus, said, \"Top to bottom, or you'll wash dirt onto clean paint.\" " +
        N(3) + "By lunch my arms felt like wet noodles. " +
        N(4) + "Still, when a man drove off in a truck that shone like a new penny, I felt proud, as if I had polished the whole morning.</p>" +
        "<p><strong>Text 2 — Theo's Journal: Camp Larkspur</strong></p>" +
        "<p>" + N(5) + "It's my first day as a junior counselor at Camp Larkspur, and I already know the names of all fourteen kids in the Otter group. " +
        N(6) + "My supervisor, Ms. Bello, told me, \"Learn names first; everything else follows.\" " +
        N(7) + "She was right. " +
        N(8) + "Calling Jaylen by name got him down from the top of the climbing net faster than any whistle could. " +
        N(9) + "I'm exhausted, but I want to go back tomorrow.</p>",
      claims: [
        {
          id: "both",
          sol: "9.DSR.D",
          stem: "Which idea do both Nadia's and Theo's journal entries support?",
          choices: [
            { letter: "A", text: "Summer jobs are mostly about earning money." },
            { letter: "B", text: "Supervisors expect new workers to learn alone." },
            { letter: "C", text: "A first day on the job can be tiring but rewarding." },
            { letter: "D", text: "Outdoor jobs are harder than indoor jobs." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "The two journal entries differ mainly in that Nadia's work focuses on —",
          choices: [
            { letter: "A", text: "physical tasks, while Theo's focuses on people" },
            { letter: "B", text: "children, while Theo's focuses on machines" },
            { letter: "C", text: "learning names, while Theo's focuses on cars" },
            { letter: "D", text: "money, while Theo's focuses on free time" }
          ],
          correct: "A"
        },
        {
          id: "proud",
          sol: "9.DSR.E",
          stem: "Which TWO sentences best show that each writer feels satisfied at the end of the first day? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "advice",
          sol: "9.DSR.E",
          stem: "A reader combining Gus's advice in sentence 2 with Ms. Bello's in sentence 6 could best conclude that —",
          choices: [
            { letter: "A", text: "experienced workers pass on simple rules that make a job easier" },
            { letter: "B", text: "new workers usually ignore the advice their trainers give them" },
            { letter: "C", text: "car washes and summer camps follow exactly the same rules" },
            { letter: "D", text: "supervisors care more about speed than about doing work well" }
          ],
          correct: "A"
        },
        {
          id: "noodles",
          sol: "9.RL.2.A",
          stem: "In sentence 3, Nadia says her arms felt like wet noodles mainly to show that they were —",
          choices: [
            { letter: "A", text: "cold from the water" },
            { letter: "B", text: "stiff and sunburned" },
            { letter: "C", text: "covered in soap suds" },
            { letter: "D", text: "weak and worn out" }
          ],
          correct: "D"
        },
        {
          id: "bello",
          sol: "9.RL.1.D",
          stem: "Ms. Bello's line in sentence 6 is important to Text 2 because it —",
          choices: [
            { letter: "A", text: "explains why Theo was hired at Camp Larkspur" },
            { letter: "B", text: "gives advice that Theo proves true in sentence 8" },
            { letter: "C", text: "shows that Ms. Bello does not trust Theo yet" },
            { letter: "D", text: "tells the campers how to climb the net safely" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-dsr-c34-first-light",
      family: "G9",
      title: "First Light",
      kind: "Paired texts · 9.DSR",
      blurb: "Saturn through a school telescope, and stars learned on a rooftop.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Mei and the Telescope</strong></p>" +
        "<p>" + N(1) + "When Mei finally pressed her eye to the school telescope, Saturn floated in the eyepiece, small and perfect, its rings tilted like the brim of a hat. " +
        N(2) + "She had seen hundreds of photos, but none had prepared her for how real it looked. " +
        N(3) + "\"It's actually there,\" she whispered, and the students in line behind her laughed, because every one of them had said the same thing. " +
        N(4) + "On the bus home, she kept looking out at the little yellow dot that was the same planet.</p>" +
        "<p><strong>Text 2 — Tunde and the Roof</strong></p>" +
        "<p>" + N(5) + "Tunde's grandfather never owned a telescope. " +
        N(6) + "On the flat roof of their house in Ibadan, he taught Tunde to find the brightest stars with bare eyes, naming each one as if introducing old neighbors. " +
        N(7) + "\"The sky is a book,\" he said, \"but you must learn to read it without help.\" " +
        N(8) + "Tunde still checks on those neighbors every time he steps outside at night.</p>",
      claims: [
        {
          id: "share",
          sol: "9.DSR.D",
          stem: "Which idea do the texts about Mei and Tunde share?",
          choices: [
            { letter: "A", text: "Telescopes are needed to enjoy the planets and stars." },
            { letter: "B", text: "Grandparents are the best teachers of astronomy." },
            { letter: "C", text: "Stars are easier to find from a city than a village." },
            { letter: "D", text: "Seeing the sky for oneself creates a personal bond with it." }
          ],
          correct: "D"
        },
        {
          id: "tools",
          sol: "9.DSR.D",
          stem: "How do the texts about Mei and Tunde differ in the way the characters view the sky?",
          choices: [
            { letter: "A", text: "Mei uses a telescope, while Tunde learns with only his eyes." },
            { letter: "B", text: "Mei studies stars, while Tunde studies only planets." },
            { letter: "C", text: "Mei views the sky alone, while Tunde views it in a crowd." },
            { letter: "D", text: "Mei reads books, while Tunde looks at photos online." }
          ],
          correct: "A"
        },
        {
          id: "others",
          sol: "9.DSR.E",
          stem: "Which TWO details show that each character's experience is shared with other people? Select TWO.",
          choices: [
            { letter: "A", text: "Saturn's rings tilted like the brim of a hat" },
            { letter: "B", text: "the students in line behind Mei laughing" },
            { letter: "C", text: "Tunde's grandfather naming the stars for him" },
            { letter: "D", text: "Tunde checking the sky when he steps outside" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "echo",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 1 most closely supports the grandfather's idea in sentence 7 that the sky must be seen without help?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "B"
        },
        {
          id: "neighbors",
          sol: "9.RL.2.B",
          stem: "In Text 2, describing the stars as old neighbors mainly suggests that Tunde's grandfather —",
          choices: [
            { letter: "A", text: "feels a familiar, friendly bond with the stars" },
            { letter: "B", text: "knows the people who live on nearby roofs" },
            { letter: "C", text: "is worried that the stars are moving away" },
            { letter: "D", text: "thinks the stars are too crowded together" }
          ],
          correct: "A"
        },
        {
          id: "bus",
          sol: "9.RL.3.A",
          stem: "Text 1 ends with Mei looking at Saturn from the bus in sentence 4 mainly to show that —",
          choices: [
            { letter: "A", text: "Mei is bored and wants the long ride to be over" },
            { letter: "B", text: "Saturn is easier to see without a telescope" },
            { letter: "C", text: "the telescope view has changed how she sees the planet" },
            { letter: "D", text: "the other students have stopped talking about it" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-dsr-c34-rest-day",
      family: "G9",
      title: "The Rest Day",
      kind: "Paired texts · 9.DSR",
      blurb: "A coach's new rule and one runner's honest reaction to it.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From Coach Danvers's Letter to Families</strong></p>" +
        "<p>" + N(1) + "This season, every runner will take one full rest day each week, with no running at all. " +
        N(2) + "I know some athletes worry that resting will make them slower. " +
        N(3) + "Research on young runners suggests the opposite: muscles and bones grow stronger during recovery, not during the workout itself. " +
        N(4) + "Rest days also lower the risk of overuse injuries such as shin splints, which ended three of our runners' seasons last fall.</p>" +
        "<p><strong>Text 2 — From Ji-woo's Running Blog</strong></p>" +
        "<p>" + N(5) + "Coach says Sundays are for rest, so I tried it. " +
        N(6) + "Honestly, the first rest day felt like sitting in a parked car with the engine running. " +
        N(7) + "I itched to go out, and I worried my teammates were getting ahead of me. " +
        N(8) + "By the third week, though, my Tuesday hill repeats felt lighter, and the ache in my left shin had faded. " +
        N(9) + "I'm still restless on Sundays, but I've stopped arguing with the calendar.</p>",
      claims: [
        {
          id: "both",
          sol: "9.DSR.D",
          stem: "Which idea do both Coach Danvers and Ji-woo support?",
          choices: [
            { letter: "A", text: "Runners should train hard every day of the week." },
            { letter: "B", text: "Rest days can help runners perform and feel better." },
            { letter: "C", text: "Shin splints are the most common running injury." },
            { letter: "D", text: "Rest days matter only for beginning runners." }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.DSR.D",
          stem: "The two texts about rest days differ mainly in that Text 1 relies on —",
          choices: [
            { letter: "A", text: "research and team history, while Text 2 relies on experience" },
            { letter: "B", text: "personal feelings, while Text 2 relies on scientific studies" },
            { letter: "C", text: "quotations from runners, while Text 2 relies on a coach" },
            { letter: "D", text: "a training schedule, while Text 2 relies on race results" }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "9.DSR.E",
          stem: "Which TWO sentences from Text 1 are supported by Ji-woo's experience in sentence 8? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "worry",
          sol: "9.DSR.E",
          stem: "Ji-woo's worry in sentence 7 most closely matches which idea from Text 1?",
          choices: [
            { letter: "A", text: "Every runner will take one full rest day each week." },
            { letter: "B", text: "Muscles and bones grow stronger during recovery." },
            { letter: "C", text: "Some athletes fear that resting will slow them down." },
            { letter: "D", text: "Shin splints ended several runners' seasons." }
          ],
          correct: "C"
        },
        {
          id: "car",
          sol: "9.RV.1.F",
          stem: "In sentence 6, the comparison to sitting in a parked car with the engine running suggests that Ji-woo felt —",
          choices: [
            { letter: "A", text: "relaxed and glad to have a day off" },
            { letter: "B", text: "ready to move but forced to stay still" },
            { letter: "C", text: "confused about where she should go" },
            { letter: "D", text: "worried that she might be injured" }
          ],
          correct: "B"
        },
        {
          id: "restless",
          sol: "9.RV.1.E",
          stem: "Ji-woo describes herself as restless rather than miserable in sentence 9. The word restless suggests that she —",
          choices: [
            { letter: "A", text: "still has extra energy but is not truly unhappy" },
            { letter: "B", text: "is deeply upset and wants to quit the team" },
            { letter: "C", text: "cannot sleep at all on Sunday nights" },
            { letter: "D", text: "is angry at Coach Danvers for the new rule" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-dsr-c34-pepper",
      family: "G9",
      title: "Pepper Goes Home",
      kind: "Paired texts · 9.DSR",
      blurb: "One adoption day, told by the volunteer and by the new owner.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Ezra</strong></p>" +
        "<p>" + N(1) + "Ezra had walked Pepper every Saturday for five months, longer than any volunteer had walked any dog at Hillcrest Shelter. " +
        N(2) + "When the family arrived, he clipped on her leash himself. " +
        N(3) + "\"She pulls left at corners,\" he told the girl, \"and she hates thunder, so turn the radio up during storms.\" " +
        N(4) + "He smiled the whole time, and only after the car pulled away did he sit down on the curb and stay there a while.</p>" +
        "<p><strong>Text 2 — Lucia</strong></p>" +
        "<p>" + N(5) + "Lucia had expected the shelter to feel sad, but the boy who brought Pepper out was grinning. " +
        N(6) + "He gave her a list of Pepper's habits as carefully as a doctor giving instructions. " +
        N(7) + "In the car, Pepper pressed her nose to the back window, looking toward the curb. " +
        N(8) + "Lucia promised herself she would learn every habit on that list by heart.</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.DSR.D",
          stem: "The author's purpose in pairing Ezra's text with Lucia's is to —",
          choices: [
            { letter: "A", text: "explain the rules a family must follow to adopt a dog" },
            { letter: "B", text: "argue that volunteers should not grow attached to dogs" },
            { letter: "C", text: "show one event through the eyes of the giver and the receiver" },
            { letter: "D", text: "compare two different shelters in the same small town" }
          ],
          correct: "C"
        },
        {
          id: "reveal",
          sol: "9.DSR.D",
          stem: "How do the two texts differ in what they reveal about Ezra?",
          choices: [
            { letter: "A", text: "Text 1 shows his anger; Text 2 shows that he has forgiven Lucia." },
            { letter: "B", text: "Text 1 shows his private sadness; Text 2 shows only his smile." },
            { letter: "C", text: "Text 1 shows his doubts; Text 2 shows that he chose the family." },
            { letter: "D", text: "Text 1 shows his joy; Text 2 shows that he is secretly upset." }
          ],
          correct: "B"
        },
        {
          id: "curb",
          sol: "9.DSR.E",
          stem: "A reader combining sentence 4 with sentence 7 can best conclude that —",
          choices: [
            { letter: "A", text: "Pepper is afraid of riding in the family's car" },
            { letter: "B", text: "Pepper seems to look back toward where Ezra is sitting" },
            { letter: "C", text: "Lucia is watching Ezra through the back window" },
            { letter: "D", text: "Ezra is waiting for the family to bring Pepper back" }
          ],
          correct: "B"
        },
        {
          id: "hands",
          sol: "9.DSR.E",
          stem: "Which TWO sentences together best show that Pepper is going to a caring home? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "habits",
          sol: "9.RL.1.D",
          stem: "Ezra's words to Lucia in sentence 3 mainly reveal that he —",
          choices: [
            { letter: "A", text: "is worried Lucia will return the dog soon" },
            { letter: "B", text: "wants to keep Pepper at the shelter longer" },
            { letter: "C", text: "thinks Pepper is too difficult to adopt" },
            { letter: "D", text: "knows Pepper well and wants her cared for" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of Text 1, about Ezra, is best described as —",
          choices: [
            { letter: "A", text: "bittersweet" },
            { letter: "B", text: "furious" },
            { letter: "C", text: "carefree" },
            { letter: "D", text: "frightened" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
