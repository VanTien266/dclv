import { Redirect } from "react-router-dom";
import SignIn from "./screens/SignIn";
import DashBoardPage from "./page/DashBoardPage";
import OrderListPage from "./page/OrderListPage";
import OrderDetail from "./page/OrderDetail";
import OrderEdit from "./page/OrderEdit";
import DashBoard from "./screens/DashBoard/Dashboard";
import ChangePassword from "./screens/ChangePassword/ChangePassword";

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
        component: OrderListPage,
      },
      {
        path: "/orderdetail",
        exact: true,
        component: OrderDetail,
      },
      {
        path: "/orderedit",
        exact: true,
        component: OrderEdit,
      }
    ],
  },
  {
    path: "/resetpassword",
    exact: true,
    component: ChangePassword,
  },
];

export default routes;
