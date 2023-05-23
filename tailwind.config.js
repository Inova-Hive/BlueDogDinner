/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-red': '#ef4b4d',
        'custom-red-hover': '#ef4b4ed6',
        'custom-blue': '#2E3192'
      },
      backgroundImage: (theme) => ({
        'menu-background': "url('https://i.imgur.com/U1XAHat.jpg')"
      }),
      backgroundSize: {
        cover: 'cover',
        contain: 'contain'
      }
    }
  },
  plugins: []
}
