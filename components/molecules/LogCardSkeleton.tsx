import Skeleton from "@/components/atoms/Skeleton";

export default function LogCardSkeleton() {
  return (
    <div className="group block p-4 bg-card border border-line rounded-[14px] animate-pulse">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <Skeleton className="w-9 h-9 rounded-xl flex-shrink-0" />
          <div className="min-w-0 flex-1">
            <Skeleton className="h-4 w-3/4 mb-1" />
            <Skeleton className="h-3 w-1/3 mb-2" />
            <div className="flex flex-wrap gap-1.5">
              <Skeleton className="h-5 w-12 rounded-full" />
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-5 w-14 rounded-full" />
            </div>
          </div>
        </div>
        <Skeleton className="w-3.5 h-3.5 flex-shrink-0 mt-1" />
      </div>
    </div>
  );
}