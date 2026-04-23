import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.tagline
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <a href="#home" className="brand">
            {siteConfig.name}
          </a>
          <nav>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#ventures">Ventures</a>
            <a href="#insights">Insights</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
