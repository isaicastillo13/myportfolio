/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html", // Incluir los archivos HTML dentro de public
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'negro': '#000000',
      'ghostWhite': '#9E9E9E',
      'pearl': '#FCFBF8',
      'butterYellow': '#FFF083',
      'grisAzulado': '#64748B',
      'azulBrillante': '#1DA1F2',
      'neutral900': '#6b7280'
    },
    extend: {
      fontFamily: {
<<<<<<< HEAD
        sans: ['Outfit', 'sans-serif'], // Roboto como fuente predeterminada
=======
        sans: ['Roboto', 'sans-serif'], // Roboto como fuente predeterminada
        'bakbakOne': ['Bakbak One', 'serif'],
        'open-sans': ['Open Sans', 'serif'],
>>>>>>> e8bd3a58e0bd4ca4fcef06ddeeba3eaf58d4c824
        'imbPlex': ['IBM Plex Mono', 'monospace']
      }
    },
  },
  plugins: [],
}