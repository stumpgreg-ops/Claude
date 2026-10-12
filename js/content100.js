/* SOL Labyrinth — Grade 11 mid-tier expansion packs (v5.15, nights 51-64): a family restaurant, mountain hiking,
 * app design and coding, and photography. 17 packs x 7 questions. Original text only.
 * Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* 1 · LITERARY · family restaurant */
    {
      id: "g11-rl-c100-ferreira-oven",
      family: "G11",
      title: "The Chalkboard",
      kind: "Literary · 11.RL",
      blurb: "Lucia is running her family's restaurant for the first time when the oven dies in the middle of the Friday rush.",
      level: 2,
      passage:
        "<p>" + N(1) + "The ticket printer at Casa Ferreira chattered like a nervous bird, and nearly every slip it pushed out was another order for the roast chicken. " +
        N(2) + "Lucia Ferreira, sixteen, stood at the pass with an apron tied twice around her waist because it was her father's. " +
        N(3) + "He was home with a fever, and for the first time she was running the Friday dinner rush with only her cousin Beto on the grill and Mrs. Adebayo at the dish sink.</p>" +
        "<p>" + N(4) + "At seven-fifteen, the big oven clicked, sighed, and went cold. " +
        N(5) + "Beto twisted the knob, slapped the steel door, and twisted the knob again. " +
        N(6) + "\"It's the igniter,\" he said. " +
        N(7) + "\"Nobody is fixing that tonight.\"</p>" +
        "<p>" + N(8) + "Lucia looked through the round window in the kitchen door. " +
        N(9) + "Eleven tables were full, and three more parties waited by the coat rack, studying the chalkboard where her father had written ROAST CHICKEN in letters as tall as her hand. " +
        N(10) + "Her first thought was to keep quiet, send plates out slowly, and hope nobody noticed. " +
        N(11) + "Her second thought was her father's rule, which the whole staff could recite: a guest forgives a closed kitchen faster than a hidden one.</p>" +
        "<p>" + N(12) + "She took a breath, wiped the chalkboard clean, and walked from table to table. " +
        N(13) + "She told each party the truth: the oven had died and the chicken was off, but the grill was hot, and there was cold rice salad, grilled sardines, and her grandmother's kale soup. " +
        N(14) + "Anyone who wanted to leave could go with no hard feelings. " +
        N(15) + "Two couples left. " +
        N(16) + "Everyone else stayed, and a man at table six, a regular for nine years, asked for \"whatever the cook is proudest of.\"</p>" +
        "<p>" + N(17) + "By ten o'clock the soup pot was scraped clean. " +
        N(18) + "Beto's forearms were speckled with grease, and Mrs. Adebayo was humming. " +
        N(19) + "Lucia counted the register and found it short of a normal Friday, though not by as much as she had feared.</p>" +
        "<p>" + N(20) + "When she got home, her father was awake on the couch. " +
        N(21) + "\"How bad?\" he asked. " +
        N(22) + "She told him about the oven, the chalkboard, and table six. " +
        N(23) + "He was quiet for a moment, then reached up and tugged once on the apron strings. " +
        N(24) + "\"Next week,\" he said, \"you write the specials.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about Lucia and the broken oven?",
          choices: [
            { letter: "A", text: "A restaurant succeeds only when its equipment is reliable." },
            { letter: "B", text: "Honesty during a setback can strengthen people's trust." },
            { letter: "C", text: "Young workers should wait until they are asked to lead." },
            { letter: "D", text: "Loyal customers will accept any meal they are served." }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Lucia's actions in sentence 12 reveal that she —",
          choices: [
            { letter: "A", text: "chooses her father's principle over the easier path of hiding" },
            { letter: "B", text: "wants the waiting guests to leave so the kitchen can close early" },
            { letter: "C", text: "blames Beto for the oven and wants the guests to know it" },
            { letter: "D", text: "plans to change the restaurant's menu without her father" }
          ],
          correct: "A"
        },
        {
          id: "simile",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 1, comparing the ticket printer to a nervous bird mainly emphasizes —",
          choices: [
            { letter: "A", text: "how old and unreliable the restaurant's machines are" },
            { letter: "B", text: "how quietly the kitchen runs on an ordinary Friday" },
            { letter: "C", text: "how little Lucia knows about running the kitchen" },
            { letter: "D", text: "how quickly orders pile up during the dinner rush" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Which sentence best supports the inference that most guests valued Lucia's openness?",
          choices: [
            { letter: "A", text: "Sentence 9, about the parties studying the chalkboard" },
            { letter: "B", text: "Sentence 15, about the two couples who left" },
            { letter: "C", text: "Sentence 16, about the guests who stayed and table six" },
            { letter: "D", text: "Sentence 19, about the register coming up short" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The father's gesture and words in sentences 23 and 24 resolve the story by showing that he —",
          choices: [
            { letter: "A", text: "trusts Lucia with more responsibility because of her choice" },
            { letter: "B", text: "is disappointed that the register was short that night" },
            { letter: "C", text: "plans to replace the chicken with soup on future menus" },
            { letter: "D", text: "wants Lucia to stop working until the oven is repaired" }
          ],
          correct: "A"
        },
        {
          id: "short",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 19, the word short most nearly means —",
          choices: [
            { letter: "A", text: "quick to lose patience" },
            { letter: "B", text: "brief in length of time" },
            { letter: "C", text: "small in physical height" },
            { letter: "D", text: "below the usual amount" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The tone of the father's final line in sentence 24 is best described as —",
          choices: [
            { letter: "A", text: "stern and disapproving" },
            { letter: "B", text: "weary and indifferent" },
            { letter: "C", text: "quietly approving" },
            { letter: "D", text: "nervous and doubtful" }
          ],
          correct: "C"
        }
      ]
    },
    /* 2 · LITERARY · mountain hiking */
    {
      id: "g11-rl-c100-kestrel-ridge",
      family: "G11",
      title: "Three Hundred Feet",
      kind: "Literary · 11.RL",
      blurb: "Kai and his grandfather are close to the top of Kestrel Ridge when the fog arrives.",
      level: 1,
      passage:
        "<p>" + N(1) + "Kai Nakamura had been staring at the summit of Kestrel Ridge on his phone's map for a week. " +
        N(2) + "The trail climbed four miles through spruce and loose rock to a stone marker at the top, and his grandfather had promised that this summer they would finally reach it together.</p>" +
        "<p>" + N(3) + "They started at dawn. " +
        N(4) + "Grandpa Hiro walked slowly but never stopped, his wooden pole tapping the trail in a steady rhythm. " +
        N(5) + "Kai kept rushing ahead and then waiting on rocks, pretending he was not out of breath. " +
        N(6) + "By late morning the trees had thinned to bushes, and the bushes had thinned to bare stone.</p>" +
        "<p>" + N(7) + "Then the fog came. " +
        N(8) + "It rolled up from the valley like milk poured into a bowl, and within ten minutes Kai could not see the cairns that marked the path. " +
        N(9) + "The air turned cold and damp. " +
        N(10) + "His phone said the summit was only three hundred feet above them.</p>" +
        "<p>" + N(11) + "\"We go down,\" Grandpa Hiro said.</p>" +
        "<p>" + N(12) + "\"We're almost there!\" Kai pointed at the screen. " +
        N(13) + "\"Ten more minutes.\"</p>" +
        "<p>" + N(14) + "His grandfather did not argue. " +
        N(15) + "He simply turned around and began walking downhill, tapping his pole on each rock before he stepped on it. " +
        N(16) + "Kai stood there, furious, for as long as he dared, and then he followed.</p>" +
        "<p>" + N(17) + "They walked in silence for nearly an hour. " +
        N(18) + "Below the tree line, the fog began to tear apart, and suddenly Kai could see the whole valley spread beneath them: the lake, the road, the tiny red roof of the ranger station. " +
        N(19) + "Behind them, the ridge had disappeared into a gray wall of cloud. " +
        N(20) + "Somewhere up there, a hiker was shouting a name, over and over, and nobody was answering.</p>" +
        "<p>" + N(21) + "Kai looked at his grandfather. " +
        N(22) + "Grandpa Hiro only nodded and kept walking. " +
        N(23) + "\"The mountain will be there next summer,\" he said. " +
        N(24) + "\"We should be too.\"</p>" +
        "<p>" + N(25) + "That night Kai deleted the summit pin from his map, then put it back, and added a note beneath it: next year, with a better forecast.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the story of Kai's climb on Kestrel Ridge most clearly develop?",
          choices: [
            { letter: "A", text: "Reaching a goal matters less than making it home safely." },
            { letter: "B", text: "Young people are always more capable than their elders." },
            { letter: "C", text: "Technology is the most reliable guide in the wilderness." },
            { letter: "D", text: "A promise made to family must be kept at any cost." }
          ],
          correct: "A"
        },
        {
          id: "simile",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 8, the comparison of the fog to milk poured into a bowl suggests that the fog —",
          choices: [
            { letter: "A", text: "smells sour and unpleasant" },
            { letter: "B", text: "fills the valley thickly and fast" },
            { letter: "C", text: "lasts only a few short seconds" },
            { letter: "D", text: "glows brightly in the sunlight" }
          ],
          correct: "B"
        },
        {
          id: "grandpa",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Grandpa Hiro's choice not to argue with Kai in sentences 14 and 15 shows that he is —",
          choices: [
            { letter: "A", text: "too tired to keep climbing the ridge" },
            { letter: "B", text: "unsure of which way leads downhill" },
            { letter: "C", text: "calm and certain about his decision" },
            { letter: "D", text: "angry that Kai looked at his phone" }
          ],
          correct: "C"
        },
        {
          id: "shout",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The detail about the shouting hiker in sentence 20 mainly helps the reader infer that —",
          choices: [
            { letter: "A", text: "the summit was crowded with other hikers that day" },
            { letter: "B", text: "Kai had friends who were waiting for him on top" },
            { letter: "C", text: "the ranger station was too far away to hear him" },
            { letter: "D", text: "staying on the ridge in the fog was truly dangerous" }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Sentence 7 is set apart as a short sentence at the start of a paragraph mainly to —",
          choices: [
            { letter: "A", text: "mark a sudden turn in the hike" },
            { letter: "B", text: "describe the plants on the trail" },
            { letter: "C", text: "explain how the cairns were built" },
            { letter: "D", text: "show that Kai is tired of walking" }
          ],
          correct: "A"
        },
        {
          id: "furious",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 16, the word furious most nearly means —",
          choices: [
            { letter: "A", text: "very frightened" },
            { letter: "B", text: "deeply puzzled" },
            { letter: "C", text: "slightly bored" },
            { letter: "D", text: "extremely angry" }
          ],
          correct: "D"
        },
        {
          id: "thinned",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "In sentence 6, the repeated word thinned helps show that Kai and his grandfather —",
          choices: [
            { letter: "A", text: "were walking slower as the morning went on" },
            { letter: "B", text: "had climbed above where most plants grow" },
            { letter: "C", text: "were following a path that grew narrower" },
            { letter: "D", text: "had lost weight during the long, hard hike" }
          ],
          correct: "B"
        }
      ]
    },
    /* 3 · LITERARY · app design and coding */
    {
      id: "g11-rl-c100-next-bus",
      family: "G11",
      title: "Next Bus",
      kind: "Literary · 11.RL",
      blurb: "A student's bus-tracking app is a hit until a bug strands a freshman in the sleet.",
      level: 3,
      passage:
        "<p>" + N(1) + "The app was called Next Bus, and for six weeks it was the most popular thing I had ever made. " +
        N(2) + "I built it over winter break for the students at Halvorsen High, pulling the county's live bus data into a map so plain that even my little brother could read it: a yellow dot, a stop, a number of minutes. " +
        N(3) + "By February, nine hundred people had downloaded it, and strangers in the hallway called me the bus girl, which I pretended to dislike.</p>" +
        "<p>" + N(4) + "The bug appeared on a Tuesday. " +
        N(5) + "The county changed the format of its data feed overnight, and my code, which I had written in a hurry and never truly tested, began reading minutes as seconds. " +
        N(6) + "For three hours, every bus on the map looked far away. " +
        N(7) + "A freshman named Tomas Oyelaran trusted it, stayed in the library to finish his notes, and missed the last bus home in the sleet.</p>" +
        "<p>" + N(8) + "I found out because his older sister sent me a photo of him standing at an empty stop, his hood soaked dark. " +
        N(9) + "She did not write anything. " +
        N(10) + "She did not have to.</p>" +
        "<p>" + N(11) + "I fixed the code in forty minutes. " +
        N(12) + "The harder part was what came next. " +
        N(13) + "My friend Dmitri said I should push the update quietly and say nothing; most users would never know, and the app's rating would stay perfect. " +
        N(14) + "That was true. " +
        N(15) + "It was also exactly the kind of truth that only works if you never look at it straight.</p>" +
        "<p>" + N(16) + "Instead I wrote a note that appeared the next time anyone opened Next Bus. " +
        N(17) + "It explained what had broken, when, and why, and it said that until I could test the app properly, people should treat the times as a guess and not a promise. " +
        N(18) + "I lost two hundred users that week, and the rating dropped to four stars.</p>" +
        "<p>" + N(19) + "On Friday, Tomas found me at my locker. " +
        N(20) + "I expected him to be angry. " +
        N(21) + "Instead he asked how the data feed worked, and whether he could help me write the tests I had skipped. " +
        N(22) + "I keep his first contribution pinned at the top of the project: a single line of code that checks whether a number makes sense before the app believes it.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme developed in the narrator's account of the Next Bus app?",
          choices: [
            { letter: "A", text: "Popular projects should never be changed once people rely on them." },
            { letter: "B", text: "Data shared by local governments is too unreliable to build upon." },
            { letter: "C", text: "Owning a mistake openly can turn a failure into a way to improve." },
            { letter: "D", text: "A friend's practical advice is usually wiser than one's conscience." }
          ],
          correct: "C"
        },
        {
          id: "silence",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Sentences 9 and 10 suggest that the photo from Tomas's sister —",
          choices: [
            { letter: "A", text: "expressed blame more powerfully than any message could" },
            { letter: "B", text: "was sent to the narrator by mistake late that evening" },
            { letter: "C", text: "showed that Tomas had not been harmed by the delay" },
            { letter: "D", text: "asked the narrator to delete the app from the store" }
          ],
          correct: "A"
        },
        {
          id: "straight",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 15, the narrator's remark that some truths only work if you never look at them straight suggests that Dmitri's advice —",
          choices: [
            { letter: "A", text: "is false and would be easy for users to disprove" },
            { letter: "B", text: "comes from a careful study of how users behave" },
            { letter: "C", text: "would make the app's rating fall even further" },
            { letter: "D", text: "is accurate on the surface but avoids honesty" }
          ],
          correct: "D"
        },
        {
          id: "pov",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "The story is told in the first person by the app's creator. This choice mainly allows the reader to —",
          choices: [
            { letter: "A", text: "learn how the county collects its bus data" },
            { letter: "B", text: "follow her private reasoning as she decides" },
            { letter: "C", text: "understand exactly what Tomas felt at the stop" },
            { letter: "D", text: "compare the opinions of every app user equally" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Which statement best describes how the creator of Next Bus changes over the course of the story?",
          choices: [
            { letter: "A", text: "She moves from enjoying attention to taking responsibility." },
            { letter: "B", text: "She moves from trusting her friends to doubting all of them." },
            { letter: "C", text: "She moves from disliking code to wanting a career in it." },
            { letter: "D", text: "She moves from helping freshmen to avoiding them entirely." }
          ],
          correct: "A"
        },
        {
          id: "guess",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 17, the narrator's contrast between a guess and a promise signals that users should —",
          choices: [
            { letter: "A", text: "stop using the app until a new version is released" },
            { letter: "B", text: "report every wrong time directly to the county" },
            { letter: "C", text: "treat the bus times as rough, uncertain estimates" },
            { letter: "D", text: "share the app with friends who ride other buses" }
          ],
          correct: "C"
        },
        {
          id: "symbol",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The pinned line of code described in sentence 22 most clearly symbolizes —",
          choices: [
            { letter: "A", text: "the narrator's wish to forget the whole episode" },
            { letter: "B", text: "the popularity the app enjoyed before the bug" },
            { letter: "C", text: "Dmitri's belief that users would never notice" },
            { letter: "D", text: "a hard lesson turned into a lasting safeguard" }
          ],
          correct: "D"
        }
      ]
    },
    /* 4 · LITERARY · photography */
    {
      id: "g11-rl-c100-relay-cover",
      family: "G11",
      title: "Finish",
      kind: "Literary · 11.RL",
      blurb: "Nadia is supposed to photograph the relay finish for the yearbook cover. Then a runner falls on the curve.",
      level: 2,
      passage:
        "<p>" + N(1) + "Coach Velasquez had given Nadia Rahimi one job at the district championship: get the finish of the 4x400 relay, the last race of the season, the one the Riverbend girls had a real chance to win. " +
        N(2) + "Gabe, the yearbook editor, had said the same thing in fewer words. " +
        N(3) + "\"Tape. Arms up. Cover.\"</p>" +
        "<p>" + N(4) + "Nadia found a spot just past the finish line, knelt on the rubber track, and set her camera to fire eight frames a second. " +
        N(5) + "She had practiced the shot all week, following runners with her lens until her shoulders ached. " +
        N(6) + "When the gun went off, she breathed slowly, the way she did before a free throw.</p>" +
        "<p>" + N(7) + "On the third leg, something went wrong. " +
        N(8) + "Riverbend's runner, a sophomore named Ana Lucia Bravo, clipped another girl's heel on the curve and went down hard. " +
        N(9) + "The crowd made a sound like a wave pulling back. " +
        N(10) + "Nadia should have kept her lens on the finish line, where the anchors were already waiting. " +
        N(11) + "Instead she swung toward the curve.</p>" +
        "<p>" + N(12) + "Through the viewfinder, Ana Lucia pushed herself up on scraped palms, grabbed the baton, and ran. " +
        N(13) + "She was forty meters behind, then thirty, and she did not stop until she had slapped the baton into the anchor's hand. " +
        N(14) + "Nadia held the shutter down the whole time. " +
        N(15) + "Behind her, Riverbend finished fifth, and she never saw it.</p>" +
        "<p>" + N(16) + "Gabe was waiting at the bus. " +
        N(17) + "\"Tell me you got the finish.\" " +
        N(18) + "She shook her head and handed him the camera. " +
        N(19) + "He scrolled, frowning, past forty pictures of a girl on the ground and a girl getting up, and then his thumb slowed. " +
        N(20) + "He stopped on one frame: Ana Lucia's face pinched with effort, a stripe of red on her knee, the baton held out in front of her like something she had promised to deliver.</p>" +
        "<p>" + N(21) + "\"This isn't a finish,\" he said at last. " +
        N(22) + "\"No,\" Nadia said. " +
        N(23) + "He was quiet the whole ride home. " +
        N(24) + "In May, when the yearbooks arrived, that frame was on the cover, and under it, in small white letters, was a single word: Finish.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is best supported by the story of Nadia's relay photographs?",
          choices: [
            { letter: "A", text: "Careful practice always produces the result one planned." },
            { letter: "B", text: "Winning is the only moment worth remembering in sports." },
            { letter: "C", text: "Editors usually know best which pictures tell a story." },
            { letter: "D", text: "An act of persistence can mean more than a victory." }
          ],
          correct: "D"
        },
        {
          id: "nadia",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Nadia's choice in sentence 11 shows that she —",
          choices: [
            { letter: "A", text: "wants to embarrass the runner who fell on the curve" },
            { letter: "B", text: "trusts her instinct about which moment truly matters" },
            { letter: "C", text: "has forgotten what Coach Velasquez asked her to do" },
            { letter: "D", text: "believes Riverbend has no chance of placing at all" }
          ],
          correct: "B"
        },
        {
          id: "wave",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 9, comparing the crowd's sound to a wave pulling back mainly emphasizes —",
          choices: [
            { letter: "A", text: "the crowd's sudden, shared intake of breath" },
            { letter: "B", text: "the noise of the wind blowing across the track" },
            { letter: "C", text: "the crowd's growing boredom with the long race" },
            { letter: "D", text: "the cheering that rose as the anchors waited" }
          ],
          correct: "A"
        },
        {
          id: "baton",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "In sentence 20, describing the baton as something Ana Lucia had promised to deliver suggests that she —",
          choices: [
            { letter: "A", text: "plans to keep the baton as a souvenir of the race" },
            { letter: "B", text: "hopes the judges will excuse her for falling" },
            { letter: "C", text: "feels a duty to her team to finish her leg" },
            { letter: "D", text: "is angry with the runner who tripped her" }
          ],
          correct: "C"
        },
        {
          id: "gabe",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Which sentence best shows that Gabe begins to see the value of Nadia's photographs?",
          choices: [
            { letter: "A", text: "Sentence 16, which places him beside the bus" },
            { letter: "B", text: "Sentence 17, which repeats his demand for the finish" },
            { letter: "C", text: "Sentence 19, which notes that his thumb slowed" },
            { letter: "D", text: "Sentence 21, which says the picture is not a finish" }
          ],
          correct: "C"
        },
        {
          id: "cover",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The single word printed on the yearbook cover in sentence 24 resolves the story by —",
          choices: [
            { letter: "A", text: "admitting that Riverbend lost the championship" },
            { letter: "B", text: "giving the word finish a new meaning tied to effort" },
            { letter: "C", text: "showing that Gabe chose a different photo instead" },
            { letter: "D", text: "explaining why Nadia missed the end of the race" }
          ],
          correct: "B"
        },
        {
          id: "pinched",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 20, the word pinched most nearly means —",
          choices: [
            { letter: "A", text: "tightened" },
            { letter: "B", text: "bruised" },
            { letter: "C", text: "stolen" },
            { letter: "D", text: "relaxed" }
          ],
          correct: "A"
        }
      ]
    },
    /* 5 · INFORMATIONAL · photography */
    {
      id: "g11-ri-c100-dark-room",
      family: "G11",
      title: "Light, Carefully Let In",
      kind: "Informational · 11.RI",
      blurb: "How a hole in a dark room explains every camera, and how to build one from a shoebox.",
      level: 1,
      passage:
        "<p>" + N(1) + "Long before anyone sold film or memory cards, people noticed something strange about dark rooms. " +
        N(2) + "If a small hole let sunlight into an otherwise black space, an image of the world outside appeared on the opposite wall, upside down and in full color. " +
        N(3) + "This effect is called a camera obscura, from Latin words meaning dark room, and it is the basic idea behind every camera ever built.</p>" +
        "<p>" + N(4) + "The science is simple. " +
        N(5) + "Light travels in straight lines. " +
        N(6) + "Light from the top of a tree outside passes through the hole and continues downward to the bottom of the wall, while light from the bottom of the tree travels upward to the top. " +
        N(7) + "The rays cross at the hole, so the picture flips. " +
        N(8) + "A smaller hole makes a sharper image because fewer stray rays overlap, but it also lets in less light, so the image grows dimmer.</p>" +
        "<p>" + N(9) + "That tradeoff between sharpness and brightness still shapes photography today. " +
        N(10) + "Modern cameras replace the hole with a glass lens, which gathers more light while still focusing it to a sharp point. " +
        N(11) + "The adjustable opening inside a lens, called the aperture, works much like the old hole: narrow it, and more of the scene stays in focus; widen it, and the picture brightens but the background blurs.</p>" +
        "<p>" + N(12) + "Students can test these ideas with a shoebox. " +
        N(13) + "Cut a square in one end, cover it with foil, and poke a hole in the foil with a pin. " +
        N(14) + "Remove the opposite end, tape wax paper across the opening, drape a dark towel over your head and the box, and point the pinhole at a bright window. " +
        N(15) + "A small, upside-down scene will glow on the wax paper. " +
        N(16) + "Try a slightly larger hole, and you will see the picture brighten and soften at once.</p>" +
        "<p>" + N(17) + "Nothing about this experiment requires electricity, software, or money beyond a few cents of foil. " +
        N(18) + "That is part of its appeal. " +
        N(19) + "Before a student learns the settings on any camera, the shoebox teaches the one rule underneath them all: a photograph is simply light, carefully let in.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the passage about the camera obscura?",
          choices: [
            { letter: "A", text: "Modern lenses have made the old pinhole method useless." },
            { letter: "B", text: "How light passes through a small hole underlies all cameras." },
            { letter: "C", text: "Shoebox cameras take sharper pictures than modern ones." },
            { letter: "D", text: "Photography was invented by students working in dark rooms." }
          ],
          correct: "B"
        },
        {
          id: "flip",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, why does the image in a camera obscura appear upside down?",
          choices: [
            { letter: "A", text: "The wall reflects the light back toward the hole." },
            { letter: "B", text: "The room is too dark for the colors to show clearly." },
            { letter: "C", text: "A smaller hole lets in light from fewer directions." },
            { letter: "D", text: "Light travels in straight lines that cross at the hole." }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author mainly organize sentences 4-8 of the camera obscura passage?",
          choices: [
            { letter: "A", text: "by explaining a cause and its effects step by step" },
            { letter: "B", text: "by comparing two inventors who built early cameras" },
            { letter: "C", text: "by listing events in the order they happened in history" },
            { letter: "D", text: "by presenting a problem and then several solutions" }
          ],
          correct: "A"
        },
        {
          id: "shoebox",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the shoebox instructions in sentences 12-16 mainly to —",
          choices: [
            { letter: "A", text: "warn readers that pinhole cameras can be unsafe" },
            { letter: "B", text: "show that modern cameras are needlessly costly" },
            { letter: "C", text: "let readers observe the principle for themselves" },
            { letter: "D", text: "explain how the first cameras were sold in shops" }
          ],
          correct: "C"
        },
        {
          id: "audience",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The intended audience for the passage about dark rooms and pinholes is most likely —",
          choices: [
            { letter: "A", text: "camera engineers designing new lenses" },
            { letter: "B", text: "historians studying ancient Latin texts" },
            { letter: "C", text: "students curious about how cameras work" },
            { letter: "D", text: "shop owners who sell photography supplies" }
          ],
          correct: "C"
        },
        {
          id: "tradeoff",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence best supports the claim in sentence 9 that the tradeoff still shapes photography today?",
          choices: [
            { letter: "A", text: "Sentence 11, which explains how narrowing or widening an aperture works" },
            { letter: "B", text: "Sentence 13, which tells readers to poke a hole with a pin" },
            { letter: "C", text: "Sentence 15, which describes the scene glowing on wax paper" },
            { letter: "D", text: "Sentence 17, which notes that the experiment needs no electricity" }
          ],
          correct: "A"
        },
        {
          id: "aperture",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word aperture in sentence 11 comes from a Latin root meaning to open. This root fits the passage's description of an aperture as —",
          choices: [
            { letter: "A", text: "a sheet of glass that bends light" },
            { letter: "B", text: "a dark room with a single window" },
            { letter: "C", text: "a screen made of thin wax paper" },
            { letter: "D", text: "an adjustable gap inside a lens" }
          ],
          correct: "D"
        }
      ]
    },
    /* 6 · INFORMATIONAL · app design and coding */
    {
      id: "g11-ri-c100-every-thumb",
      family: "G11",
      title: "Designing for Every Thumb",
      kind: "Informational · 11.RI",
      blurb: "Three basic rules of accessible app design, and why they end up helping nearly everyone.",
      level: 2,
      passage:
        "<p>" + N(1) + "When a team designs a phone app, it usually tests the app on its own members: people who see clearly, have steady hands, and understand the buttons because they invented them. " +
        N(2) + "The result can be an app that works beautifully for its makers and poorly for millions of others. " +
        N(3) + "Accessible design is the practice of building apps that more people can use, and its basic rules are less complicated than many developers assume.</p>" +
        "<p>" + N(4) + "The first rule concerns color. " +
        N(5) + "Roughly one in twelve men and one in two hundred women have some form of color vision deficiency, most often difficulty telling red from green. " +
        N(6) + "An app that marks errors only by turning a box red is, for these users, an app that marks errors not at all. " +
        N(7) + "Designers solve this by pairing color with a second signal, such as an icon or a written message.</p>" +
        "<p>" + N(8) + "The second rule concerns size. " +
        N(9) + "Many design guides recommend that any button be at least about nine millimeters across, roughly the width of a fingertip. " +
        N(10) + "Smaller targets cause mistaken taps, especially for older users, people with tremors, or anyone trying to use a phone on a bouncing bus.</p>" +
        "<p>" + N(11) + "The third rule concerns screen readers, programs that speak aloud what is on the screen for users who are blind or have low vision. " +
        N(12) + "A screen reader can announce a button only if the developer has given it a text label. " +
        N(13) + "An unlabeled picture of a trash can may look obvious, but to a screen reader it is simply \"button,\" a word that tells the user nothing.</p>" +
        "<p>" + N(14) + "Critics sometimes argue that these features serve a small group at great cost. " +
        N(15) + "The evidence suggests otherwise. " +
        N(16) + "Captions written for deaf viewers are now used by people watching videos in noisy cafes, and large buttons help anyone holding a coffee in the other hand. " +
        N(17) + "Designers call this the curb-cut effect, after the sloped sidewalk corners first built for wheelchairs and now used by every parent pushing a stroller. " +
        N(18) + "Designing for the edges, it turns out, often improves the center.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the main idea of the passage on accessible app design?",
          choices: [
            { letter: "A", text: "Simple accessible choices help disabled users and often everyone else." },
            { letter: "B", text: "Most app makers refuse to test their products on any outside users." },
            { letter: "C", text: "Screen readers are the most important invention in phone design." },
            { letter: "D", text: "Accessible features cost too much for small teams to include." }
          ],
          correct: "A"
        },
        {
          id: "label",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, why does an unlabeled trash-can button fail screen reader users?",
          choices: [
            { letter: "A", text: "The icon is drawn too small for the program to detect." },
            { letter: "B", text: "Screen readers cannot read any pictures in an app at all." },
            { letter: "C", text: "The program can announce it only as a meaningless word." },
            { letter: "D", text: "The button changes color when the user tries to tap it." }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author organizes sentences 4-13 of the accessible design passage mainly by —",
          choices: [
            { letter: "A", text: "tracing the history of phones from the first model" },
            { letter: "B", text: "presenting a series of rules, each with its problem" },
            { letter: "C", text: "comparing two apps that solved the same problem" },
            { letter: "D", text: "answering questions sent in by blind app users" }
          ],
          correct: "B"
        },
        {
          id: "notatall",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.2",
          stem: "In sentence 6, the author says such an app marks errors not at all mainly to —",
          choices: [
            { letter: "A", text: "suggest that red is a poor color for any button" },
            { letter: "B", text: "argue that error messages should be removed" },
            { letter: "C", text: "admit that most apps contain hidden errors" },
            { letter: "D", text: "stress that color alone fully fails some users" }
          ],
          correct: "D"
        },
        {
          id: "bus",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author mentions a bouncing bus in sentence 10 mainly to —",
          choices: [
            { letter: "A", text: "explain why many people avoid using apps on buses" },
            { letter: "B", text: "describe where most app designers do their testing" },
            { letter: "C", text: "suggest that transit companies should build apps" },
            { letter: "D", text: "show that tiny buttons trouble many kinds of users" }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author's attitude toward the critics mentioned in sentence 14 is best described as —",
          choices: [
            { letter: "A", text: "politely but firmly unconvinced" },
            { letter: "B", text: "completely won over by their case" },
            { letter: "C", text: "openly mocking and dismissive" },
            { letter: "D", text: "uncertain and unable to decide" }
          ],
          correct: "A"
        },
        {
          id: "edges",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 18, the edges and the center most nearly refer to —",
          choices: [
            { letter: "A", text: "the borders and middle of a phone screen" },
            { letter: "B", text: "small towns and large cities that use apps" },
            { letter: "C", text: "users with particular needs and typical users" },
            { letter: "D", text: "early versions and final versions of an app" }
          ],
          correct: "C"
        }
      ]
    },
    /* 7 · INFORMATIONAL · mountain hiking */
    {
      id: "g11-ri-c100-switchbacks",
      family: "G11",
      title: "Why the Trail Zigzags",
      kind: "Informational · 11.RI",
      blurb: "Shortcuts between switchbacks look harmless. The physics of running water says otherwise.",
      level: 3,
      passage:
        "<p>" + N(1) + "Hikers who reach the top of a steep switchback trail often notice faint, dusty lines running straight down the slope between the turns, places where earlier walkers decided the zigzag was a waste of time. " +
        N(2) + "These shortcuts, which trail crews call social trails, look harmless. " +
        N(3) + "They are, in fact, among the most destructive things a hiker can create on a mountain.</p>" +
        "<p>" + N(4) + "The reason lies in the behavior of water. " +
        N(5) + "A switchback trail is built to cross a slope at a gentle grade, usually no steeper than about one foot of rise for every ten feet of travel. " +
        N(6) + "At that angle, rain that lands on the path runs only a short distance before a stone or log set across the trail, called a water bar, turns it aside into the vegetation. " +
        N(7) + "A shortcut, by contrast, points straight downhill. " +
        N(8) + "Water on a straight, steep line gathers speed and volume as it falls, and faster water carries away far more soil. " +
        N(9) + "Within a few seasons, a footpath can deepen into a gully knee-deep, with bare rock at the bottom.</p>" +
        "<p>" + N(10) + "The damage does not stay on the shortcut. " +
        N(11) + "As the gully grows, it captures water from the main trail as well, undercutting the turns and stripping soil from the roots that hold the slope together. " +
        N(12) + "Alpine plants are especially vulnerable; at high elevations the growing season may last only six or eight weeks, and a single cushion plant crushed under a boot can take decades to regrow.</p>" +
        "<p>" + N(13) + "Repairing the harm is slow and expensive. " +
        N(14) + "On one popular peak, a volunteer crew spent three summers hauling rock by hand to close fewer than a dozen shortcuts, and some reopened when visitors stepped over the barriers. " +
        N(15) + "Crews now often pair repairs with education, placing small signs that explain why the trail turns rather than simply ordering people to stay on it.</p>" +
        "<p>" + N(16) + "The lesson is counterintuitive for anyone in a hurry. " +
        N(17) + "On a mountain, the path that looks longest is the one that keeps the slope whole, while the straight line, taken by enough feet, costs far more than the few minutes it saves.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence best states the central idea of the passage about switchback shortcuts?",
          choices: [
            { letter: "A", text: "Volunteer crews enjoy spending summers repairing mountain trails." },
            { letter: "B", text: "Alpine plants grow faster than most plants found at lower levels." },
            { letter: "C", text: "Cutting between switchbacks causes erosion that is hard to undo." },
            { letter: "D", text: "Switchback trails waste hikers' time and should be straightened." }
          ],
          correct: "C"
        },
        {
          id: "design",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Select TWO sentences that explain how a well-built switchback keeps water from damaging the trail.",
          choices: [
            { letter: "A", text: "Sentence 5, about the gentle grade of the trail" },
            { letter: "B", text: "Sentence 7, about a shortcut pointing downhill" },
            { letter: "C", text: "Sentence 6, about water bars turning rain aside" },
            { letter: "D", text: "Sentence 9, about a footpath deepening into a gully" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which description best matches the structure of the passage on social trails?",
          choices: [
            { letter: "A", text: "Two hiking routes are compared point by point." },
            { letter: "B", text: "A single hike is narrated from start to finish." },
            { letter: "C", text: "A list of park rules is given without explanation." },
            { letter: "D", text: "A problem is named, explained, traced, and answered." }
          ],
          correct: "D"
        },
        {
          id: "contrast",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentences 2 and 3, the author contrasts how social trails look with what they do mainly to —",
          choices: [
            { letter: "A", text: "praise the crews who first named the shortcuts" },
            { letter: "B", text: "challenge an assumption readers are likely to hold" },
            { letter: "C", text: "show that the author once took shortcuts too" },
            { letter: "D", text: "describe the colors and textures of the slope" }
          ],
          correct: "B"
        },
        {
          id: "crew",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the detail about the volunteer crew in sentence 14 mainly to —",
          choices: [
            { letter: "A", text: "illustrate how difficult and slow repairs can be" },
            { letter: "B", text: "suggest that volunteers should be paid for work" },
            { letter: "C", text: "prove that barriers are the best way to fix trails" },
            { letter: "D", text: "name the peak that has the most social trails" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author most likely wrote the passage about switchbacks and social trails to —",
          choices: [
            { letter: "A", text: "recruit readers to join a trail repair crew" },
            { letter: "B", text: "compare the plants of several mountain ranges" },
            { letter: "C", text: "entertain readers with stories of lost hikers" },
            { letter: "D", text: "persuade hikers to stay on trails by explaining why" }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word counterintuitive in sentence 16 begins with the prefix counter-, as do counterclockwise and counterattack. In all three words, counter- signals —",
          choices: [
            { letter: "A", text: "something done again" },
            { letter: "B", text: "opposition or reversal" },
            { letter: "C", text: "a very small amount" },
            { letter: "D", text: "a position beneath" }
          ],
          correct: "B"
        }
      ]
    },
    /* 8 · INFORMATIONAL · family restaurant */
    {
      id: "g11-ri-c100-menu-engineering",
      family: "G11",
      title: "The Menu Is Talking",
      kind: "Informational · 11.RI",
      blurb: "How small restaurants study their receipts to decide what goes where on the menu.",
      level: 2,
      passage:
        "<p>" + N(1) + "Most diners assume that a restaurant menu is simply a list of what the kitchen can cook. " +
        N(2) + "In fact, many menus are carefully designed documents, shaped by a practice called menu engineering. " +
        N(3) + "The goal is to guide customers toward dishes that are both popular and profitable, and for a small family restaurant operating on thin margins, those choices can decide whether the doors stay open.</p>" +
        "<p>" + N(4) + "Menu engineering begins with two numbers for every dish: how often it sells and how much money it earns after the cost of its ingredients. " +
        N(5) + "Dishes that score high on both are called stars. " +
        N(6) + "Dishes that sell well but earn little are plowhorses, dishes that earn well but rarely sell are puzzles, and dishes that do neither are dogs. " +
        N(7) + "Owners then try to promote the stars and puzzles, reprice the plowhorses, and quietly retire the dogs.</p>" +
        "<p>" + N(8) + "Consider the Tran family's noodle shop in a small river town. " +
        N(9) + "When Linh Tran studied three months of receipts, she found that the beef pho was the best seller but earned only a few cents per bowl because the price of brisket had climbed. " +
        N(10) + "Meanwhile, a lemongrass chicken dish that cost little to make sat near the bottom of the menu, ordered by almost no one. " +
        N(11) + "Linh raised the pho price by seventy-five cents, moved the chicken dish to the top right corner of the page, where diners' eyes often land first, and added a short line about her grandmother's recipe. " +
        N(12) + "Within two months, chicken orders had tripled, and pho sales barely dipped.</p>" +
        "<p>" + N(13) + "Some customers find these techniques manipulative. " +
        N(14) + "Restaurant consultants respond that every menu nudges diners in some direction, whether the owner plans it or not; a dish buried at the bottom of a cluttered page is being discouraged just as surely as a featured dish is being promoted. " +
        N(15) + "The difference, they argue, is whether the owner makes those choices on purpose.</p>" +
        "<p>" + N(16) + "For a family restaurant, menu engineering is less about tricks than about attention. " +
        N(17) + "It asks owners to look closely at what their customers actually do, not just at what they hope the customers will do.</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which of the following best summarizes the central idea of the passage about menu engineering?",
          choices: [
            { letter: "A", text: "Diners should ignore the layout of the menus they read." },
            { letter: "B", text: "Family restaurants earn more money than large chains." },
            { letter: "C", text: "Noodle shops depend mostly on the price of brisket." },
            { letter: "D", text: "Studying sales and costs helps owners shape menus wisely." }
          ],
          correct: "D"
        },
        {
          id: "pho",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, why was the Tran family's beef pho earning so little per bowl?",
          choices: [
            { letter: "A", text: "Very few customers were ordering it." },
            { letter: "B", text: "The cost of brisket had gone up." },
            { letter: "C", text: "It was printed at the bottom of the page." },
            { letter: "D", text: "The recipe took too long to prepare." }
          ],
          correct: "B"
        },
        {
          id: "example",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author develops the explanation in sentences 8-12 mainly by —",
          choices: [
            { letter: "A", text: "defining each of the four dish categories again" },
            { letter: "B", text: "quoting customers who disliked the new menu" },
            { letter: "C", text: "applying the method to one specific restaurant" },
            { letter: "D", text: "listing the steps in order of their difficulty" }
          ],
          correct: "C"
        },
        {
          id: "results",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "Which sentence provides the clearest evidence that Linh Tran's menu changes worked?",
          choices: [
            { letter: "A", text: "Sentence 12" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author's attitude toward menu engineering is best described as —",
          choices: [
            { letter: "A", text: "openly hostile, calling it a set of tricks" },
            { letter: "B", text: "mostly favorable while noting the criticism" },
            { letter: "C", text: "neutral, refusing to judge it in any way" },
            { letter: "D", text: "amused, treating it as a passing fad" }
          ],
          correct: "B"
        },
        {
          id: "buried",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 14, the consultants' point about a dish buried at the bottom of a cluttered page serves mainly to —",
          choices: [
            { letter: "A", text: "show that most menus have too many choices" },
            { letter: "B", text: "explain why the Tran family moved the pho" },
            { letter: "C", text: "admit that some techniques really are unfair" },
            { letter: "D", text: "argue that no menu is ever truly neutral" }
          ],
          correct: "D"
        },
        {
          id: "plowhorse",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "In sentence 6, the label plowhorses suggests that these dishes are —",
          choices: [
            { letter: "A", text: "steady workers that bring in little reward" },
            { letter: "B", text: "wild favorites that no one can predict" },
            { letter: "C", text: "old recipes that should be thrown away" },
            { letter: "D", text: "costly dishes that only a few people order" }
          ],
          correct: "A"
        }
      ]
    },
    /* 9 · VOCABULARY · family restaurant */
    {
      id: "g11-rv-c100-green-tamales",
      family: "G11",
      title: "Three Hundred Dozen",
      kind: "Vocabulary · 11.RV",
      blurb: "The pork for La Paloma's holiday tamales is not coming, and the orders keep pouring in. Words in bold.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every December, the kitchen at La Paloma became a tamale factory, and Daniela Ortiz, fifteen, was finally old enough to work the assembly line. " +
        N(2) + "Her grandmother, Abuela Rosa, ran the line with <strong>impeccable</strong> standards: every corn husk soaked, every spoonful of masa spread to the same thin layer, every tamale folded so tightly that not a drop of sauce could escape. " +
        N(3) + "A single crooked fold sent the tamale back to its maker.</p>" +
        "<p>" + N(4) + "On the Saturday before Christmas, the phone would not stop ringing. " +
        N(5) + "By noon the family had taken orders for three hundred dozen, and the mood in the kitchen turned <strong>frantic</strong>. " +
        N(6) + "Daniela's uncle rushed between the stove and the phone, her cousins argued over who had used the last bag of husks, and someone burned a pot of beans.</p>" +
        "<p>" + N(7) + "Then the supplier called to say the pork shoulder would not arrive until Monday. " +
        N(8) + "Daniela watched her grandmother's face and expected panic. " +
        N(9) + "Instead, Abuela Rosa wiped her hands and said they would <strong>improvise</strong>. " +
        N(10) + "She sent Daniela to the walk-in cooler, where there were cases of chicken, roasted poblano peppers, and a block of white cheese. " +
        N(11) + "Within an hour the family had invented a new filling of shredded chicken and peppers in green sauce.</p>" +
        "<p>" + N(12) + "Daniela's uncle was <strong>reluctant</strong> at first. " +
        N(13) + "He worried aloud that customers expected pork, and he refused to taste the new filling until Abuela Rosa held a spoon directly in front of his face. " +
        N(14) + "After one bite he stopped arguing. " +
        N(15) + "The filling was <strong>savory</strong>, rich with roasted pepper and garlic, and just salty enough to make a person reach for another.</p>" +
        "<p>" + N(16) + "By evening the family had finished every order. " +
        N(17) + "Several customers called to ask about the new green tamales, and a few asked whether they could order them again next year. " +
        N(18) + "Nothing <strong>diminished</strong> Daniela's pride that night, not the burn on her wrist or the mountain of dishes still waiting in the sink. " +
        N(19) + "Abuela Rosa inspected one of Daniela's tamales, turned it over twice, and set it on the finished tray without a word, which in that kitchen was the highest praise there was.</p>",
      claims: [
        {
          id: "impeccable",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which detail from sentence 2 best helps the reader understand the meaning of impeccable?",
          choices: [
            { letter: "A", text: "the kitchen at La Paloma became a factory" },
            { letter: "B", text: "Daniela was finally old enough to help" },
            { letter: "C", text: "her grandmother was the one in charge" },
            { letter: "D", text: "not a drop of sauce could escape a fold" }
          ],
          correct: "D"
        },
        {
          id: "frantic",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the word frantic most nearly means —",
          choices: [
            { letter: "A", text: "wildly rushed and anxious" },
            { letter: "B", text: "calm and well organized" },
            { letter: "C", text: "cheerful and celebratory" },
            { letter: "D", text: "sleepy and slow-moving" }
          ],
          correct: "A"
        },
        {
          id: "improvise",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The events in sentences 10 and 11 show that improvise in sentence 9 means to —",
          choices: [
            { letter: "A", text: "cancel orders that cannot be filled" },
            { letter: "B", text: "make something new from what is at hand" },
            { letter: "C", text: "follow an old family recipe exactly" },
            { letter: "D", text: "wait patiently for a late delivery" }
          ],
          correct: "B"
        },
        {
          id: "diminished",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word diminished in sentence 18 comes from a Latin root meaning to make smaller, also found in diminutive. Based on this root, sentence 18 means that nothing —",
          choices: [
            { letter: "A", text: "could explain why Daniela felt proud" },
            { letter: "B", text: "was left for Daniela to do that night" },
            { letter: "C", text: "made Daniela's pride any smaller" },
            { letter: "D", text: "was cooked as well as Daniela's tamales" }
          ],
          correct: "C"
        },
        {
          id: "reluctant",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which sentence best shows what it means that Daniela's uncle was reluctant?",
          choices: [
            { letter: "A", text: "Sentence 6, where he rushes between the stove and phone" },
            { letter: "B", text: "Sentence 14, where he stops arguing after one bite" },
            { letter: "C", text: "Sentence 13, where he refuses to taste the new filling" },
            { letter: "D", text: "Sentence 16, where the family finishes every order" }
          ],
          correct: "C"
        },
        {
          id: "savory",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "As it is used in sentence 15, savory describes food that is —",
          choices: [
            { letter: "A", text: "full of rich, salty flavor" },
            { letter: "B", text: "sweet and served cold" },
            { letter: "C", text: "bland and easy to digest" },
            { letter: "D", text: "spicy enough to burn" }
          ],
          correct: "A"
        },
        {
          id: "prefix",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word impeccable begins with the prefix im-, meaning not, as in impossible and impatient. The prefix suggests that impeccable standards are ones that —",
          choices: [
            { letter: "A", text: "change from one day to the next" },
            { letter: "B", text: "are easy for beginners to meet" },
            { letter: "C", text: "were written down long ago" },
            { letter: "D", text: "allow no flaws or mistakes" }
          ],
          correct: "D"
        }
      ]
    },
    /* 10 · VOCABULARY · mountain hiking */
    {
      id: "g11-rv-c100-summit-fever",
      family: "G11",
      title: "Summit Fever",
      kind: "Vocabulary · 11.RV",
      blurb: "A mountain guide explains why she turns her groups around, even within sight of the top. Words in bold.",
      level: 3,
      passage:
        "<p>" + N(1) + "Mountain guides have a name for the condition that makes sensible people do foolish things near a peak: summit fever. " +
        N(2) + "It rarely announces itself. " +
        N(3) + "A climber who planned to turn back at noon finds, at twelve-thirty, that the top looks close enough to touch, and the careful schedule written at the trailhead suddenly seems <strong>negligible</strong>, a scrap of paper against the pull of the goal.</p>" +
        "<p>" + N(4) + "Teodora Lindqvist, who has guided hikers in the Grayhorn Range for twenty years, says the fever thrives on fatigue. " +
        N(5) + "The last thousand feet of a big climb are often the most <strong>arduous</strong>: the air is thin, the legs are heavy, and every step on loose gravel slides back half its length. " +
        N(6) + "Exhausted people, she explains, do not weigh choices; they simply keep doing whatever they were already doing, and on a mountain that usually means climbing.</p>" +
        "<p>" + N(7) + "The danger is that the summit is only the halfway point. " +
        N(8) + "Many accidents happen on the way down, when tired hikers descend <strong>precipitous</strong> slopes where a single misstep can become a long fall. " +
        N(9) + "A climber who spends her last reserves of strength reaching the top has nothing left for the descent.</p>" +
        "<p>" + N(10) + "Lindqvist's remedy is a turnaround time, chosen before the hike and treated as <strong>inviolable</strong>. " +
        N(11) + "If her group has not reached the summit by the agreed hour, they turn back, whatever the weather and however close the top appears. " +
        N(12) + "Clients sometimes call this rule timid. " +
        N(13) + "She calls it <strong>prudent</strong>, and she points out that the people who argue hardest against it are often the ones closest to collapse.</p>" +
        "<p>" + N(14) + "She admits the rule has a cost. " +
        N(15) + "Some of her clients have trained for months and come within a few hundred feet of a summit they may never attempt again. " +
        N(16) + "Their disappointment is real. " +
        N(17) + "But she has found that it is also <strong>ephemeral</strong>; within a day or two, most of them are planning the next trip, while the memory of a bad fall can last a lifetime. " +
        N(18) + "Turning around, she tells her groups, is not the opposite of climbing; it is the half of climbing that nobody photographs.</p>",
      claims: [
        {
          id: "negligible",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word negligible most nearly means —",
          choices: [
            { letter: "A", text: "carefully planned" },
            { letter: "B", text: "too small to matter" },
            { letter: "C", text: "hard to read" },
            { letter: "D", text: "newly important" }
          ],
          correct: "B"
        },
        {
          id: "arduous",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which detail in sentence 5 best clarifies the meaning of arduous?",
          choices: [
            { letter: "A", text: "the last thousand feet of a big climb" },
            { letter: "B", text: "a big climb that guides often lead" },
            { letter: "C", text: "the top of the mountain is near" },
            { letter: "D", text: "every step slides back half its length" }
          ],
          correct: "D"
        },
        {
          id: "precipitous",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "As used in sentence 8, the word precipitous most nearly means —",
          choices: [
            { letter: "A", text: "dangerously steep" },
            { letter: "B", text: "thickly forested" },
            { letter: "C", text: "slick with rain" },
            { letter: "D", text: "rarely visited" }
          ],
          correct: "A"
        },
        {
          id: "inviolable",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word inviolable combines in- (not), the root viol (to break or harm), and -able (able to be). Based on these parts, an inviolable turnaround time is one that —",
          choices: [
            { letter: "A", text: "is set by the weather each day" },
            { letter: "B", text: "changes as the group gets tired" },
            { letter: "C", text: "cannot be broken or ignored" },
            { letter: "D", text: "is chosen by the youngest client" }
          ],
          correct: "C"
        },
        {
          id: "prudent",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "In sentences 12 and 13, the contrast between timid and prudent shows that Lindqvist sees her rule as —",
          choices: [
            { letter: "A", text: "wise caution rather than fear" },
            { letter: "B", text: "a fear she cannot overcome" },
            { letter: "C", text: "a rule her clients invented" },
            { letter: "D", text: "an unfair limit on the group" }
          ],
          correct: "A"
        },
        {
          id: "ephemeral",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The contrast with a memory that can last a lifetime in sentence 17 helps show that ephemeral means —",
          choices: [
            { letter: "A", text: "deeply painful" },
            { letter: "B", text: "widely shared" },
            { letter: "C", text: "hard to explain" },
            { letter: "D", text: "short-lived" }
          ],
          correct: "D"
        },
        {
          id: "announces",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "In sentence 2, the statement that summit fever rarely announces itself suggests that it —",
          choices: [
            { letter: "A", text: "affects only climbers who are very quiet" },
            { letter: "B", text: "is reported by guides over the radio" },
            { letter: "C", text: "develops without the climber noticing" },
            { letter: "D", text: "spreads from one hiker to another" }
          ],
          correct: "C"
        }
      ]
    },
    /* 11 · PAIRED TEXTS · app design and coding */
    {
      id: "g11-dsr-c100-streaks",
      family: "G11",
      title: "Keeping the Streak Alive",
      kind: "Paired texts · 11.DSR",
      blurb: "A tech column explains why streak counters work. A developer explains why she removed one from her app.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Why Streaks Work (from a technology column)</strong></p>" +
        "<p>" + N(1) + "Open almost any language or fitness app, and you will find a small flame or counter tracking how many days in a row you have used it. " +
        N(2) + "Designers call this a streak, and it is one of the most effective tools in the industry. " +
        N(3) + "The idea draws on a simple observation about people: we hate to lose something we already have. " +
        N(4) + "A user who has practiced vocabulary for forty straight days will often open the app on day forty-one simply to keep the number alive. " +
        N(5) + "Several app makers have reported that adding a streak counter raised the share of users who return the next day by a third or more. " +
        N(6) + "Supporters argue that this is a gift, not a trick. " +
        N(7) + "Learning a language or building strength requires daily practice, and most people struggle to stay consistent on willpower alone. " +
        N(8) + "A streak, they say, turns a vague goal into a visible chain, and each new day becomes a link that is easy to add and painful to break. " +
        N(9) + "Some apps now soften the pressure with streak freezes, which let users skip a day without losing their count, so one missed evening does not end the habit.</p>" +
        "<p><strong>Text 2 — Why I Took the Flame Away (a developer's blog post by Marisol Etxeberria)</strong></p>" +
        "<p>" + N(10) + "When I launched my piano practice app two years ago, I added a streak counter because every successful app seemed to have one. " +
        N(11) + "It worked: daily use climbed within a month. " +
        N(12) + "Then the emails started. " +
        N(13) + "A parent wrote that her daughter had cried after a fever broke a ninety-day streak. " +
        N(14) + "An adult beginner admitted that he had been tapping one key for ten seconds each night just to keep his count, without practicing at all. " +
        N(15) + "The streak had become the goal, and the music had become an excuse to protect it. " +
        N(16) + "Last spring I replaced the counter with a weekly summary that shows how many minutes a user practiced and which pieces improved. " +
        N(17) + "Daily opens dropped by about a fifth. " +
        N(18) + "Total practice time, however, went up, and the upset emails stopped. " +
        N(19) + "I do not think streaks are evil. " +
        N(20) + "But a number that measures showing up is not the same as a number that measures getting better, and I would rather my app reward the second.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea about streak counters is supported by both texts?",
          choices: [
            { letter: "A", text: "They can sharply increase how often people open an app." },
            { letter: "B", text: "They are the main reason people learn new languages." },
            { letter: "C", text: "They should be replaced with weekly practice summaries." },
            { letter: "D", text: "They are popular only with very young app users." }
          ],
          correct: "A"
        },
        {
          id: "challenge",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which sentence from Text 2 most directly challenges the idea in sentence 8 that a streak turns a goal into a visible chain of progress?",
          choices: [
            { letter: "A", text: "Sentence 10, about why the developer added a counter" },
            { letter: "B", text: "Sentence 11, about daily use climbing within a month" },
            { letter: "C", text: "Sentence 14, about a user tapping one key each night" },
            { letter: "D", text: "Sentence 17, about daily opens dropping by a fifth" }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the column and the blog post differ in purpose?",
          choices: [
            { letter: "A", text: "Text 1 sells an app, while Text 2 reviews competing apps." },
            { letter: "B", text: "Text 1 tells a personal story, while Text 2 reports a study." },
            { letter: "C", text: "Text 1 warns parents, while Text 2 advises young musicians." },
            { letter: "D", text: "Text 1 explains why streaks work, while Text 2 explains a choice." }
          ],
          correct: "D"
        },
        {
          id: "selecttwo",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Select TWO sentences from Text 2 that show users protecting a streak instead of pursuing the practice that Text 1 says streaks encourage.",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "conclude",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A reader who combined the information in both streak texts could best conclude that —",
          choices: [
            { letter: "A", text: "streak freezes solve every problem the counters cause" },
            { letter: "B", text: "most users prefer weekly summaries to daily counters" },
            { letter: "C", text: "streaks drive daily use but do not guarantee real practice" },
            { letter: "D", text: "piano apps are less effective than language apps" }
          ],
          correct: "C"
        },
        {
          id: "chain",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "In Text 1, the comparison of a streak to a chain in sentence 8 mainly helps explain why —",
          choices: [
            { letter: "A", text: "a long streak feels costly to break" },
            { letter: "B", text: "apps display a small flame on screen" },
            { letter: "C", text: "practice must happen at the same hour" },
            { letter: "D", text: "streak freezes were first invented" }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The attitude of the writer of Text 2 toward streak features is best described as —",
          choices: [
            { letter: "A", text: "bitter and accusing" },
            { letter: "B", text: "measured and reflective" },
            { letter: "C", text: "excited and approving" },
            { letter: "D", text: "confused and uncertain" }
          ],
          correct: "B"
        }
      ]
    },
    /* 12 · PAIRED TEXTS · photography */
    {
      id: "g11-dsr-c100-edited-truth",
      family: "G11",
      title: "Edited or Honest?",
      kind: "Paired texts · 11.DSR",
      blurb: "A landscape photographer defends editing. A school newspaper sets strict limits on it.",
      level: 3,
      passage:
        "<p><strong>Text 1 — The Darkroom Never Told the Truth Either (an essay by photographer Yusuf Demir)</strong></p>" +
        "<p>" + N(1) + "People who complain that today's photographs are edited often imagine that cameras once captured the plain truth. " +
        N(2) + "They never did. " +
        N(3) + "Film photographers chose which lens to use, where to stand, and when to press the shutter, and then they spent hours in darkrooms making skies darker and faces brighter by hand. " +
        N(4) + "Every picture has always been a series of decisions. " +
        N(5) + "When I adjust the color of a sunrise on my laptop, I am not lying about the mountain; I am trying to show what it felt like to stand there at five in the morning, cold and astonished. " +
        N(6) + "A camera sensor records light, but it does not record wonder. " +
        N(7) + "Editing is how a photographer puts the wonder back. " +
        N(8) + "That does not mean anything goes. " +
        N(9) + "I would never paste a moon into a sky where there was none, or remove a power line and claim the view was untouched. " +
        N(10) + "But the line between honest and dishonest is not the line between edited and unedited. " +
        N(11) + "It is the line between images that serve the viewer's understanding and images that deceive.</p>" +
        "<p><strong>Text 2 — Photo Policy of the Ridgeview Courier, a student newspaper</strong></p>" +
        "<p>" + N(12) + "Photographs published in the Ridgeview Courier must show events as they happened, without changes to their content. " +
        N(13) + "Photographers may crop an image, adjust its overall brightness and contrast, and correct color so that it matches what the eye saw, but they may not use these adjustments to hide or highlight any one part of the scene. " +
        N(14) + "Photographers may not add, remove, move, or combine any element of a news photograph, including distracting objects in the background. " +
        N(15) + "Staff may not ask subjects to repeat an action or pose for a picture that will be presented as spontaneous. " +
        N(16) + "Images altered beyond these limits for an artistic feature, such as a photo illustration on the opinion page, must be clearly labeled as illustrations. " +
        N(17) + "Photographers must keep the original, unedited file of every published image for one full school year and show it to an editor on request. " +
        N(18) + "These rules exist because readers trust that a news photograph is a record, not an opinion. " +
        N(19) + "A single altered image, once discovered, can cast doubt on every picture the Courier has ever printed.</p>",
      claims: [
        {
          id: "central",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea is central to both Yusuf Demir's essay and the Courier policy?",
          choices: [
            { letter: "A", text: "Photographers should never change an image in any way." },
            { letter: "B", text: "Film cameras were more honest than digital cameras." },
            { letter: "C", text: "Student photographers need more expensive equipment." },
            { letter: "D", text: "Some edits are acceptable, but others are dishonest." }
          ],
          correct: "D"
        },
        {
          id: "forbidden",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which action mentioned in Text 1 would the Courier policy forbid in a news photograph?",
          choices: [
            { letter: "A", text: "removing a power line from a scene" },
            { letter: "B", text: "choosing where to stand for a shot" },
            { letter: "C", text: "correcting the color of a sunrise" },
            { letter: "D", text: "choosing when to press the shutter" }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the essay and the newspaper policy differ in purpose?",
          choices: [
            { letter: "A", text: "Text 1 teaches darkroom skills; Text 2 reviews cameras." },
            { letter: "B", text: "Text 1 attacks newspapers; Text 2 defends landscape art." },
            { letter: "C", text: "Text 1 defends editing as art; Text 2 limits it for news." },
            { letter: "D", text: "Text 1 reports a scandal; Text 2 apologizes to readers." }
          ],
          correct: "C"
        },
        {
          id: "similar",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Text 1 argues that honesty depends on whether an image deceives, not on whether it was edited. Which sentence from Text 2 best reflects a similar view?",
          choices: [
            { letter: "A", text: "Sentence 12, which says photos must show events as they happened" },
            { letter: "B", text: "Sentence 16, which allows altered images if they are labeled" },
            { letter: "C", text: "Sentence 17, which requires keeping the original files" },
            { letter: "D", text: "Sentence 19, which warns about doubt spreading to all photos" }
          ],
          correct: "B"
        },
        {
          id: "org",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The Ridgeview Courier policy in Text 2 is organized mainly by —",
          choices: [
            { letter: "A", text: "stating rules first and the reasons for them last" },
            { letter: "B", text: "telling the story of one photographer's mistake" },
            { letter: "C", text: "comparing film and digital editing step by step" },
            { letter: "D", text: "listing questions readers have asked the editors" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the tone of Yusuf Demir's essay, the tone of the Courier policy is more —",
          choices: [
            { letter: "A", text: "playful and teasing" },
            { letter: "B", text: "emotional and personal" },
            { letter: "C", text: "formal and impersonal" },
            { letter: "D", text: "doubtful and hesitant" }
          ],
          correct: "C"
        },
        {
          id: "decisions",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "In Text 1, which sentence best supports the claim in sentence 4 that every picture has always been a series of decisions?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "B"
        }
      ]
    },
    /* 13 · POETRY · mountain hiking */
    {
      id: "g11-rl-c100-switchback-poem",
      family: "G11",
      title: "Twenty-Three Turns",
      kind: "Poetry · 11.RL",
      blurb: "A speaker climbs a winding mountain trail with an impatient younger sister.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The trail does not go straight up the mountain;<br>" +
        L(2) + "it leans one way, and then the other,<br>" +
        L(3) + "like someone climbing a long staircase<br>" +
        L(4) + "who stops on every landing to look back.<br>" +
        L(5) + "My sister wants the summit now.<br>" +
        L(6) + "She kicks at the stones that line each turn<br>" +
        L(7) + "and says the path is wasting her whole day.<br>" +
        L(8) + "I tell her nothing. I am out of breath.<br>" +
        L(9) + "By the seventh bend the pines grow short;<br>" +
        L(10) + "by the tenth they kneel down into shrubs,<br>" +
        L(11) + "and the wind, which was a whisper at the car,<br>" +
        L(12) + "has learned to shout.<br>" +
        L(13) + "At the top there is a metal sign,<br>" +
        L(14) + "a pile of stones, a view of everything:<br>" +
        L(15) + "the lake like a dropped coin,<br>" +
        L(16) + "the road we drove in on, thin as thread.<br>" +
        L(17) + "My sister is quiet for the first time all day.<br>" +
        L(18) + "Going down, she counts the switchbacks out loud,<br>" +
        L(19) + "every one, all twenty-three,<br>" +
        L(20) + "as if to make sure that none of them is lost.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem about the twenty-three switchbacks?",
          choices: [
            { letter: "A", text: "Mountain trails should be built as straight as possible." },
            { letter: "B", text: "Older siblings should always explain things to younger ones." },
            { letter: "C", text: "A slow, winding journey can come to feel worth the patience." },
            { letter: "D", text: "The view from the top is the only part of a hike that matters." }
          ],
          correct: "C"
        },
        {
          id: "staircase",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In lines 3 and 4, comparing the trail to someone who stops on every landing mainly shows that the trail —",
          choices: [
            { letter: "A", text: "climbs in short stages with frequent turns" },
            { letter: "B", text: "is built of wooden steps and metal railings" },
            { letter: "C", text: "is crowded with hikers resting along the way" },
            { letter: "D", text: "leads back down to where the hike began" }
          ],
          correct: "A"
        },
        {
          id: "harsher",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.2",
          stem: "In lines 9-12, the images of pines that kneel and wind that has learned to shout mainly create a sense that —",
          choices: [
            { letter: "A", text: "a storm is about to force the hikers back" },
            { letter: "B", text: "the sister is frightened of the high wind" },
            { letter: "C", text: "the trees are being cut down by trail crews" },
            { letter: "D", text: "the land grows harsher as the hikers rise" }
          ],
          correct: "D"
        },
        {
          id: "wasting",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "In line 7, the word wasting shows that at first the sister sees the switchbacks as —",
          choices: [
            { letter: "A", text: "dangerous and frightening" },
            { letter: "B", text: "pointless and frustrating" },
            { letter: "C", text: "beautiful but very tiring" },
            { letter: "D", text: "confusing and easy to miss" }
          ],
          correct: "B"
        },
        {
          id: "resolve",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How do lines 18-20 resolve the poem about the climb?",
          choices: [
            { letter: "A", text: "by showing the sister now values each turn she once resented" },
            { letter: "B", text: "by revealing that the hikers got lost on the way down" },
            { letter: "C", text: "by describing the view from the summit in greater detail" },
            { letter: "D", text: "by explaining how the trail crews built the switchbacks" }
          ],
          correct: "A"
        },
        {
          id: "quiet",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Line 17, in which the sister is quiet for the first time all day, implies that she —",
          choices: [
            { letter: "A", text: "is too tired from the climb to speak" },
            { letter: "B", text: "is angry that the hike took so long" },
            { letter: "C", text: "wants to start back down right away" },
            { letter: "D", text: "is moved by what she sees from the top" }
          ],
          correct: "D"
        },
        {
          id: "kneel",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 10, the word kneel suggests that the trees —",
          choices: [
            { letter: "A", text: "are bending in a strong wind" },
            { letter: "B", text: "are growing lower and smaller" },
            { letter: "C", text: "have been knocked over by snow" },
            { letter: "D", text: "are leaning toward the summit" }
          ],
          correct: "B"
        }
      ]
    },
    /* 14 · POETRY · family restaurant */
    {
      id: "g11-rl-c100-closing-time",
      family: "G11",
      title: "Closing Time at the Lotus Garden",
      kind: "Poetry · 11.RL",
      blurb: "A speaker does homework in the back booth while the family restaurant closes for the night.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "After the last customer, my mother turns the sign<br>" +
        L(2) + "so that OPEN faces the kitchen,<br>" +
        L(3) + "as if the kitchen were the one waiting to be let in.<br>" +
        L(4) + "My father counts the drawer twice<br>" +
        L(5) + "and writes the number in a notebook<br>" +
        L(6) + "whose pages are soft as cloth from twenty years of thumbs.<br>" +
        L(7) + "I do my math in the back booth<br>" +
        L(8) + "beside the fish tank's tired hum,<br>" +
        L(9) + "and nobody asks me to help, and I do not offer.<br>" +
        L(10) + "This is how we love each other here:</p>" +
        "<p class=\"poem\">" +
        L(11) + "not out loud, but in the extra scoop of rice<br>" +
        L(12) + "my mother leaves for me beneath the warming lamp,<br>" +
        L(13) + "in the way my father wipes my table last,<br>" +
        L(14) + "slowly, so I will not have to move my books.<br>" +
        L(15) + "Some nights I want a house where dinner<br>" +
        L(16) + "is something you eat and not something you sell.<br>" +
        L(17) + "Then the dishwasher starts its long rain,<br>" +
        L(18) + "my mother hums the song she will not name,<br>" +
        L(19) + "and the neon in the window buzzes one more minute<br>" +
        L(20) + "before it goes out like a held breath, finally let go.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem set at closing time in the Lotus Garden?",
          choices: [
            { letter: "A", text: "Running a restaurant leaves a family no time for one another." },
            { letter: "B", text: "Love in a family can be shown through quiet acts of care." },
            { letter: "C", text: "Children should be expected to help with the family business." },
            { letter: "D", text: "A family business matters more than the family's happiness." }
          ],
          correct: "B"
        },
        {
          id: "breath",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 20, the simile comparing the neon going out to a held breath finally let go suggests that —",
          choices: [
            { letter: "A", text: "the sign is broken and needs to be repaired" },
            { letter: "B", text: "the speaker is nervous about a math test" },
            { letter: "C", text: "the restaurant will not open again tomorrow" },
            { letter: "D", text: "the long workday ends with a sense of release" }
          ],
          correct: "D"
        },
        {
          id: "sign",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In lines 2 and 3, the image of OPEN facing the kitchen mainly suggests that —",
          choices: [
            { letter: "A", text: "the family's attention turns inward once customers leave" },
            { letter: "B", text: "the mother has hung the sign the wrong way by mistake" },
            { letter: "C", text: "the kitchen is still serving food to late customers" },
            { letter: "D", text: "the restaurant is about to be sold to a new owner" }
          ],
          correct: "A"
        },
        {
          id: "tired",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.2",
          stem: "In line 8, describing the fish tank's hum as tired mainly helps to —",
          choices: [
            { letter: "A", text: "show that the fish tank is old and should be replaced" },
            { letter: "B", text: "explain why the speaker cannot focus on homework" },
            { letter: "C", text: "reflect the weariness of the people at the day's end" },
            { letter: "D", text: "suggest that the restaurant is quiet during dinner" }
          ],
          correct: "C"
        },
        {
          id: "stanzas",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the stanza break between line 10 and line 11 shape the meaning of the poem?",
          choices: [
            { letter: "A", text: "It moves the poem from the restaurant to the family's house." },
            { letter: "B", text: "It shifts the speaker's voice from the present to the past." },
            { letter: "C", text: "It separates the father's actions from the mother's actions." },
            { letter: "D", text: "It sets up a claim that the second stanza then illustrates." }
          ],
          correct: "D"
        },
        {
          id: "wish",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Lines 15 and 16 imply that the speaker sometimes —",
          choices: [
            { letter: "A", text: "wishes family meals were separate from the business" },
            { letter: "B", text: "plans to open a different restaurant someday" },
            { letter: "C", text: "dislikes the food that the restaurant serves" },
            { letter: "D", text: "wants to move to a different town with friends" }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which statement best describes the speaker's feelings about life at the Lotus Garden?",
          choices: [
            { letter: "A", text: "proud of the business and eager to run it someday" },
            { letter: "B", text: "angry at parents who never speak to the speaker" },
            { letter: "C", text: "weary of the work yet aware of the love within it" },
            { letter: "D", text: "bored by the restaurant and unmoved by the family" }
          ],
          correct: "C"
        }
      ]
    },
    /* 15 · DRAMA · app design and coding */
    {
      id: "g11-rl-c100-demo-day",
      family: "G11",
      title: "Twenty Minutes to Demo",
      kind: "Drama · 11.RL",
      blurb: "At the end of an all-night hackathon, Rashid wants one more feature. Mei-Lin has a list of crashes.",
      level: 2,
      passage:
        "<p><em>A school library at the end of an overnight hackathon. Empty pizza boxes, tangled chargers. RASHID, seventeen, types furiously. MEI-LIN, sixteen, stands behind him holding a tablet. The wall clock reads 7:40 a.m.</em></p>" +
        "<p><strong>MEI-LIN:</strong> " + N(1) + "Twenty minutes, Rashid. " + N(2) + "The judges start at eight.</p>" +
        "<p><strong>RASHID:</strong> " + N(3) + "I know. " + N(4) + "I'm adding the voice feature. " + N(5) + "Imagine it: you say find me a study room, and the app just finds one.</p>" +
        "<p><strong>MEI-LIN:</strong> " + N(6) + "The app can't book study rooms now. " + N(7) + "The booking button crashes every third time.</p>" +
        "<p><strong>RASHID:</strong> " + N(8) + "Every third time means two out of three work. " + N(9) + "The judges will click it once.</p>" +
        "<p><strong>MEI-LIN:</strong> " + N(10) + "And if their once is the third time?</p>" +
        "<p><em>(RASHID keeps typing. MEI-LIN sets the tablet down beside his keyboard.)</em></p>" +
        "<p><strong>MEI-LIN:</strong> " + N(11) + "I tested it on this all night. " + N(12) + "Forty-one tries, fourteen crashes. " + N(13) + "I wrote down every one, with what I pressed right before it happened.</p>" +
        "<p><strong>RASHID:</strong> " + N(14) + "Nobody wins a hackathon with a list of crashes. " + N(15) + "They win with something that makes the room go quiet.</p>" +
        "<p><em>(MR. BARROS, their adviser, enters carrying a coffee. He reads the screen over RASHID's shoulder.)</em></p>" +
        "<p><strong>MR. BARROS:</strong> " + N(16) + "Voice commands. " + N(17) + "Ambitious.</p>" +
        "<p><strong>RASHID:</strong> " + N(18) + "See? " + N(19) + "Ambitious.</p>" +
        "<p><strong>MR. BARROS:</strong> " + N(20) + "I said ambitious. " + N(21) + "I didn't say finished. <em>(He sips his coffee and glances at MEI-LIN's list.)</em> " + N(22) + "Last year a team in this very room built a beautiful app that froze in the middle of its demo. " + N(23) + "The judges remembered the freeze. " + N(24) + "Nobody remembered the beautiful part.</p>" +
        "<p><em>(A long pause. RASHID stops typing. He stares at the half-written voice code, then at the list.)</em></p>" +
        "<p><strong>RASHID:</strong> " + N(25) + "If I fix the crash, we have nothing new to show.</p>" +
        "<p><strong>MEI-LIN:</strong> " + N(26) + "We have an app that works every single time. " + N(27) + "That's new. " + N(28) + "I'm not sure anybody else in this room has one.</p>" +
        "<p><strong>RASHID:</strong> <em>(slowly closing the voice file)</em> " + N(29) + "Read me crash number one.</p>" +
        "<p><em>(MEI-LIN picks up the tablet and begins to read aloud. RASHID's fingers find the keys. The clock ticks to 7:42.)</em></p>",
      claims: [
        {
          id: "contrast",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which statement best describes the difference between Rashid and Mei-Lin at the start of the scene?",
          choices: [
            { letter: "A", text: "Rashid wants to quit, while Mei-Lin wants to keep working." },
            { letter: "B", text: "Rashid wants to impress, while Mei-Lin wants reliability." },
            { letter: "C", text: "Rashid trusts the judges, while Mei-Lin distrusts them." },
            { letter: "D", text: "Rashid tested the app, while Mei-Lin wrote its code." }
          ],
          correct: "B"
        },
        {
          id: "decision",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Rashid's request in sentence 29 shows that he —",
          choices: [
            { letter: "A", text: "wants Mei-Lin to take over the presentation" },
            { letter: "B", text: "plans to blame Mei-Lin if the demo goes badly" },
            { letter: "C", text: "still believes the voice feature will be ready" },
            { letter: "D", text: "has decided to put a working app ahead of a flashy one" }
          ],
          correct: "D"
        },
        {
          id: "story",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Mr. Barros tells the story of last year's team in sentences 22-24 mainly to suggest that —",
          choices: [
            { letter: "A", text: "a failed demo can outweigh even an impressive design" },
            { letter: "B", text: "the judges this year are harsher than last year's" },
            { letter: "C", text: "beautiful apps are never chosen as the winners" },
            { letter: "D", text: "Rashid should copy the app that team had built" }
          ],
          correct: "A"
        },
        {
          id: "clock",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "The final stage direction, in which the clock ticks to 7:42, mainly serves to —",
          choices: [
            { letter: "A", text: "show that the hackathon has been canceled" },
            { letter: "B", text: "reveal that Mr. Barros has left the library" },
            { letter: "C", text: "stress that little time remains as they change course" },
            { letter: "D", text: "suggest that the judges arrived earlier than planned" }
          ],
          correct: "C"
        },
        {
          id: "quiet",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 15, Rashid's phrase something that makes the room go quiet refers to —",
          choices: [
            { letter: "A", text: "a feature so impressive it leaves the judges in awe" },
            { letter: "B", text: "an app that turns off the sound on every phone" },
            { letter: "C", text: "a rule that the audience must not talk during demos" },
            { letter: "D", text: "a crash that makes the judges stop the presentation" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The tone of Mr. Barros's remarks in sentences 20 and 21 is best described as —",
          choices: [
            { letter: "A", text: "loud and furious" },
            { letter: "B", text: "eager and excited" },
            { letter: "C", text: "bored and distant" },
            { letter: "D", text: "dry and cautionary" }
          ],
          correct: "D"
        },
        {
          id: "ambitious",
          sol: "11.RL.2.D",
          sub: "11.RL.2.D.2",
          stem: "Rashid and Mr. Barros understand the word ambitious (sentences 17-20) differently. Rashid hears it as —",
          choices: [
            { letter: "A", text: "a request, while Mr. Barros means it as an order" },
            { letter: "B", text: "a joke, while Mr. Barros means it as an insult" },
            { letter: "C", text: "praise, while Mr. Barros means it as a warning" },
            { letter: "D", text: "a question, while Mr. Barros means it as a rule" }
          ],
          correct: "C"
        }
      ]
    },
    /* 16 · FUNCTIONAL TEXT · photography */
    {
      id: "g11-ri-c100-photo-contest",
      family: "G11",
      title: "Hometown Close-Up",
      kind: "Functional text · 11.RI",
      blurb: "The rules, requirements, and deadlines for a public library's teen photo contest.",
      level: 1,
      passage:
        "<p><strong>Maple Hollow Public Library: Teen Photo Contest</strong></p>" +
        "<p><strong>About the Contest.</strong> " + N(1) + "The Maple Hollow Public Library invites students in grades 9 through 12 to enter its annual Teen Photo Contest. " +
        N(2) + "This year's theme is Hometown Close-Up, and entries should show a person, place, or object that captures everyday life in Maple Hollow. " +
        N(3) + "Winning photographs will be printed, framed, and displayed in the library's main hall from June 1 through August 31.</p>" +
        "<p><strong>Categories.</strong> " + N(4) + "Each student may enter up to two photographs, in one or both of the following categories: Portrait (a photo in which a person is the main subject) and Place (a landscape, street scene, building, or object). " +
        N(5) + "Photographs that show a recognizable person must include a release form signed by that person, or by a parent or guardian if the person is under 18.</p>" +
        "<p><strong>Photo Requirements.</strong> " + N(6) + "All photographs must have been taken after January 1 of this year by the student entering them. " +
        N(7) + "Basic editing, such as cropping and adjusting brightness or color, is allowed. " +
        N(8) + "Adding or removing objects, combining images, and using image-generating software are not allowed, and entries that break this rule will be disqualified. " +
        N(9) + "Files must be JPEGs at least 3,000 pixels wide.</p>" +
        "<p><strong>How to Enter.</strong> " + N(10) + "Upload your photos through the contest page on the library website by 11:59 p.m. on April 20. " +
        N(11) + "For each photo, provide a title and a caption of no more than 50 words explaining where it was taken and why you chose the subject. " +
        N(12) + "Students without internet access at home may bring their files on a flash drive to the Teen Desk during open hours, and a librarian will help upload them.</p>" +
        "<p><strong>Judging and Prizes.</strong> " + N(13) + "A panel of three local photographers will judge entries on composition, creativity, and connection to the theme. " +
        N(14) + "The first-place winner in each category will receive a $100 gift card to Hollow Street Camera, and all finalists will be invited to a reception on May 28. " +
        N(15) + "Winners will be notified by email by May 15. " +
        N(16) + "Questions may be directed to Ms. Farida Nwachukwu, teen services librarian, at the Teen Desk or by phone during open hours.</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the information in the Teen Photo Contest guidelines?",
          choices: [
            { letter: "A", text: "They teach students how to take better portraits." },
            { letter: "B", text: "They describe the history of the Maple Hollow library." },
            { letter: "C", text: "They explain who may enter, what is allowed, and how to enter." },
            { letter: "D", text: "They list last year's winners and their prize-winning photos." }
          ],
          correct: "C"
        },
        {
          id: "release",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the guidelines, what must accompany a contest photo that shows a recognizable sixteen-year-old?",
          choices: [
            { letter: "A", text: "a release form signed by a parent or guardian" },
            { letter: "B", text: "a note from the student's photography teacher" },
            { letter: "C", text: "a second photo taken in the Place category" },
            { letter: "D", text: "a caption of at least fifty words about the person" }
          ],
          correct: "A"
        },
        {
          id: "disqualify",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Select TWO changes that would get a photo disqualified under the Maple Hollow contest rules.",
          choices: [
            { letter: "A", text: "cropping the edges of the photo" },
            { letter: "B", text: "removing a trash can from the background" },
            { letter: "C", text: "adjusting the colors of a sunset" },
            { letter: "D", text: "combining two photos into one image" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The bold headings in the Maple Hollow contest guidelines mainly help the reader by —",
          choices: [
            { letter: "A", text: "grouping related rules so information is easy to find" },
            { letter: "B", text: "showing the order in which the photos will be judged" },
            { letter: "C", text: "listing the names of the photographers on the panel" },
            { letter: "D", text: "explaining why the library chose this year's theme" }
          ],
          correct: "A"
        },
        {
          id: "help",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence makes clear that the library will help students who cannot upload their photos from home?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "C"
        },
        {
          id: "display",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The guidelines include sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "explain how long the contest will stay open" },
            { letter: "B", text: "tell entrants how winning photos will be shared" },
            { letter: "C", text: "warn students not to submit framed photographs" },
            { letter: "D", text: "describe the size of the library's main hall" }
          ],
          correct: "B"
        },
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The guidelines for the Hometown Close-Up contest are written mainly for —",
          choices: [
            { letter: "A", text: "professional photographers judging the contest" },
            { letter: "B", text: "parents who volunteer at the library's Teen Desk" },
            { letter: "C", text: "camera shop owners who donate contest prizes" },
            { letter: "D", text: "high school students who might enter photos" }
          ],
          correct: "D"
        }
      ]
    },
    /* 17 · ARGUMENT · mountain hiking */
    {
      id: "g11-ri-c100-cinder-permits",
      family: "G11",
      title: "Cinder Peak Is Full",
      kind: "Argument · 11.RI",
      blurb: "A student trail steward argues that a crowded mountain trail needs free, timed weekend permits.",
      level: 3,
      passage:
        "<p><strong>Cinder Peak Needs a Permit System</strong> (an opinion column by Tobias Kerrigan, a high school senior and volunteer trail steward)</p>" +
        "<p>" + N(1) + "On a sunny Saturday last July, I counted 412 hikers passing the Cinder Peak trailhead before noon. " +
        N(2) + "Ten years ago, according to the county parks office, the trail saw about that many people in a typical week. " +
        N(3) + "Cinder Peak has become a victim of its own beauty, and the county should respond the way many crowded parks already have: by requiring free, timed permits on summer weekends.</p>" +
        "<p>" + N(4) + "The damage from crowding is not hard to find. " +
        N(5) + "As a trail steward, I have watched the meadow below the summit turn into a maze of bare dirt where hikers step off the path to pass slower groups. " +
        N(6) + "Restrooms at the trailhead overflow by midmorning, and cars now line the narrow mountain road for half a mile, blocking the shoulder that emergency vehicles need. " +
        N(7) + "Last August, an ambulance took twenty-five minutes to reach an injured hiker because it could not get through.</p>" +
        "<p>" + N(8) + "A permit system would not keep anyone off the mountain; it would spread visitors across the day. " +
        N(9) + "Hikers would reserve a two-hour starting window online, and a share of permits would be held back each morning for people who arrive without one. " +
        N(10) + "Parks that have tried similar plans report fewer parking problems and less damage to fragile ground.</p>" +
        "<p>" + N(11) + "Some opponents argue that public land should be open to everyone, at any time, without paperwork. " +
        N(12) + "I share that value. " +
        N(13) + "But a trail so crowded that its meadow dies and its ambulances cannot pass is not truly open to anyone; it is simply full. " +
        N(14) + "Others worry that families without reliable internet will be shut out. " +
        N(15) + "That concern is fair, which is why the walk-up permits matter, and why the county should also take reservations by phone.</p>" +
        "<p>" + N(16) + "Cinder Peak belongs to all of us, including the people who will hike it twenty years from now. " +
        N(17) + "Asking visitors to plan a few days ahead is a small price for keeping that promise. " +
        N(18) + "The county board will discuss the proposal at its March meeting, and I urge every hiker who loves this mountain to attend and speak in support.</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence best states Tobias Kerrigan's central claim about Cinder Peak?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "B"
        },
        {
          id: "summary",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which of the following best summarizes the argument in the Cinder Peak opinion column?",
          choices: [
            { letter: "A", text: "Cinder Peak should be closed to hikers until its meadow recovers." },
            { letter: "B", text: "Hikers should stop visiting Cinder Peak and find quieter trails." },
            { letter: "C", text: "The county should build a bigger parking lot at the trailhead." },
            { letter: "D", text: "Crowding harms Cinder Peak, and free timed permits would help." }
          ],
          correct: "D"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author develop the argument in sentences 4-15 of the Cinder Peak column?",
          choices: [
            { letter: "A", text: "by describing harms, proposing a fix, and answering objections" },
            { letter: "B", text: "by telling the history of the trail from its earliest days" },
            { letter: "C", text: "by comparing Cinder Peak with three other popular mountains" },
            { letter: "D", text: "by listing hiking safety tips in order of importance" }
          ],
          correct: "A"
        },
        {
          id: "full",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "In sentence 13, the author says an overcrowded trail is not truly open to anyone but simply full mainly to —",
          choices: [
            { letter: "A", text: "admit that the permit plan will not solve crowding" },
            { letter: "B", text: "suggest that hikers should visit only on weekdays" },
            { letter: "C", text: "turn the opponents' value of openness into support" },
            { letter: "D", text: "blame the county for allowing the meadow to die" }
          ],
          correct: "C"
        },
        {
          id: "share",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "The author includes the short statement in sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "show respect for opponents before disagreeing" },
            { letter: "B", text: "admit that he has changed his mind about permits" },
            { letter: "C", text: "suggest that public land should have no rules" },
            { letter: "D", text: "introduce a new reason the meadow is dying" }
          ],
          correct: "A"
        },
        {
          id: "ambulance",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the detail about the ambulance in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "praise the speed of the county's rescue teams" },
            { letter: "B", text: "explain why the trail closes during August" },
            { letter: "C", text: "suggest that the injured hiker was careless" },
            { letter: "D", text: "show that crowding creates real safety risks" }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Based on the final sentence, the intended audience for Tobias Kerrigan's column is most likely —",
          choices: [
            { letter: "A", text: "park rangers from other states" },
            { letter: "B", text: "local hikers who could attend the meeting" },
            { letter: "C", text: "tourists planning their first trip to the area" },
            { letter: "D", text: "students studying the plants of the meadow" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
