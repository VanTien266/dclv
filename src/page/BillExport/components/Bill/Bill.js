import {
  Card,
  CardContent,
  Divider,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import React, { useState } from "react";
import CostInfo from "./components/CostInfo";
import AnotherInfo from "./components/AnotherInfo";
import EnterItemId from "./components/EnterItemId/EnterItemId";
import ItemTable from "./components/ItemTable";
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
function Bill(props) {
  const { order } = props;
  const classes = useStyles();

  const [listProductAdded, setListProductAdded] = useState([]);
  const [error, setError] = useState({ status: false, message: "" });

  console.log("Bill render");

  const handleAddProduct = (product) => {
    setListProductAdded([...listProductAdded, product]);
  };
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          Hóa đơn bán hàng
        </Typography>
        <EnterItemId
          handleAddProduct={handleAddProduct}
          listProductAdded={listProductAdded}
          order={order}
          error={error}
          setError={setError}
        />
        <Grid container spacing={1} className={classes.item}>
          <Grid item xs={12}>
            <Typography variant="h6">Sản phẩm đã chọn</Typography>
            <ItemTable
              listProductAdded={listProductAdded}
              // setProductIdDel={}
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
