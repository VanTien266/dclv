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

function CustomerInfo(props) {
  const { bill } = props;

  return (
    <Card>
      <CardHeader title="Thông tin khách hàng" />
      <CardContent>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={7}>
            <Typography variant="h6">{bill?.clientID?.name}</Typography>
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
            <Typography variant="subtitle1">
              {bill?.clientID?.address}
            </Typography>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <LocalPostOffice />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="subtitle1">{bill?.clientID?.email}</Typography>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <LocalPhone />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="subtitle1">{bill?.clientID?.phone}</Typography>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Typography variant="h6">Người nhận</Typography>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={7}>
            <Typography variant="subtitle1">
              {bill?.orderID?.receiverName}
            </Typography>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <Place />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="subtitle1">
              {bill?.orderID?.receiverAddress}
            </Typography>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <LocalPhone />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="subtitle1">
              {bill?.orderID?.receiverPhone}
            </Typography>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CustomerInfo;
