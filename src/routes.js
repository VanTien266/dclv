import { Redirect } from "react-router-dom";
import SignIn from "./screens/SignIn";
import DashBoardPage from "./page/DashBoard";
import OrderPage from "./page/Order";
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
        component: DashBoardPage,
      },
      {
        path: "/order",
        exact: true,
        component: OrderPage,
      },
    ],
  },
];

export default routes;
