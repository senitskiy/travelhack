module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'rp-red': '#FF3000',
        'rp-red-hover': '#DD2A00',
        'rp-red-focus': '#BE2602',
        'rp-text': '#262626',
        'rp-text-muted': '#898989',
        'rp-light-gray': '#F0F0F0',
        'rp-input-border': '#E4E4E4',
        'rp-input-border-dark': '#b2b2b2',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
