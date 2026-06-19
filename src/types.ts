export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  year: string;
  services: string[];
  client: string;
  image: string;
  gallery?: string[];
  role: string;
  deliverables?: string[];
  link?: string;
  videoUrl?: string;
  videoType?: 'youtube' | 'linkedin' | 'local' | 'vimeo';
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  tools: string[];
  tag: string;
}
