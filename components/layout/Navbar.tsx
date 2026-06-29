"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { NeonButton } from "@/components/ui/NeonButton";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-display text-lg font-medium tracking-tight">
          {siteConfig.name}
          <span className="text-cyan">.</span>dev
        </a>

        <nav
          className={cn(
            "hidden items-center gap-7 rounded-full px-2 transition-all duration-300 md:flex",
            scrolled && "glass-panel px-6 py-2"
          )}
        >
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="route-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <NeonButton href="#contact" variant="primary" className="px-5 py-2.5">
            Hire me
          </NeonButton>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="glass-panel rounded-full p-2.5 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-6 mt-3 overflow-hidden md:hidden"
          >
            <div className="glass-panel flex flex-col gap-4 p-6">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="route-link text-base"
                >
                  {item.label}
                </a>
              ))}
              <NeonButton href="#contact" variant="primary" className="justify-center">
                Hire me
              </NeonButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
