import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setHidden(false);
      setPos({ x: e.clientX, y: e.clientY });
    };
    const leave = () => setHidden(true);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[1] h-[520px] w-[520px] rounded-full transition-opacity duration-300"
      style={{
        left: pos.x - 260,
        top: pos.y - 260,
        opacity: hidden ? 0 : 1,
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--neon-purple) 20%, transparent) 0%, transparent 60%)",
        filter: "blur(40px)",
      }}
    />
  );
}
