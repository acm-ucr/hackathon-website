/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
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
          "green-400": "#3CB97A",
          "yellow-100": "#FFCF55",
          "gray-100": "#E7E7E7",
          "gray-200": "#9ea4af",
          "gray-300": "#525252",
          page: "#F5F5F5",
          tags: {
            "red-bg": "#FFE9E2",
            "red-text": "#F07167",
            "yellow-bg": "#FFF0BC",
            "yellow-text": "#FFB81C",
            "green-bg": "#CFEDEA",
            "green-text": "#00AFB9",
            "gray-bg": "#E9E9E9",
            "gray-text": "#969696",
            "purple-bg": "#E6DFF6",
            "purple-text": "#825ED0",
            "grayblue-bg": "#D3DDE4",
            "grayblue-text": "#22577A",
            "teal-bg": "#D7EDED",
            "teal-text": "#38A3A5",
            "lightgreen-bg": "#DDF5EB",
            "lightgreen-text": "#57CC99",
            "pink-bg": "#FFE3FB",
            "pink-text": "#F583F1",
            white: "#fff",
          },
        },
      },
    },
  },
  plugins: [],
};
