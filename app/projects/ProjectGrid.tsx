"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import type { Project } from "@/types/content";
import GlowCard from "@/components/ui/GlowCard";
import { perspective3D, staggerContainer } from "@/lib/motion";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("All");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div ref={ref}>
      {/* Filter buttons */}
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              filter === cat
                ? "bg-indigo-500 text-white"
                : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        style={{ perspective: "1200px" }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              variants={perspective3D}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <GlowCard className="group h-full cursor-pointer">
                  <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                    <div className="flex h-full items-center justify-center text-4xl">
                      {project.category === "Mobile App"
                        ? "📱"
                        : project.category === "SaaS"
                          ? "☁️"
                          : "🖥️"}
                    </div>
                  </div>

                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-indigo-400">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {project.shortDescription}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
