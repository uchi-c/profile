import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#060a11",
        panel: "#0f1726",
        panelSoft: "#111d30",
        accent: "#1bd6a2",
        accentSoft: "#15342e"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(27, 214, 162, 0.18), 0 24px 60px rgba(2, 10, 24, 0.65)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 15% 10%, rgba(27, 214, 162, 0.12), transparent 40%), radial-gradient(circle at 80% 0%, rgba(58, 132, 255, 0.08), transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
