import { lazy } from "react";
import { Redirect } from "react-router-dom";
import SignIn from "./screens/SignIn";
import DashBoard from "./page/DashBoardPage/DashBoard";
import Product from "./page/ProductPage/ProductPage";
import Main from "./screens/Main/Main";
import OrderListPage from "./page/OrderListPage";
import OrderDetail from "./page/OrderDetail";
import OrderEdit from "./page/OrderEdit";
import NotificationPage from "./page/NotificationPage/NotificationPage";
import ChangePassword from "./screens/ChangePassword/ChangePassword";
import SupportPage from "./page/SupportPage/SupportPage";

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
        component: OrderListPage,
      },
      {
        path: "/order/orderDetail",
        exact: true,
        component: OrderDetail,
      },
      {
        path: "/order/orderEdit",
        exact: true,
        component: OrderEdit,
      },
      {
        path: "/order/billDetail",
        exact: true,
        component: lazy(() => import("./page/BillDetail")),
      },
      {
        path: "/order/billExport",
        exact: true,
        component: lazy(() => import("./page/BillExport")),
      },
      {
        path: "/notification",
        exact: true,
        component: NotificationPage,
      },
      {
        path: "/support",
        exact: true,
        component: SupportPage,
      }
    ],
  },
];

export default routes;
