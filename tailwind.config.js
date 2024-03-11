/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: { md: { max: "1050px" }, sm: { max: "550px" } },
      colors: {
        // Custom color palette
        green: {
          401: "#6FB668",
          402: "#6FB668",
          403: "#6FB668",
          404: "#6FB668",
          405: "#6FB668",
          406: "#898121",
        },
        blue: {
          DEFAULT: "#2196F3",
        },
        yellow: {
          401: "#F2C14E",
          402: "#EFB52E",
          403: "#D19710",
          404: "#EEFC57",
          405: "#F7B538",
          406: "#FDA403",
        },
        red: {
          401: "#F78154",
          402: "#E5C287",
        },
        orange: {
          401: "#E8751A",
        },
      },
      fontFamily: {
        // Custom font family
        sans: ["Noto Sans", "Roboto", "Helvetica", "Arial", "sans-serif"],
        serif: ["Noto Serif", "Georgia", "Cambria", "Times New Roman", "serif"],
        // Ensure you have Noto Sans and Noto Serif fonts available in your project
        hindi: ["Noto Sans", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
