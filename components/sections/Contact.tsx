"use client";

import { type FormEvent, useState } from "react";
import { Mail, Github, Linkedin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { GlassCard } from "@/components/ui/GlassCard";
import { siteConfig } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <FadeInWhenVisible>
          <SectionHeading
            eyebrow="contact"
            title="Let's build something together."
            subtitle="Have a project in mind? Tell me a bit about it and I'll reply within a day."
          />
        </FadeInWhenVisible>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeInWhenVisible delay={0.1} className="space-y-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 font-mono text-sm text-ink-secondary transition-colors hover:text-cyan"
            >
              <Mail size={17} />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-sm text-ink-secondary transition-colors hover:text-cyan"
            >
              <Github size={17} />
              github.com/saqidev9
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-sm text-ink-secondary transition-colors hover:text-cyan"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>

            <p className="pt-4 text-sm text-ink-tertiary">
              Based in {siteConfig.location} — working with clients
              remotely, worldwide.
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <GlassCard tilt={false}>
              {status === "success" ? (
                <div className="flex flex-col items-center gap-3 py-10 text-center">
                  <CheckCircle2 size={36} className="text-signal" />
                  <p className="font-display text-lg">Message sent.</p>
                  <p className="text-sm text-ink-secondary">
                    Thanks for reaching out — I&apos;ll get back to you within a day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm text-ink-secondary">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-border-hairline bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-cyan/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-ink-secondary">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-border-hairline bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-cyan/50"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm text-ink-secondary">
                      Project details
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-border-hairline bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-cyan/50"
                      placeholder="What are you looking to build?"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-[#E2725B]">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-neon-gradient px-6 py-3 text-sm font-medium text-void shadow-neon-cyan transition-shadow hover:shadow-neon-violet disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
