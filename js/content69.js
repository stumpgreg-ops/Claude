/* SOL Labyrinth — v5.15 expansion: Grade 10, medium tier (nights 21-50). 22 original packs on a neighborhood
 * block party, fictional inventors and patents, a marching band and a botanical garden. Original text only;
 * every inventor, musician and neighbor is invented. Loaded after content.js; pushes into HEIST_PACKS. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    {
      id: "g10-rl-c69-folding-tables",
      family: "G10",
      title: "The Last House on Calloway",
      kind: "Literary · 10.RL",
      blurb: "Ines has to borrow folding tables for the block party, and one door she would rather skip.",
      level: 1,
      passage:
        "<p>" + N(1) + "The block party on Calloway Street was three days away, and Ines had been given the worst job on the list: collecting folding tables. " +
        N(2) + "Her mother had written the assignment in green ink on the refrigerator calendar, right under \"buy ice,\" as if knocking on twelve strangers' doors were the same as stopping at a store. " +
        N(3) + "By Thursday afternoon Ines had six tables stacked in the garage and one house left, the narrow gray one at the end of the street. " +
        N(4) + "Everyone on Calloway knew that Mr. Haddad did not come to the block party; for nine summers his porch light had stayed off while the music played. " +
        N(5) + "She almost skipped him. " +
        N(6) + "Then she pictured her mother's list with one line left unchecked, and she climbed the cracked steps before she could change her mind. " +
        N(7) + "Mr. Haddad opened the door holding a crossword puzzle and a pencil, and he listened to her whole nervous speech without saying a word. " +
        N(8) + "\"I have two tables,\" he said finally, \"but they are heavy, and the legs stick.\" " +
        N(9) + "He paused, turning the pencil over in his fingers. " +
        N(10) + "\"If someone showed me where they go, I could carry them down myself.\" " +
        N(11) + "Standing on his porch, Ines realized that in nine years, nobody on the street had ever asked him for anything. " +
        N(12) + "On Saturday his two tables stood at the center of the block, loaded with his sister's date cookies, and his porch light burned until the last song ended." +
        "</p>",
      claims: [
        {
          id: "decide",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Which sentence best explains why Ines finally knocks on Mr. Haddad's door?",
          choices: [
            { letter: "A", text: "Sentence 3, because it says she has six tables already" },
            { letter: "B", text: "Sentence 4, because it says he skips the party every year" },
            { letter: "C", text: "Sentence 6, because it shows she wants to finish the list" },
            { letter: "D", text: "Sentence 8, because it shows he owns two heavy tables" }
          ],
          correct: "C"
        },
        {
          id: "haddad",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Mr. Haddad's offer in sentence 10 characterizes him as someone who —",
          choices: [
            { letter: "A", text: "wants to take part but has been waiting to be included" },
            { letter: "B", text: "prefers to lend things rather than attend events" },
            { letter: "C", text: "is annoyed that Ines interrupted his crossword puzzle" },
            { letter: "D", text: "worries that his old tables will be damaged" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme does the story of the Calloway Street tables most clearly develop?",
          choices: [
            { letter: "A", text: "Children should not be given chores meant for adults." },
            { letter: "B", text: "Neighbors who keep to themselves rarely change." },
            { letter: "C", text: "Large parties are harder to plan than they look." },
            { letter: "D", text: "A simple request can draw a person into a community." }
          ],
          correct: "D"
        },
        {
          id: "store",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In sentence 2, the comparison between knocking on doors and stopping at a store suggests that Ines feels her mother —",
          choices: [
            { letter: "A", text: "forgot to buy the ice for the party" },
            { letter: "B", text: "underestimates how hard the task will be" },
            { letter: "C", text: "trusts the neighbors more than Ines does" },
            { letter: "D", text: "would rather shop than visit the neighbors" }
          ],
          correct: "B"
        },
        {
          id: "porch",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author mentions Mr. Haddad's porch light in both sentence 4 and sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "explain why the party ends so late at night" },
            { letter: "B", text: "suggest that Mr. Haddad cannot sleep through noise" },
            { letter: "C", text: "mark how much his place on the street has changed" },
            { letter: "D", text: "show that the street needs better lighting" }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The mood of the final sentence, with the tables and the cookies at the center of the block, is best described as —",
          choices: [
            { letter: "A", text: "tense and uncertain" },
            { letter: "B", text: "quiet and lonely" },
            { letter: "C", text: "busy and rushed" },
            { letter: "D", text: "warm and welcoming" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-ri-c69-patent-clock",
      family: "G10",
      title: "Twenty Years on the Clock",
      kind: "Informational · 10.RI",
      blurb: "What a patent actually protects, told through one invented inventor and her folding ladder.",
      level: 2,
      passage:
        "<p>" + N(1) + "Many people imagine a patent as a trophy, a framed certificate proving that someone was clever first. " +
        N(2) + "In fact, a patent is closer to a bargain between an inventor and the public. " +
        N(3) + "The inventor agrees to explain the invention fully, in writing and drawings clear enough that a skilled worker could build it. " +
        N(4) + "In exchange, the government grants the inventor the right to stop others from making or selling the invention for a limited time, usually about twenty years. " +
        N(5) + "Consider a fictional example. " +
        N(6) + "Suppose a carpenter named Delphine Okoro designs a ladder that folds into the width of a broom. " +
        N(7) + "If she keeps the hinge design secret, she may profit for a while, but a competitor could take one ladder apart and copy it legally. " +
        N(8) + "If she patents it, her drawings become public, yet no one may sell a copy without her permission until the term runs out. " +
        N(9) + "When the clock finally stops, the design belongs to everyone, and other builders are free to improve on it. " +
        N(10) + "This is why patent offices publish their records instead of locking them away. " +
        N(11) + "A student researching hinges today can read thousands of expired patents and learn, for free, what earlier inventors spent years figuring out. " +
        N(12) + "The system is not perfect; applications can be expensive, and examiners sometimes approve ideas that are not truly new. " +
        N(13) + "Still, the basic trade has lasted for centuries because it serves both sides: inventors get a head start, and the public eventually gets the knowledge." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the passage about the folding ladder and patents?",
          choices: [
            { letter: "A", text: "Patents are mainly awards that honor clever inventors." },
            { letter: "B", text: "A patent trades public knowledge for a limited period of protection." },
            { letter: "C", text: "Inventors are usually better off keeping their designs secret." },
            { letter: "D", text: "Patent offices approve too many ideas that are not new." }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 7 and 8, about Delphine's hinge design, organized?",
          choices: [
            { letter: "A", text: "as a comparison of two choices and their results" },
            { letter: "B", text: "as a list of steps in filing an application" },
            { letter: "C", text: "as a problem followed by a single solution" },
            { letter: "D", text: "as events told in the order they happened" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence best supports the claim that the public benefits from patents even before the twenty years end?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "C"
        },
        {
          id: "bargain",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 2, the word bargain most nearly means —",
          choices: [
            { letter: "A", text: "a low price paid for something" },
            { letter: "B", text: "an argument over who was first" },
            { letter: "C", text: "a reward given after a contest" },
            { letter: "D", text: "an agreement in which each side gives something" }
          ],
          correct: "D"
        },
        {
          id: "clock",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The phrase when the clock finally stops in sentence 9 mainly emphasizes that —",
          choices: [
            { letter: "A", text: "inventors must work quickly to finish their designs" },
            { letter: "B", text: "examiners take many years to review an application" },
            { letter: "C", text: "the inventor's protection lasts only for a set time" },
            { letter: "D", text: "Delphine's ladder will eventually wear out" }
          ],
          correct: "C"
        },
        {
          id: "student",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes the student researching hinges in sentence 11 mainly to —",
          choices: [
            { letter: "A", text: "show a present-day benefit of publishing patent records" },
            { letter: "B", text: "suggest that students should apply for patents" },
            { letter: "C", text: "warn that old patents contain outdated ideas" },
            { letter: "D", text: "prove that Delphine's ladder was not truly new" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c69-drumline",
      family: "G10",
      title: "Count Off",
      kind: "Literary · 10.RL",
      blurb: "A new snare drummer, a section leader who never smiles, and one rehearsal in the parking lot.",
      level: 2,
      passage:
        "<p>" + N(1) + "The drumline rehearsed in the far corner of the school parking lot, where the painted lines had faded to ghosts and the asphalt held the afternoon heat like a skillet. " +
        N(2) + "Wen had played snare for two years at his old school, so he expected the first week at Ridgemont to feel easy. " +
        N(3) + "It did not. " +
        N(4) + "Section leader Amara Nwosu stood at the end of the line with her sticks tucked under one arm and listened to each drummer alone, her face as unreadable as a closed book. " +
        N(5) + "When Wen finished his exercise, she said only, \"Again. Slower.\" " +
        N(6) + "He played it again, slower, and she nodded once and moved on without another word. " +
        N(7) + "For three days he replayed that nod in his head, trying to decide whether it meant good or barely acceptable. " +
        N(8) + "On Friday the line ran the opening of the halftime show, and halfway through the cadence the bass drums dragged, and the whole section began to come apart like a zipper. " +
        N(9) + "Wen kept his eyes on Amara's sticks and held the tempo she had made him practice, steady and a little slow, and the others found him the way swimmers find a rope. " +
        N(10) + "When the cutoff came, the parking lot went quiet. " +
        N(11) + "Amara walked down the line, stopped in front of Wen, and said, \"That's why we go slower.\" " +
        N(12) + "It was not exactly praise, but Wen decided it was better than praise; it was a reason." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of the drumline story?",
          choices: [
            { letter: "A", text: "Talented newcomers should be given leadership roles quickly." },
            { letter: "B", text: "Careful practice can prepare a person to steady others under pressure." },
            { letter: "C", text: "Leaders who rarely speak are usually unhappy with their teams." },
            { letter: "D", text: "Moving to a new school means starting one's skills over." }
          ],
          correct: "B"
        },
        {
          id: "amara",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 4 through 6 characterize Amara Nwosu as a section leader who —",
          choices: [
            { letter: "A", text: "openly favors drummers from her own school" },
            { letter: "B", text: "is unsure how to correct mistakes" },
            { letter: "C", text: "jokes to make new members comfortable" },
            { letter: "D", text: "is demanding and sparing with her words" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Sentences 2 and 3 create a contrast mainly between —",
          choices: [
            { letter: "A", text: "what Wen expects and what actually happens" },
            { letter: "B", text: "Wen's old school and the parking lot" },
            { letter: "C", text: "the snare drums and the bass drums" },
            { letter: "D", text: "Amara's words and her real opinion" }
          ],
          correct: "A"
        },
        {
          id: "rope",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In sentence 9, comparing the other drummers to swimmers who find a rope suggests that Wen's steady playing —",
          choices: [
            { letter: "A", text: "makes the others feel embarrassed" },
            { letter: "B", text: "drowns out the sound of the bass drums" },
            { letter: "C", text: "gives the struggling section something to hold on to" },
            { letter: "D", text: "pulls the section ahead of the correct tempo" }
          ],
          correct: "C"
        },
        {
          id: "reason",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "In sentence 12, Wen calls Amara's remark a reason rather than praise. Compared with praise, a reason suggests something that —",
          choices: [
            { letter: "A", text: "is meant to flatter him in front of others" },
            { letter: "B", text: "explains the purpose behind the hard work" },
            { letter: "C", text: "criticizes him for playing too slowly" },
            { letter: "D", text: "will be forgotten by the next rehearsal" }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the turning point in Wen's first week at Ridgemont?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-rl-c69-palm-house",
      family: "G10",
      title: "Palm House, Closing Time",
      kind: "Poetry · 10.RL",
      blurb: "A garden worker walks the glasshouse after the visitors leave.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "When the last school bus has pulled away<br>" +
        L(2) + "and the gift shop lights blink out in rows,<br>" +
        L(3) + "I walk the palm house with my hose<br>" +
        L(4) + "like a night nurse making rounds.<br>" +
        L(5) + "The ferns lean toward me, patient patients,<br>" +
        L(6) + "the orchids hold their breath in jars of air,<br>" +
        L(7) + "and the old banana tree, taller than the doors,<br>" +
        L(8) + "rattles its torn flags at no one.<br>" +
        L(9) + "All day the children pressed their faces here<br>" +
        L(10) + "and asked if any of it was real.<br>" +
        L(11) + "Now, with the glass gone black above me,<br>" +
        L(12) + "I hear the drip and the slow tick of the heaters<br>" +
        L(13) + "and I know the answer they were after:<br>" +
        L(14) + "it is real because someone stays<br>" +
        L(15) + "after the doors are locked,<br>" +
        L(16) + "and waters what no one will see until morning." +
        "</p>",
      claims: [
        {
          id: "mood",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The mood of lines 11 and 12, with the glass gone black and the heaters ticking, is best described as —",
          choices: [
            { letter: "A", text: "hushed and calm" },
            { letter: "B", text: "frantic and loud" },
            { letter: "C", text: "bitter and angry" },
            { letter: "D", text: "silly and playful" }
          ],
          correct: "A"
        },
        {
          id: "nurse",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In line 4, comparing the speaker to a night nurse making rounds suggests that the speaker —",
          choices: [
            { letter: "A", text: "is afraid of the dark glasshouse" },
            { letter: "B", text: "wishes to work in a hospital instead" },
            { letter: "C", text: "treats the plants as living things in need of care" },
            { letter: "D", text: "thinks several of the plants are dying" }
          ],
          correct: "C"
        },
        {
          id: "children",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "How do lines 9 and 10, about the children pressing their faces to the glass, function in the poem?",
          choices: [
            { letter: "A", text: "They explain why the gift shop closes early." },
            { letter: "B", text: "They raise a question the speaker answers in the final lines." },
            { letter: "C", text: "They show that the speaker dislikes school visits." },
            { letter: "D", text: "They describe the speaker's own childhood memories." }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "The closing lines, it is real because someone stays (line 14), best support the idea that —",
          choices: [
            { letter: "A", text: "visitors should be allowed in the garden at night" },
            { letter: "B", text: "plants grow best when no one is watching them" },
            { letter: "C", text: "the children were wrong to doubt the garden" },
            { letter: "D", text: "unseen, steady work keeps beautiful things alive" }
          ],
          correct: "D"
        },
        {
          id: "flags",
          sol: "10.RV.1.F",
          sub: "10.RV.1.F.1",
          stem: "In line 8, the torn flags the banana tree rattles most likely refer to —",
          choices: [
            { letter: "A", text: "signs hung by the gift shop" },
            { letter: "B", text: "banners left by the school group" },
            { letter: "C", text: "warning markers near the heaters" },
            { letter: "D", text: "its large, split leaves" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The speaker's tone in lines 13 through 16 of the palm house poem is best described as —",
          choices: [
            { letter: "A", text: "quietly certain" },
            { letter: "B", text: "nervous and doubtful" },
            { letter: "C", text: "openly boastful" },
            { letter: "D", text: "mildly annoyed" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rv-c69-seed-bank",
      family: "G10",
      title: "The Coldest Room in the Garden",
      kind: "Vocabulary · 10.RV",
      blurb: "Inside a botanical garden's seed bank, where thousands of seeds wait in the freezer.",
      level: 1,
      passage:
        "<p>" + N(1) + "Behind the visitor center of the Ashgrove Botanical Garden, down a hallway most guests never see, is a room that hums at exactly minus eighteen degrees Celsius. " +
        N(2) + "This is the seed bank, and its freezers hold more than four thousand packets of seeds collected from the hills and wetlands of the region. " +
        N(3) + "Each seed inside is <strong>dormant</strong>, alive but resting, waiting for the warmth and water that will wake it. " +
        N(4) + "Seed keeper Farida Rahimi checks the packets with <strong>meticulous</strong> care, recording every date and weight in a ledger so exact that a single missing gram would stand out. " +
        N(5) + "Every few years she tests a sample from each packet to see whether the seeds are still <strong>viable</strong>. " +
        N(6) + "She places twenty seeds on damp paper, and if most of them sprout, the collection is healthy; if only a few do, it is time to grow new plants and gather fresh seed. " +
        N(7) + "This way the garden can <strong>replenish</strong> its supply before it runs out. " +
        N(8) + "Some of the packets come from wildflowers that have grown <strong>sparse</strong> in the wild, surviving in only a few scattered meadows. " +
        N(9) + "For those species, the frozen packets are a kind of insurance. " +
        N(10) + "If a meadow is plowed or flooded, the seed bank still holds a <strong>pristine</strong> sample of what once grew there, untouched by time or weather. " +
        N(11) + "Farida likes to tell visiting students that the coldest room in the garden is also the most hopeful one." +
        "</p>",
      claims: [
        {
          id: "viable",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word viable in sentence 5 comes from the Latin vita, meaning life, as in vital and vitamin. Based on this, viable seeds are seeds that are —",
          choices: [
            { letter: "A", text: "large enough to be weighed" },
            { letter: "B", text: "still able to live and grow" },
            { letter: "C", text: "collected from the wetlands" },
            { letter: "D", text: "frozen at the right temperature" }
          ],
          correct: "B"
        },
        {
          id: "dormant",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 3, describing the frozen seeds in Farida's packets, the word dormant most nearly means —",
          choices: [
            { letter: "A", text: "damaged by the cold" },
            { letter: "B", text: "recently harvested" },
            { letter: "C", text: "rare and valuable" },
            { letter: "D", text: "inactive for a time" }
          ],
          correct: "D"
        },
        {
          id: "meticulous",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which detail best shows the meaning of meticulous as sentence 4 uses it to describe Farida's care?",
          choices: [
            { letter: "A", text: "a single missing gram would stand out" },
            { letter: "B", text: "her job title is seed keeper" },
            { letter: "C", text: "the packets are kept in freezers" },
            { letter: "D", text: "she checks the packets herself" }
          ],
          correct: "A"
        },
        {
          id: "pristine",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author calls the seed bank's sample pristine rather than old in sentence 10. Compared with old, pristine suggests that the sample is —",
          choices: [
            { letter: "A", text: "too fragile to be planted" },
            { letter: "B", text: "outdated and less useful" },
            { letter: "C", text: "perfectly preserved and unspoiled" },
            { letter: "D", text: "kept secret from visitors" }
          ],
          correct: "C"
        },
        {
          id: "sparse",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 8, the word sparse, used to describe the wildflowers, most nearly means —",
          choices: [
            { letter: "A", text: "few and thinly scattered" },
            { letter: "B", text: "brightly colored" },
            { letter: "C", text: "tall and crowded" },
            { letter: "D", text: "newly discovered" }
          ],
          correct: "A"
        },
        {
          id: "replenish",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The prefix re- in replenish appears in refill and rebuild. Based on this, to replenish the garden's seed supply in sentence 7 is to —",
          choices: [
            { letter: "A", text: "sell it to other gardens" },
            { letter: "B", text: "count it one packet at a time" },
            { letter: "C", text: "move it to a colder room" },
            { letter: "D", text: "fill it up again" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-dsr-c69-street-permit",
      family: "G10",
      title: "Closing Juniper Lane",
      kind: "Paired texts · 10.DSR",
      blurb: "A city's block party rules, and one organizer's cheerful email to her neighbors.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Brookfield Street Events Office: Rules for Residential Block Parties</strong></p>" +
        "<p>" + N(1) + "Residents who wish to close a residential street for a block party must apply at least thirty days before the event. " +
        N(2) + "The application must include signatures from at least two-thirds of the households on the block, showing that most neighbors approve of the closure. " +
        N(3) + "Streets may be closed only between 10 a.m. and 9 p.m., and amplified music must end by 8 p.m. " +
        N(4) + "Organizers must keep a twenty-foot lane open at all times so that fire trucks and ambulances can pass. " +
        N(5) + "The city will deliver two barricades free of charge; additional barricades cost fifteen dollars each. " +
        N(6) + "Permits are not issued for streets that serve as bus routes. " +
        N(7) + "These rules exist to protect public safety while still allowing neighbors to enjoy their street together.</p>" +
        "<p><strong>Text 2 — Email from Rosa Delgado-Kim to the Juniper Lane neighbors</strong></p>" +
        "<p>" + N(8) + "Hi, neighbors! " +
        N(9) + "Good news: the Juniper Lane block party is officially happening on Saturday, June 14. " +
        N(10) + "Thank you to the twenty-one of you who signed the petition; we needed eighteen, so we cleared the bar easily. " +
        N(11) + "Now, a few planning notes. " +
        N(12) + "The DJ, my nephew Tavo, has agreed to wrap up the music an hour earlier than he hoped, so please don't beg him for \"just one more song\" at eight. " +
        N(13) + "We will set up the bounce house on the Kellers' front lawn instead of in the street, because the middle of the road has to stay clear all day. " +
        N(14) + "We are also borrowing four extra barricades from the church on the corner rather than buying them. " +
        N(15) + "If you can lend a grill, a cooler, or an hour of cleanup time, just reply to this email. " +
        N(16) + "See you on the fourteenth!</p>",
      claims: [
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which statement best describes a key difference between the Brookfield rules and Rosa's email?",
          choices: [
            { letter: "A", text: "Text 1 encourages block parties, while Text 2 discourages them." },
            { letter: "B", text: "Text 1 tells a story, while Text 2 lists rules in order." },
            { letter: "C", text: "Text 1 sets general rules, while Text 2 applies them to one event." },
            { letter: "D", text: "Text 1 is written for neighbors, while Text 2 is written for the city." }
          ],
          correct: "C"
        },
        {
          id: "bounce",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Based on both texts, why does Rosa put the bounce house on the Kellers' lawn?",
          choices: [
            { letter: "A", text: "The city requires a twenty-foot lane for emergency vehicles." },
            { letter: "B", text: "The Kellers asked to host the bounce house for their children." },
            { letter: "C", text: "The street is a bus route and cannot be closed." },
            { letter: "D", text: "The city charges a fee for equipment placed in the road." }
          ],
          correct: "A"
        },
        {
          id: "signatures",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.2",
          stem: "Which sentence from Text 2 shows that Juniper Lane met the signature rule in sentence 2 of Text 1?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "D"
        },
        {
          id: "adjust",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Select TWO sentences from Text 2 that show Rosa adjusting the Juniper Lane plans to follow the city's rules.",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "church",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "A reader who uses both texts could best conclude that Rosa borrows barricades from the church in order to —",
          choices: [
            { letter: "A", text: "keep the church parking lot open" },
            { letter: "B", text: "avoid paying fifteen dollars for each extra one" },
            { letter: "C", text: "replace the city's barricades, which were not delivered" },
            { letter: "D", text: "close the street earlier than 10 a.m." }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.1",
          stem: "Compared with the tone of the Brookfield rules, the tone of Rosa's email is best described as —",
          choices: [
            { letter: "A", text: "stern and warning" },
            { letter: "B", text: "formal and distant" },
            { letter: "C", text: "worried and uncertain" },
            { letter: "D", text: "friendly and informal" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-ri-c69-sound-first",
      family: "G10",
      title: "Sound Before Sequins",
      kind: "Argument · 10.RI",
      blurb: "A trumpet player argues that the band boosters should buy instruments before uniforms.",
      level: 3,
      passage:
        "<p>" + N(1) + "This spring the Harlan High band boosters will decide how to spend the eleven thousand dollars raised at last fall's car washes and bake sales, and the leading proposal is a full set of new marching uniforms. " +
        N(2) + "I understand the appeal. " +
        N(3) + "Our current uniforms are fourteen years old, the gold braid has faded to the color of weak tea, and photos from competitions make us look, as one parent put it, \"like a band from a museum.\" " +
        N(4) + "But I play second trumpet in this band, and I believe the money should go to instruments first. " +
        N(5) + "Of our six school-owned sousaphones, two have dents so deep that the valves stick in cold weather. " +
        N(6) + "Last October at the Tri-County Festival, the judges' written comments mentioned \"intonation problems in the low brass\" three separate times. " +
        N(7) + "No judge commented on our uniforms at all. " +
        N(8) + "Some boosters argue that new uniforms would lift morale and help recruit eighth graders. " +
        N(9) + "That may be true, but a recruit who joins for the jacket and then spends a season fighting a broken horn is unlikely to stay. " +
        N(10) + "Repairing the two sousaphones and replacing the worn school clarinets would cost roughly seven thousand dollars, according to a written estimate from a local repair shop. " +
        N(11) + "The remaining four thousand could start a uniform fund, and one more year of fundraising could finish it. " +
        N(12) + "A band is judged first by what its audience hears. " +
        N(13) + "Let's make sure we sound like the band we are before we pay to look like one." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which sentence best states the trumpet player's central claim about the boosters' money?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "B"
        },
        {
          id: "judges",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which detail best supports the claim that instruments affect the Harlan band's competition results more than uniforms do?",
          choices: [
            { letter: "A", text: "The uniforms are fourteen years old and badly faded." },
            { letter: "B", text: "The boosters raised the money at car washes and bake sales." },
            { letter: "C", text: "Repairs and clarinets would cost about seven thousand dollars." },
            { letter: "D", text: "Judges noted low brass problems but never mentioned uniforms." }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "In sentence 9, the writer responds to the boosters' recruiting argument mainly by —",
          choices: [
            { letter: "A", text: "granting it may be true, then arguing new members may not stay" },
            { letter: "B", text: "rejecting it as false and offering survey results" },
            { letter: "C", text: "ignoring it and changing the subject to the judges" },
            { letter: "D", text: "agreeing with it and changing the original proposal" }
          ],
          correct: "A"
        },
        {
          id: "estimate",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "The writer includes the repair estimate in sentence 10 mainly to —",
          choices: [
            { letter: "A", text: "criticize the repair shop's high prices" },
            { letter: "B", text: "prove that the uniforms cost too much" },
            { letter: "C", text: "show that the plan is practical and still leaves money for uniforms" },
            { letter: "D", text: "suggest that the band should stop using sousaphones" }
          ],
          correct: "C"
        },
        {
          id: "tea",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 3, saying the gold braid has faded to the color of weak tea mainly emphasizes —",
          choices: [
            { letter: "A", text: "how worn and dull the old uniforms look" },
            { letter: "B", text: "that the uniforms were stained at a bake sale" },
            { letter: "C", text: "why the parents prefer brown uniforms" },
            { letter: "D", text: "that the writer finds the uniforms comfortable" }
          ],
          correct: "A"
        },
        {
          id: "fighting",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "In sentence 9, the writer says a recruit would spend a season fighting a broken horn rather than playing it. Compared with playing, fighting suggests —",
          choices: [
            { letter: "A", text: "a friendly contest between players" },
            { letter: "B", text: "a skill learned through lessons" },
            { letter: "C", text: "a loud and showy performance" },
            { letter: "D", text: "a frustrating, exhausting struggle" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-ri-c69-linden-guide",
      family: "G10",
      title: "Linden Hollow Visitor Guide",
      kind: "Functional text · 10.RI",
      blurb: "Hours, tickets, garden areas and rules for a day at a botanical garden.",
      level: 1,
      passage:
        "<p><strong>Welcome to the Linden Hollow Botanical Garden</strong></p>" +
        "<p><strong>Hours.</strong> " + N(1) + "The garden is open Tuesday through Sunday from 9 a.m. to 5 p.m., and the last entry is at 4 p.m. " +
        N(2) + "The garden is closed on Mondays so that staff can complete pruning and watering.</p>" +
        "<p><strong>Admission.</strong> " + N(3) + "Adult tickets are $12, and students with a school ID pay $6. " +
        N(4) + "Children under five and garden members enter free. " +
        N(5) + "On the first Wednesday of every month, admission is free for all visitors from 3 to 5 p.m.</p>" +
        "<p><strong>Areas of the Garden.</strong> " + N(6) + "The Desert Dome, near the main entrance, holds more than two hundred kinds of cactus and succulent. " +
        N(7) + "The Rain Forest Conservatory is kept warm and humid all year, so visitors who wear glasses may need to wait a minute for their lenses to clear. " +
        N(8) + "The Children's Discovery Garden, behind the cafe, has a splash path that is open from June through August.</p>" +
        "<p><strong>Guidelines.</strong> " + N(9) + "To protect the plants, please stay on marked paths and do not pick flowers, leaves, or seeds. " +
        N(10) + "Pets are not permitted, except trained service animals. " +
        N(11) + "Picnics are welcome on the Great Lawn but not inside the conservatories.</p>" +
        "<p><strong>Tours.</strong> " + N(12) + "Free guided walks leave the visitor center at 11 a.m. and 2 p.m. daily and last about forty-five minutes. " +
        N(13) + "Groups of ten or more should reserve a tour at least two weeks ahead by calling the education office.</p>",
      claims: [
        {
          id: "headings",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "The bold headings in the Linden Hollow guide help a reader mainly by —",
          choices: [
            { letter: "A", text: "showing which areas of the garden are most popular" },
            { letter: "B", text: "making it easy to find one kind of information quickly" },
            { letter: "C", text: "listing the garden's events in the order they happen" },
            { letter: "D", text: "explaining the history of each part of the garden" }
          ],
          correct: "B"
        },
        {
          id: "audience",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.1",
          stem: "The Linden Hollow guide is written mainly for —",
          choices: [
            { letter: "A", text: "staff members who prune and water the plants" },
            { letter: "B", text: "scientists studying desert plants" },
            { letter: "C", text: "people planning a visit to the garden" },
            { letter: "D", text: "teachers applying for garden jobs" }
          ],
          correct: "C"
        },
        {
          id: "free",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.2",
          stem: "A high school student wants to visit Linden Hollow without paying and without a membership. Which sentence would help most?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        },
        {
          id: "humid",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 7, describing the Rain Forest Conservatory, the word humid most nearly means —",
          choices: [
            { letter: "A", text: "damp with moisture in the air" },
            { letter: "B", text: "dim and shaded from the sun" },
            { letter: "C", text: "crowded with many visitors" },
            { letter: "D", text: "quiet and completely still" }
          ],
          correct: "A"
        },
        {
          id: "glasses",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The guide mentions visitors who wear glasses in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "suggest that the conservatory is unsafe" },
            { letter: "B", text: "explain why the conservatory closes early" },
            { letter: "C", text: "advertise eyeglass cleaning in the gift shop" },
            { letter: "D", text: "prepare them for a small effect of the warm, wet air" }
          ],
          correct: "D"
        },
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which of these best summarizes the Linden Hollow guide?",
          choices: [
            { letter: "A", text: "It describes how the garden protects rare cactus species." },
            { letter: "B", text: "It persuades readers to become garden members." },
            { letter: "C", text: "It gives visitors the hours, prices, areas, rules and tours." },
            { letter: "D", text: "It explains why the garden closes on Mondays." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-rl-c69-allowable",
      family: "G10",
      title: "Claims One Through Four",
      kind: "Drama · 10.RL",
      blurb: "A brother braced for rejection and a sister holding the patent office's letter.",
      level: 2,
      passage:
        "<p><em>A cluttered garage. On the workbench sits a plastic watering can fitted with wires and a small moisture sensor. KOFI MENSAH, sixteen, types on a laptop. His sister ABENA, fourteen, enters holding a thick envelope.</em></p>" +
        "<p><strong>ABENA:</strong> " + N(1) + "The patent office wrote back. " + N(2) + "It's thick, which Mom says is either very good or very bad.</p>" +
        "<p><strong>KOFI:</strong> <em>(not looking up)</em> " + N(3) + "Thick means they want more drawings. " + N(4) + "I already know what's in it.</p>" +
        "<p><strong>ABENA:</strong> " + N(5) + "You haven't even opened it.</p>" +
        "<p><strong>KOFI:</strong> " + N(6) + "I don't need to. " + N(7) + "Every inventor gets rejected the first time; I read that on three different forums.</p>" +
        "<p><strong>ABENA:</strong> <em>(tearing the envelope open)</em> " + N(8) + "Then you won't mind if I read it. " + N(9) + "\"The examiner finds that claims one through four are allowable.\" " + N(10) + "Kofi, what does allowable mean?</p>" +
        "<p><strong>KOFI:</strong> <em>(He stops typing. A long pause.)</em> " + N(11) + "It means yes. " + N(12) + "It means they're going to say yes.</p>" +
        "<p><strong>ABENA:</strong> " + N(13) + "So the forums were wrong.</p>" +
        "<p><strong>KOFI:</strong> " + N(14) + "The forums were wrong. <em>(He picks up the watering can and turns it over slowly, as though seeing it for the first time.)</em> " + N(15) + "I spent four months getting ready to be disappointed, and I never once practiced this part.</p>" +
        "<p><strong>ABENA:</strong> " + N(16) + "What part?</p>" +
        "<p><strong>KOFI:</strong> " + N(17) + "The part where it works.</p>" +
        "<p><strong>ABENA:</strong> <em>(grinning, tossing him the envelope)</em> " + N(18) + "Well, you have until dinner to practice. " + N(19) + "Mom is going to make you explain the sensor again, and this time she'll actually listen.</p>",
      claims: [
        {
          id: "kofi",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Kofi's lines in sentences 3 through 7 characterize him as someone who —",
          choices: [
            { letter: "A", text: "is bored by the patent process" },
            { letter: "B", text: "braces for bad news to protect himself" },
            { letter: "C", text: "resents his sister for interrupting" },
            { letter: "D", text: "has already read the letter in secret" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in the garage scene is most ironic?",
          choices: [
            { letter: "A", text: "Abena reads the letter before her brother does." },
            { letter: "B", text: "The invention is a watering can with a sensor." },
            { letter: "C", text: "Kofi is sure of a rejection, but the letter brings approval." },
            { letter: "D", text: "Their mother will ask Kofi to explain the sensor again." }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the turning point of the scene between Kofi and Abena?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "A"
        },
        {
          id: "direction",
          sol: "10.RL.1.D",
          sub: "10.RL.1.D.2",
          stem: "The stage direction in which Kofi turns the watering can over as though seeing it for the first time mainly serves to —",
          choices: [
            { letter: "A", text: "show that the device has been damaged" },
            { letter: "B", text: "suggest that Abena built the invention" },
            { letter: "C", text: "slow the scene down before dinner" },
            { letter: "D", text: "show his view of his own invention suddenly changing" }
          ],
          correct: "D"
        },
        {
          id: "allowable",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Based on Kofi's explanation in sentences 11 and 12, the word allowable in sentence 9 most nearly means —",
          choices: [
            { letter: "A", text: "able to be approved" },
            { letter: "B", text: "needing more drawings" },
            { letter: "C", text: "copied from another inventor" },
            { letter: "D", text: "too expensive to build" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of Abena's final lines, sentences 18 and 19, is best described as —",
          choices: [
            { letter: "A", text: "jealous and sharp" },
            { letter: "B", text: "nervous and hesitant" },
            { letter: "C", text: "teasing and affectionate" },
            { letter: "D", text: "formal and distant" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-ri-c69-drum-major",
      family: "G10",
      title: "Watch the Hands",
      kind: "Informational · 10.RI",
      blurb: "How a marching band of two hundred stays together when sound itself runs late.",
      level: 1,
      passage:
        "<p>" + N(1) + "From the stands, a marching band seems to move by magic, with two hundred players forming a spiral that turns into a star without a single collision. " +
        N(2) + "The secret is mostly geometry and a great deal of watching. " +
        N(3) + "A football field is already a giant grid, with a line every five yards and small hash marks between them. " +
        N(4) + "Band directors use that grid to give each musician a \"dot,\" an exact spot for every count of the show, printed on a small card called a dot sheet. " +
        N(5) + "Players memorize their dots the way actors memorize lines. " +
        N(6) + "Staying in time is harder than it looks, because sound is surprisingly slow. " +
        N(7) + "On a football field, sound needs about a quarter of a second to travel from one end zone to the other. " +
        N(8) + "A tuba player at the far edge who waits to hear the drums will therefore always be slightly late. " +
        N(9) + "For this reason, musicians are taught to follow the drum major's hands rather than their own ears. " +
        N(10) + "The drum major stands on a tall podium and conducts with large, sharp motions that can be seen from every corner of the field. " +
        N(11) + "Light travels almost instantly, so everyone who watches those hands stays together even when the sound seems to lag. " +
        N(12) + "Members also \"dress\" their lines, glancing sideways to stay even with the players beside them. " +
        N(13) + "Together, these habits turn a crowd of teenagers into a single moving picture." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "What is the author's main idea about how a marching band stays together?",
          choices: [
            { letter: "A", text: "Drum majors are the most important members of any band." },
            { letter: "B", text: "Tuba players have the hardest job on the field." },
            { letter: "C", text: "Bands should practice indoors where sound travels faster." },
            { letter: "D", text: "Bands rely on the field's grid and on sight more than on sound." }
          ],
          correct: "D"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 6 through 11 of the drum major passage organized?",
          choices: [
            { letter: "A", text: "A problem is described, and then a solution is explained." },
            { letter: "B", text: "Two bands are compared point by point." },
            { letter: "C", text: "Events are listed in the order of a halftime show." },
            { letter: "D", text: "An opinion is stated and then argued against." }
          ],
          correct: "A"
        },
        {
          id: "lag",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 11, the phrase even when the sound seems to lag uses lag to mean —",
          choices: [
            { letter: "A", text: "grow louder" },
            { letter: "B", text: "fall behind" },
            { letter: "C", text: "change pitch" },
            { letter: "D", text: "stop suddenly" }
          ],
          correct: "B"
        },
        {
          id: "late",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which sentence best explains why the tuba player in sentence 8 would be late?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "C"
        },
        {
          id: "together",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement is best supported by sentences 8 and 11 of the drum major passage together?",
          choices: [
            { letter: "A", text: "Players far from the drums stay in time by relying on sight." },
            { letter: "B", text: "Tuba players should stand closer to the drum major." },
            { letter: "C", text: "Light and sound travel at about the same speed." },
            { letter: "D", text: "Drum majors cannot be seen from the far end zone." }
          ],
          correct: "A"
        },
        {
          id: "actors",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author compares players learning their dots to actors memorizing lines in sentence 5 mainly to emphasize that —",
          choices: [
            { letter: "A", text: "band members often perform in school plays" },
            { letter: "B", text: "the dot sheets are written like scripts" },
            { letter: "C", text: "every position must be learned by heart" },
            { letter: "D", text: "the show tells a story from beginning to end" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-rl-c69-titan-arum",
      family: "G10",
      title: "Thirty-One Mornings",
      kind: "Literary · 10.RL",
      blurb: "An intern measures a giant flower bud every day and wonders why anyone cares.",
      level: 3,
      passage:
        "<p>" + N(1) + "For thirty-one mornings, Marisol's summer internship at the Ferncliff Conservatory consisted of a single task: measuring a plant that looked like a giant green bullet. " +
        N(2) + "Every day at eight she climbed a stepladder beside the titan arum, stretched a cloth tape from the soil to the tip of the bud, and called out a number. " +
        N(3) + "Dr. Lund, the curator, wrote each number in a battered logbook without comment, as if she were reading him the weather. " +
        N(4) + "\"It grew four centimeters,\" she reported one morning, and then, because she could no longer stand it, \"Does anyone actually need to know that?\" " +
        N(5) + "Dr. Lund considered the question seriously. " +
        N(6) + "\"The plant does not care whether we know,\" he said. \"But we do.\" " +
        N(7) + "The bloom came on a Tuesday night in August. " +
        N(8) + "The great frilled collar unfolded, deep red as a theater curtain, and the smell rolled out with it, a stink like a forgotten lunchbox that sent the first visitors stumbling back toward the doors. " +
        N(9) + "By midnight the line wrapped around the parking lot anyway; people held their noses, took pictures, and told one another they would never forget it. " +
        N(10) + "Two days later the collar had collapsed into a heap, and the crowds were gone. " +
        N(11) + "Marisol found Dr. Lund at the stepladder with the cloth tape. " +
        N(12) + "\"We measure it now?\" she asked. " +
        N(13) + "\"Now especially,\" he said, and handed her the tape. " +
        N(14) + "She climbed up, read the number aloud, and watched him write it down with the same slow care he had given the first one, and for the first time the scratch of his pencil sounded to her like a kind of applause." +
        "</p>",
      claims: [
        {
          id: "mood",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The details in sentence 8, the theater curtain and the forgotten lunchbox, create a mood that is —",
          choices: [
            { letter: "A", text: "gloomy and quietly threatening" },
            { letter: "B", text: "calm, peaceful and orderly" },
            { letter: "C", text: "grand yet comically unpleasant" },
            { letter: "D", text: "sad and full of regret" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "The visitors' behavior in sentence 9 is ironic mainly because they —",
          choices: [
            { letter: "A", text: "eagerly line up for something they find disgusting" },
            { letter: "B", text: "arrive after the flower has already collapsed" },
            { letter: "C", text: "refuse to take pictures of the bloom" },
            { letter: "D", text: "complain that the conservatory closes too early" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by Marisol's experience with the titan arum?",
          choices: [
            { letter: "A", text: "Spectacular events are the only ones worth recording." },
            { letter: "B", text: "Careful attention has value even when no crowd is watching." },
            { letter: "C", text: "Young workers are usually given the most boring tasks." },
            { letter: "D", text: "Unpleasant things are quickly forgotten." }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author ends the story with Dr. Lund measuring the collapsed flower (sentences 11 through 14) mainly to —",
          choices: [
            { letter: "A", text: "explain how the titan arum produces its smell" },
            { letter: "B", text: "suggest that the flower will bloom again next week" },
            { letter: "C", text: "show that Dr. Lund is disappointed by the crowds" },
            { letter: "D", text: "complete Marisol's shift in how she sees the measuring" }
          ],
          correct: "D"
        },
        {
          id: "lund",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Dr. Lund's answer in sentences 5 and 6 characterizes him as —",
          choices: [
            { letter: "A", text: "impatient with questions from interns" },
            { letter: "B", text: "eager to impress the public" },
            { letter: "C", text: "unsure why the logbook matters" },
            { letter: "D", text: "thoughtful and devoted to the work itself" }
          ],
          correct: "D"
        },
        {
          id: "conservatory",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word Conservatory in sentence 1 shares a root with conserve and conservation. Based on this, the Ferncliff Conservatory is most likely a place meant to —",
          choices: [
            { letter: "A", text: "sell rare plants to collectors" },
            { letter: "B", text: "protect and keep plants alive" },
            { letter: "C", text: "host concerts and theater shows" },
            { letter: "D", text: "train interns to become scientists" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rv-c69-varga-notebooks",
      family: "G10",
      title: "Forty-Two Notebooks",
      kind: "Vocabulary · 10.RV",
      blurb: "A trunk of notebooks reveals one invented inventor's twelve-year effort to build a better stove.",
      level: 2,
      passage:
        "<p>" + N(1) + "When the Pemberton Historical Society opened the trunk of Ottilie Varga's notebooks last spring, the volunteers expected to find a few sketches. " +
        N(2) + "Instead they found forty-two notebooks, filled edge to edge, recording her twelve-year effort to build a kitchen stove that would burn half as much coal. " +
        N(3) + "Varga was nothing if not <strong>tenacious</strong>; when one design failed, she noted the failure in a single line and began the next drawing on the same page. " +
        N(4) + "Her first models were <strong>rudimentary</strong>, little more than tin boxes with holes punched in the sides. " +
        N(5) + "Over time she learned to <strong>refine</strong> each version, adjusting a vent by a quarter inch or shifting a grate until the flame burned steady and blue. " +
        N(6) + "Her income was <strong>meager</strong>; she paid for materials by mending neighbors' clothes, and in some months she recorded buying only a single sheet of tin. " +
        N(7) + "Local merchants were <strong>skeptical</strong> of a seamstress who claimed she could outdo the factories, and several refused to stock her stove even after it won a county prize. " +
        N(8) + "Yet the final design, patented in her fortieth year, was <strong>ingenious</strong>: a hidden second chamber caught the hot smoke and burned it again before it could escape up the chimney. " +
        N(9) + "The volunteers say the most moving page is not the patent drawing at all. " +
        N(10) + "It is a small note in the margin of notebook nine, written beside a sketch of yet another failure: \"Closer.\"" +
        "</p>",
      claims: [
        {
          id: "rudimentary",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word rudimentary is related to rudiment, meaning a first or basic stage of something. Based on this, Varga's rudimentary models in sentence 4 were —",
          choices: [
            { letter: "A", text: "basic and undeveloped" },
            { letter: "B", text: "costly and decorated" },
            { letter: "C", text: "broken and abandoned" },
            { letter: "D", text: "large and heavy" }
          ],
          correct: "A"
        },
        {
          id: "tenacious",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 3, the word tenacious, as it describes Ottilie Varga, most nearly means —",
          choices: [
            { letter: "A", text: "persistent" },
            { letter: "B", text: "secretive" },
            { letter: "C", text: "careless" },
            { letter: "D", text: "forgetful" }
          ],
          correct: "A"
        },
        {
          id: "meager",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which detail from the passage best shows the meaning of meager as it describes Varga's income in sentence 6?",
          choices: [
            { letter: "A", text: "a stove that would burn half as much coal" },
            { letter: "B", text: "noted the failure in a single line" },
            { letter: "C", text: "some months she bought only one sheet of tin" },
            { letter: "D", text: "a hidden second chamber caught the smoke" }
          ],
          correct: "C"
        },
        {
          id: "ingenious",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author calls Varga's final stove ingenious rather than complicated in sentence 8. Compared with complicated, ingenious suggests the design is —",
          choices: [
            { letter: "A", text: "confusing and hard to use" },
            { letter: "B", text: "cleverly and originally made" },
            { letter: "C", text: "copied from the factories" },
            { letter: "D", text: "cheap and poorly built" }
          ],
          correct: "B"
        },
        {
          id: "closer",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 10, the single word Closer written in the margin of notebook nine most nearly functions as —",
          choices: [
            { letter: "A", text: "a measurement of the vent's distance" },
            { letter: "B", text: "an instruction to a factory worker" },
            { letter: "C", text: "a note of encouragement to herself" },
            { letter: "D", text: "a complaint about her small workshop" }
          ],
          correct: "C"
        },
        {
          id: "skeptical",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 7, the merchants who were skeptical of Varga were —",
          choices: [
            { letter: "A", text: "jealous of her county prize" },
            { letter: "B", text: "eager to sell her stove" },
            { letter: "C", text: "angry about her prices" },
            { letter: "D", text: "doubtful of her claims" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-dsr-c69-seed-drill",
      family: "G10",
      title: "Whose Wheel?",
      kind: "Paired texts · 10.DSR",
      blurb: "A museum label credits one inventor; a historian's letter asks for a second name.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Museum label: The Rowan Seed Drill, 1871</strong></p>" +
        "<p>" + N(1) + "This horse-drawn seed drill, patented by Ezra Rowan of Calder Falls in 1871, changed farming across the valley. " +
        N(2) + "Before its invention, farmers scattered seed by hand, and much of it was eaten by birds or washed away by rain. " +
        N(3) + "Rowan's drill used a notched wheel to drop seeds one at a time into a furrow at an even depth. " +
        N(4) + "Within a decade, valley farms using the drill reported wheat harvests nearly a third larger than before. " +
        N(5) + "Rowan, a farmer with no formal training, is remembered as the county's most important inventor. " +
        N(6) + "His original patent drawing hangs to the right of this case. " +
        N(7) + "Visitors may turn the handle on the replica below to watch the notched wheel release seeds just as it once did in Rowan's own fields.</p>" +
        "<p><strong>Text 2 — From a letter to the museum by historian Leila Osei-Brandt</strong></p>" +
        "<p>" + N(8) + "I am writing about the label beside the Rowan Seed Drill. " +
        N(9) + "Every word on it is accurate, yet I believe it leaves visitors with an incomplete picture. " +
        N(10) + "Last year I studied the account book of Clement Asante, the blacksmith whose shop stood two doors from the Rowan farm. " +
        N(11) + "Between March and June of 1870, Asante recorded eleven charges to Rowan for \"trial wheels, notched,\" each one slightly different from the last. " +
        N(12) + "The final entry reads, \"Wheel to my own pattern — works.\" " +
        N(13) + "Patents of that era listed only the person who filed, and a blacksmith who worked for hire had little reason, and less money, to file at all. " +
        N(14) + "I am not asking the museum to remove Rowan's name. " +
        N(15) + "I am asking it to add a second one.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The museum label and the historian's letter would most likely agree that —",
          choices: [
            { letter: "A", text: "Clement Asante should receive most of the credit" },
            { letter: "B", text: "Ezra Rowan filed the patent for the seed drill" },
            { letter: "C", text: "the drill did little to improve valley harvests" },
            { letter: "D", text: "the replica handle should be removed from the case" }
          ],
          correct: "B"
        },
        {
          id: "both",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which idea about the Rowan Seed Drill is clearest only when both texts are read together?",
          choices: [
            { letter: "A", text: "The drill planted seeds at an even depth." },
            { letter: "B", text: "Rowan had no formal training as an inventor." },
            { letter: "C", text: "Blacksmiths in 1870 often kept account books." },
            { letter: "D", text: "The notched wheel praised in Text 1 may have been Asante's design." }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The texts about the seed drill differ mainly in that Text 2 —",
          choices: [
            { letter: "A", text: "uses a blacksmith's records to question who deserves credit" },
            { letter: "B", text: "explains how the drill changed farming in the valley" },
            { letter: "C", text: "argues that the drill never actually worked" },
            { letter: "D", text: "describes what visitors can do inside the museum" }
          ],
          correct: "A"
        },
        {
          id: "address",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does Text 2 respond to the claim in sentence 5 of Text 1 about Rowan's importance?",
          choices: [
            { letter: "A", text: "It argues that Rowan stole the drill from Asante." },
            { letter: "B", text: "It agrees completely and offers more praise for Rowan." },
            { letter: "C", text: "It suggests Rowan was not the drill's only key inventor." },
            { letter: "D", text: "It ignores Rowan and focuses on harvest numbers." }
          ],
          correct: "C"
        },
        {
          id: "next",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Using both texts, what is the most likely change Leila Osei-Brandt hopes the museum will make?",
          choices: [
            { letter: "A", text: "move the patent drawing to a different wall" },
            { letter: "B", text: "replace Rowan's name on the label with Asante's" },
            { letter: "C", text: "add a display about hand-scattering seed" },
            { letter: "D", text: "revise the label to credit Asante along with Rowan" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The tone of the historian's closing sentences, 14 and 15, is best described as —",
          choices: [
            { letter: "A", text: "bitter and accusing" },
            { letter: "B", text: "playful and joking" },
            { letter: "C", text: "measured and firm" },
            { letter: "D", text: "hesitant and apologetic" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-rl-c69-unplugged",
      family: "G10",
      title: "The Night the Speakers Died",
      kind: "Literary · 10.RL",
      blurb: "Teodoro's perfect sound system fails at the block party, and an accordion takes over.",
      level: 3,
      passage:
        "<p>" + N(1) + "Teodoro had spent three weeks preparing the sound system for the Delmar Avenue block party, and he wanted everyone to know it. " +
        N(2) + "He had borrowed two speakers from his cousin, rented a mixing board with his own savings, and taped every cable to the asphalt in neat orange stripes, so that by six o'clock the whole block throbbed like the inside of a drum. " +
        N(3) + "\"Nobody's going to forget this year,\" he told his sister, who rolled her eyes and went back to selling lemonade. " +
        N(4) + "At 7:40, in the middle of the most popular song of the summer, the extension cord from the Paks' garage gave a small pop, and the music died. " +
        N(5) + "The silence was enormous. " +
        N(6) + "Teodoro knelt over the mixing board, flipping switches that did nothing, while the dancers drifted toward the curb and parents began folding chairs. " +
        N(7) + "Then, from the porch of number 14, came a wheeze and a chord. " +
        N(8) + "Old Mrs. Baptiste had brought out an accordion that no one on Delmar Avenue had known she owned, and she was playing a waltz her father had taught her. " +
        N(9) + "The sound was thin and slightly out of tune, nothing like the speakers. " +
        N(10) + "But the children sat down on the curb to watch her fingers, two grandfathers began to clap on the off beat, and somebody's uncle started singing words that only half matched. " +
        N(11) + "By nine o'clock there were three guitars and a bucket drum on the porch. " +
        N(12) + "Teodoro never got the speakers working again. " +
        N(13) + "Weeks later, when neighbors talked about the party, they described Mrs. Baptiste's porch and the bucket drum, and Teodoro, a little stung, found that he described them the same way." +
        "</p>",
      claims: [
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Teodoro's prediction in sentence 3 turns out to be ironic because —",
          choices: [
            { letter: "A", text: "his sister forgets the party within a week" },
            { letter: "B", text: "the party is memorable for the music that replaced his system" },
            { letter: "C", text: "the neighbors complain that the speakers were too loud" },
            { letter: "D", text: "the block party is canceled before it begins" }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the turning point of the Delmar Avenue block party?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about Teodoro and Mrs. Baptiste?",
          choices: [
            { letter: "A", text: "Expensive equipment always fails when it matters most." },
            { letter: "B", text: "Older neighbors usually dislike modern music." },
            { letter: "C", text: "A shared, imperfect moment can matter more than careful planning." },
            { letter: "D", text: "Young people should not be trusted with important jobs." }
          ],
          correct: "C"
        },
        {
          id: "short",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The author places the very short sentence 5, The silence was enormous, right after the music dies mainly to —",
          choices: [
            { letter: "A", text: "show that the neighbors are angry at Teodoro" },
            { letter: "B", text: "explain why the extension cord failed" },
            { letter: "C", text: "hint that Mrs. Baptiste is about to leave" },
            { letter: "D", text: "make the sudden stop feel heavy and abrupt" }
          ],
          correct: "D"
        },
        {
          id: "drum",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In sentence 2, saying the block throbbed like the inside of a drum suggests that Teodoro's music —",
          choices: [
            { letter: "A", text: "was loud enough to be felt everywhere" },
            { letter: "B", text: "was mostly played on percussion" },
            { letter: "C", text: "kept stopping and starting again" },
            { letter: "D", text: "was too quiet for the dancers" }
          ],
          correct: "A"
        },
        {
          id: "stung",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "In sentence 13, Teodoro is described as a little stung rather than angry. Compared with angry, stung suggests —",
          choices: [
            { letter: "A", text: "a desire to get revenge on the neighbors" },
            { letter: "B", text: "a feeling of complete relief" },
            { letter: "C", text: "a sharp but small hurt to his pride" },
            { letter: "D", text: "an injury from the broken equipment" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-ri-c69-thornbury-glasshouse",
      family: "G10",
      title: "One Step Ahead of the Sun",
      kind: "Informational · 10.RI",
      blurb: "A Victorian glasshouse that once cooked and froze its palms now runs on sensors and rainwater.",
      level: 3,
      passage:
        "<p>" + N(1) + "The Thornbury Glasshouse, built in 1889 to hold palms brought from the tropics, was in some ways a magnificent failure. " +
        N(2) + "Its designers understood that glass lets sunlight in and traps heat, but they did not understand how quickly that heat could turn dangerous. " +
        N(3) + "On clear July afternoons the air under the dome climbed past forty-five degrees Celsius, and gardeners had to climb ladders to open the roof panels by hand. " +
        N(4) + "In winter the opposite happened: coal boilers roared day and night, yet frost still formed on the inside of the panes. " +
        N(5) + "Records from those early decades list hundreds of plants lost to \"heat stroke\" and \"chill.\" " +
        N(6) + "Today the same iron frame holds a very different system. " +
        N(7) + "The original clear glass has been replaced with a translucent coating that scatters sunlight instead of letting it beam straight down onto the leaves. " +
        N(8) + "Sensors placed at three heights measure temperature and humidity every ninety seconds and send the readings to a computer that opens vents and starts misting fans automatically. " +
        N(9) + "Rainwater collected from the roof is stored in tanks under the floor, where it absorbs extra heat during the day and releases it slowly at night. " +
        N(10) + "According to the garden's annual reports, the changes have cut energy use roughly in half since 2005. " +
        N(11) + "Head horticulturist Yusuf Demir warns, however, that no system is perfect. " +
        N(12) + "\"The building still behaves like a greenhouse,\" he says. \"Our job is to stay one step ahead of the sun.\" " +
        N(13) + "Some staff members believe the glasshouse could one day run without any fuel at all, though no one has yet tested that idea through a full winter." +
        "</p>",
      claims: [
        {
          id: "organize",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "The passage about the Thornbury Glasshouse is organized mainly by —",
          choices: [
            { letter: "A", text: "describing the plants in the order they arrived" },
            { letter: "B", text: "contrasting the building's early problems with today's solutions" },
            { letter: "C", text: "listing the steps for building a glasshouse" },
            { letter: "D", text: "comparing Thornbury with several other gardens" }
          ],
          correct: "B"
        },
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the Thornbury Glasshouse passage?",
          choices: [
            { letter: "A", text: "Modern technology now helps an old glasshouse control harmful heat and cold." },
            { letter: "B", text: "The designers of the 1889 glasshouse should have used fewer panes of glass." },
            { letter: "C", text: "Rainwater tanks are the most important feature of any modern greenhouse." },
            { letter: "D", text: "The glasshouse will soon run through the winter without any fuel." }
          ],
          correct: "A"
        },
        {
          id: "speculation",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which statement in the Thornbury passage is presented as speculation rather than a reported result?",
          choices: [
            { letter: "A", text: "Hundreds of plants were lost to heat and chill." },
            { letter: "B", text: "Energy use has been cut roughly in half." },
            { letter: "C", text: "Sensors take readings every ninety seconds." },
            { letter: "D", text: "The glasshouse could someday run without fuel." }
          ],
          correct: "D"
        },
        {
          id: "quote",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The quotation from Yusuf Demir in sentence 12 mainly emphasizes that —",
          choices: [
            { letter: "A", text: "the old iron frame should be torn down" },
            { letter: "B", text: "the plants no longer need any sunlight" },
            { letter: "C", text: "the climate still demands constant attention" },
            { letter: "D", text: "the computer system has never made an error" }
          ],
          correct: "C"
        },
        {
          id: "translucent",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word translucent in sentence 7 combines trans-, meaning through, and luc-, meaning light, as in lucid. Based on this and the sentence, a translucent coating —",
          choices: [
            { letter: "A", text: "blocks all light from entering" },
            { letter: "B", text: "reflects heat back into the room" },
            { letter: "C", text: "lets light pass through but softens it" },
            { letter: "D", text: "glows on its own after dark" }
          ],
          correct: "C"
        },
        {
          id: "magnificent",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "Calling the original glasshouse a magnificent failure in sentence 1 shows an attitude that is —",
          choices: [
            { letter: "A", text: "mocking and dismissive of the designers" },
            { letter: "B", text: "admiring of its ambition but honest about its flaws" },
            { letter: "C", text: "confused about whether the building still stands" },
            { letter: "D", text: "angry that so many plants were lost" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rl-c69-away-game",
      family: "G10",
      title: "Halftime, Away Game",
      kind: "Poetry · 10.RL",
      blurb: "A nervous flute player marches onto a rival team's field.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Our bus pulled in as the sun went down,<br>" +
        L(2) + "and the home crowd's voices met us at the gate<br>" +
        L(3) + "like a wall we'd have to march straight through.<br>" +
        L(4) + "My flute was a sliver of ice in my hands;<br>" +
        L(5) + "my fingers forgot the opening run.<br>" +
        L(6) + "I thought of the drum major's only rule:<br>" +
        L(7) + "Watch me. Not them. Watch me.<br>" +
        L(8) + "So I did. Her white glove rose,<br>" +
        L(9) + "and the whole field stood up inside the sound,<br>" +
        L(10) + "our lines as straight as stitches,<br>" +
        L(11) + "the cold forgotten, the crowd forgotten,<br>" +
        L(12) + "nothing but the next count and the next.<br>" +
        L(13) + "When we filed off, a kid in the home bleachers<br>" +
        L(14) + "was playing air trumpet, cheeks puffed out,<br>" +
        L(15) + "marching in place to our song.<br>" +
        L(16) + "Somewhere under all that noise, we'd been heard." +
        "</p>",
      claims: [
        {
          id: "wall",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In lines 2 and 3, comparing the home crowd's voices to a wall suggests that the crowd —",
          choices: [
            { letter: "A", text: "has built a fence around the field" },
            { letter: "B", text: "is cheering for the visiting band" },
            { letter: "C", text: "is too quiet to be heard" },
            { letter: "D", text: "feels like a barrier the band must face" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The mood of the opening of the away-game poem, lines 1 through 5, is best described as —",
          choices: [
            { letter: "A", text: "tense and uneasy" },
            { letter: "B", text: "joyful and relaxed" },
            { letter: "C", text: "sleepy and dull" },
            { letter: "D", text: "proud and boastful" }
          ],
          correct: "A"
        },
        {
          id: "speaker",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Lines 4 and 5, about the flute and the forgotten opening run, characterize the speaker as —",
          choices: [
            { letter: "A", text: "bored by the long bus ride" },
            { letter: "B", text: "nervous and stiff with cold" },
            { letter: "C", text: "confident and well rested" },
            { letter: "D", text: "angry at the drum major" }
          ],
          correct: "B"
        },
        {
          id: "kid",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "The image of the kid playing air trumpet in lines 13 through 15 mainly serves to —",
          choices: [
            { letter: "A", text: "show that the band's music reached even the rival crowd" },
            { letter: "B", text: "suggest that the home team also has a marching band" },
            { letter: "C", text: "explain why the speaker forgot the opening run" },
            { letter: "D", text: "warn that the home fans are mocking the band" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "The final line, Somewhere under all that noise, we'd been heard, best supports the idea that —",
          choices: [
            { letter: "A", text: "loud crowds should be asked to stay quiet" },
            { letter: "B", text: "away games are less important than home games" },
            { letter: "C", text: "focused effort can reach people even in a hostile place" },
            { letter: "D", text: "the speaker plans to switch from flute to trumpet" }
          ],
          correct: "C"
        },
        {
          id: "shift",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "Which line marks the moment the flute player shifts from fear to focus?",
          choices: [
            { letter: "A", text: "Line 2" },
            { letter: "B", text: "Line 5" },
            { letter: "C", text: "Line 13" },
            { letter: "D", text: "Line 8" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-rv-c69-band-camp",
      family: "G10",
      title: "Sixteen Counts, Again",
      kind: "Vocabulary · 10.RV",
      blurb: "One week of band camp turns ninety separate players into one sound.",
      level: 3,
      passage:
        "<p>" + N(1) + "On the first morning of band camp at Lakeshore High, the practice field produced nothing but <strong>cacophony</strong>: ninety students warming up at once, trumpets shrieking, clarinets squeaking, and a lone tuba groaning like a ship in fog. " +
        N(2) + "Director Halvorsen let the noise go on for a full minute before raising one hand. " +
        N(3) + "The schedule she handed out was <strong>rigorous</strong>, with eight hours a day of marching drills, sectionals, and full-band rehearsals under a sun that showed no mercy. " +
        N(4) + "The first three days felt <strong>monotonous</strong> to most of the freshmen, who marched the same sixteen counts so many times that they began dreaming in steps. " +
        N(5) + "Yet the repetition had a purpose. " +
        N(6) + "By Thursday the lines no longer wobbled, and the band had begun to show real <strong>cohesion</strong>; ninety separate people were starting to move and breathe as one group. " +
        N(7) + "On Friday evening, parents gathered in the bleachers for the camp's preview show. " +
        N(8) + "When the band reached the final chord and held it in perfect <strong>unison</strong>, the sound rolled across the field and bounced back from the gym wall a half second later. " +
        N(9) + "Sophomore Nadia Ferreira said afterward that she felt <strong>exhilarated</strong>, as though the chord had lifted her a few inches off the grass. " +
        N(10) + "Even Director Halvorsen, who had spent the week correcting every misstep, lowered her hands and simply listened." +
        "</p>",
      claims: [
        {
          id: "cacophony",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "Cacophony comes from Greek parts meaning bad and sound; the second part appears in telephone and symphony. Based on this and sentence 1, cacophony most nearly means —",
          choices: [
            { letter: "A", text: "a slow, gentle melody" },
            { letter: "B", text: "a loud cheer from a crowd" },
            { letter: "C", text: "a harsh, jumbled noise" },
            { letter: "D", text: "a single, steady note" }
          ],
          correct: "C"
        },
        {
          id: "unison",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The prefix uni- in unison appears in uniform and unicycle. Based on this, holding the chord in unison in sentence 8 means the band played it —",
          choices: [
            { letter: "A", text: "one section at a time" },
            { letter: "B", text: "together as one" },
            { letter: "C", text: "louder than before" },
            { letter: "D", text: "only in rehearsal" }
          ],
          correct: "B"
        },
        {
          id: "rigorous",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author calls Director Halvorsen's schedule rigorous rather than busy in sentence 3. Compared with busy, rigorous suggests a schedule that is —",
          choices: [
            { letter: "A", text: "strict and demanding" },
            { letter: "B", text: "messy and disorganized" },
            { letter: "C", text: "short and easy" },
            { letter: "D", text: "fun and relaxed" }
          ],
          correct: "A"
        },
        {
          id: "exhilarated",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "In sentence 9, Nadia Ferreira says she felt exhilarated rather than simply glad. Compared with glad, exhilarated suggests a feeling that is —",
          choices: [
            { letter: "A", text: "calm and quiet" },
            { letter: "B", text: "polite and mild" },
            { letter: "C", text: "tired but satisfied" },
            { letter: "D", text: "intense and thrilling" }
          ],
          correct: "D"
        },
        {
          id: "cohesion",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which part of sentence 6 best shows the meaning of cohesion as it describes the Lakeshore band?",
          choices: [
            { letter: "A", text: "By Thursday the lines" },
            { letter: "B", text: "the band had begun to show" },
            { letter: "C", text: "ninety separate people" },
            { letter: "D", text: "breathe as one group" }
          ],
          correct: "D"
        },
        {
          id: "monotonous",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 4, the freshmen found the first three days of camp monotonous, meaning the days were —",
          choices: [
            { letter: "A", text: "dangerous because of the heat" },
            { letter: "B", text: "dull because of repetition" },
            { letter: "C", text: "confusing because of new rules" },
            { letter: "D", text: "exciting because of the show" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-dsr-c69-herb-garden",
      family: "G10",
      title: "The Smell Test",
      kind: "Paired texts · 10.DSR",
      blurb: "A teenage volunteer's journal and a retired volunteer's newsletter column, from the same herb garden.",
      level: 1,
      passage:
        "<p><strong>Text 1 — From the journal of Hye-jin Park, age 15</strong></p>" +
        "<p>" + N(1) + "Day one of volunteering at Willowmere Gardens: I pulled weeds in the herb garden for three hours and nobody thanked me, mostly because there was nobody there except a bee. " +
        N(2) + "My mom says it will look good on college applications. " +
        N(3) + "Day six: Mr. Abernathy, who has volunteered here since before I was born, showed me how to tell young basil from young weeds by the smell. " +
        N(4) + "I didn't believe him until I tried it. " +
        N(5) + "Day twelve: a little girl asked me what the purple flowers were, and I actually knew! " +
        N(6) + "Lavender. " +
        N(7) + "I told her to rub a leaf and smell her fingers, the way Mr. Abernathy had shown me. " +
        N(8) + "She did it about forty times. " +
        N(9) + "I think I might come back next summer, and not for the applications.</p>" +
        "<p><strong>Text 2 — From \"Why I Kneel in the Dirt,\" by Walter Abernathy, Willowmere volunteer newsletter</strong></p>" +
        "<p>" + N(10) + "People sometimes ask why a retired accountant spends four mornings a week weeding someone else's garden. " +
        N(11) + "The honest answer is that a garden is the opposite of a spreadsheet. " +
        N(12) + "Numbers can be finished; a garden never is. " +
        N(13) + "Every week there are new weeds, new blooms, and new mistakes to fix, and I find that comforting rather than tiring. " +
        N(14) + "This summer I worked beside a young volunteer who arrived looking as if she had been sentenced to the job. " +
        N(15) + "I taught her one small trick, the smell test for basil, and watched her stop checking her watch. " +
        N(16) + "That, I think, is what gardens do best. " +
        N(17) + "They teach patience by rewarding it a little at a time.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "On which point do Hye-jin's journal and Mr. Abernathy's column agree?",
          choices: [
            { letter: "A", text: "Volunteering mainly helps with college applications." },
            { letter: "B", text: "The young volunteer grew more interested in the work over time." },
            { letter: "C", text: "Weeding is the most tiring job in the garden." },
            { letter: "D", text: "Lavender is the easiest plant to recognize." }
          ],
          correct: "B"
        },
        {
          id: "both",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which idea about the Willowmere volunteers is clearest only when both texts are read together?",
          choices: [
            { letter: "A", text: "The herb garden grows both basil and lavender." },
            { letter: "B", text: "Mr. Abernathy used to work as an accountant." },
            { letter: "C", text: "The volunteer described in sentence 14 is Hye-jin herself." },
            { letter: "D", text: "A little girl visited the garden on day twelve." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The two Willowmere texts differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "records events day by day, while Text 2 reflects on why gardening matters" },
            { letter: "B", text: "argues for more volunteers, while Text 2 argues for fewer" },
            { letter: "C", text: "describes only plants, while Text 2 describes only people" },
            { letter: "D", text: "is written by an adult, while Text 2 is written by a student" }
          ],
          correct: "A"
        },
        {
          id: "hyejin",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 1 and 2 characterize Hye-jin, at the start of her volunteering, as —",
          choices: [
            { letter: "A", text: "eager to learn the names of plants" },
            { letter: "B", text: "afraid of the bees in the garden" },
            { letter: "C", text: "proud of the work she has finished" },
            { letter: "D", text: "unenthusiastic and there for practical reasons" }
          ],
          correct: "D"
        },
        {
          id: "explain",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does Text 2 help explain the change Hye-jin describes in sentence 9 of Text 1?",
          choices: [
            { letter: "A", text: "It shows that her mother changed her mind about applications." },
            { letter: "B", text: "It reveals that the garden will pay volunteers next summer." },
            { letter: "C", text: "It suggests that Mr. Abernathy asked her to return." },
            { letter: "D", text: "It says gardens reward patience a little at a time." }
          ],
          correct: "D"
        },
        {
          id: "lesson",
          sol: "10.DSR.C",
          sub: "10.DSR.C.1",
          stem: "Select TWO sentences, one from each text, that together best show that the basil smell test changed Hye-jin's attitude.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: ["B", "D"]
        }
      ]
    },
    {
      id: "g10-rl-c69-steamer-basket",
      family: "G10",
      title: "It Works. You Eat.",
      kind: "Literary · 10.RL",
      blurb: "Packing up his grandmother's room, Ramon finds a patent with her name on it.",
      level: 1,
      passage:
        "<p>" + N(1) + "The patent was in a shoebox under Lola Corazon's bed, between a stack of old birthday cards and a bag of loose buttons. " +
        N(2) + "Ramon found it while helping her pack for the move to his family's house, and at first he thought it was a diploma. " +
        N(3) + "Then he read the words at the top and the name printed beneath them: Corazon Reyes Dizon. " +
        N(4) + "\"Lola,\" he said, holding it up, \"you invented something?\" " +
        N(5) + "His grandmother glanced at the paper as if it were a grocery receipt. " +
        N(6) + "\"A steamer basket,\" she said. \"For rice cookers. It keeps the vegetables from falling into the rice.\" " +
        N(7) + "Ramon's mouth fell open. " +
        N(8) + "His family had used that exact kind of basket nearly every night of his life, and he had never once wondered where it came from. " +
        N(9) + "\"Why didn't you ever tell us?\" he asked. " +
        N(10) + "Lola Corazon shrugged and kept folding sweaters. " +
        N(11) + "\"A company bought it from me for a small amount of money, and then everyone in the world made one,\" she said. \"What is there to tell? It works. You eat.\" " +
        N(12) + "That night at dinner, Ramon lifted the steamer basket out of the cooker and turned it over in his hands, studying the little feet on the bottom that held it above the rice. " +
        N(13) + "Across the table, his grandmother pretended not to notice, but she was smiling into her bowl." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme does the story of Lola Corazon's patent most clearly develop?",
          choices: [
            { letter: "A", text: "Ordinary objects can hold stories about the people closest to us." },
            { letter: "B", text: "Inventors should always be paid fairly for their ideas." },
            { letter: "C", text: "Moving to a new house is hardest on older people." },
            { letter: "D", text: "Young people rarely listen to their grandparents." }
          ],
          correct: "A"
        },
        {
          id: "change",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Which sentence best shows a change in the way Ramon sees the steamer basket?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "B"
        },
        {
          id: "receipt",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In sentence 5, Lola glances at the patent as if it were a grocery receipt. This comparison suggests that she —",
          choices: [
            { letter: "A", text: "cannot read the small print on the paper" },
            { letter: "B", text: "plans to throw the patent away" },
            { letter: "C", text: "treats the patent as ordinary and unremarkable" },
            { letter: "D", text: "is upset that Ramon went through her things" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in the story about Ramon and Lola is most ironic?",
          choices: [
            { letter: "A", text: "Lola keeps buttons in a bag under her bed." },
            { letter: "B", text: "Ramon helps his grandmother fold sweaters." },
            { letter: "C", text: "Ramon first mistakes the patent for a diploma." },
            { letter: "D", text: "The family used Lola's invention daily without knowing it." }
          ],
          correct: "D"
        },
        {
          id: "lola",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Lola Corazon's words in sentence 11 characterize her as someone who —",
          choices: [
            { letter: "A", text: "regrets selling her idea so cheaply" },
            { letter: "B", text: "cares more that the basket is useful than about credit" },
            { letter: "C", text: "wants Ramon to become an inventor too" },
            { letter: "D", text: "is embarrassed by her lack of schooling" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The final sentence, in which Lola smiles into her bowl, mainly serves to —",
          choices: [
            { letter: "A", text: "show that she is quietly pleased by Ramon's interest" },
            { letter: "B", text: "suggest that she is hiding another invention" },
            { letter: "C", text: "reveal that she dislikes the family's cooking" },
            { letter: "D", text: "explain why she is moving to Ramon's house" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c69-ash-street",
      family: "G10",
      title: "The Hydrant That Started It",
      kind: "Informational · 10.RI",
      blurb: "How one burst fire hydrant grew into a city's summer block party program.",
      level: 2,
      passage:
        "<p>" + N(1) + "Few city programs begin with a broken fire hydrant, but the Fairmont Neighborhood Days program did. " +
        N(2) + "In the summer of 1967, a hydrant on Ash Street burst during a heat wave, and dozens of children who had been stuck indoors poured into the spray. " +
        N(3) + "Neighbors who had never spoken carried out lawn chairs, someone brought a radio, and by evening the street had become a party. " +
        N(4) + "A city council member who lived nearby, Harriet Oduya, noticed something the next morning: the street felt friendlier. " +
        N(5) + "Within two years, she persuaded the council to let residents close their own blocks for one day each summer. " +
        N(6) + "The early rules were simple. " +
        N(7) + "Residents needed a petition, a promise to clean up, and a single barricade, which the city loaned for free. " +
        N(8) + "In 1969, eleven blocks held parties; by 1980, more than three hundred did. " +
        N(9) + "Researchers at the local university later surveyed residents and found that people on blocks with yearly parties were twice as likely to know their neighbors' names. " +
        N(10) + "The program has changed over time. " +
        N(11) + "Today residents apply online, and the rules require an open emergency lane that the 1969 version never mentioned. " +
        N(12) + "Still, organizers say the heart of the idea has not changed since that hot afternoon on Ash Street. " +
        N(13) + "As one longtime host put it, \"The party is just the excuse. The point is the Tuesday after, when you wave.\"" +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the Ash Street passage?",
          choices: [
            { letter: "A", text: "City hydrants should be opened for children during heat waves." },
            { letter: "B", text: "Block party rules have become too complicated over time." },
            { letter: "C", text: "Harriet Oduya was the most popular council member in Fairmont." },
            { letter: "D", text: "An unplanned gathering grew into a lasting program that connects neighbors." }
          ],
          correct: "D"
        },
        {
          id: "order",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 2 through 8 of the Fairmont passage mainly organized?",
          choices: [
            { letter: "A", text: "in time order, from the burst hydrant to the program's growth" },
            { letter: "B", text: "as a list of arguments for and against block parties" },
            { letter: "C", text: "as a comparison between Fairmont and another city" },
            { letter: "D", text: "as a question followed by several possible answers" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence provides the strongest evidence that Fairmont's block parties help neighbors get to know one another?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "B"
        },
        {
          id: "tuesday",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The host's remark about the Tuesday after, in sentence 13, mainly emphasizes that —",
          choices: [
            { letter: "A", text: "most block parties are held early in the week" },
            { letter: "B", text: "cleanup often takes several days to finish" },
            { letter: "C", text: "the lasting benefit is everyday friendliness after the party" },
            { letter: "D", text: "neighbors wave to signal that a party is starting" }
          ],
          correct: "C"
        },
        {
          id: "online",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes the details about online applications and emergency lanes in sentence 11 mainly to —",
          choices: [
            { letter: "A", text: "complain that today's rules are unfair" },
            { letter: "B", text: "explain why fewer blocks hold parties now" },
            { letter: "C", text: "show how the program has changed since it began" },
            { letter: "D", text: "prove that the 1969 rules caused accidents" }
          ],
          correct: "C"
        },
        {
          id: "opening",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author opens with the claim that few programs begin with a broken fire hydrant (sentence 1) mainly to —",
          choices: [
            { letter: "A", text: "warn readers about aging city equipment" },
            { letter: "B", text: "introduce a surprising origin that draws the reader in" },
            { letter: "C", text: "argue that the city should repair its hydrants" },
            { letter: "D", text: "compare Fairmont's program with others in the state" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rl-c69-color-guard",
      family: "G10",
      title: "On the Next Eight",
      kind: "Literary · 10.RL",
      blurb: "A color guard member drops her flag at the championship and has eight counts to recover.",
      level: 2,
      passage:
        "<p>" + N(1) + "At the Valley Championship, the color guard's routine came down to a single toss in the final minute: six flags spinning high into the stadium lights, caught on the same count. " +
        N(2) + "Imani Clarke had made the catch a thousand times in practice. " +
        N(3) + "This time a gust caught the silk, and the pole bounced off her fingertips and clattered onto the turf. " +
        N(4) + "For one count she simply stared at it, while the band thundered on around her and the other five flags came down into five steady hands. " +
        N(5) + "Her captain, Sofia, had told them what to do if this ever happened: pick it up on the next eight, keep your face, finish the show. " +
        N(6) + "Imani had always nodded at that advice the way people nod at fire drill instructions, sure they will never need them. " +
        N(7) + "Now she bent, scooped the pole up on count three, and was back in the line by count eight, wearing a smile that felt glued on. " +
        N(8) + "When the guard ran off the field, she waited for someone to say it. " +
        N(9) + "No one did. " +
        N(10) + "Instead Sofia slung an arm around her shoulders and said, \"Best recovery I've seen all year.\" " +
        N(11) + "Later the scores were posted: the band had placed second, a single tenth of a point behind first. " +
        N(12) + "Imani stared at the number, certain it was her fault, until Sofia pointed to the judge's sheet, where beside the guard's score someone had written, \"Poise under pressure — excellent.\"" +
        "</p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The central conflict of the color guard story is best described as a struggle between —",
          choices: [
            { letter: "A", text: "Imani and Sofia over who should lead the guard" },
            { letter: "B", text: "Imani's shock at her mistake and her need to keep performing" },
            { letter: "C", text: "the color guard and the band over the music" },
            { letter: "D", text: "the judges and the crowd over the final scores" }
          ],
          correct: "B"
        },
        {
          id: "drill",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In sentence 6, comparing Imani's nodding to the way people nod at fire drill instructions suggests that she —",
          choices: [
            { letter: "A", text: "never expected to need Sofia's advice" },
            { letter: "B", text: "was afraid of fires at the stadium" },
            { letter: "C", text: "disagreed with the captain's plan" },
            { letter: "D", text: "had already used the advice many times" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The mood of sentence 4, as Imani stares at the fallen flag while the band plays on, is best described as —",
          choices: [
            { letter: "A", text: "cheerful and lively" },
            { letter: "B", text: "relaxed and dreamy" },
            { letter: "C", text: "angry and bitter" },
            { letter: "D", text: "frozen and tense" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in the Valley Championship story is most ironic?",
          choices: [
            { letter: "A", text: "The guard practices the toss a thousand times." },
            { letter: "B", text: "The band places second by a tenth of a point." },
            { letter: "C", text: "The mistake Imani dreads leads a judge to praise the guard." },
            { letter: "D", text: "Sofia gives the guard advice before the show." }
          ],
          correct: "C"
        },
        {
          id: "sofia",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of Sofia's words to Imani in sentence 10 is best described as —",
          choices: [
            { letter: "A", text: "supportive and generous" },
            { letter: "B", text: "sarcastic and cold" },
            { letter: "C", text: "worried and nervous" },
            { letter: "D", text: "strict and disappointed" }
          ],
          correct: "A"
        },
        {
          id: "poise",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 12, the judge's phrase Poise under pressure uses poise to mean —",
          choices: [
            { letter: "A", text: "speed and strength" },
            { letter: "B", text: "height of a throw" },
            { letter: "C", text: "calm self-control" },
            { letter: "D", text: "bright costumes" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-ri-c69-lightning-myth",
      family: "G10",
      title: "The Myth of the Lightning Bolt",
      kind: "Informational · 10.RI",
      blurb: "Patent records suggest that most inventions are small fixes, one invented inventor at a time.",
      level: 3,
      passage:
        "<p>" + N(1) + "Popular stories about invention tend to feature a lightning bolt: a lone genius, a sudden idea, and a finished machine by morning. " +
        N(2) + "Patent records tell a slower and, in some ways, more encouraging story. " +
        N(3) + "When researchers at the Brennan Institute reviewed a sample of five thousand patents, they found that fewer than one in ten described a truly new kind of device. " +
        N(4) + "The rest were improvements: a quieter motor, a sturdier hinge, a cheaper way to make something that already existed. " +
        N(5) + "Consider the case of Marguerite Osei-Laurent, an engineer who holds eleven patents on wheelchairs. " +
        N(6) + "Not one of them is for the wheelchair itself. " +
        N(7) + "Her first patent covered a brake that a rider could set with one hand; her fourth, a frame that folded small enough to fit in a car trunk; her ninth, a tire that would not go flat on gravel. " +
        N(8) + "Each idea came from a complaint she heard from a rider, and each built on the patent before it. " +
        N(9) + "Some critics argue that this flood of small patents slows progress, because companies must check thousands of earlier claims before they build anything. " +
        N(10) + "That concern is real, and patent offices have tightened their reviews in response. " +
        N(11) + "Yet the larger lesson of the records is hopeful. " +
        N(12) + "Invention is less like lightning than like weather: a steady build-up of small changes that, over time, reshapes the landscape. " +
        N(13) + "Anyone who notices a problem and patiently fixes it is taking part." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "What is the author's main idea in the passage about the lightning bolt myth?",
          choices: [
            { letter: "A", text: "Patent offices should stop approving small improvements." },
            { letter: "B", text: "Wheelchair design has not changed in many years." },
            { letter: "C", text: "Most inventions are gradual improvements open to ordinary problem-solvers." },
            { letter: "D", text: "Lone geniuses are responsible for most important machines." }
          ],
          correct: "C"
        },
        {
          id: "support",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which detail best supports the claim that most patents describe improvements rather than new devices?",
          choices: [
            { letter: "A", text: "Fewer than one in ten sampled patents described a new device." },
            { letter: "B", text: "Marguerite Osei-Laurent heard complaints from riders." },
            { letter: "C", text: "Patent offices have tightened their reviews." },
            { letter: "D", text: "Popular stories feature a lone genius and a sudden idea." }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 5 through 8, about Marguerite Osei-Laurent, organized?",
          choices: [
            { letter: "A", text: "as an argument followed by a counterargument" },
            { letter: "B", text: "as one example traced through a series of related improvements" },
            { letter: "C", text: "as a comparison of two competing inventors" },
            { letter: "D", text: "as a definition followed by a list of terms" }
          ],
          correct: "B"
        },
        {
          id: "critics",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Sentences 9 and 10, about the flood of small patents, strengthen the author's argument by —",
          choices: [
            { letter: "A", text: "proving that the critics are completely wrong" },
            { letter: "B", text: "showing that the Brennan study was flawed" },
            { letter: "C", text: "changing the author's position on small patents" },
            { letter: "D", text: "admitting a fair objection and noting a response to it" }
          ],
          correct: "D"
        },
        {
          id: "weather",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The comparison of invention to weather in sentence 12 mainly emphasizes that —",
          choices: [
            { letter: "A", text: "inventions are hard to predict and often dangerous" },
            { letter: "B", text: "most inventors work outdoors" },
            { letter: "C", text: "big changes come from many small steps adding up" },
            { letter: "D", text: "the best ideas come during storms" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The author's tone toward everyday inventors in sentences 11 through 13 is best described as —",
          choices: [
            { letter: "A", text: "doubtful" },
            { letter: "B", text: "impatient" },
            { letter: "C", text: "amused" },
            { letter: "D", text: "encouraging" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
