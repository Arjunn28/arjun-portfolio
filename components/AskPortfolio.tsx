"use client";

import { useState } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AskPortfolio() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100%-3rem)] sm:w-96 max-w-md"
          >
            <div className="relative border border-ink-700 bg-ink-900/95 backdrop-blur-xl shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-ink-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-200">
                    Ask my portfolio
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-ink-500 hover:text-accent transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4">
                <div className="bg-ink-800/50 p-4 border-l-2 border-accent/40">
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent mb-2">
                    Status: Coming soon
                  </div>
                  <p className="text-ink-300 text-sm leading-relaxed">
                    A RAG-powered assistant is in the works. Ask it anything
                    about my projects, experience or technical decisions and
                    it will answer from my portfolio with page-level citations.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">
                    Sample questions
                  </div>
                  {[
                    "What is Sentinel AI's anomaly detection confidence?",
                    "Why decouple LLM reasoning from arithmetic?",
                    "How does DocCypher handle hybrid retrieval?",
                  ].map((q) => (
                    <div
                      key={q}
                      className="text-ink-400 text-sm border border-ink-800 px-3 py-2"
                    >
                      {q}
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-2 px-3 py-2.5 border border-ink-800 bg-ink-950/50 text-ink-600 text-sm cursor-not-allowed">
                    <span className="flex-1">Type a question...</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-700">
                      Disabled
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 group inline-flex items-center gap-2 bg-accent text-ink-950 px-4 py-3 shadow-lg hover:bg-accent-bright transition-all"
        aria-label="Open portfolio assistant"
      >
        {open ? (
          <X className="w-4 h-4" />
        ) : (
          <>
            <MessageCircle className="w-4 h-4" />
            <span className="font-mono text-xs uppercase tracking-[0.15em]">
              Ask
            </span>
          </>
        )}
      </motion.button>
    </>
  );
}
