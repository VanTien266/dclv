import React from "react";
import NumberFormat from "react-number-format";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    maxHeight: 350, //Max height of table
    //Hide scroll bar
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
  tableHead: {
    backgroundColor: "#fff",
    "& th:first-child": {
      borderRadius: "5px 0 0 5px",
    },
    "& th:last-child": {
      borderRadius: "0 5px 5px 0",
    },
  },
}));

function Item() {
  const classes = useStyles();
  const tableTilteConfig = [
    "STT",
    "Mã sản phẩm",
    "Tên",
    "Chiều dài (m)",
    "Lô",
    "Đơn giá (vnđ/m)",
    "Giá (vnđ)",
  ];
  const items = [
    {
      id: "SP1112",
      name: "Vải kaki trắng",
      length: 600,
      lot: "L7",
      price: 200000,
    },
    {
      id: "SP1113",
      name: "Vải len đen",
      length: 700,
      lot: "L8",
      price: 150000,
    },
    {
      id: "SP1114",
      name: "Vải jean đen",
      length: 400,
      lot: "L1",
      price: 300000,
    },
    {
      id: "SP1115",
      name: "Vải coton đỏ",
      length: 650,
      lot: "L2",
      price: 50000,
    },
    {
      id: "SP1116",
      name: "Vải kaki đen",
      length: 100,
      lot: "L2",
      price: 70000,
    },
  ];
  const getTotalLength = (prevVal, nextItem) => {
    return prevVal + nextItem.length;
  };
  const getTotalPrice = (prevVal, nextItem) =>
    prevVal + nextItem.price * nextItem.length;
  return (
    <TableContainer className={classes.root}>
      <Table stickyHeader className={classes.tableContainer}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            {tableTilteConfig.map((item, index) => (
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
                <Typography variant="subtitle2">{item.id}</Typography>
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
                <Typography variant="subtitle2">{item.lot}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">
                  <NumberFormat
                    value={item.price}
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
                    value={item.length * item.price}
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
              <Typography variant="subtitle1"></Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1"></Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1">
                <NumberFormat
                  value={items.reduce(getTotalPrice, 0)}
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
