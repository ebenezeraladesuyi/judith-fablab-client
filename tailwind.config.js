/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["poppins", "san-serif"],
      },
      backgroundImage: {
        'auth-bg' : "url(/src/assets/images/authImages/auth-img.png)"
      }
    },
  },
  plugins: [],
};
