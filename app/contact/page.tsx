import type { Metadata } from "next";
import { getContent } from "@/lib/data";
import PageTransition from "@/components/ui/PageTransition";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your next project. Available for freelance web and mobile development.",
};

export default function ContactPage() {
  const { personal, social } = getContent();

  return (
    <PageTransition>
      <div className="pt-32 pb-32">
        <section className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-indigo-400">
              Contact
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              Let&apos;s <span className="text-indigo-400">talk</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-400">
              Have a project in mind? I&apos;d love to hear about it. Fill out
              the form below or reach out directly.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3" delay={0.1}>
              <ContactForm />
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection className="lg:col-span-2" delay={0.2}>
              <div className="space-y-8">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
                    Contact Info
                  </h3>
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="text-zinc-500">Email</dt>
                      <dd className="mt-1 text-zinc-300">{personal.email}</dd>
                    </div>
                    <div>
                      <dt className="text-zinc-500">Location</dt>
                      <dd className="mt-1 text-zinc-300">
                        {personal.location}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-zinc-500">Availability</dt>
                      <dd className="mt-1 text-green-400">
                        Open to new projects
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
                    Social
                  </h3>
                  <ul className="space-y-3">
                    {social.map((s) => (
                      <li key={s.platform}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                            {s.platform.charAt(0)}
                          </span>
                          {s.platform}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
