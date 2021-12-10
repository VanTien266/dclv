import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Box, Avatar, Typography, Button } from "@material-ui/core";

import InfoProfile from "../../components/CardProfile/InfoProfile";
import ProfileCardComp from "../../components/CardProfile/ProfileCardComp";
import InfoButton from "../../components/Button/InfoButton";

const useStyles = makeStyles(() => ({
    root: {
        paddingLeft: "16px",
    },
    contain: {
        
    },
    buttonProfile: {
        direction: "column",
        
    },
    infoTable:{

    },
    ProfileCard: {
        marginBottom: "60px",
        marginLeft: "25px"
    }
}));

function InfoPage() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container className={classes.contain} space={3} >
                <Grid item contain sm={3} md={3} xs={12} className={classes.buttonProfile}>
                    <Grid item sm={12} md={12} xs={12} className={classes.ProfileCard}>
                        <ProfileCardComp />
                    </Grid>

                    <Grid item sm={12} md={12} xs={12}>
                        <InfoButton />
                    </Grid>
                    
                </Grid>

                <Grid item contain sm={1} md={1}>
                </Grid>

                <Grid item contain sm={6} md={6} xs={12} className={classes.infoTable}>
                    <InfoProfile />
                </Grid>

                <Grid item contain sm={2} md={2}>
                </Grid>
            </Grid>
        </Box>
        
    )
}

export default InfoPage
