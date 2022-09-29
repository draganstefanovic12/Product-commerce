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
      },
      gridTemplateColumns: {
        profile: "15% 85%",
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
