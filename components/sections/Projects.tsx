import { Github, ExternalLink, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { GlassCard } from "@/components/ui/GlassCard";
import { projects } from "@/data/projects";

export function Projects() {
  const [flagship, ...rest] = projects;

  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <FadeInWhenVisible>
          <SectionHeading
            eyebrow="work"
            title="Selected work."
            subtitle="A look at what I've built — case studies, not just code snippets."
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1} className="mt-14">
          <GlassCard tilt={false}>
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="eyebrow-code mb-2">flagship project</p>
                <h3 className="font-display text-2xl font-medium">
                  {flagship.title}
                </h3>
                <p className="mt-3 text-ink-secondary">{flagship.description}</p>

                <div className="mt-6 space-y-4 text-sm">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-violet">
                      Problem
                    </p>
                    <p className="mt-1 text-ink-secondary">{flagship.problem}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-violet">
                      Solution
                    </p>
                    <p className="mt-1 text-ink-secondary">{flagship.solution}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-violet">
                      Impact
                    </p>
                    <p className="mt-1 text-ink-secondary">{flagship.impact}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {flagship.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border-hairline bg-white/[0.03] px-3 py-1 font-mono text-xs text-ink-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  {flagship.links.code ? (
                    <a
                      href={flagship.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-panel flex items-center justify-center gap-2 px-4 py-2.5 text-sm transition-colors hover:text-cyan"
                    >
                      <Github size={15} /> View code
                    </a>
                  ) : (
                    <span className="flex items-center justify-center gap-2 rounded-full border border-border-hairline px-4 py-2.5 text-sm text-ink-tertiary">
                      <Clock size={15} /> Code repo coming soon
                    </span>
                  )}
                  {flagship.links.demo ? (
                    <a
                      href={flagship.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full bg-neon-gradient px-4 py-2.5 text-sm font-medium text-void"
                    >
                      <ExternalLink size={15} /> Live demo
                    </a>
                  ) : (
                    <span className="flex items-center justify-center gap-2 rounded-full border border-border-hairline px-4 py-2.5 text-sm text-ink-tertiary">
                      <Clock size={15} /> Live demo coming soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          </GlassCard>
        </FadeInWhenVisible>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {rest.map((project, i) => (
            <FadeInWhenVisible key={project.title} delay={0.15 + i * 0.1}>
              <GlassCard className="h-full">
                <h4 className="font-display text-lg font-medium">
                  {project.title}
                </h4>
                <p className="mt-2 text-sm text-ink-secondary">
                  {project.description}
                </p>
                {project.note && (
                  <p className="mt-2 font-mono text-xs text-ink-tertiary">
                    {project.note}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border-hairline bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-ink-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5">
                  {project.links.code ? (
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-ink-secondary transition-colors hover:text-cyan"
                    >
                      <Github size={14} /> View code
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 font-mono text-xs text-ink-tertiary">
                      <Clock size={14} /> Coming soon
                    </span>
                  )}
                </div>
              </GlassCard>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
