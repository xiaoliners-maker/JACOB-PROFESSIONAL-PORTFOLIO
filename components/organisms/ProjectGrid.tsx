"use client";

import { useState } from "react";
import ProjectCard from "@/components/molecules/ProjectCard";
import FilterBar from "@/components/molecules/FilterBar";
import type { Project } from "@/types";
import type { FilterState } from "@/lib/filters";
import { filterProjects, sortProjectsByDate } from "@/lib/filters";

interface ProjectGridProps {
  projects: Project[];
  categories: string[];
  techStacks: string[];
  showFilters?: boolean;
}

export default function ProjectGrid({ projects, categories, techStacks, showFilters = true }: ProjectGridProps) {
  const [filters, setFilters] = useState<FilterState>({ category: "", techStack: "" });
  const filtered = sortProjectsByDate(filterProjects(projects, filters));

  return (
    <div className="space-y-8">
      {showFilters && (
        <FilterBar categories={categories} techStacks={techStacks} filters={filters} onChange={setFilters} />
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-base text-ink-dim">No projects match these filters.</p>
          <button
            onClick={() => setFilters({ category: "", techStack: "" })}
            className="mt-3 text-base text-ink-muted underline underline-offset-2 hover:text-ink transition-colors"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {filtered.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}

      <p className="text-sm font-mono text-ink-dim">
        Showing {filtered.length} of {projects.length} projects
      </p>
    </div>
  );
}
