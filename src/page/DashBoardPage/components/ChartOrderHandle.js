import React from 'react';
import PieChart, {
  Legend,
  Export,
  Series,
  Label,
  Font,
  Connector,
} from "devextreme-react/pie-chart";
import { Paper, Box, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import orderApi from "../../../api/orderApi";

function ChartOrderHandle(props) {
  const [orderstatus, setOrderStatus] = useState([]);
  useEffect(() => {
    const fetchOrderStatus = async () => {
      try {
        const response = await orderApi.getOrderStatus(props.date.toISOString().slice(0, 10));
        console.log(response);
        setOrderStatus(response);
      } catch (error) {
        console.log("Failed to fetch order status", error);
      }
    }
    fetchOrderStatus();
  }, [props.date]);
  const customizePoint = (pointInfo) => {
    if (pointInfo.argument === "completed")
      return {
        color: "#4caf50"
      }
    else if (pointInfo.argument === "processing")
      return {
        color: "#f8ca00"
      }
    else if (pointInfo.argument === "cancel")
      return {
        color: "#FF0000"
      }
    else if (pointInfo.argument === "pending")
      return {
        color: "#F0622F"
      }
  };
  // const customizeLegendText = (legendInfo) => {
  //   if(legendInfo.argumentText == "completed")
  //     return {
  //       argumentText:"Hoàn tất"
  //     }
  //   else if(legendInfo.argumentText == "process")
  //     return {
  //       text: "Đang xử lý"
  //     }
  //   else if(legendInfo.argumentText == "cancel")
  //     return {
  //       text: "Hủy"
  //     }
  // };
  return (
    <Paper style={{ padding: 5 }}>
      {orderstatus.length > 0 ?
        <PieChart id="pie"
          palette="Bright"
          dataSource={orderstatus}
          title="Tình trạng đơn đặt hàng"
          customizePoint={customizePoint}
        >
          <Legend
            orientation="horizontal"
            itemTextPosition="right"
            horizontalAlignment="center"
            verticalAlignment="bottom"
            columnCount={4}
          // customizeText={customizeLegendText}
          />
          <Export enabled={true} />
          <Series argumentField="_id" valueField="lastStatusOrder">
            <Label
              visible={true}
              position="columns"
              customizeText={customizeText}>
              <Font size={16} />
              <Connector visible={true} width={0.5} />
            </Label>
          </Series>
        </PieChart>
        :
        <Box sx={{ justifyContent: 'center' }}>
          <Typography variant="h6">Tình trạng đơn đặt hàng</Typography>
          <Typography variant="body1">Không có dữ liệu để hiển thị</Typography>
        </Box>
      }
    </Paper>
  );
}

function customizeText(arg) {
  return `${arg.percentText}`;
}

export default ChartOrderHandle;
