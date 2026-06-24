/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        abyss: {
          950: '#0A0E1A',
          900: '#0F1629',
          800: '#1A1F3A',
          700: '#252B4A',
          600: '#2E355A',
          500: '#3A416B',
          400: '#4A517C',
        },
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        indigo: {
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
        },
        violet: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        gold: {
          400: '#FFD700',
          500: '#F5C842',
        },
      },
      fontFamily: {
        display: ['Clash Display', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(2.5rem, 5vw, 4.5rem)',
        'hero-sm': 'clamp(2rem, 4vw, 3.5rem)',
        'h1': 'clamp(2rem, 3.5vw, 3rem)',
        'h2': 'clamp(1.5rem, 2.5vw, 2.25rem)',
        'h3': 'clamp(1.25rem, 2vw, 1.75rem)',
        'h4': 'clamp(1.1rem, 1.5vw, 1.35rem)',
        'lg': 'clamp(1.05rem, 1.2vw, 1.2rem)',
        'base': 'clamp(0.95rem, 1vw, 1.05rem)',
        'sm': 'clamp(0.85rem, 0.9vw, 0.95rem)',
        'xs': '0.8rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'glass': '16px',
        'card': '20px',
        'pill': '100px',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(34, 211, 238, 0.15)',
        'glow-md': '0 0 40px rgba(34, 211, 238, 0.2)',
        'glow-lg': '0 0 60px rgba(34, 211, 238, 0.25)',
        'glow-gold': '0 0 40px rgba(245, 200, 66, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'elevation-1': '0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.4)',
        'elevation-2': '0 4px 6px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.3)',
        'elevation-3': '0 10px 15px rgba(0,0,0,0.3), 0 4px 6px rgba(0,0,0,0.3)',
      },
      backdropBlur: {
        'glass': '20px',
        'nav': '24px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'drift': 'drift 20s ease-in-out infinite',
        'drift-reverse': 'drift 25s ease-in-out infinite reverse',
        'marquee': 'marquee 30s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(30px, -20px)' },
          '50%': { transform: 'translate(-20px, 20px)' },
          '75%': { transform: 'translate(20px, 10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
