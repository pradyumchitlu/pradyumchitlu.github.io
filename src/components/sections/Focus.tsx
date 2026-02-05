"use client";

import { motion } from "framer-motion";
import { Bot, Gauge, ShieldCheck, Wrench, Workflow } from "lucide-react";

const areas = [
  {
    title: "Inference & Latency",
    icon: <Gauge className="h-5 w-5" />,
    bullets: [
      "Design serving paths that optimize TTFT/throughput and stay stable under load.",
      "Build streaming ingestion + low-latency storage for time-series signals.",
      "Treat unit economics as a first-class constraint (cost per request).",
    ],
  },
  {
    title: "Applied AI Systems",
    icon: <Bot className="h-5 w-5" />,
    bullets: [
      "RAG over private data with citations and retrieval quality you can measure.",
      "Agent workflows that call tools safely (retries, idempotency, guardrails).",
      "Evals + observability so prompt/model changes don’t silently regress.",
    ],
  },
  {
    title: "Data Pipelines",
    icon: <Workflow className="h-5 w-5" />,
    bullets: [
      "ETL/ELT with incremental updates, caching, and reproducible jobs.",
      "Warehouse-first analytics that stay fast and cheap at scale.",
      "Schemas that match how teams actually ask questions.",
    ],
  },
  {
    title: "Reliability & Security",
    icon: <ShieldCheck className="h-5 w-5" />,
    bullets: [
      "Rate limits, guardrails, and safe action execution.",
      "Secure defaults: least privilege, secrets hygiene, dependency awareness.",
      "Operational readiness: logging, metrics, and failure modes.",
    ],
  },
  {
    title: "Developer Tooling",
    icon: <Wrench className="h-5 w-5" />,
    bullets: [
      "Internal platforms, CLIs, and SDKs that remove friction.",
      "Production obs patterns: traces, metrics, and feedback loops.",
      "Pragmatic DX: the happy path should be obvious.",
    ],
  },
] as const;

export default function Focus() {
  return (
    <section id="focus" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-orbitron mb-10 text-center text-warriors-gold"
        >
          What I Work On
        </motion.h2>

        <p className="text-center text-sm text-gray-400 max-w-3xl mx-auto mb-10">
          Applied AI and inference are my current focus. I’m a generalist—where I contribute depends on the bottleneck:
          systems, data, ML, product, or operations.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative rounded-2xl border border-warriors-blue/20 bg-space-light/10 p-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-warriors-blue/10 to-transparent opacity-70" />
              <div className="relative z-10">
                <div className="flex items-start gap-3">
                  <div className="mt-1 shrink-0 rounded-lg border border-warriors-gold/30 bg-space-dark/60 p-2 text-warriors-gold">
                    {area.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-white font-exo2">{area.title}</h3>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {area.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm text-gray-300 leading-relaxed">
                      <span className="text-warriors-gold/90">•</span> {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
