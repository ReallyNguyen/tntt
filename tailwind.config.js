/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        lightbg: "#F8F7F9",
        darkbg: "#1E1F23",
        red: "#EF233C",
        grey: "#464748",
        lightgrey: "#EFEDF1"
      },
      spacing: {
        '72': '18rem',
        '76': '19rem',
        '80': '20rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '98': '24.5rem',
        '100': '25rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '124': '31rem',
        '132': '33rem',
        '136': '34rem',
        '140': '35rem',
        '144': '36rem'
      }
    },
  },
  plugins: [],
}