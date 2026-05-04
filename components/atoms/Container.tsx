import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
}

export default function Container({ children, narrow = false, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-5 sm:px-6 lg:px-8 ${narrow ? "max-w-2xl" : "max-w-3xl"} ${className}`}>
      {children}
    </div>
  );
}
