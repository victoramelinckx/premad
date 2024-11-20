import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "primary-50": "#fcc98f",
        "primary-100": "#fbbe79",
        "primary-200": "#fab362",
        "primary-300": "#f9a94c",
        "primary-400": "#f99e35",
        "primary-500": "#B3DA07",
        "primary-600": "#df841c",
        "primary-700": "#c67619",
        "primary-800": "#ae6716",
        "primary-900": "#955813",
        "secondary-50": "#fed89e",
        "secondary-100": "#fdd08a",
        "secondary-200": "#fdc877",
        "secondary-300": "#fdc063",
        "secondary-400": "#fcb850",
        "secondary-500": "#fcb03c",
        "secondary-600": "#e39e36",
        "secondary-700": "#ca8d30",
        "secondary-800": "#b07b2a",
        "secondary-900": "#976a24",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-figtree)", ...defaultTheme.fontFamily.sans],
        figtree: ["var(--font-figtree)", ...defaultTheme.fontFamily.sans],
        monserrat: ["var(--font-monserrat)", ...defaultTheme.fontFamily.sans],
        dmsans: ["var(--font-dm-sans)", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
