import { Grid, makeStyles, Typography, TextField } from "@material-ui/core";
import {
  Place,
  LocalPostOffice,
  LocalPhone,
  BorderColor,
} from "@material-ui/icons";
import React from "react";
const useStyles = makeStyles((theme) => ({
  title: {
    margin: "8px 0",
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
function CustomerInfo() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" className={classes.title}>
        Thông tin khách hàng
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography variant="body1">Người mua</Typography>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <Typography variant="h6">Lưu Văn Tiến</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <Place />
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body1">KTX khu B</Typography>
              <Typography variant="body1">Đông Hòa-Dĩ An-Bình Dương</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <LocalPostOffice />
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body1">tien.luu.van@hcmut.edu.vn</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <LocalPhone />
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body1">0826755114</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">Người nhận</Typography>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <Typography variant="h6">Lưu Văn Tiến</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <Place />
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body1">KTX Khu A</Typography>
              <Typography variant="body1">
                Kp 6-Tp Thủ Đức-Tp Hồ Chí Minh
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <LocalPhone />
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body1">01296755114</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={1}>
              <BorderColor />
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">Ghi chú</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                label="Nội dung"
                multiline
                rows={7}
                // size="medium"
                defaultValue="Đây là ghi chú"
                variant="outlined"
                className={classes.note}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default CustomerInfo;
