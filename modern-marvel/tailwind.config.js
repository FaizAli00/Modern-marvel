/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: "#847F7B",
        customVision: "#A9A39E",
        customGrey: "#F3EFEB"

      },
      fontFamily: {
        CanelaTrial: ["'Canela Trial'", "sans-serif"],
        GTAmericaTrial: ["'GT America Trial'", "sans-serif"],
        AdobeGaramondPro: ["'Adobe Garamond Pro', sans-serif"]
      },
    },
  },
  plugins: [],
};
