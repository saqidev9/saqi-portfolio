"use client";

import { useLayoutEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const NAME = "SAQI";
const STORAGE_KEY = "saqi-portfolio-visited";
const DISPLAY_DURATION = 1900; // ms the preloader stays up before exiting

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const alreadyVisited = sessionStorage.getItem(STORAGE_KEY);

    if (alreadyVisited || shouldReduceMotion) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem(STORAGE_KEY, "true");
    }, DISPLAY_DURATION);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7 bg-void"
        >
          {/* Name reveal - letters slide up out of a clipped mask */}
          <div className="overflow-hidden">
            <div className="flex">
              {NAME.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.15 + i * 0.08,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-display text-6xl font-medium tracking-tight text-ink-primary sm:text-7xl"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-ink-tertiary"
          >
            full-stack developer
          </motion.p>

          {/* Loading bar */}
          <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
              className="h-full bg-neon-gradient"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
