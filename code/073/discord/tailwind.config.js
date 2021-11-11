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
        'cloud': "url('../img/cloud.svg')",
        'stars': "url('../img/stars.svg')",
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
      'md': '600px',
    },
    maxWidth: {
      'md': '800px',
    },
    inset: {
      '-10': '-10%',
      '-75': '-75%',
      '-85': '-85%',
      '4': '4px',
      '0': '0px',
    },
    colors: {
      white: '#fff',
      brand: '#404eed',
      'black-400': '#000',
      'black-600': '#4b5563',
      'black-800': '#1f2937',
      'purple-400': '#c4b5fd',
      'purple-800': '#5865f2',
    },
  },
  variants: {},
  plugins: []
}
