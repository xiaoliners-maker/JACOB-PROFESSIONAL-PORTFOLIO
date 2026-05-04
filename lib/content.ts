import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Project, Log } from "@/types";

const projectsPath = path.join(process.cwd(), "data/projects.json");
const logsDir = path.join(process.cwd(), "content/logs");

// ── Projects ──────────────────────────────────────────────

export function getAllProjects(): Project[] {
  const raw = fs.readFileSync(projectsPath, "utf-8");
  return JSON.parse(raw) as Project[];
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getAllCategories(): string[] {
  const projects = getAllProjects();
  return Array.from(new Set(projects.map((p) => p.category))).sort();
}

export function getAllTechStacks(): string[] {
  const projects = getAllProjects();
  const all = projects.flatMap((p) => p.techStack);
  return Array.from(new Set(all)).sort();
}

// ── Logs ──────────────────────────────────────────────────

export function getAllLogMeta(): Log[] {
  const files = fs
    .readdirSync(logsDir)
    .filter((f) => f.endsWith(".md"))
    .sort();

  return files.map((filename) => {
    const filePath = path.join(logsDir, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    return {
      ...data,
      slug: data.slug ?? filename.replace(/\.md$/, ""),
      tags: data.tags ?? [],
    } as Log;
  });
}

export async function getLogBySlug(slug: string): Promise<Log | null> {
  const filePath = path.join(logsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    ...data,
    slug: data.slug ?? slug,
    tags: data.tags ?? [],
    content: contentHtml,
  } as Log;
}

export function getAllLogSlugs(): string[] {
  return fs
    .readdirSync(logsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}