import type { Metadata } from "next";
import { getContent } from "@/lib/data";
import PageTransition from "@/components/ui/PageTransition";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/sections/CTASection";
import ProcessSteps from "./ProcessSteps";

export const metadata: Metadata = {
  title: "Process",
  description:
    "My development process — from discovery to launch. How I work to deliver exceptional results.",
};

export default function ProcessPage() {
  const { process } = getContent();

  return (
    <PageTransition>
      <div className="pt-32">
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <AnimatedSection>
            <p className="mb-4 text-sm font-medium tracking-widest text-indigo-400 uppercase">
              My Process
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              How I <span className="text-indigo-400">work</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-400">
              A proven methodology that ensures quality, transparency, and
              on-time delivery.
            </p>
          </AnimatedSection>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-12">
          <ProcessSteps steps={process} />
        </section>

        <CTASection />
      </div>
    </PageTransition>
  );
}
