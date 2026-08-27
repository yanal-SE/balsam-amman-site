module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A9DF4',
        primaryDark: '#0B66A3',
        medicalGray: '#6B7280'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif']
      }
    }
  },
  plugins: []
}
