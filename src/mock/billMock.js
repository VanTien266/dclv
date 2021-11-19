import { v4 as uuidv4 } from "uuid";
import moment from "moment";

import mock from "../utils/mock";

mock.onGet("product/fabric-roll").reply(200, {
  bills: [
    {
      id: uuidv4(),
      billStatus: "complete",
      valueBill: 1500000,
      exportBillTime: moment()
        .subtract(1, "days")
        .subtract(1, "months")
        .subtract(1, "years"),
      orderId: "MHD1234",
      shipperId: "S1234",
      clientId: "C1234",
      salesmanId: "SM1234",
      fabricRollId: ["SP1111", "SP1112"],
    },
  ],
});
