"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { useLoading } from "@/components/providers/LoadingProvider";
import type { ReactNode } from "react";

interface NavLinkProps { href: string; children: ReactNode; }

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { setIsLoading } = useLoading();
  const [isPending, startTransition] = useTransition();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname !== href) {
      setIsLoading(true);
      startTransition(() => {
        router.push(href);
      });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`text-sm transition-colors duration-200 flex items-center gap-2 ${
        active ? "text-ink" : "text-ink-muted hover:text-ink"
      } ${isPending ? "pointer-events-none" : ""}`}
    >
      {children}
      {isPending && (
        <div className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
      )}
    </Link>
  );
}
