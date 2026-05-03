import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#e13e90',
          dark: '#b8306f',
          light: '#fce8f3',
        },
        'ribbony-black': '#0f0f0f',
        'gray-dark': '#3d3d3d',
        'gray-mid': '#6b6b6b',
        'gray-light': '#f5f5f5',
        border: '#ebebeb',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-raleway)', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(48px, 6vw, 80px)', { lineHeight: '1.1', fontWeight: '800' }],
        'h2': ['clamp(34px, 4vw, 56px)', { lineHeight: '1.15', fontWeight: '800' }],
      },
      borderRadius: {
        '20': '20px',
        '32': '32px',
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.10)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
