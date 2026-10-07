/* SOL Labyrinth — Grade 11 mid packs (stamina tier for nights 51–64), file c101.
 * Seventeen MID packs (310–370 words; poems 18–22 lines; paired texts 170–200 words each) built around
 * a school newspaper, solar and wind energy, deep-sea exploration and desert ecosystems. Original
 * Virginia EOC Reading-style content for the G11 family; no published text, no real people.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── LITERARY ───────────────────────── */
    {
      id: "g11-rl-c101-correction",
      family: "G11",
      title: "The Correction",
      kind: "Literary · 11.RL",
      blurb: "A student editor finds a missing digit in her front-page story and has to decide what to do about it.",
      level: 2,
      passage:
        "<p>" + N(1) + "The error was a single missing digit, and Teodora Vasquez found it on a Thursday morning, two days after the issue reached every homeroom at Linden Hill High. " +
        N(2) + "Her front-page story said the cafeteria renovation would cost $40,000. " +
        N(3) + "The board minutes open on her desk said $14,000. " +
        N(4) + "Somewhere between her notebook and her laptop, a one had slipped away, and with it the argument of her second paragraph, which called the renovation \"a luxury the district can't explain.\"</p>" +
        "<p>" + N(5) + "Her adviser, Mr. Okonkwo, read the minutes and said nothing for a while. " +
        N(6) + "\"So what do you want to do?\" he asked. " +
        N(7) + "Teodora had several answers, none of them good. " +
        N(8) + "She could run a small correction on page six, beneath the crossword, where almost nobody looked. " +
        N(9) + "She could argue that the point still stood, since fourteen thousand dollars was not nothing. " +
        N(10) + "Or she could say nothing and hope that she was the only one who had noticed.</p>" +
        "<p>" + N(11) + "That hope died at lunch, when a sophomore named Kwabena stopped at her table with a folded copy of the paper. " +
        N(12) + "\"My mom's on the facilities committee,\" he said, not unkindly. " +
        N(13) + "\"She wanted to know where the extra twenty-six thousand went.\" " +
        N(14) + "Teodora felt her face heat up like a stovetop someone had forgotten to turn off. " +
        N(15) + "She told him the truth: she had made a mistake, and she was going to fix it.</p>" +
        "<p>" + N(16) + "That night she wrote the correction four times. " +
        N(17) + "The first version blamed a typo; the second blamed the late deadline; the third buried the right number inside a sentence about the renovation's new windows. " +
        N(18) + "The fourth version was two sentences long, and it said exactly what had happened, with her name attached. " +
        N(19) + "She also cut her own line about luxury, because it no longer had anything to stand on.</p>" +
        "<p>" + N(20) + "Mr. Okonkwo read it in the morning and moved it to the bottom of page one. " +
        N(21) + "\"Same size as the story it fixes,\" he said. " +
        N(22) + "Teodora nodded, and for the first time all week the missing digit stopped buzzing in her head like a trapped fly. " +
        N(23) + "A newspaper, she decided, was not a list of things you got right; it was a promise about what you did when you got something wrong.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does Teodora's handling of the cafeteria story most clearly develop?",
          choices: [
            { letter: "A", text: "A reporter earns trust by owning her mistakes openly." },
            { letter: "B", text: "Student reporters should avoid stories about district money." },
            { letter: "C", text: "Small errors in a newspaper rarely matter to its readers." },
            { letter: "D", text: "Advisers should make the final call on what gets printed." }
          ],
          correct: "A"
        },
        {
          id: "pageone",
          sol: "11.RL.1.B",
          stem: "Mr. Okonkwo's decision to move the correction to page one (sentences 20–21) suggests that he believes —",
          choices: [
            { letter: "A", text: "the cafeteria story was too long to share the front page" },
            { letter: "B", text: "Teodora should be embarrassed in front of the whole school" },
            { letter: "C", text: "a correction should be as easy to see as the error it repairs" },
            { letter: "D", text: "most readers never turn past the first page of the paper" }
          ],
          correct: "C"
        },
        {
          id: "drafts",
          sol: "11.RL.1.C",
          stem: "The progression of Teodora's drafts in sentences 16–18 shows that she moves from —",
          choices: [
            { letter: "A", text: "defending her argument to giving up on journalism altogether" },
            { letter: "B", text: "hiding behind her adviser to making every decision alone" },
            { letter: "C", text: "worrying about her readers to worrying only about the board" },
            { letter: "D", text: "excusing the error to stating it plainly under her own name" }
          ],
          correct: "D"
        },
        {
          id: "stovetop",
          sol: "11.RL.2.A",
          stem: "In sentence 14, comparing Teodora's face to a stovetop someone had forgotten to turn off mainly conveys —",
          choices: [
            { letter: "A", text: "her anger toward Kwabena's mother for complaining" },
            { letter: "B", text: "an embarrassment that builds and will not switch off" },
            { letter: "C", text: "her impatience to leave the noisy cafeteria" },
            { letter: "D", text: "her excitement about a new story idea forming" }
          ],
          correct: "B"
        },
        {
          id: "standon",
          sol: "11.RL.2.B",
          stem: "Sentence 19 says Teodora's line about luxury no longer had anything to stand on. This figurative phrase means the line —",
          choices: [
            { letter: "A", text: "had offended the members of the facilities committee" },
            { letter: "B", text: "was printed too low on the page to be noticed" },
            { letter: "C", text: "had lost the factual support that once held it up" },
            { letter: "D", text: "was copied from the board minutes without credit" }
          ],
          correct: "C"
        },
        {
          id: "buried",
          sol: "11.RL.2.C",
          stem: "In sentence 17, the word buried most nearly means —",
          choices: [
            { letter: "A", text: "removed completely from the draft" },
            { letter: "B", text: "tucked where a reader would likely miss it" },
            { letter: "C", text: "repeated in several places for emphasis" },
            { letter: "D", text: "printed in larger, darker type" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "11.RL.3.A",
          stem: "How does sentence 23 function in the structure of \"The Correction\"?",
          choices: [
            { letter: "A", text: "It introduces a new conflict between Teodora and the district board." },
            { letter: "B", text: "It reveals that Mr. Okonkwo quietly rewrote the final correction himself." },
            { letter: "C", text: "It returns to the cafeteria renovation to show the work finished on time." },
            { letter: "D", text: "It widens Teodora's single experience into a belief about what a paper owes." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c101-nacelle",
      family: "G11",
      title: "Inside the Nacelle",
      kind: "Literary · 11.RL",
      blurb: "On her first climb up a wind turbine, an apprentice learns something unexpected about her fearless aunt.",
      level: 3,
      passage:
        "<p>" + N(1) + "The ladder inside Tower 14 rose eighty meters through a steel tube no wider than a closet, and Kiri Tane had been staring up it for a full minute before her aunt cleared her throat. " +
        N(2) + "\"It doesn't get shorter if you look at it,\" Aunt Mereana said, clipping her harness to the safety rail with a click that sounded, to Kiri, far too casual. " +
        N(3) + "This was the first week of Kiri's summer apprenticeship with the wind crew, and so far she had sorted bolts, logged gearbox temperatures, and watched the others stroll toward the towers as if the climb were nothing.</p>" +
        "<p>" + N(4) + "They climbed in stages, resting on platforms set every twenty meters. " +
        N(5) + "Kiri counted rungs at first, then stopped counting, then started again because the numbers gave her something to hold besides the rail. " +
        N(6) + "Below her the open hatch shrank to a coin of daylight. " +
        N(7) + "Above her, Aunt Mereana's boots moved with a steady, unbothered rhythm, the rhythm of someone who had done this six hundred times and had decided long ago that fear was a passenger, not a driver.</p>" +
        "<p>" + N(8) + "At the top, the nacelle was warm and humming, a machine room perched on a pole. " +
        N(9) + "Aunt Mereana opened the roof hatch, and wind poured in, smelling of cut hay. " +
        N(10) + "\"Come look,\" she said. " +
        N(11) + "Kiri did not want to look. " +
        N(12) + "She looked anyway, and the whole valley spread out beneath her: forty white towers turning in slow agreement, their blades catching the late sun like the hands of enormous, patient clocks.</p>" +
        "<p>" + N(13) + "\"When I started,\" her aunt said, \"I was sick on the second platform. " +
        N(14) + "Every day for a month.\" " +
        N(15) + "Kiri stared at her. " +
        N(16) + "\"You never told anyone that.\" " +
        N(17) + "\"Nobody asked.\" " +
        N(18) + "Aunt Mereana tapped the gearbox housing, the way someone might pat a horse. " +
        N(19) + "\"The ones who aren't scared worry me more. They stop checking their clips.\"</p>" +
        "<p>" + N(20) + "Going down was harder, because her legs had turned to rope. " +
        N(21) + "But on each platform she checked her clip twice, out loud, and her aunt did not tease her for it. " +
        N(22) + "When they stepped out onto the gravel at the base, Kiri looked up at the tower and realized she was already calculating how long the climb would take tomorrow.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which idea about fear does Kiri's climb up Tower 14 most clearly develop?",
          choices: [
            { letter: "A", text: "Fear disappears completely once a hard task has been done once." },
            { letter: "B", text: "Fear can be useful when it keeps a person careful and alert." },
            { letter: "C", text: "Fear is a sign that a person has chosen the wrong kind of work." },
            { letter: "D", text: "Fear should be hidden from coworkers so that they keep trusting you." }
          ],
          correct: "B"
        },
        {
          id: "clips",
          sol: "11.RL.1.B",
          stem: "Aunt Mereana's remark in sentence 19 implies that she values —",
          choices: [
            { letter: "A", text: "speed over safety on a long job" },
            { letter: "B", text: "experience over formal training" },
            { letter: "C", text: "silence over honest conversation" },
            { letter: "D", text: "caution over a show of confidence" }
          ],
          correct: "D"
        },
        {
          id: "confession",
          sol: "11.RL.1.C",
          stem: "Aunt Mereana's confession in sentences 13–14 reveals that she —",
          choices: [
            { letter: "A", text: "is willing to share a past weakness to steady her niece" },
            { letter: "B", text: "wants Kiri to quit the apprenticeship before winter" },
            { letter: "C", text: "has grown careless after years of climbing towers" },
            { letter: "D", text: "blames the crew for never training her properly" }
          ],
          correct: "A"
        },
        {
          id: "passenger",
          sol: "11.RL.2.A",
          stem: "In sentence 7, the idea that fear was a passenger, not a driver suggests that Aunt Mereana —",
          choices: [
            { letter: "A", text: "no longer feels any fear while she climbs" },
            { letter: "B", text: "prefers to let other workers lead the climb" },
            { letter: "C", text: "still feels fear but does not let it steer her" },
            { letter: "D", text: "thinks fear makes climbers move more quickly" }
          ],
          correct: "C"
        },
        {
          id: "clocks",
          sol: "11.RL.2.B",
          stem: "In sentence 12, comparing the turbine blades to the hands of enormous, patient clocks creates a mood that is —",
          choices: [
            { letter: "A", text: "tense and threatening" },
            { letter: "B", text: "calm and steady" },
            { letter: "C", text: "playful and silly" },
            { letter: "D", text: "gloomy and regretful" }
          ],
          correct: "B"
        },
        {
          id: "rope",
          sol: "11.RL.2.C",
          stem: "In sentence 20, the phrase her legs had turned to rope most nearly means that Kiri's legs —",
          choices: [
            { letter: "A", text: "were tangled in the straps of her harness" },
            { letter: "B", text: "had grown stronger from the long climb" },
            { letter: "C", text: "were tied to the ladder to keep her safe" },
            { letter: "D", text: "felt weak and unsteady after the effort" }
          ],
          correct: "D"
        },
        {
          id: "frame",
          sol: "11.RL.3.A",
          stem: "How does the final sentence of \"Inside the Nacelle\" connect to the story's opening?",
          choices: [
            { letter: "A", text: "Kiri, who froze at the foot of the ladder, now looks ahead to the next climb." },
            { letter: "B", text: "Kiri, who once loved high places, now decides never to climb again." },
            { letter: "C", text: "Kiri realizes that the ladder is much shorter than she first believed." },
            { letter: "D", text: "Kiri finally learns the exact number of rungs inside the steel tube." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-rl-c101-livefeed",
      family: "G11",
      title: "Live Feed",
      kind: "Literary · 11.RL",
      blurb: "An intern on a research ship spends three hours watching mud on a screen, until the fourth hour.",
      level: 1,
      passage:
        "<p>" + N(1) + "For the first three hours of the dive, the screen showed mud. " +
        N(2) + "Anwar Haddad sat in the control van on the deck of the research ship Kestrel, watching the camera of a remotely operated vehicle drift two thousand meters below the waves. " +
        N(3) + "His job was simple: write down the time whenever the scientists called out something worth noting. " +
        N(4) + "So far he had written down nothing.</p>" +
        "<p>" + N(5) + "Dr. Paulina Szabo sat beside him, steering the vehicle with a joystick no larger than a video game controller. " +
        N(6) + "She did not seem bored at all. " +
        N(7) + "She leaned toward the screen every few seconds, as though the mud might tell her a secret. " +
        N(8) + "\"Look at the tracks,\" she said, pointing at a faint line in the sediment. " +
        N(9) + "\"Something crawled through here. Maybe an hour ago, maybe a year.\" " +
        N(10) + "Anwar squinted and saw only gray.</p>" +
        "<p>" + N(11) + "At the start of the fourth hour, the vehicle's lights swept across a dark ridge of rock. " +
        N(12) + "Dr. Szabo slowed the thrusters. " +
        N(13) + "Clinging to the rock was a pale purple octopus, its arms wrapped around a cluster of tiny white eggs. " +
        N(14) + "It did not swim away from the lights. " +
        N(15) + "It only tightened its grip, the way a person might pull a blanket closer on a cold night.</p>" +
        "<p>" + N(16) + "\"Write down the time,\" Dr. Szabo said softly. " +
        N(17) + "Anwar's pencil was already moving. " +
        N(18) + "She explained that octopuses in the deep sea may guard their eggs for months, even years, without leaving to eat. " +
        N(19) + "The cold water slows everything down, including the growth of the young inside the eggs. " +
        N(20) + "Anwar thought of the tracks in the mud and realized that down here, waiting was not the same as nothing happening.</p>" +
        "<p>" + N(21) + "For the last hour of the dive, he watched the screen the way Dr. Szabo did, leaning in, looking for lines and dents and small shapes half buried in the gray. " +
        N(22) + "When the dive ended, the other interns asked whether anything exciting had happened. " +
        N(23) + "Anwar opened his notebook. " +
        N(24) + "He had filled two pages. " +
        N(25) + "Most of the times were for mud.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme is best developed by Anwar's hours in the control van?",
          choices: [
            { letter: "A", text: "Scientists rarely explain their work to younger helpers." },
            { letter: "B", text: "Technology makes exploring the ocean quick and simple." },
            { letter: "C", text: "Animals in the deep sea are afraid of human visitors." },
            { letter: "D", text: "Close attention can reveal meaning in what seems empty." }
          ],
          correct: "D"
        },
        {
          id: "notebook",
          sol: "11.RL.1.B",
          stem: "Based on sentences 24–25, the reader can infer that by the end of the dive Anwar —",
          choices: [
            { letter: "A", text: "has begun to notice details in the mud that he once ignored" },
            { letter: "B", text: "made careless mistakes when he copied the times" },
            { letter: "C", text: "was too tired to take notes about the octopus" },
            { letter: "D", text: "wanted to impress the other interns by exaggerating" }
          ],
          correct: "A"
        },
        {
          id: "szabo",
          sol: "11.RL.1.C",
          stem: "Which statement best describes Dr. Szabo as she is shown in sentences 5–9?",
          choices: [
            { letter: "A", text: "She is impatient with Anwar's lack of experience." },
            { letter: "B", text: "She is nervous about steering the costly vehicle." },
            { letter: "C", text: "She is patient and curious about small details." },
            { letter: "D", text: "She is bored but hides it to set a good example." }
          ],
          correct: "C"
        },
        {
          id: "blanket",
          sol: "11.RL.2.A",
          stem: "In sentence 15, comparing the octopus's grip to a person pulling a blanket closer mainly suggests that the octopus is —",
          choices: [
            { letter: "A", text: "frightened and about to flee into the dark" },
            { letter: "B", text: "protective and determined to stay with its eggs" },
            { letter: "C", text: "injured by the bright lights of the vehicle" },
            { letter: "D", text: "hungry after weeks without finding any food" }
          ],
          correct: "B"
        },
        {
          id: "secret",
          sol: "11.RL.2.B",
          stem: "The detail in sentence 7, that Dr. Szabo leans in as though the mud might tell her a secret, contributes a tone of —",
          choices: [
            { letter: "A", text: "mocking humor" },
            { letter: "B", text: "open frustration" },
            { letter: "C", text: "quiet anticipation" },
            { letter: "D", text: "deep sorrow" }
          ],
          correct: "C"
        },
        {
          id: "waiting",
          sol: "11.RL.2.C",
          stem: "In sentence 20, Anwar's realization that waiting was not the same as nothing happening most nearly means that —",
          choices: [
            { letter: "A", text: "slow change in the deep sea is still real change" },
            { letter: "B", text: "the long dive had wasted the crew's time" },
            { letter: "C", text: "the octopus would soon abandon its eggs" },
            { letter: "D", text: "he needed to write faster to keep up" }
          ],
          correct: "A"
        },
        {
          id: "fourthhour",
          sol: "11.RL.3.A",
          stem: "The author places the octopus in the fourth hour, after sentences 1–10 describe only mud, mainly to —",
          choices: [
            { letter: "A", text: "show that the vehicle's camera was broken for most of the dive" },
            { letter: "B", text: "suggest that Dr. Szabo was steering in the wrong direction" },
            { letter: "C", text: "explain why the other interns were kept out of the van" },
            { letter: "D", text: "make the discovery feel earned by the long wait before it" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c101-rainyear",
      family: "G11",
      title: "Rain Year",
      kind: "Literary · 11.RL",
      blurb: "A girl who thinks the desert behind her grandmother's house is dead wakes up to a surprise.",
      level: 1,
      passage:
        "<p>" + N(1) + "Ndapewa had spent every school holiday at her grandmother's house on the edge of the desert, and in all those visits she had never seen the ground anything but brown. " +
        N(2) + "The plain behind the house was gravel and dust, broken only by a few gray bushes that looked as if they had given up years ago. " +
        N(3) + "\"Nothing lives out there,\" she told her grandmother once, and Meekulu Selma had only smiled and kept shelling beans.</p>" +
        "<p>" + N(4) + "This year, two days after Ndapewa arrived, it rained. " +
        N(5) + "It was not the polite rain of the city, which tapped on windows and stopped. " +
        N(6) + "It came all at once in the afternoon, loud on the tin roof, and ran off the hard ground in brown streams that filled the dry riverbed for the first time in nine years. " +
        N(7) + "By evening it was gone, and the air smelled sharp and green, like a cut stem.</p>" +
        "<p>" + N(8) + "A week later, Meekulu Selma woke her before sunrise. " +
        N(9) + "\"Bring your shoes,\" she said. \"And be quiet. The plain is listening.\" " +
        N(10) + "Ndapewa rolled her eyes in the dark, but she followed.</p>" +
        "<p>" + N(11) + "At first she saw nothing different. " +
        N(12) + "Then the light came up, and the plain was no longer brown. " +
        N(13) + "Small yellow flowers covered the gravel in every direction, thousands of them, so low and so many that they looked like spilled paint. " +
        N(14) + "Between them grew pale green shoots she had never seen before, and beetles moved from bloom to bloom as if they had been waiting for an invitation.</p>" +
        "<p>" + N(15) + "\"Where did they come from?\" Ndapewa asked. " +
        N(16) + "Her grandmother knelt and touched one of the flowers. " +
        N(17) + "\"They were here the whole time,\" she said. " +
        N(18) + "\"Seeds can sleep in this ground for years. They wait until there is enough water to finish what they start.\" " +
        N(19) + "She pulled a small glass jar from her pocket, half full of tiny black seeds. " +
        N(20) + "\"I collected these the last time. You were too small to remember.\"</p>" +
        "<p>" + N(21) + "That afternoon, Ndapewa helped her fill a second jar. " +
        N(22) + "She wrote the date on the lid and set it on the shelf beside the first one. " +
        N(23) + "She did not say anything about the plain being dead again, and her grandmother, kindly, did not remind her that she once had.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does the blooming of the plain behind Meekulu Selma's house most clearly support?",
          choices: [
            { letter: "A", text: "Grandparents usually know more than their grandchildren." },
            { letter: "B", text: "Life can be present even when it is hidden from view." },
            { letter: "C", text: "Heavy rain does more harm than good in a desert." },
            { letter: "D", text: "Visiting family is the best way to spend a holiday." }
          ],
          correct: "B"
        },
        {
          id: "smile",
          sol: "11.RL.1.B",
          stem: "Meekulu Selma's smile in sentence 3 suggests that she —",
          choices: [
            { letter: "A", text: "agrees that the plain behind the house is lifeless" },
            { letter: "B", text: "is too busy with her work to listen to Ndapewa" },
            { letter: "C", text: "thinks Ndapewa should spend less time outdoors" },
            { letter: "D", text: "knows something about the plain that Ndapewa does not" }
          ],
          correct: "D"
        },
        {
          id: "change",
          sol: "11.RL.1.C",
          stem: "Which statement best describes how Ndapewa changes from sentence 3 to sentence 23?",
          choices: [
            { letter: "A", text: "She moves from dismissing the plain to helping save its seeds." },
            { letter: "B", text: "She moves from loving the desert to longing for the city." },
            { letter: "C", text: "She moves from trusting her grandmother to doubting her." },
            { letter: "D", text: "She moves from fearing storms to enjoying the rain's sound." }
          ],
          correct: "A"
        },
        {
          id: "invitation",
          sol: "11.RL.2.A",
          stem: "In sentence 14, the beetles moving as if they had been waiting for an invitation suggests that the insects —",
          choices: [
            { letter: "A", text: "were confused by the bright morning light" },
            { letter: "B", text: "had been brought to the plain by the grandmother" },
            { letter: "C", text: "were ready and quick to use the sudden flowers" },
            { letter: "D", text: "were damaging the flowers that they visited" }
          ],
          correct: "C"
        },
        {
          id: "politerain",
          sol: "11.RL.2.B",
          stem: "The contrast between the polite rain of the city (sentence 5) and the storm in sentence 6 mainly emphasizes that the desert rain is —",
          choices: [
            { letter: "A", text: "gentle and steady" },
            { letter: "B", text: "cold and unpleasant" },
            { letter: "C", text: "brief and useless" },
            { letter: "D", text: "sudden and powerful" }
          ],
          correct: "D"
        },
        {
          id: "listening",
          sol: "11.RL.2.C",
          stem: "In sentence 9, when Meekulu Selma says The plain is listening, she most nearly means that —",
          choices: [
            { letter: "A", text: "someone is hiding out on the plain" },
            { letter: "B", text: "the plain is alive and deserves respect" },
            { letter: "C", text: "the wind carries voices across the gravel" },
            { letter: "D", text: "the neighbors will hear them leave" }
          ],
          correct: "B"
        },
        {
          id: "jar",
          sol: "11.RL.3.A",
          stem: "Why does the author include the jar of seeds in sentences 19–20?",
          choices: [
            { letter: "A", text: "to reveal that the grandmother planted the flowers in secret" },
            { letter: "B", text: "to explain why Ndapewa cannot remember earlier holidays" },
            { letter: "C", text: "to show the bloom is part of a cycle the grandmother has seen before" },
            { letter: "D", text: "to suggest that the grandmother plans to sell seeds in town" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── POETRY ───────────────────────── */
    {
      id: "g11-rl-c101-turbines",
      family: "G11",
      title: "Turbines at Dusk",
      kind: "Poetry · 11.RL",
      blurb: "A speaker stands on the ridge where a grandfather once farmed wheat and listens to the wind turbines.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My grandfather farmed this ridge for wheat,<br>" +
        L(2) + "bent to the ground as if it owed him an answer.<br>" +
        L(3) + "Now the ridge grows a different crop:<br>" +
        L(4) + "thirty white stalks with no leaves at all,<br>" +
        L(5) + "each one taller than the church in town,<br>" +
        L(6) + "each one turning its three long arms<br>" +
        L(7) + "like a swimmer who never reaches shore.<br>" +
        L(8) + "He said the wind out here was a thief —<br>" +
        L(9) + "it stole the topsoil, stole the seed,<br>" +
        L(10) + "stole his hat on the day of my mother's wedding.<br>" +
        L(11) + "Tonight the same wind walks the fence line<br>" +
        L(12) + "and pays back what it took, slowly,<br>" +
        L(13) + "in the hum that runs along the wires<br>" +
        L(14) + "to a town that leaves its porch lights on.<br>" +
        L(15) + "I stand where his barn used to be<br>" +
        L(16) + "and listen to the blades cut the dark<br>" +
        L(17) + "into even slices, patient as bread.<br>" +
        L(18) + "He would not have liked them, I think.<br>" +
        L(19) + "He would have liked the way they keep working<br>" +
        L(20) + "long after everyone else has gone in." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which idea does \"Turbines at Dusk\" develop about the grandfather and the turbines?",
          choices: [
            { letter: "A", text: "Farming matters more than producing electricity." },
            { letter: "B", text: "The speaker deeply regrets that the barn is gone." },
            { letter: "C", text: "Old and new ways of working the land share a spirit." },
            { letter: "D", text: "Wind is a danger that people should never try to use." }
          ],
          correct: "C"
        },
        {
          id: "liked",
          sol: "11.RL.1.B",
          stem: "Lines 18–19 suggest that the speaker believes the grandfather —",
          choices: [
            { letter: "A", text: "would have admired the turbines' endurance despite disliking them" },
            { letter: "B", text: "would have tried to have the turbines taken off the ridge" },
            { letter: "C", text: "secretly wanted to sell the farm to the energy company" },
            { letter: "D", text: "never paid much attention to the work that others did" }
          ],
          correct: "A"
        },
        {
          id: "owed",
          sol: "11.RL.1.C",
          stem: "Line 2, bent to the ground as if it owed him an answer, characterizes the grandfather as —",
          choices: [
            { letter: "A", text: "lazy and easily discouraged" },
            { letter: "B", text: "cheerful and careless" },
            { letter: "C", text: "gentle and forgetful" },
            { letter: "D", text: "hardworking and demanding" }
          ],
          correct: "D"
        },
        {
          id: "swimmer",
          sol: "11.RL.2.A",
          stem: "In line 7, the turbine arms are compared to a swimmer who never reaches shore mainly to suggest that the turbines —",
          choices: [
            { letter: "A", text: "are struggling and close to breaking down" },
            { letter: "B", text: "move in an endless, repeating motion" },
            { letter: "C", text: "stand very far away from the town" },
            { letter: "D", text: "frighten the people who live nearby" }
          ],
          correct: "B"
        },
        {
          id: "thief",
          sol: "11.RL.2.B",
          stem: "Lines 8–12 describe the wind first as a thief and then as something that pays back what it took. This shift mainly creates a tone of —",
          choices: [
            { letter: "A", text: "lasting bitterness" },
            { letter: "B", text: "growing alarm" },
            { letter: "C", text: "gradual reconciliation" },
            { letter: "D", text: "gentle mockery" }
          ],
          correct: "C"
        },
        {
          id: "crop",
          sol: "11.RL.2.C",
          stem: "In line 3, the word crop is used to suggest that the turbines are —",
          choices: [
            { letter: "A", text: "plants that grow wild along the fence line" },
            { letter: "B", text: "a harvest that failed because of the wind" },
            { letter: "C", text: "tools the grandfather once used on the farm" },
            { letter: "D", text: "what the ridge now produces in place of wheat" }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "11.RL.3.A",
          stem: "How is \"Turbines at Dusk\" organized?",
          choices: [
            { letter: "A", text: "It moves from the grandfather's past on the ridge to the speaker's present there." },
            { letter: "B", text: "It lists the parts of a turbine in the order in which they were built." },
            { letter: "C", text: "It moves from a description of the town to a description of its church." },
            { letter: "D", text: "It alternates between the speaker's voice and the grandfather's voice." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-rl-c101-hadal",
      family: "G11",
      title: "Hadal",
      kind: "Poetry · 11.RL",
      blurb: "A poem about the deepest sea, where human visitors are only a brief, strange weather.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Below the last blue, where the sun gives up,<br>" +
        L(2) + "the water keeps a different kind of time.<br>" +
        L(3) + "Nothing here has heard of morning.<br>" +
        L(4) + "A fish the length of my thumb<br>" +
        L(5) + "carries its own small lantern on a stalk<br>" +
        L(6) + "and swings it through the dark<br>" +
        L(7) + "like a night watchman who has forgotten what he guards.<br>" +
        L(8) + "Snow falls here that was never cold:<br>" +
        L(9) + "the slow, pale ash of everything above,<br>" +
        L(10) + "a crumb of plankton, a fish scale, a flake of shell,<br>" +
        L(11) + "drifting for weeks to feed a mouth that waits.<br>" +
        L(12) + "We sent a camera down on a cable<br>" +
        L(13) + "and called what it showed us discovery,<br>" +
        L(14) + "as if the dark had been waiting for our name.<br>" +
        L(15) + "It had not. The crabs went on walking.<br>" +
        L(16) + "The worms went on swaying in the warm vent's breath.<br>" +
        L(17) + "Whatever we are to them, we are brief —<br>" +
        L(18) + "a flash, a hum, a light that comes and goes,<br>" +
        L(19) + "the strangest weather their world has ever had,<br>" +
        L(20) + "and then the long, untroubled black again." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which idea about human exploration does \"Hadal\" most clearly develop?",
          choices: [
            { letter: "A", text: "The deep sea is too dangerous and should be left unexplored." },
            { letter: "B", text: "Human visitors matter far less to the deep than they imagine." },
            { letter: "C", text: "Cameras have now revealed every secret of the ocean floor." },
            { letter: "D", text: "Deep-sea animals depend on humans for their light and food." }
          ],
          correct: "B"
        },
        {
          id: "name",
          sol: "11.RL.1.B",
          stem: "Line 14, as if the dark had been waiting for our name, implies that the speaker views the word discovery as —",
          choices: [
            { letter: "A", text: "a perfect description of the camera's important work" },
            { letter: "B", text: "a scientific term that ordinary readers misunderstand" },
            { letter: "C", text: "a name that the crabs and worms seem to recognize" },
            { letter: "D", text: "a little arrogant, since the creatures were always there" }
          ],
          correct: "D"
        },
        {
          id: "speaker",
          sol: "11.RL.1.C",
          stem: "Lines 12–17 reveal that the speaker of \"Hadal\" is —",
          choices: [
            { letter: "A", text: "humble about humanity's place in the deep sea" },
            { letter: "B", text: "proud of the team that built the deep camera" },
            { letter: "C", text: "afraid of the creatures shown on the screen" },
            { letter: "D", text: "bored by the slow pace of the expedition" }
          ],
          correct: "A"
        },
        {
          id: "watchman",
          sol: "11.RL.2.A",
          stem: "In line 7, comparing the fish to a night watchman who has forgotten what he guards mainly suggests that the fish —",
          choices: [
            { letter: "A", text: "is fiercely protecting a hidden nest of eggs" },
            { letter: "B", text: "is lost and searching for the way to the surface" },
            { letter: "C", text: "keeps up its patrol with no purpose humans can name" },
            { letter: "D", text: "is sleeping while its lantern glows dimly beside it" }
          ],
          correct: "C"
        },
        {
          id: "snow",
          sol: "11.RL.2.B",
          stem: "Lines 8–9 describe snow that was never cold. This image is best described as —",
          choices: [
            { letter: "A", text: "a literal description of winter weather at sea" },
            { letter: "B", text: "a metaphor for bits drifting down from the waters above" },
            { letter: "C", text: "an exaggeration that is meant to make readers laugh" },
            { letter: "D", text: "a contradiction showing that the speaker is confused" }
          ],
          correct: "B"
        },
        {
          id: "weather",
          sol: "11.RL.2.C",
          stem: "In line 19, calling humans the strangest weather their world has ever had most nearly means that, to the deep-sea animals, people are —",
          choices: [
            { letter: "A", text: "a constant danger that changes the water's temperature" },
            { letter: "B", text: "a welcome source of warmth and light in the dark" },
            { letter: "C", text: "a kind of food that falls slowly from above" },
            { letter: "D", text: "a rare, passing disturbance like a sudden storm" }
          ],
          correct: "D"
        },
        {
          id: "frame",
          sol: "11.RL.3.A",
          stem: "How does the last line of \"Hadal\" relate to lines 1–3?",
          choices: [
            { letter: "A", text: "It returns to the lasting dark, framing the human visit as a brief interruption." },
            { letter: "B", text: "It reveals that the sun finally reaches the bottom of the sea each morning." },
            { letter: "C", text: "It shifts from describing the sea to describing the camera's long cable." },
            { letter: "D", text: "It contradicts the opening by showing that morning has finally arrived." }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── DRAMA ───────────────────────── */
    {
      id: "g11-rl-c101-pressnight",
      family: "G11",
      title: "Press Night",
      kind: "Drama · 11.RL",
      blurb: "The night before the paper goes to print, three student editors argue over one photograph.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "The newspaper office at Brightwater High, 9:40 p.m., the night before the paper goes to the printer. " +
        N(2) + "Two laptops glow on a long table covered in proofs. " +
        N(3) + "DESTA, the editor-in-chief, stands over a printed front page; RAFAEL, the sports editor, paces.</em></p>" +
        "<p><strong>RAFAEL:</strong> " + N(4) + "We won the regional title for the first time in twenty years, and you want to lead with a kid lying on the grass?</p>" +
        "<p><strong>DESTA:</strong> " + N(5) + "I want to lead with the best photograph we have. " +
        N(6) + "Jung-hoon shot two hundred frames, and this is the one people will remember.</p>" +
        "<p><em>" + N(7) + "JUNG-HOON looks up from his laptop, then quickly back down.</em></p>" +
        "<p><strong>RAFAEL:</strong> " + N(8) + "That kid is Tomasz Wrona. " +
        N(9) + "He sprained his ankle in the third quarter, and he'll be back in two weeks. " +
        N(10) + "If we put his worst moment on the cover, that's what the whole school sees on Monday.</p>" +
        "<p><strong>DESTA:</strong> " + N(11) + "It's not his worst moment. " +
        N(12) + "Look at it. " +
        N(13) + "<em>(She holds up the proof.)</em> " +
        N(14) + "Three teammates are kneeling around him, and the scoreboard behind them says we're ahead. " +
        N(15) + "That's the story of the season in one frame.</p>" +
        "<p><strong>JUNG-HOON:</strong> <em>(quietly)</em> " + N(16) + "I asked him afterward if he minded. " +
        N(17) + "He said he didn't know yet.</p>" +
        "<p><em>" + N(18) + "A pause. " +
        N(19) + "DESTA lowers the proof.</em></p>" +
        "<p><strong>MS. LINDQVIST:</strong> <em>(from the doorway, holding a coffee)</em> " + N(20) + "Nobody's going to make this call for you, but I'll ask the question I always ask. " +
        N(21) + "Who gets hurt, and is the story worth it?</p>" +
        "<p><strong>RAFAEL:</strong> " + N(22) + "The celebration shot shows the whole team with the trophy. " +
        N(23) + "Everybody's in it.</p>" +
        "<p><strong>DESTA:</strong> " + N(24) + "Everybody's in it, and nobody's doing anything. " +
        N(25) + "It looks like every team photo ever taken.</p>" +
        "<p><strong>JUNG-HOON:</strong> " + N(26) + "What if I text him? " +
        N(27) + "Right now. " +
        N(28) + "If he says no, we run the trophy.</p>" +
        "<p><em>" + N(29) + "DESTA hesitates, then nods. " +
        N(30) + "JUNG-HOON types. " +
        N(31) + "For a long moment, the only sound is the hum of the laptops.</em></p>" +
        "<p><strong>JUNG-HOON:</strong> " + N(32) + "He says yes. <em>(He reads on.)</em> " +
        N(33) + "He says to put the score in the caption so people know we won.</p>" +
        "<p><strong>DESTA:</strong> <em>(smiling for the first time)</em> " + N(34) + "Rafael, you're writing that caption.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does the debate over the front-page photograph in \"Press Night\" most clearly develop?",
          choices: [
            { letter: "A", text: "Sports coverage matters less than academic news." },
            { letter: "B", text: "Editors should always follow their adviser's wishes." },
            { letter: "C", text: "The most dramatic photograph is always the right one." },
            { letter: "D", text: "Good journalism weighs a story's effect on its subjects." }
          ],
          correct: "D"
        },
        {
          id: "didntknow",
          sol: "11.RL.1.B",
          stem: "Jung-hoon's report in sentences 16–17 affects the plot mainly by —",
          choices: [
            { letter: "A", text: "raising the player's uncertainty, which makes the editors pause" },
            { letter: "B", text: "proving that Desta's choice of photograph was simply wrong" },
            { letter: "C", text: "revealing that Rafael had already contacted Tomasz" },
            { letter: "D", text: "ending the argument by forcing the adviser to decide" }
          ],
          correct: "A"
        },
        {
          id: "desta",
          sol: "11.RL.1.C",
          stem: "Desta's actions in sentences 29 and 34 show that she is —",
          choices: [
            { letter: "A", text: "stubborn and unwilling to hear any other opinion" },
            { letter: "B", text: "firm about quality but willing to let Tomasz have a say" },
            { letter: "C", text: "uninterested in how the championship game turned out" },
            { letter: "D", text: "afraid to disagree openly with the sports editor" }
          ],
          correct: "B"
        },
        {
          id: "oneframe",
          sol: "11.RL.2.A",
          stem: "In sentence 15, Desta calls the photograph the story of the season in one frame. She means that the image —",
          choices: [
            { letter: "A", text: "is the only photo Jung-hoon took all season" },
            { letter: "B", text: "should be cropped to show only the scoreboard" },
            { letter: "C", text: "captures the team's struggle and its success at once" },
            { letter: "D", text: "will be printed in every issue for the rest of the year" }
          ],
          correct: "C"
        },
        {
          id: "hum",
          sol: "11.RL.2.B",
          stem: "The stage direction in sentence 31, in which the only sound is the hum of the laptops, mainly creates a mood of —",
          choices: [
            { letter: "A", text: "celebration" },
            { letter: "B", text: "suspense" },
            { letter: "C", text: "boredom" },
            { letter: "D", text: "anger" }
          ],
          correct: "B"
        },
        {
          id: "call",
          sol: "11.RL.2.C",
          stem: "In sentence 20, the phrase make this call most nearly means —",
          choices: [
            { letter: "A", text: "telephone the printer" },
            { letter: "B", text: "announce the final score" },
            { letter: "C", text: "make the final decision" },
            { letter: "D", text: "call the player's family" }
          ],
          correct: "C"
        },
        {
          id: "resolve",
          sol: "11.RL.3.A",
          stem: "How does the playwright resolve the central conflict of \"Press Night\"?",
          choices: [
            { letter: "A", text: "by having Ms. Lindqvist choose the photograph herself" },
            { letter: "B", text: "by having Rafael agree to step down as sports editor" },
            { letter: "C", text: "by revealing that the trophy photograph was blurry" },
            { letter: "D", text: "by letting the injured player's answer settle the choice" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── INFORMATIONAL ───────────────────────── */
    {
      id: "g11-ri-c101-saguaro",
      family: "G11",
      title: "A Cactus That Banks the Rain",
      kind: "Informational · 11.RI",
      blurb: "How the giant saguaro collects water fast, spends it slowly, and pays for that patience.",
      level: 1,
      passage:
        "<p>" + N(1) + "After a summer storm in the Sonoran Desert, a saguaro cactus can do something that seems almost impossible: it can swell visibly within days. " +
        N(2) + "The giant cactus, which may grow taller than a two-story house, is built to collect water quickly and then spend it slowly over months of drought.</p>" +
        "<p>" + N(3) + "The secret begins underground. " +
        N(4) + "A saguaro's roots are shallow, most of them lying only a few inches below the surface, but they spread outward in a wide circle that can be nearly as broad as the cactus is tall. " +
        N(5) + "When rain soaks the top layer of soil, these roots can absorb water before the sun bakes it away. " +
        N(6) + "A saguaro also grows one deeper root that helps anchor it against the wind.</p>" +
        "<p>" + N(7) + "Above ground, the cactus stores what the roots gather. " +
        N(8) + "Its body is folded into vertical ridges called pleats, which work much like the folds of an accordion. " +
        N(9) + "When the saguaro takes in water, the pleats spread apart and the trunk grows wider. " +
        N(10) + "During dry months, the pleats slowly draw together again as the plant uses its supply. " +
        N(11) + "A large saguaro can hold hundreds of gallons of water at once.</p>" +
        "<p>" + N(12) + "This careful saving has a cost: saguaros grow extremely slowly. " +
        N(13) + "A ten-year-old saguaro may be only a few inches tall. " +
        N(14) + "Many do not grow their first arms until they are fifty years old or older. " +
        N(15) + "Young saguaros also rarely survive in open ground. " +
        N(16) + "Most begin life in the shade of a \"nurse\" tree, such as a palo verde, which shields the seedling from heat and frost. " +
        N(17) + "In some cases, the growing cactus eventually competes with the tree that sheltered it.</p>" +
        "<p>" + N(18) + "\"People look at a saguaro and see something that just stands there,\" said Odalys Ferrer, a ranger who leads desert walks for visiting students. " +
        N(19) + "\"But it's working all the time. It's basically a living water tower with a very long-range plan.\" " +
        N(20) + "For a plant that may live more than a century, patience is not a weakness. " +
        N(21) + "It is the whole strategy.</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          stem: "Which statement best summarizes the article about the saguaro?",
          choices: [
            { letter: "A", text: "Its deep central root lets the saguaro reach underground rivers." },
            { letter: "B", text: "The saguaro gathers water fast and spends it slowly, which also slows its growth." },
            { letter: "C", text: "Saguaros compete with palo verde trees for water from their first day." },
            { letter: "D", text: "Desert rangers teach students to tell cactus species apart by their arms." }
          ],
          correct: "B"
        },
        {
          id: "pleats",
          sol: "11.RI.1.B",
          stem: "According to the article, what happens to a saguaro's pleats during dry months?",
          choices: [
            { letter: "A", text: "They split open to collect dew from the morning air." },
            { letter: "B", text: "They grow sharper spines to keep thirsty animals away." },
            { letter: "C", text: "They spread apart so that the trunk can cool in the wind." },
            { letter: "D", text: "They slowly draw together as the plant uses its water." }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          stem: "The author's attitude toward the saguaro's slow growth, as shown in sentences 20–21, is best described as —",
          choices: [
            { letter: "A", text: "admiring" },
            { letter: "B", text: "worried" },
            { letter: "C", text: "amused" },
            { letter: "D", text: "indifferent" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "How does the author organize sentences 3–11 of the saguaro article?",
          choices: [
            { letter: "A", text: "by comparing the saguaro with other desert plants one at a time" },
            { letter: "B", text: "by listing problems and then rejecting each proposed solution" },
            { letter: "C", text: "by tracing water from the roots that collect it to the body that stores it" },
            { letter: "D", text: "by telling the life story of one saguaro from seed to old age" }
          ],
          correct: "C"
        },
        {
          id: "accordion",
          sol: "11.RI.2.B",
          stem: "In sentence 8, the comparison of the pleats to the folds of an accordion helps the reader understand that the pleats —",
          choices: [
            { letter: "A", text: "let the trunk expand and contract" },
            { letter: "B", text: "make musical sounds in the wind" },
            { letter: "C", text: "protect the cactus from hungry birds" },
            { letter: "D", text: "are arranged in a ring around the roots" }
          ],
          correct: "A"
        },
        {
          id: "quote",
          sol: "11.RI.2.C",
          stem: "The author includes the quotation from Odalys Ferrer in sentences 18–19 mainly to —",
          choices: [
            { letter: "A", text: "prove that rangers disagree with scientists about saguaros" },
            { letter: "B", text: "restate the article's point in vivid, everyday terms" },
            { letter: "C", text: "introduce a new problem that the article never resolves" },
            { letter: "D", text: "show that visiting students find the desert boring" }
          ],
          correct: "B"
        },
        {
          id: "shields",
          sol: "11.RV.1.C",
          stem: "In sentence 16, the word shields most nearly means —",
          choices: [
            { letter: "A", text: "hides" },
            { letter: "B", text: "feeds" },
            { letter: "C", text: "replaces" },
            { letter: "D", text: "protects" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-ri-c101-marinesnow",
      family: "G11",
      title: "The Long Fall of Marine Snow",
      kind: "Informational · 11.RI",
      blurb: "In the deep ocean it never stops snowing, and the flakes feed animals and move carbon.",
      level: 2,
      passage:
        "<p>" + N(1) + "In the deep ocean, far below the reach of sunlight, it is always snowing. " +
        N(2) + "The \"snow\" is not frozen water but a steady drizzle of tiny particles called marine snow: bits of dead plankton, fish waste, shed mucus, and grains of mineral, all clumped together into pale flakes. " +
        N(3) + "Under the lights of a submersible, the flakes drift past like dust in a sunbeam, and for the animals living in the dark, they are often the main source of food.</p>" +
        "<p>" + N(4) + "Marine snow begins near the surface, where sunlight allows tiny algae to grow. " +
        N(5) + "When these organisms die or are eaten, their leftovers start to sink. " +
        N(6) + "Along the way, the particles stick to one another, forming larger clumps that fall faster. " +
        N(7) + "A single flake may take several weeks to reach the sea floor thousands of meters below, and many never arrive at all, because animals at every depth catch and eat them on the way down.</p>" +
        "<p>" + N(8) + "Those that do reach the bottom feed a surprising variety of life. " +
        N(9) + "Sea cucumbers crawl across the mud, swallowing sediment and digesting the food it contains. " +
        N(10) + "Some deep-sea worms and sponges filter flakes directly from the water. " +
        N(11) + "Even bacteria take part, breaking down what the larger animals leave behind.</p>" +
        "<p>" + N(12) + "Scientists have another reason to care about this slow snowfall. " +
        N(13) + "The algae at the surface take in carbon dioxide as they grow. " +
        N(14) + "When their remains sink to the deep sea and are buried in sediment, some of that carbon can stay locked away for centuries or longer. " +
        N(15) + "Researchers sometimes call this process the \"biological pump,\" and they are still working to measure how much carbon it moves each year.</p>" +
        "<p>" + N(16) + "Measuring it is not simple. " +
        N(17) + "Flakes are fragile and can fall apart when collected, and traps lowered on cables catch only what happens to drift into them. " +
        N(18) + "Some teams now use underwater cameras that photograph falling particles for months at a time. " +
        N(19) + "Each image adds to a picture of a process that is quiet, invisible from the surface, and still not fully understood. " +
        N(20) + "The snowfall never stops, and neither, it seems, do the questions it raises.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the central idea of the article on marine snow?",
          choices: [
            { letter: "A", text: "Sea cucumbers are the most important animals on the sea floor." },
            { letter: "B", text: "Underwater cameras have replaced every older research method." },
            { letter: "C", text: "Marine snow feeds deep-sea life and stores carbon, yet it is hard to study." },
            { letter: "D", text: "Algae near the surface produce most of the oxygen that people breathe." }
          ],
          correct: "C"
        },
        {
          id: "measure",
          sol: "11.RI.1.B",
          stem: "Select TWO details that explain why marine snow is difficult for scientists to measure.",
          choices: [
            { letter: "A", text: "Flakes can fall apart when they are collected." },
            { letter: "B", text: "Particles stick together and sink faster as clumps." },
            { letter: "C", text: "Sea cucumbers swallow sediment from the sea floor." },
            { letter: "D", text: "Traps catch only the particles that drift into them." }
          ],
          correct: ["A", "D"]
        },
        {
          id: "uncertain",
          sol: "11.RI.1.C",
          stem: "Which of the following does the article on marine snow present as still uncertain?",
          choices: [
            { letter: "A", text: "whether algae near the surface take in carbon dioxide" },
            { letter: "B", text: "how much carbon the biological pump moves each year" },
            { letter: "C", text: "whether sea cucumbers eat sediment on the sea floor" },
            { letter: "D", text: "whether marine snow contains bits of dead plankton" }
          ],
          correct: "B"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "How does the author organize the article's discussion of marine snow?",
          choices: [
            { letter: "A", text: "by following the flakes down to the sea floor, then turning to why they are studied" },
            { letter: "B", text: "by comparing marine snow with snow on land, point by point, through the seasons" },
            { letter: "C", text: "by describing one expedition in time order from its launch to its return home" },
            { letter: "D", text: "by presenting a single problem and then arguing for one solution to it" }
          ],
          correct: "A"
        },
        {
          id: "sunbeam",
          sol: "11.RI.2.B",
          stem: "In sentence 3, the comparison to dust in a sunbeam helps the reader picture the flakes as —",
          choices: [
            { letter: "A", text: "bright and dangerous" },
            { letter: "B", text: "small and drifting" },
            { letter: "C", text: "frozen and sharp" },
            { letter: "D", text: "large and heavy" }
          ],
          correct: "B"
        },
        {
          id: "lastline",
          sol: "11.RI.2.C",
          stem: "The author ends the marine snow article with sentence 20 mainly to —",
          choices: [
            { letter: "A", text: "suggest that scientists should stop studying the deep sea" },
            { letter: "B", text: "warn readers about the risks of using underwater cameras" },
            { letter: "C", text: "explain how marine snow first formed millions of years ago" },
            { letter: "D", text: "stress that marine snow remains a source of open questions" }
          ],
          correct: "D"
        },
        {
          id: "fragile",
          sol: "11.RV.1.C",
          stem: "In sentence 17, the word fragile most nearly means —",
          choices: [
            { letter: "A", text: "very heavy" },
            { letter: "B", text: "hard to see" },
            { letter: "C", text: "easily broken" },
            { letter: "D", text: "quickly eaten" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-ri-c101-panelheat",
      family: "G11",
      title: "Why Solar Panels Prefer a Cool, Bright Day",
      kind: "Informational · 11.RI",
      blurb: "Sunlight is a solar panel's fuel, but the heat that comes with it quietly steals power.",
      level: 3,
      passage:
        "<p>" + N(1) + "It seems obvious that the best place for a solar panel would be the hottest, sunniest place available. " +
        N(2) + "Sunlight, after all, is the panel's fuel. " +
        N(3) + "But the relationship between solar panels and heat is more complicated than that, and engineers who design solar farms spend a surprising amount of effort trying to keep their panels cool.</p>" +
        "<p>" + N(4) + "A solar cell turns light, not heat, into electricity. " +
        N(5) + "When light strikes the cell, it frees electrons that can then flow as current. " +
        N(6) + "Heat interferes with this process: as the temperature of the cell rises, the voltage it produces falls. " +
        N(7) + "For many common panels, output drops by roughly half a percent for every degree Celsius above about 25 degrees. " +
        N(8) + "That may sound small, but on a summer afternoon a dark panel on a hot roof can reach 65 degrees Celsius, a temperature at which it may lose a fifth of its rated power.</p>" +
        "<p>" + N(9) + "This creates a genuine trade-off for builders in deserts, which offer some of the strongest sunlight on Earth along with some of the highest temperatures. " +
        N(10) + "The extra light usually still wins, so desert solar farms remain highly productive. " +
        N(11) + "Yet designers try to claw back the lost power wherever they can. " +
        N(12) + "They mount panels on open racks so that air can flow underneath, rather than laying them flat against a surface. " +
        N(13) + "They leave space between rows so that warm air can escape. " +
        N(14) + "Some experimental farms have even placed panels above crops, where moisture rising from the plants helps cool the equipment.</p>" +
        "<p>" + N(15) + "Heat is not the only desert hazard. " +
        N(16) + "Fine dust settles on panels and blocks light, and in places with little rain, it does not wash away on its own. " +
        N(17) + "Crews may clean panels with brushes, robots, or small amounts of water, each option carrying its own cost.</p>" +
        "<p>" + N(18) + "For these reasons, the conditions that produce a panel's best performance can be unexpected. " +
        N(19) + "A clear, cold spring morning in the mountains, with bright sun and a crisp breeze, may coax more power per square meter from a panel than a scorching afternoon in the desert. " +
        N(20) + "The fuel is light; the enemy, quietly, is the heat that so often comes with it.</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          stem: "Which statement best summarizes the article's explanation of solar panels and heat?",
          choices: [
            { letter: "A", text: "Panels work best in deserts because heat adds energy to the light." },
            { letter: "B", text: "Dust is a greater problem for solar farms than temperature is." },
            { letter: "C", text: "Panels placed above crops make more power than panels on racks." },
            { letter: "D", text: "Panels need light, but heat lowers their output, so designers cool them." }
          ],
          correct: "D"
        },
        {
          id: "voltage",
          sol: "11.RI.1.B",
          stem: "According to the article, what happens to a solar cell as its temperature rises?",
          choices: [
            { letter: "A", text: "The voltage it produces falls." },
            { letter: "B", text: "It frees a larger number of electrons." },
            { letter: "C", text: "It absorbs more of the sunlight." },
            { letter: "D", text: "Dust collects on it more quickly." }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "11.RI.1.C",
          stem: "The author's main purpose in the article about panel temperature is to —",
          choices: [
            { letter: "A", text: "persuade readers to install solar panels on their own roofs" },
            { letter: "B", text: "explain why heat works against panels and how designers respond" },
            { letter: "C", text: "compare the building costs of desert and mountain solar farms" },
            { letter: "D", text: "criticize engineers for building solar farms in hot places" }
          ],
          correct: "B"
        },
        {
          id: "tradeoff",
          sol: "11.RI.2.A",
          stem: "Which statement best describes how sentences 9–14 are organized?",
          choices: [
            { letter: "A", text: "A series of events is told in the order in which they occurred." },
            { letter: "B", text: "Two opposing experts' views are presented and then compared." },
            { letter: "C", text: "A trade-off is described, followed by ways designers reduce its effects." },
            { letter: "D", text: "A definition is given and then illustrated with a single example." }
          ],
          correct: "C"
        },
        {
          id: "opening",
          sol: "11.RI.2.B",
          stem: "The author opens the article about panel temperature with sentences 1–3 mainly to —",
          choices: [
            { letter: "A", text: "argue that deserts are poor places to build solar farms" },
            { letter: "B", text: "describe how a solar cell frees electrons from atoms" },
            { letter: "C", text: "introduce the problem of dust building up on panels" },
            { letter: "D", text: "raise a common assumption that the article then corrects" }
          ],
          correct: "D"
        },
        {
          id: "enemy",
          sol: "11.RI.2.C",
          stem: "In sentence 20, describing heat as the enemy, quietly, mainly functions to —",
          choices: [
            { letter: "A", text: "stress that heat's harm is easy to miss because it arrives with the light" },
            { letter: "B", text: "suggest that solar panels are dangerous for crews to work near" },
            { letter: "C", text: "show that engineers have given up trying to solve the problem" },
            { letter: "D", text: "contradict the article's earlier claim that light is the fuel" }
          ],
          correct: "A"
        },
        {
          id: "clawback",
          sol: "11.RV.1.C",
          stem: "In sentence 11, the phrase claw back most nearly means —",
          choices: [
            { letter: "A", text: "give up willingly" },
            { letter: "B", text: "recover with effort" },
            { letter: "C", text: "measure exactly" },
            { letter: "D", text: "spread out evenly" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── ARGUMENT ───────────────────────── */
    {
      id: "g11-ri-c101-canopies",
      family: "G11",
      title: "Our Parking Lot Should Make Power",
      kind: "Argument · 11.RI",
      blurb: "A student editorial urges the school board to cover the student lot with solar canopies instead of just repaving it.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every afternoon, the 214 spaces in Fairmont High's student parking lot do exactly one thing: they get hot. " +
        N(2) + "Cars bake, asphalt softens, and students sprint from their vehicles to the doors with their backpacks held over their heads. " +
        N(3) + "The school board will vote next month on whether to repave the lot this summer, and it should take the chance to do something smarter: cover the lot with solar canopies.</p>" +
        "<p>" + N(4) + "A solar canopy is a raised steel frame, tall enough for cars and trucks to park beneath, topped with rows of panels. " +
        N(5) + "According to an estimate the district's own facilities office prepared last spring, canopies over the student lot would produce about 40 percent of the electricity the main building uses in a year. " +
        N(6) + "The same report projected that savings on power bills would pay for the structures in roughly eleven years, and the panels are expected to last more than twenty-five.</p>" +
        "<p>" + N(7) + "Supporters of a simple repaving argue that the money would be better spent on classrooms, and that concern deserves a serious answer. " +
        N(8) + "But this is not a choice between solar power and teachers. " +
        N(9) + "A state clean-energy grant, which the district qualifies for, would cover nearly a third of the cost. " +
        N(10) + "The remaining expense would be repaid by the electricity the canopies generate, freeing up money in future budgets rather than draining it.</p>" +
        "<p>" + N(11) + "There are benefits beyond the budget, too. " +
        N(12) + "Shaded cars stay cooler, which matters for students who drive siblings home or leave instruments and laptops in their vehicles. " +
        N(13) + "Shade also slows the cracking of asphalt, so the lot itself would need repair less often. " +
        N(14) + "And for a school that teaches environmental science, a working solar installation would be a lesson students could walk under every day.</p>" +
        "<p>" + N(15) + "Some board members have worried about the appearance of the frames. " +
        N(16) + "It is fair to admit that canopies are not beautiful. " +
        N(17) + "Neither, however, is a sea of blistering asphalt. " +
        N(18) + "The board can repave the lot and get a parking lot. " +
        N(19) + "Or it can build canopies and get a parking lot that pays the school back. " +
        N(20) + "The second choice is the one worth voting for.</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.A",
          stem: "Which sentence best states the central claim of the editorial about Fairmont High's parking lot?",
          choices: [
            { letter: "A", text: "Sentence 1, which says the spaces in the lot do one thing: they get hot" },
            { letter: "B", text: "Sentence 3, which says the board should cover the lot with solar canopies" },
            { letter: "C", text: "Sentence 13, which says shade slows the cracking of the lot's asphalt" },
            { letter: "D", text: "Sentence 16, which admits that the canopies are not beautiful to look at" }
          ],
          correct: "B"
        },
        {
          id: "classrooms",
          sol: "11.RI.1.B",
          stem: "Which detail does the writer use to answer the concern that the money belongs in classrooms?",
          choices: [
            { letter: "A", text: "the number of parking spaces in the student lot" },
            { letter: "B", text: "the cooler temperature inside shaded cars" },
            { letter: "C", text: "a state grant covering nearly a third of the cost" },
            { letter: "D", text: "the environmental science classes at the school" }
          ],
          correct: "C"
        },
        {
          id: "audience",
          sol: "11.RI.1.C",
          stem: "The editorial about solar canopies is written mainly for —",
          choices: [
            { letter: "A", text: "engineers who design and build solar canopies" },
            { letter: "B", text: "students who are just learning how to drive" },
            { letter: "C", text: "state officials who award clean-energy grants" },
            { letter: "D", text: "board members and readers following the vote" }
          ],
          correct: "D"
        },
        {
          id: "rebuttal",
          sol: "11.RI.2.A",
          stem: "How does the writer organize sentences 7–10 of the editorial?",
          choices: [
            { letter: "A", text: "by stating an opposing view and then answering it with evidence" },
            { letter: "B", text: "by listing events in the order in which they happened" },
            { letter: "C", text: "by comparing two schools that have installed canopies" },
            { letter: "D", text: "by defining a technical term and then giving examples" }
          ],
          correct: "A"
        },
        {
          id: "parallel",
          sol: "11.RI.2.B",
          stem: "Sentences 18–19 are built as a parallel pair mainly to —",
          choices: [
            { letter: "A", text: "show that the two options would cost exactly the same" },
            { letter: "B", text: "make the difference between the options sharp and memorable" },
            { letter: "C", text: "suggest that the board has already made up its mind" },
            { letter: "D", text: "introduce a third option that the writer prefers" }
          ],
          correct: "B"
        },
        {
          id: "concede",
          sol: "11.RI.2.C",
          stem: "In sentences 16–17, the writer admits that canopies are not beautiful mainly in order to —",
          choices: [
            { letter: "A", text: "withdraw the writer's support for the canopy plan" },
            { letter: "B", text: "prove that board members care only about looks" },
            { letter: "C", text: "concede a small point while showing the alternative is no better" },
            { letter: "D", text: "suggest that the steel frames should be painted" }
          ],
          correct: "C"
        },
        {
          id: "projected",
          sol: "11.RV.1.B",
          stem: "In sentence 6, the word projected most nearly means —",
          choices: [
            { letter: "A", text: "estimated for the future" },
            { letter: "B", text: "shown on a large screen" },
            { letter: "C", text: "thrown forward with force" },
            { letter: "D", text: "strongly disputed by others" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── FUNCTIONAL TEXT ───────────────────────── */
    {
      id: "g11-ri-c101-ledgerrules",
      family: "G11",
      title: "Submitting to The Mesa Ledger",
      kind: "Functional text · 11.RI",
      blurb: "The student newspaper's rules for contributors: what it accepts, when it is due, and how it is edited.",
      level: 1,
      passage:
        "<p><strong>The Mesa Ledger — Submission Guidelines for Student Contributors</strong></p>" +
        "<p>" + N(1) + "The Mesa Ledger, the student newspaper of Copper Mesa High School, welcomes stories, opinion pieces, and photographs from any student, not only members of the journalism class. " +
        N(2) + "Please read these guidelines before you submit, because work that does not follow them may be returned without review.</p>" +
        "<p><strong>What We Accept</strong> " + N(3) + "News stories should be between 300 and 600 words and must cover events at the school or in the surrounding community. " +
        N(4) + "Opinion pieces may be up to 500 words and must be signed with the writer's full name; we do not print anonymous opinions. " +
        N(5) + "Photographs must be your own work and should be sent as full-size files, not screenshots.</p>" +
        "<p><strong>Deadlines</strong> " + N(6) + "The Ledger publishes on the first and third Friday of each month. " +
        N(7) + "Submissions are due by 4:00 p.m. on the Monday before publication. " +
        N(8) + "Work received after the deadline will be considered for the next issue instead.</p>" +
        "<p><strong>Accuracy and Sources</strong> " + N(9) + "Every news story must name at least two sources, and at least one of them must be someone the writer interviewed directly. " +
        N(10) + "Include each source's phone number or email address in a separate note to the editors so that a fact-checker can confirm quotations. " +
        N(11) + "Contact information is never printed. " +
        N(12) + "If you are writing about a student under the age of 14, you must have permission from a parent or guardian before using that student's name.</p>" +
        "<p><strong>Editing</strong> " + N(13) + "Editors may shorten submissions or correct grammar and spelling without asking. " +
        N(14) + "If an editor wants to change the meaning of a sentence, however, the writer will be contacted first. " +
        N(15) + "Writers may withdraw a submission at any time before the Monday deadline.</p>" +
        "<p><strong>How to Submit</strong> " + N(16) + "Send your work as an attached document to the editors' shared address, which is posted on the newsroom door in Room 118. " +
        N(17) + "Put the type of piece and your last name in the subject line, for example \"Opinion — Delgado.\" " +
        N(18) + "You will receive a reply within three school days. " +
        N(19) + "Questions may be brought to the newsroom during lunch on Tuesdays and Thursdays, when an editor is always on duty.</p>",
      claims: [
        {
          id: "mainidea",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the main idea of The Mesa Ledger's guidelines?",
          choices: [
            { letter: "A", text: "Only journalism students may publish news stories in the Ledger." },
            { letter: "B", text: "The Ledger prefers photographs to stories and opinion pieces." },
            { letter: "C", text: "Editors rewrite most submissions before they appear in print." },
            { letter: "D", text: "Any student may contribute, but work must follow rules on length, timing, and accuracy." }
          ],
          correct: "D"
        },
        {
          id: "late",
          sol: "11.RI.1.B",
          stem: "According to the guidelines, what happens to a story received at 5:00 p.m. on the Monday before an issue?",
          choices: [
            { letter: "A", text: "It is returned to the writer without any review." },
            { letter: "B", text: "It is considered for the following issue instead." },
            { letter: "C", text: "It is printed only if an editor approves it first." },
            { letter: "D", text: "It is shortened to fit whatever space remains." }
          ],
          correct: "B"
        },
        {
          id: "audience",
          sol: "11.RI.1.C",
          stem: "The Mesa Ledger's guidelines are written mainly for —",
          choices: [
            { letter: "A", text: "students outside the staff who want to contribute work" },
            { letter: "B", text: "parents deciding whether their children may be interviewed" },
            { letter: "C", text: "teachers who grade work in the journalism class" },
            { letter: "D", text: "editors who are training new fact-checkers" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          stem: "The bold headings in The Mesa Ledger's guidelines mainly help a reader —",
          choices: [
            { letter: "A", text: "understand the order in which the paper was founded" },
            { letter: "B", text: "compare the Ledger with other school newspapers" },
            { letter: "C", text: "find the rule that answers a specific question quickly" },
            { letter: "D", text: "decide which editor to contact about a story" }
          ],
          correct: "C"
        },
        {
          id: "private",
          sol: "11.RI.2.B",
          stem: "Sentence 11 is placed right after sentence 10 mainly to —",
          choices: [
            { letter: "A", text: "warn writers that their quotations may be removed" },
            { letter: "B", text: "explain why every news story needs two sources" },
            { letter: "C", text: "remind writers of the Monday afternoon deadline" },
            { letter: "D", text: "reassure writers that sources' details stay private" }
          ],
          correct: "D"
        },
        {
          id: "meaning",
          sol: "11.RI.2.C",
          stem: "Which sentence makes clear that an editor will not change what a writer means without first consulting the writer?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "B"
        },
        {
          id: "anonymous",
          sol: "11.RV.1.A",
          stem: "The word anonymous in sentence 4 comes from Greek parts meaning without and name. Based on this, anonymous opinions are ones that —",
          choices: [
            { letter: "A", text: "do not identify their writer" },
            { letter: "B", text: "are written by several people" },
            { letter: "C", text: "disagree with the editors" },
            { letter: "D", text: "are printed without editing" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── VOCABULARY ───────────────────────── */
    {
      id: "g11-rv-c101-ventfield",
      family: "G11",
      title: "Boomtowns in the Dark",
      kind: "Vocabulary · 11.RV",
      blurb: "Life crowds around deep-sea hot springs, then vanishes when they shut off. Six words to work out from context.",
      level: 3,
      passage:
        "<p>" + N(1) + "To a human visitor, few places on Earth seem more <strong>inhospitable</strong> than a hydrothermal vent field. " +
        N(2) + "Two kilometers below the surface, in total darkness, cracks in the sea floor release water heated by volcanic rock to more than 350 degrees Celsius, along with dissolved minerals that would poison most animals. " +
        N(3) + "Yet when the submersible Arrowhead first reached the Calder vent field, its crew found the rocks crowded with life.</p>" +
        "<p>" + N(4) + "Thick clusters of tubeworms, some taller than a person, swayed beside the vents. " +
        N(5) + "The worms have no mouths and no stomachs. " +
        N(6) + "Instead, they depend on a <strong>symbiotic</strong> partnership with bacteria living inside their bodies: the worms supply the bacteria with chemicals drawn from the vent water, and the bacteria turn those chemicals into food that nourishes both. " +
        N(7) + "It is an arrangement in which neither partner could easily survive alone.</p>" +
        "<p>" + N(8) + "Around the worms crawled pale crabs and shrimp, <strong>tenacious</strong> creatures that cling to the chimneys even as the scalding water shifts direction. " +
        N(9) + "Pilot Amara Osei watched one shrimp return to the same patch of rock three times after the current swept it away. " +
        N(10) + "\"It just would not quit,\" she wrote in the dive log.</p>" +
        "<p>" + N(11) + "The communities around vents are also <strong>transient</strong>. " +
        N(12) + "A vent may flow for years or decades, but eventually the plumbing beneath it clogs or shifts, and the hot water stops. " +
        N(13) + "When that happens, the worms starve and the crowded rocks fall silent. " +
        N(14) + "How vent animals find fresh vents, sometimes many kilometers away, is still largely a matter of <strong>conjecture</strong>. " +
        N(15) + "One leading idea is that larvae drift on deep currents for weeks until they happen to reach warm water. " +
        N(16) + "Another suggests that whale carcasses on the sea floor serve as stepping stones. " +
        N(17) + "Neither has been proved.</p>" +
        "<p>" + N(18) + "What is clear is that once young animals settle at a new vent, they <strong>proliferate</strong> with astonishing speed. " +
        N(19) + "Within a year or two, bare rock can be covered by thousands of worms. " +
        N(20) + "The vent field, it turns out, is less a fixed city than a series of boomtowns, each rising quickly and fading when its fuel runs out.</p>",
      claims: [
        {
          id: "inhospitable",
          sol: "11.RV.1.A",
          stem: "The word inhospitable in sentence 1 contains the prefix in-, as in incomplete and inactive. Based on this, an inhospitable place is one that —",
          choices: [
            { letter: "A", text: "is crowded with human visitors" },
            { letter: "B", text: "is located deep inside the earth" },
            { letter: "C", text: "is unwelcoming to living things" },
            { letter: "D", text: "is easy to reach by submarine" }
          ],
          correct: "C"
        },
        {
          id: "symbiotic",
          sol: "11.RV.1.A",
          stem: "The word symbiotic in sentence 6 joins sym-, meaning together, with bio, meaning life. This suggests that a symbiotic partnership is one in which two organisms —",
          choices: [
            { letter: "A", text: "live together in a close relationship" },
            { letter: "B", text: "compete with each other for the same food" },
            { letter: "C", text: "fight until one of them is forced to leave" },
            { letter: "D", text: "grow larger at exactly the same rate" }
          ],
          correct: "A"
        },
        {
          id: "tenacious",
          sol: "11.RV.1.B",
          stem: "Sentences 9–10 help clarify that tenacious in sentence 8 means —",
          choices: [
            { letter: "A", text: "fragile and easily injured" },
            { letter: "B", text: "fast and difficult to see" },
            { letter: "C", text: "aggressive toward other animals" },
            { letter: "D", text: "persistent and hard to dislodge" }
          ],
          correct: "D"
        },
        {
          id: "transient",
          sol: "11.RV.1.B",
          stem: "Which sentence best helps the reader understand the meaning of transient in sentence 11?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "B"
        },
        {
          id: "conjecture",
          sol: "11.RV.1.B",
          stem: "In sentence 14, conjecture most nearly means —",
          choices: [
            { letter: "A", text: "a measurement taken with precise tools" },
            { letter: "B", text: "a fact that every scientist accepts" },
            { letter: "C", text: "an idea formed without complete proof" },
            { letter: "D", text: "a story told only for entertainment" }
          ],
          correct: "C"
        },
        {
          id: "proliferate",
          sol: "11.RV.1.C",
          stem: "Based on sentences 18–19, the word proliferate most nearly means to —",
          choices: [
            { letter: "A", text: "travel to distant vents" },
            { letter: "B", text: "increase rapidly in number" },
            { letter: "C", text: "fight fiercely for space" },
            { letter: "D", text: "slowly lose their color" }
          ],
          correct: "B"
        },
        {
          id: "boomtowns",
          sol: "11.RV.1.C",
          stem: "In sentence 20, comparing the vent field to a series of boomtowns suggests that vent communities —",
          choices: [
            { letter: "A", text: "are laid out like human cities with streets" },
            { letter: "B", text: "attract miners searching for valuable metals" },
            { letter: "C", text: "stay in one place for many centuries" },
            { letter: "D", text: "grow fast and fade when their energy ends" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rv-c101-crust",
      family: "G11",
      title: "Don't Step There",
      kind: "Vocabulary · 11.RV",
      blurb: "On a desert field trip, a ranger shows a class the living crust they almost walked on.",
      level: 1,
      passage:
        "<p>" + N(1) + "On the first morning of the field trip, Ranger Wren Castellanos stopped the class at the edge of the trail and pointed at the ground. " +
        N(2) + "\"Don't step there,\" she said. " +
        N(3) + "The students looked down and saw only a patch of dark, lumpy soil, as plain as burnt toast. " +
        N(4) + "In this <strong>arid</strong> country, where less than ten inches of rain fall in a year, most of the ground looked just like it.</p>" +
        "<p>" + N(5) + "\"That,\" the ranger explained, \"is alive.\" " +
        N(6) + "The crust, she said, was a community of tiny organisms: bacteria, mosses, lichens, and fungi woven together across the surface of the soil. " +
        N(7) + "It was so <strong>inconspicuous</strong> that most hikers walked across it without a second glance, yet it covered much of the desert floor.</p>" +
        "<p>" + N(8) + "The organisms do important work. " +
        N(9) + "Some of the bacteria produce sticky threads that bind loose grains of sand into a <strong>cohesive</strong> layer, one that holds together when wind blows across it. " +
        N(10) + "Without that layer, the soil would blow away in dust storms or wash away in the rare heavy rains. " +
        N(11) + "The crust also helps <strong>impede</strong> runoff, slowing water long enough for it to soak into the ground where seeds can use it.</p>" +
        "<p>" + N(12) + "During long dry spells, the crust shuts down and waits. " +
        N(13) + "It can stay <strong>dormant</strong> for months, appearing dead, and then turn green within minutes of a rain shower. " +
        N(14) + "Jalen Brooks, who had been taking notes, asked whether that meant the crust was tough. " +
        N(15) + "\"Tough against drought,\" the ranger said. " +
        N(16) + "\"Not against boots.\" " +
        N(17) + "A single footprint can crush the delicate threads, and a crushed patch may take decades to <strong>regenerate</strong> completely.</p>" +
        "<p>" + N(18) + "For the rest of the hike, the students stayed on the trail, stepping carefully around the dark patches as if they were tiny fields someone had planted. " +
        N(19) + "At the end of the day, Jalen looked back at the path they had walked. " +
        N(20) + "The crust on either side was unbroken. " +
        N(21) + "\"I've been stepping on this my whole life,\" he said quietly. " +
        N(22) + "\"I just didn't know it was there.\"</p>",
      claims: [
        {
          id: "inconspicuous",
          sol: "11.RV.1.A",
          stem: "The word inconspicuous in sentence 7 adds the prefix in-, meaning not, to conspicuous, meaning easy to notice. Based on this, inconspicuous means —",
          choices: [
            { letter: "A", text: "very easy to see" },
            { letter: "B", text: "not easily noticed" },
            { letter: "C", text: "covered with dust" },
            { letter: "D", text: "not alive at all" }
          ],
          correct: "B"
        },
        {
          id: "regenerate",
          sol: "11.RV.1.A",
          stem: "The word regenerate in sentence 17 combines re-, meaning again, with a root meaning to produce. To regenerate, a crushed patch of crust must —",
          choices: [
            { letter: "A", text: "dry out during a drought" },
            { letter: "B", text: "spread to a new desert" },
            { letter: "C", text: "change into a new plant" },
            { letter: "D", text: "grow back after damage" }
          ],
          correct: "D"
        },
        {
          id: "arid",
          sol: "11.RV.1.B",
          stem: "In sentence 4, the clue about rainfall shows that arid means —",
          choices: [
            { letter: "A", text: "very dry" },
            { letter: "B", text: "very hot" },
            { letter: "C", text: "very large" },
            { letter: "D", text: "very empty" }
          ],
          correct: "A"
        },
        {
          id: "cohesive",
          sol: "11.RV.1.B",
          stem: "Sentences 9–10 suggest that a cohesive layer is one that —",
          choices: [
            { letter: "A", text: "breaks apart easily in wind" },
            { letter: "B", text: "changes color after rain" },
            { letter: "C", text: "sticks together as a unit" },
            { letter: "D", text: "lets water pass straight through" }
          ],
          correct: "C"
        },
        {
          id: "impede",
          sol: "11.RV.1.B",
          stem: "In sentence 11, the word impede most nearly means —",
          choices: [
            { letter: "A", text: "speed up" },
            { letter: "B", text: "hold back" },
            { letter: "C", text: "clean out" },
            { letter: "D", text: "measure" }
          ],
          correct: "B"
        },
        {
          id: "dormant",
          sol: "11.RV.1.C",
          stem: "In sentence 13, the phrase appearing dead, and then turn green helps show that dormant means —",
          choices: [
            { letter: "A", text: "inactive but still alive" },
            { letter: "B", text: "permanently destroyed" },
            { letter: "C", text: "growing very quickly" },
            { letter: "D", text: "changing color often" }
          ],
          correct: "A"
        },
        {
          id: "boots",
          sol: "11.RV.1.C",
          stem: "In sentence 16, the ranger's reply Not against boots most nearly means that the crust —",
          choices: [
            { letter: "A", text: "can survive almost any kind of harm" },
            { letter: "B", text: "is found only far away from trails" },
            { letter: "C", text: "grows best beside busy hiking paths" },
            { letter: "D", text: "is easily damaged by people walking on it" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── PAIRED TEXTS ───────────────────────── */
    {
      id: "g11-dsr-c101-sawback",
      family: "G11",
      title: "Turbines on Sawback Ridge",
      kind: "Paired texts · 11.DSR",
      blurb: "A news report on a county wind-farm hearing, and a student op-ed that wants the decision made now.",
      level: 3,
      passage:
        "<p><strong>Text 1 — County Commission Hears Wind Proposal</strong></p>" +
        "<p>" + N(1) + "More than two hundred residents filled the Harlow County fairground hall on Tuesday night as the county commission heard a proposal to build twelve wind turbines along Sawback Ridge. " +
        N(2) + "Representatives of Northwind Renewables, the company behind the project, said the turbines would generate enough electricity for roughly nine thousand homes. " +
        N(3) + "They also said the company would pay the county about $600,000 a year in lease and tax payments for at least twenty-five years. " +
        N(4) + "Several landowners who would host turbines spoke in favor, noting that drought had cut their crop income for three straight seasons. " +
        N(5) + "Others raised concerns. " +
        N(6) + "A wildlife biologist from the state university said the ridge lies along a route used by migrating hawks and asked that the company complete a full year of bird surveys before construction. " +
        N(7) + "Residents living near the ridge asked about noise and about the blinking red lights required on tall structures. " +
        N(8) + "Company representatives said the nearest turbine would stand more than half a mile from any home. " +
        N(9) + "Commission chair Ruth Abernathy said no vote would be taken until the bird study is finished, which could delay a decision until next fall.</p>" +
        "<p><strong>Text 2 — Don't Let the Decision Drift</strong> <em>by Sami Lindgren, junior, Harlow High</em></p>" +
        "<p>" + N(10) + "I support the Sawback Ridge turbines, and I am tired of hearing that we need to wait another year to decide. " +
        N(11) + "My family's farm sits two miles from the ridge, on land my great-grandparents cleared. " +
        N(12) + "Like many of our neighbors, we have watched three dry summers shrink our harvests while our electric bill climbed. " +
        N(13) + "A lease payment for one turbine would not make anyone rich, but for a farm like ours, it could be the difference between keeping the land and selling it. " +
        N(14) + "I respect the biologist who spoke at Tuesday's meeting, and I agree that the hawks matter. " +
        N(15) + "But a careful study does not have to stop everything else. " +
        N(16) + "Other wind farms have shifted turbine locations or paused their blades during the peak weeks of migration, and Northwind could do the same. " +
        N(17) + "Every season of delay is another season the county goes without that $600,000. " +
        N(18) + "The commission should approve the project now, with a promise to protect the birds written into the contract, instead of letting the decision drift into next fall.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          stem: "Which fact about the Sawback Ridge proposal appears in both texts?",
          choices: [
            { letter: "A", text: "The turbines would power about nine thousand homes." },
            { letter: "B", text: "Nearby residents worry about blinking red lights." },
            { letter: "C", text: "Other wind farms pause blades during migration." },
            { letter: "D", text: "The county would receive about $600,000 a year." }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          stem: "Which statement best describes the main difference between the commission report and Sami's op-ed?",
          choices: [
            { letter: "A", text: "Text 1 reports several viewpoints, while Text 2 argues for one course of action." },
            { letter: "B", text: "Text 1 opposes the turbines, while Text 2 supports building them right away." },
            { letter: "C", text: "Text 1 focuses mainly on noise, while Text 2 focuses mainly on lights." },
            { letter: "D", text: "Text 1 is written by a biologist, while Text 2 is written by a commissioner." }
          ],
          correct: "A"
        },
        {
          id: "selecttwo",
          sol: "11.DSR.D",
          stem: "Select TWO details from Text 1 that support the argument Sami makes in Text 2.",
          choices: [
            { letter: "A", text: "the company would pay the county about $600,000 a year" },
            { letter: "B", text: "asked that the company complete a full year of bird surveys" },
            { letter: "C", text: "drought had cut their crop income for three straight seasons" },
            { letter: "D", text: "no vote would be taken until the bird study is finished" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "challenge",
          sol: "11.DSR.E",
          stem: "Which sentence from the commission report does Sami's op-ed most directly challenge?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "C"
        },
        {
          id: "disagree",
          sol: "11.DSR.E",
          stem: "A county resident who read both texts could best conclude that the main disagreement is about —",
          choices: [
            { letter: "A", text: "whether hawks really migrate along the ridge" },
            { letter: "B", text: "whether the bird study must come before a vote" },
            { letter: "C", text: "whether the county could use the lease money" },
            { letter: "D", text: "whether the turbines would produce electricity" }
          ],
          correct: "B"
        },
        {
          id: "surveys",
          sol: "11.RI.1.B",
          stem: "According to Text 1, why did the wildlife biologist ask for a full year of bird surveys?",
          choices: [
            { letter: "A", text: "Turbine lights confuse birds that fly at night." },
            { letter: "B", text: "Turbine noise drives nesting birds off the ridge." },
            { letter: "C", text: "The company had refused to study birds before." },
            { letter: "D", text: "The ridge lies on a route used by migrating hawks." }
          ],
          correct: "D"
        },
        {
          id: "biologist",
          sol: "11.RV.1.A",
          stem: "In sentence 6, biologist combines bio-, meaning life, with -logist, meaning one who studies. A biologist is therefore —",
          choices: [
            { letter: "A", text: "someone who builds wind turbines" },
            { letter: "B", text: "someone who studies living things" },
            { letter: "C", text: "someone who owns large farmland" },
            { letter: "D", text: "someone who writes county laws" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-dsr-c101-lastprint",
      family: "G11",
      title: "The Last Print Issue?",
      kind: "Paired texts · 11.DSR",
      blurb: "A student editor explains why the paper is going online only, and the school librarian answers.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From the Editor: Why The Beacon Is Going Digital</strong> <em>by Nomvula Dube, editor-in-chief</em></p>" +
        "<p>" + N(1) + "Starting in January, The Beacon will stop printing paper issues and publish only on our website. " +
        N(2) + "This was not an easy decision, and I want readers to understand why we made it. " +
        N(3) + "Printing costs have risen by nearly forty percent in two years, and our budget from the student activities fund has not grown at all. " +
        N(4) + "Last spring we had to cut two issues just to pay the printer. " +
        N(5) + "A website costs us almost nothing beyond the time we already spend writing. " +
        N(6) + "Going online also lets us do things paper never could. " +
        N(7) + "We can post game results the same night, correct errors within minutes, and add video and photo galleries. " +
        N(8) + "Our survey of 312 students found that 71 percent read news mostly on their phones. " +
        N(9) + "Every story will still go through the same editing and fact-checking as before, and readers can sign up for an email that lists each week's headlines. " +
        N(10) + "We know some readers will miss holding a paper copy. " +
        N(11) + "We will miss it too. " +
        N(12) + "But we would rather publish every week online than three times a semester in print.</p>" +
        "<p><strong>Text 2 — A Letter to The Beacon</strong> <em>from Esperanza Ruiz, school librarian</em></p>" +
        "<p>" + N(13) + "I understand the budget problem, and I admire the staff for explaining it so honestly. " +
        N(14) + "Still, I hope the editors will consider what a printed paper does that a website cannot. " +
        N(15) + "Every two weeks, I put a stack of Beacons on the library tables, and by lunch they are gone. " +
        N(16) + "I watch students who would never search for school news pick up a copy simply because it is lying in front of them. " +
        N(17) + "They read about a club they did not know existed, or about a classmate they have passed in the hall for years without learning a single thing about. " +
        N(18) + "A website waits to be visited; a paper on a table finds its readers. " +
        N(19) + "The survey says most students read news on their phones, but that may be because no one is handing them anything else. " +
        N(20) + "Perhaps a single printed issue each month, paid for by a few advertisements from local businesses, could keep that stack on my tables. " +
        N(21) + "I would gladly help the staff find those sponsors, and I suspect I would not be the only volunteer.</p>",
      claims: [
        {
          id: "agree",
          sol: "11.DSR.D",
          stem: "On which point do Nomvula Dube and Esperanza Ruiz agree?",
          choices: [
            { letter: "A", text: "Most students prefer reading news on phones." },
            { letter: "B", text: "Rising costs make printing hard for the paper." },
            { letter: "C", text: "The paper should stop printing in January." },
            { letter: "D", text: "Advertisements would ruin the newspaper." }
          ],
          correct: "B"
        },
        {
          id: "survey",
          sol: "11.DSR.D",
          stem: "How does Ruiz's view of the student survey differ from Dube's?",
          choices: [
            { letter: "A", text: "Ruiz claims the survey asked far too few students." },
            { letter: "B", text: "Ruiz argues that the survey was never conducted." },
            { letter: "C", text: "Ruiz agrees the survey proves print is unneeded." },
            { letter: "D", text: "Ruiz suggests the survey reflects habit, not preference." }
          ],
          correct: "D"
        },
        {
          id: "costs",
          sol: "11.DSR.E",
          stem: "Ruiz's suggestion in sentence 20 responds most directly to the problem described in which sentence of Text 1?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "11.DSR.E",
          stem: "Compared with the tone of Dube's memo, the tone of Ruiz's letter is best described as —",
          choices: [
            { letter: "A", text: "angry and accusing" },
            { letter: "B", text: "cold and formal" },
            { letter: "C", text: "respectful but persuasive" },
            { letter: "D", text: "careless and joking" }
          ],
          correct: "C"
        },
        {
          id: "plan",
          sol: "11.DSR.E",
          stem: "Using both texts, the plan most likely to satisfy both writers would be —",
          choices: [
            { letter: "A", text: "printing every week and shutting down the website" },
            { letter: "B", text: "weekly online issues plus a monthly print issue paid for by ads" },
            { letter: "C", text: "ending all publication until the budget grows" },
            { letter: "D", text: "asking students to print the articles at home" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "11.RI.1.C",
          stem: "Dube's main purpose in Text 1 is to —",
          choices: [
            { letter: "A", text: "ask readers to vote on whether to keep printing" },
            { letter: "B", text: "persuade the activities fund to raise the budget" },
            { letter: "C", text: "announce the results of a new reader survey" },
            { letter: "D", text: "explain and justify a decision readers may dislike" }
          ],
          correct: "D"
        },
        {
          id: "waits",
          sol: "11.RI.2.C",
          stem: "In sentence 18, Ruiz contrasts a website that waits with a paper that finds its readers mainly to —",
          choices: [
            { letter: "A", text: "show that print reaches students who would not seek out news" },
            { letter: "B", text: "argue that The Beacon's website is poorly designed" },
            { letter: "C", text: "complain that students no longer visit the library" },
            { letter: "D", text: "suggest that the paper should be mailed to homes" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-dsr-c101-coyotewash",
      family: "G11",
      title: "When the Wash Runs",
      kind: "Paired texts · 11.DSR",
      blurb: "A ranger's field report and a hiker's journal describe the same desert flash flood.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Field Report, Red Bluff Desert Preserve</strong> <em>by Ranger Isaac Mbeki</em></p>" +
        "<p>" + N(1) + "At 2:15 p.m. on August 9, a thunderstorm dropped about one inch of rain on the Tamarisk Hills, roughly twelve miles north of the preserve. " +
        N(2) + "No rain fell at the Coyote Wash trailhead, where skies remained partly sunny. " +
        N(3) + "At 3:40 p.m., a flash flood reached the lower wash. " +
        N(4) + "Water rose from a dry streambed to a depth of about four feet in less than five minutes, carrying mud, branches, and boulders. " +
        N(5) + "Two hikers in the wash heard the flood before they saw it and climbed to a ledge on the east wall. " +
        N(6) + "Both were uninjured and walked out on their own once the water fell. " +
        N(7) + "The water dropped below one foot by 5:30 p.m. " +
        N(8) + "The trail sign warning of flood danger was in place but had faded badly in the sun, and it is being replaced this week. " +
        N(9) + "Staff recommend posting the daily regional forecast at the trailhead, since storms many miles away can send water into the wash even when the sky overhead is clear. " +
        N(10) + "The lower trail will stay closed for two days while crews clear debris and check the footing on the canyon floor.</p>" +
        "<p><strong>Text 2 — From a Hiker's Journal</strong> <em>by Tenzin Dorje</em></p>" +
        "<p>" + N(11) + "We had been walking in the wash for an hour, and the sky above us was blue, with only a few clouds far to the north. " +
        N(12) + "I remember thinking how quiet it was, with no birds and no wind at all. " +
        N(13) + "Then my sister Pema stopped and tilted her head. " +
        N(14) + "There was a sound like a freight train, low at first, then everywhere. " +
        N(15) + "She grabbed my backpack strap and pulled me toward the canyon wall before I understood why. " +
        N(16) + "We scrambled up onto a ledge, scraping our hands, and a few seconds later a brown wall of water came around the bend below us. " +
        N(17) + "It carried whole bushes and rolled rocks the size of suitcases. " +
        N(18) + "We sat on that ledge for almost two hours, soaked by nothing but our own sweat, watching a river that had not existed at lunch. " +
        N(19) + "The sign at the trailhead had said something about floods, but the paint was so faded that I couldn't read most of it. " +
        N(20) + "I keep thinking about how the storm was somewhere we couldn't even see.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          stem: "Which detail about Coyote Wash appears in both the field report and the journal?",
          choices: [
            { letter: "A", text: "The water dropped below one foot by 5:30 p.m." },
            { letter: "B", text: "The hikers were named Tenzin and Pema." },
            { letter: "C", text: "The flood sign at the trailhead was hard to read." },
            { letter: "D", text: "The lower trail will be closed for two days." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          stem: "How does Tenzin's journal differ from Ranger Mbeki's report in presenting the flood?",
          choices: [
            { letter: "A", text: "It gives exact times and depths that the report leaves out." },
            { letter: "B", text: "It conveys the flood through sounds and feelings, not measurements." },
            { letter: "C", text: "It recommends changes the preserve should make to its signs." },
            { letter: "D", text: "It describes the storm in the Tamarisk Hills in greater detail." }
          ],
          correct: "B"
        },
        {
          id: "surprised",
          sol: "11.DSR.E",
          stem: "Read together, the two texts make clear that the hikers were surprised mainly because —",
          choices: [
            { letter: "A", text: "the trail had been closed, but they ignored the sign" },
            { letter: "B", text: "the ranger had told them the wash was safe that day" },
            { letter: "C", text: "the storm began directly above the trailhead" },
            { letter: "D", text: "the rain that caused the flood fell miles out of sight" }
          ],
          correct: "D"
        },
        {
          id: "explains",
          sol: "11.DSR.E",
          stem: "Tenzin's thought in sentence 20 is best explained by which sentence in the field report?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "A"
        },
        {
          id: "summary",
          sol: "11.RI.1.A",
          stem: "Which statement best summarizes Ranger Mbeki's field report?",
          choices: [
            { letter: "A", text: "Two hikers were hurt after ignoring a flood warning sign." },
            { letter: "B", text: "Rain at the trailhead filled the wash slowly all afternoon." },
            { letter: "C", text: "A distant storm caused a sudden flood, and new warnings are planned." },
            { letter: "D", text: "The preserve plans to close Coyote Wash to hikers for good." }
          ],
          correct: "C"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "How is the field report in Text 1 mainly organized?",
          choices: [
            { letter: "A", text: "in time order, followed by recommendations" },
            { letter: "B", text: "by comparing two different floods" },
            { letter: "C", text: "as a problem followed by several opinions" },
            { letter: "D", text: "from the least to the most important detail" }
          ],
          correct: "A"
        },
        {
          id: "uninjured",
          sol: "11.RV.1.A",
          stem: "The word uninjured in sentence 6 is formed from the prefix un- and the word injured. Based on this, uninjured means —",
          choices: [
            { letter: "A", text: "badly hurt" },
            { letter: "B", text: "hurt again" },
            { letter: "C", text: "hurt earlier" },
            { letter: "D", text: "not hurt" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
