import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandRed: "#c91923",
        brandTeal: "#4fbcb5",
        ink: "#111111",
        sand: "#f6efe9",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
      backgroundImage: {
        glow: "radial-gradient(circle at top, rgba(201,25,35,0.14), transparent 45%)",
      },
    },
  },
  plugins: [],
};
export default config;
