export type CaseStudySection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  code?: string;
  table?: { header: string[]; rows: string[][] };
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  problem: string;
  sections: CaseStudySection[];
  decisions: { title: string; body: string }[];
  results: { metric: string; value: string }[];
  improvements: string[];
  demonstrates: string[];
};

export const caseStudies: Record<string, CaseStudy> = {
  "sentinel-ai": {
    slug: "sentinel-ai",
    title: "Sentinel AI",
    subtitle: "Autonomous Retail Intelligence Agent",
    oneLiner:
      "An autonomous AI agent that monitors retail performance on a schedule, flags anomalies using statistical analysis and dispatches HTML email alerts without a human in the loop.",
    problem:
      "Retail operations teams drown in data but starve for signal. A store going off-trend on Wednesday does not get noticed until the Monday review meeting. By then the window to act has closed. The bottleneck is not data availability, it is the human time required to read it.",
    sections: [
      {
        heading: "What I built",
        paragraphs: [
          "Sentinel AI runs on an hourly APScheduler cycle. At each tick it queries a SQLite database of retail performance records, runs z-score analysis at ±2.0 SD with 95% confidence to surface anomalies, passes flagged records to a Llama 3.3 70B reasoning loop, generates a structured HTML email alert with findings and dispatches the alert autonomously.",
          "The React dashboard visualises the full reasoning trace in real time, so the system is observable rather than a black box.",
        ],
      },
      {
        heading: "Architecture",
        code: `APScheduler (hourly cycle)
       |
  SQLite query
       |
  Z-score engine     ← arithmetic decoupled from LLM
       |
  Anomaly records
       |
  Llama 3.3 70B      ← reasoning and narrative only
  (Groq API)
       |
  Structured HTML email
       |
  SMTP dispatch
       |
  React dashboard    ← full reasoning trace visible`,
      },
    ],
    decisions: [
      {
        title: "Decoupling LLM reasoning from arithmetic",
        body: "The most important architectural call in this project. Early versions let the LLM run the z-score calculation. It hallucinated. Not sometimes. Reliably. LLMs are not calculators and treating them as one produces subtly wrong alerts that are worse than no alerts. The fix: the z-score engine is pure Python math. The LLM only receives pre-computed anomaly records and is responsible for narrative and reasoning, what it is actually good at.",
      },
      {
        title: "SQLite over a hosted database",
        body: "A hosted Postgres would have been overkill for the demo scale and introduced a free-tier cold-start dependency. SQLite keeps the deployment self-contained. For production at real retail scale, the query layer would swap to Postgres without touching the agent logic. SQLAlchemy's ORM abstraction makes this a one-line config change.",
      },
      {
        title: "Structured prompts with guardrails over free-form LLM calls",
        body: "The agent operates on a fixed tool loop with defined input and output schemas at every step. The LLM cannot hallucinate a tool call that does not exist or skip a required field. This is the difference between a demo that works once and a system that runs unattended at 3am.",
      },
    ],
    results: [
      { metric: "Anomaly detection confidence", value: "95% (±2.0 SD)" },
      { metric: "Cycle frequency", value: "Hourly, autonomous" },
      { metric: "Peak memory", value: "Under 200MB" },
      { metric: "Infrastructure cost", value: "$0 (free tier)" },
      { metric: "Human intervention", value: "None after deploy" },
    ],
    improvements: [
      "Add an evaluation harness to systematically measure whether the LLM's narrative accurately reflects the anomaly records it received. Faithfulness and grounding scoring would make this production-ready.",
      "Persist reasoning traces to an append-only log for historical audit. The dashboard currently shows only the current cycle.",
      "Add a human-in-the-loop checkpoint for high-severity alerts. Fully autonomous dispatch is fine for informational alerts but a confirmation step for critical findings reduces alert fatigue from false positives.",
    ],
    demonstrates: [
      "Autonomous agent design with a real, scheduled production loop",
      "Statistical anomaly detection correctly decoupled from LLM reasoning",
      "Structured prompt engineering with output schema enforcement",
      "Full-stack deployment across FastAPI, React and SMTP integration",
      "Honest evaluation of system limitations and production gaps",
    ],
  },
  "doc-cypher": {
    slug: "doc-cypher",
    title: "DocCypher",
    subtitle: "Hybrid RAG Document Intelligence System",
    oneLiner:
      "A document question-answering system that returns citation-enforced, page-grounded answers from PDFs using hybrid retrieval that fuses BM25 and dense vector search.",
    problem:
      "Standard RAG systems return confident-sounding hallucinations. They retrieve the wrong chunks, the LLM pattern-matches plausible text and the user has no way to verify the answer. For any real-world document Q&A, answers must be grounded in specific pages the user can audit.",
    sections: [
      {
        heading: "What I built",
        paragraphs: [
          "DocCypher accepts a PDF, chunks and indexes it twice — once via BM25 for lexical matching, once via dense embeddings for semantic retrieval — then fuses the two using Reciprocal Rank Fusion with k=60. The top 20 candidates are reranked down to 5, which become context for the LLM.",
          "Every answer includes page citations. Users can click through to the exact source. This is retrieval engineering, not a ChatGPT wrapper.",
        ],
      },
      {
        heading: "Retrieval pipeline",
        code: `PDF upload
     |
  Chunking (semantic splits)
     |
     +-----------------+
     |                 |
  BM25 index      Dense embeddings
  (lexical)       (all-MiniLM-L6-v2)
     |                 |
     +--------+--------+
              |
     Reciprocal Rank Fusion (k=60)
              |
     Top 20 candidates
              |
     Reranker → top 5
              |
     Llama 3.3 70B (Groq)
              |
     Answer + page citations`,
      },
    ],
    decisions: [
      {
        title: "Hybrid retrieval over pure dense vectors",
        body: "Dense embeddings miss exact keyword matches. BM25 misses semantic paraphrases. Real users query both ways. Fusing the two via RRF captures precision and recall simultaneously. Pure vector search is a worse baseline than most tutorials suggest.",
      },
      {
        title: "API-based embeddings over local model",
        body: "Running the embedding model locally pushed peak memory over 1.5GB — above most free-tier deployment limits. Migrating to an API-based embedding layer dropped peak memory under 200MB and enabled zero-cost deployment on Render. The latency trade-off was acceptable for a document Q&A workload.",
      },
      {
        title: "Reranking before LLM context",
        body: "The initial retrieval surfaces 20 plausible candidates. The LLM only sees 5. That reranking step is what keeps answers grounded. Without it, the LLM pattern-matches across 20 noisy chunks and produces confident-sounding nonsense.",
      },
    ],
    results: [
      { metric: "Retrieval candidates", value: "20 → 5 after rerank" },
      { metric: "Peak memory", value: "1.5GB → under 200MB" },
      { metric: "RRF constant", value: "k=60" },
      { metric: "Grounding", value: "Page-level citations" },
      { metric: "Infrastructure cost", value: "$0 (free tier)" },
    ],
    improvements: [
      "Add faithfulness and context-precision evals via Ragas or DeepEval. I have retrieval metrics but not answer-quality metrics.",
      "Experiment with hypothetical document embeddings (HyDE) for queries that are short and underspecified.",
      "Swap the reranker from a heuristic to a cross-encoder model for higher-precision top-k selection.",
    ],
    demonstrates: [
      "Retrieval engineering beyond naïve dense vector search",
      "Reciprocal Rank Fusion and reranking as production patterns",
      "Memory-constrained deployment and zero-cost architecture",
      "Citation enforcement for grounded answers",
      "Trade-off thinking: latency vs memory vs answer quality",
    ],
  },
  "snap-iq": {
    slug: "snap-iq",
    title: "SnapIQ",
    subtitle: "Vision-Powered Document Intelligence",
    oneLiner:
      "Upload a photo of any business document: invoice, receipt, delivery note and get back clean, structured JSON with vendor, date, line items and totals, ready to plug into any workflow.",
    problem:
      "Every automation pipeline has a physical-world problem. You can build the most sophisticated ERP workflow in the world, but if your invoices arrive as WhatsApp images and phone photos, someone still has to manually read them and type the data in. That manual step is the bottleneck. It is slow, error-prone and does not scale.",
    sections: [
      {
        heading: "What I built",
        paragraphs: [
          "SnapIQ accepts any image of a business document. The frontend base64-encodes it, the FastAPI backend constructs a multimodal prompt pairing a strict extraction schema with the raw image bytes and sends both to a vision-capable LLM in a single inference call.",
          "The model reads the image the way a human does — layout, logos, table structure — and returns JSON validated against a Pydantic schema. The frontend renders vendor, date and total as metric cards, line items as a structured table and a plain-English summary generated by the model.",
        ],
      },
      {
        heading: "Pipeline",
        code: `Image upload (JPG / PNG / WEBP)
     |
Base64 encode in browser
     |
POST /analyze (FastAPI backend)
     |
Multimodal prompt + image bytes sent to Vision LLM
     |
Model reads image, extracts fields
     |
JSON: vendor · date · currency · line items · tax · total · summary
     |
Pydantic validation
     |
React renders structured result card`,
      },
    ],
    decisions: [
      {
        title: "Strict JSON schema in the prompt",
        body: "Prompt engineering is what separates a demo from a reliable system. The extraction prompt instructs the model to return only a strict JSON schema with no markdown, no explanation, no additional text. Every field is specified by name and type including null handling. This makes the output predictable and parseable every time, regardless of document layout.",
      },
      {
        title: "Model-agnostic via OpenRouter",
        body: "Hardcoding a single vision model locks you to one provider's availability, pricing and latency. OpenRouter lets the same code swap between vision-capable models without changes. When a better or cheaper model ships, it is a one-line config update.",
      },
      {
        title: "Backend-mediated, not direct frontend calls",
        body: "It is tempting to have the React frontend call the vision API directly. You save an HTTP hop. You also expose your API key and lose all control over prompt construction, validation and error handling. A dedicated FastAPI layer adds ~50ms and saves you from production incidents.",
      },
    ],
    results: [
      { metric: "Supported input formats", value: "JPG, PNG, WEBP" },
      { metric: "Response format", value: "Strict JSON (Pydantic-validated)" },
      { metric: "Document types", value: "Receipts, invoices, delivery notes" },
      { metric: "Deployment", value: "Vercel + Render free tier" },
      { metric: "Infrastructure cost", value: "$0" },
    ],
    improvements: [
      "Add confidence scores per extracted field so downstream automation can route low-confidence extractions to human review.",
      "Support multi-page documents by chunking and stitching model outputs.",
      "Add a simple eval set of 100 documents across 10 formats to measure field-level accuracy over time.",
    ],
    demonstrates: [
      "Multimodal AI engineering: vision + language in a single inference",
      "Strict structured outputs from an LLM via schema-enforced prompting",
      "Pydantic validation and typed HTTP errors at every boundary",
      "End-to-end full-stack deployment from browser to model to UI",
      "Provider-agnostic architecture via OpenRouter",
    ],
  },
};
