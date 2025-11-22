"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const products = [
    {
        title: "Labor Market Intelligence Platform",
        tech: "GCP, BigQuery, Docker, SQL",
        type: "Live App",
        description: [
            "Architected and operate a live, serverless AI platform on Google Cloud, providing real-time salary analytics to users while maintaining 99.9% operational uptime.",
            "Engineered a 95% reduction in operational costs (from $50K+ to <$10/month), designing a business model that was previously cost-prohibitive.",
            "Developed scalable data pipelines in BigQuery to ingest and process over 15,000 records, forming the core data engine of the platform.",
        ],
        link: "https://ai-jobs-dashboard-bdbs2vtlca-uc.a.run.app/",
    },
    {
        title: "ArisTalkle – AI Debate Platform",
        tech: "Flask, MongoDB, LLM APIs",
        type: "Award-Winning",
        description: [
            "Led product development from concept to award-winning prototype for an AI-driven debate platform, integrating multiple LLM and Text-to-Speech APIs.",
            "Achieved top recognition for commercial potential ('Most Likely to Become a Business') in a competition of over 200 teams.",
        ],
        link: "https://devpost.com/software/aristalkle",
    },
    {
        title: "CricCatapult – Open-Source Package",
        tech: "Python, Selenium, SQL",
        type: "20,000+ Downloads",
        description: [
            "Engineered a popular Python toolkit for large-scale sports analytics, empowering a global user base to process over 500,000 cricket match records with ease.",
            "Accepted to present at the Carnegie Mellon Sports Analytics Conference (CMSAC), highlighting the package's impact on the sports data community.",
        ],
        link: "https://github.com/aadrijupadya/CricCatapult",
    },
];

export default function Products() {
    return (
        <section id="products" className="py-20 bg-space-light/20 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold font-orbitron mb-12 text-center text-warriors-gold"
                >
                    Products & Leadership
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-space-dark border border-warriors-blue/20 rounded-xl p-6 hover:border-warriors-gold transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(29,66,138,0.3)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-warriors-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white font-exo2 group-hover:text-warriors-gold transition-colors">
                                        {product.title}
                                    </h3>
                                    {product.link && (
                                        <a href={product.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <span className="text-xs font-orbitron text-flash-yellow bg-flash-yellow/10 px-2 py-1 rounded border border-flash-yellow/20">
                                        {product.type}
                                    </span>
                                    <span className="block mt-2 text-sm text-cyan-400 font-mono">{product.tech}</span>
                                </div>

                                <ul className="space-y-2">
                                    {product.description.map((item, i) => (
                                        <li key={i} className="text-gray-400 text-sm leading-relaxed">
                                            • {item}
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
