"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NeonButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  icon?: ReactNode;
}

export function NeonButton({
  href,
  children,
  variant = "primary",
  className,
  icon,
}: NeonButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto");

  const content = (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-shadow",
        variant === "primary" &&
          "bg-neon-gradient text-void shadow-neon-cyan hover:shadow-neon-violet",
        variant === "outline" &&
          "glass-panel text-ink-primary hover:border-cyan/50 hover:text-cyan",
        className
      )}
    >
      {children}
      {icon}
    </motion.span>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
