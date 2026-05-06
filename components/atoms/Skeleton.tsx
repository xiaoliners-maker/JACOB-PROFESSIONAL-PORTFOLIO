import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "default" | "circle" | "rounded" | "shimmer";
}

export default function Skeleton({ className, variant = "default" }: SkeletonProps) {
  const baseClasses = "bg-line";

  const variantClasses = {
    default: "rounded animate-pulse",
    circle: "rounded-full animate-pulse",
    rounded: "animate-pulse",
    shimmer: "rounded animate-pulse",
  };

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className)}
    />
  );
}