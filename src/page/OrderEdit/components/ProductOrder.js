import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  productOrder: {
    marginBottom: "10px"
  },
  productStt: {
    fontWeight: "bold",
    color: "#5A9E4B",
    fontSize: "17px"
  },
  shipSttTitle: {
    fontWeight: "bold",
    color: "#1B40FA",
    fontSize: "16px",
  },
  length: {
    color: "#000040",
    fontWeight: "bold",
    fontSize: "16px",
  },
  fabricType: {
    color: "#000040",
    fontWeight: "bold",
    fontSize: "17px",
  },
  alignStatusRight: {
    textAlign:"right"
  },
  marginBottom10: {
    marginBottom: "10px"
  }
});

export default function ProductOrder() {
  const classes = useStyles();
  return (
    <Grid container className={classes.productOrder}>
      <Grid item xs={3}>
        <div>Image</div>
      </Grid>
      <Grid container item xs={6}>
        <Grid item xs={12} className={clsx(classes.fabricType, classes.marginBottom10)}>
          Vải Kaki trắng - KK1234
        </Grid>
        <Grid item xs={4} className={clsx(classes.shipSttTitle, classes.marginBottom10)}>
          Đã giao
        </Grid>
        <Grid item xs={8} className={clsx(classes.shipSttTitle, classes.marginBottom10)}>
          Còn lại
        </Grid>
        <Grid item xs={4} className={classes.length}>
          500m
        </Grid>
        <Grid item xs={8} className={classes.length}>
          500m
        </Grid>
      </Grid>
      <Grid container item xs={3} className={classes.alignStatusRight}>
        <Grid xs={12} item className={clsx(classes.length, classes.marginBottom10)}>100.000 vnđ/mét</Grid>
        <Grid xs={12} item className={clsx(classes.length, classes.marginBottom10)}>1000 mét</Grid>
        <Grid xs={12} item className={classes.productStt}>Sẵn có</Grid>
      </Grid>
    </Grid>
  );
}
