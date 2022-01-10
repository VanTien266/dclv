import mock from "../utils/mock";
import { v4 as uuidv4 } from "uuid";

mock.onPost("/user").reply(200, {
  users: [
    {
      id: uuidv4(),
      email: "admin@gmail.com",
      password: "admin",
      name: "",
      address: "",
      phone: "",
      role: "admin",
    },
    {
      id: uuidv4(),
      email: "salesman@gmail.com",
      password: "salesman",
      name: "",
      address: "",
      phone: "",
      role: "salesman",
    },
    {
      id: uuidv4(),
      email: "customer@gmail.com",
      password: "customer",
      name: "",
      address: "",
      phone: "",
      role: "customer",
    },
    {
      id: uuidv4(),
      email: "shipper@gmail.com",
      password: "shipper",
      name: "",
      address: "",
      phone: "",
      role: "shipper",
    },
  ],
});
