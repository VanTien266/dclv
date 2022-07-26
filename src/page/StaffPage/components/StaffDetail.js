import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Box, Avatar, Typography, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";

import InfoProfile from "../../../components/CardProfile/InfoProfile";
import ProfileCardComp from "../../../components/CardProfile/ProfileCardComp";
import InfoButton from "../../../components/Button/InfoButton";
import staffApi from "../../../api/staffApi";

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: "16px",
  },
  contain: {},
  buttonProfile: {
    direction: "column",
  },
  infoTable: {},
  ProfileCard: {
    marginBottom: "60px",
    marginLeft: "25px",
  },
}));

function StaffDetail() {
  const classes = useStyles();
  const { id } = useParams();
  const [staff, setStaff] = useState({});

  useEffect(() => {
    let mounted = true;
    const fetchStaff = async () => {
      const response = await staffApi.getInfoById(id);
      if (mounted) {
        setStaff(response);
      }
    };
    fetchStaff();
    return () => {
      mounted = false;
    };
  }, [id]);
  console.log(staff);
  return (
    <Box className={classes.root}>
      <Grid container className={classes.contain} space={3}>
        <Grid
          item
          contain
          sm={3}
          md={3}
          xs={12}
          className={classes.buttonProfile}
        >
          <Grid item sm={12} md={12} xs={12} className={classes.ProfileCard}>
            <ProfileCardComp staff={staff} />
          </Grid>
          <Grid item sm={12} md={12} xs={12}>
            {/* <InfoButton  /> */}
          </Grid>
        </Grid>
        <Grid item contain sm={1} md={1}></Grid>
        <Grid item contain sm={6} md={6} xs={12} className={classes.infoTable}>
          <InfoProfile staff={staff} />
        </Grid>
        <Grid item contain sm={2} md={2}></Grid>
      </Grid>
    </Box>
  );
}

export default StaffDetail;
