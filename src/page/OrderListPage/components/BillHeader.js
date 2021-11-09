import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "15px",
    fontWeight: "bold",
    color: "#000040",
    backgroundColor: "#B4B4C1",
    borderRadius: "5px",
    height: "50px",
    marginTop: "10px",
    paddingLeft: "5px",
  },
  alignVerticalCenter: {
    justifyContent: "center",
    direction: "row",
    display: "flex",
    alignItems: "center",
  },
  alignTextCenter: {
    textAlign: "center",
  },
  dropIcon: {
    textAlign: "center",
  },
  verticalCenter: {
    direction: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  }
});

export default function BillHeader() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={2}
        className={clsx(classes.orderId, classes.verticalCenter)}
      >
        <p>Mã hóa đơn</p>
      </Grid>
      <Grid item xs={2} >
        <p>Ngày tạo</p>
      </Grid>
      <Grid item xs={2} >
        <p>Người tạo</p>
      </Grid>
      <Grid item xs={2} >
        <p>Khách hàng</p>
      </Grid>
      <Grid container item xs={2} className={classes.alignVerticalCenter}>
        <p>Cây vải</p>
      </Grid>
      <Grid item xs={2} className={classes.verticalCenter}>
        <p>Trạng thái</p>
      </Grid>
    </Grid>
  );
}
