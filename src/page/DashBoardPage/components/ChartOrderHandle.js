import React from 'react';
import PieChart, {
  Legend,
  Export,
  Series,
  Label,
  Font,
  Connector,
} from 'devextreme-react/pie-chart';
import {Paper} from "@material-ui/core";
import {useState, useEffect} from "react";
import orderApi from "../../../api/orderApi";

function ChartOrderHandle() {
  const [orderstatus, setOrderStatus] = useState([]);
  useEffect(() => {
    const fetchOrderStatus = async () => {
        try {
          const response = await orderApi.getOrderStatus();
          console.log(response);
          setOrderStatus(response);
        }catch (error) {
          console.log("Failed to fetch fabric type sell", error);
        }
    }
    fetchOrderStatus();
  }, []);
    return (
      <Paper>
      <PieChart id="pie"
        palette="Bright"
        dataSource={orderstatus}
        title="Tình trạng đơn đặt hàng"
      >
        <Legend
          orientation="horizontal"
          itemTextPosition="right"
          horizontalAlignment="center"
          verticalAlignment="bottom"
          columnCount={4} />
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
      </Paper>
    );
}

function customizeText(arg) {
  return `${arg.percentText}`;
}

export default ChartOrderHandle;
