import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Education from "@/components/sections/Education";
import Research from "@/components/sections/Research";
import Interests from "@/components/sections/Interests";

export default function Home() {
  return (
    <main className="min-h-screen bg-space-dark text-white selection:bg-warriors-gold selection:text-space-dark">
      <Navbar />
      <Hero />
      <Education />
      <Products />
      <Research />
      <Interests />

      <footer className="py-8 text-center text-gray-500 text-sm font-mono border-t border-warriors-blue/20 bg-space-dark">
        <p>&copy; {new Date().getFullYear()} Pradyum Chitlu. Built with Next.js, Tailwind & Speed Force.</p>
      </footer>
    </main>
  );
}
