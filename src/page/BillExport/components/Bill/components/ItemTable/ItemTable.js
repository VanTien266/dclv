import {
  makeStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  Button,
  Grid,
} from "@material-ui/core";
import NumberFormat from "react-number-format";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    maxHeight: 300, //Max height of table
    //Hide scroll bar
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
  title: {
    backgroundColor: "#fafafb",
  },
  capitalize: {
    textTransform: "capitalize",
  },
  rowContainer: { display: "flex", flexDirection: "column", width: "100%" },
}));

function ItemTable(props) {
  const { listProductAdded } = props;
  const classes = useStyles();
  const tableTitleConfig = [
    "STT",
    "Mã sản phẩm",
    "Tên",
    "Chiều dài (m)",
    "Kho",
    "Lô",
    "",
  ];

  console.log("ItemTable render", listProductAdded);

  const getTotalLength = (prevVal, nextItem) => prevVal + nextItem?.length;
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
          {listProductAdded &&
            listProductAdded.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="subtitle2">{index + 1}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    {item?.item?.colorCode}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="subtitle2"
                    className={classes.capitalize}
                  >
                    {item?.item?.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    <NumberFormat
                      value={item?.length}
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
                    {item?.warehouseId}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">{item?.lot}</Typography>
                </TableCell>
                <TableCell>
                  <Button>Xóa</Button>
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
                  value={listProductAdded.reduce(getTotalLength, 0)}
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
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ItemTable;
