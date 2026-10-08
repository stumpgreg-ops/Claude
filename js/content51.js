/* SOL Labyrinth — Grade 9 long packs (expansion v5.15, content51): a planetarium, tree-climbing arborists,
 * a ferry crossing and a weather balloon launch. Stories, articles, vocabulary, paired texts, a poem, a drama
 * scene, a functional text and an argument (390-520 words). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* 1 ───────── LITERARY · planetarium ───────── */
    {
      id: "g9-rl-c51-dark-dome",
      family: "G9",
      title: "When the Stars Went Out",
      kind: "Literary · 9.RL",
      blurb: "A teen volunteer runs her first planetarium show, and then the projector dies.",
      level: 2,
      passage:
        "<p>" + N(1) + "The Bellweather Planetarium smelled like carpet cleaner and old velvet, and Teodora Vasquez had loved it since she was seven. " +
        N(2) + "Now she was fifteen, and for the first time she was the one standing at the console while thirty second graders filed into the round room below the dome. " +
        N(3) + "Mr. Okafor, the director, had given her the Saturday morning show because his voice was gone, reduced to a dry whisper by a cold. " +
        N(4) + "\"You know the script better than I do,\" he had rasped, and she had nodded as though that settled her stomach.</p>" +
        "<p>" + N(5) + "The first ten minutes went perfectly. " +
        N(6) + "The lights dimmed in their slow, practiced fade, a sunset painted itself across the edge of the dome, and the children gasped when the first stars pricked through the dark. " +
        N(7) + "Teo found the Big Dipper with the pointer and traced its handle toward the bright star Arcturus, just as the script said. " +
        N(8) + "Then the projector gave a soft click, like a door closing in another part of the house, and every star went out at once.</p>" +
        "<p>" + N(9) + "Thirty small voices rose in the blackness. " +
        N(10) + "Someone began to cry. " +
        N(11) + "Teo's hands moved over the console, pressing the restart switch twice, but the machine only hummed and stayed dark. " +
        N(12) + "Mr. Okafor appeared at her elbow and whispered that the lamp had burned out and that a replacement would take twenty minutes to install. " +
        N(13) + "Twenty minutes, Teo thought, was a lifetime to a seven-year-old in the dark.</p>" +
        "<p>" + N(14) + "She remembered herself at that age, sitting in the third row and gripping her mother's sleeve. " +
        N(15) + "What she had loved most then was not the projector but the voice of the woman at the console, a voice that made the dome feel like a real sky over a real field. " +
        N(16) + "Teo set down the script. " +
        N(17) + "\"Okay, astronomers,\" she said into the microphone, \"this is exactly what happens on a real camping trip when clouds roll in. " +
        N(18) + "Real astronomers don't go home. " +
        N(19) + "They wait, and they tell stories.\"</p>" +
        "<p>" + N(20) + "She switched on a small red flashlight, the kind stargazers use to protect their night vision, and held it beneath her chin. " +
        N(21) + "She told them how sailors once found their way home by a single bright star in the north. " +
        N(22) + "She asked them to point to where they thought the Dipper had been, and a forest of small arms rose toward the ceiling, most of them aimed in nearly the right direction. " +
        N(23) + "She told them the legend her grandfather had told her, about a hunter who chased a bear across the sky every night and never caught it. " +
        N(24) + "The crying stopped somewhere in the middle of the bear.</p>" +
        "<p>" + N(25) + "When the new lamp finally glowed and the stars returned, the children cheered as if the sky itself had been rescued. " +
        N(26) + "Afterward, Mr. Okafor handed her a sticky note on which he had written three words in shaky capital letters: YOU DIDN'T NEED IT. " +
        N(27) + "Teo was not sure whether he meant the script or the projector. " +
        N(28) + "On the bus ride home, she decided he might have meant both.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of Teo's story about the failed projector?",
          choices: [
            { letter: "A", text: "Careful planning prevents most problems before they begin." },
            { letter: "B", text: "Young volunteers should not be trusted with important jobs." },
            { letter: "C", text: "Modern machines are more reliable than older ones." },
            { letter: "D", text: "A calm human voice can matter more than the equipment." }
          ],
          correct: "D"
        },
        {
          id: "char",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which sentence best shows that Teo is willing to abandon a plan when circumstances change?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 25" }
          ],
          correct: "B"
        },
        {
          id: "memory",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The author includes the memory in sentences 14 and 15 mainly to —",
          choices: [
            { letter: "A", text: "explain why Teo decides to talk to the children instead of waiting silently" },
            { letter: "B", text: "show that Teo was more frightened of the dark than these children are" },
            { letter: "C", text: "suggest that Teo's mother once worked at the planetarium console" },
            { letter: "D", text: "reveal that the planetarium has changed very little over the years" }
          ],
          correct: "A"
        },
        {
          id: "simile",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 8, the projector's click is compared to a door closing in another part of the house mainly to suggest that the failure is —",
          choices: [
            { letter: "A", text: "loud enough to frighten the whole audience" },
            { letter: "B", text: "caused by someone who left the room" },
            { letter: "C", text: "quiet and sudden but strangely final" },
            { letter: "D", text: "expected by everyone who works there" }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Sentence 24 suggests that —",
          choices: [
            { letter: "A", text: "Teo's storytelling has calmed the frightened child" },
            { letter: "B", text: "the children have grown bored with the legend" },
            { letter: "C", text: "Mr. Okafor has quietly taken over the show" },
            { letter: "D", text: "the new lamp has started working early" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the final paragraph (sentences 25-28), after the stars return, is best described as —",
          choices: [
            { letter: "A", text: "anxious and doubtful" },
            { letter: "B", text: "bitter and resentful" },
            { letter: "C", text: "quietly proud" },
            { letter: "D", text: "playfully mocking" }
          ],
          correct: "C"
        },
        {
          id: "image",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "The images in sentence 6 (the slow fade, the sunset painting itself, the stars pricking through) mainly create a mood that is —",
          choices: [
            { letter: "A", text: "tense, hinting that something has already gone wrong" },
            { letter: "B", text: "smooth and wondrous, just before the trouble begins" },
            { letter: "C", text: "gloomy, matching Teo's fear of performing" },
            { letter: "D", text: "chaotic, showing how restless the children are" }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the story is told in the third person but stays close to Teo's thoughts, the reader —",
          choices: [
            { letter: "A", text: "learns exactly what each child in the audience is thinking" },
            { letter: "B", text: "knows how the lamp will be fixed before Teo does" },
            { letter: "C", text: "sees Mr. Okafor's reasons for giving her the show" },
            { letter: "D", text: "shares Teo's uncertainty about the meaning of the note" }
          ],
          correct: "D"
        }
      ]
    },

    /* 2 ───────── LITERARY · ferry crossing ───────── */
    {
      id: "g9-rl-c51-one-way-ferry",
      family: "G9",
      title: "The Return Trip",
      kind: "Literary · 9.RL",
      blurb: "Leaving the island for boarding school, Kofi takes his first one-way ferry ride.",
      level: 3,
      passage:
        "<p>" + N(1) + "The 6:40 ferry out of Tamsin Island left whether or not anyone was ready, which was the first thing every island child learned and the last thing Kofi Mensah wanted to remember that morning. " +
        N(2) + "His duffel bag sat at his feet on the car deck, heavy with sweaters his mother insisted he would need on the mainland, where the boarding school's dormitories were said to be drafty. " +
        N(3) + "Behind him, the island was already shrinking into a gray outline of pines and rooftops. " +
        N(4) + "Ahead, there was only fog.</p>" +
        "<p>" + N(5) + "He had made this crossing a hundred times before, for dentist visits, for soccer tournaments, for the movie theater the island had never been large enough to support. " +
        N(6) + "Those trips had always had a return built into them, like the second half of a sentence. " +
        N(7) + "This one did not, or not until Thanksgiving, which at fourteen felt roughly the same as never.</p>" +
        "<p>" + N(8) + "\"You're standing in the drip,\" said a voice behind him. " +
        N(9) + "Mrs. Halvorsen, the deckhand, pointed to the line of water falling from the upper rail, and Kofi stepped aside without arguing. " +
        N(10) + "She had worked the ferry for thirty years, long enough to have waved goodbye to Kofi's mother when she was a girl heading to the mainland for the same school. " +
        N(11) + "She coiled a rope as she talked, her hands moving in loops that seemed to require no attention at all.</p>" +
        "<p>" + N(12) + "\"First trip one-way?\" she asked. " +
        N(13) + "He nodded. " +
        N(14) + "\"Your mother stood right there,\" she said, tilting her head toward the bow. " +
        N(15) + "\"Wouldn't sit down the whole crossing. " +
        N(16) + "Watched the fog like she expected it to open a door for her.\" " +
        N(17) + "Kofi tried to picture his mother at fourteen, nervous and stubborn, and found that it was easier than he expected.</p>" +
        "<p>" + N(18) + "Halfway across, the engine slowed, and the ferry's horn sounded one long note that rolled out into the whiteness and did not come back. " +
        N(19) + "Kofi had heard that horn his whole life from his bedroom window, a sound as ordinary as rain. " +
        N(20) + "Out here, though, it sounded less like a warning and more like a question. " +
        N(21) + "A moment later, a second horn answered from somewhere to the east, faint and low: the morning ferry from the mainland, passing them on its way to the island.</p>" +
        "<p>" + N(22) + "\"There's the return trip,\" Mrs. Halvorsen said. " +
        N(23) + "\"Always is.\" " +
        N(24) + "She reached into the pocket of her orange coat and pressed something into his hand. " +
        N(25) + "It was a brass ferry token, the old kind the line had stopped using years ago, worn smooth by somebody's thumb. " +
        N(26) + "\"Your mother gave that back to me the day she moved home,\" she said. " +
        N(27) + "\"Told me to save it for the next one.\"</p>" +
        "<p>" + N(28) + "When the mainland pier finally pushed its dark pilings out of the fog, Kofi realized he had been standing in the bow the whole time. " +
        N(29) + "He slipped the token into his pocket, where it rested against his phone with a small, solid weight. " +
        N(30) + "Then he picked up the duffel bag and walked down the ramp without looking back, because for the first time he did not feel he needed to.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does Kofi's ferry crossing best develop?",
          choices: [
            { letter: "A", text: "Island communities are often suspicious of people who leave." },
            { letter: "B", text: "Young people should be allowed to choose their own schools." },
            { letter: "C", text: "Leaving feels less final once we see that others made the same trip and returned." },
            { letter: "D", text: "Old traditions lose their meaning when they are passed down too often." }
          ],
          correct: "C"
        },
        {
          id: "simile",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 6, the earlier trips are compared to sentences with a second half mainly to show that —",
          choices: [
            { letter: "A", text: "those trips felt complete because a return was always certain" },
            { letter: "B", text: "Kofi used to write about his trips in a journal" },
            { letter: "C", text: "the earlier crossings took twice as long as this one" },
            { letter: "D", text: "Kofi rarely paid attention during the earlier trips" }
          ],
          correct: "A"
        },
        {
          id: "horn",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 20, the horn sounding less like a warning and more like a question mainly suggests that —",
          choices: [
            { letter: "A", text: "the captain is lost and is calling for directions" },
            { letter: "B", text: "Kofi has never heard the horn from the deck before" },
            { letter: "C", text: "the fog is making every sound seem louder than usual" },
            { letter: "D", text: "Kofi's own future now feels uncertain and unanswered" }
          ],
          correct: "D"
        },
        {
          id: "fog",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the fog described in sentence 4 and again in sentence 28 contribute to the story?",
          choices: [
            { letter: "A", text: "It delays the ferry so that Kofi misses his first day of classes." },
            { letter: "B", text: "It mirrors Kofi's uncertainty, and its lifting matches his new calm." },
            { letter: "C", text: "It explains why Mrs. Halvorsen must stay on deck during the trip." },
            { letter: "D", text: "It hides the island so that Kofi cannot say goodbye to his mother." }
          ],
          correct: "B"
        },
        {
          id: "bow",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Based on sentence 28 and the details in sentences 14-16, readers can best infer that Kofi —",
          choices: [
            { letter: "A", text: "has been avoiding Mrs. Halvorsen for the whole crossing" },
            { letter: "B", text: "has, without meaning to, repeated what his mother once did" },
            { letter: "C", text: "wants to become a deckhand when he finishes school" },
            { letter: "D", text: "is afraid that the ferry will strike the mainland pier" }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the narrator stays close to Kofi's thoughts, the reader —",
          choices: [
            { letter: "A", text: "learns why Kofi's mother chose to move back to the island" },
            { letter: "B", text: "knows exactly what Mrs. Halvorsen feels about her job" },
            { letter: "C", text: "can predict which classes Kofi will take at his new school" },
            { letter: "D", text: "feels Kofi's dread but sees Mrs. Halvorsen only from outside" }
          ],
          correct: "D"
        },
        {
          id: "shift",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "Which choice best describes how the tone changes from the beginning of the story to the end?",
          choices: [
            { letter: "A", text: "from reluctant dread to quiet confidence" },
            { letter: "B", text: "from cheerful excitement to bitter regret" },
            { letter: "C", text: "from calm curiosity to sudden alarm" },
            { letter: "D", text: "from playful humor to serious warning" }
          ],
          correct: "A"
        },
        {
          id: "figure",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentences 22 and 23, Mrs. Halvorsen says \"There's the return trip. Always is.\" Beyond naming the other ferry, her words suggest that —",
          choices: [
            { letter: "A", text: "the ferry schedule is about to change for the winter" },
            { letter: "B", text: "Kofi should take the next ferry back to the island" },
            { letter: "C", text: "Kofi, like others before him, will one day come home" },
            { letter: "D", text: "she is tired of making the same crossing every day" }
          ],
          correct: "C"
        }
      ]
    },

    /* 3 ───────── LITERARY · weather balloon launch ───────── */
    {
      id: "g9-rl-c51-the-knot",
      family: "G9",
      title: "The Knot",
      kind: "Literary · 9.RL",
      blurb: "A science club launches a weather balloon, and Dalia's only job is the knot that holds it.",
      level: 1,
      passage:
        "<p>" + N(1) + "At six in the morning, the football field behind Eastfield High was wet with dew, and the science club was already arguing about the wind. " +
        N(2) + "Mr. Brandt, their teacher, held a small wind gauge above his head and read the number aloud: nine miles per hour. " +
        N(3) + "\"That's the limit,\" he said. " +
        N(4) + "\"If it gets any stronger, we pack up and try again next month.\"</p>" +
        "<p>" + N(5) + "Dalia Haddad hoped the wind would stay exactly where it was. " +
        N(6) + "For eight weeks, the club had worked on the payload, a foam cooler the size of a shoebox that held a small camera, a GPS tracker, and a thermometer. " +
        N(7) + "Dalia's job was the simplest and, she thought, the most frightening. " +
        N(8) + "She was in charge of the knot that would tie the balloon's neck closed and attach it to the line. " +
        N(9) + "If the knot slipped, the balloon would float away alone, and eight weeks of work would stay on the grass.</p>" +
        "<p>" + N(10) + "The balloon itself lay on a plastic tarp like a huge, pale jellyfish. " +
        N(11) + "Two club members fed helium into it from a tall green tank, and it slowly rose and swelled until it was taller than any of them. " +
        N(12) + "Dalia's hands felt clumsy in her gloves, so she pulled them off. " +
        N(13) + "She looped the cord three times around the neck, the way she had practiced on water balloons a hundred times at her kitchen table, then pulled it tight and added a zip tie for good measure.</p>" +
        "<p>" + N(14) + "\"You sure about that?\" asked Marcus, who was holding the parachute. " +
        N(15) + "\"I'm sure,\" Dalia said, though her voice came out smaller than she meant it to. " +
        N(16) + "She tugged the line hard, and the knot did not move.</p>" +
        "<p>" + N(17) + "Mr. Brandt counted down from five. " +
        N(18) + "On \"one,\" the four students holding the line let go, and the balloon leaped upward faster than any of them had expected. " +
        N(19) + "The payload swung beneath it, then steadied, and in less than a minute the whole thing was a white dot climbing into the blue. " +
        N(20) + "Someone cheered, and then everyone did, and Dalia realized she had been holding her breath.</p>" +
        "<p>" + N(21) + "For two hours, they watched the tracker's signal on a laptop as the balloon drifted east. " +
        N(22) + "It rose past the height where airplanes fly, then far beyond that, until the thermometer read sixty degrees below zero. " +
        N(23) + "At last the balloon burst, as it was designed to do, and the parachute carried the payload down into a soybean field ninety miles away. " +
        N(24) + "A farmer named Mrs. Odell called the school that afternoon to say that a \"space cooler\" had landed near her barn.</p>" +
        "<p>" + N(25) + "That evening, the club gathered in the science room to look at the camera's pictures. " +
        N(26) + "Most showed blurry clouds, but one, taken near the highest point, showed the thin blue line of the atmosphere and the gentle curve of the Earth beneath a black sky. " +
        N(27) + "Marcus pointed at the screen. " +
        N(28) + "\"Your knot took that picture,\" he said. " +
        N(29) + "Dalia laughed, but she saved the photo as her phone's background before she went home.</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Dalia at the beginning of the story?",
          choices: [
            { letter: "A", text: "She is nervous about her task but well prepared for it." },
            { letter: "B", text: "She is annoyed that her job is smaller than the others'." },
            { letter: "C", text: "She is confident and eager to lead the countdown." },
            { letter: "D", text: "She is bored and wishes the launch were canceled." }
          ],
          correct: "A"
        },
        {
          id: "gloves",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer that Dalia removes her gloves in sentence 12 because she —",
          choices: [
            { letter: "A", text: "is too warm after carrying the helium tank" },
            { letter: "B", text: "wants Marcus to notice how calm she is" },
            { letter: "C", text: "needs a better feel for tying the knot securely" },
            { letter: "D", text: "has been told to keep the gloves clean" }
          ],
          correct: "C"
        },
        {
          id: "jelly",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 10, the balloon is compared to a jellyfish mainly to show that, before it is filled, it is —",
          choices: [
            { letter: "A", text: "dangerous to touch with bare hands" },
            { letter: "B", text: "large, soft, and limp on the ground" },
            { letter: "C", text: "brightly colored and easy to spot" },
            { letter: "D", text: "already floating above the tarp" }
          ],
          correct: "B"
        },
        {
          id: "wind",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How do the wind reading and Mr. Brandt's words in sentences 2-4 affect the plot?",
          choices: [
            { letter: "A", text: "They explain why the payload lands so far to the east." },
            { letter: "B", text: "They show that the club has launched balloons many times." },
            { letter: "C", text: "They cause Dalia to ask Marcus to tie the knot instead." },
            { letter: "D", text: "They create tension, since a stronger gust could stop the launch." }
          ],
          correct: "D"
        },
        {
          id: "dialogue",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Dalia's reply in sentence 15 mainly shows that —",
          choices: [
            { letter: "A", text: "she is angry that Marcus doubts her work" },
            { letter: "B", text: "she has not actually finished tying the knot" },
            { letter: "C", text: "she wants Mr. Brandt to check the knot himself" },
            { letter: "D", text: "her words sound more certain than she feels" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is best supported by the story of Dalia's launch?",
          choices: [
            { letter: "A", text: "Science is mostly a matter of luck and good weather." },
            { letter: "B", text: "Even a small job can be essential to a group's success." },
            { letter: "C", text: "Leaders should always do the hardest tasks themselves." },
            { letter: "D", text: "Practice matters less than natural talent in the end." }
          ],
          correct: "B"
        },
        {
          id: "dot",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 19, the image of the balloon becoming a white dot climbing into the blue mainly creates a sense of —",
          choices: [
            { letter: "A", text: "how quickly and smoothly the launch succeeds" },
            { letter: "B", text: "how worried the club is about losing the payload" },
            { letter: "C", text: "how cloudy and gray the morning sky has become" },
            { letter: "D", text: "how slowly the balloon rises in the calm air" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the final paragraph (sentences 25-29), as the club views the photos, is best described as —",
          choices: [
            { letter: "A", text: "tense and uncertain" },
            { letter: "B", text: "sad and regretful" },
            { letter: "C", text: "warm and satisfied" },
            { letter: "D", text: "formal and distant" }
          ],
          correct: "C"
        }
      ]
    },

    /* 4 ───────── INFORMATIONAL · arborists ───────── */
    {
      id: "g9-ri-c51-canopy-climb",
      family: "G9",
      title: "Up in the Canopy",
      kind: "Informational · 9.RI",
      blurb: "How tree-care professionals climb high into a tree without harming it or themselves.",
      level: 2,
      passage:
        "<p>" + N(1) + "Most people who look at a tall oak see shade, leaves, and perhaps a squirrel. " +
        N(2) + "An arborist sees a set of problems to solve: a dead limb hanging over a roof, a branch rubbing against a power line, a crack where two trunks meet. " +
        N(3) + "Some of these problems can be handled from the ground or from a bucket truck, but many trees stand in backyards and parks where no truck can reach. " +
        N(4) + "For those trees, an arborist has to climb.</p>" +
        "<p><strong>Getting a Line Up</strong> " + N(5) + "The climb begins before anyone leaves the ground. " +
        N(6) + "First, the arborist chooses a strong branch high in the tree, usually one at least as thick as a person's arm and firmly attached to the trunk. " +
        N(7) + "Then she tosses a small weighted pouch, called a throw bag, over that branch. " +
        N(8) + "The bag pulls a thin cord behind it, and the cord is used to pull the heavier climbing rope into place. " +
        N(9) + "A good throw can take one try; a difficult one can take twenty.</p>" +
        "<p><strong>The System</strong> " + N(10) + "Once the rope is set, the arborist clips it to a padded harness called a saddle. " +
        N(11) + "Between the rope and the saddle sits a special knot or mechanical device that grips the rope when weight is on it and slides when the climber moves it by hand. " +
        N(12) + "This lets her inch upward, rest in midair, or lower herself smoothly. " +
        N(13) + "Modern climbers often use two systems at once, so that if one line must be moved, the other still holds her. " +
        N(14) + "Arborists call this being \"double tied in.\"</p>" +
        "<p><strong>Protecting the Tree</strong> " + N(15) + "Older methods relied heavily on climbing spurs, sharp metal spikes strapped to the boots and driven into the bark. " +
        N(16) + "Spurs are fast, but each step leaves a wound that can let in insects and disease. " +
        N(17) + "Today, most professional guidelines say spurs should be used only when a tree is being removed entirely. " +
        N(18) + "For pruning a healthy tree, climbers move with ropes alone, treating the tree less like a ladder and more like a patient.</p>" +
        "<p><strong>Teamwork</strong> " + N(19) + "Even the most skilled climber does not work alone. " +
        N(20) + "A ground crew watches from below, clears the area where branches will fall, and sends up tools on a separate line. " +
        N(21) + "Climbers and ground workers use short, agreed-upon calls, such as \"Headache!\" to warn of a falling object, because a tree full of wind and chainsaw noise is a poor place for long sentences. " +
        N(22) + "Many crews also hold a brief safety meeting before each job to review the plan and choose an escape route.</p>" +
        "<p>" + N(23) + "The work is demanding, and it requires both certification and years of practice. " +
        N(24) + "Yet many arborists describe it with real affection. " +
        N(25) + "\"From sixty feet up, you notice things nobody on the sidewalk ever sees,\" says Renata Iwu, a climber with eleven years of experience. " +
        N(26) + "\"It's the best office anywhere.\" " +
        N(27) + "For people who care for trees, the climb is not just a way to reach a problem; it is a way to understand the tree from the inside out.</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the main idea of \"Up in the Canopy\"?",
          choices: [
            { letter: "A", text: "Bucket trucks have replaced climbing as the main way to care for trees." },
            { letter: "B", text: "Arborists rely on careful rope methods and teamwork to climb and protect trees." },
            { letter: "C", text: "Climbing spurs are the fastest and safest way to reach a high branch." },
            { letter: "D", text: "Most tree problems can be solved by trimming branches from the ground." }
          ],
          correct: "B"
        },
        {
          id: "throw",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the passage, why does an arborist use a throw bag?",
          choices: [
            { letter: "A", text: "to test whether a branch is strong enough to hold weight" },
            { letter: "B", text: "to warn the ground crew that a climb is about to start" },
            { letter: "C", text: "to carry tools up to the climber during the job" },
            { letter: "D", text: "to get a light cord over a high branch so the rope can follow" }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the article about arborists mainly organized?",
          choices: [
            { letter: "A", text: "It moves from setting the rope to the gear, tree care, and teamwork." },
            { letter: "B", text: "It compares arborists in different countries and their methods." },
            { letter: "C", text: "It tells the life story of one climber from childhood to retirement." },
            { letter: "D", text: "It lists common tree diseases in order from mild to severe." }
          ],
          correct: "A"
        },
        {
          id: "patient",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "In sentence 18, the comparison of a tree to a patient rather than a ladder helps the reader understand that climbers —",
          choices: [
            { letter: "A", text: "must have medical training before they are certified" },
            { letter: "B", text: "climb slowly because they are afraid of falling" },
            { letter: "C", text: "try to avoid injuring the living tree they work on" },
            { letter: "D", text: "use the same tools that doctors use in hospitals" }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the passage expresses an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 17" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 26" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that climbing spurs can harm a healthy tree?",
          choices: [
            { letter: "A", text: "Sentence 16" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "A"
        },
        {
          id: "root",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word arborist comes from the Latin root arbor, meaning \"tree.\" Which other word most likely shares this root?",
          choices: [
            { letter: "A", text: "harbor, a sheltered place for ships" },
            { letter: "B", text: "ardor, a strong feeling of passion" },
            { letter: "C", text: "arboretum, a garden for growing trees" },
            { letter: "D", text: "arbitrary, based on random choice" }
          ],
          correct: "C"
        },
        {
          id: "agreed",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 21, the phrase agreed-upon calls most nearly means calls that —",
          choices: [
            { letter: "A", text: "the climber invents during an emergency" },
            { letter: "B", text: "the crew has settled on ahead of time" },
            { letter: "C", text: "only the crew leader is allowed to use" },
            { letter: "D", text: "change from one job site to the next" }
          ],
          correct: "B"
        }
      ]
    },

    /* 5 ───────── INFORMATIONAL · weather balloons ───────── */
    {
      id: "g9-ri-c51-twice-a-day",
      family: "G9",
      title: "Twice a Day, Everywhere",
      kind: "Informational · 9.RI",
      blurb: "Why weather stations around the world still let go of balloons every single day.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every day at the same two moments, people at hundreds of weather stations around the world step outside and let go of a balloon. " +
        N(2) + "They work in deserts, on islands, at airports, and in Arctic research camps, and they release their balloons at agreed-upon times measured by a single world clock. " +
        N(3) + "The launches are so routine that the people who do them rarely make the news. " +
        N(4) + "Yet nearly every forecast you see depends, in part, on what those balloons find.</p>" +
        "<p>" + N(5) + "The balloon is only the vehicle. " +
        N(6) + "The real instrument is a small, lightweight box called a radiosonde that hangs below it on a long string. " +
        N(7) + "As the balloon climbs, the radiosonde measures temperature, humidity, and air pressure and radios those readings to the ground about once every second. " +
        N(8) + "Because the box also carries a GPS receiver, forecasters can track how it drifts, which tells them the speed and direction of the wind at every level it passes through.</p>" +
        "<p>" + N(9) + "The trip upward lasts roughly two hours. " +
        N(10) + "At launch, a typical balloon is about as wide as a person is tall. " +
        N(11) + "As it rises into thinner air, the gas inside pushes outward against less and less pressure, and the balloon swells until it is several times its original width. " +
        N(12) + "Somewhere around twenty miles up, the stretched rubber finally bursts. " +
        N(13) + "A small parachute then slows the radiosonde's fall, and it drifts back to Earth, often far from where it started.</p>" +
        "<p>" + N(14) + "Why not leave the job to satellites, which watch the whole planet without stopping? " +
        N(15) + "Satellites are essential, but they look down through the atmosphere from far above, and their readings blend many layers of air together. " +
        N(16) + "A radiosonde, by contrast, passes directly through each layer and samples it from the inside. " +
        N(17) + "Computer models use both kinds of data to calculate what the atmosphere will do next. " +
        N(18) + "Studies in which balloon data were removed from those models have generally found that the forecasts became less accurate, especially for storms.</p>" +
        "<p>" + N(19) + "The system does have costs. " +
        N(20) + "Each radiosonde is used only once, and most are never recovered; they land in forests, fields, and oceans. " +
        N(21) + "Some agencies attach a prepaid envelope and ask anyone who finds one to mail it back for refurbishing, though only a small fraction ever return. " +
        N(22) + "Engineers are testing lighter designs that break down more easily, and some scientists believe drones may one day share the work.</p>" +
        "<p>" + N(23) + "For now, though, the twice-daily launch remains one of the steadiest habits in science. " +
        N(24) + "It has continued through holidays, blizzards, and power outages for decades. " +
        N(25) + "The person who releases the balloon may never learn where it lands, but the numbers it sends back travel everywhere at once.</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"Twice a Day, Everywhere\"?",
          choices: [
            { letter: "A", text: "Satellites will soon make weather balloons unnecessary." },
            { letter: "B", text: "Weather balloons are expensive and harmful to the environment." },
            { letter: "C", text: "A quiet daily routine of balloon launches supplies data that forecasts rely on." },
            { letter: "D", text: "Radiosondes are difficult to build and must be repaired after each flight." }
          ],
          correct: "C"
        },
        {
          id: "opening",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author begins with sentences 1-4 mainly to —",
          choices: [
            { letter: "A", text: "introduce a worldwide routine and hint at its importance" },
            { letter: "B", text: "describe the dangers that weather observers face at work" },
            { letter: "C", text: "argue that weather observers deserve more news coverage" },
            { letter: "D", text: "explain how a radiosonde measures humidity and pressure" }
          ],
          correct: "A"
        },
        {
          id: "para4",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How are sentences 14-18, about satellites and radiosondes, mainly organized?",
          choices: [
            { letter: "A", text: "as a list of steps for launching a balloon" },
            { letter: "B", text: "as a story told in time order" },
            { letter: "C", text: "as a cause followed by several effects" },
            { letter: "D", text: "as a question answered by comparing two methods" }
          ],
          correct: "D"
        },
        {
          id: "wind",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the passage, how do forecasters learn about the wind from a radiosonde?",
          choices: [
            { letter: "A", text: "The radiosonde carries a small spinning wind gauge." },
            { letter: "B", text: "They follow its drift using its GPS receiver." },
            { letter: "C", text: "They measure how quickly the balloon bursts." },
            { letter: "D", text: "Satellites photograph the balloon as it rises." }
          ],
          correct: "B"
        },
        {
          id: "spec",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which statement from the passage is a speculation rather than a confirmed fact?",
          choices: [
            { letter: "A", text: "The trip upward lasts roughly two hours." },
            { letter: "B", text: "some scientists believe drones may one day share the work" },
            { letter: "C", text: "Each radiosonde is used only once, and most are never recovered" },
            { letter: "D", text: "the stretched rubber finally bursts" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence provides the strongest evidence that balloon data improve forecasts?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 24" }
          ],
          correct: "C"
        },
        {
          id: "prefix",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The prefix re- in refurbishing (sentence 21) helps the reader understand that returned radiosondes are —",
          choices: [
            { letter: "A", text: "studied to learn where they landed" },
            { letter: "B", text: "thrown away after they are counted" },
            { letter: "C", text: "mailed to the people who found them" },
            { letter: "D", text: "fixed up so they can be used again" }
          ],
          correct: "D"
        },
        {
          id: "figure",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "Sentence 25 says the numbers a balloon sends back travel everywhere at once. This figurative statement mainly suggests that —",
          choices: [
            { letter: "A", text: "the data are quickly shared and used far beyond the launch site" },
            { letter: "B", text: "balloons often drift across several countries before bursting" },
            { letter: "C", text: "forecasters cannot tell which station sent which reading" },
            { letter: "D", text: "the radiosonde sends its signal in every direction at random" }
          ],
          correct: "A"
        }
      ]
    },

    /* 6 ───────── VOCABULARY · planetarium history ───────── */
    {
      id: "g9-rv-c51-star-machine",
      family: "G9",
      title: "The Star Machine",
      kind: "Vocabulary · 9.RV",
      blurb: "A town planetarium trades its old star projector for a digital dome, and teens learn to run the show.",
      level: 1,
      passage:
        "<p>" + N(1) + "When the Greenhollow Science Center opened its planetarium in 1968, visitors lined up around the block. " +
        N(2) + "The room itself was simple: a round ceiling painted white and rows of chairs that tilted back. " +
        N(3) + "The magic came from the machine in the center, a dark, heavy projector shaped a bit like a giant insect with two round heads. " +
        N(4) + "When the lights went down, it threw thousands of tiny points of light onto the dome, and for many visitors it was the first time they had ever seen a sky so full.</p>" +
        "<p>" + N(5) + "The projector could <strong>replicate</strong> the night sky with surprising accuracy. " +
        N(6) + "It could copy the exact positions of the stars as they would appear on any night of the year, from any place on Earth. " +
        N(7) + "Inside, it held an <strong>intricate</strong> system of lenses, gears, and tiny metal plates punched with holes, so detailed that only a few technicians in the state knew how to repair it. " +
        N(8) + "The brightest stars had their own small lenses, which made them appear sharp and <strong>luminous</strong>, glowing far more brightly than the faint stars around them.</p>" +
        "<p>" + N(9) + "By the early 2000s, however, the old projector had begun to seem <strong>obsolete</strong>. " +
        N(10) + "Newer planetariums used digital systems that could do things the old machine never could, such as flying viewers past the rings of Saturn or across the dusty surface of Mars. " +
        N(11) + "Replacement parts for the old projector were no longer made, and each repair took longer than the last. " +
        N(12) + "In 2015, the center installed a digital system and moved the old machine to the lobby, where it now sits behind glass.</p>" +
        "<p>" + N(13) + "The new system is truly <strong>immersive</strong>. " +
        N(14) + "Images surround the audience on every side, and many visitors say they feel as though they are floating in space rather than sitting in a chair. " +
        N(15) + "Children grab the armrests when the dome seems to tilt, and adults laugh at themselves for doing the same thing.</p>" +
        "<p>" + N(16) + "The center's most popular program, though, may be its teen volunteer corps. " +
        N(17) + "Each fall, about a dozen high school students join as <strong>novices</strong>, with little or no experience running a show. " +
        N(18) + "They spend weeks learning the controls, studying the constellations, and practicing how to speak to an audience in the dark. " +
        N(19) + "By spring, most of them lead shows on their own. " +
        N(20) + "\"On the first day, I didn't know Orion from a parking lot,\" said one volunteer, a junior named Lucia Ferreira. " +
        N(21) + "\"Now I can find him in my sleep.\"</p>" +
        "<p>" + N(22) + "Visitors who stop in the lobby on their way out often pause in front of the old projector. " +
        N(23) + "It no longer turns on, and its lenses are dusty behind the glass. " +
        N(24) + "Still, for the people who remember it, it was the machine that first opened the sky. " +
        N(25) + "The new system may be more powerful, but the old one is a reminder that the wonder of the stars has always depended less on the machine than on the people who come to look up.</p>",
      claims: [
        {
          id: "replicate",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 5, the word replicate most nearly means —",
          choices: [
            { letter: "A", text: "hide" },
            { letter: "B", text: "copy" },
            { letter: "C", text: "measure" },
            { letter: "D", text: "brighten" }
          ],
          correct: "B"
        },
        {
          id: "intricate",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which words from sentence 7 best help the reader understand the meaning of intricate?",
          choices: [
            { letter: "A", text: "Inside, it held" },
            { letter: "B", text: "lenses, gears, and tiny metal plates" },
            { letter: "C", text: "punched with holes" },
            { letter: "D", text: "so detailed" }
          ],
          correct: "D"
        },
        {
          id: "luminous",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word luminous shares a root with illuminate and luminary. Based on sentence 8, that root carries the idea of —",
          choices: [
            { letter: "A", text: "light" },
            { letter: "B", text: "size" },
            { letter: "C", text: "distance" },
            { letter: "D", text: "motion" }
          ],
          correct: "A"
        },
        {
          id: "obsolete",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "As used in sentence 9, the word obsolete most nearly means —",
          choices: [
            { letter: "A", text: "costly to run" },
            { letter: "B", text: "hard to see" },
            { letter: "C", text: "out of date" },
            { letter: "D", text: "badly built" }
          ],
          correct: "C"
        },
        {
          id: "immersive",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written interesting instead of immersive in sentence 13. Compared with interesting, the word immersive adds a sense that the show —",
          choices: [
            { letter: "A", text: "is too frightening for young children" },
            { letter: "B", text: "costs more than the old show did" },
            { letter: "C", text: "surrounds viewers and draws them in" },
            { letter: "D", text: "teaches more facts in less time" }
          ],
          correct: "C"
        },
        {
          id: "novices",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 17, the word novices most nearly means —",
          choices: [
            { letter: "A", text: "beginners" },
            { letter: "B", text: "leaders" },
            { letter: "C", text: "visitors" },
            { letter: "D", text: "experts" }
          ],
          correct: "A"
        },
        {
          id: "orion",
          sol: "9.RV.1.E",
          sub: "9.RV.1.E.2",
          stem: "In sentence 20, Lucia says she didn't know Orion from a parking lot mainly to —",
          choices: [
            { letter: "A", text: "complain that the planetarium needs more parking" },
            { letter: "B", text: "explain that Orion is hard to see from the city" },
            { letter: "C", text: "show that she prefers digital shows to real skies" },
            { letter: "D", text: "humorously stress how little she knew at first" }
          ],
          correct: "D"
        },
        {
          id: "insect",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In sentence 3, the author describes the projector as shaped like a giant insect. Compared with calling it a large machine, this description gives the projector a feeling that is more —",
          choices: [
            { letter: "A", text: "modern and efficient" },
            { letter: "B", text: "strange and almost alive" },
            { letter: "C", text: "fragile and easily broken" },
            { letter: "D", text: "ordinary and forgettable" }
          ],
          correct: "B"
        }
      ]
    },

    /* 7 ───────── VOCABULARY · ferry crossing ───────── */
    {
      id: "g9-rv-c51-bayou-ferry",
      family: "G9",
      title: "Two Words",
      kind: "Vocabulary · 9.RV",
      blurb: "A summer deckhand on a river ferry learns how much a captain of few words can say.",
      level: 2,
      passage:
        "<p>" + N(1) + "Captain Delphine Arceneaux was famously <strong>laconic</strong>. " +
        N(2) + "In Thanh Pham's first three weeks working the summer season on the Bayou Clair ferry, she had spoken to him in perhaps a dozen sentences, most of them only two or three words long. " +
        N(3) + "\"Rope there.\" " +
        N(4) + "\"Not yet.\" " +
        N(5) + "\"Good.\" " +
        N(6) + "Thanh had learned to treat each word like a coin, to be saved and examined later.</p>" +
        "<p>" + N(7) + "The ferry was a flat, practical boat that carried six cars and a handful of walkers across the river every half hour. " +
        N(8) + "The crossing took eleven minutes. " +
        N(9) + "Thanh's job was to direct the cars into place, set wooden blocks behind their tires, and toss the heavy line to the dock worker when they landed. " +
        N(10) + "At first his throws were <strong>tentative</strong>, short, uncertain lobs that fell into the water and had to be hauled back, dripping, while drivers watched. " +
        N(11) + "By the third week, though, he could send the line in a clean arc that landed at the dock worker's feet.</p>" +
        "<p>" + N(12) + "On the last Friday in July, a storm pushed through in the afternoon, leaving the river high and brown and full of floating branches. " +
        N(13) + "The captain grew <strong>wary</strong>. " +
        N(14) + "She studied the current from the wheelhouse for a long time before each departure, and twice she held the ferry at the dock while a large log drifted past. " +
        N(15) + "Thanh had never seen her wait like that.</p>" +
        "<p>" + N(16) + "On the final crossing of the day, the current caught the ferry from the side just as they approached the far landing. " +
        N(17) + "The boat slid sideways toward the wooden pilings, and for a moment Thanh was sure they would strike. " +
        N(18) + "Then the captain's hands moved on the controls, making small, <strong>deft</strong> adjustments so quick and precise that he could barely follow them, and the ferry straightened and kissed the dock as gently as a car pulling into a garage. " +
        N(19) + "Thanh threw the line. " +
        N(20) + "It landed perfectly.</p>" +
        "<p>" + N(21) + "After the last car rolled off, Thanh felt strangely <strong>buoyant</strong>, as if the fear of the past few minutes had left something light and cheerful behind. " +
        N(22) + "He climbed to the wheelhouse, where the captain was writing in the log. " +
        N(23) + "He wanted to tell her it had been amazing, that he had never seen anyone handle a boat like that. " +
        N(24) + "Instead, he only said, \"Close one.\"</p>" +
        "<p>" + N(25) + "She looked up, and he thought he saw the corner of her mouth move. " +
        N(26) + "\"Good throw,\" she said. " +
        N(27) + "Then she went back to writing. " +
        N(28) + "Thanh walked home along the levee in the warm evening, turning those two words over the way he might turn over a coin, and decided they were worth more than a speech. " +
        N(29) + "The heat had broken, the dragonflies were out over the water, and for once the sticky July air felt like a <strong>reprieve</strong> rather than a burden.</p>",
      claims: [
        {
          id: "laconic",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Based on sentences 2-5, the word laconic in sentence 1 most nearly means —",
          choices: [
            { letter: "A", text: "using very few words" },
            { letter: "B", text: "easily annoyed" },
            { letter: "C", text: "known for being strict" },
            { letter: "D", text: "speaking very loudly" }
          ],
          correct: "A"
        },
        {
          id: "tentative",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which detail from sentence 10 best helps the reader understand the meaning of tentative?",
          choices: [
            { letter: "A", text: "had to be hauled back" },
            { letter: "B", text: "while drivers watched" },
            { letter: "C", text: "short, uncertain lobs" },
            { letter: "D", text: "At first his throws" }
          ],
          correct: "C"
        },
        {
          id: "kissed",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 18, the ferry kissed the dock as gently as a car pulling into a garage. This comparison mainly shows that the landing was —",
          choices: [
            { letter: "A", text: "slower than usual because of the log" },
            { letter: "B", text: "smooth and controlled despite the danger" },
            { letter: "C", text: "noisy enough to startle the drivers" },
            { letter: "D", text: "rough but still safe for the cars" }
          ],
          correct: "B"
        },
        {
          id: "deft",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written careful instead of deft in sentence 18. Compared with careful, the word deft adds a sense of —",
          choices: [
            { letter: "A", text: "worry about making a mistake" },
            { letter: "B", text: "slowness and hesitation" },
            { letter: "C", text: "anger at the strong current" },
            { letter: "D", text: "quick, skillful movement" }
          ],
          correct: "D"
        },
        {
          id: "buoyant",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word buoyant is related to buoy, a marker that floats on water. Based on this relationship and sentence 21, Thanh feels —",
          choices: [
            { letter: "A", text: "tired and heavy" },
            { letter: "B", text: "light and lifted" },
            { letter: "C", text: "seasick and dizzy" },
            { letter: "D", text: "nervous and cold" }
          ],
          correct: "B"
        },
        {
          id: "coin",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentences 6 and 28, comparing the captain's words to coins mainly suggests that her words are —",
          choices: [
            { letter: "A", text: "rare and valuable to Thanh" },
            { letter: "B", text: "hard for Thanh to hear" },
            { letter: "C", text: "often about money and pay" },
            { letter: "D", text: "cold and hard to understand" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the final paragraph (sentences 25-29), as Thanh walks home along the levee, is best described as —",
          choices: [
            { letter: "A", text: "tense and fearful" },
            { letter: "B", text: "disappointed and hurt" },
            { letter: "C", text: "sarcastic and amused" },
            { letter: "D", text: "quietly content" }
          ],
          correct: "D"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "Which statement best describes how Thanh changes over the course of the passage?",
          choices: [
            { letter: "A", text: "He grows bored with the job and plans to quit." },
            { letter: "B", text: "He learns to talk as much as the captain does." },
            { letter: "C", text: "He grows from an unsure beginner to a capable crew member." },
            { letter: "D", text: "He becomes afraid of the river after the storm." }
          ],
          correct: "C"
        }
      ]
    },

    /* 8 ───────── PAIRED · arborists ───────── */
    {
      id: "g9-dsr-c51-split-sycamore",
      family: "G9",
      title: "The Sycamore Question",
      kind: "Paired texts · 9.DSR",
      blurb: "A city notice explains why risky trees come down; a climber's notebook makes the case for one tree.",
      level: 3,
      passage:
        "<p><strong>Text 1 — When a Tree Must Come Down (Millbrook Urban Forestry Division)</strong></p>" +
        "<p>" + N(1) + "Each year, the Millbrook Urban Forestry Division inspects about four thousand trees along city streets and in public parks. " +
        N(2) + "Inspectors look for signs that a tree could fail, such as deep cracks, fungus growing near the base, large dead limbs, or a sudden new lean. " +
        N(3) + "Each tree then receives a risk rating from low to extreme, based on how likely it is to fail and what it would strike if it did. " +
        N(4) + "A weak tree leaning over an empty field may be rated low, while a similar tree beside a playground may be rated high. " +
        N(5) + "When a tree is rated extreme, the division removes it, usually within thirty days. " +
        N(6) + "The division understands that losing a large tree can be painful for a neighborhood. " +
        N(7) + "Mature trees provide shade, lower summer energy costs, and soak up rainwater that would otherwise flood storm drains. " +
        N(8) + "For that reason, the division plants two young trees for every one it removes. " +
        N(9) + "However, the division's first responsibility is public safety. " +
        N(10) + "A falling limb from a large oak can weigh more than a car, and no amount of shade is worth an injury. " +
        N(11) + "Residents who disagree with a rating may request a second inspection, including one by a certified private arborist, by contacting the division office. " +
        N(12) + "Requests are reviewed in the order they are received.</p>" +
        "<p><strong>Text 2 — From a Climber's Notebook (Mateo Linares, certified arborist)</strong></p>" +
        "<p>" + N(13) + "Tuesday. " +
        N(14) + "The big sycamore on Alder Street was rated high risk last month because of a split where its two main trunks meet, and the neighbors asked our company for a second opinion before the city takes it down. " +
        N(15) + "I tied in at nine and spent most of the morning in the crown. " +
        N(16) + "From the ground, the split looked frightening, a dark seam running down between the trunks. " +
        N(17) + "From up close, it told a different story. " +
        N(18) + "The wood on both sides was solid, with no hollow sound when I tapped it, and the tree had already grown thick ridges of new wood along the edges of the crack, the way skin builds a scar. " +
        N(19) + "I'm not saying the tree is safe as it stands. " +
        N(20) + "A strong storm could still pull those trunks apart. " +
        N(21) + "But a steel cable installed between them, high in the crown, would share the load, and pruning the heavy limbs on the street side would take away much of the weight. " +
        N(22) + "The neighbors tell me the work would cost them less than a removal. " +
        N(23) + "More important, it would keep a hundred-year-old tree standing over a street that has very few of them left. " +
        N(24) + "I'll write it up tonight and send the report to the city. " +
        N(25) + "They may still say no. " +
        N(26) + "But I'd rather they say no to a plan than to a tree nobody climbed.</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea about trees do both the city notice and the climber's notebook support?",
          choices: [
            { letter: "A", text: "Any tree with a crack should be removed right away." },
            { letter: "B", text: "Large trees are valuable but can pose real dangers." },
            { letter: "C", text: "Private arborists are more skilled than city inspectors." },
            { letter: "D", text: "Planting young trees is better than saving old ones." }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The city notice and Mateo's notebook differ mainly in that —",
          choices: [
            { letter: "A", text: "Text 1 tells a personal story, while Text 2 lists city rules" },
            { letter: "B", text: "Text 1 ignores safety, while Text 2 focuses only on safety" },
            { letter: "C", text: "Text 1 praises sycamores, while Text 2 prefers oak trees" },
            { letter: "D", text: "Text 1 explains a general policy, while Text 2 argues about one tree" }
          ],
          correct: "D"
        },
        {
          id: "process",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which sentence from Text 1 describes the step the neighbors in Text 2 are taking?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 3" }
          ],
          correct: "A"
        },
        {
          id: "combine",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "A reader combining the city notice with Mateo's notebook could best conclude that —",
          choices: [
            { letter: "A", text: "the city never changes a rating once it has been made" },
            { letter: "B", text: "trees near playgrounds are always rated extreme" },
            { letter: "C", text: "a close inspection may reveal facts that affect a tree's future" },
            { letter: "D", text: "steel cables are required for every tree with a split" }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence from Text 2 offers the strongest evidence that the split may be less dangerous than it looks?",
          choices: [
            { letter: "A", text: "Sentence 14" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from Text 2 expresses a personal preference rather than an observation of the tree?",
          choices: [
            { letter: "A", text: "Sentence 15" },
            { letter: "B", text: "Sentence 26" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which TWO sentences show that both writers value what mature trees give a community? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 23" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "voice",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Compared with the city notice, Mateo's notebook entry sounds more —",
          choices: [
            { letter: "A", text: "formal and official" },
            { letter: "B", text: "angry and accusing" },
            { letter: "C", text: "personal and hopeful" },
            { letter: "D", text: "neutral and detached" }
          ],
          correct: "C"
        }
      ]
    },

    /* 9 ───────── PAIRED · planetarium and the real sky ───────── */
    {
      id: "g9-dsr-c51-two-skies",
      family: "G9",
      title: "Two Skies",
      kind: "Paired texts · 9.DSR",
      blurb: "An article on light pollution and a student's reflection on a dome sky versus a real one.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Losing the Night</strong></p>" +
        "<p>" + N(1) + "For most of human history, anyone who stepped outside on a clear, moonless night could see the Milky Way stretched across the sky like a pale river. " +
        N(2) + "Today, scientists estimate that most people in North America live where that sight is no longer possible. " +
        N(3) + "The cause is light pollution, the glow from streetlights, parking lots, and buildings that scatters through the air and drowns out fainter stars. " +
        N(4) + "In a big city, a person might see only a few dozen stars on the clearest night, compared with thousands in a truly dark place. " +
        N(5) + "Planetariums have become one way to bring the missing sky back. " +
        N(6) + "Inside a dome, a projector can show the sky as it looked before electric lights, with every faint star restored. " +
        N(7) + "Educators say planetariums are especially valuable for city students, who may otherwise grow up without ever seeing a dark sky. " +
        N(8) + "Some planetariums now begin their shows by displaying the sky as it appears over their own city that night, then slowly \"turning off\" the city's lights so the audience can watch the hidden stars appear. " +
        N(9) + "The effect often draws gasps. " +
        N(10) + "Many visitors, one director explained, are surprised to learn that the stars have been there all along. " +
        N(11) + "Planetariums cannot fix light pollution, but they can help people understand what has been lost, and perhaps make them want it back.</p>" +
        "<p><strong>Text 2 — Two Skies (Ravi Menon, grade 9)</strong></p>" +
        "<p>" + N(12) + "Last October, my science class visited the planetarium downtown. " +
        N(13) + "The show was beautiful. " +
        N(14) + "When the presenter dimmed the city lights on the dome and the Milky Way appeared, the whole room went quiet. " +
        N(15) + "I remember thinking that I had never seen anything so perfect. " +
        N(16) + "Two weeks later, my family went camping in a state park three hours from home, where there are no towns for miles. " +
        N(17) + "After the campfire burned down, I walked away from the tents and looked up. " +
        N(18) + "It was not perfect. " +
        N(19) + "A few thin clouds drifted across the stars, my neck hurt from tilting my head back, and the mosquitoes found me right away. " +
        N(20) + "But the sky did not stop at the edge of a dome. " +
        N(21) + "It went all the way down to the trees on every side, and the cold air and the sound of the creek were part of it. " +
        N(22) + "I stood there until my mother called me back to the tent. " +
        N(23) + "The planetarium showed me what the sky should look like, and I am grateful for that, because otherwise I would not have known what to look for. " +
        N(24) + "The park showed me what it feels like to be under it. " +
        N(25) + "Those are not the same thing, and I hope more people get to experience both.</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea about planetariums do both the article and Ravi's reflection support?",
          choices: [
            { letter: "A", text: "Camping trips are the best way to learn astronomy." },
            { letter: "B", text: "City lights make planetarium shows harder to see." },
            { letter: "C", text: "Planetariums should stop showing city skies." },
            { letter: "D", text: "A planetarium can reveal stars that people rarely see." }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The article and Ravi's reflection differ mainly in that —",
          choices: [
            { letter: "A", text: "Text 1 tells a personal story, while Text 2 reports research" },
            { letter: "B", text: "Text 1 explains a problem broadly, while Text 2 compares two experiences" },
            { letter: "C", text: "Text 1 criticizes planetariums, while Text 2 defends them" },
            { letter: "D", text: "Text 1 focuses on camping, while Text 2 focuses on cities" }
          ],
          correct: "B"
        },
        {
          id: "illustrate",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Ravi's experience in sentence 14 most directly illustrates which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "C"
        },
        {
          id: "respond",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Ravi would most likely respond to sentence 11 of Text 1 by —",
          choices: [
            { letter: "A", text: "agreeing, and adding that a dome cannot replace a real dark sky" },
            { letter: "B", text: "disagreeing, because he thinks light pollution is not a problem" },
            { letter: "C", text: "agreeing, and adding that planetariums are better than real skies" },
            { letter: "D", text: "disagreeing, because his class did not enjoy the planetarium" }
          ],
          correct: "A"
        },
        {
          id: "cause",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to Text 1, how does light pollution hide stars?",
          choices: [
            { letter: "A", text: "Clouds trap the light from buildings close to the ground." },
            { letter: "B", text: "Streetlights shine directly into the eyes of stargazers." },
            { letter: "C", text: "Smoke from cities blocks starlight before it arrives." },
            { letter: "D", text: "Glow from artificial lights scatters and drowns out faint stars." }
          ],
          correct: "D"
        },
        {
          id: "river",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "In sentence 1, the author compares the Milky Way to a pale river mainly to —",
          choices: [
            { letter: "A", text: "suggest that the Milky Way is made of water vapor" },
            { letter: "B", text: "help readers picture its long, flowing band of light" },
            { letter: "C", text: "explain why early people used the stars to find rivers" },
            { letter: "D", text: "show that the Milky Way moves quickly across the sky" }
          ],
          correct: "B"
        },
        {
          id: "central2",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of Text 2?",
          choices: [
            { letter: "A", text: "Planetarium shows are too perfect to be enjoyable." },
            { letter: "B", text: "Camping is uncomfortable and not worth the long drive." },
            { letter: "C", text: "A model of the sky and the real sky offer different gifts." },
            { letter: "D", text: "Students should visit planetariums instead of parks." }
          ],
          correct: "C"
        },
        {
          id: "support",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence from Text 2 best supports the idea that the planetarium helped prepare Ravi for the real sky?",
          choices: [
            { letter: "A", text: "Sentence 23" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 19" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "A"
        }
      ]
    },

    /* 10 ───────── POETRY · ferry crossing ───────── */
    {
      id: "g9-rl-c51-seven-oclock-boat",
      family: "G9",
      title: "The Seven O'Clock Boat",
      kind: "Poetry · 9.RL",
      blurb: "A daily commuter ferry, a handful of strangers, and ten quiet minutes between two shores.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The horn says go before the sun says morning,<br>" +
        L(2) + "and we file on board with our coffee and our books:<br>" +
        L(3) + "the welder, the nurse, the boy with the tuba case,<br>" +
        L(4) + "the woman who knits the whole way over.<br>" +
        L(5) + "Below us the engine hums its one low word,<br>" +
        L(6) + "the same word every day: across, across.<br>" +
        L(7) + "The harbor lets us go like a hand unclenching.<br>" +
        L(8) + "Gulls stitch the air above the wake,<br>" +
        L(9) + "and the wake unrolls behind us, white as chalk,<br>" +
        L(10) + "a line someone drew to show where we have been.<br>" +
        L(11) + "Halfway, the island behind us and the city ahead<br>" +
        L(12) + "are both the size of my thumb.<br>" +
        L(13) + "For ten minutes I belong to neither,<br>" +
        L(14) + "only to the water and this steel floor<br>" +
        L(15) + "that rocks me like a cradle I have outgrown.<br>" +
        L(16) + "The knitter counts her stitches under her breath.<br>" +
        L(17) + "The tuba boy sleeps against the window.<br>" +
        L(18) + "Nobody talks, and nobody needs to.<br>" +
        L(19) + "Then the city lifts its towers out of the haze,<br>" +
        L(20) + "and the engine changes its word to slow, slow,<br>" +
        L(21) + "and the ropes fly, and the ramp drops with a clang<br>" +
        L(22) + "like a door being opened by someone who knows us.<br>" +
        L(23) + "We step off one by one into our separate days.<br>" +
        L(24) + "Tonight the same horn will call us back across." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"The Seven O'Clock Boat\"?",
          choices: [
            { letter: "A", text: "Travel is exciting only when it leads somewhere new." },
            { letter: "B", text: "A shared daily journey can quietly connect strangers." },
            { letter: "C", text: "City life is more meaningful than life on an island." },
            { letter: "D", text: "People who commute rarely notice the world around them." }
          ],
          correct: "B"
        },
        {
          id: "hand",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.1",
          stem: "In line 7, the phrase The harbor lets us go like a hand unclenching is an example of —",
          choices: [
            { letter: "A", text: "a simile" },
            { letter: "B", text: "alliteration" },
            { letter: "C", text: "an exaggeration" },
            { letter: "D", text: "a rhyme" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "The images of the knitter, the sleeping tuba boy, and the silent passengers in lines 16-18 mainly create a mood that is —",
          choices: [
            { letter: "A", text: "lonely and sad" },
            { letter: "B", text: "tense and watchful" },
            { letter: "C", text: "noisy and cheerful" },
            { letter: "D", text: "calm and comfortable" }
          ],
          correct: "D"
        },
        {
          id: "speaker",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "\"The Seven O'Clock Boat\" is told from the point of view of —",
          choices: [
            { letter: "A", text: "the ferry captain steering from the wheelhouse" },
            { letter: "B", text: "a tourist taking the ferry for the first time" },
            { letter: "C", text: "a passenger who rides the ferry every day" },
            { letter: "D", text: "someone watching the ferry from the city dock" }
          ],
          correct: "C"
        },
        {
          id: "repeat",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "The poet repeats across, across in line 6 and slow, slow in line 20 most likely to —",
          choices: [
            { letter: "A", text: "show that the speaker is tired of the trip" },
            { letter: "B", text: "suggest that the ferry is in danger of sinking" },
            { letter: "C", text: "imitate the steady sound of the ferry's engine" },
            { letter: "D", text: "remind passengers to stay in their seats" }
          ],
          correct: "C"
        },
        {
          id: "neither",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "In lines 11-14, the speaker says, For ten minutes I belong to neither. These lines suggest that the speaker —",
          choices: [
            { letter: "A", text: "values a brief time between two parts of the day" },
            { letter: "B", text: "is worried about arriving late for work" },
            { letter: "C", text: "wishes she could move away from the island" },
            { letter: "D", text: "does not know where the ferry is going" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.2",
          stem: "How does the ending of the poem (lines 19-24) differ from the middle (lines 11-18)?",
          choices: [
            { letter: "A", text: "It moves from a busy city to a peaceful island." },
            { letter: "B", text: "It shifts from stillness to the motion of arrival and a promised return." },
            { letter: "C", text: "It changes from a cheerful mood to an angry one." },
            { letter: "D", text: "It moves from describing people to describing only the weather." }
          ],
          correct: "B"
        },
        {
          id: "door",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In line 22, the ramp's clang is compared to a door being opened by someone who knows us. Compared with simply saying the ramp dropped, this comparison adds a feeling of —",
          choices: [
            { letter: "A", text: "danger and alarm" },
            { letter: "B", text: "boredom and routine" },
            { letter: "C", text: "secrecy and mystery" },
            { letter: "D", text: "welcome and familiarity" }
          ],
          correct: "D"
        }
      ]
    },

    /* 11 ───────── DRAMA · arborist crew ───────── */
    {
      id: "g9-rl-c51-forty-feet",
      family: "G9",
      title: "Forty Feet",
      kind: "Drama · 9.RL",
      blurb: "A new tree-care apprentice faces his first real climb, and his crew leader has a secret.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "A backyard on a cool October morning. " +
        N(2) + "A tall silver maple, older than the house beside it, fills the center of the stage, a climbing rope hanging from one high branch. " +
        N(3) + "GLORIA, the crew leader, checks the buckles on a harness while TOMASZ coils a line beside a pile of cut branches. " +
        N(4) + "ELI, nineteen, in a borrowed helmet a size too big, stares up at the tree with his hands in his pockets.</em></p>" +
        "<p><strong>GLORIA:</strong> " + N(5) + "Saddle's ready. " + N(6) + "That dead limb at forty feet is all yours today, Eli.</p>" +
        "<p><strong>ELI:</strong> " + N(7) + "Great. " + N(8) + "That's great. " +
        N(9) + "<em>(Aside, to the audience.)</em> Forty feet. " +
        N(10) + "On my application I wrote that heights don't bother me, which was completely true, as long as the heights were on a screen and I was sitting on a couch.</p>" +
        "<p><strong>TOMASZ:</strong> " + N(11) + "You've done the practice tree a dozen times. " + N(12) + "This is the same thing, just taller, with better scenery and fewer excuses.</p>" +
        "<p><strong>ELI:</strong> " + N(13) + "Taller is kind of the whole point, Tomasz.</p>" +
        "<p><strong>GLORIA:</strong> " + N(14) + "<em>(Handing him the saddle.)</em> Tell me your system.</p>" +
        "<p><strong>ELI:</strong> " + N(15) + "<em>(Clipping in, slowly.)</em> Climbing line to the hitch, hitch to the saddle. " +
        N(16) + "Lanyard as my second tie-in once I reach the work spot. " +
        N(17) + "Check everything twice before I leave the ground.</p>" +
        "<p><strong>GLORIA:</strong> " + N(18) + "And if something feels wrong?</p>" +
        "<p><strong>ELI:</strong> " + N(19) + "I stop and call down.</p>" +
        "<p><strong>GLORIA:</strong> " + N(20) + "Not if something looks wrong. " + N(21) + "If it feels wrong. " +
        N(22) + "Your stomach is part of your equipment.</p>" +
        "<p><em>" + N(23) + "ELI begins to climb while the others watch. " +
        N(24) + "Halfway up, about twenty feet from the ground, he freezes, gripping the rope with both hands and pressing his forehead against the bark.</em></p>" +
        "<p><strong>TOMASZ:</strong> " + N(25) + "<em>(Quietly, to Gloria.)</em> Should I call him down?</p>" +
        "<p><strong>GLORIA:</strong> " + N(26) + "Give him a minute. " +
        N(27) + "<em>(Calling up, calmly.)</em> Eli, tell me what you see from there.</p>" +
        "<p><strong>ELI:</strong> " + N(28) + "<em>(After a pause.)</em> A blue jay's nest. " + N(29) + "Empty. " +
        N(30) + "And the roof of the school across the street. " +
        N(31) + "<em>(A shaky laugh.)</em> Somebody should tell them their gym roof needs work.</p>" +
        "<p><strong>GLORIA:</strong> " + N(32) + "Good. " +
        N(33) + "Keep looking around until your hands believe what your harness already knows.</p>" +
        "<p><em>" + N(34) + "ELI breathes, loosens his grip, and climbs again. " +
        N(35) + "He reaches the dead limb, clips his lanyard around the trunk, and lets out a long breath that the audience can hear.</em></p>" +
        "<p><strong>ELI:</strong> " + N(36) + "Tied in twice!</p>" +
        "<p><strong>GLORIA:</strong> " + N(37) + "<em>(To Tomasz, low.)</em> I froze in that exact spot my first year. " +
        N(38) + "Same tree, actually. " +
        N(39) + "The owner called us back eleven years later, and I asked for the job myself.</p>" +
        "<p><strong>TOMASZ:</strong> " + N(40) + "You never told him that.</p>" +
        "<p><strong>GLORIA:</strong> " + N(41) + "<em>(Smiling, still watching Eli.)</em> He doesn't need to hear it yet. " +
        N(42) + "Right now he needs to come down and tell me about it himself.</p>",
      claims: [
        {
          id: "aside",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The playwright uses Eli's aside in sentences 9 and 10 mainly to —",
          choices: [
            { letter: "A", text: "show that Eli is angry at Gloria for choosing him" },
            { letter: "B", text: "explain how a climbing saddle is put together" },
            { letter: "C", text: "reveal a fear Eli has hidden from his crew" },
            { letter: "D", text: "suggest that Tomasz wrote Eli's application" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "Gloria's words to Tomasz in sentences 37-39 create dramatic irony because —",
          choices: [
            { letter: "A", text: "the audience learns she once froze in the same spot, which Eli does not know" },
            { letter: "B", text: "Eli overhears her and becomes too embarrassed to finish the job" },
            { letter: "C", text: "Tomasz already knew the story and had told it to Eli earlier" },
            { letter: "D", text: "the owner of the tree is secretly listening from the house" }
          ],
          correct: "A"
        },
        {
          id: "leader",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Gloria as a crew leader in this scene?",
          choices: [
            { letter: "A", text: "She is impatient and wants the job finished quickly." },
            { letter: "B", text: "She is careless about safety checks and equipment." },
            { letter: "C", text: "She is nervous and relies on Tomasz to make choices." },
            { letter: "D", text: "She is patient and guides Eli with calm questions." }
          ],
          correct: "D"
        },
        {
          id: "freeze",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction in sentence 24, in which Eli freezes and grips the rope with both hands, mainly reveals that Eli —",
          choices: [
            { letter: "A", text: "has noticed a problem with the dead limb" },
            { letter: "B", text: "is overcome by the fear he admitted in his aside" },
            { letter: "C", text: "is waiting for Tomasz to send up his tools" },
            { letter: "D", text: "wants to show off for the people watching" }
          ],
          correct: "B"
        },
        {
          id: "see",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Gloria asks Eli to tell her what he sees in sentence 27 most likely to —",
          choices: [
            { letter: "A", text: "turn his attention away from his fear" },
            { letter: "B", text: "test whether he can spot the dead limb" },
            { letter: "C", text: "find out if the school roof is damaged" },
            { letter: "D", text: "keep him in the tree for a longer time" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the climb in \"Forty Feet\" best support?",
          choices: [
            { letter: "A", text: "Fear disappears once a person has enough training." },
            { letter: "B", text: "Honesty on an application matters more than skill." },
            { letter: "C", text: "Courage often means going on with support despite fear." },
            { letter: "D", text: "Experienced workers should do the dangerous jobs." }
          ],
          correct: "C"
        },
        {
          id: "stomach",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 22, Gloria says, Your stomach is part of your equipment. She most nearly means that —",
          choices: [
            { letter: "A", text: "Eli should eat a good breakfast before climbing" },
            { letter: "B", text: "Eli's gut feelings are a safety tool he should trust" },
            { letter: "C", text: "the harness must be fastened tightly around the waist" },
            { letter: "D", text: "climbers should ignore feelings that slow them down" }
          ],
          correct: "B"
        },
        {
          id: "yet",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "In sentences 41 and 42, Gloria's private explanation to Tomasz suggests that she wants Eli to —",
          choices: [
            { letter: "A", text: "quit the crew before he gets hurt" },
            { letter: "B", text: "ask Tomasz for help on the next job" },
            { letter: "C", text: "learn the history of the silver maple" },
            { letter: "D", text: "take ownership of his own success first" }
          ],
          correct: "D"
        }
      ]
    },

    /* 12 ───────── FUNCTIONAL · ferry rider guide ───────── */
    {
      id: "g9-ri-c51-ferry-guide",
      family: "G9",
      title: "Ferry Rider Guide",
      kind: "Functional text · 9.RI",
      blurb: "Schedules, fares, boarding rules and weather policies for a harbor ferry.",
      level: 1,
      passage:
        "<p><strong>Cape Varrow to Linden Harbor Ferry: Rider Information</strong></p>" +
        "<p><strong>Schedule.</strong> " + N(1) + "From April through October, ferries leave Cape Varrow every hour on the hour from 6:00 a.m. to 9:00 p.m. " +
        N(2) + "Return trips leave Linden Harbor every hour at half past, from 6:30 a.m. to 9:30 p.m. " +
        N(3) + "The crossing takes about 25 minutes. " +
        N(4) + "From November through March, the first and last trips of each day are canceled, so service from Cape Varrow runs from 7:00 a.m. to 8:00 p.m.</p>" +
        "<p><strong>Tickets.</strong> " + N(5) + "Walk-on passengers pay $4 each way. " +
        N(6) + "Students with a valid school ID and riders over 65 pay $2 each way. " +
        N(7) + "Vehicles pay $18 each way, which includes the driver; any other passengers in the vehicle pay the walk-on fare. " +
        N(8) + "Tickets may be bought at the terminal window or with the Varrow Ferry app. " +
        N(9) + "Tickets are not sold on board.</p>" +
        "<p><strong>Boarding.</strong> " + N(10) + "Vehicles must be in the boarding lane at least 15 minutes before departure. " +
        N(11) + "Walk-on passengers may board until 5 minutes before departure, when the gate closes. " +
        N(12) + "Vehicles board first and are directed by the deck crew, so please follow all hand signals and set your parking brake. " +
        N(13) + "Once the ferry leaves the dock, passengers may leave their vehicles and go to the upper deck, but they must return to their vehicles when the arrival horn sounds.</p>" +
        "<p><strong>Bicycles and Pets.</strong> " + N(14) + "Bicycles ride free and are stored in the rack at the front of the car deck. " +
        N(15) + "Pets are welcome on the outdoor upper deck if they are leashed or in a carrier. " +
        N(16) + "Only service animals are allowed in the indoor cabin.</p>" +
        "<p><strong>Accessibility.</strong> " + N(17) + "The indoor cabin can be reached by an elevator on the car deck. " +
        N(18) + "Riders who need help boarding should tell the ticket window when they arrive, and a crew member will assist them.</p>" +
        "<p><strong>Weather.</strong> " + N(19) + "Trips may be delayed or canceled when winds are stronger than 35 miles per hour or when fog limits how far the captain can see. " +
        N(20) + "Whenever possible, updates are posted on the app and on the terminal message board at least 30 minutes before a canceled trip. " +
        N(21) + "Tickets for a canceled trip may be used on any later trip within 30 days.</p>" +
        "<p><strong>Safety.</strong> " + N(22) + "Life jackets are stored under the benches in the indoor cabin and in marked lockers on the upper deck. " +
        N(23) + "In an emergency, stay calm, listen to the crew, and move to the muster station shown on the map posted beside each stairway, where crew members will count passengers and give instructions.</p>" +
        "<p><strong>Lost and Found.</strong> " + N(24) + "Items left on board are taken to the Cape Varrow terminal office at the end of each day. " +
        N(25) + "They are held for 60 days and may be claimed with a description of the item.</p>",
      claims: [
        {
          id: "earliest",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "A student with a school ID walks on in January and wants the earliest ferry from Cape Varrow. When does it leave, and what is the fare?",
          choices: [
            { letter: "A", text: "7:00 a.m. for $2" },
            { letter: "B", text: "6:00 a.m. for $2" },
            { letter: "C", text: "7:00 a.m. for $4" },
            { letter: "D", text: "6:30 a.m. for $4" }
          ],
          correct: "A"
        },
        {
          id: "onboard",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The writer places sentence 9 directly after the ways to buy tickets in sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "warn riders that the app is often unreliable" },
            { letter: "B", text: "explain why student fares cost less than others" },
            { letter: "C", text: "make clear that riders must buy tickets before boarding" },
            { letter: "D", text: "suggest that crew members collect fares on deck" }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the Cape Varrow ferry information mainly organized?",
          choices: [
            { letter: "A", text: "as a story about one rider's trip, told in time order" },
            { letter: "B", text: "in sections under headings, each covering one topic" },
            { letter: "C", text: "as a comparison of two different ferry companies" },
            { letter: "D", text: "as a problem followed by several possible solutions" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "The main purpose of the Cape Varrow rider information is to —",
          choices: [
            { letter: "A", text: "persuade drivers to leave their cars at home" },
            { letter: "B", text: "describe the history of the harbor ferry line" },
            { letter: "C", text: "entertain riders during the 25-minute crossing" },
            { letter: "D", text: "give riders the rules and details they need for a trip" }
          ],
          correct: "D"
        },
        {
          id: "refund",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that riders whose trip is canceled for weather will not lose the value of their ticket?",
          choices: [
            { letter: "A", text: "Sentence 19" },
            { letter: "B", text: "Sentence 20" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "D"
        },
        {
          id: "direction",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence gives riders a direction they must follow rather than a fact about the ferry service?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "B"
        },
        {
          id: "muster",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Based on sentence 23, a muster station is most likely —",
          choices: [
            { letter: "A", text: "a place where passengers gather to be counted" },
            { letter: "B", text: "a locker where life jackets are kept" },
            { letter: "C", text: "the office where lost items are held" },
            { letter: "D", text: "the window where tickets are sold" }
          ],
          correct: "A"
        },
        {
          id: "fare",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "A driver and one passenger in the same car ride from Cape Varrow to Linden Harbor and back on the same day. Neither is a student or over 65. What do they pay in all?",
          choices: [
            { letter: "A", text: "$36" },
            { letter: "B", text: "$22" },
            { letter: "C", text: "$44" },
            { letter: "D", text: "$52" }
          ],
          correct: "C"
        }
      ]
    },

    /* 13 ───────── ARGUMENT · weather balloon launches ───────── */
    {
      id: "g9-ri-c51-let-them-launch",
      family: "G9",
      title: "Let Students Launch",
      kind: "Argument · 9.RI",
      blurb: "A physics teacher argues that every high school should send a weather balloon to the edge of space.",
      level: 3,
      passage:
        "<p>" + N(1) + "Most high school students will spend four years learning about the atmosphere without ever touching it. " +
        N(2) + "They will memorize the layers of the sky from a diagram, label the troposphere and stratosphere on a test, and forget both by summer. " +
        N(3) + "There is a better way, and it costs less than a single classroom set of new textbooks. " +
        N(4) + "Every high school with a science program should launch at least one high-altitude weather balloon each year.</p>" +
        "<p>" + N(5) + "The first reason is that a balloon launch turns abstract ideas into real data. " +
        N(6) + "When students build a payload, send it twenty miles up, and recover their own temperature readings, the drop in temperature through the lower atmosphere is no longer a line on a chart. " +
        N(7) + "It is something they measured. " +
        N(8) + "At Ridgeline High, where I have taught physics for nine years, students who took part in our launch scored an average of eleven points higher on the atmosphere unit test than students in the same course the year before. " +
        N(9) + "That is a single school, and other factors may have played a part, but the difference was hard to ignore.</p>" +
        "<p>" + N(10) + "The second reason is that a launch demands the kind of teamwork that real science requires. " +
        N(11) + "No single student can do it all. " +
        N(12) + "Someone must calculate how much helium to use, someone must predict where the payload will land, someone must design the parachute, and someone must contact local aviation officials to give notice of the flight. " +
        N(13) + "Students who would never volunteer to speak in class discover that the team cannot launch without them.</p>" +
        "<p>" + N(14) + "Critics raise fair concerns. " +
        N(15) + "Some argue that launches are too expensive for schools with tight budgets. " +
        N(16) + "A basic kit, however, including the balloon, parachute, tracker, and helium, can cost under six hundred dollars, and many local businesses and science groups offer small grants for exactly this kind of project. " +
        N(17) + "Others worry about safety and regulations. " +
        N(18) + "Small, light payloads fall under simpler aviation rules than large balloons do, and a responsible teacher can learn and follow those rules as carefully as the rules for a chemistry lab. " +
        N(19) + "A third concern is litter, since every balloon eventually bursts and falls to Earth. " +
        N(20) + "This one deserves the most attention. " +
        N(21) + "Schools should track and recover every payload, use latex balloons that break down over time, and never release a launch they cannot follow.</p>" +
        "<p>" + N(22) + "None of these concerns outweighs what students gain. " +
        N(23) + "I have watched a quiet sophomore read a GPS coordinate aloud from the back seat of a moving van, then run across a muddy field shouting that she had found it. " +
        N(24) + "I have watched a class that complained about every lab argue for an hour over whether the camera should point up or down. " +
        N(25) + "A diagram cannot do that. " +
        N(26) + "A balloon can.</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which sentence best states the teacher's central claim about weather balloon launches?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: "B"
        },
        {
          id: "weigh",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which statement best evaluates the test-score evidence in sentence 8?",
          choices: [
            { letter: "A", text: "It proves that launches raise scores at every school." },
            { letter: "B", text: "It is unrelated to the claim the author is making." },
            { letter: "C", text: "It supports the claim but is limited, as sentence 9 admits." },
            { letter: "D", text: "It is an opinion that the author presents as a fact." }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the teacher's argument is an opinion rather than a statement of fact?",
          choices: [
            { letter: "A", text: "Sentence 16" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How are sentences 14-21 of the teacher's argument mainly organized?",
          choices: [
            { letter: "A", text: "by stating objections and answering each one" },
            { letter: "B", text: "by listing the steps of a launch in time order" },
            { letter: "C", text: "by comparing balloons with satellites and drones" },
            { letter: "D", text: "by describing a problem and its single cause" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "The author ends with the two short sentences 25 and 26 mainly to —",
          choices: [
            { letter: "A", text: "sharpen the contrast between diagrams and real launches" },
            { letter: "B", text: "admit that balloon launches may not work for every class" },
            { letter: "C", text: "introduce a new reason that has not been discussed yet" },
            { letter: "D", text: "summarize the rules teachers must follow for launches" }
          ],
          correct: "A"
        },
        {
          id: "litter",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the author, how should schools respond to the concern about litter?",
          choices: [
            { letter: "A", text: "by launching balloons only over large bodies of water" },
            { letter: "B", text: "by asking local businesses to pay for cleanup crews" },
            { letter: "C", text: "by using smaller payloads that weigh almost nothing" },
            { letter: "D", text: "by recovering payloads and using balloons that break down" }
          ],
          correct: "D"
        },
        {
          id: "connote",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In sentence 2, the words memorize, label, and forget both by summer give the author's description of ordinary lessons a connotation that is —",
          choices: [
            { letter: "A", text: "admiring, praising students' strong memories" },
            { letter: "B", text: "neutral, simply listing classroom activities" },
            { letter: "C", text: "negative, suggesting learning that does not last" },
            { letter: "D", text: "humorous, poking fun at the science teachers" }
          ],
          correct: "C"
        },
        {
          id: "develop",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "How do sentences 10-13 develop the teacher's second reason?",
          choices: [
            { letter: "A", text: "They tell the history of weather balloon launches in schools." },
            { letter: "B", text: "They state the reason, list jobs, and show an effect on students." },
            { letter: "C", text: "They compare the costs of several different balloon kits." },
            { letter: "D", text: "They present a critic's view and then reject it." }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
