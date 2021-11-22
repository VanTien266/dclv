import React from "react";
import { Grid, Typography, makeStyles, Divider } from "@material-ui/core";

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

function CostInfo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider className={classes.divider} />
      <Grid container className={classes.itemInfo} alignItems="flex-end">
        <Grid item>
          <Typography variant="body1">Tổng tiền</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">0 vnđ</Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.itemInfo}>
        <Typography variant="body1">Thuế</Typography>
        <Typography variant="body1">0 vnđ</Typography>
      </Grid>
      <Grid container className={classes.itemInfo}>
        <Typography variant="body1">Đã đặt cọc</Typography>
        <Typography variant="body1">0 vnđ</Typography>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container className={classes.itemInfo}>
        <Typography variant="h6">Thành tiền</Typography>
        <Typography variant="h6">0 vnđ</Typography>
      </Grid>
    </div>
  );
}

export default CostInfo;
