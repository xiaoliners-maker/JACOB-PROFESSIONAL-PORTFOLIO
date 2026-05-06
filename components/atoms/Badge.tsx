interface BadgeProps {
  children: string;
  variant?: "default" | "outline";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const base = "inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono whitespace-nowrap transition-all duration-200";

  if (variant === "outline") {
    return (
      <span className={`${base} border border-line-hover text-ink-muted hover:border-accent/30 hover:text-accent-text hover:bg-accent/5`}>{children}</span>
    );
  }

  return (
    <span className={`${base} bg-card border border-line text-ink-dim hover:border-line-hover hover:bg-card-hover`}>{children}</span>
  );
}
