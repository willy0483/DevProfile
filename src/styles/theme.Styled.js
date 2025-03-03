export const theme = {
  color: {
    white: "#F5F5F5",
    black: "#0A0A0A",
    midnight: "#242424",
    accent: "#BB86FC",
    grey: "#181818",
    greytext: "#666",
  },
  borderRadius: "16px",
  padding: "1rem",
  fonts: ["Oswald", "Open Sans"],
  grid: {
    breakpoints: {
      xs: "320px",
      s: "570px",
      m: "768px",
      l: "992px",
      xl: "1200px",
    },
    mobile: {
      primary: {
        rows: "1fr 9fr 1fr",
        columns: "1fr",
        areas: `
                "header header"
                "main main"
                "footer footer"
            `,
      },
    },
    tablet: {
      primary: {
        rows: "1fr 1fr 10fr 1fr",
        columns: "repeat(6,1fr)",
        areas: `
                "header header header user user user"
                "navbar navbar navbar navbar navbar navbar"
                "main main main main main main"
                "footer footer footer footer footer footer"
            `,
      },
    },
    desktop: {
      primary: {
        rows: "1fr 10fr 1fr",
        columns: "repeat(6,1fr)",
        areas: `
                "header header navbar navbar navbar user"
                "main main main main main main"
                "footer footer footer footer footer footer"
            `,
      },
    },
  },
};
export default theme;
