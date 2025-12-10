export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface Skill {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export type Category = 'All' | 'Design' | 'Development' | '3D';