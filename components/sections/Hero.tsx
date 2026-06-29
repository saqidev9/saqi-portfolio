"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { siteConfig } from "@/data/site";
import { NeonButton } from "@/components/ui/NeonButton";
import { Badge } from "@/components/ui/Badge";
import { Terminal } from "@/components/ui/Terminal";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Ambient glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 mask-fade-bottom"
      >
        <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-float rounded-full bg-cyan/20 blur-[100px]" />
        <div className="absolute right-1/4 top-1/3 h-80 w-80 animate-float rounded-full bg-violet/20 blur-[120px] [animation-delay:-3s]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6">
            <Badge
              label={
                <>
                  <span className="sm:hidden">available_for_freelance</span>
                  <span className="hidden sm:inline">
                    status: available_for_freelance_work
                  </span>
                </>
              }
            />
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            I build fast,{" "}
            <span className="text-gradient">full-stack web applications</span>{" "}
            — from idea to deployment.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-lg text-ink-secondary"
          >
            {siteConfig.subTagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <NeonButton href="#projects" variant="primary" icon={<ArrowRight size={16} />}>
              View my work
            </NeonButton>
            <NeonButton href="#contact" variant="outline">
              Let&apos;s talk
            </NeonButton>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-ink-tertiary transition-colors hover:text-cyan"
            >
              <Github size={15} />
              github.com/saqidev9
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
