type Group = { title: string; items: string[] };

const groups: Group[] = [
  { title: "Languages", items: ["Python", "Java", "C / C++", "Go", "JavaScript / TypeScript", "SQL", "R"] },
  { title: "Backend & APIs", items: ["REST, OAuth2, Webhooks", "Flask / FastAPI, Node / Express", "gRPC (basics), MVC patterns"] },
  { title: "Frontend & Apps", items: ["React", "React Native"] },
  { title: "Data & ML", items: ["Pandas, NumPy, Jupyter", "scikit‑learn, XGBoost, SHAP", "StatsModels, evaluation/serving"] },
  { title: "Databases", items: ["PostgreSQL, SQLite", "MongoDB", "Schema design, ETL, dbt (basics)"] },
  { title: "Cloud & Infra", items: ["Docker, Kubernetes", "GitHub Actions CI/CD", "Linux, logging/monitoring"] },
  { title: "Practices", items: ["Code reviews, design docs", "Unit / integration testing", "Performance profiling, Agile/Scrum"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300 text-3xl font-semibold mb-8">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g) => (
            <div key={g.title} className="rounded-lg p-4 bg-slate-800/80 border border-teal-400/20">
              <h3 className="text-lg font-semibold text-slate-100 mb-2">{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="text-slate-900 bg-teal-400 px-2 py-1 rounded text-sm">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


