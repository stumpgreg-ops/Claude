/* SOL Labyrinth — Grade 11 long packs (content104): a family farm, street murals, a hospital volunteer
 * program, marine mammals. Thirteen LONG packs (390–520 words; poem 22–28 lines; paired 200–260 each),
 * 8 questions each. Original Virginia EOC Reading-style content; no published text, no real people.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────── 1 · LITERARY · family farm ───────────── */
    {
      id: "g11-rl-c104-lastmilking",
      family: "G11",
      title: "Last Milking",
      kind: "Literary · 11.RL",
      blurb: "The day the milk truck stops coming, Wren's father asks her to wash a parlor nobody will use again.",
      level: 2,
      passage:
        "<p>" + N(1) + "The milk truck came for the last time on a Thursday in March, and Wren Halvorsen stood at the end of the lane with her hands in her jacket pockets and watched it until the dust settled back onto the gravel. " +
        N(2) + "For sixty-one years a truck had come to this farm every other morning, through blizzards and heat waves and the week her grandfather died, and now the schedule that had organized her whole life was simply over. " +
        N(3) + "Her father had sold the herd to a larger dairy two counties east. " +
        N(4) + "He said the numbers had stopped working, and he said it the way he said everything, flatly, as if the sentence were a fence post he was setting into hard ground.</p>" +
        "<p>" + N(5) + "That afternoon he asked her to wash down the milking parlor one more time. " +
        N(6) + "\"Nobody's going to use it,\" Wren said. " +
        N(7) + "\"I know,\" he said, and handed her the hose. " +
        N(8) + "She did not understand the request, and she resented it a little, the way you resent a chore that seems to exist only to keep you busy. " +
        N(9) + "Still, she pulled on the rubber boots that had been hers since seventh grade and started at the far stall, the way she had been taught, working the spray toward the drain so that nothing ran back over clean concrete.</p>" +
        "<p>" + N(10) + "The parlor was quiet in a way she had never heard it. " +
        N(11) + "Without the pumps thumping and the radio playing old songs for the cows, the water sounded enormous, a small private rainstorm echoing off the steel. " +
        N(12) + "On the wall by the door, someone had written dates in grease pencil years ago: the first calf born in the new barn, the summer the well ran dry, the night of the ice storm when they had milked by lantern. " +
        N(13) + "Wren had walked past that wall a thousand times without reading it. " +
        N(14) + "Now she turned off the hose and read every line.</p>" +
        "<p>" + N(15) + "Her father came in while she was standing there. " +
        N(16) + "He looked at the wall, then at the floor, which was cleaner than it had needed to be in years. " +
        N(17) + "\"Your grandmother made me do this when we sold the hogs,\" he said. " +
        N(18) + "\"I was about your age. " +
        N(19) + "I thought she was being stubborn.\" " +
        N(20) + "He rubbed his thumb along the edge of the doorframe. " +
        N(21) + "\"She said you don't leave a place dirty just because you're leaving it.\" " +
        N(22) + "Wren waited for more, but that was all; her father had never been a man who explained his own lessons.</p>" +
        "<p>" + N(23) + "Before she went in for supper, she found the grease pencil in the drawer under the old radio. " +
        N(24) + "Below the ice storm, in letters smaller than the others, she wrote the date and the words Last milking, parlor washed. " +
        N(25) + "It was not a celebration, and it was not exactly grief. " +
        N(26) + "It was a record, the kind her family had always kept, and she understood now that keeping it was a way of saying the work had mattered even after it ended.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme developed through Wren's last chore?",
          choices: [
            { letter: "A", text: "Families should keep their traditions no matter what they cost." },
            { letter: "B", text: "Marking the end of a way of life with care honors the work it held." },
            { letter: "C", text: "Young people resent chores until they are rewarded for doing them." },
            { letter: "D", text: "Hard work on a farm eventually guarantees financial security." }
          ],
          correct: "B"
        },
        {
          id: "fencepost",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 4, comparing the father's sentence to a fence post set into hard ground suggests that he speaks —",
          choices: [
            { letter: "A", text: "angrily, hoping that Wren will argue with the decision" },
            { letter: "B", text: "carelessly, as though the sale means little to him" },
            { letter: "C", text: "nervously, unsure whether the numbers are correct" },
            { letter: "D", text: "firmly, fixing in place a choice that will not move" }
          ],
          correct: "D"
        },
        {
          id: "resent",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 8 reveals that, at first, Wren —",
          choices: [
            { letter: "A", text: "sees the washing as busywork with no real purpose" },
            { letter: "B", text: "worries that she will not clean the parlor correctly" },
            { letter: "C", text: "blames her father for selling the herd without asking her" },
            { letter: "D", text: "hopes the new owners will be impressed by a clean barn" }
          ],
          correct: "A"
        },
        {
          id: "rainstorm",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 11, describing the hose water as a small private rainstorm mainly emphasizes —",
          choices: [
            { letter: "A", text: "how much water the farm wastes on cleaning the parlor" },
            { letter: "B", text: "how the weather has made the work more difficult" },
            { letter: "C", text: "how strange the parlor feels without its usual noise" },
            { letter: "D", text: "how Wren uses the noise of the hose to avoid talking to her father" }
          ],
          correct: "C"
        },
        {
          id: "hogs",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Based on sentences 17–21, the reader can infer that the father —",
          choices: [
            { letter: "A", text: "plans to buy hogs again now that the cows are gone" },
            { letter: "B", text: "is passing on a lesson he once resisted himself" },
            { letter: "C", text: "thinks Wren is being as stubborn as her grandmother" },
            { letter: "D", text: "wants Wren to take over the farm when she is older" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "In sentence 25, the words not a celebration and not exactly grief create a tone that is best described as —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "cheerful and lighthearted" },
            { letter: "C", text: "anxious and uncertain" },
            { letter: "D", text: "restrained and reflective" }
          ],
          correct: "D"
        },
        {
          id: "wall",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The dates on the parlor wall, introduced in sentence 12, contribute to the structure of the story mainly by —",
          choices: [
            { letter: "A", text: "explaining the money problems that forced the sale of the herd" },
            { letter: "B", text: "interrupting the plot with a flashback to the ice storm" },
            { letter: "C", text: "preparing for the ending, when Wren adds a line of her own" },
            { letter: "D", text: "showing that Wren's grandmother wrote down every family event" }
          ],
          correct: "C"
        },
        {
          id: "resented",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 8, the word resented most nearly means —",
          choices: [
            { letter: "A", text: "felt annoyed by" },
            { letter: "B", text: "felt confused by" },
            { letter: "C", text: "felt frightened of" },
            { letter: "D", text: "felt proud of" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 2 · LITERARY · street murals ───────────── */
    {
      id: "g11-rl-c104-heronwall",
      family: "G11",
      title: "The Heron Wall",
      kind: "Literary · 11.RL",
      blurb: "Lucía's mural is about to be painted over, until a peeling corner shows her what she once painted over herself.",
      level: 3,
      passage:
        "<p>" + N(1) + "The notice was taped to the wall at eye level, directly over the heron's left wing, as if whoever put it there had wanted the bird to read it first. " +
        N(2) + "NEW OWNERSHIP, it said. " +
        N(3) + "EXTERIOR TO BE REPAINTED BY THE FIRST OF THE MONTH. " +
        N(4) + "Lucía Ferreira read it three times and then pulled it down, not out of defiance, she told herself, but because tape left marks.</p>" +
        "<p>" + N(5) + "She had spent the whole summer before junior year on that wall, the long brick side of what used to be Delgado Hardware, painting a great blue heron lifting off a river that did not exist on their block. " +
        N(6) + "People had stopped to watch. " +
        N(7) + "A bus driver had honked every afternoon at four-fifteen. " +
        N(8) + "An old woman from the apartments across the street had brought her lemonade in a jar and said, without smiling, that it was the first thing on Calloway Street that looked like it wanted to go somewhere. " +
        N(9) + "Lucía had taken that as the best review she would ever get.</p>" +
        "<p>" + N(10) + "Now the store was a phone repair shop, and the new owner, a tired young man named Farid, explained over the counter that his insurance company wanted the brick sealed and that sealer did not go over paint. " +
        N(11) + "He was not unkind about it. " +
        N(12) + "He simply had a list, and her heron was on it, somewhere between the broken gutter and the lock on the back door.</p>" +
        "<p>" + N(13) + "On the last morning, Lucía came at sunrise with her phone to photograph every inch. " +
        N(14) + "Near the bottom corner, where the winter had loosened the paint, a flake the size of her palm had peeled away, and underneath it was a color she had never used: a deep, bruised purple, and the curve of a letter. " +
        N(15) + "She worked her fingernail carefully along the edge. " +
        N(16) + "There was an S, part of a T, and a date in neat white numerals, 1994. " +
        N(17) + "Someone had painted this wall before her. " +
        N(18) + "She had primed over it two summers ago without once wondering what she was covering.</p>" +
        "<p>" + N(19) + "She stood there a long time, the river beneath her heron suddenly feeling less like a river and more like a layer. " +
        N(20) + "When Farid's painters arrived at eight, she did not argue. " +
        N(21) + "Instead, she showed them the purple corner and asked if she could photograph it first, and the older painter whistled and said he had seen walls in this city with six or seven coats of somebody's art. " +
        N(22) + "That night Lucía posted the two pictures side by side, the heron and the purple letters, with a caption asking whether anyone knew who S.T. had been. " +
        N(23) + "By morning a woman in another state had replied that the letters were her father's, that he had painted the wall the year she was born, and that he would have liked the bird. " +
        N(24) + "Lucía read the message on the bus, riding past the blank white brick, and began, almost without deciding to, to sketch the next wall in the margin of her chemistry notes.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the story develop through Lucía's discovery on the wall?",
          choices: [
            { letter: "A", text: "Business owners rarely care about the art in their neighborhoods." },
            { letter: "B", text: "An artist should fight to protect her work from being destroyed." },
            { letter: "C", text: "Public art is an ongoing exchange among people who share a space." },
            { letter: "D", text: "Photographs are a far better way to preserve art than paint on old brick." }
          ],
          correct: "C"
        },
        {
          id: "toldherself",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "In sentence 4, the phrase not out of defiance, she told herself suggests that Lucía —",
          choices: [
            { letter: "A", text: "is more upset by the notice than she is willing to admit" },
            { letter: "B", text: "plans to complain to the new owner about the decision" },
            { letter: "C", text: "does not understand what the notice means for her mural" },
            { letter: "D", text: "worries that she will be blamed for damaging the brick" }
          ],
          correct: "A"
        },
        {
          id: "farid",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Based on sentences 10–12, Farid is best described as —",
          choices: [
            { letter: "A", text: "an art lover who regrets losing the heron" },
            { letter: "B", text: "a rude landlord who enjoys giving orders" },
            { letter: "C", text: "a nervous new owner who secretly hopes Lucía will stop him" },
            { letter: "D", text: "a practical owner for whom the mural is one task" }
          ],
          correct: "D"
        },
        {
          id: "notice",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The description in sentence 1 of the notice taped over the heron's wing mainly suggests that the notice —",
          choices: [
            { letter: "A", text: "was put up carelessly by someone in a hurry" },
            { letter: "B", text: "seems aimed directly at the mural it will erase" },
            { letter: "C", text: "was written by the bird lovers in the neighborhood" },
            { letter: "D", text: "covers a part of the mural Lucía never liked" }
          ],
          correct: "B"
        },
        {
          id: "layer",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 19, the river feeling less like a river and more like a layer emphasizes that Lucía —",
          choices: [
            { letter: "A", text: "now sees her mural as one temporary coat in the wall's long history" },
            { letter: "B", text: "regrets choosing a river that did not exist on her street" },
            { letter: "C", text: "notices for the first time that her paint was applied too thinly" },
            { letter: "D", text: "has decided that the heron was never her best work" }
          ],
          correct: "A"
        },
        {
          id: "purple",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the discovery in sentences 14–18 change the direction of the story?",
          choices: [
            { letter: "A", text: "It gives Lucía evidence she can use to stop the repainting." },
            { letter: "B", text: "It reveals that Farid had known about the older mural under the heron all along." },
            { letter: "C", text: "It moves Lucía from loss to seeing that she covered someone's work too." },
            { letter: "D", text: "It shows that the 1994 painting was more skilled than the heron." }
          ],
          correct: "C"
        },
        {
          id: "sealer",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 10, the context suggests that a sealer is —",
          choices: [
            { letter: "A", text: "a worker hired to inspect old buildings for damage" },
            { letter: "B", text: "a type of paint designed to cover murals quickly" },
            { letter: "C", text: "a lock fitted to the back door of a shop" },
            { letter: "D", text: "a protective coating applied to bare brick" }
          ],
          correct: "D"
        },
        {
          id: "review",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 9, the word review suggests that Lucía regarded the old woman's comment as —",
          choices: [
            { letter: "A", text: "a polite remark she quickly forgot" },
            { letter: "B", text: "a judgment of her work that she deeply valued" },
            { letter: "C", text: "a complaint about the colors she had chosen" },
            { letter: "D", text: "a request to paint a second mural nearby" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 3 · LITERARY · hospital volunteer program ───────────── */
    {
      id: "g11-rl-c104-blueline",
      family: "G11",
      title: "The Blue Line",
      kind: "Literary · 11.RL",
      blurb: "On his first day as a hospital volunteer, Samir gets lost, and his grumpy patient knows the way.",
      level: 1,
      passage:
        "<p>" + N(1) + "On his first Saturday as a volunteer at Linden Valley Hospital, Samir Haddad carried the map in his shirt pocket like a passport. " +
        N(2) + "He had studied it all week at the kitchen table, tracing the blue line from the main lobby to radiology and the green line to the outpatient lab, until his little sister asked if he was planning a bank robbery. " +
        N(3) + "The volunteer coordinator, Ms. Achebe, had told the new group that their most important job was simple. " +
        N(4) + "\"Get people where they need to go,\" she said, \"and make them feel less lost than they did when they walked in.\"</p>" +
        "<p>" + N(5) + "His first assignment was an older man in a gray cap who needed a wheelchair ride to the imaging center. " +
        N(6) + "The man's name was Mr. Lindqvist, and he did not seem pleased about the wheelchair or about Samir. " +
        N(7) + "\"I can walk,\" he said. " +
        N(8) + "\"My daughter is the one who insists.\" " +
        N(9) + "Samir said that the hospital required it for this trip, which was true, and that he would go as fast or as slowly as Mr. Lindqvist liked, which made the man snort.</p>" +
        "<p>" + N(10) + "They set off down the main hall. " +
        N(11) + "Samir followed the blue line on the floor with total confidence until it split in two at a set of elevators he did not remember from the map. " +
        N(12) + "He stopped. " +
        N(13) + "He pulled the map from his pocket and turned it sideways, then upside down, while the wheelchair sat in the middle of the hallway and a nurse stepped around them. " +
        N(14) + "His face went hot. " +
        N(15) + "Ms. Achebe had said to make people feel less lost, and now he was the one who was lost, with a patient watching.</p>" +
        "<p>" + N(16) + "\"Left elevator,\" Mr. Lindqvist said quietly. " +
        N(17) + "\"Second floor, then through the double doors by the chapel.\" " +
        N(18) + "Samir looked down at him. " +
        N(19) + "\"I worked maintenance here for thirty years,\" the man said. " +
        N(20) + "\"I fixed the lights in that hallway more times than I can count. " +
        N(21) + "They changed the lines on the floor after I retired, but they didn't change the building.\" " +
        N(22) + "For the first time, he almost smiled.</p>" +
        "<p>" + N(23) + "Samir followed the directions, and they reached imaging four minutes early. " +
        N(24) + "On the way, Mr. Lindqvist pointed out the window he had replaced after a hailstorm and the ceiling tile that still had a water stain no one had ever managed to fix. " +
        N(25) + "By the time they arrived, he was talking the way people talk when they are glad someone is listening. " +
        N(26) + "That afternoon, Samir wrote a note on the back of his map in small letters: Ask first. " +
        N(27) + "He thought it might be the most useful direction on the page.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is best supported by Samir's first day at the hospital?",
          choices: [
            { letter: "A", text: "Listening to others can help as much as having the right answers." },
            { letter: "B", text: "Volunteers should never admit to patients that they are confused." },
            { letter: "C", text: "Older people are usually unwilling to accept help from teenagers." },
            { letter: "D", text: "A carefully studied plan will always prevent mistakes." }
          ],
          correct: "A"
        },
        {
          id: "samir",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 2 shows that Samir is —",
          choices: [
            { letter: "A", text: "bored by the training the hospital required" },
            { letter: "B", text: "more interested in maps than in people" },
            { letter: "C", text: "careful and eager to do the job well" },
            { letter: "D", text: "worried that his sister will tease him" }
          ],
          correct: "C"
        },
        {
          id: "passport",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 1, comparing the map to a passport suggests that Samir sees the map as —",
          choices: [
            { letter: "A", text: "a souvenir he plans to keep after the day ends" },
            { letter: "B", text: "a key document for crossing unfamiliar ground" },
            { letter: "C", text: "a form he must show to the coordinator" },
            { letter: "D", text: "a paper that proves he is old enough to volunteer there" }
          ],
          correct: "B"
        },
        {
          id: "smile",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Based on sentences 19–22, the reader can infer that Mr. Lindqvist almost smiles because he —",
          choices: [
            { letter: "A", text: "is amused that the floor lines have finally been fixed" },
            { letter: "B", text: "is relieved that he will not have to ride in the wheelchair" },
            { letter: "C", text: "wants Samir to report the mistake to Ms. Achebe" },
            { letter: "D", text: "is pleased to be useful and to share what he knows" }
          ],
          correct: "D"
        },
        {
          id: "lost",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How do the events in sentences 11–15 connect to Ms. Achebe's advice in sentence 4?",
          choices: [
            { letter: "A", text: "They prove that her advice was impossible to follow." },
            { letter: "B", text: "They show Samir ignoring her advice on purpose." },
            { letter: "C", text: "They reverse the situation, so the volunteer is the lost one." },
            { letter: "D", text: "They explain why she chose Samir for the hospital's first assignment of the day." }
          ],
          correct: "C"
        },
        {
          id: "snort",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 9, the word snort suggests that Mr. Lindqvist's reaction is —",
          choices: [
            { letter: "A", text: "gruff but a little amused" },
            { letter: "B", text: "angry and insulting" },
            { letter: "C", text: "frightened and confused" },
            { letter: "D", text: "polite and grateful" }
          ],
          correct: "A"
        },
        {
          id: "insists",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 8, the word insists most nearly means —",
          choices: [
            { letter: "A", text: "worries quietly" },
            { letter: "B", text: "forgets easily" },
            { letter: "C", text: "asks politely" },
            { letter: "D", text: "demands firmly" }
          ],
          correct: "D"
        },
        {
          id: "direction",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "In sentence 27, calling Ask first the most useful direction on the page mainly emphasizes that Samir —",
          choices: [
            { letter: "A", text: "plans to draw a new and better map of the hospital" },
            { letter: "B", text: "now values advice about people as much as routes" },
            { letter: "C", text: "no longer trusts the colored lines on the floor" },
            { letter: "D", text: "wants to become a maintenance worker himself" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 4 · INFORMATIONAL · marine mammals ───────────── */
    {
      id: "g11-ri-c104-otterforest",
      family: "G11",
      title: "The Otter and the Forest",
      kind: "Informational · 11.RI",
      blurb: "How a small, whiskered animal decides whether a coastline is green with kelp or gray with urchins.",
      level: 2,
      passage:
        "<p>" + N(1) + "Along parts of the Pacific coast, a forest grows under the water. " +
        N(2) + "Giant kelp, a brown seaweed, rises from the rocky seafloor toward the light, and in good conditions it can grow more than a foot in a single day. " +
        N(3) + "Fish shelter among its long stalks, snails graze its blades, and seabirds hunt along its edges. " +
        N(4) + "Yet this underwater forest depends heavily on a small, whiskered animal that floats on its back at the surface: the sea otter.</p>" +
        "<p>" + N(5) + "The connection begins with what otters eat. " +
        N(6) + "Unlike seals and whales, sea otters have no thick layer of blubber to keep them warm in cold water. " +
        N(7) + "Instead, they rely on extremely dense fur and on a fast metabolism, which means they must eat roughly a quarter of their body weight every day. " +
        N(8) + "A large share of that diet is sea urchins, spiny grazers that feed on kelp. " +
        N(9) + "An otter dives, collects urchins from the bottom, and returns to the surface to crack them open, sometimes using a rock balanced on its chest as a tool.</p>" +
        "<p>" + N(10) + "When otters are present, urchin numbers stay in check, and the urchins that remain tend to hide in crevices, eating drifting bits of kelp rather than attacking living plants. " +
        N(11) + "When otters disappear, the balance can collapse. " +
        N(12) + "Urchins leave their hiding places and move across the seafloor in large groups, chewing through the anchors that hold kelp to the rocks. " +
        N(13) + "Within a few years, a thriving forest can become what scientists call an urchin barren, a stretch of bare rock carpeted with spines and little else.</p>" +
        "<p>" + N(14) + "Ecologists use the term keystone species for an animal whose influence on its community is much larger than its numbers would suggest. " +
        N(15) + "The name comes from architecture: in a stone arch, the keystone is the wedge at the top that holds the other stones in place. " +
        N(16) + "Remove it, and the arch falls. " +
        N(17) + "Sea otters fit this description well, because a relatively small population can determine whether an entire coastline is green with kelp or gray with urchins.</p>" +
        "<p>" + N(18) + "The story is not quite that simple, however. " +
        N(19) + "Warming ocean water, strong storms, and disease among other urchin predators, such as sea stars, can also weaken kelp forests, and in some areas otters alone have not been enough to bring them back. " +
        N(20) + "Researchers also point out that fishing communities that harvest urchins or shellfish may see otters as competitors. " +
        N(21) + "Still, where otters have returned, many kelp beds have recovered, and the fish, birds, and other animals that depend on the forest have returned with them. " +
        N(22) + "The lesson reaches beyond one coastline: sometimes protecting a single species is one of the most effective ways to protect a whole ecosystem.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the passage about otters and kelp?",
          choices: [
            { letter: "A", text: "Giant kelp is one of the fastest-growing plants found in the ocean." },
            { letter: "B", text: "Fishing communities and sea otters compete for the same shellfish." },
            { letter: "C", text: "Sea urchins are the main cause of damage along the Pacific coast." },
            { letter: "D", text: "Otters help keep kelp forests healthy, though other forces matter too." }
          ],
          correct: "D"
        },
        {
          id: "eat",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to the passage, why must sea otters eat so much food each day?",
          choices: [
            { letter: "A", text: "They burn energy diving to depths where urchins are scarce." },
            { letter: "B", text: "They lack blubber and rely on fur and a fast metabolism." },
            { letter: "C", text: "They share their food with the seabirds that hunt nearby." },
            { letter: "D", text: "They can only crack open a few urchins on each dive." }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which description best matches the structure of the passage?",
          choices: [
            { letter: "A", text: "It traces a chain of causes and effects, then complications." },
            { letter: "B", text: "It compares sea otters with seals and whales point by point." },
            { letter: "C", text: "It tells the history of one kelp forest in time order." },
            { letter: "D", text: "It presents a problem and argues for a single solution." }
          ],
          correct: "A"
        },
        {
          id: "arch",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the description of a stone arch in sentences 15 and 16 mainly to —",
          choices: [
            { letter: "A", text: "show that coastal cliffs are shaped like arches" },
            { letter: "B", text: "explain why urchins hide among the rocks" },
            { letter: "C", text: "help readers picture how one piece holds a structure up" },
            { letter: "D", text: "suggest that kelp forests were first studied by builders and architects" }
          ],
          correct: "C"
        },
        {
          id: "attitude",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "The author's attitude toward the sea otter's role is best described as —",
          choices: [
            { letter: "A", text: "appreciative but careful not to overstate it" },
            { letter: "B", text: "doubtful that otters make any real difference" },
            { letter: "C", text: "alarmed that otters are harming fishing towns" },
            { letter: "D", text: "neutral and uninterested in the outcome" }
          ],
          correct: "A"
        },
        {
          id: "fishing",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes sentence 20 mainly to —",
          choices: [
            { letter: "A", text: "prove that otters eat more shellfish than urchins" },
            { letter: "B", text: "argue that urchin harvesting should be banned" },
            { letter: "C", text: "explain how fishing communities first discovered the kelp forests" },
            { letter: "D", text: "admit that not everyone welcomes the otters' return" }
          ],
          correct: "D"
        },
        {
          id: "barren",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 13, the word barren most nearly refers to —",
          choices: [
            { letter: "A", text: "a crowded reef full of hiding places" },
            { letter: "B", text: "an area left nearly empty of life" },
            { letter: "C", text: "a calm bay sheltered from storms" },
            { letter: "D", text: "a field of young, newly planted kelp" }
          ],
          correct: "B"
        },
        {
          id: "ecologist",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word Ecologists in sentence 14 combines eco-, meaning home or environment, with -logy, meaning study, and the suffix -ist. An ecologist is most likely —",
          choices: [
            { letter: "A", text: "a person who builds stone arches" },
            { letter: "B", text: "a tool that scientists use to measure the depth of the ocean" },
            { letter: "C", text: "one who studies living things and their surroundings" },
            { letter: "D", text: "a kind of animal that lives near the shore" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 5 · INFORMATIONAL · street murals ───────────── */
    {
      id: "g11-ri-c104-muralfade",
      family: "G11",
      title: "When Murals Fade",
      kind: "Informational · 11.RI",
      blurb: "Sun and salt can be slowed down; deciding which murals deserve to come back is harder.",
      level: 3,
      passage:
        "<p>" + N(1) + "A mural painted on an outside wall begins to change the moment the artist packs up the last brush. " +
        N(2) + "Sunlight is the most obvious enemy: ultraviolet rays break down the chemical bonds in many pigments, and reds and purples often fade first, which is why an old mural can look as if it has been slowly washed in blue. " +
        N(3) + "Less visible, but often more destructive, is water. " +
        N(4) + "Brick and concrete are porous, so rain and groundwater travel through them, carrying dissolved salts toward the surface. " +
        N(5) + "When the water evaporates, the salts crystallize behind the paint and push it off the wall in flakes, a process that can ruin a mural from behind even when its face looks healthy.</p>" +
        "<p>" + N(6) + "Conservators, the specialists who care for artworks, have developed ways to slow this damage. " +
        N(7) + "Before painting, a wall can be cleaned, repaired, and sealed with a primer that lets moisture escape as vapor rather than trapping it. " +
        N(8) + "After painting, many murals receive a clear top coat that blocks some ultraviolet light. " +
        N(9) + "Some coats are designed to be sacrificial: they absorb graffiti, grime, and sun damage and can be stripped off and replaced every few years, while the painting underneath stays untouched. " +
        N(10) + "None of these methods makes a mural permanent. " +
        N(11) + "At best, they turn a lifespan of five years into one of twenty or thirty.</p>" +
        "<p>" + N(12) + "The harder questions are not technical. " +
        N(13) + "When a beloved mural fades, should it be restored exactly as it was, repainted with the artist's updates, or allowed to disappear? " +
        N(14) + "Each answer has defenders. " +
        N(15) + "Some argue that a mural belongs to the moment and the people who first saw it, so an exact restoration preserves a piece of shared history. " +
        N(16) + "Others note that many muralists see their work as alive and would rather refresh it in their current style than copy their younger selves. " +
        N(17) + "A third group believes that fading is part of the art's honesty, since walls, like neighborhoods, change.</p>" +
        "<p>" + N(18) + "In the city of Harrow Point, a public mural program has tried to settle these disputes before they begin. " +
        N(19) + "Every artist who receives city funding now signs an agreement that states how long the work is expected to last, who may restore it, and whether the artist must be consulted first. " +
        N(20) + "The program also photographs each mural in high resolution when it is finished, so that even a painting that is eventually lost leaves a detailed record. " +
        N(21) + "Program staff say the agreements have reduced arguments, though it is probably too early to tell whether they will hold up when a well-known mural reaches the end of its expected life.</p>" +
        "<p>" + N(22) + "What the agreements cannot do is decide what a community values. " +
        N(23) + "A wall that one resident sees as a landmark, another may see as a faded advertisement for a business that closed years ago. " +
        N(24) + "Murals live outdoors, among the people who walk past them every day, and in the end those people often decide, through petitions, donations, or simple neglect, which paintings come back and which are allowed to go.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the passage about caring for murals?",
          choices: [
            { letter: "A", text: "Sunlight is the main reason that outdoor murals are lost." },
            { letter: "B", text: "Mural damage can be slowed, but restoring them depends on what people value." },
            { letter: "C", text: "Cities should pay the original artists to repaint every mural once it begins to fade." },
            { letter: "D", text: "Photographs have made the restoration of murals unnecessary." }
          ],
          correct: "B"
        },
        {
          id: "salts",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to the passage, how can water ruin a mural even when its surface looks healthy?",
          choices: [
            { letter: "A", text: "Rain washes the clear top coat away and lets strong sunlight reach the paint." },
            { letter: "B", text: "Moisture causes reds and purples to turn blue over time." },
            { letter: "C", text: "Groundwater softens the primer so that graffiti sticks to it." },
            { letter: "D", text: "Salts in the wall crystallize behind the paint and push it off." }
          ],
          correct: "D"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize the passage?",
          choices: [
            { letter: "A", text: "By listing famous murals in the order they were painted" },
            { letter: "B", text: "By comparing two cities that handle the care of their public murals very differently" },
            { letter: "C", text: "By moving from damage, to technical fixes, to unsettled questions of value" },
            { letter: "D", text: "By describing one artist's career from start to finish" }
          ],
          correct: "C"
        },
        {
          id: "speculation",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which statement from the passage is presented as a speculation rather than a confirmed fact?",
          choices: [
            { letter: "A", text: "it is probably too early to tell whether they will hold up (sentence 21)" },
            { letter: "B", text: "reds and purples often fade first (sentence 2)" },
            { letter: "C", text: "The program also photographs each mural in high resolution (sentence 20)" },
            { letter: "D", text: "Brick and concrete are porous (sentence 4)" }
          ],
          correct: "A"
        },
        {
          id: "turn",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 12 serves mainly to —",
          choices: [
            { letter: "A", text: "summarize the methods described in the second paragraph" },
            { letter: "B", text: "suggest that conservators are not needed for most murals" },
            { letter: "C", text: "introduce the city whose mural program the author describes later in the passage" },
            { letter: "D", text: "mark a shift from methods to questions without easy answers" }
          ],
          correct: "D"
        },
        {
          id: "harrow",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the example of Harrow Point in sentences 18–21 mainly to —",
          choices: [
            { letter: "A", text: "prove that city funding always produces better murals" },
            { letter: "B", text: "show one attempt to head off the disputes in paragraph 3" },
            { letter: "C", text: "explain how sacrificial coats are stripped and replaced" },
            { letter: "D", text: "argue that artists should never be consulted about restorations of their work" }
          ],
          correct: "B"
        },
        {
          id: "sacrificial",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 9, the explanation after the colon shows that a sacrificial coat is one that —",
          choices: [
            { letter: "A", text: "is worn down and replaced to protect the painting beneath" },
            { letter: "B", text: "is applied only to the murals that the city already plans to remove" },
            { letter: "C", text: "brightens faded colors by adding new pigment" },
            { letter: "D", text: "must be painted by the original artist" }
          ],
          correct: "A"
        },
        {
          id: "porous",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word porous in sentence 4 ends with the suffix -ous, meaning full of, as in joyous and dangerous. A porous material is one that —",
          choices: [
            { letter: "A", text: "is too heavy to be moved once it is set" },
            { letter: "B", text: "reflects most of the sunlight that strikes it" },
            { letter: "C", text: "has tiny openings that let liquid pass through" },
            { letter: "D", text: "has been coated to keep water from entering" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 6 · ARGUMENT · hospital volunteer program ───────────── */
    {
      id: "g11-ri-c104-teenvolunteers",
      family: "G11",
      title: "Keep the Door Open",
      kind: "Argument · 11.RI",
      blurb: "A former volunteer argues that the hospital should add safeguards for teen volunteers instead of turning them away.",
      level: 3,
      passage:
        "<p>" + N(1) + "Next month, the board of Cedar Hollow Medical Center will vote on whether to raise the minimum age for volunteers from fifteen to eighteen. " +
        N(2) + "The proposal is being described as a small administrative change. " +
        N(3) + "It is not. " +
        N(4) + "For most students at our school, it would end the only chance they have to see the inside of a hospital from somewhere other than a patient's bed.</p>" +
        "<p>" + N(5) + "I understand why the board is considering it. " +
        N(6) + "Supervising teenagers takes staff time, and staff time in a hospital is precious. " +
        N(7) + "A memo from the volunteer office notes that younger volunteers need more training hours and that two of them were reassigned last year after missing shifts. " +
        N(8) + "Those are fair concerns, and anyone who has watched a fifteen-year-old try to wake up on a Saturday knows they are not imaginary.</p>" +
        "<p>" + N(9) + "But the same memo contains another number that deserves more attention. " +
        N(10) + "Of the hospital's 140 regular volunteers, 58 are under eighteen, and together they covered nearly half of last year's weekend information-desk shifts. " +
        N(11) + "Those are the hours when the hospital's adult volunteers, many of them retirees, are least available. " +
        N(12) + "Removing teenagers would not simply save training time; it would leave the front desk short on precisely the days when visitors arrive confused and anxious and need someone to walk them to the right elevator.</p>" +
        "<p>" + N(13) + "There is also what the volunteers themselves gain. " +
        N(14) + "I spent two summers pushing wheelchairs and delivering flowers, and I learned more about patience from an hour with a frightened family than from any class I have taken. " +
        N(15) + "Several of my former fellow volunteers are now studying nursing or respiratory therapy, and three of them have told me that the program is the reason. " +
        N(16) + "A hospital that complains about a shortage of health workers should think carefully before closing one of the doors that leads young people toward the field.</p>" +
        "<p>" + N(17) + "The board does not have to choose between safety and opportunity. " +
        N(18) + "It could require that volunteers under eighteen complete one extra training session, work only in pairs, and leave the program after two unexcused absences. " +
        N(19) + "These rules would address the memo's concerns directly while keeping the program open. " +
        N(20) + "A teenager who cannot meet them should not volunteer. " +
        N(21) + "A teenager who can should not be turned away because of a birthday. " +
        N(22) + "I urge students and families to attend the public meeting on the fourteenth and to tell the board what this program has meant to them.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author wrote this editorial mainly to —",
          choices: [
            { letter: "A", text: "describe the daily duties of a hospital volunteer" },
            { letter: "B", text: "criticize the hospital staff for poor supervision" },
            { letter: "C", text: "persuade the board to keep teen volunteers, with safeguards" },
            { letter: "D", text: "explain how the hospital board makes its decisions about volunteer rules" }
          ],
          correct: "C"
        },
        {
          id: "need",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which sentence provides the strongest evidence that teen volunteers fill a real need for the hospital?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "A"
        },
        {
          id: "itisnot",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Sentences 2 and 3 work together mainly to —",
          choices: [
            { letter: "A", text: "show that the author agrees with the board's reasoning" },
            { letter: "B", text: "explain what an administrative change involves" },
            { letter: "C", text: "suggest that the vote has already been decided" },
            { letter: "D", text: "challenge the claim that the proposal is minor" }
          ],
          correct: "D"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author develop the argument in paragraphs 2 through 5?",
          choices: [
            { letter: "A", text: "By telling a single story about one volunteer from beginning to end" },
            { letter: "B", text: "By conceding concerns, offering counterevidence, and proposing a compromise" },
            { letter: "C", text: "By comparing Cedar Hollow's program with the volunteer programs at other hospitals nearby" },
            { letter: "D", text: "By listing the steps a student takes to apply as a volunteer" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "The author's tone in sentence 8 is best described as —",
          choices: [
            { letter: "A", text: "bitter and accusing" },
            { letter: "B", text: "anxious and uncertain" },
            { letter: "C", text: "wry and fair-minded" },
            { letter: "D", text: "formal and detached" }
          ],
          correct: "C"
        },
        {
          id: "careers",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author includes sentence 15 mainly to —",
          choices: [
            { letter: "A", text: "show that most volunteers dislike their assignments" },
            { letter: "B", text: "prove that teens need more training than adults do" },
            { letter: "C", text: "explain why the memo was written by the hospital's volunteer office last year" },
            { letter: "D", text: "back the claim that the program leads teens to health careers" }
          ],
          correct: "D"
        },
        {
          id: "precious",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 6, the word precious most nearly means —",
          choices: [
            { letter: "A", text: "scarce and valuable" },
            { letter: "B", text: "delicate and fragile" },
            { letter: "C", text: "costly and wasteful" },
            { letter: "D", text: "charming and sweet" }
          ],
          correct: "A"
        },
        {
          id: "boardside",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which detail from the passage would supporters of the proposal most likely use to defend raising the age?",
          choices: [
            { letter: "A", text: "Many adult volunteers are retirees." },
            { letter: "B", text: "Two younger volunteers missed shifts last year." },
            { letter: "C", text: "Several former volunteers now study nursing." },
            { letter: "D", text: "A public meeting about the vote will be held on the fourteenth." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 7 · FUNCTIONAL TEXT · hospital volunteer program ───────────── */
    {
      id: "g11-ri-c104-volunteerguide",
      family: "G11",
      title: "Junior Volunteer Guide",
      kind: "Functional text · 11.RI",
      blurb: "Badges, shifts, dress code and privacy: the rules every new junior volunteer must know.",
      level: 1,
      passage:
        "<p><strong>Larkspur Community Hospital · Junior Volunteer Program · Orientation Guide</strong></p>" +
        "<p>" + N(1) + "Welcome to the Junior Volunteer Program at Larkspur Community Hospital. " +
        N(2) + "This guide explains what you need to do before your first shift and what we expect from you once you begin. " +
        N(3) + "Please read it carefully and keep it with you during your first month.</p>" +
        "<p><strong>Who Can Apply</strong> " + N(4) + "The program is open to students ages 15 through 18 who are currently enrolled in high school. " +
        N(5) + "Applicants must commit to at least one four-hour shift per week for a full semester, which runs either September through January or February through June. " +
        N(6) + "A parent or guardian must sign the application form for any volunteer under 18.</p>" +
        "<p><strong>Before Your First Shift</strong> " + N(7) + "Every new volunteer must complete three steps before working with patients or visitors. " +
        N(8) + "First, attend the two-hour orientation session held on the first Saturday of each month in Conference Room B. " +
        N(9) + "Second, submit proof of a flu vaccination and a tuberculosis screening from the past twelve months to the Volunteer Office. " +
        N(10) + "Third, pick up your photo badge, which you must wear above the waist at all times while in the building. " +
        N(11) + "Volunteers who have not completed all three steps will be sent home, even if they are on the schedule.</p>" +
        "<p><strong>Shifts and Absences</strong> " + N(12) + "Shifts are scheduled through the online volunteer portal, where you can also trade shifts with another trained volunteer. " +
        N(13) + "If you cannot attend a shift and cannot find a replacement, call the Volunteer Office at least 24 hours in advance. " +
        N(14) + "Two absences without notice in one semester will end your participation in the program, though you may reapply the following semester.</p>" +
        "<p><strong>Dress Code</strong> " + N(15) + "Wear the burgundy volunteer polo provided at orientation, along with long pants or a knee-length skirt and closed-toe shoes. " +
        N(16) + "Keep jewelry to a minimum, and do not wear strong perfume or cologne, because some patients are sensitive to scents.</p>" +
        "<p><strong>Patient Privacy</strong> " + N(17) + "You may see or hear information about patients during your shift. " +
        N(18) + "The law and hospital policy require you to keep this information confidential. " +
        N(19) + "Do not discuss patients with friends or family, do not take photographs anywhere in patient areas, and do not post about your shift on social media in a way that could identify anyone. " +
        N(20) + "A single privacy violation may result in immediate removal from the program.</p>" +
        "<p><strong>What Volunteers Do Not Do</strong> " + N(21) + "Junior volunteers do not lift or move patients, except by pushing a wheelchair after a staff member has seated the patient. " +
        N(22) + "You also may not give patients food or drink without permission from a nurse, since many patients are on restricted diets. " +
        N(23) + "If a patient or visitor asks for help you are not allowed to give, say that you will find a staff member, and then do so right away.</p>" +
        "<p><strong>Questions</strong> " + N(24) + "Contact the Volunteer Office, open weekdays from 8 a.m. to 4:30 p.m., on the ground floor next to the gift shop.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The main purpose of this guide is to —",
          choices: [
            { letter: "A", text: "persuade more students to apply for the volunteer program" },
            { letter: "B", text: "describe the history of Larkspur Community Hospital" },
            { letter: "C", text: "explain how nurses train for their jobs" },
            { letter: "D", text: "inform new volunteers of the program's rules" }
          ],
          correct: "D"
        },
        {
          id: "senthome",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "A volunteer has attended orientation but has not yet turned in a tuberculosis screening. According to the guide, what will happen if this volunteer arrives for a scheduled shift?",
          choices: [
            { letter: "A", text: "The volunteer will be sent home." },
            { letter: "B", text: "The volunteer may work at the information desk only." },
            { letter: "C", text: "The volunteer will be removed from the program." },
            { letter: "D", text: "The volunteer may work if a parent signs a form." }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The bold headings in the guide mainly help the reader —",
          choices: [
            { letter: "A", text: "understand the order in which the rules were written" },
            { letter: "B", text: "see which rules are more important than others" },
            { letter: "C", text: "find the rules on a particular topic quickly" },
            { letter: "D", text: "tell which sections apply only to adult volunteers" }
          ],
          correct: "C"
        },
        {
          id: "strict",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence makes clear that the hospital will enforce its privacy rules strictly?",
          choices: [
            { letter: "A", text: "Sentence 16" },
            { letter: "B", text: "Sentence 20" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "B"
        },
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The intended audience for this guide is —",
          choices: [
            { letter: "A", text: "teenagers who have joined or plan to join the program" },
            { letter: "B", text: "patients who are staying overnight at the hospital" },
            { letter: "C", text: "nurses who supervise adult volunteers" },
            { letter: "D", text: "parents looking for a hospital for their children" }
          ],
          correct: "A"
        },
        {
          id: "diets",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 22, the phrase since many patients are on restricted diets mainly serves to —",
          choices: [
            { letter: "A", text: "describe the food served in the hospital cafeteria" },
            { letter: "B", text: "suggest that volunteers may bring snacks for patients" },
            { letter: "C", text: "warn volunteers that nurses will check their lunches" },
            { letter: "D", text: "explain the reason behind a rule" }
          ],
          correct: "D"
        },
        {
          id: "confidential",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 18, the word confidential most nearly means —",
          choices: [
            { letter: "A", text: "written down" },
            { letter: "B", text: "kept private" },
            { letter: "C", text: "checked often" },
            { letter: "D", text: "shared widely" }
          ],
          correct: "B"
        },
        {
          id: "absence",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the guide, what should a volunteer who cannot make a scheduled shift do first?",
          choices: [
            { letter: "A", text: "Call the Volunteer Office on the morning of the shift" },
            { letter: "B", text: "Ask a parent or guardian to sign a new form" },
            { letter: "C", text: "Try to trade the shift with another trained volunteer" },
            { letter: "D", text: "Wait to reapply the following semester" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 8 · VOCABULARY · family farm ───────────── */
    {
      id: "g11-rv-c104-fiveacres",
      family: "G11",
      title: "The Five Acres",
      kind: "Vocabulary · 11.RV",
      blurb: "A corn farm on shaky ground bets five resting acres on strawberries.",
      level: 2,
      passage:
        "<p>" + N(1) + "For three generations, the Castellanos family grew one thing on their hillside acres outside Millbrook: field corn, sold by the ton to a feed company two towns over. " +
        N(2) + "It was a simple plan, and for a long time it worked. " +
        N(3) + "But by the time Elena Castellanos returned from college with a degree in agricultural business, the family's position had become <strong>precarious</strong>: corn prices had fallen three years in a row, fuel costs had risen, and a single bad harvest could have forced them to sell land that had been in the family since 1952.</p>" +
        "<p>" + N(4) + "Elena's proposal was to <strong>diversify</strong>. " +
        N(5) + "Instead of depending on one crop and one buyer, the farm would grow strawberries, pumpkins, and sweet corn, and would sell them directly to the public through a farm stand and a pick-your-own field. " +
        N(6) + "If one crop failed or one market dried up, the others might carry the family through the year. " +
        N(7) + "Her father, Rubén, was <strong>skeptical</strong>. " +
        N(8) + "\"People don't drive forty minutes to pick their own food,\" he said. " +
        N(9) + "\"They go to the grocery store.\" " +
        N(10) + "He agreed to try only if the experiment began small, on five acres at the bottom of the hill.</p>" +
        "<p>" + N(11) + "Those five acres had been left <strong>fallow</strong> for two seasons, unplanted so that the soil could rest. " +
        N(12) + "Elena knew that resting alone would not be enough. " +
        N(13) + "Years of corn had drawn nitrogen and other nutrients out of the ground, so before planting she sowed a cover crop of clover and rye to <strong>replenish</strong> what had been lost. " +
        N(14) + "When the clover was tilled back into the soil in the spring, it returned nitrogen to the earth the way a deposit returns money to an account.</p>" +
        "<p>" + N(15) + "The strawberries demanded more attention than corn ever had. " +
        N(16) + "Elena was <strong>meticulous</strong>, checking each row for pests every morning, recording rainfall to the tenth of an inch, and adjusting the irrigation line by hand when a section looked dry. " +
        N(17) + "Her younger brother joked that she knew the plants better than she knew her own friends. " +
        N(18) + "The care paid off. " +
        N(19) + "On the first pick-your-own weekend in June, cars lined the gravel road all the way to the mailbox, and by Sunday afternoon the field had been picked clean.</p>" +
        "<p>" + N(20) + "Rubén stood at the farm stand counting cash and said nothing for a long time. " +
        N(21) + "Then he asked how many more acres she thought the hillside could take. " +
        N(22) + "The farm still grows corn on most of its land, but the five acres at the bottom of the hill have become fifteen, and the family no longer spends every autumn waiting to learn whether a single price will decide its future.</p>",
      claims: [
        {
          id: "precarious",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the explanation after the colon shows that precarious means —",
          choices: [
            { letter: "A", text: "unstable and at risk" },
            { letter: "B", text: "wealthy and secure" },
            { letter: "C", text: "old and respected" },
            { letter: "D", text: "busy and crowded" }
          ],
          correct: "A"
        },
        {
          id: "diversify",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word diversify in sentence 4 combines divers-, meaning different or varied, as in diverse, with the suffix -ify, meaning to make. To diversify a farm's business is to —",
          choices: [
            { letter: "A", text: "sell it to a larger company" },
            { letter: "B", text: "make it smaller and simpler" },
            { letter: "C", text: "make it more varied" },
            { letter: "D", text: "move it to a new location" }
          ],
          correct: "C"
        },
        {
          id: "skeptical",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which sentence best helps the reader understand the meaning of skeptical in sentence 7?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "B"
        },
        {
          id: "fallow",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 11, the word fallow most nearly describes land that is —",
          choices: [
            { letter: "A", text: "flooded by heavy rain" },
            { letter: "B", text: "sold to a neighbor" },
            { letter: "C", text: "planted with corn each year" },
            { letter: "D", text: "left unplanted for a time" }
          ],
          correct: "D"
        },
        {
          id: "replenish",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word replenish in sentence 13 begins with the prefix re-, as in refill and rebuild. Together with the context, the prefix signals that to replenish is to —",
          choices: [
            { letter: "A", text: "remove something for good" },
            { letter: "B", text: "fill up again what was used" },
            { letter: "C", text: "measure something carefully" },
            { letter: "D", text: "plant a crop for the first time" }
          ],
          correct: "B"
        },
        {
          id: "meticulous",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The word meticulous in sentence 16 suggests that Elena's work is —",
          choices: [
            { letter: "A", text: "extremely careful and precise" },
            { letter: "B", text: "quick and somewhat careless" },
            { letter: "C", text: "secret and hidden from others" },
            { letter: "D", text: "shared equally with her brother" }
          ],
          correct: "A"
        },
        {
          id: "deposit",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 14, comparing the tilled clover to a deposit in an account helps the reader understand that the cover crop —",
          choices: [
            { letter: "A", text: "costs the family a great deal of money" },
            { letter: "B", text: "must be harvested and sold each spring" },
            { letter: "C", text: "puts back something the soil had lost" },
            { letter: "D", text: "grows faster than the strawberries do" }
          ],
          correct: "C"
        },
        {
          id: "summary",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the passage?",
          choices: [
            { letter: "A", text: "A farmer refuses to change his crops until he is finally forced to sell his land." },
            { letter: "B", text: "Strawberries are easier to grow than corn on a hillside farm." },
            { letter: "C", text: "Two siblings compete to see who can run the family farm better." },
            { letter: "D", text: "A farm family lowers its risk by adding crops, starting small." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 9 · VOCABULARY · marine mammals ───────────── */
    {
      id: "g11-rv-c104-noisysea",
      family: "G11",
      title: "The Noisy Sea",
      kind: "Vocabulary · 11.RV",
      blurb: "Whales and dolphins live by sound, and the ocean is getting louder.",
      level: 3,
      passage:
        "<p>" + N(1) + "For most of human history, people assumed the deep ocean was a silent place. " +
        N(2) + "In fact, it is one of the loudest environments on Earth, and much of its noise is made by animals that depend on sound the way we depend on sight. " +
        N(3) + "Light fades quickly underwater; a few hundred feet down, the sea is nearly black. " +
        N(4) + "Sound, by contrast, travels more than four times faster in water than in air and can carry across enormous distances. " +
        N(5) + "For whales, dolphins, and many other marine mammals, hearing is not just one sense among several but the main way of understanding the world.</p>" +
        "<p>" + N(6) + "Their hearing is remarkably <strong>acute</strong>. " +
        N(7) + "A dolphin hunting in murky water sends out rapid clicks and listens for the echoes, a technique called echolocation, and it can use those echoes to <strong>discern</strong> a fish hiding in the sand or to tell apart two objects that look identical to a human diver. " +
        N(8) + "Some large whales communicate with low calls that may be heard by other whales many miles away. " +
        N(9) + "Mothers and calves use sound to stay together, and groups use it to coordinate their hunting.</p>" +
        "<p>" + N(10) + "Over the past century, however, human activity has added a layer of noise that these animals never evolved to handle. " +
        N(11) + "Cargo ships produce a low, <strong>incessant</strong> rumble that never pauses, day or night, along the busiest shipping lanes. " +
        N(12) + "Seismic surveys used to search for oil fire powerful blasts of air at regular intervals for weeks at a time. " +
        N(13) + "Construction, sonar, and recreational boats add to the <strong>cacophony</strong>, a harsh mixture of sounds that can make a busy harbor as noisy underwater as a highway is on land.</p>" +
        "<p>" + N(14) + "This noise can <strong>impede</strong> the very abilities marine mammals rely on most. " +
        N(15) + "When background sound rises, whales may be forced to call louder, repeat themselves, or stop calling altogether, much as two people at a loud concert give up on conversation. " +
        N(16) + "Dolphins may struggle to hear the faint echoes they need to find food. " +
        N(17) + "In some cases, sudden intense sounds have been linked to animals fleeing an area or stranding on beaches, although researchers are still working to understand exactly why.</p>" +
        "<p>" + N(18) + "The encouraging news is that ocean noise, unlike many forms of pollution, stops the moment its source stops. " +
        N(19) + "That makes it easier to <strong>mitigate</strong> than chemicals that linger for decades. " +
        N(20) + "Ships can slow down, which sharply reduces the noise their propellers make; some ports already offer lower fees to vessels that cut their speed near whale feeding grounds. " +
        N(21) + "Engineers are designing quieter propellers and hulls, and some construction crews surround underwater work sites with curtains of bubbles that absorb sound. " +
        N(22) + "None of these measures returns the ocean to silence, which it never was. " +
        N(23) + "But they can lower the volume enough for the ocean's original voices to be heard again.</p>",
      claims: [
        {
          id: "acute",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which detail from sentence 7 best clarifies the meaning of acute in sentence 6?",
          choices: [
            { letter: "A", text: "a dolphin hunts for its food in dark, murky water" },
            { letter: "B", text: "the dolphin's technique has a name, echolocation" },
            { letter: "C", text: "it can tell apart objects identical to a diver" },
            { letter: "D", text: "the fish it hunts is hiding down in the sand" }
          ],
          correct: "C"
        },
        {
          id: "discern",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 7, the word discern most nearly means —",
          choices: [
            { letter: "A", text: "detect" },
            { letter: "B", text: "frighten" },
            { letter: "C", text: "follow" },
            { letter: "D", text: "capture" }
          ],
          correct: "A"
        },
        {
          id: "incessant",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The word incessant in sentence 11 emphasizes that the rumble of cargo ships is —",
          choices: [
            { letter: "A", text: "louder than any other ocean sound" },
            { letter: "B", text: "pleasant to some kinds of whales" },
            { letter: "C", text: "heard only in shallow harbors" },
            { letter: "D", text: "constant and unrelenting" }
          ],
          correct: "D"
        },
        {
          id: "cacophony",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word cacophony in sentence 13 comes from the Greek parts caco-, meaning bad, and phon-, meaning sound, as in telephone and symphony. Together with the context, these parts show that a cacophony is —",
          choices: [
            { letter: "A", text: "a single clear signal sent over a long distance" },
            { letter: "B", text: "an unpleasant jumble of noises" },
            { letter: "C", text: "a tool used to measure underwater sound" },
            { letter: "D", text: "a song that whales repeat each season" }
          ],
          correct: "B"
        },
        {
          id: "impede",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The examples in sentences 15 and 16 show that impede (sentence 14) means —",
          choices: [
            { letter: "A", text: "to get in the way of" },
            { letter: "B", text: "to strengthen over time" },
            { letter: "C", text: "to copy or imitate" },
            { letter: "D", text: "to measure accurately" }
          ],
          correct: "A"
        },
        {
          id: "mitigate",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 19, the word mitigate most nearly means —",
          choices: [
            { letter: "A", text: "to study closely" },
            { letter: "B", text: "to hide from view" },
            { letter: "C", text: "to lessen the harm of" },
            { letter: "D", text: "to explain the cause of" }
          ],
          correct: "C"
        },
        {
          id: "echolocation",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word echolocation in sentence 7 combines echo with location. Based on its parts and the context, echolocation is best defined as —",
          choices: [
            { letter: "A", text: "calling to other dolphins across long distances" },
            { letter: "B", text: "finding objects by listening to reflected sound" },
            { letter: "C", text: "hiding from predators in sandy areas" },
            { letter: "D", text: "repeating a call until another animal answers" }
          ],
          correct: "B"
        },
        {
          id: "silence",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes sentence 22 mainly to —",
          choices: [
            { letter: "A", text: "argue that quieter ships are not worth their cost" },
            { letter: "B", text: "admit that researchers have stopped studying noise" },
            { letter: "C", text: "suggest that whales prefer a busy harbor" },
            { letter: "D", text: "echo the opening point that the sea was never silent" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 10 · PAIRED TEXTS · marine mammals ───────────── */
    {
      id: "g11-dsr-c104-whalewatch",
      family: "G11",
      title: "How Close Is Too Close?",
      kind: "Paired texts · 11.DSR",
      blurb: "A tour company promises to get you closer than anyone; researchers explain why distance matters.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Saltmarsh Bay Whale Tours (brochure)</strong></p>" +
        "<p>" + N(1) + "Imagine a humpback whale rising beside your boat, close enough that you can hear it breathe. " +
        N(2) + "At Saltmarsh Bay Whale Tours, we make that moment possible for thousands of visitors every summer. " +
        N(3) + "Our three-hour cruises leave the harbor twice daily from May through October, and our captains have spent decades learning where whales feed. " +
        N(4) + "That experience means sightings on more than nine out of ten trips. " +
        N(5) + "If we don't spot a whale, your next trip is free. " +
        N(6) + "Our boats are smaller than the big ferries, so we can move quickly to wherever whales have been reported, and we get you closer than anyone else on the bay. " +
        N(7) + "Onboard naturalists explain what you are seeing, from a humpback's tail slap to the tall spray of a fin whale's blow. " +
        N(8) + "Many passengers tell us it was the most exciting day of their vacation. " +
        N(9) + "We also care about the animals. " +
        N(10) + "A portion of every ticket supports local research on whale populations, and our crew reports every sighting to a regional database. " +
        N(11) + "Families, school groups, birdwatchers, and photographers are all welcome, and every boat has a heated cabin for chilly mornings. " +
        N(12) + "Book early, since summer weekends sell out fast, and bring a jacket: it is always cooler on the water.</p>" +
        "<p><strong>Text 2 — How Close Is Too Close? (magazine article)</strong></p>" +
        "<p>" + N(13) + "Whale watching has grown into a major industry along many coasts, and it can be a powerful way to build public support for protecting marine mammals. " +
        N(14) + "But researchers who study whale behavior have raised a concern: the closer and faster boats approach, the more the whales change what they are doing. " +
        N(15) + "In studies along several coastlines, whales approached by multiple boats spent less time feeding and resting and more time traveling, as if trying to get away. " +
        N(16) + "Feeding time matters because many large whales eat heavily in summer to build the energy reserves they will need during long migrations. " +
        N(17) + "Noise is part of the problem, since engines racing toward a sighting are louder than those idling at a distance. " +
        N(18) + "For this reason, many coastal areas have adopted guidelines that ask boats to stay at least one hundred yards from whales, slow down within half a mile, and never position themselves directly in an animal's path. " +
        N(19) + "Some guidelines also limit how long a boat may stay with the same group of whales. " +
        N(20) + "Responsible tour operators follow these rules even when it means a less dramatic view. " +
        N(21) + "Visitors can help by choosing companies that advertise their commitment to the guidelines rather than their ability to get close. " +
        N(22) + "A good trip, researchers say, is one where the whales go on with their day as if the boat were never there.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea is supported by both texts?",
          choices: [
            { letter: "A", text: "Small boats are always safer for whales than large ferries." },
            { letter: "B", text: "Whale watching can link the public to efforts to protect whales." },
            { letter: "C", text: "Most whale sightings happen in the early morning." },
            { letter: "D", text: "Tour companies should offer visitors a free trip whenever no whales appear." }
          ],
          correct: "B"
        },
        {
          id: "challenge",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which sentence from Text 1 does Text 2 most directly call into question?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "purpose1",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The main purpose of Text 1 is to —",
          choices: [
            { letter: "A", text: "persuade readers to book a whale-watching cruise" },
            { letter: "B", text: "report the findings of a study on whale behavior" },
            { letter: "C", text: "warn visitors about the dangers of cold weather" },
            { letter: "D", text: "explain the rules that tour boats must follow" }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "The two texts differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "focuses on humpback whales, while Text 2 focuses only on fin whales" },
            { letter: "B", text: "is written for scientists, while Text 2 is written for children" },
            { letter: "C", text: "sells closeness as a thrill, while Text 2 treats it as a possible harm" },
            { letter: "D", text: "opposes research on whales, while Text 2 supports it" }
          ],
          correct: "C"
        },
        {
          id: "advice",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which sentence from Text 2 gives the most direct advice to a reader deciding whether to book with the company in Text 1?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 19" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with Text 2, the tone of Text 1 is more —",
          choices: [
            { letter: "A", text: "cautious and scientific in its claims" },
            { letter: "B", text: "angry and critical" },
            { letter: "C", text: "enthusiastic and promotional" },
            { letter: "D", text: "sad and regretful" }
          ],
          correct: "C"
        },
        {
          id: "feeding",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to Text 2, why does summer feeding time matter so much to large whales?",
          choices: [
            { letter: "A", text: "It is the only season when their calves can swim." },
            { letter: "B", text: "They build up energy reserves for long migrations." },
            { letter: "C", text: "Their food disappears completely during the winter." },
            { letter: "D", text: "Boats are not allowed on the water in other seasons." }
          ],
          correct: "B"
        },
        {
          id: "approve",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which practice described in Text 1 would the researchers in Text 2 most likely approve of?",
          choices: [
            { letter: "A", text: "reporting every sighting to a regional database" },
            { letter: "B", text: "racing quickly to wherever whales are reported" },
            { letter: "C", text: "promising a free trip when no whale is spotted" },
            { letter: "D", text: "bringing passengers closer than any other boat" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 11 · PAIRED TEXTS · street murals ───────────── */
    {
      id: "g11-dsr-c104-underpass",
      family: "G11",
      title: "The Fenwick Underpass",
      kind: "Paired texts · 11.DSR",
      blurb: "A town's call for mural designs, and the student who thought he could not paint.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Call for Designs: The Fenwick Avenue Underpass (town notice)</strong></p>" +
        "<p>" + N(1) + "The Brookfield Public Art Committee invites residents to help transform the Fenwick Avenue underpass, a concrete tunnel that connects the east side of town to Brookfield High School and the public library. " +
        N(2) + "For years, the underpass has been dim, gray, and covered in scattered tags, and many students say they avoid it after dark. " +
        N(3) + "This spring, the committee will fund a mural along both of its walls. " +
        N(4) + "Any resident of Brookfield may submit a design. " +
        N(5) + "Designs should reflect the history or people of the neighborhood and must be suitable for viewers of all ages. " +
        N(6) + "Submissions are due by March 15 and may be dropped off at the library's front desk or sent through the town website. " +
        N(7) + "A panel of artists, teachers, and residents will choose three finalists, and the public will vote on the winner at the library in early April. " +
        N(8) + "The selected artist will receive a $2,000 award and will lead the painting. " +
        N(9) + "Volunteers of all skill levels will be needed during two painting weekends in May. " +
        N(10) + "No experience is required; the lead artist will outline the design and assign sections by color, so that anyone who can hold a brush can help. " +
        N(11) + "The committee will also apply a protective coating when the work is complete. " +
        N(12) + "For questions, contact the Public Art Committee through the town office.</p>" +
        "<p><strong>Text 2 — Section 14 (a student's blog post)</strong></p>" +
        "<p>" + N(13) + "I almost didn't sign up for the underpass painting. " +
        N(14) + "I can't draw, and I figured the mural would be for real artists, not for someone who got a C in eighth-grade art. " +
        N(15) + "But my friend Daniela pointed out the line on the flyer that said anyone who can hold a brush can help, and she signed us both up before I could argue. " +
        N(16) + "When we got there on Saturday morning, the walls were already covered in thin chalk outlines with tiny numbers inside them, like a giant paint-by-number. " +
        N(17) + "The lead artist, a woman named Ms. Osei who had grown up two streets over, handed me a can of blue and told me that section 14 was mine. " +
        N(18) + "It turned out to be the sky above a drawing of the old trolley that used to run down Fenwick Avenue. " +
        N(19) + "I painted for four hours. " +
        N(20) + "My arms ached, and I had blue on my shoes for a week. " +
        N(21) + "By Sunday night, the tunnel that I used to hurry through with my headphones on was full of faces, trolleys, and gardens. " +
        N(22) + "Now I walk through it slowly. " +
        N(23) + "Sometimes I stop and look at my patch of sky and think that I never would have guessed something I made could make a place feel safer.</p>",
      claims: [
        {
          id: "central",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea is central to both texts?",
          choices: [
            { letter: "A", text: "Ordinary residents, not just artists, can help make the mural." },
            { letter: "B", text: "The underpass should be closed to students after dark." },
            { letter: "C", text: "The town spends too much money on public art." },
            { letter: "D", text: "Only students who earn good grades in art class should be allowed to paint." }
          ],
          correct: "A"
        },
        {
          id: "flyerline",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which sentence from Text 1 most directly leads to the writer's decision to take part in Text 2?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "C"
        },
        {
          id: "purposes",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the two texts differ in purpose?",
          choices: [
            { letter: "A", text: "Text 1 argues against the mural; Text 2 argues for it." },
            { letter: "B", text: "Text 1 announces a project; Text 2 tells one person's experience of it." },
            { letter: "C", text: "Text 1 tells the history of the old trolley; Text 2 explains how residents can vote." },
            { letter: "D", text: "Text 1 thanks the volunteers; Text 2 asks for more of them." }
          ],
          correct: "B"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Text 1 is organized mainly by —",
          choices: [
            { letter: "A", text: "comparing the underpass with the other tunnels and bridges in town" },
            { letter: "B", text: "telling the story of one artist's life in time order" },
            { letter: "C", text: "listing arguments for and against public art" },
            { letter: "D", text: "describing a problem, then giving steps and deadlines" }
          ],
          correct: "D"
        },
        {
          id: "chalk",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which detail from Text 2 shows that the plan described in sentence 10 of Text 1 was carried out?",
          choices: [
            { letter: "A", text: "The writer's arms ached after four hours." },
            { letter: "B", text: "Daniela signed both friends up for the event." },
            { letter: "C", text: "The walls had numbered chalk outlines." },
            { letter: "D", text: "The writer used to wear headphones in the tunnel." }
          ],
          correct: "C"
        },
        {
          id: "safer",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Text 1 states that many students avoid the underpass after dark (sentence 2). How does Text 2 add to this idea?",
          choices: [
            { letter: "A", text: "It shows how the mural changed one student's feeling about the tunnel." },
            { letter: "B", text: "It proves that the protective coating has stopped any new tags from appearing." },
            { letter: "C", text: "It explains that the town added new lights to the tunnel." },
            { letter: "D", text: "It reveals that students still refuse to use the underpass." }
          ],
          correct: "A"
        },
        {
          id: "tags",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word tags most nearly refers to —",
          choices: [
            { letter: "A", text: "price labels left by shoppers" },
            { letter: "B", text: "signs giving directions to the library" },
            { letter: "C", text: "posters for school events" },
            { letter: "D", text: "quickly sprayed names or marks" }
          ],
          correct: "D"
        },
        {
          id: "bothdetail",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which detail appears in both texts?",
          choices: [
            { letter: "A", text: "a $2,000 award for the winning design" },
            { letter: "B", text: "a lead artist who directs the volunteers" },
            { letter: "C", text: "a public vote held at the library" },
            { letter: "D", text: "a drawing of the old Fenwick trolley" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 12 · POETRY · family farm ───────────── */
    {
      id: "g11-rl-c104-beforerain",
      family: "G11",
      title: "Before the Rain",
      kind: "Poetry · 11.RL",
      blurb: "A whole family races a storm to get the last hay into the barn.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The radio said four o'clock, so by noon<br>" +
        L(2) + "the whole family was in the hayfield,<br>" +
        L(3) + "even my uncle in his office shoes,<br>" +
        L(4) + "even Grandma, who is not supposed to lift.<br>" +
        L(5) + "The bales sat in their rows like loaves<br>" +
        L(6) + "cooling on a counter the size of the county,<br>" +
        L(7) + "and we moved down them two by two,<br>" +
        L(8) + "one of us on each twine, swinging.<br><br>" +
        L(9) + "West of the silo the sky turned the color<br>" +
        L(10) + "of a bruise that has decided to stay.<br>" +
        L(11) + "Nobody talked. Talking was a thing<br>" +
        L(12) + "for people with time, and we had wagons.<br>" +
        L(13) + "My little cousin drove the tractor in first gear,<br>" +
        L(14) + "her chin barely over the wheel,<br>" +
        L(15) + "proud as a captain, steering<br>" +
        L(16) + "straight as a seam down the field.<br><br>" +
        L(17) + "We threw the last bale up at ten to four.<br>" +
        L(18) + "My uncle climbed down and sat in the dirt<br>" +
        L(19) + "in his ruined shoes and laughed.<br>" +
        L(20) + "Then the rain came in, not gently,<br>" +
        L(21) + "drumming the tin roof like a crowd<br>" +
        L(22) + "that had arrived too late for the show,<br>" +
        L(23) + "and we stood inside the open barn door,<br>" +
        L(24) + "sweaty and scratched and counting nothing,<br>" +
        L(25) + "watching the field we had emptied<br>" +
        L(26) + "fill up with water instead of work.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the poem most clearly convey?",
          choices: [
            { letter: "A", text: "Weather forecasts are rarely accurate on a farm." },
            { letter: "B", text: "Young people should not be trusted with machines." },
            { letter: "C", text: "Farm work is too hard for most families to enjoy." },
            { letter: "D", text: "Racing a deadline together can unite a family." }
          ],
          correct: "D"
        },
        {
          id: "loaves",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In lines 5 and 6, comparing the bales to loaves cooling on a counter mainly suggests that the bales are —",
          choices: [
            { letter: "A", text: "too heavy for the family to lift" },
            { letter: "B", text: "neatly finished and ready to be gathered" },
            { letter: "C", text: "spoiled from sitting in the sun too long" },
            { letter: "D", text: "meant to be sold at a bakery in town" }
          ],
          correct: "B"
        },
        {
          id: "bruise",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.2",
          stem: "The image in lines 9 and 10 of a sky the color of a bruise that has decided to stay creates a mood that is —",
          choices: [
            { letter: "A", text: "threatening and tense" },
            { letter: "B", text: "peaceful and sleepy" },
            { letter: "C", text: "playful and silly" },
            { letter: "D", text: "hopeful and bright" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the final stanza (lines 17–26) differ from the first two stanzas?",
          choices: [
            { letter: "A", text: "It moves back in time to the family's very first harvest on the farm." },
            { letter: "B", text: "It introduces a new speaker who disagrees with the first." },
            { letter: "C", text: "It shifts from hurried labor to relief and stillness." },
            { letter: "D", text: "It describes the damage the storm does to the barn." }
          ],
          correct: "C"
        },
        {
          id: "wagons",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In lines 11 and 12, the statement that talking was a thing for people with time, and we had wagons, mainly suggests that —",
          choices: [
            { letter: "A", text: "the family was angry with one another" },
            { letter: "B", text: "the family was too busy working to talk" },
            { letter: "C", text: "the wagons were too loud for anyone to hear the others" },
            { letter: "D", text: "the family had more wagons than it needed" }
          ],
          correct: "B"
        },
        {
          id: "even",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The details in lines 3 and 4 (the uncle's office shoes and Grandma, who is not supposed to lift) suggest that —",
          choices: [
            { letter: "A", text: "the uncle and Grandma usually do most of the farm work" },
            { letter: "B", text: "the family was unprepared and forgot their work clothes" },
            { letter: "C", text: "the speaker is embarrassed by the relatives who came" },
            { letter: "D", text: "the job was urgent enough to draw in even unlikely helpers" }
          ],
          correct: "D"
        },
        {
          id: "ruined",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In line 19, the word ruined most nearly means —",
          choices: [
            { letter: "A", text: "badly damaged" },
            { letter: "B", text: "borrowed from a relative" },
            { letter: "C", text: "brand new" },
            { letter: "D", text: "forgotten" }
          ],
          correct: "A"
        },
        {
          id: "cousin",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Lines 13–16 portray the speaker's little cousin as —",
          choices: [
            { letter: "A", text: "frightened of driving such a large machine" },
            { letter: "B", text: "careless about where the tractor was going" },
            { letter: "C", text: "proud to be trusted with an important job" },
            { letter: "D", text: "jealous of the older cousins who lifted bales" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 13 · DRAMA · marine mammals ───────────── */
    {
      id: "g11-rl-c104-sealwatch",
      family: "G11",
      title: "Seal Watch",
      kind: "Drama · 11.RL",
      blurb: "Two beach volunteers guard a crying seal pup, and the hardest job turns out to be doing nothing.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "A cold beach in early June, late afternoon. A harbor seal pup, plump and spotted, lies on the sand above the waterline. MARISOL, seventeen, in a volunteer vest, pushes four orange stakes into the sand in a wide circle around it. ODETTE, sixteen, in a vest so new it still has fold lines, holds a coil of rope.</em></p>" +
        "<p><strong>ODETTE:</strong> " + N(2) + "It's all alone. " + N(3) + "Shouldn't we be doing something?</p>" +
        "<p><strong>MARISOL:</strong> " + N(4) + "We are doing something. " + N(5) + "We're giving it room.</p>" +
        "<p><strong>ODETTE:</strong> " + N(6) + "It's been crying for twenty minutes.</p>" +
        "<p><strong>MARISOL:</strong> " + N(7) + "That's how pups call. " + N(8) + "Its mother is out there feeding, probably within a few hundred yards. " + N(9) + "Harbor seal mothers leave their pups on the beach for hours at a time, and they come back when it's quiet.</p>" +
        "<p><em>" + N(10) + "A VISITOR, a middle-aged man in a windbreaker, walks up holding his phone.</em></p>" +
        "<p><strong>VISITOR:</strong> " + N(11) + "Is it hurt? " + N(12) + "I can carry it back to the water; it'll only take a second.</p>" +
        "<p><strong>MARISOL:</strong> " + N(13) + "Please don't, sir. " + N(14) + "If people handle a pup, or even crowd it, the mother may decide the beach isn't safe and not come back at all.</p>" +
        "<p><strong>VISITOR:</strong> " + N(15) + "So you just leave it here? " + N(16) + "That seems cruel.</p>" +
        "<p><strong>MARISOL:</strong> <em>(evenly)</em> " + N(17) + "It seems that way. " + N(18) + "But the kindest thing we can do right now is the hardest thing, which is nothing, from a distance.</p>" +
        "<p><em>" + N(19) + "The VISITOR takes a photo from outside the rope, shrugs, and walks on. ODETTE watches him go.</em></p>" +
        "<p><strong>ODETTE:</strong> " + N(20) + "He thinks we're heartless.</p>" +
        "<p><strong>MARISOL:</strong> " + N(21) + "He thinks he's helping. " + N(22) + "Most people do. " + N(23) + "That's why we're here.</p>" +
        "<p><em>" + N(24) + "They sit on an overturned bucket and a cooler outside the rope. Time passes; the light turns orange.</em></p>" +
        "<p><strong>ODETTE:</strong> " + N(25) + "How do you know when to call the rescue center?</p>" +
        "<p><strong>MARISOL:</strong> " + N(26) + "If it's hurt, if it's emaciated, so thin that you can see its hips, or if the mother hasn't come back in a full day. " + N(27) + "Then the vets decide. " + N(28) + "Not us, and definitely not a guy with a phone.</p>" +
        "<p><strong>ODETTE:</strong> <em>(after a pause)</em> " + N(29) + "I thought volunteering would feel more like saving things.</p>" +
        "<p><strong>MARISOL:</strong> " + N(30) + "Sometimes it does. " + N(31) + "Most days it feels like this: standing guard over something that's doing fine without you.</p>" +
        "<p><em>" + N(32) + "Offshore, a dark round head breaks the surface, then rises again a few yards closer. The pup lifts its head and calls. ODETTE grabs MARISOL's sleeve but does not make a sound.</em></p>" +
        "<p><strong>MARISOL:</strong> <em>(whispering)</em> " + N(33) + "There she is.</p>" +
        "<p><strong>ODETTE:</strong> <em>(whispering)</em> " + N(34) + "Should we move back?</p>" +
        "<p><strong>MARISOL:</strong> " + N(35) + "Another ten yards. " + N(36) + "Slowly.</p>" +
        "<p><em>" + N(37) + "They lift the bucket and cooler and back away up the beach as the mother seal hauls herself onto the sand. Lights fade.</em></p>",
      claims: [
        {
          id: "marisol",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which statement best describes Marisol in this scene?",
          choices: [
            { letter: "A", text: "She is calm and well informed, firm with the visitor but not rude." },
            { letter: "B", text: "She is nervous and unsure of the rules she is supposed to follow." },
            { letter: "C", text: "She is impatient with Odette and wishes she had come alone." },
            { letter: "D", text: "She is more interested in the visitor's phone than in the seal." }
          ],
          correct: "A"
        },
        {
          id: "foldlines",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "Based on the stage direction in sentence 1, the reader can infer that Odette —",
          choices: [
            { letter: "A", text: "has worked on the beach for many summers" },
            { letter: "B", text: "is in charge of the volunteers that day" },
            { letter: "C", text: "borrowed her vest from Marisol" },
            { letter: "D", text: "has only recently become a volunteer" }
          ],
          correct: "D"
        },
        {
          id: "hardest",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 18, Marisol calls doing nothing the hardest thing. In this context, she most nearly means that —",
          choices: [
            { letter: "A", text: "watching a seal for hours is physically tiring" },
            { letter: "B", text: "holding back is hard when an animal seems to need help" },
            { letter: "C", text: "the volunteers are not allowed to speak to visitors" },
            { letter: "D", text: "she would rather be doing a different job somewhere else on the beach" }
          ],
          correct: "B"
        },
        {
          id: "mother",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "The stage direction in sentence 32 contributes to the structure of the scene mainly by —",
          choices: [
            { letter: "A", text: "introducing a new conflict between Marisol and Odette about the rope" },
            { letter: "B", text: "showing that the visitor has returned to the beach" },
            { letter: "C", text: "resolving the tension by proving Marisol right" },
            { letter: "D", text: "revealing that the pup is injured and must be rescued" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the scene most clearly develop?",
          choices: [
            { letter: "A", text: "Visitors should never be allowed on beaches where seals live." },
            { letter: "B", text: "Young volunteers learn best by working alone." },
            { letter: "C", text: "Animals are happiest when humans take care of them." },
            { letter: "D", text: "Sometimes the most helpful choice is restraint." }
          ],
          correct: "D"
        },
        {
          id: "guard",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "In sentence 31, the phrase standing guard over something that's doing fine without you creates a tone that is —",
          choices: [
            { letter: "A", text: "wry and humble" },
            { letter: "B", text: "bitter and resentful" },
            { letter: "C", text: "frantic and alarmed" },
            { letter: "D", text: "proud and boastful" }
          ],
          correct: "A"
        },
        {
          id: "emaciated",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 26, the words that follow emaciated show that the word means —",
          choices: [
            { letter: "A", text: "badly injured" },
            { letter: "B", text: "very young" },
            { letter: "C", text: "extremely thin" },
            { letter: "D", text: "deeply frightened" }
          ],
          correct: "C"
        },
        {
          id: "phone",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "The visitor's phone, mentioned in sentences 10, 19, and 28, comes to represent —",
          choices: [
            { letter: "A", text: "the volunteers' need to call the rescue center for help" },
            { letter: "B", text: "a wish to capture the moment, not understand it" },
            { letter: "C", text: "the visitor's plan to report the volunteers" },
            { letter: "D", text: "a modern tool that will save the seal pup" }
          ],
          correct: "B"
        }
      ]
    }

  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
