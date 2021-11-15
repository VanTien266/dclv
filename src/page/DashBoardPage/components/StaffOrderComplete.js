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


//import { Icon } from '@iconify/react';
//import androidFilled from '@iconify/icons-ant-design/android-filled';
// material
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils
//import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  //padding: 10,#C8FACD
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.info.lighter
  //backgroundColor: "#C8FACD"
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
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 1352831;

export default function StaffOrderComplete() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        {/* <Icon icon={androidFilled} width={24} height={24} /> */}
      </IconWrapperStyle>
      <Typography variant="h4">1234</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Order Complete
      </Typography>
    </RootStyle>
  );
}
