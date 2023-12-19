/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "10%": "10rem 10rem",
        "100-100%": "100% 100%",
      },
      maxHeight: {
        "maxh-h-30rem": "30rem",
      },
      height: {
        "40rem": "40rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "white-oval": "url('../public/homepage/whiteOval.svg')",
        "react-leaf": "url('../public/homepage/react-leaf.svg')",
        "about-us": "url('../public/aboutus/aboutBanner.jpeg')",
        "banner-manu": "url('../public/manufacturing/banner.jpeg')",
        "hybridwhite-Oval": "url('../public/homepage/hybridwhiteOval.webp')",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
        // poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
