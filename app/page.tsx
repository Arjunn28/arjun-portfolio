import { Nav } from "@/components/Nav";
import { AIBanner } from "@/components/AIBanner";
import { Hero } from "@/components/Hero";
import { StackMarquee } from "@/components/StackMarquee";
import { About } from "@/components/About";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Experience } from "@/components/Experience";
import { BeyondCode } from "@/components/BeyondCode";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AskPortfolio } from "@/components/AskPortfolio";

export default function Home() {
  return (
    <main>
      <Nav />
      <AIBanner />
      <Hero />
      <StackMarquee />
      <About />
      <ProjectsGrid />
      <Experience />
      <BeyondCode />
      <Contact />
      <Footer />
      <AskPortfolio />
    </main>
  );
}
