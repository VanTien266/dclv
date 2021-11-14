import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  noti: {
    textAlign: "center",
  },
}));
function Item() {
  const classes = useStyles();

  return (
    <Typography variant="h6" className={classes.noti}>
      Chưa có sản phẩm được chọn
    </Typography>
  );
}

export default Item;
