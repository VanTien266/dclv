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
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import productApi from "../../../api/productApi";

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
  },
  deliveryTypo: {
    color: "#2196f3",
  },
  successTypo: {
    color: "#4caf50",
  },
  failTypo: {
    color: "#f44336",
  },
}));
export default function Bill(props) {
  const { bill } = props;
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [fabricRolls, setFabricRolls] = useState([]);
  const status = bill?.status[bill?.status?.length - 1].name;

  useEffect(() => {
    let mounted = true;

    const fetchFabricRoll = async (listId) => {
      // console.log(listId);
      const response = await productApi.getListById(listId);
      if (mounted) setFabricRolls(response);
      console.log(response);
    };

    fetchFabricRoll({ ids: bill.fabricRoll });

    return () => {
      mounted = false;
    };
  }, [bill]);

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

  const handleClick = () => {
    history.push(`/order/billDetail/${bill?._id}`);
  };

  return (
    <Grid container className={classes.root} onClick={handleClick}>
      <Grid item xs={2}>
        <Typography variant="subtitle1" className={classes.billId}>
          HĐ{bill?.billID}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle1">{bill.salesmanID.name}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">
          {moment(bill?.exportBillTime).format("DD/MM/YYYY")}
        </Typography>
      </Grid>
      <Grid item xs={2} className={classes.productList}>
        <Button onClick={handleOpen}>Chi tiết</Button>
      </Grid>
      <Grid item xs={3}>
        <Typography
          variant="subtitle1"
          className={
            (status === "exported" && classes.exportedTypo) ||
            (status === "shipping" && classes.deliveryTypo) ||
            (status === "completed" && classes.successTypo) ||
            (status === "failed" && classes.failTypo)
          }
        >
          {(status === "exported" && "Đã xuất") ||
            (status === "shipping" && "Đang vận chuyển") ||
            (status === "completed" && "Giao hàng thành công") ||
            (status === "failed" && "Giao hàng thất bại")}
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
              <Table
                stickyHeader
                sx={{ minWidth: "40vh" }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.headerTable}>STT</TableCell>
                    <TableCell className={classes.headerTable}>
                      Mã màu
                    </TableCell>
                    <TableCell className={classes.headerTable}>Tên</TableCell>
                    <TableCell className={classes.headerTable}>Lô</TableCell>
                    <TableCell className={classes.headerTable}>
                      Chiều dài&nbsp;(m)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fabricRolls.map((row, idx) => (
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
                        {row.item.name}
                      </TableCell>
                      <TableCell className={classes.tableContentBlack}>
                        {row.item.fabricType.name}
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
