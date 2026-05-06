import React from "react";
import { cn } from "@/lib/utils";

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

export default function SelectField({
  label,
  error,
  className,
  ...props
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-1 animate-fade-up">
      {label && (
        <label className="text-sm font-medium text-ink">{label}</label>
      )}
      <select
        className={cn(
          "bg-card border border-line text-ink text-base px-4 py-2.5",
          "transition-all duration-300 focus:outline-none",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error && "border-red-500/50 focus:border-red-500",
          className
        )}
        style={{ borderRadius: "var(--radius-md)" }}
        {...props}
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
