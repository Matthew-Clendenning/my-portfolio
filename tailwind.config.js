/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 0px 35px rgba(0, 0, 0, 0.35)',
            '0 45px 65px rgba(0, 0, 0, 0.05)'
        ]
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100": { opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}

