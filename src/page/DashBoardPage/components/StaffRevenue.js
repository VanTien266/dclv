// import React, {useState} from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import { Box, Grid, Container, Typography } from '@material-ui/core';
// import clsx from "clsx";

// const useStyles = makeStyles((theme) => ({
//   root: {
    
//   },
// }));
// function StaffTotalSale() {
//     const classes = useStyles();
//     return (
//        <Typography>StaffTotalSale</Typography>
//     )
// }

// export default StaffTotalSale


import { Icon } from '@iconify/react';
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils
//import { fShortenNumber } from '../../../utils/formatNumber';

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
  return (
    <RootStyle>
      <IconWrapperStyle> 
        <Icon icon="dashicons:money-alt" color="rgb(183, 129, 3)" width="40" height="40" />
      </IconWrapperStyle>
      <Typography variant="h4">120.000.000</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Doanh thu
      </Typography>
    </RootStyle>
  );
}
