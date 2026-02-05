"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects as fallbackProjects, type Project } from "@/data/projects";
import { API_BASE_URL } from "@/lib/env";

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>(fallbackProjects);

    useEffect(() => {
        const isLocalApi =
            API_BASE_URL.startsWith("http://localhost") ||
            API_BASE_URL.startsWith("http://127.0.0.1");
        const isLocalSite = typeof window !== "undefined" && window.location.hostname === "localhost";
        const apiEnabled = API_BASE_URL.length > 0 && (!isLocalApi || isLocalSite);
        if (!apiEnabled) return;

        let cancelled = false;

        async function load() {
            try {
                const resp = await fetch(`${API_BASE_URL}/projects`, { method: "GET" });
                if (!resp.ok) return;
                const json = (await resp.json().catch(() => null)) as unknown;
                if (!Array.isArray(json)) return;

                const maybeProjects = json.filter((item) => {
                    if (!item || typeof item !== "object") return false;
                    const p = item as Partial<Project>;
                    return typeof p.slug === "string" && typeof p.title === "string" && typeof p.type === "string";
                }) as Project[];

                if (cancelled || maybeProjects.length === 0) return;
                setProjects(maybeProjects);
            } catch {
                // ignore; fallback to static projects
            }
        }

        void load();
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <section id="projects" className="py-20 bg-space-light/20 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold font-orbitron mb-12 text-center text-warriors-gold"
                >
                    Selected Work
                </motion.h2>

                <p className="text-center text-sm text-gray-400 max-w-3xl mx-auto mb-10">
                    Applied AI and inference systems, backed by real-time data pipelines and cloud infrastructure.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-space-dark border border-warriors-blue/20 rounded-xl p-6 hover:border-warriors-gold transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(34,211,238,0.18)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-warriors-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white font-exo2 group-hover:text-warriors-gold transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.href && (
                                        <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <span className="text-xs font-orbitron text-warriors-gold bg-warriors-gold/10 px-2 py-1 rounded border border-warriors-gold/20">
                                        {project.type}
                                    </span>
                                    <span className="block mt-2 text-sm text-gray-200 font-mono">
                                        {project.tech.join(", ")}
                                    </span>
                                </div>

                                <ul className="space-y-2">
                                    {project.highlights.map((item, i) => (
                                        <li key={i} className="text-gray-400 text-sm leading-relaxed">
                                            • {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <a
                        href="https://github.com/pradyumchitlu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono text-gray-400 hover:text-warriors-gold transition-colors"
                    >
                        More projects on GitHub →
                    </a>
                </div>
            </div>
        </section>
    );
}
