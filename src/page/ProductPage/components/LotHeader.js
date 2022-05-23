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
  },
});

export default function LotHeader() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={4}
        className={clsx(classes.orderId, classes.verticalCenter)}
      >
        <p>Lô vải</p>
      </Grid>
      <Grid item xs={5} className={classes.verticalCenter}>
        <p>Màu vải</p>
      </Grid>
      <Grid item xs={3} className={classes.verticalCenter}>
        <p>Tồn kho</p>
      </Grid>
    </Grid>
  );
}
