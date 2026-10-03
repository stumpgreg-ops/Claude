/* SOL Labyrinth — v6 content: Grade 10 literary reading (Virginia 10.RL).
 * Eight original packs: four short stories, two poems, two drama scenes.
 * No VDOE / copyrighted text. Loaded after content.js; pushes into the live
 * HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── LEVEL 1 ───────────────────────── */
    {
      id: "g10-rl-hardware",
      family: "G10",
      title: "Flashlights at Cost",
      kind: "Literary · 10.RL",
      blurb: "A power outage, a hardware store, and a sign written in marker.",
      level: 1,
      passage:
        "<p>" + N(1) + "The power went out at 4:10 on a Tuesday, and by 4:25 the line at Okafor Hardware reached past the paint aisle and out the front door. " +
        N(2) + "Tobi had run his uncle's register since June and had never seen the store this full or this quiet; nobody wanted to talk, they just wanted batteries. " +
        N(3) + "Uncle Emeka came out of the back with a marker and a strip of cardboard, wrote FLASHLIGHTS — OUR COST, and taped it to the end of the aisle. " +
        N(4) + "\"You could charge double right now,\" Tobi said, low, so the customers would not hear. " +
        N(5) + "\"I could,\" his uncle said. \"And on Wednesday, when the lights come back, every one of these people would remember exactly what I did.\" " +
        N(6) + "He said it without anger, the way he said everything, as if he were explaining how a wrench worked. " +
        N(7) + "For two hours Tobi rang up flashlights at four dollars and batteries at cost, and he watched faces across the counter loosen, one after another, when they saw the total. " +
        N(8) + "A woman in a nurse's uniform put a five on the counter and told him to keep the change; when he tried to refuse, she tapped the cardboard sign and walked out. " +
        N(9) + "At seven the lights flickered on, and the line simply dissolved, and the store was a store again. " +
        N(10) + "Tobi counted the drawer. " +
        N(11) + "They had made almost nothing. " +
        N(12) + "His uncle was already restocking the shelf, humming, and Tobi understood that the sign had cost the store about three hundred dollars and bought it something his uncle had never once tried to price." +
        "</p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The central conflict of the story is best described as a struggle between —",
          choices: [
            { letter: "A", text: "Tobi and the impatient customers in line" },
            { letter: "B", text: "Uncle Emeka and the electric company" },
            { letter: "C", text: "quick profit and long-term trust" },
            { letter: "D", text: "the nurse and the store's no-change policy" }
          ],
          correct: "C"
        },
        {
          id: "uncle",
          sol: "10.RL.1.C",
          stem: "Sentences 5–6 characterize Uncle Emeka as —",
          choices: [
            { letter: "A", text: "calm and guided by principle" },
            { letter: "B", text: "worried about losing money" },
            { letter: "C", text: "secretly angry at Tobi's suggestion" },
            { letter: "D", text: "unsure how to run a business" }
          ],
          correct: "A"
        },
        {
          id: "wrench",
          sol: "10.RL.2.A",
          stem: "The comparison in sentence 6, as if he were explaining how a wrench worked, suggests that to Uncle Emeka the decision is —",
          choices: [
            { letter: "A", text: "a difficult sacrifice he makes reluctantly" },
            { letter: "B", text: "a joke he does not expect Tobi to understand" },
            { letter: "C", text: "a clever trick for attracting new customers" },
            { letter: "D", text: "a simple, practical matter rather than a hard choice" }
          ],
          correct: "D"
        },
        {
          id: "dissolved",
          sol: "10.RL.2.C",
          stem: "In sentence 9, the word dissolved most nearly means —",
          choices: [
            { letter: "A", text: "argued loudly" },
            { letter: "B", text: "broke apart and disappeared" },
            { letter: "C", text: "moved closer to the counter" },
            { letter: "D", text: "grew longer and slower" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does the story of the outage most clearly develop?",
          choices: [
            { letter: "A", text: "People remember how they were treated when they were in need." },
            { letter: "B", text: "Businesses that lower prices always lose money in the end." },
            { letter: "C", text: "Young workers should never question their employers' choices." },
            { letter: "D", text: "Emergencies reveal that most customers are ungrateful." }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "10.RL.3.A",
          stem: "The author places the very short sentences 10 and 11 right after the line of customers leaves mainly to —",
          choices: [
            { letter: "A", text: "show that Tobi is too tired to think clearly" },
            { letter: "B", text: "speed up the pace so the story can end quickly" },
            { letter: "C", text: "let the plain financial result sink in before the final insight" },
            { letter: "D", text: "suggest that the store will soon close permanently" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-rl-weatherlog",
      family: "G10",
      title: "The Weather Log",
      kind: "Literary · 10.RL",
      blurb: "Thirty-one years of green notebooks, and a granddaughter who never meant to keep them going.",
      level: 1,
      passage:
        "<p>" + N(1) + "For thirty-one years, every morning at seven, Mara's grandfather had walked to the white box on a post at the edge of the garden, opened its slatted door, and written three numbers in a green notebook: high, low, rainfall. " +
        N(2) + "He had missed exactly four days, all of them in a hospital. " +
        N(3) + "Now the notebooks filled a shelf in the hall, and the box stood in the frost with its door shut, and nobody had opened it since the funeral in October. " +
        N(4) + "Mara had not planned to be the one. " +
        N(5) + "She was fifteen and slept until the last possible minute, and she had told her mother, honestly, that a weather station was not a thing a person could inherit. " +
        N(6) + "But on the first morning of winter break she woke at 6:50 for no reason she could name, and she found herself standing in the yard in her coat and pajama pants with the green notebook under her arm. " +
        N(7) + "The thermometer read twenty-eight. " +
        N(8) + "The rain gauge held a crust of ice. " +
        N(9) + "She wrote the numbers on the first empty line, under his last entry, and her handwriting looked wrong next to his — rounder, too careful, a stranger's. " +
        N(10) + "The next morning she woke at 6:50 again. " +
        N(11) + "By January the line between his handwriting and hers had moved fourteen pages down, and one morning she noticed that she no longer checked her numbers against what her phone said. " +
        N(12) + "The phone knew the weather everywhere. " +
        N(13) + "It did not know this yard." +
        "</p>",
      claims: [
        {
          id: "inherit",
          sol: "10.RL.1.C",
          stem: "Sentence 5 shows that, at first, Mara —",
          choices: [
            { letter: "A", text: "wants to sell the weather station" },
            { letter: "B", text: "does not see the station as hers to carry on" },
            { letter: "C", text: "plans to keep the notebooks but not the box" },
            { letter: "D", text: "is angry with her mother for asking" }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the turning point in the story's action?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The details in sentence 3 — the frost, the shut door, the untouched box — mainly create a mood of —",
          choices: [
            { letter: "A", text: "stillness and loss" },
            { letter: "B", text: "suspense and danger" },
            { letter: "C", text: "excitement and hope" },
            { letter: "D", text: "comfort and warmth" }
          ],
          correct: "A"
        },
        {
          id: "crust",
          sol: "10.RL.2.C",
          stem: "In sentence 8, the word crust most nearly means —",
          choices: [
            { letter: "A", text: "a deep pool" },
            { letter: "B", text: "a small crack" },
            { letter: "C", text: "a hard outer layer" },
            { letter: "D", text: "a loose pile" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses the story's theme about inheritance?",
          choices: [
            { letter: "A", text: "Teenagers should be required to continue family traditions." },
            { letter: "B", text: "Technology makes old habits like record-keeping unnecessary." },
            { letter: "C", text: "Grief ends once a person finds a new daily routine." },
            { letter: "D", text: "Carrying on someone's work can become a way of belonging to a place." }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "The final two sentences (12–13) mainly serve to —",
          choices: [
            { letter: "A", text: "explain why Mara has stopped trusting her phone" },
            { letter: "B", text: "contrast general data with Mara's personal knowledge of one place" },
            { letter: "C", text: "suggest that the weather app is frequently mistaken" },
            { letter: "D", text: "reveal that the family plans to sell the yard soon" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rl-drama-firedrill",
      family: "G10",
      title: "Fire Drill",
      kind: "Drama · 10.RL",
      blurb: "Two homeroom classmates, one alarm, and a fact one of them has never mentioned.",
      level: 1,
      passage:
        "<p><em>Setting: the far corner of a school athletic field, mid-morning. An alarm rings faintly from the building. RENATA, clutching a rolled poster, paces. DEV sits on the grass, unbothered.</em></p>" +
        "<p>" + N(1) + "<strong>RENATA</strong>: We're supposed to be in rows. Ms. Oyelaran said rows. " +
        N(2) + "<strong>DEV</strong> <em>(not moving)</em>: Ms. Oyelaran is on the other side of the field, counting the wrong homeroom. " +
        N(3) + "<strong>RENATA</strong>: This could be real. It doesn't say \"drill\" on the alarm. " +
        N(4) + "<strong>DEV</strong>: It's 9:04 on a Tuesday. Real fires don't check the schedule. " +
        N(5) + "<strong>RENATA</strong> <em>(stopping)</em>: You think everything is a joke. " +
        N(6) + "<strong>DEV</strong> <em>(standing, finally, and brushing off his jeans)</em>: No. I think this one is. Look at the doors — nobody's propped them open. No trucks. If it were real, the office would have called it in before the alarm, and you'd hear the engine on Fourth Street by now. You can hear that engine from the gym. " +
        N(7) + "<strong>RENATA</strong>: How do you know that? " +
        N(8) + "<strong>DEV</strong>: My dad drives it. " +
        N(9) + "<em>(A pause. RENATA looks at him as if seeing him for the first time. Across the field, a freshman drifts back toward the building. DEV whistles once, sharp, and points at the grass. The freshman stops.)</em> " +
        N(10) + "<strong>RENATA</strong>: You've never said that. Two years of homeroom. " +
        N(11) + "<strong>DEV</strong> <em>(shrugging)</em>: Nobody asked. Everybody decided who I was in ninth grade. " +
        N(12) + "<strong>RENATA</strong> <em>(rolling her poster tighter)</em>: I decided, too. " +
        N(13) + "<strong>DEV</strong>: It's fine. I decided about you, and I was wrong about half of it. " +
        N(14) + "<em>(The alarm cuts off. Across the field, MS. OYELARAN waves a clipboard.)</em> " +
        N(15) + "<strong>RENATA</strong>: Which half? " +
        N(16) + "<strong>DEV</strong> <em>(already walking)</em>: Ask me next drill." +
        "</p>",
      claims: [
        {
          id: "stagedir",
          sol: "9.RL.3.B",
          stem: "The stage direction in sentence 9, in which Dev whistles and points, mainly shows that Dev —",
          choices: [
            { letter: "A", text: "is impatient for the drill to be over" },
            { letter: "B", text: "takes the drill more seriously than his words suggest" },
            { letter: "C", text: "wants to embarrass the freshman in front of Renata" },
            { letter: "D", text: "is trying to get Ms. Oyelaran's attention" }
          ],
          correct: "B"
        },
        {
          id: "renata",
          sol: "10.RL.1.C",
          stem: "In sentences 1–5, Renata is best described as —",
          choices: [
            { letter: "A", text: "anxious and rule-following" },
            { letter: "B", text: "bored and distracted" },
            { letter: "C", text: "amused by Dev's jokes" },
            { letter: "D", text: "eager to return to class" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "10.RL.1.B",
          stem: "Which sentence best explains why Dev is certain the alarm is only a drill?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "C"
        },
        {
          id: "decided",
          sol: "10.RL.2.C",
          stem: "In sentence 11, Dev's use of the word decided suggests that his classmates —",
          choices: [
            { letter: "A", text: "voted on which students would lead the drill" },
            { letter: "B", text: "asked him many questions and then forgot the answers" },
            { letter: "C", text: "chose him for a job he did not want" },
            { letter: "D", text: "formed fixed opinions of him without really knowing him" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which idea does the fire-drill scene most clearly develop?",
          choices: [
            { letter: "A", text: "Fire drills waste valuable class time." },
            { letter: "B", text: "Firefighters' children should lead school emergencies." },
            { letter: "C", text: "Rules only matter when a teacher is watching." },
            { letter: "D", text: "People are often more than the labels others give them." }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "The scene ends with Ask me next drill (sentence 16) mainly to —",
          choices: [
            { letter: "A", text: "suggest that Dev is avoiding Renata's question forever" },
            { letter: "B", text: "show that the two will never speak to each other again" },
            { letter: "C", text: "leave the question open while hinting the two will keep talking" },
            { letter: "D", text: "reveal that Dev plans to skip the next fire drill" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LEVEL 2 ───────────────────────── */
    {
      id: "g10-rl-secondchair",
      family: "G10",
      title: "Second Chair",
      kind: "Literary · 10.RL",
      blurb: "A cellist who liked being invisible has to lead the section.",
      level: 2,
      passage:
        "<p>" + N(1) + "For two years Jonah had sat second chair in the cello section, close enough to Ines to hear her breathe before every entrance and far enough from the conductor to be, in most practical ways, invisible. " +
        N(2) + "He had told himself he preferred it. " +
        N(3) + "Second chair was where you could still make a mistake and have it belong to the section instead of to you. " +
        N(4) + "Then Ines slipped on the ice outside the band room in February and broke her wrist, and Mr. Adeyemi turned in his chair, looked at Jonah over his glasses, and said only, \"Well.\" " +
        N(5) + "The first rehearsal was a disaster of a very specific kind. " +
        N(6) + "Jonah played every note correctly, and none of it was right. " +
        N(7) + "He kept waiting for the breath that told him when to come in, and the breath did not come, because the breath was supposed to be his now. " +
        N(8) + "The violas came in late because he had given them nothing to follow. " +
        N(9) + "Afterward Ines found him in the hall, her cast already covered in signatures. " +
        N(10) + "\"You're listening for me,\" she said. \"You have to stop. They're listening for you.\" " +
        N(11) + "He wanted to say that he had never asked for this, and then he realized, with a feeling like missing a stair, that this was not entirely true. " +
        N(12) + "At the spring concert his entrance in the second movement was a half-beat early, and the whole section came with him, and it was wrong, and it was his, and Mr. Adeyemi did not even glance up." +
        "</p>",
      claims: [
        {
          id: "secondchair",
          sol: "10.RL.1.C",
          stem: "Sentences 2–3 suggest that Jonah's preference for second chair is really about —",
          choices: [
            { letter: "A", text: "loyalty to Ines and the rest of the section" },
            { letter: "B", text: "his lack of skill compared with the other cellists" },
            { letter: "C", text: "his dislike of Mr. Adeyemi's conducting style" },
            { letter: "D", text: "avoiding the responsibility that comes with being noticed" }
          ],
          correct: "D"
        },
        {
          id: "paradox",
          sol: "10.RL.2.B",
          stem: "Sentence 6, Jonah played every note correctly, and none of it was right, is best understood to mean that —",
          choices: [
            { letter: "A", text: "the sheet music Jonah was given contained errors" },
            { letter: "B", text: "Jonah played too loudly for the rest of the orchestra" },
            { letter: "C", text: "accuracy alone could not replace the leadership the section needed" },
            { letter: "D", text: "Mr. Adeyemi had chosen the wrong piece for the concert" }
          ],
          correct: "C"
        },
        {
          id: "ines",
          sol: "10.RL.1.B",
          stem: "Ines's words in sentence 10 function in the plot as —",
          choices: [
            { letter: "A", text: "a warning that Jonah will lose his chair when she returns" },
            { letter: "B", text: "the turning point that names the problem Jonah must solve" },
            { letter: "C", text: "proof that Ines resents Jonah for replacing her" },
            { letter: "D", text: "a request that Jonah help her recover her skills" }
          ],
          correct: "B"
        },
        {
          id: "stair",
          sol: "10.RL.2.A",
          stem: "The simile in sentence 11, a feeling like missing a stair, conveys Jonah's —",
          choices: [
            { letter: "A", text: "sudden, unsettling recognition of a truth about himself" },
            { letter: "B", text: "fear that he will trip on the stage steps at the concert" },
            { letter: "C", text: "relief that Ines has finally forgiven him for the rehearsal" },
            { letter: "D", text: "physical exhaustion after weeks of extra practice" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "In sentence 12, the repetition of and it was wrong, and it was his mainly emphasizes that —",
          choices: [
            { letter: "A", text: "Jonah's mistake ruined the spring concert" },
            { letter: "B", text: "the section refused to follow Jonah's lead" },
            { letter: "C", text: "owning a choice now matters more to Jonah than being flawless" },
            { letter: "D", text: "Mr. Adeyemi was disappointed in Jonah's timing" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does Jonah's promotion to first chair most fully develop?",
          choices: [
            { letter: "A", text: "Leading means accepting that your mistakes are yours alone." },
            { letter: "B", text: "Talent is more important than confidence in music." },
            { letter: "C", text: "Injuries often end promising careers too early." },
            { letter: "D", text: "Teachers should praise students who play every note correctly." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-poem-greenhouse",
      family: "G10",
      title: "Greenhouse, January",
      kind: "Poetry · 10.RL",
      blurb: "A poem about seedlings that grow toward the wrong light, and thrive anyway.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Outside, the field has given up pretending;<br>" +
        L(2) + "the goalposts stand in snow like patient letters<br>" +
        L(3) + "spelling a word nobody will read till April.<br>" +
        L(4) + "But here, behind the fogged and dripping glass,<br>" +
        L(5) + "the tomato seedlings lean toward a lamp<br>" +
        L(6) + "they have mistaken for the sun, and thrive.<br>" +
        L(7) + "Mr. Ferreira waters on his lunch break,<br>" +
        L(8) + "sleeves rolled, humming something with no ending.<br>" +
        L(9) + "He does not tell them what they think is false.<br>" +
        L(10) + "He says a plant does not need to be right;<br>" +
        L(11) + "it only needs to grow toward the light it has.<br>" +
        L(12) + "I have a test at one. I know what I don't know.<br>" +
        L(13) + "I press my palm against the warm glass anyway<br>" +
        L(14) + "and let the small green liars teach me something." +
        "</p>",
      claims: [
        {
          id: "goalposts",
          sol: "10.RL.2.A",
          stem: "In lines 2–3, comparing the goalposts to letters spelling a word nobody will read till April mainly suggests that —",
          choices: [
            { letter: "A", text: "the field's purpose is suspended until spring" },
            { letter: "B", text: "the school has canceled its sports programs" },
            { letter: "C", text: "the speaker cannot read the sign on the field" },
            { letter: "D", text: "snow has damaged the goalposts beyond repair" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RL.2.B",
          stem: "The speaker's tone in the final three lines is best described as —",
          choices: [
            { letter: "A", text: "bitter and defeated" },
            { letter: "B", text: "mocking and superior" },
            { letter: "C", text: "anxious and hurried" },
            { letter: "D", text: "wry but hopeful" }
          ],
          correct: "D"
        },
        {
          id: "liars",
          sol: "10.RL.2.C",
          stem: "The speaker calls the seedlings small green liars (line 14) because they —",
          choices: [
            { letter: "A", text: "have been planted in the wrong season" },
            { letter: "B", text: "grow toward a lamp as if it were the sun" },
            { letter: "C", text: "hide the fact that they are dying" },
            { letter: "D", text: "were smuggled into the greenhouse by students" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses the central idea of the greenhouse poem?",
          choices: [
            { letter: "A", text: "Winter is the hardest season for a school garden." },
            { letter: "B", text: "Teachers should correct students' mistaken beliefs quickly." },
            { letter: "C", text: "Growth depends on using the light you have, not on being certain." },
            { letter: "D", text: "Tests matter less than time spent outdoors." }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "10.RL.3.A",
          stem: "How does the structure of the greenhouse poem develop its meaning?",
          choices: [
            { letter: "A", text: "It moves from a general statement to a list of examples." },
            { letter: "B", text: "It presents a question in the first stanza and answers it in the last." },
            { letter: "C", text: "It repeats the same image with slight changes in each line." },
            { letter: "D", text: "It contrasts the frozen field with the greenhouse, then turns to the speaker." }
          ],
          correct: "D"
        },
        {
          id: "ferreira",
          sol: "10.RL.1.C",
          stem: "Lines 7–11 characterize Mr. Ferreira as —",
          choices: [
            { letter: "A", text: "strict about following gardening rules" },
            { letter: "B", text: "patient and unbothered by imperfection" },
            { letter: "C", text: "too distracted to notice the seedlings" },
            { letter: "D", text: "discouraged by the long winter" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rl-drama-closing",
      family: "G10",
      title: "Closing Shift",
      kind: "Drama · 10.RL",
      blurb: "Two coworkers, one mop, and a piece of news that keeps getting cleaned around.",
      level: 2,
      passage:
        "<p><em>Setting: a small frozen-yogurt shop, ten minutes after closing. Chairs are upside down on the tables. KWAME counts the register. SAMIRA mops the same square of floor for the third time.</em></p>" +
        "<p>" + N(1) + "<strong>KWAME</strong>: Ortiz approved the schedule. Both of us, Tuesday through Saturday, all of July. I had to promise him we'd stop giving free toppings to the lifeguards. " +
        N(2) + "<strong>SAMIRA</strong> <em>(not looking up)</em>: You promised for me? " +
        N(3) + "<strong>KWAME</strong>: I promised for the shop. The shop has a reputation. " +
        N(4) + "<em>(SAMIRA wrings out the mop, dips it, wrings it again. KWAME watches the floor.)</em> " +
        N(5) + "<strong>KWAME</strong>: That square is clean, Sam. That square has been clean since eight-thirty. " +
        N(6) + "<strong>SAMIRA</strong>: There's a spot. " +
        N(7) + "<strong>KWAME</strong>: There's no spot. There is a person mopping around a conversation. " +
        N(8) + "<em>(A beat. SAMIRA leans the mop against the counter.)</em> " +
        N(9) + "<strong>SAMIRA</strong>: My mom got the transfer. The one in Raleigh. We leave the twenty-eighth. " +
        N(10) + "<strong>KWAME</strong> <em>(carefully setting down a stack of ones)</em>: Of June. " +
        N(11) + "<strong>SAMIRA</strong>: Of June. " +
        N(12) + "<strong>KWAME</strong>: So the schedule I just spent two weeks — " +
        N(13) + "<strong>SAMIRA</strong>: I know. " +
        N(14) + "<strong>KWAME</strong>: — and the lifeguard thing, which I did for you, because you said — " +
        N(15) + "<strong>SAMIRA</strong>: I know. I was going to tell you. I kept waiting for a night when it wouldn't wreck something. " +
        N(16) + "<em>(KWAME finishes counting, snaps the rubber band around the bills, and shuts the drawer. The sound is very loud in the empty shop.)</em> " +
        N(17) + "<strong>KWAME</strong>: There's no night like that. You'd have been mopping till August. " +
        N(18) + "<strong>SAMIRA</strong>: Probably. " +
        N(19) + "<strong>KWAME</strong> <em>(picking up the second mop)</em>: Then let's at least do the floor right. Ortiz can find somebody who likes lifeguards. " +
        N(20) + "<em>(They mop in silence, in opposite directions, until the two clean squares meet in the middle.)</em>" +
        "</p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The tension in the closing-shift scene comes mainly from —",
          choices: [
            { letter: "A", text: "Kwame's refusal to let Samira leave early" },
            { letter: "B", text: "a disagreement about who should mop the floor" },
            { letter: "C", text: "news Samira has been avoiding sharing with Kwame" },
            { letter: "D", text: "Ortiz's new rule about free toppings" }
          ],
          correct: "C"
        },
        {
          id: "metaphor",
          sol: "10.RL.2.A",
          stem: "In sentence 7, a person mopping around a conversation, Kwame uses the image of mopping to suggest that Samira is —",
          choices: [
            { letter: "A", text: "working harder than he is" },
            { letter: "B", text: "using the chore to avoid saying something" },
            { letter: "C", text: "cleaning up a mess he made earlier" },
            { letter: "D", text: "too tired to talk after a long shift" }
          ],
          correct: "B"
        },
        {
          id: "kwame",
          sol: "10.RL.1.C",
          stem: "Sentence 19 reveals that Kwame —",
          choices: [
            { letter: "A", text: "can move past his hurt feelings to support his friend" },
            { letter: "B", text: "plans to quit the shop when Samira leaves" },
            { letter: "C", text: "blames Ortiz for the change in the schedule" },
            { letter: "D", text: "wants Samira to finish the shift by herself" }
          ],
          correct: "A"
        },
        {
          id: "wreck",
          sol: "10.RL.2.C",
          stem: "In sentence 15, the word wreck most nearly means —",
          choices: [
            { letter: "A", text: "delay" },
            { letter: "B", text: "repair" },
            { letter: "C", text: "crash into" },
            { letter: "D", text: "ruin" }
          ],
          correct: "D"
        },
        {
          id: "stagedir",
          sol: "9.RL.3.B",
          stem: "The stage direction in sentence 16 about the sound of the drawer mainly serves to —",
          choices: [
            { letter: "A", text: "show that the shop is about to be robbed" },
            { letter: "B", text: "tell the audience the register is broken" },
            { letter: "C", text: "remind the audience that Ortiz is nearby" },
            { letter: "D", text: "emphasize the tense silence between the two characters" }
          ],
          correct: "D"
        },
        {
          id: "final",
          sol: "10.RL.3.A",
          stem: "The final stage direction (sentence 20), in which the two clean squares meet in the middle, most likely symbolizes —",
          choices: [
            { letter: "A", text: "the friends' reconciliation after the argument" },
            { letter: "B", text: "the shop's spotless reputation with Ortiz" },
            { letter: "C", text: "Samira's decision to stay in town after all" },
            { letter: "D", text: "Kwame's plan to take over the whole schedule" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── LEVEL 3 ───────────────────────── */
    {
      id: "g10-rl-lostfound",
      family: "G10",
      title: "Lost and Found",
      kind: "Literary · 10.RL",
      blurb: "The student who runs the lost-and-found builds a theory about everyone but herself.",
      level: 3,
      passage:
        "<p>" + N(1) + "The lost-and-found at Whitcomb High is a gray plastic bin behind the attendance desk, and for third period it is mine. " +
        N(2) + "Ms. Delgado calls me the curator, which is a joke, but I have started to take it seriously. " +
        N(3) + "I log everything: date found, location, description, claimed or unclaimed. " +
        N(4) + "After a semester the log reads like a census of the building's private life. " +
        N(5) + "Freshmen lose water bottles, which is to say they lose the things they were told to carry. " +
        N(6) + "Seniors lose keys. " +
        N(7) + "Nobody, in my records, has ever lost a phone for longer than a class period, and nobody has ever come back for a single glove, as if claiming one were an admission that the other is also gone. " +
        N(8) + "By March I had a theory that you could tell what a person was afraid of by what they let go of, and I said so to Ms. Delgado with the confidence of somebody who has never been in the bin. " +
        N(9) + "She did not argue. " +
        N(10) + "She reached under the desk and set a green scarf on the counter — the one my grandmother knit the winter before she moved into the care home, the one I had been telling myself I'd left at my cousin's. " +
        N(11) + "\"Found in the library,\" she said. \"October.\" " +
        N(12) + "I logged it: date, location, description. " +
        N(13) + "Under claimed I wrote my own name, and then I sat for a while with the fact that I had built a whole science out of other people's carelessness and had not once thought to check the bin for my own." +
        "</p>",
      claims: [
        {
          id: "curator",
          sol: "10.RL.2.C",
          stem: "In sentence 2, the word curator most nearly refers to someone who —",
          choices: [
            { letter: "A", text: "cleans and repairs damaged items" },
            { letter: "B", text: "organizes and cares for a collection" },
            { letter: "C", text: "sells items that no one has claimed" },
            { letter: "D", text: "records which students are absent" }
          ],
          correct: "B"
        },
        {
          id: "census",
          sol: "10.RL.2.A",
          stem: "In sentence 4, comparing the log to a census of the building's private life suggests that the log —",
          choices: [
            { letter: "A", text: "lists every student enrolled at the school" },
            { letter: "B", text: "is required by the school district each semester" },
            { letter: "C", text: "records mostly items lost by adults in the building" },
            { letter: "D", text: "reveals patterns about people that they do not intend to show" }
          ],
          correct: "D"
        },
        {
          id: "confidence",
          sol: "10.RL.1.C",
          stem: "The phrase in sentence 8, with the confidence of somebody who has never been in the bin, characterizes the narrator as —",
          choices: [
            { letter: "A", text: "certain of her theory because she never imagines herself as one of its subjects" },
            { letter: "B", text: "nervous about sharing her ideas with an adult who might disagree" },
            { letter: "C", text: "proud that she has never had to search the bin for anything" },
            { letter: "D", text: "careful to test her theory on many students before stating it" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.B",
          stem: "The ending of the lost-and-found story is ironic mainly because the narrator —",
          choices: [
            { letter: "A", text: "finds the scarf in the library rather than at her cousin's house" },
            { letter: "B", text: "discovers that Ms. Delgado has been keeping records of her own" },
            { letter: "C", text: "has studied everyone's losses while overlooking her own" },
            { letter: "D", text: "must write her own name in the log under unclaimed" }
          ],
          correct: "C"
        },
        {
          id: "pov",
          sol: "10.RL.3.A",
          stem: "The first-person point of view is important to the lost-and-found story mainly because it —",
          choices: [
            { letter: "A", text: "lets the reader learn the history of the school's lost-and-found" },
            { letter: "B", text: "allows the reader to hear the narrator's theory before it is tested against her" },
            { letter: "C", text: "shows how Ms. Delgado feels about the narrator's record-keeping" },
            { letter: "D", text: "explains why the grandmother moved into the care home" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is most fully developed by the narrator's discovery of the scarf?",
          choices: [
            { letter: "A", text: "Adults usually know more about students than students realize." },
            { letter: "B", text: "Keeping careful records prevents people from losing things." },
            { letter: "C", text: "Family objects should never be brought to school." },
            { letter: "D", text: "It is easier to judge others' carelessness than to recognize our own." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-rl-poem-translation",
      family: "G10",
      title: "At the Pharmacy",
      kind: "Poetry · 10.RL",
      blurb: "A poem about carrying words across a counter for a parent.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The pharmacist speaks to me and looks at my mother,<br>" +
        L(2) + "as if her words were a package I was signing for.<br>" +
        L(3) + "Twice a day with food. Not with grapefruit. Not with the other one.<br>" +
        L(4) + "I carry it across the counter in a language<br>" +
        L(5) + "that fits her like a borrowed coat, a little long in the sleeves,<br>" +
        L(6) + "and she nods, and asks me the question I already asked,<br>" +
        L(7) + "and I ask it again, and the answer comes back the same,<br>" +
        L(8) + "smaller, the way a room shrinks when you carry a mirror out of it.<br>" +
        L(9) + "She has words for weather I have never learned,<br>" +
        L(10) + "for the exact smell of rain on a tin roof before it falls.<br>" +
        L(11) + "I have words for co-pay and refill and generic.<br>" +
        L(12) + "Between us we own a whole language, and neither of us can speak it.<br>" +
        L(13) + "On the drive home she tries my language: \"You did good,\"<br>" +
        L(14) + "and I try hers, the one word I own for thank you,<br>" +
        L(15) + "and for once nothing gets lost — just handed back and forth, still warm." +
        "</p>",
      claims: [
        {
          id: "package",
          sol: "10.RL.2.A",
          stem: "In line 2, comparing the mother's words to a package I was signing for suggests that the pharmacist —",
          choices: [
            { letter: "A", text: "is in a hurry to finish with the family" },
            { letter: "B", text: "suspects the speaker of hiding information" },
            { letter: "C", text: "treats the speaker, not the mother, as the responsible person" },
            { letter: "D", text: "does not believe the mother needs the medicine" }
          ],
          correct: "C"
        },
        {
          id: "mirror",
          sol: "10.RL.2.B",
          stem: "The image in line 8 — a room shrinks when you carry a mirror out of it — most strongly conveys that translation —",
          choices: [
            { letter: "A", text: "removes some fullness from what is said" },
            { letter: "B", text: "makes the pharmacy seem crowded" },
            { letter: "C", text: "reflects the speaker's own worries" },
            { letter: "D", text: "is easier the second time it is done" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "10.RL.3.A",
          stem: "Lines 9–11 are arranged mainly to —",
          choices: [
            { letter: "A", text: "explain why the mother stopped learning the speaker's language" },
            { letter: "B", text: "prove that the speaker's words are more useful than the mother's" },
            { letter: "C", text: "describe the weather on the day of the pharmacy visit" },
            { letter: "D", text: "set the two speakers' vocabularies side by side as different kinds of knowledge" }
          ],
          correct: "D"
        },
        {
          id: "generic",
          sol: "10.RL.2.C",
          stem: "As used in line 11, the word generic most nearly refers to —",
          choices: [
            { letter: "A", text: "a common, ordinary experience" },
            { letter: "B", text: "a medicine sold without a brand name" },
            { letter: "C", text: "a word that belongs to every language" },
            { letter: "D", text: "a general description of the weather" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RL.2.B",
          stem: "The tone of line 15 is best described as —",
          choices: [
            { letter: "A", text: "quietly tender" },
            { letter: "B", text: "sharply critical" },
            { letter: "C", text: "coolly detached" },
            { letter: "D", text: "anxious and uncertain" }
          ],
          correct: "A"
        },
        {
          id: "paradox",
          sol: "10.RL.1.A",
          stem: "Line 12, Between us we own a whole language, and neither of us can speak it, best supports which theme?",
          choices: [
            { letter: "A", text: "Children should always translate for their parents." },
            { letter: "B", text: "Learning a second language is mostly a matter of memorization." },
            { letter: "C", text: "What a family knows is shared, even when it is divided between its members." },
            { letter: "D", text: "Medical instructions are impossible to translate accurately." }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
