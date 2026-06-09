/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/\*\*/\*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ole: ['"Ole"', "cursive"],
        dancing: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
};
