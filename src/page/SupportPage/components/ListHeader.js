import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
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
    marginTop: "20px",
    marginBottom: "20px",
    paddingLeft: "5px",
  },
  billQuantity: {
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
  },
  productList: {
    justifyContent: "center",
    direction: "row",
    display: "flex",
    alignItems: "center",
  },
});

export default function ListHeader() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={2}
        className={clsx(classes.orderId, classes.verticalCenter)}
      >
        <p>Mã đơn đặt hàng</p>
      </Grid>
      <Grid item xs={2} className={classes.verticalCenter}>
        <p>Khách hàng</p>
      </Grid>
      <Grid item xs={2} className={classes.billQuantity}>
        <p>Số điện thoại</p>
      </Grid>
      <Grid item xs={3} className={classes.verticalCenter}>
        <p>Nội dung</p>
      </Grid>
      <Grid item xs={3} className={classes.billQuantity}>
        <p>Phản hồi</p>
      </Grid>
    </Grid>
  );
}
