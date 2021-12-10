import {
  Card,
  CardContent,
  Divider,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import CostInfo from "./components/CostInfo";
import AnotherInfo from "./components/AnotherInfo";
import EnterItemId from "./components/EnterItemId/EnterItemId";
import ItemTable from "./components/ItemTable";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    margin: "8px 0",
  },
  item: { margin: "8px 0" },
  divider: {
    marginTop: theme.spacing(1),
  },
}));
function Bill() {
  const classes = useStyles();
  const [productIdAdd, setProductIdAdd] = useState("");
  const [productIdDel, setProductIdDel] = useState("");
  const [listProductAdded, setListProductAdded] = useState([]);

  useEffect(() => {
    let mouted = true;

    const handleGetProductById = (data) => {
      return data.filter((item) => item.id === productIdAdd);
    };

    const fetchProduct = () => {
      axios.get("product/fabric-roll").then((response) => {
        const product = handleGetProductById(response.data.fabricRoll)[0];
        if (mouted && product)
          if (
            listProductAdded.filter((item) => item.id === product.id).length < 1
          )
            setListProductAdded([...listProductAdded, product]);
      });
    };
    fetchProduct();

    return () => (mouted = false);
  }, [productIdAdd]);

  // useEffect(() => {
  //   let mouted = true;

  //   if (mouted)
  //     setListProductAdded([
  //       ...listProductAdded.filter((item) => item.id !== productIdDel),
  //     ]);

  //   return () => (mouted = false);
  // }, [productIdDel]);

  const handleProductIdChange = (productIdAdd) => {
    setProductIdAdd(productIdAdd);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          Hóa đơn bán hàng
        </Typography>
        <EnterItemId
          productIdAdd={productIdAdd}
          handleProductIdChange={handleProductIdChange}
        />
        <Grid container spacing={1} className={classes.item}>
          <Grid item xs={12}>
            <Typography variant="h6">Sản phẩm đã chọn</Typography>
            <ItemTable
              listProductAdded={listProductAdded}
              setProductIdDel={setProductIdDel}
            />
          </Grid>
        </Grid>

        <CostInfo />
        <Divider className={classes.divider} />
        <AnotherInfo />
      </CardContent>
    </Card>
  );
}

export default Bill;
