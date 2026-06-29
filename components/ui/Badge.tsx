import { type ReactNode } from "react";

interface BadgeProps {
  label: ReactNode;
  tone?: "signal" | "cyan";
}

export function Badge({ label, tone = "signal" }: BadgeProps) {
  const dotColor = tone === "signal" ? "bg-signal" : "bg-cyan";
  return (
    <div className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5">
      <span className="relative flex h-2 w-2 shrink-0">
        <span
          className={`absolute h-2 w-2 rounded-full ${dotColor} animate-pulse-dot`}
        />
        <span className={`h-2 w-2 rounded-full ${dotColor}`} />
      </span>
      <span className="whitespace-nowrap font-mono text-xs text-ink-secondary">
        {label}
      </span>
    </div>
  );
}
