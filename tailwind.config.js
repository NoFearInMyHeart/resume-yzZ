/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'resume-primary': 'url(/primary-bg.svg)',
      },
      animation: {
        'fade-up': 'fade-up 0.5s linear',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(200px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  variants: {},
  plugins: [
    '@tailwindcss/forms',
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
};
