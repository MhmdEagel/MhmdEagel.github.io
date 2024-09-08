/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'top-border-hover': {
          '0%': {transform: 'scaleX(0)'},
          '100%': {transform: 'scaleX(1)'}
        }
      },
      colors: {
        'primaryGreen': "#6DC05C",
        'primaryBg': "#191A19",
        'primaryCard': "#2E2E2E",
      },
      fontFamily: {
        firaCode: ["'Fira Code'"],
        robotoMono: ['"Roboto Mono"']
      }
    },
  },
  plugins: [],
}

