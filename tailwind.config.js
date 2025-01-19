/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': [ 
        'Roboto',
      ]
    },
    extend: {
      colors: {
        'agency-red': {
          'light': '#f6c9c8',
          DEFAULT: '#dd2a25'
        },
        'anomaly-blue': '#0047BB',
        'reality-yellow': '#fcad30',
        'deep-purple': '#251c46',
        'pale-gray': '#ebf0f8',
      },
    },
  },
  plugins: []
};
