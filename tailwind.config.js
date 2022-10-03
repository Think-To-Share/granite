/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          "50": "#E3F3F7",
          "100": "#CCE8F0",
          "200": "#95CFE0",
          "300": "#61B9D1",
          "400": "#359AB5",
          "500": "#266D81",
          "600": "#1E5766",
          "700": "#17434F",
          "800": "#0F2B33",
          "900": "#08171C"
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
