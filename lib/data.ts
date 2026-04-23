export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  stack: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  metric: { label: string; value: string };
};

export const projects: Project[] = [
  {
    slug: "sentinel-ai",
    title: "Sentinel AI",
    tagline:
      "Autonomous retail intelligence agent. Monitors performance on an hourly schedule, flags anomalies via z-score analysis and dispatches email alerts without a human in the loop.",
    category: "Agentic AI",
    year: "2026",
    stack: [
      "Python",
      "FastAPI",
      "Llama 3.3 70B",
      "Groq",
      "SQLite",
      "APScheduler",
      "React",
    ],
    liveUrl: "https://retail-agent-self.vercel.app",
    githubUrl: "https://github.com/Arjunn28/retail-agent",
    featured: true,
    metric: { label: "Peak memory", value: "<200MB" },
  },
  {
    slug: "doc-cypher",
    title: "DocCypher",
    tagline:
      "Hybrid RAG document intelligence system. Citation-enforced, page-grounded answers from PDFs using BM25 + dense vector retrieval fused via Reciprocal Rank Fusion and reranked for LLM context.",
    category: "RAG · Retrieval",
    year: "2026",
    stack: [
      "Python",
      "FastAPI",
      "Llama 3.3 70B",
      "ChromaDB",
      "BM25",
      "React",
    ],
    liveUrl: "https://doc-cypher.vercel.app",
    githubUrl: "https://github.com/Arjunn28/doc-cypher",
    featured: true,
    metric: { label: "Memory reduction", value: "1.5GB → 200MB" },
  },
  {
    slug: "snap-iq",
    title: "SnapIQ",
    tagline:
      "Vision-powered document intelligence. Upload a photo of any business document: invoice, receipt, delivery note and get back clean, structured JSON ready for any workflow.",
    category: "Multimodal AI",
    year: "2026",
    stack: [
      "Python",
      "FastAPI",
      "Vision LLM",
      "OpenRouter",
      "Pydantic",
      "React",
    ],
    liveUrl: "https://snap-iq-kappa.vercel.app",
    githubUrl: "https://github.com/Arjunn28/snap-iq",
    featured: true,
    metric: { label: "Infra cost", value: "$0" },
  },
  {
    slug: "retail-iq-copilot",
    title: "RetailIQ Copilot",
    tagline:
      "Natural-language-driven retail analytics engine. Converts English questions into SQL, queries retail data and returns business-ready insights for non-technical users.",
    category: "NL-to-SQL",
    year: "2026",
    stack: ["Python", "FastAPI", "MySQL", "React", "NLP"],
    liveUrl: "https://retail-iq-copilot.vercel.app",
    githubUrl: "https://github.com/Arjunn28/retail-iq-copilot",
    featured: false,
    metric: { label: "Queries supported", value: "20+ intents" },
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Data Analyst",
    company: "Fortune 50 Retailer",
    period: "Aug 2023 — Present",
    location: "Bengaluru, India",
    bullets: [
      "Architected an AI agent deployed across 167 business categories that replaced dependency on external category managers, orchestrating LLM calls governed by structured prompts and guardrails",
      "Compressed category-manager reporting from 1,800 hours to 270 hours monthly and cut insight delivery from 7 days to under 2 by automating summaries through LLM-generated narratives on category performance data",
      "Scaled an agentic workflow across 50+ merchandise business units to auto-deliver weekly Gen-AI merchandising summaries, cutting manual reporting effort by 85%",
      "Engineered HiveQL, Hadoop and PySpark ETL pipelines processing 2B+ records across 1.2M SKUs with embedded anomaly detection at ingestion, serving 60+ weekly analysts with 30% lower query latency",
      "Re-engineered allocation-planning pipelines from 2-hour to 30-minute runtimes and integrated GIS, sales and segmentation data into a redesigned UI deployed across 8 business moments",
      "Shipped an interactive DOMO dashboard surfacing productivity, velocity, sell-through and inventory metrics across 1,900+ stores",
    ],
    stack: [
      "Python",
      "PySpark",
      "Hadoop",
      "HiveQL",
      "LLMs",
      "Agentic Workflows",
      "DOMO",
      "SQL",
    ],
  },
  {
    role: "AI/ML Intern",
    company: "Tata Consultancy Services",
    period: "Jun 2022 — Sep 2022",
    location: "Bengaluru, India",
    bullets: [
      "Expanded autonomous-vehicle edge-case test coverage by processing 1M+ simulation records and NPC behavioural data against ASAM OpenDRIVE and OpenSCENARIO standards",
      "Improved scenario diversity, function point coverage and accuracy by 15% and cut scenario development time by 20% by tuning Bayesian optimisation pipelines for AI-driven test case generation",
    ],
    stack: ["Python", "Bayesian Optimization", "Simulation", "ASAM Standards"],
  },
];

export type Principle = {
  title: string;
  body: string;
};

export const principles: Principle[] = [
  {
    title: "Decouple reasoning from arithmetic",
    body: "LLMs hallucinate numbers. Keep calculations in deterministic code. Let the model reason over already computed results. This one pattern eliminates a whole class of production failures.",
  },
  {
    title: "Evals are the moat",
    body: "Anyone can wire up an LLM. Very few of us can tell you their system's faithfulness score or hallucination rate. Measurement is how you separate production systems from prototypes.",
  },
  // {
  //   title: "Structure inputs and outputs",
  //   body: "Pydantic schemas on output. Typed inputs. Strict JSON. Free-form prompts are a liability in production. Guardrails at every boundary.",
  // },
  {
    title: "Scale is a design choice",
    body: "Working with 2B records teaches you what breaks under pressure. Premature optimisation is wasteful. Zero optimisation at real scale is catastrophic. Know which side of the line you are on.",
  },
  {
    title: "Systems over demos",
    body: "A demo that works once on stage is easy. A system that runs unattended at 3am, recovers from failures and produces auditable outputs; That is the actual goal. Design for the 3am case from day one.",
  },
];

export const socialLinks = {
  github: "https://github.com/Arjunn28",
  linkedin: "https://www.linkedin.com/in/arjun-an",
  email: "arjun.abbimutt@gmail.com",
  resume: "/resume.pdf",
};
