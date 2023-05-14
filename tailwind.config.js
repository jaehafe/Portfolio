/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6747EB",
        secondary: "#FF9C45",
        "dark-blue": "#2C2F5A",
        "dark-blue-2": "#696C9A",
        "light-blue": "#F1F5FF",
        "light-blue-2": "#E7EDFB",
        twitter: "#00acee",
        info: "#2F80ED",
        success: "#27AE60",
        warning: "#E2B93B",
        error: "#EB5757",
      },
      boxShadow: {
        button: "0 4px 15px rgba(0, 0, 0, .25)",
        container: "0 10px 65px rgba(0, 0, 0, .09)",
        success: "0 10px 65px",
        warning: "0 10px 65px",
      },
      backgroundImage: {
        pattern: `linear-gradient(#E7EDFB 2px, transparent 2px), linear-gradient(90deg, #E7EDFB 1px, transparent 1px);`,
        gradient: "url('../assets/Gradient.png')",
      },
      backgroundSize: {
        pattern: "40px 40px, 40px 40px, 20px 20px, 20px 20px",
      },
      backgroundPosition: {
        pattern: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
      },
      animation: {
        hoverMe: "hover-me 2s infinite",
        spin: "spin 20s linear infinite;",
        "skeleton-effect": "skeleton-effect 5s infinite linear",
      },
      keyframes: {
        "hover-me": {
          "0%": {
            scale: "0",
            opacity: "1",
          },
          "50%, 100%": {
            scale: "3",
            opacity: "0",
          },
        },
        "skeleton-effect": {
          "0% ": {
            transform: "translateY(-100%) skewY(-5deg)",
          },
          "20%, 100%": {
            transform: "translateY(900%) skewY(-5deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
