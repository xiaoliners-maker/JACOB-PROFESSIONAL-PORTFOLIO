export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  completionDate: string;
  category: string;
  featured: boolean;
  slug: string;
}

export interface Log {
  title: string;
  slug: string;
  period: string;
  week: number;
  tags: string[];
  content?: string;
}

export interface TimelineItem {
  week: number;
  period: string;
  activity: string;
  color: string;
}
