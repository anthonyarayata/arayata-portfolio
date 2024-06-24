/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['monospace'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        darkBlue: '#1A202C',
        mediumBlue: '#2B6CB0',
        lightBlue: '#BEE3F8',
        gray: '#718096',
      },
    },
  },
  plugins: [],
};
