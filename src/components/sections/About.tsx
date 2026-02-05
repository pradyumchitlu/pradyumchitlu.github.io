"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
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
            I’m a Purdue University student studying Data Science and Computer Science. I build AI-driven products and
            data tools that people actually use, with a focus on clean code, observability, and shipping end-to-end.
          </p>
          <p className="mb-4">
            I like ideas that pass Larry Page’s “toothbrush test”: something you’ll use once or twice a day, and that
            makes your life better.
          </p>

          <blockquote className="border-l-4 border-warriors-gold/60 pl-4 italic text-gray-400">
            “Is this something you will use once or twice a day, and does it make your life better?”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
