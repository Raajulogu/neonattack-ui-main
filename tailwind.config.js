/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        red: {
          500: 'rgb(239, 68, 68)', // #ef4444
        },
        blue: {
          500: 'rgb(59, 130, 246)', // #3b82f6
        },
        green: {
          500: 'rgb(16, 185, 129)', // #10b981
        },
        yellow: {
          500: 'rgb(245, 158, 11)', // #f59e0b
        },
        purple: {
          500: 'rgb(139, 92, 246)', // #8b5cf6
        },
        pink: {
          500: 'rgb(236, 72, 153)', // #ec4899
        },
        orange: {
          500: 'rgb(249, 115, 22)', // #f97316
        },
        teal: {
          500: 'rgb(20, 184, 166)', // #14b8a6
        },
        indigo: {
          500: 'rgb(99, 102, 241)', // #6366f1
        },
        gray: {
          500: 'rgb(107, 114, 128)', // #6b7280
        },
      },
    },
  },
  plugins: [],
};
