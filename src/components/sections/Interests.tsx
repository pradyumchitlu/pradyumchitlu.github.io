"use client";

import { motion } from "framer-motion";
import { Trophy, Activity } from "lucide-react";

export default function Interests() {
    return (
        <section id="interests" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold font-orbitron mb-12 text-center text-warriors-gold"
                >
                    Interests
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Chess Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-space-light/30 backdrop-blur-sm p-8 rounded-xl border border-warriors-blue/20 hover:border-warriors-gold/50 transition-all duration-300"
                    >
                        <div className="flex items-center mb-6">
                            <Trophy className="text-warriors-gold w-8 h-8 mr-4" />
                            <h3 className="text-2xl font-bold text-white font-orbitron">Chess</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-end">
                                <span className="text-4xl font-bold text-flash-yellow font-mono">2000</span>
                                <span className="text-gray-400 ml-2 mb-1">Rating (Chess.com)</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Strategic thinker with a passion for complex problem solving. Ranked in the top percentile of players globally.
                            </p>
                        </div>
                    </motion.div>

                    {/* Sports Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-space-light/30 backdrop-blur-sm p-8 rounded-xl border border-warriors-blue/20 hover:border-flash-red/50 transition-all duration-300"
                    >
                        <div className="flex items-center mb-6">
                            <Activity className="text-flash-red w-8 h-8 mr-4" />
                            <h3 className="text-2xl font-bold text-white font-orbitron">Sports</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-warriors-blue/20 text-warriors-gold border border-warriors-gold/20 rounded-lg font-exo2">
                                    Basketball
                                </span>
                                <span className="px-4 py-2 bg-flash-red/20 text-flash-red border border-flash-red/20 rounded-lg font-exo2">
                                    Football
                                </span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed mt-4">
                                Active participant in competitive sports leagues. I bring the same level of dedication and teamwork from the court/field to my engineering projects.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
