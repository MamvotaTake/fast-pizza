/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    fontFamily: {
      sans: 'Poppins'
    },
    extend: {
      backgroundImage: {
        'smallBanner': "url('./public/smallBanner.svg')",
      }
    },
  },
  plugins: [],
}

