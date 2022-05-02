const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        black: {
          DEFAULT: '#141414',
        },
        lineHeight: {
          none: '0',
        },
        aspectRatio: {
          '2/3': '2 / 3',
        },
        // Configure your color palette here
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
