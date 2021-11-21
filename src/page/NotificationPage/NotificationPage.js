// import React from "react";
// import { Typography, Grid, Container, Button } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles'
// import Box from '@material-ui/core/Box';

// import DateFilter from "../../components/DateFilter"
// import SearchField from "../../components/SearchField";
// import NotificationButton from "../../components/Button/NotificationButton";

// function NotificationPage() {
//   const classes = useStyles();
//   return (
//     <Box className={classes.root}>
//       <Container maxWidth="xl">
        
//         <Grid container spacing={3}>
//             <Grid item xs={12} sm={2} md={2}>
//             </Grid>
//             <Grid item xs={12} sm={6} md={6}>
//                 <DateFilter />
//             </Grid>
//             <Grid container item xs={12} sm={4} md={4}>
//                 <Grid item xs={2} sm={2} md={2} className={classes.verticalCenter}>
//                     <NotificationButton />
//                 </Grid>
//                 <Grid item xs={10} sm={10} md={10} className={classes.verticalCenter}>
//                     <SearchField />
//                 </Grid>
//             </Grid>
            
//         </Grid>
//       </Container>
//     </Box>
    
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // fontFamily: "'Roboto', sans-serif",
//     // fontSize: "12px",
//     // color: "#000040",
//     // backgroundColor: "#F6F6F8",
//     // borderRadius: "5px",
//     // marginTop: "20px",
//     // marginBottom: "20px",
//     // paddingLeft: "5px",
//     // display: "flex",
//     // direction: "row",
//     // alignItems: "center",
//   },
//   staffTotalSale:{
//     backgroundColor: '#C8FACD',
//   },
//   staffOrderComplete: {
//     backgroundColor: '#D0F2FF',
//   },
//   staffRevenue: {
//     backgroundColor: '#FFF7CD',
//   },
//   RevenueProducts: {
//     backgroundColor: '#FFE7D9',
//   },
//   Chart1: {
//     backgroundColor: '#A3A3A3',
//   },
//   verticalCenter: {
//     direction: "row",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// export default NotificationPage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import NotificationsList from "./NotificationComponent/NotificationList";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import SearchField from "../../components/SearchField";
import NotificationButton from "../../components/Button/NotificationButton";
import DateFilter from "../../components/DateFilter"

const useStyles = makeStyles(() => ({
  root: {
    padding: "16px",
  },
  contain: {
    marginBottom: "16px"
  },
  notificationList: {
    marginTop: "16px",
  },
  notiSearch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
function NotificationPage() {
  const classes = useStyles();
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    let mounted = true;

    const fetchNotification = () => {
      axios.get("notificationsstaff").then((response) => {
        if (mounted) {
          setNotification(response.data.notificationStaff);
          console.log(response.data.notificationStaff);
        }
      });
    };

    fetchNotification();

    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div className={classes.root}>
      <Grid container className={classes.contain}>
        <Grid item sm={6} md={8}>
          <DateFilter />
        </Grid>
        <Grid item sm={6} md={4} className={classes.notiSearch}>
          <Grid item xs={2}>
            <NotificationButton />
          </Grid>
          <Grid item xs={10}>
            <SearchField />
          </Grid>
        </Grid>
      </Grid>
      {notification && (
        <NotificationsList className={classes.notificationList} notification={notification} />
      )}
    </div>
  );
}

export default NotificationPage;
