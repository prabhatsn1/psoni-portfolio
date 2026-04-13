import type { Metadata } from "next";
import { getContent } from "@/lib/data";
import PageTransition from "@/components/ui/PageTransition";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectGrid from "./ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web and mobile projects built with Next.js, React Native, and more.",
};

export default function ProjectsPage() {
  const { projects } = getContent();

  return (
    <PageTransition>
      <div className="pt-32">
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <AnimatedSection>
            <p className="mb-4 text-sm font-medium tracking-widest text-indigo-400 uppercase">
              Portfolio
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              Selected <span className="text-indigo-400">work</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-400">
              A collection of projects I&apos;ve built — from fintech dashboards
              to health-tech mobile apps.
            </p>
          </AnimatedSection>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <ProjectGrid projects={projects} />
        </section>
      </div>
    </PageTransition>
  );
}
