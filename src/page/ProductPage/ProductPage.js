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
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    warehouse: "",
    type: "",
    lot: "",
  });

  useEffect(() => {
    let mounted = true;

    const handleFilter = (products) => {
      if (filter.warehouse !== "")
        products = products.filter(
          (item) => item.warehouseId === filter.warehouse
        );
      if (filter.type !== "")
        products = products.filter(
          (item) => item.item.fabricType.name === filter.type
        );
      if (filter.lot !== "")
        products = products.filter((item) => item.lot === filter.lot);

      return products;
    };

    const fetchProduct = () => {
      axios.get("/product/fabric-roll").then((resonse) => {
        if (mounted) {
          setProduct(handleFilter(resonse.data.fabricRoll));
          setData(resonse.data.fabricRoll);
        }
      });
    };
    console.log("update");
    fetchProduct();
    return () => {
      mounted = false;
    };
  }, [filter]);

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={6} md={8}>
          <Filter
            handleFilterChange={handleFilterChange}
            filter={filter}
            data={data}
          />
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
