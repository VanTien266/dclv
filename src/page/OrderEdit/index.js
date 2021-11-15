import CustomerInfo from "./components/CustomerInfo";
import OrderInfo from "./components/OrderInfo";
import TimelineStatus from "./components/TimelineStatus";
import ListBill from "./components/ListBill";
import { Button, Grid, Typography, Container } from "@material-ui/core";
import DefaultButton from "../../components/DefaultButton";
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
    display: "table",
  },
  alignStatusRight: {
    direction: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
  },
  alignCenter: {
    direction: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heightCancleBtn: {
    height: "100%"
  }
});

export default function OrderEdit() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.orderDetailBox}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Typography variant="h4" className={classes.infoTable}>
            Đơn hàng <KeyboardArrowRight /> Chi tiết đơn đặt hàng MDH12345
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.alignStatusRight}>
          <DefaultButton icon={Publish} title="Xuất hóa đơn" />
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
            <Grid item xs={4} className={classes.alignCenter}>
              <Button startIcon={<Cancel />} size="large" className={classes.heightCancleBtn}>
                <Typography variant="h6" color="secondary">
                  Hủy
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={4} className={classes.alignCenter}>
              <DefaultButton icon={ArrowBack} title="Quay lại" />
            </Grid>
            <Grid item xs={4} className={classes.alignCenter}>
              <DefaultButton icon={ArrowUpward} title="Cập nhật" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
