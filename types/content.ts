export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  resumeUrl: string;
}

export interface HeroSection {
  headline: string;
  subheadline: string;
  cta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  backgroundText: string;
}

export interface AboutSection {
  bio: string[];
  values: { title: string; description: string }[];
  workingStyle: string[];
}

export interface Skill {
  name: string;
  category: "frontend" | "mobile" | "backend" | "devops" | "tools";
  proficiency: number;
  icon?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  tech: string[];
  thumbnail: string;
  images: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  caseStudy?: CaseStudy;
}

export interface CaseStudy {
  problem: string;
  solution: string;
  approach: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  project?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  thumbnail: string;
  tags: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SiteContent {
  personal: PersonalInfo;
  hero: HeroSection;
  about: AboutSection;
  skills: Skill[];
  services: Service[];
  experience: Experience[];
  projects: Project[];
  testimonials: Testimonial[];
  process: ProcessStep[];
  stats: Stat[];
  blog: BlogPost[];
  social: SocialLink[];
}
