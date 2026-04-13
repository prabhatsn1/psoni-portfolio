"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { BlogPost } from "@/types/content";
import GlowCard from "@/components/ui/GlowCard";
import { staggerContainer, fadeInUp } from "@/lib/motion";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {posts.map((post) => (
        <motion.article key={post.slug} variants={fadeInUp}>
          <GlowCard className="h-full cursor-pointer">
            <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
              <div className="flex h-full items-center justify-center text-3xl">
                📝
              </div>
            </div>

            <div className="mb-2 flex items-center gap-3 text-xs text-zinc-500">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-indigo-400">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>

            <h3 className="text-lg font-semibold leading-snug text-white">
              {post.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {post.excerpt}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </GlowCard>
        </motion.article>
      ))}
    </motion.div>
  );
}
