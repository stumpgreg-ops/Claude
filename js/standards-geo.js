/* SOL Labyrinth: the Virginia 2023 Mathematics Standards of Learning, Geometry (v5.19, the Geometry game).
   Same shape as js/standards-va.js: for each standard (G.RLT.1 ...) a short statement of what it covers and its SKILLS,
   one per thing a question can ask a student to do. Each skill is LOTS (lower-order: Bloom's remember / understand /
   apply: identify, recognize, use, find, solve a one-step problem) or HOTS (higher-order: analyze / evaluate: justify,
   prove, decide whether an argument is valid, model a contextual problem in several steps). Questions name their skill
   (claim.sub = "G.TR.4.2"); the progress code carries results per skill (js/progress-code.js STDS_GEO) and the teacher's
   standards report groups them under their standard.
   The standard statements are short summaries of the 2023 Geometry SOL (approved August 2023, tested from spring 2025),
   grouped in its three reporting categories. The skills are this game's own split, not the document's lettered
   sub-standards: to adjust a skill or its LOTS/HOTS level, edit it here and rebuild. Skill ids never change once a
   game has been played (a progress code stores results by position: add new skills at the END of a standard). */
(function (root) {
  "use strict";
  var STANDARDS = {
 "G.RLT.1": {
  "text": "Translate logic statements, identify conditional statements, and use and interpret Venn diagrams.",
  "category": "Reasoning, Lines, and Transformations",
  "skills": [
   { "id": "G.RLT.1.1", "text": "Translate statements into symbols and words: negation (~p), conjunction (p ∧ q), disjunction (p ∨ q), conditional (p → q) and biconditional (p ↔ q)", "level": "LOTS" },
   { "id": "G.RLT.1.2", "text": "Identify the converse, inverse and contrapositive of a conditional statement and decide whether each is true", "level": "LOTS" },
   { "id": "G.RLT.1.3", "text": "Use deductive reasoning (the Law of Detachment and the Law of Syllogism) to decide whether a conclusion is valid", "level": "HOTS" },
   { "id": "G.RLT.1.4", "text": "Use and interpret Venn diagrams: union, intersection, subset and negation, including in context", "level": "LOTS" }
  ]
 },
 "G.RLT.2": {
  "text": "Analyze, prove, and justify the relationships of parallel lines cut by a transversal.",
  "category": "Reasoning, Lines, and Transformations",
  "skills": [
   { "id": "G.RLT.2.1", "text": "Identify angle pairs formed by a transversal: corresponding, alternate interior, alternate exterior, same-side interior, vertical and linear pairs", "level": "LOTS" },
   { "id": "G.RLT.2.2", "text": "Prove or justify that two lines are parallel, or are not, from angle measures", "level": "HOTS" },
   { "id": "G.RLT.2.3", "text": "Solve problems, including algebraic ones, using the angles formed by parallel lines and a transversal", "level": "LOTS" }
  ]
 },
 "G.RLT.3": {
  "text": "Solve problems, including contextual problems, involving symmetry and transformation.",
  "category": "Reasoning, Lines, and Transformations",
  "skills": [
   { "id": "G.RLT.3.1", "text": "Identify line symmetry and rotational symmetry of a figure", "level": "LOTS" },
   { "id": "G.RLT.3.2", "text": "Find the image of a figure on the coordinate plane under a translation, reflection, rotation or dilation", "level": "LOTS" },
   { "id": "G.RLT.3.3", "text": "Determine the transformation or composition that maps a preimage to an image, and whether it preserves size and shape", "level": "HOTS" }
  ]
 },
 "G.TR.1": {
  "text": "Determine the relationships between the measures of angles and lengths of sides in triangles, including problems in context.",
  "category": "Triangles",
  "skills": [
   { "id": "G.TR.1.1", "text": "Order the sides of a triangle by length given its angles, or its angles by size given its sides", "level": "LOTS" },
   { "id": "G.TR.1.2", "text": "Decide whether three lengths can form a triangle and find the range of possible lengths of the third side", "level": "LOTS" },
   { "id": "G.TR.1.3", "text": "Solve problems using the triangle angle sum and the exterior angle theorem", "level": "LOTS" }
  ]
 },
 "G.TR.2": {
  "text": "Prove two triangles are congruent, using direct and indirect proofs, and solve problems involving measured attributes of congruent triangles.",
  "category": "Triangles",
  "skills": [
   { "id": "G.TR.2.1", "text": "Identify the congruence criterion (SSS, SAS, ASA, AAS, HL) that the given information supports, and recognize when none does", "level": "LOTS" },
   { "id": "G.TR.2.2", "text": "Complete or justify a direct or indirect proof that two triangles are congruent", "level": "HOTS" },
   { "id": "G.TR.2.3", "text": "Solve problems, including algebraic ones, using corresponding parts of congruent triangles", "level": "LOTS" }
  ]
 },
 "G.TR.3": {
  "text": "Prove two triangles are similar, using direct and indirect proofs, and solve problems involving measured attributes of similar triangles.",
  "category": "Triangles",
  "skills": [
   { "id": "G.TR.3.1", "text": "Identify the similarity criterion (AA, SSS, SAS) that the given information supports", "level": "LOTS" },
   { "id": "G.TR.3.2", "text": "Justify that two triangles are similar, or are not, using angle measures or side ratios", "level": "HOTS" },
   { "id": "G.TR.3.3", "text": "Solve problems, including contextual ones, using proportional sides of similar triangles", "level": "LOTS" }
  ]
 },
 "G.TR.4": {
  "text": "Model and solve problems, including those in context, involving trigonometry in right triangles and applications of the Pythagorean Theorem.",
  "category": "Triangles",
  "skills": [
   { "id": "G.TR.4.1", "text": "Use the Pythagorean Theorem and its converse, including to classify a triangle as right, acute or obtuse", "level": "LOTS" },
   { "id": "G.TR.4.2", "text": "Use the relationships in 45°-45°-90° and 30°-60°-90° triangles", "level": "LOTS" },
   { "id": "G.TR.4.3", "text": "Use sine, cosine and tangent ratios to find a side length or an angle measure", "level": "LOTS" },
   { "id": "G.TR.4.4", "text": "Model a contextual problem (angles of elevation and depression, ramps, ladders, distances) with a right triangle and solve it", "level": "HOTS" }
  ]
 },
 "G.PC.1": {
  "text": "Prove and justify theorems and properties of quadrilaterals, and verify and use properties of quadrilaterals to solve problems, including the relationships between the sides, angles, and diagonals.",
  "category": "Polygons, Circles, and Three-Dimensional Figures",
  "skills": [
   { "id": "G.PC.1.1", "text": "Identify the properties of parallelograms, rectangles, rhombi, squares, trapezoids and kites (sides, angles, diagonals)", "level": "LOTS" },
   { "id": "G.PC.1.2", "text": "Use coordinate methods (slope, distance, midpoint) to classify a quadrilateral or justify a property", "level": "HOTS" },
   { "id": "G.PC.1.3", "text": "Solve problems, including algebraic ones, using the properties of quadrilaterals", "level": "LOTS" }
  ]
 },
 "G.PC.2": {
  "text": "Verify relationships and solve problems involving the number of sides and measures of angles of convex polygons.",
  "category": "Polygons, Circles, and Three-Dimensional Figures",
  "skills": [
   { "id": "G.PC.2.1", "text": "Find the sum of the interior angles, and the measure of each interior and exterior angle, of a convex or regular polygon", "level": "LOTS" },
   { "id": "G.PC.2.2", "text": "Find the number of sides of a regular polygon given the measure of an interior or exterior angle", "level": "LOTS" }
  ]
 },
 "G.PC.3": {
  "text": "Solve problems, including contextual problems, by applying properties of circles.",
  "category": "Polygons, Circles, and Three-Dimensional Figures",
  "skills": [
   { "id": "G.PC.3.1", "text": "Use the angles formed by chords, secants and tangents (central, inscribed, and angles inside and outside a circle) and their arcs", "level": "LOTS" },
   { "id": "G.PC.3.2", "text": "Use the lengths of segments formed by intersecting chords, secants and tangents", "level": "LOTS" },
   { "id": "G.PC.3.3", "text": "Find arc length and the area of a sector, or use them to find a radius or a central angle", "level": "LOTS" },
   { "id": "G.PC.3.4", "text": "Model and solve a contextual problem with the properties of circles", "level": "HOTS" }
  ]
 },
 "G.PC.4": {
  "text": "Solve problems involving equations of circles.",
  "category": "Polygons, Circles, and Three-Dimensional Figures",
  "skills": [
   { "id": "G.PC.4.1", "text": "Identify the center and radius of a circle from its graph or from its equation in standard form", "level": "LOTS" },
   { "id": "G.PC.4.2", "text": "Write the equation of a circle from its center and radius, its center and a point, or the endpoints of a diameter", "level": "LOTS" },
   { "id": "G.PC.4.3", "text": "Derive the equation of a circle with the Pythagorean Theorem or the distance formula", "level": "HOTS" }
  ]
 },
 "G.DF.1": {
  "text": "Create models and solve problems, including those in context, involving surface area and volume of rectangular and triangular prisms, cylinders, cones, pyramids, and spheres.",
  "category": "Polygons, Circles, and Three-Dimensional Figures",
  "skills": [
   { "id": "G.DF.1.1", "text": "Identify the two-dimensional cross sections and nets of three-dimensional figures", "level": "LOTS" },
   { "id": "G.DF.1.2", "text": "Find the surface area and volume of prisms, cylinders, cones, pyramids and spheres", "level": "LOTS" },
   { "id": "G.DF.1.3", "text": "Solve multistep contextual problems with surface area and volume, including composite figures", "level": "HOTS" }
  ]
 },
 "G.DF.2": {
  "text": "Determine how changes in one or more dimensions affect perimeter, area, surface area, and volume, and solve problems with similar two- and three-dimensional figures.",
  "category": "Polygons, Circles, and Three-Dimensional Figures",
  "skills": [
   { "id": "G.DF.2.1", "text": "Describe how changing one or more dimensions of a figure changes its perimeter, area, surface area or volume", "level": "LOTS" },
   { "id": "G.DF.2.2", "text": "Use the ratios k, k² and k³ of similar figures to find lengths, areas and volumes", "level": "LOTS" },
   { "id": "G.DF.2.3", "text": "Decide whether two figures are similar and justify the decision with ratios of corresponding measures", "level": "HOTS" }
  ]
 }
};
  /* the skill filter's four strands (the game's skill screen) and the standards in each */
  var STRANDS = [
    { id: "RLT", label: "Logic, lines & transformations", codes: ["G.RLT.1", "G.RLT.2", "G.RLT.3"] },
    { id: "TR", label: "Triangles", codes: ["G.TR.1", "G.TR.2", "G.TR.3", "G.TR.4"] },
    { id: "PC", label: "Polygons & circles", codes: ["G.PC.1", "G.PC.2", "G.PC.3", "G.PC.4"] },
    { id: "DF", label: "3-D figures", codes: ["G.DF.1", "G.DF.2"] }
  ];
  var SKILL = {};
  Object.keys(STANDARDS).forEach(function (code) { STANDARDS[code].skills.forEach(function (s) { SKILL[s.id] = { code: code, text: s.text, level: s.level }; }); });
  var api = { STANDARDS: STANDARDS, SKILL: SKILL, STRANDS: STRANDS };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.SolStandardsGeo = api;
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));
