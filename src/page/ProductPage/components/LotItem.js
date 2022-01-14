import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "15px",
    color: "#000040",
    backgroundColor: "#FFF",
    borderRadius: "5px",
    marginTop: "5px",
    marginBottom: "5px",
    minHeight: "30px",
    paddingLeft: "5px",
    display: "flex",
    direction: "row",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      boxShadow: theme.shadows[5],
      transition: "box-shadow 0.3s ease-in-out",
    },
  },
  orderId: {
    color: "#000040",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0px",
  },
  statusPending: {
    color: "#D19431",
    fontWeight: "bold",
  },
  statusProcessing: {
    color: "#F0622F",
    fontWeight: "bold",
  },
  statusComplete: {
    color: "#5A9E4B",
    fontWeight: "bold",
  },
  statusCancel: {
    color: "#FF0000",
    fontWeight: "bold",
  },
  billQuantity: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  dropIcon: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  productList: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  verticalCenter: {
    direction: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonWidth: {
    minWidth: "24px",
    padding: "0px",
    height: "80%",
  },
  pLeft10: {
    paddingLeft: "10px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  headerTable: {
    textAlign: "left",
    color: "black",
    fontSize: "18px",
  },
  tableContentBlack: {
    color: "#000040",
    fontSize: "16px",
  },
  productScroll: {
    padding: "0",
    maxHeight: "500px",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
}));

export default function LotItem(props) {
  const { fabricLot } = props;
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={4}
        className={clsx(classes.orderId, classes.verticalCenter)}
      >
        <Typography>{fabricLot._id}</Typography>
      </Grid>
      <Grid item xs={5} className={classes.verticalCenter}>
        <Typography>{fabricLot.itemName.name}</Typography>
      </Grid>
      <Grid item xs={3} className={classes.verticalCenter}>
        <Typography>{fabricLot.count}</Typography>
      </Grid>
    </Grid>
  );
}
