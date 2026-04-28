import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

type Node = { id: string; label: string; x: number; y: number; group: "core" | "lang" | "tool" };

const NODES: Node[] = [
  { id: "ml", label: "Machine Learning", x: 50, y: 28, group: "core" },
  { id: "nlp", label: "NLP", x: 72, y: 42, group: "core" },
  { id: "gai", label: "Generative AI", x: 28, y: 42, group: "core" },
  { id: "py", label: "Python", x: 18, y: 62, group: "lang" },
  { id: "java", label: "Java", x: 38, y: 74, group: "lang" },
  { id: "sql", label: "SQL", x: 62, y: 74, group: "lang" },
  { id: "html", label: "HTML", x: 78, y: 66, group: "lang" },
  { id: "css", label: "CSS", x: 88, y: 56, group: "lang" },
  { id: "vscode", label: "VS Code", x: 10, y: 38, group: "tool" },
  { id: "android", label: "Android Studio", x: 90, y: 30, group: "tool" },
  { id: "gcp", label: "Google Platforms", x: 50, y: 88, group: "tool" },
];

const LINKS: [string, string][] = [
  ["ml", "nlp"], ["ml", "gai"], ["ml", "py"], ["nlp", "py"], ["gai", "py"],
  ["py", "sql"], ["py", "android"], ["ml", "vscode"], ["java", "android"],
  ["html", "css"], ["css", "gcp"], ["sql", "gcp"], ["ml", "java"], ["nlp", "sql"],
];

const COLOR = {
  core: "var(--neon-purple)",
  lang: "var(--neon-cyan)",
  tool: "var(--neon-pink)",
} as const;

export function Skills() {
  const map = Object.fromEntries(NODES.map((n) => [n.id, n]));

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-28">
      <SectionHeader
        code="// 03 · neural_network"
        title="Skill Graph"
        subtitle="An interconnected map of languages, core AI domains, and tools that power Meghana's builds."
      />

      <div className="glass relative overflow-hidden rounded-2xl p-4 md:p-8">
        <div className="relative aspect-[16/10] w-full">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="linkGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="var(--neon-cyan)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="var(--neon-purple)" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            {LINKS.map(([a, b], i) => (
              <motion.line
                key={i}
                x1={map[a].x} y1={map[a].y} x2={map[b].x} y2={map[b].y}
                stroke="url(#linkGrad)"
                strokeWidth={0.25}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.05 }}
              />
            ))}
          </svg>
          {NODES.map((n, i) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.06, type: "spring" }}
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
            >
              <div
                className="relative flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-md transition-transform hover:scale-110"
                style={{
                  borderColor: COLOR[n.group],
                  background: `color-mix(in oklab, ${COLOR[n.group]} 15%, transparent)`,
                  boxShadow: `0 0 20px -5px ${COLOR[n.group]}`,
                }}
              >
                <span
                  className="h-2 w-2 animate-pulse rounded-full"
                  style={{ background: COLOR[n.group] }}
                />
                {n.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4 mono text-xs">
          <Legend color={COLOR.core} label="Core AI" />
          <Legend color={COLOR.lang} label="Languages" />
          <Legend color={COLOR.tool} label="Tools" />
        </div>
      </div>
    </section>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full" style={{ background: color, boxShadow: `0 0 10px ${color}` }} />
      <span className="uppercase tracking-widest text-muted-foreground">{label}</span>
    </div>
  );
}
