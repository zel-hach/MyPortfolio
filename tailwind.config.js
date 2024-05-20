/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '680px',

        md: '900px',


        lg: '1024px',

        xl: '1280px',

        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

