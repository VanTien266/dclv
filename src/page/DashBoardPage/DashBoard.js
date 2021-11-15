import React from "react";
import { Typography, Grid, Container, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box';

import DateFilter from "../../components/DateFilter"
import SearchField from "../../components/SearchField";
import { Notifications } from "@material-ui/icons";

import StaffTotalSale from './components/StaffTotalSale'
import StaffOrderComplete from './components/StaffOrderComplete'
import StaffRevenue from './components/StaffRevenue'
import RevenueProducts from './components/RevenueProducts'
import ProductsChart from './components/ProductsChart'
import TopProducts from './components/TopProducts'
import RevenueChart1 from './components/RevenueChart1'
import RevenueChart2 from './components/RevenueChart2'


function DashBoard() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={2} md={2}>
            <Typography variant="h5">Tổng quan</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <DateFilter />
          </Grid>
          <Grid container item xs={12} sm={4} md={4}>
            <Grid item xs={12} sm={2} md={2} className={classes.verticalCenter}>
              <Button>
                <Notifications fontSize="large" />
              </Button>
            </Grid>
            <Grid item xs={12} sm={10} md={10} className={classes.verticalCenter}>
              <SearchField />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={3} className={classes.staffTotalSale}>
            <StaffTotalSale />
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.staffOrderComplete}>
            <StaffOrderComplete />
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.staffRevenue}>
            <StaffRevenue />
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.RevenueProducts}>
            <RevenueProducts />
          </Grid>
          <Grid item xs={12} md={6} lg={8} className={classes.Chart1}>
            <RevenueChart1 />
          </Grid>

          <Grid item xs={12} md={6} lg={4} className={classes.ProductsChart}>
            <ProductsChart />
          </Grid>

          <Grid item xs={12} md={6} lg={8} className={classes.Chart1}>
            <RevenueChart2 />
          </Grid>

          <Grid item xs={12} md={6} lg={4} className={classes.TopProducts}>
            <TopProducts />
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
  verticalCenter: {
    direction: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default DashBoard;
