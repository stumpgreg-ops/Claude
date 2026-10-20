/* SOL Labyrinth — Lit and Film: Film Language (family LIT, genre LANGUAGE, episode "language").
 * Ten original packs on the vocabulary of the camera and the editor, from the teacher's Film Language
 * worksheet: sequence, scene, shot and cut; long, medium and close shots; point of view, over-the-shoulder,
 * still and zoom; high, low, wide and Dutch angles; tilt, pan, tracking, dolly, truck, boom shot and boom;
 * fade out, fade in, dissolve, wipe, freeze frame, jump cut and smash cut. Passage types: a writing analogy,
 * scenes told shot by shot, a shot list, director's notes, a vocabulary passage, a film-club review, a short
 * film's analysis, a director's commentary and a history of early shot grammar (Smith, Porter, Griffith,
 * Kuleshov). Original text only; the student films and filmmakers are invented. Loaded after content.js;
 * pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ───────────── TINY (level 1) ───────────── */
    {
      id: "lit-language-building-blocks",
      family: "LIT",
      genre: "LANGUAGE",
      episode: "language",
      title: "Words, Sentences, Paragraphs",
      kind: "Film language · 11.RV",
      blurb: "Shot, cut, scene and sequence: the building blocks of a movie, compared to writing.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Filmmakers like to compare a movie to a piece of writing. " +
        N(2) + "A shot is the word: one unbroken run of the camera, from the moment it starts rolling until it stops. " +
        N(3) + "A cut is the instant jump from one shot to the next. " +
        N(4) + "A scene is the sentence, a group of shots that take place in one location at one time. " +
        N(5) + "A sequence is the paragraph, several scenes that together tell one complete piece of the story, such as a chase that races across a whole city." +
        "</p>",
      claims: [
        {
          id: "shot",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "According to sentence 2, a shot is —",
          choices: [
            { letter: "A", text: "every scene that happens in one location" },
            { letter: "B", text: "one unbroken run of the camera from start to stop" },
            { letter: "C", text: "the instant switch from one image to another" },
            { letter: "D", text: "a complete piece of the story, such as a chase" }
          ],
          correct: "B"
        },
        {
          id: "cut",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.2",
          stem: "A film shows a girl at her locker and then, in an instant, shows her teacher in the hallway. Based on sentence 3, this instant change is called —",
          choices: [
            { letter: "A", text: "a scene" },
            { letter: "B", text: "a sequence" },
            { letter: "C", text: "a shot" },
            { letter: "D", text: "a cut" }
          ],
          correct: "D"
        },
        {
          id: "scene-sequence",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "Which statement best explains the difference between a scene and a sequence?",
          choices: [
            { letter: "A", text: "A scene stays in one place and time; a sequence links several scenes into one unit of story." },
            { letter: "B", text: "A scene is filmed in one unbroken take; a sequence is filmed with several cameras at once." },
            { letter: "C", text: "A scene is one single word of a film; a sequence is the instant jump between two shots." },
            { letter: "D", text: "A scene always happens outdoors; a sequence always happens on a set inside a studio." }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author explains the four film terms mainly by —",
          choices: [
            { letter: "A", text: "telling the story of how each term was invented" },
            { letter: "B", text: "listing the terms from the newest to the oldest" },
            { letter: "C", text: "comparing each term to a familiar part of writing" },
            { letter: "D", text: "arguing that one term matters more than the rest" }
          ],
          correct: "C"
        },
        {
          id: "example",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.2",
          stem: "Based on the passage, which part of a film would best be called a sequence?",
          choices: [
            { letter: "A", text: "the single moment a door slams shut on screen" },
            { letter: "B", text: "a robbery, a getaway and a chase in three places" },
            { letter: "C", text: "a few shots of two friends talking at one table" },
            { letter: "D", text: "the camera running once without being stopped" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "lit-language-sheriff",
      family: "LIT",
      genre: "LANGUAGE",
      episode: "language",
      title: "The Sheriff Walks In",
      kind: "Film analysis · 11.RL",
      blurb: "Three shots, three angles: who looks powerful, who looks trapped, and why the room feels wrong.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "In a student Western, the saloon doors swing open, and the camera stares up at the sheriff from the level of his boots. " +
        N(2) + "His hat seems to scrape the ceiling. " +
        N(3) + "The next shot looks down from the rafters at a young card player, who shrinks against his chair like a cornered rabbit. " +
        N(4) + "In the third shot, the whole picture slants, so the bar and the piano seem to slide downhill. " +
        N(5) + "The director's notes name these three choices in order: low angle, high angle, Dutch angle." +
        "</p>",
      claims: [
        {
          id: "which-low",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Which shot in the passage is the low angle?",
          choices: [
            { letter: "A", text: "the shot from the rafters in sentence 3" },
            { letter: "B", text: "the slanted shot of the bar in sentence 4" },
            { letter: "C", text: "the shot looking up at the sheriff in sentence 1" },
            { letter: "D", text: "a shot of the doors filmed from the street" }
          ],
          correct: "C"
        },
        {
          id: "sheriff-effect",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The way the camera shows the sheriff in sentences 1 and 2 mainly makes him seem —",
          choices: [
            { letter: "A", text: "powerful and threatening" },
            { letter: "B", text: "tired and ready to leave" },
            { letter: "C", text: "friendly and welcoming" },
            { letter: "D", text: "nervous and unsure" }
          ],
          correct: "A"
        },
        {
          id: "high-effect",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "How does the high angle in sentence 3 shape the way viewers see the card player?",
          choices: [
            { letter: "A", text: "It makes him seem as tall and bold as the sheriff." },
            { letter: "B", text: "It hides his face so viewers cannot judge him." },
            { letter: "C", text: "It shows he is the most important man in town." },
            { letter: "D", text: "It makes him look small, weak and trapped." }
          ],
          correct: "D"
        },
        {
          id: "dutch",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "The slanted picture in sentence 4 most likely signals that —",
          choices: [
            { letter: "A", text: "the saloon was built on the side of a hill" },
            { letter: "B", text: "something in the room is about to go wrong" },
            { letter: "C", text: "the scene has ended and a new day has begun" },
            { letter: "D", text: "the camera operator made a careless mistake" }
          ],
          correct: "B"
        },
        {
          id: "rabbit",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "The simile \"like a cornered rabbit\" in sentence 3 suggests that the card player feels —",
          choices: [
            { letter: "A", text: "frightened, with no way to escape" },
            { letter: "B", text: "quick and clever enough to win" },
            { letter: "C", text: "bored by the game he is playing" },
            { letter: "D", text: "angry at the other players at the table" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "lit-language-whose-eyes",
      family: "LIT",
      genre: "LANGUAGE",
      episode: "language",
      title: "Whose Eyes?",
      kind: "Film language · 11.RV",
      blurb: "Omniscient and subjective point of view, and the over-the-shoulder shot in between.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Point of view in film answers one question: whose eyes are we borrowing? " +
        N(2) + "An omniscient camera is an all-seeing observer, showing a thief creeping upstairs while the family sleeps below. " +
        N(3) + "A subjective camera puts us inside one character, so the shaky picture shows exactly what she sees as she climbs the dark stairs. " +
        N(4) + "An over-the-shoulder shot peeks past one person's shoulder at the other speaker, close to a character's view without becoming it." +
        "</p>",
      claims: [
        {
          id: "omniscient",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "According to sentence 2, an omniscient camera lets viewers —",
          choices: [
            { letter: "A", text: "hear what a character is thinking" },
            { letter: "B", text: "see only what one character sees" },
            { letter: "C", text: "watch two speakers face to face" },
            { letter: "D", text: "see what no single character could" }
          ],
          correct: "D"
        },
        {
          id: "hiker",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In a horror film, the picture jerks and bounces as a hiker runs, and branches whip toward the lens. Which point of view is this, and what is its effect?",
          choices: [
            { letter: "A", text: "omniscient; viewers calmly see the whole forest" },
            { letter: "B", text: "subjective; viewers feel they are the frightened hiker" },
            { letter: "C", text: "over-the-shoulder; viewers watch a calm conversation" },
            { letter: "D", text: "omniscient; viewers learn what the hiker is chasing" }
          ],
          correct: "B"
        },
        {
          id: "ots",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "How does an over-the-shoulder shot differ from a subjective shot?",
          choices: [
            { letter: "A", text: "It stands just behind a character instead of looking through her eyes." },
            { letter: "B", text: "It shows the whole house instead of one small corner of a room." },
            { letter: "C", text: "It is always shaky, while a subjective shot is always steady." },
            { letter: "D", text: "It is used only for scenes with no talking or sound at all." }
          ],
          correct: "A"
        },
        {
          id: "question",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author opens with a question in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "show that experts disagree about point of view" },
            { letter: "B", text: "suggest that film is harder to read than books" },
            { letter: "C", text: "introduce the idea that links all three techniques" },
            { letter: "D", text: "warn readers that the passage will be confusing" }
          ],
          correct: "C"
        },
        {
          id: "subjective-two",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Select TWO phrases from the passage that describe the subjective point of view.",
          choices: [
            { letter: "A", text: "\"an all-seeing observer\"" },
            { letter: "B", text: "\"puts us inside one character\"" },
            { letter: "C", text: "\"shows exactly what she sees\"" },
            { letter: "D", text: "\"peeks past one person's shoulder\"" }
          ],
          correct: ["B", "C"]
        }
      ]
    },

    /* ───────────── SHORT (levels 1–2) ───────────── */
    {
      id: "lit-language-shot-list",
      family: "LIT",
      genre: "LANGUAGE",
      episode: "language",
      title: "Shot List: Gears",
      kind: "Film language · 11.RV",
      blurb: "A film club plans five shots for a documentary about a robotics team.",
      level: 1,
      passage:
        "<p><strong>" + N(1) + "Shot list for \"Gears,\" a three-minute documentary by the Ridgeview film club.</strong></p>" +
        "<p>" + N(2) + "Shot 1, establishing shot: from across the parking lot, the whole gym at dawn, the team's banner tiny in one window, so viewers know where and when the story begins. " +
        N(3) + "Shot 2, medium shot: team captain Noor Haddad from the waist up, arms crossed, tapping her foot as the robot refuses to start. " +
        N(4) + "Shot 3, close-up: a single stripped gear in Noor's palm, filling the frame. " +
        N(5) + "Shot 4, over-the-shoulder: past Noor's shoulder toward Coach Bell as the coach explains what broke. " +
        N(6) + "Shot 5, zoom: the camera stays on its tripod while the lens slowly pushes in on the coach's face until only her grin is left.</p>" +
        "<p>" + N(7) + "Note to crew: hold every shot at least five seconds so the editor has room to cut.</p>",
      claims: [
        {
          id: "establish",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "According to the shot list, the main job of the establishing shot is to —",
          choices: [
            { letter: "A", text: "show the team's banner in sharp detail" },
            { letter: "B", text: "introduce the team captain by name" },
            { letter: "C", text: "tell viewers the place and time of the story" },
            { letter: "D", text: "reveal what broke inside the robot" }
          ],
          correct: "C"
        },
        {
          id: "medium",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Why is Shot 2 a medium shot rather than a close-up of Noor's face?",
          choices: [
            { letter: "A", text: "It lets viewers read her body language, like crossed arms and a tapping foot." },
            { letter: "B", text: "It keeps viewers from seeing how upset Noor is about the broken robot." },
            { letter: "C", text: "It shows the entire gym so viewers know where the robot is kept." },
            { letter: "D", text: "It shows the scene through Noor's own eyes as she looks at the robot." }
          ],
          correct: "A"
        },
        {
          id: "closeup",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "What does the close-up in Shot 3 help viewers notice?",
          choices: [
            { letter: "A", text: "how large and crowded the gym is" },
            { letter: "B", text: "what the coach thinks of the team" },
            { letter: "C", text: "how early in the morning it is" },
            { letter: "D", text: "the small part that made the robot fail" }
          ],
          correct: "D"
        },
        {
          id: "zoom",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "Based on Shot 5, how is a zoom different from moving the camera closer?",
          choices: [
            { letter: "A", text: "The camera rides a cart toward the subject." },
            { letter: "B", text: "The camera stays put while the lens enlarges the image." },
            { letter: "C", text: "The camera swings left and right on its tripod." },
            { letter: "D", text: "The camera rises into the air on a long arm." }
          ],
          correct: "B"
        },
        {
          id: "cut-word",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 7, the word *cut* most nearly means —",
          choices: [
            { letter: "A", text: "join one shot to the next while editing" },
            { letter: "B", text: "remove the weakest scenes from a story" },
            { letter: "C", text: "slice the film strip into equal pieces" },
            { letter: "D", text: "end filming early to save the battery" }
          ],
          correct: "A"
        },
        {
          id: "order",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the order of Shots 1 through 3 guide viewers into the story?",
          choices: [
            { letter: "A", text: "It moves from a small detail out to a wide view of the setting." },
            { letter: "B", text: "It moves from the coach's view to the captain's view of events." },
            { letter: "C", text: "It moves from the wide setting to a person to one small detail." },
            { letter: "D", text: "It moves from the end of the day back to the early morning." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "lit-language-harbor-notes",
      family: "LIT",
      genre: "LANGUAGE",
      episode: "language",
      title: "Director's Notes: Harbor Day",
      kind: "Film language · 11.RV",
      blurb: "A director plans a day of moving-camera shots: tilt, pan, tracking, dolly, truck and boom.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Every shot moves tomorrow, so here is the plan. " +
        N(2) + "Shot 4 starts on the fisherman's boots and tilts up, the camera pivoting on its tripod until his weathered face fills the frame. " +
        N(3) + "Shot 5 pans across the empty docks, the camera turning left to right without leaving its spot, like a lookout scanning the water. " +
        N(4) + "Shot 6 is a tracking shot: the camera rides on rails laid along the pier, following Marisol as she runs for the boat. " +
        N(5) + "Shot 7 is a dolly in, the camera rolling on its wheeled cart toward the old man until we feel we are intruding; in shot 8 we truck sideways along the hull. " +
        N(6) + "We end with a boom shot, the crane arm lifting the camera high to reveal how small the boat looks against the sea. " +
        N(7) + "Sound crew: keep the microphone boom above the frame line, or it will dip into the picture." +
        "</p>",
      claims: [
        {
          id: "tilt-pan",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "Which statement best explains the difference between the tilt in sentence 2 and the pan in sentence 3?",
          choices: [
            { letter: "A", text: "A tilt travels along rails, while a pan rides a crane arm." },
            { letter: "B", text: "A tilt pivots up or down, while a pan turns side to side." },
            { letter: "C", text: "A tilt changes the lens, while a pan moves the whole tripod." },
            { letter: "D", text: "A tilt shows a character's view, while a pan shows a setting." }
          ],
          correct: "B"
        },
        {
          id: "tracking",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The tracking shot in sentence 4 will most likely make viewers feel —",
          choices: [
            { letter: "A", text: "far away from the action, like calm onlookers" },
            { letter: "B", text: "confused about where on the pier Marisol is" },
            { letter: "C", text: "certain that Marisol will miss the boat" },
            { letter: "D", text: "swept along in Marisol's rush toward the boat" }
          ],
          correct: "D"
        },
        {
          id: "dolly",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "What effect does the director want from the dolly in shot 7?",
          choices: [
            { letter: "A", text: "a growing, uneasy closeness to the old man" },
            { letter: "B", text: "a sense that the old man is a powerful leader" },
            { letter: "C", text: "a cheerful, playful mood on the busy docks" },
            { letter: "D", text: "a clear view of the whole harbor and the sea" }
          ],
          correct: "A"
        },
        {
          id: "boom-two",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Based on sentences 6 and 7, the word *boom* can name which TWO things? Select TWO.",
          choices: [
            { letter: "A", text: "a long arm that lifts the camera into the air" },
            { letter: "B", text: "a loud crash of waves against the pier" },
            { letter: "C", text: "a pole that holds a microphone near actors" },
            { letter: "D", text: "a cart on wheels that carries the camera" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Ending the day with the boom shot in sentence 6 mainly helps the film show —",
          choices: [
            { letter: "A", text: "how quickly Marisol reaches the boat" },
            { letter: "B", text: "the fisherman's face in fine detail" },
            { letter: "C", text: "how small and alone the boat is at sea" },
            { letter: "D", text: "what the old man sees from the dock" }
          ],
          correct: "C"
        },
        {
          id: "cafeteria",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.2",
          stem: "A director wants to show a long line of students stretching across a cafeteria without moving the tripod from its spot. Based on the notes, which camera move fits best?",
          choices: [
            { letter: "A", text: "a dolly in" },
            { letter: "B", text: "a boom shot" },
            { letter: "C", text: "a tracking shot" },
            { letter: "D", text: "a pan" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "lit-language-between-shots",
      family: "LIT",
      genre: "LANGUAGE",
      episode: "language",
      title: "Between the Shots",
      kind: "Vocabulary · 11.RV",
      blurb: "Fades, dissolves, wipes and freeze frames: the editor's ways of moving from one shot to the next.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Editors have more ways to move between shots than a plain cut. " +
        N(2) + "In a <strong>fade out</strong>, the picture slowly darkens to black, a quiet way to close a scene or to hint that time is slipping by. " +
        N(3) + "A <strong>fade in</strong> reverses the process, as the opening image gradually rises out of the dark. " +
        N(4) + "A <strong>dissolve</strong> overlaps two shots: one melts away while the next appears through it, so for a moment both share the screen and viewers sense a link between them. " +
        N(5) + "A <strong>wipe</strong> is bolder, pushing the new shot across the screen behind a moving edge, like a curtain being drawn. " +
        N(6) + "A <strong>freeze frame</strong> stops the action on one frame and holds it, turning a leaping runner into something close to a <strong>still</strong>, a single photograph like the ones printed on movie posters." +
        "</p>",
      claims: [
        {
          id: "melts",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 4, the word *melts* helps readers understand that in a dissolve, the first shot —",
          choices: [
            { letter: "A", text: "is pushed off the screen by a sharp edge" },
            { letter: "B", text: "stops moving and holds still on one frame" },
            { letter: "C", text: "fades gradually instead of vanishing at once" },
            { letter: "D", text: "turns completely black before the next begins" }
          ],
          correct: "C"
        },
        {
          id: "root",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word *dissolve* comes from Latin parts meaning \"apart\" and \"to loosen.\" How does this origin fit the editing term?",
          choices: [
            { letter: "A", text: "The first image seems to loosen and come apart as the next one forms." },
            { letter: "B", text: "The editor must cut the strip of film apart with a sharp blade." },
            { letter: "C", text: "The two shots are kept far apart so they never share the screen." },
            { letter: "D", text: "The action is loosened from time and frozen on a single frame." }
          ],
          correct: "A"
        },
        {
          id: "tree",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "A film shows a girl planting a seedling. That shot slowly melts into a shot of the same spot, where a grown woman sits under a tall tree. Which transition is this, and what does it suggest?",
          choices: [
            { letter: "A", text: "a wipe, showing that the woman is a stranger" },
            { letter: "B", text: "a dissolve, showing that many years have passed" },
            { letter: "C", text: "a freeze frame, showing the girl's fear of change" },
            { letter: "D", text: "a fade in, showing that the story is just starting" }
          ],
          correct: "B"
        },
        {
          id: "freeze-still",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "According to sentence 6, how is a freeze frame different from a still?",
          choices: [
            { letter: "A", text: "A freeze frame is printed on posters; a still appears only on screen." },
            { letter: "B", text: "A freeze frame uses two shots at once; a still uses only one shot." },
            { letter: "C", text: "A freeze frame shows a moving runner; a still shows an empty set." },
            { letter: "D", text: "A freeze frame halts the film on screen; a still is one photograph." }
          ],
          correct: "D"
        },
        {
          id: "use-fade",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.2",
          stem: "Which sentence uses the term *fade out* correctly?",
          choices: [
            { letter: "A", text: "The fade out pushed the new shot across the screen like a sliding door." },
            { letter: "B", text: "The film ends with a fade out, the picture sinking into black as the music stops." },
            { letter: "C", text: "The fade out stopped the dancer in midair and held her there for a moment." },
            { letter: "D", text: "The fade out let the first scene and the next one share the screen at once." }
          ],
          correct: "B"
        },
        {
          id: "curtain",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "The simile \"like a curtain being drawn\" in sentence 5 suggests that a wipe —",
          choices: [
            { letter: "A", text: "is so gentle that viewers barely notice it" },
            { letter: "B", text: "is used only in films about the theater" },
            { letter: "C", text: "always ends a movie for good" },
            { letter: "D", text: "is a visible, showy change of scene" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── MEDIUM (level 2) ───────────── */
    {
      id: "lit-language-late-bus",
      family: "LIT",
      genre: "LANGUAGE",
      episode: "language",
      title: "Review: Late Bus",
      kind: "Film review · 11.RI",
      blurb: "A film-club critic praises a classmate's short for its jump cuts, smash cut and wide-angle lens.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "At Friday's film-club screening, junior Dmitri Osei's five-minute short, \"Late Bus,\" drew the loudest applause of the night, and it deserved it. " +
        N(2) + "The film follows a sophomore named Rosa through the worst morning of her year, and Osei tells the story almost entirely through editing.</p>" +
        "<p>" + N(3) + "The opening is a run of jump cuts: Rosa brushes her teeth, and then, with the camera never moving, she is suddenly dressed, then suddenly tying her shoes, then suddenly gone. " +
        N(4) + "Because the background holds still while Rosa leaps from place to place, the skips in time feel like her panic. " +
        N(5) + "A few club members complained that these cuts look like mistakes, yet the pattern is far too regular to be an accident.</p>" +
        "<p>" + N(6) + "The best moment is a smash cut. " +
        N(7) + "Rosa sprints after the bus while drums pound, and in one instant the film cuts to the silent, empty bus stop, where a single leaf drifts past. " +
        N(8) + "The audience burst out laughing, which is exactly what a sudden jolt from noise to silence is built to do.</p>" +
        "<p>" + N(9) + "Osei also filmed the hallway scenes with a wide-angle lens, which takes in the whole corridor, stretches it so it seems to go on forever, and bends the lockers at the edges of the frame. " +
        N(10) + "That distortion turns an ordinary school hall into a maze. " +
        N(11) + "My one complaint is the ending, a freeze frame of Rosa in mid-yawn that holds so long it stops feeling like a joke. " +
        N(12) + "Even so, \"Late Bus\" proves that a short film can be funny without a single line of dialogue." +
        "</p>",
      claims: [
        {
          id: "judgment",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which statement best expresses the reviewer's overall judgment of \"Late Bus\"?",
          choices: [
            { letter: "A", text: "It is clever at first, but its editing mistakes ruin the story." },
            { letter: "B", text: "It is a skillful, funny film told through editing, despite its ending." },
            { letter: "C", text: "It would be stronger if Rosa had more lines of spoken dialogue." },
            { letter: "D", text: "It earned applause mainly because the director is well liked." }
          ],
          correct: "B"
        },
        {
          id: "jump",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "According to sentences 3 and 4, the jump cuts make Rosa's morning feel —",
          choices: [
            { letter: "A", text: "slow and peaceful, like a lazy weekend" },
            { letter: "B", text: "dreamlike, as if she were still asleep" },
            { letter: "C", text: "orderly, with every step shown in full" },
            { letter: "D", text: "rushed and frantic, as if time is skipping" }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "How does the reviewer answer the complaint described in sentence 5?",
          choices: [
            { letter: "A", text: "by admitting that the cuts were a lucky accident" },
            { letter: "B", text: "by pointing out that the audience loved the film" },
            { letter: "C", text: "by arguing that the regular pattern proves they are deliberate" },
            { letter: "D", text: "by explaining that jump cuts are required in short films" }
          ],
          correct: "C"
        },
        {
          id: "smash",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "Why does the smash cut in sentence 7 make the audience laugh?",
          choices: [
            { letter: "A", text: "It jumps without warning from loud action to an empty, silent stop." },
            { letter: "B", text: "It slowly blends the bus and the bus stop together on the screen." },
            { letter: "C", text: "It shows Rosa catching the bus just as the drums reach their peak." },
            { letter: "D", text: "It freezes Rosa in midair so viewers can study her expression." }
          ],
          correct: "A"
        },
        {
          id: "distortion",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 10, the word *distortion* refers to —",
          choices: [
            { letter: "A", text: "the noise of the drums on the soundtrack" },
            { letter: "B", text: "the confusion the club felt about the film" },
            { letter: "C", text: "the long pause of the final freeze frame" },
            { letter: "D", text: "the way the lens stretches and bends the image" }
          ],
          correct: "D"
        },
        {
          id: "audience-two",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "The reviewer uses the audience's reaction as evidence that the film works. Select TWO sentences that offer this kind of evidence.",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "lit-language-keeper",
      family: "LIT",
      genre: "LANGUAGE",
      episode: "language",
      title: "Keeper",
      kind: "Film analysis · 11.RL",
      blurb: "In a short film about a lighthouse in a storm, the camera keeps changing who looks small.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "The short film \"Keeper\" opens with an aerial shot from far overhead: a lighthouse on a gray rock, waves folding white around it, and a tiny figure climbing the outside stairs. " +
        N(2) + "From that height the girl, Ines, is barely a speck, and the sea seems to own everything. " +
        N(3) + "The camera then drops to a worm's-eye view at the foot of the tower, looking almost straight up, so the lighthouse rises like a giant against the storm clouds.</p>" +
        "<p>" + N(4) + "Inside, the director keeps changing who looks small. " +
        N(5) + "When Ines's grandfather, the keeper, collapses in the lamp room, the camera peers down at him from a high angle, and the man who once seemed fearless looks fragile on the iron floor. " +
        N(6) + "In the next shot the camera sits low beneath Ines as she grabs the radio, and she suddenly seems as tall as the tower itself. " +
        N(7) + "A close-up follows on her hand twisting the dial, her knuckles pale.</p>" +
        "<p>" + N(8) + "The final move is a slow dissolve. " +
        N(9) + "The image of Ines at the radio fades while a new shot of a rescue boat cutting through calm morning water appears beneath it, and for a moment the girl and the boat share the screen. " +
        N(10) + "The overlap quietly tells viewers that the night has passed and that her call has been answered." +
        "</p>",
      claims: [
        {
          id: "aerial",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The aerial shot in sentences 1 and 2 mainly establishes that —",
          choices: [
            { letter: "A", text: "the sea is vast and powerful compared with the people in it" },
            { letter: "B", text: "Ines is in a hurry to reach the top of the lighthouse" },
            { letter: "C", text: "the lighthouse is the newest building on the coast" },
            { letter: "D", text: "the storm has already ended by the time Ines arrives" }
          ],
          correct: "A"
        },
        {
          id: "low-shared",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "Sentences 3 and 6 both place the camera low and looking up. What do these two shots have in common?",
          choices: [
            { letter: "A", text: "Both show what Ines sees through her own eyes." },
            { letter: "B", text: "Both reveal that the storm is about to end." },
            { letter: "C", text: "Both make their subjects seem larger and stronger." },
            { letter: "D", text: "Both make the grandfather seem weak and afraid." }
          ],
          correct: "C"
        },
        {
          id: "reversal",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "How do the camera angles in sentences 5 and 6 reveal a change in the characters?",
          choices: [
            { letter: "A", text: "The grandfather grows stronger as Ines loses her nerve." },
            { letter: "B", text: "Both characters look equally helpless against the storm." },
            { letter: "C", text: "Ines and her grandfather argue over who should call." },
            { letter: "D", text: "Ines becomes the strong one while her grandfather needs help." }
          ],
          correct: "D"
        },
        {
          id: "knuckles",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The close-up in sentence 7 mainly helps viewers notice —",
          choices: [
            { letter: "A", text: "how the radio was built and repaired" },
            { letter: "B", text: "Ines's fear and effort through a small detail" },
            { letter: "C", text: "the size of the lamp room around Ines" },
            { letter: "D", text: "the rescue boat heading toward the rock" }
          ],
          correct: "B"
        },
        {
          id: "dissolve",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the dissolve in sentences 8 through 10 contribute to the plot?",
          choices: [
            { letter: "A", text: "It suggests that the rescue boat is only a dream Ines has." },
            { letter: "B", text: "It shows the grandfather waking up in the lamp room." },
            { letter: "C", text: "It links Ines's call to the rescue and shows a night passing." },
            { letter: "D", text: "It returns the story to the aerial view from the opening." }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme do the film's camera choices most strongly suggest?",
          choices: [
            { letter: "A", text: "Someone who seems small can rise to courage in a crisis." },
            { letter: "B", text: "The sea always wins against those who try to live near it." },
            { letter: "C", text: "Older people should not take on dangerous jobs alone." },
            { letter: "D", text: "Modern machines matter more than human bravery." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── LONG (level 3) ───────────── */
    {
      id: "lit-language-shot-grammar",
      family: "LIT",
      genre: "LANGUAGE",
      episode: "language",
      title: "How Movies Learned Their Grammar",
      kind: "Film history · 11.RI",
      blurb: "From single-shot films to close-ups, cross-cutting and the Kuleshov experiment.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "The first movies did not yet know how to tell a story with a camera. " +
        N(2) + "When Auguste and Louis Lumière began showing films to paying audiences in Paris in 1895, each film was a single shot: the camera was set down, cranked for less than a minute, and stopped. " +
        N(3) + "Workers left a factory or a train pulled into a station while the audience watched from one unchanging position. " +
        N(4) + "A few years later, the French magician Georges Méliès filmed fantastic stories, but he usually framed each scene like a stage play, with the camera planted where a theatergoer's seat would be.</p>" +
        "<p>" + N(5) + "Filmmakers soon discovered that a scene could be broken into pieces. " +
        N(6) + "In England, George Albert Smith's <em>Grandma's Reading Glass</em> (1900) cut from a boy peering through a magnifying glass to enlarged views of what he saw: a newspaper, a watch, his grandmother's eye. " +
        N(7) + "In America, Edwin S. Porter's <em>The Great Train Robbery</em> (1903) cut between several locations, following the bandits from a railroad telegraph office to a moving train to a shootout in the woods. " +
        N(8) + "Porter also filmed one bandit in a close shot, firing his pistol straight at the audience. " +
        N(9) + "Yet that shot had no fixed place in the story; theaters could show it at the beginning or at the end, as they pleased.</p>" +
        "<p>" + N(10) + "The director most often credited with turning these experiments into a system is D. W. Griffith. " +
        N(11) + "Between 1908 and 1913, often working with cameraman Billy Bitzer, Griffith made hundreds of short films for the Biograph company. " +
        N(12) + "In <em>The Lonely Villa</em> (1909), he cross-cut among three lines of action happening at the same time: burglars breaking into a house, a mother and her daughters locked inside, and the father racing home to save them. " +
        N(13) + "Each switch back and forth left viewers less time to catch their breath, so the suspense came not from any single shot but from the editing. " +
        N(14) + "Griffith also moved his camera closer to actors when a moment called for emotion, teaching audiences that a close-up meant they should study what a character felt. " +
        N(15) + "His feature <em>The Birth of a Nation</em> (1915) used all of these tools on a huge scale, but it is a deeply racist film that glorified the Ku Klux Klan, and its success did real harm. " +
        N(16) + "It remains a reminder that skill with a camera says nothing about whether a film's message is just.</p>" +
        "<p>" + N(17) + "In the Soviet Union, the young filmmaker Lev Kuleshov pushed the idea further. " +
        N(18) + "According to accounts he gave later, he joined the same blank close-up of an actor to different images, such as a bowl of soup or a coffin. " +
        N(19) + "Viewers praised the actor's hunger in one version and his grief in another, though his face never changed. " +
        N(20) + "The lesson was that meaning lives partly in the cut itself, in the connection the audience makes between two shots.</p>" +
        "<p>" + N(21) + "By the 1920s, the pieces had become a language: the long shot to show where, the medium shot to show who, the close-up to show what matters, and the cut to join them. " +
        N(22) + "Audiences stopped noticing this grammar, which was the surest sign that it worked." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "11.DSR.E",
          sub: "11.DSR.E.1",
          stem: "Which statement best summarizes the history the passage tells?",
          choices: [
            { letter: "A", text: "Griffith invented every major editing technique by himself at Biograph." },
            { letter: "B", text: "Filmmakers gradually learned to join shots into a language audiences read easily." },
            { letter: "C", text: "Early audiences preferred single-shot films to edited stories with close-ups." },
            { letter: "D", text: "Soviet filmmakers proved that acting matters more than editing in film." }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How is the passage mainly organized?",
          choices: [
            { letter: "A", text: "as a problem followed by several rejected solutions" },
            { letter: "B", text: "as a comparison of French and American filmmakers only" },
            { letter: "C", text: "as an argument followed by a list of counterclaims" },
            { letter: "D", text: "in time order, from single shots to a full editing system" }
          ],
          correct: "D"
        },
        {
          id: "crosscut",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "Based on sentences 12 and 13, *cross-cutting* means —",
          choices: [
            { letter: "A", text: "switching back and forth between actions happening at the same time" },
            { letter: "B", text: "removing scenes that slow a story down before it reaches theaters" },
            { letter: "C", text: "filming the same action from two cameras placed on opposite sides" },
            { letter: "D", text: "moving the camera closer to an actor's face during an emotional moment" }
          ],
          correct: "A"
        },
        {
          id: "kuleshov",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "What conclusion did Kuleshov's experiment support, according to sentences 18 through 20?",
          choices: [
            { letter: "A", text: "Audiences cannot read emotion on an actor's face at all." },
            { letter: "B", text: "Close-ups should be saved for scenes about food or death." },
            { letter: "C", text: "Viewers build meaning by connecting shots that are joined." },
            { letter: "D", text: "A skilled actor can show many feelings in a single shot." }
          ],
          correct: "C"
        },
        {
          id: "porter-free",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "Why does the author point out in sentence 9 that theaters could show the bandit's close shot at the beginning or at the end?",
          choices: [
            { letter: "A", text: "to show that the close shot was not yet tied to the story's order" },
            { letter: "B", text: "to prove that audiences were too frightened to watch the shot twice" },
            { letter: "C", text: "to explain why Porter's film was longer than the Lumière films" },
            { letter: "D", text: "to suggest that theaters often edited films better than directors" }
          ],
          correct: "A"
        },
        {
          id: "reading-glass",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.2",
          stem: "Based on sentence 6, the magnified views in <em>Grandma's Reading Glass</em> are early examples of which TWO techniques? Select TWO.",
          choices: [
            { letter: "A", text: "the wipe" },
            { letter: "B", text: "the close-up" },
            { letter: "C", text: "the boom shot" },
            { letter: "D", text: "the subjective point of view" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "birth",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.2",
          stem: "The author includes sentences 15 and 16 mainly to —",
          choices: [
            { letter: "A", text: "argue that Griffith's short films were better than his features" },
            { letter: "B", text: "explain why Griffith left the Biograph company in 1913" },
            { letter: "C", text: "show that a film's technical skill does not make its message good" },
            { letter: "D", text: "suggest that large budgets were the key to early film success" }
          ],
          correct: "C"
        },
        {
          id: "fixed-seat",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Which sentence best supports the idea that some early filmmakers treated the camera like a member of a theater audience?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "lit-language-blackout",
      family: "LIT",
      genre: "LANGUAGE",
      episode: "language",
      title: "Commentary: The Blackout Sequence",
      kind: "Film analysis · 11.RL",
      blurb: "A student director explains, shot by shot, how a three-minute sequence turns a power outage into panic.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "The blackout sequence in our film \"Static\" runs just under three minutes, but it took our crew two full weekends to shoot, and almost every choice in it was planned on paper first. " +
        N(2) + "It is made of three scenes, the library, the stairwell and the parking lot, and the challenge was making them feel like one unbroken stretch of panic.</p>" +
        "<p>" + N(3) + "We fade in from black on a long shot of the school library at dusk, every window glowing, so the audience knows exactly where we are before anything goes wrong. " +
        N(4) + "Then a boom shot carries the camera up and over the bookshelves and glides down toward the one table where Talia is still studying. " +
        N(5) + "We wanted viewers to feel as if something were drifting down to find her. " +
        N(6) + "When the lights die, we cut to an over-the-shoulder shot from behind Talia, looking past her toward the dark doorway, so the audience stares into the same blackness she does.</p>" +
        "<p>" + N(7) + "For the stairwell, our camera operator walked backward ahead of Talia with a handheld stabilizer, a following shot that keeps her face in the frame as she hurries down. " +
        N(8) + "Halfway down, we switch to her point of view: the picture becomes her flashlight beam swinging across railings and steps, and we see only what she sees. " +
        N(9) + "On the landing we leaned the camera to one side, so the steps slant across the frame. " +
        N(10) + "That Dutch angle was my favorite decision, because nothing in the stairwell has changed except the horizon, and yet everything suddenly feels wrong.</p>" +
        "<p>" + N(11) + "Some test viewers told us the parking-lot scene should build slowly, but I chose speed instead, because a slow build would let the audience relax. " +
        N(12) + "Talia bangs through the exit door into roaring rain, and we smash cut to the inside of her car: dry, silent, the dashboard clock blinking. " +
        N(13) + "Then come four jump cuts of her hands trying the key, each a few seconds later than the last, while the camera never moves, so the audience feels the minutes slipping away.</p>" +
        "<p>" + N(14) + "The final image of the sequence belongs to the old engine. " +
        N(15) + "It catches, the headlights flare, and the frame freezes on Talia's face, half relieved and half terrified. " +
        N(16) + "We hold that freeze frame for two seconds and then fade out to black, leaving viewers to decide for themselves whether she is truly safe." +
        "</p>",
      claims: [
        {
          id: "sequence",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Based on sentences 1 and 2, why does the director call the blackout a sequence rather than a scene?",
          choices: [
            { letter: "A", text: "It was filmed in one unbroken run of the camera." },
            { letter: "B", text: "It contains no dialogue, only music and sound effects." },
            { letter: "C", text: "It links three scenes in different places into one unit." },
            { letter: "D", text: "It took two weekends to shoot instead of a single day." }
          ],
          correct: "C"
        },
        {
          id: "boom-shot",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The director's purpose for the boom shot in sentences 4 and 5 is to —",
          choices: [
            { letter: "A", text: "suggest that Talia is being watched or hunted" },
            { letter: "B", text: "show how many books the school library holds" },
            { letter: "C", text: "let viewers see the parking lot through a window" },
            { letter: "D", text: "make Talia seem powerful and in control" }
          ],
          correct: "A"
        },
        {
          id: "follow-pov",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "How does the camera in sentence 7 differ from the camera in sentence 8?",
          choices: [
            { letter: "A", text: "Sentence 7 uses a zoom lens; sentence 8 uses a crane arm." },
            { letter: "B", text: "Sentence 7 looks down on Talia; sentence 8 looks up at her." },
            { letter: "C", text: "Sentence 7 freezes the action; sentence 8 lets it move again." },
            { letter: "D", text: "Sentence 7 watches Talia's face; sentence 8 shows what she sees." }
          ],
          correct: "D"
        },
        {
          id: "dutch-favorite",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "According to sentence 10, why is the Dutch angle the director's favorite decision?",
          choices: [
            { letter: "A", text: "It shows the stairwell from Talia's own point of view." },
            { letter: "B", text: "It creates unease even though the setting has not changed." },
            { letter: "C", text: "It makes the stairwell look wider and brighter than it is." },
            { letter: "D", text: "It was the easiest and quickest shot to film in the sequence." }
          ],
          correct: "B"
        },
        {
          id: "contrast",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 12, the contrast between \"roaring rain\" and \"dry, silent\" helps show that a smash cut —",
          choices: [
            { letter: "A", text: "blends two shots together so slowly that viewers barely notice" },
            { letter: "B", text: "always moves the story backward to an earlier time" },
            { letter: "C", text: "shows a character's memories of a calmer place" },
            { letter: "D", text: "jolts viewers by jumping suddenly from chaos to quiet" }
          ],
          correct: "D"
        },
        {
          id: "jump-context",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Based on sentence 13, a jump cut is best described as —",
          choices: [
            { letter: "A", text: "a cut that skips ahead in time while the framing stays almost the same" },
            { letter: "B", text: "a shot in which the camera jumps into the air on a crane" },
            { letter: "C", text: "a transition in which the new shot slides across the screen" },
            { letter: "D", text: "a cut between two characters who are speaking to each other" }
          ],
          correct: "A"
        },
        {
          id: "share-two",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "Select TWO techniques the director uses to make the audience share what Talia sees.",
          choices: [
            { letter: "A", text: "the long shot of the library at dusk" },
            { letter: "B", text: "the over-the-shoulder shot toward the doorway" },
            { letter: "C", text: "the point-of-view shot of the flashlight beam" },
            { letter: "D", text: "the freeze frame on Talia's face at the end" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The freeze frame and fade out in sentences 15 and 16 leave the sequence —",
          choices: [
            { letter: "A", text: "cheerful, because Talia is clearly safe at last" },
            { letter: "B", text: "confusing, because viewers never learn where Talia is" },
            { letter: "C", text: "unresolved, so viewers must wonder whether she is safe" },
            { letter: "D", text: "comic, because the car will not start after all" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
