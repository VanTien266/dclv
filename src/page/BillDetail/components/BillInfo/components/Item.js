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

function Item(props) {
  const { listFabricRoll } = props;
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

  const getTotalLength = (prevVal, nextItem) => {
    return prevVal + nextItem.length;
  };
  const getTotalPrice = (prevVal, nextItem) =>
    prevVal +
    nextItem.item.marketPrice[nextItem.item.marketPrice.length - 1].price *
      nextItem.length;

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
          {listFabricRoll.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Typography variant="subtitle2">{index + 1}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">{item.colorCode}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">{item.item.name}</Typography>
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
                    value={
                      item.item.marketPrice[item.item.marketPrice.length - 1]
                        .price
                    }
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
                    value={
                      item.length *
                      item.item.marketPrice[item.item.marketPrice.length - 1]
                        .price
                    }
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
                  value={listFabricRoll.reduce(getTotalLength, 0)}
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
                  value={listFabricRoll.reduce(getTotalPrice, 0)}
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
