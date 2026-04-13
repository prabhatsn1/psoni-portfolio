"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import { fadeInUp } from "@/lib/motion";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-zinc-900 to-purple-500/10 p-12 text-center md:p-20"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[96px]" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Let&apos;s build something{" "}
              <span className="text-indigo-400">amazing</span> together
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-400">
              I&apos;m currently available for freelance projects. Let&apos;s
              discuss how I can help bring your vision to life.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact">Start a Project</Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
