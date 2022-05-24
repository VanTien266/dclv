import React, { useState, useEffect } from 'react';
import { Paper, Box, Typography } from '@material-ui/core';
import {
    Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export,
} from 'devextreme-react/chart';
import orderApi from "../../../api/orderApi";

function ChartOrderMonthly(props) {
    const [orderMonthly, setOrderMonthly] = useState([]);
    useEffect(() => {
        const fetchOrderMonthly = async () => {
            try {
                const response = await orderApi.countOrderDailyMonthly(
                    props.date.toISOString().slice(0, 10)
                );
                console.log(response);
                setOrderMonthly(response);
            } catch (error) {
                console.log("Failed to fetch order monthly", error);
            }
        }
        fetchOrderMonthly();
    }, [props.date]);
    console.log('orderMonthly', orderMonthly);
    return (
        <Paper style={{ padding: 5 }}>
            {orderMonthly.length > 0 ?
                <Chart id="chart"
                    title="Biểu đồ đơn đặt hàng"
                    dataSource={orderMonthly}
                // onPointClick={this.onPointClick}
                >
                    {/* <CommonSeriesSettings
          argumentField="_id"
          type="bar"
          hoverMode="allArgumentPoints"
          selectionMode="allArgumentPoints"
        >
          <Label visible={true}>
            <Format type="fixedPoint" precision={0} />
          </Label>
        </CommonSeriesSettings> */}
                    <Series
                        valueField="Total"
                        argumentField="date"
                        type="bar"
                        color="rgb(12, 83, 183)" >
                        <Label visible={true} />
                    </Series>
                    <Legend visible={false} />
                    <Export enabled={true} />
                </Chart>
                : <Box sx={{ justifyContent: 'center' }}>
                    <Typography variant="h6">Biểu đồ đơn đặt hàng</Typography>
                    <Typography variant="body1">Không có dữ liệu để hiển thị</Typography>
                </Box>
            }
        </Paper>
    );
}

export default ChartOrderMonthly;
