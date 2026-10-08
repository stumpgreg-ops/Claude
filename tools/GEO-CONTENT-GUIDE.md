# Writing Geometry packs for SOL Labyrinth (the Geometry game, family `GEO`)

The Geometry game uses the same engine as the reading games: a **pack** is one *passage* plus six multiple-choice
questions (*claims*). In Geometry the passage is a **figure** (inline SVG) and the **given facts** in a sentence or
two, and every question is about that figure or situation. Students see the passage twice: in the reading pop-up
before each question, and in the side panel (about 324 px wide) while they play. The question and its four answers
sit under it in the side panel.

Files: `js/content201.js` (G.RLT), `js/content202.js` (G.TR), `js/content203.js` (G.PC), `js/content204.js` (G.DF).
`js/content202.js` starts with the model pack, `geo-tr4-ladder`: copy its shape.

Check every file with all three:

```
node tools/validate-content.js js/content20N.js   # must print OK — no errors
node tools/preview-geo.js js/content20N.js        # screenshots in tools/shots/geo/<pack-id>.png; must list no label problems
```

…and **look at every screenshot** (the side-panel copy as well as the large one).

## Pack shape

```js
{
  id: "geo-tr4-ladder",          // geo-<standard, e.g. rlt1 / tr4 / pc3 / df2>-<slug>, unique
  family: "GEO",
  title: "The Ladder on the Gym Wall",
  kind: "Triangles · G.TR.4",     // see the kind list below
  blurb: "A 13-foot ladder, a wall and level ground.",
  level: 2,                       // 1 one step, 2 two steps, 3 multistep / proof / contextual modelling
  passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 172\" role=\"img\" aria-label=\"…\">…</svg></figure>" +
           "<p class=\"geo-given\">The given facts, with <strong>names</strong> of points in bold.</p>",
  claims: [ { id: "height", sol: "G.TR.4", sub: "G.TR.4.1", stem: "…", choices: [ {letter:"A",text:"…"}, … ], correct: "B" }, … ]
}
```

**kind**, by standard: `Logic · G.RLT.1`, `Lines · G.RLT.2`, `Transformations · G.RLT.3`, `Triangles · G.TR.1` … `G.TR.4`,
`Quadrilaterals · G.PC.1`, `Polygons · G.PC.2`, `Circles · G.PC.3`, `Equations of circles · G.PC.4`,
`3-D figures · G.DF.1`, `Changing dimensions · G.DF.2`.

**sol / sub**: `sol` is the standard (`G.TR.4`), `sub` one of its skills in `js/standards-geo.js` (`G.TR.4.3`).
Use the skill the question really asks for (LOTS: identify / find / one-step use; HOTS: justify, prove, decide
validity, model a contextual problem in several steps). A pack's six questions may use different skills of its
standard; most packs should touch at least two skills, and each file should cover every skill of its standards.

## Figures (inline SVG)

- `<svg viewBox="0 0 320 H" role="img" aria-label="what the figure shows, in words">`, with **H from 120 to 170**.
  Never set `width` or `height`: CSS sizes the figure. 320 user units ≈ the side panel's width, so a 15-unit label is
  about 15 px on screen.
- Draw only with these classes (they follow the panel's colours; never hard-code colours):
  `ln` (main lines, 2 px), `thin` (marks, arcs, ticks, right-angle squares), `ac` (the one thing the question is about,
  gold), `sh` / `sh2` (a shaded region, gold / blue tint), `dash` (add to a line: hidden edges, auxiliary lines),
  `gr` (grid lines), `ax` (axes), `dt` / `dta` (points: `<circle r="3">`), `text` (labels, 15 px), `text.sm` (12 px notes),
  `text.acc` (a gold label). Example: `<line class="ln dash" …/>`.
- Coordinates must be **accurate**: compute them (a right angle is a right angle, a 30° angle is 30°, parallel lines
  are parallel, a point on the circle is on the circle, a grid point is on its grid line). If a figure cannot be to
  scale, add `<figcaption>Not drawn to scale</figcaption>` after the `</svg>`, and still never draw something that
  contradicts the givens.
- Labels: put each point's letter just outside the figure at that point; side lengths beside the middle of their
  side; angle measures inside the angle near its arc. Keep at least 4 units between labels and nothing outside the
  viewBox. `tools/preview-geo.js` flags labels that overlap or run outside.
- Marks: right angles with a small square (`thin`), congruent sides with ticks, congruent angles with arcs, parallel
  lines with arrowheads (a small `>` drawn as a path). Coordinate grids: draw `gr` lines every unit, `ax` axes, and
  number a few ticks with `text.sm`.
- A figure with nothing to draw (pure logic statements) may skip the SVG: then the passage is the statements in
  `<p class="geo-given">` paragraphs (a Venn diagram, a truth table or a two-column proof skeleton is still a figure).
- Two-column proofs: put them in a small `<table class="geo-proof">` *after* the figure, with Statement | Reason
  columns and a blank like "____" on the missing step.

## Questions

- **Stems are plain text** (the game sets them with `textContent`): no HTML, no `<` or `>` (write ≤ ≥, "less
  than"). Use Unicode: ° ∠ △ ≅ ∼ ∥ ⊥ √ π ² ³ ≈ ≠ ≤ ≥ ~ ∧ ∨ → ↔ ∩ ∪ ⊂ ∈ m∠ABC, AB̅ is not needed: write "segment AB" or "AB".
- Answers are short (one value or a short sentence), with units when the given has units. State the rounding
  ("to the nearest tenth", "in terms of π"). Write radicals as `5√3`, not decimals, unless the stem asks to round.
- **Every number must be computed**, not estimated: keep a check script (Node) that recomputes every key and every
  distractor, and run it before you hand the file back.
- **Distractors are real mistakes**, one named error each: the complement instead of the angle, sin for cos, adding
  instead of the Pythagorean theorem, radius for diameter, forgetting to halve, k instead of k², the converse
  instead of the contrapositive, and so on. No "all of the above", no joke answers, no two choices that are equal.
- Spread the keys: in a pack no letter is the key more than twice; across a file about a quarter each. The key is
  never noticeably longer than the other choices.
- Exactly one correct answer, under any reasonable reading. Watch rounding (a distractor 0.1 away from the key is
  only fair when the stem names the rounding and the distractor is a rounding mistake).
- Language: grade 9–10, short sentences, real but low-key contexts (a school, a park, a skate ramp, a garden, a
  cell tower, a pizza, a soup can). Original items only: never copy a released VDOE test item.
- Levels within a standard: about one level-1 pack, two level-2 packs and one level-3 pack.
