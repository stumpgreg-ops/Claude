/* SOL Labyrinth — v81 content: Grade 10 LONG passages (Virginia G10, 390–520 words).
 * Thirteen original packs, eight questions each, drawn from an art museum, student
 * filmmaking, railroads and trains, and early aviation. No real published text and no
 * real people. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── LONG · Literary (level 2) ───────────────────────── */
    {
      id: "g10-rl-c81-buried-hand",
      family: "G10",
      title: "The Buried Hand",
      kind: "Literary · 10.RL",
      blurb: "A student copying a painting in Gallery 14 cannot get the hands right, until a quiet guard brings out a flashlight.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every Saturday at ten, Ifeoma set up her folding stool in Gallery 14, directly across from a painting of a woman shelling peas beside a window. " +
        N(2) + "The museum allowed students to copy works in pencil as long as they stayed behind the brass rail and signed the clipboard at the guard's desk. " +
        N(3) + "Ifeoma had signed it eleven times. " +
        N(4) + "She had eleven drawings of the woman, and in every one of them the hands were wrong.</p>" +
        "<p>" + N(5) + "The face she could manage. " +
        N(6) + "The window, with its pale square of light, came out nearly right by the third week. " +
        N(7) + "But the hands, one holding a pod open and the other dropping peas into a bowl, looked in her drawings like gloves stuffed with sand. " +
        N(8) + "She erased them so often that the paper in that corner had gone soft and gray, like a sweater washed too many times.</p>" +
        "<p>" + N(9) + "The guard in Gallery 14, Mr. Lindqvist, rarely spoke to visitors except to say, \"Behind the rail, please.\" " +
        N(10) + "On the twelfth Saturday, as Ifeoma pressed her eraser into the paper hard enough to tear it, he walked over and stood beside her stool. " +
        N(11) + "\"You are fighting it,\" he said. " +
        N(12) + "Ifeoma felt her face go hot. " +
        N(13) + "\"It's supposed to look like hers,\" she said, nodding at the painting, \"and mine looks like I've never seen a hand.\"</p>" +
        "<p>" + N(14) + "Mr. Lindqvist did not answer. " +
        N(15) + "Instead he took a small flashlight from his belt, switched it on, and held it flat against the wall so the beam skimmed sideways across the canvas. " +
        N(16) + "In that raking light, the surface of the painting changed. " +
        N(17) + "Ridges appeared around the woman's fingers, faint outlines of other fingers set at different angles, buried under the final layer of paint. " +
        N(18) + "\"Three times,\" he said. \"She painted that hand three times before she let it stay. The conservators found it with an X-ray, but you can see it with a flashlight if you know where to look.\" " +
        N(19) + "He switched the light off. \"Nobody hangs the first try.\"</p>" +
        "<p>" + N(20) + "Ifeoma stared at the painting for a long time after he went back to his desk. " +
        N(21) + "She had always thought of the woman by the window as something that had simply arrived, finished, the way a photograph arrives. " +
        N(22) + "Now she could not stop seeing the buried fingers, and behind them the painter leaning in, frowning, scraping, trying again.</p>" +
        "<p>" + N(23) + "She turned to a clean page. " +
        N(24) + "This time she drew the hand lightly, three times, one outline over another, and did not erase any of them. " +
        N(25) + "Then she chose the one that looked most alive and darkened it. " +
        N(26) + "It was still not as good as the painter's. " +
        N(27) + "But when she signed the clipboard on her way out, she wrote in the column marked Purpose of Visit not \"copying\" but \"practice,\" and Mr. Lindqvist, reading it upside down, nodded once.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme does Ifeoma's experience in Gallery 14 best develop?",
          choices: [
            { letter: "A", text: "Even finished masterpieces hold a record of repeated attempts." },
            { letter: "B", text: "Museums should give young artists far more freedom to work alone." },
            { letter: "C", text: "True talent usually shows itself on the very first try." },
            { letter: "D", text: "Strict rules in public places protect what people value." }
          ],
          correct: "A"
        },
        {
          id: "guard",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 9 and 19 together characterize Mr. Lindqvist as someone who —",
          choices: [
            { letter: "A", text: "resents students who spend hours in his gallery" },
            { letter: "B", text: "wishes he had become a painter himself" },
            { letter: "C", text: "says little but chooses his words with care" },
            { letter: "D", text: "enforces museum rules more strictly than others" }
          ],
          correct: "C"
        },
        {
          id: "gloves",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 7, comparing the drawn hands to gloves stuffed with sand mainly suggests that they look —",
          choices: [
            { letter: "A", text: "smaller than the hands in the painting" },
            { letter: "B", text: "heavy, stiff, and without life" },
            { letter: "C", text: "dirty from too much erasing" },
            { letter: "D", text: "carefully shaded but badly placed" }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Mr. Lindqvist's demonstration with the flashlight functions in the plot as —",
          choices: [
            { letter: "A", text: "a warning that Ifeoma is standing much too close to the art on display" },
            { letter: "B", text: "a reminder of the rules Ifeoma agreed to on the clipboard" },
            { letter: "C", text: "a distraction that delays Ifeoma from finishing her copy" },
            { letter: "D", text: "the event that changes how Ifeoma understands the painting" }
          ],
          correct: "D"
        },
        {
          id: "raking",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "Based on sentences 15 and 16, raking light is light that —",
          choices: [
            { letter: "A", text: "flashes on and off quickly" },
            { letter: "B", text: "strikes a surface from a low, sideways angle" },
            { letter: "C", text: "shines straight into a viewer's eyes" },
            { letter: "D", text: "comes from a window high above the gallery floor" }
          ],
          correct: "B"
        },
        {
          id: "eleven",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author includes the detail in sentence 3 that Ifeoma had signed the clipboard eleven times mainly to —",
          choices: [
            { letter: "A", text: "show how long her frustration has lasted before the turning point" },
            { letter: "B", text: "suggest that the museum keeps careful records of its visitors" },
            { letter: "C", text: "explain why Mr. Lindqvist already knows her by name" },
            { letter: "D", text: "hint that she will soon lose her permission to draw in that gallery" }
          ],
          correct: "A"
        },
        {
          id: "buried",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "The image in sentence 22 of the painter leaning in, frowning, scraping, trying again mainly helps the reader understand that Ifeoma now —",
          choices: [
            { letter: "A", text: "doubts that the painting is really very skilled" },
            { letter: "B", text: "wants to become a museum conservator instead" },
            { letter: "C", text: "feels angry that no one at the museum told her this sooner" },
            { letter: "D", text: "pictures the painter as someone who struggled too" }
          ],
          correct: "D"
        },
        {
          id: "practice",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Why does Ifeoma most likely write practice instead of copying on the clipboard at the end of the story?",
          choices: [
            { letter: "A", text: "The museum has changed the rules for student visitors." },
            { letter: "B", text: "She wants Mr. Lindqvist to think she is a serious, talented artist." },
            { letter: "C", text: "She now sees her drawing as part of a process, not a failure." },
            { letter: "D", text: "She has decided to stop coming to Gallery 14 on Saturdays." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · Literary (level 3) ───────────────────────── */
    {
      id: "g10-rl-c81-coverage",
      family: "G10",
      title: "Coverage",
      kind: "Literary · 10.RL",
      blurb: "Hana storyboards a quiet, sad film about her family's laundromat, but the laundromat refuses to be quiet.",
      level: 3,
      passage:
        "<p>" + N(1) + "Hana Mwangi had planned every shot of her documentary before she owned a single frame of it. " +
        N(2) + "The assignment for Ms. Bertrand's film class was three minutes on \"a place that is changing,\" and Hana had chosen the Suds &amp; Spin on Delancey Avenue, the laundromat her parents had run for nineteen years and would close at the end of the month. " +
        N(3) + "Her storyboard was twelve careful squares of gray pencil: an empty row of dryers, a close-up of the faded hours sign, her mother's hands folding a towel in silence, and a final slow shot of the door locking.</p>" +
        "<p>" + N(4) + "It was going to be beautiful, and it was going to be sad, and it was going to make Ms. Bertrand quiet for a full minute after it ended.</p>" +
        "<p>" + N(5) + "The laundromat did not cooperate. " +
        N(6) + "That Saturday, Hana set her borrowed camera on its tripod and waited for the row of dryers to go still, but Mr. Castellano, the shoe repairman, wandered into the frame to ask whether the change machine was eating quarters again. " +
        N(7) + "When she lined up the close-up of the hours sign, two little boys pressed their faces against the glass from outside and made fish lips at the lens. " +
        N(8) + "And her mother, who was supposed to fold in silence, would not stop talking: to a nurse coming off a night shift, to a college student who could not work the bleach dispenser, to an old woman named Mrs. Adeyemi who came every Saturday less for the machines than for the chair by the window.</p>" +
        "<p>" + N(9) + "\"Mom, you have to be quiet,\" Hana said finally. \"It's ruining the shot.\" " +
        N(10) + "Her mother laughed and kept folding. " +
        N(11) + "\"Then it is a strange shot,\" she said, \"because this is what the place sounds like.\"</p>" +
        "<p>" + N(12) + "Hana recorded everything anyway, mostly out of stubbornness, and partly because Ms. Bertrand repeated one rule so often that the class chanted it back at her: get coverage. " +
        N(13) + "Shoot more than you think you need. " +
        N(14) + "The edit will tell you what the film is.</p>" +
        "<p>" + N(15) + "The edit told her something she did not want to hear. " +
        N(16) + "The next week, Hana dropped her twelve planned shots onto the timeline and played them in order. " +
        N(17) + "They were technically clean, and they were dead. " +
        N(18) + "The empty dryers looked like any dryers anywhere. " +
        N(19) + "The locked door could have belonged to a closed bank. " +
        N(20) + "Then, almost without deciding, she dragged in a ruined clip: Mrs. Adeyemi at the window, telling Hana's mother that her husband had proposed to her across a folding table in a laundromat long ago, \"right in the middle of the rinse cycle,\" while the boys outside fogged the glass.</p>" +
        "<p>" + N(21) + "Hana watched the clip four times. " +
        N(22) + "Then she started cutting the beautiful shots out.</p>" +
        "<p>" + N(23) + "The film she turned in kept only one square from her storyboard, the door locking, and by the time it arrived the audience had heard so many voices that the silence after the click felt enormous. " +
        N(24) + "Ms. Bertrand was quiet for a full minute after it ended. " +
        N(25) + "Hana had gotten exactly what she planned, and none of it the way she had planned it.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is developed through Hana's work on her laundromat documentary?",
          choices: [
            { letter: "A", text: "Careful preparation is the surest path to strong art." },
            { letter: "B", text: "A place's true character lives in the people who fill it." },
            { letter: "C", text: "Family businesses rarely survive changes in a neighborhood." },
            { letter: "D", text: "Teachers' rules matter less than a student's own instincts." }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Sentence 25 is ironic mainly because —",
          choices: [
            { letter: "A", text: "Ms. Bertrand dislikes films that contain silence" },
            { letter: "B", text: "Hana never actually filmed the door locking" },
            { letter: "C", text: "the laundromat manages to stay open after the film is finished" },
            { letter: "D", text: "the reaction Hana wanted came from footage she resisted" }
          ],
          correct: "D"
        },
        {
          id: "hana",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 1 through 4 characterize Hana at the start of the story as —",
          choices: [
            { letter: "A", text: "confident in her vision and eager to control it" },
            { letter: "B", text: "nervous about using borrowed equipment in public" },
            { letter: "C", text: "unsure which place she should film" },
            { letter: "D", text: "embarrassed by her parents' business" }
          ],
          correct: "A"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The conflict in sentences 5 through 11 is best described as a struggle between —",
          choices: [
            { letter: "A", text: "Hana and Ms. Bertrand over the rules of the film assignment" },
            { letter: "B", text: "Hana's parents and their neighbor Mr. Castellano" },
            { letter: "C", text: "Hana's quiet plan and the lively life of the laundromat" },
            { letter: "D", text: "the customers and the broken change machine" }
          ],
          correct: "C"
        },
        {
          id: "alone",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The author sets sentence 4 apart as its own paragraph mainly to —",
          choices: [
            { letter: "A", text: "show that Hana has already finished editing the whole film" },
            { letter: "B", text: "spotlight an expectation that the ending will echo" },
            { letter: "C", text: "suggest that Ms. Bertrand is a harsh grader" },
            { letter: "D", text: "explain why the laundromat is going to close" }
          ],
          correct: "B"
        },
        {
          id: "dead",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 17, calling the planned shots technically clean but dead suggests that they —",
          choices: [
            { letter: "A", text: "were damaged when the files were copied to the computer" },
            { letter: "B", text: "were filmed too late in the evening" },
            { letter: "C", text: "needed sound effects to be complete" },
            { letter: "D", text: "showed the place without what made it alive" }
          ],
          correct: "D"
        },
        {
          id: "rule",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "Ms. Bertrand's rule in sentences 12 through 14 matters to the plot mainly because it —",
          choices: [
            { letter: "A", text: "explains why Hana has the footage that reshapes her film" },
            { letter: "B", text: "shows that Hana strongly disagrees with her teacher's methods" },
            { letter: "C", text: "proves that Hana's storyboard was badly planned" },
            { letter: "D", text: "gives Hana a reason to quit the film class" }
          ],
          correct: "A"
        },
        {
          id: "silence",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 23, the silence after the click feels enormous to the audience mainly because —",
          choices: [
            { letter: "A", text: "the camera's microphone stopped working at the end" },
            { letter: "B", text: "Hana's mother finally stops talking in that scene" },
            { letter: "C", text: "it follows a film full of the laundromat's voices" },
            { letter: "D", text: "the classroom speakers were turned down too low" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · Literary (level 1) ───────────────────────── */
    {
      id: "g10-rl-c81-car-four",
      family: "G10",
      title: "Car 4, Midnight",
      kind: "Literary · 10.RL",
      blurb: "Rafael's first overnight train ride alone stops dead in the dark two miles short of nowhere.",
      level: 1,
      passage:
        "<p>" + N(1) + "Rafael Ortiz had ridden trains before, but always in daylight and always with his mother beside him. " +
        N(2) + "This time he was fifteen, alone, and holding a ticket for the overnight train to Cedar Falls, where his grandmother would meet him at seven in the morning. " +
        N(3) + "His mother had written the car number on his hand in blue pen, as if he were six. " +
        N(4) + "He had rubbed it off on the platform, then spent ten nervous minutes searching his ticket to find the number again.</p>" +
        "<p>" + N(5) + "His seat was in Car 4, beside a window that showed mostly his own reflection. " +
        N(6) + "Outside, the city lights thinned into scattered farmhouse windows and then into nothing at all. " +
        N(7) + "The train rocked gently, and the wheels made a steady double knock on the rails, like someone patiently tapping on a door. " +
        N(8) + "Rafael could not sleep. " +
        N(9) + "He kept his backpack on his lap and checked his phone every few minutes, though there was no signal.</p>" +
        "<p>" + N(10) + "Around midnight the train slowed, then stopped completely. " +
        N(11) + "For a long while nothing happened. " +
        N(12) + "Then the conductor, a broad-shouldered woman whose name tag said M. Odhiambo, came down the aisle speaking softly to the passengers who were awake. " +
        N(13) + "\"A tree came down across the tracks about two miles ahead,\" she said. " +
        N(14) + "\"A crew is clearing it now. We'll lose about two hours.\"</p>" +
        "<p>" + N(15) + "Rafael's stomach dropped. " +
        N(16) + "\"My grandmother's meeting me at seven,\" he said. \"She'll think something happened.\" " +
        N(17) + "Ms. Odhiambo crouched beside his seat so they were eye to eye. " +
        N(18) + "\"Something did happen,\" she said. \"A tree fell. That's all.\" " +
        N(19) + "She pointed toward the front of the train. " +
        N(20) + "\"The café car has a signal booster. Go send her a message, then get some cocoa. Nobody ever moved a tree faster by worrying about it.\"</p>" +
        "<p>" + N(21) + "In the café car, Rafael sent his grandmother a short text and bought a cup of cocoa he did not really want. " +
        N(22) + "An older man in a flannel shirt was playing cards alone at a table, and he nodded at the empty seat across from him. " +
        N(23) + "They played rummy for an hour while, somewhere ahead in the dark, chainsaws whined and stopped. " +
        N(24) + "When the train finally lurched forward, the man swept up the cards and said, \"There it is. She always gets there.\"</p>" +
        "<p>" + N(25) + "Rafael slept after that, his head against the cool window. " +
        N(26) + "When he woke, the sky was pink and the train was gliding into Cedar Falls two hours late. " +
        N(27) + "His grandmother was standing on the platform in her green coat, holding a thermos and a folded newspaper. " +
        N(28) + "\"I got your message,\" she said, hugging him. \"So I brought something to read. The train always gets here, you know. It just takes the long way sometimes.\"</p>",
      claims: [
        {
          id: "rafael",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 3 and 4 show that at the start of the trip Rafael is —",
          choices: [
            { letter: "A", text: "angry at his mother for sending him away alone" },
            { letter: "B", text: "careless about the details of his ticket and seat" },
            { letter: "C", text: "eager to seem grown-up but still nervous" },
            { letter: "D", text: "excited to explore the train by himself" }
          ],
          correct: "C"
        },
        {
          id: "stop",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "According to the story, what causes the train to stop around midnight?",
          choices: [
            { letter: "A", text: "A fallen tree is blocking the tracks ahead." },
            { letter: "B", text: "The crew must wait for a signal to change." },
            { letter: "C", text: "A storm has knocked out power to the train." },
            { letter: "D", text: "Passengers must change trains at a junction." }
          ],
          correct: "A"
        },
        {
          id: "knock",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 7, the sound of the wheels is compared to someone patiently tapping on a door to suggest that the sound is —",
          choices: [
            { letter: "A", text: "loud enough to wake the sleeping passengers" },
            { letter: "B", text: "a warning that something is wrong ahead" },
            { letter: "C", text: "growing faster as the train speeds up" },
            { letter: "D", text: "steady and calm, repeating without hurry" }
          ],
          correct: "D"
        },
        {
          id: "calm",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Which sentence best shows Ms. Odhiambo trying to make Rafael feel less alone with his worry?",
          choices: [
            { letter: "A", text: "Then the conductor, a broad-shouldered woman whose name tag said M. Odhiambo, came down the aisle." },
            { letter: "B", text: "Ms. Odhiambo crouched beside his seat so they were eye to eye." },
            { letter: "C", text: "\"A crew is clearing it now. We'll lose about two hours.\"" },
            { letter: "D", text: "She pointed toward the front of the train." }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme do the conductor, the card player, and the grandmother all help develop?",
          choices: [
            { letter: "A", text: "Young people should not travel long distances alone." },
            { letter: "B", text: "Strangers on trains are usually eager to tell stories." },
            { letter: "C", text: "Modern trains are less reliable than they used to be." },
            { letter: "D", text: "Worry cannot hurry what is outside our control." }
          ],
          correct: "D"
        },
        {
          id: "lurched",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "In sentence 24, the word lurched most nearly means —",
          choices: [
            { letter: "A", text: "moved with a sudden jerk" },
            { letter: "B", text: "slid slowly backward" },
            { letter: "C", text: "rolled smoothly and quietly" },
            { letter: "D", text: "tipped over to one side" }
          ],
          correct: "A"
        },
        {
          id: "echo",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The grandmother's words in sentence 28 connect to the rest of the story mainly by —",
          choices: [
            { letter: "A", text: "revealing that she was angry about the long delay" },
            { letter: "B", text: "explaining why Rafael's mother wrote on his hand" },
            { letter: "C", text: "echoing the card player's belief that the train arrives" },
            { letter: "D", text: "suggesting that Rafael will ride the train home alone next time" }
          ],
          correct: "C"
        },
        {
          id: "window",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The details in sentences 5 and 6, a window showing Rafael's own reflection and city lights thinning into nothing, mainly create a feeling of —",
          choices: [
            { letter: "A", text: "excitement about a new adventure in an unfamiliar place" },
            { letter: "B", text: "loneliness as he leaves the familiar behind" },
            { letter: "C", text: "danger from something outside the train" },
            { letter: "D", text: "boredom with a trip he has taken often" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── LONG · Informational (level 2) ───────────────────────── */
    {
      id: "g10-ri-c81-yellow-arrows",
      family: "G10",
      title: "Arrows in the Dirt",
      kind: "Informational · 10.RI",
      blurb: "How a chain of spinning lights and giant concrete arrows let early mail planes fly through the night.",
      level: 2,
      passage:
        "<p>" + N(1) + "In the first years of airmail, a letter could cross the country faster by plane than by train, but only during the day. " +
        N(2) + "Pilots in open cockpits navigated by looking down: they followed rivers, railroad tracks, and familiar barns, reading the land the way a driver reads street signs. " +
        N(3) + "When the sun set, those signs disappeared. " +
        N(4) + "Planes landed, and the mail was loaded onto trains to continue overnight, which erased much of the time the planes had saved.</p>" +
        "<p><strong>Lighting the Way</strong></p>" +
        "<p>" + N(5) + "The solution was simple in concept and enormous in scale: if pilots could not see the ground at night, the ground would have to shine. " +
        N(6) + "Beginning in the early 1920s, crews built a chain of lighted beacons along the main airmail routes. " +
        N(7) + "Each beacon was a rotating light mounted on a steel tower, usually spaced about ten to fifteen miles from the next, so that a pilot passing one could often see the flash of the following one on the horizon. " +
        N(8) + "Beneath many towers lay a huge concrete arrow, sometimes longer than seventy feet, painted bright yellow and pointing toward the next beacon. " +
        N(9) + "On clear nights the lights guided the plane; in daylight the arrows did.</p>" +
        "<p><strong>Connecting the Dots</strong></p>" +
        "<p>" + N(10) + "The system worked something like a dot-to-dot puzzle drawn across fields, deserts, and mountain passes. " +
        N(11) + "A pilot did not need to know the whole route by heart; a pilot only needed to find the next flash. " +
        N(12) + "Some beacons also blinked a code that identified their number along the route, letting pilots confirm exactly where they were. " +
        N(13) + "Small emergency landing fields were cleared at intervals so that a pilot with engine trouble had somewhere to set down.</p>" +
        "<p>" + N(14) + "The beacons were not perfect. " +
        N(15) + "Fog, low clouds, and snowstorms could swallow the lights entirely, and flying the night routes remained dangerous work. " +
        N(16) + "Still, the network turned coast-to-coast airmail from a mixture of planes and trains that took days into a trip measured in hours. " +
        N(17) + "It also proved something that many people doubted: that flying could be organized, scheduled, and relied upon like any other kind of transportation.</p>" +
        "<p><strong>What Remains</strong></p>" +
        "<p>" + N(18) + "By the 1930s, radio navigation had begun to replace the lights, since radio signals could reach a pilot through clouds that hid any beacon. " +
        N(19) + "Most towers were taken down, and their steel was reused. " +
        N(20) + "But the concrete arrows were hard to remove, and many were simply left behind. " +
        N(21) + "Today hikers and farmers still come across them, cracked and faded, pointing across empty land toward towers that are no longer there. " +
        N(22) + "They are a reminder that the invisible systems modern pilots rely on began as something you could stand on.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"Arrows in the Dirt\"?",
          choices: [
            { letter: "A", text: "Early airmail pilots were braver than pilots today." },
            { letter: "B", text: "A chain of lights and arrows made night mail flights possible." },
            { letter: "C", text: "Trains carried more mail than planes in the early 1900s." },
            { letter: "D", text: "Hikers enjoy searching for old concrete arrows in the western desert." }
          ],
          correct: "B"
        },
        {
          id: "faster",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Which detail best supports the claim that the beacon network sped up coast-to-coast mail?",
          choices: [
            { letter: "A", text: "Pilots once followed rivers, tracks, and familiar barns." },
            { letter: "B", text: "Most towers were taken down and their steel was reused." },
            { letter: "C", text: "Some beacons blinked a code that identified their number." },
            { letter: "D", text: "A trip that took days became one measured in hours." }
          ],
          correct: "D"
        },
        {
          id: "organized",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How is the passage mainly organized?",
          choices: [
            { letter: "A", text: "It presents a problem, explains a solution, and traces what became of it." },
            { letter: "B", text: "It compares airmail service in several countries, one at a time." },
            { letter: "C", text: "It follows a single pilot through one long night flight from start to finish." },
            { letter: "D", text: "It lists the causes of airmail accidents from most to least common." }
          ],
          correct: "A"
        },
        {
          id: "puzzle",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The comparison to a dot-to-dot puzzle in sentence 10 helps the reader understand that —",
          choices: [
            { letter: "A", text: "the routes were designed by children's game makers" },
            { letter: "B", text: "pilots often became lost between distant beacons" },
            { letter: "C", text: "pilots moved from one beacon to the next in order" },
            { letter: "D", text: "the beacons were placed in random spots across the map" }
          ],
          correct: "C"
        },
        {
          id: "limits",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes sentences 14 and 15 mainly to —",
          choices: [
            { letter: "A", text: "argue that the beacon system was a costly mistake" },
            { letter: "B", text: "explain how emergency fields were cleared and used" },
            { letter: "C", text: "acknowledge the limits of an otherwise useful system" },
            { letter: "D", text: "show that snowstorms were rare along most of the night routes" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author's tone in the final paragraph is best described as —",
          choices: [
            { letter: "A", text: "reflective and appreciative" },
            { letter: "B", text: "critical and deeply disappointed" },
            { letter: "C", text: "playful and teasing" },
            { letter: "D", text: "anxious and urgent" }
          ],
          correct: "A"
        },
        {
          id: "radio",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the passage, why did radio navigation replace the beacons?",
          choices: [
            { letter: "A", text: "The steel in the towers was needed for new airplanes." },
            { letter: "B", text: "Farmers complained about the bright, spinning lights at night." },
            { letter: "C", text: "The concrete arrows had cracked and faded too badly." },
            { letter: "D", text: "Radio signals could reach pilots through thick clouds." }
          ],
          correct: "D"
        },
        {
          id: "swallow",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "As used in sentence 15, the word swallow most nearly means —",
          choices: [
            { letter: "A", text: "weaken slightly" },
            { letter: "B", text: "completely hide" },
            { letter: "C", text: "quickly destroy" },
            { letter: "D", text: "partly reflect back" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── LONG · Informational (level 3) ───────────────────────── */
    {
      id: "g10-ri-c81-two-noons",
      family: "G10",
      title: "The Day of Two Noons",
      kind: "Informational · 10.RI",
      blurb: "When every town kept its own clock, the railroads had a dangerous problem and a bold solution.",
      level: 3,
      passage:
        "<p>" + N(1) + "For most of history, noon was a local event. " +
        N(2) + "It arrived when the sun stood highest over a particular town, and because the sun appears to move westward across the sky, noon in one town came a few minutes earlier than noon in a town farther west. " +
        N(3) + "For people who traveled by horse or on foot, the difference hardly mattered; no one could cover enough distance in a day to notice that the clocks disagreed.</p>" +
        "<p><strong>A Problem Measured in Minutes</strong></p>" +
        "<p>" + N(4) + "Railroads changed that. " +
        N(5) + "By the mid-1800s, a train could pass through dozens of these local times in a single afternoon, and each town along the line kept its own \"sun time.\" " +
        N(6) + "Railroad companies responded by running their trains on their own schedules, usually set to the time in a headquarters city. " +
        N(7) + "The result was a tangle. " +
        N(8) + "A single large station might display several clocks at once, one for each railroad that served it, each showing a different time. " +
        N(9) + "A traveler changing lines had to calculate not only distance but also which version of the time a timetable meant. " +
        N(10) + "Missed connections were common, and on single-track lines, where trains running in opposite directions depended on precise timing to avoid each other, confusion about the time could be deadly.</p>" +
        "<p><strong>Dividing the Map</strong></p>" +
        "<p>" + N(11) + "In 1883, the major railroads in the United States and Canada agreed to a simpler system. " +
        N(12) + "Instead of dozens of local times, they would use a few broad time zones, each roughly fifteen degrees of longitude wide, with the clock changing by exactly one hour from one zone to the next. " +
        N(13) + "On the chosen day, many station clocks were reset at noon; in some towns the hands moved only a few minutes, while in others the shift was nearly half an hour. " +
        N(14) + "Newspapers called it \"the day of two noons.\"</p>" +
        "<p><strong>Resistance and Acceptance</strong></p>" +
        "<p>" + N(15) + "Not everyone welcomed the change. " +
        N(16) + "Some communities complained that a private industry had no right to decide what time it was, and a few towns stubbornly kept their own sun time for years. " +
        N(17) + "Critics argued that clocks should follow nature, not the convenience of a timetable. " +
        N(18) + "Yet the logic of the zones proved hard to resist. " +
        N(19) + "Businesses, schools, and telegraph offices gradually adopted railroad time because it matched the schedules people actually lived by. " +
        N(20) + "Decades later, in 1918, the federal government made the time zones official law.</p>" +
        "<p>" + N(21) + "Today the idea that an entire region shares one clock seems as natural as the sunrise itself. " +
        N(22) + "But the hour on a phone screen is, in a sense, a leftover from the age of steam: a decision made not by astronomers but by people trying to keep trains from colliding.</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which of these best summarizes \"The Day of Two Noons\"?",
          choices: [
            { letter: "A", text: "Towns that kept sun time were wiser than those that followed the railroads." },
            { letter: "B", text: "Astronomers spent decades designing time zones before trains existed." },
            { letter: "C", text: "Railroads created time zones to end the confusion of local times." },
            { letter: "D", text: "Single-track rail lines were the most dangerous in the 1800s." }
          ],
          correct: "C"
        },
        {
          id: "tangle-org",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Sentences 7 through 10 are organized mainly to —",
          choices: [
            { letter: "A", text: "show the effects that many local times had on rail travel" },
            { letter: "B", text: "compare the schedules of two rival railroad companies in one city" },
            { letter: "C", text: "list the steps railroads took to reset their clocks" },
            { letter: "D", text: "describe one traveler's journey from start to finish" }
          ],
          correct: "A"
        },
        {
          id: "danger",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Which detail best explains why confusion about the time was especially dangerous on single-track lines?",
          choices: [
            { letter: "A", text: "Large stations displayed several clocks at the same time." },
            { letter: "B", text: "Travelers had to calculate which time a timetable meant." },
            { letter: "C", text: "Railroads set their clocks to the time in a headquarters city." },
            { letter: "D", text: "Trains moving in opposite directions relied on exact timing." }
          ],
          correct: "D"
        },
        {
          id: "two-noons",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes the newspaper phrase the day of two noons in sentence 14 mainly to —",
          choices: [
            { letter: "A", text: "prove that newspapers opposed the new time zones" },
            { letter: "B", text: "capture how strange the change seemed to people then" },
            { letter: "C", text: "explain why the clocks were reset exactly at midnight" },
            { letter: "D", text: "show that most towns ignored the railroads' plan" }
          ],
          correct: "B"
        },
        {
          id: "critics",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author presents the complaints in sentences 15 through 17 mainly to —",
          choices: [
            { letter: "A", text: "persuade readers that the critics of time zones were right all along" },
            { letter: "B", text: "suggest that the railroads broke the law in 1883" },
            { letter: "C", text: "explain how sun time is still measured in some towns" },
            { letter: "D", text: "show that the change met real resistance before acceptance" }
          ],
          correct: "D"
        },
        {
          id: "interpret",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence from the passage presents the author's interpretation rather than a historical fact?",
          choices: [
            { letter: "A", text: "Sentence 22, which calls the hour on a phone a leftover from the age of steam" },
            { letter: "B", text: "Sentence 11, which tells when the railroads agreed to a simpler system" },
            { letter: "C", text: "Sentence 20, which tells the year the time zones finally became official federal law" },
            { letter: "D", text: "Sentence 12, which explains how wide each of the new time zones was" }
          ],
          correct: "A"
        },
        {
          id: "tangle",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Based on sentences 8 through 10, the word tangle in sentence 7 most nearly means —",
          choices: [
            { letter: "A", text: "a knot of twisted wires" },
            { letter: "B", text: "a heated public argument" },
            { letter: "C", text: "a confusing, disordered situation" },
            { letter: "D", text: "a carefully planned railway network" }
          ],
          correct: "C"
        },
        {
          id: "frame",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "How does the final paragraph connect to the opening paragraph of the passage?",
          choices: [
            { letter: "A", text: "It argues that the towns in the opening paragraph should have kept their sun time." },
            { letter: "B", text: "It returns to the sun, showing how far clocks moved from following it." },
            { letter: "C", text: "It repeats the opening's claim that travel by horse was too slow." },
            { letter: "D", text: "It introduces a new problem that the opening paragraph left out." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── LONG · Vocabulary (level 1) ───────────────────────── */
    {
      id: "g10-rv-c81-swab-test",
      family: "G10",
      title: "The Swab Test",
      kind: "Vocabulary · 10.RV",
      blurb: "An intern in a museum conservation lab expects to carry boxes and instead finds a hidden sky.",
      level: 1,
      passage:
        "<p>" + N(1) + "On the first morning of his summer internship at the Larkspur Art Museum, Sung-min Park expected to carry boxes. " +
        N(2) + "Instead, the head conservator, Dr. Amara Bello, handed him a magnifying visor and asked him to <strong>scrutinize</strong> a landscape painting lying flat on a padded table. " +
        N(3) + "\"Look closely, inch by inch,\" she said. \"Tell me everything you see that the painter didn't put there.\"</p>" +
        "<p>" + N(4) + "At first Sung-min saw only trees, a river, and a gray-blue sky. " +
        N(5) + "After twenty minutes, he began to notice other things: a yellowish film dulling the sky, tiny cracks spreading across the paint like the lines on a dry riverbed, and a thumbprint near the bottom corner that was certainly not the artist's. " +
        N(6) + "Dr. Bello nodded as he listed them. " +
        N(7) + "\"The yellow film is old varnish,\" she explained. \"Over a century, it darkens and hides the true colors. The thumbprint is probably from a careless owner. The cracks we leave alone. They are part of the painting's age.\"</p>" +
        "<p>" + N(8) + "The painting was more than two hundred years old, and its surface was <strong>fragile</strong>; in some spots the paint had lifted so slightly from the canvas that a strong breath might have knocked a flake loose. " +
        N(9) + "Before any cleaning could begin, Dr. Bello had to secure those loose spots with a thin adhesive applied through a needle-fine brush. " +
        N(10) + "Sung-min watched her work for an hour without speaking. " +
        N(11) + "She was <strong>meticulous</strong>, checking each spot under the magnifier twice, sometimes three times, before she moved to the next.</p>" +
        "<p>" + N(12) + "Later, she let him help test cleaning solutions on a tiny patch of sky no bigger than a fingernail. " +
        N(13) + "He rolled a cotton swab gently across the surface, and the swab came away brown. " +
        N(14) + "Beneath the old varnish, the sky was suddenly a clear, startling blue. " +
        N(15) + "\"That's the color the painter chose,\" Dr. Bello said. \"Nobody has seen it in a hundred years.\"</p>" +
        "<p>" + N(16) + "Sung-min asked whether they would make the whole painting <strong>pristine</strong>, as fresh and untouched as the day it was finished. " +
        N(17) + "Dr. Bello shook her head. " +
        N(18) + "\"We're not trying to erase its life,\" she said. \"We're trying to remove what doesn't belong.\" " +
        N(19) + "She explained the most important rule in her lab: every material a conservator adds must be <strong>reversible</strong>. " +
        N(20) + "Any adhesive or varnish she applied could be removed decades from now by someone with better tools, without harming the original paint. " +
        N(21) + "\"We are never the last people who will care for this painting,\" she said. \"We work so the next person can undo us.\"</p>" +
        "<p>" + N(22) + "At the end of the day, Sung-min peeled off his gloves and looked at the brown swabs piled in the dish beside the table. " +
        N(23) + "Each one held a little of the <strong>residue</strong> that had hidden the painting for a century. " +
        N(24) + "He had not carried a single box, and he could not wait to come back.</p>",
      claims: [
        {
          id: "scrutinize",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Based on Dr. Bello's words in sentence 3, the word scrutinize in sentence 2 most nearly means to —",
          choices: [
            { letter: "A", text: "examine very closely" },
            { letter: "B", text: "clean very gently" },
            { letter: "C", text: "describe out loud" },
            { letter: "D", text: "measure each part exactly" }
          ],
          correct: "A"
        },
        {
          id: "fragile",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which words from sentence 8 best help the reader understand the meaning of fragile?",
          choices: [
            { letter: "A", text: "more than two hundred years old" },
            { letter: "B", text: "its surface" },
            { letter: "C", text: "a strong breath might have knocked a flake loose" },
            { letter: "D", text: "the paint had lifted so slightly from the old canvas" }
          ],
          correct: "C"
        },
        {
          id: "meticulous",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author describes Dr. Bello as meticulous rather than slow. Compared with slow, meticulous suggests that she is —",
          choices: [
            { letter: "A", text: "tired after a long day of work" },
            { letter: "B", text: "careful and precise on purpose" },
            { letter: "C", text: "unsure of what she is doing" },
            { letter: "D", text: "bored by the task in front of her" }
          ],
          correct: "B"
        },
        {
          id: "reversible",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The root vers in reversible also appears in reverse and version and carries the idea of turning. Based on this root and the suffix -ible, a reversible material is one that —",
          choices: [
            { letter: "A", text: "changes color when it is exposed to light" },
            { letter: "B", text: "can be used on both sides of a canvas" },
            { letter: "C", text: "turns hard and permanent as it dries" },
            { letter: "D", text: "can be taken back off later if needed" }
          ],
          correct: "D"
        },
        {
          id: "pristine",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "As Sung-min uses it in sentence 16, the word pristine most nearly means —",
          choices: [
            { letter: "A", text: "carefully copied by hand" },
            { letter: "B", text: "brightly and freshly colored again" },
            { letter: "C", text: "in perfect, unspoiled condition" },
            { letter: "D", text: "valued at a very high price" }
          ],
          correct: "C"
        },
        {
          id: "residue",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 23, the word residue most nearly means —",
          choices: [
            { letter: "A", text: "material left behind on a surface" },
            { letter: "B", text: "a liquid used for cleaning paint" },
            { letter: "C", text: "a crack that forms as paint ages" },
            { letter: "D", text: "a thin coat of fresh, clear varnish" }
          ],
          correct: "A"
        },
        {
          id: "startling",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "In sentence 14, the author calls the blue startling rather than bright. Compared with bright, startling adds a sense that the color —",
          choices: [
            { letter: "A", text: "was painted on by the intern himself" },
            { letter: "B", text: "was much too strong for the rest of the scene" },
            { letter: "C", text: "would fade again within a few minutes" },
            { letter: "D", text: "was a surprise after being hidden so long" }
          ],
          correct: "D"
        },
        {
          id: "conservator",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word conservator in sentence 2 shares a root with conserve and conservation. Based on this root, a conservator is someone who —",
          choices: [
            { letter: "A", text: "buys and sells valuable paintings" },
            { letter: "B", text: "protects and preserves objects" },
            { letter: "C", text: "guides visitors through galleries" },
            { letter: "D", text: "paints copies of famous works" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── LONG · Vocabulary (level 3) ───────────────────────── */
    {
      id: "g10-rv-c81-low-tide",
      family: "G10",
      title: "Four Minutes, Fifty-One Seconds",
      kind: "Vocabulary · 10.RV",
      blurb: "A director and an editor must cut an eleven-minute film to five, and they disagree about almost every frame.",
      level: 3,
      passage:
        "<p>" + N(1) + "The rough cut of <em>Low Tide</em> ran eleven minutes, and the Harbor Youth Film Festival accepted nothing longer than five. " +
        N(2) + "For two weeks, Mateo Villanueva and Ingrid Solberg had spent every lunch period in the media lab trying to close that gap, and for two weeks they had disagreed about almost every frame.</p>" +
        "<p>" + N(3) + "Mateo, who had directed the film, loved its slow opening: nearly two minutes of a fishing boat drifting in fog while a gull circled overhead. " +
        N(4) + "Ingrid, who was editing, called the sequence <strong>meandering</strong>. " +
        N(5) + "\"It wanders,\" she said. \"It doesn't know where it's going, so the audience doesn't either.\" " +
        N(6) + "Mateo argued that the wandering was the point, since the main character, a girl named Nell, was supposed to feel lost. " +
        N(7) + "Ingrid replied that there was a difference between a film about being lost and a film that was lost.</p>" +
        "<p>" + N(8) + "Their teacher, Mr. Achebe, offered only one piece of advice when they asked him to settle the argument. " +
        N(9) + "\"Every shot has to earn its seconds,\" he said. \"If you cut it and nothing is missing, it was never doing anything.\"</p>" +
        "<p>" + N(10) + "So they tested every shot. " +
        N(11) + "They removed the gull, and nothing was missing. " +
        N(12) + "They removed the fog, and the first scene suddenly felt like a weather report instead of a mood; that shot went back in. " +
        N(13) + "Slowly the film became more <strong>concise</strong>, not by rushing its moments but by keeping only the ones that mattered.</p>" +
        "<p>" + N(14) + "The hardest decision came near the end. " +
        N(15) + "Mateo had filmed two endings: in one, Nell's father returns safely to the harbor, and in the other, the screen simply goes white with fog while Nell waits on the dock. " +
        N(16) + "Ingrid proposed a third option: <strong>juxtapose</strong> the two, cutting back and forth between the father's boat and Nell's empty dock so quickly that viewers could not tell which image was real and which was only her fear. " +
        N(17) + "The result was <strong>ambiguous</strong>; some test viewers believed the father came home, while others were certain he had not. " +
        N(18) + "Mateo worried that confusion would frustrate the judges. " +
        N(19) + "Ingrid argued that a question the audience carries out of the theater is not a mistake but a gift.</p>" +
        "<p>" + N(20) + "They showed the new cut to a class of ninth graders. " +
        N(21) + "Afterward, Mateo stood in the hallway and listened to them argue about the ending all the way to the cafeteria. " +
        N(22) + "One student said the last shot of the empty dock was the most <strong>evocative</strong> thing she had seen all year, because it made her remember waiting for her own mother at an airport gate. " +
        N(23) + "Mateo had never imagined that a dock in fog could call up an airport.</p>" +
        "<p>" + N(24) + "The final version ran four minutes and fifty-one seconds. " +
        N(25) + "The gull was gone. " +
        N(26) + "The fog stayed. " +
        N(27) + "And when they uploaded it at 11:58 on the night of the deadline, Mateo admitted that the film was no longer exactly the one he had shot. " +
        N(28) + "\"It's better,\" he said, \"which is annoying.\"</p>",
      claims: [
        {
          id: "meandering",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Ingrid's explanation in sentence 5 shows that meandering means —",
          choices: [
            { letter: "A", text: "beautifully filmed but too dark" },
            { letter: "B", text: "wandering without a clear direction" },
            { letter: "C", text: "moving too quickly for anyone to follow" },
            { letter: "D", text: "repeating the same image twice" }
          ],
          correct: "B"
        },
        {
          id: "concise",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which part of sentence 13 best shows the meaning of concise?",
          choices: [
            { letter: "A", text: "Slowly the film became more concise, not by rushing" },
            { letter: "B", text: "not by rushing its moments" },
            { letter: "C", text: "the film became more" },
            { letter: "D", text: "keeping only the ones that mattered" }
          ],
          correct: "D"
        },
        {
          id: "juxtapose",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The first part of juxtapose comes from a Latin word meaning \"next to,\" and pose means \"to place.\" Based on these parts and sentence 16, to juxtapose two images is to —",
          choices: [
            { letter: "A", text: "set them side by side to compare them" },
            { letter: "B", text: "blend them into a single new picture" },
            { letter: "C", text: "remove one so the other stands alone" },
            { letter: "D", text: "slow them both down to show every detail" }
          ],
          correct: "A"
        },
        {
          id: "ambiguous",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which detail from sentence 17 best helps the reader understand the meaning of ambiguous?",
          choices: [
            { letter: "A", text: "The result was" },
            { letter: "B", text: "some test viewers" },
            { letter: "C", text: "some believed he came home, while others were certain he had not" },
            { letter: "D", text: "the test viewers who watched the film's new ending in the media lab" }
          ],
          correct: "C"
        },
        {
          id: "evocative",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The student in sentence 22 calls the final shot evocative rather than sad. Compared with sad, evocative emphasizes that the shot —",
          choices: [
            { letter: "A", text: "was filmed with expensive equipment" },
            { letter: "B", text: "made her feel sorry for the director" },
            { letter: "C", text: "called up her own memories and feelings" },
            { letter: "D", text: "was too confusing for most viewers to enjoy" }
          ],
          correct: "C"
        },
        {
          id: "earn",
          sol: "10.RV.1.F",
          sub: "10.RV.1.F.1",
          stem: "In sentence 9, Mr. Achebe says every shot has to earn its seconds. He most nearly means that each shot must —",
          choices: [
            { letter: "A", text: "do enough work to justify its length" },
            { letter: "B", text: "be filmed again until it is perfect" },
            { letter: "C", text: "last exactly as long as the others" },
            { letter: "D", text: "win approval from the festival judges" }
          ],
          correct: "A"
        },
        {
          id: "cis",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word concise shares the root cis, meaning \"to cut,\" with incision and scissors. How does this root fit the way Mateo and Ingrid made their film concise?",
          choices: [
            { letter: "A", text: "They sped up every shot to fit more into five minutes." },
            { letter: "B", text: "They made it shorter by cutting shots that did no work." },
            { letter: "C", text: "They split the film into two separate short films." },
            { letter: "D", text: "They replaced the fog with clearer footage of the harbor." }
          ],
          correct: "B"
        },
        {
          id: "annoying",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Mateo's remark in sentence 28 that the film is better, which is annoying, mainly reveals that he —",
          choices: [
            { letter: "A", text: "plans to restore the gull before the festival" },
            { letter: "B", text: "thinks the ninth graders misunderstood the film" },
            { letter: "C", text: "regrets letting Ingrid edit the film at all" },
            { letter: "D", text: "accepts Ingrid's changes in spite of his pride" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── LONG · Paired texts (level 2) ───────────────────────── */
    {
      id: "g10-dsr-c81-depot",
      family: "G10",
      title: "The Depot on Water Street",
      kind: "Paired texts · 10.DSR",
      blurb: "A historical society flyer celebrates a restored train depot; a student volunteer says something is still missing.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Millbrook Depot: All Aboard Again</strong> (from a Millbrook Historical Society flyer)</p>" +
        "<p>" + N(1) + "For nearly seventy years, the red-brick depot on Water Street was the busiest building in Millbrook. " +
        N(2) + "Passenger trains stopped here six times a day, farmers shipped milk and apples to city markets, and families gathered on the platform to welcome travelers home. " +
        N(3) + "When passenger service ended, the depot closed, and for decades it stood empty behind a chain-link fence.</p>" +
        "<p>" + N(4) + "After a six-year restoration funded by grants, bake sales, and more than four hundred individual donors, the depot will reopen to the public on Saturday, May 10. " +
        N(5) + "Volunteers repaired the slate roof, rebuilt the ticket window using the original oak, and restored the waiting room's tile floor, which had been hidden under three layers of linoleum.</p>" +
        "<p>" + N(6) + "The building will house a small rail museum with photographs, timetables, and a working telegraph key, along with a community room that local groups may reserve free of charge. " +
        N(7) + "Freight trains still pass the depot several times a day, and a covered viewing bench has been installed for visitors who want to watch them.</p>" +
        "<p>" + N(8) + "The opening ceremony begins at 10 a.m. and will include a ribbon cutting, guided tours every half hour, and lemonade on the platform. " +
        N(9) + "Admission to the museum is free, though donations will help cover heating and upkeep. " +
        N(10) + "Come see what Millbrook built, and what Millbrook saved.</p>" +
        "<p><strong>Text 2 — The Bench</strong> (a student's post on a community website)</p>" +
        "<p>" + N(11) + "My grandfather drives past the old depot every Tuesday on the way to the hardware store, and every Tuesday he slows down. " +
        N(12) + "He never stops. " +
        N(13) + "When I asked him why, he told me that he caught the train from that platform to his first job in the city, at seventeen, with a cardboard suitcase and a sandwich his mother made. " +
        N(14) + "He said the depot was where Millbrook ended and the rest of the world began.</p>" +
        "<p>" + N(15) + "I volunteered on the restoration crew last summer, mostly scraping paint. " +
        N(16) + "I liked the work, and I am proud of the ticket window. " +
        N(17) + "But I also noticed that the flyers and speeches talk mostly about the building: the roof, the floor, the oak. " +
        N(18) + "Nobody talks much about the people who stood on the platform, which is strange, because a depot is really a place people leave from and come back to.</p>" +
        "<p>" + N(19) + "So here is my suggestion. " +
        N(20) + "The museum should collect stories, not just timetables. " +
        N(21) + "Ask people like my grandfather where they were going when they left, and who was waiting when they came back. " +
        N(22) + "Record them, and play them in the waiting room. " +
        N(23) + "Last Tuesday I finally got him to stop the car. " +
        N(24) + "He sat on the new viewing bench for twenty minutes, watching a freight train pass, and told me three stories I had never heard. " +
        N(25) + "Not one of them was about the roof.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "On which point do the flyer and the student's post agree?",
          choices: [
            { letter: "A", text: "The museum should charge admission to pay for heat." },
            { letter: "B", text: "Freight trains should no longer pass through town." },
            { letter: "C", text: "The restoration took too long and cost too much." },
            { letter: "D", text: "The depot has long mattered to Millbrook's people." }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How do the two texts differ in what they emphasize about the depot?",
          choices: [
            { letter: "A", text: "Text 1 stresses the restored building; Text 2 stresses people's memories." },
            { letter: "B", text: "Text 1 stresses the depot's future; Text 2 says it has no future at all." },
            { letter: "C", text: "Text 1 stresses the cost of the work; Text 2 argues it was wasted money." },
            { letter: "D", text: "Text 1 stresses freight trains today; Text 2 stresses the old passenger trains." }
          ],
          correct: "A"
        },
        {
          id: "purpose1",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "Text 1 is written mainly to —",
          choices: [
            { letter: "A", text: "ask volunteers to join a new restoration crew" },
            { letter: "B", text: "argue that passenger trains should return to town" },
            { letter: "C", text: "invite the public to the reopening and show what was restored" },
            { letter: "D", text: "explain the history of the telegraph key in the museum collection" }
          ],
          correct: "C"
        },
        {
          id: "respond",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which sentence from Text 2 most directly responds to the way Text 1 presents the depot?",
          choices: [
            { letter: "A", text: "Sentence 15, about scraping paint on the restoration crew last summer" },
            { letter: "B", text: "Sentence 17, about flyers and speeches focusing mostly on the building" },
            { letter: "C", text: "Sentence 11, about the grandfather slowing down on his way to the store" },
            { letter: "D", text: "Sentence 23, about finally getting the grandfather to stop the car" }
          ],
          correct: "B"
        },
        {
          id: "saved",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The closing line of Text 1, Come see what Millbrook built, and what Millbrook saved, mainly emphasizes —",
          choices: [
            { letter: "A", text: "the town's pride in both the building and its rescue" },
            { letter: "B", text: "the need for more money to finish the museum" },
            { letter: "C", text: "the danger that the depot may soon close again" },
            { letter: "D", text: "the difference between the old and the new train schedules" }
          ],
          correct: "A"
        },
        {
          id: "leave",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which detail from Text 2 best supports the student's idea that a depot is a place people leave from and come back to?",
          choices: [
            { letter: "A", text: "The student is proud of the rebuilt ticket window." },
            { letter: "B", text: "The grandfather drives to the hardware store weekly." },
            { letter: "C", text: "The student spent last summer mostly scraping old paint off walls." },
            { letter: "D", text: "The grandfather left from that platform for his first job." }
          ],
          correct: "D"
        },
        {
          id: "bench",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "A reader who uses both texts could best conclude that —",
          choices: [
            { letter: "A", text: "the grandfather helped pay for the restoration in Text 1" },
            { letter: "B", text: "a feature in Text 1 gave the grandfather a reason to stop" },
            { letter: "C", text: "the historical society has already begun recording local stories" },
            { letter: "D", text: "the student's suggestion was rejected by the historical society" }
          ],
          correct: "B"
        },
        {
          id: "roof",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The tone of the final sentence of Text 2, Not one of them was about the roof, is best described as —",
          choices: [
            { letter: "A", text: "bitter and accusing" },
            { letter: "B", text: "confused and uncertain" },
            { letter: "C", text: "gently pointed" },
            { letter: "D", text: "openly joyful" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · Paired texts (level 3) ───────────────────────── */
    {
      id: "g10-dsr-c81-birdman",
      family: "G10",
      title: "The Flying Machine at the Fair",
      kind: "Paired texts · 10.DSR",
      blurb: "A 1911 newspaper report and a farm girl's diary describe the same eleven minutes over the county fair.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Birdman Circles the Fairgrounds</strong> (from the <em>Harlan Valley Courier</em>, September 1911)</p>" +
        "<p>" + N(1) + "More than six thousand spectators crowded the Harlan Valley Fair on Thursday afternoon to witness the first flight of a flying machine ever seen in this county. " +
        N(2) + "The aviator, Mr. Silas Whitcombe, arrived by train on Tuesday with his biplane packed in crates, and his mechanics spent two full days assembling its wings of spruce and stretched cotton.</p>" +
        "<p>" + N(3) + "At half past four, after a delay caused by gusty winds, Mr. Whitcombe climbed into his seat, which sits in the open air at the front edge of the lower wing. " +
        N(4) + "The engine roared, the machine bounced across the racetrack infield, and then, to a great shout from the grandstand, it rose. " +
        N(5) + "Mr. Whitcombe circled the fairgrounds three times at a height estimated at four hundred feet, remaining aloft for eleven minutes before landing safely near the cattle barns.</p>" +
        "<p>" + N(6) + "Several spectators in the grandstand were reported to have fainted, and a team of horses tied near the main gate broke loose at the noise. " +
        N(7) + "No injuries resulted.</p>" +
        "<p>" + N(8) + "Fair officials pronounced the exhibition a complete success and reported record ticket sales. " +
        N(9) + "Mr. Whitcombe, who is paid a handsome fee for each appearance, told this reporter that within ten years farmers will fly to market as easily as they now drive a wagon. " +
        N(10) + "He departs Saturday for the state fair.</p>" +
        "<p><strong>Text 2 — From the diary of Opal Brannigan, age fourteen</strong></p>" +
        "<p>" + N(11) + "Thursday. " +
        N(12) + "We waited in the infield from noon until half past four, and Papa said twice that we should go home and see to the cows, but he did not move either time. " +
        N(13) + "When the engine started, it was louder than the threshing machine and the train together, and Mrs. Pruitt's baby screamed the whole time.</p>" +
        "<p>" + N(14) + "Then it went up. " +
        N(15) + "I don't know how to write it down properly. " +
        N(16) + "It did not look like a bird, no matter what the newspaper calls him. " +
        N(17) + "It looked like a kitchen table someone had decided to throw at the sky, and the sky had decided to keep it. " +
        N(18) + "I could see the man's legs dangling. " +
        N(19) + "He waved once, and the whole grandstand waved back, as if he could pick any of us out.</p>" +
        "<p>" + N(20) + "Papa did not say anything for the whole ride home. " +
        N(21) + "Then at supper he said it was foolishness and would never come to anything useful. " +
        N(22) + "But after the dishes I saw him out by the fence in the dark, looking up, the way he looks at clouds when he is guessing about rain.</p>" +
        "<p>" + N(23) + "I have decided something, and I am only writing it here. " +
        N(24) + "I am going to ride in one of those someday. " +
        N(25) + "Not to market. " +
        N(26) + "Just up.</p>",
      claims: [
        {
          id: "both",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which detail appears in both the newspaper report and the diary?",
          choices: [
            { letter: "A", text: "The aviator's mechanics built the wings from spruce." },
            { letter: "B", text: "A team of horses broke loose near the main gate." },
            { letter: "C", text: "The flight did not begin until half past four." },
            { letter: "D", text: "The aviator landed his machine near the cattle barns." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The texts differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "describes the flight as a failure, while Text 2 calls it a success" },
            { letter: "B", text: "gives facts and figures, while Text 2 records a private reaction" },
            { letter: "C", text: "was written before the flight, while Text 2 was written long after" },
            { letter: "D", text: "focuses on the crowd, while Text 2 focuses on the machine's engine" }
          ],
          correct: "B"
        },
        {
          id: "predict",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which statement from Text 1 is a prediction rather than a reported fact?",
          choices: [
            { letter: "A", text: "More than six thousand spectators crowded the fair." },
            { letter: "B", text: "The machine stayed aloft for eleven minutes." },
            { letter: "C", text: "Fair officials reported record ticket sales." },
            { letter: "D", text: "Farmers will fly to market within ten years." }
          ],
          correct: "D"
        },
        {
          id: "table",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 17, comparing the flying machine to a kitchen table thrown at the sky mainly suggests that it looked —",
          choices: [
            { letter: "A", text: "too clumsy to fly, yet somehow it stayed up" },
            { letter: "B", text: "as graceful and natural as a soaring bird" },
            { letter: "C", text: "dangerously close to crashing into the crowd" },
            { letter: "D", text: "smaller than the newspaper had promised" }
          ],
          correct: "A"
        },
        {
          id: "papa",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 21 and 22 together suggest that Papa —",
          choices: [
            { letter: "A", text: "is worried that rain will ruin the next day's harvest" },
            { letter: "B", text: "plans to buy a flying machine for the family farm" },
            { letter: "C", text: "is more moved by the flight than he will admit" },
            { letter: "D", text: "is angry that the family wasted a day at the fair" }
          ],
          correct: "C"
        },
        {
          id: "just-up",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How do sentences 25 and 26 of Text 2 respond to the aviator's claim in sentence 9 of Text 1?",
          choices: [
            { letter: "A", text: "They agree that farmers will soon fly their goods and crops to market." },
            { letter: "B", text: "They argue that flying machines are too dangerous to ride." },
            { letter: "C", text: "They mock the aviator for charging so much to appear." },
            { letter: "D", text: "They value flight for the experience, not for practical use." }
          ],
          correct: "D"
        },
        {
          id: "crowd",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Based on both texts, which conclusion about the crowd's response is best supported?",
          choices: [
            { letter: "A", text: "Many people were both startled and thrilled by the flight." },
            { letter: "B", text: "Most people left the fair before the flight finally began." },
            { letter: "C", text: "The crowd was disappointed that the flight was so short." },
            { letter: "D", text: "Few people believed the machine would actually leave the ground." }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Compared with the tone of the newspaper report, the tone of Opal's diary is more —",
          choices: [
            { letter: "A", text: "formal and strictly objective" },
            { letter: "B", text: "personal and full of wonder" },
            { letter: "C", text: "critical and deeply suspicious" },
            { letter: "D", text: "cheerful and boastful" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── LONG · Poetry (level 2) ───────────────────────── */
    {
      id: "g10-rl-c81-night-shift-tour",
      family: "G10",
      title: "The Night Shift Tour",
      kind: "Poetry · 10.RL",
      blurb: "A grandmother who cleaned a museum's floors for thirty years visits it in daylight for the first time.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My grandmother knows this museum backward,<br>" +
        L(2) + "from the floor up, the way a river<br>" +
        L(3) + "knows the bottom of a boat.<br>" +
        L(4) + "For thirty years she came in after the last guest,<br>" +
        L(5) + "pushed her cart through the marble hush,<br>" +
        L(6) + "and polished the long halls until they held the lights<br>" +
        L(7) + "the way still water holds the moon.<br>" +
        L(8) + "Today she wears her church shoes and a visitor's sticker,<br>" +
        L(9) + "and she does not look at the paintings first.<br>" +
        L(10) + "She looks down.<br>" +
        L(11) + "<em>Here</em>, she says, <em>a boy once dropped a whole cherry soda.</em><br>" +
        L(12) + "<em>Here is where the floor dips, if you know to feel for it.</em><br>" +
        L(13) + "<em>This corner always gathered dust like it was saving up.</em><br>" +
        L(14) + "The guard by the doorway nods at her as if<br>" +
        L(15) + "he can see the cart she is no longer pushing.<br>" +
        L(16) + "In the big room, under the painting of the harbor,<br>" +
        L(17) + "she finally lifts her eyes.<br>" +
        L(18) + "<em>I used to talk to these</em>, she tells me,<br>" +
        L(19) + "<em>three in the morning, nobody else to ask.</em><br>" +
        L(20) + "<em>The ships never answered, but they listened better than most.</em><br>" +
        L(21) + "I want to tell her the paintings are famous,<br>" +
        L(22) + "that people fly here from other countries to see them.<br>" +
        L(23) + "Instead I watch her watching them,<br>" +
        L(24) + "two old friends meeting in daylight<br>" +
        L(25) + "for the first time." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme does \"The Night Shift Tour\" best develop?",
          choices: [
            { letter: "A", text: "Unseen work can create a deep, personal bond with a place." },
            { letter: "B", text: "Famous paintings matter most to people who travel far to see them." },
            { letter: "C", text: "Museums should be open late at night for working families." },
            { letter: "D", text: "Older people often forget the places where they once worked." }
          ],
          correct: "A"
        },
        {
          id: "river",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In lines 2 and 3, comparing the grandmother to a river that knows the bottom of a boat mainly suggests that she —",
          choices: [
            { letter: "A", text: "once worked on a ship before the museum" },
            { letter: "B", text: "moves slowly and quietly through the halls" },
            { letter: "C", text: "prefers being outdoors to being indoors" },
            { letter: "D", text: "knows the museum from a hidden angle" }
          ],
          correct: "D"
        },
        {
          id: "moon",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "The image in lines 6 and 7 of the halls holding the lights the way still water holds the moon mainly suggests that the floors —",
          choices: [
            { letter: "A", text: "were often wet and slippery at night" },
            { letter: "B", text: "shone with a calm, reflected glow" },
            { letter: "C", text: "were too dark for visitors to see" },
            { letter: "D", text: "were painted with scenes of the sea" }
          ],
          correct: "B"
        },
        {
          id: "looks-down",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Lines 9 through 13 characterize the grandmother as someone who —",
          choices: [
            { letter: "A", text: "is nervous about being seen inside the museum again" },
            { letter: "B", text: "dislikes the paintings she once cleaned around" },
            { letter: "C", text: "remembers the place through the details of her work" },
            { letter: "D", text: "wants her grandchild to learn how to clean the floors" }
          ],
          correct: "C"
        },
        {
          id: "guard",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "In lines 14 and 15, the guard's nod most likely shows that he —",
          choices: [
            { letter: "A", text: "recognizes her from her years of work there" },
            { letter: "B", text: "suspects she is about to touch one of the paintings" },
            { letter: "C", text: "wants her to show him her visitor's sticker" },
            { letter: "D", text: "thinks she has wandered into the wrong room" }
          ],
          correct: "A"
        },
        {
          id: "dust",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of line 13, This corner always gathered dust like it was saving up, is best described as —",
          choices: [
            { letter: "A", text: "bitter and deeply resentful" },
            { letter: "B", text: "nervous and hurried" },
            { letter: "C", text: "formal and distant" },
            { letter: "D", text: "fond and lightly humorous" }
          ],
          correct: "D"
        },
        {
          id: "instead",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "The shift in line 23 from what the speaker wants to say to what she does instead mainly shows that the speaker —",
          choices: [
            { letter: "A", text: "is embarrassed by her grandmother's stories" },
            { letter: "B", text: "sees that her grandmother's bond outweighs fame" },
            { letter: "C", text: "has forgotten why the paintings are famous" },
            { letter: "D", text: "would rather leave the museum before it closes for the night" }
          ],
          correct: "B"
        },
        {
          id: "short-line",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "The poet sets She looks down (line 10) as a single short line mainly to —",
          choices: [
            { letter: "A", text: "show that the grandmother feels ashamed to be back in the museum" },
            { letter: "B", text: "suggest that the grandmother has poor eyesight now" },
            { letter: "C", text: "stress how her attention differs from other visitors'" },
            { letter: "D", text: "signal that the poem is about to end very soon" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · Drama (level 1) ───────────────────────── */
    {
      id: "g10-rl-c81-take-eight",
      family: "G10",
      title: "Take Eight",
      kind: "Drama · 10.RL",
      blurb: "A student director wants a perfect take before the diner opens, and her sound crew's arms are giving out.",
      level: 1,
      passage:
        "<p><em>Setting: Kowalczyk's Diner, 6:40 on a Sunday morning, before opening. Chairs are stacked on most tables. ZURI, the director, stands behind a camera on a tripod. THEO sits in a booth with a plate of cold pancakes. LUCÍA holds a long boom microphone over his head, her arms trembling. MRS. KOWALCZYK, the owner, wipes the counter.</em></p>" +
        "<p>" + N(1) + "<strong>ZURI</strong>: Okay, take seven. Theo, the line is \"I never wanted the scholarship.\" Not \"I didn't want.\" Never. " +
        N(2) + "<strong>THEO</strong>: Never. Got it. Never. " +
        N(3) + "<strong>ZURI</strong>: And Lucía, the mic dipped into the frame last time. Keep it up. " +
        N(4) + "<strong>LUCÍA</strong> <em>(quietly, shifting her grip)</em>: It's up. " +
        N(5) + "<strong>ZURI</strong>: Rolling. Action. " +
        N(6) + "<strong>THEO</strong> <em>(looking down at the pancakes)</em>: I never wanted the <em>(A truck rumbles past outside, rattling the window.)</em> Sorry. Was that in the sound? " +
        N(7) + "<strong>ZURI</strong> <em>(throwing up her hands)</em>: Everything is in the sound! Cut. Lucía, can you not hear a truck? " +
        N(8) + "<strong>LUCÍA</strong> <em>(lowering the boom slowly to the floor)</em>: I heard it. Everybody in the county heard it. " +
        N(9) + "<em>(A silence. MRS. KOWALCZYK sets down her rag.)</em> " +
        N(10) + "<strong>MRS. KOWALCZYK</strong>: I open at seven-thirty, sweetheart. That's fifty minutes. But I'll tell you something for free. " +
        N(11) + "<strong>ZURI</strong> <em>(sharply, then catching herself)</em>: What? I mean, yes? " +
        N(12) + "<strong>MRS. KOWALCZYK</strong>: When I opened this place, I yelled at my cook every morning for a year. The eggs were never right. Then one day he quit, and I made the eggs myself, and they were worse. " +
        N(13) + "<strong>ZURI</strong>: I'm not yelling. " +
        N(14) + "<strong>MRS. KOWALCZYK</strong> <em>(pointing her rag at LUCÍA)</em>: Look at that girl's arms and tell me again. " +
        N(15) + "<em>(ZURI looks. LUCÍA is rubbing her shoulder. THEO studies the ceiling.)</em> " +
        N(16) + "<strong>ZURI</strong> <em>(after a long moment)</em>: How long have you been holding that, Lucía? " +
        N(17) + "<strong>LUCÍA</strong>: Since six. " +
        N(18) + "<strong>ZURI</strong>: You didn't say anything. " +
        N(19) + "<strong>LUCÍA</strong>: You didn't ask anything. You just said \"keep it up.\" " +
        N(20) + "<em>(ZURI sits down on a stacked chair, which wobbles.)</em> " +
        N(21) + "<strong>ZURI</strong>: Okay. Ten minutes, everybody. Mrs. Kowalczyk, could we buy three hot chocolates? " +
        N(22) + "<strong>MRS. KOWALCZYK</strong> <em>(already reaching for the mugs)</em>: Now you're directing. " +
        N(23) + "<em>(Later. The chairs are still stacked. LUCÍA raises the boom, steady.)</em> " +
        N(24) + "<strong>ZURI</strong>: Take eight. Theo, say it however it feels true. Lucía, you tell me if the sound is bad, not the other way around. Rolling. " +
        N(25) + "<strong>THEO</strong> <em>(quietly, to the pancakes)</em>: I never wanted it. I just didn't want to be the one who said no. " +
        N(26) + "<em>(Nobody moves. A truck passes. Nobody cares.)</em> " +
        N(27) + "<strong>ZURI</strong> <em>(softly)</em>: Cut. That's the one.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme does the scene in Kowalczyk's Diner best develop?",
          choices: [
            { letter: "A", text: "Young people should not have to work so early in the morning." },
            { letter: "B", text: "Good leaders listen to the people working with them." },
            { letter: "C", text: "Films made in real places are always too noisy." },
            { letter: "D", text: "Actors should memorize their lines word for word." }
          ],
          correct: "B"
        },
        {
          id: "zuri",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Zuri's lines in sentences 1 through 7 characterize her at first as —",
          choices: [
            { letter: "A", text: "shy and unsure of her own ideas" },
            { letter: "B", text: "relaxed and willing to try anything" },
            { letter: "C", text: "bored with the project and ready to quit" },
            { letter: "D", text: "demanding and focused only on the shot" }
          ],
          correct: "D"
        },
        {
          id: "eggs",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.2",
          stem: "Mrs. Kowalczyk's story about her cook in sentence 12 mainly suggests to Zuri that —",
          choices: [
            { letter: "A", text: "being harsh with helpers can cost you the help you need" },
            { letter: "B", text: "the diner's eggs are better now than they used to be" },
            { letter: "C", text: "Zuri should hire a professional crew for all of her future films" },
            { letter: "D", text: "running a restaurant is harder than making a movie" }
          ],
          correct: "A"
        },
        {
          id: "looks",
          sol: "10.RL.1.D",
          sub: "10.RL.1.D.2",
          stem: "The stage direction in sentence 15 mainly serves to —",
          choices: [
            { letter: "A", text: "show that Theo has forgotten his line again" },
            { letter: "B", text: "suggest that the diner is about to open earlier than planned" },
            { letter: "C", text: "show Zuri finally seeing what her demands cost" },
            { letter: "D", text: "reveal that Lucía is planning to quit the crew" }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which line marks the turning point in how Zuri treats her crew?",
          choices: [
            { letter: "A", text: "Sentence 16, when she asks how long Lucía has held the boom" },
            { letter: "B", text: "Sentence 7, when she asks whether Lucía can hear a truck" },
            { letter: "C", text: "Sentence 3, when she warns that the mic dipped into frame" },
            { letter: "D", text: "Sentence 13, when she insists to Mrs. Kowalczyk that she is not yelling" }
          ],
          correct: "A"
        },
        {
          id: "truck",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "The truck in sentence 26 creates irony mainly because —",
          choices: [
            { letter: "A", text: "Theo did not even notice it while he was saying his line" },
            { letter: "B", text: "Mrs. Kowalczyk owns the truck that drives by" },
            { letter: "C", text: "Lucía hears it but chooses not to mention it" },
            { letter: "D", text: "the noise that ruined take seven no longer matters" }
          ],
          correct: "D"
        },
        {
          id: "directing",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.2",
          stem: "Mrs. Kowalczyk's comment in sentence 22, Now you're directing, suggests that she believes directing means —",
          choices: [
            { letter: "A", text: "spending money freely on snacks for the film crew" },
            { letter: "B", text: "finishing before the diner opens" },
            { letter: "C", text: "caring for the crew, not only giving orders" },
            { letter: "D", text: "knowing exactly how each line should sound" }
          ],
          correct: "C"
        },
        {
          id: "true-line",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "Theo's line in sentence 25 differs from the scripted line in sentence 1 mainly because it —",
          choices: [
            { letter: "A", text: "is shorter and easier for him to remember" },
            { letter: "B", text: "sounds more honest and personal" },
            { letter: "C", text: "repeats the script word for word" },
            { letter: "D", text: "was written for him by Mrs. Kowalczyk" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── LONG · Functional text (level 1) ───────────────────────── */
    {
      id: "g10-ri-c81-junior-aviators",
      family: "G10",
      title: "Junior Aviators Summer Camp",
      kind: "Functional text · 10.RI",
      blurb: "A museum's registration guide for a week of gliders, a restoration hangar, and a flight simulator.",
      level: 1,
      passage:
        "<p><strong>Skyward Aviation Heritage Museum — Junior Aviators Summer Camp: Registration Guide</strong></p>" +
        "<p>" + N(1) + "The Skyward Aviation Heritage Museum invites students entering grades 9 through 12 to spend a week learning how flight works, from the fabric-covered biplanes of the early 1900s to the jets overhead today. " +
        N(2) + "Campers build and test model gliders, tour the restoration hangar, and spend one afternoon in the museum's flight simulator.</p>" +
        "<p><strong>Who May Apply</strong></p>" +
        "<p>" + N(3) + "Applicants must be between 14 and 18 years old on the first day of their session. " +
        N(4) + "No previous experience with aviation or engineering is required. " +
        N(5) + "Each session is limited to 24 campers so that every student gets time in the simulator.</p>" +
        "<p><strong>Camp Sessions</strong></p>" +
        "<p>" + N(6) + "Session A runs June 16 to 20, and Session B runs July 14 to 18. " +
        N(7) + "Camp meets Monday through Friday from 9 a.m. to 3:30 p.m. in the Education Wing. " +
        N(8) + "On Friday afternoon, families are invited to the Glider Challenge, where campers launch their models from the museum's second-floor balcony.</p>" +
        "<p><strong>How to Register</strong></p>" +
        "<p>" + N(9) + "Complete the online registration form on the museum's website by May 15. " +
        N(10) + "Upload a signed parent or guardian permission form; registrations without this form will not be processed. " +
        N(11) + "Pay the camp fee or submit a scholarship request (see below). " +
        N(12) + "Watch for a confirmation email within five business days; if you do not receive one, call the Education Office.</p>" +
        "<p><strong>Fees and Scholarships</strong></p>" +
        "<p>" + N(13) + "The fee is $275 per session, which includes all building materials, a camp T-shirt, and lunch on Friday. " +
        N(14) + "Students should bring their own lunch Monday through Thursday. " +
        N(15) + "Need-based scholarships covering the full fee are available for up to six campers per session. " +
        N(16) + "To apply, check the scholarship box on the registration form and include a short paragraph explaining why you want to attend. " +
        N(17) + "Scholarship requests must be received by May 1, two weeks before the regular deadline.</p>" +
        "<p><strong>What to Bring</strong></p>" +
        "<p>" + N(18) + "Campers should bring a refillable water bottle, a notebook, and closed-toe shoes. " +
        N(19) + "Closed-toe shoes are required in the restoration hangar, where tools and aircraft parts are in use; campers wearing sandals will be asked to wait in the Education Wing during the hangar tour. " +
        N(20) + "Phones may be used during breaks but must be stored in cubbies during simulator sessions.</p>" +
        "<p><strong>Cancellations</strong></p>" +
        "<p>" + N(21) + "Families who cancel before June 1 receive a full refund. " +
        N(22) + "After June 1, refunds are given only if the museum can fill the open spot from its waiting list.</p>",
      claims: [
        {
          id: "audience",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The Junior Aviators guide is written mainly for —",
          choices: [
            { letter: "A", text: "pilots who want to work at the museum" },
            { letter: "B", text: "teachers planning a class field trip in the fall" },
            { letter: "C", text: "teens and families considering the camp" },
            { letter: "D", text: "volunteers who restore old aircraft" }
          ],
          correct: "C"
        },
        {
          id: "shoes",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the guide, why must campers wear closed-toe shoes?",
          choices: [
            { letter: "A", text: "Tools and aircraft parts are in use in the hangar." },
            { letter: "B", text: "The balcony floor is slippery during the challenge." },
            { letter: "C", text: "The flight simulator requires pressing foot pedals." },
            { letter: "D", text: "Sandals are not allowed anywhere in the museum." }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "How do the bold headings in the Junior Aviators guide mainly help a reader?",
          choices: [
            { letter: "A", text: "They show the order in which the week's camp activities happen." },
            { letter: "B", text: "They explain the history of the aviation museum." },
            { letter: "C", text: "They tell which camp session is the better choice." },
            { letter: "D", text: "They help readers find each kind of information fast." }
          ],
          correct: "D"
        },
        {
          id: "scholar",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Which statement is best supported by sentences 15 through 17 together?",
          choices: [
            { letter: "A", text: "Every camper who applies will receive a full scholarship." },
            { letter: "B", text: "A student who needs help with the fee must apply early." },
            { letter: "C", text: "Scholarship campers pay half of the regular camp fee." },
            { letter: "D", text: "Scholarships are offered only for Session B this year." }
          ],
          correct: "B"
        },
        {
          id: "limit",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The guide explains in sentence 5 that sessions are limited to 24 campers mainly to —",
          choices: [
            { letter: "A", text: "warn that the camp may be canceled this year" },
            { letter: "B", text: "show that the museum building is very small" },
            { letter: "C", text: "encourage families to register for both sessions" },
            { letter: "D", text: "give the reason for keeping the groups small" }
          ],
          correct: "D"
        },
        {
          id: "processed",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 10, the phrase will not be processed most nearly means the registration will not be —",
          choices: [
            { letter: "A", text: "officially handled and accepted" },
            { letter: "B", text: "mailed back to the family at home" },
            { letter: "C", text: "shared with other campers" },
            { letter: "D", text: "printed on museum paper" }
          ],
          correct: "A"
        },
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the Junior Aviators guide as a whole?",
          choices: [
            { letter: "A", text: "It tells the history of flight from biplanes to jets." },
            { letter: "B", text: "It explains who may attend and how to sign up." },
            { letter: "C", text: "It argues that every teen should learn to fly." },
            { letter: "D", text: "It lists the aircraft displayed in the hangar." }
          ],
          correct: "B"
        },
        {
          id: "refund",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Based on the guide, which family is sure to receive a full refund?",
          choices: [
            { letter: "A", text: "A family that cancels on June 10 with no waiting list" },
            { letter: "B", text: "A family that cancels on the first day of Session A" },
            { letter: "C", text: "A family that cancels on May 28, before the cutoff" },
            { letter: "D", text: "A family whose camper skips the Friday challenge" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · Argument (level 3) ───────────────────────── */
    {
      id: "g10-ri-c81-cameras-back",
      family: "G10",
      title: "Put the Cameras Back",
      kind: "Argument · 10.RI",
      blurb: "A student columnist argues that a museum's photography ban protects nothing and pushes young visitors away.",
      level: 3,
      passage:
        "<p><strong>Put the Cameras Back in the Galleries</strong> (an opinion column from the <em>Eastfield High Lantern</em>)</p>" +
        "<p>" + N(1) + "Last spring, the Eastfield Museum of Art quietly hung new signs in every gallery: No Photography of Any Kind. " +
        N(2) + "The museum says the rule protects the artwork and improves the experience for visitors. " +
        N(3) + "Those are worthy goals, but the ban does little to achieve them, and it costs the museum something it cannot afford to lose: the attention of young visitors.</p>" +
        "<p>" + N(4) + "Start with protection. " +
        N(5) + "The real danger to paintings from cameras is the flash, whose bright bursts can, over many years, fade delicate pigments. " +
        N(6) + "But a flash ban already existed before the new rule, and every phone can take clear pictures without one. " +
        N(7) + "Many large museums allow flash-free photography in most galleries, and they have not reported damage as a result. " +
        N(8) + "If the concern is light, the museum should enforce the flash rule it already has, not forbid photos that cause no harm.</p>" +
        "<p>" + N(9) + "The museum's second argument deserves more respect. " +
        N(10) + "Anyone who has stood behind a crowd of raised phones knows how frustrating it can be when people seem more interested in capturing a painting than in looking at it. " +
        N(11) + "That frustration is real. " +
        N(12) + "Yet the solution is not a ban; it is courtesy. " +
        N(13) + "Signs asking visitors to step aside after taking a photo, or a few phone-free hours each week, would protect quiet viewing without punishing everyone.</p>" +
        "<p>" + N(14) + "The strongest reason to lift the ban, however, is what photography does for visitors my age. " +
        N(15) + "When I visited with my art class in March, I watched classmates who rarely talk about art crowd around a small landscape, zooming in on their screens to see the brushstrokes up close. " +
        N(16) + "Later that week, several of them were still sharing the pictures and arguing about what the painter meant. " +
        N(17) + "A photograph is often how a teenager carries a museum home. " +
        N(18) + "Our school's art teacher put it plainly: \"The picture is not a replacement for the visit. It's an invitation to come back.\"</p>" +
        "<p>" + N(19) + "Attendance figures support her. " +
        N(20) + "According to the museum's own annual report, visits by people under twenty-five dropped by nearly a fifth in the year after the ban. " +
        N(21) + "Other changes that year, such as a rise in ticket prices, may also have played a part. " +
        N(22) + "Still, it is hard to believe that telling young visitors to put their phones away at the door made them feel more welcome.</p>" +
        "<p>" + N(23) + "The Eastfield Museum exists to bring people and art together. " +
        N(24) + "Its photography ban, however well meant, pushes some of those people away. " +
        N(25) + "The museum should keep its flash rule, add a few phone-free hours, and let the rest of us take our pictures home.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which statement best expresses the writer's central claim in \"Put the Cameras Back in the Galleries\"?",
          choices: [
            { letter: "A", text: "The museum should lift its photo ban but keep its flash rule." },
            { letter: "B", text: "The museum should lower its ticket prices for younger visitors right away." },
            { letter: "C", text: "Phones should be banned from museums during busy hours." },
            { letter: "D", text: "Flash photography causes little real harm to old paintings." }
          ],
          correct: "A"
        },
        {
          id: "counter",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "In sentences 9 through 13, the writer handles the museum's second argument mainly by —",
          choices: [
            { letter: "A", text: "dismissing it as a complaint from a few visitors" },
            { letter: "B", text: "proving with numbers that crowds are not a problem" },
            { letter: "C", text: "granting that it is real but offering a milder fix" },
            { letter: "D", text: "changing the subject to the rising cost of museum tickets" }
          ],
          correct: "C"
        },
        {
          id: "weakens",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which detail from the passage most weakens the writer's use of the attendance figures?",
          choices: [
            { letter: "A", text: "Several classmates kept sharing pictures that week." },
            { letter: "B", text: "Ticket prices also rose in the year of the ban." },
            { letter: "C", text: "A flash ban existed before the new signs went up." },
            { letter: "D", text: "Many large museums allow flash-free photography." }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How does the writer organize sentences 4 through 18?",
          choices: [
            { letter: "A", text: "By telling the story of the art class trip in time order" },
            { letter: "B", text: "By comparing the Eastfield Museum with other museums" },
            { letter: "C", text: "By listing problems with phones from the least to the most serious" },
            { letter: "D", text: "By answering the museum's reasons, then saving the strongest" }
          ],
          correct: "D"
        },
        {
          id: "teacher",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The writer includes the art teacher's words in sentence 18 mainly to —",
          choices: [
            { letter: "A", text: "show that teachers disagree with the museum's director" },
            { letter: "B", text: "suggest that photos can draw young people back again" },
            { letter: "C", text: "explain why the art class visited the museum in March" },
            { letter: "D", text: "prove that photographs are as valuable as the paintings" }
          ],
          correct: "B"
        },
        {
          id: "speculation",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence presents the writer's speculation rather than a reported fact?",
          choices: [
            { letter: "A", text: "Sentence 1, about the signs hung in every gallery" },
            { letter: "B", text: "Sentence 20, about the drop in young visitors" },
            { letter: "C", text: "Sentence 22, about what made young visitors feel welcome" },
            { letter: "D", text: "Sentence 6, about the flash ban that already existed before" }
          ],
          correct: "C"
        },
        {
          id: "quietly",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The writer says in sentence 1 that the museum quietly hung its new signs. Compared with simply hung, quietly suggests that the museum —",
          choices: [
            { letter: "A", text: "made the change without much public notice" },
            { letter: "B", text: "hung the signs late at night after the museum closed" },
            { letter: "C", text: "asked visitors to whisper in the galleries" },
            { letter: "D", text: "was proud of the new rule and its signs" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The writer's tone toward the Eastfield Museum throughout the column is best described as —",
          choices: [
            { letter: "A", text: "angry and openly insulting" },
            { letter: "B", text: "amused and careless" },
            { letter: "C", text: "neutral and detached" },
            { letter: "D", text: "critical but respectful" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
