/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        // Spacei design tokens
        "deep-space": "#000000",
        "surface": "#1E1E1E",
        "text-primary": "#FFFFFF",
        "text-secondary": "#F3F4F5",
        "text-muted": "#A8AAAD",
        "accent-violet": "#7500EA",
        "accent-blue": "#5B9BFF",
        "accent-purple": "#8B5CF6",
        "light-blue": "#A5F3FC",
        "star-gold": "#D4AF37",
        "neutral-gray": "#8E8E8E",
        "dark-surface": "#111111",
        "particle-cyan": "#00C8FF",
        "particle-violet": "#7C3AED",
        "particle-amber": "#F59E0B",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "pulse-dot": {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "1" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(117, 0, 234, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(117, 0, 234, 0.5)" },
        },
        "node-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "glow-drift": {
          "0%, 100%": { backgroundPosition: "50% 50%" },
          "50%": { backgroundPosition: "52% 51%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite alternate",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "node-pulse": "node-pulse 2s ease-in-out infinite",
        "glow-drift": "glow-drift 8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
