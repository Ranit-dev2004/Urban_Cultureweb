module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        keyframes: {
          fadeInSlideUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          rotateStar: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        },
        animation: {
          fadeInSlideUp: 'fadeInSlideUp 1s ease-out',
          rotateStar: 'rotateStar 6s linear infinite',
        },
      },
    },
    plugins: [],
  };
