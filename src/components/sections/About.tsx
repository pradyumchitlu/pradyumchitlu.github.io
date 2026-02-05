"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-space-light/10 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-orbitron mb-10 text-center text-warriors-gold"
        >
          About
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-space-light/20 border border-warriors-blue/20 rounded-2xl p-6 md:p-8 text-gray-300 leading-relaxed"
        >
          <p className="mb-4">
            I’m a Purdue CS + Data Science student who builds end-to-end systems: data ingestion, real-time processing,
            ML inference, and cloud deployment.
          </p>
          <p className="mb-6">
            I’m drawn to problems where the constraints are real—latency, cost, and reliability—and where the output
            drives decisions (supply chain operations, BI, and finance).
          </p>
          <p className="mb-6">
            I’m a generalist in practice: I like owning a problem end-to-end and going where the bottleneck is—infra,
            data, ML, product, or operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="rounded-xl border border-warriors-blue/20 bg-space-dark/40 p-4">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-mono mb-1">Build</p>
              <p className="text-sm text-gray-200">Streaming data + APIs that ship and scale.</p>
            </div>
            <div className="rounded-xl border border-warriors-blue/20 bg-space-dark/40 p-4">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-mono mb-1">Measure</p>
              <p className="text-sm text-gray-200">Obsessed with latency, cost, and correctness.</p>
            </div>
            <div className="rounded-xl border border-warriors-blue/20 bg-space-dark/40 p-4">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-mono mb-1">Explain</p>
              <p className="text-sm text-gray-200">Make results interpretable and actionable.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
