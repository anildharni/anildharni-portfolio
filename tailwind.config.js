module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Be Vietnam Pro', 'system-ui', 'sans']
    },
    screens: {
      'sm': '550px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        dark: '#000',
        white: '#fff',
        lightText: '#76797d'
      },
      padding: {
        '2':'0.5rem'
      },
      width: {
        '95': '95%', 
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
