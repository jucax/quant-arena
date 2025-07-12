/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          750: '#374151',
        },
        'quant-red': '#EF314B',
        'quant-blue': '#0883B8',
      }
    },
  },
  plugins: [],
}

