/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamiy: {
        custom1: ["Custom-1", "sans-serif"],
        sfpro: ["SFPro", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-color-light": "var(--primary-color-light)",
        "secondary-color": "var(--secondary-color)",
        "secondary-color-light": "var(--secondary-color-light)",
        "blue-opaque": "var(--blue-opaque)",
        "orange-opaque": "var(--orange-opaque)",
        "red-opaque": "var(--red-opaque)",
        "primary-color-dark": "var(--primary-color-dark)",
        "light-grey": "var(--light-grey)",
        "dark-grey": "var(--dark-grey)",
        "green-notification": "var(--green-notification)",
        "red-notification": "var(--red-notification)",
        "text-small": "var(--text-small)",
        "text-normal": "var(--text-normal)",
        "text-large": "var(--text-large)",
        "text-superlarge": "var(--text-superlarge)",
      },
    },
  },
  plugins: [],
};
