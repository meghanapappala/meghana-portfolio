import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Terminal } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Timeline" },
  { id: "certs", label: "Logs" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h();
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[min(1100px,94vw)] -translate-x-1/2 rounded-full transition-all ${
        scrolled ? "glass" : ""
      }`}
    >
      <nav className="flex items-center justify-between px-4 py-2 md:px-6">
        <a href="#top" className="flex items-center gap-2 mono text-sm font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-full neon-border">
            <Terminal className="h-4 w-4 text-[var(--neon-cyan)]" />
          </span>
          <span className="text-gradient">MEGHANA.OS</span>
        </a>
        <div className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
