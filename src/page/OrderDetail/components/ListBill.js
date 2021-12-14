import react, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Container } from "@material-ui/core";
import Bill from "./Bill";
import billApi from "../../../api/billApi";

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
    padding: "0",
  },
  productList: {
    justifyContent: "center",
    direction: "row",
    display: "flex",
    alignItems: "center",
  },
});
export default function ListBill(props) {
  const { detailBill } = props;
  const classes = useStyles();
  const [listBill, setListBill] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchListBill = async (data) => {
      const response = await billApi.getListByIds(data);
      if (mounted) {
        setListBill(response);
      }
    };
    fetchListBill({ ids: detailBill });

    return () => {
      mounted = false;
    };
  }, [detailBill]);
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
        {listBill.length > 0
          ? listBill.map((item, index) => <Bill key={index} bill={item} />)
          : null}
      </Container>
    </Container>
  );
}
