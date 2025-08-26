export default function Principles() {
  return (
    <section id="principles" className="py-12 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300 text-3xl font-semibold mb-8">
          Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg p-6 bg-slate-800/80 border border-teal-400/20">
            <h3 className="text-xl font-semibold text-slate-100 mb-2">AI that learns, generalizes, and helps people</h3>
            <p className="text-slate-300 text-sm">
              Inspired by Demis Hassabis: I pursue systems that learn and generalize, with direct
              benefits in domains like healthcare and agriculture. The measure of impact is whether
              people&#39;s lives are materially improved by what we build.
            </p>
          </div>
          <div className="rounded-lg p-6 bg-slate-800/80 border border-teal-400/20">
            <h3 className="text-xl font-semibold text-slate-100 mb-2">The Toothbrush Test</h3>
            <p className="text-slate-300 text-sm">
              Larry Page&#39;s bar: would you use it once or twice a day, and does it make your life better?
              My translation: ship simple, habit‑forming tools that save time, reduce friction, and become
              part of someone&#39;s daily workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


