import { lazy } from "react";
import { Redirect } from "react-router-dom";
import SignIn from "./screens/SignIn";
import DashBoard from "./page/DashBoard";
import Product from "./page/ProductPage/ProductPage";
import Main from "./screens/Main/Main";
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
        path: "/orderdetail",
        exact: true,
        component: OrderDetail,
      },
      {
        path: "/orderedit",
        exact: true,
        component: OrderEdit,
      },
      {
        path: "/order/bill-detail",
        exact: true,
        component: lazy(() => import("./page/BillDetail")),
      },
      {
        path: "/order/bill-export",
        exact: true,
        component: lazy(() => import("./page/BillExport")),
      },
    ],
  },
];

export default routes;
