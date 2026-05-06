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
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-ink">{label}</label>
      )}
      <select
        className={cn(
          "text-ink text-base px-4 py-2.5",
          "transition-colors hover:border-line-hover focus:outline-none",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error && "border-red-500/50",
          className
        )}
        style={{
          borderRadius: "var(--radius-md)",
          backgroundColor: "var(--color-card-hover)",
          border: "1px solid var(--color-line-hover)",
          color: "var(--color-ink)",
          colorScheme: "dark",
        }}
        {...props}
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}