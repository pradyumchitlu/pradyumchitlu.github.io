import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Education from "@/app/components/Education";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
