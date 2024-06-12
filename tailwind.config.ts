import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      sm: { max: "320" },
      md: { max: "760px", min: "321px" },
      lg: "1024px",
      xl: "1440px",
      xxl: "1780px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        lato: ["Lato", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fade: "fadeIn 1s ease-in-out ",
      },
    },
  },
  plugins: [],
} satisfies Config;
