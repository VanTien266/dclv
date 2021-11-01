import StoreIcon from "@material-ui/icons/Store";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import LocalPostOfficeIcon from "@material-ui/icons/LocalPostOffice";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";

const sideBarConfig = [
  {
    tag: "dashboard",
    path: "/dashboard",
    name: "Trang Chủ",
    href: "",
    icon: StoreIcon,
  },
  {
    tag: "product",
    path: "/product",
    name: "Sản phẩm",
    href: "",
    icon: LocalParkingIcon,
  },
  {
    tag: "order",
    path: "/order",
    name: "Đơn hàng",
    href: "",
    icon: LocalMallIcon,
  },

  {
    tag: "notification",
    path: "/notification",
    name: "Thông báo",
    href: "",
    icon: LocalPostOfficeIcon,
  },
  {
    tag: "help",
    path: "/help",
    name: "Hỗ trợ",
    href: "",
    icon: AddIcCallIcon,
  },
];
export default sideBarConfig;
