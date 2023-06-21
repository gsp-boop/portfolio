/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        body: ["Noto Sans", "sans-serif"],
        display: ["Exo", "sans-serif"],
        sans: ["Grandiflora One", "serif"],
        date: ["Marcellus", "serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        customTheme: {
          primary: "#AFD3E2",
          secondary: "#19A7CE",
          background: "#03151D",
          accent: "#146C94",
          neutral: "#F6F1F1",
          dark: "",
          "base-100": "#FFFEEE",
          "base-200": "#03151D",
        },
      },
      "coffee",
      "dark",
      "pastel",
      "luxury",
    ],
  },
};
