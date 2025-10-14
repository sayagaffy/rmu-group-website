// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f0f7f9",   // Very light teal
          100: "#d9ebf1",  // Light teal
          200: "#b3d7e3",  // Lighter teal
          300: "#8cc3d5",  // Light-medium teal
          400: "#66afc7",  // Medium teal
          500: "#2f5c76",  // Main brand color (from header)
          600: "#284d62",  // Darker teal
          700: "#213e4e",  // Dark teal
          800: "#1a2f3a",  // Very dark teal
          900: "#132026",  // Darkest teal
        },
        secondary: {
          50: "#fdf8f6",
          100: "#f2e8e1",
          200: "#eaddd7",
          300: "#e0cfc5",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
        accent: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
