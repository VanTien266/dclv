import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

function getNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const useStyles = makeStyles({
  orderInfoBox: {
    backgroundColor: "#F6F6F8",
    borderRadius: "5px",
    padding: "10px",
    fontFamily: "'Roboto', sans-serif",
    height: "100%",
  },
  title: {
    color: "#000040",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  totalMoney: {
    color: "#000040",
    fontSize: "20px",
    fontWeight: "bolder",
  },
  alignMoneyRight: {
    textAlign: "right",
  },
  estimateMoney: {
    color: "#000040",
    fontSize: "16px",
    fontWeight: "bolder",
  },
  productScroll: {
    padding: "0",
    maxHeight: "350px",
    minHeight: "349px",
    overflowX: "auto",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
});
export default function OrderInfo(props) {
  const classes = useStyles();
  let totalPrice = props.products.reduce(
    (totalPrice, item) =>
      totalPrice + item.length * item.colorCode.marketPriceId[0].price,
    0
  );
  return (
    <div className={classes.orderInfoBox}>
      <Typography variant="h5" className={classes.title}>
        Thông tin đơn hàng
      </Typography>
      <TableContainer component={Paper} className={classes.productScroll}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Loại vải</TableCell>
              <TableCell>Mã màu</TableCell>
              <TableCell>Đã giao&nbsp;(m)</TableCell>
              <TableCell>Còn lại&nbsp;(m)</TableCell>
              <TableCell>Đơn giá&nbsp;(vnđ/m)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.products.map((item, idx) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography variant="subtitle2">{idx + 1}</Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Typography variant="subtitle2">
                    {item.colorCode.typeId.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    {item.colorCode.colorCode}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    {item.shippedLength}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    {item.length - item.shippedLength}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    {getNumberWithCommas(item.colorCode.marketPriceId[0].price)}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <hr />
      <Grid container>
        <Grid item xs={6}>
          <Typography component="p" className={classes.estimateMoney}>
            Ước tính
          </Typography>
          <Typography component="p" className={classes.estimateMoney}>
            Đã đặt cọc
          </Typography>
          <Typography component="p" className={classes.totalMoney}>
            Thành tiền
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.alignMoneyRight}>
          <Typography component="p" className={classes.estimateMoney}>
            {totalPrice ? getNumberWithCommas(totalPrice) : ""} vnđ
          </Typography>
          <Typography component="p" className={classes.estimateMoney}>
            {props.deposit ? getNumberWithCommas(props.deposit) : ""} vnđ
          </Typography>
          <Typography component="p" className={classes.totalMoney}>
            {totalPrice && props.deposit
              ? getNumberWithCommas(totalPrice - props.deposit)
              : ""}{" "}
            vnđ
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

// function createData(typeID, colorCode, shipped, remaining, unitPrice) {
//   return { typeID, colorCode, shipped, remaining, unitPrice };
// }

// const rows = [
//   createData("Kaki", 236, 500, 500, "100.000"),
//   createData("Jean", 236, 500, 500, "100.000"),
//   createData("Kate", 236, 500, 500, "100.000"),
//   createData("Lụa", 236, 500, 500, "100.000"),
//   createData("Bamboo", 236, 500, 500, "100.000"),
//   createData("Cotton", 236, 500, 500, "100.000"),
//   createData("Kaki", 236, 500, 500, "100.000"),
//   createData("Jean", 236, 500, 500, "100.000"),
//   createData("Kate", 236, 500, 500, "100.000"),
// ];
