type Props = { code: string; title: string; subtitle?: string };

export function SectionHeader({ code, title, subtitle }: Props) {
  return (
    <div className="mb-10 flex flex-col items-start gap-2">
      <div className="mono text-[10px] uppercase tracking-[0.4em] text-[var(--neon-cyan)]">
        {code}
      </div>
      <h2 className="font-display text-3xl font-bold md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="max-w-2xl text-sm text-muted-foreground md:text-base">{subtitle}</p>}
    </div>
  );
}
