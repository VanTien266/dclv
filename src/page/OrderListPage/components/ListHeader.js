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
    marginTop: "20px",
    marginBottom: "20px",
    paddingLeft: "5px",
  },
  billQuantity: {
    textAlign: "center",
  },
  dropIcon: {
    textAlign: "center",
  },
  middleAlign: {
    alignItems: "center",
    margin: "auto 0px",
  },
});

export default function ListHeader() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid container item xs={2}>
        <Grid
          item
          xs={7}
          className={classes.orderId}
        >
          <p>Mã đơn hàng</p>
        </Grid>
        <Grid item xs={5}>
          <p>Ngày đặt</p>
        </Grid>
      </Grid>
      <Grid item xs={1}>
        <p className={classes.billQuantity}>
          Số hóa đơn
        </p>
      </Grid>
      <Grid container item xs={3}>
        <Grid item xs={7}>
          <p>Khách hàng</p>
        </Grid>
        <Grid item xs={5}>
          <p>Đã đặt cọc</p>
        </Grid>
      </Grid>
      <Grid container item xs={4}>
        <Grid item xs={4}>
          <p>Mã sản phẩm</p>
        </Grid>
        <Grid item xs={3}>
          <p>Tổng số</p>
        </Grid>
        <Grid item xs={2}>
          <p>Đã giao</p>
        </Grid>
        <Grid item xs={3}>
          <p>Còn lại</p>
        </Grid>
      </Grid>
      <Grid item xs={1}>
        <p>Trạng thái</p>
      </Grid>
    </Grid>
  );
}
