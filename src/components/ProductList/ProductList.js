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
  tableHead: { backgroundColor: "#B4B4C1"},
  headStyle: { ...theme.typography.titleM, color: "#000040" },
  tableBody: {
    backgroundColor: "#B4B4C1",
  },
  fabricTypeRow: {
    backgroundColor: "#FFF",
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
    // textTransform: "capitalize",
    color: "#000040",
  },
  statusTrue: {
    color: "#5A9E4B",
  },
  statusFalse: {
    color: "#FF0000",
  },
}));
const tableTilteConfig = ["Lô", "Tên mặt hàng", "Tổng số", "Tồn kho"];
function ProductList(props) {
  const { className, product } = props;

  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <Card>
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <Table >
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
                {product.map((item, index) => (
                  <>
                    <TableRow key={index} className={classes.tableBody} >
                      <TableCell className={classes.textCode}>
                        {item.name + "      (" + item.id + ")       "}
                      </TableCell>
                      <TableCell className={classes.textCode}>
                       
                      </TableCell>
                      <TableCell className={classes.textCode}></TableCell>
                      <TableCell className={classes.textCode}></TableCell>
                    </TableRow>
                    {item.fabricRoll.map((roll, rollIdx) => (
                      <TableRow key={index} className={classes.fabricTypeRow}>
                        <TableCell className={classes.textCode}>
                          {roll._id}
                        </TableCell>
                        <TableCell className={clsx(classes.textCode)}>
                        {roll.itemName.name}
                        </TableCell>
                        <TableCell className={clsx(classes.textCode)}>{roll.count}</TableCell>
                        <TableCell className={clsx(classes.textCode)}>{roll.remaining}</TableCell>
                      </TableRow>
                    ))}
                  </>
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
