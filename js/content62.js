/* SOL Labyrinth — v5.15 expansion: Grade 10 SHORT packs (nights 9–20), file 62.
 * Twenty-seven original packs (100–150 word prose, 8–10 line poems, 60–80 word paired texts),
 * six questions each, built around a hospital volunteer program, marine mammals, insects and
 * migrating birds. Original text only. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    {
      id: "g10-rl-c62-sunstripe",
      family: "G10",
      title: "The Gold Stripe",
      kind: "Literary · 10.RL",
      blurb: "A new hospital volunteer, a grumpy patient, and one patch of sunlight in the lobby.",
      level: 1,
      passage:
        "<p>" + N(1) + "On her first Saturday as a hospital volunteer, Marisol Quintero was given one job: wheel patients from their rooms to the front doors when they went home. " +
        N(2) + "It sounded simple until she met Mr. Haldane, who had a cast on one leg and opinions about everything. " +
        N(3) + "\"Not so fast,\" he said at the elevator. " +
        N(4) + "\"Too slow,\" he said in the lobby. " +
        N(5) + "Marisol's cheeks burned, and she gripped the handles so hard that her knuckles turned white. " +
        N(6) + "Then, near the gift shop, he asked her to stop. " +
        N(7) + "He pointed at a tall window where sunlight fell across the floor in a long gold stripe. " +
        N(8) + "\"Three weeks I've been upstairs,\" he said quietly. " +
        N(9) + "\"Let me sit in that for a minute.\" " +
        N(10) + "Marisol parked the chair in the light and waited beside him, no longer counting the seconds." +
        "</p>",
      claims: [
        {
          id: "nervous",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentence 5 shows that, early in the trip to the doors, Marisol is —",
          choices: [
            { letter: "A", text: "bored by such a simple assignment" },
            { letter: "B", text: "tense and anxious to do the job right" },
            { letter: "C", text: "angry at the hospital for her schedule" },
            { letter: "D", text: "sure that Mr. Haldane is joking" }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the turning point in Marisol's trip with Mr. Haldane?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme does the story of Marisol and Mr. Haldane best support?",
          choices: [
            { letter: "A", text: "Patience grows once we see what another person needs." },
            { letter: "B", text: "Volunteers should follow every rule without question." },
            { letter: "C", text: "Hospitals are lonely places for young workers." },
            { letter: "D", text: "Complaining is the quickest way to get attention." }
          ],
          correct: "A"
        },
        {
          id: "stripe",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The image of sunlight in a long gold stripe (sentence 7) mainly creates a mood of —",
          choices: [
            { letter: "A", text: "danger and alarm" },
            { letter: "B", text: "busy confusion" },
            { letter: "C", text: "cold loneliness" },
            { letter: "D", text: "warmth and calm" }
          ],
          correct: "D"
        },
        {
          id: "cheeks",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 5, the phrase Marisol's cheeks burned mainly suggests that she feels —",
          choices: [
            { letter: "A", text: "embarrassed by the criticism" },
            { letter: "B", text: "feverish from the warm lobby" },
            { letter: "C", text: "proud of her quick progress" },
            { letter: "D", text: "excited to reach the doors" }
          ],
          correct: "A"
        },
        {
          id: "short",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author places the short complaints in sentences 3 and 4 side by side mainly to —",
          choices: [
            { letter: "A", text: "show that the elevator is broken" },
            { letter: "B", text: "explain the rules for moving patients" },
            { letter: "C", text: "show how hard Mr. Haldane is to please" },
            { letter: "D", text: "suggest that Marisol is not listening" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-ri-c62-otterfur",
      family: "G10",
      title: "Fur, Urchins and Kelp",
      kind: "Informational · 10.RI",
      blurb: "How a sea otter stays warm without blubber, and why a whole forest depends on its appetite.",
      level: 1,
      passage:
        "<p>" + N(1) + "Sea otters spend almost their whole lives in cold coastal water, yet they have no thick layer of blubber like seals or whales. " +
        N(2) + "Instead, they rely on fur. " +
        N(3) + "A sea otter's coat is the densest of any animal, with up to a million hairs per square inch. " +
        N(4) + "Air trapped in that fur keeps the otter's skin dry and warm. " +
        N(5) + "To make heat from the inside, otters also eat a great deal, about a quarter of their body weight every day. " +
        N(6) + "Much of that food is sea urchins, spiny animals that graze on kelp. " +
        N(7) + "When otters disappear from an area, urchin numbers can explode, and underwater kelp forests may be chewed down to bare rock. " +
        N(8) + "Where otters return, the kelp often grows back, giving shelter to fish and many other creatures. " +
        N(9) + "For this reason, scientists call the sea otter a keystone species: a single animal that holds a whole community together." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the passage about sea otters?",
          choices: [
            { letter: "A", text: "Sea otters eat more food each day than any other ocean mammal." },
            { letter: "B", text: "Sea otters survive cold water in unusual ways and keep kelp forests healthy." },
            { letter: "C", text: "Kelp forests are disappearing because of seals, whales and urchins." },
            { letter: "D", text: "Scientists cannot agree about how sea otters stay warm in winter." }
          ],
          correct: "B"
        },
        {
          id: "dry",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the passage, what keeps a sea otter's skin dry?",
          choices: [
            { letter: "A", text: "a thin layer of blubber" },
            { letter: "B", text: "the oil in sea urchins" },
            { letter: "C", text: "resting on beds of kelp" },
            { letter: "D", text: "air trapped in its fur" }
          ],
          correct: "D"
        },
        {
          id: "chain",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Sentences 6 through 8 are organized mainly to show —",
          choices: [
            { letter: "A", text: "a chain of causes and effects" },
            { letter: "B", text: "a list of otter body parts" },
            { letter: "C", text: "two opinions about urchins" },
            { letter: "D", text: "the steps of an experiment" }
          ],
          correct: "A"
        },
        {
          id: "keystone",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which words in sentence 9 help the reader understand the meaning of keystone species?",
          choices: [
            { letter: "A", text: "For this reason, scientists call" },
            { letter: "B", text: "call the sea otter a keystone" },
            { letter: "C", text: "holds a whole community together" },
            { letter: "D", text: "scientists call the sea otter" }
          ],
          correct: "C"
        },
        {
          id: "seals",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author mentions seals and whales in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "name the otter's main predators" },
            { letter: "B", text: "contrast how otters keep warm" },
            { letter: "C", text: "list animals that eat urchins" },
            { letter: "D", text: "show where otters like to live" }
          ],
          correct: "B"
        },
        {
          id: "hedge",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which phrase shows the author presenting an effect as possible rather than certain?",
          choices: [
            { letter: "A", text: "the densest of any animal (sentence 3)" },
            { letter: "B", text: "about a quarter of their body weight (sentence 5)" },
            { letter: "C", text: "spiny animals that graze on kelp (sentence 6)" },
            { letter: "D", text: "may be chewed down to bare rock (sentence 7)" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-rv-c62-monarchs",
      family: "G10",
      title: "The Long Way South",
      kind: "Vocabulary · 10.RV",
      blurb: "Six words from the monarch butterfly's three-thousand-mile trip to the mountains of Mexico.",
      level: 2,
      passage:
        "<p>" + N(1) + "Each fall, monarch butterflies in eastern North America begin an <strong>arduous</strong> journey of up to three thousand miles to the mountain forests of central Mexico. " +
        N(2) + "No monarch has made the trip before, so the route cannot be learned from parents; scientists believe the sense of direction is <strong>innate</strong>, built in from birth. " +
        N(3) + "The butterflies use the angle of the sun as a compass, correcting their course as the day passes. " +
        N(4) + "Along the way, they stop to drink nectar that will <strong>sustain</strong> them through the long winter. " +
        N(5) + "Millions eventually <strong>converge</strong> on the same few groves, coming together until the branches look orange. " +
        N(6) + "In recent decades, those winter crowds have <strong>dwindled</strong>, shrinking as milkweed and wildflowers disappear. " +
        N(7) + "Still, monarchs are <strong>resilient</strong>: when people plant milkweed, local numbers can bounce back within a few seasons." +
        "</p>",
      claims: [
        {
          id: "arduous",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 1, the word arduous most nearly means —",
          choices: [
            { letter: "A", text: "colorful" },
            { letter: "B", text: "brief" },
            { letter: "C", text: "difficult" },
            { letter: "D", text: "mysterious" }
          ],
          correct: "C"
        },
        {
          id: "innate",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which phrase in sentence 2 best helps the reader understand the meaning of innate?",
          choices: [
            { letter: "A", text: "built in from birth" },
            { letter: "B", text: "made the trip before" },
            { letter: "C", text: "scientists believe" },
            { letter: "D", text: "the sense of direction" }
          ],
          correct: "A"
        },
        {
          id: "converge",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The prefix con- means \"together,\" as in connect and convene. Based on this, converge in sentence 5 most nearly means to —",
          choices: [
            { letter: "A", text: "fly away in many directions" },
            { letter: "B", text: "meet at the same place" },
            { letter: "C", text: "rest for a short time" },
            { letter: "D", text: "change color in winter" }
          ],
          correct: "B"
        },
        {
          id: "resilient",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The author could have called monarchs tough instead of resilient in sentence 7. Compared with tough, resilient adds a sense of —",
          choices: [
            { letter: "A", text: "being hard to catch" },
            { letter: "B", text: "being large and strong" },
            { letter: "C", text: "refusing to cooperate" },
            { letter: "D", text: "recovering after harm" }
          ],
          correct: "D"
        },
        {
          id: "sustain",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "As used in sentence 4, the word sustain most nearly means —",
          choices: [
            { letter: "A", text: "keep going" },
            { letter: "B", text: "slow down" },
            { letter: "C", text: "lead astray" },
            { letter: "D", text: "warm up" }
          ],
          correct: "A"
        },
        {
          id: "dwindled",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The author chose dwindled rather than dropped in sentence 6. Compared with dropped, dwindled suggests a decline that is —",
          choices: [
            { letter: "A", text: "sudden and complete" },
            { letter: "B", text: "temporary and harmless" },
            { letter: "C", text: "gradual and steady" },
            { letter: "D", text: "loud and noticeable" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-dsr-c62-showingup",
      family: "G10",
      title: "Showing Up",
      kind: "Paired texts · 10.DSR",
      blurb: "A volunteer handbook names the skill it values most; a teen's journal discovers it.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From the Lakeview Hospital Teen Volunteer Handbook</strong></p>" +
        "<p>" + N(1) + "Teen volunteers serve one four-hour shift each week for at least three months. " +
        N(2) + "Volunteers greet visitors, deliver flowers and mail, restock waiting-room supplies, and push wheelchairs to the entrance. " +
        N(3) + "Volunteers may not give medical advice, enter isolation rooms, or read patient charts. " +
        N(4) + "The most important skill we look for is reliability: a volunteer who arrives on time every week is worth more than one who does everything perfectly but rarely shows up.</p>" +
        "<p><strong>Text 2 — From Imani's volunteer journal</strong></p>" +
        "<p>" + N(5) + "My first month, I thought I was useless. " +
        N(6) + "I folded blankets, refilled the coffee station, and walked lost visitors to the elevators. " +
        N(7) + "Nobody thanked me for anything important. " +
        N(8) + "Then last Tuesday, the charge nurse on the fourth floor said she had been waiting for me, because Tuesdays were easier when she knew exactly who was coming. " +
        N(9) + "I hadn't done anything special. " +
        N(10) + "I had just kept showing up.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "On which point do the handbook and Imani's journal agree?",
          choices: [
            { letter: "A", text: "Volunteers should be thanked after every shift." },
            { letter: "B", text: "Dependable attendance matters more than impressive tasks." },
            { letter: "C", text: "Nurses should train volunteers before they begin." },
            { letter: "D", text: "Teen volunteers ought to work longer shifts." }
          ],
          correct: "B"
        },
        {
          id: "conclude",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "A reader who uses both texts could best conclude that Imani's weekly attendance —",
          choices: [
            { letter: "A", text: "is the very quality the handbook values most" },
            { letter: "B", text: "breaks the rule about entering patient rooms" },
            { letter: "C", text: "earns her a promotion to a nursing job" },
            { letter: "D", text: "matters less than the tasks she completes" }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The two texts about volunteering differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "complains about volunteers, while Text 2 defends their work" },
            { letter: "B", text: "tells a personal story, while Text 2 lists the hospital rules" },
            { letter: "C", text: "sets out expectations, while Text 2 shows one person living them" },
            { letter: "D", text: "describes the nurses, while Text 2 describes the visitors" }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which TWO sentences from Text 2 best show the quality that Text 1 calls most important? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "audience",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.1",
          stem: "Text 1 is written mainly for —",
          choices: [
            { letter: "A", text: "patients who are leaving the hospital" },
            { letter: "B", text: "teens who are joining the volunteer program" },
            { letter: "C", text: "nurses who supervise the fourth floor" },
            { letter: "D", text: "visitors who are looking for a room" }
          ],
          correct: "B"
        },
        {
          id: "reliability",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 4, the word reliability most nearly means —",
          choices: [
            { letter: "A", text: "dependability" },
            { letter: "B", text: "cheerfulness" },
            { letter: "C", text: "intelligence" },
            { letter: "D", text: "carefulness" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c62-geese",
      family: "G10",
      title: "Above the Parking Deck",
      kind: "Poetry · 10.RL",
      blurb: "Ten lines: a V of geese at dusk, and a line of drivers who all look up at once.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "They came at dusk above the parking deck,<br>" +
        L(2) + "a crooked V that kept correcting itself,<br>" +
        L(3) + "one bird sliding back as another surged ahead,<br>" +
        L(4) + "the way my cousins take turns at the wheel<br>" +
        L(5) + "on the long drive south to Abuela's house.<br>" +
        L(6) + "Their voices dropped like loose change on the roof,<br>" +
        L(7) + "and every head in the line of cars looked up:<br>" +
        L(8) + "the cashier, the boy with the skateboard, me,<br>" +
        L(9) + "all of us, for one honking minute,<br>" +
        L(10) + "remembering we are also going somewhere." +
        "</p>",
      claims: [
        {
          id: "cousins",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "In lines 4 and 5, the speaker compares the geese to cousins taking turns driving mainly to suggest that the birds —",
          choices: [
            { letter: "A", text: "are lost and need directions" },
            { letter: "B", text: "are flying toward a family home" },
            { letter: "C", text: "argue about which way to go" },
            { letter: "D", text: "share the work of a long trip" }
          ],
          correct: "D"
        },
        {
          id: "change",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "Line 6 compares the geese's voices to loose change dropping on a roof. This image mainly suggests that the sounds are —",
          choices: [
            { letter: "A", text: "scattered, small and ordinary" },
            { letter: "B", text: "frightening, harsh and very loud" },
            { letter: "C", text: "sad, slow and full of regret" },
            { letter: "D", text: "musical and carefully timed" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem about the geese?",
          choices: [
            { letter: "A", text: "City life leaves little room for noticing nature." },
            { letter: "B", text: "Long family drives are tiring, and most people dread them." },
            { letter: "C", text: "A shared moment of wonder can remind people of their own journeys." },
            { letter: "D", text: "Birds are wiser and more careful travelers than people." }
          ],
          correct: "C"
        },
        {
          id: "shift",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "How do lines 7 through 10 shift the focus of the poem about the geese?",
          choices: [
            { letter: "A", text: "from the people below to the weather" },
            { letter: "B", text: "from the birds to the people watching them" },
            { letter: "C", text: "from the present back to a memory" },
            { letter: "D", text: "from the speaker to the speaker's cousins" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of lines 8 through 10 is best described as —",
          choices: [
            { letter: "A", text: "impatient and annoyed" },
            { letter: "B", text: "bitter and mocking" },
            { letter: "C", text: "nervous and uncertain" },
            { letter: "D", text: "quietly hopeful" }
          ],
          correct: "D"
        },
        {
          id: "surged",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In line 3, the word surged most nearly means —",
          choices: [
            { letter: "A", text: "drifted slowly" },
            { letter: "B", text: "called loudly" },
            { letter: "C", text: "pushed forward" },
            { letter: "D", text: "turned around" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-ri-c62-shiftguide",
      family: "G10",
      title: "Volunteer Shift Guide",
      kind: "Functional text · 10.RI",
      blurb: "How teen volunteers sign up for, change and show up to their hospital shifts.",
      level: 1,
      passage:
        "<p><strong>Signing Up for Shifts.</strong> " + N(1) + "Log in to the volunteer portal by Thursday at noon to choose shifts for the following week. " +
        N(2) + "Each teen volunteer may choose up to two shifts, and each shift lasts four hours. " +
        "<strong>Changing a Shift.</strong> " + N(3) + "If you cannot attend, release your shift in the portal at least 48 hours ahead so that another volunteer can claim it. " +
        N(4) + "For emergencies within 48 hours, call the Volunteer Office at extension 4410 instead of sending an email. " +
        "<strong>Checking In.</strong> " + N(5) + "Badge in at the main lobby kiosk, then collect your vest from the cart beside the elevators. " +
        N(6) + "Volunteers who arrive more than fifteen minutes late will be reassigned to a lobby task for that day. " +
        "<strong>Missed Shifts.</strong> " + N(7) + "Two missed shifts without notice in one month will pause your schedule until you meet with the coordinator." +
        "</p>",
      claims: [
        {
          id: "sick",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the guide, what should a volunteer who wakes up sick on the morning of a shift do?",
          choices: [
            { letter: "A", text: "Release the shift in the portal." },
            { letter: "B", text: "Email the coordinator before noon." },
            { letter: "C", text: "Call the Volunteer Office at extension 4410." },
            { letter: "D", text: "Ask another volunteer to badge in for them." }
          ],
          correct: "C"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "The bold headings in the shift guide mainly help a reader —",
          choices: [
            { letter: "A", text: "find the rule for a particular situation quickly" },
            { letter: "B", text: "learn which tasks volunteers enjoy most" },
            { letter: "C", text: "understand why the hospital needs volunteers" },
            { letter: "D", text: "compare this hospital with other hospitals" }
          ],
          correct: "A"
        },
        {
          id: "audience",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.1",
          stem: "The shift guide is written mainly for —",
          choices: [
            { letter: "A", text: "patients waiting for a ride in the lobby" },
            { letter: "B", text: "nurses who need extra help on their floors" },
            { letter: "C", text: "parents choosing a summer program for teens" },
            { letter: "D", text: "teen volunteers who manage their own schedules" }
          ],
          correct: "D"
        },
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the volunteer shift guide?",
          choices: [
            { letter: "A", text: "Volunteers who are late lose their badges for a month." },
            { letter: "B", text: "Volunteers must sign up for, change and attend shifts by set procedures." },
            { letter: "C", text: "The hospital prefers phone calls to emails for every question." },
            { letter: "D", text: "Each volunteer must work two four-hour shifts every week." }
          ],
          correct: "B"
        },
        {
          id: "claim",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The guide explains in sentence 3 that a released shift lets another volunteer claim it mainly to —",
          choices: [
            { letter: "A", text: "give a reason for the 48-hour rule" },
            { letter: "B", text: "warn volunteers about late arrivals" },
            { letter: "C", text: "describe how the portal was designed" },
            { letter: "D", text: "encourage volunteers to trade vests" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The tone of the volunteer shift guide is best described as —",
          choices: [
            { letter: "A", text: "warm and chatty" },
            { letter: "B", text: "clear and businesslike" },
            { letter: "C", text: "angry and threatening" },
            { letter: "D", text: "playful and joking" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rl-c62-breach",
      family: "G10",
      title: "Breach",
      kind: "Literary · 10.RL",
      blurb: "Two hours of gray water, one camera, and the moment a humpback finally shows up.",
      level: 2,
      passage:
        "<p>" + N(1) + "For two hours the boat rocked over gray water, and Ilona photographed nothing but waves. " +
        N(2) + "Her younger brother Tomasz had stopped asking whether the whales were coming; he sat wrapped in a borrowed jacket, eating crackers with grim focus. " +
        N(3) + "The guide kept saying, \"They're out here somewhere,\" in the cheerful voice of someone who had said it many times. " +
        N(4) + "Ilona lowered her camera to wipe salt from the lens. " +
        N(5) + "That was when the ocean split open. " +
        N(6) + "A humpback rose beside the boat, rolled its long white flipper toward the sky, and fell back with a crash that soaked the whole railing. " +
        N(7) + "Passengers shrieked and laughed. " +
        N(8) + "Ilona looked down at her camera, still pointed at her shoes. " +
        N(9) + "Tomasz, dripping, grinned at her. " +
        N(10) + "\"I'll remember it for you,\" he said." +
        "</p>",
      claims: [
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in the whale-watching story is most ironic?",
          choices: [
            { letter: "A", text: "Ilona waits hours for a whale photo, then misses it while wiping her lens." },
            { letter: "B", text: "Tomasz sits wrapped in a jacket that belongs to someone else." },
            { letter: "C", text: "The guide stays cheerful after repeating the same line many times." },
            { letter: "D", text: "The passengers laugh happily even though the splash soaks them." }
          ],
          correct: "A"
        },
        {
          id: "tension",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The tension in the first part of the whale story comes mainly from —",
          choices: [
            { letter: "A", text: "an argument between Ilona and Tomasz" },
            { letter: "B", text: "a storm that threatens the boat" },
            { letter: "C", text: "the long wait with no sign of whales" },
            { letter: "D", text: "the guide's fear of the humpback" }
          ],
          correct: "C"
        },
        {
          id: "split",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "Sentence 5, That was when the ocean split open, mainly suggests that the whale's appearance is —",
          choices: [
            { letter: "A", text: "slow and expected" },
            { letter: "B", text: "sudden and dramatic" },
            { letter: "C", text: "dangerous and violent" },
            { letter: "D", text: "quiet and gentle" }
          ],
          correct: "B"
        },
        {
          id: "tomasz",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Tomasz's words in sentence 10 characterize him as —",
          choices: [
            { letter: "A", text: "jealous of his sister's camera" },
            { letter: "B", text: "afraid of the whale's size" },
            { letter: "C", text: "bored by the whole trip" },
            { letter: "D", text: "good-humored and kind" }
          ],
          correct: "D"
        },
        {
          id: "guide",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author includes the guide's repeated line in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "show how long and doubtful the wait has become" },
            { letter: "B", text: "prove that the guide knows where whales are" },
            { letter: "C", text: "explain why Tomasz is eating crackers" },
            { letter: "D", text: "suggest that the boat will turn back soon" }
          ],
          correct: "A"
        },
        {
          id: "grim",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "Sentence 2 says Tomasz eats crackers with grim focus. Compared with steady, the word grim suggests that he is —",
          choices: [
            { letter: "A", text: "hungry and enjoying his snack" },
            { letter: "B", text: "careful not to drop crumbs" },
            { letter: "C", text: "gloomily enduring the wait" },
            { letter: "D", text: "angry at his older sister" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-ri-c62-fireflies",
      family: "G10",
      title: "Signals in the Grass",
      kind: "Informational · 10.RI",
      blurb: "Firefly flashes are a code, and some fireflies have learned to fake it.",
      level: 2,
      passage:
        "<p>" + N(1) + "On summer evenings, the blinking lights of fireflies can look random, but each flash is a coded message. " +
        N(2) + "Fireflies are actually beetles, and their light comes from a chemical reaction that produces almost no heat. " +
        N(3) + "Every species has its own pattern: one might give a single long glow, another a quick double pulse, another a curving streak as it rises. " +
        N(4) + "Males flash while flying, and females answer from the grass with a timed reply. " +
        N(5) + "The pattern lets each firefly find a mate of its own kind. " +
        N(6) + "Some females, however, have learned to fake it. " +
        N(7) + "They copy the reply of a different species, lure in a hopeful male, and eat him. " +
        N(8) + "Researchers who study fireflies now worry about a quieter threat: artificial light. " +
        N(9) + "In brightly lit yards and streets, the signals are harder to see, and fewer fireflies find each other." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the passage about fireflies?",
          choices: [
            { letter: "A", text: "Fireflies are beetles whose light comes from a reaction that makes almost no heat." },
            { letter: "B", text: "Female fireflies are more dangerous to other insects than males are." },
            { letter: "C", text: "Firefly flashes are mating signals, but tricks and artificial light can interfere." },
            { letter: "D", text: "Bright yards and streets have caused fireflies to vanish from most places." }
          ],
          correct: "C"
        },
        {
          id: "female",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the passage, how does a female firefly usually respond to a flashing male?",
          choices: [
            { letter: "A", text: "She flies up to meet him high in the air." },
            { letter: "B", text: "She answers from the grass with a timed flash." },
            { letter: "C", text: "She copies his flash pattern exactly." },
            { letter: "D", text: "She hides in the grass until the yard is dark." }
          ],
          correct: "B"
        },
        {
          id: "however",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "In sentence 6, the passage shifts mainly from —",
          choices: [
            { letter: "A", text: "explaining the signal system to showing how it can be misused" },
            { letter: "B", text: "describing males to describing the plants they live on" },
            { letter: "C", text: "stating a problem to offering a solution for it" },
            { letter: "D", text: "giving an opinion to giving facts that oppose it" }
          ],
          correct: "A"
        },
        {
          id: "coded",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author uses the phrase a coded message in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "suggest that scientists invented the flashes" },
            { letter: "B", text: "compare fireflies to spies and soldiers" },
            { letter: "C", text: "show that the flashes are hard to see" },
            { letter: "D", text: "show that each flash carries specific meaning" }
          ],
          correct: "D"
        },
        {
          id: "quieter",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The phrase a quieter threat in sentence 8 gives the end of the firefly passage a tone that is —",
          choices: [
            { letter: "A", text: "worried" },
            { letter: "B", text: "amused" },
            { letter: "C", text: "angry" },
            { letter: "D", text: "carefree" }
          ],
          correct: "A"
        },
        {
          id: "lure",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 7, the word lure most nearly means —",
          choices: [
            { letter: "A", text: "warn away loudly" },
            { letter: "B", text: "chase off quickly" },
            { letter: "C", text: "follow closely" },
            { letter: "D", text: "draw into a trap" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-ri-c62-lightsout",
      family: "G10",
      title: "Turn Down the Towers",
      kind: "Argument · 10.RI",
      blurb: "A student editorial asks the city council to dim empty office floors during bird migration.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every spring and fall, millions of songbirds fly over our city at night, steering partly by the stars. " +
        N(2) + "Our downtown towers, lit floor by floor until dawn, pull them off course. " +
        N(3) + "Confused birds circle the glowing windows until they are exhausted, and many strike the glass. " +
        N(4) + "Last fall, volunteers who walked four downtown blocks each morning collected more than nine hundred dead or injured birds. " +
        N(5) + "Some building managers argue that bright towers make the skyline safer and more attractive. " +
        N(6) + "But office floors that are empty at 2 a.m. do not make anyone safer, and cities with \"lights out\" programs have kept their streets fully lit while switching off unused floors. " +
        N(7) + "The cost of trying is nearly zero; in fact, darker towers would lower electric bills. " +
        N(8) + "The council should require towers to dim unused floors from midnight to dawn during migration months." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which sentence best states the central claim of the editorial about the towers?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which detail provides the most direct evidence that lit towers harm birds?",
          choices: [
            { letter: "A", text: "Songbirds flying over the city steer partly by the stars." },
            { letter: "B", text: "Volunteers collected over nine hundred dead or injured birds." },
            { letter: "C", text: "Darker towers would lower the electric bills of owners." },
            { letter: "D", text: "Some managers say bright towers make the skyline attractive." }
          ],
          correct: "B"
        },
        {
          id: "counter",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "In sentences 5 and 6, the author responds to the building managers mainly by —",
          choices: [
            { letter: "A", text: "admitting that the skyline would look much less attractive at night" },
            { letter: "B", text: "noting that the plan darkens only empty floors and leaves streets lit" },
            { letter: "C", text: "suggesting that the managers care more about money than birds" },
            { letter: "D", text: "asking the managers to help pay for the morning bird walks" }
          ],
          correct: "B"
        },
        {
          id: "floor",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author describes the towers as lit floor by floor until dawn in sentence 2 mainly to emphasize —",
          choices: [
            { letter: "A", text: "how beautiful the city looks at night" },
            { letter: "B", text: "how tall the newest buildings have become" },
            { letter: "C", text: "how much light burns through the whole night" },
            { letter: "D", text: "how early office workers arrive" }
          ],
          correct: "C"
        },
        {
          id: "audience",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.1",
          stem: "The editorial about the towers is written mainly for —",
          choices: [
            { letter: "A", text: "scientists who study how birds navigate at night" },
            { letter: "B", text: "tourists planning a sightseeing trip downtown" },
            { letter: "C", text: "residents and council members who can change lighting rules" },
            { letter: "D", text: "volunteers who collect injured birds each morning" }
          ],
          correct: "C"
        },
        {
          id: "exhausted",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "In sentence 3, the author writes that the birds circle until they are exhausted. Compared with tired, exhausted suggests that the birds are —",
          choices: [
            { letter: "A", text: "completely drained of strength" },
            { letter: "B", text: "a little sleepy after dark" },
            { letter: "C", text: "bored with flying in circles" },
            { letter: "D", text: "frightened by the city noise" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c62-infodesk",
      family: "G10",
      title: "Information Desk",
      kind: "Drama · 10.RL",
      blurb: "A quiet evening shift at the hospital lobby desk ends with a father in a hurry.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "A hospital lobby, early evening. KOFI, sixteen, sorts visitor badges at the information desk. RUTH, a volunteer in her seventies, knits beside him.</em></p>" +
        "<p><strong>KOFI:</strong> " + N(2) + "Ten minutes left. " + N(3) + "Nobody's come by in an hour.</p>" +
        "<p><strong>RUTH:</strong> " + N(4) + "Then the hour went well.</p>" +
        "<p><em>" + N(5) + "A MAN rushes in, coat buttoned wrong, carrying an empty infant car seat.</em></p>" +
        "<p><strong>MAN:</strong> " + N(6) + "The baby floor, my wife, they said the third floor, or the fifth?</p>" +
        "<p><strong>KOFI:</strong> <em>" + N(7) + "(starting to type)</em> Let me just look it up in the system.</p>" +
        "<p><strong>RUTH:</strong> <em>" + N(8) + "(setting down her knitting and standing)</em> Fourth floor, east elevators. " +
        N(9) + "I'll walk you. " +
        N(10) + "Let me hold that car seat; you'll want it on the way home, not on the way up.</p>" +
        "<p><em>" + N(11) + "They exit. KOFI stares at the screen, then quietly pulls a floor map from the drawer and begins to study it.</em></p>",
      claims: [
        {
          id: "ruth",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Ruth's reply in sentence 4 characterizes her as —",
          choices: [
            { letter: "A", text: "bored and eager to leave" },
            { letter: "B", text: "content with a quiet shift" },
            { letter: "C", text: "annoyed by Kofi's complaint" },
            { letter: "D", text: "worried that no one needs help" }
          ],
          correct: "B"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The conflict in the information desk scene begins when —",
          choices: [
            { letter: "A", text: "Kofi and Ruth disagree about sorting the badges" },
            { letter: "B", text: "Kofi's computer stops working at the desk" },
            { letter: "C", text: "Ruth refuses to finish the rest of her shift" },
            { letter: "D", text: "a worried visitor needs directions fast" }
          ],
          correct: "D"
        },
        {
          id: "map",
          sol: "10.RL.1.D",
          sub: "10.RL.1.D.2",
          stem: "The stage direction in sentence 11 mainly reveals that Kofi —",
          choices: [
            { letter: "A", text: "has learned from Ruth and wants to be ready next time" },
            { letter: "B", text: "is upset that Ruth left him alone at the desk" },
            { letter: "C", text: "plans to follow the man to the fourth floor" },
            { letter: "D", text: "thinks the computer gave the wrong answer" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of Ruth's words to the man in sentences 8 through 10 is best described as —",
          choices: [
            { letter: "A", text: "stern and impatient" },
            { letter: "B", text: "playful and teasing" },
            { letter: "C", text: "kind and steady" },
            { letter: "D", text: "nervous and rushed" }
          ],
          correct: "C"
        },
        {
          id: "coat",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The detail of the man's coat buttoned wrong in sentence 5 mainly creates a sense of —",
          choices: [
            { letter: "A", text: "hurry and worry" },
            { letter: "B", text: "cold winter weather" },
            { letter: "C", text: "carelessness and laziness" },
            { letter: "D", text: "humor and silliness" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme does the scene at the information desk best convey?",
          choices: [
            { letter: "A", text: "Technology always works faster than people do." },
            { letter: "B", text: "Quiet shifts are a waste of a volunteer's time." },
            { letter: "C", text: "Older volunteers should train younger ones by lecture." },
            { letter: "D", text: "Experience lets people respond to others with care." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-rl-c62-antcrumb",
      family: "G10",
      title: "Thirty-Seven to Go",
      kind: "Literary · 10.RL",
      blurb: "A stack of chemistry flashcards loses an afternoon to one very stubborn ant.",
      level: 3,
      passage:
        "<p>" + N(1) + "Farida had promised herself she would review forty chemistry flashcards before dinner, and she had reviewed three. " +
        N(2) + "The problem was the porch step, where a line of ants ran from a crack in the boards to a cracker crumb the size of a coin. " +
        N(3) + "One ant had decided the whole crumb was hers. " +
        N(4) + "She dragged it backward, lost it over an edge, circled, and found it again. " +
        N(5) + "Twice another ant tried to help, or to steal, Farida couldn't tell which, and twice the first ant simply kept pulling. " +
        N(6) + "By the time the crumb disappeared into the crack, the porch light had come on and Farida's tea had gone cold. " +
        N(7) + "She looked at the stack of cards in her lap. " +
        N(8) + "Thirty-seven to go. " +
        N(9) + "She picked up the top card, turned it over, and, for the first time all afternoon, did not glance at the step." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "The story about Farida and the ant best develops which theme?",
          choices: [
            { letter: "A", text: "Small creatures are often more interesting than schoolwork." },
            { letter: "B", text: "Seeing another's persistence can inspire one's own effort." },
            { letter: "C", text: "Studying outdoors is never a good idea for serious students." },
            { letter: "D", text: "Working together with others always beats working alone." }
          ],
          correct: "B"
        },
        {
          id: "farida",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentence 1 characterizes Farida as someone who —",
          choices: [
            { letter: "A", text: "sets goals but struggles to stay focused" },
            { letter: "B", text: "dislikes chemistry and plans to quit" },
            { letter: "C", text: "studies faster than anyone she knows" },
            { letter: "D", text: "never makes promises to herself" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "What is ironic about how Farida spends most of her afternoon?",
          choices: [
            { letter: "A", text: "She drinks tea even though the weather is warm." },
            { letter: "B", text: "She studies chemistry on a porch instead of indoors." },
            { letter: "C", text: "She watches an ant work hard instead of working herself." },
            { letter: "D", text: "She sits near a crack that the ants are using." }
          ],
          correct: "C"
        },
        {
          id: "short",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author includes the very short sentence 8, Thirty-seven to go, mainly to —",
          choices: [
            { letter: "A", text: "show how quickly the cards can be finished" },
            { letter: "B", text: "explain the rules of her chemistry class" },
            { letter: "C", text: "suggest that Farida has given up for the day" },
            { letter: "D", text: "show Farida facing the work she has avoided" }
          ],
          correct: "D"
        },
        {
          id: "resolve",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Sentence 9 functions in the plot of the ant story as —",
          choices: [
            { letter: "A", text: "the resolution, showing a change in Farida" },
            { letter: "B", text: "the rising action, adding a new problem" },
            { letter: "C", text: "a flashback to an earlier afternoon" },
            { letter: "D", text: "the exposition, introducing the setting" }
          ],
          correct: "A"
        },
        {
          id: "hers",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 3, the phrase had decided the whole crumb was hers presents the ant as —",
          choices: [
            { letter: "A", text: "lost and confused by the crack" },
            { letter: "B", text: "generous to the other ants" },
            { letter: "C", text: "afraid of Farida's shadow" },
            { letter: "D", text: "determined and possessive" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-ri-c62-dolphinclicks",
      family: "G10",
      title: "Seeing With Sound",
      kind: "Informational · 10.RI",
      blurb: "How a bottlenose dolphin finds a fish buried in sand by listening to its own clicks.",
      level: 3,
      passage:
        "<p>" + N(1) + "In murky water, where eyesight is nearly useless, a bottlenose dolphin can find a fish buried in sand. " +
        N(2) + "It does so by listening to its own voice. " +
        N(3) + "The dolphin produces rapid clicks in its nasal passages, and a fatty organ in its forehead, called the melon, focuses the clicks into a beam. " +
        N(4) + "When the sound strikes an object, echoes bounce back and travel through the dolphin's lower jaw to its inner ear. " +
        N(5) + "From the delay and strength of those echoes, the dolphin's brain builds a picture of the object's distance, size and shape. " +
        N(6) + "In tests, dolphins have told apart metal spheres that differed in thickness by less than a millimeter. " +
        N(7) + "Engineers have studied this ability while designing sonar, yet no human device matches the dolphin's mix of precision and speed. " +
        N(8) + "Some researchers suspect dolphins can even sense inside a fish's body, though how much they perceive is still debated." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the passage about dolphins?",
          choices: [
            { letter: "A", text: "Dolphins use echoes of their own clicks to locate objects with great precision." },
            { letter: "B", text: "Engineers copied the dolphin's melon when they invented modern sonar devices." },
            { letter: "C", text: "Dolphins have poor eyesight and depend on other animals to find their food." },
            { letter: "D", text: "Scientists have proved that dolphins can see inside the bodies of fish." }
          ],
          correct: "A"
        },
        {
          id: "sequence",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 3 through 5 of the dolphin passage organized?",
          choices: [
            { letter: "A", text: "as a comparison of dolphins and bats" },
            { letter: "B", text: "as a problem followed by a solution" },
            { letter: "C", text: "as a sequence of steps in a process" },
            { letter: "D", text: "as a list of opinions from experts" }
          ],
          correct: "C"
        },
        {
          id: "debated",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which idea in the dolphin passage is presented as uncertain rather than established?",
          choices: [
            { letter: "A", text: "Echoes travel through the lower jaw to the ear." },
            { letter: "B", text: "Dolphins can sense the inside of a fish's body." },
            { letter: "C", text: "The melon focuses clicks into a beam of sound." },
            { letter: "D", text: "Dolphins can tell apart spheres of different thickness." }
          ],
          correct: "B"
        },
        {
          id: "precise",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence best supports the claim that dolphin echolocation is extremely precise?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "opening",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author opens with a dolphin finding a fish buried in murky sand mainly to —",
          choices: [
            { letter: "A", text: "warn readers that dolphins are fierce hunters" },
            { letter: "B", text: "present a puzzle that the passage then explains" },
            { letter: "C", text: "describe the dolphin's favorite kind of food" },
            { letter: "D", text: "argue that dolphins should be kept in labs" }
          ],
          correct: "B"
        },
        {
          id: "echoloc",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word echolocation joins echo with the root loc, found in location and local. Based on this, echolocation is —",
          choices: [
            { letter: "A", text: "finding a position by reflected sound" },
            { letter: "B", text: "copying the calls of other animals" },
            { letter: "C", text: "making loud noises to frighten prey" },
            { letter: "D", text: "staying in one place for a long time" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rv-c62-manatees",
      family: "G10",
      title: "Gentle Giants of the Shallows",
      kind: "Vocabulary · 10.RV",
      blurb: "Six words about manatees: how they eat, rest, gather and face danger.",
      level: 1,
      passage:
        "<p>" + N(1) + "Manatees are large, <strong>docile</strong> mammals that drift through warm coastal rivers and bays, rarely showing any sign of aggression. " +
        N(2) + "Though they can weigh more than a thousand pounds, their bodies are <strong>buoyant</strong>, and they rest near the surface almost without effort. " +
        N(3) + "Manatees <strong>forage</strong> for hours each day, searching the shallows for sea grass and other plants. " +
        N(4) + "Because they move slowly and surface often to breathe, they are <strong>vulnerable</strong> to boat propellers, which can easily injure them. " +
        N(5) + "In winter, when the ocean turns cold, manatees <strong>congregate</strong> in springs and near power plants where the water stays warm, gathering by the hundreds. " +
        N(6) + "In places where sea grass has become <strong>sparse</strong>, thin and patchy instead of thick, some manatees struggle to find enough to eat." +
        "</p>",
      claims: [
        {
          id: "docile",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The author calls manatees docile rather than timid. Compared with timid, docile suggests animals that are —",
          choices: [
            { letter: "A", text: "quick to hide from danger" },
            { letter: "B", text: "easily trained by people" },
            { letter: "C", text: "peaceful rather than fearful" },
            { letter: "D", text: "lazy and unwilling to move" }
          ],
          correct: "C"
        },
        {
          id: "congregate",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which words in sentence 5 help the reader understand the meaning of congregate?",
          choices: [
            { letter: "A", text: "when the ocean turns cold" },
            { letter: "B", text: "gathering by the hundreds" },
            { letter: "C", text: "near power plants" },
            { letter: "D", text: "where the water stays warm" }
          ],
          correct: "B"
        },
        {
          id: "forage",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 3, the word forage most nearly means to —",
          choices: [
            { letter: "A", text: "search for food" },
            { letter: "B", text: "sleep in shallow water" },
            { letter: "C", text: "travel long distances" },
            { letter: "D", text: "hide from boats" }
          ],
          correct: "A"
        },
        {
          id: "vulnerable",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word vulnerable comes from a Latin root meaning \"wound.\" Based on this, an animal that is vulnerable is —",
          choices: [
            { letter: "A", text: "already badly hurt" },
            { letter: "B", text: "able to heal quickly" },
            { letter: "C", text: "dangerous to others" },
            { letter: "D", text: "easily harmed" }
          ],
          correct: "D"
        },
        {
          id: "sparse",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 6, the phrase thin and patchy instead of thick shows that sparse means —",
          choices: [
            { letter: "A", text: "salty and unhealthy" },
            { letter: "B", text: "growing very tall" },
            { letter: "C", text: "scattered and scarce" },
            { letter: "D", text: "new and tender" }
          ],
          correct: "C"
        },
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the passage about manatees?",
          choices: [
            { letter: "A", text: "Manatees are slow, gentle grazers that face real dangers." },
            { letter: "B", text: "Manatees prefer power plants to natural springs." },
            { letter: "C", text: "Manatees are too heavy to float near the surface." },
            { letter: "D", text: "Manatees attack boats that come too close to them." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-dsr-c62-sealpup",
      family: "G10",
      title: "Alone on the Sand",
      kind: "Paired texts · 10.DSR",
      blurb: "A rescue group's notice about seal pups, and a beachgoer's account of one Saturday morning.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Notice from the Harbor Point Marine Mammal Rescue</strong></p>" +
        "<p>" + N(1) + "Harbor seal mothers often leave their pups on the beach for hours while they hunt offshore. " +
        N(2) + "A pup resting alone is usually not abandoned. " +
        N(3) + "If people crowd around it, however, the mother may be too frightened to return, and the pup can starve. " +
        N(4) + "Please stay at least 150 feet away, keep dogs leashed, and call our hotline if a pup appears injured or remains alone for more than a full day.</p>" +
        "<p><strong>Text 2 — From a beach visitor's online post</strong></p>" +
        "<p>" + N(5) + "We found a tiny seal crying on the sand Saturday morning, all by itself. " +
        N(6) + "A small crowd gathered, and a man wanted to carry it back into the water. " +
        N(7) + "I was ready to help him. " +
        N(8) + "Then a teenager in a rescue-crew shirt politely asked everyone to back up to the parking lot and wait. " +
        N(9) + "Two hours later, from up there, we watched a gray head appear in the surf, and the pup wriggled down to meet it.</p>",
      claims: [
        {
          id: "together",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which idea about the seal pup is clearest only when both texts are read together?",
          choices: [
            { letter: "A", text: "Seal pups cry loudly whenever they are left hungry on a beach." },
            { letter: "B", text: "Rescue crews prefer to train adult volunteers over teenagers." },
            { letter: "C", text: "The crowd may have kept the mother away until it moved back." },
            { letter: "D", text: "The man who wanted to help was an expert on handling seals." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The notice and the visitor's post differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "gives general guidance, while Text 2 shows it in one event" },
            { letter: "B", text: "tells a funny story, while Text 2 gives warnings" },
            { letter: "C", text: "describes dogs, while Text 2 describes seal mothers" },
            { letter: "D", text: "argues against rescue, while Text 2 supports it" }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Select TWO sentences from Text 1 that best explain why the teenager in Text 2 asked people to move back. Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 1" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 2" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "both",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which idea do both the rescue notice and the beach post support?",
          choices: [
            { letter: "A", text: "Seal pups should be carried to deeper water." },
            { letter: "B", text: "Beaches should close whenever seals appear." },
            { letter: "C", text: "Only trained crews may visit seal beaches." },
            { letter: "D", text: "A pup alone on a beach may not need rescue." }
          ],
          correct: "D"
        },
        {
          id: "ready",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The writer of Text 2 includes sentence 7, I was ready to help him, mainly to —",
          choices: [
            { letter: "A", text: "show that the man was a close friend of the writer" },
            { letter: "B", text: "admit nearly making the mistake the notice warns about" },
            { letter: "C", text: "prove that most visitors know how to handle seals" },
            { letter: "D", text: "explain why the crowd left the beach so early" }
          ],
          correct: "B"
        },
        {
          id: "abandoned",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 2, the word abandoned most nearly means —",
          choices: [
            { letter: "A", text: "injured" },
            { letter: "B", text: "deserted" },
            { letter: "C", text: "starving" },
            { letter: "D", text: "sleeping" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rl-c62-cricket",
      family: "G10",
      title: "Under the Stove",
      kind: "Poetry · 10.RL",
      blurb: "Nine lines: a cricket in the kitchen, three opinions about it, and one sleepless listener.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "All night a cricket under our stove<br>" +
        L(2) + "keeps time like a small clock nobody wound,<br>" +
        L(3) + "three chirps, a pause, three chirps again.<br>" +
        L(4) + "My brother says it's calling for a friend.<br>" +
        L(5) + "My mother says it's calling for a broom.<br>" +
        L(6) + "I lie awake and count along,<br>" +
        L(7) + "and somewhere near the twentieth song<br>" +
        L(8) + "the kitchen dark feels less like dark<br>" +
        L(9) + "and more like someone humming in the next room." +
        "</p>",
      claims: [
        {
          id: "clock",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "In line 2, the cricket is compared to a clock mainly to show that its chirping is —",
          choices: [
            { letter: "A", text: "loud and very sudden" },
            { letter: "B", text: "steady and regular" },
            { letter: "C", text: "old and badly broken" },
            { letter: "D", text: "soft and quite rare" }
          ],
          correct: "B"
        },
        {
          id: "family",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Lines 4 and 5 show that the speaker's brother and mother —",
          choices: [
            { letter: "A", text: "both want to catch the cricket" },
            { letter: "B", text: "cannot hear the cricket at all" },
            { letter: "C", text: "react to the cricket in different ways" },
            { letter: "D", text: "argue about who should clean the stove" }
          ],
          correct: "C"
        },
        {
          id: "humming",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "The image in line 9, someone humming in the next room, suggests that the speaker now finds the dark —",
          choices: [
            { letter: "A", text: "comforting" },
            { letter: "B", text: "frightening" },
            { letter: "C", text: "noisy" },
            { letter: "D", text: "empty" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of the cricket poem?",
          choices: [
            { letter: "A", text: "Insects do not belong in people's homes." },
            { letter: "B", text: "Families should agree about small problems." },
            { letter: "C", text: "Counting is the best cure for sleeplessness." },
            { letter: "D", text: "Something bothersome can become a comfort." }
          ],
          correct: "D"
        },
        {
          id: "shift",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "Lines 6 through 9 differ from lines 1 through 5 mainly because they —",
          choices: [
            { letter: "A", text: "describe the cricket's appearance" },
            { letter: "B", text: "focus on the speaker's changing feelings" },
            { letter: "C", text: "repeat the mother's complaint" },
            { letter: "D", text: "move the scene to the next morning" }
          ],
          correct: "B"
        },
        {
          id: "broom",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of line 5, My mother says it's calling for a broom, is best described as —",
          choices: [
            { letter: "A", text: "gently sorrowful" },
            { letter: "B", text: "quietly fearful" },
            { letter: "C", text: "dryly humorous" },
            { letter: "D", text: "deeply angry" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-rl-c62-banding",
      family: "G10",
      title: "Number 2716",
      kind: "Literary · 10.RL",
      blurb: "A dawn shift at a bird-banding station, and a warbler that will soon be far away.",
      level: 1,
      passage:
        "<p>" + N(1) + "At six in the morning, the nets at the banding station were already wet with dew. " +
        N(2) + "Adaeze followed Mr. Lindqvist along the row, her breath making small clouds. " +
        N(3) + "In the third net hung a tiny yellow warbler, tangled and blinking. " +
        N(4) + "Mr. Lindqvist showed her how to free it and hold it gently, one finger on each side of its neck like a loose collar. " +
        N(5) + "Back at the table, she measured its wing, weighed it in a paper cone, and closed a numbered band the size of a grain of rice around its leg. " +
        N(6) + "\"This one hatched up north this summer,\" he said. " +
        N(7) + "\"By November it could be in Central America.\" " +
        N(8) + "Adaeze opened her hand. " +
        N(9) + "For a second the warbler sat still, as if deciding. " +
        N(10) + "Then it was gone, a yellow spark over the trees, carrying her number into the world." +
        "</p>",
      claims: [
        {
          id: "adaeze",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Which statement best describes Adaeze in the banding story?",
          choices: [
            { letter: "A", text: "She is careful and eager to learn." },
            { letter: "B", text: "She is bored by the early hour." },
            { letter: "C", text: "She is afraid of handling birds." },
            { letter: "D", text: "She is impatient with her teacher." }
          ],
          correct: "A"
        },
        {
          id: "climax",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "Which event is the high point of the banding story?",
          choices: [
            { letter: "A", text: "Adaeze walks along the row of nets." },
            { letter: "B", text: "Mr. Lindqvist explains where the bird hatched." },
            { letter: "C", text: "Adaeze weighs the bird in a paper cone." },
            { letter: "D", text: "Adaeze opens her hand and the bird flies off." }
          ],
          correct: "D"
        },
        {
          id: "spark",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 10, describing the warbler as a yellow spark mainly suggests that it —",
          choices: [
            { letter: "A", text: "is hurt and cannot fly very far" },
            { letter: "B", text: "flies off quickly and brightly" },
            { letter: "C", text: "is too warm to hold for long" },
            { letter: "D", text: "frightens the other small birds" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which idea does the story about the banding station most clearly develop?",
          choices: [
            { letter: "A", text: "Science is far too difficult for most beginners to learn." },
            { letter: "B", text: "Small acts of care can link a person to something vast." },
            { letter: "C", text: "Wild birds should be kept safe in nets as long as possible." },
            { letter: "D", text: "Early mornings are the worst time to do outdoor work." }
          ],
          correct: "B"
        },
        {
          id: "november",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author includes Mr. Lindqvist's words in sentences 6 and 7 mainly to —",
          choices: [
            { letter: "A", text: "show that he is growing tired of the work" },
            { letter: "B", text: "explain the right way to weigh a bird" },
            { letter: "C", text: "reveal how far the tiny bird will travel" },
            { letter: "D", text: "warn Adaeze not to let the bird go yet" }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The details in sentences 1 and 2, the dew and the breath making small clouds, mainly create a mood that is —",
          choices: [
            { letter: "A", text: "tense and dangerous" },
            { letter: "B", text: "loud and crowded" },
            { letter: "C", text: "hot and lazy" },
            { letter: "D", text: "quiet and chilly" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-ri-c62-arctictern",
      family: "G10",
      title: "Chasing the Summer",
      kind: "Informational · 10.RI",
      blurb: "The Arctic tern flies from one end of the world to the other, every single year.",
      level: 1,
      passage:
        "<p>" + N(1) + "The Arctic tern, a small gray-and-white seabird, makes the longest yearly migration of any animal on Earth. " +
        N(2) + "Each year it flies from its nesting grounds in the Arctic to the edge of Antarctica and back again. " +
        N(3) + "Because the birds do not fly in a straight line, a single round trip can cover more than 40,000 miles. " +
        N(4) + "Researchers learned this by attaching tiny tracking devices, weighing about as much as a paper clip, to the terns' legs. " +
        N(5) + "The data showed that terns follow winding, S-shaped paths that take advantage of wind patterns over the ocean. " +
        N(6) + "Over a lifetime of about thirty years, one tern may travel a distance equal to three trips to the moon and back. " +
        N(7) + "The reward for all this flying is light: by following the summer at both ends of the world, terns see more daylight than any other creature." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "What is the main idea of the passage about the Arctic tern?",
          choices: [
            { letter: "A", text: "Tracking devices have become small enough to fit on the legs of birds." },
            { letter: "B", text: "Arctic terns live much longer than most other kinds of seabirds do." },
            { letter: "C", text: "The Arctic tern makes an astonishing migration that scientists have tracked." },
            { letter: "D", text: "Wind patterns over the ocean shift from one year to the next." }
          ],
          correct: "C"
        },
        {
          id: "sshape",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the passage, why do terns fly winding, S-shaped paths?",
          choices: [
            { letter: "A", text: "to make use of ocean winds" },
            { letter: "B", text: "to avoid storms near the poles" },
            { letter: "C", text: "to stay close to their flock" },
            { letter: "D", text: "to search for fishing boats" }
          ],
          correct: "A"
        },
        {
          id: "moon",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author compares a tern's lifetime of travel to trips to the moon mainly to —",
          choices: [
            { letter: "A", text: "suggest that terns can fly into space" },
            { letter: "B", text: "help readers grasp an enormous distance" },
            { letter: "C", text: "compare terns with astronauts" },
            { letter: "D", text: "show that the research is uncertain" }
          ],
          correct: "B"
        },
        {
          id: "method",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "How does sentence 4 relate to sentences 5 and 6 of the tern passage?",
          choices: [
            { letter: "A", text: "It argues against the findings that come after it." },
            { letter: "B", text: "It gives an example of a different kind of bird." },
            { letter: "C", text: "It states a problem that the next sentences solve." },
            { letter: "D", text: "It explains how their findings were gathered." }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "The author's main purpose in the passage about the Arctic tern is to —",
          choices: [
            { letter: "A", text: "persuade readers to protect seabird nests" },
            { letter: "B", text: "tell a story about one particular tern" },
            { letter: "C", text: "inform readers about a remarkable migration" },
            { letter: "D", text: "explain how tracking devices are built" }
          ],
          correct: "C"
        },
        {
          id: "attitude",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The author's attitude toward the Arctic tern is best described as —",
          choices: [
            { letter: "A", text: "doubtful" },
            { letter: "B", text: "indifferent" },
            { letter: "C", text: "worried" },
            { letter: "D", text: "admiring" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-rv-c62-musiccart",
      family: "G10",
      title: "The Music Cart",
      kind: "Vocabulary · 10.RV",
      blurb: "A teen volunteer brings small instruments to a hospital's rehabilitation wing.",
      level: 3,
      passage:
        "<p>" + N(1) + "On Wednesday evenings, Lucía rolls a cart of small instruments, a ukulele, two shakers and a hand drum, through the rehabilitation wing, where patients are <strong>convalescing</strong> after surgery and slowly regaining their strength. " +
        N(2) + "The volunteer program asks her to be <strong>unobtrusive</strong>: she knocks softly, offers once, and leaves quietly if a patient says no. " +
        N(3) + "Most nights her first notes are <strong>tentative</strong>, plucked so softly she can barely hear them over the <strong>ambient</strong> hum of monitors and carts. " +
        N(4) + "But a patient in room 12 always asks for the same old ballad, and he taps the bed rail along with it. " +
        N(5) + "He told her once that the song was a <strong>reprieve</strong>, a short break from thinking about his knee. " +
        N(6) + "Lucía finds her own <strong>solace</strong> in that rhythm; after a stressful week of exams, the tapping steadies her too." +
        "</p>",
      claims: [
        {
          id: "convalescing",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which phrase in sentence 1 best helps the reader understand the meaning of convalescing?",
          choices: [
            { letter: "A", text: "On Wednesday evenings" },
            { letter: "B", text: "rolls a cart of small instruments" },
            { letter: "C", text: "slowly regaining their strength" },
            { letter: "D", text: "through the rehabilitation wing" }
          ],
          correct: "C"
        },
        {
          id: "unobtrusive",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word unobtrusive begins with the prefix un-, meaning \"not.\" Based on this and sentence 2, an unobtrusive volunteer is one who —",
          choices: [
            { letter: "A", text: "does not push in or draw attention" },
            { letter: "B", text: "does not know how to play music" },
            { letter: "C", text: "does not follow the program's rules" },
            { letter: "D", text: "does not visit the same room twice" }
          ],
          correct: "A"
        },
        {
          id: "tentative",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The author could have called Lucía's first notes shy instead of tentative. Compared with shy, tentative suggests notes that are —",
          choices: [
            { letter: "A", text: "embarrassed and blushing red" },
            { letter: "B", text: "hesitant, as if testing the room" },
            { letter: "C", text: "careless and badly out of tune" },
            { letter: "D", text: "rude and unwelcome to patients" }
          ],
          correct: "B"
        },
        {
          id: "ambient",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word ambient comes from a Latin word meaning \"to go around.\" Based on this, the ambient hum in sentence 3 is —",
          choices: [
            { letter: "A", text: "a song that Lucía plays at each door" },
            { letter: "B", text: "an alarm that calls nurses to a room" },
            { letter: "C", text: "a sound coming only from room 12" },
            { letter: "D", text: "background sound that surrounds the wing" }
          ],
          correct: "D"
        },
        {
          id: "reprieve",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "As used in sentence 5, the word reprieve most nearly means —",
          choices: [
            { letter: "A", text: "a painful memory" },
            { letter: "B", text: "a lasting cure" },
            { letter: "C", text: "a temporary relief" },
            { letter: "D", text: "a favorite tune" }
          ],
          correct: "C"
        },
        {
          id: "solace",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentence 6 reveals that Lucía —",
          choices: [
            { letter: "A", text: "plans to quit volunteering after exams" },
            { letter: "B", text: "gains comfort from the visits herself" },
            { letter: "C", text: "prefers playing for nurses over patients" },
            { letter: "D", text: "worries that the tapping bothers others" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-dsr-c62-pollinators",
      family: "G10",
      title: "Wild on Purpose",
      kind: "Paired texts · 10.DSR",
      blurb: "A garden-center flyer gives advice about helping pollinators; a science club tries it.",
      level: 1,
      passage:
        "<p><strong>Text 1 — From a garden center flyer</strong></p>" +
        "<p>" + N(1) + "Bees, butterflies, beetles and other animals help pollinate about three out of every four of the world's leading food crops. " +
        N(2) + "You can help these hard-working pollinators right in your own backyard. " +
        N(3) + "Plant flowers that bloom at different times, from early spring to late fall, so insects always have food. " +
        N(4) + "Choose native plants whenever possible, and never spray pesticides on flowers that are open.</p>" +
        "<p><strong>Text 2 — From the Westbrook High science club blog</strong></p>" +
        "<p>" + N(5) + "Last spring, our club turned a strip of lawn behind the gym into a pollinator patch. " +
        N(6) + "We planted purple coneflower, bee balm and goldenrod so that something would bloom in every season. " +
        N(7) + "By August, we counted eleven kinds of bees in a single afternoon. " +
        N(8) + "The hardest part was convincing the grounds crew not to mow it. " +
        N(9) + "We finally made a sign: \"Wild on Purpose.\"</p>",
      claims: [
        {
          id: "both",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which idea do the garden flyer and the club blog both support?",
          choices: [
            { letter: "A", text: "Pesticides are safe if gardeners use them carefully." },
            { letter: "B", text: "Grounds crews should stop mowing school lawns." },
            { letter: "C", text: "Flowers that bloom across the seasons help pollinators." },
            { letter: "D", text: "Bees are the only pollinators worth protecting." }
          ],
          correct: "C"
        },
        {
          id: "action",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does the science club put the advice in sentence 3 of Text 1 into action?",
          choices: [
            { letter: "A", text: "It chooses plants so that something blooms in every season." },
            { letter: "B", text: "It counts the kinds of bees in a single afternoon." },
            { letter: "C", text: "It makes a sign to explain the garden to the school." },
            { letter: "D", text: "It asks the grounds crew to stop using pesticides." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The flyer and the blog differ mainly in that Text 2 —",
          choices: [
            { letter: "A", text: "gives general advice to all gardeners" },
            { letter: "B", text: "argues that native plants are a mistake" },
            { letter: "C", text: "lists facts about the world's food crops" },
            { letter: "D", text: "reports what happened in one group's project" }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Select TWO sentences from Text 2 that describe a result or a challenge that Text 1 does not mention. Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Compared with the garden flyer, the tone of the club blog is more —",
          choices: [
            { letter: "A", text: "formal and very scientific" },
            { letter: "B", text: "personal and lighthearted" },
            { letter: "C", text: "angry and demanding" },
            { letter: "D", text: "worried and quite gloomy" }
          ],
          correct: "B"
        },
        {
          id: "sign",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "The club's sign in sentence 9, Wild on Purpose, mainly tells readers that the patch —",
          choices: [
            { letter: "A", text: "is meant to look natural, not neglected" },
            { letter: "B", text: "is dangerous because of the bees" },
            { letter: "C", text: "will be mowed at the end of summer" },
            { letter: "D", text: "belongs to the grounds crew now" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c62-birdcount",
      family: "G10",
      title: "Backyard Bird Count Instructions",
      kind: "Functional text · 10.RI",
      blurb: "The rules for a weekend bird count: how to watch, how to tally, how to submit.",
      level: 2,
      passage:
        "<p><strong>How to Count.</strong> " + N(1) + "Choose one spot and watch for at least fifteen minutes. " +
        N(2) + "Record only birds you can identify with confidence; if you are unsure, write \"unknown sparrow\" or \"unknown hawk\" instead of guessing. " +
        "<strong>Avoiding Double Counts.</strong> " + N(3) + "Do not add up every bird you see over the whole watch. " +
        N(4) + "Instead, for each species, write down the largest number you see at one time. " +
        N(5) + "If four cardinals visit, leave, and then two return, record four, not six. " +
        "<strong>Submitting.</strong> " + N(6) + "Enter your tally on the count website by Monday at midnight, including your location, the date and how long you watched. " +
        N(7) + "Lists without a watch time cannot be used, because scientists compare counts by effort as well as by totals." +
        "</p>",
      claims: [
        {
          id: "unsure",
          sol: "10.RV.1.E",
          sub: "10.RV.1.E.2",
          stem: "In sentence 2, the phrase with confidence most nearly means —",
          choices: [
            { letter: "A", text: "with certainty" },
            { letter: "B", text: "with a partner" },
            { letter: "C", text: "with binoculars" },
            { letter: "D", text: "with great speed" }
          ],
          correct: "A"
        },
        {
          id: "example",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Sentence 5 of the bird count instructions serves mainly to —",
          choices: [
            { letter: "A", text: "introduce a new rule just for cardinals" },
            { letter: "B", text: "explain how to submit a finished tally" },
            { letter: "C", text: "give an example that clarifies sentence 4" },
            { letter: "D", text: "warn counters against guessing at birds" }
          ],
          correct: "C"
        },
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the bird count instructions?",
          choices: [
            { letter: "A", text: "Count only birds that visit a feeder more than once." },
            { letter: "B", text: "Watch one spot, count carefully, and submit a complete tally." },
            { letter: "C", text: "Identify every bird you see, even if you must guess." },
            { letter: "D", text: "Add up all the birds you see during the weekend." }
          ],
          correct: "B"
        },
        {
          id: "effort",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The instructions include the reason in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "show that late lists will be rejected" },
            { letter: "B", text: "explain why the watch time is required" },
            { letter: "C", text: "suggest that longer watches are better" },
            { letter: "D", text: "describe how scientists identify birds" }
          ],
          correct: "B"
        },
        {
          id: "audience",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.1",
          stem: "The bird count instructions are written mainly for —",
          choices: [
            { letter: "A", text: "scientists who design bird studies" },
            { letter: "B", text: "pet owners who keep caged birds" },
            { letter: "C", text: "students writing reports on cardinals" },
            { letter: "D", text: "volunteers taking part in a bird count" }
          ],
          correct: "D"
        },
        {
          id: "jays",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.2",
          stem: "A counter sees three blue jays at the feeder, and later sees five blue jays together. Based on the instructions, what should she record?",
          choices: [
            { letter: "A", text: "three blue jays" },
            { letter: "B", text: "eight blue jays" },
            { letter: "C", text: "two blue jays" },
            { letter: "D", text: "five blue jays" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-rl-c62-chapternine",
      family: "G10",
      title: "Chapter Nine",
      kind: "Literary · 10.RL",
      blurb: "A teen volunteer reads aloud to a young patient who never seems to listen.",
      level: 3,
      passage:
        "<p>" + N(1) + "For three weeks, Yusuf had read to Bea every Thursday, and for three weeks she had listened with her face turned to the window. " +
        N(2) + "He did all the voices anyway: the pirate, the nervous parrot, the queen who spoke only in questions. " +
        N(3) + "Her mother said Bea had loved this book before the hospital; Yusuf was beginning to doubt it. " +
        N(4) + "This Thursday, halfway through chapter nine, he lost his place and skipped a page. " +
        N(5) + "\"That's wrong,\" Bea said, without turning her head. " +
        N(6) + "\"The parrot hasn't found the key yet.\" " +
        N(7) + "Yusuf turned back, slowly, and found she was right. " +
        N(8) + "He held out the book. " +
        N(9) + "For a long moment she only looked at it. " +
        N(10) + "Then she took it in both hands, cleared her throat, and gave the parrot a voice far more nervous than his had ever been." +
        "</p>",
      claims: [
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the turning point in Yusuf's visits with Bea?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        },
        {
          id: "window",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "In sentence 1, Bea's face turned to the window mainly suggests that she —",
          choices: [
            { letter: "A", text: "seems withdrawn and uninterested" },
            { letter: "B", text: "is waiting for her mother to arrive" },
            { letter: "C", text: "dislikes Yusuf's choice of book" },
            { letter: "D", text: "is too sick to hear the story" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which detail in the story about Yusuf and Bea is most ironic?",
          choices: [
            { letter: "A", text: "Yusuf does all the voices even though no one has asked him to." },
            { letter: "B", text: "Bea, who seemed not to listen, knows the story better than he does." },
            { letter: "C", text: "Bea's mother says that Bea once loved this very book." },
            { letter: "D", text: "The queen in the book speaks only in questions to the others." }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "What theme does the story of Yusuf and Bea develop?",
          choices: [
            { letter: "A", text: "Children prefer reading alone to being read to." },
            { letter: "B", text: "Hospital volunteers should choose shorter books." },
            { letter: "C", text: "Mistakes are always embarrassing for the reader." },
            { letter: "D", text: "Patient effort can reach someone who seems unreachable." }
          ],
          correct: "D"
        },
        {
          id: "doubt",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author includes Yusuf's doubt in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "show that Bea's mother is not truthful" },
            { letter: "B", text: "explain why Yusuf skipped a page" },
            { letter: "C", text: "suggest that Yusuf will stop visiting" },
            { letter: "D", text: "make Bea's reaction more surprising" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The final sentence of the story about Yusuf and Bea mainly creates a mood of —",
          choices: [
            { letter: "A", text: "quiet delight" },
            { letter: "B", text: "nervous fear" },
            { letter: "C", text: "lonely sadness" },
            { letter: "D", text: "bitter regret" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c62-whalesong",
      family: "G10",
      title: "A Song That Keeps Changing",
      kind: "Informational · 10.RI",
      blurb: "Male humpback whales share one song across an ocean, and then they rewrite it.",
      level: 2,
      passage:
        "<p>" + N(1) + "Male humpback whales sing some of the longest and most complex songs in the animal kingdom. " +
        N(2) + "A single song, built from repeating phrases of moans, cries and whoops, can last twenty minutes, and a whale may repeat it for hours. " +
        N(3) + "Strangely, all the males in one ocean region sing nearly the same song. " +
        N(4) + "Even more strangely, that song changes over time. " +
        N(5) + "Each season, the singers add new phrases and drop old ones, so the song slowly evolves, like a tune passed around and revised. " +
        N(6) + "In the South Pacific, researchers have tracked new songs spreading from east to west across thousands of miles, each population picking up its neighbors' tune within a year or two. " +
        N(7) + "Why the whales sing is still debated. " +
        N(8) + "Most scientists think the songs help attract mates or signal to other males, but no explanation yet accounts for why the song must keep changing." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the passage about humpback songs?",
          choices: [
            { letter: "A", text: "Humpback songs are long, but scientists rarely study them." },
            { letter: "B", text: "Humpback songs are complex, shared and always changing, though their purpose is debated." },
            { letter: "C", text: "Humpbacks in the South Pacific sing louder than humpbacks anywhere else in the world." },
            { letter: "D", text: "Humpback males sing only to warn other whales away from their feeding grounds." }
          ],
          correct: "B"
        },
        {
          id: "strangely",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author begins sentences 3 and 4 with Strangely and Even more strangely mainly to —",
          choices: [
            { letter: "A", text: "build toward the passage's most surprising facts" },
            { letter: "B", text: "suggest that the research cannot be trusted" },
            { letter: "C", text: "compare humpbacks with other singing animals" },
            { letter: "D", text: "show that the author dislikes the songs" }
          ],
          correct: "A"
        },
        {
          id: "spread",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which detail best supports the idea that whale songs are passed from one population to another?",
          choices: [
            { letter: "A", text: "A single song can last as long as twenty minutes." },
            { letter: "B", text: "Each song is made of moans, cries and whoops." },
            { letter: "C", text: "New songs spread east to west across the South Pacific." },
            { letter: "D", text: "Most scientists think the songs help attract mates." }
          ],
          correct: "C"
        },
        {
          id: "theory",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which statement in the humpback passage is presented as a theory rather than an established fact?",
          choices: [
            { letter: "A", text: "Songs help attract mates or signal to other males." },
            { letter: "B", text: "All the males in one region sing nearly the same song." },
            { letter: "C", text: "Singers add new phrases and drop old ones each season." },
            { letter: "D", text: "A whale may repeat a song for hours." }
          ],
          correct: "A"
        },
        {
          id: "evolves",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 5, the word evolves most nearly means —",
          choices: [
            { letter: "A", text: "grows much louder" },
            { letter: "B", text: "repeats exactly" },
            { letter: "C", text: "fades slowly away" },
            { letter: "D", text: "changes gradually" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The author's tone in sentences 7 and 8 is best described as —",
          choices: [
            { letter: "A", text: "confident and final" },
            { letter: "B", text: "bored and dismissive" },
            { letter: "C", text: "curious and uncertain" },
            { letter: "D", text: "angry and accusing" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-rv-c62-dragonflies",
      family: "G10",
      title: "Hunters on Four Wings",
      kind: "Vocabulary · 10.RV",
      blurb: "Six words about the dragonfly, from its years underwater to its few weeks in the air.",
      level: 2,
      passage:
        "<p>" + N(1) + "Dragonflies are among the most <strong>agile</strong> fliers on Earth, able to hover, dart sideways and even fly backward. " +
        N(2) + "Each of their four <strong>transparent</strong> wings can move on its own, which gives them remarkable control. " +
        N(3) + "They are also skilled hunters; studies have found that some dragonflies catch more than nine out of ten of the insects they chase. " +
        N(4) + "A single <strong>voracious</strong> dragonfly may eat dozens or even hundreds of mosquitoes in a day, swallowing prey almost as fast as it catches it. " +
        N(5) + "Before it takes to the air, though, a dragonfly spends months or even years underwater as a nymph. " +
        N(6) + "Its <strong>transformation</strong> into a winged adult often happens in a single morning, when the nymph climbs a reed, splits its skin and slowly unfolds. " +
        N(7) + "Its life as an <strong>aerial</strong> hunter may last only a few weeks." +
        "</p>",
      claims: [
        {
          id: "agile",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 1, the word agile most nearly means —",
          choices: [
            { letter: "A", text: "large and heavy" },
            { letter: "B", text: "quick and nimble" },
            { letter: "C", text: "brightly colored" },
            { letter: "D", text: "loud and buzzing" }
          ],
          correct: "B"
        },
        {
          id: "transparent",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word transparent contains the prefix trans-, meaning \"through,\" and a root meaning \"to appear.\" Based on this, transparent wings are wings that —",
          choices: [
            { letter: "A", text: "can be seen through" },
            { letter: "B", text: "change color in light" },
            { letter: "C", text: "move back and forth" },
            { letter: "D", text: "fold up when resting" }
          ],
          correct: "A"
        },
        {
          id: "voracious",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The author could have called the dragonfly hungry instead of voracious in sentence 4. Compared with hungry, voracious suggests an appetite that is —",
          choices: [
            { letter: "A", text: "picky and easily satisfied" },
            { letter: "B", text: "slow and patient" },
            { letter: "C", text: "weak after a long flight" },
            { letter: "D", text: "huge and hard to satisfy" }
          ],
          correct: "D"
        },
        {
          id: "transformation",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 6, the word transformation most nearly means —",
          choices: [
            { letter: "A", text: "a long period of rest" },
            { letter: "B", text: "a dangerous climb upward" },
            { letter: "C", text: "a complete change in form" },
            { letter: "D", text: "a quick escape from danger" }
          ],
          correct: "C"
        },
        {
          id: "aerial",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word aerial shares a root with aerospace and aerobic, a root meaning \"air.\" Based on this, an aerial hunter is one that —",
          choices: [
            { letter: "A", text: "hunts only at night" },
            { letter: "B", text: "hunts beneath the water" },
            { letter: "C", text: "hunts while flying" },
            { letter: "D", text: "hunts in large groups" }
          ],
          correct: "C"
        },
        {
          id: "though",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The word though in sentence 5 signals a shift in the dragonfly passage from —",
          choices: [
            { letter: "A", text: "the adult's hunting life to its early life underwater" },
            { letter: "B", text: "facts about wings to opinions about mosquitoes" },
            { letter: "C", text: "a problem with dragonflies to a possible solution" },
            { letter: "D", text: "a description of nymphs to a list of predators" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-dsr-c62-hummingbirds",
      family: "G10",
      title: "The Feeder Question",
      kind: "Paired texts · 10.DSR",
      blurb: "A wildlife newsletter tests an old rule about hummingbird feeders; a reader tests it too.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From a regional wildlife newsletter</strong></p>" +
        "<p>" + N(1) + "Many people believe that leaving a hummingbird feeder up in autumn will tempt the birds to skip migration and freeze. " +
        N(2) + "Researchers say this worry is unfounded. " +
        N(3) + "Hummingbirds begin migrating when shortening daylight triggers changes in their bodies, not when food runs out. " +
        N(4) + "A late feeder may actually help a straggler refuel on its way south. " +
        N(5) + "Keep feeders clean and filled until about two weeks after you see your last visitor.</p>" +
        "<p><strong>Text 2 — A reader's letter to the newsletter</strong></p>" +
        "<p>" + N(6) + "My grandmother always took her feeders down on the first of September \"so the birds would know to leave.\" " +
        N(7) + "I followed her rule for twenty years. " +
        N(8) + "This fall, after reading your article, I left mine up. " +
        N(9) + "A worn-looking female visited daily until October 3, then vanished. " +
        N(10) + "I like to think she left stronger than she arrived. " +
        N(11) + "Grandmother, I suspect, would have approved, as long as she didn't have to admit it.</p>",
      claims: [
        {
          id: "respond",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does Text 2 respond to the claim in sentence 2 of Text 1?",
          choices: [
            { letter: "A", text: "It argues that the researchers are wrong." },
            { letter: "B", text: "It describes a test whose outcome fits the claim." },
            { letter: "C", text: "It asks the newsletter for more evidence." },
            { letter: "D", text: "It ignores the claim and discusses feeders." }
          ],
          correct: "B"
        },
        {
          id: "belief",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which sentence from Text 2 describes the belief that Text 1 calls unfounded?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The newsletter article and the reader's letter differ mainly in that Text 1 relies on —",
          choices: [
            { letter: "A", text: "family tradition, while Text 2 relies on research" },
            { letter: "B", text: "humor, while Text 2 relies on statistics" },
            { letter: "C", text: "research, while Text 2 relies on personal observation" },
            { letter: "D", text: "photographs, while Text 2 relies on interviews" }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Select TWO sentences from Text 2 that are consistent with the advice and research in Text 1. Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The tone of sentence 11 in the reader's letter is best described as —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "formal and scientific" },
            { letter: "C", text: "anxious and fearful" },
            { letter: "D", text: "fond and gently humorous" }
          ],
          correct: "D"
        },
        {
          id: "unfounded",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 2, the word unfounded most nearly means —",
          choices: [
            { letter: "A", text: "widely shared" },
            { letter: "B", text: "recently discovered" },
            { letter: "C", text: "not based on fact" },
            { letter: "D", text: "too hard to test" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-rl-c62-stranding",
      family: "G10",
      title: "Half the Job",
      kind: "Literary · 10.RL",
      blurb: "A young dolphin stranded on a sandbar, a falling tide, and one bucket.",
      level: 1,
      passage:
        "<p>" + N(1) + "The call came at dawn: a young dolphin had stranded on the sandbar near the jetty. " +
        N(2) + "By the time Haruto arrived with the rescue team, the tide was going out fast. " +
        N(3) + "The team leader, Rosa, handed him a bucket. " +
        N(4) + "\"Keep her skin wet,\" she said, \"but never pour water near the blowhole.\" " +
        N(5) + "For two hours Haruto scooped and poured, scooped and poured, while the others dug a trench beside the dolphin and slid a soft sling underneath her. " +
        N(6) + "His arms ached, and his sneakers filled with sand. " +
        N(7) + "When the tide finally turned, eight people lifted the sling together and walked the dolphin into deeper water. " +
        N(8) + "She rocked once, twice, and then slid forward under her own power. " +
        N(9) + "Haruto realized his hands were shaking. " +
        N(10) + "Rosa patted his shoulder. " +
        N(11) + "\"That bucket,\" she said, \"is half the job.\"" +
        "</p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The central conflict of the stranding story is best described as a struggle between —",
          choices: [
            { letter: "A", text: "Haruto and Rosa over who should be in charge" },
            { letter: "B", text: "the rescue team and a crowd of curious onlookers" },
            { letter: "C", text: "the rescuers and the time the dolphin has left" },
            { letter: "D", text: "Haruto and his own fear of the deep ocean" }
          ],
          correct: "C"
        },
        {
          id: "haruto",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 5 and 6 characterize Haruto as —",
          choices: [
            { letter: "A", text: "hardworking and determined" },
            { letter: "B", text: "careless and distracted" },
            { letter: "C", text: "bossy toward the others" },
            { letter: "D", text: "eager to quit early" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by the story of the stranded dolphin?",
          choices: [
            { letter: "A", text: "Dangerous rescues should be left to adults." },
            { letter: "B", text: "Wild animals rarely survive being stranded." },
            { letter: "C", text: "Leaders should always do the hardest work." },
            { letter: "D", text: "Simple, repeated tasks matter in a shared effort." }
          ],
          correct: "D"
        },
        {
          id: "repeat",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The author repeats scooped and poured in sentence 5 mainly to —",
          choices: [
            { letter: "A", text: "show that Haruto is doing the job wrong" },
            { letter: "B", text: "emphasize how long and repetitive the work is" },
            { letter: "C", text: "suggest that the bucket has a hole in it" },
            { letter: "D", text: "explain how a sling is placed under a dolphin" }
          ],
          correct: "B"
        },
        {
          id: "shaking",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "The detail in sentence 9 that Haruto's hands were shaking mainly suggests that he —",
          choices: [
            { letter: "A", text: "is cold from the wind off the water" },
            { letter: "B", text: "is overcome with feeling now that it is over" },
            { letter: "C", text: "has hurt his arm lifting the heavy sling" },
            { letter: "D", text: "is afraid that Rosa is angry with him" }
          ],
          correct: "B"
        },
        {
          id: "halfjob",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Rosa's remark in sentence 11, That bucket is half the job, is best described as —",
          choices: [
            { letter: "A", text: "understated praise" },
            { letter: "B", text: "a sharp warning" },
            { letter: "C", text: "a sarcastic joke" },
            { letter: "D", text: "an angry complaint" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c62-locusts",
      family: "G10",
      title: "From Grasshopper to Swarm",
      kind: "Informational · 10.RI",
      blurb: "How crowding turns a shy desert grasshopper into part of a swarm of billions.",
      level: 3,
      passage:
        "<p>" + N(1) + "Most of the time, the desert locust is an ordinary, solitary grasshopper: green, shy and inclined to avoid others of its kind. " +
        N(2) + "But when rain brings a burst of plant growth followed by drought, many locusts end up crowded onto the few remaining patches of green. " +
        N(3) + "Constant bumping against one another's hind legs triggers a remarkable change. " +
        N(4) + "Within hours, the insects begin to seek each other out; over a few generations, they turn yellow and black, grow stronger flight muscles, and march and fly together. " +
        N(5) + "A single swarm can contain billions of insects and eat as much food in a day as millions of people. " +
        N(6) + "Because swarms can cross entire countries, agencies now watch rainfall and plant growth by satellite, hoping to spot crowding before a swarm forms. " +
        N(7) + "Early warning is crucial: stopping a few small groups costs far less than fighting a swarm." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the passage about desert locusts?",
          choices: [
            { letter: "A", text: "Desert locusts are green and shy and avoid one another." },
            { letter: "B", text: "Crowding turns locusts into swarms, so experts watch for it early." },
            { letter: "C", text: "Satellites are the most useful tools ever invented for farmers." },
            { letter: "D", text: "Swarms of locusts eat more food than any country can grow." }
          ],
          correct: "B"
        },
        {
          id: "cause",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Sentences 2 through 4 of the locust passage are organized mainly as —",
          choices: [
            { letter: "A", text: "a description of one locust's daily routine" },
            { letter: "B", text: "a comparison of locusts with other grasshoppers" },
            { letter: "C", text: "a series of causes leading to an effect" },
            { letter: "D", text: "an argument followed by a counterargument" }
          ],
          correct: "C"
        },
        {
          id: "trigger",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the passage, what directly triggers the change in the locusts?",
          choices: [
            { letter: "A", text: "the color of the plants they eat" },
            { letter: "B", text: "a sudden drop in temperature" },
            { letter: "C", text: "signals sent by older locusts" },
            { letter: "D", text: "constant bumping of their hind legs" }
          ],
          correct: "D"
        },
        {
          id: "shy",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author describes the solitary locust as shy in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "sharpen the contrast with its later swarming" },
            { letter: "B", text: "show that locusts make good classroom pets" },
            { letter: "C", text: "explain why locusts are colored green" },
            { letter: "D", text: "suggest that locusts are easily frightened" }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The author's attitude toward early-warning efforts against locusts is best described as —",
          choices: [
            { letter: "A", text: "doubtful" },
            { letter: "B", text: "dismissive" },
            { letter: "C", text: "neutral" },
            { letter: "D", text: "approving" }
          ],
          correct: "D"
        },
        {
          id: "solitary",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word solitary shares a root with solo and solitude. That root most nearly means —",
          choices: [
            { letter: "A", text: "alone" },
            { letter: "B", text: "ground" },
            { letter: "C", text: "sun" },
            { letter: "D", text: "quiet" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c62-swifts",
      family: "G10",
      title: "The Chimney",
      kind: "Literary · 10.RL",
      blurb: "Every September, Thandi walks her grandfather to the old school to watch the swifts go down.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every September, Thandi's grandfather insisted on walking to the old brick school at sunset, and every September, Thandi went along, mostly to keep him from tripping on the curb. " +
        N(2) + "Tonight hundreds of chimney swifts circled above the school, chattering in a loose, wheeling funnel. " +
        N(3) + "\"They're leaving soon,\" he said. " +
        N(4) + "The funnel tightened and spun faster; then, as if someone had pulled a plug, the birds poured down into the chimney, the last few dropping in like latecomers slipping into a theater. " +
        N(5) + "The sky was suddenly, completely empty. " +
        N(6) + "\"Next year,\" her grandfather said, \"you'll have to tell me if they came back.\" " +
        N(7) + "Thandi started to laugh, thinking he meant his eyes; then she saw his face and understood he did not mean his eyes at all. " +
        N(8) + "She took his arm, and they walked home slowly, though the curb was not the reason." +
        "</p>",
      claims: [
        {
          id: "duty",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentence 1 suggests that, at the start, Thandi goes on the walks mainly —",
          choices: [
            { letter: "A", text: "because she loves watching birds" },
            { letter: "B", text: "out of duty to keep her grandfather safe" },
            { letter: "C", text: "to visit her old school building" },
            { letter: "D", text: "because her parents force her to go" }
          ],
          correct: "B"
        },
        {
          id: "theater",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 4, comparing the last swifts to latecomers slipping into a theater mainly suggests that they —",
          choices: [
            { letter: "A", text: "are lost and cannot find the chimney" },
            { letter: "B", text: "are noisier than the rest of the flock" },
            { letter: "C", text: "hurry in quietly just after the others" },
            { letter: "D", text: "refuse to follow the rest of the birds" }
          ],
          correct: "C"
        },
        {
          id: "realize",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Sentence 7 functions in the swift story as —",
          choices: [
            { letter: "A", text: "the moment Thandi grasps what he really means" },
            { letter: "B", text: "a flashback to an earlier September walk" },
            { letter: "C", text: "the introduction of a new character to the story" },
            { letter: "D", text: "a joke that relieves the story's tension" }
          ],
          correct: "A"
        },
        {
          id: "empty",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "Sentence 5, The sky was suddenly, completely empty, mainly creates a mood of —",
          choices: [
            { letter: "A", text: "excitement and celebration" },
            { letter: "B", text: "danger and alarm" },
            { letter: "C", text: "boredom and impatience" },
            { letter: "D", text: "stillness and loss" }
          ],
          correct: "D"
        },
        {
          id: "curb",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The final phrase of the swift story, though the curb was not the reason, gives the ending a tone that is —",
          choices: [
            { letter: "A", text: "playful and joking" },
            { letter: "B", text: "angry and quite bitter" },
            { letter: "C", text: "tender and thoughtful" },
            { letter: "D", text: "cold and very distant" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "The story of Thandi and her grandfather best develops which theme?",
          choices: [
            { letter: "A", text: "Old buildings should be saved for wildlife." },
            { letter: "B", text: "Young people rarely listen to their elders." },
            { letter: "C", text: "Birds always return to the same place." },
            { letter: "D", text: "Ordinary rituals grow precious when they may end." }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
