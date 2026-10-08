/* SOL Labyrinth — Geometry game (family GEO), reasoning, lines and transformations: G.RLT.1–G.RLT.3 (Virginia 2023 Geometry
   SOL). Original items only. A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in
   css/after-hours.css) and the given facts, then six questions about it. Every numeric answer was computed, and every
   distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-rlt1-vertical",
      family: "GEO",
      title: "Vertical Angles, in Logic",
      kind: "Logic · G.RLT.1",
      blurb: "A true theorem written as p → q, then turned around.",
      level: 1,
      passage:
        "<p class=\"geo-given\">Let <strong>p</strong> be “Two angles are vertical angles.”</p>" +
        "<p class=\"geo-given\">Let <strong>q</strong> be “The two angles are congruent.”</p>" +
        "<p class=\"geo-given\">The Vertical Angles Theorem says that the conditional <strong>p → q</strong> is true.</p>",
      claims: [
        {
          id: "conditional",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which sentence is p → q?",
          choices: [
            { letter: "A", text: "If two angles are congruent, then they are vertical angles." },
            { letter: "B", text: "Two angles are vertical angles and they are congruent." },
            { letter: "C", text: "If two angles are vertical angles, then they are congruent." },
            { letter: "D", text: "Two angles are vertical angles if and only if they are congruent." }
          ],
          correct: "C"
        },
        {
          id: "disjunction",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which is the sentence “Two angles are not vertical angles, or they are congruent” written in symbols?",
          choices: [
            { letter: "A", text: "~p ∨ q" },
            { letter: "B", text: "~p ∧ q" },
            { letter: "C", text: "~(p ∨ q)" },
            { letter: "D", text: "p ∨ ~q" }
          ],
          correct: "A"
        },
        {
          id: "converse",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which is the converse of p → q, written in symbols?",
          choices: [
            { letter: "A", text: "~p → ~q" },
            { letter: "B", text: "~q → ~p" },
            { letter: "C", text: "p ↔ q" },
            { letter: "D", text: "q → p" }
          ],
          correct: "D"
        },
        {
          id: "inverse",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which sentence is the inverse of p → q?",
          choices: [
            { letter: "A", text: "If two angles are not congruent, then they are not vertical angles." },
            { letter: "B", text: "If two angles are not vertical angles, then they are not congruent." },
            { letter: "C", text: "If two angles are congruent, then they are vertical angles." },
            { letter: "D", text: "If two angles are vertical angles, then they are not congruent." }
          ],
          correct: "B"
        },
        {
          id: "which-true",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Of p → q, its converse, its inverse and its contrapositive, which are true?",
          choices: [
            { letter: "A", text: "p → q and its contrapositive only" },
            { letter: "B", text: "p → q and its converse only" },
            { letter: "C", text: "p → q and its inverse only" },
            { letter: "D", text: "All four of the statements" }
          ],
          correct: "A"
        },
        {
          id: "counterexample",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which example shows that the converse, q → p, is false?",
          choices: [
            { letter: "A", text: "Two vertical angles that each measure 50°" },
            { letter: "B", text: "A 50° angle and a 130° angle that form a linear pair" },
            { letter: "C", text: "A 30° angle and a 60° angle that are complementary" },
            { letter: "D", text: "The two 50° base angles of an isosceles triangle" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt1-clubs",
      family: "GEO",
      title: "Soccer and Band",
      kind: "Logic · G.RLT.1",
      blurb: "A Venn diagram of one homeroom's 40 students.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Venn diagram inside a rectangle of 40 students: circle S and circle B overlap; 15 are in S only, 6 in both, 11 in B only and 8 outside both circles\">" +
        "<rect class=\"thin\" x=\"16\" y=\"6\" width=\"288\" height=\"138\"/><circle class=\"sh2\" cx=\"130\" cy=\"78\" r=\"54\"/><circle class=\"sh\" cx=\"190\" cy=\"78\" r=\"54\"/>" +
        "<text class=\"sm\" x=\"24\" y=\"22\">40 students</text><text x=\"78\" y=\"40\" text-anchor=\"middle\">S</text><text x=\"242\" y=\"40\" text-anchor=\"middle\">B</text>" +
        "<text x=\"104\" y=\"83\" text-anchor=\"middle\">15</text><text x=\"160\" y=\"83\" text-anchor=\"middle\">6</text>" +
        "<text x=\"216\" y=\"83\" text-anchor=\"middle\">11</text><text x=\"276\" y=\"132\" text-anchor=\"middle\">8</text></svg></figure>" +
        "<p class=\"geo-given\">The Venn diagram shows all 40 students in one homeroom. <strong>S</strong> is the set of students who play soccer, and <strong>B</strong> is the set of students in the band. Each number is the number of students in that region.</p>",
      claims: [
        {
          id: "intersection",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many students are in S ∩ B?",
          choices: [
            { letter: "A", text: "32" },
            { letter: "B", text: "6" },
            { letter: "C", text: "21" },
            { letter: "D", text: "17" }
          ],
          correct: "B"
        },
        {
          id: "union",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many students are in S ∪ B?",
          choices: [
            { letter: "A", text: "38" },
            { letter: "B", text: "40" },
            { letter: "C", text: "26" },
            { letter: "D", text: "32" }
          ],
          correct: "D"
        },
        {
          id: "not-soccer",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many students are in ~S (students who do not play soccer)?",
          choices: [
            { letter: "A", text: "19" },
            { letter: "B", text: "11" },
            { letter: "C", text: "8" },
            { letter: "D", text: "25" }
          ],
          correct: "A"
        },
        {
          id: "exactly-one",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many students are in exactly one of the two groups?",
          choices: [
            { letter: "A", text: "32" },
            { letter: "B", text: "6" },
            { letter: "C", text: "26" },
            { letter: "D", text: "38" }
          ],
          correct: "C"
        },
        {
          id: "counterexamples",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Consider the statement “If a student is in the band, then the student plays soccer.” How many students in this homeroom are counterexamples to it?",
          choices: [
            { letter: "A", text: "17" },
            { letter: "B", text: "8" },
            { letter: "C", text: "11" },
            { letter: "D", text: "6" }
          ],
          correct: "C"
        },
        {
          id: "region",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which expression names the region with 8 students?",
          choices: [
            { letter: "A", text: "~(S ∩ B)" },
            { letter: "B", text: "~(S ∪ B)" },
            { letter: "C", text: "~S ∩ B" },
            { letter: "D", text: "S ∩ ~B" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt1-quads",
      family: "GEO",
      title: "The Quadrilateral Family",
      kind: "Logic · G.RLT.1",
      blurb: "Nested sets of quadrilaterals and the arguments they support.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"Nested sets: inside Quadrilaterals is Parallelograms; inside Parallelograms, the sets Rectangles and Rhombi overlap, and their overlap is Squares\">" +
        "<rect class=\"thin\" x=\"14\" y=\"6\" width=\"292\" height=\"150\"/><text class=\"sm\" x=\"22\" y=\"22\">Quadrilaterals</text>" +
        "<ellipse class=\"thin\" cx=\"165\" cy=\"90\" rx=\"132\" ry=\"60\"/><text class=\"sm\" x=\"165\" y=\"48\" text-anchor=\"middle\">Parallelograms</text>" +
        "<ellipse class=\"sh2\" cx=\"128\" cy=\"102\" rx=\"70\" ry=\"38\"/><ellipse class=\"sh\" cx=\"202\" cy=\"102\" rx=\"70\" ry=\"38\"/>" +
        "<text class=\"sm\" x=\"95\" y=\"106\" text-anchor=\"middle\">Rectangles</text><text class=\"sm\" x=\"235\" y=\"106\" text-anchor=\"middle\">Rhombi</text>" +
        "<text class=\"sm\" x=\"165\" y=\"106\" text-anchor=\"middle\">Squares</text></svg></figure>" +
        "<p class=\"geo-given\">The diagram shows how some sets of quadrilaterals are related. A set drawn inside another set is a subset of it.</p>",
      claims: [
        {
          id: "subset",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which conditional does the diagram show is true?",
          choices: [
            { letter: "A", text: "If a quadrilateral is a square, then it is a rhombus." },
            { letter: "B", text: "If a quadrilateral is a rhombus, then it is a square." },
            { letter: "C", text: "If a quadrilateral is a parallelogram, then it is a rectangle." },
            { letter: "D", text: "If a quadrilateral is a rectangle, then it is a rhombus." }
          ],
          correct: "A"
        },
        {
          id: "syllogism",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Statement 1: If a quadrilateral is a square, then it is a rectangle. Statement 2: If a quadrilateral is a rectangle, then it is a parallelogram. Which conclusion follows by the Law of Syllogism?",
          choices: [
            { letter: "A", text: "If a quadrilateral is a parallelogram, then it is a square." },
            { letter: "B", text: "If a quadrilateral is a rectangle, then it is a square." },
            { letter: "C", text: "If a quadrilateral is a square, then it is a parallelogram." },
            { letter: "D", text: "If a quadrilateral is not a square, then it is not a parallelogram." }
          ],
          correct: "C"
        },
        {
          id: "detachment",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "If a quadrilateral is a rhombus, then it is a parallelogram. Quadrilateral WXYZ is a rhombus. What must be true, by the Law of Detachment?",
          choices: [
            { letter: "A", text: "WXYZ is a square." },
            { letter: "B", text: "WXYZ is a parallelogram." },
            { letter: "C", text: "WXYZ is a rectangle." },
            { letter: "D", text: "WXYZ is not a rectangle." }
          ],
          correct: "B"
        },
        {
          id: "affirming",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Ana argues: “If a quadrilateral is a square, then it is a rectangle. ABCD is a rectangle. So ABCD is a square.” Which describes her argument?",
          choices: [
            { letter: "A", text: "Valid, by the Law of Detachment" },
            { letter: "B", text: "Valid, by the Law of Syllogism" },
            { letter: "C", text: "Invalid, because the conditional is false" },
            { letter: "D", text: "Invalid; it reasons from the converse" }
          ],
          correct: "D"
        },
        {
          id: "rect-and-rhombi",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "In the diagram, which set is Rectangles ∩ Rhombi?",
          choices: [
            { letter: "A", text: "Squares" },
            { letter: "B", text: "Parallelograms" },
            { letter: "C", text: "Quadrilaterals" },
            { letter: "D", text: "The empty set" }
          ],
          correct: "A"
        },
        {
          id: "true-one",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which statement is true?",
          choices: [
            { letter: "A", text: "If a quadrilateral is not a square, then it is not a rectangle." },
            { letter: "B", text: "If a quadrilateral is not a parallelogram, then it is not a rhombus." },
            { letter: "C", text: "If a quadrilateral is a parallelogram, then it is a rhombus." },
            { letter: "D", text: "If a quadrilateral is not a rhombus, then it is not a parallelogram." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt1-activities",
      family: "GEO",
      title: "Three After-School Activities",
      kind: "Logic · G.RLT.1",
      blurb: "A survey of 60 students, three overlapping sets and one unknown.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Three overlapping circles R, D and C inside a rectangle of 60 students. R only 12, D only 9, C only 10, R and D only 4, R and C only 3, D and C only 5, all three 2, and x students outside all circles\">" +
        "<rect class=\"thin\" x=\"16\" y=\"4\" width=\"288\" height=\"162\"/><circle class=\"sh2\" cx=\"130\" cy=\"62\" r=\"52\"/><circle class=\"sh\" cx=\"190\" cy=\"62\" r=\"52\"/>" +
        "<circle class=\"thin\" cx=\"160\" cy=\"112\" r=\"52\"/><text class=\"sm\" x=\"24\" y=\"20\">60 students</text><text x=\"68\" y=\"46\" text-anchor=\"middle\">R</text>" +
        "<text x=\"252\" y=\"46\" text-anchor=\"middle\">D</text><text x=\"100\" y=\"156\" text-anchor=\"middle\">C</text>" +
        "<text x=\"111.9\" y=\"56.3\" text-anchor=\"middle\">12</text><text x=\"131.2\" y=\"100.1\" text-anchor=\"middle\">3</text>" +
        "<text x=\"160\" y=\"50.3\" text-anchor=\"middle\">4</text><text x=\"160\" y=\"83.3\" text-anchor=\"middle\">2</text>" +
        "<text x=\"208.1\" y=\"56.3\" text-anchor=\"middle\">9</text><text x=\"160\" y=\"138.7\" text-anchor=\"middle\">10</text>" +
        "<text x=\"188.8\" y=\"100.1\" text-anchor=\"middle\">5</text><text class=\"acc\" x=\"272\" y=\"150\" text-anchor=\"middle\">x</text></svg></figure>" +
        "<p class=\"geo-given\">A survey asked 60 ninth graders about three activities: <strong>R</strong> is robotics, <strong>D</strong> is drama and <strong>C</strong> is chorus. Each number is the number of students in that region, and <strong>x</strong> students are in none of the three.</p>",
      claims: [
        {
          id: "find-x",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "What is the value of x?",
          choices: [
            { letter: "A", text: "45" },
            { letter: "B", text: "17" },
            { letter: "C", text: "13" },
            { letter: "D", text: "15" }
          ],
          correct: "D"
        },
        {
          id: "r-and-d",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many students are in R ∩ D?",
          choices: [
            { letter: "A", text: "4" },
            { letter: "B", text: "6" },
            { letter: "C", text: "2" },
            { letter: "D", text: "35" }
          ],
          correct: "B"
        },
        {
          id: "exactly-two",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many students are in exactly two of the three activities?",
          choices: [
            { letter: "A", text: "14" },
            { letter: "B", text: "2" },
            { letter: "C", text: "12" },
            { letter: "D", text: "31" }
          ],
          correct: "C"
        },
        {
          id: "chorus-not-robotics",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many students are in C ∩ ~R (chorus but not robotics)?",
          choices: [
            { letter: "A", text: "15" },
            { letter: "B", text: "10" },
            { letter: "C", text: "20" },
            { letter: "D", text: "17" }
          ],
          correct: "A"
        },
        {
          id: "kai",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Kai is in robotics and in chorus. Sam concludes that Kai must also be in drama. Is Sam's conclusion valid?",
          choices: [
            { letter: "A", text: "Yes; the center region is inside all three circles." },
            { letter: "B", text: "Yes; the robotics circle overlaps the drama circle." },
            { letter: "C", text: "No; 3 students are in robotics and chorus but not drama." },
            { letter: "D", text: "No; no student can be in all three activities." }
          ],
          correct: "C"
        },
        {
          id: "or-not",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many students are in (R ∪ C) ∩ ~D, that is, in robotics or chorus but not in drama?",
          choices: [
            { letter: "A", text: "36" },
            { letter: "B", text: "40" },
            { letter: "C", text: "27" },
            { letter: "D", text: "25" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt2-parking",
      family: "GEO",
      title: "Stripes in the Parking Lot",
      kind: "Lines · G.RLT.2",
      blurb: "Two parallel stripes, one lane line and eight angles.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Parallel lines l and m cut by transversal t. At the top intersection, angles 1 and 2 are above line l, left and right of t, and angles 3 and 4 are below it; angles 5 to 8 sit the same way at line m\">" +
        "<line class=\"ln\" x1=\"14\" y1=\"46\" x2=\"300\" y2=\"46\"/><text x=\"303\" y=\"51\">ℓ</text><path class=\"thin\" d=\"M257 50 L264 46 L257 42\"/>" +
        "<line class=\"ln\" x1=\"14\" y1=\"110\" x2=\"300\" y2=\"110\"/><text x=\"303\" y=\"115\">m</text><path class=\"thin\" d=\"M227.2 114 L234.2 110 L227.2 106\"/>" +
        "<line class=\"ln\" x1=\"104.3\" y1=\"144\" x2=\"167.7\" y2=\"8\"/><text x=\"175.7\" y=\"20\">t</text><circle class=\"dt\" cx=\"150\" cy=\"46\" r=\"3\"/>" +
        "<text x=\"141.9\" y=\"38.3\" text-anchor=\"middle\">1</text><text x=\"165.7\" y=\"41\" text-anchor=\"middle\">2</text>" +
        "<text x=\"134.3\" y=\"61\" text-anchor=\"middle\">3</text><text x=\"158.1\" y=\"63.7\" text-anchor=\"middle\">4</text>" +
        "<circle class=\"dt\" cx=\"120.2\" cy=\"110\" r=\"3\"/><text x=\"112.1\" y=\"102.3\" text-anchor=\"middle\">5</text>" +
        "<text x=\"135.9\" y=\"105\" text-anchor=\"middle\">6</text><text x=\"104.5\" y=\"125\" text-anchor=\"middle\">7</text>" +
        "<text x=\"128.2\" y=\"127.7\" text-anchor=\"middle\">8</text></svg></figure>" +
        "<p class=\"geo-given\">Parking stripes <strong>ℓ</strong> and <strong>m</strong> are parallel. A lane line, <strong>t</strong>, crosses both of them. m∠1 = 115°.</p>",
      claims: [
        {
          id: "pair-3-6",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "∠3 and ∠6 are what kind of angle pair?",
          choices: [
            { letter: "A", text: "Corresponding angles" },
            { letter: "B", text: "Alternate interior angles" },
            { letter: "C", text: "Same-side interior angles" },
            { letter: "D", text: "Alternate exterior angles" }
          ],
          correct: "B"
        },
        {
          id: "corresponds-2",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which angle corresponds to ∠2?",
          choices: [
            { letter: "A", text: "∠6" },
            { letter: "B", text: "∠7" },
            { letter: "C", text: "∠3" },
            { letter: "D", text: "∠4" }
          ],
          correct: "A"
        },
        {
          id: "angle-5",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠5?",
          choices: [
            { letter: "A", text: "65°" },
            { letter: "B", text: "25°" },
            { letter: "C", text: "245°" },
            { letter: "D", text: "115°" }
          ],
          correct: "D"
        },
        {
          id: "which-65",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Which angle measures 65°?",
          choices: [
            { letter: "A", text: "∠4" },
            { letter: "B", text: "∠5" },
            { letter: "C", text: "∠6" },
            { letter: "D", text: "∠8" }
          ],
          correct: "C"
        },
        {
          id: "same-side",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which two angles are same-side interior angles?",
          choices: [
            { letter: "A", text: "∠3 and ∠6" },
            { letter: "B", text: "∠3 and ∠5" },
            { letter: "C", text: "∠1 and ∠5" },
            { letter: "D", text: "∠2 and ∠7" }
          ],
          correct: "B"
        },
        {
          id: "sum-4-6",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "A painter measures ∠4 and ∠6. What is m∠4 + m∠6?",
          choices: [
            { letter: "A", text: "180°" },
            { letter: "B", text: "130°" },
            { letter: "C", text: "230°" },
            { letter: "D", text: "90°" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt2-railroad",
      family: "GEO",
      title: "The Railroad Crossing",
      kind: "Lines · G.RLT.2",
      blurb: "A road crosses two parallel rails; solve for x.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Parallel rails r and s, sloping down to the right, cut by road t. Angles 1 to 4 are at rail r and angles 5 to 8 at rail s: 1 and 5 above the rail left of t, 2 and 6 above the rail right of t, 3 and 7 below the rail left of t, 4 and 8 below the rail right of t\">" +
        "<line class=\"ln\" x1=\"14\" y1=\"8.2\" x2=\"300\" y2=\"84.8\"/><text x=\"303\" y=\"89.8\">r</text><path class=\"thin\" d=\"M257.8 77.7 L265.6 75.6 L259.9 69.9\"/>" +
        "<line class=\"ln\" x1=\"14\" y1=\"74.4\" x2=\"300\" y2=\"151\"/><text x=\"303\" y=\"156\">s</text><path class=\"thin\" d=\"M218.8 133.4 L226.6 131.3 L220.9 125.6\"/>" +
        "<line class=\"ln\" x1=\"97.2\" y1=\"154\" x2=\"199.4\" y2=\"8\"/><text x=\"205.4\" y=\"20\">t</text><circle class=\"dt\" cx=\"170\" cy=\"50\" r=\"3\"/>" +
        "<text x=\"164.9\" y=\"40.9\" text-anchor=\"middle\">1</text><text x=\"186.4\" y=\"49\" text-anchor=\"middle\">2</text>" +
        "<text x=\"153.6\" y=\"61\" text-anchor=\"middle\">3</text><text x=\"175.1\" y=\"69.1\" text-anchor=\"middle\">4</text>" +
        "<circle class=\"dt\" cx=\"131\" cy=\"105.7\" r=\"3\"/><text x=\"125.9\" y=\"96.6\" text-anchor=\"middle\">5</text>" +
        "<text x=\"147.4\" y=\"104.7\" text-anchor=\"middle\">6</text><text x=\"114.6\" y=\"116.7\" text-anchor=\"middle\">7</text>" +
        "<text x=\"136.1\" y=\"124.8\" text-anchor=\"middle\">8</text></svg></figure>" +
        "<p class=\"geo-given\">Rails <strong>r</strong> and <strong>s</strong> are parallel. Road <strong>t</strong> crosses both rails. m∠3 = (3x + 16)° and m∠6 = (5x − 20)°.</p>",
      claims: [
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Find the value of x.",
          choices: [
            { letter: "A", text: "23" },
            { letter: "B", text: "−2" },
            { letter: "C", text: "18" },
            { letter: "D", text: "36" }
          ],
          correct: "C"
        },
        {
          id: "angle-3",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠3?",
          choices: [
            { letter: "A", text: "110°" },
            { letter: "B", text: "85°" },
            { letter: "C", text: "54°" },
            { letter: "D", text: "70°" }
          ],
          correct: "D"
        },
        {
          id: "angle-8",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠8?",
          choices: [
            { letter: "A", text: "110°" },
            { letter: "B", text: "70°" },
            { letter: "C", text: "20°" },
            { letter: "D", text: "290°" }
          ],
          correct: "A"
        },
        {
          id: "why-equal",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Why is the equation (3x + 16) = (5x − 20) the right one to solve?",
          choices: [
            { letter: "A", text: "∠3 and ∠6 are corresponding angles." },
            { letter: "B", text: "∠3 and ∠6 are alternate interior angles." },
            { letter: "C", text: "∠3 and ∠6 are vertical angles." },
            { letter: "D", text: "∠3 and ∠6 are same-side interior angles." }
          ],
          correct: "B"
        },
        {
          id: "solve-y",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "For the same crossing, m∠2 = (y + 40)° and m∠7 = (3y − 20)°. What is the value of y?",
          choices: [
            { letter: "A", text: "10" },
            { letter: "B", text: "40" },
            { letter: "C", text: "70" },
            { letter: "D", text: "30" }
          ],
          correct: "D"
        },
        {
          id: "prove-parallel",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Suppose you did not know that the rails are parallel. Which fact would prove that r ∥ s?",
          choices: [
            { letter: "A", text: "m∠1 = m∠4" },
            { letter: "B", text: "m∠3 + m∠4 = 180°" },
            { letter: "C", text: "m∠1 = m∠5" },
            { letter: "D", text: "m∠3 = m∠5" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt2-trellis",
      family: "GEO",
      title: "The Garden Trellis",
      kind: "Lines · G.RLT.2",
      blurb: "Three boards, one brace: which boards are parallel?",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Three boards a, b and c crossed by brace t. At board a the angle below a and right of t is 122 degrees; at board b the angle above b and right of t is 58 degrees; at board c the angle above c and right of t is 60 degrees\">" +
        "<line class=\"ln\" x1=\"24\" y1=\"30\" x2=\"300\" y2=\"30\"/><text x=\"10\" y=\"35\">a</text><line class=\"ln\" x1=\"24\" y1=\"94\" x2=\"300\" y2=\"94\"/>" +
        "<text x=\"10\" y=\"99\">b</text><line class=\"ln\" x1=\"24\" y1=\"150.3\" x2=\"300\" y2=\"159.9\"/><text x=\"10\" y=\"155.3\">c</text>" +
        "<line class=\"ac\" x1=\"65\" y1=\"166\" x2=\"165\" y2=\"6\"/><text class=\"acc\" x=\"171\" y=\"18\">t</text><path class=\"thin\" d=\"M142.6 41.9 A14 14 0 0 0 164 30\"/>" +
        "<text x=\"162.6\" y=\"57.7\" text-anchor=\"middle\">122°</text><path class=\"thin\" d=\"M124 94 A14 14 0 0 0 117.4 82.1\"/>" +
        "<text x=\"136.2\" y=\"84.5\" text-anchor=\"middle\">58°</text><path class=\"thin\" d=\"M87.8 152.5 A14 14 0 0 0 81.2 140.1\"/>" +
        "<text x=\"100.3\" y=\"142.9\" text-anchor=\"middle\">60°</text><circle class=\"dt\" cx=\"150\" cy=\"30\" r=\"3\"/><circle class=\"dt\" cx=\"110\" cy=\"94\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"73.8\" cy=\"152\" r=\"3\"/></svg></figure>" +
        "<p class=\"geo-given\">Boards <strong>a</strong>, <strong>b</strong> and <strong>c</strong> of a garden trellis are crossed by a straight brace, <strong>t</strong>. The figure shows the angle measured at each board.</p>",
      claims: [
        {
          id: "pair-type",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "The 122° angle at board a and the 58° angle at board b are what kind of angle pair?",
          choices: [
            { letter: "A", text: "Corresponding angles" },
            { letter: "B", text: "Alternate interior angles" },
            { letter: "C", text: "Alternate exterior angles" },
            { letter: "D", text: "Same-side interior angles" }
          ],
          correct: "D"
        },
        {
          id: "a-and-b",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Is board a parallel to board b, and why?",
          choices: [
            { letter: "A", text: "Yes; same-side interior angles are supplementary." },
            { letter: "B", text: "No; the two angles are not congruent." },
            { letter: "C", text: "No; same-side interior angles must be congruent." },
            { letter: "D", text: "Cannot tell without a third angle measure." }
          ],
          correct: "A"
        },
        {
          id: "b-and-c",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Is board c parallel to board b, and why?",
          choices: [
            { letter: "A", text: "Yes; both angles are acute, so they match." },
            { letter: "B", text: "Yes; boards b and c are both cut by t." },
            { letter: "C", text: "No; corresponding angles are not congruent." },
            { letter: "D", text: "Yes; both angles are on the same side of t." }
          ],
          correct: "C"
        },
        {
          id: "fix-c",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What should the 60° angle measure for board c to be parallel to board b?",
          choices: [
            { letter: "A", text: "122°" },
            { letter: "B", text: "58°" },
            { letter: "C", text: "32°" },
            { letter: "D", text: "120°" }
          ],
          correct: "B"
        },
        {
          id: "theorem",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Which theorem justifies the conclusion that a ∥ b?",
          choices: [
            { letter: "A", text: "Converse of the Same-Side Interior Angles Theorem" },
            { letter: "B", text: "Same-Side Interior Angles Theorem" },
            { letter: "C", text: "Converse of the Corresponding Angles Postulate" },
            { letter: "D", text: "Vertical Angles Theorem" }
          ],
          correct: "A"
        },
        {
          id: "above-a",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is the measure of the angle above board a, on the left of t?",
          choices: [
            { letter: "A", text: "58°" },
            { letter: "B", text: "238°" },
            { letter: "C", text: "122°" },
            { letter: "D", text: "32°" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt2-proof",
      family: "GEO",
      title: "Proving Lines Parallel",
      kind: "Lines · G.RLT.2",
      blurb: "A two-column proof and an algebra check that ℓ ∥ m.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Lines l and m cut by transversal t, which leans to the left. Angles 1 to 4 are at line l and angles 5 to 8 at line m: 1 and 5 above the line left of t, 2 and 6 above it right of t, 3 and 7 below it left of t, 4 and 8 below it right of t\">" +
        "<line class=\"ln\" x1=\"14\" y1=\"70.8\" x2=\"300\" y2=\"30.6\"/><text x=\"303\" y=\"35.6\">ℓ</text><line class=\"ln\" x1=\"14\" y1=\"126.7\" x2=\"300\" y2=\"86.5\"/>" +
        "<text x=\"303\" y=\"91.5\">m</text><line class=\"ln\" x1=\"259.5\" y1=\"144\" x2=\"141.2\" y2=\"8\"/><text x=\"125.2\" y=\"20\">t</text>" +
        "<circle class=\"dt\" cx=\"176\" cy=\"48\" r=\"3\"/><text x=\"156.4\" y=\"45.7\" text-anchor=\"middle\">1</text>" +
        "<text x=\"181.3\" y=\"38.9\" text-anchor=\"middle\">2</text><text x=\"170.7\" y=\"67.1\" text-anchor=\"middle\">3</text>" +
        "<text x=\"195.6\" y=\"60.3\" text-anchor=\"middle\">4</text><circle class=\"dt\" cx=\"219.3\" cy=\"97.8\" r=\"3\"/>" +
        "<text x=\"199.7\" y=\"95.5\" text-anchor=\"middle\">5</text><text x=\"224.6\" y=\"88.8\" text-anchor=\"middle\">6</text>" +
        "<text x=\"214\" y=\"116.9\" text-anchor=\"middle\">7</text><text x=\"238.9\" y=\"110.2\" text-anchor=\"middle\">8</text></svg></figure>" +
        "<p class=\"geo-given\">Lines <strong>ℓ</strong> and <strong>m</strong> are cut by transversal <strong>t</strong>. Given: ∠1 and ∠7 are supplementary. Prove: ℓ ∥ m.</p>" +
        "<table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. ∠1 and ∠7 are supplementary.</td><td>Given</td></tr><tr>" +
        "<td>2. ∠5 and ∠7 form a linear pair.</td><td>Definition of a linear pair</td></tr><tr><td>3. ∠5 and ∠7 are supplementary.</td>" +
        "<td>Linear Pair Postulate</td></tr><tr><td>4. ∠1 ≅ ∠5</td><td>____ (a)</td></tr><tr><td>5. ℓ ∥ m</td><td>____ (b)</td></tr></table>",
      claims: [
        {
          id: "reason-a",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Which reason belongs in blank (a)?",
          choices: [
            { letter: "A", text: "Congruent Supplements Theorem" },
            { letter: "B", text: "Vertical Angles Theorem" },
            { letter: "C", text: "Linear Pair Postulate" },
            { letter: "D", text: "Corresponding Angles Postulate" }
          ],
          correct: "A"
        },
        {
          id: "reason-b",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Which reason belongs in blank (b)?",
          choices: [
            { letter: "A", text: "Corresponding Angles Postulate" },
            { letter: "B", text: "Converse of the Corresponding Angles Postulate" },
            { letter: "C", text: "Converse of the Alternate Interior Angles Theorem" },
            { letter: "D", text: "Converse of the Same-Side Interior Angles Theorem" }
          ],
          correct: "B"
        },
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Suppose m∠1 = (2x + 31)° and m∠7 = (8x + 19)°. For what value of x is ℓ ∥ m?",
          choices: [
            { letter: "A", text: "2" },
            { letter: "B", text: "4" },
            { letter: "C", text: "31" },
            { letter: "D", text: "13" }
          ],
          correct: "D"
        },
        {
          id: "angle-2",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Suppose m∠1 = (2x + 31)° and m∠7 = (8x + 19)°, and ℓ ∥ m. What is m∠2?",
          choices: [
            { letter: "A", text: "57°" },
            { letter: "B", text: "33°" },
            { letter: "C", text: "123°" },
            { letter: "D", text: "237°" }
          ],
          correct: "C"
        },
        {
          id: "pair-1-5",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "In step 4, ∠1 and ∠5 are what kind of angle pair?",
          choices: [
            { letter: "A", text: "Alternate interior angles" },
            { letter: "B", text: "Corresponding angles" },
            { letter: "C", text: "Same-side exterior angles" },
            { letter: "D", text: "Vertical angles" }
          ],
          correct: "B"
        },
        {
          id: "not-enough",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Which given would NOT be enough to prove that ℓ ∥ m?",
          choices: [
            { letter: "A", text: "∠3 ≅ ∠6" },
            { letter: "B", text: "∠2 ≅ ∠7" },
            { letter: "C", text: "∠4 and ∠6 are supplementary" },
            { letter: "D", text: "∠1 ≅ ∠4" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt3-symmetry",
      family: "GEO",
      title: "Symmetry in Designs",
      kind: "Transformations · G.RLT.3",
      blurb: "A pentagon, a letter and a fan: lines and turns of symmetry.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 134\" role=\"img\" aria-label=\"Figure 1, a regular pentagon; Figure 2, a block letter Z; Figure 3, a fan with three identical curved blades around a round hub\">" +
        "<polygon class=\"sh2\" points=\"58,24 21.9,50.3 35.7,92.7 80.3,92.7 94.1,50.3\"/>" +
        "<polygon class=\"sh\" points=\"138,34 182,34 182,45 154,79 182,79 182,90 138,90 138,79 166,45 138,45\"/>" +
        "<path class=\"sh2\" d=\"M259 56 Q247 40 257 26 Q270 29 273 40 Q267 47 265 56 Z\"/>" +
        "<path class=\"sh2\" d=\"M268.7 62.4 Q288.6 60 295.7 75.7 Q286.6 85.4 275.6 82.5 Q272.5 73.8 265.7 67.6 Z\"/>" +
        "<path class=\"sh2\" d=\"M258.3 67.6 Q250.4 86 233.3 84.3 Q229.4 71.6 237.4 63.5 Q246.5 65.2 255.3 62.4 Z\"/><circle class=\"ln\" cx=\"262\" cy=\"62\" r=\"6\"/>" +
        "<text class=\"sm\" x=\"58\" y=\"126\" text-anchor=\"middle\">Figure 1</text><text class=\"sm\" x=\"160\" y=\"126\" text-anchor=\"middle\">Figure 2</text>" +
        "<text class=\"sm\" x=\"262\" y=\"126\" text-anchor=\"middle\">Figure 3</text></svg></figure>" +
        "<p class=\"geo-given\">Figure 1 is a regular pentagon. Figure 2 is the letter Z on a sign. Figure 3 is a fan with three identical curved blades that all sweep the same way, like a pinwheel.</p>",
      claims: [
        {
          id: "pentagon-lines",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "How many lines of symmetry does Figure 1 have?",
          choices: [
            { letter: "A", text: "10" },
            { letter: "B", text: "1" },
            { letter: "C", text: "5" },
            { letter: "D", text: "0" }
          ],
          correct: "C"
        },
        {
          id: "pentagon-angle",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "What is the smallest angle of rotation, about its center, that maps Figure 1 onto itself?",
          choices: [
            { letter: "A", text: "108°" },
            { letter: "B", text: "72°" },
            { letter: "C", text: "36°" },
            { letter: "D", text: "60°" }
          ],
          correct: "B"
        },
        {
          id: "letter-z",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which describes the symmetry of Figure 2?",
          choices: [
            { letter: "A", text: "Rotational symmetry of order 2, no line symmetry" },
            { letter: "B", text: "One line of symmetry, no rotational symmetry" },
            { letter: "C", text: "Two lines of symmetry and rotational symmetry" },
            { letter: "D", text: "No line symmetry and no rotational symmetry" }
          ],
          correct: "A"
        },
        {
          id: "fan-order",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "What is the order of rotational symmetry of Figure 3?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "1" },
            { letter: "C", text: "120" },
            { letter: "D", text: "3" }
          ],
          correct: "D"
        },
        {
          id: "fan-lines",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "How many lines of symmetry does Figure 3 have?",
          choices: [
            { letter: "A", text: "3" },
            { letter: "B", text: "6" },
            { letter: "C", text: "0" },
            { letter: "D", text: "1" }
          ],
          correct: "C"
        },
        {
          id: "poster",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Figure 1 is enlarged for a poster by a dilation with scale factor 3. Which is true of the enlarged pentagon?",
          choices: [
            { letter: "A", text: "It still has 5 lines of symmetry." },
            { letter: "B", text: "It has 15 lines of symmetry." },
            { letter: "C", text: "It is congruent to Figure 1." },
            { letter: "D", text: "Each of its angles is 3 times as large." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt3-triangle",
      family: "GEO",
      title: "Moving a Triangle",
      kind: "Transformations · G.RLT.3",
      blurb: "Translate, reflect and rotate triangle ABC.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 158\" role=\"img\" aria-label=\"Coordinate grid with triangle ABC: A at (1, 2), B at (4, 1) and C at (2, 5)\">" +
        "<line class=\"gr\" x1=\"80\" y1=\"10\" x2=\"80\" y2=\"150\"/><line class=\"gr\" x1=\"100\" y1=\"10\" x2=\"100\" y2=\"150\"/>" +
        "<line class=\"gr\" x1=\"140\" y1=\"10\" x2=\"140\" y2=\"150\"/><line class=\"gr\" x1=\"160\" y1=\"10\" x2=\"160\" y2=\"150\"/>" +
        "<line class=\"gr\" x1=\"180\" y1=\"10\" x2=\"180\" y2=\"150\"/><line class=\"gr\" x1=\"200\" y1=\"10\" x2=\"200\" y2=\"150\"/>" +
        "<line class=\"gr\" x1=\"220\" y1=\"10\" x2=\"220\" y2=\"150\"/><line class=\"gr\" x1=\"240\" y1=\"10\" x2=\"240\" y2=\"150\"/>" +
        "<line class=\"gr\" x1=\"80\" y1=\"150\" x2=\"240\" y2=\"150\"/><line class=\"gr\" x1=\"80\" y1=\"110\" x2=\"240\" y2=\"110\"/>" +
        "<line class=\"gr\" x1=\"80\" y1=\"90\" x2=\"240\" y2=\"90\"/><line class=\"gr\" x1=\"80\" y1=\"70\" x2=\"240\" y2=\"70\"/>" +
        "<line class=\"gr\" x1=\"80\" y1=\"50\" x2=\"240\" y2=\"50\"/><line class=\"gr\" x1=\"80\" y1=\"30\" x2=\"240\" y2=\"30\"/>" +
        "<line class=\"gr\" x1=\"80\" y1=\"10\" x2=\"240\" y2=\"10\"/><line class=\"ax\" x1=\"80\" y1=\"130\" x2=\"240\" y2=\"130\"/>" +
        "<line class=\"ax\" x1=\"120\" y1=\"150\" x2=\"120\" y2=\"10\"/><text class=\"sm\" x=\"160\" y=\"143\" text-anchor=\"middle\">2</text>" +
        "<text class=\"sm\" x=\"200\" y=\"143\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"116\" y=\"94\" text-anchor=\"end\">2</text>" +
        "<text class=\"sm\" x=\"116\" y=\"54\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"244\" y=\"134\">x</text>" +
        "<text class=\"sm\" x=\"115\" y=\"20\" text-anchor=\"end\">y</text><polygon class=\"sh2\" points=\"140,90 200,110 160,30\"/>" +
        "<circle class=\"dt\" cx=\"140\" cy=\"90\" r=\"3\"/><circle class=\"dt\" cx=\"200\" cy=\"110\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"30\" r=\"3\"/>" +
        "<text x=\"126\" y=\"94\">A</text><text x=\"205\" y=\"106\">B</text><text x=\"156\" y=\"23\">C</text></svg></figure>" +
        "<p class=\"geo-given\">Triangle <strong>ABC</strong> has vertices A(1, 2), B(4, 1) and C(2, 5).</p>",
      claims: [
        {
          id: "translate-a",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Under the translation (x, y) → (x − 5, y + 1), what is the image of A?",
          choices: [
            { letter: "A", text: "(6, 3)" },
            { letter: "B", text: "(−4, 3)" },
            { letter: "C", text: "(−4, 1)" },
            { letter: "D", text: "(6, 1)" }
          ],
          correct: "B"
        },
        {
          id: "reflect-b",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of B after a reflection over the y-axis?",
          choices: [
            { letter: "A", text: "(4, −1)" },
            { letter: "B", text: "(−4, −1)" },
            { letter: "C", text: "(1, 4)" },
            { letter: "D", text: "(−4, 1)" }
          ],
          correct: "D"
        },
        {
          id: "reflect-c",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of C after a reflection over the line y = x?",
          choices: [
            { letter: "A", text: "(−2, 5)" },
            { letter: "B", text: "(2, −5)" },
            { letter: "C", text: "(5, 2)" },
            { letter: "D", text: "(−5, −2)" }
          ],
          correct: "C"
        },
        {
          id: "rotate-b",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of B after a rotation of 90° counterclockwise about the origin?",
          choices: [
            { letter: "A", text: "(−1, 4)" },
            { letter: "B", text: "(1, −4)" },
            { letter: "C", text: "(−4, −1)" },
            { letter: "D", text: "(−4, 1)" }
          ],
          correct: "A"
        },
        {
          id: "name-it",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Triangle A′B′C′ has vertices A′(−1, −2), B′(−4, −1) and C′(−2, −5). Which single transformation maps △ABC to △A′B′C′?",
          choices: [
            { letter: "A", text: "Reflection over the x-axis" },
            { letter: "B", text: "Reflection over the y-axis" },
            { letter: "C", text: "Rotation of 90° clockwise about the origin" },
            { letter: "D", text: "Rotation of 180° about the origin" }
          ],
          correct: "D"
        },
        {
          id: "not-congruent",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which transformation would NOT give an image congruent to △ABC?",
          choices: [
            { letter: "A", text: "(x, y) → (−y, x)" },
            { letter: "B", text: "(x, y) → (2x, 2y)" },
            { letter: "C", text: "(x, y) → (x + 3, y − 4)" },
            { letter: "D", text: "(x, y) → (y, x)" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt3-logo",
      family: "GEO",
      title: "Shrinking a Logo",
      kind: "Transformations · G.RLT.3",
      blurb: "A trapezoid logo dilated about the origin.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Coordinate grid with trapezoid PQRS: P at (-4, 6), Q at (4, 6), R at (6, -2) and S at (-6, -2)\">" +
        "<line class=\"gr\" x1=\"69\" y1=\"10\" x2=\"69\" y2=\"140\"/><line class=\"gr\" x1=\"82\" y1=\"10\" x2=\"82\" y2=\"140\"/>" +
        "<line class=\"gr\" x1=\"95\" y1=\"10\" x2=\"95\" y2=\"140\"/><line class=\"gr\" x1=\"108\" y1=\"10\" x2=\"108\" y2=\"140\"/>" +
        "<line class=\"gr\" x1=\"121\" y1=\"10\" x2=\"121\" y2=\"140\"/><line class=\"gr\" x1=\"134\" y1=\"10\" x2=\"134\" y2=\"140\"/>" +
        "<line class=\"gr\" x1=\"147\" y1=\"10\" x2=\"147\" y2=\"140\"/><line class=\"gr\" x1=\"173\" y1=\"10\" x2=\"173\" y2=\"140\"/>" +
        "<line class=\"gr\" x1=\"186\" y1=\"10\" x2=\"186\" y2=\"140\"/><line class=\"gr\" x1=\"199\" y1=\"10\" x2=\"199\" y2=\"140\"/>" +
        "<line class=\"gr\" x1=\"212\" y1=\"10\" x2=\"212\" y2=\"140\"/><line class=\"gr\" x1=\"225\" y1=\"10\" x2=\"225\" y2=\"140\"/>" +
        "<line class=\"gr\" x1=\"238\" y1=\"10\" x2=\"238\" y2=\"140\"/><line class=\"gr\" x1=\"251\" y1=\"10\" x2=\"251\" y2=\"140\"/>" +
        "<line class=\"gr\" x1=\"69\" y1=\"140\" x2=\"251\" y2=\"140\"/><line class=\"gr\" x1=\"69\" y1=\"127\" x2=\"251\" y2=\"127\"/>" +
        "<line class=\"gr\" x1=\"69\" y1=\"114\" x2=\"251\" y2=\"114\"/><line class=\"gr\" x1=\"69\" y1=\"88\" x2=\"251\" y2=\"88\"/>" +
        "<line class=\"gr\" x1=\"69\" y1=\"75\" x2=\"251\" y2=\"75\"/><line class=\"gr\" x1=\"69\" y1=\"62\" x2=\"251\" y2=\"62\"/>" +
        "<line class=\"gr\" x1=\"69\" y1=\"49\" x2=\"251\" y2=\"49\"/><line class=\"gr\" x1=\"69\" y1=\"36\" x2=\"251\" y2=\"36\"/>" +
        "<line class=\"gr\" x1=\"69\" y1=\"23\" x2=\"251\" y2=\"23\"/><line class=\"gr\" x1=\"69\" y1=\"10\" x2=\"251\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"69\" y1=\"101\" x2=\"251\" y2=\"101\"/><line class=\"ax\" x1=\"160\" y1=\"140\" x2=\"160\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"108\" y=\"114\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"134\" y=\"114\" text-anchor=\"middle\">−2</text>" +
        "<text class=\"sm\" x=\"186\" y=\"114\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"212\" y=\"114\" text-anchor=\"middle\">4</text>" +
        "<text class=\"sm\" x=\"156\" y=\"79\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"156\" y=\"53\" text-anchor=\"end\">4</text>" +
        "<text class=\"sm\" x=\"255\" y=\"105\">x</text><text class=\"sm\" x=\"155\" y=\"20\" text-anchor=\"end\">y</text>" +
        "<polygon class=\"sh\" points=\"108,23 212,23 238,127 82,127\"/><circle class=\"dt\" cx=\"108\" cy=\"23\" r=\"3\"/><circle class=\"dt\" cx=\"212\" cy=\"23\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"238\" cy=\"127\" r=\"3\"/><circle class=\"dt\" cx=\"82\" cy=\"127\" r=\"3\"/><text x=\"94\" y=\"24\">P</text><text x=\"216\" y=\"24\">Q</text>" +
        "<text x=\"243\" y=\"132\">R</text><text x=\"67\" y=\"132\">S</text></svg></figure>" +
        "<p class=\"geo-given\">A designer draws a logo, trapezoid <strong>PQRS</strong>, with P(−4, 6), Q(4, 6), R(6, −2) and S(−6, −2). She dilates it about the origin to make a smaller app icon, <strong>P′Q′R′S′</strong>.</p>",
      claims: [
        {
          id: "image-r",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Under a dilation with scale factor 1/2 centered at the origin, what is the image of R?",
          choices: [
            { letter: "A", text: "(3, −1)" },
            { letter: "B", text: "(12, −4)" },
            { letter: "C", text: "(6.5, −1.5)" },
            { letter: "D", text: "(3, −2)" }
          ],
          correct: "A"
        },
        {
          id: "length",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "PQ is 8 units long. After the dilation with scale factor 1/2, how long is P′Q′?",
          choices: [
            { letter: "A", text: "16 units" },
            { letter: "B", text: "2 units" },
            { letter: "C", text: "4 units" },
            { letter: "D", text: "8 units" }
          ],
          correct: "C"
        },
        {
          id: "area",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The area of PQRS is 80 square units. What is the area of P′Q′R′S′ after the dilation with scale factor 1/2?",
          choices: [
            { letter: "A", text: "40 square units" },
            { letter: "B", text: "80 square units" },
            { letter: "C", text: "320 square units" },
            { letter: "D", text: "20 square units" }
          ],
          correct: "D"
        },
        {
          id: "preserved",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "After the dilation with scale factor 1/2, how does P′Q′R′S′ compare with PQRS?",
          choices: [
            { letter: "A", text: "Same side lengths, same angle measures" },
            { letter: "B", text: "Same angle measures, sides half as long" },
            { letter: "C", text: "Same side lengths, angles half as large" },
            { letter: "D", text: "Angles and sides both half as large" }
          ],
          correct: "B"
        },
        {
          id: "scale-factor",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A different dilation centered at the origin maps P(−4, 6) to (−10, 15). What is its scale factor?",
          choices: [
            { letter: "A", text: "0.4" },
            { letter: "B", text: "6" },
            { letter: "C", text: "2.5" },
            { letter: "D", text: "9" }
          ],
          correct: "C"
        },
        {
          id: "then-translate",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The designer dilates PQRS by scale factor 1/2 about the origin, then translates the image 3 units right. Where does S end up?",
          choices: [
            { letter: "A", text: "(0, −1)" },
            { letter: "B", text: "(−1.5, −1)" },
            { letter: "C", text: "(−3, −1)" },
            { letter: "D", text: "(−3, 2)" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt3-sprite",
      family: "GEO",
      title: "The Game Sprite",
      kind: "Transformations · G.RLT.3",
      blurb: "A flag-shaped sprite turns, flips and slides across the screen.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Coordinate grid with triangle JKL at J (-5, 1), K (-2, 1), L (-5, 3), and triangle J'K'L' at J' (1, 5), K' (1, 2), L' (3, 5)\">" +
        "<line class=\"gr\" x1=\"52\" y1=\"10\" x2=\"52\" y2=\"136\"/><line class=\"gr\" x1=\"70\" y1=\"10\" x2=\"70\" y2=\"136\"/>" +
        "<line class=\"gr\" x1=\"88\" y1=\"10\" x2=\"88\" y2=\"136\"/><line class=\"gr\" x1=\"106\" y1=\"10\" x2=\"106\" y2=\"136\"/>" +
        "<line class=\"gr\" x1=\"124\" y1=\"10\" x2=\"124\" y2=\"136\"/><line class=\"gr\" x1=\"142\" y1=\"10\" x2=\"142\" y2=\"136\"/>" +
        "<line class=\"gr\" x1=\"178\" y1=\"10\" x2=\"178\" y2=\"136\"/><line class=\"gr\" x1=\"196\" y1=\"10\" x2=\"196\" y2=\"136\"/>" +
        "<line class=\"gr\" x1=\"214\" y1=\"10\" x2=\"214\" y2=\"136\"/><line class=\"gr\" x1=\"232\" y1=\"10\" x2=\"232\" y2=\"136\"/>" +
        "<line class=\"gr\" x1=\"250\" y1=\"10\" x2=\"250\" y2=\"136\"/><line class=\"gr\" x1=\"268\" y1=\"10\" x2=\"268\" y2=\"136\"/>" +
        "<line class=\"gr\" x1=\"52\" y1=\"136\" x2=\"268\" y2=\"136\"/><line class=\"gr\" x1=\"52\" y1=\"100\" x2=\"268\" y2=\"100\"/>" +
        "<line class=\"gr\" x1=\"52\" y1=\"82\" x2=\"268\" y2=\"82\"/><line class=\"gr\" x1=\"52\" y1=\"64\" x2=\"268\" y2=\"64\"/>" +
        "<line class=\"gr\" x1=\"52\" y1=\"46\" x2=\"268\" y2=\"46\"/><line class=\"gr\" x1=\"52\" y1=\"28\" x2=\"268\" y2=\"28\"/>" +
        "<line class=\"gr\" x1=\"52\" y1=\"10\" x2=\"268\" y2=\"10\"/><line class=\"ax\" x1=\"52\" y1=\"118\" x2=\"268\" y2=\"118\"/>" +
        "<line class=\"ax\" x1=\"160\" y1=\"136\" x2=\"160\" y2=\"10\"/><text class=\"sm\" x=\"88\" y=\"131\" text-anchor=\"middle\">−4</text>" +
        "<text class=\"sm\" x=\"124\" y=\"131\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"196\" y=\"131\" text-anchor=\"middle\">2</text>" +
        "<text class=\"sm\" x=\"232\" y=\"131\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"156\" y=\"86\" text-anchor=\"end\">2</text>" +
        "<text class=\"sm\" x=\"156\" y=\"50\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"272\" y=\"122\">x</text>" +
        "<text class=\"sm\" x=\"155\" y=\"20\" text-anchor=\"end\">y</text><polygon class=\"sh2\" points=\"70,100 124,100 70,64\"/>" +
        "<polygon class=\"sh\" points=\"178,28 178,82 214,28\"/><circle class=\"dt\" cx=\"70\" cy=\"100\" r=\"3\"/><circle class=\"dt\" cx=\"124\" cy=\"100\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"70\" cy=\"64\" r=\"3\"/><circle class=\"dt\" cx=\"178\" cy=\"28\" r=\"3\"/><circle class=\"dt\" cx=\"178\" cy=\"82\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"214\" cy=\"28\" r=\"3\"/><text x=\"57\" y=\"115\">J</text><text x=\"126\" y=\"115\">K</text><text x=\"56\" y=\"61\">L</text>" +
        "<text x=\"172\" y=\"21\">J′</text><text x=\"183\" y=\"96\">K′</text><text x=\"219\" y=\"26\">L′</text></svg></figure>" +
        "<p class=\"geo-given\">In a video game, a flag, <strong>△JKL</strong>, with J(−5, 1), K(−2, 1) and L(−5, 3), moves to <strong>△J′K′L′</strong>, with J′(1, 5), K′(1, 2) and L′(3, 5).</p>",
      claims: [
        {
          id: "single",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which single transformation maps △JKL to △J′K′L′?",
          choices: [
            { letter: "A", text: "Rotation of 90° counterclockwise about the origin" },
            { letter: "B", text: "Reflection over the line y = x" },
            { letter: "C", text: "Rotation of 180° about the origin" },
            { letter: "D", text: "Rotation of 90° clockwise about the origin" }
          ],
          correct: "D"
        },
        {
          id: "composition",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which composition also maps △JKL to △J′K′L′?",
          choices: [
            { letter: "A", text: "Reflect over the x-axis, then over the line y = x" },
            { letter: "B", text: "Reflect over the line y = x, then over the x-axis" },
            { letter: "C", text: "Reflect over the y-axis, then over the x-axis" },
            { letter: "D", text: "Reflect over the line y = x, then over the y-axis" }
          ],
          correct: "B"
        },
        {
          id: "same-as-270",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A rotation of 270° counterclockwise about the origin has the same effect as which rotation about the origin?",
          choices: [
            { letter: "A", text: "90° clockwise" },
            { letter: "B", text: "90° counterclockwise" },
            { letter: "C", text: "180°" },
            { letter: "D", text: "270° clockwise" }
          ],
          correct: "A"
        },
        {
          id: "reflect-y2",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Where does L(−5, 3) go after a reflection over the line y = 2?",
          choices: [
            { letter: "A", text: "(−5, −3)" },
            { letter: "B", text: "(9, 3)" },
            { letter: "C", text: "(−5, 1)" },
            { letter: "D", text: "(−5, −1)" }
          ],
          correct: "C"
        },
        {
          id: "reflect-then-slide",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "△JKL is reflected over the line x = −1 and then translated 4 units down. What is the image of K?",
          choices: [
            { letter: "A", text: "(2, −3)" },
            { letter: "B", text: "(0, −3)" },
            { letter: "C", text: "(0, 1)" },
            { letter: "D", text: "(0, 5)" }
          ],
          correct: "B"
        },
        {
          id: "power-up",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "For a power-up, △J′K′L′ is then dilated by scale factor 2 about the origin. How does the new flag compare with △JKL?",
          choices: [
            { letter: "A", text: "It is congruent to △JKL." },
            { letter: "B", text: "Angles doubled; sides doubled" },
            { letter: "C", text: "Area doubled; angles unchanged" },
            { letter: "D", text: "Sides doubled; angles unchanged" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
