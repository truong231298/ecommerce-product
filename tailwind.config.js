/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // button and hover navbar
        'Orange': 'hsl(26, 100%, 55%)',
        // hover button
        'Paleorange': 'hsl(25, 100%, 94%)',
        // h1
        'Verydarkblue': 'hsl(220, 13%, 13%)',
        // p
        'Darkgrayishblue': 'hsl(219, 9%, 45%)',
        'Grayishblue': 'hsl(220, 14%, 75%)',
        'Lightgrayishblue': 'hsl(223, 64%, 98%)',
        'White': 'hsl(0, 0%, 100%)',
        //  (with 75% opacity for lightbox background)
        'Black': 'hsl(0, 0%, 0%)'
      }
    },
  },
  plugins: [],
}