import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        quicksand: ["var(--font-quicksand_sans)"],
        poppins: ["var(--font-poppins_sans)"],
        merriweather: ["var(--font-merriweather_sans_serif)"],
      },
      colors: {
        "dark-one": "#101217",
        "yellow-one": "#FFCB00"
      },
      keyframes: {
        scrollIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(-100%)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        scrollOut: {
          "0%": {
            opacity: "1",
            transform: "translateY(0%)"
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-100%)"
          }
        }
      },
      animation: {
        scrollIn: "scrollIn 1s ease forwards",
        scrollOut: "scrollOut .45s ease forwards"
      }
    },
  },
  plugins: [],
};
export default config;
