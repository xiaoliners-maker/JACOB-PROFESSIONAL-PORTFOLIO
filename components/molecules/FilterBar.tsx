"use client";

import type { FilterState } from "@/lib/filters";
import SelectField from "@/components/atoms/SelectField";

interface FilterBarProps {
  categories: string[];
  techStacks: string[];
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

export default function FilterBar({ categories, techStacks, filters, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3 items-end animate-fade-up">
      <SelectField
        value={filters.category}
        onChange={(e) => onChange({ ...filters, category: e.target.value })}
        aria-label="Filter by category"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
      </SelectField>

      <SelectField
        value={filters.techStack}
        onChange={(e) => onChange({ ...filters, techStack: e.target.value })}
        aria-label="Filter by tech stack"
      >
        <option value="">All Technologies</option>
        {techStacks.map((tech) => <option key={tech} value={tech}>{tech}</option>)}
      </SelectField>

      {(filters.category || filters.techStack) && (
        <button
          onClick={() => onChange({ category: "", techStack: "" })}
          className="text-base text-ink-dim underline underline-offset-2 hover:text-ink-muted transition-all duration-300 px-2 animate-fade-up"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
