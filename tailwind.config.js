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
          "50": "#F1F7F9",
          "100": "#DFEEF1",
          "200": "#BEDCE4",
          "300": "#93C5D2",
          "400": "#5EA8BB",
          "500": "#3C7D8E",
          "600": "#356F7D",
          "700": "#306573",
          "800": "#27525D",
          "900": "#183339"
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
