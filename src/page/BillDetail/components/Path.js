import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import PrintIcon from "@material-ui/icons/Print";
import DefaultButton from "../../../components/Button/DefaultButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },
  title: {
    ...theme.typography.largeTitle,
  },
}));

function Path(props) {
  const { billID } = props;
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid item>
        <Typography variant="h5" color="primary" className={classes.title}>
          Hóa đơn bán hàng HĐ{billID}
        </Typography>
      </Grid>
      <Grid item>
        <DefaultButton icon={PrintIcon} title={"In hóa đơn"} />
      </Grid>
    </Grid>
  );
}

export default Path;
