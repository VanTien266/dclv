import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { AccountCircle, BorderColor, CalendarToday } from "@material-ui/icons";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  item: {
    marginBottom: theme.spacing(1),
  },
  note: {
    width: "100%",
    marginTop: theme.spacing(2),
    backgroundColor: "#fff",
    height: "100%",
    "& label": {
      color: theme.palette.primary.main,
    },
    "& .MuiInputBase-root": {
      ...theme.typography.subtitle1,
    },
  },
}));
function AnotherInfo(props) {
  const { bill } = props;
  console.log("Bill", bill);
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title="Thông tin khác" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Grid container spacing={2} className={classes.item}>
              <Grid item xs={2}>
                <AccountCircle />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body1">Nhân viên phụ trách</Typography>
                <Typography variant="subtitle1">
                  {bill?.salesmanID?.name}
                </Typography>
                <Typography variant="subtitle1">
                  {bill?.salesmanID?.phone}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.item}>
              <Grid item xs={2}>
                <CalendarToday />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body1">Ngày xuất</Typography>
                <Typography variant="subtitle1">
                  {moment(bill.exportBillTime)
                    .subtract(1, "days")
                    .format("DD/MM/YYYY")}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.item}>
              <Grid item xs={2}>
                <AccountCircle />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body1">Nhân viên giao hàng</Typography>
                <Typography variant="subtitle1">
                  {bill?.shipperID?.name}
                </Typography>
                <Typography variant="subtitle1">
                  {bill?.shipperID?.phone}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <Grid container>
              <Grid item xs={2}>
                <BorderColor />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body1">Ghi chú</Typography>
                <TextField
                  label="Nội dung"
                  multiline
                  rows={7}
                  // size="medium"
                  defaultValue={bill?.note}
                  variant="outlined"
                  className={classes.note}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default AnotherInfo;
