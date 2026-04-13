import type { SiteContent } from "@/types/content";
import data from "@/data/content-mock.json";

export function getContent(): SiteContent {
  return data as SiteContent;
}

export function getProjectBySlug(slug: string) {
  const content = getContent();
  return content.projects.find((p) => p.slug === slug) ?? null;
}

export function getFeaturedProjects() {
  const content = getContent();
  return content.projects.filter((p) => p.featured);
}

export function getProjectSlugs() {
  const content = getContent();
  return content.projects.map((p) => p.slug);
}
