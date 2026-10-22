const stack = [
  "PYTHON",
  "SQL",
  "HIVEQL",
  "C++",
  "TYPESCRIPT",
  "BASH",
  "PYSPARK",
  "PANDAS",
  "NUMPY",
  "PYTORCH",
  "TENSORFLOW",
  "SCIKIT-LEARN",
  "HUGGING FACE",
  "TRANSFORMERS",
  "FINE-TUNING",
  "RLHF",
  "LANGCHAIN",
  "LANGGRAPH",
  "MCP",
  "RAG",
  "CHROMADB",
  "VECTOR SEARCH",
  "PROMPT ENGINEERING",
  "GUARDRAILS",
  "MULTI-AGENT",
  "LLAMA 3.3",
  "GROQ",
  "FASTAPI",
  "REST APIS",
  "DOCKER",
  "KUBERNETES",
  "LINUX",
  "GIT",
  "GITHUB ACTIONS",
  "CI/CD",
  "AWS",
  "EC2",
  "S3",
  "GCP",
  "ETL PIPELINES",
  "HADOOP",
  "HIVE",
  "POSTGRESQL",
  "MYSQL",
  "STATISTICAL MODELING",
  "REGRESSION",
  "CLASSIFICATION",
  "HYPOTHESIS TESTING",
  "FORECASTING",
  "BAYESIAN OPTIMIZATION",
  "DOMO",
  "POWER BI",
  "SSAS",
  "EXCEL",
  "STREAMLIT",
  "DASHBOARD DESIGN",
  "QUERY OPTIMIZATION",
  "REACT",
  "NEXT.JS",
  "TAILWIND CSS",
  "VERCEL",
];

export function StackMarquee() {
  return (
    <section
      className="relative border-y border-ink-800 py-5 overflow-hidden bg-ink-950"
      aria-label="Technology stack"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {[...stack, ...stack].map((tech, i) => (
          <div
            key={i}
            className="flex items-center font-mono text-sm tracking-[0.2em] text-ink-400"
          >
            <span className="px-8">{tech}</span>
            <span className="text-accent">◆</span>
          </div>
        ))}
      </div>
    </section>
  );
}
