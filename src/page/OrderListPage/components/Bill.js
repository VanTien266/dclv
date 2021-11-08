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

export default function Bill({ order }) {
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
        className={clsx(classes.billId, classes.verticalCenter)}
      >
        {/* <p>{order.orderID}</p> */}MHD13579
      </Grid>
      <Grid item xs={2} className={classes.verticalCenter}>
        {/* <p>{order.dayOrder}</p> */}13/10/2020
      </Grid>
      <Grid item xs={2}>
        {/* <p>{order.numberOfBill}</p> */}Lưu Văn Tiến
      </Grid>

      <Grid item xs={2} className={classes.verticalCenter}>
        {/* <p className={classes.verticalAlign}>{order.userName}</p> */}Trần Trọng Nghĩa
      </Grid>
      <Grid item xs={2} className={classes.alignVerticalCenter}>
        <Button onClick={handleOpen}>Chi tiết</Button>
      </Grid>
      <Grid container item xs={2}>
        <p className={classes.billStatus}>Hoàn tất</p>
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
