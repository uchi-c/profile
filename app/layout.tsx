import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${siteConfig.identity.name} | ${siteConfig.identity.title}`,
  description: siteConfig.identity.tagline
};

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Skills", "skills"],
  ["Work", "work"],
  ["Insights", "insights"],
  ["Contact", "contact"]
] as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-slate-100 antialiased`}>
        <div className="min-h-screen bg-radial">
          <header className="sticky top-0 z-40 border-b border-line bg-slate-950/75 backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
              <a href="#home" className="text-sm font-semibold tracking-wide text-white">
                {siteConfig.identity.name}
              </a>
              <nav className="hidden gap-5 md:flex">
                {navItems.map(([label, href]) => (
                  <a key={href} href={`#${href}`} className="text-sm text-slate-300 transition hover:text-accent">
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
