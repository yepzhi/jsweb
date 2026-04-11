/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1A1F6E',
        'secondary': '#00A896',
        'accent': '#F5A623',
        'dark-bg': '#0D0F1A',
        'dark-surface': '#1C1F2E',
        'text-primary': '#FFFFFF',
        'text-secondary': '#8A8FAD',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'button': '8px',
        'circle': '50%',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
