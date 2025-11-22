"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        >
            {/* Speed Force Background Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-warriors-blue/20 via-space-dark to-space-dark" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

                {/* Animated Lightning Lines */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-flash-yellow to-transparent animate-pulse-fast" style={{ animationDuration: '3s' }} />
                    <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-transparent via-flash-yellow to-transparent animate-pulse-fast" style={{ animationDuration: '5s', animationDelay: '1s' }} />
                    <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-flash-red to-transparent animate-pulse-fast" style={{ animationDuration: '4s' }} />
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative inline-block"
                >
                    <div className="absolute -inset-4 bg-warriors-gold/30 rounded-full blur-xl animate-pulse-fast" />
                    <Image
                        src="/assets/profile.jpg"
                        alt="Pradyum Chitlu"
                        width={200}
                        height={200}
                        className="rounded-full border-4 border-warriors-gold shadow-[0_0_30px_rgba(255,199,44,0.5)] relative z-10 object-cover"
                        priority
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold font-orbitron mb-4 bg-clip-text text-transparent bg-gradient-to-r from-warriors-gold via-flash-yellow to-warriors-gold"
                >
                    Pradyum Chitlu
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-exo2"
                >
                    Software Engineer specializing in building and scaling cloud-native AI products from zero to one
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex justify-center space-x-6"
                >
                    <SocialLink href="mailto:pchitlu@purdue.edu" icon={<Mail />} label="Email" />
                    <SocialLink href="https://linkedin.com/in/pradyum-chitlu" icon={<Linkedin />} label="LinkedIn" />
                    <SocialLink href="https://github.com/pradyumchitlu" icon={<Github />} label="GitHub" />
                </motion.div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-space-light border border-warriors-blue/30 text-gray-300 hover:text-warriors-gold hover:border-warriors-gold hover:shadow-[0_0_15px_rgba(255,199,44,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            aria-label={label}
        >
            {icon}
        </a>
    );
}
