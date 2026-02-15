/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Photography-inspired color palette
        primary: {
          DEFAULT: '#E63946', // Vibrant stage light red
          light: '#FF4D5E',
          dark: '#CC2936'
        },
        secondary: {
          DEFAULT: '#1D3557', // Deep midnight blue
          light: '#2A4A7F',
          dark: '#0F1C2E'
        },
        accent: {
          DEFAULT: '#F1AB86', // Warm spotlight glow
          light: '#FFB994',
          dark: '#D98F6E'
        },
        // Additional atmospheric colors
        shadow: '#2B2D42', // Deep shadow tone
        highlight: '#FFD700', // Stage light gold
        ambient: '#457B9D', // Atmospheric blue
        mist: '#F1FAEE' // Fog effect white
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-stage': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};