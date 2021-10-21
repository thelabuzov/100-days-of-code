module.exports = {
  purge: {
    mode: 'layers',
    content: [
      'src/**/*.js',
      'src/**/*.jsx',
      'public/**/*.html'
    ]
  },
  darkMode: false,
  theme: {
    minHeight: {
      'image': '25rem',
      'promo': '740px',
    },
    maxWidth: {
      'wide': '1100px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://assets.nflxext.com/ffe/siteui/vlv3/68c9706b-acd1-4472-bb1d-ef3ca933154c/298a5fdb-322c-44cb-839c-0b144a4b7159/US-en-20211011-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
        'download-pattern': "url('https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif')",
      },
      inset: {
        'tv': '4.5rem',
        'pc': '4.5rem',
        'pc-xl': '6.3rem',
      },
      zIndex: {
        '-10': '-10',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '750px',
        xl: '750px',
        '2xl': '750px',
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: []
}
