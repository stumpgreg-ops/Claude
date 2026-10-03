/* SOL Labyrinth — Grade 11 long and epic packs (stamina tiers for nights 55–100).
 * Eight LONG packs (380–520 words: five short stories, one poem, informational,
 * argument, paired texts) and four EPIC packs (540–650 words: two stories, one
 * article, one argument). Original Virginia EOC Reading-style content for the
 * G11 family; no published text, no real people. Loaded after content.js;
 * pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── LONG · LITERARY ───────────────────────── */
    {
      id: "g11-l-secondchair",
      family: "G11",
      title: "Second Chair",
      kind: "Literary · 11.RL",
      blurb: "A demoted violist notices that the new first chair is always a fraction late, and finds out why.",
      level: 3,
      passage:
        "<p>" + N(1) + "The seating list went up on a Tuesday, taped to the orchestra room door at the height of a sophomore's eyes, and Maren read it twice before she understood that the name above hers was not a typo. " +
        N(2) + "Ilse Brandt, first chair viola. " +
        N(3) + "Maren Cho, second. " +
        N(4) + "For two years the order had been the other way, and Maren had come to think of the first stand the way you think of your own bedroom: not as something earned, but as something that was simply hers.</p>" +
        "<p>" + N(5) + "She did what she had been raised to do, which was to congratulate Ilse in a voice that sounded almost natural and then go home and practice until her left hand cramped. " +
        N(6) + "Ilse had transferred in October from a school with a real string program, and she played with a warm, unhurried sound that Maren admired against her will. " +
        N(7) + "But at the first rehearsal in the new seats, Maren noticed something: Ilse came in late. " +
        N(8) + "Not always, and never by much, but on every entrance after a long rest her bow moved a fraction after Maren's, as if she were waiting for permission.</p>" +
        "<p>" + N(9) + "Maren said nothing for a week. " +
        N(10) + "It was, she told herself, not her job to fix the first chair; it was her job to be ready when the first chair failed. " +
        N(11) + "Then, during the slow movement, Mr. Adeyemi stopped the orchestra and asked the violas why they were dragging, and Maren watched Ilse's face go still and blank in a way that she recognized from the mirror. " +
        N(12) + "It was the face of someone being blamed for a thing she could not explain.</p>" +
        "<p>" + N(13) + "After rehearsal Maren found her packing up. " +
        N(14) + "\"You're watching my bow,\" Maren said, and it came out more accusing than she meant. " +
        N(15) + "Ilse did not deny it. " +
        N(16) + "She took out her left earbud, except it was not an earbud; it was a small beige hearing aid, and she turned it over in her palm like a coin. " +
        N(17) + "\"The brass sits behind us,\" she said. " +
        N(18) + "\"When they're loud, I lose the count. I can hear the pitch fine. I just can't hear him.\" " +
        N(19) + "Maren thought about the rests she had been counting alone in her head, twenty-three measures of silence, and how she had never once wondered whether the person beside her could hear the same silence she could.</p>" +
        "<p>" + N(20) + "\"Then watch me,\" she said. " +
        N(21) + "\"I'll breathe on the upbeat before every entrance. Big breath, so you can see it.\" " +
        N(22) + "They tried it the next day, and the violas came in together, and Mr. Adeyemi nodded without knowing why. " +
        N(23) + "Maren did not get her chair back that semester. " +
        N(24) + "She found, to her surprise, that she had stopped keeping track. " +
        N(25) + "There is a kind of leading that does not show up on a list taped to a door, and she had learned it from the second stand, one breath at a time." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses the theme that Maren's experience at the second stand develops?",
          choices: [
            { letter: "A", text: "Competition between musicians brings out the best in both of them." },
            { letter: "B", text: "Real leadership can be exercised from a position that carries no title." },
            { letter: "C", text: "A conductor cannot see everything that happens in an orchestra." },
            { letter: "D", text: "Hard work is eventually rewarded with the recognition it deserves." }
          ],
          correct: "B"
        },
        {
          id: "bedroom",
          sol: "11.RL.2.A",
          stem: "In sentence 4, comparing the first stand to Maren's own bedroom suggests that she regarded the seat as —",
          choices: [
            { letter: "A", text: "a private place where she could practice without being judged" },
            { letter: "B", text: "a reward she had worked for over two difficult years" },
            { letter: "C", text: "a comfort she was glad to give up when the time came" },
            { letter: "D", text: "a possession she no longer thought she had to keep earning" }
          ],
          correct: "D"
        },
        {
          id: "job",
          sol: "11.RL.1.C",
          stem: "Sentence 10 reveals that Maren at first —",
          choices: [
            { letter: "A", text: "justifies her silence by defining her role narrowly" },
            { letter: "B", text: "hopes the conductor will notice Ilse's mistakes on his own" },
            { letter: "C", text: "believes Ilse is deliberately playing behind the beat" },
            { letter: "D", text: "worries that offering help would be taken as an insult" }
          ],
          correct: "A"
        },
        {
          id: "signal",
          sol: "11.RL.1.B",
          stem: "Which sentence first hints that Ilse's late entrances have a cause other than weak playing?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "C"
        },
        {
          id: "mirror",
          sol: "11.RL.2.B",
          stem: "In sentence 11, the phrase recognized from the mirror mainly conveys that Maren —",
          choices: [
            { letter: "A", text: "has worn the same expression when blamed for something she could not explain" },
            { letter: "B", text: "is watching Ilse's reflection in the glass of the rehearsal room door" },
            { letter: "C", text: "is pleased to see Ilse receive the criticism she has been expecting" },
            { letter: "D", text: "realizes that she and Ilse look enough alike to be confused by others" }
          ],
          correct: "A"
        },
        {
          id: "unhurried",
          sol: "11.RV.1.C",
          stem: "In sentence 6, the word unhurried most nearly means —",
          choices: [
            { letter: "A", text: "quiet and hesitant" },
            { letter: "B", text: "careless about timing" },
            { letter: "C", text: "slightly behind the beat" },
            { letter: "D", text: "calm and steady" }
          ],
          correct: "D"
        },
        {
          id: "list",
          sol: "11.RL.3.A",
          stem: "The reference in sentence 25 to a list taped to a door echoes sentence 1 in order to —",
          choices: [
            { letter: "A", text: "remind the reader that the seating list will be posted again next semester" },
            { letter: "B", text: "suggest that Maren still resents the way the list was displayed" },
            { letter: "C", text: "measure how far Maren's idea of success has moved since the story began" },
            { letter: "D", text: "show that Mr. Adeyemi has finally corrected the order of the violas" }
          ],
          correct: "C"
        },
        {
          id: "nodded",
          sol: "10.RL.2.C",
          stem: "Sentence 22 is ironic because the conductor —",
          choices: [
            { letter: "A", text: "praises the violas for a change he had demanded a week earlier" },
            { letter: "B", text: "approves a fix he never knew was needed, made by the player he had demoted" },
            { letter: "C", text: "nods to Ilse even though Maren is the one who has been playing correctly" },
            { letter: "D", text: "still cannot hear the difference between the two violists" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-l-nightwash",
      family: "G11",
      title: "Night Wash",
      kind: "Literary · 11.RL",
      blurb: "A stranger in a gray cardigan comes into the laundromat every Tuesday at eleven and folds other people's clothes.",
      level: 2,
      passage:
        "<p>" + N(1) + "My parents bought the Sunrise Laundromat from a man named Mr. Okonkwo, who had run it for twenty-six years and who, according to the paperwork, no longer had anything to do with it. " +
        N(2) + "The paperwork was wrong. " +
        N(3) + "I found this out my first week on the night shift, the summer I turned seventeen, when my job was to sit behind the counter from eight until midnight, make change, and call my father if a machine flooded.</p>" +
        "<p>" + N(4) + "At eleven, the door opened and a tall man in a gray cardigan came in without a laundry bag. " +
        N(5) + "He nodded to me as if we had met, walked to the row of dryers, and opened number six, which had been spinning a stranger's load for twenty minutes past done. " +
        N(6) + "He took out the clothes, carried them to the folding table, and began to fold. " +
        N(7) + "Shirts first, sleeves tucked in thirds. " +
        N(8) + "Then jeans, then a stack of children's socks paired by color.</p>" +
        "<p>" + N(9) + "I did not know what to do. " +
        N(10) + "The folding was not illegal, exactly, but it was not his laundry, and the kind of person who handles a stranger's clothes at eleven at night is usually not the kind of person you want in your store. " +
        N(11) + "I picked up the phone and set it down twice. " +
        N(12) + "When the owner of the load, a nurse still in scrubs, came in at 11:30, she said, \"Oh good, you're still doing this,\" and hugged him.</p>" +
        "<p>" + N(13) + "His name was Mr. Okonkwo, of course. " +
        N(14) + "He came Tuesday and Thursday nights, always at eleven, always to the abandoned loads. " +
        N(15) + "He told me, when I finally asked, that the folding table had been his idea back in 1998, when he noticed that people who worked late left their clothes in the dryer because they were too tired to fold them. " +
        N(16) + "\"A wrinkled shirt is a small thing,\" he said. " +
        N(17) + "\"But a person who has worked twelve hours should not come home to small things.\"</p>" +
        "<p>" + N(18) + "I asked him once why he didn't just stay and run the place if he loved it. " +
        N(19) + "He looked at me as if I had asked why he didn't go back to being thirty. " +
        N(20) + "\"I sold the machines,\" he said. " +
        N(21) + "\"I didn't sell the table.\" " +
        N(22) + "Then he went back to a pile of towels.</p>" +
        "<p>" + N(23) + "By August I was folding beside him. " +
        N(24) + "I was not good at it; my sleeves came out crooked and he refolded them without comment. " +
        N(25) + "My father, reviewing the register one night, asked why our late-hour customers had gone up, and I told him it was the neighborhood. " +
        N(26) + "It was not the neighborhood. " +
        N(27) + "It was an old man who had sold a business and kept the part of it that mattered, and who had somehow, without saying so, handed that part to me." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which idea does the story as a whole most clearly develop?",
          choices: [
            { letter: "A", text: "Family businesses succeed only when every generation works in them." },
            { letter: "B", text: "Strangers who seem suspicious usually turn out to be harmless." },
            { letter: "C", text: "The purpose behind a job can outlast the ownership of it." },
            { letter: "D", text: "Young workers learn more from customers than from their parents." }
          ],
          correct: "C"
        },
        {
          id: "paperwork",
          sol: "11.RL.1.B",
          stem: "Sentence 2 is best understood to mean that —",
          choices: [
            { letter: "A", text: "the sale did not end Mr. Okonkwo's involvement with the laundromat" },
            { letter: "B", text: "the narrator's parents were cheated when they bought the business" },
            { letter: "C", text: "Mr. Okonkwo had run the laundromat for longer than the records showed" },
            { letter: "D", text: "the narrator was not officially allowed to work the night shift" }
          ],
          correct: "A"
        },
        {
          id: "phone",
          sol: "11.RL.1.C",
          stem: "Sentence 11 shows that the narrator is —",
          choices: [
            { letter: "A", text: "eager to prove to his father that he can handle the store" },
            { letter: "B", text: "certain that the man is stealing and afraid to confront him" },
            { letter: "C", text: "too tired at that hour to care what happens to the clothes" },
            { letter: "D", text: "torn between suspicion and a reluctance to act on it" }
          ],
          correct: "D"
        },
        {
          id: "thirty",
          sol: "11.RL.2.B",
          stem: "In sentence 19, comparing the narrator's question to asking why Mr. Okonkwo didn't go back to being thirty conveys that —",
          choices: [
            { letter: "A", text: "Mr. Okonkwo regrets selling the business while he was still young enough to run it" },
            { letter: "B", text: "the question struck Mr. Okonkwo as asking for something that was no longer possible" },
            { letter: "C", text: "the narrator is too young to understand how a business is bought and sold" },
            { letter: "D", text: "Mr. Okonkwo is annoyed that the narrator keeps interrupting his folding" }
          ],
          correct: "B"
        },
        {
          id: "abandoned",
          sol: "11.RV.1.C",
          stem: "In sentence 14, the word abandoned most nearly means —",
          choices: [
            { letter: "A", text: "damaged in the dryer" },
            { letter: "B", text: "left behind by their owners" },
            { letter: "C", text: "too worn to be worth folding" },
            { letter: "D", text: "belonging to no one in particular" }
          ],
          correct: "B"
        },
        {
          id: "table",
          sol: "11.RL.3.A",
          stem: "Sentences 20 and 21 are central to the story because they —",
          choices: [
            { letter: "A", text: "reveal that the folding table legally still belongs to Mr. Okonkwo" },
            { letter: "B", text: "explain why the narrator's father agreed to buy the laundromat" },
            { letter: "C", text: "show that Mr. Okonkwo is unwilling to talk about his past" },
            { letter: "D", text: "state the distinction between ownership and purpose that the story builds toward" }
          ],
          correct: "D"
        },
        {
          id: "duties",
          sol: "11.RL.1.C",
          stem: "The contrast between the narrator's assigned duties in sentence 3 and his actions in sentence 23 shows that he has —",
          choices: [
            { letter: "A", text: "taken on a responsibility that no one asked of him" },
            { letter: "B", text: "stopped doing the job his parents hired him to do" },
            { letter: "C", text: "been promoted to a better position by his father" },
            { letter: "D", text: "grown bored with sitting behind the counter all night" }
          ],
          correct: "A"
        },
        {
          id: "neighborhood",
          sol: "10.RL.2.C",
          stem: "The narrator's remark in sentence 26 mainly serves to —",
          choices: [
            { letter: "A", text: "suggest that the father knows more about the business than he admits" },
            { letter: "B", text: "show that the narrator regrets lying to his father" },
            { letter: "C", text: "correct for the reader an answer the narrator did not correct for his father" },
            { letter: "D", text: "explain why the laundromat's late-night customers had increased" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-l-station",
      family: "G11",
      title: "The Bottom of the Hill",
      kind: "Literary · 11.RL",
      blurb: "A backyard thermometer disagrees with the airport by seven degrees, and Ngozi decides to find out which one is lying.",
      level: 3,
      passage:
        "<p>" + N(1) + "The airport said it was fifty-four degrees. " +
        N(2) + "Ngozi's thermometer, bolted to a post at the bottom of the yard where the land folded down toward the creek, said forty-seven. " +
        N(3) + "Seven degrees is not a rounding error; seven degrees is the difference between rain and sleet, between a frost that kills tomatoes and one that does not. " +
        N(4) + "She wrote both numbers in the notebook, as she had every morning at 6:40 since September, and drew a small, careful question mark in the margin.</p>" +
        "<p>" + N(5) + "Her science teacher, Mr. Halloran, was fond of the airport. " +
        N(6) + "\"Calibrated instruments,\" he said, when she showed him the notebook. " +
        N(7) + "\"Professional siting. Fifty years of records. Your station is a thermometer on a stick, Ngozi. Use the official data for your project and move on.\" " +
        N(8) + "He was not unkind about it. " +
        N(9) + "He simply believed, as most people do, that the bigger source is the truer one.</p>" +
        "<p>" + N(10) + "She did not move on. " +
        N(11) + "Instead she borrowed a second thermometer from the lab, checked it against the first in a bucket of ice water, and hung it on the back porch, forty feet up the slope from the post. " +
        N(12) + "By November she had three numbers every morning, and they told a story the airport could not: the porch ran three degrees warmer than the post, and the airport, eleven miles away on flat ground, ran warmer than both. " +
        N(13) + "Cold air, she learned, is heavier than warm air. " +
        N(14) + "On still nights it slides downhill like water and pools in low places. " +
        N(15) + "Her yard was a bowl; the creek bottom was its drain.</p>" +
        "<p>" + N(16) + "The first frost came on the night of November 9. " +
        N(17) + "The airport recorded a low of thirty-six. " +
        N(18) + "The post recorded twenty-nine. " +
        N(19) + "In the morning, the neighbor's late tomatoes, planted along the creek, were black and collapsed, and the neighbor stood over them saying that the forecast had promised no frost.</p>" +
        "<p>" + N(20) + "Ngozi took the notebook to Mr. Halloran with the tomato story attached. " +
        N(21) + "He read it standing up, which she had learned meant he was interested. " +
        N(22) + "\"So the airport's wrong,\" he said. " +
        N(23) + "\"No,\" she said. \"The airport's right about the airport. It's just not here.\" " +
        N(24) + "He looked at the graph for a long moment, three lines diverging on cold nights and converging on windy ones, and then he did something she had not expected: he asked if he could keep a copy.</p>" +
        "<p>" + N(25) + "Her project did not win the regional fair. " +
        N(26) + "The judges preferred a volcano that actually erupted. " +
        N(27) + "But in March, the neighbor knocked on the door and asked, a little sheepishly, whether the post could tell him when it was safe to plant. " +
        N(28) + "Ngozi said it could not promise anything. " +
        N(29) + "It could only tell him what was true at the bottom of the hill, which, she had come to think, was the only place it had ever claimed to know." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses the central idea that Ngozi's three thermometers develop?",
          choices: [
            { letter: "A", text: "Official records are usually less accurate than people assume." },
            { letter: "B", text: "Science fair judges reward spectacle over careful work." },
            { letter: "C", text: "Students learn best when teachers refuse to accept their conclusions." },
            { letter: "D", text: "Patient observation of one place can reveal what a general source misses." }
          ],
          correct: "D"
        },
        {
          id: "seven",
          sol: "11.RL.2.B",
          stem: "In sentence 3, the repetition of seven degrees followed by paired examples mainly serves to —",
          choices: [
            { letter: "A", text: "establish that the difference between the readings has real consequences" },
            { letter: "B", text: "suggest that Ngozi's thermometer is the one that must be broken" },
            { letter: "C", text: "show that Ngozi is more interested in weather than in gardening" },
            { letter: "D", text: "explain why the airport publishes its temperatures in whole numbers" }
          ],
          correct: "A"
        },
        {
          id: "halloran",
          sol: "11.RL.1.C",
          stem: "Sentences 8 and 9 characterize Mr. Halloran as —",
          choices: [
            { letter: "A", text: "dismissive of students who question him" },
            { letter: "B", text: "reasonable but limited by a common assumption" },
            { letter: "C", text: "secretly impressed by Ngozi's persistence" },
            { letter: "D", text: "more concerned with grades than with accuracy" }
          ],
          correct: "B"
        },
        {
          id: "water",
          sol: "11.RL.2.A",
          stem: "The simile in sentence 14 comparing cold air to water helps the reader understand —",
          choices: [
            { letter: "A", text: "why the creek at the bottom of the yard rarely freezes" },
            { letter: "B", text: "why Ngozi checks her thermometers in a bucket of ice" },
            { letter: "C", text: "why the post reads colder than the porch on still nights" },
            { letter: "D", text: "why the airport's instruments are placed on flat ground" }
          ],
          correct: "C"
        },
        {
          id: "tomatoes",
          sol: "11.RL.1.B",
          stem: "The neighbor's tomatoes in sentence 19 connect to sentence 3 by —",
          choices: [
            { letter: "A", text: "proving that the neighbor should have trusted the airport's forecast" },
            { letter: "B", text: "showing the consequence that sentence 3 said the difference could produce" },
            { letter: "C", text: "revealing that the frost was colder than either thermometer recorded" },
            { letter: "D", text: "suggesting that the neighbor planted the tomatoes too close to the creek" }
          ],
          correct: "B"
        },
        {
          id: "diverging",
          sol: "11.RV.1.C",
          stem: "In sentence 24, the word diverging most nearly means —",
          choices: [
            { letter: "A", text: "spreading apart" },
            { letter: "B", text: "rising sharply" },
            { letter: "C", text: "becoming unreadable" },
            { letter: "D", text: "crossing one another" }
          ],
          correct: "A"
        },
        {
          id: "turning",
          sol: "11.RL.3.A",
          stem: "Ngozi's reply in sentence 23 marks a turning point in the story because it —",
          choices: [
            { letter: "A", text: "finally persuades Mr. Halloran that her thermometer is calibrated" },
            { letter: "B", text: "admits that her own readings were the ones that had been wrong" },
            { letter: "C", text: "proves that the airport's records cannot be trusted anywhere" },
            { letter: "D", text: "reframes the question from which source is right to what each source can know" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "11.RL.3.A",
          stem: "How does the final paragraph relate to the rest of the story?",
          choices: [
            { letter: "A", text: "It reveals that Mr. Halloran used Ngozi's data in his own research." },
            { letter: "B", text: "It shows Ngozi giving up on the project after losing the fair." },
            { letter: "C", text: "It measures the project's real success by the neighbor's trust rather than the judges' prize." },
            { letter: "D", text: "It explains why the volcano project deserved to win the competition." }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── LONG · POETRY ───────────────────────── */
    {
      id: "g11-l-poem-knots",
      family: "G11",
      title: "The Knots",
      kind: "Poetry · 11.RL",
      blurb: "A poem about Sunday lessons in a driveway, a rope that never saw water, and a loop that will not choke.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My uncle kept his rope in the back of a truck that never saw water,<br>" +
        L(2) + "coiled the way a sleeping animal keeps its warmth,<br>" +
        L(3) + "and on Sundays, in the driveway, he taught me the knots<br>" +
        L(4) + "the way another man might teach a boy to pray:<br>" +
        L(5) + "the bowline, which makes a loop that will not choke;<br>" +
        L(6) + "the clove hitch, quick and faithless, that slips when you look away;<br>" +
        L(7) + "the sheet bend, for joining two ropes that do not match.<br>" +
        L(8) + "\"Every knot is a promise,\" he said, \"about what will hold.\"<br><br>" +
        L(9) + "I did not fish. I did not want to.<br>" +
        L(10) + "I wanted the rope to lie still in my hands and be simple,<br>" +
        L(11) + "and it would not, and he would not let it,<br>" +
        L(12) + "turning the working end back through the loop,<br>" +
        L(13) + "the rabbit out of the hole, around the tree, and home,<br>" +
        L(14) + "a story he told a hundred times until my fingers knew it<br>" +
        L(15) + "without the rabbit, without the tree, without him.<br><br>" +
        L(16) + "He has been gone three winters now.<br>" +
        L(17) + "The truck was sold; the rope, I think, went with it.<br>" +
        L(18) + "But last week on the loading dock, a pallet shifting,<br>" +
        L(19) + "someone shouted for a line and I had one tied<br>" +
        L(20) + "before I knew I had been asked: bowline, clean,<br>" +
        L(21) + "the loop that will not choke, holding a thing I could not have lifted alone.<br>" +
        L(22) + "I stood there with the strain of it humming in my palms<br>" +
        L(23) + "and understood at last what he had been teaching<br>" +
        L(24) + "those Sundays in the driveway, miles from any water:<br>" +
        L(25) + "not fishing. Not knots. The part of a person that holds." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "The poem as a whole most strongly supports which idea?",
          choices: [
            { letter: "A", text: "What a person is really being taught may be larger than the skill being practiced." },
            { letter: "B", text: "Practical skills are more valuable than the memories attached to them." },
            { letter: "C", text: "Children resist their elders' lessons until they are forced to use them." },
            { letter: "D", text: "A craft learned for one purpose is rarely useful for another." }
          ],
          correct: "A"
        },
        {
          id: "animal",
          sol: "11.RL.2.A",
          stem: "In line 2, comparing the coiled rope to a sleeping animal suggests that the rope is —",
          choices: [
            { letter: "A", text: "dangerous if handled carelessly" },
            { letter: "B", text: "old and no longer useful" },
            { letter: "C", text: "kept as something living and cared for" },
            { letter: "D", text: "hidden away where no one will find it" }
          ],
          correct: "C"
        },
        {
          id: "faithless",
          sol: "11.RL.2.B",
          stem: "Calling the clove hitch faithless in line 6 —",
          choices: [
            { letter: "A", text: "shows that the uncle refused to teach the speaker that knot" },
            { letter: "B", text: "treats the knot as an unreliable character, preparing for the idea of knots as promises in line 8" },
            { letter: "C", text: "suggests that the speaker never learned to tie it correctly" },
            { letter: "D", text: "contrasts the uncle's careful rope with the truck that never saw water" }
          ],
          correct: "B"
        },
        {
          id: "boy",
          sol: "11.RL.1.C",
          stem: "Lines 9 through 11 reveal that the speaker as a boy —",
          choices: [
            { letter: "A", text: "was eager to go fishing but was never invited" },
            { letter: "B", text: "understood immediately why the lessons mattered" },
            { letter: "C", text: "preferred the clove hitch because it was quick" },
            { letter: "D", text: "resisted the lessons and wished they were easier" }
          ],
          correct: "D"
        },
        {
          id: "workingend",
          sol: "11.RV.1.C",
          stem: "In line 12, the phrase working end most nearly refers to —",
          choices: [
            { letter: "A", text: "the part of the rope tied to the truck" },
            { letter: "B", text: "the frayed end that needs repair" },
            { letter: "C", text: "the end of the rope being moved to form the knot" },
            { letter: "D", text: "the end of the Sunday lesson" }
          ],
          correct: "C"
        },
        {
          id: "water",
          sol: "11.RL.3.A",
          stem: "The phrase miles from any water in line 24 echoes line 1 in order to —",
          choices: [
            { letter: "A", text: "emphasize that the knots were never really about fishing" },
            { letter: "B", text: "explain why the speaker never learned to fish" },
            { letter: "C", text: "suggest that the uncle had once been a sailor" },
            { letter: "D", text: "show how far the loading dock is from the driveway" }
          ],
          correct: "A"
        },
        {
          id: "asked",
          sol: "11.RL.1.B",
          stem: "Line 20 suggests that the speaker —",
          choices: [
            { letter: "A", text: "was surprised that anyone on the dock knew his name" },
            { letter: "B", text: "hesitated before deciding which knot to use" },
            { letter: "C", text: "tied the wrong knot in the confusion" },
            { letter: "D", text: "had made the skill so automatic that it acted before thought" }
          ],
          correct: "D"
        },
        {
          id: "holds",
          sol: "11.RL.2.C",
          stem: "In line 25, the part of a person that holds most nearly refers to —",
          choices: [
            { letter: "A", text: "the strength of the speaker's hands" },
            { letter: "B", text: "the ability to be relied on under strain" },
            { letter: "C", text: "the memory of a person who has died" },
            { letter: "D", text: "the patience needed to learn a difficult skill" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── LONG · INFORMATIONAL ───────────────────────── */
    {
      id: "g11-l-cafeteria",
      family: "G11",
      title: "Why the Cafeteria Is So Loud",
      kind: "Informational · 11.RI",
      blurb: "Hard surfaces, a reflex named after a physician, and a feedback loop that ends only when lunch does.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every school has a room that its students describe with the same word: loud. " +
        N(2) + "Usually it is the cafeteria, and usually the loudness is treated as a fact of nature, like weather, rather than as a problem with causes that can be measured and, to a surprising degree, fixed.</p>" +
        "<p>" + N(3) + "The first cause is the room itself. " +
        N(4) + "Cafeterias are built to be cleaned, so their surfaces are hard: tile floors, painted block walls, long tables of laminate and steel. " +
        N(5) + "Hard surfaces reflect sound rather than absorbing it, and a sound that bounces many times before it fades is said to reverberate. " +
        N(6) + "Acousticians measure this with a number called reverberation time, the seconds it takes a sharp sound to drop to near silence. " +
        N(7) + "A carpeted living room might have a reverberation time of half a second; a typical cafeteria can run past two. " +
        N(8) + "In such a room, the tail of every word overlaps the beginning of the next, and speech becomes harder to understand even when it is not especially loud.</p>" +
        "<p>" + N(9) + "The second cause is people, and here the physics turns into behavior. " +
        N(10) + "When listeners struggle to hear, speakers raise their voices without deciding to, a reflex that researchers call the Lombard effect after the physician who first described it. " +
        N(11) + "Each raised voice adds to the background, which prompts the next table to raise its voices, and so on across the room in a feedback loop that ends only when lunch does. " +
        N(12) + "Sound-level readings in cafeterias commonly reach 80 to 85 decibels, roughly the level of a busy street, and staff who work in them for hours report hoarseness and fatigue.</p>" +
        "<p>" + N(13) + "Because the loop has two parts, it can be broken from either side. " +
        N(14) + "Acoustic panels, made of dense fiber and mounted on walls or hung from ceilings, absorb reflections and can cut reverberation time in half; several districts have installed them for less than the cost of replacing a single set of tables. " +
        N(15) + "Softer tabletops and rubber chair glides remove the scrape and clatter that punctuate the roar. " +
        N(16) + "On the behavioral side, some schools stagger lunch periods so that fewer students share the room at once, and a few have tried a visual meter, a display that shows the current noise level, which lets students see the loop and step out of it.</p>" +
        "<p>" + N(17) + "None of these measures produces a quiet cafeteria, nor should they. " +
        N(18) + "Lunch is the one period when students are supposed to talk. " +
        N(19) + "The goal is a room in which talking works, where a person can be heard by the friend across the table without shouting, and where the building stops arguing with the people inside it." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the central idea of the passage about cafeteria noise?",
          choices: [
            { letter: "A", text: "Cafeteria noise has measurable causes and can be reduced by targeting each of them." },
            { letter: "B", text: "Schools should replace hard cafeteria surfaces with carpet and soft furniture." },
            { letter: "C", text: "Students are responsible for most of the noise in a school cafeteria." },
            { letter: "D", text: "Reverberation time is the most reliable measure of how loud a room is." }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          stem: "How is the passage organized?",
          choices: [
            { letter: "A", text: "A series of schools are compared according to how they solved the same problem." },
            { letter: "B", text: "A common belief is stated and then defended with scientific evidence." },
            { letter: "C", text: "The history of cafeteria design is traced from its origins to the present." },
            { letter: "D", text: "Two causes are explained in turn, followed by solutions matched to each cause." }
          ],
          correct: "D"
        },
        {
          id: "reverberate",
          sol: "11.RV.1.B",
          stem: "In sentence 5, the words before the term show that to reverberate means to —",
          choices: [
            { letter: "A", text: "fade quickly into silence" },
            { letter: "B", text: "persist through repeated reflection" },
            { letter: "C", text: "be absorbed by a soft surface" },
            { letter: "D", text: "grow louder as more people speak" }
          ],
          correct: "B"
        },
        {
          id: "select2",
          sol: "11.RI.1.B",
          stem: "Select TWO sentences that describe how the Lombard effect contributes to cafeteria noise.",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "weather",
          sol: "11.RI.2.B",
          stem: "In sentence 2, comparing the loudness to weather mainly emphasizes that people —",
          choices: [
            { letter: "A", text: "complain about the cafeteria the way they complain about rain" },
            { letter: "B", text: "notice the noise more on some days than on others" },
            { letter: "C", text: "expect the cafeteria to be quieter in winter" },
            { letter: "D", text: "wrongly treat the noise as something that cannot be changed" }
          ],
          correct: "D"
        },
        {
          id: "cost",
          sol: "11.RI.2.C",
          stem: "The author supports the claim in sentence 14 that acoustic panels are affordable by —",
          choices: [
            { letter: "A", text: "comparing their cost to that of another familiar school expense" },
            { letter: "B", text: "listing the exact price paid by several districts" },
            { letter: "C", text: "quoting a facilities manager who installed them" },
            { letter: "D", text: "explaining that the panels are made of inexpensive fiber" }
          ],
          correct: "A"
        },
        {
          id: "goal",
          sol: "11.RI.1.C",
          stem: "The author includes sentences 17 and 18 mainly to —",
          choices: [
            { letter: "A", text: "admit that none of the proposed solutions has worked" },
            { letter: "B", text: "argue that students should be allowed to talk during other periods" },
            { letter: "C", text: "clarify that the aim is workable conversation, not silence" },
            { letter: "D", text: "suggest that the noise problem has been exaggerated" }
          ],
          correct: "C"
        },
        {
          id: "meter",
          sol: "11.RI.1.B",
          stem: "The visual meter described in sentence 16 is meant to interrupt the process described in —",
          choices: [
            { letter: "A", text: "sentence 5" },
            { letter: "B", text: "sentence 8" },
            { letter: "C", text: "sentence 11" },
            { letter: "D", text: "sentence 14" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-l-roundabout",
      family: "G11",
      title: "The Roundabout's Quiet Argument",
      kind: "Informational · 11.RI",
      blurb: "Why a road design that drivers dislike keeps them safer, and why the discomfort is the point.",
      level: 3,
      passage:
        "<p>" + N(1) + "Few pieces of road design provoke as much complaint as the modern roundabout, and few have as strong a safety record. " +
        N(2) + "The gap between how drivers feel about roundabouts and how roundabouts actually perform is instructive, because it shows how difficult it is for people to judge risk from inside a car.</p>" +
        "<p>" + N(3) + "A conventional four-way intersection contains thirty-two conflict points, places where the paths of two vehicles can cross, merge, or split apart. " +
        N(4) + "Sixteen of those are crossing conflicts, the kind that produce the right-angle collisions engineers most fear, since a car struck in the side has little structure to protect its occupants. " +
        N(5) + "A single-lane roundabout has eight conflict points and no crossing conflicts at all. " +
        N(6) + "Every vehicle enters by merging in the same direction, at a low angle, and at the reduced speed that the curve enforces. " +
        N(7) + "Collisions still happen, but they tend to be glancing sideswipes at twenty miles per hour rather than broadside impacts at forty-five.</p>" +
        "<p>" + N(8) + "The numbers bear this out. " +
        N(9) + "Studies of intersections converted from signals to roundabouts report reductions in injury crashes of roughly three-quarters, with fatal crashes falling further still. " +
        N(10) + "Roundabouts also keep traffic moving: a signal forces every approach to stop in turn, while a roundabout asks each driver only to yield, so during light traffic almost no one waits. " +
        N(11) + "The savings in idling fuel across a busy intersection add up to thousands of gallons a year.</p>" +
        "<p>" + N(12) + "Why, then, the complaints? " +
        N(13) + "Part of the answer is that a roundabout transfers work from the signal to the driver. " +
        N(14) + "At a traffic light, a green means the decision has been made for you. " +
        N(15) + "At a roundabout, you must judge gaps, read the intentions of other drivers, and commit, and the small, constant effort of doing so feels like danger even when it is producing safety. " +
        N(16) + "Newness matters too: surveys taken before a roundabout is built typically show a majority opposed; surveys a year after it opens typically show a majority in favor, with the same residents having changed their minds.</p>" +
        "<p>" + N(17) + "There are limits. " +
        N(18) + "Roundabouts need more land than a signalized intersection, which makes them costly in dense downtowns. " +
        N(19) + "Multi-lane versions reintroduce some of the conflicts single-lane designs remove, and they can be genuinely confusing. " +
        N(20) + "Pedestrians with visual impairments, who rely on the predictable pauses that signals create, face real difficulties at crossings where traffic never fully stops. " +
        N(21) + "These are engineering problems with partial solutions, not reasons to abandon the design.</p>" +
        "<p>" + N(22) + "The larger lesson reaches beyond traffic. " +
        N(23) + "A roundabout is a device that makes people slightly uncomfortable in order to keep them safe, and the discomfort is the mechanism, not a side effect. " +
        N(24) + "Drivers slow down because the road does not let them do otherwise, and the road, in a sense, is the only participant that never gets distracted." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          stem: "Which statement best states the central idea the author develops across the passage?",
          choices: [
            { letter: "A", text: "Traffic signals should be replaced with roundabouts wherever land allows." },
            { letter: "B", text: "Drivers dislike roundabouts because multi-lane versions are confusing." },
            { letter: "C", text: "Roundabouts are safer than drivers perceive, because the effort they demand feels like risk." },
            { letter: "D", text: "Public opinion about road design changes slowly and unpredictably." }
          ],
          correct: "C"
        },
        {
          id: "crossing",
          sol: "11.RI.1.B",
          stem: "According to paragraph 2, a single-lane roundabout eliminates —",
          choices: [
            { letter: "A", text: "all collisions between vehicles that enter at the same time" },
            { letter: "B", text: "the crossing conflicts that produce right-angle crashes" },
            { letter: "C", text: "the need for drivers to yield to traffic already in the circle" },
            { letter: "D", text: "the low-speed sideswipes that occur when vehicles merge" }
          ],
          correct: "B"
        },
        {
          id: "question",
          sol: "11.RI.2.A",
          stem: "Sentence 12 functions in the passage as —",
          choices: [
            { letter: "A", text: "a summary of the evidence presented in the first three paragraphs" },
            { letter: "B", text: "an admission that the author cannot explain drivers' attitudes" },
            { letter: "C", text: "a challenge to the accuracy of the studies cited in sentence 9" },
            { letter: "D", text: "a transition from the safety evidence to an explanation of the objection" }
          ],
          correct: "D"
        },
        {
          id: "surveys",
          sol: "11.RI.2.C",
          stem: "The evidence in sentence 16 answers the question in sentence 12 effectively mainly because it —",
          choices: [
            { letter: "A", text: "shows the same people changing their opinion once they have experience" },
            { letter: "B", text: "proves that most residents never wanted a roundabout in the first place" },
            { letter: "C", text: "relies on the opinions of engineers rather than ordinary drivers" },
            { letter: "D", text: "explains why roundabouts are more expensive in downtown areas" }
          ],
          correct: "A"
        },
        {
          id: "glancing",
          sol: "11.RV.1.C",
          stem: "In sentence 7, the word glancing most nearly means —",
          choices: [
            { letter: "A", text: "noticed only briefly" },
            { letter: "B", text: "happening without warning" },
            { letter: "C", text: "meeting directly head-on" },
            { letter: "D", text: "striking at a slight angle" }
          ],
          correct: "D"
        },
        {
          id: "limits",
          sol: "11.RI.1.C",
          stem: "The author includes sentences 17 through 21 mainly to —",
          choices: [
            { letter: "A", text: "argue that roundabouts should not be built in cities" },
            { letter: "B", text: "acknowledge drawbacks so that the overall argument remains credible" },
            { letter: "C", text: "show that engineers disagree about the safety of roundabouts" },
            { letter: "D", text: "explain why pedestrians prefer roundabouts to signals" }
          ],
          correct: "B"
        },
        {
          id: "distracted",
          sol: "11.RI.2.B",
          stem: "In sentence 24, describing the road as the only participant that never gets distracted emphasizes that —",
          choices: [
            { letter: "A", text: "physical design enforces safety more reliably than driver attention does" },
            { letter: "B", text: "drivers at roundabouts are more distracted than drivers at signals" },
            { letter: "C", text: "roads require less maintenance than traffic signals" },
            { letter: "D", text: "the author blames drivers for most crashes at intersections" }
          ],
          correct: "A"
        },
        {
          id: "gap",
          sol: "11.RI.1.B",
          stem: "Which sentence most directly explains the gap identified in sentence 2?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── LONG · ARGUMENT ───────────────────────── */
    {
      id: "g11-l-labnotebook",
      family: "G11",
      title: "Keep the Paper Notebook",
      kind: "Argument · 11.RI",
      blurb: "A chemistry teacher makes the unfashionable case that a lab record should never have an undo button.",
      level: 3,
      passage:
        "<p>" + N(1) + "This fall our science department will decide whether to replace the paper lab notebook with a tablet application, and I want to make the unfashionable case for paper before the decision is made for us by a vendor's demonstration. " +
        N(2) + "I have taught chemistry for nineteen years. " +
        N(3) + "I am not afraid of screens. " +
        N(4) + "I am afraid of what the screen quietly removes.</p>" +
        "<p>" + N(5) + "Begin with what a lab notebook is for. " +
        N(6) + "It is not a place to record results; it is a place to record what you did, in order, including the parts that went wrong. " +
        N(7) + "The spilled reagent, the crossed-out mass, the arrow that says \"started over here\" are not clutter. " +
        N(8) + "They are the experiment. " +
        N(9) + "A paper page preserves them because it cannot be tidied; ink stays where it landed. " +
        N(10) + "The application my colleagues admire has an undo button, and undo is exactly the capability a lab record should not have.</p>" +
        "<p>" + N(11) + "Consider next what the hand does that the finger on glass does not. " +
        N(12) + "Sketching an apparatus forces a student to notice how the pieces connect; tapping a stock diagram does not. " +
        N(13) + "Writing a number by hand takes long enough that the student has time to ask whether it is reasonable, and students who record by hand catch their own impossible values, a negative volume, a mass that doubled, at nearly twice the rate of those who type. " +
        N(14) + "I did not read this in a study. " +
        N(15) + "I counted it, over three semesters, in my own classroom, and I invite anyone to repeat the count.</p>" +
        "<p>" + N(16) + "The strongest argument for the tablet is that it is what students will use in a university or an industrial lab. " +
        N(17) + "This is true, and it is beside the point. " +
        N(18) + "A university laboratory assumes that its students already know how to observe. " +
        N(19) + "Our job is to build that habit, and habits are built by friction, not by convenience. " +
        N(20) + "Nobody argues that a beginning musician should skip scales because professionals do not play them in concert.</p>" +
        "<p>" + N(21) + "There is a cost argument, and I concede it partly. " +
        N(22) + "Tablets, once purchased, do not need replacing every semester. " +
        N(23) + "But a composition book costs less than a dollar, survives a spill of dilute acid, needs no charger, and has never once crashed in the middle of a titration.</p>" +
        "<p>" + N(24) + "I am not proposing that we ban technology from the laboratory. " +
        N(25) + "Students should photograph their setups, graph their data on a computer, and submit reports electronically. " +
        N(26) + "I am proposing that the record of what happened, the messy, dated, unerasable account, stay on paper, where it cannot be made to look better than it was. " +
        N(27) + "A scientist's first loyalty is to what actually occurred. " +
        N(28) + "We should give our students a tool that makes that loyalty easy to keep." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.A",
          stem: "The author's central claim is that —",
          choices: [
            { letter: "A", text: "tablets are too expensive and fragile for a chemistry classroom" },
            { letter: "B", text: "paper notebooks preserve an honest record of an experiment better than tablets do" },
            { letter: "C", text: "students should be prepared for the tools they will use in university labs" },
            { letter: "D", text: "technology of every kind should be kept out of the laboratory" }
          ],
          correct: "B"
        },
        {
          id: "credibility",
          sol: "11.RI.2.B",
          stem: "Sentences 2 through 4 strengthen the argument mainly by —",
          choices: [
            { letter: "A", text: "presenting statistics on how long teachers have used paper notebooks" },
            { letter: "B", text: "describing the vendor's demonstration in unflattering detail" },
            { letter: "C", text: "establishing the author's experience and heading off the charge of fearing technology" },
            { letter: "D", text: "explaining what a screen removes from the laboratory experience" }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "11.RI.2.C",
          stem: "Which statement best evaluates the evidence in sentences 13 through 15?",
          choices: [
            { letter: "A", text: "It is limited to one classroom, but the author admits this openly and invites others to test it." },
            { letter: "B", text: "It is drawn from a published study and therefore cannot be questioned." },
            { letter: "C", text: "It is irrelevant because it concerns errors rather than the notebook itself." },
            { letter: "D", text: "It is weakened because the author refuses to say how the count was done." }
          ],
          correct: "A"
        },
        {
          id: "counter",
          sol: "11.RI.2.A",
          stem: "How does the author respond to the counterargument stated in sentence 16?",
          choices: [
            { letter: "A", text: "By denying that university laboratories actually use tablets" },
            { letter: "B", text: "By arguing that most students will never work in a laboratory" },
            { letter: "C", text: "By pointing out that tablets are also common in industry" },
            { letter: "D", text: "By conceding that it is true and then arguing that it mistakes the purpose of a school lab" }
          ],
          correct: "D"
        },
        {
          id: "scales",
          sol: "11.RI.2.B",
          stem: "The analogy in sentence 20 compares recording by hand to —",
          choices: [
            { letter: "A", text: "a foundational exercise that professionals no longer perform in public" },
            { letter: "B", text: "a performance that only trained professionals can give" },
            { letter: "C", text: "an outdated practice that musicians have rightly abandoned" },
            { letter: "D", text: "a skill that can be learned equally well on any instrument" }
          ],
          correct: "A"
        },
        {
          id: "friction",
          sol: "11.RV.1.C",
          stem: "In sentence 19, the word friction most nearly means —",
          choices: [
            { letter: "A", text: "disagreement among teachers" },
            { letter: "B", text: "heat produced by rubbing" },
            { letter: "C", text: "effort that slows a task down" },
            { letter: "D", text: "resistance to new technology" }
          ],
          correct: "C"
        },
        {
          id: "moderate",
          sol: "11.RI.1.C",
          stem: "The author's purpose in sentences 24 and 25 is to —",
          choices: [
            { letter: "A", text: "reverse the position taken earlier in the passage" },
            { letter: "B", text: "list the technology the department has already purchased" },
            { letter: "C", text: "show that photographs are more accurate than sketches" },
            { letter: "D", text: "narrow the proposal so that it appears moderate and reasonable" }
          ],
          correct: "D"
        },
        {
          id: "undo",
          sol: "11.RI.1.B",
          stem: "The phrase cannot be made to look better than it was in sentence 26 restates an idea first introduced in —",
          choices: [
            { letter: "A", text: "sentence 3" },
            { letter: "B", text: "sentence 10" },
            { letter: "C", text: "sentence 13" },
            { letter: "D", text: "sentence 22" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── LONG · PAIRED TEXTS ───────────────────────── */
    {
      id: "g11-l-paired-tomatoes",
      family: "G11",
      title: "The Tomato Year",
      kind: "Paired texts · 11.DSR",
      blurb: "A club's garden reflection and a county extension bulletin explain the same black spot from two directions.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Environmental Club Reflection, \"What the Tomatoes Taught Us\"</strong></p>" +
        "<p>" + N(1) + "Our environmental club planted forty tomato seedlings in the raised beds behind the gym in May, and by the last week of school we were already planning the salsa. " +
        N(2) + "Then summer happened. " +
        N(3) + "We made a watering schedule: two people per day, a gallon per plant, checked off on a clipboard hung inside the shed. " +
        N(4) + "The clipboard tells the story. " +
        N(5) + "June is full of initials. " +
        N(6) + "July has gaps of three and four days, then a frantic week of double-watering when somebody noticed the leaves curling. " +
        N(7) + "August is nearly blank. " +
        N(8) + "When we came back in September, the plants were tall and green and heavy with fruit, and almost every tomato had a sunken, leathery black patch on its bottom. " +
        N(9) + "We assumed disease. " +
        N(10) + "We pulled the worst plants, argued about whether the soil was poisoned, and drafted an email asking the district to test it. " +
        N(11) + "Ms. Reyes, the club advisor, read the email and then asked to see the clipboard. " +
        N(12) + "She did not say anything for a while. " +
        N(13) + "Then she said that the tomatoes were not sick, and that the soil was fine, and that we had done it ourselves, and that this was, in a way, good news, because it meant we could fix it. " +
        N(14) + "I am not sure the club has forgiven the clipboard. " +
        N(15) + "But next year the schedule has one rule at the top, in capital letters: SAME AMOUNT, EVERY DAY.</p>" +
        "<p><strong>Text 2 — County Extension Bulletin, \"Blossom-End Rot Is Not a Disease\"</strong></p>" +
        "<p>" + N(16) + "Every August, extension offices receive photographs of tomatoes with a dark, sunken, leathery spot on the blossom end, the end opposite the stem, along with the question: what is infecting my plants? " +
        N(17) + "The answer is nothing. " +
        N(18) + "Blossom-end rot is a physiological disorder, not an infection, and it cannot spread from plant to plant. " +
        N(19) + "It occurs when the developing fruit does not receive enough calcium. " +
        N(20) + "Most garden soils contain plenty of calcium; the problem is delivery. " +
        N(21) + "Calcium moves through a plant dissolved in water, so anything that interrupts the steady flow of water, most often irregular watering, interrupts the calcium as well. " +
        N(22) + "A plant that dries out for several days and is then flooded will send water to its leaves first and its fruit last, and the cells at the far end of the fruit collapse. " +
        N(23) + "Because the damage happens while the fruit is forming, it cannot be reversed on affected tomatoes, but later fruit on the same plant will be healthy if conditions improve. " +
        N(24) + "Prevention is a matter of consistency rather than treatment: water deeply on a regular schedule, mulch to hold moisture, and avoid heavy nitrogen fertilizer, which pushes leafy growth at the expense of fruit. " +
        N(25) + "Soil testing is rarely necessary. " +
        N(26) + "Calcium sprays sold for the purpose are of little use, since the fruit absorbs almost none through its skin. " +
        N(27) + "The most reliable remedy is a garden hose used on the same days each week." +
        "</p>",
      claims: [
        {
          id: "shared",
          sol: "11.DSR.D",
          stem: "Both texts support the idea that blossom-end rot —",
          choices: [
            { letter: "A", text: "spreads quickly from one plant to the next in a crowded bed" },
            { letter: "B", text: "can be cured by testing and treating the soil" },
            { letter: "C", text: "is most common in raised beds behind school buildings" },
            { letter: "D", text: "results from inconsistent watering rather than from infection" }
          ],
          correct: "D"
        },
        {
          id: "flood",
          sol: "11.DSR.E",
          stem: "Which sentence from Text 2 best explains why the frantic week of double-watering in sentence 6 would have made the problem worse rather than better?",
          choices: [
            { letter: "A", text: "Sentence 18" },
            { letter: "B", text: "Sentence 22" },
            { letter: "C", text: "Sentence 25" },
            { letter: "D", text: "Sentence 26" }
          ],
          correct: "B"
        },
        {
          id: "select2",
          sol: "11.DSR.D",
          stem: "Select TWO sentences from Text 2 that show the club's email in sentence 10 was based on a mistaken assumption.",
          choices: [
            { letter: "A", text: "Sentence 18" },
            { letter: "B", text: "Sentence 21" },
            { letter: "C", text: "Sentence 25" },
            { letter: "D", text: "Sentence 27" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "clipboard",
          sol: "11.RL.3.A",
          stem: "The writer of Text 1 presents sentences 5 through 7 mainly to —",
          choices: [
            { letter: "A", text: "let the reader infer the cause of the damage before the advisor names it" },
            { letter: "B", text: "show that the club members were busy with summer jobs" },
            { letter: "C", text: "prove that the watering schedule was too demanding to follow" },
            { letter: "D", text: "explain why the plants grew tall and green despite the heat" }
          ],
          correct: "A"
        },
        {
          id: "physiological",
          sol: "11.RV.1.C",
          stem: "In sentence 18, the word physiological most nearly means —",
          choices: [
            { letter: "A", text: "caused by an outside organism" },
            { letter: "B", text: "visible only under a microscope" },
            { letter: "C", text: "related to the weather" },
            { letter: "D", text: "related to the plant's own functioning" }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "11.DSR.E",
          stem: "Which statement best describes how the club reflection and the extension bulletin differ?",
          choices: [
            { letter: "A", text: "Text 1 blames the district for the damage, while Text 2 blames the gardener." },
            { letter: "B", text: "Text 1 recommends soil testing, while Text 2 argues against it." },
            { letter: "C", text: "Text 1 narrates one group's experience, while Text 2 explains the general cause." },
            { letter: "D", text: "Text 1 is written for gardeners, while Text 2 is written for students." }
          ],
          correct: "C"
        },
        {
          id: "goodnews",
          sol: "11.DSR.E",
          stem: "Ms. Reyes's claim in sentence 13 that the problem was, in a way, good news is best supported by which sentence in Text 2?",
          choices: [
            { letter: "A", text: "Sentence 19" },
            { letter: "B", text: "Sentence 23" },
            { letter: "C", text: "Sentence 26" },
            { letter: "D", text: "Sentence 27" }
          ],
          correct: "B"
        },
        {
          id: "assumed",
          sol: "11.DSR.D",
          stem: "Sentences 16 and 17 of Text 2 relate to Text 1 by —",
          choices: [
            { letter: "A", text: "contradicting the advisor's explanation in sentence 13" },
            { letter: "B", text: "suggesting that the club should have sent its photographs to the extension office" },
            { letter: "C", text: "explaining why the club planted in May rather than later" },
            { letter: "D", text: "showing that the club's assumption in sentence 9 is one that many gardeners make" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── EPIC · LITERARY ───────────────────────── */
    {
      id: "g11-e-fenceline",
      family: "G11",
      title: "Half a Tree",
      kind: "Literary · 11.RL",
      blurb: "A fence, a maple, two neighbors who have stopped waving, and a rusted iron pin under the gravel.",
      level: 3,
      passage:
        "<p>" + N(1) + "The maple had been there longer than either house, and for most of Tomas's life nobody had asked whose it was. " +
        N(2) + "It shaded his grandmother's kitchen in the afternoon and dropped its leaves, with perfect impartiality, on both driveways. " +
        N(3) + "Then Mrs. Petrakis next door hired a contractor to build a fence, and the contractor, walking the property with a tape measure, said the tree was two feet inside her line and would have to come down for the posts.</p>" +
        "<p>" + N(4) + "His grandmother said no. " +
        N(5) + "Mrs. Petrakis said the tree was hers to remove. " +
        N(6) + "Within a week they had stopped waving across the driveways, and Tomas, who was sixteen and mowed both lawns, found himself paid in silence by two women who had once exchanged tomatoes over the very spot now in dispute.</p>" +
        "<p>" + N(7) + "\"There's a pin,\" his grandmother said one evening, not looking up from her crossword. " +
        N(8) + "\"When your grandfather bought this house, the surveyor set an iron pin at every corner. " +
        N(9) + "Somewhere under the leaves.\" " +
        N(10) + "She said it the way she said most things about his grandfather, as a fact that had no need of a witness.</p>" +
        "<p>" + N(11) + "Tomas went to the garage. " +
        N(12) + "His grandfather's metal detector hung on a nail behind the ladder, its battery compartment green with corrosion. " +
        N(13) + "He cleaned the contacts with vinegar, bought a nine-volt at the gas station, and on Saturday morning began sweeping the ground along the driveways, headphones on, feeling faintly ridiculous. " +
        N(14) + "Mrs. Petrakis watched from her porch with her arms crossed. " +
        N(15) + "The contractor's stakes, orange flags on wire, marched down the yard eight feet from the maple's trunk.</p>" +
        "<p>" + N(16) + "The detector found a bottle cap, two nails, a 1974 quarter, and, after an hour, something under the hedge at the back corner that made the headphones shriek. " +
        N(17) + "He dug with a trowel and struck iron: a rusted rod the thickness of his finger, capped with a small brass disk stamped with numbers half eaten by time. " +
        N(18) + "The front corner took longer. " +
        N(19) + "He found it under four inches of gravel at the edge of the street, exactly where the deed at the courthouse said it should be, though he did not know that yet.</p>" +
        "<p>" + N(20) + "That afternoon he stretched a mason's line between the two pins, pulled it tight, and stood back. " +
        N(21) + "The string passed neither through the tree nor eight feet from it. " +
        N(22) + "It passed, almost precisely, through the center of the trunk.</p>" +
        "<p>" + N(23) + "He expected to feel triumph and felt instead something closer to dread. " +
        N(24) + "He had not proven that the tree was his grandmother's. " +
        N(25) + "He had proven that it was nobody's, or everybody's, which was worse, because it meant nothing had been settled and everything would have to be decided.</p>" +
        "<p>" + N(26) + "He showed the line to his grandmother first. " +
        N(27) + "She walked its length, touched the brass cap with her shoe, and said, \"He was careful, your grandfather.\" " +
        N(28) + "Then, after a moment: \"Show her.\"</p>" +
        "<p>" + N(29) + "Mrs. Petrakis came down off the porch slowly. " +
        N(30) + "She looked at the string, at the tree, at the contractor's flags now plainly in the wrong place, and Tomas braced for an argument. " +
        N(31) + "Instead she laughed, one short surprised breath. " +
        N(32) + "\"Half a tree,\" she said. " +
        N(33) + "\"What am I going to do with half a tree?\"</p>" +
        "<p>" + N(34) + "The fence was built that fall in two sections, one on each side of the maple, with a gap where the trunk stood and a small gate that neither family had asked for and both used. " +
        N(35) + "The contractor grumbled about the extra work. " +
        N(36) + "Tomas mowed both lawns, and was paid, again, in tomatoes. " +
        N(37) + "He kept the brass cap's numbers written on an index card in his wallet, not because he expected to need them, but because they were the first true thing anyone had said in the whole argument, and his grandfather had said it forty years early." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a theme of the story about the maple and the fence?",
          choices: [
            { letter: "A", text: "A fact established carefully can outlast and settle the quarrels that come after it." },
            { letter: "B", text: "Neighbors who share property will always find something to argue about." },
            { letter: "C", text: "Young people should stay out of disputes between adults." },
            { letter: "D", text: "Old tools are more reliable than the people who use them." }
          ],
          correct: "A"
        },
        {
          id: "impartiality",
          sol: "11.RL.2.B",
          stem: "In sentence 2, the phrase with perfect impartiality —",
          choices: [
            { letter: "A", text: "suggests that the maple is a nuisance to both households" },
            { letter: "B", text: "reveals that the grandmother has always resented raking the leaves" },
            { letter: "C", text: "humorously credits the tree with taking no side, anticipating how the dispute ends" },
            { letter: "D", text: "establishes that the tree is clearly on the grandmother's property" }
          ],
          correct: "C"
        },
        {
          id: "witness",
          sol: "11.RL.1.C",
          stem: "Sentence 10 characterizes the grandmother's attitude toward her late husband as one of —",
          choices: [
            { letter: "A", text: "lingering doubt about whether he handled the purchase correctly" },
            { letter: "B", text: "reluctance to speak about him in front of Tomas" },
            { letter: "C", text: "regret that he did not leave clearer records" },
            { letter: "D", text: "settled confidence that needs no proof" }
          ],
          correct: "D"
        },
        {
          id: "silence",
          sol: "11.RL.2.A",
          stem: "The expression paid in silence in sentence 6 conveys that —",
          choices: [
            { letter: "A", text: "the two women have stopped paying Tomas for mowing their lawns" },
            { letter: "B", text: "the dispute has cost Tomas the warmth he once received from both neighbors" },
            { letter: "C", text: "Tomas prefers to mow without either woman speaking to him" },
            { letter: "D", text: "Tomas has taken his grandmother's side and refuses to speak to Mrs. Petrakis" }
          ],
          correct: "B"
        },
        {
          id: "dread",
          sol: "11.RL.3.A",
          stem: "Sentences 23 through 25 mark a turn in the story because Tomas realizes that —",
          choices: [
            { letter: "A", text: "the pins he found are not the ones his grandfather described" },
            { letter: "B", text: "the contractor's measurement was correct after all" },
            { letter: "C", text: "the evidence settles the line but not the conflict" },
            { letter: "D", text: "his grandmother will be angry that the tree is not entirely hers" }
          ],
          correct: "C"
        },
        {
          id: "faintly",
          sol: "11.RV.1.C",
          stem: "In sentence 13, the word faintly most nearly means —",
          choices: [
            { letter: "A", text: "slightly" },
            { letter: "B", text: "weakly" },
            { letter: "C", text: "secretly" },
            { letter: "D", text: "increasingly" }
          ],
          correct: "A"
        },
        {
          id: "tomatoes",
          sol: "11.RL.1.B",
          stem: "The tomatoes in sentence 36 echo sentence 6 in order to —",
          choices: [
            { letter: "A", text: "show that Tomas is still not being paid fairly for his work" },
            { letter: "B", text: "suggest that Mrs. Petrakis has taken over the grandmother's garden" },
            { letter: "C", text: "remind the reader that the story takes place during harvest season" },
            { letter: "D", text: "signal that the relationship between the neighbors has been restored" }
          ],
          correct: "D"
        },
        {
          id: "early",
          sol: "11.RL.2.C",
          stem: "In sentence 37, saying that the grandfather had said it forty years early means that —",
          choices: [
            { letter: "A", text: "the grandfather had predicted the argument with Mrs. Petrakis" },
            { letter: "B", text: "the surveyed pins stated the truth long before anyone needed it" },
            { letter: "C", text: "the numbers on the brass cap record the year the house was bought" },
            { letter: "D", text: "the grandmother had been repeating her husband's words without understanding them" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-e-signpainter",
      family: "G11",
      title: "Somebody's Hand",
      kind: "Literary · 11.RL",
      blurb: "The vinyl printer takes eleven minutes; the hardware store's last sign takes four days and a brush with opinions.",
      level: 3,
      passage:
        "<p>" + N(1) + "The sign shop on Culver Street had a vinyl printer the size of a piano, and Anh had been hired to run it, which she did well and without much feeling, the way a person runs a dishwasher. " +
        N(2) + "You loaded the design, you chose the material, you pressed the button, and in eleven minutes a banner came out that would have taken a painter two days.</p>" +
        "<p>" + N(3) + "The painter was Mr. Delacroix, who owned the shop and who, at seventy-one, still lettered by hand for the three or four customers a year who asked. " +
        N(4) + "He worked at a tilted table in the back with a mahl stick braced against the board to steady his wrist and a row of long-haired brushes he called quills, and he did not talk while he worked. " +
        N(5) + "Anh thought of him, in her first month, as a kind of museum exhibit that the shop kept for sentimental reasons.</p>" +
        "<p>" + N(6) + "The order that changed her mind came from the hardware store on Main, which was closing after eighty years and wanted a sign for its final month. " +
        N(7) + "Not a banner. " +
        N(8) + "A sign, painted on the original board that had hung over the door since 1946, which they brought in on a truck, faded to the color of weak tea with the ghost of old letters still visible under the gray.</p>" +
        "<p>" + N(9) + "\"Print it,\" Anh said. \"I can match the font.\" " +
        N(10) + "\"It isn't a font,\" Mr. Delacroix said. \"It's a hand. Somebody's hand.\" " +
        N(11) + "He ran a finger along the ghost of the capital H. " +
        N(12) + "\"See how the crossbar climbs? He was right-handed and in a hurry. That's not in your computer.\"</p>" +
        "<p>" + N(13) + "He asked her to help, which surprised her, and she said yes, which surprised her more. " +
        N(14) + "The first day was only sanding and priming, and she was bored. " +
        N(15) + "The second day he handed her a quill loaded with black enamel and told her to pull a straight line across a scrap board. " +
        N(16) + "She could not. " +
        N(17) + "The line wobbled, thinned, pooled at the end. " +
        N(18) + "The brush, which had seemed like a tool, turned out to be a live thing with opinions about speed. " +
        N(19) + "\"Again,\" he said, and she pulled forty lines before one of them was a line.</p>" +
        "<p>" + N(20) + "By the fourth day she understood what the printer could not do. " +
        N(21) + "A printed letter is the same everywhere; every millimeter of it has the same weight. " +
        N(22) + "A painted letter thickens where the hand slows and thins where it hurries, and those changes, invisible one at a time, add up to something a viewer feels without naming, the way you can tell a voice from a recording of a voice. " +
        N(23) + "The old H had climbed because a man in 1946 had been alive and impatient, and Mr. Delacroix, matching it, climbed his crossbar too, deliberately, as a kind of greeting across seventy years.</p>" +
        "<p>" + N(24) + "She lettered the small line at the bottom herself: THANK YOU FOR 80 YEARS. " +
        N(25) + "Her Y was a little heavy. " +
        N(26) + "He looked at it for a long time and did not fix it.</p>" +
        "<p>" + N(27) + "The sign went up on a Tuesday, and Anh drove past it every day of that last month, and every day it looked different, because the light was different and because she was. " +
        N(28) + "When the store closed, the owner's daughter came and took the board down and put it in her living room, letters and all. " +
        N(29) + "Nobody, Anh reflected, had ever hung a vinyl banner in a living room.</p>" +
        "<p>" + N(30) + "She still runs the printer. " +
        N(31) + "It is a good machine, and most signs are only information. " +
        N(32) + "But she keeps a quill in a jar on the counter, and once or twice a year, when someone comes in wanting something that will be looked at rather than read, she takes it down." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which idea does the story of the hardware store's sign most clearly develop?",
          choices: [
            { letter: "A", text: "Machines will eventually replace every skilled trade." },
            { letter: "B", text: "Older workers resent the technology that makes their jobs easier." },
            { letter: "C", text: "A business that closes after eighty years deserves a proper farewell." },
            { letter: "D", text: "Handmade work carries the presence of its maker in a way machine work cannot." }
          ],
          correct: "D"
        },
        {
          id: "dishwasher",
          sol: "11.RL.2.A",
          stem: "In sentence 1, comparing running the printer to running a dishwasher mainly shows that Anh —",
          choices: [
            { letter: "A", text: "is careless about the quality of the banners she produces" },
            { letter: "B", text: "performs the job competently but without any attachment to it" },
            { letter: "C", text: "finds the printer more difficult to operate than it looks" },
            { letter: "D", text: "would rather be working in the back with Mr. Delacroix" }
          ],
          correct: "B"
        },
        {
          id: "museum",
          sol: "11.RL.1.C",
          stem: "Sentence 5 reveals that Anh at first regards Mr. Delacroix as —",
          choices: [
            { letter: "A", text: "outdated, kept on out of sentiment rather than usefulness" },
            { letter: "B", text: "a demanding boss who expects too much of new employees" },
            { letter: "C", text: "a master craftsman she hopes will teach her" },
            { letter: "D", text: "a lonely man who avoids talking to the staff" }
          ],
          correct: "A"
        },
        {
          id: "brush",
          sol: "11.RL.2.B",
          stem: "Describing the brush in sentence 18 as a live thing with opinions about speed conveys that —",
          choices: [
            { letter: "A", text: "the enamel dries too quickly to be painted carefully" },
            { letter: "B", text: "Mr. Delacroix has given Anh a brush that is worn out" },
            { letter: "C", text: "the brush resists Anh's control in ways she did not expect" },
            { letter: "D", text: "Anh is painting too slowly to make a straight line" }
          ],
          correct: "C"
        },
        {
          id: "hand",
          sol: "11.RL.1.B",
          stem: "Which sentence best explains what Mr. Delacroix means in sentence 10 when he says the lettering is a hand?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 18" },
            { letter: "C", text: "Sentence 22" },
            { letter: "D", text: "Sentence 31" }
          ],
          correct: "C"
        },
        {
          id: "deliberately",
          sol: "11.RV.1.C",
          stem: "In sentence 23, the word deliberately most nearly means —",
          choices: [
            { letter: "A", text: "on purpose" },
            { letter: "B", text: "very slowly" },
            { letter: "C", text: "with difficulty" },
            { letter: "D", text: "out of habit" }
          ],
          correct: "A"
        },
        {
          id: "notfix",
          sol: "11.RL.3.A",
          stem: "Mr. Delacroix's decision in sentence 26 not to fix the heavy Y suggests that he —",
          choices: [
            { letter: "A", text: "is too tired after four days of work to correct it" },
            { letter: "B", text: "values the trace of Anh's hand over a perfect letter, as his own principle requires" },
            { letter: "C", text: "does not notice the flaw that Anh sees so clearly" },
            { letter: "D", text: "wants the customer to see that a beginner worked on the sign" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "11.RL.3.A",
          stem: "How does the final paragraph relate to sentence 1?",
          choices: [
            { letter: "A", text: "It shows that Anh has quit running the printer to paint signs full time." },
            { letter: "B", text: "It reveals that Anh has taken over the shop from Mr. Delacroix." },
            { letter: "C", text: "It confirms that Anh still feels nothing about the work she does." },
            { letter: "D", text: "It replaces Anh's earlier indifference with judgment about which jobs deserve the hand." }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── EPIC · INFORMATIONAL ───────────────────────── */
    {
      id: "g11-e-canopy",
      family: "G11",
      title: "Counting the Canopy",
      kind: "Informational · 11.RI",
      blurb: "Why cities have started counting their trees, and how a count turns scenery into infrastructure.",
      level: 3,
      passage:
        "<p>" + N(1) + "In most cities, no one knows how many trees there are. " +
        N(2) + "This sounds like an oversight, but it is really a measurement problem: trees are numerous, spread across public and private land, and constantly changing, and until recently the only way to count them was to walk past each one. " +
        N(3) + "Over the past two decades, however, a growing number of cities have decided that the count is worth the trouble, and the reasons reveal how much a tree does that a resident never sees.</p>" +
        "<p>" + N(4) + "The first reason is heat. " +
        N(5) + "Pavement and rooftops absorb sunlight and release it as heat well into the night, producing what climatologists call the urban heat island, a difference of several degrees between a city and the countryside around it. " +
        N(6) + "A mature tree cools its surroundings in two ways: its canopy blocks sunlight from reaching the ground, and its leaves release water vapor, which draws heat from the air as it evaporates. " +
        N(7) + "Temperature surveys taken block by block show that streets with heavy canopy can run eight to ten degrees cooler on summer afternoons than treeless streets a few hundred yards away. " +
        N(8) + "Since those treeless streets are often in the neighborhoods with the fewest resources, the map of a city's trees is frequently also a map of who suffers most in a heat wave.</p>" +
        "<p>" + N(9) + "The second reason is water. " +
        N(10) + "A city is a hard surface, and rain that falls on it runs off rather than soaking in, overwhelming storm drains and carrying oil and grit into rivers. " +
        N(11) + "A single large tree can intercept thousands of gallons of rainfall a year, holding water on its leaves and bark long enough for some of it to evaporate and slowing the rest so the soil can absorb it. " +
        N(12) + "Engineers now assign a dollar value to this service, and in some cities the stormwater benefit of the tree population exceeds the cost of maintaining it.</p>" +
        "<p>" + N(13) + "Knowing these benefits in general, however, is not the same as knowing where they are. " +
        N(14) + "That requires an inventory, and inventories come in two kinds. " +
        N(15) + "The first is aerial: satellite or aircraft images, analyzed by software, that measure canopy cover, the percentage of ground shaded by leaves. " +
        N(16) + "Aerial surveys are fast and cover whole cities at once, but they see only the top of the forest. " +
        N(17) + "They cannot tell an oak from an ailanthus, a healthy tree from a dying one, or a single giant from a cluster of saplings. " +
        N(18) + "The second kind is the street survey, in which trained volunteers or staff walk every block with a tablet, recording each tree's species, trunk diameter, condition, and location. " +
        N(19) + "Street surveys are slow, sometimes taking several summers, but they produce the data a city actually manages with: which trees need pruning, which are near the end of their lives, and which streets have room for more.</p>" +
        "<p>" + N(20) + "The most useful inventories combine both. " +
        N(21) + "The aerial map shows where canopy is thin; the street data explain why, and what could be planted there. " +
        N(22) + "In one mid-sized city, a combined inventory revealed that nearly forty percent of the street trees belonged to a single species, a maple that was vulnerable to a spreading beetle infestation. " +
        N(23) + "The finding was alarming, but it was also the kind of alarm that arrives in time: the city began planting a mix of other species years before the beetle reached it.</p>" +
        "<p>" + N(24) + "An inventory, in the end, changes what a tree is. " +
        N(25) + "Uncounted, a tree is scenery, something that happens to be there. " +
        N(26) + "Counted, it becomes infrastructure, an asset with a value, a maintenance schedule, and a replacement plan, like a bridge or a water main. " +
        N(27) + "That shift in status is the real product of the count, and it is why cities that have finished one rarely let it lapse." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          stem: "Which statement best summarizes the central idea of the passage about tree inventories?",
          choices: [
            { letter: "A", text: "Aerial surveys have made it possible to count every tree in a city quickly." },
            { letter: "B", text: "Counting a city's trees reveals where their benefits are and turns them into managed assets." },
            { letter: "C", text: "Trees cool cities more effectively than any engineered solution." },
            { letter: "D", text: "Cities that rely on a single tree species risk losing their canopy to pests." }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          stem: "The author organizes sentences 4 through 12 by —",
          choices: [
            { letter: "A", text: "presenting two benefits, each with its mechanism and supporting evidence" },
            { letter: "B", text: "comparing the cost of trees to the cost of pavement and storm drains" },
            { letter: "C", text: "describing a problem and then tracing its history over two decades" },
            { letter: "D", text: "listing questions that residents commonly ask about city trees" }
          ],
          correct: "A"
        },
        {
          id: "select2",
          sol: "11.RI.1.B",
          stem: "Select TWO sentences that describe a limitation of aerial surveys.",
          choices: [
            { letter: "A", text: "Sentence 15" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "fairness",
          sol: "11.RI.2.B",
          stem: "In sentence 8, describing the tree map as a map of who suffers most in a heat wave mainly serves to —",
          choices: [
            { letter: "A", text: "explain why temperature surveys are taken block by block" },
            { letter: "B", text: "suggest that heat waves are becoming more frequent in cities" },
            { letter: "C", text: "show that wealthy neighborhoods plant more trees than they need" },
            { letter: "D", text: "connect the heat data to a question of fairness among neighborhoods" }
          ],
          correct: "D"
        },
        {
          id: "intercept",
          sol: "11.RV.1.C",
          stem: "In sentence 11, the word intercept most nearly means —",
          choices: [
            { letter: "A", text: "catch before it reaches the ground" },
            { letter: "B", text: "absorb through its roots" },
            { letter: "C", text: "measure with an instrument" },
            { letter: "D", text: "redirect toward the storm drains" }
          ],
          correct: "A"
        },
        {
          id: "beetle",
          sol: "11.RI.2.C",
          stem: "The author includes the example in sentences 22 and 23 mainly to —",
          choices: [
            { letter: "A", text: "warn that maples should no longer be planted along city streets" },
            { letter: "B", text: "prove that street surveys are more accurate than aerial surveys" },
            { letter: "C", text: "criticize the city for planting so many trees of one species" },
            { letter: "D", text: "demonstrate that an inventory's value lies in allowing action before a problem arrives" }
          ],
          correct: "D"
        },
        {
          id: "oversight",
          sol: "11.RI.1.C",
          stem: "In sentence 2, the author's use of the phrase measurement problem is best understood as —",
          choices: [
            { letter: "A", text: "an admission that the count can never be completed accurately" },
            { letter: "B", text: "a complaint that cities have neglected their responsibilities" },
            { letter: "C", text: "a reframing of an apparent failure as a practical difficulty" },
            { letter: "D", text: "a technical term borrowed from the field of climatology" }
          ],
          correct: "C"
        },
        {
          id: "asset",
          sol: "11.RI.1.B",
          stem: "Which earlier sentence most directly anticipates the idea in sentence 26 that a tree can be an asset with a value?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── EPIC · ARGUMENT ───────────────────────── */
    {
      id: "g11-e-market",
      family: "G11",
      title: "A Market, Not a Lot",
      kind: "Argument · 11.RI",
      blurb: "A resident argues that the practical-looking parking lot is the less practical choice for the burned-out corner.",
      level: 2,
      passage:
        "<p>" + N(1) + "The lot at the corner of Fourth and Linden has been empty for six years, since the furniture store burned, and next month the town council will decide what to do with it. " +
        N(2) + "Two proposals are on the table. " +
        N(3) + "One would pave the lot for forty-two parking spaces. " +
        N(4) + "The other would turn it into a covered open-air market, with stalls for farmers and small vendors on Saturdays and a plain public square the rest of the week. " +
        N(5) + "I am writing to urge the council to choose the market, and to explain why the parking lot, which looks like the practical choice, is actually the less practical of the two.</p>" +
        "<p>" + N(6) + "Start with the problem the parking lot claims to solve. " +
        N(7) + "The downtown merchants say customers cannot find a place to park. " +
        N(8) + "Yet the town's own survey, conducted last spring, found that the municipal garage two blocks away averages sixty percent empty on weekdays and forty percent empty on Saturdays. " +
        N(9) + "The shortage is not of spaces but of spaces people can see from their car window. " +
        N(10) + "Forty-two more spaces at Fourth and Linden would fill on Saturday mornings and sit empty the rest of the week, the way the garage does now, while costing the town roughly $380,000 to grade, pave, light, and drain. " +
        N(11) + "That is about $9,000 per space, for a problem that better signs and a lower garage rate would largely solve.</p>" +
        "<p>" + N(12) + "Now consider what the market would do. " +
        N(13) + "The county has eleven farms within twenty miles that currently drive past our town to sell in the city. " +
        N(14) + "Three of them have already said, in writing, that they would rent a stall here if one existed. " +
        N(15) + "A Saturday market draws people downtown for two or three hours rather than the fifteen minutes a parking space is designed for, and people who stay for hours eat lunch, browse the bookstore, and get their watch battery replaced. " +
        N(16) + "Towns that have opened markets on similar sites report increases in Saturday sales at neighboring businesses in the range of ten to twenty percent. " +
        N(17) + "A parking lot serves the merchants by delivering customers to their doors. " +
        N(18) + "A market serves them by giving customers a reason to come at all.</p>" +
        "<p>" + N(19) + "Some will object that a market operates one day a week and the lot would sit idle the other six. " +
        N(20) + "That objection assumes an empty square is the same as an empty lot, and it is not. " +
        N(21) + "A square with benches, shade, and a fountain is where people eat lunch on a Wednesday, where the library holds its summer reading nights, where the high school jazz band plays in October. " +
        N(22) + "An asphalt lot on a Wednesday is an asphalt lot. " +
        N(23) + "The idle-six-days argument, applied honestly, counts against the parking proposal more than the market.</p>" +
        "<p>" + N(24) + "There is also the matter of what the corner says about us. " +
        N(25) + "Fourth and Linden is the first thing a visitor sees coming off the highway exit. " +
        N(26) + "For six years it has said that something burned here and nobody decided what to do about it. " +
        N(27) + "A parking lot would say that we decided, and that what we decided was to store cars. " +
        N(28) + "A market would say something else: that this is a town where people gather, that the farms around us are part of us, that we expect visitors and have made a place for them.</p>" +
        "<p>" + N(29) + "I do not claim the market is free of risk. " +
        N(30) + "Vendors must be recruited, the structure must be maintained, and a wet spring could hurt the first season. " +
        N(31) + "But the cost is lower, about $240,000 for the shelter and paving, and the potential return is larger, and the failure mode of a market is a public square, while the failure mode of a parking lot is a parking lot. " +
        N(32) + "I urge the council to choose the option that can become something." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the author's central claim about the corner of Fourth and Linden?",
          choices: [
            { letter: "A", text: "The town should lower the rate at its municipal garage instead of building anything." },
            { letter: "B", text: "Downtown merchants have exaggerated the shortage of parking." },
            { letter: "C", text: "The market is the more practical choice because it addresses what the downtown actually needs." },
            { letter: "D", text: "A public square would attract more visitors than a farmers' market." }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          stem: "How does the author organize the argument?",
          choices: [
            { letter: "A", text: "By challenging the parking plan's premise, presenting the market's benefits, answering an objection, and appealing to identity" },
            { letter: "B", text: "By describing the history of the lot since the fire, then listing every proposal the council has considered and rejected" },
            { letter: "C", text: "By comparing the construction costs of the two proposals in detail and letting the numbers make the decision" },
            { letter: "D", text: "By quoting downtown merchants, county farmers, and council members in turn and weighing their competing interests" }
          ],
          correct: "A"
        },
        {
          id: "survey",
          sol: "11.RI.2.C",
          stem: "The evidence in sentence 8 undermines the merchants' claim in sentence 7 by —",
          choices: [
            { letter: "A", text: "showing that customers prefer to shop in the city" },
            { letter: "B", text: "proving that the merchants did not participate in the survey" },
            { letter: "C", text: "suggesting that the garage is too expensive to use" },
            { letter: "D", text: "showing that existing parking is already underused" }
          ],
          correct: "D"
        },
        {
          id: "parallel",
          sol: "11.RI.2.B",
          stem: "Sentences 17 and 18 use parallel structure mainly to —",
          choices: [
            { letter: "A", text: "suggest that merchants and customers want different things" },
            { letter: "B", text: "sharpen the contrast between delivering customers and attracting them" },
            { letter: "C", text: "summarize the survey results described earlier in the passage" },
            { letter: "D", text: "show that both proposals would serve the merchants equally" }
          ],
          correct: "B"
        },
        {
          id: "objection",
          sol: "11.RI.1.C",
          stem: "In sentence 23, the author turns the objection from sentence 19 against the parking proposal by —",
          choices: [
            { letter: "A", text: "arguing that a square has uses on the days the market is closed while a lot does not" },
            { letter: "B", text: "claiming that the market could operate more than one day a week" },
            { letter: "C", text: "admitting that both proposals would leave the lot idle most of the time" },
            { letter: "D", text: "pointing out that the objection was raised by the downtown merchants" }
          ],
          correct: "A"
        },
        {
          id: "failuremode",
          sol: "11.RV.1.C",
          stem: "In sentence 31, the phrase failure mode most nearly means —",
          choices: [
            { letter: "A", text: "the reason a proposal is rejected" },
            { letter: "B", text: "the amount of money lost on a project" },
            { letter: "C", text: "the most common cause of a breakdown" },
            { letter: "D", text: "what is left if the plan does not succeed" }
          ],
          correct: "D"
        },
        {
          id: "asphalt",
          sol: "11.RI.2.B",
          stem: "The flat repetition in sentence 22 mainly emphasizes that —",
          choices: [
            { letter: "A", text: "asphalt is an unattractive material for a downtown corner" },
            { letter: "B", text: "the market would be busiest in the middle of the week" },
            { letter: "C", text: "a parking lot has no secondary use on the days it is not needed" },
            { letter: "D", text: "the author has run out of arguments against the parking lot" }
          ],
          correct: "C"
        },
        {
          id: "cost",
          sol: "11.RI.1.B",
          stem: "The cost given in sentence 31 gains its persuasive force mainly from —",
          choices: [
            { letter: "A", text: "the survey results reported in sentence 8" },
            { letter: "B", text: "the cost of the competing proposal given in sentence 10" },
            { letter: "C", text: "the sales increases reported in sentence 16" },
            { letter: "D", text: "the risks the author admits in sentence 30" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
