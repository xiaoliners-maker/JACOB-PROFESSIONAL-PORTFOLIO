"use client";

import type { FilterState } from "@/lib/filters";

interface FilterBarProps {
  categories: string[];
  techStacks: string[];
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

export default function FilterBar({ categories, techStacks, filters, onChange }: FilterBarProps) {
  const selectClass =
    "bg-card border border-line text-ink text-base rounded-lg px-4 py-2 cursor-pointer outline-none focus:border-accent transition-colors appearance-none";

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <select
        value={filters.category}
        onChange={(e) => onChange({ ...filters, category: e.target.value })}
        className={selectClass}
        aria-label="Filter by category"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
      </select>

      <select
        value={filters.techStack}
        onChange={(e) => onChange({ ...filters, techStack: e.target.value })}
        className={selectClass}
        aria-label="Filter by tech stack"
      >
        <option value="">All Technologies</option>
        {techStacks.map((tech) => <option key={tech} value={tech}>{tech}</option>)}
      </select>

      {(filters.category || filters.techStack) && (
        <button
          onClick={() => onChange({ category: "", techStack: "" })}
          className="text-base text-ink-dim underline underline-offset-2 hover:text-ink-muted transition-colors px-2"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
