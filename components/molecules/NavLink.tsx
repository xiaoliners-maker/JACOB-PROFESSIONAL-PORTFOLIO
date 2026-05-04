"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface NavLinkProps { href: string; children: ReactNode; }

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`text-sm transition-colors duration-200 ${active ? "text-ink" : "text-ink-muted hover:text-ink"}`}
    >
      {children}
    </Link>
  );
}
