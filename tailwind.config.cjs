/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('./assets/images/shattered-island.gif')",
      },
      height: {
        128: "32rem",
        160: "40rem",
      },
      gridTemplateColumns: {
        profile: "15% 85%",
      },
      animation: {
        fade: "fade 1s ease-in-out 1",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
