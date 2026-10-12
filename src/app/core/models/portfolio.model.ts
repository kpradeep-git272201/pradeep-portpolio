export type ThemeMode = 'dark' | 'light';

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone?: string;
  location?: string;
  website?: string;
}

export interface ProfileStat {
  label: string;
  value: string;
  description?: string;
}

export interface Profile {
  name: string;
  role: string;
  experienceYears: string;
  tagline: string;
  bio: string;
  shortBio: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  socialLinks: SocialLinks;
  stats: ProfileStat[];
  coreCompetencies: string[];
}

export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'DevOps & Tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: number; // 0 - 100
  icon: string;
  featured?: boolean;
  experience?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client?: string;
  domain: string;
  role: string;
  duration?: string;
  summary: string;
  description: string;
  keyFeatures: string[];
  responsibilities: string[];
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  company: string;
  client?: string;
  role: string;
  period: string;
  location: string;
  type: string; // e.g. Full-time
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
  description: string;
  highlights: string[];
}

export interface ContactMessage {
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp?: Date;
}

export type CategoryFilter = 'All' | SkillCategory;

export interface ContactFormModel {
  name: string;
  email: string;
  subject: string;
  message: string;
}
