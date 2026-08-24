/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#0F9D8A',
        'brand-teal-light': '#14B8A6',
        'brand-dark': '#0F172A',
        'brand-heading': '#111827',
        'brand-body': '#64748B',
        'brand-muted': '#94A3B8',
        'brand-border': '#E2E8F0',
        'brand-surface': '#FFFFFF',
        'brand-bg': '#F8FAFC',
        'brand-section': '#F1F5F9',
        'soft-teal': '#ECFDF5',
        'cta-yellow': '#FBBF24',
        'soft-yellow': '#FEF3C7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
        'underline-draw': 'underlineDraw 1.2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        underlineDraw: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      boxShadow: {
        'premium': '0 1px 3px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.06)',
        'premium-lg': '0 4px 16px rgba(15, 23, 42, 0.06), 0 12px 40px rgba(15, 23, 42, 0.08)',
        'premium-xl': '0 10px 40px rgba(15, 23, 42, 0.06)',
        'nav': '0 4px 24px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(15, 23, 42, 0.04)',
        'teal-glow': '0 0 20px rgba(15, 157, 138, 0.1), 0 0 40px rgba(15, 157, 138, 0.05)',
      },
    },
  },
  plugins: [],
}
