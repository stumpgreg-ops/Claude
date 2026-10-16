/* SOL Labyrinth: the Virginia 2024 English Standards of Learning, grades 9-11 reading strands (v5.17).
   For each standard (9.RL.1.A ...): its official text (English Standards of Learning for Virginia Public Schools, 2024)
   and its SKILLS: a standard with more than one action verb is split into one skill per verb, and a standard that
   asks students to analyze named devices or elements is split into identifying them and analyzing their effect.
   Each skill is LOTS (lower-order: Bloom's remember / understand / apply: identify, recognize, describe, explain,
   interpret, use) or HOTS (higher-order: analyze / evaluate: analyze, compare, distinguish, differentiate, examine,
   evaluate, critique, relate). Questions name their skill (claim.sub = "9.RL.2.A.2"); the progress code carries results
   per skill (js/progress-code.js STDS) and the teacher's standards report groups them under their standard.
   Built from the 2024 SOL document; to adjust a skill or its LOTS/HOTS level, edit it here and rebuild. */
(function (root) {
  "use strict";
  var STANDARDS = {
 "9.DSR.A": {
  "text": "Read a variety of grade-level complex text with accuracy, automaticity, appropriate rate, and meaningful expression in successive readings to support comprehension. Monitor while reading to confirm or self-correct word recognition and understanding, as necessary (Reading Fluency, K-12).",
  "skills": [
   {
    "id": "9.DSR.A.1",
    "text": "Read grade-level complex text with accuracy, appropriate rate, and meaningful expression (fluency)",
    "level": "LOTS"
   },
   {
    "id": "9.DSR.A.2",
    "text": "Monitor while reading to confirm or self-correct word recognition and understanding",
    "level": "LOTS"
   }
  ]
 },
 "9.DSR.B": {
  "text": "Proficiently read and comprehend a variety of literary and informational texts that exhibit complexity at the lower range of the grades 9-10 band. (See the Quantitative and Qualitative Analysis charts for determining complexity in the Appendix.) (Text Complexity, 2-12).",
  "skills": [
   {
    "id": "9.DSR.B.1",
    "text": "Read and comprehend grade-level complex literary and informational texts",
    "level": "LOTS"
   }
  ]
 },
 "9.DSR.C": {
  "text": "When responding to text through discussions and/or writing, draw several pieces of evidence from grade-level complex texts to support claims, conclusions, and inferences, including quoting or paraphrasing from texts accurately and tracing where relevant evidence is located (Textual Evidence, K-12).",
  "skills": [
   {
    "id": "9.DSR.C.1",
    "text": "Draw several pieces of evidence from a text to support claims, conclusions, and inferences",
    "level": "HOTS"
   },
   {
    "id": "9.DSR.C.2",
    "text": "Quote or paraphrase from a text accurately",
    "level": "LOTS"
   },
   {
    "id": "9.DSR.C.3",
    "text": "Trace where relevant evidence is located in a text",
    "level": "LOTS"
   }
  ]
 },
 "9.DSR.D": {
  "text": "Regularly engage in reading a series of conceptually related texts organized around topics of study to build knowledge and vocabulary (These texts should be at a range of complexity levels so students can read the texts independently, with peers, or with modest support.). Use this background knowledge as context for new learning (Deep Reading on Topics to Build Knowledge and Vocabulary, K-12).",
  "skills": [
   {
    "id": "9.DSR.D.1",
    "text": "Read a series of conceptually related texts to build knowledge and vocabulary",
    "level": "LOTS"
   },
   {
    "id": "9.DSR.D.2",
    "text": "Use background knowledge from related texts as context for new learning (connect ideas across texts)",
    "level": "HOTS"
   }
  ]
 },
 "9.DSR.E": {
  "text": "Use reading strategies as needed to aid and monitor comprehension when encountering challenging sections of text. These sense-making strategies attend to text structure, common organizational structures, summarizing, asking questions of the text, and others (Reading Strategies, 3-12).",
  "skills": [
   {
    "id": "9.DSR.E.1",
    "text": "Use reading strategies (text structure, summarizing, asking questions) to aid and monitor comprehension",
    "level": "LOTS"
   }
  ]
 },
 "9.RV.1.A": {
  "text": "Develop and accurately use general academic and content-specific vocabulary through reading, discussing, and writing about grade-level texts and topics.",
  "skills": [
   {
    "id": "9.RV.1.A.1",
    "text": "Develop general academic and content-specific vocabulary",
    "level": "LOTS"
   },
   {
    "id": "9.RV.1.A.2",
    "text": "Accurately use general academic and content-specific vocabulary",
    "level": "LOTS"
   }
  ]
 },
 "9.RV.1.B": {
  "text": "Use context and sentence structure to clarify the literal and figurative meanings of words and phrases.",
  "skills": [
   {
    "id": "9.RV.1.B.1",
    "text": "Use context and sentence structure to clarify the literal and figurative meanings of words and phrases",
    "level": "LOTS"
   }
  ]
 },
 "9.RV.1.C": {
  "text": "Use structural analysis of roots, affixes, and etymology to explain the meanings of unfamiliar and complex words.",
  "skills": [
   {
    "id": "9.RV.1.C.1",
    "text": "Use roots, affixes, and etymology to explain the meanings of unfamiliar and complex words",
    "level": "LOTS"
   }
  ]
 },
 "9.RV.1.D": {
  "text": "Discriminate between the connotative and denotative meanings and interpret the connotation(s).",
  "skills": [
   {
    "id": "9.RV.1.D.1",
    "text": "Discriminate between connotative and denotative meanings",
    "level": "HOTS"
   },
   {
    "id": "9.RV.1.D.2",
    "text": "Interpret the connotation of a word or phrase",
    "level": "LOTS"
   }
  ]
 },
 "9.RV.1.E": {
  "text": "Identify and explain idiomatic language in context.",
  "skills": [
   {
    "id": "9.RV.1.E.1",
    "text": "Identify idiomatic language",
    "level": "LOTS"
   },
   {
    "id": "9.RV.1.E.2",
    "text": "Explain the meaning of idiomatic language in context",
    "level": "LOTS"
   }
  ]
 },
 "9.RV.1.F": {
  "text": "Explain the meaning of literary and classical allusions and figurative language in context and analyze their roles in texts.",
  "skills": [
   {
    "id": "9.RV.1.F.1",
    "text": "Explain the meaning of literary and classical allusions and figurative language in context",
    "level": "LOTS"
   },
   {
    "id": "9.RV.1.F.2",
    "text": "Analyze the roles of allusions and figurative language in a text",
    "level": "HOTS"
   }
  ]
 },
 "9.RV.1.G": {
  "text": "Use newly learned words and phrases in multiple contexts, including students’ discussions and speaking and writing activities.",
  "skills": [
   {
    "id": "9.RV.1.G.1",
    "text": "Use newly learned words and phrases in multiple contexts",
    "level": "LOTS"
   }
  ]
 },
 "9.RL.1.A": {
  "text": "Explain stated or implied themes, analyzing their development over the course of texts, and the relationship of characters, setting, and plot to those themes.",
  "skills": [
   {
    "id": "9.RL.1.A.1",
    "text": "Explain stated or implied themes",
    "level": "LOTS"
   },
   {
    "id": "9.RL.1.A.2",
    "text": "Analyze the development of themes over a text and the relationship of characters, setting, and plot to them",
    "level": "HOTS"
   }
  ]
 },
 "9.RL.1.B": {
  "text": "Examine and analyze the characteristics that distinguish literary forms (e.g., fiction, nonfiction, poetry, prose, novel, drama, essay, speech) and analyze how the differing structure of each literary form contributes to its meaning and style.",
  "skills": [
   {
    "id": "9.RL.1.B.1",
    "text": "Examine the characteristics that distinguish literary forms (e.g., fiction, nonfiction, poetry, drama, essay, speech)",
    "level": "HOTS"
   },
   {
    "id": "9.RL.1.B.2",
    "text": "Analyze how the structure of a literary form contributes to its meaning and style",
    "level": "HOTS"
   }
  ]
 },
 "9.RL.1.C": {
  "text": "Differentiate between character types in literary texts (e.g., dynamic/round character, static/flat character, and stereotype) and their impact on the theme.",
  "skills": [
   {
    "id": "9.RL.1.C.1",
    "text": "Differentiate between character types (dynamic/round, static/flat, stereotype) and their impact on the theme",
    "level": "HOTS"
   }
  ]
 },
 "9.RL.1.D": {
  "text": "Identify and describe how dramatic conventions (e.g., soliloquy, aside, narration, direct address to the audience) contribute to the theme and effect of plays from various cultures.",
  "skills": [
   {
    "id": "9.RL.1.D.1",
    "text": "Identify dramatic conventions (e.g., soliloquy, aside, narration, direct address)",
    "level": "LOTS"
   },
   {
    "id": "9.RL.1.D.2",
    "text": "Describe how dramatic conventions contribute to the theme and effect of a play",
    "level": "LOTS"
   }
  ]
 },
 "9.RL.2.A": {
  "text": "Analyze the use of rhyme, rhythm, sound, imagery, and other literary devices in poetry to convey a message and elicit a reader’s emotions.",
  "skills": [
   {
    "id": "9.RL.2.A.1",
    "text": "Identify rhyme, rhythm, sound, imagery, and other literary devices in poetry",
    "level": "LOTS"
   },
   {
    "id": "9.RL.2.A.2",
    "text": "Analyze how poetic devices convey a message and elicit a reader's emotions",
    "level": "HOTS"
   }
  ]
 },
 "9.RL.2.B": {
  "text": "Explain how an author’s specific word choices, syntax, tone, and voice shape the meaning of the text.",
  "skills": [
   {
    "id": "9.RL.2.B.1",
    "text": "Identify an author's tone and voice",
    "level": "LOTS"
   },
   {
    "id": "9.RL.2.B.2",
    "text": "Explain how word choice, syntax, tone, and voice shape the meaning of a text",
    "level": "LOTS"
   }
  ]
 },
 "9.RL.2.C": {
  "text": "Explain the point of view and distinguish between what is implied or intended because of the use of hyperbole, irony, sarcasm, and understatement.",
  "skills": [
   {
    "id": "9.RL.2.C.1",
    "text": "Explain the point of view of a text",
    "level": "LOTS"
   },
   {
    "id": "9.RL.2.C.2",
    "text": "Distinguish what is implied or intended through hyperbole, irony, sarcasm, and understatement",
    "level": "HOTS"
   }
  ]
 },
 "9.RL.3.A": {
  "text": "Describe how the historical or social function of a text depends on its context (e.g., cultural, situational, historical, geographical).",
  "skills": [
   {
    "id": "9.RL.3.A.1",
    "text": "Describe how the historical or social function of a text depends on its context",
    "level": "LOTS"
   }
  ]
 },
 "9.RL.3.B": {
  "text": "Explain the relationships between and among particular literary elements of a story or play, including how the setting shapes the plot and characters.",
  "skills": [
   {
    "id": "9.RL.3.B.1",
    "text": "Explain the relationships among literary elements, including how the setting shapes the plot and characters",
    "level": "LOTS"
   }
  ]
 },
 "9.RI.1.A": {
  "text": "Analyze the development of main ideas over the course of texts, including how they emerge, are shaped, and are refined by specific details to help reveal the author’s intended purpose for writing.",
  "skills": [
   {
    "id": "9.RI.1.A.1",
    "text": "Identify the main idea of a text",
    "level": "LOTS"
   },
   {
    "id": "9.RI.1.A.2",
    "text": "Analyze how main ideas emerge and are shaped and refined by details to reveal the author's purpose",
    "level": "HOTS"
   }
  ]
 },
 "9.RI.1.B": {
  "text": "Explain the purpose and interpret the use of data and information in maps, charts, graphs, timelines, tables, and diagrams in informational, historical, scientific, or technical texts.",
  "skills": [
   {
    "id": "9.RI.1.B.1",
    "text": "Explain the purpose of maps, charts, graphs, timelines, tables, and diagrams",
    "level": "LOTS"
   },
   {
    "id": "9.RI.1.B.2",
    "text": "Interpret data and information in maps, charts, graphs, timelines, tables, and diagrams",
    "level": "LOTS"
   }
  ]
 },
 "9.RI.1.C": {
  "text": "Distinguish among, facts, reasoned judgments, and/or speculation in texts to determine where a position/argument is to be confirmed, disproved, or modified.",
  "skills": [
   {
    "id": "9.RI.1.C.1",
    "text": "Distinguish among facts, reasoned judgments, and speculation",
    "level": "HOTS"
   },
   {
    "id": "9.RI.1.C.2",
    "text": "Determine where a position or argument is confirmed, disproved, or modified",
    "level": "HOTS"
   }
  ]
 },
 "9.RI.2.A": {
  "text": "Compare characteristics of expository, technical, and persuasive texts, including their differences in purpose, format, and text structure.",
  "skills": [
   {
    "id": "9.RI.2.A.1",
    "text": "Compare the characteristics of expository, technical, and persuasive texts (purpose, format, structure)",
    "level": "HOTS"
   }
  ]
 },
 "9.RI.2.B": {
  "text": "Analyze an author’s word choice and use of rhetorical devices to persuade or convince an audience.",
  "skills": [
   {
    "id": "9.RI.2.B.1",
    "text": "Identify an author's persuasive word choice and rhetorical devices",
    "level": "LOTS"
   },
   {
    "id": "9.RI.2.B.2",
    "text": "Analyze how word choice and rhetorical devices persuade or convince an audience",
    "level": "HOTS"
   }
  ]
 },
 "9.RI.2.C": {
  "text": "Analyze how authors use rhetorical devices to create ethos, logos, and pathos and impact the reader.",
  "skills": [
   {
    "id": "9.RI.2.C.1",
    "text": "Identify appeals to ethos, logos, and pathos",
    "level": "LOTS"
   },
   {
    "id": "9.RI.2.C.2",
    "text": "Analyze how rhetorical devices create ethos, logos, and pathos and impact the reader",
    "level": "HOTS"
   }
  ]
 },
 "9.RI.3.A": {
  "text": "Compare the perspectives and viewpoints of two or more authors regarding their treatment of the same or similar topics, including the details they include and emphasize in their respective accounts as well as the impact of each author’s qualifications.",
  "skills": [
   {
    "id": "9.RI.3.A.1",
    "text": "Compare the perspectives and viewpoints of two or more authors on the same or similar topics",
    "level": "HOTS"
   }
  ]
 },
 "9.RI.3.B": {
  "text": "Evaluate the clarity and accuracy of information found in informational texts, corroborating or challenging conclusions with other sources of information.",
  "skills": [
   {
    "id": "9.RI.3.B.1",
    "text": "Evaluate the clarity and accuracy of information in informational texts",
    "level": "HOTS"
   },
   {
    "id": "9.RI.3.B.2",
    "text": "Corroborate or challenge conclusions with other sources of information",
    "level": "HOTS"
   }
  ]
 },
 "10.DSR.A": {
  "text": "Read a variety of grade-level complex text with accuracy, automaticity, appropriate rate, and meaningful expression in successive readings to support comprehension. Monitor while reading to confirm or self-correct word recognition and understanding, as necessary (Reading Fluency, K-12).",
  "skills": [
   {
    "id": "10.DSR.A.1",
    "text": "Read grade-level complex text with accuracy, appropriate rate, and meaningful expression (fluency)",
    "level": "LOTS"
   },
   {
    "id": "10.DSR.A.2",
    "text": "Monitor while reading to confirm or self-correct word recognition and understanding",
    "level": "LOTS"
   }
  ]
 },
 "10.DSR.B": {
  "text": "Proficiently read and comprehend a variety of literary and informational texts that exhibit complexity at the higher range of the grades 9-10 band (See the Quantitative and Qualitative Analysis charts for determining complexity in the Appendix.) (Text Complexity, 2-12).",
  "skills": [
   {
    "id": "10.DSR.B.1",
    "text": "Read and comprehend grade-level complex literary and informational texts",
    "level": "LOTS"
   }
  ]
 },
 "10.DSR.C": {
  "text": "When responding to text through discussions and/or writing, draw several pieces of evidence from grade-level complex texts to support claims, conclusions, and inferences, including quoting or paraphrasing from texts accurately and tracing where relevant evidence is located (Textual Evidence, K-12).",
  "skills": [
   {
    "id": "10.DSR.C.1",
    "text": "Draw several pieces of evidence from a text to support claims, conclusions, and inferences",
    "level": "HOTS"
   },
   {
    "id": "10.DSR.C.2",
    "text": "Quote or paraphrase from a text accurately",
    "level": "LOTS"
   },
   {
    "id": "10.DSR.C.3",
    "text": "Trace where relevant evidence is located in a text",
    "level": "LOTS"
   }
  ]
 },
 "10.DSR.D": {
  "text": "Regularly engage in reading a series of conceptually related texts organized around topics of study to build knowledge and vocabulary (These texts should be at a range of complexity levels so students can read the texts independently, with peers, or with modest support.). Use this background knowledge as context for new learning (Deep Reading on Topics to Build Knowledge and Vocabulary, K-12).",
  "skills": [
   {
    "id": "10.DSR.D.1",
    "text": "Read a series of conceptually related texts to build knowledge and vocabulary",
    "level": "LOTS"
   },
   {
    "id": "10.DSR.D.2",
    "text": "Use background knowledge from related texts as context for new learning (connect ideas across texts)",
    "level": "HOTS"
   }
  ]
 },
 "10.DSR.E": {
  "text": "Use reading strategies as needed to aid and monitor comprehension when encountering challenging sections of text. These sense-making strategies attend to text structure, common organizational structures, summarizing, asking questions of the text, and others (Reading Strategies, 3-12).",
  "skills": [
   {
    "id": "10.DSR.E.1",
    "text": "Use reading strategies (text structure, summarizing, asking questions) to aid and monitor comprehension",
    "level": "LOTS"
   }
  ]
 },
 "10.RV.1.A": {
  "text": "Develop and accurately use general academic and content-specific vocabulary through reading, discussing, and writing about grade-level texts and topics.",
  "skills": [
   {
    "id": "10.RV.1.A.1",
    "text": "Develop general academic and content-specific vocabulary",
    "level": "LOTS"
   },
   {
    "id": "10.RV.1.A.2",
    "text": "Accurately use general academic and content-specific vocabulary",
    "level": "LOTS"
   }
  ]
 },
 "10.RV.1.B": {
  "text": "Use context and sentence structure to clarify the literal and figurative meanings of words and phrases.",
  "skills": [
   {
    "id": "10.RV.1.B.1",
    "text": "Use context and sentence structure to clarify the literal and figurative meanings of words and phrases",
    "level": "LOTS"
   }
  ]
 },
 "10.RV.1.C": {
  "text": "Use structural analysis of roots, affixes, and etymology to clarify the meanings of unfamiliar and complex words.",
  "skills": [
   {
    "id": "10.RV.1.C.1",
    "text": "Use roots, affixes, and etymology to clarify the meanings of unfamiliar and complex words",
    "level": "LOTS"
   }
  ]
 },
 "10.RV.1.D": {
  "text": "Discriminate between the connotative and denotative meanings and interpret the connotation(s).",
  "skills": [
   {
    "id": "10.RV.1.D.1",
    "text": "Discriminate between connotative and denotative meanings",
    "level": "HOTS"
   },
   {
    "id": "10.RV.1.D.2",
    "text": "Interpret the connotation of a word or phrase",
    "level": "LOTS"
   }
  ]
 },
 "10.RV.1.E": {
  "text": "Identify and explain idiomatic language in context.",
  "skills": [
   {
    "id": "10.RV.1.E.1",
    "text": "Identify idiomatic language",
    "level": "LOTS"
   },
   {
    "id": "10.RV.1.E.2",
    "text": "Explain the meaning of idiomatic language in context",
    "level": "LOTS"
   }
  ]
 },
 "10.RV.1.F": {
  "text": "Explain the meaning of literary and classical allusions and figurative language in context and analyze their roles in texts.",
  "skills": [
   {
    "id": "10.RV.1.F.1",
    "text": "Explain the meaning of literary and classical allusions and figurative language in context",
    "level": "LOTS"
   },
   {
    "id": "10.RV.1.F.2",
    "text": "Analyze the roles of allusions and figurative language in a text",
    "level": "HOTS"
   }
  ]
 },
 "10.RV.1.G": {
  "text": "Use newly learned words and phrases in multiple contexts, including in students’ discussions and speaking and writing activities.",
  "skills": [
   {
    "id": "10.RV.1.G.1",
    "text": "Use newly learned words and phrases in multiple contexts",
    "level": "LOTS"
   }
  ]
 },
 "10.RL.1.A": {
  "text": "Analyze the development of universal themes (e.g., survival of the fittest, coming of age, power of love) prevalent in world literature (e.g., short stories, poems, plays, novels, and literary nonfiction) of different cultures and eras.",
  "skills": [
   {
    "id": "10.RL.1.A.1",
    "text": "Identify universal themes in world literature",
    "level": "LOTS"
   },
   {
    "id": "10.RL.1.A.2",
    "text": "Analyze the development of universal themes in literature of different cultures and eras",
    "level": "HOTS"
   }
  ]
 },
 "10.RL.1.B": {
  "text": "Analyze how authors structure texts to advance the plot, explaining how each event gives rise to the next or foreshadows a future event.",
  "skills": [
   {
    "id": "10.RL.1.B.1",
    "text": "Analyze how authors structure texts to advance the plot",
    "level": "HOTS"
   },
   {
    "id": "10.RL.1.B.2",
    "text": "Explain how each event gives rise to the next or foreshadows a future event",
    "level": "LOTS"
   }
  ]
 },
 "10.RL.1.C": {
  "text": "Describe the different character roles in literary texts (e.g., foil, tragic, hero) and their impact on the theme.",
  "skills": [
   {
    "id": "10.RL.1.C.1",
    "text": "Describe character roles (e.g., foil, tragic, hero) and their impact on the theme",
    "level": "LOTS"
   }
  ]
 },
 "10.RL.1.D": {
  "text": "Identify and explain how dramatic conventions (e.g., soliloquy, aside, narration, direct address to the audience) contribute to the theme and effect of plays from various cultures.",
  "skills": [
   {
    "id": "10.RL.1.D.1",
    "text": "Identify dramatic conventions (e.g., soliloquy, aside, narration, direct address)",
    "level": "LOTS"
   },
   {
    "id": "10.RL.1.D.2",
    "text": "Explain how dramatic conventions contribute to the theme and effect of a play",
    "level": "LOTS"
   }
  ]
 },
 "10.RL.2.A": {
  "text": "Explain the overall structure of a poem, including how each successive part builds on earlier sections  and how rhyme, rhythm, sound, and imagery convey a message and elicit a reader’s emotions.",
  "skills": [
   {
    "id": "10.RL.2.A.1",
    "text": "Explain the overall structure of a poem and how each part builds on earlier sections",
    "level": "LOTS"
   },
   {
    "id": "10.RL.2.A.2",
    "text": "Identify rhyme, rhythm, sound, and imagery in poetry",
    "level": "LOTS"
   },
   {
    "id": "10.RL.2.A.3",
    "text": "Explain how rhyme, rhythm, sound, and imagery convey a message and elicit a reader's emotions",
    "level": "LOTS"
   }
  ]
 },
 "10.RL.2.B": {
  "text": "Analyze how authors use literary devices and figurative language, including allusion, allegory, and paradox to impact the meaning of the text.",
  "skills": [
   {
    "id": "10.RL.2.B.1",
    "text": "Identify literary devices and figurative language, including allusion, allegory, and paradox",
    "level": "LOTS"
   },
   {
    "id": "10.RL.2.B.2",
    "text": "Analyze how literary devices and figurative language impact the meaning of a text",
    "level": "HOTS"
   }
  ]
 },
 "10.RL.2.C": {
  "text": "Analyze how authors use specific word choices, syntax, tone, and voice to convey the author’s intent and viewpoint.",
  "skills": [
   {
    "id": "10.RL.2.C.1",
    "text": "Identify an author's tone and voice",
    "level": "LOTS"
   },
   {
    "id": "10.RL.2.C.2",
    "text": "Analyze how word choice, syntax, tone, and voice convey the author's intent and viewpoint",
    "level": "HOTS"
   }
  ]
 },
 "10.RL.2.D": {
  "text": "Analyze point of view and distinguish between what is directly stated in a text from what is implied or intended because of the use of satire, irony, sarcasm, and understatement.",
  "skills": [
   {
    "id": "10.RL.2.D.1",
    "text": "Analyze the point of view of a text",
    "level": "HOTS"
   },
   {
    "id": "10.RL.2.D.2",
    "text": "Distinguish what is directly stated from what is implied through satire, irony, sarcasm, and understatement",
    "level": "HOTS"
   }
  ]
 },
 "10.RL.3.A": {
  "text": "Explain and analyze the influence of the historical and cultural context of a text on its form, style, characters, and point of view.",
  "skills": [
   {
    "id": "10.RL.3.A.1",
    "text": "Explain the influence of historical and cultural context on a text's form, style, characters, and point of view",
    "level": "LOTS"
   },
   {
    "id": "10.RL.3.A.2",
    "text": "Analyze the influence of historical and cultural context on a text's form, style, characters, and point of view",
    "level": "HOTS"
   }
  ]
 },
 "10.RL.3.B": {
  "text": "Compare and contrast character development, dramatic plot structure, and conventions in a play to character development, narrative structure, and conventions in other literary forms.",
  "skills": [
   {
    "id": "10.RL.3.B.1",
    "text": "Compare and contrast character development, plot structure, and conventions in a play and in other literary forms",
    "level": "HOTS"
   }
  ]
 },
 "10.RL.3.C": {
  "text": "Analyze the similarities and differences represented in the literature of different cultures and eras.",
  "skills": [
   {
    "id": "10.RL.3.C.1",
    "text": "Analyze the similarities and differences in the literature of different cultures and eras",
    "level": "HOTS"
   }
  ]
 },
 "10.RI.1.A": {
  "text": "Explain how authors organize an analysis or series of ideas or events, including the order in which points are made, how they are introduced and developed, and the connections that are drawn among them.",
  "skills": [
   {
    "id": "10.RI.1.A.1",
    "text": "Explain how authors organize an analysis or series of ideas or events, how points are introduced and developed, and how they connect",
    "level": "LOTS"
   }
  ]
 },
 "10.RI.1.B": {
  "text": "Compare characteristics of the information from informational, historical, scientific, and technical texts and interpret the use of data and information in maps, charts, graphs, timelines, tables, and diagrams.",
  "skills": [
   {
    "id": "10.RI.1.B.1",
    "text": "Compare characteristics of the information in informational, historical, scientific, and technical texts",
    "level": "HOTS"
   },
   {
    "id": "10.RI.1.B.2",
    "text": "Interpret data and information in maps, charts, graphs, timelines, tables, and diagrams",
    "level": "LOTS"
   }
  ]
 },
 "10.RI.1.C": {
  "text": "Evaluate the argument and specific claims in texts, examining whether the reasoning is valid, the evidence is relevant, and whether there are any false or unsupported statements.",
  "skills": [
   {
    "id": "10.RI.1.C.1",
    "text": "Evaluate the argument and specific claims in a text",
    "level": "HOTS"
   },
   {
    "id": "10.RI.1.C.2",
    "text": "Examine whether the reasoning is valid, the evidence is relevant, and any statements are false or unsupported",
    "level": "HOTS"
   }
  ]
 },
 "10.RI.2.A": {
  "text": "Analyze how authors use structure to explain relationships among concepts in a text, including how key sentences, paragraphs, and sections of texts contribute to the whole.",
  "skills": [
   {
    "id": "10.RI.2.A.1",
    "text": "Identify how a text is structured",
    "level": "LOTS"
   },
   {
    "id": "10.RI.2.A.2",
    "text": "Analyze how key sentences, paragraphs, and sections explain relationships among concepts and contribute to the whole",
    "level": "HOTS"
   }
  ]
 },
 "10.RI.2.B": {
  "text": "Analyze key terms (e.g., words and phrases, technical terminology) and ideas of historical, scientific, and technical texts to clarify the relationships and understandings among key concepts.",
  "skills": [
   {
    "id": "10.RI.2.B.1",
    "text": "Determine the meaning of key terms and technical terminology",
    "level": "LOTS"
   },
   {
    "id": "10.RI.2.B.2",
    "text": "Analyze key terms and ideas to clarify the relationships among key concepts",
    "level": "HOTS"
   }
  ]
 },
 "10.RI.2.C": {
  "text": "Analyze the author’s purpose and impact of literary techniques such as hyperbole, analogy, and paradox as they appear in texts.",
  "skills": [
   {
    "id": "10.RI.2.C.1",
    "text": "Identify literary techniques such as hyperbole, analogy, and paradox in informational texts",
    "level": "LOTS"
   },
   {
    "id": "10.RI.2.C.2",
    "text": "Analyze the author's purpose and the impact of these techniques",
    "level": "HOTS"
   }
  ]
 },
 "10.RI.3.A": {
  "text": "Evaluate how different authors write about the same topic and shape their presentations or viewpoints of key information using facts, opinions, and reasoning.",
  "skills": [
   {
    "id": "10.RI.3.A.1",
    "text": "Evaluate how different authors write about the same topic and shape their presentations using facts, opinions, and reasoning",
    "level": "HOTS"
   }
  ]
 },
 "10.RI.3.B": {
  "text": "Analyze multiple texts addressing the same topic to determine how authors reach similar or different conclusions.",
  "skills": [
   {
    "id": "10.RI.3.B.1",
    "text": "Analyze multiple texts on the same topic to determine how authors reach similar or different conclusions",
    "level": "HOTS"
   }
  ]
 },
 "11.DSR.A": {
  "text": "Read a variety of grade-level complex texts with accuracy, automaticity, appropriate rate, and meaningful expression in successive readings to support comprehension. Monitor while reading to confirm or self-correct word recognition and understanding, as necessary (Reading Fluency, K-12).",
  "skills": [
   {
    "id": "11.DSR.A.1",
    "text": "Read grade-level complex text with accuracy, appropriate rate, and meaningful expression (fluency)",
    "level": "LOTS"
   },
   {
    "id": "11.DSR.A.2",
    "text": "Monitor while reading to confirm or self-correct word recognition and understanding",
    "level": "LOTS"
   }
  ]
 },
 "11.DSR.B": {
  "text": "Proficiently read and comprehend a variety of literary and informational texts that exhibit complexity at the lower range of the grades 11-12 band to generate and respond logically to literal, inferential, evaluative, synthesizing, and critical thinking questions (See the Quantitative and Qualitative Analysis charts for determining complexity in the Appendix.) (Text Complexity, 2-12).",
  "skills": [
   {
    "id": "11.DSR.B.1",
    "text": "Read and comprehend grade-level complex literary and informational texts",
    "level": "LOTS"
   }
  ]
 },
 "11.DSR.C": {
  "text": "When responding to text through discussions and/or writing, draw several pieces of evidence from grade-level complex texts to support claims, conclusions, and inferences, including quoting or paraphrasing from texts accurately and tracing where relevant evidence is located (Textual Evidence, K-12).",
  "skills": [
   {
    "id": "11.DSR.C.1",
    "text": "Draw several pieces of evidence from a text to support claims, conclusions, and inferences",
    "level": "HOTS"
   },
   {
    "id": "11.DSR.C.2",
    "text": "Quote or paraphrase from a text accurately",
    "level": "LOTS"
   },
   {
    "id": "11.DSR.C.3",
    "text": "Trace where relevant evidence is located in a text",
    "level": "LOTS"
   }
  ]
 },
 "11.DSR.D": {
  "text": "Regularly engage in reading a series of conceptually related texts organized around topics of study to build knowledge and vocabulary (These texts should be at a range of complexity levels so students can read the texts independently, with peers, or with modest support.). Use this background knowledge as context for new learning (Deep Reading on Topics to Build Knowledge and Vocabulary, K-12).",
  "skills": [
   {
    "id": "11.DSR.D.1",
    "text": "Read a series of conceptually related texts to build knowledge and vocabulary",
    "level": "LOTS"
   },
   {
    "id": "11.DSR.D.2",
    "text": "Use background knowledge from related texts as context for new learning (connect ideas across texts)",
    "level": "HOTS"
   }
  ]
 },
 "11.DSR.E": {
  "text": "Use reading strategies as needed to aid and monitor comprehension when encountering challenging sections of text. These sense-making strategies attend to text structure, common organizational structures, summarizing, asking questions of the text, and others (Reading Strategies, 3-12).",
  "skills": [
   {
    "id": "11.DSR.E.1",
    "text": "Use reading strategies (text structure, summarizing, asking questions) to aid and monitor comprehension",
    "level": "LOTS"
   }
  ]
 },
 "11.RV.1.A": {
  "text": "Develop and accurately use general academic and content-specific vocabulary through reading, discussing, and writing about grade-level texts and topics.",
  "skills": [
   {
    "id": "11.RV.1.A.1",
    "text": "Develop general academic and content-specific vocabulary",
    "level": "LOTS"
   },
   {
    "id": "11.RV.1.A.2",
    "text": "Accurately use general academic and content-specific vocabulary",
    "level": "LOTS"
   }
  ]
 },
 "11.RV.1.B": {
  "text": "Use context and sentence structure to clarify the meanings of words and phrases.",
  "skills": [
   {
    "id": "11.RV.1.B.1",
    "text": "Use context and sentence structure to clarify the meanings of words and phrases",
    "level": "LOTS"
   }
  ]
 },
 "11.RV.1.C": {
  "text": "Use structural analysis of roots, affixes, and etymology to understand the meanings of unfamiliar and complex words.",
  "skills": [
   {
    "id": "11.RV.1.C.1",
    "text": "Use roots, affixes, and etymology to understand the meanings of unfamiliar and complex words",
    "level": "LOTS"
   }
  ]
 },
 "11.RV.1.D": {
  "text": "Analyze the nuances in the meaning of words with similar denotations (e.g., clever, cunning, brainy).",
  "skills": [
   {
    "id": "11.RV.1.D.1",
    "text": "Analyze the nuances in the meaning of words with similar denotations",
    "level": "HOTS"
   }
  ]
 },
 "11.RV.1.E": {
  "text": "Explain and analyze idiomatic language in context.",
  "skills": [
   {
    "id": "11.RV.1.E.1",
    "text": "Explain idiomatic language in context",
    "level": "LOTS"
   },
   {
    "id": "11.RV.1.E.2",
    "text": "Analyze idiomatic language in context",
    "level": "HOTS"
   }
  ]
 },
 "11.RV.1.F": {
  "text": "Explain the meaning of figurative language and literary and classical allusions and analyze their role in texts.",
  "skills": [
   {
    "id": "11.RV.1.F.1",
    "text": "Explain the meaning of figurative language and literary and classical allusions",
    "level": "LOTS"
   },
   {
    "id": "11.RV.1.F.2",
    "text": "Analyze the role of figurative language and allusions in a text",
    "level": "HOTS"
   }
  ]
 },
 "11.RV.1.G": {
  "text": "Use newly learned words and phrases in multiple contexts, including in students’ discussions and speaking and writing activities.",
  "skills": [
   {
    "id": "11.RV.1.G.1",
    "text": "Use newly learned words and phrases in multiple contexts",
    "level": "LOTS"
   }
  ]
 },
 "11.RL.1.A": {
  "text": "Analyze the development of universal themes (e.g., loss of innocence, coming of age, relationship with nature) prevalent in American literature (e.g., short stories, poems, plays, novels, essays, and literary nonfiction) of different eras.",
  "skills": [
   {
    "id": "11.RL.1.A.1",
    "text": "Identify universal themes in American literature",
    "level": "LOTS"
   },
   {
    "id": "11.RL.1.A.2",
    "text": "Analyze the development of universal themes in American literature of different eras",
    "level": "HOTS"
   }
  ]
 },
 "11.RL.1.B": {
  "text": "Describe how a particular sentence, chapter, scene, or stanza fits into the overall structure of a text and contributes to the development of the setting and plot.",
  "skills": [
   {
    "id": "11.RL.1.B.1",
    "text": "Describe how a sentence, chapter, scene, or stanza fits into the overall structure and develops the setting and plot",
    "level": "LOTS"
   }
  ]
 },
 "11.RL.1.C": {
  "text": "Analyze how characters are revealed through particular lines of dialogue or events.",
  "skills": [
   {
    "id": "11.RL.1.C.1",
    "text": "Identify character traits revealed in a text",
    "level": "LOTS"
   },
   {
    "id": "11.RL.1.C.2",
    "text": "Analyze how characters are revealed through particular lines of dialogue or events",
    "level": "HOTS"
   }
  ]
 },
 "11.RL.1.D": {
  "text": "Analyze and evaluate how dramatic conventions (e.g., soliloquy, aside, narration, direct address to the audience) contribute to the theme and effect of plays from various cultures.",
  "skills": [
   {
    "id": "11.RL.1.D.1",
    "text": "Analyze how dramatic conventions contribute to the theme and effect of a play",
    "level": "HOTS"
   },
   {
    "id": "11.RL.1.D.2",
    "text": "Evaluate how dramatic conventions contribute to the theme and effect of a play",
    "level": "HOTS"
   }
  ]
 },
 "11.RL.2.A": {
  "text": "Interpret and analyze how the sound and imagery of poetry support the subject, mood, form, and theme and appeal to the reader’s senses.",
  "skills": [
   {
    "id": "11.RL.2.A.1",
    "text": "Interpret the sound and imagery of poetry",
    "level": "LOTS"
   },
   {
    "id": "11.RL.2.A.2",
    "text": "Analyze how sound and imagery support the subject, mood, form, and theme and appeal to the senses",
    "level": "HOTS"
   }
  ]
 },
 "11.RL.2.B": {
  "text": "Evaluate how authors use specific word choices, syntax, tone, and voice to convey the author’s intent and viewpoint.",
  "skills": [
   {
    "id": "11.RL.2.B.1",
    "text": "Identify an author's tone and voice",
    "level": "LOTS"
   },
   {
    "id": "11.RL.2.B.2",
    "text": "Evaluate how word choice, syntax, tone, and voice convey the author's intent and viewpoint",
    "level": "HOTS"
   }
  ]
 },
 "11.RL.2.C": {
  "text": "Critique how authors use key literary devices (e.g., imagery, personification, symbolism) to contribute to the meaning of a text, including its character development, theme, conflict, and archetypes.",
  "skills": [
   {
    "id": "11.RL.2.C.1",
    "text": "Identify key literary devices (e.g., imagery, personification, symbolism)",
    "level": "LOTS"
   },
   {
    "id": "11.RL.2.C.2",
    "text": "Critique how literary devices contribute to meaning, character development, theme, conflict, and archetypes",
    "level": "HOTS"
   }
  ]
 },
 "11.RL.2.D": {
  "text": "Analyze the use of satire, sarcasm, irony, and understatement to differentiate between what is directly stated and what is implied.",
  "skills": [
   {
    "id": "11.RL.2.D.1",
    "text": "Identify satire, sarcasm, irony, and understatement",
    "level": "LOTS"
   },
   {
    "id": "11.RL.2.D.2",
    "text": "Analyze how satire, sarcasm, irony, and understatement differentiate what is directly stated from what is implied",
    "level": "HOTS"
   }
  ]
 },
 "11.RL.3.A": {
  "text": "Explain the influence of the historical and cultural context on form, style, and point of view of texts that represent diverse voices and perspectives.",
  "skills": [
   {
    "id": "11.RL.3.A.1",
    "text": "Explain the influence of historical and cultural context on the form, style, and point of view of texts",
    "level": "LOTS"
   }
  ]
 },
 "11.RL.3.B": {
  "text": "Relate themes, patterns of events, or character types from myths, traditional stories, or religious works to contemporary stories, poems, or drama.",
  "skills": [
   {
    "id": "11.RL.3.B.1",
    "text": "Relate themes, patterns of events, or character types from myths, traditional stories, or religious works to contemporary works",
    "level": "HOTS"
   }
  ]
 },
 "11.RL.3.C": {
  "text": "Analyze how authors’ attitudes, viewpoints, and beliefs reflect larger historical, social, or cultural contexts.",
  "skills": [
   {
    "id": "11.RL.3.C.1",
    "text": "Analyze how authors' attitudes, viewpoints, and beliefs reflect larger historical, social, or cultural contexts",
    "level": "HOTS"
   }
  ]
 },
 "11.RI.1.A": {
  "text": "Interpret and complete an application for employment or college admission, and summarize the intent, main ideas, and purpose of the workplace or technical documents.",
  "skills": [
   {
    "id": "11.RI.1.A.1",
    "text": "Interpret and complete an application for employment or college admission",
    "level": "LOTS"
   },
   {
    "id": "11.RI.1.A.2",
    "text": "Summarize the intent, main ideas, and purpose of workplace or technical documents",
    "level": "LOTS"
   }
  ]
 },
 "11.RI.1.B": {
  "text": "Analyze the hypotheses, data, analysis, and/or conclusions in informational, historical, scientific, or technical texts, verifying the data when possible and corroborating or challenging conclusions with other sources of information.",
  "skills": [
   {
    "id": "11.RI.1.B.1",
    "text": "Analyze the hypotheses, data, analysis, and conclusions in informational, historical, scientific, or technical texts",
    "level": "HOTS"
   },
   {
    "id": "11.RI.1.B.2",
    "text": "Verify data and corroborate or challenge conclusions with other sources of information",
    "level": "HOTS"
   }
  ]
 },
 "11.RI.1.C": {
  "text": "Evaluate the relevance and quality of an author’s premises, claims, counterclaims, and evidence by corroborating or challenging them with other information.",
  "skills": [
   {
    "id": "11.RI.1.C.1",
    "text": "Identify an author's premises, claims, counterclaims, and evidence",
    "level": "LOTS"
   },
   {
    "id": "11.RI.1.C.2",
    "text": "Evaluate the relevance and quality of premises, claims, counterclaims, and evidence",
    "level": "HOTS"
   }
  ]
 },
 "11.RI.2.A": {
  "text": "Examine how textual elements and organizational patterns contribute to meaning and the author’s purpose.",
  "skills": [
   {
    "id": "11.RI.2.A.1",
    "text": "Identify textual elements and organizational patterns",
    "level": "LOTS"
   },
   {
    "id": "11.RI.2.A.2",
    "text": "Examine how textual elements and organizational patterns contribute to meaning and the author's purpose",
    "level": "HOTS"
   }
  ]
 },
 "11.RI.2.B": {
  "text": "Analyze and interpret the key terms (e.g., content-specific words and phrases, technical terminology) and ideas of historical, scientific, technical, and employment texts to clarify concepts.",
  "skills": [
   {
    "id": "11.RI.2.B.1",
    "text": "Interpret key terms and technical terminology",
    "level": "LOTS"
   },
   {
    "id": "11.RI.2.B.2",
    "text": "Analyze key terms and ideas of historical, scientific, technical, and employment texts to clarify concepts",
    "level": "HOTS"
   }
  ]
 },
 "11.RI.2.C": {
  "text": "Recognize and analyze the author’s purpose and impact of ambiguity, contradiction, paradox, oxymoron, irony, sarcasm, overstatement, and understatement in informational texts.",
  "skills": [
   {
    "id": "11.RI.2.C.1",
    "text": "Recognize ambiguity, contradiction, paradox, oxymoron, irony, sarcasm, overstatement, and understatement",
    "level": "LOTS"
   },
   {
    "id": "11.RI.2.C.2",
    "text": "Analyze the author's purpose and the impact of these techniques in informational texts",
    "level": "HOTS"
   }
  ]
 },
 "11.RI.3.A": {
  "text": "Analyze information within and between paired passages for similar and conflicting ideas and how authors reach similar or different conclusions.",
  "skills": [
   {
    "id": "11.RI.3.A.1",
    "text": "Analyze information within and between paired passages for similar and conflicting ideas and how authors reach their conclusions",
    "level": "HOTS"
   }
  ]
 },
 "11.RI.3.B": {
  "text": "Compare and contrast informational and technical texts for intent, content, and clarity.",
  "skills": [
   {
    "id": "11.RI.3.B.1",
    "text": "Compare and contrast informational and technical texts for intent, content, and clarity",
    "level": "HOTS"
   }
  ]
 }
};
  var SKILL = {};
  Object.keys(STANDARDS).forEach(function (code) { STANDARDS[code].skills.forEach(function (s) { SKILL[s.id] = { code: code, text: s.text, level: s.level }; }); });
  var api = { STANDARDS: STANDARDS, SKILL: SKILL };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.SolStandards = api;
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));
