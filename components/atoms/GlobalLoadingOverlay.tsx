"use client";

import { useLoading } from "@/components/providers/LoadingProvider";
import { useEffect } from "react";

export default function GlobalLoadingOverlay() {
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setIsLoading(false), 1000); // Auto-hide after 1s
      return () => clearTimeout(timer);
    }
  }, [isLoading, setIsLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-canvas/80 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-card border border-line rounded-[14px] p-8 shadow-lg animate-scale-in">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-ink-muted">Loading...</p>
        </div>
      </div>
    </div>
  );
}