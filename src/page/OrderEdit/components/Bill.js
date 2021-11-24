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
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
  billStatus: {
    color: "#275DE9",
    fontWeight: "bold",
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
}));
export default function Bill() {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    history.push("/order/billDetail");
  };
  return (
    <Grid container className={classes.root} onClick={handleClick}>
      <Grid item xs={2}>
        <Typography variant="subtitle1" className={classes.billId}>
          MHD13579
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle1">Lưu Văn Tiến</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">20/06/2000</Typography>
      </Grid>
      <Grid item xs={2} className={classes.productList}>
        <Button onClick={handleOpen}>Chi tiết</Button>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle1" className={classes.billStatus}>
          Đang vận chuyển
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
              <Table sx={{ minWidth: "40vh" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.headerTable}>STT</TableCell>
                    <TableCell className={classes.headerTable}>
                      Mã cây vải
                    </TableCell>
                    <TableCell className={classes.headerTable}>
                      Loại vải
                    </TableCell>
                    <TableCell className={classes.headerTable}>
                      Mã màu
                    </TableCell>
                    <TableCell className={classes.headerTable}>
                      Chiều dài&nbsp;(m)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fabric.map((row, idx) => (
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
                        {row.fabricRollId}
                      </TableCell>
                      <TableCell className={classes.tableContentBlack}>
                        {row.typeId}
                      </TableCell>
                      <TableCell className={classes.tableContentBlack}>
                        {row.colorCode}
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
