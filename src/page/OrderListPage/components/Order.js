import React, { useState, useEffect } from "react";
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
import { MoreVert, ExpandLess, ExpandMore } from "@material-ui/icons";
import BillHeader from "./BillHeader";
import clsx from "clsx";
import Bill from "./Bill";
import { useHistory } from "react-router-dom";
import orderApi from "../../../api/orderApi";
import moment from "moment";

function getNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

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

export default function Order(props) {
  const { order } = props;
  const classes = useStyles();
  const history = useHistory();
  const role = localStorage.getItem("role");

  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({ products: [] });

  useEffect(() => {
    let mounted = true;
    const fetchOrder = async () => {
      const response = await orderApi.getProducts(order._id);
      if (mounted) {
        setProduct(response);
      }
    };
    fetchOrder();

    return () => {
      mounted = false;
    };
  }, [order._id]);

  const handleOpen = (e) => {
    //Seperate onClick in child and parents component
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (e) => {
    //Seperate onClick in child and parents component
    e.stopPropagation();
    setOpen(false);
  };

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (e) => {
    //Seperate onClick in child and parents component
    e.stopPropagation();
    setExpanded(!expanded);
  };

  const handleClick = (id) => {
    history.push(`/order/orderDetail/${id}`);
  };

  return (
    <Grid
      container
      className={classes.root}
      onClick={() => handleClick(order._id)}
    >
      <Grid
        item
        xs={2}
        className={clsx(classes.orderId, classes.verticalCenter)}
      >
        <p>MDH{order.orderId}</p>
      </Grid>
      <Grid item xs={1} className={classes.verticalCenter}>
        <p>
          {moment(order.orderTime).subtract(1, "days").format("DD/MM/YYYY")}
        </p>
      </Grid>

      <Grid item xs={2} className={classes.billQuantity}>
        <p>{order.detailBill.length}</p>
      </Grid>

      <Grid item xs={2} className={classes.verticalCenter}>
        <p className={classes.verticalAlign}>
          {order.clientID ? order.clientID.name : order.receiverName}
        </p>
      </Grid>
      <Grid item xs={1} className={classes.verticalCenter}>
        <p className={classes.verticalAlign}>
          {order.deposit ? getNumberWithCommas(order.deposit) : 0}
        </p>
      </Grid>
      <Grid item xs={2} className={classes.productList}>
        <Button onClick={handleOpen}>Chi tiết</Button>
      </Grid>
      <Grid container item xs={2}>
        <Grid item xs={8} className={classes.dropIcon}>
          <p
            className={
              (order.orderStatus[order.orderStatus.length - 1].name ===
                "pending" &&
                classes.statusPending) ||
              (order.orderStatus[order.orderStatus.length - 1].name ===
                "processing" &&
                classes.statusProcessing) ||
              (order.orderStatus[order.orderStatus.length - 1].name ===
                "completed" &&
                classes.statusComplete) ||
              (order.orderStatus[order.orderStatus.length - 1].name ===
                "cancel" &&
                classes.statusCancel)
            }
          >
            {(order.orderStatus[order.orderStatus.length - 1].name ===
              "pending" &&
              "Chờ xử lý") ||
              (order.orderStatus[order.orderStatus.length - 1].name ===
                "processing" &&
                "Đang xử lý") ||
              (order.orderStatus[order.orderStatus.length - 1].name ===
                "completed" &&
                "Hoàn tất") ||
              (order.orderStatus[order.orderStatus.length - 1].name ===
                "cancel" &&
                "Đã hủy")}
          </p>
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
            <Typography gutterBottom variant="h4" component="h2">
              Mặt hàng đã đặt
            </Typography>
            <TableContainer component={Paper} className={classes.productScroll}>
              <Table
                stickyHeader
                sx={{ minWidth: "40vh" }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.headerTable}>STT</TableCell>
                    <TableCell className={classes.headerTable}>
                      Loại vải
                    </TableCell>
                    <TableCell className={classes.headerTable}>
                      Mã màu
                    </TableCell>
                    <TableCell className={classes.headerTable}>
                      Tổng số&nbsp;(m)
                    </TableCell>
                    <TableCell className={classes.headerTable}>
                      Đã giao&nbsp;(m)
                    </TableCell>
                    <TableCell className={classes.headerTable}>
                      Còn lại&nbsp;(m)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {product?.products.map((row, idx) => (
                    <TableRow
                      key={idx}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.tableContentBlack}
                      >
                        {idx + 1}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.tableContentBlack}
                      >
                        {row?.colorCode?.name}
                      </TableCell>
                      <TableCell className={classes.tableContentBlack}>
                        {row?.colorCode?.colorCode}
                      </TableCell>
                      <TableCell className={classes.tableContentBlack}>
                        {row?.length}
                      </TableCell>
                      <TableCell className={classes.tableContentBlack}>
                        {row.shippedLength}
                      </TableCell>
                      <TableCell className={classes.tableContentBlack}>
                        {row.length - row.shippedLength}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Modal>
      <Grid container item xs={12}>
        <Grid item xs={2}></Grid>
        <Grid item xs={9}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <BillHeader />
            {order?.detailBill.map((item, index) => (
              <Bill bill={item} key={index} />
            ))}
          </Collapse>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Grid>
  );
}
