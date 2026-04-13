"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Testimonial } from "@/types/content";
import { staggerContainerSlow, fadeInUp } from "@/lib/motion";

export default function ReviewsGrid({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainerSlow}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3"
    >
      {testimonials.map((t) => (
        <motion.div
          key={t.id}
          variants={fadeInUp}
          className="break-inside-avoid rounded-2xl border border-white/10 bg-zinc-900/50 p-6"
        >
          <div className="mb-4 flex gap-1">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i} className="text-amber-400">
                ★
              </span>
            ))}
          </div>

          <blockquote className="text-sm leading-relaxed text-zinc-300">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-sm font-bold text-white">
              {t.name.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-medium text-white">{t.name}</div>
              <div className="text-xs text-zinc-500">
                {t.role}, {t.company}
              </div>
            </div>
          </div>

          {t.project && (
            <div className="mt-4 text-xs text-zinc-500">
              Project: <span className="text-zinc-400">{t.project}</span>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
