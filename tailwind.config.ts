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
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "rgb(var(--color-ink))",
        light: "rgb(var(--color-paper))",
        bamboo: {
          50: "rgb(var(--color-bamboo-50))",
          100: "rgb(var(--color-bamboo-100))",
          500: "rgb(var(--color-bamboo-500))",
          600: "rgb(var(--color-bamboo-600))",
          700: "rgb(var(--color-bamboo-700))",
        },
      },
      fontFamily: {
        Sora: ["sora", "sans", "sans-serif"],
      },
      borderColor: {
        border: "229,231,235",
      },
      boxShadow: {
        skill: "10px 10px 50px rgba(0, 0, 0, 0.1)",
      },
      flexGrow: {
        2: "2",
      },
    },
  },
  plugins: [],
} satisfies Config;
