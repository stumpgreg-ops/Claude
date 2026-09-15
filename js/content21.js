/* SOL Labyrinth — v21 content: Grade 10 long and epic passages (Virginia G10).
 * Twelve original packs for the late-game stamina tiers: eight LONG packs
 * (380–520 words: three short stories, one poem, two articles, one argument,
 * one paired-text set) and four EPIC packs (540–650 words: two short stories,
 * two articles). No VDOE / copyrighted text. Loaded after content.js; pushes
 * into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── LONG · Literary (level 2) ───────────────────────── */
    {
      id: "g10-l-rl-salt-bridge",
      family: "G10",
      title: "Salt on the Bridge",
      kind: "Literary · 10.RL",
      blurb: "A snowstorm, a county salt truck, and the one road nobody is on yet.",
      level: 2,
      passage:
        "<p>" + N(1) + "The call came at 9:40 on a Sunday night, and by 9:45 Dana's father was already pulling on the orange coat that lived on the hook by the door. " +
        N(2) + "\"County says four inches by midnight,\" he said. \"You can come or you can sleep.\" " +
        N(3) + "Dana had never once chosen the truck over her bed, but her history project was finished and the house felt too quiet, so she found her boots.</p>" +
        "<p>" + N(4) + "The salt truck sat in the county lot, loaded, and the cab smelled the way it always did: coffee, wet rubber, and the sharp chemical breath of the brine tank. " +
        N(5) + "Her father checked the spreader twice, tapped a gauge she did not understand, and pulled out onto Route 9 with the plow blade raised and the amber lights turning the falling snow into slow gold. " +
        N(6) + "Dana expected him to head for downtown, where the traffic was. " +
        N(7) + "Instead he turned east, toward the river, where there was nothing but the long concrete bridge and two farms. " +
        N(8) + "\"Nobody's out here,\" she said. " +
        N(9) + "\"Nobody's out here yet,\" he answered, and lowered the blade.</p>" +
        "<p>" + N(10) + "He drove the bridge slowly, both directions, then did it again. " +
        N(11) + "When she asked why, he pointed at the steel rails and the black water below them. " +
        N(12) + "\"A bridge freezes before the road does,\" he said. \"Air underneath. No ground to hold the heat. By the time downtown is slick, this has been ice for an hour, and it's the only way to the hospital from the east side.\" " +
        N(13) + "He said it the way he said most things, plainly, as if the fact had been sitting there for anyone to pick up. " +
        N(14) + "Dana looked at the bridge in the mirror, the wet gleam already dulling to gray where the salt had landed, and thought about how many times she had crossed it in a school bus without wondering who had been there first.</p>" +
        "<p>" + N(15) + "They worked the routes until two in the morning: the bridge, then the hill by the middle school, then the long curve past the dairy, then the bridge again. " +
        N(16) + "Twice her father stopped to pull a car out of a ditch with a strap, and both times the driver waved and drove off without learning his name. " +
        N(17) + "Around one, a dispatcher's voice on the radio read off streets, and Dana realized that every name was a place she knew, her friend Ines's corner, the road to the rink, and that she had never heard them spoken as work.</p>" +
        "<p>" + N(18) + "When they got home the snow had stopped and the sky was clearing in patches. " +
        N(19) + "Her father hung up the orange coat and stood at the kitchen window, drinking water from the tap. " +
        N(20) + "\"You'll be tired at school,\" he said. " +
        N(21) + "\"I know,\" Dana said. " +
        N(22) + "She did not tell him that on the way home she had counted four cars on the bridge, moving at normal speed over a surface made safe three hours before they needed it, by a man none of them would ever think about. " +
        N(23) + "It seemed like the kind of thing you should keep, not say.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme developed across the whole story?",
          choices: [
            { letter: "A", text: "Essential work is often done before anyone notices it is needed." },
            { letter: "B", text: "Teenagers should spend more time learning their parents' jobs." },
            { letter: "C", text: "Small towns depend on volunteers more than on paid workers." },
            { letter: "D", text: "Dangerous weather brings out the worst in careless drivers." }
          ],
          correct: "A"
        },
        {
          id: "expect",
          sol: "10.RL.1.B",
          stem: "Dana's expectation in sentence 6 is important to the plot mainly because it —",
          choices: [
            { letter: "A", text: "shows she is afraid of driving near the river" },
            { letter: "B", text: "explains why she decided to ride along that night" },
            { letter: "C", text: "sets up the contrast that leads to her father's explanation" },
            { letter: "D", text: "reveals that her father usually ignores the downtown routes" }
          ],
          correct: "C"
        },
        {
          id: "father",
          sol: "10.RL.1.C",
          stem: "Sentence 13 characterizes Dana's father as —",
          choices: [
            { letter: "A", text: "proud of his expert knowledge" },
            { letter: "B", text: "matter-of-fact and unassuming" },
            { letter: "C", text: "impatient with Dana's questions" },
            { letter: "D", text: "worried about the hospital road" }
          ],
          correct: "B"
        },
        {
          id: "gold",
          sol: "10.RL.2.A",
          stem: "The description of the amber lights turning the falling snow into slow gold in sentence 5 mainly suggests that —",
          choices: [
            { letter: "A", text: "the storm is more dangerous than the county predicted" },
            { letter: "B", text: "the truck's lights are too dim to be useful" },
            { letter: "C", text: "Dana is too sleepy to see the road clearly" },
            { letter: "D", text: "Dana is seeing a familiar scene with fresh attention" }
          ],
          correct: "D"
        },
        {
          id: "dulling",
          sol: "10.RL.2.C",
          stem: "In sentence 14, the word dulling most nearly means —",
          choices: [
            { letter: "A", text: "growing heavier" },
            { letter: "B", text: "losing its shine" },
            { letter: "C", text: "spreading wider" },
            { letter: "D", text: "becoming slippery" }
          ],
          correct: "B"
        },
        {
          id: "repeat",
          sol: "10.RL.3.A",
          stem: "The author ends the list in sentence 15 with then the bridge again mainly to —",
          choices: [
            { letter: "A", text: "emphasize the priority her father explained in sentence 12" },
            { letter: "B", text: "suggest that her father has lost track of the route" },
            { letter: "C", text: "show that the dairy road was the most dangerous stretch" },
            { letter: "D", text: "hint that the truck is running low on salt" }
          ],
          correct: "A"
        },
        {
          id: "name",
          sol: "10.RL.2.B",
          stem: "The detail in sentence 16 that the drivers left without learning his name mainly reinforces the idea that —",
          choices: [
            { letter: "A", text: "Dana's father is rude to the people he helps" },
            { letter: "B", text: "the drivers were embarrassed to have slid into a ditch" },
            { letter: "C", text: "the county should charge drivers for rescues" },
            { letter: "D", text: "the people he helps do not register him as a person" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "Sentence 23 mainly suggests that Dana —",
          choices: [
            { letter: "A", text: "plans to write about the night for her history project" },
            { letter: "B", text: "is angry that the drivers never thanked her father" },
            { letter: "C", text: "values what she learned in a way that does not need saying" },
            { letter: "D", text: "regrets choosing the truck over a night of sleep" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · Literary (level 3) ───────────────────────── */
    {
      id: "g10-l-rl-translation",
      family: "G10",
      title: "The Translation",
      kind: "Literary · 10.RL",
      blurb: "A parent-teacher conference, a grandmother in her church blouse, and two sentences that stop in Mateo's mouth.",
      level: 3,
      passage:
        "<p>" + N(1) + "The conference was at 3:15, and Mateo's grandmother had taken the afternoon off from the bakery to be there, which meant she had traded four hours of pay for twenty minutes in a plastic chair. " +
        N(2) + "She wore the blue blouse she saved for church. " +
        N(3) + "Mateo sat between her and Ms. Whitfield, his chemistry teacher, and understood that for the next twenty minutes he was not a student but a bridge, and that a bridge does not get to choose what crosses it.</p>" +
        "<p>" + N(4) + "It started well. " +
        N(5) + "Ms. Whitfield said he was bright and asked good questions, and Mateo turned this into Spanish easily, adding nothing, and his grandmother nodded with her hands folded on her purse. " +
        N(6) + "Then the teacher opened a folder. " +
        N(7) + "\"He's missing six labs,\" she said. \"That's why the grade is a D. He tells me he'll turn them in, and then he doesn't.\"</p>" +
        "<p>" + N(8) + "Mateo felt the two sentences arrive in his mouth and stop there. " +
        N(9) + "He could say it straight. " +
        N(10) + "Or he could say what he had said the last two years, to two other teachers: that there was some trouble with assignments, that it was being handled, that everything was fine, a smooth, rounded version in which no one had to be ashamed. " +
        N(11) + "His grandmother would nod. " +
        N(12) + "Ms. Whitfield, who did not speak Spanish, would see the nod and assume the message had landed. " +
        N(13) + "The bridge would hold, and nothing would cross it.</p>" +
        "<p>" + N(14) + "\"She says I owe six labs,\" he said in Spanish, \"and that's why the grade is bad. She says I keep promising to turn them in and then I don't.\" " +
        N(15) + "His grandmother's hands did not move, but something in her face did, a small tightening, like a knot being pulled. " +
        N(16) + "She asked him a question, and he answered it, and then she said something to him that was not a question and that he did not translate, because it was not for the teacher. " +
        N(17) + "\"What did she say?\" Ms. Whitfield asked. " +
        N(18) + "\"She asked when they're due,\" Mateo said, which was true, and also not all of it.</p>" +
        "<p>" + N(19) + "They walked to the bus together in a silence that was not angry, exactly, but that had weight to it. " +
        N(20) + "At the stop his grandmother finally spoke. " +
        N(21) + "\"You could have made that softer,\" she said. \"You've done it before. I'm not stupid.\" " +
        N(22) + "Mateo looked at the pavement. " +
        N(23) + "\"I know,\" he said. " +
        N(24) + "\"Good,\" she said, and then, after a moment, \"It was the first time I felt like I was actually in the room.\" " +
        N(25) + "The bus came. " +
        N(26) + "Mateo thought about the six labs, which were real, and about the D, which was real, and about how much lighter it was to carry a true thing than to hold up a false one, even a kind one, even a small one.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses the story's central theme?",
          choices: [
            { letter: "A", text: "Students who fall behind should confess before a teacher discovers it." },
            { letter: "B", text: "An uncomfortable truth can bring people closer than a comfortable lie." },
            { letter: "C", text: "Family members should never serve as translators for one another." },
            { letter: "D", text: "Teachers rarely understand the pressures students face at home." }
          ],
          correct: "B"
        },
        {
          id: "bridge",
          sol: "10.RL.2.A",
          stem: "The metaphor of the bridge in sentence 3 mainly conveys that Mateo —",
          choices: [
            { letter: "A", text: "feels he is the strongest person in the room" },
            { letter: "B", text: "believes the conference will collapse without him" },
            { letter: "C", text: "wants to keep his grandmother and teacher apart" },
            { letter: "D", text: "feels he has no right to control what he passes along" }
          ],
          correct: "D"
        },
        {
          id: "pause",
          sol: "10.RL.3.A",
          stem: "The author slows the story in sentences 9 through 13 mainly to —",
          choices: [
            { letter: "A", text: "lay out the easier choice Mateo is about to reject" },
            { letter: "B", text: "explain why Ms. Whitfield never learned Spanish" },
            { letter: "C", text: "show that Mateo has forgotten the teacher's words" },
            { letter: "D", text: "suggest that the grandmother already knows about the labs" }
          ],
          correct: "A"
        },
        {
          id: "past",
          sol: "10.RL.1.C",
          stem: "Sentence 10 reveals that in past conferences Mateo has —",
          choices: [
            { letter: "A", text: "refused to translate anything negative" },
            { letter: "B", text: "asked his teachers to speak to his grandmother directly" },
            { letter: "C", text: "softened bad news so that no one felt embarrassed" },
            { letter: "D", text: "invented problems that did not actually exist" }
          ],
          correct: "C"
        },
        {
          id: "rounded",
          sol: "10.RL.2.C",
          stem: "In sentence 10, the word rounded most nearly means —",
          choices: [
            { letter: "A", text: "complete in every detail" },
            { letter: "B", text: "repeated several times" },
            { letter: "C", text: "spoken in a circle of listeners" },
            { letter: "D", text: "smoothed of anything harsh" }
          ],
          correct: "D"
        },
        {
          id: "notall",
          sol: "10.RL.2.B",
          stem: "The phrase which was true, and also not all of it in sentence 18 suggests that Mateo —",
          choices: [
            { letter: "A", text: "keeps his grandmother's private words private while still answering honestly" },
            { letter: "B", text: "has returned to hiding the truth from his teacher" },
            { letter: "C", text: "cannot remember everything his grandmother said" },
            { letter: "D", text: "is afraid Ms. Whitfield will punish him further" }
          ],
          correct: "A"
        },
        {
          id: "pay",
          sol: "10.RL.1.B",
          stem: "The detail in sentence 1 about the four hours of pay becomes most meaningful when —",
          choices: [
            { letter: "A", text: "Ms. Whitfield opens the folder in sentence 6" },
            { letter: "B", text: "the grandmother says she finally felt present in sentence 24" },
            { letter: "C", text: "Mateo looks at the pavement in sentence 22" },
            { letter: "D", text: "the bus arrives in sentence 25" }
          ],
          correct: "B"
        },
        {
          id: "final",
          sol: "10.RL.3.A",
          stem: "Sentence 26 mainly serves to —",
          choices: [
            { letter: "A", text: "reveal that the labs were never really missing" },
            { letter: "B", text: "show that Mateo blames his teacher for the grade" },
            { letter: "C", text: "state the insight Mateo draws from the afternoon" },
            { letter: "D", text: "leave the outcome of the conference uncertain" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · Literary (level 2) ───────────────────────── */
    {
      id: "g10-l-rl-rebuild",
      family: "G10",
      title: "Four Inches",
      kind: "Literary · 10.RL",
      blurb: "A rules change eleven days before regionals, a captain's quick fix, and a quiet builder who took the robot apart at night.",
      level: 2,
      passage:
        "<p>" + N(1) + "The rules update arrived on a Thursday, eleven days before the regional, in an email that nobody on the team wanted to open twice. " +
        N(2) + "The scoring ramp had been raised four inches. " +
        N(3) + "Four inches did not sound like much until Priya rolled the robot up to the practice ramp after school and watched its front wheels spin uselessly against the edge, like a dog trying to climb onto a couch.</p>" +
        "<p>" + N(4) + "\"We can add a wedge,\" said Owen, the captain, already sketching on the whiteboard. \"Bolt a plate to the front, angle it, let it ride up.\" " +
        N(5) + "He talked fast when he was worried, and he had been talking fast since the email. " +
        N(6) + "Half the team nodded. " +
        N(7) + "Jun, who had built the drive train over three weekends and who rarely said anything in meetings, did not nod. " +
        N(8) + "He measured the ramp with a tape, wrote a number on his hand, and went back to the parts cabinet.</p>" +
        "<p>" + N(9) + "By Monday Owen's wedge was on, and it worked, mostly. " +
        N(10) + "The robot climbed the ramp on six tries out of ten and tipped backward on the other four, landing on its battery with a sound that made everyone flinch. " +
        N(11) + "\"Sixty percent,\" Owen said. \"That's points. That's more than zero.\" " +
        N(12) + "Priya wrote the number down and did not say what she was thinking, which was that sixty percent of a climb was also forty percent of a robot lying on its back in front of the judges.</p>" +
        "<p>" + N(13) + "On Tuesday Jun asked for the room. " +
        N(14) + "He had not built a wedge. " +
        N(15) + "He had rebuilt the chassis, lowering the center of gravity by moving the battery to the floor of the frame and shifting the drive wheels back two inches, and he had done it alone, at night, without telling anyone, because he had assumed nobody would let him take a working robot apart. " +
        N(16) + "\"It'll take three days to swap everything over,\" he said. \"We lose three days of driver practice.\" " +
        N(17) + "Owen stared at the new frame. " +
        N(18) + "\"And if it doesn't work, we lose everything.\" " +
        N(19) + "\"It works,\" Jun said, and rolled it up the ramp ten times, and it did.</p>" +
        "<p>" + N(20) + "They swapped it over. " +
        N(21) + "At the regional the robot climbed the ramp in every match, and when a judge asked who had designed the low frame, Owen, who could have said \"the team,\" pointed at Jun. " +
        N(22) + "Later, packing the trailer, Priya asked Owen when he had decided to give up the wedge. " +
        N(23) + "\"When I realized I liked it because it was mine,\" he said, \"and not because it was good.\" " +
        N(24) + "He wound a cable around his elbow and hand, neatly, the way Jun did it. " +
        N(25) + "\"Turns out those aren't the same thing.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of the story about the robotics team?",
          choices: [
            { letter: "A", text: "The fastest solution to a problem is usually the best one." },
            { letter: "B", text: "Quiet team members should speak up more often in meetings." },
            { letter: "C", text: "A good leader can recognize when someone else's idea is better than his own." },
            { letter: "D", text: "Competitions reward teams that never change their plans." }
          ],
          correct: "C"
        },
        {
          id: "simile",
          sol: "10.RL.2.A",
          stem: "The comparison in sentence 3 to a dog trying to climb onto a couch mainly conveys —",
          choices: [
            { letter: "A", text: "the robot's helpless, slightly comic struggle" },
            { letter: "B", text: "the team's affection for the machine" },
            { letter: "C", text: "how dangerous the new ramp has become" },
            { letter: "D", text: "how poorly the robot was built in the first place" }
          ],
          correct: "A"
        },
        {
          id: "jun",
          sol: "10.RL.1.C",
          stem: "Sentences 7 and 8 characterize Jun as someone who —",
          choices: [
            { letter: "A", text: "resents Owen for being captain" },
            { letter: "B", text: "is too shy to have useful ideas" },
            { letter: "C", text: "agrees with whatever the group decides" },
            { letter: "D", text: "answers a problem with action rather than talk" }
          ],
          correct: "D"
        },
        {
          id: "flinch",
          sol: "10.RL.2.C",
          stem: "In sentence 10, the word flinch most nearly means —",
          choices: [
            { letter: "A", text: "laugh nervously" },
            { letter: "B", text: "jerk back in alarm" },
            { letter: "C", text: "lean in to look" },
            { letter: "D", text: "cover their ears" }
          ],
          correct: "B"
        },
        {
          id: "priya",
          sol: "10.RL.1.B",
          stem: "Priya's unspoken thought in sentence 12 mainly functions to —",
          choices: [
            { letter: "A", text: "expose the weakness in Owen's solution before Jun's is revealed" },
            { letter: "B", text: "show that Priya wants to become captain herself" },
            { letter: "C", text: "explain why the judges will not allow the wedge" },
            { letter: "D", text: "suggest that the team should withdraw from the regional" }
          ],
          correct: "A"
        },
        {
          id: "growth",
          sol: "10.RL.3.A",
          stem: "The contrast between Owen's fast talking in sentence 5 and his words in sentences 23 through 25 mainly shows —",
          choices: [
            { letter: "A", text: "that Owen has lost interest in the team" },
            { letter: "B", text: "that Owen is imitating Jun in order to be liked" },
            { letter: "C", text: "how the pressure of the regional exhausted him" },
            { letter: "D", text: "his shift from anxious defensiveness to honest reflection" }
          ],
          correct: "D"
        },
        {
          id: "cable",
          sol: "10.RL.3.A",
          stem: "The author includes the detail about the cable in sentence 24 mainly to —",
          choices: [
            { letter: "A", text: "show that the team packed carefully after winning" },
            { letter: "B", text: "suggest that Owen has come to respect Jun's way of working" },
            { letter: "C", text: "reveal that Jun taught Owen how to pack the trailer" },
            { letter: "D", text: "explain why the wedge was thrown away" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── LONG · Poetry (level 3) ───────────────────────── */
    {
      id: "g10-l-rl-locker-poem",
      family: "G10",
      title: "Inventory, Last Day",
      kind: "Poetry · 10.RL",
      blurb: "A locker opens on the last day of school, and a year comes out in pieces.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The locker opens on the last day like a mouth<br>" +
        L(2) + "that has held its breath since August.<br>" +
        L(3) + "I take out what a year leaves behind:<br>" +
        L(4) + "a calculator with a cracked face that still adds,<br>" +
        L(5) + "a hoodie that belongs to someone I stopped talking to in March,<br>" +
        L(6) + "forty-one worksheets folded into the shape of hurry.<br>" +
        L(7) + "Here is the map from the field trip, the river drawn<br>" +
        L(8) + "in a blue that is not the river's blue.<br>" +
        L(9) + "Here is the note that says <em>call me</em>, unsigned,<br>" +
        L(10) + "which I did not, and now cannot.<br>" +
        L(11) + "The mirror on the door has kept its opinion to itself<br>" +
        L(12) + "and I am grateful.<br>" +
        L(13) + "A pencil, worn to a stub the length of my thumb.<br>" +
        L(14) + "How many wrong answers does it take to make a pencil this short?<br>" +
        L(15) + "How many right ones?<br>" +
        L(16) + "The janitor's cart hums at the end of the hall,<br>" +
        L(17) + "patient as weather.<br>" +
        L(18) + "I could throw all of it in the gray bin and be lighter.<br>" +
        L(19) + "Instead I stand here with my arms full,<br>" +
        L(20) + "sorting what was mine from what only happened to me,<br>" +
        L(21) + "and finding that the pile does not divide.<br>" +
        L(22) + "The hoodie goes in the bin. Then comes out.<br>" +
        L(23) + "The locker, emptied, is only a locker,<br>" +
        L(24) + "a small cold room where a year used to live." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a central idea of the poem?",
          choices: [
            { letter: "A", text: "Students keep too many useless objects in their lockers during the school year." },
            { letter: "B", text: "The end of a school year is always a relief for students who worked hard." },
            { letter: "C", text: "Broken things should be thrown away quickly and without any regret." },
            { letter: "D", text: "A year's experiences resist being sorted into what to keep and what to let go." }
          ],
          correct: "D"
        },
        {
          id: "mouth",
          sol: "10.RL.2.A",
          stem: "The personification of the locker in lines 1 and 2 mainly suggests that —",
          choices: [
            { letter: "A", text: "the locker is too small for the speaker's belongings" },
            { letter: "B", text: "what the locker holds has been waiting, unreleased, all year" },
            { letter: "C", text: "the speaker is afraid of what she will find inside" },
            { letter: "D", text: "the school building is old and poorly maintained" }
          ],
          correct: "B"
        },
        {
          id: "divide",
          sol: "10.RL.2.C",
          stem: "In line 21, the word divide most nearly means —",
          choices: [
            { letter: "A", text: "separate into clear groups" },
            { letter: "B", text: "grow smaller over time" },
            { letter: "C", text: "fit into the bin" },
            { letter: "D", text: "cause an argument" }
          ],
          correct: "A"
        },
        {
          id: "questions",
          sol: "10.RL.3.A",
          stem: "The questions in lines 14 and 15 mark a shift in the poem from —",
          choices: [
            { letter: "A", text: "the past to a prediction about the future" },
            { letter: "B", text: "the speaker's own belongings to other students' belongings" },
            { letter: "C", text: "listing objects to reflecting on the effort behind them" },
            { letter: "D", text: "sadness about the year to excitement about summer" }
          ],
          correct: "C"
        },
        {
          id: "hoodie",
          sol: "10.RL.2.B",
          stem: "Read together, lines 5 and 22 suggest that the speaker —",
          choices: [
            { letter: "A", text: "has not settled her feelings about a friendship that ended" },
            { letter: "B", text: "plans to return the hoodie to its owner tomorrow" },
            { letter: "C", text: "is angry that the friend never asked for the hoodie back" },
            { letter: "D", text: "does not remember whose hoodie it is" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RL.3.A",
          stem: "The tone of the final two lines (23 and 24) is best described as —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "playful and teasing" },
            { letter: "C", text: "hopeful and eager" },
            { letter: "D", text: "quiet and wistful" }
          ],
          correct: "D"
        },
        {
          id: "weather",
          sol: "10.RL.2.A",
          stem: "Describing the janitor's cart as patient as weather in line 17 mainly suggests that —",
          choices: [
            { letter: "A", text: "the janitor is annoyed at having to wait for the speaker" },
            { letter: "B", text: "a storm is approaching the school" },
            { letter: "C", text: "the clearing-out will happen whether the speaker is ready or not" },
            { letter: "D", text: "the hallway is unusually cold for June" }
          ],
          correct: "C"
        },
        {
          id: "mirror",
          sol: "10.RL.1.C",
          stem: "Lines 11 and 12 reveal that the speaker is —",
          choices: [
            { letter: "A", text: "proud of how much she has changed this year" },
            { letter: "B", text: "relieved not to have to face how she has changed" },
            { letter: "C", text: "embarrassed that the mirror is cracked" },
            { letter: "D", text: "worried that others have been judging her" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── LONG · Informational (level 2) ───────────────────────── */
    {
      id: "g10-l-ri-dark-sky",
      family: "G10",
      title: "Giving Back the Night",
      kind: "Informational · 10.RI",
      blurb: "Two dozen stars downtown, two thousand in the countryside, and the local rules trying to close the gap.",
      level: 2,
      passage:
        "<p>" + N(1) + "On a clear night in the middle of a large city, a person looking up can usually count about two dozen stars. " +
        N(2) + "A hundred miles away, in open farmland, the same person might see two thousand. " +
        N(3) + "The difference is not the stars; it is the light that never reaches them, spilling upward from parking lots, billboards, porch fixtures and streetlamps and scattering in the atmosphere until the sky itself glows. " +
        N(4) + "Scientists call this skyglow, and it is one form of what is now widely known as light pollution.</p>" +
        "<p>" + N(5) + "For most of the last century, brighter was assumed to be better. " +
        N(6) + "More light meant safer streets and busier stores, and nobody thought of a glowing sky as something that had been lost. " +
        N(7) + "That view began to change in the 1980s and 1990s, when astronomers noticed that observatories built on remote mountaintops were being slowly washed out by the growth of towns fifty miles away. " +
        N(8) + "Their concern soon spread beyond telescopes. " +
        N(9) + "Biologists found that hatchling sea turtles, which instinctively crawl toward the brightest horizon, were heading inland toward hotel lights instead of out to sea. " +
        N(10) + "Migrating birds, which navigate partly by starlight, were circling lit towers until they dropped from exhaustion. " +
        N(11) + "Even in humans, research began to link nighttime light exposure to disrupted sleep.</p>" +
        "<p>" + N(12) + "The response has been a wave of local \"dark sky\" ordinances. " +
        N(13) + "These rules rarely ask communities to turn lights off. " +
        N(14) + "Instead they ask for smarter light: fixtures that are shielded so that every bit of light points down at the ground rather than up at the clouds, bulbs that are warmer in color and less likely to scatter, and timers or motion sensors so that an empty lot is not lit all night for no one. " +
        N(15) + "A town in the desert Southwest that adopted such rules in the 1990s found that its residents could once again see the band of the Milky Way from their backyards within a decade, while its electricity bill for public lighting fell by nearly a third.</p>" +
        "<p>" + N(16) + "Critics of the ordinances usually raise safety. " +
        N(17) + "Yet studies comparing crime rates before and after lighting changes have been mixed at best, and shielded fixtures often improve visibility, since glare from an unshielded bulb can leave the area around it harder to see rather than easier. " +
        N(18) + "A driver squinting past a bare floodlight is not safer than one on a street lit evenly and low.</p>" +
        "<p>" + N(19) + "Perhaps the strongest argument, though, is not about turtles or budgets. " +
        N(20) + "For nearly all of human history, the night sky was the one thing every person on Earth had in common, and it shaped calendars, stories and navigation. " +
        N(21) + "A generation that has never seen it has lost something it cannot describe, because it does not know what is missing. " +
        N(22) + "The ordinances are, in the end, an attempt to give that inheritance back, one shielded lamp at a time.</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the main idea of the article?",
          choices: [
            { letter: "A", text: "Astronomers were the first to notice that city lights were growing brighter." },
            { letter: "B", text: "Light pollution has real costs, and communities can reduce it with smarter lighting rather than less." },
            { letter: "C", text: "Sea turtles and migrating birds are the species most harmed by artificial light." },
            { letter: "D", text: "Towns that adopt dark-sky rules always save money on electricity." }
          ],
          correct: "B"
        },
        {
          id: "opening",
          sol: "10.RI.2.A",
          stem: "The author opens with the comparison in sentences 1 and 2 mainly to —",
          choices: [
            { letter: "A", text: "argue that farmland is a better place to live than a city" },
            { letter: "B", text: "explain how astronomers count stars" },
            { letter: "C", text: "make the scale of the problem concrete before naming it" },
            { letter: "D", text: "show that most people never look at the sky" }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "10.RI.1.B",
          stem: "Which sentence best supports the claim that dark-sky rules do not require giving up the benefits of lighting?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "D"
        },
        {
          id: "washed",
          sol: "10.RV.1.B",
          stem: "In sentence 7, the phrase washed out most nearly means —",
          choices: [
            { letter: "A", text: "made faint and hard to use" },
            { letter: "B", text: "damaged by heavy rain" },
            { letter: "C", text: "cleaned and repaired" },
            { letter: "D", text: "moved to a new location" }
          ],
          correct: "A"
        },
        {
          id: "missing",
          sol: "10.RI.1.C",
          stem: "Sentence 21 implies that the loss of the night sky is —",
          choices: [
            { letter: "A", text: "less serious than the harm done to sea turtles and migrating birds" },
            { letter: "B", text: "easy to fix once a community notices that it has happened" },
            { letter: "C", text: "hard to notice because people cannot miss what they have never had" },
            { letter: "D", text: "mainly a problem for scientists, sailors and other navigators" }
          ],
          correct: "C"
        },
        {
          id: "critics",
          sol: "10.RI.2.B",
          stem: "The fourth paragraph (sentences 16 through 18) mainly serves to —",
          choices: [
            { letter: "A", text: "answer an objection that opponents of the rules raise" },
            { letter: "B", text: "admit that the ordinances make streets less safe" },
            { letter: "C", text: "describe how floodlights are manufactured" },
            { letter: "D", text: "summarize the research on crime and lighting" }
          ],
          correct: "A"
        },
        {
          id: "brighter",
          sol: "10.RI.2.A",
          stem: "How does sentence 17 relate to the assumption described in sentence 5?",
          choices: [
            { letter: "A", text: "It confirms that brighter lighting is safer for drivers." },
            { letter: "B", text: "It explains why people held the assumption for so long." },
            { letter: "C", text: "It shows that the assumption applies only to stores." },
            { letter: "D", text: "It challenges the assumption by showing that more light can reduce visibility." }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The author's tone in the final paragraph is best described as —",
          choices: [
            { letter: "A", text: "sarcastic and dismissive" },
            { letter: "B", text: "reflective and earnest" },
            { letter: "C", text: "neutral and technical" },
            { letter: "D", text: "alarmed and urgent" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── LONG · Informational (level 3) ───────────────────────── */
    {
      id: "g10-l-ri-stream-gauge",
      family: "G10",
      title: "The Shed by the River",
      kind: "Informational · 10.RI",
      blurb: "A metal box the size of a phone booth, a pipe into the water, and a record that cannot be restarted once it stops.",
      level: 3,
      passage:
        "<p>" + N(1) + "Beside thousands of rivers and creeks across the country stands a small metal shed, often no larger than a phone booth, with a pipe running down into the water. " +
        N(2) + "Most people who fish or paddle past it never give it a thought. " +
        N(3) + "Yet the numbers produced inside that shed decide when a dam opens its gates, when a town issues a flood warning, whether a farmer downstream can pump water in August, and how much a city will pay to insure the houses on its lowest street.</p>" +
        "<p>" + N(4) + "The shed is a stream gauge, and its basic job is deceptively simple: measure how high the water is, every fifteen minutes, forever. " +
        N(5) + "A float or a pressure sensor in the pipe tracks the water's surface, and a transmitter sends the reading to a satellite, which relays it to a database that anyone can view online within the hour. " +
        N(6) + "Height alone, however, is not what most users want. " +
        N(7) + "A river three feet deep in a narrow rocky channel carries far less water than a river three feet deep across a wide sandy bed. " +
        N(8) + "What matters is discharge, the volume of water passing a point each second, and discharge cannot be measured continuously by any sensor yet invented.</p>" +
        "<p>" + N(9) + "So hydrologists build a bridge between the two. " +
        N(10) + "Several times a year, a technician wades or boats across the river with a current meter, measuring the speed and depth of the water at dozens of points across its width, and adds them up to get a single discharge figure for that day's height. " +
        N(11) + "After enough visits, at enough different water levels, the pairs form a curve, and the gauge can translate every fifteen-minute height into an estimated flow. " +
        N(12) + "The catch is that rivers refuse to sit still. " +
        N(13) + "A single flood can scour the channel deeper or pile a new sandbar against the pipe, and the old curve becomes quietly wrong. " +
        N(14) + "That is why the technician keeps coming back, in waders and in January, to check whether the river still means what it used to.</p>" +
        "<p>" + N(15) + "The oldest gauges in the network have been recording since the 1880s, and their unbroken records are among the most valuable in environmental science. " +
        N(16) + "A hundred years of daily flow reveals things a decade cannot: how often a so-called hundred-year flood actually arrives, whether summer low flows are shrinking, whether spring snowmelt is coming earlier than it did for a grandparent. " +
        N(17) + "Engineers designing a bridge do not guess how high the water might get; they ask the gauge.</p>" +
        "<p>" + N(18) + "The network is not free. " +
        N(19) + "Each station costs roughly twenty thousand dollars a year to maintain, and in lean budget years a few hundred are quietly shut off, leaving gaps in records that took generations to build. " +
        N(20) + "A gauge switched off in 2010 and restarted in 2020 has not merely lost ten years; it has lost the one stretch of data that can never be collected again. " +
        N(21) + "The shed by the river is small, but what it holds is a kind of memory, and memory, once interrupted, does not resume.</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          stem: "Which statement best summarizes the article?",
          choices: [
            { letter: "A", text: "Stream gauges are expensive machines that most communities cannot afford to maintain." },
            { letter: "B", text: "Hydrologists prefer measuring discharge by hand because sensors are unreliable." },
            { letter: "C", text: "An unnoticed network of stream gauges produces essential data whose value depends on never being interrupted." },
            { letter: "D", text: "Rivers change so often that records older than a few decades are no longer useful." }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          stem: "Sentences 6 through 8 are organized mainly to —",
          choices: [
            { letter: "A", text: "identify a limitation that the next paragraph then solves" },
            { letter: "B", text: "compare two rivers of different sizes" },
            { letter: "C", text: "describe the sensors inside the shed in order of cost" },
            { letter: "D", text: "argue that height is the only measurement that matters" }
          ],
          correct: "A"
        },
        {
          id: "scour",
          sol: "10.RV.1.B",
          stem: "In sentence 13, the word scour most nearly means —",
          choices: [
            { letter: "A", text: "search through carefully" },
            { letter: "B", text: "fill slowly with mud" },
            { letter: "C", text: "freeze completely solid" },
            { letter: "D", text: "wear away by rushing water" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "10.RI.1.B",
          stem: "Which sentence best supports the idea that a gauge's value grows the longer it runs?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "B"
        },
        {
          id: "means",
          sol: "10.RI.1.C",
          stem: "The phrase whether the river still means what it used to in sentence 14 mainly suggests that —",
          choices: [
            { letter: "A", text: "the link between a river's height and its flow can shift as the channel changes" },
            { letter: "B", text: "technicians often disagree about how to read the gauge" },
            { letter: "C", text: "the river's name has changed over the years" },
            { letter: "D", text: "winter measurements are less accurate than summer ones" }
          ],
          correct: "A"
        },
        {
          id: "contrast",
          sol: "10.RI.2.B",
          stem: "The author places sentence 2 directly before the list in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "criticize people who fish and paddle for being careless" },
            { letter: "B", text: "explain why the shed is painted to blend in" },
            { letter: "C", text: "show that dams and farms depend on the same river" },
            { letter: "D", text: "contrast how easily the shed is overlooked with how much depends on it" }
          ],
          correct: "D"
        },
        {
          id: "forever",
          sol: "10.RI.2.A",
          stem: "How does the word forever in sentence 4 connect to the final paragraph?",
          choices: [
            { letter: "A", text: "The final paragraph shows that the gauges will eventually be replaced by satellites." },
            { letter: "B", text: "The final paragraph explains why continuous recording matters: a gap can never be refilled." },
            { letter: "C", text: "The final paragraph argues that fifteen-minute readings are too frequent." },
            { letter: "D", text: "The final paragraph describes how the oldest gauges were built to last." }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The tone of sentence 21 is best described as —",
          choices: [
            { letter: "A", text: "lighthearted" },
            { letter: "B", text: "sarcastic" },
            { letter: "C", text: "solemn" },
            { letter: "D", text: "indifferent" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · Argument (level 3) ───────────────────────── */
    {
      id: "g10-l-ri-study-hall",
      family: "G10",
      title: "Forty-Five Minutes",
      kind: "Argument · 10.RI",
      blurb: "A student columnist argues that the seventh period the district called a gift came with a bill.",
      level: 3,
      passage:
        "<p>" + N(1) + "Three years ago our district replaced the daily study hall with a seventh academic period, promising that students would \"gain a class\" without losing anything. " +
        N(2) + "The promise was half right. " +
        N(3) + "We gained a class. " +
        N(4) + "What we lost was the only forty-five minutes in the school day that belonged to the student rather than to a subject, and the effects of that loss are now visible to anyone who walks the halls at 7:20 in the morning and sees sophomores copying homework on the floor outside the library.</p>" +
        "<p>" + N(5) + "The argument for the seventh period sounded sensible: more instruction, more credits, more opportunities. " +
        N(6) + "But instruction is not the same as learning. " +
        N(7) + "Learning happens when a student takes what a teacher said and does something with it, and that doing takes time the current schedule no longer provides. " +
        N(8) + "Homework has not shrunk to fit the new day; it has simply moved later, into hours that were once for sleep, jobs, sports and family. " +
        N(9) + "A survey of 412 students at our school last spring found that the average reported bedtime had moved forty minutes later since the change, and that nearly half of respondents said they \"regularly\" finished homework after eleven o'clock.</p>" +
        "<p>" + N(10) + "Study hall also did something no academic class can: it made help available at the moment a student was stuck. " +
        N(11) + "In a classroom, a question waits for the teacher to reach that topic. " +
        N(12) + "In study hall, a student who did not understand the chemistry lab could walk to the chemistry room, and the teacher on duty could sit with her for ten minutes, and the problem was solved before it became a failing grade. " +
        N(13) + "Since the change, after-school tutoring attendance has doubled, which administrators cite as a success. " +
        N(14) + "It is not. " +
        N(15) + "It is the same help, delivered at 3:30 to the students who can stay, and never delivered at all to the ones who catch the bus, coach a sibling's team, or work a shift.</p>" +
        "<p>" + N(16) + "Defenders of the seventh period point out that some students used study hall poorly, and that is true. " +
        N(17) + "Some slept. " +
        N(18) + "Some scrolled. " +
        N(19) + "But the answer to a period used badly by some is not to erase it for everyone; it is to make it better, with a sign-in system, teacher check-ins and quiet zones, as several neighboring schools have done. " +
        N(20) + "We do not cancel lunch because a few students skip it.</p>" +
        "<p>" + N(21) + "The seventh period was sold as a gift. " +
        N(22) + "Before we accept that it was one, we should ask who paid for it, and the answer, judging by the hallway floor at 7:20, is the students it was supposed to help. " +
        N(23) + "Give them back the forty-five minutes. " +
        N(24) + "They will use some of it badly, and much of it well, and all of it as their own.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the author's central claim?",
          choices: [
            { letter: "A", text: "Study hall should be restored because removing it pushed learning time into students' own hours." },
            { letter: "B", text: "The district should add an eighth period so students can earn more credits." },
            { letter: "C", text: "After-school tutoring should be expanded to serve students who ride the bus." },
            { letter: "D", text: "Students who copied homework in the hallway should face consequences." }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "10.RI.1.B",
          stem: "Which sentence offers measurable evidence rather than the author's opinion?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "C"
        },
        {
          id: "tutoring",
          sol: "10.RI.1.C",
          stem: "In sentences 13 through 15, the author strengthens the argument by —",
          choices: [
            { letter: "A", text: "admitting that after-school tutoring works better than study hall ever did" },
            { letter: "B", text: "turning a statistic the administration calls a success into evidence of a problem" },
            { letter: "C", text: "proposing that after-school tutoring be moved to the early morning instead" },
            { letter: "D", text: "quoting an administrator who agrees that the tutoring numbers are misleading" }
          ],
          correct: "B"
        },
        {
          id: "concession",
          sol: "10.RI.2.A",
          stem: "The fourth paragraph (sentences 16 through 20) is structured as —",
          choices: [
            { letter: "A", text: "a list of rules the author wants adopted" },
            { letter: "B", text: "a comparison of two neighboring schools" },
            { letter: "C", text: "a story about one student who misused study hall" },
            { letter: "D", text: "a concession to the other side followed by a rebuttal" }
          ],
          correct: "D"
        },
        {
          id: "cite",
          sol: "10.RV.1.B",
          stem: "In sentence 13, the word cite most nearly means —",
          choices: [
            { letter: "A", text: "hide from view" },
            { letter: "B", text: "question the accuracy of" },
            { letter: "C", text: "point to as proof" },
            { letter: "D", text: "vote in favor of" }
          ],
          correct: "C"
        },
        {
          id: "lunch",
          sol: "10.RI.2.B",
          stem: "The author includes sentence 20 mainly to —",
          choices: [
            { letter: "A", text: "suggest that lunch period should also be lengthened" },
            { letter: "B", text: "show through a familiar example how unreasonable the defenders' logic is" },
            { letter: "C", text: "admit that some students skip study hall the way they skip lunch" },
            { letter: "D", text: "shift the topic from schedules to the cafeteria" }
          ],
          correct: "B"
        },
        {
          id: "floor",
          sol: "10.RI.2.B",
          stem: "The image of students on the hallway floor appears in sentence 4 and returns in sentence 22 mainly to —",
          choices: [
            { letter: "A", text: "prove that the library opens too late in the morning" },
            { letter: "B", text: "show that the author has personally copied homework" },
            { letter: "C", text: "criticize sophomores for poor time management" },
            { letter: "D", text: "frame the argument with a concrete picture of who bears the cost" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── LONG · Paired texts (level 2) ───────────────────────── */
    {
      id: "g10-l-dsr-community-fridge",
      family: "G10",
      title: "The Blue Fridge: Bulletin + Volunteer's Post",
      kind: "Paired texts · 10.DSR",
      blurb: "A neighborhood bulletin explains how the corner fridge works; a student volunteer explains what the numbers miss.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Elm Street Community Fridge: How It Works</strong> (from the Elm Street Neighbors bulletin)</p>" +
        "<p>" + N(1) + "The blue refrigerator on the corner of Elm and Fourth is not abandoned, and it is not for sale. " +
        N(2) + "It is a community fridge, one of a growing number nationwide, and it has run on one simple rule since it was plugged in last April: take what you need, leave what you can. " +
        N(3) + "It sits inside a small wooden shelter built by volunteers, which keeps off the rain and holds a shelf of dry goods. " +
        N(4) + "It draws power from an outdoor outlet donated by Fourth Street Bakery, whose owner also checks the temperature every morning.</p>" +
        "<p>" + N(5) + "Anyone may open the door. " +
        N(6) + "There is no sign-in, no form, and no one watching. " +
        N(7) + "That anonymity is deliberate; organizers wanted a place where a family having a hard month could pick up milk and eggs without having to explain themselves to anyone.</p>" +
        "<p>" + N(8) + "Donations follow a short list of rules posted on the door. " +
        N(9) + "Sealed, dated food only; no raw meat; no home-cooked meals; produce must be whole and unspoiled. " +
        N(10) + "A volunteer crew of about twenty people, working in two-hour shifts, wipes the shelves, discards anything past its date, and logs what went in and what went out. " +
        N(11) + "In its first six months the fridge moved roughly four thousand pounds of food. " +
        N(12) + "Most donations come from two grocery stores that would otherwise discard produce near its sell-by date, and from neighbors dropping off a bag on the way home. " +
        N(13) + "The association needs more volunteers for the winter schedule; contact the coordinator through the bulletin's email.</p>" +
        "<p><strong>Text 2 — What I Learned Wiping a Shelf</strong> (a post from a student volunteer's blog)</p>" +
        "<p>" + N(14) + "I signed up for the Thursday evening shift at the Elm Street fridge because I needed service hours, which is not a noble reason, and I am not going to pretend it was. " +
        N(15) + "I figured I would wipe a shelf, throw out some old yogurt, and leave.</p>" +
        "<p>" + N(16) + "The first thing I noticed was how fast things move. " +
        N(17) + "I put out a crate of oranges at 5:15, and by the time I had finished checking dates on the dry-goods shelf, half of them were gone. " +
        N(18) + "I never saw anyone take them. " +
        N(19) + "People come when the volunteer is turned the other way, and after a couple of weeks I understood that this was the point, and I started turning the other way on purpose.</p>" +
        "<p>" + N(20) + "The second thing I noticed was what people leave. " +
        N(21) + "It is not only the grocery store crates. " +
        N(22) + "One week there was a bag of homegrown tomatoes with a note that said \"too many again.\" " +
        N(23) + "Another week, six cartons of eggs and a box of the good kind of tea. " +
        N(24) + "Once, a single can of soup, placed exactly in the middle of the shelf as if someone had thought hard about it.</p>" +
        "<p>" + N(25) + "I still log it all, pounds in and pounds out, the way the coordinator asks. " +
        N(26) + "But the numbers do not tell you what the note on the tomatoes tells you, which is that the fridge is less a charity than a conversation between neighbors who mostly never meet. " +
        N(27) + "I have my hours now. " +
        N(28) + "I am keeping the shift.</p>",
      claims: [
        {
          id: "shared",
          sol: "10.DSR.D",
          stem: "Which idea do both texts emphasize?",
          choices: [
            { letter: "A", text: "The fridge depends on donations from the bakery." },
            { letter: "B", text: "The fridge works because people can use it without being seen or questioned." },
            { letter: "C", text: "Volunteers should be paid for their two-hour shifts." },
            { letter: "D", text: "The fridge will need a second shelter before winter." }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "Which statement best describes how the two texts differ?",
          choices: [
            { letter: "A", text: "Text 1 argues against the fridge, while Text 2 argues for it." },
            { letter: "B", text: "Text 1 describes a single evening, while Text 2 covers six months." },
            { letter: "C", text: "Text 1 is written by a volunteer, while Text 2 is written by the coordinator." },
            { letter: "D", text: "Text 1 explains how the fridge operates, while Text 2 reflects on what volunteering there means." }
          ],
          correct: "D"
        },
        {
          id: "selecttwo",
          sol: "10.DSR.E",
          stem: "Select TWO sentences, one from each text, that together best support the idea that not watching users is essential to how the fridge works.",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 19" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "deliberate",
          sol: "10.RV.1.B",
          stem: "In sentence 7, the word deliberate most nearly means —",
          choices: [
            { letter: "A", text: "intentional" },
            { letter: "B", text: "temporary" },
            { letter: "C", text: "unfortunate" },
            { letter: "D", text: "expensive" }
          ],
          correct: "A"
        },
        {
          id: "noble",
          sol: "10.RI.1.C",
          stem: "The writer of Text 2 admits in sentence 14 that the reason for volunteering was not a noble one mainly to —",
          choices: [
            { letter: "A", text: "warn readers that service hours are a waste of time" },
            { letter: "B", text: "criticize the school's service requirement" },
            { letter: "C", text: "establish an honest voice that makes the later change of heart believable" },
            { letter: "D", text: "explain why the coordinator assigned the Thursday shift" }
          ],
          correct: "C"
        },
        {
          id: "numbers",
          sol: "10.DSR.E",
          stem: "How does sentence 26 in Text 2 respond to the logging described in sentence 10 of Text 1?",
          choices: [
            { letter: "A", text: "It argues that volunteers should stop keeping records." },
            { letter: "B", text: "It shows that the records in Text 1 are inaccurate." },
            { letter: "C", text: "It explains how the coordinator uses the records." },
            { letter: "D", text: "It suggests that the records cannot capture what the fridge means to neighbors." }
          ],
          correct: "D"
        },
        {
          id: "rules",
          sol: "10.RI.2.A",
          stem: "In Text 1, sentences 8 and 9 are organized as —",
          choices: [
            { letter: "A", text: "a question followed by an answer" },
            { letter: "B", text: "a general statement followed by specific rules" },
            { letter: "C", text: "a problem followed by a solution" },
            { letter: "D", text: "a claim followed by an example" }
          ],
          correct: "B"
        },
        {
          id: "only1",
          sol: "10.DSR.D",
          stem: "Which detail appears in Text 1 but not in Text 2?",
          choices: [
            { letter: "A", text: "Volunteers record what goes in and out." },
            { letter: "B", text: "Neighbors sometimes leave homegrown produce." },
            { letter: "C", text: "A local bakery supplies the fridge's electricity." },
            { letter: "D", text: "Food sometimes disappears within minutes." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── EPIC · Literary (level 3) ───────────────────────── */
    {
      id: "g10-e-rl-ledger",
      family: "G10",
      title: "The Green Ledger",
      kind: "Literary · 10.RL",
      blurb: "A closed tailor shop, forty-one years of handwritten accounts, and a column of penciled stars that do not mean what Nadia thinks.",
      level: 3,
      passage:
        "<p>" + N(1) + "The shop still smelled like her great-aunt: chalk, steam, and the lemon oil she used on the cutting table. " +
        N(2) + "Nadia had been given one week and one job. " +
        N(3) + "Close the accounts, her mother had said, handing her the key; find out who owes what, send the letters, and then the landlord can have it. " +
        N(4) + "It was the kind of task her mother assigned when she could not face a thing herself, and Nadia, who was seventeen and good with spreadsheets, had agreed mostly so that nobody else would have to.</p>" +
        "<p>" + N(5) + "The ledger was a green cloth book, and Aunt Farah had kept it by hand for forty-one years. " +
        N(6) + "Every job had a line: the customer's name, the garment, the work, the price, and the date paid. " +
        N(7) + "Nadia went through it with a ruler, and by Wednesday she had found the pattern. " +
        N(8) + "Scattered through the pages, perhaps one job in thirty, were entries with a small penciled star beside the name and nothing in the paid column. " +
        N(9) + "A wedding dress taken in, starred. " +
        N(10) + "A boy's suit, let out at the shoulders, starred. " +
        N(11) + "Three winter coats, relined, starred. " +
        N(12) + "She added them up and got a number that made her sit back: four thousand three hundred dollars over the years, work done and never collected.</p>" +
        "<p>" + N(13) + "So that was the job, then. " +
        N(14) + "She started the letters on Thursday. " +
        N(15) + "They were polite and short: our records show an outstanding balance for services provided by Farah Haddad Alterations; please contact us at the number below. " +
        N(16) + "She had printed nine when the bell over the door rang and a man in his seventies came in holding a navy jacket over his arm as carefully as if it were sleeping.</p>" +
        "<p>" + N(17) + "\"I heard she passed,\" he said. \"I wondered if anyone was still here.\" " +
        N(18) + "The jacket needed a button. " +
        N(19) + "Nadia explained that the shop was closing and she was only settling the books, and the man nodded and did not leave. " +
        N(20) + "He looked at the ledger open on the counter, and something moved in his face. " +
        N(21) + "\"Is my name in there?\" he asked. \"Dubois. Around 1998. A gray suit.\" " +
        N(22) + "She found it in a minute. " +
        N(23) + "Gray suit, hemmed and pressed. " +
        N(24) + "Star. " +
        N(25) + "Nothing in the paid column. " +
        N(26) + "She felt her face go warm, turned the book so he could see it, and started to say something about balances.</p>" +
        "<p>" + N(27) + "\"That was my father's funeral,\" Mr. Dubois said, before she could finish. \"I'd just lost my job. I asked if she could do it by Friday and I'd pay her in a month, and she said she'd do it by Thursday and I'd pay when I could.\" " +
        N(28) + "He touched the penciled star with one finger. " +
        N(29) + "\"I came back with the money in the spring. She wouldn't take it. She said the book was already closed on that one.\" " +
        N(30) + "He picked up the jacket. " +
        N(31) + "\"I've brought her every piece of clothing I've owned since. I paid for all of those.\"</p>" +
        "<p>" + N(32) + "After he left, Nadia sat for a long time with the nine letters in front of her. " +
        N(33) + "She had thought the stars were debts. " +
        N(34) + "They were the opposite of debts. " +
        N(35) + "They were the places where her great-aunt had looked at a person across the counter and decided, privately, that the account was settled the moment the work was done. " +
        N(36) + "Four thousand three hundred dollars was not money the shop was owed; it was money the shop had chosen, again and again, to give away, and had never mentioned. " +
        N(37) + "Nadia fed the letters into the shredder one at a time. " +
        N(38) + "Then she found a pencil in the drawer, turned to the last used page of the ledger, and wrote a single line: navy jacket, one button, D. Dubois. " +
        N(39) + "She left the paid column empty, drew a small star beside the name, and sat down at the machine to learn to sew a button on the way her aunt would have.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of the story about the ledger?",
          choices: [
            { letter: "A", text: "Family businesses fail when owners give away too much work." },
            { letter: "B", text: "A person's records should be destroyed after death to protect their privacy." },
            { letter: "C", text: "The truest generosity is often done quietly and discovered only later." },
            { letter: "D", text: "Young people are better at managing money than their elders." }
          ],
          correct: "C"
        },
        {
          id: "number",
          sol: "10.RL.1.B",
          stem: "The figure of four thousand three hundred dollars in sentence 12 is important to the plot because —",
          choices: [
            { letter: "A", text: "its meaning is reversed by sentence 36" },
            { letter: "B", text: "it is the amount Mr. Dubois offers to pay in sentence 29" },
            { letter: "C", text: "it convinces Nadia's mother to keep the shop open" },
            { letter: "D", text: "it is the rent the landlord is owed" }
          ],
          correct: "A"
        },
        {
          id: "nadia",
          sol: "10.RL.1.C",
          stem: "Sentence 4 characterizes Nadia as someone who —",
          choices: [
            { letter: "A", text: "enjoys taking charge of family decisions" },
            { letter: "B", text: "resents being asked to do her mother's work" },
            { letter: "C", text: "hopes to run the shop herself someday" },
            { letter: "D", text: "takes on hard tasks so that others are spared them" }
          ],
          correct: "D"
        },
        {
          id: "sleeping",
          sol: "10.RL.2.A",
          stem: "The simile as carefully as if it were sleeping in sentence 16 mainly suggests that the jacket —",
          choices: [
            { letter: "A", text: "is old and falling apart" },
            { letter: "B", text: "is precious to the man who carries it" },
            { letter: "C", text: "belongs to someone other than the man" },
            { letter: "D", text: "has been recently cleaned and pressed" }
          ],
          correct: "B"
        },
        {
          id: "outstanding",
          sol: "10.RL.2.C",
          stem: "In sentence 15, the word outstanding most nearly means —",
          choices: [
            { letter: "A", text: "still unpaid" },
            { letter: "B", text: "unusually large" },
            { letter: "C", text: "of excellent quality" },
            { letter: "D", text: "easy to notice" }
          ],
          correct: "A"
        },
        {
          id: "short",
          sol: "10.RL.3.A",
          stem: "The author uses the very short sentences 23 through 25 mainly to —",
          choices: [
            { letter: "A", text: "show that Nadia is reading the ledger too quickly" },
            { letter: "B", text: "speed past a detail that does not matter" },
            { letter: "C", text: "suggest that the entry was written carelessly" },
            { letter: "D", text: "let each discovery land one at a time, as Nadia sees it" }
          ],
          correct: "D"
        },
        {
          id: "paid",
          sol: "10.RL.2.B",
          stem: "Sentence 31 mainly suggests that Mr. Dubois —",
          choices: [
            { letter: "A", text: "felt the gift obligated him to pay double later" },
            { letter: "B", text: "repaid the kindness with decades of loyalty" },
            { letter: "C", text: "is worried that Nadia will bill him again" },
            { letter: "D", text: "owns more clothing than he needs" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "Sentences 38 and 39 mainly show that Nadia has decided to —",
          choices: [
            { letter: "A", text: "keep the shop open permanently and run it herself" },
            { letter: "B", text: "charge Mr. Dubois for the button once the shop reopens" },
            { letter: "C", text: "continue her aunt's practice instead of closing the books" },
            { letter: "D", text: "give the ledger to Mr. Dubois as a keepsake of her aunt" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── EPIC · Literary (level 2) ───────────────────────── */
    {
      id: "g10-e-rl-driving-lessons",
      family: "G10",
      title: "The Empty Lot",
      kind: "Literary · 10.RL",
      blurb: "Rosa has had her license for two months. Her older brother has never driven at all, and he needs it to be her.",
      level: 2,
      passage:
        "<p>" + N(1) + "Everyone assumed it would be the other way around. " +
        N(2) + "Leo was twenty-four, had a job downtown and an apartment with a real couch, and had been, for Rosa's whole life, the person who knew how things worked. " +
        N(3) + "But Leo had never learned to drive. " +
        N(4) + "He had taken the bus through high school and college and told anyone who asked that he did not need a car in the city, which was true, and also not the reason. " +
        N(5) + "The reason was that at fifteen he had frozen at a four-way stop with their father beside him, and their father, who was not a patient man, had said something Leo never repeated, and Leo had gotten out, walked home, and not sat behind a wheel since.</p>" +
        "<p>" + N(6) + "Rosa got her license in March, on the first try. " +
        N(7) + "In April Leo's company moved to an office park forty minutes from the nearest bus line. " +
        N(8) + "In May, at Sunday dinner, he set down his fork and said, to the table generally, \"I need to learn to drive,\" and then, to Rosa specifically, \"and I need it to be you.\"</p>" +
        "<p>" + N(9) + "They started in the lot behind the closed furniture store, on a Saturday morning when nobody was there. " +
        N(10) + "Rosa had prepared. " +
        N(11) + "She had watched videos. " +
        N(12) + "She had a list on her phone: mirrors, seat, brake, ignition. " +
        N(13) + "She had decided, walking to the car, that she would not raise her voice, and that she would not say \"just,\" as in \"just turn,\" because there was no such thing as just anything when your hands were shaking. " +
        N(14) + "Leo's hands were shaking. " +
        N(15) + "He adjusted the mirror four times. " +
        N(16) + "\"Take your time,\" Rosa said, and heard how much she sounded like their mother, and let it be.</p>" +
        "<p>" + N(17) + "He drove forward twenty feet and stopped. " +
        N(18) + "He drove forward fifty feet, turned, and stopped. " +
        N(19) + "By eleven he had made six slow laps of the lot, and on the seventh, when a delivery truck swung in at the far end, he hit the brake so hard that both of them lurched against the belts, and he put the car in park and sat with both hands on the wheel, saying nothing. " +
        N(20) + "Rosa did not say anything either. " +
        N(21) + "She had learned that spring, teaching her cousin's kids to swim, that the worst thing you could do when someone was frightened was fill the air. " +
        N(22) + "The truck backed up to the loading dock and its driver went inside. " +
        N(23) + "\"He didn't even see us,\" Leo said finally. " +
        N(24) + "\"No.\" " +
        N(25) + "\"I thought—\" He stopped. \"It's stupid.\" " +
        N(26) + "\"It's not stupid,\" Rosa said. \"It's a truck. Trucks are big. Do you want to go again?\" " +
        N(27) + "He looked at her, and she saw something she had not seen before in her brother's face, which was that he was waiting to be told what to do, and that he was trusting her to tell him.</p>" +
        "<p>" + N(28) + "They went again. " +
        N(29) + "They went again the next Saturday, and the one after, and in June they left the lot for the first time and drove the loop behind the school at twenty-five miles an hour, past sprinklers and a kid on a scooter who did not know he was part of something. " +
        N(30) + "At the four-way stop on Linden, Leo slowed, and stopped, and looked left and right, and Rosa watched his knuckles whiten on the wheel and said nothing at all. " +
        N(31) + "A car across the intersection waited for him. " +
        N(32) + "Leo went.</p>" +
        "<p>" + N(33) + "On the way home he was quiet, and then he said, \"You're good at this.\" " +
        N(34) + "\"I watched a lot of videos.\" " +
        N(35) + "\"That's not what I mean.\" " +
        N(36) + "Rosa knew that it was not. " +
        N(37) + "She looked out at the houses going by, each one at exactly the speed limit, and thought that she had spent her whole life being the one who was taught, and that the teaching had been going on the whole time, in both directions, and she had only just been handed the wheel.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of the story about Rosa and Leo?",
          choices: [
            { letter: "A", text: "Younger siblings should not be trusted with serious responsibilities." },
            { letter: "B", text: "Fear can only be overcome by facing it alone." },
            { letter: "C", text: "Learning to drive is the most important step toward adulthood." },
            { letter: "D", text: "The roles people play in a family can shift when one of them needs help." }
          ],
          correct: "D"
        },
        {
          id: "backstory",
          sol: "10.RL.1.B",
          stem: "The account of Leo's past in sentence 5 is important to the plot mainly because it —",
          choices: [
            { letter: "A", text: "explains why the family stopped eating Sunday dinner together" },
            { letter: "B", text: "gives the four-way stop in sentence 30 its weight as the story's climax" },
            { letter: "C", text: "shows that Leo blames Rosa for his fear" },
            { letter: "D", text: "reveals that the father will teach Leo instead" }
          ],
          correct: "B"
        },
        {
          id: "rosa",
          sol: "10.RL.1.C",
          stem: "Sentence 13 characterizes Rosa as —",
          choices: [
            { letter: "A", text: "thoughtful about how her words might affect someone who is afraid" },
            { letter: "B", text: "nervous that she does not know enough to teach" },
            { letter: "C", text: "irritated that Leo has waited so long to learn" },
            { letter: "D", text: "eager to prove that she is a better driver than Leo" }
          ],
          correct: "A"
        },
        {
          id: "lurched",
          sol: "10.RL.2.C",
          stem: "In sentence 19, the word lurched most nearly means —",
          choices: [
            { letter: "A", text: "slid slowly sideways" },
            { letter: "B", text: "leaned back to relax" },
            { letter: "C", text: "jerked suddenly forward" },
            { letter: "D", text: "reached out to grab" }
          ],
          correct: "C"
        },
        {
          id: "short",
          sol: "10.RL.3.A",
          stem: "The author uses the two short, parallel sentences 17 and 18 mainly to —",
          choices: [
            { letter: "A", text: "show that Leo is a naturally skilled driver" },
            { letter: "B", text: "convey the slow, step-by-step pace of Leo's progress" },
            { letter: "C", text: "suggest that Rosa is bored by the lesson" },
            { letter: "D", text: "hint that the lot is too small for practice" }
          ],
          correct: "B"
        },
        {
          id: "swim",
          sol: "10.RL.2.B",
          stem: "The detail about the swimming lessons in sentence 21 mainly suggests that Rosa's silence is —",
          choices: [
            { letter: "A", text: "a sign that she has given up on the lesson" },
            { letter: "B", text: "a way of hiding her own fear of the truck" },
            { letter: "C", text: "a habit she picked up from their father" },
            { letter: "D", text: "a deliberate choice she learned from another kind of teaching" }
          ],
          correct: "D"
        },
        {
          id: "shift",
          sol: "10.RL.1.C",
          stem: "How does sentence 27 relate to the description of Leo in sentence 2?",
          choices: [
            { letter: "A", text: "It reverses it: the sibling who always knew how things worked now depends on Rosa's guidance." },
            { letter: "B", text: "It confirms it: Leo is still the one who understands how things work." },
            { letter: "C", text: "It explains it: Rosa learns why Leo moved to an apartment downtown." },
            { letter: "D", text: "It contradicts it: Leo has never actually been good at anything." }
          ],
          correct: "A"
        },
        {
          id: "wheel",
          sol: "10.RL.2.A",
          stem: "The phrase she had only just been handed the wheel in sentence 37 mainly conveys that Rosa —",
          choices: [
            { letter: "A", text: "has taken over driving for the rest of the trip home" },
            { letter: "B", text: "is nervous about driving on the highway" },
            { letter: "C", text: "has newly recognized her own role as someone who can guide others" },
            { letter: "D", text: "expects Leo to buy her a car as a reward" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── EPIC · Informational (level 2) ───────────────────────── */
    {
      id: "g10-e-ri-sidewalk-trees",
      family: "G10",
      title: "What the Sidewalk Hides",
      kind: "Informational · 10.RI",
      blurb: "Why a street tree that should live a century often dies in ten years, and the fix that nobody can see.",
      level: 2,
      passage:
        "<p>" + N(1) + "A tree planted along a city sidewalk is, by most measures, in trouble from the day it arrives. " +
        N(2) + "Its roots are given a square of soil about the size of a kitchen table, hemmed in on four sides by concrete. " +
        N(3) + "The soil itself has usually been packed down hard by decades of foot traffic and construction equipment, so that roots cannot push through it and water runs off rather than soaking in. " +
        N(4) + "Above ground, the tree faces reflected heat from pavement, salt from winter roads, the occasional bicycle chained to its trunk, and dogs. " +
        N(5) + "Foresters who study urban trees have found that the average life span of a tree planted in such a pit is startlingly short: in some downtowns, seven to ten years, compared with a century or more for the same species in a park.</p>" +
        "<p>" + N(6) + "For a long time, cities simply planted more trees to replace the ones that died, an approach that kept the streets green and the nurseries busy but solved nothing. " +
        N(7) + "Then, in the 1990s, researchers began to ask a different question. " +
        N(8) + "Instead of asking why the trees were dying, they asked what a tree actually needed in order to live, and the answer turned out to be almost entirely about what happens underground.</p>" +
        "<p>" + N(9) + "A healthy mature shade tree needs roughly a thousand cubic feet of soil that its roots can move through, about the volume of a small bedroom. " +
        N(10) + "A standard sidewalk pit provides perhaps a tenth of that. " +
        N(11) + "The roots that do escape the pit find only compacted fill, and so they do what roots do: they follow the path of least resistance, which is often the narrow gap directly beneath the sidewalk slab. " +
        N(12) + "There they thicken, and within a decade the slab tilts and cracks, and the city sends a crew to cut the roots and pour a new slab, and the tree, now missing half its anchor, begins to die. " +
        N(13) + "The cracked sidewalk that people blame on the tree is, in other words, a symptom of a tree that was never given anywhere else to go.</p>" +
        "<p>" + N(14) + "The solutions that emerged are less glamorous than a new tree and far more effective. " +
        N(15) + "One is structural soil, a blend of crushed stone and clay loam that is strong enough to support a sidewalk above it yet full of gaps that roots and water can enter. " +
        N(16) + "Cities that install it can extend a tree's usable soil far beyond the visible pit, under the whole length of the sidewalk. " +
        N(17) + "Another is the suspended pavement system, in which plastic frames like oversized milk crates hold up the sidewalk while loose, uncompacted soil fills the space inside them. " +
        N(18) + "A third is simply to connect the pits, so that a row of five trees shares one long trench instead of five isolated boxes.</p>" +
        "<p>" + N(19) + "The results, where these methods have been tried, are dramatic. " +
        N(20) + "In one Northeastern city, street trees planted in suspended pavement in 2008 had, ten years later, trunks nearly twice as thick as trees of the same species and age planted in conventional pits a few blocks away. " +
        N(21) + "Their canopies shaded more sidewalk, they absorbed more stormwater, and the sidewalks above them had not needed a single repair. " +
        N(22) + "The up-front cost was higher, about three times the price of a standard pit, but when the accountants included the cost of replacing dead trees and repairing heaved concrete, the expensive method turned out to be the cheaper one within fifteen years.</p>" +
        "<p>" + N(23) + "None of this is visible from the street. " +
        N(24) + "A person walking past a thriving thirty-year-old maple on a downtown corner sees only a tree and assumes it got lucky. " +
        N(25) + "What she is actually looking at is a decision made underground, three decades earlier, by someone who understood that the part of a tree you cannot see is the part that decides whether you will ever see it grow old.</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the article?",
          choices: [
            { letter: "A", text: "Cities should stop planting trees along sidewalks because they damage the concrete." },
            { letter: "B", text: "Street trees die young mainly because of what happens underground, and designing better soil space fixes the problem." },
            { letter: "C", text: "Structural soil is the only reliable method for keeping sidewalk trees alive." },
            { letter: "D", text: "Park trees live longer than street trees because they receive more sunlight." }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          stem: "Which statement best describes the overall structure of the article?",
          choices: [
            { letter: "A", text: "It compares three cities and ranks their tree programs." },
            { letter: "B", text: "It tells the life story of a single maple from planting to old age." },
            { letter: "C", text: "It presents a problem and its cause, then describes solutions and their results." },
            { letter: "D", text: "It lists the dangers a street tree faces in order of seriousness." }
          ],
          correct: "C"
        },
        {
          id: "hemmed",
          sol: "10.RV.1.B",
          stem: "In sentence 2, the phrase hemmed in most nearly means —",
          choices: [
            { letter: "A", text: "tightly enclosed" },
            { letter: "B", text: "neatly decorated" },
            { letter: "C", text: "partly hidden" },
            { letter: "D", text: "carefully measured" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "10.RI.1.B",
          stem: "Which sentence best supports the claim that the more expensive planting method saves money in the long run?",
          choices: [
            { letter: "A", text: "Sentence 14" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: "D"
        },
        {
          id: "symptom",
          sol: "10.RI.1.C",
          stem: "Sentence 13 implies that —",
          choices: [
            { letter: "A", text: "trees should be planted much farther away from sidewalks and roads" },
            { letter: "B", text: "repair crews deliberately harm trees when they replace cracked slabs" },
            { letter: "C", text: "sidewalk damage results from poor planting design, not from the tree itself" },
            { letter: "D", text: "most people would rather have smooth sidewalks than shade" }
          ],
          correct: "C"
        },
        {
          id: "bedroom",
          sol: "10.RI.2.B",
          stem: "The author compares a thousand cubic feet to a small bedroom in sentence 9 mainly to —",
          choices: [
            { letter: "A", text: "help readers picture an unfamiliar quantity" },
            { letter: "B", text: "suggest that trees should be planted indoors" },
            { letter: "C", text: "show that houses take up space that trees need" },
            { letter: "D", text: "explain how foresters measure soil" }
          ],
          correct: "A"
        },
        {
          id: "lifespan",
          sol: "10.RI.2.A",
          stem: "How do the life-span figures in sentence 5 and the results in sentences 20 and 21 work together?",
          choices: [
            { letter: "A", text: "Sentence 5 describes park trees, and sentences 20 and 21 describe street trees." },
            { letter: "B", text: "Sentence 5 gives the cost of the problem, and sentences 20 and 21 give the cost of the solution." },
            { letter: "C", text: "Sentence 5 states an opinion that sentences 20 and 21 later disprove." },
            { letter: "D", text: "Sentence 5 establishes the problem of early death that sentences 20 and 21 show being addressed." }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The phrase assumes it got lucky in sentence 24 gives the sentence a tone that is —",
          choices: [
            { letter: "A", text: "angry" },
            { letter: "B", text: "gently ironic" },
            { letter: "C", text: "anxious" },
            { letter: "D", text: "strictly factual" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── EPIC · Informational (level 3) ───────────────────────── */
    {
      id: "g10-e-ri-edna",
      family: "G10",
      title: "Reading the Water",
      kind: "Informational · 10.RI",
      blurb: "For centuries the only way to know what lived in a lake was to catch it. Now a bottle of water can answer.",
      level: 3,
      passage:
        "<p>" + N(1) + "For most of the history of biology, the only way to know what lived in a lake was to go and catch it. " +
        N(2) + "Scientists dragged nets, set traps, waded with electrical stunning gear, and counted what came up, and their surveys were only as good as their luck: a rare fish that happened to be elsewhere that afternoon simply did not exist on paper. " +
        N(3) + "Over the last fifteen years, a technique has emerged that turns the problem inside out. " +
        N(4) + "Instead of looking for the animal, researchers look for what it leaves behind.</p>" +
        "<p>" + N(5) + "Every living thing sheds cells constantly, in skin, scales, mucus and waste, and each of those cells carries DNA. " +
        N(6) + "In water, that genetic material lingers for days to weeks before it breaks down, suspended in the current like an invisible signature. " +
        N(7) + "Environmental DNA, or eDNA, is the practice of collecting a liter or two of water, filtering it through a membrane fine enough to trap those cells, and then reading the DNA on the filter against a library of known species. " +
        N(8) + "A single sample can reveal not only the trout a biologist expected but the invasive carp nobody had seen, the salamander thought to have vanished, and, on occasion, the pet goldfish someone released last spring.</p>" +
        "<p>" + N(9) + "The method's first widely reported success came in the search for invasive species. " +
        N(10) + "A team monitoring a canal system for a fast-spreading carp found carp DNA in stretches of water where months of netting had turned up nothing. " +
        N(11) + "The fish were there, but they were few and wary, exactly the kind of population that traditional surveys miss and that managers most need to catch early, before a handful becomes a thousand. " +
        N(12) + "Since then, eDNA has been used to confirm the presence of endangered frogs in ponds too fragile to wade through, to track the spread of a fungus that kills bats, and to survey the fish of a river in a single afternoon that would once have taken a crew all summer.</p>" +
        "<p>" + N(13) + "The technique has limits, and honest practitioners are quick to list them. " +
        N(14) + "DNA tells you that a species was present, not how many individuals there were, and not whether they were alive; a dead fish sheds cells as readily as a living one. " +
        N(15) + "Currents can carry genetic material miles downstream from its source, so a positive result in one spot may point to an animal that lives somewhere else entirely. " +
        N(16) + "Contamination is a constant worry: a technician's boots, a boat's hull, or a bird that ate a fish upstream can all deposit DNA where the animal itself never went. " +
        N(17) + "And a match is only as good as the reference library; a species whose DNA has never been sequenced cannot be found, no matter how much of it is in the water.</p>" +
        "<p>" + N(18) + "For these reasons, most researchers describe eDNA not as a replacement for nets and traps but as a first pass, a way of deciding where to look hard. " +
        N(19) + "A negative result over many samples lets managers spend scarce money elsewhere. " +
        N(20) + "A positive result sends a crew out with gear to confirm it. " +
        N(21) + "Used that way, the method does not remove the need for the wading biologist; it makes sure she is wading in the right place.</p>" +
        "<p>" + N(22) + "Perhaps the most striking change is one of scale. " +
        N(23) + "Because collecting a water sample requires no special skill, schools, fishing clubs and volunteer groups have begun sending bottles to laboratories by the thousands, building maps of what lives where that no agency could afford to draw on its own. " +
        N(24) + "The lake has always been full of information. " +
        N(25) + "Until recently, nobody had a way to read it.</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          stem: "Which statement best summarizes the article's main idea?",
          choices: [
            { letter: "A", text: "Environmental DNA is a powerful but limited tool that has changed how scientists find out what lives in water." },
            { letter: "B", text: "Traditional nets and traps should be abandoned because they miss rare species." },
            { letter: "C", text: "Invasive carp are the greatest threat to the nation's canals and rivers." },
            { letter: "D", text: "Volunteers now do most of the scientific work once done by biologists." }
          ],
          correct: "A"
        },
        {
          id: "limits",
          sol: "10.RI.2.A",
          stem: "The fourth paragraph (sentences 13 through 17) is organized as —",
          choices: [
            { letter: "A", text: "a series of steps for collecting a sample" },
            { letter: "B", text: "a comparison of eDNA with netting" },
            { letter: "C", text: "a story about one failed survey" },
            { letter: "D", text: "a list of limitations that qualify the method's promise" }
          ],
          correct: "D"
        },
        {
          id: "wary",
          sol: "10.RV.1.B",
          stem: "In sentence 11, the word wary most nearly means —",
          choices: [
            { letter: "A", text: "weak from hunger" },
            { letter: "B", text: "cautious and hard to approach" },
            { letter: "C", text: "unusually large" },
            { letter: "D", text: "spread across a wide area" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "10.RI.1.B",
          stem: "Which sentence best supports the claim that eDNA can detect what traditional surveys miss?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "C"
        },
        {
          id: "paper",
          sol: "10.RI.1.C",
          stem: "The phrase simply did not exist on paper in sentence 2 implies that —",
          choices: [
            { letter: "A", text: "scientists refused to record rare fish" },
            { letter: "B", text: "rare fish were usually caught but not counted" },
            { letter: "C", text: "records were kept on paper rather than computers" },
            { letter: "D", text: "official records could be wrong because they depended on chance" }
          ],
          correct: "D"
        },
        {
          id: "wading",
          sol: "10.RI.2.B",
          stem: "The image of the wading biologist in sentence 21 mainly serves to —",
          choices: [
            { letter: "A", text: "argue that fieldwork is far more dangerous than laboratory analysis" },
            { letter: "B", text: "suggest that most of the researchers who use eDNA are women" },
            { letter: "C", text: "show that eDNA guides fieldwork rather than replacing it, echoing sentence 2" },
            { letter: "D", text: "explain why water samples must be collected in shallow water" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "10.RI.2.A",
          stem: "Sentences 24 and 25 conclude the article by —",
          choices: [
            { letter: "A", text: "returning to the opening problem and recasting the lake as something readable" },
            { letter: "B", text: "introducing a newer method that will soon replace eDNA entirely" },
            { letter: "C", text: "warning that lakes are losing rare species faster than ever before" },
            { letter: "D", text: "summarizing the four limitations listed in the fourth paragraph" }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "10.RI.2.C",
          stem: "The author's attitude toward eDNA is best described as —",
          choices: [
            { letter: "A", text: "openly skeptical" },
            { letter: "B", text: "enthusiastic but measured" },
            { letter: "C", text: "detached and bored" },
            { letter: "D", text: "uncritically admiring" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
