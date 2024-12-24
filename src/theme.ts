import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-quicksand)",
    h1: {
      fontSize: "96px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "64px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "40px",
      fontWeight: 500,
    },
    body1: {
      fontSize: "32px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "16px",
      fontWeight: 300,
    },
  },
});

export default theme;
