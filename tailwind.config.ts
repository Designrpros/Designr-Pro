/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          background: '#cad9e4', // Soft blue-gray background
          highlight: '#fddeb4', // Warm peach for highlighted text background
          textPrimary: '#292a2d', // Dark gray for primary text
          textSecondary: '#292a2d', // Same dark gray for secondary text (can adjust if needed)
          textMuted: '#666666', // Keeping muted gray for the top bar (can adjust if needed)
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Clean, modern font for body text
          heading: ['Montserrat', 'sans-serif'], // Bold font for headings
        },
      },
    },
    plugins: [],
  };