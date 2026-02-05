"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { API_BASE_URL } from "@/lib/env";
import { Linkedin, Mail, Send } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);

  const apiEnabled = useMemo(() => {
    if (!API_BASE_URL) return false;
    const isLocalApi =
      API_BASE_URL.startsWith("http://localhost") ||
      API_BASE_URL.startsWith("http://127.0.0.1");
    const isLocalSite = typeof window !== "undefined" && window.location.hostname === "localhost";
    return !isLocalApi || isLocalSite;
  }, []);

  const canSubmit = useMemo(() => {
    if (status === "sending") return false;
    if (!apiEnabled) return false;
    return form.name.trim().length > 0 && form.email.trim().length > 0 && form.message.trim().length > 0;
  }, [apiEnabled, form.email, form.message, form.name, status]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("sending");

    try {
      if (!apiEnabled) throw new Error("Backend not configured");
      const resp = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const json = (await resp.json().catch(() => null)) as null | { error?: string };
      if (!resp.ok) {
        throw new Error(json?.error ?? `Request failed (${resp.status})`);
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

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
            Want to collaborate, hire, or just say hi? Best way to reach me is email or LinkedIn.
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
          </div>

          {apiEnabled ? (
            <>
              <p className="text-gray-400 text-sm mb-4">
                Or send a message here (enabled when the backend API is configured).
              </p>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="space-y-2">
                    <span className="text-xs uppercase tracking-wider text-gray-400">Name</span>
                    <input
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full rounded-lg bg-space-light/20 border border-warriors-blue/20 px-3 py-2 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-warriors-gold/50"
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-xs uppercase tracking-wider text-gray-400">Email</span>
                    <input
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full rounded-lg bg-space-light/20 border border-warriors-blue/20 px-3 py-2 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-warriors-gold/50"
                      placeholder="you@example.com"
                      type="email"
                      autoComplete="email"
                    />
                  </label>
                </div>

                <label className="space-y-2 block">
                  <span className="text-xs uppercase tracking-wider text-gray-400">Message</span>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full min-h-[140px] rounded-lg bg-space-light/20 border border-warriors-blue/20 px-3 py-2 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-warriors-gold/50"
                    placeholder="What do you want to build?"
                  />
                </label>

                {error && <p className="text-sm text-flash-red">{error}</p>}
                {status === "sent" && (
                  <p className="text-sm text-cyan-300">Message sent — I’ll get back to you soon.</p>
                )}

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="inline-flex items-center justify-center gap-2 w-full md:w-auto rounded-lg bg-warriors-gold text-space-dark px-4 py-2 font-bold font-orbitron disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 transition"
                >
                  <Send size={18} />
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>
              </form>
            </>
          ) : (
            <p className="text-sm text-gray-500">
              Contact form is disabled on the static site (no backend). If you’re running locally, set{" "}
              <span className="font-mono text-gray-300">NEXT_PUBLIC_API_BASE_URL</span> to enable it.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
