import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { GlassCard } from "@/components/ui/GlassCard";
import { siteConfig } from "@/data/site";

const facts = [
  { key: "role", value: siteConfig.role },
  { key: "based_in", value: siteConfig.location },
  { key: "focus", value: "react + node web apps" },
  { key: "availability", value: "open_to_freelance_work" },
];

export function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <FadeInWhenVisible>
          <SectionHeading
            eyebrow="about"
            title="A developer who ships, not just codes."
          />
        </FadeInWhenVisible>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <FadeInWhenVisible delay={0.1} className="space-y-5 text-lg text-ink-secondary lg:order-1">
            <p>
              I&apos;m a full-stack developer who recently completed an
              intensive internship building a production-grade{" "}
              <span className="text-ink-primary">Student Reporting System</span>{" "}
              — handling everything from authentication to admin workflows to
              REST APIs, end to end.
            </p>
            <p>
              I care about clean code, clear communication, and shipping
              things that actually work. As a developer early in my freelance
              career, I bring full attention to every project, a modern
              stack, and fast turnaround — without the overhead of a big
              agency.
            </p>
            <p>
              If you need a website or web app built properly the first
              time, I&apos;d be glad to talk through your project.
            </p>
          </FadeInWhenVisible>

          <div className="space-y-6 lg:order-2">
            <FadeInWhenVisible delay={0.15}>
              <div className="relative mx-auto w-full max-w-xs">
                <div
                  aria-hidden
                  className="absolute -inset-1 rounded-[28px] bg-neon-gradient opacity-30 blur-xl"
                />
                <div className="glass-panel relative overflow-hidden rounded-3xl p-1.5">
                  <Image
                    src="/saqi-photo.jpg"
                    alt="Saqi — Full-Stack Web Developer"
                    width={480}
                    height={599}
                    className="w-full rounded-[22px] object-cover"
                    priority
                  />
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.25}>
              <GlassCard tilt={false} className="font-mono text-sm leading-relaxed">
                <p className="text-ink-tertiary">{"{"}</p>
                {facts.map((fact) => (
                  <p key={fact.key} className="pl-5">
                    <span className="text-cyan">&quot;{fact.key}&quot;</span>
                    <span className="text-ink-tertiary">: </span>
                    <span className="text-violet">&quot;{fact.value}&quot;</span>
                    <span className="text-ink-tertiary">,</span>
                  </p>
                ))}
                <p className="text-ink-tertiary">{"}"}</p>
              </GlassCard>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
}
