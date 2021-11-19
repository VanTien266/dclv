import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Container } from "@material-ui/core";
import ProductOrder from "./ProductOrder";

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
    overflow: "auto",
  },
});
export default function OrderInfo() {
  const classes = useStyles();
  return (
    <div className={classes.orderInfoBox}>
      <Typography variant="h5" className={classes.title}>
        Thông tin đơn hàng
      </Typography>
      <Grid container spacing={2} className={classes.productScroll}>
        <Grid item xs={12}>
          <ProductOrder />
        </Grid>
        <Grid item xs={12}>
          <ProductOrder />
        </Grid>
        <Grid item xs={12}>
          <ProductOrder />
        </Grid>
        <Grid item xs={12}>
          <ProductOrder />
        </Grid>
        <Grid item xs={12}>
          <ProductOrder />
        </Grid>
        <Grid item xs={12}>
          <ProductOrder />
        </Grid>
      </Grid>
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
            100.000.000 vnđ
          </Typography>
          <Typography component="p" className={classes.estimateMoney}>
            50.000.000 vnđ
          </Typography>
          <Typography component="p" className={classes.totalMoney}>
            50.000.000 vnđ
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
