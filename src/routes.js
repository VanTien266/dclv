import React from "react";
import { Redirect } from "react-router";

import SignIn from "./screens/SignIn/SignIn";
import Dashboard from "./screens/Dashboard/Dashboard"
import ChangePassword from "./screens/ChangePassword/ChangePassword"

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
  {
    path: "/resetpassword",
    exact: true,
    component: ChangePassword,
  },
];

export default routes;
