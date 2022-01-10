import React, {useState, useEffect} from 'react'

import { Icon } from '@iconify/react';
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils
import {fNumberCurrency} from "../../../utils/formatNumber";
import orderApi from "../../../api/orderApi";

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.dark,
  //backgroundColor: theme.palette.warning.lighter
  backgroundColor: "#FFF7CD"
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.warning.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.warning.dark, 0)} 0%, ${alpha(
    theme.palette.warning.dark,
    0.24
  )} 100%)`
}));

export default function StaffRevenue() {
  const [totalDeposit, setTotalDeposit] = useState([]);
  useEffect(() => {
    const fetTotalDeposit = async () => {
      try {
        const response = await orderApi.totalDeposit();
        console.log(response);
        setTotalDeposit(response);
      }catch (error) {
        console.log("Failed to fetch deposit", error);
      }
  }
    fetTotalDeposit();
  },[]);
  return (
    <RootStyle>
      <IconWrapperStyle> 
        <Icon icon="dashicons:money-alt" color="rgb(183, 129, 3)" width="40" height="40" />
      </IconWrapperStyle>
      <Typography variant="h4">{fNumberCurrency(totalDeposit)}</Typography>
      <Typography variant="h6" sx={{ opacity: 0.72 }}>
        Doanh thu
      </Typography>
    </RootStyle>
  );
}
