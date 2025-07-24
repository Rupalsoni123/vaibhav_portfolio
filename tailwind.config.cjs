const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  important: true,
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'light-bg': '#f8fafc',
        'light-text': '#1e293b',
        'light-primary': '#0ea5e9',
        'light-secondary': '#64748b',
        
        // Dark mode colors
        'dark-bg': '#0f172a',
        'dark-text': '#f1f5f9',
        'dark-primary': '#38bdf8',
        'dark-secondary': '#94a3b8',
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
      advanced: ['Nunito']
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
