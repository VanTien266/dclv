
// import React from 'react';
// import PieChart, {
//   Legend,
//   Export,
//   Series,
//   Label,
//   Font,
//   Connector,
// } from 'devextreme-react/pie-chart';
// import {Paper} from "@material-ui/core";
// import {useState, useEffect} from "react";
// import productApi from "../../../api/productApi";

// function ChartFabricTypeSell() {
//   const [fabrictypesell, setFabricTypeSell] = useState([]);
//   useEffect(() => {
//     const fetchFabricTypeSell = async () => {
//         try {
//           const response = await productApi.getFabricTypeSell();
//           console.log(response);
//           setFabricTypeSell(response);
//         }catch (error) {
//           console.log("Failed to fetch fabric type sell", error);
//         }
//     }
//     fetchFabricTypeSell();
//   }, []);
//     return (
//       <Paper style={{padding: 5}}>
//       <PieChart id="pie"
//         palette="Bright"
//         dataSource={fabrictypesell}
//         title="Top 8 loại vải bán chạy (cây/%)"
//       >
//         <Legend
//           orientation="horizontal"
//           itemTextPosition="right"
//           horizontalAlignment="center"
//           verticalAlignment="bottom"
//           columnCount={4} />
//         <Export enabled={true} />
//         <Series argumentField="_id" valueField="countFabrictype">
//           <Label
//             visible={true}
//             position="columns"
//             customizeText={customizeText}>
//             <Font size={16} />
//             <Connector visible={true} width={0.5} />
//           </Label>
//         </Series>
//       </PieChart>
//       </Paper>
//     );
// }

// function customizeText(arg) {
//   return `${arg.valueText} (${arg.percentText})`;
// }

// export default ChartFabricTypeSell;

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
import billApi from "../../../api/billApi";

function ChartBillStatus() {
  const [billstatus, setBillStatus] = useState([]);
  useEffect(() => {
    const fetchBillStatus = async () => {
        try {
          const response = await billApi.getBillStatus();
          console.log(response);
          setBillStatus(response);
        }catch (error) {
          console.log("Failed to fetch fabric type sell", error);
        }
    }
    fetchBillStatus();
  }, []);
    return (
      <Paper style={{padding: 5}}>
      <PieChart id="pie"
        palette="Bright"
        dataSource={billstatus}
        title="Tình trạng hóa đơn"
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

export default ChartBillStatus;
