module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    container: {
      center: true,
      padding: "1em",
    },
    extend: {
      colors: {
        primary: "#0F4A7B",
        secondary: "#F9FBFD",
        accent: "#F57D7D",
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
}
