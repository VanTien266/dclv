import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  Modal,
  Card,
  CardContent,
  Backdrop,
} from "@material-ui/core";
import React, { useState } from "react";
import clsx from "clsx";

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

const useStyles = makeStyles({
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
    direction: "row",
    alignItems: "center",
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
    direction: "row",
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
  tableScroll: {
    maxHeight: "20vh",
    display: "block",
    overflow: "auto"
  },
  tableModalLayout: {
    display:"table",
    width:"100%",
    tableLayout:"fixed",
  },
  tableHeader: {
    width: "calc( 100% - 1em )"
  }
});
export default function Bill() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container className={classes.root}>
      <Grid item xs={2}>
        <Typography variant="p" className={classes.billId}>
          MHD13579
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="p">Lưu Văn Tiến</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="p">20/06/2000</Typography>
      </Grid>
      <Grid item xs={2} className={classes.productList}>
        <Button onClick={handleOpen}>Chi tiết</Button>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="p" className={classes.billStatus}>
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
            <Typography variant="body2" color="textSecondary">
              <table style={{ width: "40vw" }}>
                <thead className={clsx(classes.tableModalLayout, classes.tableHeader)}>
                  <tr>
                    <td className={classes.headerTable}>STT</td>
                    <td className={classes.headerTable}>Mã cây vải</td>
                    <td className={classes.headerTable}>Loại vải</td>
                    <td className={classes.headerTable}>Mã màu</td>
                    <td className={classes.headerTable}>Chiều dài</td>
                  </tr>
                </thead>
                <tbody className={classes.tableScroll}>
                  {fabric.map((item, idx) => {
                    return (
                      <tr key={idx} className={classes.tableModalLayout}>
                        <td className={classes.tableContentBlack}>{idx + 1}</td>
                        <td className={classes.tableContentBlack}>
                          {item.fabricRollId}
                        </td>
                        <td className={classes.tableContentBlack}>
                          {item.typeId}
                        </td>
                        <td className={classes.tableContentBlack}>
                          {item.colorCode}
                        </td>
                        <td className={classes.tableContentBlack}>
                          {item.length}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Typography>
          </CardContent>
        </Card>
      </Modal>
    </Grid>
  );
}
