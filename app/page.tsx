import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/ExperienceView";
import AITools from "@/components/AITools";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/FooterView";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <div className="space-y-24 md:space-y-32 pb-24 md:pb-32">
          <About />
          <Experience />
          <AITools />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
