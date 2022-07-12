import React from 'react';
import PieChart, {
  Legend,
  Export,
  Series,
  Label,
  Font,
  Connector,
} from "devextreme-react/pie-chart";
import { Paper, Typography, Box } from "@material-ui/core";
import { useState, useEffect } from "react";
import billApi from "../../../api/billApi";

function ChartBillStatus(props) {
  const [billstatus, setBillStatus] = useState([]);
  useEffect(() => {
    const fetchBillStatus = async () => {
      try {
        const response = await billApi.getBillStatus(props.date.toISOString().slice(0, 10));
        // console.log(response);
        setBillStatus(response);
      } catch (error) {
        console.log("Failed to fetch bill status", error);
      }
    };
    fetchBillStatus();
  }, [props.date]);

  const customizePoint = (pointInfo) => {
    if (pointInfo.argument === "completed")
      return {
        color: "#4caf50",
      };
    else if (pointInfo.argument === "exported")
      return {
        color: "#f8ca00",
      };
    else if (pointInfo.argument === "shipping")
      return {
        color: "#F0622F",
      };
    else if (pointInfo.argument === "failed")
      return {
        color: "#FF0000",
      };
  };
  return (
    <Paper style={{ padding: 5 }}>
      {billstatus.length > 0 ?
        <PieChart
          id="pie"
          palette="Bright"
          dataSource={billstatus}
          title="Tình trạng hóa đơn"
          customizePoint={customizePoint}
        >
          <Legend
            orientation="horizontal"
            itemTextPosition="right"
            horizontalAlignment="center"
            verticalAlignment="bottom"
            columnCount={4}
          />
          <Export enabled={true} />
          <Series argumentField="_id" valueField="lastStatusBill">
            <Label
              visible={true}
              position="columns"
              customizeText={customizeText}
            >
              <Font size={16} />
              <Connector visible={true} width={0.5} />
            </Label>
          </Series>
        </PieChart>
        :
        <Box sx={{ justifyContent: 'center' }}>
          <Typography variant="h6">Tình trạng hóa đơn</Typography>
          <Typography variant="body1">Không có dữ liệu để hiển thị</Typography>
        </Box>}
    </Paper>
  );
}

function customizeText(arg) {
  return `${arg.percentText}`;
}

export default ChartBillStatus;