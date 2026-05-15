import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";

import type { Project } from "@/types";



interface ProjectCardProps { project: Project; featured?: boolean; }



function formatDate(dateStr: string) {

  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", year: "numeric" });

}



const categoryColorVars: Record<string, { bg: string; text: string; border: string }> = {

  "Web App":    { bg: "var(--color-cat-web-bg)",          text: "var(--color-cat-web-text)",          border: "var(--color-cat-web-border)" },

  "Mobile App": { bg: "var(--color-cat-mobile-bg)",       text: "var(--color-cat-mobile-text)",       border: "var(--color-cat-mobile-border)" },

  Hackathon:   { bg: "var(--color-cat-hackathon-bg)",    text: "var(--color-cat-hackathon-text)",    border: "var(--color-cat-hackathon-border)" },

  Tool:        { bg: "var(--color-cat-tool-bg)",         text: "var(--color-cat-tool-text)",         border: "var(--color-cat-tool-border)" },

};



export default function ProjectCard({ project, featured }: ProjectCardProps) {

  const cat = categoryColorVars[project.category] ?? { 

    bg: "var(--color-accent)",

    text: "var(--color-accent-text)",

    border: "var(--color-accent)"

  };



  return (
    <article className="group relative flex flex-col gap-3 mb-6 p-6 bg-card border border-line hover:border-line-hover hover:bg-card-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent/5" style={{ borderRadius: "var(--radius-lg)" }}>



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

      <div className="flex items-center justify-between pt-2 border-t border-line group-hover:border-line-hover transition-colors duration-300">

        <span className="text-[10px] font-mono text-ink-dim">{formatDate(project.completionDate)}</span>

        <span className="text-xs text-ink-dim flex items-center gap-1 transition-all duration-300 group-hover:text-accent-text group-hover:translate-x-0.5">

          View details

          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">

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
            Repo
          </Button>
        )}
      </div>

    </article>

  );

}