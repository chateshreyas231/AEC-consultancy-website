// Centralised site content and arrays for reuse across pages/components

export const industries = [
  "Architecture",
  "Engineering",
  "Construction",
  "Real estate",
  "Infrastructure",
  "Manufacturing",
  "Energy",
  "Transportation",
] as const;

export const techHighlights = [
  {
    title: "Data & AI foundation",
    points: [
      "Snowflake, Databricks, BigQuery",
      "dbt, Dagster, Azure Data Factory",
      "MLflow, feature stores, Vertex AI",
    ],
  },
  {
    title: "Automation toolchain",
    points: [
      "Node.js, Python, FastAPI microservices",
      "Next.js front-ends, React Native field apps",
      "Power Automate, n8n, custom orchestration",
    ],
  },
  {
    title: "Visualisation & collaboration",
    points: [
      "Power BI, Looker, Mode dashboards",
      "Storybook systems, Tailwind design kits",
      "Autodesk & Procore embedded experiences",
    ],
  },
];

export const aboutMetrics = [
  { value: "26%", label: "Average delivery acceleration" },
  { value: "45%", label: "Manual effort removed" },
  { value: "12+", label: "Countries delivered" },
  { value: "98%", label: "Client satisfaction score" },
];

export const team = [
  {
    initials: "JS",
    name: "John Smith",
    role: "Founder & Lead Consultant",
    bio: "BIM leader and automation strategist guiding mission-critical infrastructure programmes for 15+ years.",
    tags: ["BIM strategy", "Automation", "Delivery"],
  },
  {
    initials: "MJ",
    name: "Maria Johnson",
    role: "Head of Data & AI",
    bio: "Architects data platforms and AI products that scale across design, construction, and asset operations.",
    tags: ["Data platforms", "MLOps", "AI roadmap"],
  },
  {
    initials: "DW",
    name: "David Wilson",
    role: "Programme Delivery Director",
    bio: "Transforms field operations with digital playbooks, upskilling teams and embedding change.",
    tags: ["Change", "PMO", "Enablement"],
  },
];

export const testimonials = [
  {
    quote:
      "The team moved us from spreadsheets to an automation-first delivery model in under 12 weeks. We can see status, blockers, and forecasts in real time.",
    name: "Alex Thompson",
    role: "CEO · Thompson Architects",
  },
  {
    quote:
      "They pair deep AEC knowledge with enterprise-grade engineering. Our data estate is compliant, governed, and easy for teams to build on.",
    name: "Jordan Patel",
    role: "CTO · Meridian Construction",
  },
  {
    quote:
      "The AI copilots reduced commercial review cycles by 38%. Site managers now focus on decisions, not admin.",
    name: "Priya Das",
    role: "Operations Director · Skyline Infrastructure",
  },
];

export const projects = [
  {
    client: "MetroBuild",
    title: "Digital twin + command centre",
    result:
      "12 metro projects monitored with live telemetry and predictive issue detection.",
  },
  {
    client: "Northwind Constructors",
    title: "AI-assisted tendering",
    result:
      "Proposal turnaround down from 10 days to 48 hours with structured knowledge capture.",
  },
  {
    client: "UrbanEdge",
    title: "Site automation playbook",
    result:
      "Field reporting automated across 63 teams with compliance audit trails baked in.",
  },
];

export const resources = [
  {
    title: "Playbook: AI in preconstruction",
    description:
      "A maturity model, architecture patterns, and ROI calculators for leadership teams.",
    tag: "Guide",
  },
  {
    title: "Case study: Intelligent rail ops",
    description:
      "How we unified telemetry, BIM, and ERP data to manage a nationwide rail programme.",
    tag: "Case study",
  },
  {
    title: "Checklist: Data platform readiness",
    description:
      "20-point scorecard covering governance, integration, and operating model alignment.",
    tag: "Checklist",
  },
];
