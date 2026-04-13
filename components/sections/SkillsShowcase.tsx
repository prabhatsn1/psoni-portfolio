"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Skill } from "@/types/content";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  mobile: "Mobile",
  backend: "Backend",
  devops: "DevOps",
  tools: "Tools",
};

interface Props {
  skills: Skill[];
}

export default function SkillsShowcase({ skills }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const grouped = skills.reduce<Record<string, Skill[]>>((acc, s) => {
    (acc[s.category] ??= []).push(s);
    return acc;
  }, {});

  return (
    <section ref={ref} className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies I use to build exceptional products"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {Object.entries(grouped).map(([cat, items]) => (
            <motion.div key={cat} variants={fadeInUp}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-400">
                {categoryLabels[cat] ?? cat}
              </h3>
              <div className="space-y-3">
                {items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-300">{skill.name}</span>
                      <span className="text-zinc-500">{skill.proficiency}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? { width: `${skill.proficiency}%` }
                            : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: 0.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
