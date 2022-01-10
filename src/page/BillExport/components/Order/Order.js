import React from "react";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Item from "./components/Item/Item";
import CustomerInfo from "./components/CustomerInfo/CustomerInfo";
import NumberFormat from "react-number-format";

const useStyles = makeStyles((theme) => ({
  title: { textAlign: "center", margin: "8px 0" },
  root: {
    "& .MuiDivider-root": {
      margin: theme.spacing(1),
    },
  },
  cost: { margin: "16px 0" },
}));

function Order(props) {
  const { order } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          Đơn đặt hàng
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Item products={order.products} />
          </Grid>
        </Grid>
        <div className={classes.cost}>
          <Divider />
          <Grid container justifyContent="space-between">
            <Grid>
              <Typography variant="h6">Đã đặt cọc</Typography>
            </Grid>
            <Grid>
              <Typography variant="h6">
                <NumberFormat
                  value={order.deposit}
                  thousandsGroupStyle="thousand"
                  displayType="text"
                  decimalScale={0}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix=" vnđ"
                />
              </Typography>
            </Grid>
          </Grid>
          <Divider />
        </div>
        <CustomerInfo
          clientID={order.clientID}
          receiver={{
            receiverName: order.receiverName,
            receiverPhone: order.receiverPhone,
            receiverAddress: order.receiverAddress,
          }}
        />
      </CardContent>
    </Card>
  );
}

export default Order;
