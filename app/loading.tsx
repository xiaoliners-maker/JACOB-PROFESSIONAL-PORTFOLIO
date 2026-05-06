import Container from "@/components/atoms/Container";
import Skeleton from "@/components/atoms/Skeleton";
import ProjectCardSkeleton from "@/components/molecules/ProjectCardSkeleton";
import Link from "next/link";

export default function Loading() {
  return (
    <div className="py-16">
      <Container>
        {/* Header Section */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-start gap-8">
            {/* Avatar */}
            <Skeleton className="w-28 h-28 rounded-2xl flex-shrink-0" variant="shimmer" />

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-3">
                <Skeleton className="h-8 w-48" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Skeleton className="w-4 h-4 rounded" />
                <Skeleton className="h-4 w-32" />
              </div>

              <Skeleton className="h-4 w-40 mb-6" />

              <div className="flex flex-wrap gap-3 mb-6">
                <Skeleton className="h-8 w-24 rounded" />
                <Skeleton className="h-8 w-28 rounded" />
                <Skeleton className="h-8 w-20 rounded" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <Skeleton className="h-7 w-16 mb-6" />
          <div className="space-y-3 max-w-2xl">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <Skeleton className="h-7 w-24 mb-8" />
          <div className="space-y-8">
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-4">
                <Skeleton className="w-3 h-3 rounded-full mt-3 flex-shrink-0" />
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-40" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <Skeleton className="h-7 w-32" />
            <Skeleton className="h-7 w-20 rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <Skeleton className="h-6 w-20 mb-4" />
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((j) => (
                    <Skeleton key={j} className="h-4 w-24" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <Skeleton className="h-7 w-36" />
            <Skeleton className="h-7 w-20 rounded" />
          </div>

          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        </section>

        {/* Recent Logs Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <Skeleton className="h-7 w-24" />
            <Skeleton className="h-7 w-20 rounded" />
          </div>

          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <Link
                key={i}
                href="#"
                className="group block"
              >
                <div className="flex items-center gap-4">
                  <Skeleton className="w-6 h-4 rounded" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-48 mb-1" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
