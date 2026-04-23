import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#060a10",
        panel: "#0b1420",
        card: "#101b2a",
        muted: "#99a6bc",
        accent: "#20d89f",
        line: "rgba(148, 163, 184, 0.2)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(32,216,159,0.2), 0 10px 40px rgba(0,0,0,0.5)"
      },
      backgroundImage: {
        radial:
          "radial-gradient(1200px 700px at 20% -20%, rgba(32,216,159,0.15), transparent 60%), radial-gradient(900px 500px at 90% 0%, rgba(59,130,246,0.12), transparent 55%)"
      }
    }
  },
  plugins: []
} satisfies Config;
