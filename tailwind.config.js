/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif'],
      },
      colors: {
        // Theme 1: Modern Minimalist
        minimal: {
          primary: '#000000',
          secondary: '#6366F1', // Indigo
          accent: '#F59E0B', // Amber
          bg: '#FFFFFF',
          text: '#1F2937',
          muted: '#9CA3AF',
        },
        // Theme 2: Warm Local
        warm: {
          primary: '#8B4513', // Saddle Brown
          secondary: '#D2691E', // Chocolate
          accent: '#F4A460', // Sandy Brown
          bg: '#FFF8F0',
          text: '#3E2723',
          muted: '#A1887F',
        },
        // Theme 3: Bold Urban
        urban: {
          primary: '#FF6B35', // Orange Red
          secondary: '#004E89', // Deep Blue
          accent: '#F7B801', // Yellow
          bg: '#0A0A0A',
          text: '#FFFFFF',
          muted: '#B0B0B0',
        },
        // Theme 4: Clean Premium
        premium: {
          primary: '#000000',
          secondary: '#D4AF37', // Gold
          accent: '#C0C0C0', // Silver
          bg: '#FAFAFA',
          text: '#2C2C2C',
          muted: '#757575',
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'premium': '0 10px 40px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
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
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
