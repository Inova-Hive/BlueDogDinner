/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-red': '#ef4b4d',
        'custom-red-hover': '#f0898b'
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
