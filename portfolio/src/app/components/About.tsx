export default function About() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 text-3xl font-semibold mb-4">
          About Me
        </h2>
        <p className="text-slate-200/90">
          I&#39;m a Purdue University student double‑majoring in Data Science and Computer Science,
          focused on building internal web apps, clean APIs, and data/ML tools. I ship
          containerized services with CI/CD, observability, and tests, and turn
          play‑by‑play and multi‑source datasets into usable interfaces and models for
          real users. I emphasize clean code, documentation, and confidentiality, and I&#39;m
          comfortable owning work from design → implementation → review → deploy.
        </p>
      </div>
    </section>
  );
}


