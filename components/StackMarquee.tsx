const stack = [
  "PYTHON",
  "FASTAPI",
  "LANGCHAIN",
  "LLAMA 3.3",
  "GROQ",
  "CHROMADB",
  "RAG",
  "AGENTS",
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "PYSPARK",
  "HADOOP",
  "HIVE",
  "AWS",
  "DOCKER",
  "PYTORCH",
  "SCIKIT-LEARN",
  "PANDAS",
  "SQL",
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
