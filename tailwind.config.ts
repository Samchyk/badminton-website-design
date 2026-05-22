import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        "emerald-glow": "#10b981",
        "neon-green": "#00ff41",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      animation: {
        "glow-pulse": "glow-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-in": "slide-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "fade-in": "fade-in 0.6s ease-in-out",
        "blur-in": "blur-in 0.8s ease-out",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.7)",
          },
          "50%": {
            boxShadow: "0 0 20px 10px rgba(16, 185, 129, 0)",
          },
        },
        "slide-in": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "blur-in": {
          "0%": {
            filter: "blur(10px)",
            opacity: "0",
          },
          "100%": {
            filter: "blur(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
