/** @type {import('tailwindcss').Config} */

export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    dropShadow: {
      'xs': '0 0 0 #004a7e',
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': [
        '0 0px 35px rgba(0, 0, 0, 0.35)',
        '0 45px 65px rgba(0, 0, 0, 0.05)'
      ]
    },
    animation: {
      opacity: '0',
      fadeIn: "fadeIn 1.5s ease-in-out 7.5s forwards"
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0, transform: 'translate3d(0,40px,0)' },
        "100%": { opacity: 1, transform: 'translate3d(0,0,0)' }
      }
    }
  },
};
export const plugins = [];

