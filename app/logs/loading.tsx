import Container from "@/components/atoms/Container";

export default function Loading() {
  return (
    <div className="py-16">
      <Container narrow>
        <div className="bg-card border border-line rounded-[14px] p-6 sm:p-8 mb-8 animate-pulse">
          <div className="h-3 bg-line rounded w-1/5 mb-3" />
          <div className="h-8 bg-line rounded w-2/5 mb-3" />
          <div className="h-3 bg-line rounded w-3/5" />
        </div>
        {[1,2,3,4,5].map(i => (
          <div key={i} className="bg-card border border-line rounded-[14px] p-4 mb-2 animate-pulse">
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-xl bg-line flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-line rounded w-3/4" />
                <div className="h-3 bg-line rounded w-2/5" />
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
