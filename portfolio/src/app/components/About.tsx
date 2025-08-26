export default function About() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300 text-3xl font-semibold mb-4">
          About Me
        </h2>
        <p className="text-slate-200/90">
          I build AI‑driven products and data tools that people actually use. My north star is
          Demis Hassabis&#39; vision—systems that learn, generalize, and make life better—applied to
          practical domains like compensation clarity and agriculture. My product bar follows
          Larry Page&#39;s toothbrush test: simple, habit‑forming tools that reduce friction and save time.
          I ship containerized services with CI/CD, observability, and tests, and I&#39;m comfortable
          owning work from design → implementation → review → deploy.
        </p>
        <blockquote className="mt-4 text-slate-300 italic border-l-4 border-teal-400/40 pl-4">
          “Is this something you will use once or twice a day, and does it make your life better?” — Larry Page
        </blockquote>
      </div>
    </section>
  );
}


