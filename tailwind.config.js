/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        21: "84px",
      },
      padding: {
        21: "84px",
      },
      fontFamily: {
        nunito: "Nunito",
      },
      borderRadius: {
        5: "1.25rem",
      },
      colors: {
        "primary-dark": "#011F1E",
        grey: "#777777",
        "grey-wire": "#CECECE",
        primary: "#62C227",
        base: "#FCFCFC",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
};
