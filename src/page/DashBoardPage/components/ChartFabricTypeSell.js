import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export,
} from 'devextreme-react/chart';
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
      <Paper style={{padding: 5}}>
      <Chart id="chart"
        title="Số lượng cây trong từng loại vải đã bán"
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