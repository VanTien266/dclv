import {
  Card,
  Grid,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  cardItem: {
    padding: theme.spacing(1),
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#fff",
      boxShadow: theme.shadows[5],
    },
  },
  itemDecs: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  itemInfoMain: {
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },
  itemInfoExt: {
    justifyContent: "space-between",
  },
  colorBtnBg: {
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
        <Grid item xs={9} className={classes.itemDecs}>
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
            <Grid item xs={4}>
              <Typography variant="body2" className={classes.colorBtnBg}>
                Đã giao
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" className={classes.colorBtnBg}>
                Còn lại
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">1000 mét</Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.itemInfoExt}>
            <Grid item xs={4}>
              <Typography variant="body1">500m</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">500m</Typography>
            </Grid>
            <Grid item xs={4}>
              {/* <Typography variant="body1">Sẵn có</Typography> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Item;
