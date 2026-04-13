import { getContent, getFeaturedProjects } from "@/lib/data";
import HeroSection from "@/components/sections/Hero";
import SkillsShowcase from "@/components/sections/SkillsShowcase";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import CTASection from "@/components/sections/CTASection";
import PageTransition from "@/components/ui/PageTransition";

export default function HomePage() {
  const content = getContent();
  const featured = getFeaturedProjects();

  return (
    <PageTransition>
      <HeroSection hero={content.hero} stats={content.stats} />
      <SkillsShowcase skills={content.skills} />
      <FeaturedProjects projects={featured} />
      <TestimonialsCarousel testimonials={content.testimonials} />
      <CTASection />
    </PageTransition>
  );
}
