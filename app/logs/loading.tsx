// src/app/logs/loading.tsx
import Container from "@/components/atoms/Container";
import Skeleton from "@/components/atoms/Skeleton";

function LogRowSkeleton() {
  return (
    <div className="block p-4 bg-card border border-line rounded-[14px]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          {/* Week badge */}
          <Skeleton className="flex-shrink-0 w-9 h-9 rounded-xl mt-0.5" variant="shimmer" />

          <div className="flex-1 min-w-0">
            {/* Title */}
            <Skeleton className="h-4 w-3/5 mb-2" variant="shimmer" />
            {/* Period */}
            <Skeleton className="h-3 w-24 mb-3" variant="shimmer" />
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              <Skeleton className="h-5 w-16 rounded-full" variant="shimmer" />
              <Skeleton className="h-5 w-20 rounded-full" variant="shimmer" />
              <Skeleton className="h-5 w-14 rounded-full" variant="shimmer" />
            </div>
          </div>
        </div>
        {/* Arrow */}
        <Skeleton className="w-3.5 h-3.5 rounded flex-shrink-0 mt-1" variant="shimmer" />
      </div>
    </div>
  );
}

export default function LogsLoading() {
  return (
    <div className="py-16">
      <Container narrow>
        {/* Header card */}
        <div className="bg-card border border-line rounded-[14px] p-6 sm:p-8 mb-8">
          <Skeleton className="h-3 w-16 mb-3" variant="shimmer" />
          <Skeleton className="h-9 w-40 mb-3" variant="shimmer" />
          <div className="space-y-2">
            <Skeleton className="h-3.5 w-full" variant="shimmer" />
            <Skeleton className="h-3.5 w-4/5" variant="shimmer" />
          </div>
        </div>

        {/* Log rows */}
        <div className="space-y-2">
          {Array.from({ length: 11 }).map((_, i) => (
            <LogRowSkeleton key={i} />
          ))}
        </div>
      </Container>
    </div>
  );
}