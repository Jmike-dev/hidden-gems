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
        primary: {
          indigo: "#6366F1",
          teal: "#E0F5F6",
          darkgreen: "#349097",
        },
      },
    },
  },
  plugins: [],
};
