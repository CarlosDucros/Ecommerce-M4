import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slideInFromRight: "slideInFromRight 0.5s ease-out forwards",
      },
      keyframes: {
        slideInFromRight: {
          "0%": { transform: "translateX(100%) rotate(60deg)", opacity: "0" },
          "100%": { transform: "translateX(0) rotate(0deg)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-purple": "#7B2CBF",
        "soft-purple": "#e6bbff",
        "dark-purple": "#29103E",
      },
    },
  },
  plugins: [],
};
export default config;
