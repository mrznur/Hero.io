/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        'primary-dark': '#6D28D9',
        'primary-light': '#EDE9FE',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        heroio: {
          primary: '#7C3AED',
          'primary-content': '#ffffff',
          secondary: '#6D28D9',
          accent: '#F59E0B',
          neutral: '#374151',
          'base-100': '#ffffff',
          'base-200': '#F9FAFB',
          'base-300': '#F3F4F6',
          'base-content': '#111827',
        },
      },
    ],
    darkTheme: false,
  },
};
