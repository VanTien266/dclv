import { Grid, makeStyles, Typography } from "@material-ui/core";
import { ArrowBack, Publish } from "@material-ui/icons";
import React from "react";
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

  return (
    <div>
      <Typography variant="h5" className={classes.title}>
        Xuất hóa đơn
      </Typography>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} sm={12} md={6}>
          <Order />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Bill />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item>
          <DefaultButton title="Quay lại" icon={ArrowBack} />
        </Grid>
        <Grid item>
          <DefaultButton title="Xuất hóa đơn" icon={Publish} />
        </Grid>
      </Grid>
    </div>
  );
}

export default BillExport;
