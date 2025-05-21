/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        red: {
          500: '#dc2626',
          600: '#b91c1c',
          700: '#991b1b'
        },
        gray: {
          800: '#1f2937',
          900: '#111827'
        }
      },
      boxShadow: {
        glow: '0 0 15px rgba(220, 38, 38, 0.5)'
      }
    },
  },
  plugins: [],
};