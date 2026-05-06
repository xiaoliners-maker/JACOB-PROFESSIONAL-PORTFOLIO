import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/atoms/Container";
import Badge from "@/components/atoms/Badge";
import { getAllLogMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Logs",
  description: "Weekly internship logs — what was built, learned, and shipped each week.",
};

const weekColors: Record<number, string> = {
  1: "#888888", 2: "#888888", 3: "#888888", 4: "#888888",
  5: "#888888",  6: "#888888", 7: "#888888", 8: "#888888",
  9: "#888888", 10: "#888888", 11: "#888888",
};

export default function LogsPage() {
  const logs = getAllLogMeta().sort((a, b) => a.week - b.week);

  return (
    <div className="py-16">
      <Container narrow>
        <div className="bg-card border border-line rounded-[14px] p-6 sm:p-8 mb-8 animate-fade-up">
          <p className="text-xs font-mono text-ink-dim uppercase tracking-widest mb-3">Journal</p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-3">Weekly Logs</h1>
          <p className="text-sm text-ink-muted leading-relaxed">
            Raw notes from {logs.length} weeks of internship — what got built, what broke, and what I learned along the way.
          </p>
        </div>

        <div className="space-y-2">
          {logs.map((log, i) => {
            const color = weekColors[log.week] ?? "#999";
            return (
              <Link
                key={log.slug}
                href={`/logs/${log.slug}`}
                className="group block p-4 bg-card border border-line rounded-[14px] hover:border-line-hover hover:bg-card-hover transition-all duration-200 animate-fade-up"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-xs font-mono font-semibold mt-0.5 border"
                      style={{ backgroundColor: `${color}18`, color, borderColor: `${color}30` }}
                    >
                      W{log.week}
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-sm font-semibold text-ink leading-snug mb-1 group-hover:text-ink-muted transition-colors">
                        {log.title}
                      </h2>
                      <p className="text-xs font-mono text-ink-dim mb-2">{log.period}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {(log.tags ?? []).slice(0, 4).map((tag) => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                    className="text-ink-dim flex-shrink-0 mt-1 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent-text"
                  >
                    <path d="M2.5 7h9m0 0L8 3.5M11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}