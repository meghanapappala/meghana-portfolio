import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meghana Pappala — AI & ML Engineer Portfolio" },
      {
        name: "description",
        content:
          "Futuristic AI OS-style portfolio of Meghana Pappala — 3rd-year B.Tech CSE (AI & ML) student, ML engineer, and full-stack developer.",
      },
      { property: "og:title", content: "Meghana Pappala — AI & ML Engineer" },
      {
        property: "og:description",
        content: "Transforming ideas into intelligent real-world solutions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
