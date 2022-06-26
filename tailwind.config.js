module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "primary":
      {
        900: "#0f172a",
        800: "#01e293b",
        700: "#334155",
        600: "#64748b",
        500: "#64748b",
        400: "#94a3b8",
        300: "#cbd5e1",
        200: "#e2e8f0",
        100: "#f1f5f9",
        50: "#f8fafc",
      },
      "white": "#ffffff",
      "text": {
        "normal": "#ffffff",
        "light": "#4b5563",
        "dark": "##111827",
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {

    }
  },
  plugins: [],
}
