import React from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { ThemeProvider } from "@material-ui/styles";

import routes from "./routes";
import "./mock";
import theme from "./theme";
const history = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>{renderRoutes(routes)}</Router>
    </ThemeProvider>
  );
}

export default App;
