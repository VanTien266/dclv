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
import React from "react";
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

function Item() {
  const classes = useStyles();
  const tableTitleConfig = [
    "STT",
    "Tên",
    "Chiều dài (m)",
    "Đã giao (m)",
    "Còn lại (m)",
  ];
  const items = [
    {
      name: "Vải kaki trắng",
      length: 600,
      delivered: 300,
      rest: 300,
    },
    {
      name: "Vải kaki trắng",
      length: 600,
      delivered: 300,
      rest: 300,
    },
    {
      name: "Vải kaki trắng",
      length: 600,
      delivered: 300,
      rest: 300,
    },
    {
      name: "Vải kaki trắng",
      length: 600,
      delivered: 300,
      rest: 300,
    },
    {
      name: "Vải jean trắng",
      length: 1000,
      delivered: 700,
      rest: 300,
    },
    {
      name: "Vải kaki đen",
      length: 500,
      delivered: 300,
      rest: 200,
    },
    {
      name: "Vải coton trắng",
      length: 400,
      delivered: 100,
      rest: 300,
    },
    {
      name: "Vải jean trắng",
      length: 500,
      delivered: 200,
      rest: 300,
    },
  ];
  const getTotalLength = (prevVal, nextItem) => prevVal + nextItem.length;
  const getTotalDelivered = (prevVal, nextItem) => prevVal + nextItem.delivered;
  const getTotalRest = (prevVal, nextItem) => prevVal + nextItem.rest;
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
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Typography variant="subtitle2">{index + 1}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">{item.name}</Typography>
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
                    value={item.delivered}
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
                    value={item.rest}
                    thousandsGroupStyle="thousand"
                    displayType="text"
                    decimalScale={0}
                    thousandSeparator="."
                    decimalSeparator=","
                  />
                </Typography>
              </TableCell>
            </TableRow>
          ))}
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
                  value={items.reduce(getTotalLength, 0)}
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
                  value={items.reduce(getTotalDelivered, 0)}
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
                  value={items.reduce(getTotalRest, 0)}
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
