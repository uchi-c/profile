import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { navItems, siteConfig } from "@/lib/site-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.tagline
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-ink text-slate-100 antialiased`}>
        <div className="fixed inset-0 -z-10 bg-mesh" />
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b13]/80 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <a href="#home" className="text-sm font-semibold tracking-wide text-white/90 hover:text-accent">
              {siteConfig.name}
            </a>
            <nav className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-accent">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
