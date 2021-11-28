import {
  Card,
  CardContent,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import SearchField from "../../../../components/SearchField";
import CostInfo from "./components/CostInfo";
import Item from "./components/Item";
import AnotherInfo from "./components/AnotherInfo";
import EnterItemId from "./components/EnterItemId/EnterItemId";
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

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          Hóa đơn bán hàng
        </Typography>
        <EnterItemId />
        <div className={classes.item}>
          <Item />
        </div>

        <CostInfo />
        <Divider className={classes.divider} />
        <AnotherInfo />
      </CardContent>
    </Card>
  );
}

export default Bill;
