import React from "react";
import { Grid, Typography, makeStyles, Divider } from "@material-ui/core";
import NumberFormat from "react-number-format";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0.5),
  },
  itemInfo: {
    display: "flex",
    justifyContent: "space-between",
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

function CostInfo(props) {
  const { listFabricRoll } = props;
  const classes = useStyles();

  const totalPrice = listFabricRoll.reduce(
    (prevVal, nextItem) =>
      prevVal +
      nextItem.item.marketPrice[nextItem.item.marketPrice.length - 1].price *
        nextItem.length,
    0
  );

  return (
    <div className={classes.root}>
      {/* <Divider className={classes.divider} />
      <Grid container className={classes.itemInfo} alignItems="flex-end">
        <Grid item>
          <Typography variant="body1">Tổng tiền</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <NumberFormat
              value={totalPrice}
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
      <Grid container className={classes.itemInfo}>
        <Typography variant="body1">Thuế</Typography>
        <Typography variant="body1">
          <NumberFormat
            value={totalPrice * 0.1}
            thousandsGroupStyle="thousand"
            displayType="text"
            decimalScale={0}
            thousandSeparator="."
            decimalSeparator=","
            suffix=" vnđ"
          />
        </Typography>
      </Grid> */}
      <Divider className={classes.divider} />
      <Grid container className={classes.itemInfo}>
        <Typography variant="h6">Thành tiền</Typography>
        <Typography variant="h6">
          <NumberFormat
            value={totalPrice * 1.1}
            thousandsGroupStyle="thousand"
            displayType="text"
            decimalScale={0}
            thousandSeparator="."
            decimalSeparator=","
            suffix=" vnđ"
          />
        </Typography>
      </Grid>
    </div>
  );
}

export default CostInfo;
