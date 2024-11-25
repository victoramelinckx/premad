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
        "primary-50": "#EBF7B3",
        "primary-100": "#E3F49E",
        "primary-200": "#DBF189",
        "primary-300": "#D3EE74",
        "primary-400": "#CBEB5F",
        "primary-500": "#B3DA07",
        "primary-600": "#A1C406",
        "primary-700": "#8FAD06",
        "primary-800": "#7D9705",
        "primary-900": "#6B8004",
        "secondary-50": "#F2FAC3",
        "secondary-100": "#EAF7AF",
        "secondary-200": "#E2F49B",
        "secondary-300": "#DAF187",
        "secondary-400": "#D2EE73",
        "secondary-500": "#CAEB5F",
        "secondary-600": "#B5D356",
        "secondary-700": "#A1BC4C",
        "secondary-800": "#8CA443",
        "secondary-900": "#788D39",
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
