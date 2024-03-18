module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#3D41D7",
          300: "#323484",
        },
        navText: "#D3D3FD",
        gray: {
          100: "#F6FAFF",
          200: "#B3B6DA",
          300: "#8F92A1",
        },
        orange: "#FF8831",
        cup: "#7CDDD9",
        green: "#00875A",
        cupBack: "#FFF4F2",
        lineBack: "#F6F8FF",
        twitter: "#299EE8",
        pinterest: {
          100: "#FF0000",
          200: "#D32F2F",
        },
        linkedIn: {
          100: "#6B46FF",
          200: "#1976D2",
        },
        gradOne: "#FA93D2",
        gradTwo: "#895FE0",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        small: "0.8rem",
      },
      boxShadow: {
        shade: " 0px 14px 34px rgba(34, 37, 169, 0.4)",
        progressShade: "0px 0px 44px rgba(34, 37, 169, 0.1)",
      },
    },
  },
  plugins: [],
};
