import uuid from "uuid/v1";

import mock from "../utils/mock";
mock.onGet("/api/order/orderlist").reply(200, {
  order: [
    {
      id: uuidv4(),
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
          billId: uuidv4(),
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
