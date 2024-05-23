/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        lora: "'DM Mono', monospace",
        spartan: "'League Spartan', sans-serif",
      },
      colors: {
        colors: {
          text: "#0c071d",
          background: "#f8f7fd",
          primary: "#4616e3",
          secondary: "#e1e486",
          accent: "#58da58",
        },

        primary: {
          indigo: "#6366F1",
          teal: "#E0F5F6",
          darkgreen: "#349097",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
