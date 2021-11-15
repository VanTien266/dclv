import CustomerInfo from "./components/CustomerInfo";
import OrderInfo from "./components/OrderInfo";
import TimelineStatus from "./components/TimelineStatus";
import ListBill from "./components/ListBill";
import { Button, Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  KeyboardArrowRight,
  ArrowBack,
  ArrowUpward,
  Cancel,
  Publish,
} from "@material-ui/icons";

const useStyles = makeStyles({
  orderDetailBox: {
    padding: "10px",
    display: "table"
  },
  alignStatusRight: {
    direction: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
  },
});

export default function OrderDetail() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.orderDetailBox}>
      <Grid container>
        <Grid item xs={9}>
          <Typography variant="h4" className={classes.infoTable}>
            Đơn hàng <KeyboardArrowRight /> Chi tiết đơn đặt hàng MDH12345
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.alignStatusRight}>
          <Button startIcon={<Publish />}>
            <Typography variant="h6" color="secondary">
              Xuất hóa đơn
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid container direction="column" item xs={7} spacing={2}>
          <Grid item>
            <OrderInfo />
          </Grid>
          <Grid item>
            <ListBill />
          </Grid>
        </Grid>
        <Grid container item xs={5} direction="column" spacing={2}>
          <Grid item>
            <TimelineStatus />
          </Grid>
          <Grid item>
            <CustomerInfo />
          </Grid>
          <Grid container item>
            <Button startIcon={<Cancel />}>
              <Typography variant="h6" color="secondary">
                Quay lại
              </Typography>
            </Button>
            <Button startIcon={<ArrowBack />}>
              <Typography variant="h6" color="secondary">
                Quay lại
              </Typography>
            </Button>
            <Button startIcon={<ArrowUpward />}>
              <Typography variant="h6" color="secondary">
                Cập nhật
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
