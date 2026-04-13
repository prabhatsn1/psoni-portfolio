import type { Metadata } from "next";
import { getContent } from "@/lib/data";
import PageTransition from "@/components/ui/PageTransition";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles about Next.js, React Native, frontend architecture, and freelance engineering.",
};

export default function BlogPage() {
  const { blog } = getContent();

  return (
    <PageTransition>
      <div className="pt-32">
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <AnimatedSection>
            <p className="mb-4 text-sm font-medium tracking-widest text-indigo-400 uppercase">
              Blog
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              Thoughts & <span className="text-indigo-400">insights</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-400">
              Writing about software engineering, freelancing, and the tools I
              use to build great products.
            </p>
          </AnimatedSection>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 pb-32">
          <BlogList posts={blog} />
        </section>
      </div>
    </PageTransition>
  );
}
