import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import AnotherInfo from "./components/AnotherInfo/AnotherInfo";
import BillInfo from "./components/BillInfo/BillInfo";
import CustomerInfo from "./components/CustomerInfo/CustomerInfo";
import Path from "./components/Path";
import Status from "./components/Status/Status";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "#fafafb",
      color: theme.palette.primary.main,
    },
  },
  container: {
    display: "flex",
  },
}));

function BillDetail() {
  const classes = useStyles();

  return (
    <div>
      <Path />
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} md={7}>
          <BillInfo />
        </Grid>
        <Grid item xs={12} md={5}>
          <Status />
        </Grid>
        <Grid item xs={12} md={7}>
          <AnotherInfo />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomerInfo />
        </Grid>
      </Grid>
    </div>
  );
}

export default BillDetail;
