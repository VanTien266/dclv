import { Grid, makeStyles } from "@material-ui/core";
import { ArrowBack, ArrowUpward } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import DefaultButton from "../../components/Button/DefaultButton";
import AnotherInfo from "./components/AnotherInfo/AnotherInfo";
import BillInfo from "./components/BillInfo/BillInfo";
import CustomerInfo from "./components/CustomerInfo/CustomerInfo";
import Path from "./components/Path";
import Status from "./components/Status/Status";

const useStyles = makeStyles((theme) => ({
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
}));

function BillDetail() {
  const classes = useStyles();
  const history = useHistory();

  const handleBack = () => {
    history.push("/order/orderDetail");
  };

  return (
    <div>
      <Path />
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} md={7}>
          <BillInfo />
        </Grid>
        <Grid item xs={12} md={5}>
          <Status />
        </Grid>
        <Grid item xs={12} md={7}>
          <AnotherInfo />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomerInfo />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.btnGroup}>
        <Grid item>
          <DefaultButton
            title="Quay lại"
            icon={ArrowBack}
            clickEvent={handleBack}
          />
        </Grid>
        <Grid item>
          <DefaultButton title="Cập nhật" icon={ArrowUpward} />
        </Grid>
      </Grid>
    </div>
  );
}

export default BillDetail;
