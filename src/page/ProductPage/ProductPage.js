import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../../components/ProductList/ProductList";
import { makeStyles } from "@material-ui/styles";
import Filter from "./components/Filter";
import { Grid } from "@material-ui/core";
import SearchField from "../../components/SearchField";
import NotificationButton from "../../components/Button/NotificationButton";

const useStyles = makeStyles(() => ({
  root: {
    padding: "16px",
  },
  productList: {
    marginTop: "16px",
  },
  notiSearch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
      <Grid container>
        <Grid item sm={6} md={8}>
          <Filter />
        </Grid>
        <Grid item sm={6} md={4} className={classes.notiSearch}>
          <Grid item xs={2}>
            <NotificationButton />
          </Grid>
          <Grid item xs={10}>
            <SearchField />
          </Grid>
        </Grid>
      </Grid>

      {product && (
        <ProductList className={classes.productList} product={product} />
      )}
    </div>
  );
}

export default Product;
