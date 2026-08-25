import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        accent: {
          DEFAULT: "var(--accent)",
          2: "var(--accent-2)",
          foreground: "var(--accent-foreground)",
        },
        surface: "var(--surface)",
        border: "var(--border)",
        brand: {
          navy: "var(--brand-navy)",
          blue: "var(--brand-blue)",
          orange: "var(--brand-orange)",
        },
      },
      boxShadow: {
        glow: "0 20px 50px -20px var(--accent)",
      },
    },
  },
  plugins: [],
};
export default config;
