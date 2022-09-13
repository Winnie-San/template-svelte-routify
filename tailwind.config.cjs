const config = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {}
  },
  daisyui: {
    themes: ['cupcake'],
    logs: false,
    rtl: false
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
}

module.exports = config
