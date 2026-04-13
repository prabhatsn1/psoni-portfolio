import type { Metadata } from "next";
import { getContent } from "@/lib/data";
import PageTransition from "@/components/ui/PageTransition";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewsGrid from "./ReviewsGrid";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Client testimonials and reviews from past freelance projects.",
};

export default function ReviewsPage() {
  const { testimonials } = getContent();

  return (
    <PageTransition>
      <div className="pt-32">
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <AnimatedSection>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-indigo-400">
              Testimonials
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              Client <span className="text-indigo-400">reviews</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-400">
              Don&apos;t just take my word for it — hear what my clients have to
              say.
            </p>
          </AnimatedSection>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 pb-32">
          <ReviewsGrid testimonials={testimonials} />
        </section>
      </div>
    </PageTransition>
  );
}
