module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "dark-500": "var(--dark-500)",
        "gray-500": "var(--gray-500)",
        "graygray-20": "var(--graygray-20)",
        "white-500": "var(--white-500)",
      },
      fontFamily: {
        "body-1-regular": "var(--body-1-regular-font-family)",
        "body-2-regular": "var(--body-2-regular-font-family)",
        "caption-regular": "var(--caption-regular-font-family)",
        "dattatreya-2-desktop-body-content-regular": "var(--dattatreya-2-desktop-body-content-regular-font-family)",
        "paragraph-2-regular": "var(--paragraph-2-regular-font-family)",
      },
      boxShadow: { "categogy-5": "var(--categogy-5)", "DS-2": "var(--DS-2)" },
      keyframes: {
        zoomRotate: {
          "0%": { transform: "perspective(1000px) rotateY(10deg) rotateX(5deg) scale(1)", easing: "ease-in-out" },
          "10%": { transform: "perspective(950px) rotateY(8.5deg) rotateX(4.5deg) scale(1.02)", easing: "ease-in-out" },
          "20%": { transform: "perspective(900px) rotateY(7deg) rotateX(4deg) scale(1.05)", easing: "ease-in-out" },
          "30%": { transform: "perspective(850px) rotateY(6deg) rotateX(3.8deg) scale(1.07)", easing: "ease-in-out" },
          "50%": { transform: "perspective(800px) rotateY(4deg) rotateX(3deg) scale(1.1)", easing: "ease-in-out" },
          "65%": { transform: "perspective(750px) rotateY(3deg) rotateX(2.5deg) scale(1.12)", easing: "ease-in-out" },
          "80%": { transform: "perspective(700px) rotateY(2deg) rotateX(2deg) scale(1.15)", easing: "ease-in-out" },
          "90%": { transform: "perspective(650px) rotateY(1deg) rotateX(1deg) scale(1.17)", easing: "ease-in-out" },
          "100%": { transform: "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1.2)", easing: "ease-in-out" },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0", letterSpacing: "0px" },
          "50%": { transform: "translateY(25px)", opacity: "0.5", letterSpacing: "2px" },
          "100%": { transform: "translateY(0)", opacity: "1", letterSpacing: "4px" },
        },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
      },
      animation: {
        zoomRotate: "zoomRotate 1s ease-in-out forwards",
        slideUp: "slideUp 1.2s ease-out forwards",
        fadeIn: "fadeIn 1.5s ease-in forwards",
      },
    },
  },
  plugins: [],
};
