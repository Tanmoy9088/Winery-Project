/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/\*\*/\*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#171210",
        surface: "#221A17",
        border: "#33271F",
        primary: "#7A1F2B",
        accent: "#D4A857",
        text: "#EDE6E1",
        muted: "#A89A92",
      },
      fontFamily: {
        ole: ['"Ole"', "cursive"],
        dancing: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
