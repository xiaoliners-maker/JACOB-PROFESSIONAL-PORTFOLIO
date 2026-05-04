"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-2 py-3 text-sm text-ink-muted hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}
