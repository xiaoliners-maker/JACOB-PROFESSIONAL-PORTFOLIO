import type { Metadata } from "next";
import Container from "@/components/atoms/Container";
import ProjectGrid from "@/components/organisms/ProjectGrid";
import { getAllProjects, getAllCategories, getAllTechStacks, getAllLogMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "All projects built during the internship — web apps, mobile apps, and hackathon entries.",
};

export default function WorkPage() {
  const projects = getAllProjects();
  const categories = getAllCategories();
  const techStacks = getAllTechStacks();
  const logs = getAllLogMeta();

  return (
    <div className="py-16">
      <Container>
        <section className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-4">All Work ({projects.length})</h1>
          <p className="text-base text-ink-muted leading-relaxed max-w-2xl">
            Every project built across {logs.length} weeks of internship — from landing pages and research tools
            to full-stack health systems and hackathon demos.
          </p>
        </section>
        <ProjectGrid projects={projects} categories={categories} techStacks={techStacks} showFilters />
      </Container>
    </div>
  );
}
