/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6edff',
          100: '#ccdaff',
          200: '#99b6ff',
          300: '#6691ff',
          400: '#336dff',
          500: '#3366FF', // main primary
          600: '#2952cc',
          700: '#1f3d99',
          800: '#142966',
          900: '#0a1433',
        },
        secondary: {
          50: '#e0faf6',
          100: '#c1f5ed',
          200: '#83ebdb',
          300: '#44e0c9',
          400: '#0ACDAA', // main secondary
          500: '#09b898',
          600: '#079e83',
          700: '#05856e',
          800: '#036b58',
          900: '#023529',
        },
        accent: {
          50: '#fff1e6',
          100: '#ffe3cc',
          200: '#ffc799',
          300: '#ffab66',
          400: '#ff8c42', // main accent
          500: '#ff7333',
          600: '#cc5c29',
          700: '#99451f',
          800: '#662e14',
          900: '#33170a',
        },
        success: {
          500: '#22c55e',
        },
        warning: {
          500: '#eab308',
        },
        error: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};