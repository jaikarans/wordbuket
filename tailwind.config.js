/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      colors: {
        'darkprimary': {
          700: '#535353',
          800: '#222222',
          900: '#0a0a0a',
        },
        'darkmenubars': '#535353',
        'darkhovercolor': '#3D3D3D',
        'darkprimarytext': '#FFFFFF',
        'darksecondarytext': '#AAAAAA',
        'lightprimary': '#ffffff',
        'lightmenubars': '#fcfcfc',
        'lighthovercolor': '#777777',
        'lightprimarytext': '#000000',
        'lightsecondarytext': '#AAAAAA',
        'highlight': '#0284c7'
      }
    },
  },
  plugins: [],
}

