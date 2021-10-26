import React from "react";
import { Redirect } from "react-router";

import SignIn from "./screens/SignIn";
import Dashboard from "./screens/Dashboard/Dashboard"

const routes = [
  {
    path: "/",
    exact: true,
    component: SignIn,
  },
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
  },
];

export default routes;
