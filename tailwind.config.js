/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quattrocento: ["var(--font-quattrocento)"],
        newserif: ["var(--font-new-icon-serif)"],
        newscript: ["var(--font-new-icon-script)"],
      },
    },
  },
  plugins: [],
}