"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import type { HeroSection, Stat } from "@/types/content";

interface Props {
  hero: HeroSection;
  stats: Stat[];
}

export default function HeroSection({ hero, stats }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const bgTextY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgTextOpacity = useTransform(scrollYProgress, [0, 0.6], [0.04, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background text */}
      <motion.div
        style={{ y: bgTextY, opacity: bgTextOpacity }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
      >
        <span className="text-[20vw] font-black tracking-tighter text-white">
          {hero.backgroundText}
        </span>
      </motion.div>

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-indigo-500/20 blur-[128px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/15 blur-[128px]" />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-sm font-medium tracking-widest text-indigo-400 uppercase"
        >
          Senior Software Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-5xl leading-tight font-bold tracking-tight text-white md:text-7xl"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href={hero.cta.href}>{hero.cta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-white">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="mt-1 text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-2"
        >
          <div className="h-2 w-0.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
