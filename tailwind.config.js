/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        hackathon: {
          "blue-100": "#38A3A5",
          "blue-200": "#22577A",
          "green-100": "#E7F7E9",
          "green-200": "#80ED99",
          "green-300": "#57CC99",
          yellow: "#FFCF55",
          gray: "#E7E7E7",
          darkgray: "#525252",
          page: "#F5F5F5",
          tags: {
            "red-bg": "#FFE9E2",
            "red-text": "#F07167",
            "yellow-bg": "#FFF0BC",
            "yellow-text": "#FFB81C",
            "green-bg": "#CFEDEA",
            "green-text": "#00AFB9",
            "gray-bg": "#F5F5F5",
            "gray-text": "#969696",
          },
          judge: {
            "professor-bg": "#22577A",
            "professor-text": "#22577A",
            "student-bg": "#38A3A5",
            "student-text": "#38A3A5",
            "industry-bg": "#57CC99",
            "industry-text": "#57CC99",
          },
        },
      },
    },
  },
  plugins: [],
};
