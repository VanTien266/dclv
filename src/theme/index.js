import { createTheme } from "@material-ui/core";
import typography from "./typography";
import palette from "./palette";
import overrides from "./overrides";

const theme = createTheme({
  typography,
  palette,
  overrides,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
export default theme;
