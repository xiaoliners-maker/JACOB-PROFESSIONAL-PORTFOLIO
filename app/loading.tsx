import Container from "@/components/atoms/Container";

export default function Loading() {
  return (
    <div className="py-16">
      <Container>
        <div className="bg-card border border-line rounded-[14px] p-6 sm:p-8 mb-4 animate-pulse">
          <div className="flex gap-5">
            <div className="w-20 h-20 rounded-2xl bg-line flex-shrink-0" />
            <div className="flex-1 space-y-3">
              <div className="h-5 bg-line rounded w-2/5" />
              <div className="h-3 bg-line rounded w-3/5" />
              <div className="h-3 bg-line rounded w-4/5" />
            </div>
          </div>
        </div>
        {[1,2,3].map(i => (
          <div key={i} className="bg-card border border-line rounded-[14px] p-5 mb-3 animate-pulse">
            <div className="space-y-2">
              <div className="h-3 bg-line rounded w-1/3" />
              <div className="h-4 bg-line rounded w-2/3" />
              <div className="h-3 bg-line rounded w-1/2" />
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
