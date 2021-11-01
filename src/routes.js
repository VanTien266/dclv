import { Redirect } from "react-router-dom";
import SignIn from "./screens/SignIn";
import DashBoard from "./page/DashBoard";
import Product from "./page/Product";
import Order from "./page/Order";
import Main from "./screens/Main/Main";
import ChangePassword from "./screens/ChangePassword/ChangePassword";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard" />,
  },
  {
    path: "/signin",
    exact: true,
    component: SignIn,
  },
  {
    path: "/resetpassword",
    exact: true,
    component: ChangePassword,
  },
  {
    route: "*",
    component: Main,
    routes: [
      {
        path: "/dashboard",
        exact: true,
        component: DashBoard,
      },
      {
        path: "/product",
        exact: true,
        component: Product,
      },
      {
        path: "/order",
        exact: true,
        component: Order,
      },
    ],
  },
];

export default routes;
