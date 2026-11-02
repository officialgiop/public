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
 * goal      headline, text and three numbers shown at the top
 * toolbox   what the Toolbox is: lead, points[], layers[] (the picture), flow[] (how data travels)
 * steps[]   the four steps. Fields: n, bar [first month, last month + 1] on the timeline (0 = October 2026), name, when, months, headline, what[], cityDoes[], cityNot[], help, here (true = "We are here")
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
    "headline": "By April 2028, each pilot city runs its own Urban-Flow Toolbox, installed in its own municipality.",
    "text": "We get there in four steps. In the first one, ENG and the technical partners do the work: your city does not install anything.",
    "stats": [
      { "v": "3", "l": "pilot cities", "s": "Valencia · Florence · Tampere" },
      { "v": "26", "l": "tools in the Toolbox", "s": "9 system tools + 17 Marketplace tools" },
      { "v": "April 2028", "l": "your own Toolbox, ready", "s": "Month 28 of the project (milestone MS6)" }
    ]
  },
  "toolbox": {
    "title": "What is the Toolbox?",
    "lead": "The Urban-Flow Toolbox is a web portal that brings together all the Urban-Flow components. In one place you connect city data, measure what matters, simulate measures before building them, and decide together with citizens.",
    "points": [
      { "t": "One web portal for all tools", "d": "Each tool has its own page: what it does, who built it and which cities use it." },
      { "t": "One login for all the tools", "d": "A single login, managed by a central Keycloak, gives access to every tool. Each user has a specific role and sees only what that role allows." },
      { "t": "Same base, different tools", "d": "The shared base is the same for every city. For each topic (heat, energy, mobility, air) each city chooses the tools it needs." }
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
  "stepsLead": "One shared test environment now, and a Toolbox in each city from mid-2027.",
  "flexible": "The timeline is flexible. What matters: all the tools are tested, and every city has its own Toolbox in April 2028.",
  "steps": [
    {
      "n": 1, "bar": [0, 3], "name": "Setup", "when": "October – December 2026", "months": "Months 10–12", "here": true,
      "headline": "We set up the test environment",
      "what": ["ENG and the technical partners build one shared test environment for the three cities. It is installed on servers of the Lisbon Council.", "The test environment opens in January 2027. From January, all the tools are added step by step."],
      "cityDoes": ["Nothing to install.", "Your only part: identify the right people and the use cases, so that the tests can start."],
      "cityNot": ["No installation"],
      "help": "ENG and the technical partners"
    },
    {
      "n": 2, "bar": [3, 9], "name": "Testing window", "when": "January – June 2027", "months": "Months 13–18", "here": false,
      "headline": "You test the tools",
      "what": ["The cities try the Marketplace tools and the other components in one shared environment.", "Connect your data and let the tools run their analyses. Try more than one tool for the same topic."],
      "cityDoes": ["Connect your data and play with the Toolbox.", "Tell us what you see."],
      "cityNot": ["No commitment to adopt a tool", "No installation, no servers", "No daily use in operations"],
      "gain": "Alternative tools from other partners, and maybe a better option for your final Toolbox.",
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
      "what": ["Each city installs its own Toolbox in its own municipality, with the tools that met its expectations.", "There are about 10 months for the local setup and the first implementation."],
      "cityDoes": ["Install your own Toolbox, with the technical partners helping you to configure it.", "April 2028: your Toolbox is running (milestone MS6)."],
      "cityNot": [],
      "help": "The technical partners support you in this phase too"
    }
  ],
  "timeline": {
    "title": "The timeline",
    "start": "2026-10",
    "months": 19,
    "marks": [
      { "m": 2, "label": "Dec 2026", "text": "Data tools and collaboration platform V1 (D3.3)" },
      { "m": 8, "label": "Jun 2027", "text": "First integrated Toolbox (MS4, D3.6)" },
      { "m": 18, "label": "Apr 2028", "text": "Your own Toolbox (MS6)" }
    ],
    "here": { "m": 1, "label": "We are here" }
  },
  "comicTitle": "The four steps in four panels",
  "comic": [
    { "who": "luca", "name": "Luca", "role": "ENG", "scene": "office", "step": "Step 1 · Setup", "text": "We set up one test environment for all three cities. You install nothing. No servers, no extra work for your IT team." },
    { "who": "chiara", "name": "Chiara", "role": "City officer", "scene": "map", "step": "Step 2 · Testing window", "text": "From January to June I connect our data and try the tools. I can try two tools for the same topic. It is a test, not a commitment." },
    { "who": "davide", "name": "Davide", "role": "City IT team", "scene": "meeting", "step": "Step 3 · Feedback", "text": "In June we say what works and what does not, tool by tool. The owners improve their tools. We keep the ones we like." },
    { "who": "chiara", "name": "Chiara", "role": "City officer", "scene": "street", "step": "Step 4 · Implement", "text": "From mid-2027 we install our own Toolbox in the municipality, with help from the technical partners. In April 2028 it is ready." }
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
    { "when": "November 2026", "what": "Requirements and user stories collected together with the cities.", "who": "ENG · cities" },
    { "when": "December 2026", "what": "The cities answer the technical questions. The data tools and collaboration platform (V1) are delivered.", "who": "Cities · ENG" },
    { "when": "January 2027", "what": "The testing window opens. From now on, all the tools are added step by step.", "who": "ENG · technical partners" },
    { "when": "January – June 2027", "what": "The cities test the tools and give structured feedback.", "who": "Cities · tool owners" },
    { "when": "June 2027", "what": "Feedback and final selection of the tools. First integrated Toolbox (MS4).", "who": "Cities · tool owners" },
    { "when": "June 2027 – April 2028", "what": "Local setup and first implementation round in each city.", "who": "Cities · technical partners" },
    { "when": "April 2028", "what": "Each pilot city has its own Toolbox (MS6, month 28).", "who": "Cities" }
  ],
  "closing": "Questions? Write to info@urban-flow.eu."
};
