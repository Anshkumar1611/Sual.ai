/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sual-primary': '#2563eb', // Modern blue from Sual.AI
        'sual-secondary': '#3b82f6', // Lighter blue
        'sual-accent': '#f59e0b', // Amber accent
        'sual-dark': '#1e293b', // Slate dark
        'sual-light': '#f8fafc', // Light background
        'sual-gradient-start': '#1e40af', // Gradient start
        'sual-gradient-end': '#3b82f6', // Gradient end
        'sual-text': '#0f172a', // Dark text
        'sual-text-light': '#64748b', // Light text
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
