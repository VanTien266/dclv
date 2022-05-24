import React, {useState, useEffect} from "react";
import { Typography, Grid, Container, Button, TextField } from "@material-ui/core";
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
import ChartOrderMonthly from './components/ChartOrderMonthly';

function DashBoard() {
  const classes = useStyles();
  
  const [date, setDate] = useState(new Date(Date.now()));
  // console.log('date today', new Date(Date.now()));
  let year = date.getFullYear();
  let month = date.getUTCMonth() + 1;
  const handleChangeDate = (event) => {
    setDate(new Date(event.target.value));
  };
  // console.log('date change', date);
  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5} md={5}>
            <Typography variant="h4">Tổng quan: Tháng {month}, {year}{" "}</Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Grid item className={classes.container}>
              <TextField
                id="begin-date"
                label="Chọn tháng"
                type="date"
                // type="datetime-local"
                maxDate={new Date()}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                value={date}
                onChange={handleChangeDate}
              />
            </Grid>
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
            <StaffTotalSale date={date}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.staffOrderComplete}>
            <StaffBillComplete date={date}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.staffRevenue}>
            <StaffRevenue date={date}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.RevenueProducts}>
            <FabricRollBillCompleted date={date}/>
          </Grid>
          <Grid item xs={12} md={6} lg={8} className={classes.Chart1}>
            <ChartFabricWarehouse />
          </Grid>

          <Grid item xs={12} md={6} lg={4} className={classes.ProductsChart}>
            <ChartBillStatus date={date}/>
          </Grid>

          <Grid item xs={12} md={6} lg={8} className={classes.Chart1}>
            <ChartFabricTypeSell date={date}/>
          </Grid>

          <Grid item xs={12} md={6} lg={4} className={classes.TopProducts}>
            <ChartOrderHandle date={date}/>
          </Grid>
          <Grid item xs={12} md={12} lg={12} className={classes.Chart1}>
            <ChartOrderMonthly date={date}/>
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
  container: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#F6F6F8",
    borderRadius: "5px",
    marginLeft: "10px",
    marginRight: "10px",
  },
  textField: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    width: 210,
  },
}));

export default DashBoard;
