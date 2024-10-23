module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F0F0F',
        secondary: '#F6F6F6',
        accent: '#BFBFBF',
        gray: '#262626',
      },
      fontFamily: {
        serif: ['Instrument Serif', 'serif'], 
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

