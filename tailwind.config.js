/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'resume-primary': 'url(/primary-bg.svg)',
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
