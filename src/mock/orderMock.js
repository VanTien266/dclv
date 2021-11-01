import uuid from "uuid/v1";
import moment from "moment";
import { colors } from "@material-ui/core";

import mock from "utils/mock";
mock.onGet("/api/order/orderlist").reply(200, {
  order: [
    {
      id: uuid(),
      status: "pedding",
      note: "",
      orderTime: "",
      receiverName: "",
      receiverPhoneNum: "",
      address: "",
      deposit: "",
      clientId: "",
      bill: [
        {
          billId: uuid(),
          status: "",
          value: "",
          exportTime: "",
          shipperId: "",
          salesmanId: "",
        },
      ],
    },
  ],
});
