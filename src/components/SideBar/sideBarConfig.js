import StoreIcon from "@mui/icons-material/Store";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonPinRoundedIcon from "@mui/icons-material/PersonPinRounded";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

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
