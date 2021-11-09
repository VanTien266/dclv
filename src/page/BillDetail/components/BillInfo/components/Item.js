import React from "react";
import {
  Card,
  Grid,
  Typography,
  makeStyles,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardItem: {
    padding: theme.spacing(1),
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#fff",
      boxShadow: theme.shadows[5],
    },
  },
  itemInfoMain: {
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },
  itemInfoExt: {
    justifyContent: "space-between",
  },
  color: {
    color: theme.palette.btnBg,
  },
}));

function Item() {
  const classes = useStyles();

  return (
    <Card className={classes.cardItem}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <CardMedia
            component="img"
            className={classes.cardImage}
            image={process.env.PUBLIC_URL + "/assets/fabricRoll.jpg"}
            title="Fabric roll"
          />
        </Grid>
        <Grid item xs={9}>
          <Grid
            container
            className={classes.itemInfoMain}
            alignItems="flex-end"
          >
            <Grid item>
              <Typography variant="h6">Vải KT trắng</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">100.000 vnđ/mét</Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.itemInfoExt}>
            <Typography variant="body1">Mã sản phẩm: KT1234</Typography>
            <Typography variant="body1" className={classes.color}>
              1000 mét
            </Typography>
          </Grid>
          <Grid container className={classes.itemInfoExt}>
            <Typography variant="body1">Lô</Typography>
            <Typography variant="body1" className={classes.color}>
              12A
            </Typography>
          </Grid>
          <Grid container className={classes.itemInfoExt}>
            <Typography variant="body1">Giá</Typography>
            <Typography variant="body1" className={classes.color}>
              100.000.000 vnđ
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Item;
