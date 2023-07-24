/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#6d01b5",
      white: "#ffffff",
      purple: "#7e5bef",
      rose: "#ec05cc",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      iconBlue: "#4e018a",
      cardColor: "#3d3e42",
      lightblack:"#6C6C6F"
    },
    screens: {
      xs: "390px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
      7: "56px",
      8: "64px",
      9: "72px",
      10: "80px",
      "10vw": "10vw",
      "60vw":"60vw",
      "80vw":"80vw",
      "70vw":"70vw",
      "80vh":"80vh",
      "60vh": "60vh",
      "70vh": "70vh",
      "45vh": "45vh",
      "10px":"2px"
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "spin-slow": "spin 7s linear infinite",
        "advanced-pulse":
          "animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
