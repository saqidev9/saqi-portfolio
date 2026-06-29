"use client";

import { useTypewriter } from "@/lib/hooks/useTypewriter";
import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";

export function Terminal() {
  const { visibleLines } = useTypewriter(siteConfig.terminalLines);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="glass-panel w-full max-w-md overflow-hidden"
    >
      <div className="flex items-center gap-2 border-b border-border-hairline px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E2725B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E2B33C]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#39FF8A]" />
        <span className="ml-2 font-mono text-xs text-ink-tertiary">saqi@portfolio:~</span>
      </div>
      <div className="min-h-[180px] space-y-2 p-5 font-mono text-sm">
        {visibleLines.map((line, i) => (
          <div key={i}>
            <div className="flex gap-2">
              <span className="text-violet">➜</span>
              <span className="text-ink-primary">{line.prompt}</span>
              {!line.promptDone && <span className="animate-blink text-cyan">▍</span>}
            </div>
            {line.response && (
              <div className="pl-5 text-cyan">
                {line.response}
                {line.promptDone && i === visibleLines.length - 1 && (
                  <span className="animate-blink">▍</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
