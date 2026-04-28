export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 md:flex-row">
        <div className="mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} MEGHANA.OS · uptime: ∞
        </div>
        <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          built with ♥ · neural interface v3.0
        </div>
      </div>
    </footer>
  );
}
