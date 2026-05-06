import Skeleton from "@/components/atoms/Skeleton";

export default function ProjectCardSkeleton() {
  return (
    <article className="group relative flex flex-col gap-3 mb-6 animate-pulse">
      {/* Header */}
      <div className="flex-1 min-w-0">
        <Skeleton className="h-5 w-2/5 mb-1" />
        <Skeleton className="h-3 w-1/4" />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
        <Skeleton className="h-3 w-3/5" />
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-14 rounded-full" />
        <Skeleton className="h-6 w-18 rounded-full" />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-line">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-3 w-20" />
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2 mt-2">
        <Skeleton className="h-7 w-20 rounded" />
        <Skeleton className="h-7 w-16 rounded" />
      </div>
    </article>
  );
}