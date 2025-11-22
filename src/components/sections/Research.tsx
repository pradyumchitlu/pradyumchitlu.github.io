"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const research = [
    {
        title: "Interpretable ML for Climate-Driven Crop Yield Risk",
        venue: "Published at AGU Fall Meeting 2023",
        description: [
            "Pioneered a climate risk model by blending vast datasets (1895–2023) from NOAA and USDA to predict agricultural outcomes.",
            "Applied advanced XGBoost and SHAP techniques to forecast crop yields and explain the 'why' behind predictions.",
        ],
        link: "https://ui.adsabs.harvard.edu/abs/2023AGUFMED41C0891U/abstract",
    },
    {
        title: "Computational Biology Research",
        venue: "Carnegie Mellon University Pre-College Program",
        description: [
            "Selected for a competitive research program focused on the intersection of AI and biology.",
            "Developed Python algorithms to assemble microbial genomes from raw DNA sequences and used machine learning to identify bacterial genomes.",
        ],
    },
];

export default function Research() {
    return (
        <section id="research" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold font-orbitron mb-12 text-center text-warriors-gold"
                >
                    Research & Presentations
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {research.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-space-light/30 backdrop-blur-sm p-8 rounded-xl border border-warriors-blue/20 hover:border-flash-red/50 transition-all duration-300 group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-bold text-white font-exo2 group-hover:text-flash-red transition-colors">
                                    {item.title}
                                </h3>
                                <FileText className="text-gray-500 group-hover:text-flash-red transition-colors" />
                            </div>

                            <p className="text-sm text-warriors-gold font-mono mb-4">{item.venue}</p>

                            <ul className="space-y-2 mb-4">
                                {item.description.map((desc, i) => (
                                    <li key={i} className="text-gray-400 text-sm">
                                        • {desc}
                                    </li>
                                ))}
                            </ul>

                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-cyan-400 hover:text-cyan-300 uppercase tracking-wider font-bold"
                                >
                                    View Abstract →
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
