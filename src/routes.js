import { lazy } from "react";
import { Redirect } from "react-router-dom";
import SignIn from "./screens/Auth/SignIn";
import SignUp from "./screens/Auth/SignUp";
import DashBoard from "./page/DashBoardPage/DashBoard";
import Product from "./page/ProductPage/ProductPage";
import Main from "./screens/Main/Main";
import OrderListPage from "./page/OrderListPage";
import OrderDetail from "./page/OrderDetail";
import OrderEdit from "./page/OrderEdit";
import NotificationPage from "./page/NotificationPage/NotificationPage";
import StaffPage from "./page/StaffPage/StaffPage";
import StaffDetail from "./page/StaffPage/components/StaffDetail";

import SupportPage from "./page/SupportPage/SupportPage";
import InfoPage from "./page/InfoPage/InfoPage";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/signin" />,
  },

  {
    path: "/signin",
    exact: true,
    component: SignIn,
  },
  { path: "/signup", exact: true, component: SignUp },
  {
    path: "*",
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
        path: "/staff",
        exact: true,
        component: StaffPage,
      },
      {
        path: "/staff/:id",
        exact: true,
        component: StaffDetail,
      },
      {
        path: "/order/orderDetail/:id",
        exact: true,
        component: OrderDetail,
      },
      {
        path: "/order/orderEdit",
        exact: true,
        component: OrderEdit,
      },
      {
        path: "/order/billDetail/:id",
        exact: true,
        component: lazy(() => import("./page/BillDetail")),
      },
      {
        path: "/notification",
        exact: true,
        component: NotificationPage,
      },
      {
        path: "/help",
        exact: true,
        component: SupportPage,
      },
      {
        path: "/info",
        exact: true,
        component: InfoPage,
      },
    ],
  },
];

export default routes;
