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

// export default function ProductsChart() {
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
//       <CardHeader title="Products Chart" />
//       {/* <ChartWrapperStyle dir="ltr">
//         <ReactApexChart type="pie" series={CHART_DATA} options={chartOptions} height={280} />
//       </ChartWrapperStyle> */}
//     </Card>
//   );
// }


import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { item: 'Vai thun', percent: 20 },
  { item: 'Vai Jean', percent: 30 },
  { item: 'Vai KT', percent: 50 },
];
export default class ProductsChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <PieSeries
            name="Vai thun"
            valueField="percent"
            argumentField="item"
          />
          <PieSeries
            valueField="percent"
            argumentField="item"
          />
          <PieSeries
            valueField="percent"
            argumentField="item"
          />
          <Title
            text="Doanh thu theo nhóm sản phẩm"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
