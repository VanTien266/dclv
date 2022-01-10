import {
  makeStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
} from "@material-ui/core";
import NumberFormat from "react-number-format";
import React, { useState, useEffect } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    maxHeight: 300, //Max height of table
    //Hide scroll bar
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
}));

function Item(props) {
  const { products } = props;
  const classes = useStyles();

  const tableTitleConfig = [
    "STT",
    "Tên",
    "Mã màu",
    "Chiều dài (m)",
    "Đã giao (m)",
    "Còn lại (m)",
  ];

  const getTotalLength = (prevVal, nextItem) => prevVal + nextItem.length;
  const getTotalDelivered = (prevVal, nextItem) =>
    prevVal + nextItem.shippedLength;
  const getTotalRest = (prevVal, nextItem) =>
    prevVal + (nextItem.length - nextItem.shippedLength);
  return (
    <TableContainer className={classes.root}>
      <Table stickyHeader className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            {tableTitleConfig.map((item, index) => (
              <TableCell key={index}>
                <Typography variant="subtitle1">{item}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products
            ? products.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography variant="subtitle2">{index + 1}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {item.colorCode.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {item.colorCode.colorCode}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      <NumberFormat
                        value={item.length}
                        thousandsGroupStyle="thousand"
                        displayType="text"
                        decimalScale={0}
                        thousandSeparator="."
                        decimalSeparator=","
                      />
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      <NumberFormat
                        value={item.shippedLength}
                        thousandsGroupStyle="thousand"
                        displayType="text"
                        decimalScale={0}
                        thousandSeparator="."
                        decimalSeparator=","
                      />
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      <NumberFormat
                        value={item.length - item.shippedLength}
                        thousandsGroupStyle="thousand"
                        displayType="text"
                        decimalScale={0}
                        thousandSeparator="."
                        decimalSeparator=","
                      />
                    </Typography>
                  </TableCell>
                </TableRow>
              ))
            : null}
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1">Tổng</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1"></Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1">
                <NumberFormat
                  value={products ? products.reduce(getTotalLength, 0) : ""}
                  thousandsGroupStyle="thousand"
                  displayType="text"
                  decimalScale={0}
                  thousandSeparator="."
                  decimalSeparator=","
                />
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1">
                <NumberFormat
                  value={products ? products.reduce(getTotalDelivered, 0) : ""}
                  thousandsGroupStyle="thousand"
                  displayType="text"
                  decimalScale={0}
                  thousandSeparator="."
                  decimalSeparator=","
                />
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1">
                <NumberFormat
                  value={products ? products.reduce(getTotalRest, 0) : ""}
                  thousandsGroupStyle="thousand"
                  displayType="text"
                  decimalScale={0}
                  thousandSeparator="."
                  decimalSeparator=","
                />
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Item;
