import React from "react";
import moment from "moment";
import clsx from "clsx";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  tableHead: { backgroundColor: "#B4B4C1" },
  headStyle: { ...theme.typography.titleM, color: "#000040" },
  tableBody: {
    backgroundColor: "#F6F6F8",
  },
  cardHeader: {
    ...theme.typography.textParagraph,
  },
  content: {
    padding: 0,
  },
  textCode: {
    ...theme.typography.textCode,
    color: "#000040",
  },
  textItem: {
    ...theme.typography.textItem,
    textTransform: "capitalize",
    color: "#000040",
  },
  statusTrue: {
    color: "#5A9E4B",
  },
  statusFalse: {
    color: "#FF0000",
  },
}));
const tableTilteConfig = [
  "ID",
  "Tên",
  "Ngày nhập",
  "Chiều dài",
  "Lô vải",
  "Kho",
  "Trạng thái",
];
function ProductList(props) {
  const { className, product } = props;

  console.log("Product list render");

  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <Card>
        <CardHeader title="Có 10 sản phẩm được tìm thấy" />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <Table>
              <TableHead className={classes.tableHead}>
                <TableRow>
                  {tableTilteConfig.map((item, index) => (
                    <TableCell key={index} className={classes.headStyle}>
                      {item}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody className={classes.tableBody}>
                {product
                  .filter((item) => item.status === true)
                  .map((item, index) => (
                    <TableRow hover key={index}>
                      <TableCell className={classes.textCode}>
                        {item.id}
                      </TableCell>
                      <TableCell className={classes.textItem}>
                        {item.item.name}
                      </TableCell>
                      <TableCell className={classes.textItem}>
                        {moment(item.dateAdded).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell className={classes.textItem}>
                        {item.length}
                      </TableCell>
                      <TableCell className={classes.textItem}>
                        {item.lot}
                      </TableCell>
                      <TableCell className={classes.textItem}>
                        {item.warehouseId}
                      </TableCell>
                      {item.status ? (
                        <TableCell
                          className={clsx(classes.statusTrue, classes.textCode)}
                        >
                          Đang có sẵn
                        </TableCell>
                      ) : (
                        <TableCell
                          className={clsx(
                            classes.statusFalse,
                            classes.textCode
                          )}
                        >
                          Đã hết{" "}
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductList;
