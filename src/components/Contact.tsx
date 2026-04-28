import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("All fields required");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Transmission sent · I'll reply soon!");
    }, 900);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-28">
      <SectionHeader
        code="// 07 · connect_interface"
        title="Establish Connection"
        subtitle="Open a channel — I'm always up for collaborations, research, and opportunities."
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={submit}
          className="glass relative overflow-hidden rounded-2xl p-6 md:p-8"
        >
          <div className="mono mb-4 flex items-center gap-2 text-xs text-[var(--neon-cyan)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--neon-cyan)]" />
            $ ./connect --secure
          </div>
          <div className="space-y-4">
            <Field label="identity.name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Field label="identity.email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <div>
              <label className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
                &gt; payload.message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="mt-1 w-full resize-none rounded-lg border border-border bg-background/40 p-3 text-sm outline-none ring-0 transition-colors focus:border-[var(--neon-purple)]"
                placeholder="Type your message..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] py-3 text-sm font-semibold text-background shadow-[0_0_30px_-5px_var(--neon-purple)] transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {sending ? "Transmitting..." : "Transmit"}
              <Send className="h-4 w-4" />
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <InfoRow icon={Mail} label="email" value="meghanapappala@gmail.com" href="mailto:meghanapappala@gmail.com" />
          <InfoRow icon={Phone} label="phone" value="+91 · Available on request" />
          <InfoRow icon={MapPin} label="location" value="Andhra Pradesh, India" />
          <InfoRow
            icon={Github}
            label="github"
            value="github.com/meghanapappala"
            href="https://github.com/meghanapappala"
          />
          <InfoRow
            icon={Linkedin}
            label="linkedin"
            value="linkedin.com/in/meghana-pappala"
            href="https://www.linkedin.com/in/meghana-pappala-8367352a1/"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
        &gt; {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-border bg-background/40 p-3 text-sm outline-none ring-0 transition-colors focus:border-[var(--neon-purple)]"
        placeholder={`Enter ${label}`}
      />
    </div>
  );
}

function InfoRow({
  icon: Icon, label, value, href,
}: { icon: any; label: string; value: string; href?: string }) {
  const Comp: any = href ? "a" : "div";
  return (
    <Comp
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl glass p-4 transition-transform hover:-translate-y-0.5"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--neon-purple)]/20 text-[var(--neon-purple)]">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="truncate font-medium">{value}</div>
      </div>
    </Comp>
  );
}
