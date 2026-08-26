import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Projects from "@/src/components/Projects";
import Contact from "@/src/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}