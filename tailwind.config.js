const defaultTheme = require('tailwindcss/defaultTheme');
const { join } = require('path');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: 'jit',
  purge: {
    enabled: isProduction,
    content: [
      join(__dirname, 'src/**/*.{html,ts}'),
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    // extend: {
    //   // create custom fonts here
    fontFamily: {
      heading: '\'Fraunces\', \'serif\'',
      mono: ['\'Barlow\'', ...defaultTheme.fontFamily.mono]
    },
    // create custom text colors here
    textColor: {
      'soft-red': withOpacity('--color-soft-red'),
      'yellow': withOpacity('--color-yellow'),
      'dark-desaturated-cyan': withOpacity('--color-dark-desaturated-cyan'),
      'dark-blue': withOpacity('--color-dark-blue'),
      'dark-moderate-cyan': withOpacity('--color-dark-moderate-cyan'),
      'very-dark-desaturated-blue': withOpacity('--color-very-dark-desaturated-blue'),
      'very-dark-grayish-blue': withOpacity('--color-very-dark-grayish-blue'),
      'dark-grayish-blue': withOpacity('--color-dark-grayish-blue'),
      'grayish-blue': withOpacity('--color-grayish-blue'),
      'white': withOpacity('--color-white')
    },
    // create custom background colors here
    backgroundColor: {
      'soft-red': withOpacity('--color-soft-red'),
      'yellow': withOpacity('--color-yellow'),
      'dark-desaturated-cyan': withOpacity('--color-dark-desaturated-cyan'),
      'dark-blue': withOpacity('--color-dark-blue'),
      'dark-moderate-cyan': withOpacity('--color-dark-moderate-cyan'),
      'very-dark-desaturated-blue': withOpacity('--color-very-dark-desaturated-blue'),
      'very-dark-grayish-blue': withOpacity('--color-very-dark-grayish-blue'),
      'dark-grayish-blue': withOpacity('--color-dark-grayish-blue'),
      'grayish-blue': withOpacity('--color-grayish-blue'),
      'white': withOpacity('--color-white')
    },
    borderColor: {
      'soft-red': withOpacity('--color-soft-red'),
      'yellow': withOpacity('--color-yellow')
    }
  },
  // custom variants
  variants: {
    extend: {
      backgroundColor: ['active']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
};
