import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import { ExternalLink, GitBranch } from "lucide-react";

import type { Project } from "@/types";



interface ProjectCardProps { project: Project; featured?: boolean; }



function formatDate(dateStr: string) {

  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", year: "numeric" });

}



const categoryColors: Record<string, { bg: string; text: string; border: string }> = {

  "Web App":    { bg: "bg-blue-500/10",   text: "text-blue-400",   border: "border-blue-500/20" },

  "Mobile App": { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },

  Hackathon:   { bg: "bg-amber-500/10",   text: "text-amber-400",  border: "border-amber-500/20" },

  Tool:        { bg: "bg-violet-500/10",  text: "text-violet-400", border: "border-violet-500/20" },

};



export default function ProjectCard({ project, featured }: ProjectCardProps) {

  const cat = categoryColors[project.category] ?? { bg: "bg-accent/10", text: "text-accent-text", border: "border-accent/20" };



  return (

    <article className="group relative flex flex-col gap-3 mb-6">



      {/* Header */}

      <div className="flex-1 min-w-0">

        <h3 className="text-lg font-semibold text-ink leading-snug mb-1">

          {project.title}

        </h3>

        {featured && (

          <span className="text-xs font-mono text-ink-dim">Featured</span>

        )}

      </div>



      {/* Description */}

      <p className="text-sm text-ink-muted leading-relaxed">{project.description}</p>



      {/* Tech Stack */}

      <div className="flex flex-wrap gap-2">

        {project.techStack.slice(0, 4).map((tech) => (

          <Badge key={tech} variant="default">{tech}</Badge>

        ))}

        {project.techStack.length > 4 && (

          <Badge variant="outline">{`+${project.techStack.length - 4}`}</Badge>

        )}

      </div>



      {/* Footer */}

      <div className="flex items-center justify-between pt-2 border-t border-line">

        <span className="text-[10px] font-mono text-ink-dim">{formatDate(project.completionDate)}</span>

        <span className="text-xs text-ink-dim flex items-center gap-1 transition-colors duration-200 group-hover:text-accent-text">

          View details

          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">

            <path d="M2.5 6h7m0 0L6.5 3m3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

          </svg>

        </span>

      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {project.liveUrl && (
          <Button
            href={project.liveUrl}
            external
            variant="ghost"
            size="sm"
            className="text-xs px-3 py-1 h-auto"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            Live Demo
          </Button>
        )}
        {project.repoUrl && (
          <Button
            href={project.repoUrl}
            external
            variant="ghost"
            size="sm"
            className="text-xs px-3 py-1 h-auto"
          >
            <GitBranch className="w-3 h-3 mr-1" />
            Repo
          </Button>
        )}
      </div>

    </article>

  );

}