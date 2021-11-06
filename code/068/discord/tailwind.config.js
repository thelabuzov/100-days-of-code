module.exports = {
  purge: ['build/**/*.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-left': "url('../img/hero-left.svg')",
        'hero-right': "url('../img/hero-right.svg')",
        'hero-texture': "url('../img/hero-texture.svg')",
      },
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '1200px',
        lg: '1200px',
        xl: '1200px',
        '2xl': '1200px'
      },
    },
    minHeight: {
      'promo': '600px',
    },
    maxWidth: {
      'hero': '800px',
    },
    inset: {
      '-75': '-75%',
      '-85': '-85%',
      '0': '0px',
    },
    colors: {
      white: '#fff',
      purple: '#5865f2',
      brand: '#404eed',
      black: '#000',
      'black-600': '#4B5563',
      'black-800': '#1F2937',
    },
  },
  variants: {},
  plugins: []
}
