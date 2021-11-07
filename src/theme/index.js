import { createTheme } from "@material-ui/core";
import typography from "./typography";
import palette from "./palette";

const theme = createTheme({
  typography,
  palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiInputLabel: {
      outlined: {
        transform: "translate(14px, 12.5px) scale(1)",
      },
    },
    MuiOutlinedInput: {
      root: {
        // "& $notchedOutline": {
        //   borderColor: "green"
        // },
        // "&:hover $notchedOutline": {
        //   borderColor: "red"
        // },
        // "&$focused $notchedOutline": {
        //   borderColor: "purple"
        // },
        "&&& $input": {
          padding: "8px",
        },
      },
    },
  },
});
export default theme;
