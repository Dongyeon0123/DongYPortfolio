export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  period: string;
  link?: string;
  github?: string;
  image?: string;
  status: 'completed' | 'in-progress' | 'planned';
  detailedDescription?: string;
  features?: string[];
  techStack?: {
    frontend?: string[];
    styling?: string[];
    backend?: string[];
    ai?: string[];
    deployment?: string[];
    hooks?: string[];
    language?: string[];
  };
  challenges?: Array<{
    title: string;
    problem: string;
    cause: string;
    solution: string;
  }>;
  futurePlans?: string[];
  security?: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'tools' | 'learning';
  icon?: string;
}

export interface Experience {
  title: string;
  description: string[];
  technologies: string[];
}

export interface Contact {
  platform: string;
  url: string;
  icon: string;
}
