import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import { ArrowBack, ArrowUpward } from "@material-ui/icons";
import billApi from "../../api/billApi";
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
  const role = localStorage.getItem("role");
  const { id } = useParams();
  const [bill, setBill] = useState({});

  useEffect(() => {
    let mounted = true;
    const fetchBill = async () => {
      const response = await billApi.getOne(id);
      if (mounted) {
        setBill(response);
      }
    };
    fetchBill();
    return () => {
      mounted = false;
    };
  }, [id]);

  const handleBack = () => {
    if (role !== null) history.push(`/order/orderDetail/${bill.orderID._id}`);
    else history.push(`/order/orderDetail/${bill.orderID._id}`);
  };

  return (
    <div>
      <Path billID={bill.billID} />
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} md={7}>
          <BillInfo fabricRoll={bill.fabricRoll} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Status status={bill.status} />
        </Grid>
        <Grid item xs={12} md={7}>
          <AnotherInfo bill={bill} />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomerInfo bill={bill} />
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
