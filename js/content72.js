/* SOL Labyrinth — v5.15 expansion content72: Grade 10 mid-length packs (Virginia G10).
 * Seventeen original packs (310–370 words; poems 18–22 lines; paired texts 170–200 words each)
 * built around a cooking contest, a planetarium, tree-climbing arborists and a ferry crossing.
 * Original text only. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── Literary · cooking contest (level 1) ───────────── */
    {
      id: "g10-rl-c72-third-burner",
      family: "G10",
      title: "The Third Burner",
      kind: "Literary · 10.RL",
      blurb: "A burner dies mid-round, and the only spare one belongs to last year's winner.",
      level: 1,
      passage:
        "<p>" + N(1) + "With forty minutes left in the Tri-County Youth Cook-Off, Huong Pham's burner clicked twice and went dark. " +
        N(2) + "She pressed the power button, then pressed it again, harder, as if the machine could be persuaded. " +
        N(3) + "Nothing happened. " +
        N(4) + "Her broth, which needed at least thirty more minutes of steady simmering, sat in the pot like a pond on a windless day.</p>" +
        "<p>" + N(5) + "A volunteer in a green apron hurried over, checked the cord, and shook his head. " +
        N(6) + "\"We can get you a replacement,\" he said, \"but it might take twenty minutes to bring one up from storage.\" " +
        N(7) + "Huong looked at the clock above the judges' table, where the red numbers seemed to be falling faster than any clock had a right to.</p>" +
        "<p>" + N(8) + "At the next station, Owen Castellanos was browning onions for his enchilada sauce. " +
        N(9) + "He had beaten her by two points at last spring's contest, and neither of them had forgotten it. " +
        N(10) + "Without looking up, he slid his pan to the back of his own double burner and nodded at the empty front one. " +
        N(11) + "\"Use the front,\" he said. \"I only need the back for ten more minutes anyway.\"</p>" +
        "<p>" + N(12) + "Huong hesitated. " +
        N(13) + "Accepting help felt like admitting she could not handle the round on her own. " +
        N(14) + "Then she thought of her grandmother, who had cooked for eleven people in a kitchen with one working stove and had never once called that a disadvantage. " +
        N(15) + "She carried her pot over.</p>" +
        "<p>" + N(16) + "The broth would never be as deep as she had planned, so she changed the plan. " +
        N(17) + "Instead of a full bowl of soup, she rolled thin rice paper around shrimp, mint, and pickled carrot, and served the shortened broth in a small cup for dipping. " +
        N(18) + "It was a smaller dish than she had imagined, but every part of it was finished.</p>" +
        "<p>" + N(19) + "When the scores were posted, Owen had won again, this time by a single point. " +
        N(20) + "Huong found him by the sinks and shook his hand. " +
        N(21) + "\"Next year,\" she said, \"I'm bringing my own extension cord.\" " +
        N(22) + "He laughed, and for the first time in two contests, she laughed too.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"The Third Burner\"?",
          choices: [
            { letter: "A", text: "Accepting help from a rival can be a sign of strength." },
            { letter: "B", text: "Careful planning prevents nearly every kitchen problem." },
            { letter: "C", text: "Contests usually reward the most complicated dishes." },
            { letter: "D", text: "Family recipes should be cooked exactly as written." }
          ],
          correct: "A"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The central conflict of \"The Third Burner\" is best described as Huong's struggle to —",
          choices: [
            { letter: "A", text: "win back the title she lost to Owen last spring" },
            { letter: "B", text: "keep Owen from learning her family's broth recipe" },
            { letter: "C", text: "finish a dish after her burner fails and pride resists help" },
            { letter: "D", text: "convince the volunteer to bring a new burner more quickly" }
          ],
          correct: "C"
        },
        {
          id: "hesitate",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 12 and 13 characterize Huong as someone who —",
          choices: [
            { letter: "A", text: "distrusts the contest volunteers" },
            { letter: "B", text: "values handling problems on her own" },
            { letter: "C", text: "dislikes the way Owen cooks onions" },
            { letter: "D", text: "panics whenever a clock is running" }
          ],
          correct: "B"
        },
        {
          id: "pond",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 4, comparing Huong's broth to a pond on a windless day emphasizes that the broth is —",
          choices: [
            { letter: "A", text: "cloudy and unappetizing" },
            { letter: "B", text: "rich and full of flavor" },
            { letter: "C", text: "still and no longer cooking" },
            { letter: "D", text: "too salty for the judges" }
          ],
          correct: "C"
        },
        {
          id: "grandmother",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author includes the memory of Huong's grandmother in sentence 14 mainly to —",
          choices: [
            { letter: "A", text: "explain where Huong learned to make rice-paper rolls" },
            { letter: "B", text: "show what helps Huong decide to accept Owen's offer" },
            { letter: "C", text: "suggest that Huong's family often entered contests" },
            { letter: "D", text: "contrast a crowded home kitchen with the contest hall" }
          ],
          correct: "B"
        },
        {
          id: "shortened",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 17, the word shortened tells the reader that Huong's broth had —",
          choices: [
            { letter: "A", text: "simmered for less time than she planned" },
            { letter: "B", text: "been poured into a much smaller pot" },
            { letter: "C", text: "lost most of its salt and seasoning" },
            { letter: "D", text: "been thinned with extra cold water" }
          ],
          correct: "A"
        },
        {
          id: "cord",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Huong's remark about bringing her own extension cord (sentence 21) mainly suggests that she —",
          choices: [
            { letter: "A", text: "blames the organizers for her loss" },
            { letter: "B", text: "plans to cook with gas next year" },
            { letter: "C", text: "hopes Owen will lend her tools again" },
            { letter: "D", text: "can now see the setback with humor" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── Literary · planetarium (level 2) ───────────── */
    {
      id: "g10-rl-c72-dark-dome",
      family: "G10",
      title: "The Dark Dome",
      kind: "Literary · 10.RL",
      blurb: "The planetarium loses power in the middle of a show, and a volunteer remembers what is outside.",
      level: 2,
      passage:
        "<p>" + N(1) + "Leilani had given the \"Winter Sky\" show forty-one times, and she could have recited it in her sleep. " +
        N(2) + "The script lived in a binder at the control desk, but she no longer opened it; she knew exactly when to fade the sunset glow, when to bring up Orion, and when to tell the joke about the dog star chasing the hunter. " +
        N(3) + "The third graders from Kealoha Elementary had just settled into their reclining seats when the projector gave a long electrical sigh and the dome went black.</p>" +
        "<p>" + N(4) + "Not dim, but black. " +
        N(5) + "Thirty children gasped at once, and a teacher said, \"Everyone stay seated,\" in the calm voice teachers save for emergencies. " +
        N(6) + "Leilani flipped the backup switch. " +
        N(7) + "Nothing. " +
        N(8) + "She called Mr. Faleolo, the director, who answered from the parking lot and said the whole building had lost power. " +
        N(9) + "\"Could be an hour,\" he said. \"Maybe send them home early?\"</p>" +
        "<p>" + N(10) + "Leilani looked up at the blank dome, a ceiling with nothing to say. " +
        N(11) + "Then she remembered something the script never mentioned: the show was scheduled for six-thirty on a January evening, on an island where the nearest streetlight was half a mile away. " +
        N(12) + "\"Okay,\" she told the dark room. \"Who wants to see the real one?\"</p>" +
        "<p>" + N(13) + "She led them out the side door with a red flashlight, the teachers counting heads at every step. " +
        N(14) + "On the lawn behind the building, the children lay down on the cool grass and looked up. " +
        N(15) + "The sky was not as tidy as the projected version. " +
        N(16) + "There were no glowing lines connecting the stars of Orion, no labels, no gentle music. " +
        N(17) + "There were simply more stars than Leilani had ever been able to show indoors, scattered like spilled sugar across the black.</p>" +
        "<p>" + N(18) + "She found Orion for them anyway, tracing his belt with the flashlight beam, and she told the joke about the dog star. " +
        N(19) + "Nobody laughed, because they were too busy pointing. " +
        N(20) + "A boy near her feet whispered, \"It's way bigger out here.\"</p>" +
        "<p>" + N(21) + "When the power returned forty minutes later, Mr. Faleolo found the dome empty and the lawn full. " +
        N(22) + "Leilani did not apologize. " +
        N(23) + "She simply added a line in pencil to the back page of the binder: Check the weather. Then consider the door.</p>",
      claims: [
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in \"The Dark Dome\" is most ironic?",
          choices: [
            { letter: "A", text: "The planetarium's failure gives the children a better view of the stars." },
            { letter: "B", text: "A teacher tells the children to stay seated when the lights go out." },
            { letter: "C", text: "Leilani knows the script well enough to stop opening the binder." },
            { letter: "D", text: "Mr. Faleolo answers his phone from the planetarium parking lot." }
          ],
          correct: "A"
        },
        {
          id: "routine",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 1 and 2 characterize Leilani as someone who —",
          choices: [
            { letter: "A", text: "has grown bored with her volunteer job" },
            { letter: "B", text: "knows the show thoroughly and relies on routine" },
            { letter: "C", text: "prefers telling jokes to explaining facts" },
            { letter: "D", text: "feels nervous speaking to young audiences" }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the turning point in the action of \"The Dark Dome\"?",
          choices: [
            { letter: "A", text: "Sentence 3, when the projector sighs and the dome goes black" },
            { letter: "B", text: "Sentence 9, when the director suggests sending the class home" },
            { letter: "C", text: "Sentence 11, when Leilani realizes what is waiting outside" },
            { letter: "D", text: "Sentence 21, when the power returns to the empty building" }
          ],
          correct: "C"
        },
        {
          id: "ceiling",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 10, calling the dome a ceiling with nothing to say suggests that, without the projector, the dome —",
          choices: [
            { letter: "A", text: "has become unsafe for the students" },
            { letter: "B", text: "has lost the purpose that made it special" },
            { letter: "C", text: "is too dark for the teachers to count heads" },
            { letter: "D", text: "reflects Leilani's anger at the director" }
          ],
          correct: "B"
        },
        {
          id: "tidy",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 15, saying the real sky was not as tidy as the projected version means that the real sky —",
          choices: [
            { letter: "A", text: "was cloudier than the forecast had promised" },
            { letter: "B", text: "held fewer stars than the projector displayed" },
            { letter: "C", text: "moved too quickly for the children to follow" },
            { letter: "D", text: "lacked the lines and labels that sorted the show" }
          ],
          correct: "D"
        },
        {
          id: "binder",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author ends the story with the note Leilani writes in the binder (sentence 23) mainly to —",
          choices: [
            { letter: "A", text: "show that she has learned to adapt a routine she once followed exactly" },
            { letter: "B", text: "reveal that she expects to be scolded for leaving the building" },
            { letter: "C", text: "suggest that the script needs more jokes to hold attention" },
            { letter: "D", text: "explain to the reader why the building lost its power" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best developed in \"The Dark Dome\"?",
          choices: [
            { letter: "A", text: "Technology should be replaced by older methods." },
            { letter: "B", text: "Children learn best when adults let them be loud." },
            { letter: "C", text: "A disruption can lead to a truer experience than the plan." },
            { letter: "D", text: "Volunteers should not decide anything without a director." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── Literary · arborists (level 3) ───────────── */
    {
      id: "g10-rl-c72-crown-work",
      family: "G10",
      title: "Crown Work",
      kind: "Literary · 10.RL",
      blurb: "A nervous summer worker climbs into a storm-broken sycamore beside his aunt.",
      level: 3,
      passage:
        "<p>" + N(1) + "Aunt Rosa believed that the ground was the most dangerous place on any job, because people on the ground got careless. " +
        N(2) + "Mateo, who had spent three weeks of his summer dragging brush to the chipper, privately believed the opposite. " +
        N(3) + "From the driveway, the old sycamore in Mrs. Adeyemi's yard looked like a white-armed giant that had lost an argument with the storm: one limb, thick as a barrel, hung snapped and twisted forty feet up, caught in the branches below it.</p>" +
        "<p>" + N(4) + "\"That's a hanger,\" Rosa said. \"It comes down on our terms, or it comes down on somebody's car.\" " +
        N(5) + "She clipped her own rope to the tree, then turned and held out a second harness. " +
        N(6) + "\"I want you at the first crotch today. I need eyes closer than the driveway.\"</p>" +
        "<p>" + N(7) + "Mateo buckled the harness with fingers that did not feel like his. " +
        N(8) + "The first fifteen feet were the worst; every time the rope stretched, his stomach tried to leave without him. " +
        N(9) + "Rosa climbed beside him and then above him, unhurried, talking about nothing: the heat, the chipper's new blades, the price of rope. " +
        N(10) + "Only later did he understand that the talking was the lesson.</p>" +
        "<p>" + N(11) + "At the first crotch he braced his boots against bark that was warm, scaly, and surprisingly solid. " +
        N(12) + "Below, the driveway looked like a drawing of a driveway. " +
        N(13) + "Above, Rosa set a lowering line around the hanger and called down each step before she did it: tie, cut, let it swing, lower slow. " +
        N(14) + "The limb came down in three pieces, each one riding the rope as gently as a basket on a pulley.</p>" +
        "<p>" + N(15) + "When she finished, Rosa did not climb down right away. " +
        N(16) + "She rested her palm against the trunk the way Mrs. Adeyemi rested hers on the garden gate. " +
        N(17) + "\"Two hundred years,\" she said. \"It'll outlive the house if we let it.\"</p>" +
        "<p>" + N(18) + "Mateo had expected to feel relief when his boots touched gravel. " +
        N(19) + "Instead, standing in the driveway with the rope coiled at his feet, he felt oddly unsteady, as if the ground were the thing that might give way. " +
        N(20) + "He went to gather the hanger's pieces slowly and carefully, because Rosa was watching, and because she had been right about the ground.</p>",
      claims: [
        {
          id: "change",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Which sentence best shows a change in Mateo's understanding of his aunt?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Sentence 19 is ironic mainly because Mateo —",
          choices: [
            { letter: "A", text: "feels least steady in the place he once thought safest" },
            { letter: "B", text: "is relieved to be finished with a frightening climb" },
            { letter: "C", text: "wishes he had been the one to cut the limb himself" },
            { letter: "D", text: "worries that his aunt will criticize his knots" }
          ],
          correct: "A"
        },
        {
          id: "giant",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 3, describing the sycamore as a giant that had lost an argument with the storm mainly suggests that the tree —",
          choices: [
            { letter: "A", text: "is too old to survive another summer" },
            { letter: "B", text: "was badly damaged but is still standing" },
            { letter: "C", text: "frightens the people who live nearby" },
            { letter: "D", text: "was planted in a poor, windy location" }
          ],
          correct: "B"
        },
        {
          id: "mentor",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Rosa's actions in sentences 9 and 13 characterize her as a mentor who —",
          choices: [
            { letter: "A", text: "expects beginners to learn by watching in silence" },
            { letter: "B", text: "worries more about her equipment than her crew" },
            { letter: "C", text: "hurries to finish the job before the heat builds" },
            { letter: "D", text: "teaches calm through example and clear steps" }
          ],
          correct: "D"
        },
        {
          id: "unhurried",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author describes Rosa as climbing unhurried (sentence 9) rather than slowly. Compared with slowly, unhurried suggests that Rosa —",
          choices: [
            { letter: "A", text: "is too tired to climb any faster" },
            { letter: "B", text: "keeps a calm pace by choice, not by need" },
            { letter: "C", text: "is unsure where to place her rope next" },
            { letter: "D", text: "wants Mateo to climb ahead of her" }
          ],
          correct: "B"
        },
        {
          id: "opening",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author opens \"Crown Work\" with Aunt Rosa's belief about the ground (sentence 1) mainly to —",
          choices: [
            { letter: "A", text: "set up an idea that Mateo comes to accept by the end" },
            { letter: "B", text: "explain why Rosa prefers to hire young workers" },
            { letter: "C", text: "show that Rosa is stricter than other crew leaders" },
            { letter: "D", text: "contrast the quiet yard with the busy street" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Crown Work\"?",
          choices: [
            { letter: "A", text: "Old trees should be cut down before storm season." },
            { letter: "B", text: "Relatives make the strictest and fairest bosses." },
            { letter: "C", text: "Fear can shift when a person sees from a new position." },
            { letter: "D", text: "Courage means hiding fear from the people around you." }
          ],
          correct: "C"
        }
      ]
    }
    ,

    /* ───────────── Literary · ferry crossing (level 2) ───────────── */
    {
      id: "g10-rl-c72-fog-crossing",
      family: "G10",
      title: "Fog Crossing",
      kind: "Literary · 10.RL",
      blurb: "An island student with an interview on the mainland meets a slow ferry and a patient captain.",
      level: 2,
      passage:
        "<p>" + N(1) + "The 7:15 ferry to Port Calloway left the island dock on time, which Ingrid took as a good sign. " +
        N(2) + "Her interview for the summer engineering program was at ten, and she had planned the morning down to the minute: crossing, bus, a coffee she would be too nervous to drink, then the brick building with the glass doors. " +
        N(3) + "Twenty minutes out, the fog arrived.</p>" +
        "<p>" + N(4) + "It did not roll in the way fog does in movies. " +
        N(5) + "It simply thickened, the way milk clouds tea, until the gulls following the stern disappeared one by one and the mainland was a rumor. " +
        N(6) + "The engines dropped to a low mutter. " +
        N(7) + "Every two minutes the horn sounded, a long flat note that seemed to go out into the gray and never come back.</p>" +
        "<p>" + N(8) + "Ingrid checked her phone. " +
        N(9) + "The ferry was crawling at a third of its usual speed. " +
        N(10) + "\"Can't they go faster?\" she asked the deckhand coiling rope near the rail, a broad man named Mr. Aksoy whose jacket was patched at both elbows. " +
        N(11) + "\"The fog doesn't care about my interview.\"</p>" +
        "<p>" + N(12) + "\"No,\" he agreed. \"And neither do the fishing boats out there with no radar.\" " +
        N(13) + "He tipped his head toward the wheelhouse, where the captain stood with one hand on the throttle and her eyes on a glowing screen. " +
        N(14) + "\"She's run this crossing for twenty-two years. Never lost a passenger. Never been on time in fog, either.\"</p>" +
        "<p>" + N(15) + "Ingrid opened her mouth to argue and then closed it. " +
        N(16) + "Through the gray, very close, a small white boat slid past them, a single man at its tiller, his face startled. " +
        N(17) + "He lifted a hand. " +
        N(18) + "The captain answered with one short blast of the horn, almost polite.</p>" +
        "<p>" + N(19) + "They docked forty minutes late. " +
        N(20) + "Ingrid ran for the bus, called the program office, and stammered an explanation to a woman who laughed and said half the island applicants had been delayed by the same fog. " +
        N(21) + "Her interview was moved to eleven.</p>" +
        "<p>" + N(22) + "In the waiting room, the first question on the form asked her to describe a good engineer. " +
        N(23) + "She thought about the captain's hand resting on the throttle, holding the boat back, and began to write.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is developed through Ingrid's experience on the ferry?",
          choices: [
            { letter: "A", text: "Patience and caution can matter more than a schedule." },
            { letter: "B", text: "Island life makes young people more independent." },
            { letter: "C", text: "Interviews reward the people who arrive earliest." },
            { letter: "D", text: "Modern technology has made sea travel risk-free." }
          ],
          correct: "A"
        },
        {
          id: "tension",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The tension during the crossing in \"Fog Crossing\" comes mainly from —",
          choices: [
            { letter: "A", text: "Ingrid's fear of deep, open water" },
            { letter: "B", text: "Ingrid's schedule pressing against the captain's caution" },
            { letter: "C", text: "a quarrel between the captain and Mr. Aksoy" },
            { letter: "D", text: "a sudden mechanical failure in the engines" }
          ],
          correct: "B"
        },
        {
          id: "milk",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 5, comparing the fog to the way milk clouds tea suggests that the fog —",
          choices: [
            { letter: "A", text: "smells sour and unpleasant" },
            { letter: "B", text: "is warmer than the morning air" },
            { letter: "C", text: "spreads gradually rather than all at once" },
            { letter: "D", text: "leaves the deck wet and slippery" }
          ],
          correct: "C"
        },
        {
          id: "rumor",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 5, saying that the mainland was a rumor means that the mainland —",
          choices: [
            { letter: "A", text: "was farther away than the map showed" },
            { letter: "B", text: "had been closed to boats by the storm" },
            { letter: "C", text: "was a topic of gossip among passengers" },
            { letter: "D", text: "could not be seen, only trusted to be there" }
          ],
          correct: "D"
        },
        {
          id: "closed",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Ingrid's reaction in sentence 15 shows that she —",
          choices: [
            { letter: "A", text: "is too shy to speak to adults" },
            { letter: "B", text: "begins to reconsider her complaint" },
            { letter: "C", text: "has decided to skip the interview" },
            { letter: "D", text: "is angry but trying to stay polite" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of sentences 16 through 18, when the small white boat appears, is best described as —",
          choices: [
            { letter: "A", text: "tense, then quietly relieved" },
            { letter: "B", text: "angry and accusing throughout" },
            { letter: "C", text: "playful and lighthearted" },
            { letter: "D", text: "mournful and full of regret" }
          ],
          correct: "A"
        },
        {
          id: "mutter",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "In sentence 6, the word mutter suggests that the ferry's engines were —",
          choices: [
            { letter: "A", text: "broken and about to stop" },
            { letter: "B", text: "roaring as loud as the horn" },
            { letter: "C", text: "completely silent in the fog" },
            { letter: "D", text: "running low and quiet" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── Informational · planetarium (level 1) ───────────── */
    {
      id: "g10-ri-c72-star-machine",
      family: "G10",
      title: "Two Ways to Make a Sky",
      kind: "Informational · 10.RI",
      blurb: "How a science center's dome shows the stars, with old pinholes and new pixels.",
      level: 1,
      passage:
        "<p>" + N(1) + "Step into the domed theater at the Harmon Science Center, and the first thing you notice is the ceiling. " +
        N(2) + "It is not really a ceiling at all but a screen: a perforated aluminum shell, sixty feet across, curved so that it fills nearly every direction you can look. " +
        N(3) + "The tiny holes in the metal let sound from speakers behind the dome pass through, and they keep the surface from bouncing light back and forth until the picture washes out.</p>" +
        "<p>" + N(4) + "For most of the twentieth century, planetariums used a single heavy projector that stood in the center of the room. " +
        N(5) + "Inside it, a bright lamp shone through metal plates drilled with thousands of pinholes, each hole placed to match the position of a real star. " +
        N(6) + "Gears turned the whole machine to show the sky rising and setting. " +
        N(7) + "These optical projectors produced remarkably sharp stars, but they could show only what had been drilled into their plates.</p>" +
        "<p>" + N(8) + "Today, Harmon's dome is lit by six digital projectors mounted around its edge. " +
        N(9) + "Each covers one slice of the dome, and software blends the edges so that the slices meet without a visible seam. " +
        N(10) + "Because the images come from a computer, the dome can show far more than the night sky. " +
        N(11) + "In a single show, visitors might fly past the rings of Saturn, watch a comet's tail stretch as it nears the sun, or see what the sky over their town looked like ten thousand years ago.</p>" +
        "<p>" + N(12) + "The change has a cost. " +
        N(13) + "Digital stars are made of pixels, and up close they can look slightly soft compared with the pinpoint stars of the old machines. " +
        N(14) + "For that reason, Harmon's staff chose to keep their 1968 optical projector in working order. " +
        N(15) + "On the first Friday of every month, it rises from a pit in the floor for a \"classic sky\" night that regularly sells out.</p>" +
        "<p>" + N(16) + "\"People ask which system is better,\" says the center's chief educator. " +
        N(17) + "\"The honest answer is that they do different jobs. " +
        N(18) + "One shows you the sky exactly. " +
        N(19) + "The other shows you why the sky looks the way it does.\"</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"Two Ways to Make a Sky\"?",
          choices: [
            { letter: "A", text: "Optical projectors were dropped because they broke too often." },
            { letter: "B", text: "Domes moved to digital projection, yet the old machine still has value." },
            { letter: "C", text: "The metal screen is the most important part of a planetarium." },
            { letter: "D", text: "Digital shows are popular mainly because they cost less to run." }
          ],
          correct: "B"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 4 through 11 of \"Two Ways to Make a Sky\" mainly organized?",
          choices: [
            { letter: "A", text: "by comparing an older projection method with a newer one" },
            { letter: "B", text: "as a list of visitor complaints followed by solutions" },
            { letter: "C", text: "in order of importance, from least to most important" },
            { letter: "D", text: "as a series of opinions from different staff members" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Which sentence best supports the idea that digital projectors can show things the optical projector cannot?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "C"
        },
        {
          id: "perforated",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 2, the word perforated most nearly means —",
          choices: [
            { letter: "A", text: "painted a dark color" },
            { letter: "B", text: "full of small holes" },
            { letter: "C", text: "bent into a curve" },
            { letter: "D", text: "polished to a shine" }
          ],
          correct: "B"
        },
        {
          id: "cost",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes sentences 12 and 13 mainly to —",
          choices: [
            { letter: "A", text: "argue that the center wasted money on new projectors" },
            { letter: "B", text: "describe how pixels are made inside a projector" },
            { letter: "C", text: "warn visitors not to sit too close to the dome" },
            { letter: "D", text: "explain why the center kept its older projector" }
          ],
          correct: "D"
        },
        {
          id: "quote",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The educator's quotation in sentences 17 through 19 mainly emphasizes that —",
          choices: [
            { letter: "A", text: "the two systems serve different purposes" },
            { letter: "B", text: "the old projector will soon be retired" },
            { letter: "C", text: "most visitors prefer the classic sky" },
            { letter: "D", text: "the staff distrusts digital stars" }
          ],
          correct: "A"
        },
        {
          id: "project",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word projector contains the prefix pro- (forward) and the root ject (throw), as in eject. Based on this, a projector is a device that —",
          choices: [
            { letter: "A", text: "gathers light from distant stars" },
            { letter: "B", text: "measures how far away stars are" },
            { letter: "C", text: "throws an image forward onto a surface" },
            { letter: "D", text: "records sound from behind the dome" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── Informational · arborists (level 2) ───────────── */
    {
      id: "g10-ri-c72-reading-trees",
      family: "G10",
      title: "Read the Tree First",
      kind: "Informational · 10.RI",
      blurb: "Before a climbing arborist trusts a tree with a rope, the tree gets an inspection.",
      level: 2,
      passage:
        "<p>" + N(1) + "To most people, a tree is scenery. " +
        N(2) + "To a climbing arborist, it is a structure to be inspected, much like a bridge or a building, before anyone trusts it with their weight. " +
        N(3) + "Arborists, the professionals who prune, repair, and remove trees, spend the first part of nearly every job on the ground, looking up.</p>" +
        "<p>" + N(4) + "That inspection begins at the base. " +
        N(5) + "Mushrooms growing near the roots can signal decay hidden underground, and soil that has heaved or cracked on one side may mean the roots are lifting. " +
        N(6) + "Moving upward, the climber studies the trunk for cavities, deep cracks, and places where two stems grow together in a tight V. " +
        N(7) + "Such unions often trap bark between them, and the trapped bark acts like a wedge, weakening the joint over the years. " +
        N(8) + "Finally, the climber scans the crown for dead branches, which can snap without warning and are known in the trade by the blunt nickname \"widowmakers.\"</p>" +
        "<p>" + N(9) + "Only after this survey does the climber choose an anchor point, a sturdy branch high in the tree over which the climbing rope will run. " +
        N(10) + "Many arborists use a throw bag, a small weighted pouch tied to a thin line, to send the line over the chosen branch from the ground. " +
        N(11) + "A good anchor is thick, alive, and close to the trunk; a poor one can turn a routine climb into an emergency.</p>" +
        "<p>" + N(12) + "Equipment has improved dramatically. " +
        N(13) + "Today's ropes stretch slightly to absorb shock, and mechanical devices let a climber ascend and descend smoothly without tying new knots at each stage. " +
        N(14) + "Yet experienced arborists insist that no device replaces judgment. " +
        N(15) + "When one regional tree-care association reviewed its members' accident reports, it found that most injuries involved not broken gear but a misread tree: a branch that looked solid and was not.</p>" +
        "<p>" + N(16) + "For that reason, many crews follow a rule that sounds almost too obvious to state. " +
        N(17) + "Before you climb a tree, you have to read it. " +
        N(18) + "The tree, after all, has been telling its story for decades; the climber's job is to listen before stepping into it.</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which of these best summarizes \"Read the Tree First\"?",
          choices: [
            { letter: "A", text: "Arborists inspect a whole tree before climbing, because judgment matters most." },
            { letter: "B", text: "Modern ropes and devices have made climbing trees almost completely safe." },
            { letter: "C", text: "Mushrooms near the roots are the surest sign that a tree is about to die." },
            { letter: "D", text: "Arborists usually prefer removing trees to climbing and pruning them." }
          ],
          correct: "A"
        },
        {
          id: "order",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How is the information in sentences 4 through 8 of \"Read the Tree First\" organized?",
          choices: [
            { letter: "A", text: "from the most common problem to the rarest" },
            { letter: "B", text: "in order from the base of the tree up to the crown" },
            { letter: "C", text: "as one cause followed by several of its effects" },
            { letter: "D", text: "as a contrast between two different kinds of trees" }
          ],
          correct: "B"
        },
        {
          id: "misread",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which sentence best supports the claim that misjudging a tree is a greater danger than equipment failure?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "C"
        },
        {
          id: "bridge",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 2, the author compares a tree to a bridge or a building mainly to emphasize that —",
          choices: [
            { letter: "A", text: "many trees are cut down to make room for construction" },
            { letter: "B", text: "a climber must check whether a tree can bear a load" },
            { letter: "C", text: "arborists need training in engineering and design" },
            { letter: "D", text: "old trees are worth as much money as buildings" }
          ],
          correct: "B"
        },
        {
          id: "wedge",
          sol: "10.RV.1.F",
          sub: "10.RV.1.F.1",
          stem: "In sentence 7, the phrase acts like a wedge suggests that the trapped bark —",
          choices: [
            { letter: "A", text: "slowly pushes the two stems apart" },
            { letter: "B", text: "shields the joint from insects" },
            { letter: "C", text: "helps the tree heal its wounds" },
            { letter: "D", text: "holds the stems tightly together" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author's tone in the final paragraph of \"Read the Tree First\" (sentences 16–18) is best described as —",
          choices: [
            { letter: "A", text: "mocking and dismissive" },
            { letter: "B", text: "urgent and fearful" },
            { letter: "C", text: "detached and indifferent" },
            { letter: "D", text: "respectful and reflective" }
          ],
          correct: "D"
        },
        {
          id: "nickname",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author includes the nickname widowmakers in sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "entertain readers with colorful work slang" },
            { letter: "B", text: "show that arborists dislike certain trees" },
            { letter: "C", text: "define a term used with the throw bag" },
            { letter: "D", text: "stress how dangerous dead branches are" }
          ],
          correct: "D"
        }
      ]
    }
    ,

    /* ───────────── Informational · ferry history (level 3) ───────────── */
    {
      id: "g10-ri-c72-cable-ferry",
      family: "G10",
      title: "The Rope Across the River",
      kind: "Informational · 10.RI",
      blurb: "Cable ferries once crossed rivers everywhere; one small crossing explains why a few survive.",
      level: 3,
      passage:
        "<p>" + N(1) + "Long before steel bridges spanned most rivers, crossing water meant trusting a boat, and for many rural communities that boat was tethered to the shore by a rope. " +
        N(2) + "A cable ferry is exactly what its name suggests: a flat-bottomed vessel guided along a line strung from one bank to the other. " +
        N(3) + "Because the cable keeps the ferry from drifting downstream, even a strong current cannot carry it off course.</p>" +
        "<p>" + N(4) + "Some early cable ferries were pulled hand over hand by their operators, a slow and exhausting method. " +
        N(5) + "Others relied on a cleverer principle. " +
        N(6) + "On a reaction ferry, the operator angles the hull slightly against the current, and the force of the moving water pushes the boat sideways along the cable, much as wind pushes a sailboat. " +
        N(7) + "The river, in effect, supplies the engine.</p>" +
        "<p>" + N(8) + "The ferry at Linden's Crossing, on the Merrow River, has worked this way since 1847, though its wooden deck has been replaced at least six times and its hemp rope gave way to steel cable in the 1920s. " +
        N(9) + "County records show that by 1900 the crossing carried farm wagons, a weekly mail rider, and children headed to the only schoolhouse in the valley. " +
        N(10) + "For families on the far bank, the ferry was not a convenience; it was the road.</p>" +
        "<p>" + N(11) + "Such ferries were once common, but most disappeared in the middle of the twentieth century as counties built bridges and highways. " +
        N(12) + "Bridges did not close at sunset, did not stop for floods, and did not require a paid operator. " +
        N(13) + "The arithmetic seemed obvious, and in most places it was.</p>" +
        "<p>" + N(14) + "Yet a handful of cable ferries survive, and their survival complicates the simple story of progress. " +
        N(15) + "The Linden's Crossing ferry still runs from April to November, carrying about forty cars on a busy day. " +
        N(16) + "A bridge here would cost the county millions and require cutting through a hillside of old oaks; the ferry costs a fraction of that and moves no earth at all. " +
        N(17) + "Some residents also argue that the six-minute crossing slows life down in a way they would hate to lose. " +
        N(18) + "Whether that argument would survive a tight county budget is uncertain. " +
        N(19) + "For now, the river is still doing the work.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"The Rope Across the River\"?",
          choices: [
            { letter: "A", text: "Reaction ferries are faster than any other kind of river boat." },
            { letter: "B", text: "Rural counties should replace their bridges with cable ferries." },
            { letter: "C", text: "The ferry at Linden's Crossing has needed no repairs since 1847." },
            { letter: "D", text: "Bridges replaced most cable ferries, but a few still make sense." }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Sentences 11 through 16 of \"The Rope Across the River\" are organized mainly to —",
          choices: [
            { letter: "A", text: "present a general trend and then an exception to it" },
            { letter: "B", text: "list the steps for building and running a cable ferry" },
            { letter: "C", text: "compare hand-pulled ferries with reaction ferries" },
            { letter: "D", text: "describe events at the crossing in order of date" }
          ],
          correct: "A"
        },
        {
          id: "essential",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Which detail best supports the idea that the Linden's Crossing ferry was once essential to its community?",
          choices: [
            { letter: "A", text: "Its wooden deck has been replaced at least six times." },
            { letter: "B", text: "Children rode it to the only schoolhouse in the valley." },
            { letter: "C", text: "It runs each year from April to November." },
            { letter: "D", text: "The trip across the river takes six minutes." }
          ],
          correct: "B"
        },
        {
          id: "engine",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 7, the statement that the river in effect supplies the engine emphasizes that —",
          choices: [
            { letter: "A", text: "the ferry's motor is cooled by river water" },
            { letter: "B", text: "floods often damaged the ferry's machinery" },
            { letter: "C", text: "a reaction ferry is powered by the current itself" },
            { letter: "D", text: "operators had to pull the boat across by hand" }
          ],
          correct: "C"
        },
        {
          id: "bridges",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "argue that bridges are always the better choice" },
            { letter: "B", text: "explain why many counties replaced their ferries" },
            { letter: "C", text: "describe the dangers of crossing during floods" },
            { letter: "D", text: "criticize ferry operators for closing at sunset" }
          ],
          correct: "B"
        },
        {
          id: "attitude",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author's attitude toward the surviving cable ferries is best described as —",
          choices: [
            { letter: "A", text: "dismissive, treating them as outdated curiosities" },
            { letter: "B", text: "hostile, blaming them for tight county budgets" },
            { letter: "C", text: "appreciative, while admitting their future is unsure" },
            { letter: "D", text: "sentimental, refusing to mention any drawbacks" }
          ],
          correct: "C"
        },
        {
          id: "reaction",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word reaction joins the prefix re- (back, in return) to the word action. Based on these parts, a reaction ferry is named for the way it —",
          choices: [
            { letter: "A", text: "repeats the same trip several times a day" },
            { letter: "B", text: "returns to shore whenever floods rise" },
            { letter: "C", text: "acts without needing any operator at all" },
            { letter: "D", text: "moves in response to the push of the current" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── Informational · cooking contest (level 1) ───────────── */
    {
      id: "g10-ri-c72-judges-table",
      family: "G10",
      title: "Inside the Scorecard",
      kind: "Informational · 10.RI",
      blurb: "At a student cooking contest, a team can lose points before anyone takes a bite.",
      level: 1,
      passage:
        "<p>" + N(1) + "When viewers watch a cooking contest on television, the drama usually comes from the clock and the tasting. " +
        N(2) + "At the Ridgeline Student Culinary Classic, a yearly competition for high school culinary teams, the clock and the tasting matter too, but they are only part of the score. " +
        N(3) + "Many first-year competitors are surprised to learn that a team can lose points before a single dish is tasted, simply because of how their station looks.</p>" +
        "<p>" + N(4) + "Judges score each team in three areas. " +
        N(5) + "The first is organization, often called mise en place, a French phrase meaning \"everything in its place.\" " +
        N(6) + "Before the cooking starts, judges walk past each station and check whether ingredients are measured, labeled, and arranged in the order they will be used. " +
        N(7) + "A cluttered station is not just untidy; it is a sign that a team will waste precious minutes hunting for the salt.</p>" +
        "<p>" + N(8) + "The second area is sanitation and safety. " +
        N(9) + "A floor judge watches for knives left near the edge of a counter, cutting boards that switch from raw chicken to vegetables without washing, and cooks who forget to change gloves. " +
        N(10) + "Last year, according to the competition's director, more teams lost points in this category than in any other.</p>" +
        "<p>" + N(11) + "The third area, and the largest share of the score, is the food itself, judged by a separate panel of three tasters. " +
        N(12) + "Tasting judges rate flavor, texture, temperature, and presentation, and they do so without knowing which school cooked which plate. " +
        N(13) + "Plates arrive numbered, not named.</p>" +
        "<p>" + N(14) + "Coaches say the scoring system teaches lessons that last beyond the contest. " +
        N(15) + "\"In a real restaurant kitchen, nobody cares how creative you are if your station is a mess or someone gets sick,\" said one coach whose team has competed for nine years. " +
        N(16) + "\"The scorecard just tells the truth about the job early.\" " +
        N(17) + "For students who hope to cook for a living, that early truth may be the most valuable prize the Classic offers.</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "What is the main idea of \"Inside the Scorecard\"?",
          choices: [
            { letter: "A", text: "Teams are judged on organization and safety as well as taste." },
            { letter: "B", text: "Television contests are more exciting than school contests." },
            { letter: "C", text: "Tasting judges quietly favor the most experienced schools." },
            { letter: "D", text: "Most teams lose points because their food arrives cold." }
          ],
          correct: "A"
        },
        {
          id: "organized",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How is the information in sentences 4 through 13 of \"Inside the Scorecard\" organized?",
          choices: [
            { letter: "A", text: "as a series of contest events in time order" },
            { letter: "B", text: "as three scoring areas explained one by one" },
            { letter: "C", text: "as a single problem followed by its solution" },
            { letter: "D", text: "as a comparison of two different competitions" }
          ],
          correct: "B"
        },
        {
          id: "sanitation",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Which sentence best supports the idea that sanitation is a common weakness among competing teams?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "C"
        },
        {
          id: "numbered",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes sentence 13, Plates arrive numbered, not named, mainly to —",
          choices: [
            { letter: "A", text: "show that the tasting is judged without favoritism" },
            { letter: "B", text: "explain how plates are carried to the judges" },
            { letter: "C", text: "suggest that judges forget the schools' names" },
            { letter: "D", text: "point out that schools prefer numbers to names" }
          ],
          correct: "A"
        },
        {
          id: "mise",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Based on sentences 5 and 6, the phrase mise en place refers to —",
          choices: [
            { letter: "A", text: "a French style of plating desserts" },
            { letter: "B", text: "having every ingredient ready and in order" },
            { letter: "C", text: "the order in which judges taste the plates" },
            { letter: "D", text: "the station assigned to each school's team" }
          ],
          correct: "B"
        },
        {
          id: "coachtone",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The tone of the coach's comments in sentences 15 and 16 is best described as —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "playful and joking" },
            { letter: "C", text: "uncertain and anxious" },
            { letter: "D", text: "frank and practical" }
          ],
          correct: "D"
        },
        {
          id: "cluttered",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "In sentence 7, the author says a cluttered station is not just untidy. Compared with untidy, the word cluttered suggests a station that is —",
          choices: [
            { letter: "A", text: "clean but poorly lit" },
            { letter: "B", text: "slightly out of order" },
            { letter: "C", text: "crowded with things in the way" },
            { letter: "D", text: "decorated for the judges" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── Vocabulary · cooking contest (level 2) ───────────── */
    {
      id: "g10-rv-c72-warm-butter",
      family: "G10",
      title: "Warm Butter",
      kind: "Vocabulary · 10.RV",
      blurb: "A careful baker meets a cooler left open and a teammate who says the word she hates.",
      level: 2,
      passage:
        "<p>" + N(1) + "Amara Okafor was the most <strong>meticulous</strong> baker on the Westbrook High pastry team; she weighed flour to the gram, chilled her bowls overnight, and kept a notebook of every tart she had ever ruined. " +
        N(2) + "So when the final round of the state bake-off began and she discovered that the contest kitchen's cooler had been left open all morning, she felt something close to betrayal. " +
        N(3) + "The butter she had brought for her pastry was <strong>tepid</strong>, neither cold nor warm, and soft enough to dent with a fingertip.</p>" +
        "<p>" + N(4) + "Cold butter is the secret of flaky pastry. " +
        N(5) + "As it melts in the oven, it releases steam that pushes the layers of dough apart. " +
        N(6) + "Butter this soft would simply blend into the flour and bake into something closer to a cracker.</p>" +
        "<p>" + N(7) + "Her teammate, Dmitri Volkov, leaned over and <strong>scrutinized</strong> the butter as if it were evidence in a trial, turning the block in the light and pressing one corner. " +
        N(8) + "\"We can't wait for it to chill,\" he said. \"We'll have to <strong>improvise</strong>.\"</p>" +
        "<p>" + N(9) + "Amara hated that word. " +
        N(10) + "To her, it had always sounded like an excuse for not planning. " +
        N(11) + "But the clock read fifty-two minutes, and the notebook in her apron pocket had no page for this.</p>" +
        "<p>" + N(12) + "Dmitri filled a metal tray with ice from the drink station and set their mixing bowl on top of it. " +
        N(13) + "Amara grated the soft butter straight into the flour, working in short bursts and sliding the bowl back onto the ice whenever the mixture felt warm. " +
        N(14) + "Her hands, usually slow and careful, became quick and <strong>deft</strong>; she folded the dough four times in the time it normally took her to fold it twice.</p>" +
        "<p>" + N(15) + "The tarts came out a little less tall than she wanted, but the layers were there, thin and golden. " +
        N(16) + "When the head judge broke one open, she held it toward the light with an almost <strong>reverent</strong> expression, as though she had been handed something rare.</p>" +
        "<p>" + N(17) + "That night Amara opened her notebook to a fresh page. " +
        N(18) + "At the top she wrote \"Warm Butter,\" and underneath it, for the first time, she wrote down a recipe that had worked.</p>",
      claims: [
        {
          id: "tepid",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which phrase from sentence 3 best helps the reader understand the meaning of tepid?",
          choices: [
            { letter: "A", text: "the butter she had brought" },
            { letter: "B", text: "neither cold nor warm" },
            { letter: "C", text: "soft enough to dent" },
            { letter: "D", text: "for her pastry" }
          ],
          correct: "B"
        },
        {
          id: "scrutinized",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 7, the word scrutinized most nearly means —",
          choices: [
            { letter: "A", text: "examined closely" },
            { letter: "B", text: "pushed aside" },
            { letter: "C", text: "quickly melted" },
            { letter: "D", text: "carefully weighed" }
          ],
          correct: "A"
        },
        {
          id: "improvise",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word improvise comes from Latin parts meaning not and seen ahead, as in provide and vision. Based on these parts, to improvise is to —",
          choices: [
            { letter: "A", text: "follow a written plan step by step" },
            { letter: "B", text: "make something up without preparing" },
            { letter: "C", text: "look closely at a problem before acting" },
            { letter: "D", text: "repeat a method that worked before" }
          ],
          correct: "B"
        },
        {
          id: "deft",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author describes Amara's hands in sentence 14 as deft rather than fast. Compared with fast, deft suggests that her hands moved with —",
          choices: [
            { letter: "A", text: "skill as well as speed" },
            { letter: "B", text: "nervous carelessness" },
            { letter: "C", text: "clumsy, rushed haste" },
            { letter: "D", text: "slow, fearful caution" }
          ],
          correct: "A"
        },
        {
          id: "reverent",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 16, the word reverent suggests that the judge's expression showed —",
          choices: [
            { letter: "A", text: "mild confusion" },
            { letter: "B", text: "polite boredom" },
            { letter: "C", text: "disappointment" },
            { letter: "D", text: "deep respect" }
          ],
          correct: "D"
        },
        {
          id: "blend",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 6, the word blend most nearly means —",
          choices: [
            { letter: "A", text: "add flavor" },
            { letter: "B", text: "pull apart" },
            { letter: "C", text: "mix in fully" },
            { letter: "D", text: "turn brown" }
          ],
          correct: "C"
        },
        {
          id: "amara",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Taken together, sentences 9–10 and sentence 18 show that Amara —",
          choices: [
            { letter: "A", text: "gives up on keeping her baking notebook" },
            { letter: "B", text: "still resents Dmitri's ideas in the kitchen" },
            { letter: "C", text: "comes to value a skill she once distrusted" },
            { letter: "D", text: "decides to leave the team after the contest" }
          ],
          correct: "C"
        }
      ]
    }
    ,

    /* ───────────── Vocabulary · ferry captain (level 3) ───────────── */
    {
      id: "g10-rv-c72-sound-captain",
      family: "G10",
      title: "The Water Is the Boss",
      kind: "Vocabulary · 10.RV",
      blurb: "A ferry captain explains why the easy crossings are the ones she watches hardest.",
      level: 3,
      passage:
        "<p>" + N(1) + "Captain Marisol Etxeberria has piloted the car ferry across Hollis Sound for nineteen years, and in that time she has learned that the most dangerous part of any crossing is the part that looks easy. " +
        N(2) + "On calm summer afternoons, when the water is flat and passengers are photographing the lighthouse, she is at her most <strong>vigilant</strong>, scanning the channel for kayaks, drifting logs, and pleasure boats whose drivers have not learned the rules of the water.</p>" +
        "<p>" + N(3) + "The sound is only two miles wide, but it is not equally <strong>navigable</strong> everywhere. " +
        N(4) + "A sandbar runs along its eastern edge, shifting a little after every winter storm, so the channel deep enough for a loaded ferry changes from year to year. " +
        N(5) + "Each spring, Etxeberria studies new survey charts and adjusts her route by a few dozen yards, a change no passenger would ever notice.</p>" +
        "<p>" + N(6) + "Winter brings different trials. " +
        N(7) + "Snow squalls on the sound are <strong>intermittent</strong>: a wall of white sweeps across the bow, visibility drops to almost nothing, and then, minutes later, the sun returns as though nothing happened. " +
        N(8) + "Etxeberria describes her approach to such weather as <strong>circumspect</strong> rather than fearful. " +
        N(9) + "She does not refuse to sail, but she watches the radar, slows early, and will wait at the dock for twenty minutes if a squall line is approaching.</p>" +
        "<p>" + N(10) + "Her crew calls her <strong>unflappable</strong>. " +
        N(11) + "Two winters ago, an engine alarm sounded halfway across with sixty passengers aboard. " +
        N(12) + "According to the deckhands, the captain's voice on the intercom never rose; she explained what had happened, asked everyone to remain seated, and brought the ferry in on its backup engine. " +
        N(13) + "Several passengers later said they had not realized anything was wrong until they read about it in the local paper.</p>" +
        "<p>" + N(14) + "Etxeberria waves away praise. " +
        N(15) + "\"The water is the boss,\" she says. " +
        N(16) + "\"My job is just to listen to it more carefully than anyone else on the boat.\" " +
        N(17) + "It is a modest statement, but careful listening is what has kept her crossings <strong>uneventful</strong> for nineteen years, and for a ferry captain, uneventful is the highest compliment there is.</p>",
      claims: [
        {
          id: "navigable",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word navigable joins the verb navigate to the suffix -able. Based on these parts, navigable in sentence 3 most nearly means —",
          choices: [
            { letter: "A", text: "able to be traveled by boat" },
            { letter: "B", text: "crowded with navy vessels" },
            { letter: "C", text: "easy to locate on a chart" },
            { letter: "D", text: "too shallow to be crossed" }
          ],
          correct: "A"
        },
        {
          id: "intermittent",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which part of sentence 7 best helps the reader understand the meaning of intermittent?",
          choices: [
            { letter: "A", text: "Snow squalls on the sound" },
            { letter: "B", text: "a wall of white sweeps across the bow" },
            { letter: "C", text: "visibility drops to almost nothing" },
            { letter: "D", text: "minutes later, the sun returns" }
          ],
          correct: "D"
        },
        {
          id: "circumspect",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "Etxeberria calls her approach circumspect rather than fearful (sentence 8). Compared with fearful, circumspect suggests caution that is —",
          choices: [
            { letter: "A", text: "thoughtful and deliberate" },
            { letter: "B", text: "panicked and frozen" },
            { letter: "C", text: "careless and hurried" },
            { letter: "D", text: "secret and hidden" }
          ],
          correct: "A"
        },
        {
          id: "unflappable",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Based on sentences 11 and 12, the word unflappable in sentence 10 most nearly means —",
          choices: [
            { letter: "A", text: "stubborn about rules" },
            { letter: "B", text: "calm under pressure" },
            { letter: "C", text: "friendly to strangers" },
            { letter: "D", text: "skilled with engines" }
          ],
          correct: "B"
        },
        {
          id: "uneventful",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The word uneventful often carries a connotation of dullness. In sentence 17, calling it the highest compliment suggests that for a ferry captain, uneventful means —",
          choices: [
            { letter: "A", text: "the job has become boring" },
            { letter: "B", text: "nothing went wrong, so all were safe" },
            { letter: "C", text: "passengers wish for more excitement" },
            { letter: "D", text: "the ferry rarely leaves the dock" }
          ],
          correct: "B"
        },
        {
          id: "vigilant",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word vigilant shares a root with vigil, a watch kept through the night. Based on this relationship, vigilant in sentence 2 most nearly means —",
          choices: [
            { letter: "A", text: "relaxed and easygoing" },
            { letter: "B", text: "tired from long shifts" },
            { letter: "C", text: "watchful and alert" },
            { letter: "D", text: "proud and confident" }
          ],
          correct: "C"
        },
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"The Water Is the Boss\"?",
          choices: [
            { letter: "A", text: "Hollis Sound is the most dangerous waterway in the region." },
            { letter: "B", text: "Ferry passengers often ignore the crew's safety instructions." },
            { letter: "C", text: "Engine failures are common on older car ferries like this one." },
            { letter: "D", text: "The captain's careful attention keeps routine crossings safe." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── Paired texts · planetarium (level 2) ───────────── */
    {
      id: "g10-dsr-c72-old-projector",
      family: "G10",
      title: "The Old Projector",
      kind: "Paired texts · 10.DSR",
      blurb: "A director announces a new digital sky; a longtime volunteer asks for one thing to be kept.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From the Director: A New Sky for Crestview</strong></p>" +
        "<p>" + N(1) + "After fifty-one years, Crestview Planetarium's star projector will make its final appearance on June 30. " +
        N(2) + "The machine has served us well, but replacement parts are no longer manufactured, and last winter a single broken gear kept the theater closed for five weeks, disappointing hundreds of families and school groups. " +
        N(3) + "This summer we will install a digital system that can show not only tonight's sky but also the surface of Mars, the birth of a star, and the sky as it will look a thousand years from now. " +
        N(4) + "Our school programs, which reached more than eleven thousand students last year, will be able to match each show to a grade's science lessons. " +
        N(5) + "We understand that many longtime visitors feel attached to the old projector. " +
        N(6) + "It will not be thrown away or sold. " +
        N(7) + "We are working with the county historical society to display it in our lobby, where visitors can see the machine that introduced generations of local children to the stars. " +
        N(8) + "We hope you will join us for opening night in September, when the new dome will light up for the first time.</p>" +
        "<p><strong>Text 2 — A Letter from a Longtime Volunteer</strong></p>" +
        "<p>" + N(9) + "I have run shows on the Crestview projector since I was a college student, and I will miss its low hum more than I can say; it sounds, to me, like the building breathing. " +
        N(10) + "Still, I understand the director's decision, since I was there for those five closed weeks, and I want to add only one request. " +
        N(11) + "The old machine has a quality no screen has yet copied: when it dims the lights and the stars come out one by one, the room falls silent in a way I have never heard during a video. " +
        N(12) + "Children who are restless in their seats grow still, and even the teachers stop whispering. " +
        N(13) + "Before the projector goes to the lobby, I hope the staff will record that moment, the slow fade and the first faint stars, so that the new system can match its pace, if not its machinery. " +
        N(14) + "A new sky should still begin with darkness and patience, the way the old one always did. " +
        N(15) + "Then, by all means, take us to Mars and beyond.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "On which point do the Crestview director and the volunteer agree?",
          choices: [
            { letter: "A", text: "The old projector should run for several more years." },
            { letter: "B", text: "Replacing the old projector is a reasonable decision." },
            { letter: "C", text: "Digital shows are less useful for school programs." },
            { letter: "D", text: "The lobby is the wrong place for the old machine." }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which statement best describes a key difference between the Crestview texts?",
          choices: [
            { letter: "A", text: "Text 1 stresses practical reasons; Text 2 stresses the old show's effect." },
            { letter: "B", text: "Text 1 opposes the new system; Text 2 argues strongly in favor of it." },
            { letter: "C", text: "Text 1 is written for students; Text 2 is written for the county board." },
            { letter: "D", text: "Text 1 gives no reasons for the change; Text 2 lists several reasons." }
          ],
          correct: "A"
        },
        {
          id: "respond",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does Text 2 respond to the feeling the director acknowledges in sentence 5 of Text 1?",
          choices: [
            { letter: "A", text: "It dismisses that feeling as simple nostalgia." },
            { letter: "B", text: "It demands that the projector stay in the theater." },
            { letter: "C", text: "It suggests carrying the old show's pacing forward." },
            { letter: "D", text: "It asks the historical society to run the shows." }
          ],
          correct: "C"
        },
        {
          id: "opening",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Using both texts, how would the volunteer most likely want the September opening-night show to begin?",
          choices: [
            { letter: "A", text: "with a flight across the surface of Mars" },
            { letter: "B", text: "with the lights fading and stars appearing slowly" },
            { letter: "C", text: "with a tour of the old projector in the lobby" },
            { letter: "D", text: "with a talk about the cost of replacement parts" }
          ],
          correct: "B"
        },
        {
          id: "conclude",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "A reader who uses both Crestview texts could best conclude that —",
          choices: [
            { letter: "A", text: "the new system could honor both the director's and the volunteer's goals" },
            { letter: "B", text: "the planetarium will most likely close for good after June 30" },
            { letter: "C", text: "the volunteer plans to stop running shows once the new system arrives" },
            { letter: "D", text: "the historical society will soon take over all of the school programs" }
          ],
          correct: "A"
        },
        {
          id: "gear",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The director includes the detail about the broken gear in sentence 2 mainly to —",
          choices: [
            { letter: "A", text: "blame the volunteers for damaging the projector" },
            { letter: "B", text: "show readers how a star projector is assembled" },
            { letter: "C", text: "apologize for closing the theater during winter" },
            { letter: "D", text: "give a practical reason the projector must retire" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The tone of the volunteer's letter in Text 2 is best described as —",
          choices: [
            { letter: "A", text: "angry and demanding" },
            { letter: "B", text: "cold and formal" },
            { letter: "C", text: "fond but reasonable" },
            { letter: "D", text: "amused and teasing" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── Paired texts · ferry vs. bridge (level 3) ───────────── */
    {
      id: "g10-dsr-c72-bridge-or-boat",
      family: "G10",
      title: "Bridge or Boat",
      kind: "Paired texts · 10.DSR",
      blurb: "A county study recommends a bridge to Wren Island; an island resident answers it.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From the Wren Island Access Study, County Transportation Office</strong></p>" +
        "<p>" + N(1) + "The Wren Island ferry currently makes fourteen round trips per day between 6:00 a.m. and 9:00 p.m., carrying up to thirty-two vehicles per trip. " +
        N(2) + "Outside those hours, island residents have no way to reach the mainland except by private boat, which few households own. " +
        N(3) + "In the past three years, ambulance transfers from the island have averaged forty-one minutes from the first call to arrival at the mainland dock, compared with a county average of eighteen minutes. " +
        N(4) + "A two-lane bridge, estimated at $46 million, would allow round-the-clock access and reduce emergency response times to roughly the county average. " +
        N(5) + "The ferry's annual operating cost of $2.1 million would be eliminated, so the bridge would pay for itself in about twenty-two years, not counting maintenance. " +
        N(6) + "The study team recognizes that many residents value the island's quiet character and its small-town pace. " +
        N(7) + "However, the team's charge was to evaluate safety and long-term cost, and on both measures a fixed crossing performs better. " +
        N(8) + "The team recommends that the county begin design work within two years and hold public meetings on the island.</p>" +
        "<p><strong>Text 2 — The Last Ferry Home, by an Island Resident</strong></p>" +
        "<p>" + N(9) + "Every evening the 9:00 p.m. ferry leaves the mainland with the last of us aboard: nurses coming off shift, the high school's basketball players, a grocer with crates of lettuce, a grandmother returning from her sister's house. " +
        N(10) + "The study calls this schedule a limitation. " +
        N(11) + "I call it the reason Wren Island is still Wren Island, a place where neighbors know each other's faces. " +
        N(12) + "A bridge would bring round-the-clock traffic, and with it the vacation rentals that have already priced families out of two neighboring islands in the past ten years. " +
        N(13) + "I do not dismiss the ambulance numbers; forty-one minutes is too long, and I have sat in that mainland waiting room myself, counting every one of them. " +
        N(14) + "But there are faster answers than a $46 million bridge. " +
        N(15) + "A night water ambulance, stationed on the island itself, could cut that time sharply for a sliver of the cost, and it could be running by next winter. " +
        N(16) + "The study team says, fairly enough, that its charge was safety and cost. " +
        N(17) + "Someone's charge should be what this place is for.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "On which point do the Wren Island study and the resident agree?",
          choices: [
            { letter: "A", text: "Emergency transport from the island takes too long." },
            { letter: "B", text: "A bridge is the only real way to improve safety." },
            { letter: "C", text: "The ferry should begin running through the night." },
            { letter: "D", text: "Vacation rentals would strengthen the island economy." }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Select TWO details from Text 1 that the resident responds to directly in Text 2.",
          choices: [
            { letter: "A", text: "The ferry makes fourteen round trips each day." },
            { letter: "B", text: "Ambulance transfers average forty-one minutes." },
            { letter: "C", text: "A bridge is estimated to cost $46 million." },
            { letter: "D", text: "Design work should begin within two years." }
          ],
          correct: ["B", "C"]
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The two texts about Wren Island differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "weighs only safety and cost, while Text 2 also weighs the island's way of life" },
            { letter: "B", text: "relies on personal stories, while Text 2 relies on numbers and estimates" },
            { letter: "C", text: "denies any emergency problem, while Text 2 insists that one exists" },
            { letter: "D", text: "favors keeping the ferry, while Text 2 calls for building the bridge" }
          ],
          correct: "A"
        },
        {
          id: "address",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does Text 2 address the problem raised in sentence 3 of the Wren Island study?",
          choices: [
            { letter: "A", text: "It argues that the emergency numbers are wrong." },
            { letter: "B", text: "It suggests running the ferry twenty-four hours." },
            { letter: "C", text: "It claims that ambulances could use the bridge." },
            { letter: "D", text: "It proposes a cheaper fix based on the island." }
          ],
          correct: "D"
        },
        {
          id: "both",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which idea becomes clear only when both Wren Island texts are read together?",
          choices: [
            { letter: "A", text: "The island is served by a ferry that runs on a fixed schedule." },
            { letter: "B", text: "The ferry's limited hours are seen as both a weakness and a protection." },
            { letter: "C", text: "A bridge to the island would cost the county about $46 million." },
            { letter: "D", text: "Some island residents travel to the mainland for their jobs." }
          ],
          correct: "B"
        },
        {
          id: "next",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Using both texts, what is the most reasonable next step for the county to take?",
          choices: [
            { letter: "A", text: "Start building the bridge before design work is done." },
            { letter: "B", text: "End ferry service once the study is published." },
            { letter: "C", text: "Ban new vacation rentals on all nearby islands." },
            { letter: "D", text: "Test whether a water ambulance meets the safety goal." }
          ],
          correct: "D"
        },
        {
          id: "charge",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 17, the resident's repetition of the word charge from the study mainly serves to —",
          choices: [
            { letter: "A", text: "mock the study team's formal style of writing" },
            { letter: "B", text: "suggest that the resident works for the county" },
            { letter: "C", text: "turn the study's own word toward what it left out" },
            { letter: "D", text: "explain how the ferry's fares are calculated" }
          ],
          correct: "C"
        }
      ]
    }
    ,

    /* ───────────── Poetry · arborists (level 1) ───────────── */
    {
      id: "g10-rl-c72-arborist-morning",
      family: "G10",
      title: "Arborist, Morning",
      kind: "Poetry · 10.RL",
      blurb: "A tree climber, high in a maple at seven a.m., thinks about what her work really is.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Before the saws, before the chipper's roar,<br>" +
        L(2) + "I hang in the maple's crown at seven a.m.,<br>" +
        L(3) + "a spider on a single silver thread,<br>" +
        L(4) + "and listen to the neighborhood wake up.<br>" +
        L(5) + "Below me, a screen door. A kettle. A dog.<br>" +
        L(6) + "The rope hums softly when I shift my weight,<br>" +
        L(7) + "a note the tree and I play together.<br>" +
        L(8) + "People think my work is cutting down.<br>" +
        L(9) + "Mostly it is choosing what to keep:<br>" +
        L(10) + "this limb that leans too close to someone's roof,<br>" +
        L(11) + "that one, scarred but strong, that feeds the leaves.<br>" +
        L(12) + "I touch the bark the way you'd touch a sleeper<br>" +
        L(13) + "you didn't want to startle out of dreams.<br>" +
        L(14) + "Every cut I make, the tree remembers;<br>" +
        L(15) + "it grows a collar round the wound and closes,<br>" +
        L(16) + "slow as a promise, ring by patient ring.<br>" +
        L(17) + "By noon the crew below will call me down,<br>" +
        L(18) + "the truck will rumble off to the next street,<br>" +
        L(19) + "and no one walking past will look up here.<br>" +
        L(20) + "But the maple will. For a hundred years, it will.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Arborist, Morning\"?",
          choices: [
            { letter: "A", text: "Careful work often means keeping more than removing." },
            { letter: "B", text: "Morning is the most peaceful time of the day." },
            { letter: "C", text: "Trees grow best when people leave them alone." },
            { letter: "D", text: "Climbing trees is lonely and dangerous work." }
          ],
          correct: "A"
        },
        {
          id: "spider",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In line 3, the speaker compares herself to a spider on a single silver thread to suggest that she —",
          choices: [
            { letter: "A", text: "is afraid of falling from the tree" },
            { letter: "B", text: "hangs lightly from one rope high up" },
            { letter: "C", text: "sets traps for the insects in the bark" },
            { letter: "D", text: "prefers to work alone in the dark" }
          ],
          correct: "B"
        },
        {
          id: "sleeper",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "Lines 12–13 of \"Arborist, Morning\" show that the speaker treats the tree with —",
          choices: [
            { letter: "A", text: "impatience" },
            { letter: "B", text: "suspicion" },
            { letter: "C", text: "gentle care" },
            { letter: "D", text: "amusement" }
          ],
          correct: "C"
        },
        {
          id: "promise",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In line 16, the phrase slow as a promise suggests that the tree's healing is —",
          choices: [
            { letter: "A", text: "uncertain and unlikely" },
            { letter: "B", text: "quick but temporary" },
            { letter: "C", text: "painful and loud" },
            { letter: "D", text: "gradual but dependable" }
          ],
          correct: "D"
        },
        {
          id: "lines89",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "How do lines 8 and 9 of \"Arborist, Morning\" function in the poem?",
          choices: [
            { letter: "A", text: "They introduce the time and place of the poem." },
            { letter: "B", text: "They correct a common belief about the job." },
            { letter: "C", text: "They describe the crew waiting on the ground." },
            { letter: "D", text: "They bring the morning's work to an end." }
          ],
          correct: "B"
        },
        {
          id: "collar",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In line 15, the word collar refers to —",
          choices: [
            { letter: "A", text: "a ring of new growth around a cut" },
            { letter: "B", text: "part of the speaker's work shirt" },
            { letter: "C", text: "a rope looped around the trunk" },
            { letter: "D", text: "the collar of the dog in line 5" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The final line of \"Arborist, Morning\" creates a tone of —",
          choices: [
            { letter: "A", text: "bitter complaint" },
            { letter: "B", text: "nervous doubt" },
            { letter: "C", text: "quiet confidence" },
            { letter: "D", text: "playful teasing" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── Poetry · ferry crossing (level 3) ───────────── */
    {
      id: "g10-rl-c72-night-ferry",
      family: "G10",
      title: "Night Ferry",
      kind: "Poetry · 10.RL",
      blurb: "On the last boat home, a teenager watches a tired father and rethinks the crossing.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The last boat leaves the mainland at eleven,<br>" +
        L(2) + "half empty, smelling of diesel and wet wool.<br>" +
        L(3) + "My father sleeps against the window, still<br>" +
        L(4) + "in the gray uniform he wears to fix<br>" +
        L(5) + "the hospital's machines that keep things breathing.<br>" +
        L(6) + "He fixes breath all day and comes home breathless.<br>" +
        L(7) + "The deck lights make a small room on the water,<br>" +
        L(8) + "and past their edge the dark is total, patient,<br>" +
        L(9) + "a page that no one has begun to write.<br>" +
        L(10) + "Somewhere ahead the island holds our house,<br>" +
        L(11) + "our kitchen light, the dog who waits by the door,<br>" +
        L(12) + "but here there is no island, only engine,<br>" +
        L(13) + "only the long white scar the wake unzips<br>" +
        L(14) + "and the black water zipping it closed behind us.<br>" +
        L(15) + "I used to think this crossing was the wasted part,<br>" +
        L(16) + "the hour subtracted from the life we lived.<br>" +
        L(17) + "Tonight I watch my father's face unclench,<br>" +
        L(18) + "the only hour no one can ask him for,<br>" +
        L(19) + "and understand the ferry is not between things.<br>" +
        L(20) + "It is the thing. It carries what it carries.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by \"Night Ferry\"?",
          choices: [
            { letter: "A", text: "Time that seems wasted can hold its own quiet value." },
            { letter: "B", text: "Parents should refuse to work late-night shifts." },
            { letter: "C", text: "Island life is lonelier than life in the city." },
            { letter: "D", text: "Traveling by boat is most dangerous after dark." }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Line 6 of \"Night Ferry\" is ironic because the father —",
          choices: [
            { letter: "A", text: "refuses to sleep while riding the ferry" },
            { letter: "B", text: "works on boat engines instead of machines" },
            { letter: "C", text: "keeps others breathing yet ends worn out" },
            { letter: "D", text: "dislikes the hospital where he is employed" }
          ],
          correct: "C"
        },
        {
          id: "wake",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "In lines 13–14, the image of the wake as a scar that is unzipped and then zipped closed suggests that —",
          choices: [
            { letter: "A", text: "the ferry is harming the water it crosses" },
            { letter: "B", text: "the boat's passage leaves only a brief mark" },
            { letter: "C", text: "the speaker was hurt earlier in the day" },
            { letter: "D", text: "the water is cold enough to freeze over" }
          ],
          correct: "B"
        },
        {
          id: "page",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In lines 8–9, describing the dark as a page that no one has begun to write creates a mood of —",
          choices: [
            { letter: "A", text: "open, quiet possibility" },
            { letter: "B", text: "sharp, sudden danger" },
            { letter: "C", text: "noisy celebration" },
            { letter: "D", text: "bitter regret" }
          ],
          correct: "A"
        },
        {
          id: "lines1516",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "How do lines 15–16 function in \"Night Ferry\"?",
          choices: [
            { letter: "A", text: "They describe the house waiting on the island." },
            { letter: "B", text: "They explain the father's job at the hospital." },
            { letter: "C", text: "They introduce a new person on the ferry." },
            { letter: "D", text: "They state an old view the speaker then revises." }
          ],
          correct: "D"
        },
        {
          id: "patient",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "In line 8, the poet calls the dark patient rather than empty. Compared with empty, patient gives the dark a connotation of —",
          choices: [
            { letter: "A", text: "a frightening threat" },
            { letter: "B", text: "total absence" },
            { letter: "C", text: "a calm, waiting presence" },
            { letter: "D", text: "careless speed" }
          ],
          correct: "C"
        },
        {
          id: "subtracted",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word subtracted (line 16) joins sub- (away) to the root tract (pull), as in extract and tractor. Based on these parts, subtracted most nearly means —",
          choices: [
            { letter: "A", text: "added on at the end" },
            { letter: "B", text: "written underneath" },
            { letter: "C", text: "driven a long way" },
            { letter: "D", text: "pulled away or taken" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── Drama · cooking contest (level 2) ───────────── */
    {
      id: "g10-rl-c72-sauce-scene",
      family: "G10",
      title: "Fourteen Minutes",
      kind: "Drama · 10.RL",
      blurb: "Two teammates argue over a sauce the day before regionals, and their coach overhears.",
      level: 2,
      passage:
        "<p><em>A high school culinary classroom during the last practice before a regional cooking contest. Burners hiss. KOFI stirs a pot; LUCÍA chops herbs at the next counter. A timer on the wall reads 14:00.</em></p>" +
        "<p><strong>KOFI:</strong> " + N(1) + "Taste this. " + N(2) + "No, don't make that face before you've even tasted it.</p>" +
        "<p><strong>LUCÍA:</strong> <em>(tasting)</em> " + N(3) + "It's good. " + N(4) + "It's just not what we practiced.</p>" +
        "<p><strong>KOFI:</strong> " + N(5) + "What we practiced was fine. " + N(6) + "Fine doesn't win regionals.</p>" +
        "<p><strong>LUCÍA:</strong> " + N(7) + "Neither does a sauce nobody tasted until the day before the contest. " + N(8) + "You added something.</p>" +
        "<p><strong>KOFI:</strong> " + N(9) + "Smoked paprika. " + N(10) + "My uncle puts it in everything; he says it makes a dish sound like it has a story.</p>" +
        "<p><strong>LUCÍA:</strong> <em>(setting down her knife)</em> " + N(11) + "Kofi, the judges don't eat stories. " + N(12) + "They eat whatever we can make the same way, perfectly, twice in a row, with a clock screaming at us.</p>" +
        "<p><strong>KOFI:</strong> " + N(13) + "You sound like Ms. Haddad.</p>" +
        "<p><strong>LUCÍA:</strong> " + N(14) + "Ms. Haddad is right more often than both of us put together.</p>" +
        "<p><em>MS. HADDAD enters with a clipboard, reading. Neither student notices her.</em></p>" +
        "<p><strong>KOFI:</strong> " + N(15) + "Last year we did everything right and came in sixth. " + N(16) + "Sixth! " + N(17) + "Nobody remembers sixth.</p>" +
        "<p><strong>LUCÍA:</strong> " + N(18) + "I remember sixth. " + N(19) + "I remember that our plates were clean and nothing burned and nobody cut themselves. " + N(20) + "That was the first year our school ever placed.</p>" +
        "<p><em>(KOFI stops stirring.)</em></p>" +
        "<p><strong>KOFI:</strong> " + N(21) + "So you want to play it safe.</p>" +
        "<p><strong>LUCÍA:</strong> " + N(22) + "I want to play it ready. " + N(23) + "There's a difference.</p>" +
        "<p><strong>MS. HADDAD:</strong> <em>(without looking up from her clipboard)</em> " + N(24) + "There is. " + N(25) + "And both of you are partly right, which is the most annoying answer I can give you.</p>" +
        "<p><em>(The students turn, startled.)</em></p>" +
        "<p><strong>MS. HADDAD:</strong> " + N(26) + "Make the paprika version three more times before Saturday. " + N(27) + "If it comes out the same every time, it goes on the plate. " + N(28) + "If it doesn't, it goes back to your uncle's kitchen, Kofi, where it belongs.</p>" +
        "<p><em>(KOFI grins in spite of himself. LUCÍA picks up her knife and slides a cutting board toward him.)</em></p>" +
        "<p><strong>LUCÍA:</strong> " + N(29) + "Then stop talking and start chopping. " + N(30) + "We've got fourteen minutes.</p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The central conflict of \"Fourteen Minutes\" is best described as a disagreement over whether to —",
          choices: [
            { letter: "A", text: "enter the regional contest at all this year" },
            { letter: "B", text: "risk a new flavor or keep the practiced recipe" },
            { letter: "C", text: "blame Ms. Haddad for last year's sixth place" },
            { letter: "D", text: "replace Lucía as the leader of the team" }
          ],
          correct: "B"
        },
        {
          id: "lucia",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Lucía's lines in sentences 18 through 20 characterize her as someone who —",
          choices: [
            { letter: "A", text: "values steady, reliable progress" },
            { letter: "B", text: "is ready to quit the cooking team" },
            { letter: "C", text: "secretly envies Kofi's creativity" },
            { letter: "D", text: "cares only about taking first place" }
          ],
          correct: "A"
        },
        {
          id: "haddad",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of Ms. Haddad's remark in sentence 25 is best described as —",
          choices: [
            { letter: "A", text: "harsh and angry" },
            { letter: "B", text: "confused and unsure" },
            { letter: "C", text: "dryly humorous but fair" },
            { letter: "D", text: "sarcastic toward Lucía" }
          ],
          correct: "C"
        },
        {
          id: "enters",
          sol: "10.RL.1.D",
          sub: "10.RL.1.D.2",
          stem: "The stage direction stating that Ms. Haddad enters and neither student notices her mainly serves to —",
          choices: [
            { letter: "A", text: "let her hear the whole argument before she speaks" },
            { letter: "B", text: "show that the classroom is crowded and noisy" },
            { letter: "C", text: "suggest that the students are breaking a rule" },
            { letter: "D", text: "explain why the timer on the wall is running" }
          ],
          correct: "A"
        },
        {
          id: "ready",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Lucía's line I want to play it ready (sentence 22) suggests that she sees preparation as —",
          choices: [
            { letter: "A", text: "a sign of fear and weakness" },
            { letter: "B", text: "less important than new ideas" },
            { letter: "C", text: "a job that belongs to the coach" },
            { letter: "D", text: "different from avoiding all risk" }
          ],
          correct: "D"
        },
        {
          id: "screaming",
          sol: "10.RV.1.F",
          sub: "10.RV.1.F.1",
          stem: "In sentence 12, the phrase a clock screaming at us suggests that the contest timer —",
          choices: [
            { letter: "A", text: "is broken and too loud" },
            { letter: "B", text: "creates intense pressure" },
            { letter: "C", text: "is too quiet to notice" },
            { letter: "D", text: "runs slower than normal" }
          ],
          correct: "B"
        },
        {
          id: "story",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 10, Kofi's uncle says paprika makes a dish sound like it has a story. This figurative language suggests the uncle believes the spice —",
          choices: [
            { letter: "A", text: "hides mistakes in a sauce" },
            { letter: "B", text: "makes food look brighter" },
            { letter: "C", text: "should be used sparingly" },
            { letter: "D", text: "gives a dish depth and character" }
          ],
          correct: "D"
        }
      ]
    }
    ,

    /* ───────────── Functional text · ferry notice (level 1) ───────────── */
    {
      id: "g10-ri-c72-ferry-notice",
      family: "G10",
      title: "Fall Service Notice",
      kind: "Functional text · 10.RI",
      blurb: "A ferry posts its fall schedule, reservation rules and weather policy.",
      level: 1,
      passage:
        "<p><strong>Halsey Island Ferry: Fall Service Notice</strong></p>" +
        "<p>" + N(1) + "Beginning September 8, the Halsey Island Ferry will switch from summer to fall service. " +
        N(2) + "Please read the following changes carefully before planning your trip, especially if you travel with a vehicle.</p>" +
        "<p><strong>Schedule.</strong> " + N(3) + "Fall service runs eight round trips per day instead of twelve. " +
        N(4) + "The first departure from Cedar Point is at 6:30 a.m., and the last departure from Halsey Island is at 8:15 p.m. " +
        N(5) + "Sunday service ends at 6:00 p.m. " +
        N(6) + "A full timetable is posted at both terminals and on the ferry's website.</p>" +
        "<p><strong>Vehicle reservations.</strong> " + N(7) + "Reservations are required for all vehicles on Friday and Sunday afternoon sailings, which fill quickly during the fall. " +
        N(8) + "Reservations may be made up to thirty days in advance. " +
        N(9) + "Vehicles without a reservation will be loaded only if space remains after all reserved vehicles have boarded. " +
        N(10) + "Walk-on passengers and bicycles do not need reservations.</p>" +
        "<p><strong>Boarding.</strong> " + N(11) + "Vehicles must be in the boarding lane at least twenty minutes before departure; vehicles arriving later may lose their reserved space. " +
        N(12) + "Walk-on passengers should arrive at least ten minutes before departure. " +
        N(13) + "Once the ramp is raised, no additional passengers or vehicles can board, regardless of the reason.</p>" +
        "<p><strong>Weather.</strong> " + N(14) + "Sailings may be delayed or canceled when winds exceed thirty-five miles per hour or when fog reduces visibility below a quarter mile. " +
        N(15) + "The captain makes the final decision on every sailing, even when conditions fall just inside these limits. " +
        N(16) + "Passengers can sign up for text alerts at either terminal to receive notice of changes as soon as they are made. " +
        N(17) + "Reservation fees for canceled sailings will be refunded automatically within five business days.</p>" +
        "<p><strong>Fares.</strong> " + N(18) + "Fares remain the same as in summer: $9 for adult walk-on passengers, $4 for students with a school ID, and $32 for a standard vehicle and driver. " +
        N(19) + "Children under five ride free.</p>" +
        "<p>" + N(20) + "Thank you for traveling with us this fall. " +
        N(21) + "Questions may be directed to the ticket office at either terminal.</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the Halsey Island Ferry notice?",
          choices: [
            { letter: "A", text: "Student fares are being lowered for the fall season." },
            { letter: "B", text: "It explains fewer fall trips and the rules for riders." },
            { letter: "C", text: "The ferry will stop running on weekends this fall." },
            { letter: "D", text: "Bicycles are no longer permitted on any sailing." }
          ],
          correct: "B"
        },
        {
          id: "friday",
          sol: "10.RI.2.B",
          sub: "10.RI.2.B.2",
          stem: "A driver plans to take a Friday afternoon sailing without a reservation. Based on the notice, what will most likely happen?",
          choices: [
            { letter: "A", text: "She will board only if space is left after reserved cars." },
            { letter: "B", text: "She will be charged twice the standard vehicle fare." },
            { letter: "C", text: "She must wait until the first sailing on Sunday." },
            { letter: "D", text: "She will board ahead of drivers who reserved." }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The bold headings in the Halsey Island Ferry notice help a reader mainly by —",
          choices: [
            { letter: "A", text: "ranking the rules from most to least important" },
            { letter: "B", text: "showing the order in which the captain checks things" },
            { letter: "C", text: "grouping related rules so they are easy to find" },
            { letter: "D", text: "separating the summer rules from the fall rules" }
          ],
          correct: "C"
        },
        {
          id: "audience",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The Halsey Island Ferry notice is written mainly for —",
          choices: [
            { letter: "A", text: "the ferry's captains and deck crew" },
            { letter: "B", text: "people planning to ride the ferry this fall" },
            { letter: "C", text: "island residents who own private boats" },
            { letter: "D", text: "county officials who set ferry fares" }
          ],
          correct: "B"
        },
        {
          id: "regardless",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 13, the phrase regardless of the reason most nearly means —",
          choices: [
            { letter: "A", text: "only when the reason is a good one" },
            { letter: "B", text: "unless the captain gives permission" },
            { letter: "C", text: "after the reason has been written down" },
            { letter: "D", text: "no matter what the explanation is" }
          ],
          correct: "D"
        },
        {
          id: "fill",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "In sentence 7, the phrase which fill quickly during the fall is included mainly to —",
          choices: [
            { letter: "A", text: "encourage drivers to reserve their space early" },
            { letter: "B", text: "complain about crowds on weekend sailings" },
            { letter: "C", text: "explain why fares stay the same as summer" },
            { letter: "D", text: "warn walk-on riders that they may be turned away" }
          ],
          correct: "A"
        },
        {
          id: "captain",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Which sentence from the notice best shows that weather decisions are not made by fixed limits alone?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── Argument · arborists (level 1) ───────────── */
    {
      id: "g10-ri-c72-hire-climbers",
      family: "G10",
      title: "Hire Climbers, Not Just Saws",
      kind: "Argument · 10.RI",
      blurb: "A student columnist asks her town to let a trained arborist decide before the trees come down.",
      level: 1,
      passage:
        "<p>" + N(1) + "After last month's windstorm, the town of Millbrook cut down fourteen street trees along Orchard Avenue in a single week, leaving stumps where shade had stood for decades. " +
        N(2) + "Some of them needed to go. " +
        N(3) + "But at least half, according to a survey by our school's environmental club, had only broken branches that a trained climber could have removed safely in an afternoon, leaving the rest of the tree standing.</p>" +
        "<p>" + N(4) + "Millbrook does not employ a single certified arborist. " +
        N(5) + "When a tree is damaged, the public works department sends a bucket truck and a crew whose main tool is a chainsaw, not a climbing rope. " +
        N(6) + "These workers are skilled and hardworking, but they are not trained to judge whether a tree can recover. " +
        N(7) + "When in doubt, they remove it, and in storm season, doubt is everywhere.</p>" +
        "<p>" + N(8) + "The cost of that habit is easy to miss. " +
        N(9) + "A mature street tree shades sidewalks and houses, lowering summer cooling bills, and its roots soak up rainwater that would otherwise flood storm drains. " +
        N(10) + "A sapling planted in its place will need twenty or thirty years to do the same work. " +
        N(11) + "Meanwhile, Orchard Avenue, once the shadiest street in town, now bakes in the afternoon sun.</p>" +
        "<p>" + N(12) + "Some council members argue that the town cannot afford a full-time arborist. " +
        N(13) + "That concern is reasonable, but it overlooks the cost of the alternative. " +
        N(14) + "Each removal on Orchard Avenue cost the town roughly $1,800, plus another $400 for a replacement sapling. " +
        N(15) + "Neighboring Ashford hired a certified arborist three years ago and reports that its tree removals have dropped by nearly forty percent, saving more each year than the position costs.</p>" +
        "<p>" + N(16) + "I am not asking Millbrook to save every tree, and I know some removals are truly necessary. " +
        N(17) + "I am asking it to let someone qualified make the decision before the saw starts. " +
        N(18) + "Trees that took sixty years to grow deserve at least sixty minutes of expert judgment.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which sentence best states the central claim of \"Hire Climbers, Not Just Saws\"?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "D"
        },
        {
          id: "money",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which detail best supports the claim that hiring an arborist could save Millbrook money?",
          choices: [
            { letter: "A", text: "Ashford's removals fell by nearly forty percent after it hired one." },
            { letter: "B", text: "Orchard Avenue was once the shadiest street in all of Millbrook." },
            { letter: "C", text: "The public works crew arrives with a bucket truck and chainsaw." },
            { letter: "D", text: "A new sapling needs twenty or thirty years to do a tree's work." }
          ],
          correct: "A"
        },
        {
          id: "concern",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "In sentences 12 and 13, the author mentions the council members' concern mainly to —",
          choices: [
            { letter: "A", text: "show that the council has already agreed with her" },
            { letter: "B", text: "acknowledge an opposing view and then answer it" },
            { letter: "C", text: "suggest the town should stop planting saplings" },
            { letter: "D", text: "blame the council for the storm's damage" }
          ],
          correct: "B"
        },
        {
          id: "sixty",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The final sentence's contrast between sixty years and sixty minutes mainly emphasizes that —",
          choices: [
            { letter: "A", text: "trees grow faster than most people believe" },
            { letter: "B", text: "the council meets for about an hour each week" },
            { letter: "C", text: "a short expert review is small next to a tree's life" },
            { letter: "D", text: "removing a tree takes less than an hour of work" }
          ],
          correct: "C"
        },
        {
          id: "crew",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author's tone toward the public works crew in sentence 6 is best described as —",
          choices: [
            { letter: "A", text: "respectful but critical of their training" },
            { letter: "B", text: "mocking and openly scornful" },
            { letter: "C", text: "fearful of their dangerous tools" },
            { letter: "D", text: "neutral and completely unconcerned" }
          ],
          correct: "A"
        },
        {
          id: "cost",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 8 through 11 of \"Hire Climbers, Not Just Saws\" organized?",
          choices: [
            { letter: "A", text: "as a timeline of the storm and the cleanup" },
            { letter: "B", text: "as a hidden cost followed by what is lost" },
            { letter: "C", text: "as a comparison of Millbrook and Ashford" },
            { letter: "D", text: "as a list of questions for the town council" }
          ],
          correct: "B"
        },
        {
          id: "bakes",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "In sentence 11, the author writes that the street now bakes rather than saying it is warm. Compared with is warm, bakes suggests heat that is —",
          choices: [
            { letter: "A", text: "pleasant and welcome" },
            { letter: "B", text: "mild and short-lived" },
            { letter: "C", text: "harsh and hard to escape" },
            { letter: "D", text: "cooled by a breeze" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
