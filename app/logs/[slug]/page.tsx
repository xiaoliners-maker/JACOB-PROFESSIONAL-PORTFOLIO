import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/atoms/Container";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import { getLogBySlug, getAllLogSlugs, getAllLogMeta } from "@/lib/content";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getAllLogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const log = await getLogBySlug(slug);
  if (!log) return { title: "Log not found" };
  return {
    title: log.title,
    description: `Week ${log.week} internship log — ${log.period}`,
  };
}

const weekColors: Record<number, string> = {
  1: "#c9a96e", 2: "#7ab0c9", 3: "#a07abe", 4: "#c9a96e",
  5: "#7ab0c9",  6: "#a07abe", 7: "#c9a96e", 8: "#6a9070",
  9: "#7ab0c9", 10: "#c9a96e",
};

export default async function LogPage({ params }: Props) {
  const { slug } = await params;
  const log = await getLogBySlug(slug);
  if (!log) notFound();

  const allLogs = getAllLogMeta().sort((a, b) => a.week - b.week);
  const currentIdx = allLogs.findIndex((l) => l.slug === slug);
  const prevLog = currentIdx > 0 ? allLogs[currentIdx - 1] : null;
  const nextLog = currentIdx < allLogs.length - 1 ? allLogs[currentIdx + 1] : null;
  const color = weekColors[log.week] ?? "#999";

  return (
    <div className="py-16">
      <Container narrow>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono text-ink-dim mb-8">
          <Link href="/" className="hover:text-ink-muted transition-colors">home</Link>
          <span>/</span>
          <Link href="/logs" className="hover:text-ink-muted transition-colors">logs</Link>
          <span>/</span>
          <span className="text-ink-muted">week-{String(log.week).padStart(2, "0")}</span>
        </nav>

        {/* Header card */}
        <div className="bg-card border border-line rounded-[14px] p-6 sm:p-8 mb-4">
          <div
            className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg mb-4 border"
            style={{ backgroundColor: `${color}15`, color, borderColor: `${color}30` }}
          >
            Week {log.week}
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight leading-snug mb-2">
            {log.title}
          </h1>
          <p className="text-xs font-mono text-ink-dim mb-4">{log.period}</p>
          <div className="flex flex-wrap gap-1.5">
            {log.tags.map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)}
          </div>
        </div>

        {/* Content */}
        {log.content && (
          <div className="bg-card border border-line rounded-[14px] p-6 sm:p-8 mb-4">
            <div className="prose-log" dangerouslySetInnerHTML={{ __html: log.content }} />
          </div>
        )}

        {/* Prev / Next */}
        <nav className="flex items-stretch justify-between gap-4 mb-6">
          {prevLog ? (
            <Link href={`/logs/${prevLog.slug}`}
              className="group flex-1 p-4 bg-card border border-line rounded-[14px] hover:border-line-hover hover:bg-card-hover transition-all duration-200"
            >
              <p className="text-xs font-mono text-ink-dim mb-1">← Previous</p>
              <p className="text-sm font-medium text-ink-muted group-hover:text-accent-text transition-colors line-clamp-2">
                {prevLog.title}
              </p>
            </Link>
          ) : <div className="flex-1" />}

          {nextLog ? (
            <Link href={`/logs/${nextLog.slug}`}
              className="group flex-1 p-4 bg-card border border-line rounded-[14px] hover:border-line-hover hover:bg-card-hover transition-all duration-200 text-right"
            >
              <p className="text-xs font-mono text-ink-dim mb-1">Next →</p>
              <p className="text-sm font-medium text-ink-muted group-hover:text-accent-text transition-colors line-clamp-2">
                {nextLog.title}
              </p>
            </Link>
          ) : <div className="flex-1" />}
        </nav>

        <div className="text-center">
          <Button href="/logs" variant="ghost" size="sm">← All Logs</Button>
        </div>
      </Container>
    </div>
  );
}
