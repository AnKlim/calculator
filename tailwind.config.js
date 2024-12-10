/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: "var(--background-main-color)",
        primary: "var(--color-primary)",
        btnFunctional: "var(--color-text)",
        bgFunctional: "var(--background-functional-color)"
      }
    },
  },
  plugins: [],
}

