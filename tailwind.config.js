export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d8ecff",
          200: "#b6dbff",
          300: "#84c4ff",
          400: "#4ca5ff",
          500: "#1c7dff",
          600: "#155fd1",
          700: "#144fb0",
          800: "#143f8a",
          900: "#102f69"
        }
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
}
