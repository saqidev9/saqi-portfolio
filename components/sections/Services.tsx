import { Code2, Layers, Webhook, LayoutDashboard, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { services } from "@/data/services";

const iconMap = { Code2, Layers, Webhook, LayoutDashboard };

export function Services() {
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <FadeInWhenVisible>
          <SectionHeading
            eyebrow="services"
            title="What I can build for you."
            subtitle="Focused on one thing: full website and web app development, done well."
          />
        </FadeInWhenVisible>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <FadeInWhenVisible key={service.title} delay={i * 0.08}>
                <GlassCard className="h-full">
                  <div className="mb-4 inline-flex rounded-xl bg-neon-gradient-soft p-3">
                    <Icon size={22} className="text-cyan" />
                  </div>
                  <h3 className="font-display text-lg font-medium">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-secondary">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {service.included.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-2 text-sm text-ink-secondary"
                      >
                        <Check size={15} className="mt-0.5 shrink-0 text-signal" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </FadeInWhenVisible>
            );
          })}
        </div>

        <FadeInWhenVisible delay={0.3} className="mt-12 text-center">
          <p className="mb-4 text-ink-secondary">
            Have a project that doesn&apos;t fit neatly into a box?
          </p>
          <NeonButton href="#contact" variant="outline">
            Let&apos;s discuss it
          </NeonButton>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
