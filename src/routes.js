import React from "react";
import { Redirect } from "react-router";

import SignIn from "./screens/SignIn";
const routes = [
  {
    path: "/",
    exact: true,
    component: SignIn,
  },
];

export default routes;
