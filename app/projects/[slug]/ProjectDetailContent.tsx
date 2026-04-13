"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { CaseStudy } from "@/types/content";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ProjectDetailContent({
  caseStudy,
}: {
  caseStudy: CaseStudy;
}) {
  const metricsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: metricsRef,
    offset: ["start end", "end start"],
  });
  const metricsScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <div className="space-y-16">
      {/* Problem */}
      <AnimatedSection>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-400">
          The Problem
        </h2>
        <p className="text-lg leading-relaxed text-zinc-300">
          {caseStudy.problem}
        </p>
      </AnimatedSection>

      {/* Solution */}
      <AnimatedSection>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-400">
          The Solution
        </h2>
        <p className="text-lg leading-relaxed text-zinc-300">
          {caseStudy.solution}
        </p>
      </AnimatedSection>

      {/* Approach */}
      <AnimatedSection>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-400">
          Approach
        </h2>
        <ol className="space-y-4">
          {caseStudy.approach.map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-sm font-bold text-indigo-400">
                {i + 1}
              </span>
              <p className="pt-1 text-zinc-300">{step}</p>
            </li>
          ))}
        </ol>
      </AnimatedSection>

      {/* Outcome */}
      <AnimatedSection>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-400">
          Outcome
        </h2>
        <p className="text-lg leading-relaxed text-zinc-300">
          {caseStudy.outcome}
        </p>
      </AnimatedSection>

      {/* Metrics */}
      <motion.div ref={metricsRef} style={{ scale: metricsScale }}>
        <AnimatedSection>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {caseStudy.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-white/10 bg-zinc-900/50 p-6 text-center"
              >
                <div className="text-2xl font-bold text-indigo-400">
                  {m.value}
                </div>
                <div className="mt-1 text-xs text-zinc-500">{m.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </motion.div>
    </div>
  );
}
