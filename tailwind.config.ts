import type { Config } from 'tailwindcss';
import tailwindcssFilters from 'tailwindcss-filters';

const config: Config = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-border':
          '-50px -50px 1px -40px var(--main-white-txt-cl), 50px 50px 1px -40px var(--main-white-txt-cl)',
      },
    },
  },
  plugins: [tailwindcssFilters],
};

export default config;
