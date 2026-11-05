/*
 * URBAN-FLOW TOOLBOX MOCKUP – ROADMAP FOR THE CITIES
 * ==================================================
 * Content of the page "Roadmap for the cities" (index.html#/roadmap).
 * It explains to the municipalities of the pilot cities what the Toolbox is, what the goal is,
 * what happens step by step and when. The same page is printed to PDF (button "Print / save as PDF").
 * After saving, reload index.html (Cmd+Shift+R / Cmd+Option+R).
 *
 * The content after "window.UF_ROADMAP =" is plain JSON: double quotes, no trailing commas, no comments.
 *
 * goal      headline and text shown at the top (stats[] = optional number tiles, now empty)
 * toolbox   what the Toolbox is: lead, points[], layers[] (the picture), flow[] (how data travels)
 * roadmap[] the vertical timeline: kind (step | deliverable | milestone), when, months, title, details[] (for a step, step: n takes the details from steps[]), here (true = "We are here"), open (true = open at start).
 * steps[]   the four steps. Fields: n, bar [first month, last month + 1] on the timeline (0 = October 2026), name, when, months, headline, what[], cityDoes[], cityNot[]tip (optional), help, here (true = "We are here")
 * comic[]   the four-panel story: who (luca | chiara | davide), name, role, scene (office | map | meeting | street), step, text
 * tools     how the final list of tools is made: groups[] (system, chosen, test) and the list of system tools.
 *           The Marketplace tools of each city are read from "cityMatrix" in config/architecture-tools.js.
 * dates[]   key dates for the cities. Fields: when, what, who
 * pdf       file of the PDF summary (put it in assets/)
 */
