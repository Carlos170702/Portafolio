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
