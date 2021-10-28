import StoreIcon from "@material-ui/icons/Store";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import PersonPinRoundedIcon from "@material-ui/icons/PersonPinRounded";
import LocalPostOfficeIcon from "@material-ui/icons/LocalPostOffice";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";

const sideBarConfig = [
  {
    tag: "dashboard",
    name: "Trang Chủ",
    href: "",
    icon: StoreIcon,
  },
  {
    tag: "order",
    name: "Đơn hàng",
    href: "",
    icon: LocalMallIcon,
  },
  {
    tag: "staff",
    name: "Nhân viên",
    href: "",
    icon: PersonPinRoundedIcon,
  },
  {
    tag: "notification",
    name: "Thông báo",
    href: "",
    icon: LocalPostOfficeIcon,
  },
  {
    tag: "help",
    name: "Hỗ trợ",
    href: "",
    icon: AddIcCallIcon,
  },
];
export default sideBarConfig;
