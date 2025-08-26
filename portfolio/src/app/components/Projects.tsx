type Project = {
  title: string;
  desc: string;
  href?: string;
  linkText?: string;
  bullets?: string[];
  badge?: string;
};

const projects: Project[] = [
  {
    title: "ArisTalkle – AI Debate Platform",
    desc:
      "Backend in Flask + MongoDB orchestrating multi-API pipelines (LLM, TTS, video sync) with retries/backoff.",
    href: "https://devpost.com/software/aristalkle",
    linkText: "Project link",
  },
  {
    title: "Salary Prediction Platform (Product)",
    desc: "Real‑time salary predictions served via REST. Compensation clarity in a tight tech‑hiring market.",
    bullets: [
      "Ops: GCP, autoscaling; ~99.9% uptime; processes 15k+ records; ~95% infra cost reduction.",
      "Links: Live App + ML Dashboard.",
      "Outcome: reliable, everyday tool → passes the toothbrush test.",
    ],
    href: "https://ai-jobs-dashboard-bdbs2vtlca-uc.a.run.app/",
    linkText: "Live App",
    badge: "Toothbrush Test",
  },
  {
    title: "NBA Analytics Toolkit & Playoff Model",
    desc:
      "Internal web tooling (Flask/Streamlit) to explore team‑season features and simulate series matchups; REST endpoints for inference and data access.",
    href: "https://github.com/pradyumchitlu/nba-analytics",
    linkText: "GitHub",
  },
  {
    title: "Fantasy Football Analytics & Projections",
    desc:
      "Clean schema + ETL for weekly updates; Streamlit app for lineup queries and scenario tests; per‑position XGBoost with validation.",
    href: "https://github.com/pradyumchitlu/fantasy-football",
    linkText: "GitHub",
  },
  {
    title: "LLM-Powered PDF RAG System",
    desc:
      "Document intelligence pipeline using PyTorch + HF models (LLAMA/Mistral) and custom retrieval‑augmented generation for large corpora.",
  },
  {
    title: "Fzero – Trading Strategy Platform",
    desc:
      "Plugin architecture for dynamic trading strategies; Gemini API, Yahoo Finance, and Python backtesting utilities for analytics.",
  },
  {
    title: "Aladdin – Ensemble Investing Engine",
    desc:
      "216 technical indicators powering an ensemble of XGBoost, neural nets, and LSTMs; integrated Alpaca live data for real‑time signals.",
  },
  {
    title: "Interpretable ML for Climate Impact",
    desc: "Long‑run climate + ag features to highlight farmer risk.",
    bullets: [
      "Data: NOAA 1895–2023; USDA/agronomic features (pesticide usage, soil pH, precipitation).",
      "Methods: time‑series + XGBoost with SHAP; spatiotemporal risk mapping.",
      "Venue: Presented at AGU Fall Meeting 2023 (San Francisco).",
      "Outcome: AI for agriculture that explains ‘why,’ not just ‘what.’",
    ],
    href: "https://ui.adsabs.harvard.edu/abs/2023AGUFMED41C0891U/abstract",
    linkText: "Abstract",
    badge: "Hassabis Vision",
  },
  {
    title: "CricCatapult – Cricket Data API",
    desc:
      "Python package for large‑scale ingestion/analysis (500K+ records) with Selenium scraping; 20K+ downloads and comprehensive docs.",
    href: "https://github.com/aadrijupadya/CricCatapult",
    linkText: "GitHub",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300 text-3xl font-semibold mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-lg p-4 bg-slate-800/80 border border-white/10 hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-xl font-semibold text-slate-100 mb-2">{p.title}</h3>
              <p className="text-slate-300 text-sm">{p.desc}</p>
              {p.badge && (
                <span className="inline-block mt-2 text-xs bg-teal-500/20 text-teal-300 border border-teal-400/30 px-2 py-0.5 rounded">
                  {p.badge}
                </span>
              )}
              {p.bullets && (
                <ul className="mt-2 list-disc list-inside text-slate-300 text-sm space-y-1">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              {p.href && (
                <a
                  className="inline-block mt-3 text-indigo-300 underline underline-offset-4 hover:text-cyan-300"
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                >
                  {p.linkText || "Link"}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


