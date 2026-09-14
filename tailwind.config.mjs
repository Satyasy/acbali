/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F6FB',
          100: '#E1EDF7',
          200: '#C3DBEF',
          300: '#94C0E3',
          400: '#5F9FD3',
          500: '#3980C1',
          600: '#2665A5',
          700: '#1D5086',
          800: '#0F4C81', // Deep Tech Navy
          900: '#0C3D68',
          950: '#07243F',
        },
        slatewhite: '#F8FAFC',
        iceblue: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7', // Ice Blue
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
        wagreen: {
          DEFAULT: '#25D366', // WhatsApp Green
          hover: '#1EBE5D',
          dark: '#16A34A',
          light: '#DCF8C6',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 25px -5px rgba(37, 211, 102, 0.4)',
        'glow-blue': '0 0 25px -5px rgba(2, 132, 199, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' },
          '50%': { transform: 'scale(1.02)', boxShadow: '0 0 0 10px rgba(37, 211, 102, 0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        }
      }
    },
  },
  plugins: [],
};
