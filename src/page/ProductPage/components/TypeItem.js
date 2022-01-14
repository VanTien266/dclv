import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Modal,
  Backdrop,
  Card,
  Collapse,
  Typography,
  CardContent,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import LotHeader from "./LotHeader";
import clsx from "clsx";
import LotItem from "./LotItem";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "15px",
    color: "#000040",
    backgroundColor: "#F6F6F8",
    borderRadius: "5px",
    marginTop: "10px",
    marginBottom: "10px",
    paddingLeft: "5px",
    display: "flex",
    alignItems: "center",
    minHeight: "30px",
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
}));

export default function TypeItem(props) {
  const { fabricType } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (e) => {
    //Seperate onClick in child and parents component
    e.stopPropagation();
    setExpanded(!expanded);
  };

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={3}
        className={clsx(classes.orderId, classes.verticalCenter)}
      >
        <Typography>{fabricType.id}</Typography>
      </Grid>
      <Grid item xs={4} className={classes.verticalCenter}>
        <Typography>{fabricType.name}</Typography>
      </Grid>
      <Grid item xs={3} className={classes.verticalCenter}>
        <Typography>
          {fabricType.fabricRoll.reduce((x, y) => x + y.count, 0)}
        </Typography>
      </Grid>
      <Grid item xs={2} className={classes.dropIcon}>
        <Button
          className={classes.buttonWidth}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          {expanded ? <ExpandLess /> : <ExpandMore />}
        </Button>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <LotHeader />
            {fabricType?.fabricRoll.map((item, index) => (
              <LotItem fabricLot={item} key={index} />
            ))}
          </Collapse>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Grid>
  );
}
