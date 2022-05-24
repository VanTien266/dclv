import React, {useState, useEffect} from 'react';
import {Paper, Box, Typography} from '@material-ui/core';
import {
  Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export,
} from 'devextreme-react/chart';
import billApi from "../../../api/billApi";

function ChartFabricTypeSell(props) {
  const [fabrictypesell, setFabricTypeSell] = useState([]);
  useEffect(() => {
    const fetchFabricTypeSell = async () => {
        try {
          const response = await billApi.getBillFabricTypeSell(props.date.toISOString().slice(0, 10));
          // console.log(response);
          setFabricTypeSell(response);
        }catch (error) {
          console.log("Failed to fetch fabric type sell", error);
        }
    }
    fetchFabricTypeSell();
  }, [props.date]);
    return (
      <Paper style={{padding: 5}}>
        {fabrictypesell.length > 0 ? 
      <Chart id="chart"
        title="Top sản phẩm bán chạy"
        dataSource={fabrictypesell}
        // onPointClick={this.onPointClick}
        rotated={true}
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
          valueField="countFabrictype"
          argumentField="_id"
          type="bar"
          color="rgb(183, 33, 54)" 
          // style={{margin: 100}} 
          >
            <Label visible={true} />
          </Series>
        <Legend visible={false} />
        <Export enabled={true} />
      </Chart>
      : <Box sx={{ justifyContent: 'center' }}>
      <Typography variant="h6">Top sản phẩm bán chạy</Typography>
      <Typography variant="body1">Không có dữ liệu để hiển thị</Typography>
    </Box>}
      </Paper>
    );
}

export default ChartFabricTypeSell;