// // import { merge } from 'lodash';
// // import ReactApexChart from 'react-apexcharts';
// // // material
// // import { useTheme, styled } from '@mui/material/styles';
// import { Card, CardHeader } from '@material-ui/core';
// // // utils
// // import { fNumber } from '../../../utils/formatNumber';
// // //
// // import { BaseOptionChart } from '../../charts';

// // ----------------------------------------------------------------------

// // const CHART_HEIGHT = 372;
// // const LEGEND_HEIGHT = 72;

// // const ChartWrapperStyle = styled('div')(({ theme }) => ({
// //   height: CHART_HEIGHT,
// //   marginTop: theme.spacing(5),
// //   '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
// //   '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
// //     overflow: 'visible'
// //   },
// //   '& .apexcharts-legend': {
// //     height: LEGEND_HEIGHT,
// //     alignContent: 'center',
// //     position: 'relative !important',
// //     borderTop: `solid 1px ${theme.palette.divider}`,
// //     top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`
// //   }
// // }));

// // ----------------------------------------------------------------------

// // const CHART_DATA = [4344, 5435, 1443, 4443];

// export default function RevenueChart1() {
// //   const theme = useTheme();

// //   const chartOptions = merge(BaseOptionChart(), {
// //     colors: [
// //       theme.palette.primary.main,
// //       theme.palette.info.main,
// //       theme.palette.warning.main,
// //       theme.palette.error.main
// //     ],
// //     labels: ['America', 'Asia', 'Europe', 'Africa'],
// //     stroke: { colors: [theme.palette.background.paper] },
// //     legend: { floating: true, horizontalAlign: 'center' },
// //     dataLabels: { enabled: true, dropShadow: { enabled: false } },
// //     tooltip: {
// //       fillSeriesColor: false,
// //       y: {
// //         formatter: (seriesName) => fNumber(seriesName),
// //         title: {
// //           formatter: (seriesName) => `#${seriesName}`
// //         }
// //       }
// //     },
// //     plotOptions: {
// //       pie: { donut: { labels: { show: false } } }
// //     }
// //   });

//   return (
//     <Card>
//       <CardHeader title="Revenue Chart1" />
//       {/* <ChartWrapperStyle dir="ltr">
//         <ReactApexChart type="pie" series={CHART_DATA} options={chartOptions} height={280} />
//       </ChartWrapperStyle> */}
//     </Card>
//   );
// }

import React, {useState, useEffect} from "react";
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { EventTracker } from '@devexpress/dx-react-chart';
import productApi from "../../../api/productApi";

const ChartFabricWarehouse = () => {
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
      <Chart
        data={chartWarehouse}
      >
      <ArgumentAxis />
      <ValueAxis />
      <BarSeries
        valueField="countFabric"
        argumentField="_id"
        />
        <Title text="Tổng số cây vải có sẵn trong các kho" />
        <Animation />
        <EventTracker />
        <Tooltip targetItem={targetItem} onTargetItemChange={changeTargetItem} />
      </Chart>
    </Paper>
  );
}
  
export default ChartFabricWarehouse;

// import React, {useState, useEffect} from 'react';
// import {Paper} from '@material-ui/core';
// import {
//   Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export,
// } from 'devextreme-react/chart';
// import productApi from "../../../api/productApi";

// function RevenueChart1 () {
//   const [chartWarehouse, setChartWarehouse] = useState([]);
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
  
//     return (
//       <Paper>
//       <Chart id="chart"
//         title="Tổng số cây vải có sẵn trong kho hàng"
//         dataSource={chartWarehouse}
//       >
//         <CommonSeriesSettings
//           argumentField="_id"
//           type="bar"
//           hoverMode="allArgumentPoints"
//           selectionMode="allArgumentPoints"
//         >
//           <Label visible={true}>
//             <Format type="fixedPoint" precision={0} />
//           </Label>
//         </CommonSeriesSettings>
//         <Series
//           argumentField="_id"
//           valueField="countFabric"
//         />
//         <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend>
//         <Export enabled={true} />
//       </Chart>
//       </Paper>
//     );
// }

// export default RevenueChart1;
