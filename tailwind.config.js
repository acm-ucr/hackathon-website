/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "1/10": "10%",
      },
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
          placeholder: "#9ea4af",
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
            "purple-bg": "#E6DFF6",
            "purple-text": "#825ED0",
          },
          judge: {
            "professor-bg": "#D3DDE4",
            "professor-text": "#22577A",
            "student-bg": "#D7EDED",
            "student-text": "#38A3A5",
            "industry-bg": "#DDF5EB",
            "industry-text": "#57CC99",
          },
        },
      },
    },
  },
  plugins: [],
};
