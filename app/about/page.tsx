import type { Metadata } from "next";
import { getContent } from "@/lib/data";
import PageTransition from "@/components/ui/PageTransition";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowCard from "@/components/ui/GlowCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp, slideInLeft } from "@/lib/motion";
import AboutTimeline from "./AboutTimeline";
import AboutSkillGrid from "./AboutSkillGrid";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Alex Morgan — a freelance software engineer with 7+ years of experience in Next.js and React Native.",
};

export default function AboutPage() {
  const { about, experience, skills, personal } = getContent();

  return (
    <PageTransition>
      <div className="pt-32">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <AnimatedSection>
            <p className="mb-4 text-sm font-medium tracking-widest text-indigo-400 uppercase">
              About Me
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              Engineering software that{" "}
              <span className="text-indigo-400">scales</span>
            </h1>
          </AnimatedSection>

          <div className="mt-12 grid gap-12 lg:grid-cols-5">
            <AnimatedSection className="lg:col-span-3" delay={0.1}>
              <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
                {about.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-2" delay={0.2}>
              <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
                <h3 className="mb-4 text-sm font-semibold tracking-wider text-zinc-300 uppercase">
                  Quick Facts
                </h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-zinc-500">Location</dt>
                    <dd className="text-zinc-300">{personal.location}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-zinc-500">Availability</dt>
                    <dd className="text-green-400">Open to projects</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-zinc-500">Experience</dt>
                    <dd className="text-zinc-300">7+ years</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-zinc-500">Focus</dt>
                    <dd className="text-zinc-300">Next.js & React Native</dd>
                  </div>
                </dl>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            title="Values & Principles"
            subtitle="What drives how I work"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {about.values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <GlowCard>
                  <h3 className="text-lg font-semibold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {v.description}
                  </p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            title="Experience"
            subtitle="My professional journey"
          />
          <AboutTimeline experience={experience} />
        </section>

        {/* Tech Stack */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            title="Tech Stack"
            subtitle="Technologies I work with daily"
          />
          <AboutSkillGrid skills={skills} />
        </section>

        {/* Working Style */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading title="How I Work" />
          <AnimatedSection>
            <ul className="grid gap-4 md:grid-cols-2">
              {about.workingStyle.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-zinc-900/30 p-5"
                >
                  <span className="mt-0.5 text-indigo-400">✓</span>
                  <span className="text-zinc-300">{s}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </section>
      </div>
    </PageTransition>
  );
}
