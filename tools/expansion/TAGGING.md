# Tagging Virginia questions with their skill (v5.17)

Every Virginia question (families G9, G10, G11) gets the 2024 standard it really assesses (`sol`) and the
SKILL within that standard (`sub`). Skills come from `js/standards-va.js`: each official standard is split
into one skill per action verb, each LOTS (lower-order: identify, recognize, describe, explain, interpret,
use) or HOTS (higher-order: analyze, compare, distinguish, differentiate, examine, evaluate, critique,
relate). The teacher's standards report shows results per skill and LOTS vs HOTS, so the tag must match
what the question asks the student to DO.

Many current tags use older letters (for example `9.RV.1.C` on context-clue questions, but in 2024
`9.RV.1.B` is context and `9.RV.1.C` is roots and affixes). Don't trust the current letter: read the stem.

## Your job

You tag the files listed for you. Edit nothing else: no other files, no question text, no answers.

For each file:

1. `node tools/expansion/tags.js skills 9` (and `10`, `11`): the skills, with the official text above each.
2. `node tools/expansion/tags.js list js/contentNN.js`: one line per question: key, current tag, kind,
   stem, correct answer. If a stem isn't clear on its own, read the pack in the file.
3. Write `tags-contentNN.json` in your scratch directory (NOT in the repo):
   `{ "packId:claimId": "9.RV.1.B.1", ... }`, one skill for every question in the file.
4. `node tools/expansion/tags.js apply js/contentNN.js <your tags json>`. It refuses and changes nothing
   if a question is missing, a skill doesn't exist, or a skill changes the question's **grade** or
   **strand** (RL, RI, RV, DSR). Fix and re-run until it prints `NN questions tagged`.
5. `node tools/validate-content.js js/contentNN.js` must end `OK — no errors`.

## Rules

- **Keep the grade** of the current tag (`10.RL.1.A` → a `10.` skill) and **keep the strand**
  (an RL question stays RL, an RV question stays RV ...): the game's grade pools and skill filter depend on
  them. Within that grade and strand, pick the standard and skill that fits best.
- **Identify vs analyze.** "Which line contains alliteration?", "The tone of paragraph 2 is best described
  as —", "Which phrase is an example of ethos?" are LOTS (identify / recognize). "The alliteration in lines
  3–4 mainly helps the poet —", "How does the author's word choice create a tone of …", "Why does the author
  include the statistic in sentence 6?" are HOTS (analyze the effect or purpose).
- **Explain vs analyze a theme.** "Which statement best expresses a theme?" = `RL.1.A.1` (LOTS);
  "How does the character's choice in sentence 14 develop the theme?" = `RL.1.A.2` (HOTS).
- **Vocabulary.** Meaning from context or sentence structure → `RV.1.B`; prefix, suffix, root, word origin →
  `RV.1.C`; connotation, shade of meaning, "the word X suggests" → `RV.1.D`; idiom → `RV.1.E`;
  figurative language and allusion → `RV.1.F` (`.1` explain the meaning, `.2` analyze its role or effect).
- **Paired texts (DSR).** Comparing or connecting two texts → `DSR.D.2` (HOTS); evidence that supports a
  claim → `DSR.C.1` (HOTS); which sentence says the same thing / paraphrase → `DSR.C.2`; where in the text
  the evidence is → `DSR.C.3`; summarizing, text structure or a reading strategy → `DSR.E.1`.
- **Evidence and inference questions in RL or RI** ("Which sentence best supports …", "It can be inferred
  that …"): tag the skill the evidence or inference is ABOUT (theme, a character, the main idea, the
  author's claim ...), since the strand stays.
- **Grade 11 informational** has workplace and technical texts (`11.RI.1.A`: applications and documents),
  hypotheses and data (`11.RI.1.B`), claims and counterclaims (`11.RI.1.C`).
- Spread is not a goal: tag what each question asks, even if some skills end up rare. A skill like
  `DSR.A` (fluency) or `DSR.B` (general comprehension) fits only when nothing more specific does.
