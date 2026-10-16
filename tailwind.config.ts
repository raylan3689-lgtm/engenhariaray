import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gov: {
          blue: "#1351b4",
          dark: "#071d41",
          green: "#168821",
          yellow: "#ffcd07",
          gray: "#f0f0f0"
        }
      },
      fontFamily: {
        sans: ["'Rawline'", "'Raleway'", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
export default config;
