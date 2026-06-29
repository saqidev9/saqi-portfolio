import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { GlassCard } from "@/components/ui/GlassCard";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <FadeInWhenVisible>
          <SectionHeading eyebrow="experience" title="How I got here." />
        </FadeInWhenVisible>

        <div className="relative mt-14 space-y-10">
          <div
            aria-hidden
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan via-violet to-transparent sm:left-[11px]"
          />

          {experience.map((entry, i) => (
            <FadeInWhenVisible key={entry.role} delay={i * 0.12}>
              <div className="relative pl-8 sm:pl-12">
                <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full bg-void ring-2 ring-cyan sm:h-5 sm:w-5" />
                <GlassCard tilt={false}>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                    {entry.period}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-medium">
                    {entry.role}
                  </h3>
                  <p className="text-sm text-ink-tertiary">{entry.org}</p>
                  <p className="mt-3 text-ink-secondary">{entry.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-hairline bg-white/[0.03] px-3 py-1 font-mono text-xs text-ink-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
