import { Grid, makeStyles, Typography } from "@material-ui/core";
import { ArrowBack, Publish } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import orderApi from "../../api/orderApi";
import billApi from "../../api/billApi";
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
  const role = localStorage.getItem("role");
  const history = useHistory();
  const [listProductAdded, setListProductAdded] = useState([]);

  console.log("Bill render");
  console.log(listProductAdded);

  const handleAddProduct = (product) => {
    setListProductAdded([...listProductAdded, product]);
  };

  useEffect(() => {
    let mounted = true;

    const fetchOrder = async (id) => {
      const response = await orderApi.getOne(id);
      if (mounted) setOrder(response);
    };

    fetchOrder(id);

    return () => (mounted = false);
  }, [id]);

  const handleBack = () => {
    if (role !== null) history.push(`/${role}/order/orderDetail/${id}`);
    else history.push(`/order/orderDetail/${id}`);
  };

  const handleExportBill = async () => {
    const listFabricRollId = listProductAdded.map((item) => item._id);
    const createBillData = {
      orderID: id,
      clientID: order.clientID !== undefined ? order.clientID : "",
      fabricRoll: listFabricRollId,
      note: order.note !== undefined ? order.note : ""
    };
    let result = await billApi.createBill(JSON.stringify(createBillData));
    console.log(result); 
  }

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
          <Bill
            addProductToBill={handleAddProduct}
            listProductAdded={listProductAdded}
            order={order}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item>
          <DefaultButton
            title="Quay lại"
            icon={ArrowBack}
            clickEvent={handleBack}
          />
        </Grid>
        <Grid item>
          <DefaultButton
            title="Xuất hóa đơn"
            icon={Publish}
            clickEvent={async () => {
              await handleExportBill();
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default BillExport;
