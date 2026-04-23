import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container-x text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">
          Error 404
        </div>
        <h1 className="font-serif text-display text-ink-50 mb-6">
          Page not <span className="italic text-accent">found.</span>
        </h1>
        <p className="text-ink-400 mb-8 max-w-md mx-auto">
          The page you're looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] text-ink-950 bg-accent px-6 py-3 hover:bg-accent-bright transition-all"
        >
          ← Back home
        </Link>
      </div>
    </main>
  );
}
