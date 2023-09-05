/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        lora: "'DM Mono', monospace",
        spartan: "'League Spartan', sans-serif",
      },
    },
  },
  plugins: [],
};
