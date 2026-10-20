/* SOL Labyrinth — Lit and Film: Science Fiction through Star Wars (family LIT, genre SCIFI)
 * Episodes: newhope (A New Hope, 1977), empire (The Empire Strikes Back, 1980), jedi (Return of the Jedi, 1983)
 * and scifi (the genre's basics: the elements of science fiction, its film history, Westerns in Star Wars and
 * Joseph Campbell's Hero's Journey, with a paired Luke / Odysseus text). Six packs per episode, tiny to long.
 * The films are copyrighted: original summary and analysis only, no quoted dialogue. A Trip to the Moon (1902)
 * is public domain. Loaded after content.js; pushes into HEIST_PACKS. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ═════════════ A NEW HOPE (1977) ═════════════ */
    /* ───── TINY (level 1) ───── */
    {
      id: "lit-newhope-two-suns", family: "LIT", genre: "SCIFI", episode: "newhope",
      title: "Two Suns", kind: "Screen story · 11.RL",
      blurb: "A farm boy on a desert planet stares at the sky and wants more.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "On the desert planet Tatooine, young Luke Skywalker works on his uncle's moisture farm, where machines pull water from the dry air. " +
        N(2) + "Luke longs to leave and become a pilot, but his uncle keeps asking him to stay one more season. " +
        N(3) + "One evening Luke walks outside alone. " +
        N(4) + "He gazes at the planet's two suns as they sink below the horizon. " +
        N(5) + "He says nothing, yet the music swells and his face shows how badly he wants a bigger life. " +
        N(6) + "The film has shown its hero in his ordinary world." +
        "</p>",
      claims: [
        { id: "setting", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "What does sentence 1 suggest about life on Tatooine?",
          choices: [
            { letter: "A", text: "Food grows easily in the planet's rich soil." },
            { letter: "B", text: "Water is scarce and must be gathered by machines." },
            { letter: "C", text: "The farm sits beside a busy and crowded city." },
            { letter: "D", text: "Most of the planet is covered by cold oceans." }
          ],
          correct: "B" },
        { id: "feelings", sol: "11.RL.1.C", sub: "11.RL.1.C.1",
          stem: "Which word best describes Luke's feelings in sentences 2–5?",
          choices: [
            { letter: "A", text: "content" },
            { letter: "B", text: "fearful" },
            { letter: "C", text: "bitter" },
            { letter: "D", text: "restless" }
          ],
          correct: "D" },
        { id: "suns", sol: "11.RL.2.C", sub: "11.RL.2.C.1",
          stem: "In sentence 4, the two suns sinking below the horizon most likely symbolize —",
          choices: [
            { letter: "A", text: "Luke's longing for the worlds beyond his farm" },
            { letter: "B", text: "the danger of the desert storms to come" },
            { letter: "C", text: "his uncle's anger at his idle evening walk" },
            { letter: "D", text: "the close friendship between Luke and his uncle" }
          ],
          correct: "A" },
        { id: "ordinary", sol: "11.RL.3.B", sub: "11.RL.3.B.1",
          stem: "Sentence 6 says the film has shown Luke's ordinary world, the first stage of the Hero's Journey. This stage presents —",
          choices: [
            { letter: "A", text: "the hero's first battle with a dangerous enemy" },
            { letter: "B", text: "the wise guide who trains the hero for his quest" },
            { letter: "C", text: "the everyday life the hero lives before his adventure" },
            { letter: "D", text: "the treasure the hero brings home at the very end" }
          ],
          correct: "C" },
        { id: "purpose", sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "The author includes sentence 5 mainly to show that —",
          choices: [
            { letter: "A", text: "Luke is too shy to tell his uncle what he thinks" },
            { letter: "B", text: "the film reveals Luke's feelings without words" },
            { letter: "C", text: "Luke would rather listen to music than farm" },
            { letter: "D", text: "evening is the quietest time on Tatooine" }
          ],
          correct: "B" }
      ]
    },
    {
      id: "lit-newhope-cantina", family: "LIT", genre: "SCIFI", episode: "newhope",
      title: "The Cantina", kind: "Film analysis · 11.RL",
      blurb: "A rough spaceport bar, a cocky smuggler and a Western in disguise.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "To leave Tatooine, Luke and the old Jedi Obi-Wan Kenobi need a pilot, so they enter a crowded cantina in the spaceport of Mos Eisley. " +
        N(2) + "The rough bar is full of strange aliens, loud music and strangers who settle quarrels with weapons. " +
        N(3) + "There they hire Han Solo, a cocky smuggler, and his towering copilot Chewbacca, a Wookiee. " +
        N(4) + "Han wears his blaster low on his hip, like a cowboy's pistol. " +
        N(5) + "The scene borrows the saloon of the Western, and Han is its gunslinger." +
        "</p>",
      claims: [
        { id: "danger", sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Which sentence best shows that the cantina is a dangerous place?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 2" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "C" },
        { id: "cocky", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word *cocky* most nearly means —",
          choices: [
            { letter: "A", text: "boldly sure of himself" },
            { letter: "B", text: "quietly nervous" },
            { letter: "C", text: "deeply loyal" },
            { letter: "D", text: "carefully honest" }
          ],
          correct: "A" },
        { id: "pistol", sol: "11.RL.2.C", sub: "11.RL.2.C.1",
          stem: "Sentence 4 compares Han's blaster to a cowboy's pistol mainly to —",
          choices: [
            { letter: "A", text: "show that Han's weapon is old and broken" },
            { letter: "B", text: "explain how blasters are built on Tatooine" },
            { letter: "C", text: "suggest that Han secretly comes from Earth" },
            { letter: "D", text: "link Han to the gunfighters of Western films" }
          ],
          correct: "D" },
        { id: "why-hire", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "Based on the passage, why do Luke and Obi-Wan hire Han and Chewbacca?",
          choices: [
            { letter: "A", text: "They need guards to protect the farm." },
            { letter: "B", text: "They need someone to fly them off the planet." },
            { letter: "C", text: "They want help stopping a fight in the bar." },
            { letter: "D", text: "They want a guide to the busy spaceport." }
          ],
          correct: "B" },
        { id: "main", sol: "11.DSR.E", sub: "11.DSR.E.1",
          stem: "Which statement best expresses the main idea of the passage about the Mos Eisley cantina?",
          choices: [
            { letter: "A", text: "Mos Eisley is the largest city on the planet Tatooine." },
            { letter: "B", text: "Chewbacca is the strongest character in the whole film." },
            { letter: "C", text: "The cantina scene introduces allies in a Western setting." },
            { letter: "D", text: "Luke is frightened by the aliens in the crowded bar." }
          ],
          correct: "C" }
      ]
    },
    /* ───── SHORT ───── */
    {
      id: "lit-newhope-call", family: "LIT", genre: "SCIFI", episode: "newhope",
      title: "The Call", kind: "Screen story · 11.RL",
      blurb: "A hidden message, an old hermit and a refusal that does not last.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Luke's adventure begins with a small accident. " +
        N(2) + "While cleaning a battered little droid named R2-D2, he triggers a flickering hologram of a young woman. " +
        N(3) + "She is Princess Leia, and she is pleading with someone named Obi-Wan Kenobi for help. " +
        N(4) + "Luke wonders whether she means old Ben Kenobi, a hermit who lives out in the desert. " +
        N(5) + "When R2-D2 slips away to find Ben, Luke follows and is attacked by Sand People, and Ben drives them off. " +
        N(6) + "In his hut, Ben reveals that he was once the Jedi Knight Obi-Wan and gives Luke his father's lightsaber. " +
        N(7) + "He asks Luke to come with him and learn the ways of the Force. " +
        N(8) + "Luke refuses, saying he is needed on the farm. " +
        N(9) + "Then he discovers that Imperial stormtroopers hunting the droids have burned his home and killed his aunt and uncle. " +
        N(10) + "With nothing left to hold him, Luke agrees to go." +
        "</p>",
      claims: [
        { id: "call", sol: "11.RL.3.B", sub: "11.RL.3.B.1",
          stem: "In the Hero's Journey, the call to adventure is the event that invites the hero into a new world. Which event is Luke's call?",
          choices: [
            { letter: "A", text: "finding Leia's message inside R2-D2" },
            { letter: "B", text: "being attacked by the Sand People" },
            { letter: "C", text: "learning his father had a lightsaber" },
            { letter: "D", text: "losing his home to the stormtroopers" }
          ],
          correct: "A" },
        { id: "refusal", sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Which sentence shows Luke refusing the call?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "C" },
        { id: "duty", sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "What does Luke's answer in sentence 8 reveal about him at this point?",
          choices: [
            { letter: "A", text: "He does not believe Ben was ever a Jedi." },
            { letter: "B", text: "He is afraid of the Sand People in the desert." },
            { letter: "C", text: "He wants to keep the lightsaber for himself." },
            { letter: "D", text: "He still feels bound by duty to his family." }
          ],
          correct: "D" },
        { id: "turn", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "How does the event in sentence 9 change the direction of the plot?",
          choices: [
            { letter: "A", text: "It convinces Luke that the hologram was a trick." },
            { letter: "B", text: "It removes the ties that were keeping Luke home." },
            { letter: "C", text: "It forces Ben to leave Luke behind on Tatooine." },
            { letter: "D", text: "It shows that the droids work for the Empire." }
          ],
          correct: "B" },
        { id: "mentor", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO details that show Ben acting as Luke's mentor.",
          choices: [
            { letter: "A", text: "He gives Luke his father's lightsaber." },
            { letter: "B", text: "He lives alone as a hermit in the desert." },
            { letter: "C", text: "He offers to teach Luke the ways of the Force." },
            { letter: "D", text: "He is the person Leia's message was meant for." }
          ],
          correct: ["A", "C"] },
        { id: "flickering", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word *flickering* suggests that the hologram —",
          choices: [
            { letter: "A", text: "is bright and perfectly clear" },
            { letter: "B", text: "shows a map of a distant planet" },
            { letter: "C", text: "plays loud music as it appears" },
            { letter: "D", text: "shines unsteadily, as if damaged" }
          ],
          correct: "D" }
      ]
    },
    {
      id: "lit-newhope-opening-shot", family: "LIT", genre: "SCIFI", episode: "newhope",
      title: "The Ship That Never Ends", kind: "Film language · 11.RV",
      blurb: "A low angle and an old-fashioned wipe tell viewers who holds the power.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Before a single character speaks, <em>A New Hope</em> shows viewers who holds the power. " +
        N(2) + "After yellow words crawl up the screen and into the stars, the camera tilts down toward a desert planet. " +
        N(3) + "A small rebel ship races past under fire. " +
        N(4) + "Then the underside of an Imperial Star Destroyer fills the top of the frame and keeps coming, so long that it seems never to end. " +
        N(5) + "The camera sits below the huge ship and looks up at it, a <em>low angle</em> that makes the Empire seem enormous and the rebels tiny. " +
        N(6) + "Later, Lucas moves between scenes with <em>wipes</em>, in which the new shot slides across the screen and pushes the old one away. " +
        N(7) + "Wipes were common in the old adventure serials, such as <em>Flash Gordon</em>, that inspired Lucas. " +
        N(8) + "The old-fashioned transition tells viewers that they are watching a classic adventure." +
        "</p>",
      claims: [
        { id: "low-angle", sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "In sentence 5, a *low angle* is a shot in which the camera —",
          choices: [
            { letter: "A", text: "moves slowly across a wide landscape" },
            { letter: "B", text: "is placed below the subject, looking up" },
            { letter: "C", text: "tilts sideways so the horizon slants" },
            { letter: "D", text: "follows a character from behind" }
          ],
          correct: "B" },
        { id: "effect", sol: "11.RI.2.B", sub: "11.RI.2.B.2",
          stem: "According to the passage, what effect does the low angle create?",
          choices: [
            { letter: "A", text: "It makes the rebel ship seem fast and heroic." },
            { letter: "B", text: "It hides the Star Destroyer's weapons from view." },
            { letter: "C", text: "It shows the planet's surface in close detail." },
            { letter: "D", text: "It makes the Empire seem overpowering." }
          ],
          correct: "D" },
        { id: "wipe", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "Based on sentence 6, which description best fits a *wipe*?",
          choices: [
            { letter: "A", text: "One shot slides across the screen, replacing another." },
            { letter: "B", text: "The picture slowly darkens until it is all black." },
            { letter: "C", text: "Two shots overlap as one fades into the next." },
            { letter: "D", text: "The action freezes on a single still frame." }
          ],
          correct: "A" },
        { id: "serials", sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "The author includes sentence 7, about the old serials, mainly to —",
          choices: [
            { letter: "A", text: "argue that Flash Gordon was a better film" },
            { letter: "B", text: "describe how special effects were invented" },
            { letter: "C", text: "explain where Lucas's use of wipes came from" },
            { letter: "D", text: "show that audiences disliked old-fashioned films" }
          ],
          correct: "C" },
        { id: "central", sol: "11.DSR.E", sub: "11.DSR.E.1",
          stem: "Which statement best expresses the central idea of the passage about the film's opening?",
          choices: [
            { letter: "A", text: "The opening crawl is the most famous part of the film." },
            { letter: "B", text: "Camera angles and transitions shape how viewers read the film." },
            { letter: "C", text: "Lucas preferred old serials to modern adventure films." },
            { letter: "D", text: "Star Destroyers are the largest ships in the whole film." }
          ],
          correct: "B" },
        { id: "size", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO details that emphasize the difference in size between the rebels and the Empire.",
          choices: [
            { letter: "A", text: "A small rebel ship races past under fire." },
            { letter: "B", text: "Yellow words crawl up the screen." },
            { letter: "C", text: "The Star Destroyer seems never to end." },
            { letter: "D", text: "The camera tilts down toward a planet." }
          ],
          correct: ["A", "C"] }
      ]
    },
    /* ───── MEDIUM (level 2) ───── */
    {
      id: "lit-newhope-rescue", family: "LIT", genre: "SCIFI", episode: "newhope",
      title: "Rescue on the Death Star", kind: "Screen story · 11.RL",
      blurb: "A princess who rescues herself, a closing trap and a mentor's sacrifice.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "When the Millennium Falcon drops out of hyperspace, Alderaan, Princess Leia's home planet, is gone. " +
        N(2) + "The Empire has destroyed it with its new weapon, the Death Star, a battle station the size of a small moon. " +
        N(3) + "Before the heroes can flee, a tractor beam drags their ship inside the station. " +
        N(4) + "Obi-Wan slips away alone to shut down the beam so that they can escape. " +
        N(5) + "Meanwhile, Luke learns that Leia is a prisoner aboard and is scheduled to be executed. " +
        N(6) + "Han wants to hide and wait, but Luke tempts him with talk of a large reward. " +
        N(7) + "Disguised in stolen stormtrooper armor, Luke and Han march Chewbacca through the halls as their pretend prisoner and break Leia out of her cell." +
        "</p><p>" +
        N(8) + "The rescue quickly goes wrong, and Leia, far from a helpless princess, grabs a blaster and shoots open an escape route into a garbage chute. " +
        N(9) + "In the trash compactor below, the walls begin to close in, and only a last-second call to the droids saves the group. " +
        N(10) + "As they race back to the Falcon, Obi-Wan meets Darth Vader, his former student, in a lightsaber duel. " +
        N(11) + "Seeing Luke across the hangar, Obi-Wan smiles, raises his blade, and lets Vader strike him down. " +
        N(12) + "His body vanishes, leaving only his empty robe. " +
        N(13) + "Luke cries out in grief, but he hears what seems to be Obi-Wan's voice urging him to run. " +
        N(14) + "It is the ordeal of Luke's journey: he has rescued the princess, but he has lost his mentor." +
        "</p>",
      claims: [
        { id: "power", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "Sentences 1 and 2 mainly establish —",
          choices: [
            { letter: "A", text: "why Han wants to hide on the Death Star" },
            { letter: "B", text: "how Obi-Wan plans to shut down the beam" },
            { letter: "C", text: "the terrible power of the Empire's weapon" },
            { letter: "D", text: "the reason Leia was taken prisoner" }
          ],
          correct: "C" },
        { id: "leia", sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "How is Leia revealed in sentence 8?",
          choices: [
            { letter: "A", text: "as a bold leader who takes charge of her own rescue" },
            { letter: "B", text: "as a frightened captive who waits to be saved" },
            { letter: "C", text: "as a careless fighter who puts the group in danger" },
            { letter: "D", text: "as a cold royal who refuses help from strangers" }
          ],
          correct: "A" },
        { id: "han", sol: "11.RL.1.C", sub: "11.RL.1.C.1",
          stem: "Sentence 6 suggests that at this point Han is mostly motivated by —",
          choices: [
            { letter: "A", text: "loyalty to Obi-Wan" },
            { letter: "B", text: "anger at the Empire" },
            { letter: "C", text: "love for Leia" },
            { letter: "D", text: "the hope of payment" }
          ],
          correct: "D" },
        { id: "sacrifice", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Based on the passage, why does Obi-Wan most likely let Vader strike him down?",
          choices: [
            { letter: "A", text: "He has grown too weary to keep on fighting." },
            { letter: "B", text: "He gives his life so the others can escape." },
            { letter: "C", text: "He wants to trick the Empire about the plans." },
            { letter: "D", text: "He believes Vader will spare the whole group." }
          ],
          correct: "B" },
        { id: "robe", sol: "11.RL.2.C", sub: "11.RL.2.C.1",
          stem: "The empty robe in sentence 12 most likely suggests that Obi-Wan —",
          choices: [
            { letter: "A", text: "was never really aboard the Death Star" },
            { letter: "B", text: "has been taken prisoner by the Empire" },
            { letter: "C", text: "has passed into another form of being" },
            { letter: "D", text: "left his robe behind as a warning" }
          ],
          correct: "C" },
        { id: "ordeal", sol: "11.RL.3.B", sub: "11.RL.3.B.1",
          stem: "Sentence 14 calls these events Luke's ordeal, the crisis in which the hero faces his greatest danger and loss. Select TWO events that make this section an ordeal.",
          choices: [
            { letter: "A", text: "The walls of the trash compactor close in on the group." },
            { letter: "B", text: "The Falcon drops out of hyperspace near Alderaan." },
            { letter: "C", text: "Luke and Han put on stolen stormtrooper armor." },
            { letter: "D", text: "Luke watches his mentor struck down by Vader." }
          ],
          correct: ["A", "D"] }
      ]
    },
    /* ───── LONG (level 3) ───── */
    {
      id: "lit-newhope-map", family: "LIT", genre: "SCIFI", episode: "newhope",
      title: "Mapping a Hero", kind: "Film analysis · 11.RL",
      blurb: "A New Hope, stage by stage, from the farm to the trench run.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "George Lucas has said that his space adventure owes a debt to Joseph Campbell, a scholar who studied myths from around the world. " +
        N(2) + "In <em>The Hero with a Thousand Faces</em> (1949), Campbell argued that many of those myths share one basic pattern, which he called the monomyth and which most people now call the Hero's Journey. " +
        N(3) + "<em>A New Hope</em> follows that pattern so closely that it can be mapped almost scene by scene." +
        "</p><p>" +
        N(4) + "The journey begins in the ordinary world, Luke's dusty farm on Tatooine, where he dreams of escape but never quite leaves. " +
        N(5) + "The call to adventure arrives inside a droid, in Leia's desperate plea for help. " +
        N(6) + "Luke at first refuses the call, and a mentor, Obi-Wan Kenobi, offers him a weapon and a purpose. " +
        N(7) + "Only when the Empire destroys his home does Luke cross the threshold, leaving his planet aboard the Millennium Falcon as it leaps into hyperspace." +
        "</p><p>" +
        N(8) + "Beyond the threshold come tests, allies and enemies. " +
        N(9) + "Luke gains a pair of reluctant allies in Han Solo and Chewbacca, and he faces his enemies inside the Death Star itself. " +
        N(10) + "There he survives his ordeal, the moment of greatest danger and loss, when Obi-Wan is struck down. " +
        N(11) + "His reward is the rescued princess and the stolen plans hidden in R2-D2." +
        "</p><p>" +
        N(12) + "The final test is the trench run. " +
        N(13) + "The plans reveal one weakness, a small exhaust port at the end of a narrow trench on the station's surface. " +
        N(14) + "One by one, rebel pilots fly down the trench and are shot down, and Darth Vader himself closes in behind Luke. " +
        N(15) + "Then Luke hears Obi-Wan's voice urging him to trust the Force, and he switches off his targeting computer. " +
        N(16) + "At the last moment Han, who had taken his money and left before the battle, roars back in the Falcon and knocks Vader's fighter away. " +
        N(17) + "Luke fires, and the Death Star explodes." +
        "</p><p>" +
        N(18) + "It is a surprising climax for a science fiction film. " +
        N(19) + "A movie packed with spaceships, droids and laser weapons is won by a hero who turns off a machine and trusts his feelings instead. " +
        N(20) + "Han's return completes his own smaller journey, from a smuggler who cares only about money to a friend who risks his life. " +
        N(21) + "In the final scene, Leia awards medals to the heroes in a grand hall, and the farm boy from Tatooine stands as a hero. " +
        N(22) + "Yet Luke's journey is not finished, since Vader has escaped, spinning off into space, and two more films would carry the story forward." +
        "</p>",
      claims: [
        { id: "para1", sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "The first paragraph of the Hero's Journey analysis mainly serves to —",
          choices: [
            { letter: "A", text: "summarize the plot of the whole Star Wars trilogy" },
            { letter: "B", text: "introduce the pattern the author uses to analyze the film" },
            { letter: "C", text: "argue that Campbell's book is better known than the film" },
            { letter: "D", text: "explain why Lucas chose to film on a desert planet" }
          ],
          correct: "B" },
        { id: "before", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "Select TWO events that take place before Luke crosses the threshold.",
          choices: [
            { letter: "A", text: "Leia's plea for help reaches Luke inside a droid." },
            { letter: "B", text: "Han roars back to knock Vader's fighter away." },
            { letter: "C", text: "Obi-Wan offers Luke a weapon and a purpose." },
            { letter: "D", text: "Luke watches Obi-Wan struck down by Vader." }
          ],
          correct: ["A", "C"] },
        { id: "ordeal-def", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 10, the author defines the *ordeal* as —",
          choices: [
            { letter: "A", text: "the moment of greatest danger and loss" },
            { letter: "B", text: "the reward the hero wins for his courage" },
            { letter: "C", text: "the hero's first meeting with a guide" },
            { letter: "D", text: "the long journey back to the hero's home" }
          ],
          correct: "A" },
        { id: "irony", sol: "11.RL.2.D", sub: "11.RL.2.D.1",
          stem: "Sentences 18 and 19 point out an irony in the film's climax. What is ironic?",
          choices: [
            { letter: "A", text: "The rebels win even though they have fewer pilots." },
            { letter: "B", text: "Vader escapes even though his station is destroyed." },
            { letter: "C", text: "A film full of machines is won by switching one off." },
            { letter: "D", text: "Han returns even though he has already been paid." }
          ],
          correct: "C" },
        { id: "theme", sol: "11.RL.1.A", sub: "11.RL.1.A.2",
          stem: "Which theme is most strongly developed by the description of the trench run in paragraph 4?",
          choices: [
            { letter: "A", text: "Careful planning always defeats raw courage in battle." },
            { letter: "B", text: "Trusting one's inner strength can matter more than tools." },
            { letter: "C", text: "A leader must never risk the lives of his followers." },
            { letter: "D", text: "Friendships fade when people want different things." }
          ],
          correct: "B" },
        { id: "han-change", sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "How does sentence 20 build on the event described in sentence 16?",
          choices: [
            { letter: "A", text: "It shows that Han returned only to collect more money." },
            { letter: "B", text: "It explains that Han and Vader were once friends." },
            { letter: "C", text: "It suggests that Han regrets joining the rebels." },
            { letter: "D", text: "It interprets Han's return as proof that he has changed." }
          ],
          correct: "D" },
        { id: "longer", sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Which sentence best supports the idea that A New Hope is only one part of a longer journey?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 17" },
            { letter: "C", text: "Sentence 21" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: "D" },
        { id: "myth", sol: "11.RL.3.B", sub: "11.RL.3.B.1",
          stem: "According to the passage, why can A New Hope be mapped almost scene by scene onto the Hero's Journey?",
          choices: [
            { letter: "A", text: "Lucas filmed each stage in a different country." },
            { letter: "B", text: "Campbell wrote his book after studying the film." },
            { letter: "C", text: "Lucas drew on a pattern Campbell found in many myths." },
            { letter: "D", text: "The film retells one particular ancient myth." }
          ],
          correct: "C" }
      ]
    },

    /* ═════════════ THE EMPIRE STRIKES BACK (1980) ═════════════ */
    /* ───── TINY (level 1) ───── */
    {
      id: "lit-empire-hoth", family: "LIT", genre: "SCIFI", episode: "empire",
      title: "Lost in the Snow", kind: "Screen story · 11.RL",
      blurb: "An ice planet, a snow beast and a ghostly message from a mentor.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "<em>The Empire Strikes Back</em> opens on Hoth, a frozen planet where the rebels have hidden their new base. " +
        N(2) + "On patrol, Luke is seized by a wampa, a snow beast, and hung upside down in its icy cave. " +
        N(3) + "He reaches out with the Force, pulls his lightsaber into his hand, and escapes into a blizzard. " +
        N(4) + "Half frozen, he sees the ghostly form of Obi-Wan, who tells him to seek a Jedi Master named Yoda on the swamp planet Dagobah. " +
        N(5) + "Han rides out into the storm and finds him." +
        "</p>",
      claims: [
        { id: "hoth", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "Which words best describe Hoth as it is presented in the passage?",
          choices: [
            { letter: "A", text: "crowded and noisy" },
            { letter: "B", text: "warm and peaceful" },
            { letter: "C", text: "frozen and hostile" },
            { letter: "D", text: "green and swampy" }
          ],
          correct: "C" },
        { id: "force", sol: "11.RL.1.C", sub: "11.RL.1.C.1",
          stem: "What does sentence 3 show about Luke?",
          choices: [
            { letter: "A", text: "He has begun to use the power of the Force." },
            { letter: "B", text: "He is too frightened to fight the creature." },
            { letter: "C", text: "He has lost his lightsaber for good." },
            { letter: "D", text: "He prefers to work alone without friends." }
          ],
          correct: "A" },
        { id: "mentor", sol: "11.RL.3.B", sub: "11.RL.3.B.1",
          stem: "In the Hero's Journey, a mentor guides the hero. How does Obi-Wan continue that role in sentence 4?",
          choices: [
            { letter: "A", text: "He leads Luke back to the rebel base." },
            { letter: "B", text: "He points Luke toward his next teacher." },
            { letter: "C", text: "He fights the wampa on Luke's behalf." },
            { letter: "D", text: "He tells Luke to give up and go home." }
          ],
          correct: "B" },
        { id: "han", sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "Sentence 5 suggests that Han —",
          choices: [
            { letter: "A", text: "wants to take command of the rebels" },
            { letter: "B", text: "does not believe Luke is in danger" },
            { letter: "C", text: "is lost in the storm himself" },
            { letter: "D", text: "will risk his life for a friend" }
          ],
          correct: "D" },
        { id: "ghostly", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 4, the word *ghostly* suggests that Obi-Wan appears —",
          choices: [
            { letter: "A", text: "angry and threatening" },
            { letter: "B", text: "as a pale spirit, not a body" },
            { letter: "C", text: "exactly as he looked in life" },
            { letter: "D", text: "far away on another planet" }
          ],
          correct: "B" }
      ]
    },
    {
      id: "lit-empire-tow-cables", family: "LIT", genre: "SCIFI", episode: "empire",
      title: "Tow Cables", kind: "Screen story · 11.RL",
      blurb: "Small snowspeeders against giant walkers in the Battle of Hoth.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "The Empire finds the rebel base and sends huge four-legged walkers marching across the snow. " +
        N(2) + "Each walker is an armored machine as tall as a building, and rebel blasts bounce off its hull. " +
        N(3) + "Luke, leading a squadron of small snowspeeders, orders his pilots to go after the walkers' legs. " +
        N(4) + "One speeder fires a harpoon trailing a long tow cable. " +
        N(5) + "The pilot circles the giant again and again, wrapping its legs tightly. " +
        N(6) + "The walker stumbles and crashes onto the snow. " +
        N(7) + "Still, the rebels lose the battle and must flee Hoth." +
        "</p>",
      claims: [
        { id: "size", sol: "11.RL.2.C", sub: "11.RL.2.C.1",
          stem: "The comparison in sentence 2 mainly emphasizes the walkers' —",
          choices: [
            { letter: "A", text: "enormous, threatening size" },
            { letter: "B", text: "great speed across the snow" },
            { letter: "C", text: "weakness in cold weather" },
            { letter: "D", text: "bright, colorful design" }
          ],
          correct: "A" },
        { id: "cable", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 4, a *tow cable* is a —",
          choices: [
            { letter: "A", text: "short burst of laser fire" },
            { letter: "B", text: "small engine for flying" },
            { letter: "C", text: "kind of armored shield" },
            { letter: "D", text: "strong line used for pulling" }
          ],
          correct: "D" },
        { id: "leader", sol: "11.RL.1.C", sub: "11.RL.1.C.1",
          stem: "Sentence 3 shows that Luke is —",
          choices: [
            { letter: "A", text: "reckless and selfish" },
            { letter: "B", text: "unsure what to do" },
            { letter: "C", text: "a quick-thinking leader" },
            { letter: "D", text: "afraid of the walkers" }
          ],
          correct: "C" },
        { id: "idea", sol: "11.RL.1.A", sub: "11.RL.1.A.1",
          stem: "Which idea does the walker's fall best illustrate?",
          choices: [
            { letter: "A", text: "Machines are always stronger than people." },
            { letter: "B", text: "A clever plan can topple a stronger enemy." },
            { letter: "C", text: "Battles fought in the snow cannot be won." },
            { letter: "D", text: "Leaders should never give orders in battle." }
          ],
          correct: "B" },
        { id: "still", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "How does sentence 7 affect the meaning of the scene?",
          choices: [
            { letter: "A", text: "It shows that the rebels win the battle easily." },
            { letter: "B", text: "It explains how the walkers were first built." },
            { letter: "C", text: "It shows one small victory cannot stop the Empire." },
            { letter: "D", text: "It reveals that Luke was hurt in the crash." }
          ],
          correct: "C" }
      ]
    },
    /* ───── SHORT ───── */
    {
      id: "lit-empire-yoda", family: "LIT", genre: "SCIFI", episode: "empire",
      title: "The Unlikely Master", kind: "Screen story · 11.RL",
      blurb: "On a swamp planet, Luke meets a teacher he does not recognize.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Luke crash-lands his X-wing in a steaming swamp on Dagobah, a planet of mud, mist and twisted trees. " +
        N(2) + "Soon a tiny green creature with pointed ears appears, poking through Luke's supplies and giggling. " +
        N(3) + "Luke treats him as a nuisance and complains that he is busy searching for a great warrior. " +
        N(4) + "Only later does Luke learn that the strange little creature is Yoda, the Jedi Master he came to find. " +
        N(5) + "Yoda had been testing him, and Luke had failed to see past appearances. " +
        N(6) + "The training that follows is hard. " +
        N(7) + "Luke runs through the jungle with Yoda riding on his back, and he balances upside down while lifting stones with his mind. " +
        N(8) + "Again and again, Yoda warns him that anger, fear and aggression lead to the dark side of the Force. " +
        N(9) + "Luke is strong, but he is also impatient." +
        "</p>",
      claims: [
        { id: "irony", sol: "11.RL.2.D", sub: "11.RL.2.D.1",
          stem: "What is ironic about Luke's first meeting with Yoda?",
          choices: [
            { letter: "A", text: "Yoda is afraid of Luke's crashed starfighter." },
            { letter: "B", text: "Luke brushes off the very master he came to find." },
            { letter: "C", text: "Yoda refuses to tell Luke anything about the Force." },
            { letter: "D", text: "Luke finds the swamp more pleasant than his home." }
          ],
          correct: "B" },
        { id: "theme", sol: "11.RL.1.A", sub: "11.RL.1.A.1",
          stem: "Which theme is most clearly expressed in sentence 5?",
          choices: [
            { letter: "A", text: "Hard work always earns a quick reward." },
            { letter: "B", text: "Strangers should never be trusted." },
            { letter: "C", text: "Training is easiest for the young." },
            { letter: "D", text: "Wisdom can hide behind an unlikely look." }
          ],
          correct: "D" },
        { id: "mood", sol: "11.RL.2.C", sub: "11.RL.2.C.1",
          stem: "The imagery of mud, mist and twisted trees in sentence 1 creates a mood that is —",
          choices: [
            { letter: "A", text: "gloomy and mysterious" },
            { letter: "B", text: "bright and cheerful" },
            { letter: "C", text: "busy and crowded" },
            { letter: "D", text: "calm and sunny" }
          ],
          correct: "A" },
        { id: "not-ready", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO sentences that show Luke is not yet ready to be a Jedi.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: ["A", "D"] },
        { id: "training", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "The details in sentence 7 mainly show that Yoda's training —",
          choices: [
            { letter: "A", text: "is a game Yoda invents to amuse himself" },
            { letter: "B", text: "tests both Luke's body and his mind" },
            { letter: "C", text: "is easy for someone as strong as Luke" },
            { letter: "D", text: "keeps Luke safe from the swamp's dangers" }
          ],
          correct: "B" },
        { id: "aggression", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 8, the word *aggression* most nearly means —",
          choices: [
            { letter: "A", text: "calm, careful patience" },
            { letter: "B", text: "deep, lasting sadness" },
            { letter: "C", text: "hostile, attacking behavior" },
            { letter: "D", text: "quiet, steady confidence" }
          ],
          correct: "C" }
      ]
    },
    {
      id: "lit-empire-cave", family: "LIT", genre: "SCIFI", episode: "empire",
      title: "The Cave", kind: "Film analysis · 11.RL",
      blurb: "Luke fights a shadow of Vader and finds a face he did not expect.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "One of the trilogy's strangest scenes unfolds in a cave on Dagobah. " +
        N(2) + "Yoda senses the dark side there and hints that what Luke finds will depend on what he carries in. " +
        N(3) + "Luke straps on his weapons anyway. " +
        N(4) + "In the gloom, Darth Vader seems to step out of the shadows, and the two fight a brief, eerie, dreamlike duel. " +
        N(5) + "Luke cuts off Vader's head, and the helmet hits the ground and breaks open. " +
        N(6) + "Inside the mask is Luke's own face. " +
        N(7) + "The vision works as a symbol: the enemy Luke fears is also a danger inside himself. " +
        N(8) + "If he fights out of anger and fear, he could become the very thing he hates. " +
        N(9) + "The scene also plants a question the film will answer later: what binds Luke to Vader? " +
        N(10) + "Critics often link it to the Hero's Journey stage called the approach to the inmost cave, where the hero nears his deepest fear." +
        "</p>",
      claims: [
        { id: "symbol", sol: "11.RL.2.C", sub: "11.RL.2.C.2",
          stem: "In sentence 7, the author interprets Luke's face inside the mask as a symbol of —",
          choices: [
            { letter: "A", text: "Luke's wish to wear Vader's armor" },
            { letter: "B", text: "Yoda's power to create illusions" },
            { letter: "C", text: "the darkness Luke could become" },
            { letter: "D", text: "the danger of exploring Dagobah" }
          ],
          correct: "C" },
        { id: "weapons", sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "Why is it significant that Luke takes his weapons into the cave in sentence 3?",
          choices: [
            { letter: "A", text: "He enters ready to fight, carrying aggression in." },
            { letter: "B", text: "He expects to find food and must hunt for it." },
            { letter: "C", text: "He wants to show Yoda how hard he has trained." },
            { letter: "D", text: "He plans to leave the weapons as a gift for Yoda." }
          ],
          correct: "A" },
        { id: "eerie", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 4, the word *eerie* most nearly means —",
          choices: [
            { letter: "A", text: "loud and cheerful" },
            { letter: "B", text: "fast and simple" },
            { letter: "C", text: "dull and boring" },
            { letter: "D", text: "strange and unsettling" }
          ],
          correct: "D" },
        { id: "foreshadow", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "Sentence 9 shows that the cave scene also serves to —",
          choices: [
            { letter: "A", text: "end Luke's training on Dagobah" },
            { letter: "B", text: "hint at a later revelation about Vader" },
            { letter: "C", text: "explain how Vader reached Dagobah" },
            { letter: "D", text: "introduce Yoda for the first time" }
          ],
          correct: "B" },
        { id: "theme", sol: "11.RL.1.A", sub: "11.RL.1.A.2",
          stem: "Which theme does the cave scene most clearly develop?",
          choices: [
            { letter: "A", text: "The hardest enemy to face may be the one within." },
            { letter: "B", text: "Caves are the most dangerous places to train." },
            { letter: "C", text: "A good teacher always explains every lesson." },
            { letter: "D", text: "Weapons are the key to winning any fight." }
          ],
          correct: "A" },
        { id: "inmost", sol: "11.RL.3.B", sub: "11.RL.3.B.1",
          stem: "According to sentence 10, the approach to the inmost cave is the stage in which the hero —",
          choices: [
            { letter: "A", text: "returns home with a gift for his people" },
            { letter: "B", text: "first hears the call to adventure" },
            { letter: "C", text: "draws near the place of his worst fear" },
            { letter: "D", text: "meets the allies who will help him" }
          ],
          correct: "C" }
      ]
    },
    /* ───── MEDIUM (level 2) ───── */
    {
      id: "lit-empire-making", family: "LIT", genre: "SCIFI", episode: "empire",
      title: "Making a Darker Sequel", kind: "Film history · 11.RI",
      blurb: "A new director, two screenwriters, a puppet master and a menacing march.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "After the huge success of <em>Star Wars</em> in 1977, George Lucas faced a hard question: how do you follow a hit? " +
        N(2) + "He decided not to direct the sequel himself. " +
        N(3) + "Instead he handed the job to Irvin Kershner, a veteran director, while Lucas oversaw the film as executive producer. " +
        N(4) + "For the script, Lucas turned to Leigh Brackett, a science fiction novelist who had also co-written the detective film <em>The Big Sleep</em> (1946) and the Western <em>Rio Bravo</em> (1959). " +
        N(5) + "Brackett finished a first draft but died of cancer in 1978. " +
        N(6) + "Lawrence Kasdan, a young writer who had just finished a script for <em>Raiders of the Lost Ark</em>, then reshaped the story." +
        "</p><p>" +
        N(7) + "The new film would be bigger, darker and more personal. " +
        N(8) + "Its most demanding new character was Yoda, a puppet operated and voiced by Frank Oz, a performer known for his work with the Muppets. " +
        N(9) + "The giant walkers on Hoth were small models moved a tiny bit at a time and filmed one frame at a time, a technique called stop-motion animation. " +
        N(10) + "John Williams added a menacing new theme for Darth Vader, the Imperial March. " +
        N(11) + "When <em>The Empire Strikes Back</em> opened in 1980, some viewers were surprised by its unhappy ending. " +
        N(12) + "Today, many critics rank it as the best film of the original trilogy." +
        "</p>",
      claims: [
        { id: "org", sol: "11.RI.2.A", sub: "11.RI.2.A.1",
          stem: "How is the passage about making the sequel mainly organized?",
          choices: [
            { letter: "A", text: "in time order, from planning the film to its reputation" },
            { letter: "B", text: "as a problem and its solution in the special effects" },
            { letter: "C", text: "as a comparison of Star Wars and its sequel" },
            { letter: "D", text: "as a list of the film's main characters" }
          ],
          correct: "A" },
        { id: "brackett", sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "The author mentions The Big Sleep and Rio Bravo in sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "suggest that the sequel would be a detective story" },
            { letter: "B", text: "argue that Westerns are better than science fiction" },
            { letter: "C", text: "show that Brackett had written in several genres" },
            { letter: "D", text: "explain why Brackett died before the film was made" }
          ],
          correct: "C" },
        { id: "stop-motion", sol: "11.RI.2.B", sub: "11.RI.2.B.1",
          stem: "According to sentence 9, *stop-motion animation* is a technique in which —",
          choices: [
            { letter: "A", text: "actors wear heavy costumes in front of a camera" },
            { letter: "B", text: "models are moved slightly between single frames" },
            { letter: "C", text: "a computer draws each walker on the screen" },
            { letter: "D", text: "artists trace drawings over live-action film" }
          ],
          correct: "B" },
        { id: "central", sol: "11.DSR.E", sub: "11.DSR.E.1",
          stem: "Which statement best expresses the central idea of the passage about making The Empire Strikes Back?",
          choices: [
            { letter: "A", text: "Yoda was the hardest character to create." },
            { letter: "B", text: "Lucas regretted not directing the sequel." },
            { letter: "C", text: "The sequel's ending disappointed every critic." },
            { letter: "D", text: "A new team made a darker, more personal sequel." }
          ],
          correct: "D" },
        { id: "reputation", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Sentences 11 and 12 suggest that opinions of the film have —",
          choices: [
            { letter: "A", text: "stayed exactly the same since 1980" },
            { letter: "B", text: "grown more favorable over time" },
            { letter: "C", text: "turned against its ending in recent years" },
            { letter: "D", text: "depended mostly on its special effects" }
          ],
          correct: "B" },
        { id: "writers", sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Select TWO people the passage credits with writing the film's script.",
          choices: [
            { letter: "A", text: "Leigh Brackett" },
            { letter: "B", text: "Irvin Kershner" },
            { letter: "C", text: "Frank Oz" },
            { letter: "D", text: "Lawrence Kasdan" }
          ],
          correct: ["A", "D"] }
      ]
    },
    /* ───── LONG (level 3) ───── */
    {
      id: "lit-empire-darkest", family: "LIT", genre: "SCIFI", episode: "empire",
      title: "The Darkest Chapter", kind: "Film analysis · 11.RL",
      blurb: "A betrayal, a frozen hero, a terrible truth and an ending that is not an ending.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "The second half of <em>The Empire Strikes Back</em> splits its heroes apart. " +
        N(2) + "While Luke trains on Dagobah, Han, Leia, Chewbacca and C-3PO escape Hoth in the Millennium Falcon, whose hyperdrive keeps failing. " +
        N(3) + "After hiding in an asteroid field, they limp to Cloud City, a gleaming mining colony that floats among the clouds of the planet Bespin. " +
        N(4) + "Its administrator is Lando Calrissian, an old friend of Han's, who greets them with smiles and a fine meal. " +
        N(5) + "But when the doors of the dining room open, Darth Vader is waiting at the table. " +
        N(6) + "To protect his city, Lando has made a deal with the Empire and led his friends into a trap." +
        "</p><p>" +
        N(7) + "Vader wants Luke, and he plans to seal the young Jedi inside a solid block of carbonite for the trip to the Emperor. " +
        N(8) + "First he tests the freezing chamber on Han. " +
        N(9) + "Just before Han is lowered into the steam, Leia tells him she loves him, and his short, cocky reply is somehow also tender. " +
        N(10) + "A bounty hunter named Boba Fett hauls the frozen Han away to collect a reward from the gangster Jabba the Hutt. " +
        N(11) + "Too late, Lando turns against the Empire and helps Leia and Chewbacca escape." +
        "</p><p>" +
        N(12) + "Luke, meanwhile, has sensed his friends' pain in a vision. " +
        N(13) + "Against the advice of both Yoda and Obi-Wan, he leaves his training unfinished and flies to Cloud City. " +
        N(14) + "There he duels Vader through the carbon-freezing chamber and out onto a narrow walkway above a deep shaft. " +
        N(15) + "Vader cuts off Luke's right hand, and then he reveals the truth: he is Luke's father. " +
        N(16) + "He invites Luke to join him and rule the galaxy together. " +
        N(17) + "Luke chooses to let go and drop into the shaft rather than accept. " +
        N(18) + "He tumbles through the city's underside and hangs, weak and alone, beneath it, until he reaches out to Leia through the Force and she turns the Falcon back to save him." +
        "</p><p>" +
        N(19) + "Many stories are built in three acts, and in a trilogy the middle film often plays the role of the second act, where the trouble grows worst. " +
        N(20) + "<em>The Empire Strikes Back</em> follows that rule boldly. " +
        N(21) + "Its final minutes show no victory: Han is captured, the rebels are scattered, and Luke, wearing a new mechanical hand, stands at a window beside Leia as Lando and Chewbacca fly off to search for Han. " +
        N(22) + "Even the mechanical hand carries meaning, since it makes Luke a little more like the half-machine father he fears." +
        "</p><p>" +
        N(23) + "Yet the ending is not hopeless. " +
        N(24) + "Luke has learned that the enemy he set out to defeat is his own family, which changes his quest from destroying Vader to understanding him. " +
        N(25) + "And by falling rather than joining his father, he has passed the test that matters most. " +
        N(26) + "The dark ending simply leaves viewers waiting, as the middle of any journey does, for what comes next." +
        "</p>",
      claims: [
        { id: "twist", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "In the Cloud City section, sentence 5 mainly serves to —",
          choices: [
            { letter: "A", text: "explain how Vader learned of Cloud City" },
            { letter: "B", text: "reveal the betrayal through a sudden twist" },
            { letter: "C", text: "show that Lando is a generous host" },
            { letter: "D", text: "describe the beauty of the floating city" }
          ],
          correct: "B" },
        { id: "lando", sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "Which statement best describes Lando as he is revealed in paragraphs 1 and 2?",
          choices: [
            { letter: "A", text: "a loyal friend who never wavers" },
            { letter: "B", text: "a cruel villain who enjoys betrayal" },
            { letter: "C", text: "a soldier who takes orders from Han" },
            { letter: "D", text: "a leader torn between city and friends" }
          ],
          correct: "D" },
        { id: "reply", sol: "11.RL.2.B", sub: "11.RL.2.B.2",
          stem: "In sentence 9, describing Han's reply as both *cocky* and *tender* suggests that —",
          choices: [
            { letter: "A", text: "Han hides deep feeling behind his swagger" },
            { letter: "B", text: "Han does not take Leia's words seriously" },
            { letter: "C", text: "Han is too frightened to answer her" },
            { letter: "D", text: "Han is sure he will soon be rescued" }
          ],
          correct: "A" },
        { id: "choices", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO sentences that show Luke choosing his own path despite pressure from others.",
          choices: [
            { letter: "A", text: "Sentence 12" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: ["B", "C"] },
        { id: "second-act", sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "In sentence 19, the second act of a story is the part where —",
          choices: [
            { letter: "A", text: "the setting and characters are first introduced" },
            { letter: "B", text: "the conflicts are finally resolved" },
            { letter: "C", text: "the trouble grows to its worst point" },
            { letter: "D", text: "the story's victory is celebrated" }
          ],
          correct: "C" },
        { id: "hand", sol: "11.RL.2.C", sub: "11.RL.2.C.2",
          stem: "According to sentence 22, Luke's mechanical hand symbolizes —",
          choices: [
            { letter: "A", text: "his growing resemblance to his father" },
            { letter: "B", text: "the rebels' superior technology" },
            { letter: "C", text: "his complete recovery from the duel" },
            { letter: "D", text: "the end of his Jedi training" }
          ],
          correct: "A" },
        { id: "view", sol: "11.RL.1.A", sub: "11.RL.1.A.2",
          stem: "Which statement best summarizes the author's view of the ending in paragraph 5?",
          choices: [
            { letter: "A", text: "It is a mistake that weakens the trilogy." },
            { letter: "B", text: "It shows that evil always wins in the end." },
            { letter: "C", text: "It proves that Luke should have joined Vader." },
            { letter: "D", text: "It hides a moral victory inside a defeat." }
          ],
          correct: "D" },
        { id: "family-foe", sol: "11.RL.3.B", sub: "11.RL.3.B.1",
          stem: "Myths often feature a hero whose enemy turns out to be a member of his own family. How does this pattern appear in the passage?",
          choices: [
            { letter: "A", text: "Lando turns out to be Han's long-lost brother." },
            { letter: "B", text: "Luke learns the villain he hunts is his father." },
            { letter: "C", text: "Leia discovers that the Emperor is her uncle." },
            { letter: "D", text: "Boba Fett is revealed to be Jabba's son." }
          ],
          correct: "B" }
      ]
    },

    /* ═════════════ RETURN OF THE JEDI (1983) ═════════════ */
    /* ───── TINY (level 1) ───── */
    {
      id: "lit-jedi-knight", family: "LIT", genre: "SCIFI", episode: "jedi",
      title: "A Knight in Black", kind: "Screen story · 11.RL",
      blurb: "Luke walks into a gangster's palace, calm and changed.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "The first part of <em>Return of the Jedi</em> is a rescue on Tatooine. " +
        N(2) + "Han Solo, still frozen in carbonite, hangs on a wall in the palace of the gangster Jabba the Hutt. " +
        N(3) + "Leia, disguised as a bounty hunter, sets him free, but she is soon captured. " +
        N(4) + "Then Luke strides through the palace doors, dressed all in black. " +
        N(5) + "He no longer rushes or shouts. " +
        N(6) + "He speaks quietly, uses the Force to sway Jabba's servant, and calmly warns Jabba to release his friends." +
        "</p>",
      claims: [
        { id: "black", sol: "11.RL.2.C", sub: "11.RL.2.C.1",
          stem: "Luke's black clothing in sentence 4 most likely suggests that he has become —",
          choices: [
            { letter: "A", text: "a member of Jabba's gang" },
            { letter: "B", text: "a more serious, mysterious figure" },
            { letter: "C", text: "a prisoner in the palace" },
            { letter: "D", text: "a pilot in the Imperial navy" }
          ],
          correct: "B" },
        { id: "change", sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "How do sentences 5 and 6 show that Luke has changed?",
          choices: [
            { letter: "A", text: "He has become rude and quick to anger." },
            { letter: "B", text: "He has forgotten his friends' danger." },
            { letter: "C", text: "He now relies only on his weapons." },
            { letter: "D", text: "He is now calm and in control." }
          ],
          correct: "D" },
        { id: "word", sol: "11.RL.1.C", sub: "11.RL.1.C.1",
          stem: "Which word best describes Luke in this passage?",
          choices: [
            { letter: "A", text: "composed" },
            { letter: "B", text: "careless" },
            { letter: "C", text: "fearful" },
            { letter: "D", text: "boastful" }
          ],
          correct: "A" },
        { id: "still", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "The word *still* in sentence 2 shows that —",
          choices: [
            { letter: "A", text: "Han is holding perfectly motionless" },
            { letter: "B", text: "Jabba has only just captured Han" },
            { letter: "C", text: "Han's capture carries over from before" },
            { letter: "D", text: "Leia froze Han to protect him" }
          ],
          correct: "C" },
        { id: "strides", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 4, the word *strides* means that Luke —",
          choices: [
            { letter: "A", text: "walks with long, confident steps" },
            { letter: "B", text: "sneaks in without being seen" },
            { letter: "C", text: "stumbles through the doorway" },
            { letter: "D", text: "runs in a desperate hurry" }
          ],
          correct: "A" }
      ]
    },
    {
      id: "lit-jedi-forest-chase", family: "LIT", genre: "SCIFI", episode: "jedi",
      title: "Forest Chase", kind: "Film language · 11.RV",
      blurb: "Speeder bikes, giant trees and a tracking shot that puts you on the bike.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "On the forest moon of Endor, Luke and Leia chase Imperial scouts on speeder bikes, hovering vehicles that skim just above the ground. " +
        N(2) + "The bikes weave between giant trees at terrifying speed. " +
        N(3) + "The camera rushes along with them in a tracking shot, a shot in which the camera travels beside or behind a moving subject. " +
        N(4) + "Trunks flash past so close that viewers feel each near miss. " +
        N(5) + "When Leia crashes, she wakes to find a small, furry Ewok named Wicket staring at her." +
        "</p>",
      claims: [
        { id: "tracking", sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "Based on sentence 3, which camera move is a *tracking shot*?",
          choices: [
            { letter: "A", text: "The camera stays fixed while actors pass." },
            { letter: "B", text: "The camera tilts up to show the treetops." },
            { letter: "C", text: "The camera travels along with the riders." },
            { letter: "D", text: "The camera cuts quickly between two faces." }
          ],
          correct: "C" },
        { id: "effect", sol: "11.RI.2.B", sub: "11.RI.2.B.2",
          stem: "According to the passage, the tracking shot mainly helps viewers —",
          choices: [
            { letter: "A", text: "feel the speed and danger as if riding along" },
            { letter: "B", text: "understand where the Imperial base is hidden" },
            { letter: "C", text: "notice the costumes of the Imperial scouts" },
            { letter: "D", text: "learn why the Ewoks live in the forest" }
          ],
          correct: "A" },
        { id: "skim", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 1, the phrase *skim just above the ground* describes how the speeder bikes —",
          choices: [
            { letter: "A", text: "roll on large rubber wheels" },
            { letter: "B", text: "glide low without touching down" },
            { letter: "C", text: "fly high above the treetops" },
            { letter: "D", text: "crash into the forest floor" }
          ],
          correct: "B" },
        { id: "danger", sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Which sentence best shows how close the riders come to danger?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "C" },
        { id: "mood", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "How does sentence 5 change the mood of the scene?",
          choices: [
            { letter: "A", text: "from calm to terrifying" },
            { letter: "B", text: "from sad to joyful" },
            { letter: "C", text: "from funny to serious" },
            { letter: "D", text: "from frantic to quiet and curious" }
          ],
          correct: "D" }
      ]
    },
    /* ───── SHORT ───── */
    {
      id: "lit-jedi-last-lesson", family: "LIT", genre: "SCIFI", episode: "jedi",
      title: "The Last Lesson", kind: "Screen story · 11.RL",
      blurb: "Yoda's farewell, a father's lost name and a sister revealed.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Luke returns to Dagobah to finish his training, but Yoda is now very old and weak. " +
        N(2) + "Yoda tells him he needs no more training, yet he will not be a Jedi until he faces Vader again. " +
        N(3) + "Luke asks the question that has troubled him since Cloud City, and Yoda confirms that Vader is truly his father. " +
        N(4) + "Then the old master lies down and quietly fades away, leaving Luke the last of the Jedi. " +
        N(5) + "Outside, the spirit of Obi-Wan appears. " +
        N(6) + "He explains that the good man who was Luke's father, Anakin Skywalker, was lost when he turned to the dark side and became Vader. " +
        N(7) + "Luke insists there is still good in his father. " +
        N(8) + "Obi-Wan also reveals a secret: Luke has a twin sister. " +
        N(9) + "Luke realizes at once that she is Leia." +
        "</p>",
      claims: [
        { id: "fit", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "How does this passage fit into the trilogy's larger story?",
          choices: [
            { letter: "A", text: "It confirms an earlier revelation and adds a new one." },
            { letter: "B", text: "It introduces Yoda to Luke for the first time." },
            { letter: "C", text: "It shows Luke's first battle with Vader." },
            { letter: "D", text: "It explains how the rebels won the war." }
          ],
          correct: "A" },
        { id: "hope", sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Which sentence best shows Luke's hope for his father?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "D" },
        { id: "truths", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO truths that Luke learns in the passage.",
          choices: [
            { letter: "A", text: "Yoda will train him for many more years." },
            { letter: "B", text: "Darth Vader is truly his father." },
            { letter: "C", text: "Leia is his twin sister." },
            { letter: "D", text: "Obi-Wan is still alive in his body." }
          ],
          correct: ["B", "C"] },
        { id: "confirms", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word *confirms* most nearly means —",
          choices: [
            { letter: "A", text: "denies" },
            { letter: "B", text: "questions" },
            { letter: "C", text: "proves true" },
            { letter: "D", text: "forgets" }
          ],
          correct: "C" },
        { id: "theme", sol: "11.RL.1.A", sub: "11.RL.1.A.1",
          stem: "Which theme is introduced by sentences 6 and 7?",
          choices: [
            { letter: "A", text: "Power always corrupts those who use it." },
            { letter: "B", text: "A person lost to evil may still be redeemed." },
            { letter: "C", text: "Old teachers must give way to the young." },
            { letter: "D", text: "Families are always stronger apart." }
          ],
          correct: "B" },
        { id: "departs", sol: "11.RL.3.B", sub: "11.RL.3.B.1",
          stem: "In many myths, the hero's guide dies or departs so that the hero must go on alone. How does sentence 4 reflect that pattern?",
          choices: [
            { letter: "A", text: "Yoda sends Luke away to train with Obi-Wan." },
            { letter: "B", text: "Yoda hides from Luke deep in the swamp." },
            { letter: "C", text: "Luke leaves Yoda to rescue his friends." },
            { letter: "D", text: "Yoda's death leaves Luke the last Jedi." }
          ],
          correct: "D" }
      ]
    },
    {
      id: "lit-jedi-ewoks", family: "LIT", genre: "SCIFI", episode: "jedi",
      title: "In Defense of the Ewoks", kind: "Film review · 11.RI",
      blurb: "A critic argues that the trilogy's most mocked creatures carry its theme.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "No part of <em>Return of the Jedi</em> draws more complaints than the Ewoks, the small, furry forest dwellers of Endor. " +
        N(2) + "Critics call them toys in disguise, and they have a point: the creatures are cuddly, and their victory over armored troops can seem unlikely. " +
        N(3) + "Yet the complaint misses what the Ewoks are for. " +
        N(4) + "Armed only with spears, slingshots, logs and rocks, they help defeat soldiers backed by machines. " +
        N(5) + "That is the trilogy's argument in miniature: a mighty empire that trusts its technology can be beaten by people who know their land and fight for their home. " +
        N(6) + "The Ewoks are not a break from the story's theme; they are its clearest example. " +
        N(7) + "The film even earns their victory by showing that some of them fall in battle." +
        "</p>",
      claims: [
        { id: "claim", sol: "11.RI.1.C", sub: "11.RI.1.C.1",
          stem: "What is the author's main claim about the Ewoks?",
          choices: [
            { letter: "A", text: "The Ewoks are the weakest part of the trilogy." },
            { letter: "B", text: "The Ewoks express the trilogy's central theme." },
            { letter: "C", text: "The Ewoks were added mainly to sell toys." },
            { letter: "D", text: "The Ewoks should have lost the battle on Endor." }
          ],
          correct: "B" },
        { id: "counter", sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "In the argument about the Ewoks, sentence 2 mainly serves to —",
          choices: [
            { letter: "A", text: "describe the Ewoks' weapons in detail" },
            { letter: "B", text: "explain where the Ewoks live on Endor" },
            { letter: "C", text: "admit a counterclaim before answering it" },
            { letter: "D", text: "show that the author dislikes the Ewoks" }
          ],
          correct: "C" },
        { id: "support", sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Which sentence best supports the claim that the Ewoks defeat a better-armed enemy?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "C" },
        { id: "strengthen", sol: "11.RI.1.C", sub: "11.RI.1.C.2",
          stem: "Which piece of information, if added, would most strengthen the author's argument?",
          choices: [
            { letter: "A", text: "a list of the Ewok toys sold after the film's release" },
            { letter: "B", text: "a second review complaining that the Ewoks are too cute" },
            { letter: "C", text: "a description of the giant trees where the Ewoks live" },
            { letter: "D", text: "a filmmaker's comment that the Ewoks stand for low-tech rebels" }
          ],
          correct: "D" },
        { id: "miniature", sol: "11.RV.1.E", sub: "11.RV.1.E.1",
          stem: "In sentence 5, the phrase *in miniature* means —",
          choices: [
            { letter: "A", text: "in a small but complete form" },
            { letter: "B", text: "in a hidden or secret way" },
            { letter: "C", text: "in a childish, silly manner" },
            { letter: "D", text: "in a confusing, tangled way" }
          ],
          correct: "A" },
        { id: "tone", sol: "11.RL.2.B", sub: "11.RL.2.B.1",
          stem: "Select TWO words that best describe the tone of the Ewok review.",
          choices: [
            { letter: "A", text: "confident" },
            { letter: "B", text: "bitter" },
            { letter: "C", text: "uncertain" },
            { letter: "D", text: "reasoned" }
          ],
          correct: ["A", "D"] }
      ]
    },
    /* ───── MEDIUM (level 2) ───── */
    {
      id: "lit-jedi-weapon", family: "LIT", genre: "SCIFI", episode: "jedi",
      title: "Throwing Away the Weapon", kind: "Screen story · 11.RL",
      blurb: "In the Emperor's throne room, Luke wins by refusing to fight.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "On the second Death Star, Luke stands before the Emperor, Vader's dark master. " +
        N(2) + "The Emperor reveals that the rebel attack is a trap and urges Luke to give in to his anger. " +
        N(3) + "Luke resists at first, but when the rebel fleet begins to suffer, he seizes his lightsaber and lunges at the Emperor, and Vader blocks the blow. " +
        N(4) + "Luke soon tries to hold back and hides in the shadows, until Vader senses his thoughts and learns that Luke has a sister. " +
        N(5) + "If Luke will not turn to the dark side, Vader warns, perhaps she will. " +
        N(6) + "At that threat, Luke explodes in fury." +
        "</p><p>" +
        N(7) + "He drives Vader backward blow after blow, until he slices off his father's mechanical hand. " +
        N(8) + "Then Luke looks at the sparking wires of Vader's wrist, and then at his own black-gloved mechanical hand. " +
        N(9) + "In that moment he sees what his hatred is making him. " +
        N(10) + "He switches off his lightsaber and tosses it aside. " +
        N(11) + "He declares that he will never turn, because he is a Jedi, like the man his father once was. " +
        N(12) + "The furious Emperor attacks him with bolts of lightning from his fingers, and Luke, in agony, cries out to his father for help. " +
        N(13) + "Vader stands watching his son suffer. " +
        N(14) + "Then he lifts the Emperor and hurls him down a deep shaft, though the lightning wounds Vader fatally." +
        "</p>",
      claims: [
        { id: "turning", sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Which sentence marks the turning point of the duel?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "C" },
        { id: "hands", sol: "11.RL.2.C", sub: "11.RL.2.C.2",
          stem: "The two mechanical hands in sentence 8 symbolize —",
          choices: [
            { letter: "A", text: "how close Luke has come to becoming Vader" },
            { letter: "B", text: "the Empire's control over all technology" },
            { letter: "C", text: "the injuries every Jedi suffers in training" },
            { letter: "D", text: "Luke's wish to defeat the Emperor quickly" }
          ],
          correct: "A" },
        { id: "toss", sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "What does Luke's action in sentence 10 reveal about him?",
          choices: [
            { letter: "A", text: "He believes his father is already dead." },
            { letter: "B", text: "He is too exhausted to keep on fighting." },
            { letter: "C", text: "He hopes the Emperor will spare his friends." },
            { letter: "D", text: "He refuses to win through hatred at any cost." }
          ],
          correct: "D" },
        { id: "fury", sol: "11.RL.1.C", sub: "11.RL.1.C.1",
          stem: "Why does Luke explode in fury in sentence 6?",
          choices: [
            { letter: "A", text: "He learns that the rebel fleet has escaped." },
            { letter: "B", text: "He wants to protect his sister from Vader." },
            { letter: "C", text: "He has lost his lightsaber in the shadows." },
            { letter: "D", text: "He believes the Emperor has tricked Vader." }
          ],
          correct: "B" },
        { id: "themes", sol: "11.RL.1.A", sub: "11.RL.1.A.2",
          stem: "Select TWO themes developed in the passage.",
          choices: [
            { letter: "A", text: "Hatred can turn a hero into what he hates." },
            { letter: "B", text: "Power belongs to whoever fights hardest." },
            { letter: "C", text: "Love can bring a person back from evil." },
            { letter: "D", text: "Machines will always outlast living things." }
          ],
          correct: ["A", "C"] },
        { id: "suspense", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "Sentence 13 builds suspense mainly because readers —",
          choices: [
            { letter: "A", text: "already know Vader will join the Emperor" },
            { letter: "B", text: "think Luke has escaped the throne room" },
            { letter: "C", text: "are told that the Death Star is exploding" },
            { letter: "D", text: "cannot tell whether Vader will save his son" }
          ],
          correct: "D" }
      ]
    },
    /* ───── LONG (level 3) ───── */
    {
      id: "lit-jedi-elixir", family: "LIT", genre: "SCIFI", episode: "jedi",
      title: "The Return with the Elixir", kind: "Film analysis · 11.RL",
      blurb: "Why the trilogy's last word is Return, not Revenge.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "For a time, the third <em>Star Wars</em> film had a different name. " +
        N(2) + "Early posters announced <em>Revenge of the Jedi</em>, but George Lucas changed the title before the film opened in 1983, reasoning that a true Jedi does not seek revenge. " +
        N(3) + "The new word, Return, fits the film far better. " +
        N(4) + "It names the return of the Jedi through Luke, the return of Anakin Skywalker from the dark side, and the final stage of the Hero's Journey, the return with the elixir." +
        "</p><p>" +
        N(5) + "In Joseph Campbell's pattern, the hero's last adventures come after the great reward. " +
        N(6) + "On the road back, the hero heads home but is pursued by danger. " +
        N(7) + "Then comes the resurrection, a final and deadliest test in which the hero nearly dies and rises transformed. " +
        N(8) + "At last he returns with an elixir, a treasure, cure or piece of wisdom that heals his world. " +
        N(9) + "Luke's resurrection comes in the Emperor's throne room. " +
        N(10) + "Having thrown away his weapon rather than strike down his father in hatred, he collapses under the Emperor's lightning, and death seems certain. " +
        N(11) + "His rescue comes from the last person anyone expected: Darth Vader, who finally turns against his master and throws him down a deep shaft." +
        "</p><p>" +
        N(12) + "The scenes that follow are quiet and strange for an action film. " +
        N(13) + "Vader, gravely wounded, asks his son to remove his helmet so that he can see Luke with his own eyes. " +
        N(14) + "Beneath the black mask is a pale, scarred, elderly man, gentle and tired, the Anakin Skywalker that Luke had believed in. " +
        N(15) + "He tells Luke that his son was right about him, and then he dies. " +
        N(16) + "Luke carries his father's body to a shuttle and escapes moments before Lando Calrissian, piloting the Millennium Falcon, helps destroy the station's reactor and the Death Star explodes." +
        "</p><p>" +
        N(17) + "That night on Endor, Luke builds a funeral pyre and burns his father's armor, a ceremony that treats Vader as a man worth mourning rather than a machine to be destroyed. " +
        N(18) + "The flames seem to cleanse the black suit away. " +
        N(19) + "Nearby, the rebels and the Ewoks celebrate their victory with music and dancing. " +
        N(20) + "As Luke joins his friends, he sees the glowing spirits of Obi-Wan, Yoda and Anakin watching him with approval." +
        "</p><p>" +
        N(21) + "So what is Luke's elixir? " +
        N(22) + "It is not a weapon or a treasure. " +
        N(23) + "It is a father brought back to the light, a sister and friends who have become his family, and the proof that compassion can defeat hatred. " +
        N(24) + "The first film ended with medals for blowing something up; the trilogy ends with a hero whose greatest victory came from refusing to fight. " +
        N(25) + "Luke never returns to his uncle's farm, but he has found the home he was looking for." +
        "</p>",
      claims: [
        { id: "title", sol: "11.RV.1.D", sub: "11.RV.1.D.1",
          stem: "How does the title Return of the Jedi differ in meaning from Revenge of the Jedi?",
          choices: [
            { letter: "A", text: "Return suggests restoring and homecoming; revenge suggests payback." },
            { letter: "B", text: "Return suggests a battle; revenge suggests a peaceful journey." },
            { letter: "C", text: "Return refers to the Death Star; revenge refers only to Jabba." },
            { letter: "D", text: "Return and revenge mean exactly the same thing in a title." }
          ],
          correct: "A" },
        { id: "resurrection", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 7, the *resurrection* stage is described as —",
          choices: [
            { letter: "A", text: "the hero's first meeting with a wise mentor" },
            { letter: "B", text: "the moment the hero leaves his home for good" },
            { letter: "C", text: "a last deadly test that the hero survives, changed" },
            { letter: "D", text: "a feast where the hero's allies celebrate his win" }
          ],
          correct: "C" },
        { id: "test", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO details that show Luke facing his resurrection test.",
          choices: [
            { letter: "A", text: "Lando pilots the Falcon toward the reactor." },
            { letter: "B", text: "Luke throws away his weapon rather than strike in hatred." },
            { letter: "C", text: "Luke builds a funeral pyre on the forest moon." },
            { letter: "D", text: "Luke collapses under the Emperor's lightning." }
          ],
          correct: ["B", "D"] },
        { id: "irony", sol: "11.RL.2.D", sub: "11.RL.2.D.1",
          stem: "What is ironic about Luke's rescue in sentence 11?",
          choices: [
            { letter: "A", text: "The rebels arrive too late to help him." },
            { letter: "B", text: "The Emperor saves Luke to use him later." },
            { letter: "C", text: "Luke rescues himself with his lightsaber." },
            { letter: "D", text: "The villain Luke would not kill saves him." }
          ],
          correct: "D" },
        { id: "helmet", sol: "11.RL.2.C", sub: "11.RL.2.C.2",
          stem: "The removal of the helmet in sentences 13 and 14 most likely symbolizes —",
          choices: [
            { letter: "A", text: "the Empire's final defeat in battle" },
            { letter: "B", text: "the man emerging from behind the machine" },
            { letter: "C", text: "Luke's decision to join the dark side" },
            { letter: "D", text: "the Emperor's lasting control over Vader" }
          ],
          correct: "B" },
        { id: "pyre", sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "According to sentence 17, the funeral pyre shows that Luke —",
          choices: [
            { letter: "A", text: "honors his father as a man worth mourning" },
            { letter: "B", text: "wants to destroy every trace of the Empire" },
            { letter: "C", text: "is afraid that Vader might somehow return" },
            { letter: "D", text: "plans to wear the armor himself someday" }
          ],
          correct: "A" },
        { id: "structure", sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "How does paragraph 5 connect to paragraph 1?",
          choices: [
            { letter: "A", text: "It disproves the claim made about the title." },
            { letter: "B", text: "It repeats the history of the title change." },
            { letter: "C", text: "It names the elixir the title's last stage promised." },
            { letter: "D", text: "It introduces a new film in the series." }
          ],
          correct: "C" },
        { id: "pattern", sol: "11.RL.3.B", sub: "11.RL.3.B.1",
          stem: "According to the passage, how does the ending of Return of the Jedi fit Campbell's pattern?",
          choices: [
            { letter: "A", text: "Luke goes back to his uncle's farm on Tatooine." },
            { letter: "B", text: "Luke wins a medal for destroying the station." },
            { letter: "C", text: "The hero brings back something that heals his world." },
            { letter: "D", text: "The hero defeats every enemy with his weapon." }
          ],
          correct: "C" }
      ]
    },

    /* ═════════════ BASICS: SCIENCE FICTION AND THE HERO'S JOURNEY ═════════════ */
    /* ───── TINY (level 1) ───── */
    {
      id: "lit-scifi-moon", family: "LIT", genre: "SCIFI", episode: "scifi",
      title: "A Rocket in the Moon's Eye", kind: "Film history · 11.RI",
      blurb: "In 1902, a magician sends the movies to the Moon.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "In 1902, the French magician and filmmaker Georges Méliès made <em>A Trip to the Moon</em>, often called the first science fiction film. " +
        N(2) + "Loosely inspired by the novels of Jules Verne, it shows a group of astronomers who build a giant capsule. " +
        N(3) + "A cannon fires them into space, and the capsule lands right in the eye of the Man in the Moon. " +
        N(4) + "On the Moon they meet strange creatures called Selenites. " +
        N(5) + "Méliès used camera tricks he had discovered as a magician, such as making objects vanish by stopping the camera." +
        "</p>",
      claims: [
        { id: "main", sol: "11.DSR.E", sub: "11.DSR.E.1",
          stem: "Which statement best sums up the passage about A Trip to the Moon?",
          choices: [
            { letter: "A", text: "Jules Verne directed the first film about the Moon." },
            { letter: "B", text: "Méliès stopped making films after the year 1902." },
            { letter: "C", text: "A magician made an early, inventive science fiction film." },
            { letter: "D", text: "The Selenites were the first movie monsters ever filmed." }
          ],
          correct: "C" },
        { id: "loosely", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 2, *loosely inspired* suggests that the film —",
          choices: [
            { letter: "A", text: "borrows ideas without following the novels closely" },
            { letter: "B", text: "copies Verne's novels word for word" },
            { letter: "C", text: "was filmed in the places Verne described" },
            { letter: "D", text: "was written by Verne himself" }
          ],
          correct: "A" },
        { id: "eye", sol: "11.RL.2.C", sub: "11.RL.2.C.1",
          stem: "The image of the capsule landing in the eye of the Man in the Moon combines —",
          choices: [
            { letter: "A", text: "careful science with a serious warning" },
            { letter: "B", text: "a true story with a news report" },
            { letter: "C", text: "a sad mood with a frightening monster" },
            { letter: "D", text: "space adventure with playful humor" }
          ],
          correct: "D" },
        { id: "magician", sol: "11.RL.3.A", sub: "11.RL.3.A.1",
          stem: "According to sentence 5, how did Méliès's background shape his films?",
          choices: [
            { letter: "A", text: "His years as a scientist made his rockets accurate." },
            { letter: "B", text: "His skill as a magician led to his camera tricks." },
            { letter: "C", text: "His travels gave him the idea for the Selenites." },
            { letter: "D", text: "His work as a painter taught him to use color." }
          ],
          correct: "B" },
        { id: "aliens", sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Which sentence shows that the film imagines alien life?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "D" }
      ]
    },
    {
      id: "lit-scifi-sorcery", family: "LIT", genre: "SCIFI", episode: "scifi",
      title: "Science or Sorcery?", kind: "Science fiction · 11.RL",
      blurb: "Spaceships and knights, robots and a princess: what kind of story is Star Wars?",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Science fiction explains its wonders with science, even imaginary science, while fantasy relies on magic. " +
        N(2) + "<em>Star Wars</em> mixes the two. " +
        N(3) + "It has spaceships, robots and faster-than-light travel, but it also has knights with glowing swords, a captured princess, a wizard-like old mentor and a mysterious power called the Force. " +
        N(4) + "For that reason, many critics call it science fantasy or space opera, a grand adventure set among the stars. " +
        N(5) + "The term space opera began as a joke, modeled on \"horse opera,\" an old nickname for a Western." +
        "</p>",
      claims: [
        { id: "differ", sol: "11.RI.2.B", sub: "11.RI.2.B.1",
          stem: "According to sentence 1, how is science fiction different from fantasy?",
          choices: [
            { letter: "A", text: "Science fiction always takes place in the future." },
            { letter: "B", text: "Science fiction explains its wonders through science." },
            { letter: "C", text: "Fantasy stories never include heroes or villains." },
            { letter: "D", text: "Fantasy stories are always set on other planets." }
          ],
          correct: "B" },
        { id: "fantasy", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO elements of Star Wars that the passage links to fantasy.",
          choices: [
            { letter: "A", text: "knights with glowing swords" },
            { letter: "B", text: "faster-than-light travel" },
            { letter: "C", text: "a captured princess" },
            { letter: "D", text: "robots and spaceships" }
          ],
          correct: ["A", "C"] },
        { id: "short", sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "The author keeps sentence 2 very short mainly to —",
          choices: [
            { letter: "A", text: "show that the topic is not important" },
            { letter: "B", text: "introduce a list of unrelated films" },
            { letter: "C", text: "suggest that critics disagree about it" },
            { letter: "D", text: "state the key point before the examples" }
          ],
          correct: "D" },
        { id: "space-opera", sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "As used in sentence 4, *space opera* means —",
          choices: [
            { letter: "A", text: "a musical performed on a spaceship" },
            { letter: "B", text: "a grand adventure among the stars" },
            { letter: "C", text: "a serious film about real astronauts" },
            { letter: "D", text: "a short cartoon about the planets" }
          ],
          correct: "B" },
        { id: "joke", sol: "11.RV.1.C", sub: "11.RV.1.C.1",
          stem: "Based on sentence 5, why was the term *space opera* first used as a joke?",
          choices: [
            { letter: "A", text: "It came from a famous opera about the Moon." },
            { letter: "B", text: "Opera singers starred in early space films." },
            { letter: "C", text: "Critics thought space films were too serious." },
            { letter: "D", text: "It borrowed a teasing nickname for Westerns." }
          ],
          correct: "D" }
      ]
    },
    /* ───── SHORT ───── */
    {
      id: "lit-scifi-elements", family: "LIT", genre: "SCIFI", episode: "scifi",
      title: "The Elements of Science Fiction", kind: "Vocabulary · 11.RV",
      blurb: "Speculative, premise, extrapolate, commentary, plausible: the words of the genre.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Science fiction is a form of <strong>speculative</strong> fiction: it imagines what might happen if the world were different. " +
        N(2) + "Every story starts from a <strong>premise</strong>, a basic \"what if\" idea, such as what would happen if people could travel faster than light. " +
        N(3) + "Writers often <strong>extrapolate</strong> from today's science, stretching real discoveries into future technology. " +
        N(4) + "The settings range from distant planets to future cities, and the characters may include <strong>aliens</strong>, beings from other worlds. " +
        N(5) + "Yet the best science fiction is rarely only about gadgets. " +
        N(6) + "It also offers social <strong>commentary</strong>, using an imaginary world to raise questions about problems in our own, such as war, prejudice or the misuse of power. " +
        N(7) + "To keep audiences believing, a filmmaker must make even impossible machines seem <strong>plausible</strong>." +
        "</p>",
      claims: [
        { id: "speculative", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 1, the word *speculative* most nearly means —",
          choices: [
            { letter: "A", text: "based on imagining what might be" },
            { letter: "B", text: "based on proven historical facts" },
            { letter: "C", text: "written mainly to make readers laugh" },
            { letter: "D", text: "written in the form of a poem" }
          ],
          correct: "A" },
        { id: "extrapolate", sol: "11.RV.1.C", sub: "11.RV.1.C.1",
          stem: "The prefix *extra-* means \"beyond.\" Based on this and on sentence 3, to *extrapolate* is to —",
          choices: [
            { letter: "A", text: "copy an older story exactly" },
            { letter: "B", text: "reject what scientists have learned" },
            { letter: "C", text: "stretch known facts to predict the unknown" },
            { letter: "D", text: "explain a science lesson to students" }
          ],
          correct: "C" },
        { id: "premise", sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "As used in sentence 2, a *premise* is —",
          choices: [
            { letter: "A", text: "the ending that surprises the audience" },
            { letter: "B", text: "the basic idea a story is built on" },
            { letter: "C", text: "the place where a story is set" },
            { letter: "D", text: "the main character of a story" }
          ],
          correct: "B" },
        { id: "commentary", sol: "11.RV.1.A", sub: "11.RV.1.A.2",
          stem: "Which example best shows social *commentary* in a science fiction film?",
          choices: [
            { letter: "A", text: "a robot that dances at a birthday party" },
            { letter: "B", text: "a spaceship chase through an asteroid field" },
            { letter: "C", text: "an alien who learns to speak English" },
            { letter: "D", text: "a future city that shows workers mistreated" }
          ],
          correct: "D" },
        { id: "plausible", sol: "11.RV.1.D", sub: "11.RV.1.D.1",
          stem: "*Plausible* and *proven* have similar meanings, but something plausible —",
          choices: [
            { letter: "A", text: "has been tested in a laboratory" },
            { letter: "B", text: "is impossible in every way" },
            { letter: "C", text: "seems believable, though it may not be true" },
            { letter: "D", text: "is always found in the real world" }
          ],
          correct: "C" },
        { id: "shift", sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "Sentence 5 mainly signals a shift from —",
          choices: [
            { letter: "A", text: "the genre's history to its future" },
            { letter: "B", text: "printed stories to stories on film" },
            { letter: "C", text: "alien characters to human characters" },
            { letter: "D", text: "the genre's gadgets to its deeper purpose" }
          ],
          correct: "D" }
      ]
    },
    {
      id: "lit-scifi-gunslingers", family: "LIT", genre: "SCIFI", episode: "scifi",
      title: "Gunslingers in Space", kind: "Film analysis · 11.RL",
      blurb: "A desert frontier, a saloon and a gunslinger: the Western inside Star Wars.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "<em>Star Wars</em> is set in a distant galaxy, but much of it comes from the American West. " +
        N(2) + "Tatooine, with its desert, its lonely homesteads and its dusty spaceport of Mos Eisley, looks like a Western's frontier. " +
        N(3) + "The cantina is a saloon, where strangers drink, a band plays and a quarrel can end in gunfire. " +
        N(4) + "Han Solo is the gunslinger, a quick-drawing loner with his blaster slung low, who cares about money until he learns to care about a cause. " +
        N(5) + "Even Luke's return to his burned-out farm echoes a scene in John Ford's Western <em>The Searchers</em> (1956), in which a man rides home to find his brother's homestead destroyed in a raid. " +
        N(6) + "Lucas borrowed these images because audiences already understood them. " +
        N(7) + "A saloon or a lone gunfighter quickly tells viewers what kind of place and person they are seeing." +
        "</p>",
      claims: [
        { id: "central", sol: "11.DSR.E", sub: "11.DSR.E.1",
          stem: "Which statement best expresses the central idea of the passage about Star Wars and the Western?",
          choices: [
            { letter: "A", text: "Star Wars was filmed on the same sets as old Westerns." },
            { letter: "B", text: "Star Wars borrows familiar places and people from Westerns." },
            { letter: "C", text: "Han Solo is the most important character in Star Wars." },
            { letter: "D", text: "John Ford helped George Lucas write the Star Wars script." }
          ],
          correct: "B" },
        { id: "gunslinger", sol: "11.RL.2.C", sub: "11.RL.2.C.1",
          stem: "The gunslinger is a stock character of Westerns. Which detail from sentence 4 ties Han to that type?",
          choices: [
            { letter: "A", text: "his love of money" },
            { letter: "B", text: "his growing care for a cause" },
            { letter: "C", text: "his work as a pilot" },
            { letter: "D", text: "the blaster slung low at his side" }
          ],
          correct: "D" },
        { id: "searchers", sol: "11.RV.1.F", sub: "11.RV.1.F.2",
          stem: "The reference to The Searchers in sentence 5 is an allusion. What is its main role?",
          choices: [
            { letter: "A", text: "It points to a Western scene that Luke's story echoes." },
            { letter: "B", text: "It proves that Lucas and Ford worked together." },
            { letter: "C", text: "It shows that The Searchers is set in outer space." },
            { letter: "D", text: "It explains why Luke's uncle owned a farm." }
          ],
          correct: "A" },
        { id: "why", sol: "11.RL.3.A", sub: "11.RL.3.A.1",
          stem: "According to sentences 6 and 7, why did Lucas borrow images from Westerns?",
          choices: [
            { letter: "A", text: "Westerns were cheaper to film than space scenes." },
            { letter: "B", text: "He wanted to make a Western but was turned down." },
            { letter: "C", text: "Familiar images tell viewers quickly what they see." },
            { letter: "D", text: "Audiences of the time had never seen a Western." }
          ],
          correct: "C" },
        { id: "han-arc", sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "Sentence 4 suggests that over the course of the story Han —",
          choices: [
            { letter: "A", text: "loses all interest in flying" },
            { letter: "B", text: "moves from self-interest to commitment" },
            { letter: "C", text: "settles down as a farmer on Tatooine" },
            { letter: "D", text: "turns against his friends for money" }
          ],
          correct: "B" },
        { id: "places", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO places in Star Wars that the passage connects to Western settings.",
          choices: [
            { letter: "A", text: "Tatooine" },
            { letter: "B", text: "the Death Star" },
            { letter: "C", text: "the cantina" },
            { letter: "D", text: "the forest moon of Endor" }
          ],
          correct: ["A", "C"] }
      ]
    },
    /* ───── MEDIUM (level 2) ───── */
    {
      id: "lit-scifi-century", family: "LIT", genre: "SCIFI", episode: "scifi",
      title: "From Moon Rockets to Hyperspace", kind: "Film history · 11.RI",
      blurb: "Méliès, Metropolis, flying saucers, 2001 and Star Wars: seventy-five years of science fiction film.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Science fiction is nearly as old as the movies themselves. " +
        N(2) + "In 1902, Georges Méliès sent a capsule crashing into the Moon's face in <em>A Trip to the Moon</em>, delighting audiences with camera tricks. " +
        N(3) + "Twenty-five years later, the German director Fritz Lang released <em>Metropolis</em> (1927), a silent epic about a gleaming future city where the rich live in towers while workers labor underground beside enormous machines. " +
        N(4) + "Its robot, built to look like a young woman named Maria, became one of the most famous images in film history." +
        "</p><p>" +
        N(5) + "In the 1950s, Hollywood filled theaters with low-budget B-movies about flying saucers, giant insects and invaders from space. " +
        N(6) + "Many reflected Cold War fears of atomic weapons and of enemies who might be hiding among ordinary neighbors. " +
        N(7) + "Then, in 1968, Stanley Kubrick's <em>2001: A Space Odyssey</em>, written with the novelist Arthur C. Clarke, treated space travel as slow, silent and serious, and it introduced a calm computer named HAL that turns against its crew. " +
        N(8) + "Its realistic effects set a new standard, a year before astronauts actually walked on the Moon." +
        "</p><p>" +
        N(9) + "When <em>Star Wars</em> arrived in 1977, it combined that new technical polish with the fast, fun spirit of the old adventure serials. " +
        N(10) + "Each era's science fiction, from Méliès to Lucas, shows what the people of its time dreamed about and what they feared." +
        "</p>",
      claims: [
        { id: "org", sol: "11.RI.2.A", sub: "11.RI.2.A.1",
          stem: "How is this history of science fiction film mainly organized?",
          choices: [
            { letter: "A", text: "in time order, from 1902 to 1977" },
            { letter: "B", text: "as a problem followed by its solution" },
            { letter: "C", text: "as a comparison of two directors" },
            { letter: "D", text: "from the most to the least famous film" }
          ],
          correct: "A" },
        { id: "central", sol: "11.DSR.E", sub: "11.DSR.E.1",
          stem: "Which statement best expresses the central idea of this history of science fiction film?",
          choices: [
            { letter: "A", text: "Science fiction films were most popular in the 1950s." },
            { letter: "B", text: "Metropolis is the most important science fiction film." },
            { letter: "C", text: "Science fiction films reflect the hopes and fears of their eras." },
            { letter: "D", text: "Special effects matter more than story in science fiction." }
          ],
          correct: "C" },
        { id: "fifties", sol: "11.RL.3.C", sub: "11.RL.3.C.1",
          stem: "Sentence 6 suggests that the 1950s invasion movies reflected —",
          choices: [
            { letter: "A", text: "excitement about the first Moon landing" },
            { letter: "B", text: "Cold War fears of bombs and hidden enemies" },
            { letter: "C", text: "a wish to return to the silent films" },
            { letter: "D", text: "anger at the rising cost of movie tickets" }
          ],
          correct: "B" },
        { id: "serials", sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "The author mentions the old adventure serials in sentence 9 mainly to —",
          choices: [
            { letter: "A", text: "argue that serials were better than Star Wars" },
            { letter: "B", text: "explain why 2001 was slow and serious" },
            { letter: "C", text: "show that Star Wars was filmed in the 1930s" },
            { letter: "D", text: "show that Star Wars drew on older entertainment" }
          ],
          correct: "D" },
        { id: "standard", sol: "11.RV.1.E", sub: "11.RV.1.E.1",
          stem: "In sentence 8, the phrase *set a new standard* means that 2001 —",
          choices: [
            { letter: "A", text: "broke the rules of the film industry" },
            { letter: "B", text: "was the first film shown in color" },
            { letter: "C", text: "raised the level other films were judged by" },
            { letter: "D", text: "was made according to an old formula" }
          ],
          correct: "C" },
        { id: "fears", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO details that support the claim in sentence 10 that science fiction shows what people feared.",
          choices: [
            { letter: "A", text: "Méliès delighted audiences with camera tricks." },
            { letter: "B", text: "1950s films reflected fears of atomic weapons." },
            { letter: "C", text: "Star Wars combined polish with a fast, fun spirit." },
            { letter: "D", text: "A calm computer named HAL turns against its crew." }
          ],
          correct: ["B", "D"] }
      ]
    },
    /* ───── LONG (level 3): paired texts ───── */
    {
      id: "lit-scifi-thousand-faces", family: "LIT", genre: "SCIFI", episode: "scifi",
      title: "Two Heroes, One Journey", kind: "Paired texts · 11.DSR",
      blurb: "Campbell's monomyth, Luke Skywalker and Odysseus: a pattern three thousand years old.",
      level: 3,
      passage:
        "<p><strong>Text 1 — The Hero with a Thousand Faces</strong></p><p>" +
        N(1) + "In 1949, the American scholar Joseph Campbell published <em>The Hero with a Thousand Faces</em>, a study of myths from cultures around the world. " +
        N(2) + "Campbell noticed that hero stories from very different places follow a similar path, which he called the monomyth, a word he borrowed from the novelist James Joyce. " +
        N(3) + "Later writers, including the Hollywood story consultant Christopher Vogler, organized that path into stages now known as the Hero's Journey. " +
        N(4) + "The hero begins in the ordinary world and receives a call to adventure, which he often refuses at first. " +
        N(5) + "A mentor helps him cross the threshold into an unfamiliar world, where he faces tests, finds allies and meets enemies. " +
        N(6) + "He survives an ordeal, claims a reward and takes the road back, where a final test, the resurrection, transforms him. " +
        N(7) + "At last he returns with the elixir, a gift that helps his community. " +
        N(8) + "George Lucas has often credited Campbell's book with helping him shape <em>Star Wars</em>. " +
        N(9) + "Luke Skywalker's path fits the pattern closely: a farm boy hears a princess's plea for help, refuses at first, meets the old Jedi Obi-Wan Kenobi and leaves his desert planet. " +
        N(10) + "Two films later, after nearly being destroyed by the Emperor's power, he comes back having rescued his father from the dark side." +
        "</p><p><strong>Text 2 — The Long Way Home</strong></p><p>" +
        N(11) + "Nearly three thousand years ago, the Greek poet Homer told the story of Odysseus, a king trying to sail home to the island of Ithaca after the Trojan War. " +
        N(12) + "Later legends say that Odysseus refused his own call: when he was summoned to that war, he pretended to be mad so that he would not have to leave his wife and infant son. " +
        N(13) + "His voyage home takes ten years, and along the way he faces one test after another. " +
        N(14) + "He outwits monsters such as the one-eyed Cyclops, loses his crew one by one, and even travels to the land of the dead to seek advice. " +
        N(15) + "He often wins by cleverness rather than strength. " +
        N(16) + "Throughout, the goddess Athena serves as his guide and protector; at times she disguises herself as an old friend of Odysseus named Mentor, the source of the English word mentor. " +
        N(17) + "When Odysseus finally reaches Ithaca, he arrives disguised as a beggar and must face one last trial: the suitors who have taken over his house. " +
        N(18) + "He strings his great bow, which none of the suitors could string, defeats them, and reclaims his home and family. " +
        N(19) + "For Odysseus, the whole journey points back toward the place he started; his elixir is peace restored to his household." +
        "</p>",
      claims: [
        { id: "central", sol: "11.DSR.E", sub: "11.DSR.E.1",
          stem: "Which statement best expresses the central idea of Text 1, about Campbell's book?",
          choices: [
            { letter: "A", text: "Campbell wrote the screenplay for Star Wars." },
            { letter: "B", text: "Most myths are set in deserts or on islands." },
            { letter: "C", text: "Campbell described a shared hero pattern that shaped Star Wars." },
            { letter: "D", text: "Every hero refuses the call and never leaves home." }
          ],
          correct: "C" },
        { id: "monomyth", sol: "11.RV.1.C", sub: "11.RV.1.C.1",
          stem: "The prefix *mono-* means \"one.\" Based on this and on Text 1, the *monomyth* is —",
          choices: [
            { letter: "A", text: "a single pattern shared by hero stories everywhere" },
            { letter: "B", text: "a myth told by only one ancient culture" },
            { letter: "C", text: "a story with just one character in it" },
            { letter: "D", text: "the first myth that was ever written down" }
          ],
          correct: "A" },
        { id: "athena", sol: "11.DSR.D", sub: "11.DSR.D.2",
          stem: "Text 2 explains that the word mentor comes from the story of Odysseus. Which character in Text 1 fills the same role for Luke that Athena fills for Odysseus?",
          choices: [
            { letter: "A", text: "the princess who pleads for help" },
            { letter: "B", text: "the Emperor" },
            { letter: "C", text: "Luke's father" },
            { letter: "D", text: "Obi-Wan Kenobi" }
          ],
          correct: "D" },
        { id: "refusals", sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Select TWO sentences that show a particular hero refusing the call to adventure.",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: ["B", "C"] },
        { id: "underworld", sol: "11.RL.3.B", sub: "11.RL.3.B.1",
          stem: "Odysseus's journey to the land of the dead in sentence 14 best matches which stage from Text 1?",
          choices: [
            { letter: "A", text: "the ordeal, a brush with death mid-journey" },
            { letter: "B", text: "the ordinary world, before the journey" },
            { letter: "C", text: "the call that starts the adventure" },
            { letter: "D", text: "the return with the elixir at the end" }
          ],
          correct: "A" },
        { id: "differ", sol: "11.RI.3.A", sub: "11.RI.3.A.1",
          stem: "Based on both texts, how do the two heroes' journeys differ most?",
          choices: [
            { letter: "A", text: "Odysseus has a mentor, but Luke has none." },
            { letter: "B", text: "Odysseus seeks his old home; Luke leaves his behind." },
            { letter: "C", text: "Luke refuses the call, but Odysseus never does." },
            { letter: "D", text: "Luke faces enemies, but Odysseus faces none." }
          ],
          correct: "B" },
        { id: "final-trial", sol: "11.RL.3.B", sub: "11.RL.3.B.1",
          stem: "Which event from Text 2 best matches the resurrection, the final test described in Text 1?",
          choices: [
            { letter: "A", text: "Odysseus is summoned to the Trojan War." },
            { letter: "B", text: "Athena disguises herself as Mentor." },
            { letter: "C", text: "Odysseus loses his crew one by one." },
            { letter: "D", text: "Odysseus faces the suitors at home." }
          ],
          correct: "D" },
        { id: "lucas", sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "Why does the author of Text 1 include sentence 8?",
          choices: [
            { letter: "A", text: "to argue that Lucas copied Joyce's novels" },
            { letter: "B", text: "to show that Campbell directed films himself" },
            { letter: "C", text: "to connect Campbell's ideas to a modern film" },
            { letter: "D", text: "to explain why myths are always set in space" }
          ],
          correct: "C" }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
