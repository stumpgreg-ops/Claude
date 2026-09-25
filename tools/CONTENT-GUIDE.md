# Writing question packs for SOL Labyrinth

Every pack is one passage plus 6 multiple-choice questions ("claims"). Packs live in
`js/content*.js`. Each file is an IIFE that pushes into the live `HEIST_PACKS` array,
exactly like `js/content2.js`:

```js
/* SOL Labyrinth — <what this file holds>. Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    { /* pack */ },
    ...
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
```

Validate with `node tools/validate-content.js js/contentN.js` — it must print `OK — no errors`.
Fix warnings too where you can (spread answer keys, keep the correct choice from being the longest).

## Pack shape

```js
{
  id: "g9-rl-lockers",           // unique, lowercase, family-strand-slug
  family: "G9",                  // G9 | G10 | G11 (Virginia) | NJ5 (New Jersey grade 5)
  title: "Locker 212",
  kind: "Literary · 9.RL",       // see the kind strings below
  blurb: "One line shown on the pack card.",
  level: 2,                      // 1 easy · 2 medium · 3 hard (reading load + inference load)
  passage: "<p>" + N(1) + "First sentence. " + N(2) + "Second sentence. ... </p>",
  claims: [
    {
      id: "theme",               // unique within the pack
      sol: "9.RL.1.A",           // standard code (see below)
      stem: "Which statement best expresses a theme of the story?",
      choices: [
        { letter: "A", text: "..." },
        { letter: "B", text: "..." },
        { letter: "C", text: "..." },
        { letter: "D", text: "..." }
      ],
      correct: "B"               // or ["A", "C"] for a Select TWO item (stem must say "Select TWO")
    }
  ]
}
```

Passage HTML: `<p>` paragraphs, every sentence numbered with `N(i)` so stems can say
"In sentence 4, …". Poems use `<p class="poem">` with `L(i)` and `<br>` per line.
Drama: speaker names in `<strong>`, stage directions in `<em>`. Functional text may use
`<strong>` headings inside the paragraph. Paired texts: `<p><strong>Text 1 — …</strong></p>`
then `<p><strong>Text 2 — …</strong></p>`, each numbered continuously.

## Standards codes

**Virginia (2024 English SOL, EOC Reading).** `sol` looks like `9.RL.1.A`, `10.RI.2.C`,
`11.RV.1.B`, `9.DSR.D`. The strand letters (RL, RI, RV, DSR) drive the skill filter. A G10
pack may use 9.x or 10.x codes; a G11 pack 9.x–11.x. Kind strings: `Literary · 9.RL`,
`Poetry · 10.RL`, `Drama · 9.RL`, `Informational · 11.RI`, `Functional text · 9.RI`,
`Argument · 10.RI`, `Vocabulary · 9.RV`, `Paired texts · 11.DSR`.

**New Jersey (NJSLA-ELA grade 5, 2023 NJSLS-ELA).** `family: "NJ5"`. Each claim needs BOTH:
- `sol`: an NJSLS code — `RL.CR.5.1` (cite evidence), `RL.CI.5.2` (theme/summary),
  `RL.IT.5.3` (characters/setting/events), `RL.TS.5.4` (structure), `RL.PP.5.5` (point of view),
  `RL.MF.5.6` (visual/multimedia), `RL.CT.5.8` (compare texts); same for RI: `RI.CR.5.1`,
  `RI.CI.5.2` (main idea), `RI.IT.5.3` (relationships), `RI.TS.5.4` (structure), `RI.PP.5.5`,
  `RI.AA.5.7` (reasons and evidence), `RI.CT.5.8`; vocabulary `L.VL.5.2` (context clues,
  word parts), `L.VI.5.3` (figurative language, relationships, nuance).
- `strand`: `RL` (literature), `RI` (informational), `RV` (vocabulary), `DSR` (paired texts).
Kind strings: `Literature · RL.5`, `Poetry · RL.5`, `Drama · RL.5`, `Informational · RI.5`,
`Vocabulary · L.5`, `Paired texts · RL/RI.5`.

NJSLA uses **Evidence-Based Selected Response** pairs. Write at least two per NJ5 pack:
Part A is a normal claim with `partB: "<id of the Part B claim>"`; Part B is a separate claim
whose stem starts with `Part B:` and asks which sentence/detail best supports the Part A
answer (its `sol` is usually `RL.CR.5.1` / `RI.CR.5.1`). The game asks Part B right after Part A.

## Passage length tiers (stamina)

The game raises the target passage length as nights go by (about 60 words on night 1,
+10 words every 2 nights, ~550 by night 99) and picks packs close to that target. So the
pool needs every length, and the early nights need genuinely tiny texts. Aim for these
bands (word counts exclude the sentence numbers):

| tier   | nights   | prose words | poems      | paired texts (each) | questions |
|--------|----------|-------------|------------|---------------------|-----------|
| tiny   | 1–8      | 50–90       | 6–8 lines  | 35–45               | 4–5       |
| short  | 9–20     | 100–150     | 8–10 lines | 60–80               | 5–6       |
| medium | 20–45    | 170–260     | 12–16      | 110–150             | 6         |
| long   | 55–90    | 380–520     | 20–28      | 200–260             | 7–8       |
| epic   | 90–100   | 540–650     | —          | 280–330             | 8         |

A tiny pack is still a complete text: one small scene or one clear idea in 4–7 sentences,
with questions that only need those sentences (main idea, a detail, a word in context, why
the author included a sentence). Long and epic passages read like a real test passage:
several paragraphs, a clear beginning-middle-end (stories) or sections with a through-line
(articles), and questions that reach across the whole text (a detail from paragraph 1 used
in a paragraph 4 question, a structure item, a summary item).

## Writing rules

- **Original text only.** No real book, article, song, speech or published poem. No real
  people. Do not imitate a specific copyrighted work.
- **Length.** Follow the tier table above. Grade 5 sentences are shorter and the vocabulary is
  grade-appropriate; grades 9–11 read like real EOC passages.
- **Topics** students recognise: school, sports, jobs, family, neighbourhood, science fair,
  animals, weather, inventions, community, small mysteries. Vary settings and names across
  packs (different cultures, both quiet and lively characters). No gore, romance, or politics.
- **One defensible answer.** Distractors are plausible (a true-but-off-question detail, a
  too-broad or too-narrow idea, a misreading) but clearly wrong on a careful re-read.
  Keep the four choices similar in length and grammar. Never let the correct choice be the
  only one that repeats a phrase from the stem.
- **Spread the keys**: across a pack's 6 items use each letter at least once, no letter
  more than twice.
- **Stems** use test phrasing: "Which sentence best supports…", "The author includes
  sentence 6 mainly to —", "In sentence 3, the word *dormant* most nearly means —",
  "Which statement best describes how the two texts differ?", "Select TWO …".
  Stems that end in a dash have choices that complete the sentence (lower-case start).
- **Skills per pack** (6 items): mix at least four different standards. Literary: theme,
  character, setting/plot, figurative language, word meaning, author's craft. Informational:
  main idea, purpose, structure, evidence, word meaning, inference. Vocabulary packs: bold
  5–6 target words in the passage (`<strong>word</strong>`) and ask meaning-from-context,
  word parts, and connotation. Paired: shared idea, key difference, evidence from each text,
  a Select TWO.
- **Level tags**: in each file spread levels roughly evenly (e.g. 3 packs level 1, 3 level 2,
  2 level 3). Level 1 = concrete, literal questions, short sentences; level 3 = inference,
  tone, structure, denser text.
- Escape quotes inside JS strings (`\"`), use plain apostrophes, and keep each choice on
  one line as in the existing files.
