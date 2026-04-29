"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_ASK_BACKEND_URL ||
  "https://ask-arjun-backend.onrender.com";

const SUGGESTED_QUESTIONS = [
  "What is Sentinel AI and how does it work?",
  "How does DocCypher handle hybrid retrieval?",
  "What's Arjun's tech stack?",
  "Tell me about his experience at Target",
  "Can he handle AI at scale?",
  "What leadership roles has he held?",
  "What makes him stand out as a candidate?",
  "Is he open to new opportunities?",
];

type Message = {
  role: "user" | "assistant";
  content: string;
  streaming?: boolean;
};

// Lightweight markdown renderer — handles bold, inline code, line breaks
function renderMarkdown(text: string): React.ReactNode {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    // Split on bold markers and inline code
    const parts = line.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
    const rendered = parts.map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={j} className="text-ink-100 font-semibold">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return <code key={j} className="font-mono text-[11px] bg-ink-800 px-1 py-0.5 rounded text-accent">{part.slice(1, -1)}</code>;
      }
      return part;
    });
    return (
      <span key={i}>
        {rendered}
        {i < lines.length - 1 && line.length > 0 && <br />}
      </span>
    );
  });
}

export function AskPortfolio() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [wakingUp, setWakingUp] = useState(false);
  const [wakeProgress, setWakeProgress] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const wakeTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  useEffect(() => {
    return () => {
      if (wakeTimerRef.current) clearInterval(wakeTimerRef.current);
    };
  }, []);

  function startWakeProgress() {
    setWakingUp(true);
    setWakeProgress(0);
    let progress = 0;
    wakeTimerRef.current = setInterval(() => {
      progress += progress < 70 ? 2 : 0.3;
      if (progress >= 99) progress = 99;
      setWakeProgress(Math.round(progress));
    }, 600);
  }

  function stopWakeProgress() {
    if (wakeTimerRef.current) {
      clearInterval(wakeTimerRef.current);
      wakeTimerRef.current = null;
    }
    setWakeProgress(100);
    setTimeout(() => {
      setWakingUp(false);
      setWakeProgress(0);
    }, 400);
  }

  async function sendMessage(question: string) {
    if (!question.trim() || loading) return;

    const userMessage: Message = { role: "user", content: question };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    let isCold = false;
    try {
      const healthRes = await fetch(`${BACKEND_URL}/health`, {
        signal: AbortSignal.timeout(5000),
      });
      const health = await healthRes.json();
      isCold = !health.indexed;
    } catch {
      isCold = true;
    }

    if (isCold) startWakeProgress();

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "", streaming: true },
    ]);

    try {
      const res = await fetch(`${BACKEND_URL}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || `HTTP ${res.status}`);
      }

      stopWakeProgress();

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          accumulated += decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              role: "assistant",
              content: accumulated,
              streaming: true,
            };
            return updated;
          });
        }
      }

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: accumulated,
          streaming: false,
        };
        return updated;
      });
    } catch {
      stopWakeProgress();
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content:
            "ARIA seems to be napping. Try again in 30 seconds — or reach out to Arjun directly through the contact form!",
          streaming: false,
        };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[600px] flex flex-col border border-ink-700 bg-ink-950/95 backdrop-blur-xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-ink-800 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-accent" />
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.15em] text-ink-200">
                    ARIA
                  </div>
                  <div className="font-mono text-[10px] text-ink-500">
                    Arjun&apos;s Retrieval Intelligence Assistant · Groq
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-ink-500 hover:text-accent transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Wake-up progress bar */}
            <AnimatePresence>
              {wakingUp && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex-shrink-0 px-4 py-3 border-b border-ink-800 bg-ink-900/50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-400">
                      Waking up...
                    </span>
                    <span className="font-mono text-[10px] text-ink-500">~30s</span>
                  </div>
                  <div className="w-full h-1 bg-ink-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent rounded-full"
                      animate={{ width: `${wakeProgress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="font-mono text-[10px] text-ink-500 mt-1.5">
                    Render free tier cold-starting. Indexing portfolio content...
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
              {messages.length === 0 && (
                <div className="space-y-4">
                  <p className="text-ink-400 text-sm leading-relaxed">
                    Hey! I&apos;m <span className="text-accent font-medium">ARIA</span> — Arjun&apos;s Retrieval Intelligence Assistant.
                    Ask me anything about his projects, experience or background.
                    I only know what&apos;s in this portfolio, but that&apos;s quite a bit. 😄
                  </p>
                  <div className="space-y-2">
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500 mb-2">
                      Try asking
                    </div>
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="w-full text-left text-ink-300 text-sm border border-ink-800 px-3 py-2.5 hover:border-accent/40 hover:text-accent transition-all"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mr-2 mt-0.5">
                      <Sparkles className="w-2.5 h-2.5 text-accent" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] text-sm leading-relaxed px-3.5 py-2.5 ${
                      msg.role === "user"
                        ? "bg-accent text-ink-950 font-medium"
                        : "bg-ink-900 text-ink-300 border border-ink-800"
                    }`}
                  >
                    {msg.role === "assistant" && msg.content
                      ? renderMarkdown(msg.content)
                      : msg.content || (
                          <span className="flex items-center gap-1.5 text-ink-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-ink-400 animate-bounce [animation-delay:0ms]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-ink-400 animate-bounce [animation-delay:150ms]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-ink-400 animate-bounce [animation-delay:300ms]" />
                          </span>
                        )}
                    {msg.streaming && msg.content && (
                      <span className="inline-block w-0.5 h-3.5 bg-accent ml-0.5 animate-blink align-middle" />
                    )}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex-shrink-0 border-t border-ink-800 p-3 flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask ARIA anything about Arjun..."
                disabled={loading}
                className="flex-1 bg-transparent text-sm text-ink-100 placeholder-ink-600 outline-none disabled:opacity-50"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-accent text-ink-950 hover:bg-accent-bright transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Send"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-4 md:right-6 z-50 inline-flex items-center gap-2 bg-accent text-ink-950 px-4 py-3 shadow-lg hover:bg-accent-bright transition-all"
        aria-label="Open ARIA portfolio assistant"
      >
        {open ? (
          <X className="w-4 h-4" />
        ) : (
          <>
            <Sparkles className="w-4 h-4" />
            <span className="font-mono text-xs uppercase tracking-[0.15em]">
              Ask ARIA
            </span>
          </>
        )}
      </motion.button>
    </>
  );
}
