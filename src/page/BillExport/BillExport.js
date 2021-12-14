import { Grid, makeStyles, Typography } from "@material-ui/core";
import { ArrowBack, Publish } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import orderApi from "../../api/orderApi";
import DefaultButton from "../../components/Button/DefaultButton";
import Bill from "./components/Bill/Bill";
import Order from "./components/Order/Order";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "#fafafb",
      color: theme.palette.primary.main,
    },
  },
  title: {
    ...theme.typography.largeTitle,
    marginBottom: theme.spacing(2),
  },
}));
function BillExport() {
  const classes = useStyles();
  const [order, setOrder] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let mounted = true;

    const fetchOrder = async (id) => {
      const response = await orderApi.getOne(id);
      if (mounted) setOrder(response);
    };

    fetchOrder(id);

    return () => (mounted = false);
  }, []);

  return (
    <div>
      <Typography variant="h5" className={classes.title}>
        Xuất hóa đơn
      </Typography>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} sm={12} md={6}>
          <Order order={order} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Bill />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item>
          <DefaultButton title="Quay lại" icon={ArrowBack} />
        </Grid>
        <Grid item>
          <DefaultButton title="Xuất hóa đơn" icon={Publish} />
        </Grid>
      </Grid>
    </div>
  );
}

export default BillExport;
