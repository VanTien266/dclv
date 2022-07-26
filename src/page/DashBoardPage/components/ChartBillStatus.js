import React from "react";
import PieChart, {
  Legend,
  Export,
  Series,
  Label,
  Font,
  Connector,
} from "devextreme-react/pie-chart";
import { Paper } from "@material-ui/core";
import { useState, useEffect } from "react";
import billApi from "../../../api/billApi";

function ChartBillStatus() {
  const [billstatus, setBillStatus] = useState([]);
  useEffect(() => {
    const fetchBillStatus = async () => {
      try {
        const response = await billApi.getBillStatus();
        console.log(response);
        setBillStatus(response);
      } catch (error) {
        console.log("Failed to fetch bill status", error);
      }
    };
    fetchBillStatus();
  }, []);

  const customizePoint = (pointInfo) => {
    if (pointInfo.argument == "completed")
      return {
        color: "#4caf50",
      };
    else if (pointInfo.argument == "exported")
      return {
        color: "#f8ca00",
      };
    else if (pointInfo.argument == "shipping")
      return {
        color: "#2196f3",
      };
    else if (pointInfo.argument == "failed")
      return {
        color: "#f44336",
      };
  };
  return (
    <Paper style={{ padding: 5 }}>
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
        <Series argumentField="_id" valueField="lastStatusOrder">
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
    </Paper>
  );
}

function customizeText(arg) {
  return `${arg.percentText}`;
}

export default ChartBillStatus;
