import React from "react";
import moment from "moment";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import StatusItem from "./components/StatusItem";
import { Timeline } from "@material-ui/lab";

function Status() {
  const statusList = [
    { tag: "exported", title: "Đã xử lí xong" },
    { tag: "delivery", title: "Đang vận chuyển" },
    { tag: "success", title: "Giao hàng thành công" },
    { tag: "fail", title: "Giao hàng thất bại" },
  ];
  const orderStaus = [
    {
      name: statusList[0],
      content: "Hóa đơn xuất thành công",
      time: moment()
        .subtract(10, "days")
        .subtract(0, "months")
        .subtract(0, "years"),
      reason: "",
    },
    {
      name: statusList[1],
      content: "Đơn hàng đang được vận chuyển",
      time: moment()
        .subtract(8, "days")
        .subtract(0, "months")
        .subtract(0, "years"),
      reason: "",
    },
    {
      name: statusList[2],
      content: "Đơn hàng đã được vận chuyển thành công",
      time: moment()
        .subtract(4, "days")
        .subtract(0, "months")
        .subtract(0, "years"),
      reason: "",
    },
    {
      name: statusList[3],
      content: "Vận chuyển đơn hàng thất bại",
      time: moment()
        .subtract(1, "days")
        .subtract(0, "months")
        .subtract(0, "years"),
      reason: "Khách boom hàng",
    },
  ];

  return (
    <Card>
      <CardHeader title="Trạng thái" />
      <CardContent>
        <Timeline>
          {orderStaus.map((item, index) => (
            <StatusItem
              key={index}
              item={item}
              isLast={index === orderStaus.length - 1}
            />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}

export default Status;
