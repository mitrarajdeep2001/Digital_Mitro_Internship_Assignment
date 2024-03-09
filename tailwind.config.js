/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-img": "url('./assets/header.png')",
        "service-img": "url('./assets/services.png')",
        "set-us-apart-img": "url('./assets/set-us-apart.png')",
        "sub-footer-img": "url('./assets/sub-footer.png')",
      },
    },
  },
  plugins: [],
};
