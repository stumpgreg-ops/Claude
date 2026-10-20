/* SOL Labyrinth — Lit and Film: WESTERNS (family LIT, genre WESTERN)
 * Twenty-four packs in four episodes of six: "highnoon" (High Noon, 1952, with John W. Cunningham's
 * "The Tin Star", 1947), "truegrit" (Charles Portis's 1968 novel and the 1969 and 2010 films),
 * "yuma" (3:10 to Yuma, 1957, from Elmore Leonard's 1953 story) and "western" (the genre's basics:
 * its elements, its history, its symbols and motifs, and a three-reasons argument).
 * The films and the story are copyrighted: every passage is an original summary or analysis, with no
 * quoted dialogue or text. Loaded after content.js; pushes into HEIST_PACKS. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ═════════════════════════ HIGH NOON (episode "highnoon") ═════════════════════════ */

    /* ── tiny ── */
    {
      id: "lit-highnoon-noon-train",
      family: "LIT", genre: "WESTERN", episode: "highnoon",
      title: "The Noon Train",
      kind: "Westerns · 11.RL",
      blurb: "A marshal's wedding morning turns into a countdown.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "High Noon (1952), directed by Fred Zinnemann, takes place on one Sunday morning in the town of Hadleyville. " +
        N(2) + "Marshal Will Kane (Gary Cooper) has just married Amy (Grace Kelly) and turned in his badge. " +
        N(3) + "Then word arrives that Frank Miller, a killer Kane once sent to prison, is free and coming back on the noon train. " +
        N(4) + "Three of Miller's men wait at the station. " +
        N(5) + "Kane and Amy leave town in a wagon, but he turns it around. " +
        N(6) + "With the clock running toward noon, he goes back to face Miller." +
        "</p>",
      claims: [
        {
          id: "conflict",
          sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "Which event in the passage sets the main conflict in motion?",
          choices: [
            { letter: "A", text: "Kane marries Amy in Hadleyville." },
            { letter: "B", text: "Word arrives that Miller is coming on the noon train." },
            { letter: "C", text: "Kane and Amy leave town in a wagon." },
            { letter: "D", text: "Kane turns in his badge to the town." }
          ],
          correct: "B"
        },
        {
          id: "duty",
          sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "Kane's decision in sentences 5–6 mainly shows that he —",
          choices: [
            { letter: "A", text: "puts his duty ahead of his own safety" },
            { letter: "B", text: "wants to prove he is faster than Miller" },
            { letter: "C", text: "does not know that Miller's men are in town" },
            { letter: "D", text: "has been ordered back by the town's leaders" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "11.RL.2.D", sub: "11.RL.2.D.1",
          stem: "Which detail from the passage creates situational irony?",
          choices: [
            { letter: "A", text: "The story takes place in a town called Hadleyville." },
            { letter: "B", text: "Three of Miller's men wait at the station." },
            { letter: "C", text: "Kane faces his worst danger just after giving up his badge." },
            { letter: "D", text: "Kane and Amy leave town in a wagon." }
          ],
          correct: "C"
        },
        {
          id: "train",
          sol: "11.RL.2.C", sub: "11.RL.2.C.1",
          stem: "In this passage, the noon train works mainly as —",
          choices: [
            { letter: "A", text: "a deadline that tells the audience when danger will arrive" },
            { letter: "B", text: "a symbol of the peaceful life Kane hopes to live" },
            { letter: "C", text: "a way for Amy to leave Kane and return home" },
            { letter: "D", text: "a reminder of how wealthy the town has become" }
          ],
          correct: "A"
        },
        {
          id: "gang",
          sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Based on sentence 4, readers can infer that Miller —",
          choices: [
            { letter: "A", text: "plans to settle down quietly in Hadleyville" },
            { letter: "B", text: "does not know that Kane is still in town" },
            { letter: "C", text: "will arrive long after the noon hour" },
            { letter: "D", text: "has men ready to help him fight Kane" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "lit-highnoon-nobody-comes",
      family: "LIT", genre: "WESTERN", episode: "highnoon",
      title: "Nobody Comes",
      kind: "Film analysis · 11.RL",
      blurb: "A marshal asks his town for help, and the town finds excuses.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "As noon approaches in High Noon, Marshal Will Kane walks through Hadleyville asking for help. " +
        N(2) + "His own deputy, Harvey Pell, quits. " +
        N(3) + "The judge who sentenced Frank Miller packs his things and leaves town. " +
        N(4) + "The men in the saloon turn Kane down, and the people at the church argue until the mayor tells them the town would be better off if Kane simply left. " +
        N(5) + "One by one, the people Kane protected find reasons to stay home. " +
        N(6) + "By noon he stands alone in the empty street." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A", sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme suggested by the passage?",
          choices: [
            { letter: "A", text: "Courage is easy when a whole town stands together." },
            { letter: "B", text: "People often abandon what is right when it becomes dangerous." },
            { letter: "C", text: "Laws matter less in small towns than in big cities." },
            { letter: "D", text: "A good leader always obeys the wishes of the town." }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "How does the order of events in sentences 2–5 build tension?",
          choices: [
            { letter: "A", text: "Each refusal leaves Kane with fewer possible allies." },
            { letter: "B", text: "Each scene moves the action farther from Hadleyville." },
            { letter: "C", text: "Each event reveals more about Miller's old crimes." },
            { letter: "D", text: "Each person offers Kane a different kind of weapon." }
          ],
          correct: "A"
        },
        {
          id: "judge",
          sol: "11.RL.1.C", sub: "11.RL.1.C.1",
          stem: "What does sentence 3 reveal about the judge?",
          choices: [
            { letter: "A", text: "He wants to protect Amy from the coming danger." },
            { letter: "B", text: "He believes that Miller has changed in prison." },
            { letter: "C", text: "He cares more for his own safety than for the law." },
            { letter: "D", text: "He plans to return with more deputies by noon." }
          ],
          correct: "C"
        },
        {
          id: "street",
          sol: "11.RL.2.C", sub: "11.RL.2.C.1",
          stem: "The image of the empty street in sentence 6 mainly emphasizes Kane's —",
          choices: [
            { letter: "A", text: "eagerness" },
            { letter: "B", text: "confusion" },
            { letter: "C", text: "wealth" },
            { letter: "D", text: "isolation" }
          ],
          correct: "D"
        },
        {
          id: "deputy",
          sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Which sentence shows that even the man who works beside Kane abandons him?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "B"
        }
      ]
    },

    /* ── short ── */
    {
      id: "lit-highnoon-blacklist",
      family: "LIT", genre: "WESTERN", episode: "highnoon",
      title: "The Writer Who Stood Alone",
      kind: "Film history · 11.RI",
      blurb: "High Noon's screenwriter, the blacklist and a Western read as allegory.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Carl Foreman, who wrote High Noon, soon found himself living a version of its story. " +
        N(2) + "In 1951, while the film was in production, he was called before the House Un-American Activities Committee, a congressional committee hunting for Communist influence in Hollywood. " +
        N(3) + "He refused to name other people, and he was blacklisted: the studios would no longer hire him. " +
        N(4) + "He moved to England to keep working. " +
        N(5) + "Many critics read High Noon as an allegory, a story whose characters and events stand for something beyond themselves. " +
        N(6) + "In this reading, the townspeople who abandon Kane are the friends and coworkers who stayed silent out of fear. " +
        N(7) + "Not everyone liked the message: John Wayne called the film un-American and later made Rio Bravo (1959), in which a sheriff turns down help from amateurs." +
        "</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "The author includes sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "introduce the idea that the writer's life came to resemble his film" },
            { letter: "B", text: "show that Foreman wrote High Noon after he moved to England" },
            { letter: "C", text: "explain why Gary Cooper agreed to play the marshal" },
            { letter: "D", text: "argue that Westerns should stay away from politics" }
          ],
          correct: "A"
        },
        {
          id: "blacklisted",
          sol: "11.RI.2.B", sub: "11.RI.2.B.1",
          stem: "Based on sentence 3, being blacklisted meant that Foreman —",
          choices: [
            { letter: "A", text: "was sent to prison for refusing to testify" },
            { letter: "B", text: "could no longer find work at the studios" },
            { letter: "C", text: "had to rewrite the ending of High Noon" },
            { letter: "D", text: "was forced to testify a second time" }
          ],
          correct: "B"
        },
        {
          id: "allegory",
          sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "Which example best fits the definition of allegory given in sentence 5?",
          choices: [
            { letter: "A", text: "A film that shows its events in the order they happened" },
            { letter: "B", text: "A movie whose lead actor also wrote the screenplay" },
            { letter: "C", text: "A Western filmed on real frontier locations" },
            { letter: "D", text: "A story in which a frightened town stands for a frightened nation" }
          ],
          correct: "D"
        },
        {
          id: "context",
          sol: "11.RL.3.A", sub: "11.RL.3.A.1",
          stem: "According to the passage, the blacklist leads some viewers to see the townspeople of Hadleyville as —",
          choices: [
            { letter: "A", text: "heroes who finally rescue Kane at noon" },
            { letter: "B", text: "outlaws secretly working for Frank Miller" },
            { letter: "C", text: "people who stayed silent to protect themselves" },
            { letter: "D", text: "strangers who had never met their marshal" }
          ],
          correct: "C"
        },
        {
          id: "wayne",
          sol: "11.RI.1.C", sub: "11.RI.1.C.1",
          stem: "Sentence 7 mainly provides —",
          choices: [
            { letter: "A", text: "evidence that every critic agreed with Foreman" },
            { letter: "B", text: "a response from someone who rejected the film's message" },
            { letter: "C", text: "a summary of Rio Bravo from beginning to end" },
            { letter: "D", text: "the main reason Foreman left Hollywood" }
          ],
          correct: "B"
        },
        {
          id: "supported",
          sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO statements that are supported by the passage.",
          choices: [
            { letter: "A", text: "Foreman was questioned while High Noon was being made." },
            { letter: "B", text: "Foreman named others so that he could keep working." },
            { letter: "C", text: "Some critics see the film's town as a fearful Hollywood." },
            { letter: "D", text: "John Wayne played a deputy in High Noon before Rio Bravo." }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "lit-highnoon-two-stars",
      family: "LIT", genre: "WESTERN", episode: "highnoon",
      title: "Two Tin Stars",
      kind: "Paired texts · 11.DSR",
      blurb: "The story ends with a badge passed on; the film ends with a badge in the dust.",
      level: 2,
      passage:
        "<p><strong>Text 1 — The ending of \"The Tin Star\" (John W. Cunningham, 1947)</strong></p>" +
        "<p>" +
        N(1) + "In Cunningham's short story, old Sheriff Doane, whose hands are stiff with arthritis, faces his enemies with only his young deputy, Toby, beside him. " +
        N(2) + "Doane is fatally wounded while shielding Toby. " +
        N(3) + "As he dies, he asks whether Toby still plans to quit the job, and Toby shakes his head. " +
        N(4) + "While townsmen slowly gather, Toby holds Doane's gun and star, then starts giving orders." +
        "</p>" +
        "<p><strong>Text 2 — The ending of High Noon (1952)</strong></p>" +
        "<p>" +
        N(5) + "In the film, Marshal Will Kane survives his fight with Frank Miller's gang, helped at a key moment by his wife, Amy. " +
        N(6) + "Only when the shooting stops do the townspeople pour into the street. " +
        N(7) + "Kane looks at the crowd that would not help him. " +
        N(8) + "Then he takes the star from his chest, drops it in the dust and rides away with Amy without a word." +
        "</p>",
      claims: [
        {
          id: "badge",
          sol: "11.DSR.D", sub: "11.DSR.D.2",
          stem: "Which statement best describes how the meaning of the badge differs in the two endings?",
          choices: [
            { letter: "A", text: "In Text 1 it is passed on as a duty; in Text 2 it is rejected." },
            { letter: "B", text: "In Text 1 it is buried with Doane; in Text 2 it is given to Amy." },
            { letter: "C", text: "In both texts it is lost in the confusion of the gunfight." },
            { letter: "D", text: "In Text 1 it is thrown away; in Text 2 it is proudly kept." }
          ],
          correct: "A"
        },
        {
          id: "toby",
          sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "Toby's response in sentence 3 reveals that he —",
          choices: [
            { letter: "A", text: "blames Doane for starting the gunfight" },
            { letter: "B", text: "plans to leave town before the doctor comes" },
            { letter: "C", text: "never wanted to become a deputy at all" },
            { letter: "D", text: "will take up the job Doane gave his life for" }
          ],
          correct: "D"
        },
        {
          id: "dust",
          sol: "11.RL.2.C", sub: "11.RL.2.C.2",
          stem: "In Text 2, Kane dropping the star in the dust most likely symbolizes —",
          choices: [
            { letter: "A", text: "his pride in a job well done" },
            { letter: "B", text: "his hope that Amy will become marshal" },
            { letter: "C", text: "his rejection of a town that left him alone" },
            { letter: "D", text: "his fear that Miller's gang will return" }
          ],
          correct: "C"
        },
        {
          id: "both",
          sol: "11.DSR.D", sub: "11.DSR.D.2",
          stem: "Which detail appears in BOTH endings?",
          choices: [
            { letter: "A", text: "The lawman dies in the street." },
            { letter: "B", text: "The townspeople appear only after the fight." },
            { letter: "C", text: "A wife helps the lawman in the gunfight." },
            { letter: "D", text: "The young deputy refuses to fight." }
          ],
          correct: "B"
        },
        {
          id: "themes",
          sol: "11.RL.1.A", sub: "11.RL.1.A.2",
          stem: "Select TWO ideas that are developed in both texts.",
          choices: [
            { letter: "A", text: "Courage can mean standing firm when others will not." },
            { letter: "B", text: "Small towns are always grateful to their lawmen." },
            { letter: "C", text: "The cost of upholding the law can be very high." },
            { letter: "D", text: "Young people should never accept dangerous jobs." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "prepare",
          sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "How does sentence 6 prepare the reader for Kane's action in sentence 8?",
          choices: [
            { letter: "A", text: "It shows that Amy has already left town without him." },
            { letter: "B", text: "It shows the town arriving only once the danger is past." },
            { letter: "C", text: "It shows the last of Miller's gang escaping the town." },
            { letter: "D", text: "It shows why Kane wants to stay on as marshal." }
          ],
          correct: "B"
        }
      ]
    },

    /* ── medium ── */
    {
      id: "lit-highnoon-every-clock",
      family: "LIT", genre: "WESTERN", episode: "highnoon",
      title: "Every Clock in Town",
      kind: "Film analysis · 11.RL",
      blurb: "Time as symbol and motif: how High Noon makes the audience feel every minute.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "The most important prop in High Noon may be the clock. " +
        N(2) + "The film runs about eighty-five minutes, and its story covers roughly the same stretch of time, from late morning until just after noon. " +
        N(3) + "This close match between screen time and story time, called real time, makes the audience feel every minute that Marshal Will Kane loses. " +
        N(4) + "Director Fred Zinnemann reminds us of the deadline again and again. " +
        N(5) + "Clocks hang on walls all over town, and each time the camera finds one, the hands have crept closer to twelve. " +
        N(6) + "A repeated image like this is a motif, and through repetition it becomes a symbol of the deadline that no one can escape. " +
        N(7) + "As noon nears, the clocks seem to fill more of the frame, and the swinging pendulum appears in tight close-ups. " +
        N(8) + "Then, in a famous sequence, the editing cuts from face to face as the whole town waits, from Kane writing at his desk to Miller's men at the station to the empty railroad tracks stretching toward the horizon. " +
        N(9) + "The shots come faster, a whistle sounds, and the train arrives. " +
        N(10) + "Later, as Kane walks out to meet his enemies, the camera rises high above the street and leaves him a small, lonely figure among empty buildings. " +
        N(11) + "Time, in this film, is not just a setting; it is an enemy." +
        "</p>",
      claims: [
        {
          id: "realtime",
          sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "Based on sentence 3, a film told in real time is one in which —",
          choices: [
            { letter: "A", text: "the story takes about as long as the movie lasts" },
            { letter: "B", text: "the events are based on true history" },
            { letter: "C", text: "the story is filmed without any cuts" },
            { letter: "D", text: "the action is shown out of order" }
          ],
          correct: "A"
        },
        {
          id: "motif",
          sol: "11.RL.2.C", sub: "11.RL.2.C.1",
          stem: "According to sentence 6, the clock becomes a symbol because —",
          choices: [
            { letter: "A", text: "Kane checks it before every one of his gunfights" },
            { letter: "B", text: "the townspeople give it to Kane as a wedding gift" },
            { letter: "C", text: "it is repeated until it stands for an unavoidable deadline" },
            { letter: "D", text: "it is the largest and costliest object in the town" }
          ],
          correct: "C"
        },
        {
          id: "closeups",
          sol: "11.RL.2.C", sub: "11.RL.2.C.2",
          stem: "The close-ups described in sentence 7 mainly help to —",
          choices: [
            { letter: "A", text: "introduce a new character into the story" },
            { letter: "B", text: "increase the tension as noon draws near" },
            { letter: "C", text: "show what time the church service begins" },
            { letter: "D", text: "slow the story down so Kane can rest" }
          ],
          correct: "B"
        },
        {
          id: "sequence",
          sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "How does the sequence in sentences 8–9 contribute to the plot?",
          choices: [
            { letter: "A", text: "It flashes back to the day Kane arrested Miller." },
            { letter: "B", text: "It shows the town deciding to help Kane after all." },
            { letter: "C", text: "It replaces the gunfight with a peaceful ending." },
            { letter: "D", text: "It builds to the train's arrival, ending the long wait." }
          ],
          correct: "D"
        },
        {
          id: "crane",
          sol: "11.RL.2.C", sub: "11.RL.2.C.2",
          stem: "The high camera position in sentence 10 most likely emphasizes Kane's —",
          choices: [
            { letter: "A", text: "isolation in his own town" },
            { letter: "B", text: "power over his enemies" },
            { letter: "C", text: "anger at his new wife" },
            { letter: "D", text: "speed with a revolver" }
          ],
          correct: "A"
        },
        {
          id: "enemy",
          sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO sentences that best support the claim in sentence 11 that time is an enemy in the film.",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: ["B", "C"]
        }
      ]
    },

    /* ── long (paired) ── */
    {
      id: "lit-highnoon-tin-star-paired",
      family: "LIT", genre: "WESTERN", episode: "highnoon",
      title: "From \"The Tin Star\" to High Noon",
      kind: "Paired texts · 11.DSR",
      blurb: "A 1947 magazine story about an old sheriff and his deputy, and what the film made of it.",
      level: 3,
      passage:
        "<p><strong>Text 1 — A summary of \"The Tin Star\" (John W. Cunningham, Collier's, 1947)</strong></p>" +
        "<p>" +
        N(1) + "\"The Tin Star\" opens in a sheriff's office in a dusty Western town in the middle of a hot afternoon. " +
        N(2) + "Sheriff Doane is getting old, and his hands are so twisted by arthritis that he can barely close them around a gun. " +
        N(3) + "His deputy, Toby, has served him for two years, and he announces that he will stand with Doane today but quit afterward, because the job pays little and brings only danger. " +
        N(4) + "The danger is a man named Jordan, a killer Doane once caught, whom the court sent to prison instead of hanging. " +
        N(5) + "Jordan is due back on the four-ten train, and his younger brother and two other gunmen are already drinking on the saloon porch across the street. " +
        N(6) + "The town's mayor urges Doane to resign, and a second deputy lays down his badge and quits. " +
        N(7) + "Doane rides out to put flowers on the grave of his wife, and there he admits that he could have left but that the town is his. " +
        N(8) + "When the shooting starts, Toby kills the younger Jordan but is wounded. " +
        N(9) + "Doane, fighting with his crippled hands, is fatally shot while shielding Toby from the older Jordan, and Toby fires back from the ground. " +
        N(10) + "Before he dies, Doane asks whether Toby will still quit. " +
        N(11) + "Toby shakes his head, takes up the dead man's star and begins giving orders to the town." +
        "</p>" +
        "<p><strong>Text 2 — What the film changed</strong></p>" +
        "<p>" +
        N(12) + "When screenwriter Carl Foreman and director Fred Zinnemann turned the story into High Noon (1952), they kept its bones: a lawman who could walk away, a killer returning by train, gunmen waiting in town, a deputy who quits. " +
        N(13) + "But they changed nearly everything else. " +
        N(14) + "The four-ten train became the noon train, and the action was squeezed into a single morning told in close to real time. " +
        N(15) + "Doane, the widower with failing hands, became Will Kane, a marshal who has just married Amy, a young Quaker who opposes violence. " +
        N(16) + "The loyal Toby disappeared; Kane's deputy, Harvey Pell, quits in resentment, so no young man stands beside him. " +
        N(17) + "Most important, the film made the townspeople the real subject. " +
        N(18) + "Kane goes door to door asking for help and is refused by the saloon, the church, the judge and his old friends. " +
        N(19) + "In the end only Amy, despite her beliefs, picks up a gun to save her husband. " +
        N(20) + "The story's ending, in which a star passes from a dying mentor to his student, became its opposite: Kane survives, drops his star in the dust and leaves the town to itself. " +
        N(21) + "The story asks whether anyone will carry on the work of the law; the film asks whether a community deserves a lawman at all." +
        "</p>",
      claims: [
        {
          id: "shared",
          sol: "11.DSR.D", sub: "11.DSR.D.2",
          stem: "Which element appears in both the story and the film, according to the two texts?",
          choices: [
            { letter: "A", text: "a killer returning by train to take revenge" },
            { letter: "B", text: "a young deputy who stays loyal to the end" },
            { letter: "C", text: "a lawman who has just been married" },
            { letter: "D", text: "a church meeting that debates what to do" }
          ],
          correct: "A"
        },
        {
          id: "doane",
          sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "Which detail from Text 1 best reveals Doane's reason for staying to fight?",
          choices: [
            { letter: "A", text: "His hands are badly twisted by arthritis." },
            { letter: "B", text: "The mayor of the town urges him to resign." },
            { letter: "C", text: "At his wife's grave he says the town is his." },
            { letter: "D", text: "Jordan's brother drinks on the saloon porch." }
          ],
          correct: "C"
        },
        {
          id: "setup",
          sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "In Text 1, how does sentence 3 prepare for the story's ending?",
          choices: [
            { letter: "A", text: "It explains why Jordan's train arrives late." },
            { letter: "B", text: "It raises the question Doane asks as he dies." },
            { letter: "C", text: "It introduces the man who shoots Doane." },
            { letter: "D", text: "It reveals that Toby is Doane's own son." }
          ],
          correct: "B"
        },
        {
          id: "focus",
          sol: "11.RI.3.A", sub: "11.RI.3.A.1",
          stem: "According to Text 2, the film's most important change to the story was —",
          choices: [
            { letter: "A", text: "moving the action from a small town to a city" },
            { letter: "B", text: "turning the outlaw into a sympathetic hero" },
            { letter: "C", text: "adding a long flashback to Kane's youth" },
            { letter: "D", text: "shifting the focus to the town that fails its lawman" }
          ],
          correct: "D"
        },
        {
          id: "bones",
          sol: "11.RV.1.F", sub: "11.RV.1.F.1",
          stem: "In sentence 12, the phrase \"kept its bones\" means that the filmmakers —",
          choices: [
            { letter: "A", text: "kept the story's darkest and most violent scenes" },
            { letter: "B", text: "kept the story's title for the finished film" },
            { letter: "C", text: "kept every character exactly as Cunningham wrote" },
            { letter: "D", text: "kept the basic structure of the story's plot" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "11.RL.2.D", sub: "11.RL.2.D.2",
          stem: "Which change described in Text 2 creates the strongest irony?",
          choices: [
            { letter: "A", text: "The four-ten train becomes the noon train." },
            { letter: "B", text: "The deputy in the film is named Harvey Pell." },
            { letter: "C", text: "A woman who opposes violence fires a gun to save Kane." },
            { letter: "D", text: "The action fits into a single morning." }
          ],
          correct: "C"
        },
        {
          id: "isolation",
          sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO details from Text 2 that show the film leaves Kane more alone than the story leaves Doane.",
          choices: [
            { letter: "A", text: "No loyal young deputy stands beside Kane." },
            { letter: "B", text: "Kane is refused by the saloon, the church and the judge." },
            { letter: "C", text: "The noon train replaces the four-ten train." },
            { letter: "D", text: "Amy is a young Quaker who opposes violence." }
          ],
          correct: ["A", "B"]
        },
        {
          id: "themes",
          sol: "11.RL.1.A", sub: "11.RL.1.A.2",
          stem: "Which statement best captures how the themes of the two works differ?",
          choices: [
            { letter: "A", text: "The story honors duty handed to the next generation; the film questions a town that will not defend itself." },
            { letter: "B", text: "The story warns lawmen never to trust their deputies; the film praises a town that rallies around its marshal." },
            { letter: "C", text: "The story is mainly a romance between old friends; the film is mainly a tale of personal revenge." },
            { letter: "D", text: "Both works argue that a lawman who resigns his office has betrayed the people who elected him." }
          ],
          correct: "A"
        }
      ]
    },

    /* ═════════════════════════ TRUE GRIT (episode "truegrit") ═════════════════════════ */

    /* ── tiny ── */
    {
      id: "lit-truegrit-hiring-grit",
      family: "LIT", genre: "WESTERN", episode: "truegrit",
      title: "A Girl Hires a Marshal",
      kind: "Westerns · 11.RL",
      blurb: "Fourteen-year-old Mattie Ross goes looking for a man with grit.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "In True Grit, fourteen-year-old Mattie Ross travels to Fort Smith, Arkansas, after her father is murdered there by his hired man, Tom Chaney. " +
        N(2) + "Chaney has fled into Indian Territory, and the law seems in no hurry to follow. " +
        N(3) + "So Mattie decides to hire a manhunter herself. " +
        N(4) + "She chooses Rooster Cogburn, a one-eyed, hard-drinking deputy marshal, because she has been told that he has grit. " +
        N(5) + "This beginning belongs to Charles Portis's 1968 novel and to both of its film versions." +
        "</p>",
      claims: [
        {
          id: "start",
          sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "Which event starts the story's action?",
          choices: [
            { letter: "A", text: "Rooster arrives in Fort Smith." },
            { letter: "B", text: "Chaney is captured in Indian Territory." },
            { letter: "C", text: "Mattie's father is murdered." },
            { letter: "D", text: "Portis's novel is published." }
          ],
          correct: "C"
        },
        {
          id: "mattie",
          sol: "11.RL.1.C", sub: "11.RL.1.C.1",
          stem: "Sentence 3 shows that Mattie is —",
          choices: [
            { letter: "A", text: "determined to act when others will not" },
            { letter: "B", text: "afraid to travel anywhere alone" },
            { letter: "C", text: "eager to become a marshal herself" },
            { letter: "D", text: "unsure whether Chaney is guilty" }
          ],
          correct: "A"
        },
        {
          id: "grit",
          sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "As it is used in the passage and the title, the word *grit* most nearly means —",
          choices: [
            { letter: "A", text: "wealth" },
            { letter: "B", text: "tough courage" },
            { letter: "C", text: "a way with words" },
            { letter: "D", text: "skill with horses" }
          ],
          correct: "B"
        },
        {
          id: "versions",
          sol: "11.DSR.B", sub: "11.DSR.B.1",
          stem: "According to sentence 5, this beginning appears in —",
          choices: [
            { letter: "A", text: "the 1969 film only" },
            { letter: "B", text: "the 2010 film only" },
            { letter: "C", text: "a true newspaper story" },
            { letter: "D", text: "the novel and both films" }
          ],
          correct: "D"
        },
        {
          id: "values",
          sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "Mattie's reason for choosing Rooster suggests that she values —",
          choices: [
            { letter: "A", text: "good manners more than toughness" },
            { letter: "B", text: "toughness more than good manners" },
            { letter: "C", text: "youth more than experience" },
            { letter: "D", text: "money more than justice" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "lit-truegrit-snake-pit",
      family: "LIT", genre: "WESTERN", episode: "truegrit",
      title: "The Snake Pit",
      kind: "Screen story · 11.RL",
      blurb: "Mattie gets her justice, and the price is steep.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Near the end of True Grit, Mattie finally faces Tom Chaney and shoots him with her father's old revolver. " +
        N(2) + "The heavy gun's kick knocks her backward into a deep pit in the rocks. " +
        N(3) + "Rattlesnakes live at the bottom, and one bites her hand. " +
        N(4) + "Rooster gets her out and rides through the night to reach a doctor, pushing her pony until it can run no farther. " +
        N(5) + "In the novel and the 2010 film, Mattie survives but loses her arm." +
        "</p>",
      claims: [
        {
          id: "cause",
          sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "What causes Mattie to fall into the pit?",
          choices: [
            { letter: "A", text: "a push from Tom Chaney" },
            { letter: "B", text: "a snake that frightens her" },
            { letter: "C", text: "the kick of the gun she fires" },
            { letter: "D", text: "her pony throwing her off" }
          ],
          correct: "C"
        },
        {
          id: "cost",
          sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Which sentence states most directly that Mattie's victory comes at a lasting cost?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        },
        {
          id: "rooster",
          sol: "11.RL.1.C", sub: "11.RL.1.C.1",
          stem: "Rooster's actions in sentence 4 show that he —",
          choices: [
            { letter: "A", text: "will do whatever it takes to save Mattie" },
            { letter: "B", text: "cares only about the reward money" },
            { letter: "C", text: "is too frightened of snakes to help" },
            { letter: "D", text: "blames Mattie for the danger she is in" }
          ],
          correct: "A"
        },
        {
          id: "kick",
          sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word *kick* refers to —",
          choices: [
            { letter: "A", text: "a blow from a horse's hoof" },
            { letter: "B", text: "the backward jolt of a fired gun" },
            { letter: "C", text: "a sudden burst of excitement" },
            { letter: "D", text: "a strong and bitter taste" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "11.RL.1.A", sub: "11.RL.1.A.1",
          stem: "Which theme does this scene best support?",
          choices: [
            { letter: "A", text: "Snakes are the West's deadliest danger." },
            { letter: "B", text: "Justice is always quick and easy." },
            { letter: "C", text: "Seeking justice can carry a painful price." },
            { letter: "D", text: "Children should stay away from guns." }
          ],
          correct: "C"
        }
      ]
    },

    /* ── short ── */
    {
      id: "lit-truegrit-vocab-grit",
      family: "LIT", genre: "WESTERN", episode: "truegrit",
      title: "Words with Grit",
      kind: "Vocabulary · 11.RV",
      blurb: "Six words for a stubborn girl, a hired gun, a proud Ranger and an unforgiving frontier.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Mattie Ross is <strong>tenacious</strong>: once she decides to bring her father's killer to justice, nothing can pry her loose from the goal. " +
        N(2) + "In Fort Smith she bargains with a horse trader so <strong>shrewdly</strong> that he ends up paying her more than he meant to, just to be rid of her. " +
        N(3) + "Rooster Cogburn, by contrast, seems <strong>mercenary</strong> at first; he agrees to the hunt mostly for the money she offers. " +
        N(4) + "LaBoeuf, a Texas Ranger chasing Chaney for a crime in Texas, is <strong>condescending</strong> toward Mattie and treats her like a child who ought to go home. " +
        N(5) + "Mattie does not want a quick, private revenge; she wants <strong>retribution</strong>, a deserved punishment, and she wants Chaney hanged for her father's murder in particular. " +
        N(6) + "Yet the frontier proves <strong>unforgiving</strong>, and every step toward justice costs her something." +
        "</p>",
      claims: [
        {
          id: "tenacious",
          sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 1, the word *tenacious* most nearly means —",
          choices: [
            { letter: "A", text: "stubbornly persistent" },
            { letter: "B", text: "easily frightened" },
            { letter: "C", text: "quietly patient" },
            { letter: "D", text: "openly cruel" }
          ],
          correct: "A"
        },
        {
          id: "shrewdly",
          sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "Based on the result described in sentence 2, *shrewdly* means —",
          choices: [
            { letter: "A", text: "angrily and loudly" },
            { letter: "B", text: "cleverly and practically" },
            { letter: "C", text: "carelessly and quickly" },
            { letter: "D", text: "politely and shyly" }
          ],
          correct: "B"
        },
        {
          id: "mercenary",
          sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "The word *mercenary* in sentence 3 suggests that Rooster is at first driven mainly by —",
          choices: [
            { letter: "A", text: "loyalty to Mattie's family" },
            { letter: "B", text: "a deep belief in the law" },
            { letter: "C", text: "a desire to be paid" },
            { letter: "D", text: "fear of the Texas Ranger" }
          ],
          correct: "C"
        },
        {
          id: "condescending",
          sol: "11.RV.1.C", sub: "11.RV.1.C.1",
          stem: "*Condescending* comes from Latin roots meaning \"to come down.\" Based on this and sentence 4, a condescending person —",
          choices: [
            { letter: "A", text: "climbs to a higher rank" },
            { letter: "B", text: "speaks in a quiet voice" },
            { letter: "C", text: "agrees with everyone" },
            { letter: "D", text: "treats others as lesser" }
          ],
          correct: "D"
        },
        {
          id: "retribution",
          sol: "11.RV.1.D", sub: "11.RV.1.D.1",
          stem: "How does the word *retribution* in sentence 5 differ from *revenge* as the passage uses them?",
          choices: [
            { letter: "A", text: "Retribution means forgiveness; revenge means punishment." },
            { letter: "B", text: "Retribution suggests a deserved penalty; revenge, private payback." },
            { letter: "C", text: "Retribution refers only to money paid for a crime." },
            { letter: "D", text: "The two words mean exactly the same thing." }
          ],
          correct: "B"
        },
        {
          id: "describe",
          sol: "11.RV.1.A", sub: "11.RV.1.A.2",
          stem: "Select TWO words from the passage that describe Mattie or the way she acts.",
          choices: [
            { letter: "A", text: "tenacious" },
            { letter: "B", text: "mercenary" },
            { letter: "C", text: "shrewdly" },
            { letter: "D", text: "condescending" }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "lit-truegrit-three-versions",
      family: "LIT", genre: "WESTERN", episode: "truegrit",
      title: "One Story, Three Versions",
      kind: "Film history · 11.RI",
      blurb: "Portis's novel, John Wayne's Oscar and the Coen brothers' return to the book.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Charles Portis published True Grit in 1968, and the novel became a film almost at once. " +
        N(2) + "The 1969 version, directed by Henry Hathaway, starred John Wayne as Rooster Cogburn and earned Wayne his only Academy Award for Best Actor. " +
        N(3) + "That film made Rooster the center of the story and gave it a gentler ending, in which Mattie keeps her arm. " +
        N(4) + "In 2010, Joel and Ethan Coen made a new version with Jeff Bridges as Rooster, Matt Damon as LaBoeuf and Hailee Steinfeld, then a newcomer, as Mattie. " +
        N(5) + "The Coens said they wanted to stay closer to the novel. " +
        N(6) + "They kept Mattie's narration, the formal, old-fashioned speech in which characters rarely use contractions, and the book's bleak final chapter, which leaps ahead twenty-five years. " +
        N(7) + "The result belongs as much to Mattie as to Rooster." +
        "</p>",
      claims: [
        {
          id: "structure",
          sol: "11.RI.2.A", sub: "11.RI.2.A.1",
          stem: "How is the passage mainly organized?",
          choices: [
            { letter: "A", text: "in time order, from the novel to the two films" },
            { letter: "B", text: "as a list of problems followed by solutions" },
            { letter: "C", text: "from the newest version back to the oldest" },
            { letter: "D", text: "as an argument with no supporting examples" }
          ],
          correct: "A"
        },
        {
          id: "focus",
          sol: "11.RI.1.B", sub: "11.RI.1.B.1",
          stem: "Based on sentences 3 and 7, how do the two films differ in focus?",
          choices: [
            { letter: "A", text: "Both films make LaBoeuf the true center of the story." },
            { letter: "B", text: "The 1969 film centers on Rooster; the 2010 film gives Mattie more weight." },
            { letter: "C", text: "The 1969 film centers on Mattie; the 2010 film centers on LaBoeuf." },
            { letter: "D", text: "Neither film includes Mattie's point of view at all." }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Which sentence best supports the idea that the 2010 film is the closer adaptation of the novel?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "contractions",
          sol: "11.RI.2.B", sub: "11.RI.2.B.1",
          stem: "In sentence 6, the detail that characters rarely use contractions means they —",
          choices: [
            { letter: "A", text: "speak only in very short sentences" },
            { letter: "B", text: "use a great deal of modern slang" },
            { letter: "C", text: "seldom say words like \"don't\" or \"can't\"" },
            { letter: "D", text: "almost never speak to one another" }
          ],
          correct: "C"
        },
        {
          id: "bleak",
          sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 6, the word *bleak* suggests that the novel's final chapter is —",
          choices: [
            { letter: "A", text: "cheerful" },
            { letter: "B", text: "grim and sad" },
            { letter: "C", text: "confusing" },
            { letter: "D", text: "action-packed" }
          ],
          correct: "B"
        },
        {
          id: "facts",
          sol: "11.DSR.B", sub: "11.DSR.B.1",
          stem: "Select TWO facts that are stated in the passage.",
          choices: [
            { letter: "A", text: "John Wayne won an Academy Award for playing Rooster." },
            { letter: "B", text: "Hailee Steinfeld played Mattie in the 1969 film." },
            { letter: "C", text: "The Coens set out to follow the novel more closely." },
            { letter: "D", text: "The 2010 film cut the scenes set years later." }
          ],
          correct: ["A", "C"]
        }
      ]
    },

    /* ── medium ── */
    {
      id: "lit-truegrit-unforgiving",
      family: "LIT", genre: "WESTERN", episode: "truegrit",
      title: "The World Is Unforgiving",
      kind: "Film analysis · 11.RL",
      blurb: "In True Grit, everything has a price, and justice is the most expensive thing of all.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "The 2010 True Grit opens on a dark, snowy street where a man's body lies on the ground, while an older Mattie Ross, heard but not seen, begins to tell her story. " +
        N(2) + "From the first minute, she explains the rule she lives by: in this world every act has a price, and sooner or later the bill comes due. " +
        N(3) + "The rest of the story, in Portis's novel and in both films, puts that rule to the test. " +
        N(4) + "Tom Chaney pays for murdering Mattie's father, but justice is not cheap for anyone else either. " +
        N(5) + "LaBoeuf is injured more than once; Mattie's loyal pony, Little Blackie, is ridden until it collapses; and in the novel and the 2010 film, the snakebite costs Mattie her arm. " +
        N(6) + "Even the landscape seems to agree: in the 2010 film, cinematographer Roger Deakins shows bare trees, frozen ground and wide, empty country where help is far away. " +
        N(7) + "The world of True Grit is not cruel for its own sake, but it does not forgive mistakes, and it does not hand out free rewards. " +
        N(8) + "In the end Mattie gets what she came for, but she pays with part of her body and with a lonely life. " +
        N(9) + "The story's last scenes leap ahead twenty-five years, when Mattie, now a grown woman, learns that Rooster has died just before she could see him again. " +
        N(10) + "Her justice is real, yet it feels more like a debt settled than a victory won." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A", sub: "11.RL.1.A.2",
          stem: "Which statement best expresses the central theme the passage identifies?",
          choices: [
            { letter: "A", text: "Good people are always rewarded in the end." },
            { letter: "B", text: "Every choice carries a cost, even a choice for justice." },
            { letter: "C", text: "Revenge is the only path to peace on the frontier." },
            { letter: "D", text: "Children are safest when they leave things to adults." }
          ],
          correct: "B"
        },
        {
          id: "voiceover",
          sol: "11.RL.2.B", sub: "11.RL.2.B.1",
          stem: "Sentence 1 says the older Mattie is \"heard but not seen.\" This voice-over narration mainly shows that —",
          choices: [
            { letter: "A", text: "Mattie is looking back on events from many years later" },
            { letter: "B", text: "Mattie is too frightened to appear on screen" },
            { letter: "C", text: "the story is happening in the present moment" },
            { letter: "D", text: "someone other than Mattie is telling the story" }
          ],
          correct: "A"
        },
        {
          id: "landscape",
          sol: "11.RL.2.C", sub: "11.RL.2.C.2",
          stem: "The images described in sentence 6 mainly reinforce the idea that —",
          choices: [
            { letter: "A", text: "the frontier was rich, green and welcoming" },
            { letter: "B", text: "winter is the best season for travel" },
            { letter: "C", text: "Mattie enjoys the long journey west" },
            { letter: "D", text: "the world is harsh and help is distant" }
          ],
          correct: "D"
        },
        {
          id: "leap",
          sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "How does the leap ahead in sentence 9 affect the meaning of Mattie's victory?",
          choices: [
            { letter: "A", text: "It reveals that Chaney escaped after all." },
            { letter: "B", text: "It shows Mattie becoming a marshal herself." },
            { letter: "C", text: "It shows the loss and loneliness that followed it." },
            { letter: "D", text: "It undoes the events of the earlier scenes." }
          ],
          correct: "C"
        },
        {
          id: "debt",
          sol: "11.RL.2.D", sub: "11.RL.2.D.2",
          stem: "Sentence 10 suggests that Mattie's success is —",
          choices: [
            { letter: "A", text: "complete and joyful" },
            { letter: "B", text: "real but bittersweet" },
            { letter: "C", text: "only imagined" },
            { letter: "D", text: "unfair to Chaney" }
          ],
          correct: "B"
        },
        {
          id: "notcheap",
          sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO details that support the claim in sentence 4 that justice is \"not cheap.\"",
          choices: [
            { letter: "A", text: "Little Blackie is ridden until it collapses." },
            { letter: "B", text: "The 2010 film opens on a snowy street." },
            { letter: "C", text: "The snakebite costs Mattie her arm." },
            { letter: "D", text: "The older Mattie is heard but not seen." }
          ],
          correct: ["A", "C"]
        }
      ]
    },

    /* ── long ── */
    {
      id: "lit-truegrit-reins-in-teeth",
      family: "LIT", genre: "WESTERN", episode: "truegrit",
      title: "Reins in His Teeth",
      kind: "Screen story · 11.RL",
      blurb: "Rooster's famous charge, LaBoeuf's long shot and the girl watching from the ridge.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "This account follows Charles Portis's novel, which the 2010 film tracks closely. " +
        N(2) + "By the final act of True Grit, Mattie Ross has become a prisoner. " +
        N(3) + "Going down to a stream for water, she had come face to face with Tom Chaney and shot him, but the wound did not stop him, and the outlaw gang he had joined, led by Lucky Ned Pepper, took her captive. " +
        N(4) + "Ned Pepper rode away with three of his men and left Chaney behind to guard her. " +
        N(5) + "Rooster Cogburn and the Texas Ranger LaBoeuf, who had pretended to give up the chase, were not far off." +
        "</p><p>" +
        N(6) + "From a high ridge, Mattie watched the next moments unfold below her. " +
        N(7) + "Rooster rode out alone into a wide meadow and met Ned Pepper and his three men, who sat their horses in a line facing him. " +
        N(8) + "The two old enemies traded a few hard words across the grass. " +
        N(9) + "Then Rooster took the reins between his teeth, raised a gun in each hand and spurred his horse straight at the four riders. " +
        N(10) + "For a few seconds the charge seemed to work, and riders tumbled from their saddles. " +
        N(11) + "But Rooster's horse was hit and crashed down on top of him, pinning his leg, and the wounded Ned Pepper turned back to finish him." +
        "</p><p>" +
        N(12) + "The rescue came from a place no one expected. " +
        N(13) + "LaBoeuf, the Ranger whom Rooster had mocked for days, waited on the ridge with his long rifle, and from hundreds of yards away he fired a single shot that knocked Ned Pepper from his horse. " +
        N(14) + "Moments later Chaney came to and struck LaBoeuf with a rock, Mattie fired her father's revolver, and the kick of the gun sent her tumbling into the pit of snakes." +
        "</p><p>" +
        N(15) + "On the surface, Rooster's charge is the purest image a Western can offer: one man, outnumbered, riding head-on at danger. " +
        N(16) + "It is the showdown audiences expect, and it is the moment people remember from both the 1969 and the 2010 films. " +
        N(17) + "Yet the story quietly undercuts its own legend. " +
        N(18) + "The lone hero does not win alone; he is saved by the partner he scorned, and the heaviest cost falls on the girl who started it all. " +
        N(19) + "Even the way we see the charge is shaped by Mattie, who tells the story many years later. " +
        N(20) + "She watches from far above, so the action looks small, and she reports it in her steady, plain-spoken voice, without boasting or tears. " +
        N(21) + "That distance turns a shoot-out into a memory, something an older woman has turned over many times, admiring the courage but never forgetting the price." +
        "</p>",
      claims: [
        {
          id: "opening",
          sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "How do sentences 2–5 contribute to the structure of the passage?",
          choices: [
            { letter: "A", text: "They explain the situation that leads to Rooster's charge." },
            { letter: "B", text: "They describe Mattie's life twenty-five years later." },
            { letter: "C", text: "They give the reasons Rooster and LaBoeuf quarreled." },
            { letter: "D", text: "They compare the novel with the 1969 film." }
          ],
          correct: "A"
        },
        {
          id: "charge",
          sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "Rooster's actions in sentence 9 mainly reveal his —",
          choices: [
            { letter: "A", text: "careful planning" },
            { letter: "B", text: "fear of Ned Pepper" },
            { letter: "C", text: "reckless courage" },
            { letter: "D", text: "wish to impress LaBoeuf" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "11.RL.2.D", sub: "11.RL.2.D.2",
          stem: "What makes the rescue in paragraph 3 ironic?",
          choices: [
            { letter: "A", text: "LaBoeuf uses a rifle instead of a revolver." },
            { letter: "B", text: "Mattie watches the fight from a ridge." },
            { letter: "C", text: "Ned Pepper is riding at the front of his men." },
            { letter: "D", text: "Rooster is saved by the man he had mocked." }
          ],
          correct: "D"
        },
        {
          id: "archetype",
          sol: "11.RL.3.B", sub: "11.RL.3.B.1",
          stem: "Sentence 15 presents the charge as an example of which archetypal pattern?",
          choices: [
            { letter: "A", text: "the trickster who wins by fooling his enemies" },
            { letter: "B", text: "the lone hero who faces impossible odds" },
            { letter: "C", text: "the innocent who gets lost in a dark forest" },
            { letter: "D", text: "the wise mentor who sends the hero away" }
          ],
          correct: "B"
        },
        {
          id: "undercuts",
          sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 17, the word *undercuts* most nearly means —",
          choices: [
            { letter: "A", text: "strengthens" },
            { letter: "B", text: "calls into question" },
            { letter: "C", text: "repeats word for word" },
            { letter: "D", text: "hides from view" }
          ],
          correct: "B"
        },
        {
          id: "voice",
          sol: "11.RL.2.B", sub: "11.RL.2.B.2",
          stem: "According to paragraph 4, how does Mattie's narration shape the reader's view of the charge?",
          choices: [
            { letter: "A", text: "Her excited voice makes the fight seem like a joke." },
            { letter: "B", text: "She refuses to describe the fight at all." },
            { letter: "C", text: "She claims that she fought beside Rooster." },
            { letter: "D", text: "Her distance and calm turn it into a weighed memory." }
          ],
          correct: "D"
        },
        {
          id: "notalone",
          sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO sentences that best support the claim in sentence 18 that the lone hero does not win alone.",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "theme",
          sol: "11.RL.1.A", sub: "11.RL.1.A.2",
          stem: "Which statement best expresses a theme developed across the whole passage?",
          choices: [
            { letter: "A", text: "Courage is real, but victory depends on others and has a cost." },
            { letter: "B", text: "A true hero never needs help from anyone else." },
            { letter: "C", text: "Old rivals can never learn to work side by side." },
            { letter: "D", text: "Children should watch danger only from far away." }
          ],
          correct: "A"
        }
      ]
    },

    /* ═════════════════════════ 3:10 TO YUMA (episode "yuma") ═════════════════════════ */

    /* ── tiny ── */
    {
      id: "lit-yuma-two-hundred",
      family: "LIT", genre: "WESTERN", episode: "yuma",
      title: "Two Hundred Dollars",
      kind: "Westerns · 11.RL",
      blurb: "A rancher in a drought takes a dangerous job for money he badly needs.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "In 3:10 to Yuma (1957), a long drought is ruining Dan Evans, a rancher in the Arizona Territory. " +
        N(2) + "His cattle are suffering for lack of water, and he needs money to save his herd and his ranch. " +
        N(3) + "When the outlaw Ben Wade is captured, the owner of the stagecoach line offers two hundred dollars to anyone who will help guard him until he can be put on the 3:10 train to the prison at Yuma. " +
        N(4) + "Evans, who is no gunfighter, takes the job." +
        "</p>",
      claims: [
        {
          id: "problem",
          sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "What problem pushes Evans to take a dangerous job?",
          choices: [
            { letter: "A", text: "Ben Wade has threatened his family." },
            { letter: "B", text: "A drought is ruining his ranch." },
            { letter: "C", text: "He has lost his job on the railroad." },
            { letter: "D", text: "The stagecoach line owes him money." }
          ],
          correct: "B"
        },
        {
          id: "nogunfighter",
          sol: "11.RL.1.C", sub: "11.RL.1.C.1",
          stem: "Sentence 4 suggests that Evans —",
          choices: [
            { letter: "A", text: "is taking a risk he is not trained for" },
            { letter: "B", text: "has captured many outlaws before" },
            { letter: "C", text: "is an old friend of Ben Wade's" },
            { letter: "D", text: "owns part of the stagecoach line" }
          ],
          correct: "A"
        },
        {
          id: "drought",
          sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "Based on sentences 1–2, a *drought* is —",
          choices: [
            { letter: "A", text: "a sudden flood" },
            { letter: "B", text: "a disease of cattle" },
            { letter: "C", text: "a long time without rain" },
            { letter: "D", text: "a gang of rustlers" }
          ],
          correct: "C"
        },
        {
          id: "title",
          sol: "11.RL.2.C", sub: "11.RL.2.C.1",
          stem: "The title names a train's departure time. Based on the passage, that time works as —",
          choices: [
            { letter: "A", text: "the hour the drought will end" },
            { letter: "B", text: "the time the bank opens in town" },
            { letter: "C", text: "the hour Ben Wade was captured" },
            { letter: "D", text: "a deadline Evans has to meet" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "11.RL.1.A", sub: "11.RL.1.A.1",
          stem: "Which idea does the passage introduce?",
          choices: [
            { letter: "A", text: "Desperate need can push ordinary people into danger." },
            { letter: "B", text: "Outlaws are always caught by the law in the end." },
            { letter: "C", text: "Trains made ranching easier in dry country." },
            { letter: "D", text: "Wealthy people rarely help their neighbors." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "lit-yuma-rain",
      family: "LIT", genre: "WESTERN", episode: "yuma",
      title: "Rain at Last",
      kind: "Film analysis · 11.RL",
      blurb: "The last shot of 3:10 to Yuma breaks the drought, and means more than weather.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "All through 3:10 to Yuma, the land is dry. " +
        N(2) + "Dust covers the ranch, and scene after scene reminds us how badly the country needs water. " +
        N(3) + "In the final moments, after Dan Evans has finally gotten the outlaw Ben Wade onto the train, the clouds open and rain pours down. " +
        N(4) + "The rain breaks the drought, but it also works as a symbol. " +
        N(5) + "Evans has kept his word and proved his courage, and the storm feels like a reward, a sign that his long ordeal is over." +
        "</p>",
      claims: [
        {
          id: "symbol",
          sol: "11.RL.2.C", sub: "11.RL.2.C.1",
          stem: "In the passage, the rain mainly symbolizes —",
          choices: [
            { letter: "A", text: "danger returning to the town" },
            { letter: "B", text: "Ben Wade's escape from the law" },
            { letter: "C", text: "relief and reward after a hard test" },
            { letter: "D", text: "sorrow over a hero's death" }
          ],
          correct: "C"
        },
        {
          id: "prepare",
          sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "How do sentences 1–2 prepare for the ending?",
          choices: [
            { letter: "A", text: "They establish the drought, so the rain feels meaningful." },
            { letter: "B", text: "They explain why Ben Wade robbed the stagecoach." },
            { letter: "C", text: "They show that the train is running late." },
            { letter: "D", text: "They describe the prison at Yuma in detail." }
          ],
          correct: "A"
        },
        {
          id: "ordeal",
          sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 5, the word *ordeal* means —",
          choices: [
            { letter: "A", text: "a celebration" },
            { letter: "B", text: "a business deal" },
            { letter: "C", text: "a train journey" },
            { letter: "D", text: "a painful trial" }
          ],
          correct: "D"
        },
        {
          id: "evans",
          sol: "11.RL.1.C", sub: "11.RL.1.C.1",
          stem: "According to sentence 5, Evans has shown that he is —",
          choices: [
            { letter: "A", text: "greedy and sly" },
            { letter: "B", text: "honest and brave" },
            { letter: "C", text: "cruel and cold" },
            { letter: "D", text: "foolish and lazy" }
          ],
          correct: "B"
        },
        {
          id: "twomeanings",
          sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Which sentence states directly that the rain has more than one meaning?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "C"
        }
      ]
    },

    /* ── short ── */
    {
      id: "lit-yuma-leonard",
      family: "LIT", genre: "WESTERN", episode: "yuma",
      title: "From Pulp Story to Classic",
      kind: "Film history · 11.RI",
      blurb: "Elmore Leonard's short story, Delmer Daves's film, the Criterion edition and the remake.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "3:10 to Yuma began as a short story by Elmore Leonard, published in a Western pulp magazine in 1953. " +
        N(2) + "Leonard, who later became famous for his crime novels, wrote lean stories built on tense situations and sharp talk. " +
        N(3) + "Director Delmer Daves turned the story into a film in 1957, with Glenn Ford as the smooth, dangerous outlaw Ben Wade and Van Heflin as Dan Evans, the struggling rancher who must guard him. " +
        N(4) + "Daves expanded Leonard's brief story, giving Evans a wife, two sons and a ranch dying in a drought. " +
        N(5) + "The black-and-white film has lasted. " +
        N(6) + "The Criterion Collection, a company known for carefully restored editions of important films, released it with a critical essay, and in 2007 director James Mangold remade it with Russell Crowe as Wade and Christian Bale as Evans." +
        "</p>",
      claims: [
        {
          id: "organize",
          sol: "11.RI.2.A", sub: "11.RI.2.A.1",
          stem: "How does the author organize the passage?",
          choices: [
            { letter: "A", text: "by following the story from its first printing to later versions" },
            { letter: "B", text: "by comparing Leonard's work with that of other writers" },
            { letter: "C", text: "by listing the problems critics found in the film" },
            { letter: "D", text: "by describing a single scene in close detail" }
          ],
          correct: "A"
        },
        {
          id: "expanded",
          sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 4, the word *expanded* means —",
          choices: [
            { letter: "A", text: "shortened and simplified" },
            { letter: "B", text: "made larger by adding material" },
            { letter: "C", text: "translated into another language" },
            { letter: "D", text: "printed in a later magazine" }
          ],
          correct: "B"
        },
        {
          id: "lasted",
          sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Which sentence best supports the idea that the 1957 film is still valued today?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "change",
          sol: "11.RI.1.B", sub: "11.RI.1.B.1",
          stem: "Sentence 4 suggests that the film changed Leonard's story mainly by —",
          choices: [
            { letter: "A", text: "removing the train from the plot" },
            { letter: "B", text: "giving Evans a family and more at stake" },
            { letter: "C", text: "turning Ben Wade into the hero" },
            { letter: "D", text: "moving the action to a large city" }
          ],
          correct: "B"
        },
        {
          id: "remake",
          sol: "11.RI.2.B", sub: "11.RI.2.B.1",
          stem: "Based on sentence 6, a *remake* is —",
          choices: [
            { letter: "A", text: "a restored copy of an old film" },
            { letter: "B", text: "a sequel set many years later" },
            { letter: "C", text: "a new film version of an earlier film" },
            { letter: "D", text: "a novel written from a film's script" }
          ],
          correct: "C"
        },
        {
          id: "facts",
          sol: "11.DSR.B", sub: "11.DSR.B.1",
          stem: "Select TWO facts the passage states about the 1957 film and its makers.",
          choices: [
            { letter: "A", text: "Glenn Ford played the outlaw Ben Wade." },
            { letter: "B", text: "Leonard's story was first printed in 2007." },
            { letter: "C", text: "Delmer Daves directed the 1957 film." },
            { letter: "D", text: "Van Heflin played the outlaw in 1957." }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "lit-yuma-hotel-room",
      family: "LIT", genre: "WESTERN", episode: "yuma",
      title: "The Room in Contention",
      kind: "Film analysis · 11.RL",
      blurb: "A rancher and an outlaw wait out the afternoon in one small hotel room.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Much of 3:10 to Yuma takes place in a single hotel room in the town of Contention, where Dan Evans guards Ben Wade while they wait for the train. " +
        N(2) + "Outside, Wade's gang is gathering. " +
        N(3) + "Inside, the battle is fought with words. " +
        N(4) + "Wade, relaxed and charming, calmly offers Evans more money than the rancher could earn in years if he will only let him go. " +
        N(5) + "Evans, sweating and worried about his family, keeps refusing. " +
        N(6) + "As the afternoon crawls toward 3:10, the camera often frames the two men close together in the cramped room. " +
        N(7) + "The tight framing makes the room feel like a cage, though it is never quite clear which man is the prisoner." +
        "</p>",
      claims: [
        {
          id: "setting",
          sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "Why is the hotel room an effective setting for this part of the story?",
          choices: [
            { letter: "A", text: "It is where Evans first meets his wife." },
            { letter: "B", text: "It traps both men together as danger grows." },
            { letter: "C", text: "It lets Wade's gang hear every word spoken." },
            { letter: "D", text: "It is the only building left in Contention." }
          ],
          correct: "B"
        },
        {
          id: "wade",
          sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "Wade's offer in sentence 4 reveals that he —",
          choices: [
            { letter: "A", text: "has decided to go to prison quietly" },
            { letter: "B", text: "is afraid of Evans and his gun" },
            { letter: "C", text: "has no money of his own to spend" },
            { letter: "D", text: "tries to win by tempting, not fighting" }
          ],
          correct: "D"
        },
        {
          id: "evans",
          sol: "11.RL.1.C", sub: "11.RL.1.C.1",
          stem: "Evans's refusals in sentence 5 show that he is —",
          choices: [
            { letter: "A", text: "honest even when he is tempted" },
            { letter: "B", text: "too greedy to accept a small offer" },
            { letter: "C", text: "careless about his family's future" },
            { letter: "D", text: "secretly working with Wade's gang" }
          ],
          correct: "A"
        },
        {
          id: "cage",
          sol: "11.RL.2.C", sub: "11.RL.2.C.2",
          stem: "In sentence 7, comparing the room to a cage suggests that —",
          choices: [
            { letter: "A", text: "the hotel was once used as a jail" },
            { letter: "B", text: "Wade will soon escape through a window" },
            { letter: "C", text: "Evans is nearly as trapped as his prisoner" },
            { letter: "D", text: "the gang has already locked the door" }
          ],
          correct: "C"
        },
        {
          id: "framing",
          sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "In sentence 6, the film term *frames* refers to how the camera —",
          choices: [
            { letter: "A", text: "moves smoothly along a track" },
            { letter: "B", text: "places people and objects within the shot" },
            { letter: "C", text: "fades one scene into the next" },
            { letter: "D", text: "records the sound of the dialogue" }
          ],
          correct: "B"
        },
        {
          id: "suspense",
          sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO details that build suspense in the passage.",
          choices: [
            { letter: "A", text: "Wade's gang is gathering outside." },
            { letter: "B", text: "Evans is a rancher with a family." },
            { letter: "C", text: "The afternoon crawls toward 3:10." },
            { letter: "D", text: "The film takes place in one town." }
          ],
          correct: ["A", "C"]
        }
      ]
    },

    /* ── medium ── */
    {
      id: "lit-yuma-review",
      family: "LIT", genre: "WESTERN", episode: "yuma",
      title: "The 3:10 Still Runs on Time",
      kind: "Film review · 11.RI",
      blurb: "A critic makes the case that a 1957 Western belongs among the classics.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Plenty of Westerns from the 1950s look dated now, but 3:10 to Yuma (1957) feels as tense as anything made this year. " +
        N(2) + "The Criterion Collection was right to give it a place among its classic editions, and three qualities explain why. " +
        N(3) + "First, the film is a study in pressure rather than action. " +
        N(4) + "Director Delmer Daves spends much of the running time in a hotel room, where a ticking deadline does the work that gunfights do in lesser films. " +
        N(5) + "Second, the two stars play against what we expect. " +
        N(6) + "Glenn Ford makes the outlaw Ben Wade gentle, witty and almost likable, which makes him far more dangerous, while Van Heflin plays the honest rancher Dan Evans as frightened and unsure. " +
        N(7) + "Their quiet duel of wills is more gripping than any shoot-out. " +
        N(8) + "Third, the black-and-white photography turns the drought into a character: the white sky, the cracked earth and the dust that settles on everything. " +
        N(9) + "Some viewers complain that the ending, in which Wade makes a surprising choice that helps Evans, is too neat to believe. " +
        N(10) + "But the film has prepared us for it, showing again and again that Wade respects courage, even in a man who is trying to send him to prison. " +
        N(11) + "When the rain finally falls in the last shot, it feels earned. " +
        N(12) + "The 3:10 still runs on time." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C", sub: "11.RI.1.C.1",
          stem: "Which statement best expresses the reviewer's main claim?",
          choices: [
            { letter: "A", text: "Westerns from the 1950s are too slow for modern viewers." },
            { letter: "B", text: "The 2007 remake improves on the original film." },
            { letter: "C", text: "The 1957 film remains powerful and deserves its classic status." },
            { letter: "D", text: "The film's ending ruins an otherwise strong story." }
          ],
          correct: "C"
        },
        {
          id: "organize",
          sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "How does the reviewer organize support for the main claim?",
          choices: [
            { letter: "A", text: "by giving three reasons in order and then answering a complaint" },
            { letter: "B", text: "by retelling the film's plot from beginning to end" },
            { letter: "C", text: "by comparing three different Westerns from the 1950s" },
            { letter: "D", text: "by asking readers questions and leaving them unanswered" }
          ],
          correct: "A"
        },
        {
          id: "second",
          sol: "11.RI.1.C", sub: "11.RI.1.C.2",
          stem: "Select TWO sentences that give support for the reviewer's second reason, stated in sentence 5.",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "counter",
          sol: "11.RI.1.C", sub: "11.RI.1.C.1",
          stem: "Sentence 9 mainly introduces —",
          choices: [
            { letter: "A", text: "the reviewer's main claim about the film" },
            { letter: "B", text: "a fact about the Criterion Collection" },
            { letter: "C", text: "a summary of Elmore Leonard's story" },
            { letter: "D", text: "a counterclaim the reviewer then answers" }
          ],
          correct: "D"
        },
        {
          id: "paradox",
          sol: "11.RI.2.C", sub: "11.RI.2.C.1",
          stem: "In sentence 6, the reviewer says Wade's gentleness makes him \"far more dangerous.\" This idea is an example of —",
          choices: [
            { letter: "A", text: "a paradox: a seeming contradiction that holds a truth" },
            { letter: "B", text: "sarcasm: praise that is meant as mockery" },
            { letter: "C", text: "understatement: a fact made to seem smaller" },
            { letter: "D", text: "an allusion: a reference to a famous work" }
          ],
          correct: "A"
        },
        {
          id: "ontime",
          sol: "11.RV.1.F", sub: "11.RV.1.F.2",
          stem: "The final sentence of the review most nearly means that —",
          choices: [
            { letter: "A", text: "real trains to Yuma were famous for being punctual" },
            { letter: "B", text: "the film still works for audiences today" },
            { letter: "C", text: "the film runs exactly three hours and ten minutes" },
            { letter: "D", text: "the Criterion edition was released on schedule" }
          ],
          correct: "B"
        }
      ]
    },

    /* ── long ── */
    {
      id: "lit-yuma-walk-to-train",
      family: "LIT", genre: "WESTERN", episode: "yuma",
      title: "The Walk to the Train",
      kind: "Screen story · 11.RL",
      blurb: "Alone, outnumbered and free to quit, a rancher walks his prisoner to the 3:10.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "As three o'clock approaches in 3:10 to Yuma, the rancher Dan Evans has run out of help. " +
        N(2) + "The men hired to guard the outlaw Ben Wade have slipped away one by one, and the one man who stayed beside Evans, the town drunk, has been killed by Wade's gang. " +
        N(3) + "Even the owner of the stagecoach line tells Evans he can quit and still keep his two hundred dollars. " +
        N(4) + "Evans's wife, Alice, who has ridden into town after him, begs him to give up and come home to their sons. " +
        N(5) + "He refuses. " +
        N(6) + "To Evans, the money no longer matters. " +
        N(7) + "A man has died helping him, and walking away now would make that death meaningless; the job has become a matter of honor, not pay." +
        "</p><p>" +
        N(8) + "So the walk begins. " +
        N(9) + "Evans marches Wade out of the hotel with a gun at his back and steers him through alleys and across open ground toward the depot. " +
        N(10) + "Gunmen wait on rooftops and in doorways, and every corner the two men turn could be their last. " +
        N(11) + "The audience, like Evans, can only guess where the next shot will come from, and the short walk seems to last forever." +
        "</p><p>" +
        N(12) + "They reach the tracks just as the train is pulling in, and the gang, which has been waiting for this moment, closes in from all sides. " +
        N(13) + "Evans and Wade are pinned beside the cars, outnumbered, with seconds to spare. " +
        N(14) + "Then the outlaw makes a choice that surprises everyone, perhaps even himself. " +
        N(15) + "Wade tells Evans to jump, and the two men leap together into the baggage car as the train pulls away, leaving the gang behind. " +
        N(16) + "Wade explains that Evans once saved his life, and that he does not like owing anyone. " +
        N(17) + "As the train rolls out of Contention, Alice watches it go, and the first heavy drops of rain begin to fall on the dry country." +
        "</p><p>" +
        N(18) + "The ending can be read in two ways. " +
        N(19) + "On one level, it is the story of a decent man proving his courage, rewarded by the rain his ranch has needed all along. " +
        N(20) + "On another, it is the story of two men changing each other: the honest rancher learns that he can face his fear, and the outlaw learns to respect a kind of honor he had never taken seriously. " +
        N(21) + "The clock that ruled the film has finally run out, and what remains is a choice no clock could force." +
        "</p>",
      claims: [
        {
          id: "setup",
          sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "How does paragraph 1 set up the walk to the train?",
          choices: [
            { letter: "A", text: "It shows that Evans chooses to finish the job though he could quit." },
            { letter: "B", text: "It explains how Ben Wade was first captured by the law." },
            { letter: "C", text: "It describes the prison at Yuma waiting at the end of the line." },
            { letter: "D", text: "It shows the gang deciding to give up and leave town." }
          ],
          correct: "A"
        },
        {
          id: "motive",
          sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "Sentences 6–7 show that Evans's motive has changed from —",
          choices: [
            { letter: "A", text: "duty to money" },
            { letter: "B", text: "money to honor" },
            { letter: "C", text: "fear to anger" },
            { letter: "D", text: "loyalty to revenge" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "11.RL.2.D", sub: "11.RL.2.D.2",
          stem: "What makes Wade's choice at the train ironic?",
          choices: [
            { letter: "A", text: "The train arrives exactly on schedule." },
            { letter: "B", text: "Alice sees the train as it leaves town." },
            { letter: "C", text: "The prisoner helps his guard escape his own gang." },
            { letter: "D", text: "The gang waits on rooftops instead of the street." }
          ],
          correct: "C"
        },
        {
          id: "rain",
          sol: "11.RL.2.C", sub: "11.RL.2.C.2",
          stem: "In paragraph 4, the rain is presented mainly as —",
          choices: [
            { letter: "A", text: "a warning that the gang will return" },
            { letter: "B", text: "a sign that Evans's ranch is lost" },
            { letter: "C", text: "a reason the train must stop" },
            { letter: "D", text: "a reward for Evans's courage" }
          ],
          correct: "D"
        },
        {
          id: "seconds",
          sol: "11.RV.1.E", sub: "11.RV.1.E.1",
          stem: "In sentence 13, the phrase \"with seconds to spare\" means —",
          choices: [
            { letter: "A", text: "with almost no time left" },
            { letter: "B", text: "with plenty of extra time" },
            { letter: "C", text: "with a spare set of guns" },
            { letter: "D", text: "with a second train coming" }
          ],
          correct: "A"
        },
        {
          id: "alone",
          sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO details that show Evans faces danger with no one to back him up.",
          choices: [
            { letter: "A", text: "The hired guards slip away one by one." },
            { letter: "B", text: "The stagecoach owner offers to let him quit." },
            { letter: "C", text: "The gang closes in while he is outnumbered." },
            { letter: "D", text: "Alice watches the train leave Contention." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "theme",
          sol: "11.RL.1.A", sub: "11.RL.1.A.2",
          stem: "Which theme is best supported by the passage as a whole?",
          choices: [
            { letter: "A", text: "Money is the surest reward for hard work." },
            { letter: "B", text: "Courage can earn respect even from an enemy." },
            { letter: "C", text: "Outlaws are never able to change their ways." },
            { letter: "D", text: "Families should stay out of a man's work." }
          ],
          correct: "B"
        },
        {
          id: "final",
          sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "How does the final paragraph differ from the first three?",
          choices: [
            { letter: "A", text: "It introduces a new character to the story." },
            { letter: "B", text: "It flashes back to Wade's capture." },
            { letter: "C", text: "It describes the trip to Yuma prison." },
            { letter: "D", text: "It steps back to interpret what happened." }
          ],
          correct: "D"
        }
      ]
    },

    /* ═════════════════════════ THE BASICS (episode "western") ═════════════════════════ */

    /* ── tiny ── */
    {
      id: "lit-western-elements",
      family: "LIT", genre: "WESTERN", episode: "western",
      title: "What Makes a Western",
      kind: "Westerns · 11.RL",
      blurb: "The setting, the characters, the icons and the showdown.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "A Western is a story set on the American frontier, usually in the second half of the 1800s. " +
        N(2) + "Its heroes and villains are familiar types: the lawman, the outlaw, the rancher, the gunfighter who drifts into town. " +
        N(3) + "The story often sets the young, fragile town against the wild land around it. " +
        N(4) + "Horses, six-guns and wide, empty landscapes act as the genre's icons. " +
        N(5) + "Many Westerns build toward a showdown, in which the hero must live by a code of honor even when it could get him killed." +
        "</p>",
      claims: [
        {
          id: "frontier",
          sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "Based on sentence 1, the *frontier* is —",
          choices: [
            { letter: "A", text: "a large, crowded city" },
            { letter: "B", text: "the edge of settled land" },
            { letter: "C", text: "a farm in the old East" },
            { letter: "D", text: "a fort on the seacoast" }
          ],
          correct: "B"
        },
        {
          id: "types",
          sol: "11.RL.3.B", sub: "11.RL.3.B.1",
          stem: "Sentence 2 lists character types that return in story after story. Such recurring types are called —",
          choices: [
            { letter: "A", text: "archetypes" },
            { letter: "B", text: "allusions" },
            { letter: "C", text: "flashbacks" },
            { letter: "D", text: "settings" }
          ],
          correct: "A"
        },
        {
          id: "conflict",
          sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "According to sentence 3, a common conflict in Westerns sets —",
          choices: [
            { letter: "A", text: "two rival railroads against each other" },
            { letter: "B", text: "parents against their grown children" },
            { letter: "C", text: "farmers against the weather alone" },
            { letter: "D", text: "the town against the wilderness" }
          ],
          correct: "D"
        },
        {
          id: "icons",
          sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 4, the genre's *icons* are —",
          choices: [
            { letter: "A", text: "religious paintings in a church" },
            { letter: "B", text: "small pictures on a computer screen" },
            { letter: "C", text: "objects that come to stand for the genre" },
            { letter: "D", text: "famous actors who starred in Westerns" }
          ],
          correct: "C"
        },
        {
          id: "code",
          sol: "11.RL.1.A", sub: "11.RL.1.A.1",
          stem: "As sentence 5 uses it, a *code of honor* is —",
          choices: [
            { letter: "A", text: "a set of personal rules the hero will not break" },
            { letter: "B", text: "a secret signal used by outlaw gangs" },
            { letter: "C", text: "a list of laws posted in the town" },
            { letter: "D", text: "a reward offered for a captured outlaw" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "lit-western-great-train-robbery",
      family: "LIT", genre: "WESTERN", episode: "western",
      title: "The First Western Hit",
      kind: "Film history · 11.RI",
      blurb: "A 1903 holdup, a chase and a gunshot aimed at the audience.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "One of the first American films to tell a full story was also a Western. " +
        N(2) + "The Great Train Robbery (1903), made by Edwin S. Porter for Thomas Edison's company, ran about twelve minutes. " +
        N(3) + "In it, bandits hold up a train, escape on horseback and are chased down by a posse. " +
        N(4) + "Its most famous shot has nothing to do with the plot: an outlaw aims his gun straight at the camera and fires at the audience. " +
        N(5) + "Oddly, this Western was filmed in New Jersey." +
        "</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "The author includes sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "explain how the bandits were caught" },
            { letter: "B", text: "list the actors who appeared in the film" },
            { letter: "C", text: "describe the shot audiences remember most" },
            { letter: "D", text: "argue that the film was too violent" }
          ],
          correct: "C"
        },
        {
          id: "maker",
          sol: "11.DSR.B", sub: "11.DSR.B.1",
          stem: "According to the passage, who made The Great Train Robbery?",
          choices: [
            { letter: "A", text: "the bandits who robbed a real train" },
            { letter: "B", text: "Edwin S. Porter, for Edison's company" },
            { letter: "C", text: "a studio based in the Old West" },
            { letter: "D", text: "a posse of New Jersey filmmakers" }
          ],
          correct: "B"
        },
        {
          id: "oddly",
          sol: "11.RI.2.C", sub: "11.RI.2.C.1",
          stem: "Which detail does the author present as ironic?",
          choices: [
            { letter: "A", text: "A Western was filmed in New Jersey." },
            { letter: "B", text: "The film ran about twelve minutes." },
            { letter: "C", text: "The bandits escape on horseback." },
            { letter: "D", text: "A posse chases down the bandits." }
          ],
          correct: "A"
        },
        {
          id: "posse",
          sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "Based on sentence 3, a *posse* is —",
          choices: [
            { letter: "A", text: "a crew that repairs railroad tracks" },
            { letter: "B", text: "a set of stolen goods from a robbery" },
            { letter: "C", text: "a type of fast horse used by bandits" },
            { letter: "D", text: "a group of people who chase criminals" }
          ],
          correct: "D"
        },
        {
          id: "conclude",
          sol: "11.RI.1.B", sub: "11.RI.1.B.1",
          stem: "Which conclusion is best supported by the passage?",
          choices: [
            { letter: "A", text: "Early Westerns were always filmed in the real West." },
            { letter: "B", text: "Westerns were part of the movies almost from the start." },
            { letter: "C", text: "Audiences of 1903 preferred films without any story." },
            { letter: "D", text: "Edison invented the Western as a kind of novel." }
          ],
          correct: "B"
        }
      ]
    },

    /* ── short ── */
    {
      id: "lit-western-vocab",
      family: "LIT", genre: "WESTERN", episode: "western",
      title: "The Language of the Frontier",
      kind: "Vocabulary · 11.RV",
      blurb: "Six words for talking about cowboys, settlers and the genre's old myths.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "The classic Western hero is <strong>laconic</strong>: he speaks in few words and lets his actions do the talking. " +
        N(2) + "He often rides into a <strong>lawless</strong> town, where no sheriff or judge can keep order, to protect the <strong>homesteaders</strong> who have claimed land and built farms on the open range. " +
        N(3) + "Critics use the word <strong>iconography</strong> for the genre's familiar images, from the wide-brimmed hat to the saloon's swinging doors. " +
        N(4) + "Over the years these images became so <strong>archetypal</strong> that audiences could recognize a Western from a single shot. " +
        N(5) + "Later filmmakers made <strong>revisionist</strong> Westerns, which take a second, critical look at the old myths and ask who was left out of them." +
        "</p>",
      claims: [
        {
          id: "laconic",
          sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 1, the word *laconic* means —",
          choices: [
            { letter: "A", text: "loud and boastful" },
            { letter: "B", text: "cheerful and friendly" },
            { letter: "C", text: "using very few words" },
            { letter: "D", text: "quick to lose his temper" }
          ],
          correct: "C"
        },
        {
          id: "lawless",
          sol: "11.RV.1.C", sub: "11.RV.1.C.1",
          stem: "The suffix *-less* means \"without.\" A *lawless* town is one —",
          choices: [
            { letter: "A", text: "without any real law or order" },
            { letter: "B", text: "with too many laws to follow" },
            { letter: "C", text: "with a brand-new courthouse" },
            { letter: "D", text: "without enough land to farm" }
          ],
          correct: "A"
        },
        {
          id: "homesteaders",
          sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "Based on sentence 2, *homesteaders* are —",
          choices: [
            { letter: "A", text: "outlaws who hide in empty houses" },
            { letter: "B", text: "lawmen who guard the open range" },
            { letter: "C", text: "travelers passing through on trains" },
            { letter: "D", text: "settlers who claim land and farm it" }
          ],
          correct: "D"
        },
        {
          id: "iconography",
          sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "Which example best fits the meaning of *iconography* in sentence 3?",
          choices: [
            { letter: "A", text: "a long speech the hero gives" },
            { letter: "B", text: "a lawman's badge seen in film after film" },
            { letter: "C", text: "the amount of money a film earns" },
            { letter: "D", text: "the number of minutes a film runs" }
          ],
          correct: "B"
        },
        {
          id: "revisionist",
          sol: "11.RV.1.C", sub: "11.RV.1.C.1",
          stem: "*Revisionist* is built on *revise*, \"to look at again and change.\" A revisionist Western most likely —",
          choices: [
            { letter: "A", text: "copies an older Western shot for shot" },
            { letter: "B", text: "celebrates the old myths without question" },
            { letter: "C", text: "is filmed again after a mistake on set" },
            { letter: "D", text: "questions the old myths of the genre" }
          ],
          correct: "D"
        },
        {
          id: "looks",
          sol: "11.RV.1.A", sub: "11.RV.1.A.2",
          stem: "Select TWO words from the passage that describe how Westerns look and are recognized, rather than a kind of person.",
          choices: [
            { letter: "A", text: "iconography" },
            { letter: "B", text: "homesteaders" },
            { letter: "C", text: "archetypal" },
            { letter: "D", text: "laconic" }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "lit-western-symbols",
      family: "LIT", genre: "WESTERN", episode: "western",
      title: "The Badge, the Clock and the Train",
      kind: "Film analysis · 11.RL",
      blurb: "Three objects that carry the genre's biggest ideas.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Westerns lean on a few objects that carry far more meaning than their size. " +
        N(2) + "The badge, often called a tin star, stands for the law and the duty that comes with it, so a lawman who takes it off is making a statement. " +
        N(3) + "The clock appears whenever time is running out; in High Noon and 3:10 to Yuma, the hands creeping toward a deadline become a symbol of fate closing in. " +
        N(4) + "The train is the most complicated symbol of all. " +
        N(5) + "It brings danger, carrying a killer to town or an outlaw toward prison, but it also stands for progress: the railroad linked the frontier to the cities of the East and helped bring the Wild West to an end. " +
        N(6) + "Because these objects return in film after film, they become motifs, and a single close-up of one can tell a viewer what the story is about." +
        "</p>",
      claims: [
        {
          id: "badge",
          sol: "11.RL.2.C", sub: "11.RL.2.C.1",
          stem: "According to sentence 2, the badge symbolizes —",
          choices: [
            { letter: "A", text: "the wealth a lawman hopes to earn" },
            { letter: "B", text: "the law and the duty it brings" },
            { letter: "C", text: "the danger of the open range" },
            { letter: "D", text: "the friendship between two deputies" }
          ],
          correct: "B"
        },
        {
          id: "train",
          sol: "11.RL.2.C", sub: "11.RL.2.C.2",
          stem: "Why does the author call the train \"the most complicated symbol of all\"?",
          choices: [
            { letter: "A", text: "It appears in more Westerns than any other object." },
            { letter: "B", text: "It is the hardest object to film on location." },
            { letter: "C", text: "It always arrives late in the story." },
            { letter: "D", text: "It stands for both danger and progress." }
          ],
          correct: "D"
        },
        {
          id: "railroad",
          sol: "11.RL.3.A", sub: "11.RL.3.A.1",
          stem: "According to sentence 5, the railroad helped end the Wild West because it —",
          choices: [
            { letter: "A", text: "connected the frontier to the cities of the East" },
            { letter: "B", text: "carried every outlaw in the West to prison" },
            { letter: "C", text: "replaced the badge as a symbol of the law" },
            { letter: "D", text: "made clocks available to every small town" }
          ],
          correct: "A"
        },
        {
          id: "motif",
          sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "Based on sentence 6, a *motif* is —",
          choices: [
            { letter: "A", text: "the main character of a film" },
            { letter: "B", text: "a camera move that follows the action" },
            { letter: "C", text: "an image that recurs and gains meaning" },
            { letter: "D", text: "the final scene of a story" }
          ],
          correct: "C"
        },
        {
          id: "fate",
          sol: "11.RV.1.F", sub: "11.RV.1.F.1",
          stem: "In sentence 3, the phrase \"fate closing in\" suggests that a deadline in these films feels —",
          choices: [
            { letter: "A", text: "easy to ignore" },
            { letter: "B", text: "impossible to stop" },
            { letter: "C", text: "pleasantly exciting" },
            { letter: "D", text: "far in the future" }
          ],
          correct: "B"
        },
        {
          id: "agree",
          sol: "11.RL.2.C", sub: "11.RL.2.C.2",
          stem: "Select TWO statements the author would most likely agree with.",
          choices: [
            { letter: "A", text: "A lawman removing his badge can be a meaningful act." },
            { letter: "B", text: "The train in Westerns always stands for good fortune." },
            { letter: "C", text: "Small objects in Westerns can carry large ideas." },
            { letter: "D", text: "Clocks appear in Westerns only by accident." }
          ],
          correct: ["A", "C"]
        }
      ]
    },

    /* ── medium ── */
    {
      id: "lit-western-three-reasons",
      family: "LIT", genre: "WESTERN", episode: "western",
      title: "Three Reasons to Ride Along",
      kind: "Film review · 11.RI",
      blurb: "A student argues, in three reasons, that Westerns belong in a literature class.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Some students groan when a teacher announces a unit on Westerns, picturing dusty old movies about men in big hats. " +
        N(2) + "But there are three strong reasons the genre belongs in a literature and film class. " +
        N(3) + "First, Westerns are built on some of the oldest story patterns we have. " +
        N(4) + "The stranger who rides in to save a town, the mentor who passes on his duty and the final showdown between good and evil appeared in myths and legends long before they appeared on film. " +
        N(5) + "Second, Westerns are about hard moral choices. " +
        N(6) + "In High Noon, a marshal must decide whether to run or to face death alone, and in 3:10 to Yuma, a poor rancher must decide whether a promise is worth more than money. " +
        N(7) + "Third, the genre changes with the country that makes it. " +
        N(8) + "Westerns of the 1950s reflected fears about loyalty and conformity, while later revisionist Westerns questioned how earlier films had treated Native Americans and glorified violence. " +
        N(9) + "Studying them is a way of studying American history and values. " +
        N(10) + "Critics might argue that Westerns are outdated or that they offer a narrow view of the past. " +
        N(11) + "That is partly true, but it is also the point: noticing what old films left out is one of the most important skills a viewer can learn. " +
        N(12) + "Grab your hat." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C", sub: "11.RI.1.C.1",
          stem: "What is the author's central claim?",
          choices: [
            { letter: "A", text: "Westerns are too old-fashioned for today's students." },
            { letter: "B", text: "Westerns deserve a place in a literature and film class." },
            { letter: "C", text: "High Noon is the greatest Western ever made." },
            { letter: "D", text: "Only revisionist Westerns are worth studying." }
          ],
          correct: "B"
        },
        {
          id: "signals",
          sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "How do the words First, Second and Third in sentences 3, 5 and 7 help the reader?",
          choices: [
            { letter: "A", text: "They signal each reason in the argument." },
            { letter: "B", text: "They list the films in order of release." },
            { letter: "C", text: "They rank the reasons from weakest to strongest." },
            { letter: "D", text: "They mark the steps of a film's plot." }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "11.RI.1.C", sub: "11.RI.1.C.2",
          stem: "Which sentence gives the most specific evidence for the second reason?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "11.RI.1.C", sub: "11.RI.1.C.2",
          stem: "How does the author respond to the counterclaim in sentence 10?",
          choices: [
            { letter: "A", text: "by ignoring it and moving on to a new topic" },
            { letter: "B", text: "by insisting that it is completely false" },
            { letter: "C", text: "by admitting it is partly true and using it as a reason" },
            { letter: "D", text: "by quoting an expert who disagrees with it" }
          ],
          correct: "C"
        },
        {
          id: "times",
          sol: "11.RI.1.B", sub: "11.RI.1.B.1",
          stem: "Sentence 8 supports the third reason by showing that Westerns —",
          choices: [
            { letter: "A", text: "always told the same story in the same way" },
            { letter: "B", text: "reflected the concerns of the years they were made" },
            { letter: "C", text: "were made mostly outside the United States" },
            { letter: "D", text: "stopped being made after the 1950s" }
          ],
          correct: "B"
        },
        {
          id: "techniques",
          sol: "11.RI.2.A", sub: "11.RI.2.A.1",
          stem: "Select TWO techniques the author uses to persuade.",
          choices: [
            { letter: "A", text: "answering a counterclaim" },
            { letter: "B", text: "citing survey statistics" },
            { letter: "C", text: "arranging reasons in sequence" },
            { letter: "D", text: "quoting a famous director" }
          ],
          correct: ["A", "C"]
        }
      ]
    },

    /* ── long ── */
    {
      id: "lit-western-history",
      family: "LIT", genre: "WESTERN", episode: "western",
      title: "A Short History of the Western",
      kind: "Film history · 11.RI",
      blurb: "From a 1903 train robbery to John Ford, spaghetti Westerns and the revisionists.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "The Western is almost as old as the movies themselves. " +
        N(2) + "The Great Train Robbery (1903), a short film made for Thomas Edison's company, thrilled audiences with a holdup, a chase and a gunfight, and it showed that a film could tell a complete story. " +
        N(3) + "Within a few years, cowboy pictures were being made by the hundreds." +
        "</p><p>" +
        N(4) + "In the 1930s and 1940s, studios turned out B Westerns, cheap films shot quickly to fill the second half of a double feature or a Saturday matinee. " +
        N(5) + "Their heroes were clean-cut, rarely doubted themselves and sometimes stopped to sing; singing cowboys such as Gene Autry and Roy Rogers became stars. " +
        N(6) + "The stories were simple: good against evil, with good always winning." +
        "</p><p>" +
        N(7) + "Director John Ford showed that a Western could also be art. " +
        N(8) + "His Stagecoach (1939) made John Wayne a star and introduced audiences to Monument Valley, a desert of red stone towers on the border of Utah and Arizona that Ford returned to again and again. " +
        N(9) + "In Ford's films the landscape is almost a character, huge and indifferent, dwarfing the people who cross it." +
        "</p><p>" +
        N(10) + "After World War II, the genre grew up. " +
        N(11) + "The adult Westerns of the 1950s, such as High Noon (1952) and Ford's The Searchers (1956), gave their heroes doubts, fears and dark sides, and they carried the worries of the early Cold War years. " +
        N(12) + "At the same time, Westerns filled the schedules of the new medium of television." +
        "</p><p>" +
        N(13) + "In the 1960s, the genre crossed the ocean. " +
        N(14) + "The Italian director Sergio Leone made spaghetti Westerns, often filmed in Spain, starring Clint Eastwood as a nameless, squinting gunman. " +
        N(15) + "Films such as The Good, the Bad and the Ugly (1966) replaced the old code of honor with greed and cynicism, and they added Ennio Morricone's strange, unforgettable music, extreme close-ups of eyes and long, silent standoffs." +
        "</p><p>" +
        N(16) + "By the late 1960s, filmmakers had begun to question the myths the genre had built. " +
        N(17) + "These revisionist Westerns, from The Wild Bunch (1969) to Clint Eastwood's Unforgiven (1992), showed violence as ugly and costly rather than heroic. " +
        N(18) + "Others challenged the way classic Westerns had treated Native Americans, who had too often appeared as faceless enemies and were frequently played by white actors." +
        "</p><p>" +
        N(19) + "The Western no longer rules the movie screen, but it has never disappeared. " +
        N(20) + "Remakes such as 3:10 to Yuma (2007) and True Grit (2010) show that each generation returns to the frontier to ask its own questions about justice, violence and what it means to be a hero." +
        "</p>",
      claims: [
        {
          id: "organize",
          sol: "11.RI.2.A", sub: "11.RI.2.A.1",
          stem: "Which choice best describes the overall structure of the passage?",
          choices: [
            { letter: "A", text: "by comparing Westerns with other genres" },
            { letter: "B", text: "in time order, tracing the genre era by era" },
            { letter: "C", text: "as a problem followed by its solution" },
            { letter: "D", text: "from the most famous films to the least" }
          ],
          correct: "B"
        },
        {
          id: "bwestern",
          sol: "11.RI.2.B", sub: "11.RI.2.B.1",
          stem: "Based on paragraph 2, B Westerns were —",
          choices: [
            { letter: "A", text: "cheap, quickly made films to fill out a program" },
            { letter: "B", text: "expensive epics filmed in Monument Valley" },
            { letter: "C", text: "foreign films made in Italy and Spain" },
            { letter: "D", text: "dark films that questioned the genre's myths" }
          ],
          correct: "A"
        },
        {
          id: "ford",
          sol: "11.RI.1.B", sub: "11.RI.1.B.1",
          stem: "According to paragraph 3, what did John Ford show about the Western?",
          choices: [
            { letter: "A", text: "that it worked best on television" },
            { letter: "B", text: "that it needed singing cowboys" },
            { letter: "C", text: "that it could also be a form of art" },
            { letter: "D", text: "that it should be filmed in a studio" }
          ],
          correct: "C"
        },
        {
          id: "landscape",
          sol: "11.RV.1.F", sub: "11.RV.1.F.2",
          stem: "In sentence 9, describing the landscape as \"almost a character\" suggests that in Ford's films the land —",
          choices: [
            { letter: "A", text: "is a pleasant background that viewers ignore" },
            { letter: "B", text: "speaks lines of dialogue to the hero" },
            { letter: "C", text: "is always shown as gentle and welcoming" },
            { letter: "D", text: "has a powerful presence that makes people seem small" }
          ],
          correct: "D"
        },
        {
          id: "adult",
          sol: "11.RL.3.A", sub: "11.RL.3.A.1",
          stem: "According to paragraph 4, how did the adult Westerns of the 1950s reflect their era?",
          choices: [
            { letter: "A", text: "They carried the worries of the early Cold War." },
            { letter: "B", text: "They avoided every serious subject of the day." },
            { letter: "C", text: "They were filmed mostly in Italy and Spain." },
            { letter: "D", text: "They brought back the singing cowboy." }
          ],
          correct: "A"
        },
        {
          id: "spaghetti",
          sol: "11.RI.3.B", sub: "11.RI.3.B.1",
          stem: "How did the spaghetti Westerns differ from the B Westerns described in paragraph 2?",
          choices: [
            { letter: "A", text: "They were shorter and cheaper to make." },
            { letter: "B", text: "They swapped simple good and evil for greed and cynicism." },
            { letter: "C", text: "They featured singing heroes in white hats." },
            { letter: "D", text: "They were made only for television." }
          ],
          correct: "B"
        },
        {
          id: "revision",
          sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO details that show how revisionist Westerns questioned the genre's myths.",
          choices: [
            { letter: "A", text: "They showed violence as ugly and costly." },
            { letter: "B", text: "They used Ennio Morricone's music." },
            { letter: "C", text: "They challenged how Native Americans were shown." },
            { letter: "D", text: "They were filmed in Monument Valley." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "central",
          sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "Which statement best expresses the central idea of the passage?",
          choices: [
            { letter: "A", text: "The Western reached its peak in 1903 and has declined ever since." },
            { letter: "B", text: "John Ford invented every important element of the Western." },
            { letter: "C", text: "Foreign filmmakers ruined the American Western in the 1960s." },
            { letter: "D", text: "The Western has changed with each era yet keeps asking about justice." }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
