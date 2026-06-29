import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { GlassCard } from "@/components/ui/GlassCard";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <FadeInWhenVisible>
          <SectionHeading
            eyebrow="skills"
            title="Tools I use to solve real problems."
            align="center"
          />
        </FadeInWhenVisible>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {skillGroups.map((group, i) => (
            <FadeInWhenVisible key={group.category} delay={i * 0.1}>
              <GlassCard className="h-full">
                <h3 className="font-display text-lg font-medium">
                  {group.category}
                </h3>
                <p className="mt-2 text-sm text-ink-secondary">
                  {group.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border-hairline bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-ink-primary transition-all hover:border-cyan/50 hover:text-cyan hover:shadow-neon-cyan"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
