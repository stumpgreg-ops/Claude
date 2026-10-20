# Lit and Film — writing the question packs

The Lit and Film game (`family: "LIT"`, the build `dist/lit/`) is a grades 11–12 Literature and Film elective
game. Students pick a **genre**, then a **movie** (or the genre's **basics**, or All). Each movie has its own
arcade game and its own questions. `js/lit.js` lists the genres, their movies and every `episode` id.

Read these first:
- `tools/CONTENT-GUIDE.md`: the pack format, passage-length tiers, writing rules and stem style. Everything
  there applies, except the rule against real works and real people: these passages are *about* real films,
  filmmakers and film history, as the Odyssey packs are about Homer.
- `js/content26.js`: a model file (the Odyssey's Lotus-Eaters). Copy its shape exactly: the IIFE, `N(i)`
  numbered sentences, `for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);` at the end.
- `tools/lit/SOURCES.md`: the teacher's materials (slides, videos, readings, Canvas modules) and the facts
  gathered from them. The questions should teach what the teacher teaches.

## Every pack

```js
{ id: "lit-<episode>-<slug>", family: "LIT", genre: "<GENRE id from js/lit.js>", episode: "<episode>",
  title: "...", kind: "<see below>", blurb: "...", level: 1|2|3, passage: "<p>" + N(1) + "..." + "</p>",
  claims: [ { id, sol: "11.RL.2.C", sub: "11.RL.2.C.1", stem, choices: [A,B,C,D], correct: "B" }, ... ] }
```

- **Codes:** Virginia 2024 grade 11 codes only (`11.RL`, `11.RI`, `11.RV`, `11.DSR`), every claim with its `sub`
  skill. List them with `node tools/expansion/tags.js skills 11`. Fitting ones: 11.RL.1.B (a scene's place in the
  structure), 11.RL.1.C (character revealed through dialogue or events), 11.RL.2.B (word choice, tone, voice),
  11.RL.2.C (imagery, symbolism, archetypes), 11.RL.2.D (irony, satire, understatement), 11.RL.3.A (historical
  and cultural context), 11.RL.3.B (myths and archetypal patterns: the Hero's Journey), 11.RL.1.A (universal
  themes), 11.RI.* for the informational passages (central idea, purpose, structure, evidence, claims),
  11.RV.1.A (content-specific vocabulary: film terms), 11.RV.1.B (context), 11.RV.1.F (allusions),
  11.DSR.C (evidence), 11.DSR.D.2 (connecting texts) for paired texts.
- **Kind strings:** `Film history · 11.RI`, `Film language · 11.RV`, `Film review · 11.RI`, `Film analysis · 11.RL`,
  `Screen story · 11.RL` (a retold scene), `Film Noir · 11.RL`, `Westerns · 11.RL`, `Science fiction · 11.RL`,
  `Horror · 11.RL`, `Short story · 11.RL`, `Vocabulary · 11.RV`, `Paired texts · 11.DSR`.
- **Passage types to mix:** informational articles (history, production, a filmmaker's choices), retold scenes
  (plot told as a short story, in your own words), film analysis (how a shot, a symbol, a lighting choice or an
  edit makes meaning), a short critic's review (an argument to evaluate), paired texts (book vs. film, two films,
  a bad film vs. a good one), and the occasional poem about a film or an era.
- **Lengths per episode:** 6 packs: 2 tiny (50–90 words, 4–5 questions, level 1), 2 short (100–150, 5–6,
  level 1–2), 1 medium (170–260, 6, level 2), 1 long (380–520, 7–8, level 3). A genre's basics episode: the same.
  Number every sentence with `N(i)`.
- **Questions** need only the passage, never outside knowledge: a student who has not seen the film can answer
  from the text. But the passages should carry the course's facts, so a student who reads them learns the
  material the teacher taught. Use the film vocabulary from the Film Language list where it fits (close-up,
  low angle, Dutch angle, dissolve, tracking shot, ...) and define it in context when a question depends on it.
- **Select TWO:** about one claim in eight, `correct: ["A", "C"]`, the stem says "Select TWO".

## Copyright and accuracy

- **Original words only.** Never copy or closely paraphrase a sentence from a source article, a book or a film's
  dialogue. Do not quote copyrighted film dialogue at all (a famous title phrase of three or four words is fine
  when the passage is about it). Public-domain films (*Arrival of a Train*, *A Trip to the Moon*, *Detour*,
  *Scarlet Street*, *Plan 9 from Outer Space*) may be retold scene by scene; copyrighted films (*Iron Man*,
  *Double Indemnity*, *Casablanca*, *High Noon*, *True Grit*, *3:10 to Yuma*, the *Star Wars* trilogy, *The Ring*,
  *The Jazz Singer*, *The Circus*) only summarized and analyzed.
- **Be accurate.** Only use facts you are sure of: names, years, who directed, what happens in the film. When the
  teacher's slides have an error, write the accurate fact (SOURCES.md lists the known ones: the Vitascope's first
  public showing was April 1896; Méliès; silent-film "subtitles" were intertitles; *Becky Sharp* (1935) was the
  first feature fully in three-strip Technicolor). If you are not sure of a detail, leave it out.
- School-appropriate: describe violence and fear without gore. *Birth of a Nation* is named as racist and
  harmful, never praised.

## Check before you finish

`node tools/validate-content.js js/<your file>` must print `OK — no errors`. Fix every warning you can (length
bands, key spread, longest-answer). Then `node -e` load your file in a vm with content.js and print the count of
packs and questions per episode. Do not edit any file but your own content file. Do not run tools/build-games.js.
