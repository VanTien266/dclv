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
import SupportPage from "./page/SupportPage/SupportPage";
import InfoPage from "./page/InfoPage/InfoPage";

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
  { path: "/signup", exact: true, component: SignUp },
  {
    path: "*",
    component: Main,
    routes: [
      // for salesman
      {
        path: "/salesman/dashboard",
        exact: true,
        component: DashBoard,
      },
      {
        path: "/salesman/product",
        exact: true,
        component: Product,
      },
      {
        path: "/salesman/order",
        exact: true,
        component: OrderListPage,
      },
      {
        path: "/salesman/order/orderDetail",
        exact: true,
        component: OrderDetail,
      },
      {
        path: "/salesman/order/orderEdit",
        exact: true,
        component: OrderEdit,
      },
      {
        path: "/salesman/order/billDetail",
        exact: true,
        component: lazy(() => import("./page/BillDetail")),
      },
      {
        path: "/salesman/order/billExport",
        exact: true,
        component: lazy(() => import("./page/BillExport")),
      },
      {
        path: "/salesman/notification",
        exact: true,
        component: NotificationPage,
      },
      // for admin
      {
        path: "/admin/dashboard",
        exact: true,
        component: DashBoard,
      },
      {
        path: "/admin/product",
        exact: true,
        component: Product,
      },
      {
        path: "/admin/order",
        exact: true,
        component: OrderListPage,
      },
      {
        path: "/admin/order/orderDetail",
        exact: true,
        component: OrderDetail,
      },
      {
        path: "/admin/order/orderEdit",
        exact: true,
        component: OrderEdit,
      },
      {
        path: "/admin/order/billDetail",
        exact: true,
        component: lazy(() => import("./page/BillDetail")),
      },
      {
        path: "/admin/order/billExport",
        exact: true,
        component: lazy(() => import("./page/BillExport")),
      },
      {
        path: "/admin/notification",
        exact: true,
        component: NotificationPage,
      },
      {
        path: "/admin/info",
        exact: true,
        component: InfoPage,
      },
      // for customer
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
      },
    ],
  },
  
];

export default routes;
