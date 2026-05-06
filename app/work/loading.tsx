// src/app/work/loading.tsx
import Container from "@/components/atoms/Container";
import Skeleton from "@/components/atoms/Skeleton";
import ProjectCardSkeleton from "@/components/molecules/ProjectCardSkeleton";

export default function WorkLoading() {
  return (
    <div className="py-16">
      <Container>
        {/* Header — matches WorkPage section */}
        <section className="mb-16">
          <Skeleton className="h-9 w-52 mb-4" variant="shimmer" />
          <div className="space-y-2 max-w-2xl">
            <Skeleton className="h-4 w-full" variant="shimmer" />
            <Skeleton className="h-4 w-4/5" variant="shimmer" />
          </div>
        </section>

        {/* Filters — category pills + tech stack pills */}
        <div className="mb-8 space-y-3">
          <div className="flex flex-wrap gap-2">
            {[80, 100, 72, 88, 64].map((w, i) => (
              <Skeleton key={i} className={`h-8 w-[${w}px] rounded-full`} variant="shimmer" />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {[60, 72, 84, 56, 96, 68].map((w, i) => (
              <Skeleton key={i} className={`h-8 w-[${w}px] rounded-full`} variant="shimmer" />
            ))}
          </div>
        </div>

        {/* Project cards */}
        <div className="space-y-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>

        {/* Count footer */}
        <Skeleton className="h-4 w-28 mt-8" variant="shimmer" />
      </Container>
    </div>
  );
}