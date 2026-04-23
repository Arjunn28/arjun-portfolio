import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StackMarquee } from "@/components/StackMarquee";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Experience } from "@/components/Experience";
import { Principles } from "@/components/Principles";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AskPortfolio } from "@/components/AskPortfolio";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <StackMarquee />
      <ProjectsGrid />
      <Experience />
      <Principles />
      <About />
      <Contact />
      <Footer />
      <AskPortfolio />
    </main>
  );
}
