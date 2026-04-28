import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Cpu, Download, Sparkles } from "lucide-react";

const PHRASES = [
  "Hello, I'm Meghana — I build intelligent systems.",
  "Transforming ideas into intelligent real-world solutions.",
  "AI & ML Engineer. Full Stack Developer.",
];

function useTyping(phrases: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    const speed = del ? 30 : 55;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1600);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setI((n) => n + 1);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, phrases]);

  return text;
}

export function Hero() {
  const typed = useTyping(PHRASES);

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-4 pt-24">
      {/* Orbital rings */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute h-[520px] w-[520px] rounded-full border border-[var(--neon-purple)]/20 animate-[spin_30s_linear_infinite]" />
        <div className="absolute h-[720px] w-[720px] rounded-full border border-[var(--neon-cyan)]/15 animate-[spin_60s_linear_infinite_reverse]" />
        <div className="absolute h-[900px] w-[900px] rounded-full border border-[var(--neon-pink)]/10 animate-[spin_90s_linear_infinite]" />
      </div>

      <div className="relative z-10 grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mono mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--neon-cyan)]/40 bg-[var(--neon-cyan)]/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[var(--neon-cyan)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--neon-cyan)]" />
            System online · booted
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            <span className="text-gradient">Meghana Pappala</span>
          </h1>
          <p className="mono mt-3 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            AI &amp; ML Engineer · Full Stack Developer
          </p>
          <div className="mt-8 min-h-[72px] max-w-xl rounded-xl glass p-4">
            <div className="mono text-xs text-[var(--neon-cyan)]">$ meghana.init()</div>
            <p className="cursor-caret mt-2 text-lg md:text-xl">
              {typed}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] px-6 py-3 text-sm font-semibold text-background shadow-[0_0_30px_-5px_var(--neon-purple)] transition-transform hover:scale-[1.03]"
            >
              Explore System
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold"
            >
              <Sparkles className="h-4 w-4 text-[var(--neon-cyan)]" />
              View Projects
            </a>
            <a
              href="/Pappala_Meghana_Resume.docx"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
        </motion.div>

        <AIAssistant />
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        ↓ scroll to boot sequence
      </div>
    </section>
  );
}

function AIAssistant() {
  const messages = [
    { from: "sys", text: "Initializing MEGHANA.OS v3.0..." },
    { from: "sys", text: "Loading neural profile: ✓" },
    { from: "ai", text: "Hi — I'm Meghana's AI assistant. What would you like to explore?" },
    { from: "user", text: "Show me her top projects." },
    { from: "ai", text: "Skill Lens · Raithu Suraksha · Hand Gesture Mouse — scroll down ↓" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-2xl glass p-5 neon-border scanline">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--neon-purple)]/20">
              <Cpu className="h-4 w-4 text-[var(--neon-purple)]" />
            </span>
            <div className="mono text-xs">
              <div className="text-foreground">AI ASSISTANT</div>
              <div className="text-[10px] text-muted-foreground">channel · secure</div>
            </div>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[var(--neon-pink)]" />
            <span className="h-2 w-2 rounded-full bg-[var(--neon-cyan)]" />
            <span className="h-2 w-2 rounded-full bg-[var(--neon-purple)]" />
          </div>
        </div>
        <div className="space-y-2">
          {messages.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.35 }}
              className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                  m.from === "user"
                    ? "bg-[var(--neon-purple)]/25 text-foreground"
                    : m.from === "sys"
                    ? "mono text-xs text-[var(--neon-cyan)]"
                    : "bg-muted/40 text-foreground"
                }`}
              >
                {m.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
