import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import Footer from "@/components/organisms/Footer";
import { LoadingProvider } from "@/components/providers/LoadingProvider";
import GlobalLoadingOverlay from "@/components/atoms/GlobalLoadingOverlay";

export const metadata: Metadata = {
  title: {
    default: "Jerico P. Jacob — Makerspace Innovhub Intern",
    template: "%s — Jerico P. Jacob",
  },
  description:
    "Portfolio of Jerico P. Jacob — a frontend developer intern at Makerspace Innovhub, University of Eastern Pangasinan.",
  keywords: ["frontend", "developer", "Next.js", "React", "Flutter", "portfolio", "intern", "Pangasinan"],
  authors: [{ name: "Jerico P. Jacob" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-canvas text-ink">
        <LoadingProvider>
          <ThemeToggle />
          <GlobalLoadingOverlay />
          <main className="pt-0">{children}</main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
