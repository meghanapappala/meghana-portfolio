import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Brain, GraduationCap, Rocket, Users } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "CGPA", value: "8.67" },
  { icon: Brain, label: "Focus", value: "AI / ML" },
  { icon: Rocket, label: "Projects", value: "10+" },
  { icon: Users, label: "Tech Lead", value: "ACM-W" },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-28">
      <SectionHeader
        code="// 02 · system_profile"
        title="About the Operator"
        subtitle="A 3rd-year B.Tech Computer Science student specializing in AI & ML — passionate about building systems that solve real-world problems."
      />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <div className="mono mb-4 text-xs uppercase tracking-widest text-[var(--neon-cyan)]">
            $ cat ~/profile.md
          </div>
          <p className="text-lg leading-relaxed">
            I'm <span className="text-gradient font-semibold">Pappala Meghana</span>, a 3rd-year
            B.Tech CSE (AI &amp; ML) student with a CGPA of <b>8.67</b>. I'm driven by a passion for
            intelligent systems — where machine learning, NLP, and generative AI meet real-world
            impact.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From winning rural innovation awards to leading the ACM Women's Chapter technically, I
            thrive on building things that matter — combining adaptability, leadership, and a
            relentless learning mindset.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Problem Solver", "Team Lead", "Fast Learner", "Builder", "Researcher"].map((t) => (
              <span
                key={t}
                className="mono rounded-full border border-border bg-muted/30 px-3 py-1 text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass relative overflow-hidden rounded-2xl p-6"
            >
              <s.icon className="h-6 w-6 text-[var(--neon-cyan)]" />
              <div className="mt-4 mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
              <div className="text-gradient font-display text-3xl font-bold">{s.value}</div>
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--neon-purple)]/20 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
