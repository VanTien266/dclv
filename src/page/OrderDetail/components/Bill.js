import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
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
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      boxShadow: theme.shadows[5],
      transition: "box-shadow 0.3s ease-in-out",
    },
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
}));
export default function Bill() {
  const history = useHistory();
  const classes = useStyles();

  const handleClick = () => {
    history.push("/order/billDetail");
  };
  return (
    <Grid container className={classes.root} onClick={handleClick}>
      <Grid item xs={2}>
        <Typography variant="subtitle1" className={classes.billId}>
          MHD13579
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">Lưu Văn Tiến</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">20/06/2000</Typography>
      </Grid>
      <Grid container item xs={4}>
        <Grid item xs={6}>
          <Typography variant="subtitle1">KT1234</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">100m</Typography>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1" className={classes.billStatus}>
          Đang vận chuyển
        </Typography>
      </Grid>
    </Grid>
  );
}
