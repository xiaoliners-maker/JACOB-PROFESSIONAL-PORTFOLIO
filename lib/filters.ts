import type { Project } from "@/types";

export interface FilterState {
  category: string;
  techStack: string;
}

export function filterProjects(
  projects: Project[],
  filters: FilterState
): Project[] {
  return projects.filter((project) => {
    const categoryMatch =
      !filters.category || project.category === filters.category;
    const techMatch =
      !filters.techStack || project.techStack.includes(filters.techStack);
    return categoryMatch && techMatch;
  });
}

export function sortProjectsByDate(projects: Project[]): Project[] {
  return [...projects].sort(
    (a, b) =>
      new Date(b.completionDate).getTime() -
      new Date(a.completionDate).getTime()
  );
}
