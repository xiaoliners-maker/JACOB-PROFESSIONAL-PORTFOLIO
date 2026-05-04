import type { TimelineItem } from "@/types";

const timelineData: TimelineItem[] = [
  { week: 1,  period: "Feb 9–13",   activity: "Orientation, GitHub, DMS Landing Page",           color: "#c9a96e" },
  { week: 2,  period: "Feb 16–20",  activity: "AI Seminar, Field Interviews, BIR Research",       color: "#7ab0c9" },
  { week: 3,  period: "Feb 23–27",  activity: "Node.js Projects, H4M Project Kickoff",             color: "#a07abe" },
  { week: 4,  period: "Mar 3–6",    activity: "H4M PPT, MediTrack Core Development",               color: "#c9a96e" },
  { week: 5,  period: "Mar 9–13",   activity: "Flutter Mobile App, Firebase Integration",          color: "#7ab0c9" },
  { week: 6,  period: "Mar 16–19",  activity: "Edit Profile, Avatar Upload, Push Notifications",   color: "#a07abe" },
  { week: 7,  period: "Mar 23–27",  activity: "Bug Fixes, UI/UX Polish",                           color: "#c9a96e" },
  { week: 8,  period: "Apr 7–10",   activity: "WFH: UI Enhancement, Feature PPT",                  color: "#6a9070" },
  { week: 9,  period: "Apr 13–17",  activity: "Vercel Deployment, H4M Finalization",               color: "#7ab0c9" },
  { week: 10, period: "Apr 20–25",  activity: "Final Mobile UI Polish & Completion",               color: "#c9a96e" },
];

export default function Timeline() {
  return (
    <section className="py-10">
      <div className="mb-8">
        <p className="text-xs font-mono text-ink-dim uppercase tracking-widest mb-2">Journey</p>
        <h2 className="text-xl font-semibold text-ink mb-1">Internship Timeline</h2>
        <p className="text-sm text-ink-muted">10 weeks · Feb – Apr 2026</p>
      </div>

      <div className="relative">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-line" />
        <div className="flex flex-col gap-2">
          {timelineData.map((item, i) => (
            <div
              key={item.week}
              className="flex gap-5 items-start animate-fade-up"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {/* Dot */}
              <div
                className="flex-shrink-0 w-[31px] h-[31px] rounded-full bg-card flex items-center justify-center text-[10px] font-mono z-10 relative border"
                style={{ borderColor: `${item.color}50`, color: item.color }}
              >
                {item.week}
              </div>
              {/* Content */}
              <div className="flex-1 pb-2 pt-1">
                <span className="text-xs font-mono text-ink-dim mr-3">{item.period}</span>
                <span className="text-sm text-ink-muted">{item.activity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
