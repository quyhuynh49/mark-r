/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sst: ['SST'],
      },
      gridTemplateRows: {
        '1': 'repeat(1, minmax(103px, 1fr))',
        '2': 'repeat(2, minmax(103px, 1fr))',
        '4': 'repeat(4, minmax(103px, 1fr))',
        '5': 'repeat(5, minmax(103px, 1fr))',
        '6': 'repeat(6, minmax(103px, 1fr))',
        '7': 'repeat(7, minmax(103px, 1fr))',
      },
      backgroundImage: {
        'header-cover': "url('./assets/images/header.jpeg')"
      },
      boxShadow: {
        DEFAULT: '0px 0px 12px 0px rgba(194, 251, 255, 1)',
        page: '0px 4px 4px 0px rgba(0, 0, 0, 0.08)'
      },
      container: {
        center: true,
        padding: {
          xl: '32px'
        },
        screens: {
          xl: '1440px'
        }
      },
      screens: {
        xl: '1440px'
      }
    },
  },
  plugins: [],
}

