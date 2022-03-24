module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        productHight:'508px',
      },
      gridTemplateColumns:{
        shop_col: '4fr 1fr',
      }
    },
  },
  plugins: [],
}
