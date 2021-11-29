import CustomerInfo from "./components/CustomerInfo";
import OrderInfo from "./components/OrderInfo";
import TimelineStatus from "./components/TimelineStatus";
import ListBill from "./components/ListBill";
import { Button, Grid, Typography, Container } from "@material-ui/core";
import DefaultButton from "../../components/DefaultButton";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowBack, ArrowUpward, Cancel, Publish } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  orderEditBox: {
    padding: "10px",
  },
  alignBtnRight: {
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
  titlePage: {
    fontWeight: "bold",
    color: "#000040",
  },
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "#fafafb",
      color: theme.palette.primary.main,
    },
  },
  container: {
    display: "flex",
  },
  btnGroup: {
    justifyContent: "flex-end",
  },
  btnCancel: {
    backgroundColor: "#EAECFF",
    color: "#696983",
    "&:hover": {
      backgroundColor: "red",
      color: "black",
    },
    textTransform: "none",
    padding: theme.spacing(1.5),
  },
  btnCancelTitle: {
    ...theme.typography.buttonPrimary,
  },
}));

export default function OrderEdit() {
  const classes = useStyles();
  const history = useHistory();

  const handleBack = () => {
    history.push("/order/orderDetail");
  };
  const handleUpdate = () => {
    history.push("/order/orderDetail");
  };

  return (
    <Container maxWidth="xl" className={classes.orderEditBox}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Typography variant="h4" className={classes.titlePage}>
            Chi tiết đơn đặt hàng MDH12345
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.alignBtnRight}>
          <DefaultButton icon={Publish} title="Xuất hóa đơn" />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} md={7}>
          <OrderInfo />
        </Grid>
        <Grid item xs={12} md={5}>
          <TimelineStatus />
        </Grid>
        <Grid item xs={12} md={7}>
          <ListBill />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomerInfo />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.btnGroup}>
        <Grid item>
          <Button
            startIcon={<Cancel />}
            size="large"
            className={classes.btnCancel}
          >
            <Typography variant="h6" className={classes.btnCancelTitle}>
              Hủy
            </Typography>
          </Button>
        </Grid>
        <Grid item onClick={handleBack}>
          <DefaultButton
            title="Quay lại"
            icon={ArrowBack}
            // clickEvent={handleBack}
          />
        </Grid>
        <Grid item onClick={handleUpdate}>
          <DefaultButton
            title="Cập nhật"
            icon={ArrowUpward}
            // clickEvent={handleUpdate}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
