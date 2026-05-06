import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children, href, onClick, variant = "primary", size = "md",
  external = false, className = "", type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-200 min-h-[44px] min-w-[44px] cursor-pointer select-none active:scale-[0.97]";

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-sm",
  };

  const variants = {
    primary: "bg-accent text-white border border-accent/50 hover:bg-accent/80 hover:border-accent",
    outline: "border border-line-hover text-ink hover:bg-card-hover",
    ghost:   "text-ink-muted hover:text-ink hover:bg-card",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const style = { borderRadius: "var(--radius-md)" };

  if (href) {
    if (external) {
      return <a href={href} target="_blank" rel="noopener noreferrer" className={classes} style={style}>{children}</a>;
    }
    return <Link href={href} className={classes} style={style}>{children}</Link>;
  }

  return <button type={type} onClick={onClick} className={classes} style={style}>{children}</button>;
}
