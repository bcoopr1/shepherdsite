import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          900: "#0A0A0B",
          800: "#111216",
          700: "#1C1F22",
          600: "#2A2E33",
          500: "#3A3F45",
          400: "#5A6068",
        },
        tactical: {
          DEFAULT: "#5B7340",
          dark: "#4A5D3A",
          light: "#7A9454",
          glow: "#8FB564",
        },
        bone: {
          DEFAULT: "#E8E8E6",
          dim: "#B8B8B4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        "ultra-wide": "0.25em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s ease-out forwards",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "scan": "scan 6s linear infinite",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(58,63,69,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(58,63,69,0.25) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(91,115,64,0.15), transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
