import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
export const theme = createMuiTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h2: {
      fontFamily: "'Bebas Neue', cursive",
    },
    h3: {
      fontFamily: "'Bebas Neue', cursive",
    },
  },
  palette: {
    primary: {
      main: "#F9A51A",
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        "&:hover": {
          color: "#fff",
          backgroundColor: "#cf8306",
        },
      },
      root: {
        textTransform: "capitalize",
        fontWeight: "bold",
      },
    },
  },
});
