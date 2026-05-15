import type { Metadata } from "next";
import { DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/organisms/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["300", "400", "500"],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-canvas text-ink">
        <main className="pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
