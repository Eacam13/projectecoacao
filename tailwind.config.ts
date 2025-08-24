/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--brand-background))",
        foreground: "hsl(var(--brand-text-base))",
        border: "hsl(var(--brand-neutral-200))",
        primary: {
          DEFAULT: "hsl(var(--brand-primary))",
          light: "hsl(var(--brand-primary-light))",
          dark: "hsl(var(--brand-primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--brand-secondary))",
          light: "hsl(var(--brand-secondary-light))",
          dark: "hsl(var(--brand-secondary-dark))",
        },
        accent: "hsl(var(--brand-accent))",
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
    },
  },
  plugins: [],
}
