import React, {useState, useEffect} from "react";
import { Typography, Grid, Container, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box';

import DateFilter from "../../components/DateFilter"
import SearchField from "../../components/SearchField";
import NotificationButton from "../../components/Button/NotificationButton";
import { Notifications } from "@material-ui/icons";

import StaffTotalSale from './components/StaffTotalSale';
import StaffBillComplete from './components/StaffBillComplete';
import StaffRevenue from './components/StaffRevenue';
import FabricRollBillCompleted from './components/FabricRollBillCompleted';
import ChartFabricTypeSell from './components/ChartFabricTypeSell';
import ChartOrderHandle from './components/ChartOrderHandle';
import ChartFabricWarehouse from './components/ChartFabricWarehouse';
import ChartBillStatus from './components/ChartBillStatus';

function DashBoard() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={2} md={2}>
            <Typography variant="h4">Tổng quan</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <DateFilter />
          </Grid>
          <Grid container item xs={12} sm={4} md={4} className={classes.notiSearch}>
            <Grid item xs={2} sm={2} md={2}>
              <NotificationButton />
            </Grid>
            <Grid item xs={10} sm={10} md={10}>
              <SearchField />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={3} className={classes.staffTotalSale}>
            <StaffTotalSale />
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.staffOrderComplete}>
            <StaffBillComplete />
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.staffRevenue}>
            <StaffRevenue />
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.RevenueProducts}>
            <FabricRollBillCompleted />
          </Grid>
          <Grid item xs={12} md={6} lg={8} className={classes.Chart1}>
            <ChartFabricWarehouse />
          </Grid>

          <Grid item xs={12} md={6} lg={4} className={classes.ProductsChart}>
            <ChartBillStatus />
          </Grid>

          <Grid item xs={12} md={6} lg={8} className={classes.Chart1}>
            <ChartFabricTypeSell />
          </Grid>

          <Grid item xs={12} md={6} lg={4} className={classes.TopProducts}>
            <ChartOrderHandle />
          </Grid>
        </Grid>
      </Container>
      {/* <Typography variant="h6">Tổng quan</Typography>
      <DateFilter /> */}
    </Box>
    
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // fontFamily: "'Roboto', sans-serif",
    // fontSize: "12px",
    // color: "#000040",
    // backgroundColor: "#F6F6F8",
    // borderRadius: "5px",
    // marginTop: "20px",
    // marginBottom: "20px",
    // paddingLeft: "5px",
    // display: "flex",
    // direction: "row",
    // alignItems: "center",
  },
  staffTotalSale:{
    //backgroundColor: '#C8FACD',
  },
  staffOrderComplete: {
    //backgroundColor: '#D0F2FF',
  },
  staffRevenue: {
    //backgroundColor: '#FFF7CD',
  },
  RevenueProducts: {
    //backgroundColor: '#FFE7D9',
  },
  Chart1: {
    //backgroundColor: '#A3A3A3',
  },
  notiSearch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default DashBoard;
