import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#05050A",
        surface: "rgba(255,255,255,0.04)",
        border: {
          hairline: "rgba(255,255,255,0.08)",
          soft: "rgba(255,255,255,0.14)",
        },
        cyan: {
          DEFAULT: "#2DE2E6",
          dim: "#1A9EA1",
        },
        violet: {
          DEFAULT: "#9D4EDD",
          dim: "#6B2FA0",
        },
        signal: "#39FF8A",
        ink: {
          primary: "#F4F4F7",
          secondary: "#9CA3AF",
          tertiary: "#5C6270",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "neon-gradient": "linear-gradient(90deg, #2DE2E6 0%, #9D4EDD 100%)",
        "neon-gradient-soft":
          "linear-gradient(135deg, rgba(45,226,230,0.15) 0%, rgba(157,78,221,0.15) 100%)",
        "radial-glow":
          "radial-gradient(600px circle at var(--x) var(--y), rgba(45,226,230,0.12), transparent 60%)",
      },
      boxShadow: {
        "neon-cyan": "0 0 24px rgba(45,226,230,0.35)",
        "neon-violet": "0 0 24px rgba(157,78,221,0.35)",
        "glass-inset": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.3)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
