import { Redirect } from "react-router-dom";
import SignIn from "./screens/SignIn";
import DashBoardPage from "./page/DashBoardPage";
import OrderPage from "./page/OrderPage";
import DashBoard from "./screens/DashBoard/DashBoard";
const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard" />,
  },
  {
    route: "*",
    component: DashBoard,
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
