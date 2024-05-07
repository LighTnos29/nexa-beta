/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      primary: "#141414",
      secondary: "#1d1d1d",
      white: "#ffffff",
    },
  },
  plugins: [],
};
