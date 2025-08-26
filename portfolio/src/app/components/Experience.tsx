type Role = {
  title: string;
  org: string;
  dates: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    title: "Full-Stack Developer & Founding Engineer",
    org: "Ports (Fintech Startup)",
    dates: "Feb 2025 – Aug 2025",
    bullets: [
      "Built cloud-backed React Native app and backend services; improved feature throughput by 25% via reusable UI kits and typed API clients.",
      "Designed and implemented REST endpoints in Java/Python with input validation, auth, structured logging, and unit/integration tests (pytest/Jest).",
      "Set up CI/CD (GitHub Actions) with build/test gates and automated deploys; reduced post-release defects by 30%.",
    ],
  },
  {
    title: "Quantitative Analyst",
    org: "Purdue Boiler Quant Finance Group",
    dates: "Jan 2025 – Present",
    bullets: [
      "Developed Python backtesting pipelines with versioned datasets; profiled bottlenecks and refactored for faster simulation cycles.",
      "Iterative tuning improved average ROI from -0.23% to 6.51%; presented design/analysis tradeoffs to mixed technical audiences.",
    ],
  },
  {
    title: "Co-President",
    org: "MSJ Sports Analytics Club",
    dates: "Aug 2021 – May 2024",
    bullets: [
      "Co-led a sports analytics club; mentored projects and standardized Git, notebooks, and documentation for reproducible work.",
      "Helped organize the MSJ Datathon; sponsors included Lam Research and the Los Angeles Lakers; event was shared by Mina Kimes.",
      "Judges/panelists included analysts from the Lakers, Wizards, NFL League Analytics, Apple, Zelus Analytics, and Stathletes.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300 text-3xl font-semibold mb-8">
          Experience
        </h2>
        <div className="flex flex-col gap-8">
          {roles.map((r) => (
            <div key={r.title} className="text-center">
              <h3 className="text-2xl font-semibold text-indigo-300">{r.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


