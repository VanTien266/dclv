import {
  makeStyles,
  Typography,
  TableBody,
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  Button,
} from "@material-ui/core";
import NumberFormat from "react-number-format";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    //Hide scroll bar
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
  noti: {
    textAlign: "center",
  },
  capitalize: {
    textTransform: "capitalize",
  },
}));

function Item(props) {
  const { product, handleAddToListProduct } = props;

  const classes = useStyles();
  const tableTitleConfig = [
    "Mã SP",
    "Tên SP",
    "Chiều dài (m)",
    "Kho",
    "Lô",
    "",
  ];

  const handleAddproduct = () => {
    handleAddToListProduct(product);
  };

  if (product)
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
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2">{product.id}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" className={classes.capitalize}>
                  {product.item.name}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">
                  <NumberFormat
                    value={product.length}
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
                  {product.warehouseId}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">{product.lot}</Typography>
              </TableCell>
              <TableCell>
                <Button onClick={handleAddproduct}>Thêm</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  else
    return (
      <Typography variant="body1" className={classes.noti}>
        Trống
      </Typography>
    );
}

export default Item;
