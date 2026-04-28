import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, Cpu, Sprout, Hand, ChevronRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Project = {
  id: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  icon: any;
  accent: string;
  link: string;
};

const PROJECTS: Project[] = [
  {
    id: "skill-lens",
    code: "MODULE_01",
    name: "Skill Lens",
    tagline: "AI-powered candidate analysis system",
    description:
      "An intelligent pipeline that evaluates candidate profiles against job requirements using AI agents. Integrates N8N automation, LLM APIs, and a decision dashboard to surface top matches with explainable scoring.",
    stack: ["N8N", "AI Agents", "APIs", "LLMs"],
    icon: Cpu,
    accent: "var(--neon-purple)",
    link: "https://github.com/meghanapappala",
  },
  {
    id: "raithu",
    code: "MODULE_02",
    name: "Raithu Suraksha",
    tagline: "Smart agriculture system for rural farmers",
    description:
      "A smart agriculture platform combining IoT sensors, Arduino-based field hardware, and cloud analytics to monitor crops and alert farmers in real time. Won ₹20,000 prize at a national rural innovation contest.",
    stack: ["IoT", "Arduino", "Cloud", "Sensors"],
    icon: Sprout,
    accent: "var(--neon-cyan)",
    link: "https://github.com/meghanapappala",
  },
  {
    id: "gesture",
    code: "MODULE_03",
    name: "AI Hand Gesture Mouse",
    tagline: "Vision-based cursor control",
    description:
      "A computer vision system that converts real-time hand gestures into mouse actions using OpenCV and MediaPipe, enabling hands-free control of any application — built entirely in Python.",
    stack: ["Python", "OpenCV", "MediaPipe", "CV"],
    icon: Hand,
    accent: "var(--neon-pink)",
    link: "https://github.com/meghanapappala",
  },
];

export function Projects() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-28">
      <SectionHeader
        code="// 04 · ai_modules"
        title="Project Modules"
        subtitle="Click any module to expand its system panel."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.button
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setActive(p.id)}
            className="group relative overflow-hidden rounded-2xl glass p-6 text-left transition-transform hover:-translate-y-1"
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-opacity group-hover:opacity-90"
              style={{ background: p.accent, opacity: 0.4 }}
            />
            <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {p.code}
            </div>
            <div
              className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ background: `color-mix(in oklab, ${p.accent} 25%, transparent)`, color: p.accent }}
            >
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.slice(0, 3).map((s) => (
                <span key={s} className="mono rounded-full border border-border px-2 py-0.5 text-[10px]">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-5 inline-flex items-center gap-1 text-xs font-medium" style={{ color: p.accent }}>
              Expand module <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
          >
            {(() => {
              const p = PROJECTS.find((x) => x.id === active)!;
              return (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-2xl overflow-hidden rounded-2xl glass neon-border p-8"
                >
                  <div className="mono mb-2 text-[10px] uppercase tracking-widest" style={{ color: p.accent }}>
                    {p.code} · expanded
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ background: `color-mix(in oklab, ${p.accent} 25%, transparent)`, color: p.accent }}
                    >
                      <p.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                      <p className="text-sm text-muted-foreground">{p.tagline}</p>
                    </div>
                  </div>
                  <p className="mt-6 leading-relaxed">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="mono rounded-full border border-border px-3 py-1 text-xs">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a
                      href={p.link} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background"
                    >
                      <Github className="h-4 w-4" /> View on GitHub
                    </a>
                    <button
                      onClick={() => setActive(null)}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm"
                    >
                      Close
                    </button>
                  </div>
                  <a
                    href={p.link} target="_blank" rel="noreferrer"
                    className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </motion.div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
