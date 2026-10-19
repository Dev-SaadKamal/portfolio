import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1A1D23",
          deep: "#111317",
          subtle: "#242830",
          border: "#2E333D",
        },
        emerald: {
          signal: "#2FBF8F",
          hover: "#28A87D",
          dim: "rgba(47, 191, 143, 0.12)",
          border: "rgba(47, 191, 143, 0.35)",
        },
        amber: {
          warm: "#E8A94F",
          dim: "rgba(232, 169, 79, 0.12)",
          border: "rgba(232, 169, 79, 0.35)",
        },
        warm: {
          white: "#FAFAF7",
          surface: "#F4F4EE",
          card: "#FFFFFF",
          border: "#E7E7DF",
          borderDark: "#D8D8CF",
        },
        ash: {
          DEFAULT: "#6B7078",
          dark: "#4B5058",
          light: "#8F95A0",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "marquee": "marquee 28s linear infinite",
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
