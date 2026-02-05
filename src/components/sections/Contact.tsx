"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-space-light/20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-orbitron mb-8 text-center text-warriors-gold"
        >
          Contact
        </motion.h2>

        <div className="max-w-2xl mx-auto bg-space-dark border border-warriors-blue/20 rounded-2xl p-6 md:p-8">
          <p className="text-gray-300 text-sm mb-6">
            Want to collaborate, hire, or just say hi? Reach me here:
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href="mailto:pchitlu@purdue.edu"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-warriors-gold/30 bg-space-light/10 px-4 py-2 text-gray-100 hover:border-warriors-gold/60 hover:text-warriors-gold transition"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href="https://linkedin.com/in/pradyum-chitlu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-warriors-blue/30 bg-space-light/10 px-4 py-2 text-gray-100 hover:border-warriors-gold/60 hover:text-warriors-gold transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/pradyumchitlu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-warriors-blue/30 bg-space-light/10 px-4 py-2 text-gray-100 hover:border-warriors-gold/60 hover:text-warriors-gold transition"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
