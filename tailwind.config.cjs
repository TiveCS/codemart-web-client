/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'codemart-50': '#E2F2FF',
        'codemart-100': '#BADEFF',
        'codemart-200': '#8CCAFF',
        'codemart-300': '#5AB5FF',
        'codemart-400': '#2EA5FF',
        'codemart-500': '#0095FF',
        'codemart-600': '#0087FD',
        'codemart-700': '#0C74E9',
        'codemart-800': '#1262D6',
        'codemart-900': '#1742B7'
      }
    },
  },
  plugins: [],
};
