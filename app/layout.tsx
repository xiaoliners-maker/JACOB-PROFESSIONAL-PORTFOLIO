import type { Metadata } from "next";
import { DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import Footer from "@/components/organisms/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "600"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Jerico P. Jacob — Makerspace Innovhub Intern",
    template: "%s — Jerico P. Jacob",
  },
  description:
    "Portfolio of Jerico P. Jacob — a frontend developer intern at Makerspace Innovhub, University of Eastern Pangasinan.",
  keywords: ["frontend", "developer", "Next.js", "React", "Flutter", "TypeScript", "Tailwind CSS", "portfolio", "intern", "Pangasinan"],
  authors: [{ name: "Jerico P. Jacob" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-canvas text-ink">
        <Script id="theme-init" strategy="beforeInteractive">{`
          (function() {
            var stored = localStorage.getItem('theme');
            var theme = stored === 'light' || stored === 'dark'
              ? stored
              : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.classList.add(theme);
          })();
        `}</Script>
        <ThemeToggle />
        <main className="pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}