
// import * as React from 'react';
// import {useState, useEffect} from "react";
// import Paper from '@material-ui/core/Paper';
// import {
//   Chart,
//   PieSeries,
//   Title,
// } from '@devexpress/dx-react-chart-material-ui';
// import { Animation } from '@devexpress/dx-react-chart';
// import productApi from "../../../api/productApi";

// export default function ChartFabricTypeSell () {
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
//       <Paper>
//         <Chart
//           data={fabrictypesell}
//         >
//           <PieSeries
//             valueField="countFabricType"
//             argumentField="_id"
//           />
//           <Title
//             text="Doanh thu theo nhóm sản phẩm"
//           />
//           <Animation />
//         </Chart>
//       </Paper>
//     );
// }


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
import productApi from "../../../api/productApi";

function ChartFabricTypeSell() {
  const [fabrictypesell, setFabricTypeSell] = useState([]);
  useEffect(() => {
    const fetchFabricTypeSell = async () => {
        try {
          const response = await productApi.getFabricTypeSell();
          console.log(response);
          setFabricTypeSell(response);
        }catch (error) {
          console.log("Failed to fetch fabric type sell", error);
        }
    }
    fetchFabricTypeSell();
  }, []);
    return (
      <Paper>
      <PieChart id="pie"
        palette="Bright"
        dataSource={fabrictypesell}
        title="Top 8 loại vải bán chạy (cây/%)"
      >
        <Legend
          orientation="horizontal"
          itemTextPosition="right"
          horizontalAlignment="center"
          verticalAlignment="bottom"
          columnCount={4} />
        <Export enabled={true} />
        <Series argumentField="_id" valueField="countFabrictype">
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
  return `${arg.valueText} (${arg.percentText})`;
}

export default ChartFabricTypeSell;
