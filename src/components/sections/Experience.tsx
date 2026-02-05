"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Microscope, Trophy } from "lucide-react";

type Entry = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  meta: string;
  highlights: string[];
  href?: string;
  hrefLabel?: string;
};

const entries: Entry[] = [
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Purdue University",
    subtitle: "B.S. Computer Science (Machine Intelligence) & B.S. Data Science",
    meta: "Expected May 2027 • West Lafayette, IN",
    highlights: [
      "Coursework: Data Structures & Algorithms, Systems Programming (C/C++), Distributed Systems, Statistics, Data Mining, Linear Algebra.",
      "SAT: 1590/1600.",
    ],
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "Purdue Boiler Quant Finance Group",
    subtitle: "Team Lead & Quantitative Analyst",
    meta: "Jan 2025 — Present • West Lafayette, IN",
    highlights: [
      "Ranked 1st of 30+ students in trading competition; outperformed interns from Akuna Capital, TMG, and SIG.",
      "Leading development of prediction-market strategies using the Kalshi API; applying ML/statistical modeling for alpha generation.",
    ],
  },
  {
    icon: <Microscope className="h-5 w-5" />,
    title: "Interpretable ML for Climate-Driven Crop Yield Risk",
    subtitle: "AGU Fall Meeting 2023 (Poster)",
    meta: "2023 • Research",
    highlights: [
      "Built an XGBoost + SHAP climate risk model using 128 years of NOAA/USDA data; achieved 92% accuracy on yield forecasting.",
      "Focused on interpretability: explained feature drivers and communicated results for non-ML stakeholders.",
    ],
    href: "https://ui.adsabs.harvard.edu/abs/2023AGUFMED41C0891U/abstract",
    hrefLabel: "Abstract",
  },
  {
    icon: <Trophy className="h-5 w-5" />,
    title: "Leadership & Recognition",
    subtitle: "Speaker • Organizer • Varsity Athlete",
    meta: "2022 — Present",
    highlights: [
      "Invited Speaker: Carnegie Mellon Sports Analytics Conference (2022).",
      "Hackathon Organizer: directed a nationwide sports analytics competition with MLB judges.",
      "Varsity Athlete: CIF State Track & Field qualifier.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-orbitron mb-10 text-center text-warriors-gold"
        >
          Experience
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {entries.map((entry, index) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative bg-space-light/20 border border-warriors-blue/20 rounded-2xl p-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-warriors-blue/10 to-transparent opacity-60" />
              <div className="relative z-10">
                <div className="flex items-start gap-3">
                  <div className="mt-1 shrink-0 rounded-lg border border-warriors-gold/30 bg-space-dark/60 p-2 text-warriors-gold">
                    {entry.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-white font-exo2">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-gray-300">{entry.subtitle}</p>
                    <p className="text-xs text-gray-500 font-mono mt-1">{entry.meta}</p>
                    {entry.href && (
                      <a
                        href={entry.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-xs font-mono text-warriors-gold/90 hover:text-warriors-gold"
                      >
                        {entry.hrefLabel ?? "Link"} →
                      </a>
                    )}
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {entry.highlights.map((item) => (
                    <li key={item} className="text-sm text-gray-300 leading-relaxed">
                      <span className="text-warriors-gold/90">•</span> {item}
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
