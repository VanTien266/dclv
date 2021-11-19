import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import React from "react";
import CostInfo from "./components/CostInfo";
import Item from "./components/Item";

// const useStyles = makeStyles((theme) => ({}));

function BillInfo() {
  // const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <CardHeader title="Thông tin hóa đơn" />
        <Grid container spacing={1}>
          <Item />
          <Grid item xs={12}>
            <CostInfo />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default BillInfo;
