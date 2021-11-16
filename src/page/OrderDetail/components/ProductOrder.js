import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  productOrder: {
    marginBottom: "10px",
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
    textAlign: "right",
  },
  marginBottom10: {
    marginBottom: "10px",
  },
  cardItem: {
    padding: theme.spacing(1),
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#fff",
      boxShadow: theme.shadows[5],
    },
  },
  itemInfoMain: {
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },
  itemInfoExt: {
    justifyContent: "space-between",
  },
  color: {
    color: theme.palette.btnBg,
  },
}));

export default function ProductOrder() {
  const classes = useStyles();
  return (
    <Card className={classes.cardItem}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <div>Image</div>
        </Grid>
        <Grid container item xs={6}>
          <Grid
            item
            xs={12}
            className={clsx(classes.itemInfoMain, classes.marginBottom10)}
          >
            Vải Kaki trắng - KK1234
          </Grid>
          <Grid
            item
            xs={4}
            className={clsx(classes.shipSttTitle, classes.marginBottom10)}
          >
            Đã giao
          </Grid>
          <Grid
            item
            xs={8}
            className={clsx(classes.shipSttTitle, classes.marginBottom10)}
          >
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
          <Grid
            xs={12}
            item
            className={clsx(classes.length, classes.marginBottom10)}
          >
            100.000 vnđ/mét
          </Grid>
          <Grid
            xs={12}
            item
            className={clsx(classes.length, classes.marginBottom10)}
          >
            1000 mét
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
