import Container from "@/components/atoms/Container";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 py-10 border-t border-line">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-ink-dim">
            © {year} Jerico P. Jacob
          </p>
          <div className="flex items-center gap-6">
            {[{ href: "/", label: "Home" }, { href: "/work", label: "Work" }, { href: "/logs", label: "Logs" }].map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-ink-dim hover:text-ink-muted transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
