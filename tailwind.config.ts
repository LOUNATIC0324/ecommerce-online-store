import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orchard: '#1f8f4c',
        leaf: '#2bb673',
        sun: '#f7b267',
        soil: '#4a3222',
        cream: '#fffaf1',
      },
      boxShadow: {
        soft: '0 20px 45px -20px rgba(15, 92, 57, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
