/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        movies: 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    }
  },
  plugins: []
}
