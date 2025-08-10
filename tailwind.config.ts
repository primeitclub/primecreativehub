import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'jersey': ['Jersey 25', 'sans-serif'],
            }, keyframes: {
       keyframes: {
        ripple: {
          '0%': { transform: 'scale(0.6)', opacity: '0.65' },
          '60%': { opacity: '0.28' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-20deg)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translateX(220%) skewX(-20deg)', opacity: '0' },
        },
        stars: {
          '0%': { backgroundPosition: '0 0, 0 0, 0 0', opacity: '.75' },
          '50%': { backgroundPosition: '50px 80px, -60px 40px, 40px -60px', opacity: '.9' },
          '100%': { backgroundPosition: '0 0, 0 0, 0 0', opacity: '.75' },
        },
        aurora: {
          '0%': { transform: 'translateY(-2%) rotate(0deg)', filter: 'hue-rotate(0deg)' },
          '50%': { transform: 'translateY(2%) rotate(2deg)', filter: 'hue-rotate(15deg)' },
          '100%': { transform: 'translateY(-2%) rotate(0deg)', filter: 'hue-rotate(0deg)' },
        },
      },
      animation: {
        ripple: 'ripple 1.8s ease-out infinite',
        shine: 'shine 1.2s ease-out both',
        stars: 'stars 18s ease-in-out infinite',
        aurora: 'aurora 20s ease-in-out infinite',
      },
    },
        },
    },
    plugins: [],
}
export default config 