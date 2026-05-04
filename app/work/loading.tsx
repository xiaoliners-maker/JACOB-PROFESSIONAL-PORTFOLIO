import Container from "@/components/atoms/Container";

export default function Loading() {
  return (
    <div className="py-16">
      <Container>
        <div className="bg-card border border-line rounded-[14px] p-6 sm:p-8 mb-8 animate-pulse">
          <div className="h-3 bg-line rounded w-1/5 mb-3" />
          <div className="h-8 bg-line rounded w-1/3 mb-3" />
          <div className="h-3 bg-line rounded w-3/5" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="bg-card border border-line rounded-[14px] p-5 h-44 animate-pulse">
              <div className="space-y-3">
                <div className="h-3 bg-line rounded w-2/5" />
                <div className="h-4 bg-line rounded w-3/4" />
                <div className="h-3 bg-line rounded w-full" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
