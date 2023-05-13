/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-red': '#ef4b4d',
        'custom-red-hover': '#f0898b'
      }
    }
  },
  plugins: []
}
