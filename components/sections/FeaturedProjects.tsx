"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import type { Project } from "@/types/content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import { staggerContainer, perspective3D } from "@/lib/motion";

interface Props {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work across web and mobile"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: "1200px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={perspective3D}>
              <Link href={`/projects/${project.slug}`}>
                <GlowCard className="group cursor-pointer">
                  {/* Thumbnail placeholder */}
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
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-indigo-400 transition-colors hover:text-indigo-300"
          >
            View all projects
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
