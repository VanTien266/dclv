import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export,
} from 'devextreme-react/chart';
import billApi from "../../../api/billApi";

function ChartFabricTypeSell() {
  const [fabrictypesell, setFabricTypeSell] = useState([]);
  useEffect(() => {
    const fetchFabricTypeSell = async () => {
        try {
          const response = await billApi.getBillFabricTypeSell();
          console.log(response);
          setFabricTypeSell(response);
        }catch (error) {
          console.log("Failed to fetch fabric type sell", error);
        }
    }
    fetchFabricTypeSell();
  }, []);
    return (
      <Paper style={{padding: 5}}>
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
          color="#f3c40b" 
          // style={{margin: 100}} 
          >
            <Label visible={true} />
          </Series>
        <Legend visible={false} />
        <Export enabled={true} />
      </Chart>
      </Paper>
    );
}

export default ChartFabricTypeSell;