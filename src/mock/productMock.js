import uuid from "uuid/v1";
import moment from "moment";

import mock from "utils/mock";
mock.onGet("/api/product/fabricRoll").reply(200, {
  fabricRoll: [
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
