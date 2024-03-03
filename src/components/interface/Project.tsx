export interface Project {
  id: number;
  name: string;
  githubURL?: string;
  projectURL?: string;
  blogURL?: string;
  image?: string;
  frontend: { technologies: string[] };
  backend?: { technologies: string[] };
  database?: { technologies: string[] };
  deployment?: { technologies: string[] };
  description: string;
}
