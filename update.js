const fs = require('fs');
let content = fs.readFileSync('components/molecules/ProjectCard.tsx', 'utf8');
content = content.replace(
  '      </div>\n\n    </article>',
  `      </div>
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
            <Github className="w-3 h-3 mr-1" />
            Repo
          </Button>
        )}
      </div>

    </article>`
);
fs.writeFileSync('components/molecules/ProjectCard.tsx', content);
console.log('updated');