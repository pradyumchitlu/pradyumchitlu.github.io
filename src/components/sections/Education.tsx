"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-20 bg-space-light/20 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold font-orbitron mb-12 text-center text-warriors-gold"
                >
                    Education
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-space-dark border border-warriors-gold/30 rounded-2xl p-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <GraduationCap size={120} className="text-warriors-gold" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white font-orbitron">Purdue University</h3>
                                <p className="text-warriors-gold font-exo2">B.S. in Computer Science (Machine Intelligence Track) & Data Science</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Relevant Coursework</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Data Structures & Algorithms, Linear Algebra, Multivariable Calculus, Statistics & Probability, Data Mining with R, Computer Science in Java, C, C++, Computer Architecture (ARM)
                                </p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Standardized Testing</h4>
                                <p className="text-gray-300 text-sm">
                                    <span className="text-white font-bold">SAT:</span> 1590/1600
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
