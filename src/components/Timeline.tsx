import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Award, Briefcase, Trophy, Users } from "lucide-react";

const EVENTS = [
  {
    icon: Trophy,
    title: "₹20,000 Rural Innovation Prize",
    meta: "National contest",
    desc: "Awarded for Raithu Suraksha — an IoT-based smart agriculture system for Indian farmers.",
  },
  {
    icon: Award,
    title: "Smart India Hackathon Selection",
    meta: "SIH Finalist",
    desc: "Selected among thousands of teams for India's largest national hackathon.",
  },
  {
    icon: Briefcase,
    title: "AI Intern · OpenXAI",
    meta: "Internship",
    desc: "Working on explainable AI pipelines, model evaluation, and agentic workflows.",
  },
  {
    icon: Users,
    title: "ACM Women's Chapter · Technical Lead",
    meta: "Leadership",
    desc: "Leading technical events, workshops, and mentorship initiatives on campus.",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative mx-auto max-w-6xl px-4 py-28">
      <SectionHeader
        code="// 05 · event_log"
        title="Achievements Timeline"
        subtitle="Key milestones from student to AI engineer."
      />
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] md:left-1/2" />
        <div className="space-y-8">
          {EVENTS.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-start gap-6 md:grid md:grid-cols-2 md:gap-10 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
              }`}
            >
              <div className={`glass w-full rounded-2xl p-5 md:ml-0 ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                <div className="mono text-[10px] uppercase tracking-widest text-[var(--neon-cyan)]">
                  {e.meta}
                </div>
                <h3 className="mt-1 font-display text-lg font-semibold">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
              </div>
              <div
                className="absolute left-4 top-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--neon-purple)] bg-background md:left-1/2"
                style={{ boxShadow: "0 0 20px var(--neon-purple)" }}
              >
                <e.icon className="h-4 w-4 text-[var(--neon-purple)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
