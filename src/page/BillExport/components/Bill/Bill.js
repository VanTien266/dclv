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
import Item from "./components/Item";
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
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState({});
  const [listProductAdded, setListProductAdded] = useState([]);

  useEffect(() => {
    const handleGetProductById = (data) => {
      return data.filter((item) => item.id === productId);
    };

    const fetchProduct = () => {
      axios.get("product/fabric-roll").then((response) => {
        setProduct(handleGetProductById(response.data.fabricRoll));
      });
    };
    fetchProduct();
  }, [productId]);

  const handleProductIdChange = (productId) => {
    setProductId(productId);
  };

  const handleAddToListProduct = (product) => {
    setListProductAdded([...listProductAdded, product]);
    setProduct({});
  };

  const handleRemoveFromListProduct = (id) => {
    setListProductAdded(listProductAdded.filter((item) => item.id !== id));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          Hóa đơn bán hàng
        </Typography>
        <EnterItemId
          productId={productId}
          handleProductIdChange={handleProductIdChange}
        />
        <Grid container spacing={1} className={classes.item}>
          <Grid item xs={12}>
            <Typography variant="h6">Sản phẩm tìm thấy</Typography>
            <Item
              product={product[0]}
              handleAddToListProduct={handleAddToListProduct}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Sản phẩm đã chọn</Typography>
            <ItemTable
              listProductAdded={listProductAdded}
              handleRemoveFromListProduct={handleRemoveFromListProduct}
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
