/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-img": "url('./assets/header.png')",
        "service-img": "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
