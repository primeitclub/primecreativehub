import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
      screens: {
        xs: "390px", // iPhone 12 Pro width
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    
    
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
