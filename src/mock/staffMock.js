import mock from "../utils/mock";
// import { v4 as uuidv4 } from "uuid";

mock.onGet("stafflist").reply(200, {
    staffList: [
    {
      id: "ID1234",
      namestaff:"Nguyễn Văn Tĩnh",
      role:"Nhân viên bán hàng",
      age:"21",
      phone:"0387949125",
      email: "nguyenvantinh06@gmail.com",
      gender:"Nam",
    },
    {
        id: "ID1234",
        namestaff:"Nguyễn Văn Tĩnh",
        role:"Nhân viên giao hàng",
        age:"21",
        phone:"0387949125",
        email: "nguyenvantinh06@gmail.com",
        gender:"Nam",
    },
    {
        id: "ID1234",
        namestaff:"Nguyễn Văn Tĩnh",
        role:"Nhân viên giao hàng",
        age:"21",
        phone:"0387949125",
        email: "nguyenvantinh06@gmail.com",
        gender:"Nam",
    },
    {
        id: "ID1234",
        namestaff:"Nguyễn Văn Tĩnh",
        role:"Nhân viên bán hàng",
        age:"21",
        phone:"0387949125",
        email: "nguyenvantinh06@gmail.com",
        gender:"Nam",
    },
    {
        id: "ID1234",
        namestaff:"Nguyễn Văn Tĩnh",
        role:"Nhân viên bán hàng",
        age:"21",
        phone:"0387949125",
        email: "nguyenvantinh06@gmail.com",
        gender:"Nam",
    },
    {
        id: "IDBH0001",
        namestaff:"Nguyễn Văn Tĩnh",
        role:"Nhân viên giao hàng",
        age:"21",
        phone:"0387949125",
        email: "nguyenvantinh06@gmail.com",
        gender:"Nam",
        address:"Khu phố Phú Thứ, Thị trấn Phú Thứ, Tây Hòa, Phú Yên",
        birthday:"23/03/2000"
      },
  ],
});
