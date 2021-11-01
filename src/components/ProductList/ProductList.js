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
const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: 0,
  },
  statusTrue: {
    color: "#5A9E4B",
  },
  statusFalse: {
    color: "#FF0000",
  },
}));

function ProductList(props) {
  const { className, product } = props;

  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <Card>
        <CardHeader title="Có 10 sản phẩm được tìm thấy" />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Tên</TableCell>
                  <TableCell>Ngày nhập</TableCell>
                  <TableCell>Chiều dài</TableCell>
                  <TableCell>Lô vải</TableCell>
                  <TableCell>Kho</TableCell>
                  <TableCell>Trạng thái</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {product.map((item) => (
                  <TableRow hover key={item.id}>
                    <TableCell>{item.id.substring(0, 4)}</TableCell>{" "}
                    <TableCell>{item.item.name}</TableCell>
                    <TableCell>
                      {moment(item.dateAdded).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell>{item.length}</TableCell>
                    <TableCell>{item.lot}</TableCell>
                    <TableCell>{item.warehouseId}</TableCell>
                    {item.status ? (
                      <TableCell className={classes.statusTrue}>
                        Đang có sẵn{" "}
                      </TableCell>
                    ) : (
                      <TableCell className={classes.statusFalse}>
                        Đã hết{" "}
                      </TableCell>
                    )}
                  </TableRow>
                ))}
                {product.map((item) => (
                  <TableRow hover key={item.id}>
                    <TableCell>{item.id.substring(0, 4)}</TableCell>{" "}
                    <TableCell>{item.item.name}</TableCell>
                    <TableCell>
                      {moment(item.dateAdded).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell>{item.length}</TableCell>
                    <TableCell>{item.lot}</TableCell>
                    <TableCell>{item.warehouseId}</TableCell>
                    {item.status ? (
                      <TableCell className={classes.statusTrue}>
                        Đang có sẵn{" "}
                      </TableCell>
                    ) : (
                      <TableCell className={classes.statusFalse}>
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
