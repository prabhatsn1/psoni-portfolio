"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Experience } from "@/types/content";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function AboutTimeline({
  experience,
}: {
  experience: Experience[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative space-y-8 pl-8 before:absolute before:top-0 before:left-0 before:h-full before:w-px before:bg-gradient-to-b before:from-indigo-500 before:to-transparent"
    >
      {experience.map((exp) => (
        <motion.div
          key={`${exp.company}-${exp.period}`}
          variants={fadeInUp}
          className="relative"
        >
          {/* Dot */}
          <div className="absolute top-1 -left-8 flex h-4 w-4 -translate-x-1/2 items-center justify-center">
            <div className="h-3 w-3 rounded-full border-2 border-indigo-500 bg-black" />
          </div>

          <div className="rounded-xl border border-white/5 bg-zinc-900/30 p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-white">{exp.role}</h3>
              <span className="text-xs text-zinc-500">{exp.period}</span>
            </div>
            <p className="mt-1 text-sm text-indigo-400">{exp.company}</p>
            <p className="mt-3 text-sm text-zinc-400">{exp.description}</p>

            <ul className="mt-3 space-y-1">
              {exp.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-zinc-400"
                >
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-indigo-500" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-500"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
