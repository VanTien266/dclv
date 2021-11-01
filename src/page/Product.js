import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList/ProductList";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    padding: "16px",
  },
  productList: {
    marginTop: "16px",
  },
}));
function Product() {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    let mounted = true;

    const fetchProduct = () => {
      axios.get("/product/fabric-roll").then((resonse) => {
        if (mounted) {
          setProduct(resonse.data.fabricRoll);
        }
      });
    };

    fetchProduct();

    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div className={classes.root}>
      <p>This is filter</p>
      {product && (
        <ProductList className={classes.productList} product={product} />
      )}
    </div>
  );
}

export default Product;
