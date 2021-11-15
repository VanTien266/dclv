import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import {
  BorderColor,
  Place,
  LocalPostOffice,
  LocalPhone,
} from "@material-ui/icons";

function CustomerInfo() {
  return (
    <Card>
      <CardHeader title="Thông tin khách hàng" />
      <CardContent>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={7}>
            <Typography variant="h6">Lưu Văn Tiến</Typography>
          </Grid>
          <Grid item xs={3}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <BorderColor />
              </Grid>
              <Grid item xs={9}>
                <Typography variant="body1">Ghi chú</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <Place />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="subtitle1">KTX khu B</Typography>
            <Typography variant="subtitle1">
              Đông Hòa-Dĩ An-Bình Dương
            </Typography>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <LocalPostOffice />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="subtitle1">
              tien.luu.van@hcmut.edu.vn
            </Typography>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <LocalPhone />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="subtitle1">0826755114</Typography>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Typography variant="h6">Người nhận</Typography>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={7}>
            <Typography variant="subtitle1">Lưu Văn Tiến</Typography>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <Place />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="subtitle1">KTX khu A</Typography>
            <Typography variant="subtitle1">
              KP6-Tp Thủ Đức-Tp Hồ Chí Minh
            </Typography>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <LocalPhone />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="subtitle1">01296755114</Typography>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CustomerInfo;
