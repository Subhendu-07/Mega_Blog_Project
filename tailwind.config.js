/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        mymove : {
          '50%' : {'box-shadow' : '5px 5px 30px #ffbf00'},
        }
      },
      animation : {
        mymove : 'mymove 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
