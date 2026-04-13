"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Skill } from "@/types/content";
import { staggerContainer, scaleIn } from "@/lib/motion";

export default function AboutSkillGrid({ skills }: { skills: Skill[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-wrap gap-3"
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          variants={scaleIn}
          whileHover={{ scale: 1.08, y: -2 }}
          className="rounded-full border border-white/10 bg-zinc-900/60 px-5 py-2.5 text-sm text-zinc-300 transition-colors hover:border-indigo-500/40 hover:text-white"
        >
          {skill.name}
        </motion.div>
      ))}
    </motion.div>
  );
}
