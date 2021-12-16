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
  verticalCenterEmail:{
    direction: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "20px"
  },
  alignTextCenter: {
    textAlign: "center",
  },
  verticalCenter: {
    direction: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  
});

export default function StaffHeader() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={1}
        className={clsx(classes.orderId, classes.verticalCenter)}
      >
        <p>ID</p>
      </Grid>
      <Grid item xs={3} className={classes.verticalCenter}>
        <p>Tên nhân viên</p>
      </Grid>
      <Grid item xs={2} className={classes.verticalCenter}>
        <p>Chức vụ</p>
      </Grid>
      <Grid container item xs={1} className={classes.verticalCenter}>
        <p>Ngày sinh</p>
      </Grid>
      <Grid item xs={1} className={classes.verticalCenter}>
        <p>Số điện thoại</p>
      </Grid>
      <Grid container item xs={3} className={classes.verticalCenterEmail}>
        <p>Email</p>
      </Grid>
      <Grid item xs={1} className={classes.verticalCenterEmail}>
        <p>Giới tính</p>
      </Grid>
    </Grid>
  );
}
