import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Container } from "@material-ui/core";
import Bill from "./Bill";

const useStyles = makeStyles({
  billBox: {
    backgroundColor: "#F6F6F8",
    borderRadius: "5px",
    fontFamily: "'Roboto', sans-serif",
    padding: "10px",
    height: "100%",
  },
  header: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#000040",
    backgroundColor: "#B4B4C1",
    borderRadius: "5px",
    height: "50px",
    marginBottom: "10px",
    paddingLeft: "5px",
  },
  alignVerticalCenter: {
    justifyContent: "flex-start",
    direction: "row",
    display: "flex",
    alignItems: "center",
  },
  title: {
    color: "#000040",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  containerNoPadding: {
    padding: "0"
  },
  productList: {
    justifyContent: "center",
    direction: "row",
    display: "flex",
    alignItems: "center",
  }
});
export default function ListBill() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.billBox}>
      <Typography variant="h5" className={classes.title}>
        Thông tin các hóa đơn
      </Typography>
      <Grid container className={classes.header}>
        <Grid item xs={2} className={classes.alignVerticalCenter}>
          <Typography variant="subtitle1">Mã hóa đơn</Typography>
        </Grid>
        <Grid item xs={3} className={classes.alignVerticalCenter}>
          <Typography variant="subtitle1">Người tạo</Typography>
        </Grid>
        <Grid item xs={2} className={classes.alignVerticalCenter}>
          <Typography variant="subtitle1">Ngày xuất</Typography>
        </Grid>
        <Grid item xs={2} className={classes.productList}>
          <Typography variant="subtitle1">Cây vải</Typography>
        </Grid>
        <Grid item xs={3} className={classes.alignVerticalCenter}>
          <Typography variant="subtitle1">Trạng thái</Typography>
        </Grid>
      </Grid>
      <Container maxWidth="xl" className={classes.containerNoPadding}>
        <Bill />
        <Bill />
        <Bill />
      </Container>
    </Container>
  );
}
