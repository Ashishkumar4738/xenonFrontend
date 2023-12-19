/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        "2xl": { min: "1535px" },
        // => @media (min-width: 1535px) { ... }

        xl: { min: "1279px" },
        // => @media (min-width: 1279px) { ... }

        lg: { min: "1023px" },
        // => @media (min-width: 1023px) { ... }

        md: { min: "767px" },
        // => @media (min-width: 767px) { ... }

        sm: { min: "639px" },
        // => @media (min-width: 639px) { ... }

        xs: { min: "479px" },
        // => @media (min-width: 479px) { ... }
      },
    },
  },
  plugins: [],
}
