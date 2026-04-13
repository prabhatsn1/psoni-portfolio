"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ProcessStep } from "@/types/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { slideInLeft } from "@/lib/motion";

export default function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="relative space-y-12">
      {/* Vertical line */}
      <div className="absolute top-0 left-[27px] h-full w-px bg-gradient-to-b from-indigo-500 via-indigo-500/50 to-transparent md:left-[31px]" />

      {steps.map((step, i) => (
        <ProcessStepItem key={step.step} step={step} index={i} />
      ))}
    </div>
  );
}

function ProcessStepItem({
  step,
  index,
}: {
  step: ProcessStep;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.3, 1]);
  const x = useTransform(scrollYProgress, [0, 0.6], [30, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className="relative flex gap-6 pl-2"
    >
      {/* Step number */}
      <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-indigo-500/30 bg-black text-xl">
        {step.icon}
      </div>

      <div className="flex-1 rounded-2xl border border-white/5 bg-zinc-900/30 p-6">
        <div className="mb-1 text-xs font-medium text-indigo-400">
          Step {step.step}
        </div>
        <h3 className="text-xl font-semibold text-white">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          {step.description}
        </p>
        <ul className="mt-4 space-y-2">
          {step.details.map((d, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-zinc-400"
            >
              <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-indigo-500" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
