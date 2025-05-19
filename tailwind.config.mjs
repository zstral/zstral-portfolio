/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'light-bg': "url('/images/backgroundphotow.jpg')",
        'dark-bg': "url('/images/backgroundphotob.jpg')"
      }
    },
  },
  safelist: [
    "shadow-[5px_10px_10px_1px_rgb(25,25,25),-5px_-4px_15px_1px_rgb(60,60,60)]",
  ],
  darkMode: 'class',
  plugins: [],
};
