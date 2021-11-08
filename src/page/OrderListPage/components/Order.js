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
} from "@material-ui/core";
import {
  KeyboardArrowDown,
  MoreVert,
  ExpandLess,
  ExpandMore,
} from "@material-ui/icons";
import BillHeader from "./BillHeader";
import clsx from "clsx";
import Bill from "./Bill";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "15px",
    color: "#000040",
    backgroundColor: "#F6F6F8",
    borderRadius: "5px",
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
  productList: {
    justifyContent: "center",
    direction: "row",
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
    textAlign:"left",
    color:"black",
    fontSize:"16px"
  },
  tableContentBlack: {
    color:"black",
    fontSize:"16px"
  }
}));

export default function Order({ order }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={2}
        className={clsx(classes.orderId, classes.verticalCenter)}
      >
        <p>{order.orderID}</p>
      </Grid>
      <Grid item xs={1} className={classes.verticalCenter}>
        <p>{order.dayOrder}</p>
      </Grid>

      <Grid item xs={1} className={classes.billQuantity}>
        <p>{order.numberOfBill}</p>
      </Grid>

      <Grid item xs={2} className={classes.verticalCenter}>
        <p className={classes.verticalAlign}>{order.userName}</p>
      </Grid>
      <Grid item xs={2} className={classes.verticalCenter}>
        <p className={classes.verticalAlign}>{order.deposit}</p>
      </Grid>
      <Grid item xs={2} className={classes.productList}>
        <Button onClick={handleOpen}>Chi tiết</Button>
      </Grid>
      <Grid container item xs={2}>
        <Grid item xs={8} className={classes.dropIcon}>
          <p className={classes.orderStatus}>{order.status}</p>
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
        <Grid item xs={2} className={classes.dropIcon}>
          <Button className={classes.buttonWidth}>
            <MoreVert />
          </Button>
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Mặt hàng đã đặt
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <table style={{width:"40vw"}}>
                <tr>
                  <th className={classes.headerTable}>Mã sản phẩm</th>
                  <th className={classes.headerTable}>Tổng số</th>
                  <th className={classes.headerTable}>Đã giao</th>
                  <th className={classes.headerTable}>Còn lại</th>
                </tr>
                {order.products.map((item) => {
                  return (
                    <tr>
                      <td className={classes.tableContentBlack}>{item.productID}</td>
                      <td className={classes.tableContentBlack}>{item.total}</td>
                      <td className={classes.tableContentBlack}>{item.shipped}</td>
                      <td className={classes.tableContentBlack}>{item.remain}</td>
                    </tr>
                  );
                })}
              </table>
            </Typography>
          </CardContent>
        </Card>
      </Modal>
      <Grid container item xs={12}>
        <Grid item xs={2}></Grid>
        <Grid item xs={9}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <BillHeader />
            <Bill />
            <Bill />
          </Collapse>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Grid>
  );
}
