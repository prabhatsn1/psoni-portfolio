import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent, getProjectBySlug, getProjectSlugs } from "@/lib/data";
import PageTransition from "@/components/ui/PageTransition";
import Button from "@/components/ui/Button";
import ProjectDetailContent from "./ProjectDetailContent";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          {/* Header */}
          <div className="mb-12">
            <span className="mb-4 inline-block rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400">
              {project.category}
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-zinc-400">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <Button href={project.liveUrl} external>
                  View Live ↗
                </Button>
              )}
              {project.repoUrl && (
                <Button href={project.repoUrl} variant="secondary" external>
                  Source Code ↗
                </Button>
              )}
            </div>
          </div>

          {/* Thumbnail placeholder */}
          <div className="mb-16 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
            <div className="flex h-full items-center justify-center text-7xl">
              {project.category === "Mobile App"
                ? "📱"
                : project.category === "SaaS"
                  ? "☁️"
                  : "🖥️"}
            </div>
          </div>

          {/* Case Study */}
          {project.caseStudy && (
            <ProjectDetailContent caseStudy={project.caseStudy} />
          )}

          {/* Back */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <Button href="/projects" variant="secondary">
              ← Back to Projects
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
