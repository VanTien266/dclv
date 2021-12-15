
// import React, {useState, useEffect} from "react";
// import Paper from '@material-ui/core/Paper';
// import {
//   Chart,
//   BarSeries,
//   Title,
//   ArgumentAxis,
//   ValueAxis,
//   Tooltip,
// } from '@devexpress/dx-react-chart-material-ui';
// import { Animation } from '@devexpress/dx-react-chart';
// import { EventTracker } from '@devexpress/dx-react-chart';
// import productApi from "../../../api/productApi";

// const ChartFabricWarehouse = () => {
//   const [chartWarehouse, setChartWarehouse] = useState([]);
//   const [targetItem, settargetItem] = useState();
//   const changeTargetItem = () => {
//     settargetItem(targetItem);
//   }
//   useEffect(() => {
//     const fetChartWarehouse = async () => {
//       try {
//         const response = await productApi.getChartWarehouseTrue();
//         console.log(response);
//         setChartWarehouse(response);
//       }catch (error) {
//         console.log("Failed to fetch warehouse", error);
//       }
//     }
//   fetChartWarehouse();
//   },[]);
//   return (
//     <Paper>
//       <Chart
//         data={chartWarehouse}
//       >
//       <ArgumentAxis />
//       <ValueAxis />
//       <BarSeries
//         valueField="countFabric"
//         argumentField="_id"
//         />
//         <Title text="Tổng số cây vải có sẵn trong các kho" />
//         <Animation />
//         <EventTracker />
//         <Tooltip targetItem={targetItem} onTargetItemChange={changeTargetItem} />
//       </Chart>
//     </Paper>
//   );
// }
  
// export default ChartFabricWarehouse;


import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export,
} from 'devextreme-react/chart';
import productApi from "../../../api/productApi";

function ChartFabricWarehouse() {
  const [chartWarehouse, setChartWarehouse] = useState([]);
  const [targetItem, settargetItem] = useState();
  const changeTargetItem = () => {
    settargetItem(targetItem);
  }
  useEffect(() => {
    const fetChartWarehouse = async () => {
      try {
        const response = await productApi.getChartWarehouseTrue();
        console.log(response);
        setChartWarehouse(response);
      }catch (error) {
        console.log("Failed to fetch warehouse", error);
      }
    }
  fetChartWarehouse();
  },[]);
    return (
      <Paper>
      <Chart id="chart"
        title="Số lượng cây vải trong từng kho"
        dataSource={chartWarehouse}
        // onPointClick={this.onPointClick}
      >
        <CommonSeriesSettings
          argumentField="_id"
          type="bar"
          hoverMode="allArgumentPoints"
          selectionMode="allArgumentPoints"
        >
          <Label visible={true}>
            <Format type="fixedPoint" precision={0} />
          </Label>
        </CommonSeriesSettings>
        <Series
          valueField="countFabric"
          argumentField="_id"
          name="Kho"
          type="bar"
          color="#42A5F5" />
        {/* <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend> */}
        <Export enabled={true} />
      </Chart>
      </Paper>
    );
}

export default ChartFabricWarehouse;
