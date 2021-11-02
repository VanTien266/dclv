import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Collapse, List, ListItem } from "@material-ui/core";
import {
  KeyboardArrowDown,
  ExpandLess,
  ExpandMore,
  MoreVert,
} from "@material-ui/icons";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "15px",
    color: "#000040",
    backgroundColor: "#F6F6F8",
    borderRadius: "5px",
    height: "60px",
    marginTop: "20px",
    marginBottom: "20px",
    paddingLeft: "5px",
    display: "flex",
    direction: "row",
    alignItems: "center",
  },
  orderId: {
    color: "#000040",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0px",
  },
  orderStatus: {
    color: "#5A9E4B",
    fontWeight: "bold",
    textAlign: "left",
  },
  quantityGrid: {
    backgroundColor: "#FFF",
    borderRadius: "5px",
    height: "70%",
  },
  billQuantity: {
    justifyContent: "center",
    direction: "row",
    display: "flex",
    alignItems: "center",
  },
  dropIcon: {
    textAlign: "center",
    direction: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    paddingLeft: "10px"
  },
  noPadding: {
    paddingLeft: "10px",
    paddingRight: "10px"
  }
});

export default function Order({ order }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Grid container className={classes.root}>
      <Grid container item xs={2}>
        <Grid
          item
          xs={7}
          className={clsx(classes.orderId, classes.verticalCenter)}
        >
          <p>{order.orderID}</p>
        </Grid>
        <Grid item xs={5} className={classes.verticalCenter}>
          <p>{order.dayOrder}</p>
        </Grid>
      </Grid>
      <Grid item xs={1} className={clsx(classes.billQuantity)}>
        <p>{order.numberOfBill}</p>
      </Grid>
      <Grid container item xs={3}>
        <Grid item xs={7} className={classes.verticalCenter}>
          <p className={classes.verticalAlign}>{order.userName}</p>
        </Grid>
        <Grid item xs={5} className={classes.verticalCenter}>
          <p className={classes.verticalAlign}>{order.deposit}</p>
        </Grid>
      </Grid>

      <Grid container item xs={4} className={classes.quantityGrid}>       
          <Grid item xs={4} className={classes.pLeft10}>
            <p className={classes.verticalAlign}>
              {order.products[0].productID}
            </p>
          </Grid>
          <Grid item xs={3}>
            <p className={classes.verticalAlign}>{order.products[0].total}</p>
          </Grid>
          <Grid item xs={2}>
            <p className={classes.verticalAlign}>{order.products[0].shipped}</p>
          </Grid>
          <Grid item xs={2}>
            <p className={classes.verticalAlign}>{order.products[0].remain}</p>
          </Grid>
          <Grid item xs={1} className={classes.dropIcon}>
            <Button className={classes.buttonWidth} onClick={handleClick}>
              {open ? <ExpandLess /> : <ExpandMore />}
            </Button>
          </Grid>
        
        <Collapse in={open} timeout="auto" unmountOnExit style={{width: "100%", zIndex:"1", position:"relative"}}>
          <List component="div" disablePadding style={{backgroundColor: "#696983", opacity:"1"}}>
            {order.products.slice(1).map((product) => {
              return (
                <ListItem className={classes.noPadding}>
                  <Grid container className={classes.quantityGrid}>
                    <Grid item xs={4}>
                      <p className={classes.verticalAlign}>
                        {product.productID}
                      </p>
                    </Grid>
                    <Grid item xs={3}>
                      <p className={classes.verticalAlign}>{product.total}</p>
                    </Grid>
                    <Grid item xs={2}>
                      <p className={classes.verticalAlign}>{product.shipped}</p>
                    </Grid>
                    <Grid item xs={2}>
                      <p className={classes.verticalAlign}>{product.remain}</p>
                    </Grid>
                  </Grid>
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      </Grid>
      <Grid container item xs={2}>
        <Grid item xs={8} className={classes.dropIcon}>
          <p className={classes.orderStatus}>{order.status}</p>
        </Grid>
        <Grid item xs={2} className={classes.dropIcon}>
          <Button className={classes.buttonWidth}>
            <KeyboardArrowDown />
          </Button>
        </Grid>
        <Grid item xs={2} className={classes.dropIcon}>
          <Button className={classes.buttonWidth}>
            <MoreVert />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
