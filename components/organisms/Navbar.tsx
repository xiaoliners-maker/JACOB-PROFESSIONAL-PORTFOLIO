"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";
import { useLoading } from "@/components/providers/LoadingProvider";
import Container from "@/components/atoms/Container";
import NavLink from "@/components/molecules/NavLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/logs", label: "Logs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { setIsLoading } = useLoading();
  const [isNavigating, startTransition] = useTransition();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMobileNavClick = (href: string) => {
    setMenuOpen(false);
    if (pathname !== href) {
      setIsLoading(true);
      startTransition(() => {
        router.push(href);
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-canvas/90 backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
    }`}>
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-mono text-sm font-semibold text-ink tracking-tight hover:text-ink-muted transition-colors">
            jerico<span className="text-accent">.</span>
          </Link>

          <nav className="hidden sm:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 2l14 14M16 2 2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <nav className="sm:hidden border-t border-line py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleMobileNavClick(link.href)}
                disabled={isNavigating}
                className="px-2 py-3 text-sm text-ink-muted hover:text-ink transition-colors text-left flex items-center gap-2 disabled:opacity-50"
              >
                {link.label}
                {isNavigating && pathname !== link.href && (
                  <div className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin ml-auto" />
                )}
              </button>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}
