import Container from "@/components/atoms/Container";
import Button from "@/components/atoms/Button";
import ProjectCard from "@/components/molecules/ProjectCard";
import Timeline from "@/components/organisms/Timeline";
import { getFeaturedProjects, getAllLogMeta, getAllProjects, getAllTechStacks } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ExternalLink, BookOpen } from "lucide-react";

const techStack = {
  frontend: ["React.js", "Next.js", "Flutter", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Firebase", "Supabase", "mySQL", "PHP"],
  devops: ["Vercel", "Netlify", "GitHub Actions"],
};

const experience = [
  {
    title: "Intern",
    company: "Makerspace Innovhub",
    period: "2026",
    description:
      "Shipped web apps, mobile systems, and hackathon entries using React, Next.js, Flutter, and Firebase.",
  },
  {
    title: "BS Information Technology",
    company: "University of Eastern Pangasinan",
    period: "Ongoing",
    description: "Studying Information Technology.",
  },
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const logs = getAllLogMeta();
  const recentProject = [...featuredProjects]
    .sort((a, b) => new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime())[0];
  const totalProjects = getAllProjects().length;
  const totalTechStacks = getAllTechStacks().length;

  return (
    <div className="py-16">
      <Container>
        {/* Header */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-start gap-8">

            {/* Avatar (No Hover) */}
            <div className="flex-shrink-0 w-28 h-28 rounded-2xl overflow-hidden border border-accent/30 shadow-[0_0_30px_rgba(255,0,0,0.15)]">
              <Image
                src="/jerico.jpg"
                alt="Jerico P. Jacob"
                width={112}
                height={112}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-3xl font-semibold text-ink">
                  Jerico P. Jacob
                </h1>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-ink-muted" />
                <p className="text-base text-ink-muted">
                  Pangasinan, Philippines
                </p>
              </div>

              <p className="text-base text-ink-muted mb-6">
                Makerspace Innovhub Intern
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <Button
                  href="/work"
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Work
                </Button>

                {recentProject?.liveUrl && (
                  <Button
                    href={recentProject.liveUrl}
                    external
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                )}

                <Button
                  href="/logs"
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  Read Logs
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-ink mb-6">About</h2>
          <p className="text-base text-ink-muted leading-relaxed max-w-2xl">
            I am a dedicated developer with a strong foundation in web
            technologies. My journey in coding started with a curiosity for how
            things work on the internet, which has now evolved into a
            professional career. I specialize in building responsive web
            applications using React and Tailwind CSS. I enjoy solving complex
            problems and turning ideas into reality through code.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-ink mb-8">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-accent mt-3"></div>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-base text-ink-muted mb-3">
                    {exp.company} · {exp.period}
                  </p>
                  <p className="text-base text-ink-muted leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-ink">
              Tech Stack ({totalTechStacks})
            </h2>
            <Button variant="ghost" size="sm">
              View All →
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-ink mb-4">
                Frontend
              </h3>
              <div className="space-y-2">
                {techStack.frontend.map((tech) => (
                  <span key={tech} className="block text-base text-ink-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ink mb-4">
                Backend
              </h3>
              <div className="space-y-2">
                {techStack.backend.map((tech) => (
                  <span key={tech} className="block text-base text-ink-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ink mb-4">
                DevOps & Cloud
              </h3>
              <div className="space-y-2">
                {techStack.devops.map((tech) => (
                  <span key={tech} className="block text-base text-ink-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-ink">
              Recent Projects ({totalProjects})
            </h2>
            <Button href="/work" variant="ghost" size="sm">
              View All →
            </Button>
          </div>

          <div className="space-y-6">
            {featuredProjects.slice(0, 4).map((project) => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* Recent Logs */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-ink">
              Recent Logs
            </h2>
            <Button href="/logs" variant="ghost" size="sm">
              View All →
            </Button>
          </div>

          <div className="space-y-6">
            {logs.slice(-3).reverse().map((log) => (
              <Link
                key={log.slug}
                href={`/logs/${log.slug}`}
                className="group block"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-ink-dim w-8 text-right flex-shrink-0">
                    {log.week}
                  </span>
                  <div>
                    <p className="text-lg font-medium text-ink group-hover:text-ink-muted transition-colors mb-1">
                      {log.title}
                    </p>
                    <p className="text-sm font-mono text-ink-dim">
                      {log.period}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </Container>
    </div>
  );
}