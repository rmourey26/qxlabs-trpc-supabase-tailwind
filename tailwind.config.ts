import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // QxLabs specific colors
        quantum: {
          DEFAULT: "hsl(var(--quantum))",
          foreground: "hsl(var(--quantum-foreground))",
          muted: "hsl(var(--quantum-muted))",
          highlight: "hsl(var(--quantum-highlight))",
        },
        matrix: {
          DEFAULT: "hsl(var(--matrix))",
          foreground: "hsl(var(--matrix-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Hexagonal-inspired shapes
        hex: "var(--radius-hex)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        quantum: ["var(--font-quantum)", ...fontFamily.sans],
      },
      boxShadow: {
        "quantum-glow": "0 0 25px 4px rgba(59, 130, 246, 0.6), 0 0 50px 8px rgba(59, 130, 246, 0.3)",
        "quantum-pulse": "0 0 35px 8px rgba(59, 130, 246, 0.8), 0 0 70px 15px rgba(59, 130, 246, 0.4)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "quantum-pulse": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 20px 3px rgba(59, 130, 246, 0.5), 0 0 40px 6px rgba(59, 130, 246, 0.2)",
          },
          "50%": {
            opacity: "0.9",
            boxShadow: "0 0 35px 8px rgba(59, 130, 246, 0.8), 0 0 70px 15px rgba(59, 130, 246, 0.4)",
          },
        },
        "matrix-flow": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "hex-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "data-stream": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "quantum-pulse": "quantum-pulse 2.5s ease-in-out infinite",
        "matrix-flow": "matrix-flow 20s linear infinite",
        "hex-rotate": "hex-rotate 10s linear infinite",
        "data-stream": "data-stream 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
