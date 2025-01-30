/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}',
  ],
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
        'reality-yellow': {
          'lighter': '#feeacb',
          'light': '#fdd597',
          DEFAULT: '#fcad30',
        },
        'deep-purple': '#251c46',
        'pale-gray': '#ebf0f8',
        'purple-gray': '#9995aa',
      },
    },
  },
  plugins: []
};
