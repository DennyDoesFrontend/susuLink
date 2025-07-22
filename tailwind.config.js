/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clBlue: "#065ad8",
        clGreen: "#10B981",
        clWhite: "#F9FAFB",
        clBlack: "#0a1f3b",
        clYellow: "#FBBF24",
        clText: "#626978",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open-Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
