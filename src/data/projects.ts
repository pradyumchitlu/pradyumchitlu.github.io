import rawProjects from "../../shared/projects.json";

export type Project = {
  slug: string;
  title: string;
  type: string;
  tech: string[];
  highlights: string[];
  href?: string;
};

export const projects = rawProjects as Project[];
