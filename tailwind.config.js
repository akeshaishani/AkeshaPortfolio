/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainblue: "#000528",
        blue: "#12123E",
        mainyellow: "#FFB05D",
        contactblue: "#5E5E88",
        cardblue: "#151E49",
        footerblue: "#000318",
        sliderbule:'#00031C',
      },

      borderWidth: {
        3: "3px",
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        14: "repeat(14, minmax(0, 1fr))",
      },
      backgroundImage: {
        "background-abs": "url('/src/assets/abs.png')",
        "background-blend": "url('/src/assets/blend.png')",
        "button-gradient":
          "linear-gradient(135deg, #E7698A, #B100C4, #1B0077 100%)",
        "background-hero": "url('/src/assets/bg balls.png')",
        "testi-rec": "url('/src/assets/Testi-Rec.png')",
      },

      backgroundSize: {
        '50%': '80%',
        '16': '4rem',
      },

      fontFamily: {
        "custom-alata": ["Alata"],
        "custom-inter": ["Inter"],
      },
      lineHeight: {
        "more-loose": "2.5rem",
        "extra-loose": "4rem",
      },
      screens: {
        sm: "320px",

        md: "600px",

        lg: "1024px",

        xl: "1300px",

        xxl: "1700px",

        xxxl: "1800px",
      },
    },
  },
  plugins: [],
};
