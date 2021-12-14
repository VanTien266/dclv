import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  Modal,
  Card,
  CardContent,
  Backdrop,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import moment from "moment";
import React, { useState, useEffect } from "react";
import productApi from "../../../api/productApi";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "13px",
    color: "#000040",
    backgroundColor: "#FFF",
    borderRadius: "5px",
    marginTop: "10px",
    height: "40px",
    marginBottom: "10px",
    paddingLeft: "5px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      boxShadow: theme.shadows[5],
      transition: "box-shadow 0.3s ease-in-out",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  billId: {
    color: "#000040",
    fontSize: "14px",
    fontWeight: "bold",
    margin: "0px",
  },
  verticalCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  alignVerticalCenter: {
    justifyContent: "center",
    direction: "row",
    display: "flex",
    alignItems: "center",
  },
  productList: {
    justifyContent: "center",
    direction: "row",
    display: "flex",
    alignItems: "center",
  },
  tableModalLayout: {
    display: "table",
    width: "100%",
    tableLayout: "fixed",
  },
  productScroll: {
    padding: "0",
    maxHeight: "500px",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
  exportedTypo: {
    color: "#ff9800",
    fontWeight: "bold",
  },
  deliveryTypo: {
    color: "#2196f3",
    fontWeight: "bold",
  },
  successTypo: {
    color: "#4caf50",
    fontWeight: "bold",
  },
  failTypo: {
    color: "#f44336",
    fontWeight: "bold",
  },
}));
export default function Bill(props) {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [listFabricRoll, setListFabricRoll] = useState([]);
  
  useEffect(() => {
    let mounted = true;

    const fetchFabricRoll = async (listId) => {
      const response = await productApi.getListById(listId);
      if (mounted) setListFabricRoll(response);
      // console.log(response);
    };

    fetchFabricRoll({ ids: props.billInfo.fabricRoll });
    return () => {
      mounted = false;
    };
  }, [props.billInfo.fabricRoll]);

  console.log(listFabricRoll);

  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const handleClick = () => {
    history.push(`/${localStorage.getItem("role")}/order/billDetail/${props.billInfo._id}`);
  };

  return (
    <Grid container className={classes.root} onClick={handleClick}>
      <Grid item xs={2}>
        <Typography variant="subtitle1" className={classes.billId}>
          {"HĐ" + (props.billInfo !== undefined ? props.billInfo.billID : "")}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle1">
          {props.billInfo !== undefined ? props.billInfo.salesmanID.name : ""}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">
          {props.billInfo !== undefined
            ? moment(props.billInfo.exportBillTime)
                .subtract(1, "days")
                .format("DD/MM/YYYY")
            : ""}
        </Typography>
      </Grid>
      <Grid item xs={2} className={classes.productList}>
        <Button onClick={handleOpen}>Chi tiết</Button>
      </Grid>
      <Grid item xs={3}>
        <Typography
          variant="subtitle1"
          className={
            (props.billInfo.status[props.billInfo.status.length - 1].name ===
              "exported" &&
              classes.exportedTypo) ||
            (props.billInfo.status[props.billInfo.status.length - 1].name ===
              "shipping" &&
              classes.deliveryTypo) ||
            (props.billInfo.status[props.billInfo.status.length - 1].name ===
              "completed" &&
              classes.successTypo) ||
            (props.billInfo.status[props.billInfo.status.length - 1].name ===
              "failed" &&
              classes.failTypo)
          }
        >
          {
            (props.billInfo.status[props.billInfo.status.length - 1].name ===
              "exported" &&
              "Đã xuất") ||
            (props.billInfo.status[props.billInfo.status.length - 1].name ===
              "shipping" &&
              "Đang giao hàng") ||
            (props.billInfo.status[props.billInfo.status.length - 1].name ===
              "completed" &&
              "Giao hàng thành công") ||
            (props.billInfo.status[props.billInfo.status.length - 1].name ===
              "failed" &&
              "Giao hàng thất bại")
          }
        </Typography>
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
              Số cây vải đã xuất hóa đơn
            </Typography>
            <TableContainer component={Paper} className={classes.productScroll}>
              <Table stickyHeader sx={{ minWidth: "40vh" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.headerTable}>STT</TableCell>
                    <TableCell className={classes.headerTable}>
                      Mã màu
                    </TableCell>
                    <TableCell className={classes.headerTable}>
                      Tên
                    </TableCell>
                    <TableCell className={classes.headerTable}>
                      Lô
                    </TableCell>
                    <TableCell className={classes.headerTable}>
                      Chiều dài&nbsp;(m)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listFabricRoll.map((row, idx) => (
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
                        {row.colorCode}
                      </TableCell>
                      <TableCell className={classes.tableContentBlack}>
                        {row.item.name}
                      </TableCell>
                      <TableCell className={classes.tableContentBlack}>
                        {row.lot}
                      </TableCell>
                      <TableCell className={classes.tableContentBlack}>
                        {row.length}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Modal>
    </Grid>
  );
}

const fabric = [
  {
    fabricRollId: "KT1234",
    typeId: "2365",
    colorCode: "100m",
    length: "1000m",
  },
  {
    fabricRollId: "KT1234",
    typeId: "2365",
    colorCode: "100m",
    length: "1000m",
  },
  {
    fabricRollId: "KT1234",
    typeId: "2365",
    colorCode: "100m",
    length: "1000m",
  },
  {
    fabricRollId: "KT1234",
    typeId: "2365",
    colorCode: "100m",
    length: "1000m",
  },
  {
    fabricRollId: "KT1234",
    typeId: "2365",
    colorCode: "100m",
    length: "1000m",
  },
  {
    fabricRollId: "KT1234",
    typeId: "2365",
    colorCode: "100m",
    length: "1000m",
  },
  {
    fabricRollId: "KT1234",
    typeId: "2365",
    colorCode: "100m",
    length: "1000m",
  },
  {
    fabricRollId: "KT1234",
    typeId: "2365",
    colorCode: "100m",
    length: "1000m",
  },
  {
    fabricRollId: "KT1234",
    typeId: "2365",
    colorCode: "100m",
    length: "1000m",
  },
];
