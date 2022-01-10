import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import productApi from "../../../../api/productApi";
import CostInfo from "./components/CostInfo";
import Item from "./components/Item";

// const useStyles = makeStyles((theme) => ({}));

function BillInfo(props) {
  // const classes = useStyles();
  const { fabricRoll } = props;
  const [listFabricRoll, setListFabricRoll] = useState([]);

  console.log("Bill Info");
  useEffect(() => {
    let mounted = true;

    const fetchFabricRoll = async (listId) => {
      console.log(listId);
      const response = await productApi.getListById(listId);
      if (mounted) setListFabricRoll(response);
      // console.log(response);
    };

    fetchFabricRoll({ ids: fabricRoll });
    return () => {
      mounted = false;
    };
  }, [fabricRoll]);

  return (
    <Card>
      <CardContent>
        <CardHeader title="Thông tin hóa đơn" />
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Item listFabricRoll={listFabricRoll} />
          </Grid>
          <Grid item xs={12}>
            <CostInfo listFabricRoll={listFabricRoll} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default BillInfo;
