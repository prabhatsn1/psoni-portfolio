import type { Metadata } from "next";
import { getContent } from "@/lib/data";
import PageTransition from "@/components/ui/PageTransition";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowCard from "@/components/ui/GlowCard";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Freelance software engineering services — web development, mobile apps, frontend architecture, and UI engineering.",
};

export default function ServicesPage() {
  const { services } = getContent();

  return (
    <PageTransition>
      <div className="pt-32">
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <AnimatedSection>
            <p className="mb-4 text-sm font-medium tracking-widest text-indigo-400 uppercase">
              Services
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              What I can do for{" "}
              <span className="text-indigo-400">your team</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-400">
              I offer end-to-end engineering services, from architecture and
              planning through development and deployment.
            </p>
          </AnimatedSection>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.1}>
                <GlowCard className="h-full">
                  <div className="mb-4 text-4xl">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-zinc-300"
                      >
                        <span className="mt-0.5 text-indigo-400">→</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <CTASection />
      </div>
    </PageTransition>
  );
}
