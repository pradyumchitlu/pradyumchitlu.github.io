type Project = {
  title: string;
  desc: string;
  href?: string;
  linkText?: string;
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
    title: "Cloud Salary Insights & ML Dashboard",
    desc:
      "Containerized REST services for data access and model inference; 99.9% uptime and single‑digit monthly costs via autoscaling and cache‑aware ETL.",
    href: "https://ai-jobs-dashboard-bdbs2vtlca-uc.a.run.app/",
    linkText: "Live app",
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
    desc:
      "XGBoost with SHAP explainability on NOAA/USDA signals; delivered dashboards and reports.",
    href: "https://ui.adsabs.harvard.edu/abs/2023AGUFMED41C0891U/abstract",
    linkText: "Abstract",
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
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 text-3xl font-semibold mb-8">
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


