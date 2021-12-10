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
import clsx from "clsx";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "15px",
    color: "#000040",
    backgroundColor: "#FFF",
    borderRadius: "5px",
    marginTop: "10px",
    marginBottom: "10px",
    paddingLeft: "5px",
    display: "flex",
    direction: "row",
    alignItems: "center",
  },
  billId: {
    color: "#000040",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0px",
  },
  billStatus: {
    color: "#5A9E4B",
    fontWeight: "bold",
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
  noPadding: {
    paddingLeft: "10px",
    paddingRight: "10px",
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
  alignVerticalCenter: {
    justifyContent: "center",
    direction: "row",
    display: "flex",
    alignItems: "center",
  },
}));

export default function Bill(props) {
  const { bill } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (e) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={2}
        className={clsx(classes.billId, classes.verticalCenter)}
      >
        HD{bill.billID}
      </Grid>
      <Grid item xs={2} className={classes.verticalCenter}>
        {moment(bill.exportBillTime).subtract(1, "days").format("DD/MM/YYYY")}
      </Grid>
      <Grid item xs={2}>
        {/* {bill.salesmanID} */}
        Tiến
      </Grid>
      <Grid item xs={2} className={classes.verticalCenter}>
        {bill.clientID ? bill.clientID : "Trống"}
      </Grid>
      <Grid item xs={2} className={classes.alignVerticalCenter}>
        <Button onClick={handleOpen}>Chi tiết</Button>
      </Grid>
      <Grid container item xs={2}>
        <p className={classes.billStatus}>
          {bill.billStatus === "exported"
            ? "Đã xuất"
            : bill.billStatus === "shipping"
            ? "Đang vận chuyển"
            : bill.billStatus === "completed"
            ? "Hoàn tất"
            : "Thất bại"}
        </p>
      </Grid>
      {/* <Modal
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
              Danh sách sản phẩm
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <table>
                <tr>
                  <th>Mã sản phẩm</th>
                  <th>Tổng số</th>
                  <th>Đã giao</th>
                  <th>Còn lại</th>
                </tr>
                {order.products.map((item) => {
                  return (
                    <tr>
                      <td>{item.productID}</td>
                      <td>{item.total}</td>
                      <td>{item.shipped}</td>
                      <td>{item.remain}</td>
                    </tr>
                  );
                })}
              </table>
            </Typography>
          </CardContent>
        </Card>
      </Modal> */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Typography paragraph>Method:</Typography>
      </Collapse>
    </Grid>
  );
}
