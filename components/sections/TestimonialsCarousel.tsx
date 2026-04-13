"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import type { Testimonial } from "@/types/content";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/motion";

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section ref={ref} className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Client Testimonials"
          subtitle="What people say about working with me"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={fadeInUp}
            className="relative mx-auto max-w-3xl rounded-2xl border border-white/10 bg-zinc-900/50 p-8 md:p-12"
          >
            <div className="mb-6 text-5xl text-indigo-400/30">&ldquo;</div>

            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-lg leading-relaxed text-zinc-300 md:text-xl"
            >
              {t.quote}
            </motion.blockquote>

            <motion.div
              key={`author-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-sm font-bold text-white">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-white">{t.name}</div>
                <div className="text-sm text-zinc-400">
                  {t.role}, {t.company}
                </div>
              </div>
              <div className="ml-auto flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400">
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active
                    ? "w-8 bg-indigo-500"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
