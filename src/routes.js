import React from "react";
import { Redirect } from "react-router";

import SignIn from "./screens/SignIn";
import DashBoard from "./screens/DashBoard/DashBoard";
const routes = [
  {
    path: "/",
    exact: true,
    component: SignIn,
  },
  {
    path: "/dashboard",
    exact: true,
    component: DashBoard,
  },
];

export default routes;
