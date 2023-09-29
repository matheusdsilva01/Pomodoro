/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        ping: {
          "0%": {
            transform: "scale(1.5)",
            opacity: 0,
            visibility: "visible"
          },
          "75%, 100%": {
            transform: "scale(1)",
            opacity: 1,
            visibility: "visible"
          }
        }
      },
      animation: {
        ping: "ping 0.5s cubic-bezier(0, 0, 0.2, 1) forwards"
      }
    },
    fontFamily: {
      default: "Inter",
      alt: "'Rajdhani', sans-serif"
    }
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
  darkMode: "class"
};
