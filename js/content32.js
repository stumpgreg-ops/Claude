/* SOL Labyrinth — Grade 9 expansion: 25 tiny packs (50–90 words; 6–8 line poems; paired 35–45 each)
 * for the early nights. Topics: coastal tide pools, a school robotics club, community gardens, a small-town bakery.
 * Original text only; no VDOE / copyrighted material. Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    {
      id: "g9-rl-c32-new-shell",
      family: "G9",
      title: "The New Shell",
      kind: "Literary · 9.RL",
      blurb: "Amara watches a hermit crab make a big decision.",
      level: 1,
      passage:
        "<p>" + N(1) + "Amara crouched beside the tide pool while the water settled. " +
        N(2) + "A hermit crab dragged a cracked shell across the sand, stopping every few inches. " +
        N(3) + "Nearby lay an empty snail shell, smooth and a little larger. " +
        N(4) + "The crab tapped it with one claw, then tapped again, as if knocking on a door. " +
        N(5) + "In one quick motion it slipped out of the old shell and into the new one. " +
        N(6) + "Amara let out the breath she had been holding. " +
        N(7) + "\"Good choice,\" she whispered, though no one was there to hear." +
        "</p>",
      claims: [
        {
          id: "simile",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 4, the comparison as if knocking on a door suggests that the crab is —",
          choices: [
            { letter: "A", text: "testing the shell carefully before entering" },
            { letter: "B", text: "trying to break the empty shell apart" },
            { letter: "C", text: "warning other crabs to stay away" },
            { letter: "D", text: "signaling to Amara that it sees her" }
          ],
          correct: "A"
        },
        {
          id: "why",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Based on the story, why does the crab most likely leave its old shell?",
          choices: [
            { letter: "A", text: "The tide is pulling the old shell out to sea." },
            { letter: "B", text: "Amara has picked up the old shell to look at it." },
            { letter: "C", text: "The old shell is cracked and a larger one is nearby." },
            { letter: "D", text: "Another crab has chased it out of the old shell." }
          ],
          correct: "C"
        },
        {
          id: "amara",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Sentence 6 mainly shows that Amara —",
          choices: [
            { letter: "A", text: "has grown tired of the long wait" },
            { letter: "B", text: "was tense while watching the crab" },
            { letter: "C", text: "is upset that the crab moved away" },
            { letter: "D", text: "was trying to swim in the tide pool" }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "The story is told from the point of view of —",
          choices: [
            { letter: "A", text: "the hermit crab, speaking as I" },
            { letter: "B", text: "Amara, speaking as I" },
            { letter: "C", text: "a narrator who reveals the crab's thoughts" },
            { letter: "D", text: "a third-person narrator who follows Amara" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which idea does the story about the hermit crab most clearly develop?",
          choices: [
            { letter: "A", text: "Animals depend on people to help them survive." },
            { letter: "B", text: "Old belongings should always be kept and repaired." },
            { letter: "C", text: "Quiet attention can reveal small but meaningful events." },
            { letter: "D", text: "Change is dangerous and is best avoided when possible." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c32-tide-zones",
      family: "G9",
      title: "Three Zones",
      kind: "Informational · 9.RI",
      blurb: "Why a rocky shore holds different life at different heights.",
      level: 1,
      passage:
        "<p>" + N(1) + "A rocky shore can be divided into zones based on how often the tide covers them. " +
        N(2) + "The high zone stays dry for most of the day, so only tough creatures such as barnacles live there. " +
        N(3) + "The middle zone is flooded and drained twice daily, and mussels cling to its rocks in thick beds. " +
        N(4) + "The low zone is uncovered only during the lowest tides. " +
        N(5) + "Because it stays wet, it holds the greatest variety of life, from sea urchins to soft anemones. " +
        N(6) + "Each zone, in other words, rewards a different survival skill." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the main idea of the passage about the rocky shore?",
          choices: [
            { letter: "A", text: "Barnacles are the toughest creatures found on any shore." },
            { letter: "B", text: "Shore zones differ in how long they stay underwater, which shapes their life." },
            { letter: "C", text: "The low zone is the best place for visitors to explore at low tide." },
            { letter: "D", text: "Mussels grow in thick beds on rocks that are flooded twice a day." }
          ],
          correct: "B"
        },
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, why does the low zone hold the most variety of life?",
          choices: [
            { letter: "A", text: "It is flooded and drained twice each day." },
            { letter: "B", text: "It is protected from barnacles and mussels." },
            { letter: "C", text: "It is the zone that visitors see most often." },
            { letter: "D", text: "It stays wet nearly all of the time." }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The passage is mainly organized —",
          choices: [
            { letter: "A", text: "by describing the zones in order from highest to lowest" },
            { letter: "B", text: "by comparing two shores in different parts of the world" },
            { letter: "C", text: "by explaining a problem and then offering a solution" },
            { letter: "D", text: "by telling events in the order they happen in one day" }
          ],
          correct: "A"
        },
        {
          id: "s6",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "introduce a fourth zone not yet described" },
            { letter: "B", text: "argue that the high zone is the hardest place to live" },
            { letter: "C", text: "sum up the idea that links all three zones" },
            { letter: "D", text: "explain how the moon causes the tides" }
          ],
          correct: "C"
        },
        {
          id: "cling",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 3, the word cling most nearly means —",
          choices: [
            { letter: "A", text: "float loosely" },
            { letter: "B", text: "hold on tightly" },
            { letter: "C", text: "slowly dissolve" },
            { letter: "D", text: "move quickly" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rv-c32-gear-swap",
      family: "G9",
      title: "The Gear Swap",
      kind: "Vocabulary · 9.RV",
      blurb: "The robot arm keeps dropping cubes until Ifeoma speaks up.",
      level: 2,
      passage:
        "<p>" + N(1) + "The robotics club met in a classroom that smelled of solder and pencil shavings. " +
        N(2) + "Ifeoma made a <strong>tentative</strong> suggestion: maybe the arm kept dropping cubes because the gears were wrong. " +
        N(3) + "Nobody answered at first. " +
        N(4) + "Then Mr. Haddad nodded, and the team began to <strong>dismantle</strong> the arm, laying each screw on a paper towel. " +
        N(5) + "They swapped in a smaller gear <strong>salvaged</strong> from last year's broken robot. " +
        N(6) + "After they took time to <strong>calibrate</strong> the motor, the arm lifted a cube and held it steady." +
        "</p>",
      claims: [
        {
          id: "tentative",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 2, the word tentative most nearly means —",
          choices: [
            { letter: "A", text: "loud and certain" },
            { letter: "B", text: "carefully written" },
            { letter: "C", text: "offered with some doubt" },
            { letter: "D", text: "already tested" }
          ],
          correct: "C"
        },
        {
          id: "dis",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The prefix dis- can mean apart or the reverse of. Knowing this, a reader can tell that to dismantle the arm is to —",
          choices: [
            { letter: "A", text: "take it apart piece by piece" },
            { letter: "B", text: "build a new one from scratch" },
            { letter: "C", text: "paint it a different color" },
            { letter: "D", text: "measure how far it can reach" }
          ],
          correct: "A"
        },
        {
          id: "salvaged",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 5, the word salvaged most nearly means —",
          choices: [
            { letter: "A", text: "bought brand new" },
            { letter: "B", text: "borrowed for a day" },
            { letter: "C", text: "thrown in the trash" },
            { letter: "D", text: "rescued for reuse" }
          ],
          correct: "D"
        },
        {
          id: "calibrate",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "The author could have written fix instead of calibrate in sentence 6. Compared with fix, the word calibrate adds a sense of —",
          choices: [
            { letter: "A", text: "a quick and careless repair" },
            { letter: "B", text: "careful, precise adjustment" },
            { letter: "C", text: "replacing the whole machine" },
            { letter: "D", text: "loud frustration with a task" }
          ],
          correct: "B"
        },
        {
          id: "screws",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The detail in sentence 4 about laying each screw on a paper towel mainly emphasizes that the team is —",
          choices: [
            { letter: "A", text: "careful and organized" },
            { letter: "B", text: "running out of time" },
            { letter: "C", text: "unsure of the plan" },
            { letter: "D", text: "cleaning the classroom" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c32-dawn-oven",
      family: "G9",
      title: "Four A.M. Oven",
      kind: "Poetry · 9.RL",
      blurb: "Eight lines about a baker no customer sees.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Before the street has opened up its eyes,<br>" +
        L(2) + "the baker's window glows a quiet gold.<br>" +
        L(3) + "She folds the dough the way you fold a letter,<br>" +
        L(4) + "pressing in the things that can't be told.<br>" +
        L(5) + "By six, the line is reaching past the corner,<br>" +
        L(6) + "and no one there has seen her at the start.<br>" +
        L(7) + "They only taste the morning she has made them,<br>" +
        L(8) + "still warm, still rising, shaped by hand and heart." +
        "</p>",
      claims: [
        {
          id: "device",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.1",
          stem: "Line 1, Before the street has opened up its eyes, is an example of —",
          choices: [
            { letter: "A", text: "metaphor" },
            { letter: "B", text: "alliteration" },
            { letter: "C", text: "onomatopoeia" },
            { letter: "D", text: "personification" }
          ],
          correct: "D"
        },
        {
          id: "letter",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In line 3, comparing folding dough to folding a letter suggests that the baker —",
          choices: [
            { letter: "A", text: "writes notes to her customers" },
            { letter: "B", text: "puts care and feeling into her work" },
            { letter: "C", text: "works quickly to finish on time" },
            { letter: "D", text: "follows a recipe sent in the mail" }
          ],
          correct: "B"
        },
        {
          id: "line6",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "Lines 5 and 6 suggest that the customers —",
          choices: [
            { letter: "A", text: "do not see the early work behind the bread" },
            { letter: "B", text: "arrive at the shop before the baker does" },
            { letter: "C", text: "are unhappy about waiting in a long line" },
            { letter: "D", text: "help the baker shape the loaves each day" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the poem is best described as —",
          choices: [
            { letter: "A", text: "bitter and tired" },
            { letter: "B", text: "playful and silly" },
            { letter: "C", text: "warm and admiring" },
            { letter: "D", text: "tense and worried" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem about the baker?",
          choices: [
            { letter: "A", text: "Early mornings are the hardest time of day to work." },
            { letter: "B", text: "Unseen effort can be a gift to other people." },
            { letter: "C", text: "Customers should always thank the people who serve them." },
            { letter: "D", text: "Bread tastes best when it is bought in large amounts." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c32-last-match",
      family: "G9",
      title: "Forty Seconds",
      kind: "Literary · 9.RL",
      blurb: "The robot freezes mid-match, and Rina already knows why.",
      level: 2,
      passage:
        "<p>" + N(1) + "With forty seconds left, the robot froze in the middle of the field. " +
        N(2) + "Tomasz jabbed the controller, but the screen only blinked: CONNECTION LOST. " +
        N(3) + "Across the table, his partner Rina was already kneeling by the field wall, reading the robot's lights. " +
        N(4) + "\"It's the battery cable,\" she said calmly. " +
        N(5) + "\"We'll tape it tonight.\" " +
        N(6) + "Tomasz wanted to argue that tonight was too late, that the match was gone. " +
        N(7) + "Instead he set down the controller and started writing her fix in the team notebook." +
        "</p>",
      claims: [
        {
          id: "rina",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Rina in this scene?",
          choices: [
            { letter: "A", text: "She stays calm and looks for a solution." },
            { letter: "B", text: "She blames Tomasz for the lost connection." },
            { letter: "C", text: "She is too upset to say anything useful." },
            { letter: "D", text: "She is unsure what the robot's lights mean." }
          ],
          correct: "A"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer from sentences 6 and 7 that Tomasz —",
          choices: [
            { letter: "A", text: "is angry that Rina interrupted him" },
            { letter: "B", text: "plans to quit the robotics team" },
            { letter: "C", text: "chooses to focus on the next match" },
            { letter: "D", text: "believes this match can still be won" }
          ],
          correct: "C"
        },
        {
          id: "clock",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The detail in sentence 1 that there were forty seconds left mainly emphasizes —",
          choices: [
            { letter: "A", text: "how long the whole match had lasted" },
            { letter: "B", text: "that the robot was the fastest on the field" },
            { letter: "C", text: "that the team had plenty of time to recover" },
            { letter: "D", text: "the pressure of the moment the robot fails" }
          ],
          correct: "D"
        },
        {
          id: "dialogue",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Rina's short lines of dialogue in sentences 4 and 5 mainly show that she —",
          choices: [
            { letter: "A", text: "wants Tomasz to apologize to her" },
            { letter: "B", text: "already sees the problem as fixable" },
            { letter: "C", text: "doubts the team will compete again" },
            { letter: "D", text: "is speaking to the judges, not Tomasz" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the ending of the robotics story best support?",
          choices: [
            { letter: "A", text: "Winning is the only true measure of a team's success." },
            { letter: "B", text: "Machines cannot be trusted during important events." },
            { letter: "C", text: "Arguing is the best response when a plan goes wrong." },
            { letter: "D", text: "Learning from a setback matters more than one loss." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-c32-plot-rules",
      family: "G9",
      title: "Plot Rules",
      kind: "Functional text · 9.RI",
      blurb: "The posted rules for renting a plot at the Linden Street garden.",
      level: 1,
      passage:
        "<p><strong>Linden Street Community Garden: Plot Rules</strong></p>" +
        "<p>" + N(1) + "Each family may rent one plot per season for $15. " +
        N(2) + "Plots must be planted by May 15, or they will be offered to the waiting list. " +
        N(3) + "Water only between 6 and 9 a.m. or after 6 p.m. to reduce evaporation. " +
        N(4) + "Tools in the shed must be cleaned and returned the same day. " +
        N(5) + "Please do not use chemical sprays; the garden is pesticide-free. " +
        N(6) + "Questions? Leave a note in the blue mailbox by the gate." +
        "</p>",
      claims: [
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that more families want plots than the garden has?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The main purpose of the garden rules is to —",
          choices: [
            { letter: "A", text: "explain how gardeners are expected to use the garden" },
            { letter: "B", text: "persuade more families to join the waiting list" },
            { letter: "C", text: "describe the history of the Linden Street garden" },
            { letter: "D", text: "compare this garden with other gardens in town" }
          ],
          correct: "A"
        },
        {
          id: "reason",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The phrase to reduce evaporation in sentence 3 is included to —",
          choices: [
            { letter: "A", text: "describe the weather in the garden in May" },
            { letter: "B", text: "warn that watering is not allowed at all" },
            { letter: "C", text: "explain the reason behind the watering hours" },
            { letter: "D", text: "tell gardeners exactly how much water to use" }
          ],
          correct: "C"
        },
        {
          id: "rake",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "A gardener borrows a rake from the shed at noon. According to the rules, she must —",
          choices: [
            { letter: "A", text: "return it before 9 a.m. the next day" },
            { letter: "B", text: "leave a note in the blue mailbox" },
            { letter: "C", text: "pay a small fee for using it" },
            { letter: "D", text: "clean it and return it that day" }
          ],
          correct: "D"
        },
        {
          id: "evap",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 3, the word evaporation most nearly refers to —",
          choices: [
            { letter: "A", text: "water lost into the air as it warms" },
            { letter: "B", text: "water that runs off onto the path" },
            { letter: "C", text: "rain that falls late in the night" },
            { letter: "D", text: "water stored in barrels by the shed" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-dsr-c32-gentle-hands",
      family: "G9",
      title: "Gentle Hands",
      kind: "Paired texts · 9.DSR",
      blurb: "A park sign and a student's journal about lifting rocks at the shore.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Park Sign at Gull Point</strong></p>" +
        "<p>" + N(1) + "Tide pool animals are alive and easily harmed. " +
        N(2) + "Touch them gently with one wet finger, never pull them from rocks, and return any stone you lift to the exact spot you found it. " +
        N(3) + "Thank you for helping the pools stay healthy.</p>" +
        "<p><strong>Text 2 — From Leilani's Field Journal</strong></p>" +
        "<p>" + N(4) + "Today I lifted a flat rock and found six tiny crabs underneath. " +
        N(5) + "They scattered so fast I almost dropped it. " +
        N(6) + "I set the rock back carefully, the same side down, because the crabs need that shade. " +
        N(7) + "Now I understand why the sign says exact spot." +
        "</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea do the sign and the journal both support?",
          choices: [
            { letter: "A", text: "Tide pool crabs are dangerous to touch." },
            { letter: "B", text: "Visitors should never lift rocks at all." },
            { letter: "C", text: "Returning rocks carefully protects pool life." },
            { letter: "D", text: "Field journals are the best way to learn." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Compared with Text 1, Text 2 is more —",
          choices: [
            { letter: "A", text: "personal, describing one visitor's experience" },
            { letter: "B", text: "official, listing rules for every visitor" },
            { letter: "C", text: "scientific, giving exact measurements" },
            { letter: "D", text: "critical of the rules the park has set" }
          ],
          correct: "A"
        },
        {
          id: "combine",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "A reader combining both texts could best conclude that Leilani —",
          choices: [
            { letter: "A", text: "ignored the sign until a ranger warned her" },
            { letter: "B", text: "followed the sign and came to see its reason" },
            { letter: "C", text: "thinks the sign's rules are far too strict" },
            { letter: "D", text: "had never visited a tide pool before today" }
          ],
          correct: "B"
        },
        {
          id: "shade",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "In sentence 6, the phrase because the crabs need that shade mainly —",
          choices: [
            { letter: "A", text: "describes where the crabs lived before" },
            { letter: "B", text: "shows that Leilani was afraid of the crabs" },
            { letter: "C", text: "explains why the crabs scattered so fast" },
            { letter: "D", text: "gives the reason for how she set the rock down" }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which TWO sentences together best show that the writer of Text 2 acted on the advice in Text 1? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: ["B", "D"]
        }
      ]
    },
    {
      id: "g9-rl-c32-flour-dust",
      family: "G9",
      title: "Flat Rolls",
      kind: "Drama · 9.RL",
      blurb: "Nadia's rolls did not rise, and Mr. Okafor asks one question.",
      level: 2,
      passage:
        "<p><em>Setting: a small bakery an hour before opening. NADIA, sixteen, stares at a tray of flat, pale rolls.</em></p>" +
        "<p>" + N(1) + "<strong>NADIA</strong>: They didn't rise. " +
        N(2) + "Not one of them. " +
        N(3) + "<strong>MR. OKAFOR</strong> <em>(tying his apron, not looking up)</em>: Did you check the date on the yeast? " +
        N(4) + "<strong>NADIA</strong> <em>(aside, to the audience)</em>: If I say no, he'll never let me bake alone again. " +
        N(5) + "<strong>NADIA</strong> <em>(aloud, quietly)</em>: I forgot. " +
        N(6) + "<strong>MR. OKAFOR</strong> <em>(sliding a fresh jar across the counter)</em>: Good. " +
        N(7) + "Now you'll never forget." +
        "</p>",
      claims: [
        {
          id: "aside",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The playwright uses Nadia's aside in sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "reveal her private fear about the mistake" },
            { letter: "B", text: "tell Mr. Okafor the truth about the yeast" },
            { letter: "C", text: "show that she already knows the yeast date" },
            { letter: "D", text: "explain to the audience how rolls are made" }
          ],
          correct: "A"
        },
        {
          id: "direction",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction not looking up in sentence 3 mainly suggests that Mr. Okafor —",
          choices: [
            { letter: "A", text: "is too angry to look at Nadia" },
            { letter: "B", text: "did not hear what Nadia said" },
            { letter: "C", text: "is ignoring Nadia's problem entirely" },
            { letter: "D", text: "treats the problem as ordinary, not alarming" }
          ],
          correct: "D"
        },
        {
          id: "okafor",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Mr. Okafor's reply in sentences 6 and 7 best shows that he —",
          choices: [
            { letter: "A", text: "plans to stop Nadia from baking" },
            { letter: "B", text: "sees the mistake as a useful lesson" },
            { letter: "C", text: "is pleased that the rolls were ruined" },
            { letter: "D", text: "believes Nadia is not telling the truth" }
          ],
          correct: "B"
        },
        {
          id: "cause",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Based on the scene, why did the rolls most likely fail to rise?",
          choices: [
            { letter: "A", text: "The oven had been set too hot." },
            { letter: "B", text: "Nadia added far too much flour." },
            { letter: "C", text: "The yeast was too old to work." },
            { letter: "D", text: "Mr. Okafor changed the recipe." }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of Mr. Okafor's final line is best described as —",
          choices: [
            { letter: "A", text: "harsh and scolding" },
            { letter: "B", text: "nervous and unsure" },
            { letter: "C", text: "sarcastic and cold" },
            { letter: "D", text: "gentle and encouraging" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-c32-lawn-garden",
      family: "G9",
      title: "Dig Up the East Lawn",
      kind: "Argument · 9.RI",
      blurb: "A student argues that an unused lawn should become a garden.",
      level: 3,
      passage:
        "<p>" + N(1) + "Our school spends thousands of dollars each year mowing a lawn that no one uses. " +
        N(2) + "Replacing the east lawn with a vegetable garden would cost less to maintain and give science classes a living laboratory. " +
        N(3) + "Some argue that gardens attract pests, but a district study of four schools with gardens found no increase in pest complaints. " +
        N(4) + "Students could also help supply the cafeteria salad bar. " +
        N(5) + "A lawn is pleasant to look at; a garden is worth learning from." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the author's main claim?",
          choices: [
            { letter: "A", text: "Mowing is the school's largest yearly expense." },
            { letter: "B", text: "The school should turn the east lawn into a garden." },
            { letter: "C", text: "Pests are a serious problem at schools with gardens." },
            { letter: "D", text: "Science classes need more laboratory equipment." }
          ],
          correct: "B"
        },
        {
          id: "research",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence provides research evidence for the author's argument?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "C"
        },
        {
          id: "counter",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "The author mentions that some argue gardens attract pests mainly to —",
          choices: [
            { letter: "A", text: "admit that the plan has a serious flaw" },
            { letter: "B", text: "change the topic to the cafeteria" },
            { letter: "C", text: "show that experts disagree about lawns" },
            { letter: "D", text: "answer an objection readers may have" }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which statement from the passage is closest to an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "A lawn is pleasant to look at; a garden is worth learning from." },
            { letter: "B", text: "A district study of four schools found no increase in pest complaints." },
            { letter: "C", text: "Our school spends thousands of dollars each year mowing a lawn." },
            { letter: "D", text: "Some argue that gardens attract pests to school grounds." }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.1",
          stem: "The final sentence of the argument is organized mainly as —",
          choices: [
            { letter: "A", text: "a list of steps in a process" },
            { letter: "B", text: "a contrast that sums up the case" },
            { letter: "C", text: "a cause followed by its effect" },
            { letter: "D", text: "a question for readers to answer" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c32-starter",
      family: "G9",
      title: "The Living Jar",
      kind: "Informational · 9.RI",
      blurb: "What is really happening inside a sourdough starter.",
      level: 2,
      passage:
        "<p>" + N(1) + "A sourdough starter looks like a jar of plain paste, but it is crowded with life. " +
        N(2) + "Wild yeasts and bacteria from flour and the air feed on the starches in the mixture. " +
        N(3) + "As the yeasts eat, they release carbon dioxide, which forms the bubbles that make bread rise. " +
        N(4) + "The bacteria, meanwhile, produce acids that give the bread its sour flavor. " +
        N(5) + "A baker must feed the starter fresh flour and water every day; otherwise, the microbes run out of food and the starter turns sluggish." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the passage?",
          choices: [
            { letter: "A", text: "Bakers must feed their starters flour and water every day." },
            { letter: "B", text: "Carbon dioxide is a gas that yeast gives off as it eats." },
            { letter: "C", text: "Sourdough bread is healthier than other kinds of bread." },
            { letter: "D", text: "A starter's living microbes make bread rise and taste sour." }
          ],
          correct: "D"
        },
        {
          id: "sour",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, what gives sourdough bread its sour flavor?",
          choices: [
            { letter: "A", text: "acids made by bacteria" },
            { letter: "B", text: "bubbles of carbon dioxide" },
            { letter: "C", text: "the fresh flour added daily" },
            { letter: "D", text: "starches left in the jar" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "Sentences 2 through 4 are organized mainly to show —",
          choices: [
            { letter: "A", text: "the steps, in order, for baking one loaf" },
            { letter: "B", text: "a comparison of two different recipes" },
            { letter: "C", text: "how the microbes' activity changes the bread" },
            { letter: "D", text: "a problem bakers face and how they solve it" }
          ],
          correct: "C"
        },
        {
          id: "sluggish",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 5, the word sluggish most nearly means —",
          choices: [
            { letter: "A", text: "sticky and wet" },
            { letter: "B", text: "slow and inactive" },
            { letter: "C", text: "sour and strong" },
            { letter: "D", text: "fresh and new" }
          ],
          correct: "B"
        },
        {
          id: "opening",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author begins with the contrast in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "show that a starter is more than it seems" },
            { letter: "B", text: "explain how to make paste at home" },
            { letter: "C", text: "warn readers that starters are unsafe" },
            { letter: "D", text: "describe the shape of the starter's jar" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c32-borrowed-seeds",
      family: "G9",
      title: "Saved 1998",
      kind: "Literary · 9.RL",
      blurb: "Dalia finds an old coffee can of seeds by a neighbor's empty plot.",
      level: 3,
      passage:
        "<p>" + N(1) + "Mr. Sato's plot had grown nothing but weeds since his knee surgery, and the garden committee had started using the word abandoned. " +
        N(2) + "Then, one Saturday, Dalia found a coffee can by his gate, labeled in shaky capitals: BEANS, SAVED 1998. " +
        N(3) + "She planted them in neat rows, not knowing whether seeds that old could still wake. " +
        N(4) + "By July, vines had climbed his fence. " +
        N(5) + "Mr. Sato came on a cane, touched one pod, and said nothing for a long time." +
        "</p>",
      claims: [
        {
          id: "abandoned",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "The detail in sentence 1 that the committee had started using the word abandoned mainly emphasizes that —",
          choices: [
            { letter: "A", text: "the committee cared deeply about Mr. Sato" },
            { letter: "B", text: "weeds were the committee's main concern" },
            { letter: "C", text: "Mr. Sato was at risk of losing his plot" },
            { letter: "D", text: "Mr. Sato had chosen to give up gardening" }
          ],
          correct: "C"
        },
        {
          id: "wake",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 3, the phrase whether seeds that old could still wake suggests that the seeds —",
          choices: [
            { letter: "A", text: "had been soaked in water overnight" },
            { letter: "B", text: "might be resting but still alive" },
            { letter: "C", text: "were planted too early in the year" },
            { letter: "D", text: "would make a sound as they sprouted" }
          ],
          correct: "B"
        },
        {
          id: "dalia",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Dalia's actions in the story best show that she is —",
          choices: [
            { letter: "A", text: "quietly generous toward a neighbor" },
            { letter: "B", text: "eager to take over Mr. Sato's plot" },
            { letter: "C", text: "careless with other people's things" },
            { letter: "D", text: "an expert on growing very old seeds" }
          ],
          correct: "A"
        },
        {
          id: "silence",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer that Mr. Sato's long silence in sentence 5 shows that he is —",
          choices: [
            { letter: "A", text: "angry that someone used his seeds" },
            { letter: "B", text: "confused about what the vines are" },
            { letter: "C", text: "tired from the long walk with a cane" },
            { letter: "D", text: "too moved by the sight to speak" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is best supported by the story about the beans?",
          choices: [
            { letter: "A", text: "Old things are rarely worth the trouble of saving." },
            { letter: "B", text: "Care can bring back what seemed to be lost." },
            { letter: "C", text: "Committees should never judge a neighbor's garden." },
            { letter: "D", text: "Gardening is too difficult for people after surgery." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rv-c32-anemone",
      family: "G9",
      title: "When the Tide Retreats",
      kind: "Vocabulary · 9.RV",
      blurb: "Mateo and his sister explore the pools at low tide.",
      level: 1,
      passage:
        "<p>" + N(1) + "When the tide began its <strong>retreat</strong>, Mateo and his little sister hurried down to the rocks. " +
        N(2) + "Pools that had been <strong>submerged</strong> all morning now sat open to the sky. " +
        N(3) + "Green anemones were <strong>abundant</strong>, crowding every crack in the stone. " +
        N(4) + "Their <strong>vibrant</strong> colors looked as though someone had painted them that very morning. " +
        N(5) + "\"Don't poke them,\" Mateo warned. " +
        N(6) + "\"They're more <strong>fragile</strong> than they look.\"" +
        "</p>",
      claims: [
        {
          id: "retreat",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 1, the word retreat most nearly means —",
          choices: [
            { letter: "A", text: "moving back" },
            { letter: "B", text: "a quiet vacation" },
            { letter: "C", text: "a sudden storm" },
            { letter: "D", text: "rising higher" }
          ],
          correct: "A"
        },
        {
          id: "sub",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The prefix sub- in submerged means under. Pools that had been submerged were pools that were —",
          choices: [
            { letter: "A", text: "dried out by the sun" },
            { letter: "B", text: "full of green anemones" },
            { letter: "C", text: "covered by seawater" },
            { letter: "D", text: "hidden beneath rocks" }
          ],
          correct: "C"
        },
        {
          id: "abundant",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which words in sentence 3 best help the reader understand the meaning of abundant?",
          choices: [
            { letter: "A", text: "Green anemones were" },
            { letter: "B", text: "crowding every crack" },
            { letter: "C", text: "in the stone" },
            { letter: "D", text: "anemones were" }
          ],
          correct: "B"
        },
        {
          id: "vibrant",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "The author could have written bright instead of vibrant in sentence 4. Compared with bright, the word vibrant adds a sense of —",
          choices: [
            { letter: "A", text: "danger and warning" },
            { letter: "B", text: "dullness and age" },
            { letter: "C", text: "coldness and distance" },
            { letter: "D", text: "energy and liveliness" }
          ],
          correct: "D"
        },
        {
          id: "fragile",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 6, the word fragile most nearly means —",
          choices: [
            { letter: "A", text: "very heavy" },
            { letter: "B", text: "quick to move" },
            { letter: "C", text: "easily damaged" },
            { letter: "D", text: "brightly colored" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c32-echo-sensor",
      family: "G9",
      title: "Seeing with Sound",
      kind: "Informational · 9.RI",
      blurb: "How a student robot measures distance, and where the method fails.",
      level: 3,
      passage:
        "<p>" + N(1) + "Many student robots sense their surroundings with ultrasonic sensors, which work much like a bat's echolocation. " +
        N(2) + "The sensor sends out a burst of sound too high for human ears, then listens for the echo. " +
        N(3) + "By measuring how long the echo takes to return, the robot calculates the distance to an object. " +
        N(4) + "The method has limits, however. " +
        N(5) + "Soft surfaces such as curtains absorb sound instead of reflecting it, so a robot may fail to detect them. " +
        N(6) + "For this reason, teams often pair ultrasonic sensors with cameras or touch switches." +
        "</p>",
      claims: [
        {
          id: "bat",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The comparison to a bat in sentence 1 helps the reader understand that ultrasonic sensors —",
          choices: [
            { letter: "A", text: "work best in dark rooms at night" },
            { letter: "B", text: "find objects by sending out sound" },
            { letter: "C", text: "are modeled on the eyes of animals" },
            { letter: "D", text: "help robots move over obstacles" }
          ],
          correct: "B"
        },
        {
          id: "shift",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "Sentence 4 marks a shift in the passage from —",
          choices: [
            { letter: "A", text: "a short story to a set of instructions" },
            { letter: "B", text: "the author's opinion to a list of facts" },
            { letter: "C", text: "a solution back to the original problem" },
            { letter: "D", text: "how the sensor works to its weaknesses" }
          ],
          correct: "D"
        },
        {
          id: "curtain",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, why might a robot fail to detect a curtain?",
          choices: [
            { letter: "A", text: "The curtain soaks up the sound instead of echoing it." },
            { letter: "B", text: "The curtain is usually too far away from the robot." },
            { letter: "C", text: "The sensor's sound is too high for curtains to hear." },
            { letter: "D", text: "Cameras on the robot block the sensor's signal." }
          ],
          correct: "A"
        },
        {
          id: "summary",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best summarizes the passage?",
          choices: [
            { letter: "A", text: "Bats taught engineers how to build the first robots for schools." },
            { letter: "B", text: "Curtains and other soft objects are the main problem robot teams face." },
            { letter: "C", text: "Ultrasonic sensors measure distance by echo but work best with other sensors." },
            { letter: "D", text: "Cameras have now replaced ultrasonic sensors on most student robots." }
          ],
          correct: "C"
        },
        {
          id: "support",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best explains why teams pair ultrasonic sensors with other tools, as described in sentence 6?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c32-compost",
      family: "G9",
      title: "The Heap Behind the Shed",
      kind: "Poetry · 9.RL",
      blurb: "Eight lines about what the garden does with what we throw away.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The garden keeps a heap behind the shed<br>" +
        L(2) + "of peels and coffee grounds and fallen leaves,<br>" +
        L(3) + "the things the kitchen called finished, the things we said<br>" +
        L(4) + "were done. All winter long the dark pile breathes.<br>" +
        L(5) + "In April, we turn it with a fork and find<br>" +
        L(6) + "not trash but soil, crumbling, sweet, and black,<br>" +
        L(7) + "as if the year had kept what we left behind<br>" +
        L(8) + "and quietly been waiting to give it back." +
        "</p>",
      claims: [
        {
          id: "breathes",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.1",
          stem: "In line 4, saying that the dark pile breathes is an example of —",
          choices: [
            { letter: "A", text: "hyperbole" },
            { letter: "B", text: "alliteration" },
            { letter: "C", text: "personification" },
            { letter: "D", text: "onomatopoeia" }
          ],
          correct: "C"
        },
        {
          id: "image",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "The image in lines 7 and 8 mainly suggests that —",
          choices: [
            { letter: "A", text: "what seems wasted can return as something useful" },
            { letter: "B", text: "the gardeners forgot about the heap all winter" },
            { letter: "C", text: "winter destroys everything left in the garden" },
            { letter: "D", text: "the year will end before the spring arrives" }
          ],
          correct: "A"
        },
        {
          id: "halves",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.2",
          stem: "How does the second half of the poem (lines 5–8) differ from the first half (lines 1–4)?",
          choices: [
            { letter: "A", text: "It moves from the garden into the kitchen." },
            { letter: "B", text: "It changes from a hopeful to a hopeless mood." },
            { letter: "C", text: "It describes summer instead of the winter." },
            { letter: "D", text: "It shows the waste turned into rich soil." }
          ],
          correct: "D"
        },
        {
          id: "line3",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "Line 3 suggests that the people in the poem once thought the peels and leaves were —",
          choices: [
            { letter: "A", text: "valuable and rare" },
            { letter: "B", text: "useless and finished" },
            { letter: "C", text: "ready to be eaten" },
            { letter: "D", text: "too heavy to move" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem about the compost heap?",
          choices: [
            { letter: "A", text: "An ending can hold the start of something new." },
            { letter: "B", text: "Gardens need much more care during winter." },
            { letter: "C", text: "People throw away far too much of their food." },
            { letter: "D", text: "Spring is the most beautiful time of the year." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-dsr-c32-main-street",
      family: "G9",
      title: "Closing Time on Main Street",
      kind: "Paired texts · 9.DSR",
      blurb: "A baker's farewell sign and a news item about the same closing.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Sign in the Window of Rosa's Bakery</strong></p>" +
        "<p>" + N(1) + "After thirty-one years, Rosa's will close on June 30. " +
        N(2) + "My hands are tired, but my heart is full. " +
        N(3) + "Thank you for every birthday cake, every Sunday loaf, and every child who pressed a nose to this glass.</p>" +
        "<p><strong>Text 2 — From the Millbrook Weekly</strong></p>" +
        "<p>" + N(4) + "Rosa's Bakery, a Main Street fixture since the 1990s, will close in June. " +
        N(5) + "The town has no other bakery, and the council may offer a grant to a new owner. " +
        N(6) + "Several residents spoke about the shop at Tuesday's meeting." +
        "</p>",
      claims: [
        {
          id: "tone",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Compared with Text 2, Text 1 sounds more —",
          choices: [
            { letter: "A", text: "neutral and factual" },
            { letter: "B", text: "angry and demanding" },
            { letter: "C", text: "personal and grateful" },
            { letter: "D", text: "uncertain and confused" }
          ],
          correct: "C"
        },
        {
          id: "shared",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea do the window sign and the news item both support?",
          choices: [
            { letter: "A", text: "The bakery has mattered to the community." },
            { letter: "B", text: "Rosa plans to sell the shop to a new owner." },
            { letter: "C", text: "The council has already approved a grant." },
            { letter: "D", text: "Rosa is closing because sales have dropped." }
          ],
          correct: "A"
        },
        {
          id: "feeling",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence expresses personal feeling rather than factual information?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "B"
        },
        {
          id: "conclude",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "A reader combining both texts could best conclude that —",
          choices: [
            { letter: "A", text: "Rosa is closing because the council refused to help" },
            { letter: "B", text: "Rosa will reopen the bakery herself in July" },
            { letter: "C", text: "both customers and town leaders care what happens next" },
            { letter: "D", text: "the town already has a firm plan to replace the bakery" }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "9.DSR.C",
          sub: "9.DSR.C.1",
          stem: "Which TWO sentences best show what the bakery has meant to the people of Millbrook? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: ["B", "D"]
        }
      ]
    },
    {
      id: "g9-rl-c32-first-shift",
      family: "G9",
      title: "First Shift",
      kind: "Literary · 9.RL",
      blurb: "Kofi's first morning in his grandmother's bakery.",
      level: 1,
      passage:
        "<p>" + N(1) + "At five in the morning, Kofi stood in his grandmother's bakery holding a broom he did not need. " +
        N(2) + "\"Sweep later,\" Nana Ama said, handing him a ball of dough. " +
        N(3) + "\"First, learn to knead.\" " +
        N(4) + "He pushed and folded until his arms ached, and the dough stuck to everything. " +
        N(5) + "Nana Ama only laughed and dusted his hands with flour. " +
        N(6) + "By six, his dough was smooth, and he felt taller than the counter." +
        "</p>",
      claims: [
        {
          id: "broom",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Sentence 1 suggests that Kofi feels —",
          choices: [
            { letter: "A", text: "angry about waking up so early" },
            { letter: "B", text: "proud of his sweeping skills" },
            { letter: "C", text: "eager to leave and go home" },
            { letter: "D", text: "unsure of what he should do" }
          ],
          correct: "D"
        },
        {
          id: "nana",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Nana Ama?",
          choices: [
            { letter: "A", text: "She is strict and impatient with mistakes." },
            { letter: "B", text: "She is patient and encouraging with Kofi." },
            { letter: "C", text: "She is too busy to notice what Kofi does." },
            { letter: "D", text: "She is worried about the messy dough." }
          ],
          correct: "B"
        },
        {
          id: "taller",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 6, the phrase he felt taller than the counter mainly suggests that Kofi —",
          choices: [
            { letter: "A", text: "has grown during the long morning" },
            { letter: "B", text: "is standing on a stool to work" },
            { letter: "C", text: "feels proud of what he has learned" },
            { letter: "D", text: "wants to reach the highest shelf" }
          ],
          correct: "C"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "From whose point of view is the bakery story told?",
          choices: [
            { letter: "A", text: "a third-person narrator who focuses on Kofi" },
            { letter: "B", text: "Nana Ama, who tells the story as I" },
            { letter: "C", text: "Kofi, who tells the story as I" },
            { letter: "D", text: "a customer watching from the bakery doorway" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the story about Kofi best develop?",
          choices: [
            { letter: "A", text: "Hard work matters less than natural talent in a kitchen." },
            { letter: "B", text: "Learning a new skill takes effort but builds confidence." },
            { letter: "C", text: "Grandparents should never laugh at a child's first mistakes." },
            { letter: "D", text: "Bakeries are noisy and crowded places in the early morning." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c32-tool-crib",
      family: "G9",
      title: "Tool Crib Procedures",
      kind: "Functional text · 9.RI",
      blurb: "The posted rules for borrowing tools in the robotics lab.",
      level: 2,
      passage:
        "<p><strong>Westbrook High Robotics: Tool Crib Procedures</strong></p>" +
        "<p>" + N(1) + "<strong>Sign out:</strong> Write your name, the tool, and the time on the clipboard before removing any tool. " +
        N(2) + "<strong>Safety:</strong> Wear safety glasses whenever you use the drill press or the band saw. " +
        N(3) + "<strong>Return:</strong> All tools must be back on the pegboard by 5:15 p.m. " +
        N(4) + "<strong>Damage:</strong> Report a broken tool to a mentor right away; do not try to repair it yourself. " +
        N(5) + "Members who leave tools out twice will lose crib privileges for one week." +
        "</p>",
      claims: [
        {
          id: "before",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the procedures, what must a member do before taking a tool?",
          choices: [
            { letter: "A", text: "ask a mentor for permission to use it" },
            { letter: "B", text: "put on a pair of safety glasses" },
            { letter: "C", text: "write their name, the tool, and the time" },
            { letter: "D", text: "check the pegboard for broken tools" }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The tool crib procedures are organized mainly —",
          choices: [
            { letter: "A", text: "by topic, with a bold label for each rule" },
            { letter: "B", text: "in time order from morning until night" },
            { letter: "C", text: "as a problem followed by its solution" },
            { letter: "D", text: "as a comparison of two different labs" }
          ],
          correct: "A"
        },
        {
          id: "snap",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Jamal's screwdriver snaps while he is using it. Which rule tells him what to do?",
          choices: [
            { letter: "A", text: "the Sign out rule in sentence 1" },
            { letter: "B", text: "the Safety rule in sentence 2" },
            { letter: "C", text: "the Return rule in sentence 3" },
            { letter: "D", text: "the Damage rule in sentence 4" }
          ],
          correct: "D"
        },
        {
          id: "privileges",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 5, the word privileges most nearly means —",
          choices: [
            { letter: "A", text: "punishments for breaking rules" },
            { letter: "B", text: "special rights that can be taken away" },
            { letter: "C", text: "tools that are kept in the crib" },
            { letter: "D", text: "meetings held once each week" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The main purpose of the tool crib procedures is to —",
          choices: [
            { letter: "A", text: "persuade more students to join robotics" },
            { letter: "B", text: "describe how a drill press really works" },
            { letter: "C", text: "explain how members should use shared tools" },
            { letter: "D", text: "tell the story of a tool that was broken" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rv-c32-volunteer-squash",
      family: "G9",
      title: "The Volunteer",
      kind: "Vocabulary · 9.RV",
      blurb: "A squash nobody planted takes over the Rivera Street garden.",
      level: 3,
      passage:
        "<p>" + N(1) + "Gardeners call a plant that sprouts on its own a <strong>volunteer</strong>, and this summer the Rivera Street garden had a famous one. " +
        N(2) + "A squash vine rose from last year's compost and proved more <strong>prolific</strong> than any plant anyone had sown on purpose. " +
        N(3) + "Its <strong>sprawling</strong> leaves crossed three plots and a path. " +
        N(4) + "Mrs. Lindqvist was <strong>skeptical</strong> that anything so wild could taste good. " +
        N(5) + "Still, by August a squash on her porch seemed <strong>inevitable</strong>, and she admitted it made excellent soup." +
        "</p>",
      claims: [
        {
          id: "volunteer",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 1, the word volunteer refers to —",
          choices: [
            { letter: "A", text: "a plant that grows without being planted" },
            { letter: "B", text: "a person who works without being paid" },
            { letter: "C", text: "a packet of seeds bought at a store" },
            { letter: "D", text: "a gardener who plants only squash" }
          ],
          correct: "A"
        },
        {
          id: "prolific",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 2, the word prolific most nearly means —",
          choices: [
            { letter: "A", text: "growing very slowly" },
            { letter: "B", text: "planted by hand" },
            { letter: "C", text: "hard to see" },
            { letter: "D", text: "producing a great deal" }
          ],
          correct: "D"
        },
        {
          id: "sprawling",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "The author could have written wide instead of sprawling in sentence 3. Compared with wide, sprawling adds a sense that the leaves —",
          choices: [
            { letter: "A", text: "were trimmed into a neat, careful shape" },
            { letter: "B", text: "spread out in an untidy, uncontrolled way" },
            { letter: "C", text: "stayed small and delicate all summer long" },
            { letter: "D", text: "grew only inside a single garden plot" }
          ],
          correct: "B"
        },
        {
          id: "skeptical",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which words from the passage best help the reader understand the meaning of skeptical in sentence 4?",
          choices: [
            { letter: "A", text: "crossed three plots and a path" },
            { letter: "B", text: "rose from last year's compost" },
            { letter: "C", text: "Still, ... she admitted it made excellent soup" },
            { letter: "D", text: "the Rivera Street garden had a famous one" }
          ],
          correct: "C"
        },
        {
          id: "inevitable",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The prefix in- in inevitable means not. Knowing this, a reader can tell that a squash on Mrs. Lindqvist's porch was —",
          choices: [
            { letter: "A", text: "not able to be avoided" },
            { letter: "B", text: "not wanted in any way" },
            { letter: "C", text: "not ripe enough to eat" },
            { letter: "D", text: "not grown in the garden" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c32-code-review",
      family: "G9",
      title: "Code Review",
      kind: "Drama · 9.RL",
      blurb: "Yuki fixed Esteban's code without asking, and she was right.",
      level: 3,
      passage:
        "<p><em>Setting: the robotics lab, late afternoon. YUKI types at a laptop; ESTEBAN leans over her shoulder.</em></p>" +
        "<p>" + N(1) + "<strong>ESTEBAN</strong>: You changed my turning code. " +
        N(2) + "<strong>YUKI</strong> <em>(still typing)</em>: The robot was spinning too far, so I fixed it. " +
        N(3) + "<strong>ESTEBAN</strong> <em>(aside, to the audience)</em>: She's right, and that's the worst part. " +
        N(4) + "<strong>ESTEBAN</strong> <em>(to Yuki, stiffly)</em>: Next time, could you ask first? " +
        N(5) + "<strong>YUKI</strong> <em>(stops typing and turns around)</em>: You're right. " +
        N(6) + "I should have asked. " +
        N(7) + "Show me how you would have fixed it." +
        "</p>",
      claims: [
        {
          id: "aside",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The aside in sentence 3 mainly reveals that Esteban —",
          choices: [
            { letter: "A", text: "plans to undo all of Yuki's changes" },
            { letter: "B", text: "privately admits Yuki's fix is correct" },
            { letter: "C", text: "wants the audience to blame Yuki" },
            { letter: "D", text: "does not understand the new code" }
          ],
          correct: "B"
        },
        {
          id: "turns",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction in sentence 5, in which Yuki stops typing and turns around, mainly shows that she —",
          choices: [
            { letter: "A", text: "has finished writing the code" },
            { letter: "B", text: "is angry at being interrupted" },
            { letter: "C", text: "wants to leave the lab quickly" },
            { letter: "D", text: "now gives Esteban her full attention" }
          ],
          correct: "D"
        },
        {
          id: "stiffly",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction stiffly in sentence 4 suggests that Esteban —",
          choices: [
            { letter: "A", text: "is hurt but trying to stay polite" },
            { letter: "B", text: "is relaxed and not bothered at all" },
            { letter: "C", text: "is joking with Yuki about the robot" },
            { letter: "D", text: "is shouting so others can hear him" }
          ],
          correct: "A"
        },
        {
          id: "conflict",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The main conflict in the scene is about —",
          choices: [
            { letter: "A", text: "who will drive the robot at the next competition" },
            { letter: "B", text: "whether the team should rebuild the robot's base" },
            { letter: "C", text: "Yuki changing Esteban's code without asking" },
            { letter: "D", text: "how late the two of them can stay in the lab" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which idea does the scene in the robotics lab most clearly develop?",
          choices: [
            { letter: "A", text: "Teammates should never correct each other's mistakes." },
            { letter: "B", text: "The fastest solution is always the best solution." },
            { letter: "C", text: "Improving someone's work still calls for respect." },
            { letter: "D", text: "Computers make teamwork mostly unnecessary." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c32-shared-ground",
      family: "G9",
      title: "Shared Ground",
      kind: "Informational · 9.RI",
      blurb: "What a community garden grows besides vegetables.",
      level: 1,
      passage:
        "<p>" + N(1) + "A community garden is a piece of land that many people plant and care for together. " +
        N(2) + "In crowded cities, these gardens give families without yards a place to grow food. " +
        N(3) + "They also bring neighbors together; people who might never have spoken end up trading tomatoes and advice. " +
        N(4) + "Some gardens donate extra vegetables to food pantries. " +
        N(5) + "Others offer classes that teach children where food comes from. " +
        N(6) + "In many ways, a shared garden grows a community as well as crops." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the main idea of the passage about community gardens?",
          choices: [
            { letter: "A", text: "Community gardens offer benefits beyond growing food." },
            { letter: "B", text: "Food pantries depend on gardens for their vegetables." },
            { letter: "C", text: "Every child should take a class about gardening." },
            { letter: "D", text: "Cities do not have enough land for private yards." }
          ],
          correct: "A"
        },
        {
          id: "yards",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, how do community gardens help families without yards?",
          choices: [
            { letter: "A", text: "They pay families to care for the plants." },
            { letter: "B", text: "They deliver vegetables to families' homes." },
            { letter: "C", text: "They give families a place to grow food." },
            { letter: "D", text: "They teach families how to build yards." }
          ],
          correct: "C"
        },
        {
          id: "neighbors",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which detail best supports the claim that gardens bring neighbors together?",
          choices: [
            { letter: "A", text: "families without yards" },
            { letter: "B", text: "trading tomatoes and advice" },
            { letter: "C", text: "donate extra vegetables" },
            { letter: "D", text: "classes that teach children" }
          ],
          correct: "B"
        },
        {
          id: "figure",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "Sentence 6 says that a shared garden grows a community as well as crops. This figurative statement means that the garden —",
          choices: [
            { letter: "A", text: "makes the city's population larger" },
            { letter: "B", text: "needs more people than it has land" },
            { letter: "C", text: "produces more crops every year" },
            { letter: "D", text: "helps neighbors build connections" }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the passage about community gardens mainly organized?",
          choices: [
            { letter: "A", text: "by telling events in the order they happened" },
            { letter: "B", text: "by comparing gardens in two different cities" },
            { letter: "C", text: "by defining a term and then listing its benefits" },
            { letter: "D", text: "by describing a problem and then its causes" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c32-after-storm",
      family: "G9",
      title: "After the Storm",
      kind: "Literary · 9.RL",
      blurb: "Wren checks her favorite tide pool the morning after a storm.",
      level: 2,
      passage:
        "<p>" + N(1) + "The storm had passed in the night, and the beach at Saltwick looked as if someone had emptied a giant pocket across it. " +
        N(2) + "Kelp lay in tangled ropes; a lobster buoy sat upside down on the dunes. " +
        N(3) + "Wren walked straight to her favorite tide pool, afraid of what she'd find. " +
        N(4) + "The water was cloudy and the rocks were scattered, but in one crack a purple sea star still clung, stubborn as a fist. " +
        N(5) + "Wren sat down beside it and waited for the water to clear." +
        "</p>",
      claims: [
        {
          id: "pocket",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 1, saying the beach looked as if someone had emptied a giant pocket across it suggests that the beach was —",
          choices: [
            { letter: "A", text: "completely clean and smooth" },
            { letter: "B", text: "covered with a random mess" },
            { letter: "C", text: "crowded with early visitors" },
            { letter: "D", text: "washed away by the waves" }
          ],
          correct: "B"
        },
        {
          id: "fist",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 4, the sea star is described as stubborn as a fist mainly to show that it —",
          choices: [
            { letter: "A", text: "is angry at Wren for coming close" },
            { letter: "B", text: "is shaped exactly like a hand" },
            { letter: "C", text: "is about to let go of the rock" },
            { letter: "D", text: "is holding on tightly after the storm" }
          ],
          correct: "D"
        },
        {
          id: "wren",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Sentence 3 mainly reveals that Wren —",
          choices: [
            { letter: "A", text: "has never visited Saltwick beach before" },
            { letter: "B", text: "is afraid of storms and loud weather" },
            { letter: "C", text: "cares deeply about the tide pool" },
            { letter: "D", text: "wants to clear the kelp off the beach" }
          ],
          correct: "C"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the setting described in sentences 1 and 2 shape the story?",
          choices: [
            { letter: "A", text: "It creates worry about what the storm damaged." },
            { letter: "B", text: "It shows that the beach is unsafe to visit." },
            { letter: "C", text: "It explains why Wren lives near the ocean." },
            { letter: "D", text: "It shows that the storm is still going on." }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is best supported by the ending of the story about Wren?",
          choices: [
            { letter: "A", text: "Storms destroy everything that lies in their path." },
            { letter: "B", text: "Life can hold on even through hard times." },
            { letter: "C", text: "It is best to avoid places that have changed." },
            { letter: "D", text: "Nature recovers only when people step in to help." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-dsr-c32-two-builders",
      family: "G9",
      title: "Hold This Steady",
      kind: "Paired texts · 9.DSR",
      blurb: "A team captain's welcome and a newcomer's blog post.",
      level: 1,
      passage:
        "<p><strong>Text 1 — The Captain's Welcome</strong></p>" +
        "<p>" + N(1) + "Joining robotics does not mean you must already know how to code or build. " +
        N(2) + "Every expert on our team started by holding the screwdriver for someone else. " +
        N(3) + "Come to Room 114 on Tuesdays and Thursdays, and we will teach you.</p>" +
        "<p><strong>Text 2 — A New Member's Blog Post</strong></p>" +
        "<p>" + N(4) + "On my first day, I was sure everyone would notice I knew nothing. " +
        N(5) + "Instead, a senior named Aaliyah handed me a screwdriver and said, \"Hold this steady.\" " +
        N(6) + "By the end of the month, I was the one showing a freshman how to wire a motor." +
        "</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea do the captain's welcome and the blog post both support?",
          choices: [
            { letter: "A", text: "Only students who can code should join." },
            { letter: "B", text: "Robotics meetings are held every day." },
            { letter: "C", text: "Freshmen are the best builders on teams." },
            { letter: "D", text: "Beginners learn by helping experienced members." }
          ],
          correct: "D"
        },
        {
          id: "match",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which detail from Text 2 most closely matches the claim in sentence 2 of Text 1?",
          choices: [
            { letter: "A", text: "Aaliyah handed the writer a screwdriver to hold." },
            { letter: "B", text: "The writer was nervous on the first day." },
            { letter: "C", text: "The writer learned to code by the end of the month." },
            { letter: "D", text: "The writer liked wiring motors best of all." }
          ],
          correct: "A"
        },
        {
          id: "infer",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Sentence 6 suggests that the writer of Text 2 —",
          choices: [
            { letter: "A", text: "plans to quit the team after one month" },
            { letter: "B", text: "still feels unsure about building robots" },
            { letter: "C", text: "has become a helper like the ones Text 1 describes" },
            { letter: "D", text: "prefers coding to wiring motors" }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The main purpose of Text 1 is to —",
          choices: [
            { letter: "A", text: "describe a robot the team has built" },
            { letter: "B", text: "encourage new students to join without fear" },
            { letter: "C", text: "explain how to wire a motor correctly" },
            { letter: "D", text: "list the awards the team has won" }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which TWO sentences best show that the captain's promise in sentence 3 came true for the writer of Text 2? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: ["C", "D"]
        }
      ]
    },
    {
      id: "g9-rv-c32-proofing",
      family: "G9",
      title: "You Can't Rush Dough",
      kind: "Vocabulary · 9.RV",
      blurb: "Lucia pulls the bread out early and learns a baker's word.",
      level: 2,
      passage:
        "<p>" + N(1) + "In Mr. Bassett's bakery, every loaf has to <strong>proof</strong>, resting in a warm cabinet while the yeast puffs it up. " +
        N(2) + "Lucia, his newest helper, was <strong>impatient</strong> and pulled a tray out early. " +
        N(3) + "The bread baked up <strong>dense</strong> and heavy, like a brick. " +
        N(4) + "Mr. Bassett didn't scold her. " +
        N(5) + "He simply opened the cabinet and let the yeasty <strong>aroma</strong> drift out. " +
        N(6) + "\"You can't rush dough,\" he said. " +
        N(7) + "\"You can only <strong>coax</strong> it.\"" +
        "</p>",
      claims: [
        {
          id: "proof",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "As it is used in sentence 1, the word proof most nearly means to —",
          choices: [
            { letter: "A", text: "show evidence" },
            { letter: "B", text: "check for errors" },
            { letter: "C", text: "rise before baking" },
            { letter: "D", text: "become waterproof" }
          ],
          correct: "C"
        },
        {
          id: "im",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The prefix im- in impatient means not. Because Lucia was impatient, she —",
          choices: [
            { letter: "A", text: "did not want to wait" },
            { letter: "B", text: "did not like the bread" },
            { letter: "C", text: "did not hear Mr. Bassett" },
            { letter: "D", text: "did not know the recipe" }
          ],
          correct: "A"
        },
        {
          id: "dense",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which words from the passage best help the reader understand the meaning of dense in sentence 3?",
          choices: [
            { letter: "A", text: "baked up" },
            { letter: "B", text: "heavy, like a brick" },
            { letter: "C", text: "didn't scold her" },
            { letter: "D", text: "a warm cabinet" }
          ],
          correct: "B"
        },
        {
          id: "coax",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "Mr. Bassett could have said push instead of coax in sentence 7. Compared with push, the word coax suggests —",
          choices: [
            { letter: "A", text: "sudden, forceful action" },
            { letter: "B", text: "careless, hurried work" },
            { letter: "C", text: "loud, angry demands" },
            { letter: "D", text: "gentle, patient persuasion" }
          ],
          correct: "D"
        },
        {
          id: "rush",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "Mr. Bassett's lines in sentences 6 and 7 speak about dough as if it were a person. This figure of speech mainly suggests that —",
          choices: [
            { letter: "A", text: "good bread needs time and gentle care" },
            { letter: "B", text: "Lucia should talk to the dough as she works" },
            { letter: "C", text: "the dough was ruined because of the cabinet" },
            { letter: "D", text: "Mr. Bassett is angry about the wasted tray" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-ri-c32-sea-star",
      family: "G9",
      title: "The Missing Arm",
      kind: "Informational · 9.RI",
      blurb: "How a sea star regrows a lost limb, and what it costs.",
      level: 2,
      passage:
        "<p>" + N(1) + "A sea star that loses an arm to a hungry gull or a crushing wave is not doomed. " +
        N(2) + "Like a lizard regrowing a tail, it can regenerate the missing limb. " +
        N(3) + "The process is slow, often taking a year or more, and it uses a great deal of the animal's energy. " +
        N(4) + "During that time, the sea star may grow more slowly and produce fewer eggs. " +
        N(5) + "Scientists study this ability closely, hoping it might someday reveal clues about healing human injuries." +
        "</p>",
      claims: [
        {
          id: "regen",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 2, the word regenerate most nearly means —",
          choices: [
            { letter: "A", text: "grow back" },
            { letter: "B", text: "give away" },
            { letter: "C", text: "harden" },
            { letter: "D", text: "hide" }
          ],
          correct: "A"
        },
        {
          id: "lizard",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The comparison to a lizard in sentence 2 helps the reader understand that —",
          choices: [
            { letter: "A", text: "sea stars and lizards live in the same places" },
            { letter: "B", text: "lizards are among the animals that hunt sea stars" },
            { letter: "C", text: "sea stars have tails that grow back like lizards'" },
            { letter: "D", text: "regrowing a lost body part happens in other animals" }
          ],
          correct: "D"
        },
        {
          id: "cost",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that regrowing an arm has a cost for the sea star?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "C"
        },
        {
          id: "spec",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which statement from the passage is a speculation rather than a confirmed fact?",
          choices: [
            { letter: "A", text: "it can regenerate the missing limb" },
            { letter: "B", text: "it might someday reveal clues about healing human injuries" },
            { letter: "C", text: "often taking a year or more" },
            { letter: "D", text: "loses an arm to a hungry gull or a crushing wave" }
          ],
          correct: "B"
        },
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the sea star passage?",
          choices: [
            { letter: "A", text: "Sea stars can regrow lost arms, but it is slow and costly." },
            { letter: "B", text: "Hungry gulls and crushing waves are the biggest threats to sea stars." },
            { letter: "C", text: "Scientists have already used sea stars to heal many human injuries." },
            { letter: "D", text: "Sea stars produce fewer eggs than most other ocean animals do." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c32-quiet-lab",
      family: "G9",
      title: "The Quiet Lab",
      kind: "Literary · 9.RL",
      blurb: "After a public mistake, Noor practices alone.",
      level: 3,
      passage:
        "<p>" + N(1) + "After everyone left, Noor stayed in the lab with the robot and the hum of the vending machine. " +
        N(2) + "At the last meet, she had steered it into a wall in front of two hundred people. " +
        N(3) + "Now she drove it through the cone course again, and again, until the turns stopped feeling like guesses. " +
        N(4) + "The custodian, Mr. Vance, paused at the door and watched one clean lap. " +
        N(5) + "\"Looks like it knows where it's going,\" he said. " +
        N(6) + "Noor smiled; for the first time in weeks, she could say the same about herself." +
        "</p>",
      claims: [
        {
          id: "s2",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The detail in sentence 2 mainly explains —",
          choices: [
            { letter: "A", text: "how many people attend robotics meets" },
            { letter: "B", text: "why the robot needs major repairs" },
            { letter: "C", text: "how the cone course is set up" },
            { letter: "D", text: "why Noor is practicing alone tonight" }
          ],
          correct: "D"
        },
        {
          id: "guesses",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 3, the phrase until the turns stopped feeling like guesses suggests that Noor —",
          choices: [
            { letter: "A", text: "began to guess more often" },
            { letter: "B", text: "gained skill through repetition" },
            { letter: "C", text: "made the course much easier" },
            { letter: "D", text: "grew bored of driving laps" }
          ],
          correct: "B"
        },
        {
          id: "double",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "Mr. Vance's line in sentence 5 is about the robot, but it also fits Noor because she —",
          choices: [
            { letter: "A", text: "has regained a sense of direction and confidence" },
            { letter: "B", text: "built the robot's steering system by herself" },
            { letter: "C", text: "plans to hand the controller to Mr. Vance" },
            { letter: "D", text: "believes the robot can now drive itself" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the ending of the story about Noor is best described as —",
          choices: [
            { letter: "A", text: "bitterly disappointed" },
            { letter: "B", text: "nervous and tense" },
            { letter: "C", text: "quietly hopeful" },
            { letter: "D", text: "loud and triumphant" }
          ],
          correct: "C"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the story is told by a third-person narrator who follows Noor, the reader —",
          choices: [
            { letter: "A", text: "learns what Mr. Vance is secretly thinking" },
            { letter: "B", text: "sees the meet through the audience's eyes" },
            { letter: "C", text: "hears Noor tell the story as I" },
            { letter: "D", text: "understands why Noor stays after everyone leaves" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
