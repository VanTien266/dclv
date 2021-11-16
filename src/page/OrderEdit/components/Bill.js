import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "13px",
    color: "#000040",
    backgroundColor: "#FFF",
    borderRadius: "5px",
    marginTop: "10px",
    height: "40px",
    marginBottom: "10px",
    paddingLeft: "5px",
    display: "flex",
    direction: "row",
    alignItems: "center",
  },
  billId: {
    color: "#000040",
    fontSize: "14px",
    fontWeight: "bold",
    margin: "0px",
  },
  billStatus: {
    color: "#275DE9",
    fontWeight: "bold",
  },
  verticalCenter: {
    direction: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  alignVerticalCenter: {
    justifyContent: "center",
    direction: "row",
    display: "flex",
    alignItems: "center",
  },
});
export default function Bill() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={2}>
        <Typography variant="p" className ={classes.billId}>MHD13579</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="p">Lưu Văn Tiến</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="p">20/06/2000</Typography>
      </Grid>
      <Grid container item xs={4}>
        <Grid item xs={6}>
          <Typography variant="p">KT1234</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="p">100m</Typography>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="p" className ={classes.billStatus}>Đang vận chuyển</Typography>
      </Grid>
    </Grid>
  );
}
