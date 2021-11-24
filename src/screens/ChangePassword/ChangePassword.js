import React from "react";
import Typography from "@material-ui/core/Typography";
//import { ThemeProvider } from '@mui/material/styles';
import FormPasswordReset from "./Components/FormPasswordReset";
import "./ChangPasswordstyles.css";

function ChangePassword() {
  return (
    <div className="App">
      <Typography variant="title" style={{ margin: "16px 0" }}>
        React Password Reset
      </Typography>
      <FormPasswordReset />
    </div>
  );
}

export default ChangePassword;

// const rootElement = document.getElementById('root')
// ReactDOM.render(
//   <ThemeProvider theme={theme}>
//     <CssBaseline>
//       <App />
//     </CssBaseline>
//   </ThemeProvider>,
//   rootElement
// )
