"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Go", "C/C++", "Java", "TypeScript/JavaScript", "SQL", "R"],
  },
  {
    title: "Frameworks",
    items: ["FastAPI", "Flask", "Next.js", "React", "Socket.io"],
  },
  {
    title: "Infrastructure",
    items: [
      "Linux",
      "Git",
      "GCP (Cloud Run, BigQuery)",
      "Kafka",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "DuckDB",
    ],
  },
  {
    title: "ML / Data",
    items: ["PyTorch", "Scikit-learn", "XGBoost", "PCA", "Isolation Forest", "SHAP"],
  },
  {
    title: "Applied AI / Inference",
    items: [
      "RAG",
      "Vector search",
      "Embeddings",
      "Tool calling",
      "Agent workflows",
      "Evals",
      "Tracing/observability",
      "Model serving",
      "Caching",
      "Rate limiting",
    ],
  },
  {
    title: "Domains",
    items: ["Supply chains", "Business intelligence", "Finance"],
  },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-space-light/10 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-orbitron mb-10 text-center text-warriors-gold"
        >
          Skills
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-warriors-blue/20 bg-space-dark/40 p-6"
            >
              <h3 className="text-sm uppercase tracking-wider text-gray-400 font-mono mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-gray-200 border border-warriors-gold/20 bg-space-light/20 px-3 py-1 rounded-full hover:border-warriors-gold/50 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
