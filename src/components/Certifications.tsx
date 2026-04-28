import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { ScrollText } from "lucide-react";

const CERTS = [
  { code: "LOG_001", name: "OpenXAI Internship", tag: "AI · Research" },
  { code: "LOG_002", name: "Infosys AI/ML", tag: "Machine Learning" },
  { code: "LOG_003", name: "LabMentix LCAT", tag: "Coding Aptitude" },
  { code: "LOG_004", name: "STEP Communication", tag: "Communication" },
];

export function Certifications() {
  return (
    <section id="certs" className="relative mx-auto max-w-6xl px-4 py-28">
      <SectionHeader
        code="// 06 · system_logs"
        title="Certifications"
        subtitle="Verified logs from training programs, internships, and certifications."
      />
      <div className="glass overflow-hidden rounded-2xl">
        <div className="mono flex items-center gap-2 border-b border-border px-5 py-3 text-xs text-muted-foreground">
          <ScrollText className="h-3.5 w-3.5 text-[var(--neon-cyan)]" />
          /var/log/meghana.certs
        </div>
        <div className="divide-y divide-border">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-wrap items-center gap-4 px-5 py-4 transition-colors hover:bg-muted/20"
            >
              <span className="mono text-xs text-[var(--neon-cyan)]">[{c.code}]</span>
              <span className="mono text-xs text-muted-foreground">[OK]</span>
              <span className="flex-1 font-medium">{c.name}</span>
              <span className="mono rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-wider">
                {c.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
