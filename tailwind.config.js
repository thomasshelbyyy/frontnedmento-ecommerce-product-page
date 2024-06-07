/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-orange": "hsl(26, 100%, 55%)",
        "custom-pale-orange": "hsl(25, 100%, 94%)",
        "custom-very-dark-blue": "hsl(220, 13%, 13%)",
        "custom-dark-grayish-blue": "hsl(219, 9%, 45%)",
        "custom-grayish-blue": "hsl(220, 14%, 75%)",
        "custom-light-grayish-blue": "hsl(223, 64%, 98%)",
        "custom-lightbox-black": "hsl(0, 0%, 0%)"
      }
    },
  },
  plugins: [],
}

