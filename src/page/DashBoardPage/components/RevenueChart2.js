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

// export default function RevenueChart2() {
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
//       <CardHeader title="Revenue Chart2" />
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
  ArgumentAxis,
  ValueAxis,
  AreaSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { withStyles } from '@material-ui/core/styles';
import { scalePoint } from 'd3-scale';

const data = [
  { year: '2018', warehouse1: 67225, warehouse2: 46598 },
  { year: '2019', warehouse1: 179873, warehouse2: 90560 },
  { year: '2020', warehouse1: 310088, warehouse2: 118848 },
  { year: '2021', warehouse1: 539318, warehouse2: 189924 },
];

const chartRootStyles = {
  chart: {
    paddingRight: '20px',
  },
};
const legendStyles = {
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
};
const legendLabelStyles = theme => ({
  label: {
    paddingTop: theme.spacing(1),
  },
});
const legendItemStyles = {
  item: {
    flexDirection: 'column',
  },
};

const ChartRootBase = ({ classes, ...restProps }) => (
  <Chart.Root {...restProps} className={classes.chart} />
);
const LegendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const LegendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label {...restProps} className={classes.label} />
);
const LegendItemBase = ({ classes, ...restProps }) => (
  <Legend.Item {...restProps} className={classes.item} />
);
const ChartRoot = withStyles(chartRootStyles, { name: 'ChartRoot' })(ChartRootBase);
const LegendRoot = withStyles(legendStyles, { name: 'LegendRoot' })(LegendRootBase);
const LegendLabel = withStyles(legendLabelStyles, { name: 'LegendLabel' })(LegendLabelBase);
const LegendItem = withStyles(legendItemStyles, { name: 'LegendItem' })(LegendItemBase);

export default class RevenueChart2 extends React.PureComponent {
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
          rootComponent={ChartRoot}
        >
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />

          <AreaSeries
            name="Warehouse1"
            valueField="warehouse1"
            argumentField="year"
          />
          <AreaSeries
            name="Warehouse2"
            valueField="warehouse2"
            argumentField="year"
          />
          <Animation />
          <Legend
            position="bottom"
            rootComponent={LegendRoot}
            itemComponent={LegendItem}
            labelComponent={LegendLabel}
          />
          <Title
            text="Chart Warehouse"
          />
        </Chart>
      </Paper>
    );
  }
}
