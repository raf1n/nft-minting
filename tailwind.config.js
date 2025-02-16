import { type Config } from "tailwindcss"

export default {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "#111827",
          from: "#000000",
          to: "#111827",
        },
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#8b5cf6",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1f2937",
          foreground: "#9ca3af",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#1f2937",
          foreground: "#9ca3af",
        },
        accent: {
          DEFAULT: "#1f2937",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#1f2937",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#1f2937",
          foreground: "#ffffff",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

