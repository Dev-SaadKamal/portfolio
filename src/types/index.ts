export interface ProjectArchitecture {
  frontend: string;
  backend: string;
  database: string;
  auth: string;
  deployment: string;
}

export interface ProjectWorkflowHighlight {
  title: string;
  desc: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl?: string;
  isFeaturedDominant?: boolean;
  problem: string;
  solution: string;
  role: string;
  architecture: ProjectArchitecture;
  keyFeatures: string[];
  workflowHighlights: ProjectWorkflowHighlight[];
}

export interface ServiceItem {
  number: string;
  title: string;
  headline: string;
  tech: string;
  suitedFor: string[];
  problem: string;
  solution: string;
  deliverables: string[];
}

export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface ProcessStep {
  number: string;
  name: string;
  tagline: string;
  summary: string;
  activities: string[];
}

export interface TechCategory {
  category: string;
  description: string;
  items: {
    name: string;
    role: string;
    highlight?: boolean;
  }[];
}
