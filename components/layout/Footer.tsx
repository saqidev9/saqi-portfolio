import { Github, Linkedin, ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border-hairline px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-mono text-xs text-ink-tertiary">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js
          &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-tertiary transition-colors hover:text-cyan"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-tertiary transition-colors hover:text-cyan"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="glass-panel rounded-full p-2 text-ink-tertiary transition-colors hover:text-cyan"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
