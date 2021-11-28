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

import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { year: '1950', population: 2.525 },
  { year: '1960', population: 3.018 },
  { year: '1970', population: 3.682 },
  { year: '1980', population: 4.440 },
  { year: '1990', population: 5.310 },
  { year: '2000', population: 6.127 },
  { year: '2010', population: 6.930 },
];

export default class RevenueChart1 extends React.PureComponent {
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
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="population"
            argumentField="year"
          />
          <Title text="Revenue Chart1" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
