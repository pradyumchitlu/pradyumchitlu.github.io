import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Focus from "@/components/sections/Focus";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-space-dark text-white selection:bg-warriors-gold selection:text-space-dark">
      <Navbar />
      <Hero />
      <About />
      <Focus />
      <Projects />
      <Experience />
      <Skills />
      <Contact />

      <footer className="py-8 text-center text-gray-500 text-sm font-mono border-t border-warriors-blue/20 bg-space-dark">
        <p>&copy; {new Date().getFullYear()} Pradyum Chitlu. Built with Next.js + Tailwind.</p>
      </footer>
    </main>
  );
}