window.UF_ROADMAP = {
  "title": "Roadmap for the cities",
  "subtitle": "What the Urban-Flow Toolbox is, what we do together, and when",
  "pdf": "assets/Urban-Flow_Roadmap_for_the_cities.pdf",
  "goal": {
    "kicker": "The goal",
    "headline": "By April 2028, each pilot city has its own Urban-Flow Toolbox installed in its municipality and has completed the first implementation round.",
    "text": "This is milestone MS6 of the Grant Agreement (month 28). We get there in four steps.",
    "stats": []
  },
  "toolbox": {
    "title": "What is the Toolbox?",
    "lead": "The Urban-Flow Toolbox is a web portal that brings together all the Urban-Flow components. In one place you connect city data, measure what matters, simulate measures before building them, and decide together with citizens.",
    "points": [
      { "t": "One web portal for all tools", "d": "The tools are not separate websites. They are integrated in the Toolbox and open inside the same portal." },
      { "t": "One login for all the tools", "d": "A single login, managed by a central Keycloak, gives access to every tool." },
      { "t": "Same base, different tools", "d": "During the testing window there is one shared base for all the cities. On top of it, each city tests the tools that were chosen and assigned to it." }
    ],
    "layersTitle": "The Toolbox in one picture",
    "layers": [
      { "id": "ui", "t": "What you use", "d": "Local Digital Twin, e-Participation, dashboards, indicators, AI assistant, administration" },
      { "id": "mp", "t": "Marketplace", "d": "Tools for one topic: heat, energy, mobility, air. Here the cities differ." },
      { "id": "base", "t": "Shared base", "d": "Indicators, rules, data and data sharing. The same for every city." },
      { "id": "src", "t": "Your city data", "d": "Sensors, open data, city systems, maps" }
    ],
    "iam": { "t": "One central login (Keycloak)", "d": "One login opens all the tools. Users and roles are set once, in one place." },
    "flowTitle": "Data travels from the bottom to the top",
    "flow": ["Collect", "Store", "Measure", "Analyse", "Decide"]
  },
  "stepsTitle": "How we get there: four steps",
  "stepsLead": "One shared test environment now, and a Toolbox in each city from mid-2027. Click a title to see what is included.",
  "flexible": "The timeline is flexible. What matters: all the tools are tested, and every city has installed its own Toolbox and completed the first implementation round by April 2028.",
  "steps": [
    {
      "n": 1, "bar": [0, 3], "name": "Setup", "when": "October – December 2026", "months": "Months 10–12", "here": true,
      "headline": "We set up the shared test environment",
      "what": ["ENG and the technical partners build one shared test environment for the three cities. It is installed on servers of the Lisbon Council.", "The test environment opens in January 2027. From January, all the tools are added step by step, starting with the core components."],
      "cityDoes": ["Nothing to install.", "Your part: identify the right people in your city and the use cases for the tests. Then the tests can start."],
      "cityNot": ["No installation"],
      "help": "ENG, TEC and the technical partners"
    },
    {
      "n": 2, "bar": [3, 9], "name": "Testing window", "when": "January – June 2027", "months": "Months 13–18", "here": false,
      "headline": "You test the tools",
      "what": [{ "t": "Each city tests a mix of tools, all in the same shared environment:", "sub": ["the Marketplace tools the city chose for its own needs;", "the core components of the architecture;", "where needed, a few other Marketplace tools. The Grant Agreement asks us to be sure that every tool is tested at least once."] }],
      "tip": "Try more than one tool for the same topic. You may discover better alternatives for your final Toolbox.", "tipGreen": true,
      "cityDoes": ["Connect your data and play with the Toolbox.", "Tell us what you see."],
      "cityNot": ["No commitment to adopt a tool", "No installation", "No daily use in operations"],
      "help": "The technical partners support you during the whole testing window"
    },
    {
      "n": 3, "bar": [8, 9], "name": "Feedback", "when": "June 2027", "months": "Month 18", "here": false,
      "headline": "You give feedback and choose",
      "what": ["Cities tell us what works and what does not, tool by tool.", "Cities and tool owners go through the feedback together. Owners improve their tools."],
      "cityDoes": ["Give your feedback, tool by tool.", "Choose: only the tools that met your expectations go to your own Toolbox."],
      "cityNot": [],
      "gain": "Your feedback improves the tools and helps the Replicant Cities build on what you learn.",
      "help": "Tool owners and the technical partners"
    },
    {
      "n": 4, "bar": [8, 19], "name": "Implement", "when": "From mid-2027 to April 2028", "months": "Months 18–28", "here": false,
      "headline": "You install your own Toolbox",
      "what": ["Each city installs its own Toolbox in its own municipality, with the tools that met its expectations.", "There are about 10 months for the local setup and the first implementation round of your pilot."],
      "cityDoes": ["Install your own Toolbox, with the technical partners helping you to configure it.", "April 2028 (milestone MS6): your Toolbox is installed, connected to your local data and systems, and the first round of your pilot is described in your pilot implementation report."],
      "cityNot": [],
      "help": "The technical partners support you in this phase too"
    }
  ],
  "roadmap": [
    { "kind": "step", "step": 1, "when": "Oct – Dec 2026", "months": "M10–M12", "here": true, "open": true,
      "title": "Setup: we set up the shared test environment" },
    { "kind": "deliverable", "when": "Dec 2026", "months": "M12", "title": "Data tools and collaboration platform, version 1 (D3.3)",
      "details": ["The first building blocks to manage data, calculate indicators and involve stakeholders.", "They are the base of the shared test environment."], "help": "ENG" },
    { "kind": "step", "step": 2, "when": "Jan – Jun 2027", "months": "M13–M18",
      "title": "Testing window: you test the tools" },
    { "kind": "step", "step": 3, "when": "Jun 2027", "months": "M18",
      "title": "Feedback: you give feedback and choose" },
    { "kind": "milestone", "when": "Jun 2027", "months": "M18 · MS4", "title": "First integrated Toolbox (MS4, D3.6)",
      "details": ["The first version of the Urban-Flow platform, which brings together the first tools and building blocks."], "help": "TEC" },
    { "kind": "step", "step": 4, "when": "Jun 2027 – Apr 2028", "months": "M18–M28",
      "title": "Implement: you install your own Toolbox" },
    { "kind": "milestone", "when": "Apr 2028", "months": "M28 · MS6", "title": "First implementation round completed (MS6)",
      "details": ["Each pilot city has installed its own Toolbox and has completed the first round of its pilot.", "Each city describes this first round in its pilot implementation report (D6.3 Valencia, D6.5 Florence, D6.7 Tampere).", "Deliverables due in the same month: the three pilot implementation reports and the Living Labs logbook (D6.1)."], "help": "VIC for the milestone, the Valencia report and the logbook; Florence and Tampere for their own reports" }
  ],
  "timeline": {
    "title": "The timeline",
    "start": "2026-10",
    "months": 19,
    "marks": [
      { "m": 2, "label": "Dec 2026", "text": "Data tools and collaboration platform V1 (D3.3)" },
      { "m": 8, "label": "Jun 2027", "text": "First integrated Toolbox (MS4, D3.6)" },
      { "m": 18, "label": "Apr 2028", "text": "First implementation round completed (MS6)" }
    ],
    "here": { "m": 1, "label": "We are here" }
  },
  "comicTitle": "The four steps in four panels",
  "comic": [
    { "who": "luca", "name": "Luca", "role": "ENG", "scene": "office", "step": "Step 1 · Setup", "text": "We set up one test environment for all three cities. You install nothing, so there is no extra work for your IT team." },
    { "who": "chiara", "name": "Chiara", "role": "City officer", "scene": "map", "step": "Step 2 · Testing window", "text": "From January to June I connect our data and try the tools. I can try two tools for the same topic. It is a test, not a commitment." },
    { "who": "davide", "name": "Davide", "role": "City IT team", "scene": "meeting", "step": "Step 3 · Feedback", "text": "In June we say what works and what does not, tool by tool. The owners improve their tools. We keep the ones we like." },
    { "who": "chiara", "name": "Chiara", "role": "City officer", "scene": "street", "step": "Step 4 · Implement", "text": "From mid-2027 we install our own Toolbox in the municipality, with help from the technical partners. In April 2028 our first round is complete." }
  ],
  "tools": {
    "title": "Which tools will be in your Toolbox?",
    "lead": "The Toolbox brings together 26 tools. They are a mix of three kinds: system tools, tools chosen at the General Assembly in Florence, and tools that must be tested to meet the Grant Agreement.",
    "groups": [
      { "id": "system", "n": 9, "t": "System tools", "d": "The architecture needs them. Without them the Toolbox could not work. They are the same for every city." },
      { "id": "chosen", "n": 17, "t": "Marketplace tools", "d": "Tools the cities asked for at the General Assembly in Florence (28–29 October 2026), plus tools to test, because the Grant Agreement says every tool must be tested at least once." }
    ],
    "after": "After the testing window you choose again: only the tools that met your expectations go to your own Toolbox. The system tools are always part of it.",
    "systemTitle": "The 9 system tools (same in every city)",
    "system": [
      { "n": "e-Participation (Decidim)", "p": "ENG", "d": "Citizens discuss options and vote." },
      { "n": "KPI Manager", "p": "ENG", "d": "Defines and calculates the indicators." },
      { "n": "GeoCacher", "p": "ENG", "d": "A map-based dashboard of city data." },
      { "n": "Data Catalogue (Idra)", "p": "ENG", "d": "Finds and publishes datasets." },
      { "n": "Catalogue of Urban Regeneration Measures", "p": "ENG", "d": "A library of measures to compare and reuse." },
      { "n": "Local Digital Twin viewer", "p": "TECNALIA", "d": "The city in 3D, with data and simulation results." },
      { "n": "AI-based Agent", "p": "TECNALIA", "d": "Ask questions in plain language." },
      { "n": "Chimera and Data Mashup Editor", "p": "CEFRIEL, ENG", "d": "Prepares and harmonises incoming data." },
      { "n": "Minimal Interoperability Mechanisms (MIMs)", "p": "OASC", "d": "Common rules, so that systems can talk to each other." }
    ],
    "marketTitle": "The 17 Marketplace tools",
    "marketNote": "How many of these tools each city will test is not decided yet. We will agree it together with each city."
  },
  "datesTitle": "Key dates for the cities",
  "dates": [
    { "when": "Oct – Dec 2026", "what": "Step 1, Setup: we set up the shared test environment on servers of the Lisbon Council.", "who": "ENG · TEC · technical partners" },
    { "when": "Nov – Dec 2026", "what": "Each city identifies the right people and the use cases for the tests.", "who": "Cities" },
    { "when": "Dec 2026", "what": "Deliverable D3.3: the data tools and collaboration platform (version 1) is delivered.", "who": "ENG" },
    { "when": "Jan – Jun 2027", "what": "Step 2, Testing window: the cities test the tools. From January, all the tools are added step by step, starting with the core components.", "who": "Cities · technical partners" },
    { "when": "Jun 2027", "what": "Step 3, Feedback: the cities give feedback and choose.", "who": "Cities · tool owners · technical partners" },
    { "when": "Jun 2027", "what": "Milestone MS4: first integrated Toolbox (D3.6).", "who": "TEC" },
    { "when": "Jun 2027 – Apr 2028", "what": "Step 4, Implement: each city installs its own Toolbox.", "who": "Cities · technical partners" },
    { "when": "Apr 2028", "what": "Milestone MS6: first implementation round completed in each pilot city. Deliverables: the pilot implementation reports (D6.3, D6.5, D6.7) and the Living Labs logbook (D6.1).", "who": "VIC · Florence · Tampere" }
  ],
  "closing": "Questions? Write to info@urban-flow.eu."
};
